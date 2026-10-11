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

import {
  SAT_HARDER_ROUTE_ANCHORS,
  SAT_EASIER_ROUTE_ANCHORS,
  SAT_EASIER_ROUTE_CEILING,
  satEasierRouteTopFraction,
  type SatRoute,
} from '@/lib/sat-scoring'

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

/* ------------------------------------------------------------------ */
/*  Adaptive full-length (two-stage) PSAT/NMSQT                        */
/* ------------------------------------------------------------------ */

/**
 * How the PSAT routed curves are derived from the SAT routed curves.
 *
 * The unrouted PSAT curve above is the SAT curve shifted down 40 points at
 * every anchor (480->440, 515->475, ... 0%: 200->160, 100%: 800->760). The
 * routed curves use exactly the same mapping, applied to the SAT routed
 * anchors in src/lib/sat-scoring.ts:
 *
 *     psatScaled(pct, route) = satScaled(pct, route) - 40
 *
 * A constant shift keeps everything the SAT curves guarantee: each curve stays
 * strictly monotonic in fraction correct, the harder route equals the
 * unrouted PSAT curve from 60% up (both inherited SAT ground-truth pins carry
 * over as 60% -> 475 and 88% -> 632), the easier route equals it through 60%,
 * and the easier route's ceiling (SAT 630) becomes 590. Bounds: 160-760.
 *
 * Full-length section scores are then rounded to the nearest 10, as the real
 * PSAT reports them (the Selection Index needs multiples of 10). Rounding to
 * the nearest 10 is non-decreasing, so monotonicity holds.
 *
 * Like the unrouted curve these have no PSAT ground-truth pins yet: show every
 * full-length score with a range (projectionRange / psatSectionRange).
 */
export const PSAT_SAT_OFFSET = 40

const shiftAnchors = (anchors: { pct: number; scaled: number }[]) =>
  anchors.map((a) => ({ pct: a.pct, scaled: a.scaled - PSAT_SAT_OFFSET }))

/** Harder Module 2 route: SAT_HARDER_ROUTE_ANCHORS - 40. */
export const PSAT_HARDER_ROUTE_ANCHORS = shiftAnchors(SAT_HARDER_ROUTE_ANCHORS)
/** Easier Module 2 route: SAT_EASIER_ROUTE_ANCHORS - 40 (then up to the ceiling). */
export const PSAT_EASIER_ROUTE_ANCHORS = shiftAnchors(SAT_EASIER_ROUTE_ANCHORS)
/** Highest section score the easier route can produce (SAT 630 - 40). */
export const PSAT_EASIER_ROUTE_CEILING = SAT_EASIER_ROUTE_CEILING - PSAT_SAT_OFFSET

function interpolateAnchors(anchors: { pct: number; scaled: number }[], p: number): number {
  if (p <= anchors[0].pct) return anchors[0].scaled
  for (let i = 1; i < anchors.length; i++) {
    const lo = anchors[i - 1]
    const hi = anchors[i]
    if (p <= hi.pct) {
      const t = (p - lo.pct) / (hi.pct - lo.pct || 1)
      return lo.scaled + t * (hi.scaled - lo.scaled)
    }
  }
  return anchors[anchors.length - 1].scaled
}

const toTen = (n: number) => Math.max(160, Math.min(760, Math.round(n / 10) * 10))

/**
 * Section score (160-760, a multiple of 10) for an adaptive full-length PSAT
 * section, on the curve of the Module 2 route the student actually took.
 * `tier` null = the unrouted PSAT_CURVE_ANCHORS (a Module 2 that started
 * before the routed form was built).
 */
export function psatSectionScaledRouted(a: {
  m1Correct: number
  m1Total: number
  m2Correct: number
  m2Total: number
  tier: SatRoute | null
}): number {
  const total = Math.max(0, a.m1Total) + Math.max(0, a.m2Total)
  const correct = Math.max(0, Math.min(total, a.m1Correct + a.m2Correct))
  const p = total > 0 ? correct / total : 0
  if (a.tier === 'harder') return toTen(interpolateAnchors(PSAT_HARDER_ROUTE_ANCHORS, p))
  if (a.tier === 'easier') {
    const top = satEasierRouteTopFraction(a.m1Total, a.m2Total)
    const curve = [...PSAT_EASIER_ROUTE_ANCHORS, { pct: top, scaled: PSAT_EASIER_ROUTE_CEILING }]
    return Math.min(PSAT_EASIER_ROUTE_CEILING, toTen(interpolateAnchors(curve, p)))
  }
  return toTen(interpolateAnchors(PSAT_CURVE_ANCHORS, p))
}

/**
 * The range a single full-length section score supports: ±20 per section
 * (multiples of 10), so the two sections together carry the medium-evidence
 * ±40 total of projectionRange. Medium, not high, because the PSAT curve has
 * no ground-truth pins of its own.
 */
export const PSAT_SECTION_RANGE_HALF = 20

export function psatSectionRange(score: number): ScoreRange {
  return {
    low: Math.max(160, score - PSAT_SECTION_RANGE_HALF),
    high: Math.min(760, score + PSAT_SECTION_RANGE_HALF),
  }
}

/** Selection Index (2·RW + Math) / 10 from any section scores (rounded to whole points). */
export function psatSelectionIndexOf(rw: number, math: number): number {
  return Math.round((2 * rw + math) / 10)
}

/** The Selection Index range the section ranges support (about ±6 points). */
export function psatSelectionIndexRange(rw: number, math: number): ScoreRange {
  const r = psatSectionRange(rw)
  const m = psatSectionRange(math)
  return { low: psatSelectionIndexOf(r.low, m.low), high: psatSelectionIndexOf(r.high, m.high) }
}
