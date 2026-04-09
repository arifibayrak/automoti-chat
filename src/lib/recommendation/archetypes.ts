import type { UserProfile } from './types';

export interface Archetype {
  id: string;
  label: string;
  description: string;
  preferredTypes: string[];
  preferredFuels: string[];
  minSeats?: number;
  minBoot?: number;
  minHP?: number;
  maxBudget?: number;
  minBudget?: number;
  transmission?: string;
  drivetrain?: string;
  usagePatterns: string[];
}

export const ARCHETYPES: Archetype[] = [
  {
    id: 'urban_starter',
    label: 'Urban Starter',
    description: 'New driver, tight budget, city living',
    preferredTypes: ['City Car', 'Hatchback'],
    preferredFuels: ['Petrol', 'Electric', 'Hybrid'],
    maxBudget: 18000,
    usagePatterns: ['urban', 'commute'],
  },
  {
    id: 'commuter_saver',
    label: 'Commuter Saver',
    description: 'London commuter, low running costs, practical',
    preferredTypes: ['Hatchback', 'Saloon', 'City Car'],
    preferredFuels: ['Hybrid', 'Electric', 'Petrol'],
    usagePatterns: ['commute', 'urban'],
  },
  {
    id: 'first_family',
    label: 'First Family',
    description: 'Young family, child seats, mixed driving',
    preferredTypes: ['Hatchback', 'SUV', 'Estate', 'MPV'],
    preferredFuels: ['Petrol', 'Hybrid'],
    minSeats: 5,
    usagePatterns: ['family', 'mixed'],
  },
  {
    id: 'growing_family',
    label: 'Growing Family',
    description: 'Larger family, 7 seats, holiday luggage',
    preferredTypes: ['MPV', 'SUV', 'Estate'],
    preferredFuels: ['Diesel', 'Hybrid', 'Petrol'],
    minSeats: 7,
    minBoot: 400,
    usagePatterns: ['family', 'motorway'],
  },
  {
    id: 'dog_luggage',
    label: 'Dog & Luggage',
    description: 'Boot space is king, active lifestyle',
    preferredTypes: ['Estate', 'SUV', 'MPV'],
    preferredFuels: ['Petrol', 'Diesel', 'Hybrid'],
    minBoot: 500,
    usagePatterns: ['mixed', 'family'],
  },
  {
    id: 'mile_eater',
    label: 'Mile Eater',
    description: 'High motorway mileage, refined, fuel-efficient',
    preferredTypes: ['Saloon', 'Estate', 'SUV'],
    preferredFuels: ['Diesel', 'Hybrid'],
    usagePatterns: ['motorway', 'commute'],
  },
  {
    id: 'comfort_cruiser',
    label: 'Comfort Cruiser',
    description: 'Comfort first, automatic, easy to drive',
    preferredTypes: ['SUV', 'MPV', 'Saloon'],
    preferredFuels: ['Petrol', 'Hybrid', 'Diesel'],
    transmission: 'auto',
    usagePatterns: ['mixed', 'urban'],
  },
  {
    id: 'low_stress_auto',
    label: 'Low-stress Auto',
    description: 'Nervous driver, auto only, urban use',
    preferredTypes: ['Hatchback', 'SUV', 'City Car'],
    preferredFuels: ['Petrol', 'Hybrid', 'Electric'],
    transmission: 'auto',
    maxBudget: 25000,
    usagePatterns: ['urban', 'commute'],
  },
  {
    id: 'rural_allweather',
    label: 'Rural All-weather',
    description: 'Country roads, AWD, durable, practical',
    preferredTypes: ['SUV', 'Estate', 'Pickup'],
    preferredFuels: ['Diesel', 'Petrol', 'Hybrid'],
    drivetrain: 'AWD',
    usagePatterns: ['mixed', 'motorway'],
  },
  {
    id: 'smart_tech',
    label: 'Smart Tech',
    description: 'EV or Hybrid enthusiast, connected, modern',
    preferredTypes: ['Hatchback', 'SUV', 'Saloon', 'City Car (EV)'],
    preferredFuels: ['Electric', 'Hybrid'],
    usagePatterns: ['commute', 'urban', 'mixed'],
  },
  {
    id: 'premium_daily',
    label: 'Premium Daily',
    description: 'Refined cabin, premium brand, daily driver',
    preferredTypes: ['Saloon', 'SUV', 'Coupe'],
    preferredFuels: ['Petrol', 'Hybrid', 'Diesel'],
    minBudget: 35000,
    usagePatterns: ['commute', 'motorway', 'mixed'],
  },
  {
    id: 'drivers_car',
    label: "Driver's Car",
    description: 'Sporty, performance-focused, engaging to drive',
    preferredTypes: ['Coupe', 'Sports Car', 'Hatchback', 'Saloon'],
    preferredFuels: ['Petrol'],
    minHP: 200,
    usagePatterns: ['mixed', 'motorway'],
  },
];

export function matchArchetype(profile: UserProfile): Archetype {
  const scores = ARCHETYPES.map((a) => {
    let score = 0;

    if (profile.budget_max) {
      if (a.maxBudget && profile.budget_max <= a.maxBudget) score += 2;
      if (a.minBudget && profile.budget_max >= a.minBudget) score += 2;
      if (!a.maxBudget && !a.minBudget) score += 1;
    }

    if (profile.seats_required && a.minSeats) {
      if (profile.seats_required >= a.minSeats) score += 2;
    }

    if (profile.primary_usage) {
      if (a.usagePatterns.includes(profile.primary_usage)) score += 3;
    }

    if (profile.fuel_preference && profile.fuel_preference !== 'any') {
      if (a.preferredFuels.includes(profile.fuel_preference)) score += 2;
    }

    if (profile.transmission && a.transmission) {
      if (profile.transmission === a.transmission) score += 2;
    }

    if (profile.boot_min && a.minBoot) {
      if (profile.boot_min >= a.minBoot) score += 1;
    }

    if (profile.performance_priority && a.minHP) score += 2;
    if (profile.luxury_priority && a.minBudget) score += 2;

    return { archetype: a, score };
  });

  scores.sort((a, b) => b.score - a.score);
  return scores[0].archetype;
}
