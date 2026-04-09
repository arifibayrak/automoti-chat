import type { Car, UserProfile, Recommendation, RecommendationResult } from './types';
import { hardFilter } from './hard-filter';
import { scoreCars } from './scorer';
import { matchArchetype } from './archetypes';
import { buildDealMeter, rateDeal } from './deal-meter';
import carsData from '@/data/cars.json';

const cars = carsData as unknown as Car[];

// Build cohort index once at module load
buildDealMeter(cars);

export function runRecommendationEngine(profile: UserProfile, topN = 5): RecommendationResult {
  // Layer 1: hard filter
  const { passed, rejectedCount } = hardFilter(cars, profile);

  // Match archetype
  const archetype = matchArchetype(profile);

  // Layer 2: weighted score
  const scored = scoreCars(passed, profile, archetype);
  scored.sort((a, b) => b.score - a.score);

  // Deduplicate: keep only the highest-scoring trim per make+model
  const seen = new Set<string>();
  const deduped = scored.filter(({ car }) => {
    const key = `${car.make}|${car.model}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const top = deduped.slice(0, topN);

  // Deal meter + final shape
  const recommendations: Recommendation[] = top.map(({ car, score, reasons, breakdown }) => ({
    car,
    score,
    breakdown: breakdown as unknown as import('./types').ScoreBreakdown,
    reasons,
    deal: rateDeal(car),
    archetype: archetype.id,
  }));

  return {
    recommendations,
    archetype: archetype.id,
    archetypeLabel: archetype.label,
    totalFiltered: rejectedCount,
    totalScored: passed.length,
  };
}
