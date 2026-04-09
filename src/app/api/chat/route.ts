import {
  createUIMessageStream,
  createUIMessageStreamResponse,
  streamText,
  convertToModelMessages,
  type UIMessage,
} from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { runRecommendationEngine } from '@/lib/recommendation/engine';
import type { UserProfile } from '@/lib/recommendation/types';

export const maxDuration = 60;

const TIER1_FIELDS = ['budget_max', 'seats_required', 'primary_usage', 'fuel_preference', 'ulez_required', 'parking_size'] as const;

function isTier1Complete(profile: UserProfile): boolean {
  const confidence = profile.confidence ?? {};
  return TIER1_FIELDS.every((f) => (confidence[f] ?? 0) >= 0.7);
}

function extractProfile(text: string): UserProfile | null {
  const match = text.match(/<profile>([\s\S]*?)<\/profile>/i);
  if (!match) return null;
  try {
    return JSON.parse(match[1].trim()) as UserProfile;
  } catch {
    return null;
  }
}

function extractSuggestions(text: string): string[] | null {
  const match = text.match(/<suggestions>([\s\S]*?)<\/suggestions>/i);
  if (!match) return null;
  try {
    const parsed = JSON.parse(match[1].trim());
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

const SYSTEM_PROMPT = `You are Automoti's AI car advisor for the UK. You have two modes — read the user's intent and choose the right one every turn.

---

## MODE 1: Q&A (learning, curious, exploring)

Triggered when the user asks a question about any car topic: fuel types, insurance groups, MOT, ULEZ, running costs, body styles, towing, EVs, depreciation, VED, finance, etc.

Rules:
- Answer directly. Lead with the fact they asked for.
- 2–4 sentences max. Plain British English prose.
- No bullet lists unless the question specifically calls for a comparison or list.
- Do NOT pivot to "want me to help you find a car?" at the end. Wait for them to ask.
- Do NOT give unsolicited opinions or recommendations ("I'd suggest…", "You should consider…").
- One useful follow-on fact is fine if it genuinely adds context — nothing more.

---

## MODE 2: Car Search (finding a car)

Triggered when the user signals they want a car recommendation: "help me find a car", "looking for a SUV", "what should I buy", "recommend something", etc.

Profile fields to collect (Tier 1 required):
- budget_max: number (£) — the upper limit
- budget_min: number (£) — set ONLY when the user gives a range like "£7k–£12k" or "between £8k and £15k"; leave null if only a maximum is stated (e.g. "under £20k")
- seats_required: number
- primary_usage: "commute" | "family" | "motorway" | "urban" | "mixed"
- fuel_preference: "Electric" | "Hybrid" | "Petrol" | "Diesel" | "any"
- ulez_required: boolean
- parking_size: "street" | "small_garage" | "large_garage" | "driveway"

Tier 2: transmission ("auto"/"manual"), safety_priority, household
Tier 3: brand_preferences (string[]), luxury_priority, performance_priority

Rules:
- One question per turn — the most important missing Tier 1 field.
- 2–3 sentences max. Make one useful inference out loud ("Two kids → already thinking 5 seats").
- Use £ and UK terms (boot, ULEZ, MOT, VED, motorway).
- When all Tier 1 fields reach confidence ≥ 0.7, write a 2-sentence summary then say "Let me search the listings…"
- Never ask more questions after Tier 1 is complete.

---

## Ambiguous intent

If unclear whether the user wants info or a car, ask once: "Are you looking to find a car, or just curious about [topic]?"

---

## Semantic structure (both modes)

1. Lead with the direct answer to what was asked — never preamble.
2. One follow-on fact if genuinely useful.
3. Stop. Do not summarise, pad, or restate.

---

## Output format (every reply — hidden from user)

Always append on their own line at the end:
<profile>{ "budget_max": null, "budget_min": null, "confidence": { "budget_max": 0, "budget_min": 0 } }</profile>
<suggestions>["Chip 1", "Chip 2", "Chip 3"]</suggestions>

Suggestion chips — always exactly 3, in this order:
1. A direct answer option (e.g. "Under £15k", "Yes, need ULEZ", "Automatic please")
2. Another direct answer option (a different plausible answer)
3. A learning follow-up question (something they might want to understand, e.g. "What is ULEZ?", "Hybrid vs electric?", "How do insurance groups work?")

Keep chips short: 3–6 words each.`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const stream = createUIMessageStream({
    execute: async ({ writer }) => {
      const result = streamText({
        model: anthropic('claude-sonnet-4-6'),
        system: SYSTEM_PROMPT,
        messages: await convertToModelMessages(messages),
        onFinish: ({ text }) => {
          const profile = extractProfile(text);

          // Write suggestions
          const suggestions = extractSuggestions(text);
          if (suggestions) {
            writer.write({
              type: 'data-suggestions',
              id: 'sug',
              data: suggestions,
            });
          }

          // Write recommendations when Tier 1 complete
          if (profile && isTier1Complete(profile)) {
            try {
              const engineResult = runRecommendationEngine(profile, 5);
              writer.write({
                type: 'data-recommendations',
                id: 'recs',
                data: engineResult,
              });
            } catch {
              // Engine failed silently — conversation still works
            }
          }
        },
      });

      writer.merge(result.toUIMessageStream());
    },
  });

  return createUIMessageStreamResponse({ stream });
}
