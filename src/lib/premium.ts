/**
 * Single source of truth for what Premium ($9.99/mo) actually unlocks, plus the
 * free-tier limits the gates enforce.
 *
 * The /pricing and /premium pages import PREMIUM_BENEFITS so the marketing copy
 * can NEVER drift from what is really gated. (The funnel previously advertised
 * several already-free features — diagnostics, streaks, achievements — as
 * "premium"; this module exists so the promised list and the enforced gates stay
 * in lockstep.)
 *
 * Keep PREMIUM_BENEFITS in sync with the actual gates:
 *  - Ad-free                  → src/components/ad-banner.tsx (role check)
 *  - Unlimited AI tutor       → src/app/api/ai/explain/route.ts (FREE_LIMITS.aiExplanationsPerDay)
 *  - Advanced analytics       → the Six Sigma analytics surface (role check + UpgradeCTA)
 *  - Priority support         → support routing / claim
 */

export type UserRole = 'FREE' | 'PREMIUM' | 'TEACHER' | 'ADMIN'

/**
 * Whether a role gets the unlocked Premium experience. ADMIN is always treated
 * as premium; TEACHER is a separate track and is NOT premium here.
 */
export function isPremiumRole(role?: string | null): boolean {
  return role === 'PREMIUM' || role === 'ADMIN'
}

/** Free-tier limits enforced by the premium gates. */
export const FREE_LIMITS = {
  /** AI tutor explanations a FREE user may request per UTC day (premium = unlimited). */
  aiExplanationsPerDay: 5,
} as const

/**
 * The genuine, currently-enforced premium benefits. Rendered verbatim on the
 * pricing and premium pages. Every line here MUST correspond to a real gate —
 * do not add aspirational items.
 */
export const PREMIUM_BENEFITS: readonly string[] = [
  'Ad-free experience across the entire site',
  'Unlimited AI tutor explanations (free plan: 5 per day)',
  'Advanced performance analytics — Six Sigma quality reports, control charts, and DPMO trends',
  'Priority email support',
]

/** Monthly / annual price points shown on the pricing page (USD). */
export const PREMIUM_PRICING = {
  monthly: 9.99,
  annual: 7.99,
} as const
