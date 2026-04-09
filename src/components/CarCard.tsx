"use client";

import { useState } from 'react';
import type { Recommendation } from '@/lib/recommendation/types';

const DEAL_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  green: { bg: 'bg-green-500/15', text: 'text-green-400', dot: 'bg-green-400' },
  lime:  { bg: 'bg-lime-500/15',  text: 'text-lime-400',  dot: 'bg-lime-400'  },
  gray:  { bg: 'bg-white/10',     text: 'text-white/50',  dot: 'bg-white/30'  },
  amber: { bg: 'bg-amber-500/15', text: 'text-amber-400', dot: 'bg-amber-400' },
  red:   { bg: 'bg-red-500/15',   text: 'text-red-400',   dot: 'bg-red-400'   },
};

const BREAKDOWN_LABELS: Record<string, { label: string; weight: number }> = {
  usage_fit:     { label: 'Usage fit',   weight: 0.28 },
  cost_fit:      { label: 'Cost fit',    weight: 0.20 },
  size_fit:      { label: 'Size',        weight: 0.15 },
  comfort:       { label: 'Comfort',     weight: 0.12 },
  features:      { label: 'Features',    weight: 0.10 },
  environment:   { label: 'Eco',         weight: 0.05 },
  brand_fit:     { label: 'Brand',       weight: 0.05 },
  archetype_fit: { label: 'Profile fit', weight: 0.05 },
};

export function CarCard({ rec }: { rec: Recommendation }) {
  const { car, score, breakdown, deal } = rec;
  const [showBreakdown, setShowBreakdown] = useState(false);
  const ds = DEAL_STYLES[deal.color];
  const pct = Math.round(score * 100);

  const price = car.price
    ? `£${car.price.toLocaleString('en-GB')}`
    : null;

  const miles = car.miles
    ? `${car.miles.toLocaleString('en-GB')} mi`
    : null;

  return (
    <div className="rounded-2xl bg-[#1a1a1a] border border-white/8 overflow-hidden flex flex-col">
      {/* Photo */}
      {car.photo_url && (
        <div className="aspect-[16/9] w-full overflow-hidden bg-white/5">
          <img
            src={car.photo_url}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-4 flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-white font-medium text-sm font-['Inter'] leading-tight">
              {car.year} {car.make} {car.model}
            </p>
            {car.variant && (
              <p className="text-white/40 text-xs font-['Inter'] mt-0.5 leading-tight">
                {car.variant}
              </p>
            )}
          </div>
          <span className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-['Inter'] ${ds.bg} ${ds.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${ds.dot}`} />
            {deal.label}
          </span>
        </div>

        {/* Price + meta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {price && (
            <span className="text-white text-base font-semibold font-['Inter']">{price}</span>
          )}
          {miles && (
            <span className="text-white/40 text-xs font-['Inter']">{miles}</span>
          )}
          {car.fuel_type && (
            <span className="text-white/40 text-xs font-['Inter']">{car.fuel_type}</span>
          )}
          {car.transmission && (
            <span className="text-white/40 text-xs font-['Inter']">{car.transmission}</span>
          )}
          {car.city && (
            <span className="text-white/30 text-xs font-['Inter']">{car.city}</span>
          )}
        </div>

        {/* Score bar */}
        <button
          type="button"
          onClick={() => setShowBreakdown((v) => !v)}
          className="w-full flex items-center gap-2 group"
        >
          <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#d4a847] transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-white/50 text-xs font-['Inter'] tabular-nums w-8 text-right">{pct}%</span>
          <span className="text-white/30 text-xs font-['Inter'] group-hover:text-white/50 transition-colors">
            {showBreakdown ? '▲' : '▼'}
          </span>
        </button>

        {showBreakdown && breakdown && (
          <div className="bg-black/20 rounded-xl p-3 space-y-1.5">
            <p className="text-white/30 text-[10px] font-['Inter'] uppercase tracking-wide mb-2">
              Match breakdown
            </p>
            {Object.entries(BREAKDOWN_LABELS).map(([key, { label, weight }]) => {
              const raw = breakdown[key as keyof typeof breakdown] ?? 0;
              const barPct = Math.round(raw * 100);
              const contribution = Math.round(raw * weight * 100);
              return (
                <div key={key} className="flex items-center gap-2">
                  <span className="text-white/40 text-[10px] font-['Inter'] w-20 flex-shrink-0">{label}</span>
                  <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-[#d4a847]/60" style={{ width: `${barPct}%` }} />
                  </div>
                  <span className="text-white/30 text-[10px] font-['Inter'] tabular-nums w-12 text-right">
                    {barPct}% × {Math.round(weight * 100)}% = {contribution}pts
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* View listing CTA */}
        {car.vdp_url && (
          <a
            href={car.vdp_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 text-[#d4a847] text-xs font-medium font-['Inter'] hover:opacity-80 transition-opacity"
          >
            View listing
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
