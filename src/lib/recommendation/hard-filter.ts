import type { Car, UserProfile } from './types';

export function hardFilter(cars: Car[], profile: UserProfile): { passed: Car[]; rejectedCount: number } {
  const passed: Car[] = [];
  let rejectedCount = 0;

  for (const car of cars) {
    const fail: string[] = [];

    if (profile.budget_max && car.price > profile.budget_max * 1.3) fail.push('price');
    if (profile.budget_min && car.price < profile.budget_min * 0.85) fail.push('price_min');

    if (profile.seats_required && car.seating_capacity < profile.seats_required) fail.push('seats');

    if (profile.ulez_required && !car.is_ulez_compliant) fail.push('ulez');

    if (profile.fuel_preference && profile.fuel_preference !== 'any') {
      const pref = profile.fuel_preference.toLowerCase();
      const fuel = (car.fuel_type ?? '').toLowerCase();
      if (!fuel.includes(pref) && !pref.includes(fuel)) fail.push('fuel');
    }

    if (profile.transmission === 'auto') {
      const tx = (car.transmission ?? '').toLowerCase();
      if (tx.includes('manual')) fail.push('transmission');
    }

    // High insurance gate when budget is tight
    if (profile.budget_max && profile.budget_max < 20000 && car.insurance_group_num > 35) {
      fail.push('insurance');
    }

    if (fail.length === 0) passed.push(car);
    else rejectedCount++;
  }

  return { passed, rejectedCount };
}
