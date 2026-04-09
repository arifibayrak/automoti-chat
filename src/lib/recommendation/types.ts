export interface Car {
  id: string;
  heading: string;
  vdp_url: string;
  price: number;
  miles: number;
  year: number;
  make: string;
  model: string;
  variant: string;
  body_type: string;
  drivetrain: string;
  fuel_type: string;
  transmission: string;
  doors: string;
  insurance_group: string;
  insurance_group_num: number;
  seating_capacity: number;
  is_ulez_compliant: boolean;
  exterior_color: string | null;
  num_owners: number | null;
  efficiency_combined_mpg: number;
  performance_power_bhp: number;
  photo_url: string | null;
  seller_name: string | null;
  city: string | null;
  source: string | null;
}

export interface UserProfile {
  // Tier 1
  budget_max?: number;
  seats_required?: number;
  primary_usage?: string;
  fuel_preference?: string;
  ulez_required?: boolean;
  parking_size?: string;
  // Tier 2
  transmission?: string;
  boot_min?: number;
  safety_priority?: boolean;
  household?: string;
  // Tier 3
  brand_preferences?: string[];
  luxury_priority?: boolean;
  ev_charging_access?: boolean;
  performance_priority?: boolean;
  confidence: Record<string, number>;
  archetype?: string;
}

export interface DealRating {
  label: 'Great deal' | 'Good value' | 'Fair price' | 'Slightly high' | 'Over-priced';
  color: 'green' | 'lime' | 'gray' | 'amber' | 'red';
  deviation: number;
  cohortSize: number;
}

export interface ScoreBreakdown {
  usage_fit: number;
  cost_fit: number;
  size_fit: number;
  comfort: number;
  features: number;
  environment: number;
  brand_fit: number;
  archetype_fit: number;
}

export interface Recommendation {
  car: Car;
  score: number;
  breakdown: ScoreBreakdown;
  reasons: string[];
  deal: DealRating;
  archetype: string;
}

export interface RecommendationResult {
  recommendations: Recommendation[];
  archetype: string;
  archetypeLabel: string;
  totalFiltered: number;
  totalScored: number;
}
