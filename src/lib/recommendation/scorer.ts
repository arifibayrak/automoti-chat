import type { Car, UserProfile, ScoreBreakdown } from './types';
import type { Archetype } from './archetypes';

const WEIGHTS = {
  usage_fit:    0.28,
  cost_fit:     0.20,
  size_fit:     0.15,
  comfort:      0.12,
  features:     0.10,
  environment:  0.05,
  brand_fit:    0.05,
  archetype_fit:0.05,
} as const;

const USAGE_TYPE_MAP: Record<string, string[]> = {
  commute:  ['Hatchback', 'Saloon', 'City Car', 'SUV'],
  urban:    ['City Car', 'Hatchback', 'SUV'],
  family:   ['SUV', 'MPV', 'Estate', 'Hatchback'],
  motorway: ['Saloon', 'Estate', 'SUV'],
  mixed:    ['SUV', 'Hatchback', 'Saloon', 'Estate', 'MPV'],
  towing:   ['SUV', 'Pickup', 'Estate'],
};

function clamp(v: number) { return Math.max(0, Math.min(1, v)); }

function usageFit(car: Car, profile: UserProfile): number {
  if (!profile.primary_usage) return 0.5;
  const types = USAGE_TYPE_MAP[profile.primary_usage] ?? [];
  if (types.includes(car.body_type)) return 1.0;
  if (types.some((t) => car.body_type?.toLowerCase().includes(t.toLowerCase()))) return 0.7;
  return 0.3;
}

function costFit(car: Car, profile: UserProfile): number {
  if (!profile.budget_max) return 0.6;
  const ratio = car.price / profile.budget_max;

  // Below budget_min: user explicitly stated a floor
  if (profile.budget_min && car.price < profile.budget_min) {
    const floorRatio = car.price / profile.budget_min;
    if (floorRatio < 0.7) return 0.2;
    return 0.45;
  }

  // Sweet spot is 70–100% of budget_max (in range = ideal)
  if (ratio <= 0.5) return 0.5;
  if (ratio <= 0.7) return 0.75;
  if (ratio <= 1.0) return 0.95;
  if (ratio <= 1.15) return 0.45;
  return 0.2;
}

function sizeFit(car: Car, profile: UserProfile): number {
  if (!profile.seats_required) return 0.7;
  const diff = car.seating_capacity - profile.seats_required;
  if (diff >= 2) return 1.0;
  if (diff >= 0) return 0.85;
  return 0.0;
}

function comfortFit(car: Car, profile: UserProfile): number {
  if (!profile.transmission) return 0.7;
  const tx = (car.transmission ?? '').toLowerCase();
  const isAuto = !tx.includes('manual');
  if (profile.transmission === 'auto' && isAuto) return 1.0;
  if (profile.transmission === 'auto' && !isAuto) return 0.1;
  return 0.7;
}

function featuresFit(car: Car, profile: UserProfile): number {
  const mpg = car.efficiency_combined_mpg ?? 30;
  const fuel = (car.fuel_type ?? '').toLowerCase();
  if (fuel.includes('electric')) return 1.0;
  if (fuel.includes('hybrid') && mpg > 50) return 0.9;
  if (mpg > 55) return 0.85;
  if (mpg > 40) return 0.65;
  if (mpg > 30) return 0.45;
  return 0.3;
}

function environmentFit(car: Car): number {
  const fuel = (car.fuel_type ?? '').toLowerCase();
  if (fuel.includes('electric')) return 1.0;
  if (fuel.includes('hybrid')) return 0.8;
  if (fuel.includes('petrol')) return 0.55;
  if (fuel.includes('diesel')) return 0.4;
  return 0.5;
}

function brandFit(car: Car, profile: UserProfile): number {
  if (!profile.brand_preferences?.length) return 0.5;
  return profile.brand_preferences.some((b) =>
    car.make?.toLowerCase().includes(b.toLowerCase())
  ) ? 1.0 : 0.2;
}

function archetypeFit(car: Car, archetype: Archetype): number {
  let s = 0; let n = 0;
  if (archetype.preferredTypes.length) {
    n++; s += archetype.preferredTypes.some((t) => car.body_type?.includes(t)) ? 1 : 0.2;
  }
  if (archetype.preferredFuels.length) {
    n++; s += archetype.preferredFuels.some((f) => car.fuel_type?.includes(f)) ? 1 : 0.2;
  }
  if (archetype.minHP) { n++; s += (car.performance_power_bhp ?? 0) >= archetype.minHP ? 1 : 0.3; }
  return n > 0 ? clamp(s / n) : 0.5;
}

export interface ScoredCar {
  car: Car;
  score: number;
  breakdown: ScoreBreakdown;
  reasons: string[];
}

export function scoreCars(cars: Car[], profile: UserProfile, archetype: Archetype): ScoredCar[] {
  return cars.map((car) => {
    const dims: ScoreBreakdown = {
      usage_fit:    usageFit(car, profile),
      cost_fit:     costFit(car, profile),
      size_fit:     sizeFit(car, profile),
      comfort:      comfortFit(car, profile),
      features:     featuresFit(car, profile),
      environment:  environmentFit(car),
      brand_fit:    brandFit(car, profile),
      archetype_fit:archetypeFit(car, archetype),
    };

    const score = (Object.keys(WEIGHTS) as (keyof typeof WEIGHTS)[]).reduce(
      (sum, k) => sum + dims[k] * WEIGHTS[k], 0
    );

    const reasons: string[] = [];
    if (dims.usage_fit > 0.85) reasons.push(`Good ${profile.primary_usage ?? 'all-round'} car`);
    if (dims.features > 0.85) reasons.push(`${Math.round(car.efficiency_combined_mpg)}mpg`);
    if (car.miles < 20000) reasons.push('Low mileage');
    if (car.num_owners === 1) reasons.push('One owner');

    return { car, score, breakdown: dims, reasons };
  });
}
