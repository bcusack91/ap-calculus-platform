/**
 * SAT scaled scoring — calibrated, convex, honest.
 *
 * Every SAT surface previously mapped percent-correct linearly onto the
 * 200-800 section scale (`200 + pct * 600`). The real digital SAT curve is
 * convex: the 700-800 band is gated by hard items, so a linear map ran
 * ~60-130 points high through the middle of the scale. This module replaces
 * that with a piecewise-linear curve (same pattern as mcat-scoring.ts)
 * anchored on two ground-truth calibration points from real students who took
 * our diagnostic AND a real College Board test:
 *
 *   ~60% correct -> real total ≈ 1030   (matched twice)
 *   ~88% correct -> real total ≈ 1330-1370 (center ~1345)
 *
 * Anchors (fraction correct on a section -> 200-800 scaled), interpolated
 * linearly between:
 *
 *   0%   -> 200
 *   50%  -> 480
 *   60%  -> 515   (x2 = 1030 total — ground truth #1, exact)
 *   70%  -> 565
 *   80%  -> 625
 *   88%  -> 672   (x2 = 1344 total — ground truth #2, inside 1330-1370)
 *   100% -> 800
 *
 * The steep 88->100 segment is deliberate: on the real exam the last ~130
 * points per section are earned almost entirely on hard-tier items, so only a
 * near-perfect run reaches them. These anchors assume the post-overhaul
 * diagnostic mix (majority real passage items in R&W, ~25-30% hard-tier items
 * in both sections) — the mix the calibration students were measured against,
 * adjusted for the added hard gating.
 *
 * It is still an ESTIMATE from a small sample, which is why every projection
 * should be shown as a range (see projectionRange), never a bare number.
 */

export type SATSection = 'reading-writing' | 'math'

/** Exported so tests can pin the calibration. Do not reorder; pct ascending. */
export const SAT_CURVE_ANCHORS: { pct: number; scaled: number }[] = [
  { pct: 0, scaled: 200 },
  { pct: 0.5, scaled: 480 },
  { pct: 0.6, scaled: 515 },
  { pct: 0.7, scaled: 565 },
  { pct: 0.8, scaled: 625 },
  { pct: 0.88, scaled: 672 },
  { pct: 1, scaled: 800 },
]

/** Convert a section's fraction-correct (0-1) to a 200-800 scaled score. */
export function satSectionScaled(fractionCorrect: number): number {
  const p = Math.max(0, Math.min(1, fractionCorrect))
  for (let i = 1; i < SAT_CURVE_ANCHORS.length; i++) {
    const lo = SAT_CURVE_ANCHORS[i - 1]
    const hi = SAT_CURVE_ANCHORS[i]
    if (p <= hi.pct) {
      const t = (p - lo.pct) / (hi.pct - lo.pct || 1)
      return Math.round(lo.scaled + t * (hi.scaled - lo.scaled))
    }
  }
  return 800
}

/** Total (400-1600) from the two sections' fractions correct. */
export function satTotal(rwFraction: number, mathFraction: number): number {
  return satSectionScaled(rwFraction) + satSectionScaled(mathFraction)
}

/**
 * How much evidence backs a projection. Callers decide the level (e.g. the
 * predictor's confidence tiers, or "one 36-question diagnostic" = medium).
 */
export type EvidenceLevel = 'low' | 'medium' | 'high'

const RANGE_HALF_WIDTH: Record<EvidenceLevel, number> = {
  high: 30,
  medium: 40,
  low: 50,
}

export interface ScoreRange {
  low: number
  high: number
}

/**
 * A projection range around a total score: ±40 by default, tightening to ±30
 * with high evidence and widening to ±50 with low. Clamped to the 400-1600
 * scale. A short diagnostic simply cannot resolve a score more finely than
 * this, and displaying a range says so.
 */
export function projectionRange(total: number, evidence: EvidenceLevel = 'medium'): ScoreRange {
  const half = RANGE_HALF_WIDTH[evidence]
  return {
    low: Math.max(400, Math.round(total) - half),
    high: Math.min(1600, Math.round(total) + half),
  }
}

/**
 * Measured sampling noise of the 36-question diagnostic screen, as a standard
 * deviation of the total score. A simulated student of fixed ability re-sat the
 * screen 400 times at 45/60/75% ability under two ability models (2026-09-25):
 * sd 73-82 every time. The screen samples only 36 of the ~98 questions a real
 * SAT asks, so it is roughly twice as noisy as a College Board sitting.
 * Anything comparing two diagnostics (growth views, placement) must use this,
 * not the College Board SEM of ~30.
 */
export const SAT_DIAGNOSTIC_SCORE_SD = 80

/**
 * The window a single 36-question diagnostic supports: ±1 sd, about two thirds
 * of re-sittings. (The practice-test evidence levels above describe full-length
 * forms and are much tighter.)
 */
export function diagnosticScreenRange(total: number): ScoreRange {
  return {
    low: Math.max(400, Math.round(total) - SAT_DIAGNOSTIC_SCORE_SD),
    high: Math.min(1600, Math.round(total) + SAT_DIAGNOSTIC_SCORE_SD),
  }
}

/**
 * Rough national percentile for a total score (mean ~1060, SD ~200, normal
 * approximation via an erf estimate). Clamped to 1-99. Ported from the score
 * predictor route so every surface reports the same figure.
 */
export function satPercentile(total: number): number {
  const zScore = (total - 1060) / 200
  const percentile = Math.round(
    50 * (1 + (zScore >= 0 ? 1 : -1) * Math.sqrt(1 - Math.exp(-2 * zScore * zScore / Math.PI))),
  )
  return Math.max(1, Math.min(99, percentile))
}

/* ------------------------------------------------------------------ */
/*  Module 2 routing (full-length practice tests)                      */
/* ------------------------------------------------------------------ */

/**
 * Which Module 2 a student was routed to on an adaptive full-length test.
 * Stored on SatTestAttempt.rwTier / mathTier; null = unrouted (mini tests,
 * diagnostics, attempts scored before routing-aware scoring, and a Module 2
 * that started before the routed form had been built).
 */
export type SatRoute = 'harder' | 'easier'

/**
 * Module 1 fraction correct at or above which the harder Module 2 is served
 * (the commonly cited digital-SAT threshold). test-generator re-exports it as
 * MODULE_2_ROUTING_THRESHOLD; it lives here so scoring never imports the
 * question banks.
 */
export const SAT_ROUTING_THRESHOLD = 0.7

/** The route a Module 1 tally earns. */
export function satRouteFor(m1Correct: number, m1Total: number): SatRoute {
  return m1Total > 0 && m1Correct / m1Total >= SAT_ROUTING_THRESHOLD ? 'harder' : 'easier'
}

/**
 * Harder route. A student here cleared ~70% of Module 1, so a low overall
 * fraction means the harder Module 2 went badly, not that the student is at
 * the bottom of the scale: the floor anchors sit above the unrouted curve
 * below 60%. From 60% up it is the unrouted curve exactly, so both ground-truth
 * pins hold (60% -> 515, 88% -> 672).
 */
export const SAT_HARDER_ROUTE_ANCHORS: { pct: number; scaled: number }[] = [
  { pct: 0, scaled: 200 },
  { pct: 0.35, scaled: 490 },
  { pct: 0.5, scaled: 505 },
  { pct: 0.6, scaled: 515 },
  { pct: 0.7, scaled: 565 },
  { pct: 0.8, scaled: 625 },
  { pct: 0.88, scaled: 672 },
  { pct: 1, scaled: 800 },
]

/**
 * Easier route: the unrouted curve through 60% (515), then 70% -> 555, up to
 * the ceiling at the top fraction this route can reach (see
 * satEasierRouteTopFraction). The easier form caps the reachable score, as on
 * the real exam.
 */
export const SAT_EASIER_ROUTE_ANCHORS: { pct: number; scaled: number }[] = [
  { pct: 0, scaled: 200 },
  { pct: 0.5, scaled: 480 },
  { pct: 0.6, scaled: 515 },
  { pct: 0.7, scaled: 555 },
]

/** Highest section score the easier route can produce. */
export const SAT_EASIER_ROUTE_CEILING = 630

/**
 * The best overall fraction a student routed to the easier Module 2 can reach:
 * the most Module 1 items they can get right while still under the routing
 * threshold, plus a perfect Module 2. About 0.83 for R&W (18/27 + 27/27) and
 * 0.84 for Math (15/22 + 22/22).
 */
export function satEasierRouteTopFraction(m1Total: number, m2Total: number): number {
  if (m1Total <= 0 || m2Total <= 0) return 1
  const maxM1 = Math.max(0, Math.ceil(SAT_ROUTING_THRESHOLD * m1Total) - 1)
  const top = (maxM1 + m2Total) / (m1Total + m2Total)
  return top > 0.7 ? top : 1
}

function interpolate(anchors: { pct: number; scaled: number }[], p: number): number {
  if (p <= anchors[0].pct) return anchors[0].scaled
  for (let i = 1; i < anchors.length; i++) {
    const lo = anchors[i - 1]
    const hi = anchors[i]
    if (p <= hi.pct) {
      const t = (p - lo.pct) / (hi.pct - lo.pct || 1)
      return Math.round(lo.scaled + t * (hi.scaled - lo.scaled))
    }
  }
  return anchors[anchors.length - 1].scaled
}

/**
 * Section score (200-800) for an adaptive full-length section, on the curve of
 * the Module 2 route the student actually took. `tier` null = the unrouted
 * SAT_CURVE_ANCHORS exactly (mini tests, diagnostics, legacy attempts).
 */
export function satSectionScaledRouted(a: {
  m1Correct: number
  m1Total: number
  m2Correct: number
  m2Total: number
  tier: SatRoute | null
}): number {
  const total = Math.max(0, a.m1Total) + Math.max(0, a.m2Total)
  const correct = Math.max(0, Math.min(total, a.m1Correct + a.m2Correct))
  const p = total > 0 ? correct / total : 0
  if (a.tier === 'harder') return interpolate(SAT_HARDER_ROUTE_ANCHORS, p)
  if (a.tier === 'easier') {
    const top = satEasierRouteTopFraction(a.m1Total, a.m2Total)
    return Math.min(
      SAT_EASIER_ROUTE_CEILING,
      interpolate([...SAT_EASIER_ROUTE_ANCHORS, { pct: top, scaled: SAT_EASIER_ROUTE_CEILING }], p),
    )
  }
  return satSectionScaled(p)
}
