/**
 * PSAT/NMSQT scaled scoring — calibrated, convex, honest.
 *
 * Same disease-and-cure as the SAT (see src/lib/sat-scoring.ts): a linear
 * percent→scale map runs far too hot through the middle of the scale because
 * the real curve is convex — the top of each section is gated by hard items.
 *
 * The PSAT's 160-760 section scale spans the same 600 points as the SAT's
 * 200-800, and the digital PSAT shares the SAT's item types and adaptive
 * blueprint, so the curve here mirrors the SAT anchor shape shifted down to
 * the compressed 160-760 window. Concordance tables put PSAT scaled scores
 * roughly 30-50 points below the SAT equivalent for the same performance
 * level, which the shift reproduces:
 *
 *   0%   -> 160
 *   50%  -> 440
 *   60%  -> 475   (x2 =  950 total)
 *   70%  -> 525
 *   80%  -> 585
 *   88%  -> 632   (x2 = 1264 total)
 *   100% -> 760
 *
 * The steep 88->100 segment is deliberate: the last ~130 points per section
 * are earned almost entirely on hard-tier items. Unlike the SAT curve these
 * anchors have no direct ground-truth pins yet — they inherit the SAT
 * calibration through the shared blueprint — so every projection must be
 * shown as a range (see projectionRange), never a bare number.
 */

export type PSATSection = 'reading-writing' | 'math'

/** Exported so tests can pin the calibration. Do not reorder; pct ascending. */
export const PSAT_CURVE_ANCHORS: { pct: number; scaled: number }[] = [
  { pct: 0, scaled: 160 },
  { pct: 0.5, scaled: 440 },
  { pct: 0.6, scaled: 475 },
  { pct: 0.7, scaled: 525 },
  { pct: 0.8, scaled: 585 },
  { pct: 0.88, scaled: 632 },
  { pct: 1, scaled: 760 },
]

/** Convert a section's fraction-correct (0-1) to a 160-760 scaled score. */
export function psatSectionScaled(fractionCorrect: number): number {
  const p = Math.max(0, Math.min(1, fractionCorrect))
  for (let i = 1; i < PSAT_CURVE_ANCHORS.length; i++) {
    const lo = PSAT_CURVE_ANCHORS[i - 1]
    const hi = PSAT_CURVE_ANCHORS[i]
    if (p <= hi.pct) {
      const t = (p - lo.pct) / (hi.pct - lo.pct || 1)
      return Math.round(lo.scaled + t * (hi.scaled - lo.scaled))
    }
  }
  return 760
}

/** Total (320-1520) from the two sections' fractions correct. */
export function psatTotal(rwFraction: number, mathFraction: number): number {
  return psatSectionScaled(rwFraction) + psatSectionScaled(mathFraction)
}

/**
 * How much evidence backs a projection. Callers decide the level (e.g. a
 * full-length 98-question practice exam = high; a short quiz sample = low).
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
 * with high evidence and widening to ±50 with low. Clamped to the 320-1520
 * scale. Practice material simply cannot resolve a score more finely than
 * this, and displaying a range says so.
 */
export function projectionRange(total: number, evidence: EvidenceLevel = 'medium'): ScoreRange {
  const half = RANGE_HALF_WIDTH[evidence]
  return {
    low: Math.max(320, Math.round(total) - half),
    high: Math.min(1520, Math.round(total) + half),
  }
}
