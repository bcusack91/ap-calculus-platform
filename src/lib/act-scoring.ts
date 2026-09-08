/**
 * ACT scaled scoring — calibrated, convex at the top, honest.
 *
 * Every ACT surface previously mapped percent-correct onto the 1-36 scale
 * either linearly (`round(pct * 36)`) or through a step table that ran
 * several points hot through the middle (70% -> 27, 80% -> 30, 90% -> 33).
 * Real ACT raw-to-scale conversions run roughly:
 *
 *   50% -> ~19,  60% -> ~21-22,  70% -> ~24-25,  80% -> ~27,
 *   90% -> ~30-31,  100% -> 36  (34+ requires ~95%+ — the top is compressed)
 *
 * This module replaces both maps with a piecewise-linear anchor curve (same
 * pattern as sat-scoring.ts / mcat-scoring.ts):
 *
 *   0%   -> 1
 *   25%  -> 13     (pure guessing on 4-choice items lands ~here)
 *   50%  -> 19
 *   60%  -> 21.5   (rounds to 22)
 *   70%  -> 24.5   (rounds to 25)
 *   80%  -> 27
 *   90%  -> 30.5   (rounds to 31)
 *   95%  -> 33.5   (rounds to 34 — the 34+ gate)
 *   100% -> 36
 *
 * It is still an ESTIMATE from practice items, not a real ACT form, which is
 * why every projection should be shown as a range (see projectionRange),
 * never a bare number.
 */

export type ACTSection = 'english' | 'math' | 'reading' | 'science'

/** Exported so tests can pin the calibration. Do not reorder; pct ascending. */
export const ACT_CURVE_ANCHORS: { pct: number; scaled: number }[] = [
  { pct: 0, scaled: 1 },
  { pct: 0.25, scaled: 13 },
  { pct: 0.5, scaled: 19 },
  { pct: 0.6, scaled: 21.5 },
  { pct: 0.7, scaled: 24.5 },
  { pct: 0.8, scaled: 27 },
  { pct: 0.9, scaled: 30.5 },
  { pct: 0.95, scaled: 33.5 },
  { pct: 1, scaled: 36 },
]

/** Convert a section's fraction-correct (0-1) to an integer 1-36 score. */
export function actSectionScaled(fractionCorrect: number): number {
  const p = Math.max(0, Math.min(1, fractionCorrect))
  for (let i = 1; i < ACT_CURVE_ANCHORS.length; i++) {
    const lo = ACT_CURVE_ANCHORS[i - 1]
    const hi = ACT_CURVE_ANCHORS[i]
    if (p <= hi.pct) {
      const t = (p - lo.pct) / (hi.pct - lo.pct || 1)
      return Math.max(1, Math.min(36, Math.round(lo.scaled + t * (hi.scaled - lo.scaled))))
    }
  }
  return 36
}

/**
 * Composite (1-36) = rounded mean of the (already integer) section scores,
 * exactly how the real ACT computes it.
 */
export function actComposite(sectionScores: number[]): number {
  if (sectionScores.length === 0) return 1
  const mean = sectionScores.reduce((s, x) => s + x, 0) / sectionScores.length
  return Math.max(1, Math.min(36, Math.round(mean)))
}

/** Convenience: composite straight from the four sections' fractions correct. */
export function actCompositeFromFractions(fractions: number[]): number {
  return actComposite(fractions.map(actSectionScaled))
}

/**
 * How much evidence backs a projection. Callers decide the level (e.g. the
 * predictor's confidence tiers, or one ~40-question diagnostic = medium).
 */
export type EvidenceLevel = 'low' | 'medium' | 'high'

const RANGE_HALF_WIDTH: Record<EvidenceLevel, number> = {
  high: 1,
  medium: 2,
  low: 3,
}

export interface ScoreRange {
  low: number
  high: number
}

/**
 * A projection range around a composite: ±2 by default, tightening to ±1
 * with high evidence and widening to ±3 with low. Clamped to the 1-36 scale.
 * A practice sample simply cannot resolve a composite more finely than this,
 * and displaying a range says so.
 */
export function projectionRange(composite: number, evidence: EvidenceLevel = 'medium'): ScoreRange {
  const half = RANGE_HALF_WIDTH[evidence]
  return {
    low: Math.max(1, Math.round(composite) - half),
    high: Math.min(36, Math.round(composite) + half),
  }
}
