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
 *  - Unlimited AI tutor       → src/app/api/ai/explain/route.ts (FREE_LIMITS.aiExplanationsPerDay)
 *  - Advanced analytics       → the Six Sigma analytics surface (role check + UpgradeCTA)
 *  - Priority support         → support routing / claim
 *
 * (The site is ad-free, so "ad-free" is no longer a Premium differentiator.)
 */

export type UserRole = 'FREE' | 'PREMIUM' | 'TEACHER' | 'ADMIN'

/**
 * Whether a role gets the unlocked Premium experience. ADMIN is always treated
 * as premium; TEACHER is a separate track and is NOT premium here.
 */
export function isPremiumRole(role?: string | null): boolean {
  return role === 'PREMIUM' || role === 'ADMIN'
}

/**
 * A *paid* account: premium students OR teachers (plus ADMIN). Use this for
 * perks meant for anyone on a paid plan — e.g. advanced analytics — where a
 * teacher should have access even though they aren't on the PREMIUM student plan.
 */
export function isPaidRole(role?: string | null): boolean {
  return role === 'PREMIUM' || role === 'TEACHER' || role === 'ADMIN'
}

/**
 * Admin "View as…" override. An ADMIN can preview the site as a FREE or PREMIUM
 * user by setting this cookie (see the profile menu toggle). It is ONLY honored
 * when the real session role is ADMIN — a forged cookie from any other user is
 * ignored, on both client and server. The number of diagnostic study plans a
 * free user gets before Premium is required also lives here.
 */
export const VIEW_AS_COOKIE = 'mondo_view_as'

/**
 * Free users get a personalized study plan for this many diagnostics.
 *
 * This was 1, which put the gate directly on the loop the product instructs
 * users to run — the results screen tells them to review the recommended
 * modules, retake the diagnostic, and "repeat until you're scoring 4+". They hit
 * the paywall on iteration two. Observed behaviour matched exactly: 1,811
 * students took a diagnostic and averaged 1.4 each, while only 281 ever opened a
 * lesson.
 *
 * The retake cycle is the core free experience and the thing that makes the
 * product work; Premium should gate depth (AI tutor, advanced analytics), not
 * the loop itself.
 */
export const FREE_DIAGNOSTIC_PLANS = 5

/**
 * Is paid checkout actually configured? When it isn't, "Upgrade to Premium"
 * leads to a 503, so any paywall is pure blockage with no way through and no
 * revenue upside. Gates consult this and stay open until Stripe is live.
 */
export function checkoutIsConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PREMIUM_PRICE_ID)
}

/**
 * Resolve the *effective* role: an ADMIN with a valid View-as override sees that
 * role; everyone else sees their real role. Pure — callable on client or server.
 */
export function resolveEffectiveRole(realRole?: string | null, viewAs?: string | null): string {
  if (realRole === 'ADMIN' && (viewAs === 'FREE' || viewAs === 'PREMIUM')) return viewAs
  return realRole ?? 'FREE'
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
  'Unlimited AI tutor explanations (free plan: 5 per day)',
  'Advanced performance analytics — see exactly which topics are costing you points, with mastery and consistency trends over time',
  'Priority email support',
]

/** Monthly / annual price points shown on the pricing page (USD). */
export const PREMIUM_PRICING = {
  monthly: 9.99,
  annual: 7.99,
} as const
