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
