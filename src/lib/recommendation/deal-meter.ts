import type { Car, DealRating } from './types';

function median(values: number[]): number {
  if (!values.length) return 0;
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
}

let _cohorts: Map<string, number[]> | null = null;

export function buildDealMeter(cars: Car[]): void {
  _cohorts = new Map();
  for (const car of cars) {
    if (!car.price) continue;
    const key = `${car.make}|${car.model}|${car.year}`;
    if (!_cohorts.has(key)) _cohorts.set(key, []);
    _cohorts.get(key)!.push(car.price);
  }
}

export function rateDeal(car: Car): DealRating {
  if (!car.price || !_cohorts) return { label: 'Fair price', color: 'gray', deviation: 0, cohortSize: 0 };

  const key = `${car.make}|${car.model}|${car.year}`;
  const cohort = _cohorts.get(key) ?? [];
  const cohortSize = cohort.length;

  const med = cohortSize >= 2 ? median(cohort) : car.price;
  const deviation = (car.price - med) / med;

  if (deviation < -0.10) return { label: 'Great deal', color: 'green', deviation, cohortSize };
  if (deviation < -0.03) return { label: 'Good value', color: 'lime', deviation, cohortSize };
  if (deviation <= 0.03) return { label: 'Fair price', color: 'gray', deviation, cohortSize };
  if (deviation <= 0.10) return { label: 'Slightly high', color: 'amber', deviation, cohortSize };
  return { label: 'Over-priced', color: 'red', deviation, cohortSize };
}
