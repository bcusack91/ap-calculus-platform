/**
 * MCAT scaled scoring — section-aware, calibrated to AAMC conversions.
 *
 * Each of the 4 MCAT sections is reported on a 118-132 scale (midpoint 125);
 * the total is their sum, 472-528 (midpoint 500). A real exam uses an equated
 * raw→scaled conversion that varies per form; we don't have equating data, so
 * we use a piecewise-linear curve anchored on the shape of released AAMC
 * practice-exam conversions:
 *
 *   - the MEDIAN test-taker answers roughly 70% of items correctly and scores
 *     125 — so ~70% raw ≈ 125, NOT 50%,
 *   - sub-35% raw floors out at 118-119 (well below guessing-plus on 4-option
 *     items, so the bottom of the scale compresses hard),
 *   - only near-perfect runs reach 131-132.
 *
 * Anchors (raw % correct on a section → scaled), interpolated linearly between:
 *   0%   → 118
 *   35%  → 119
 *   50%  → 121
 *   60%  → 123
 *   70%  → 125   (≈ median performance → median scaled score)
 *   83%  → 128
 *   92%  → 130
 *   100% → 132
 *
 * CALIBRATION NOTE — do not reintroduce a `50% → 125` anchor. An earlier
 * version of this table conflated the SCALE midpoint (125 is the middle of
 * 118-132) with MEDIAN performance (the median test-taker gets ~70% raw, not
 * 50%). That conflation inflated every mid-band score by +2 to +4 per section
 * (~+8 to +14 total) versus published AAMC practice-exam conversions.
 *
 * It is still an ESTIMATE from unequated practice items, which is why totals
 * should be shown as a range (see projectionRange), never a bare number.
 */

import type { MCATSection } from '@/data/mcat/types'
import { MCAT_SECTION_META, MCAT_SECTION_ORDER } from '@/data/mcat/types'

const ANCHORS: { pct: number; scaled: number }[] = [
  { pct: 0, scaled: 118 },
  { pct: 0.35, scaled: 119 },
  { pct: 0.5, scaled: 121 },
  { pct: 0.6, scaled: 123 },
  { pct: 0.7, scaled: 125 },
  { pct: 0.83, scaled: 128 },
  { pct: 0.92, scaled: 130 },
  { pct: 1, scaled: 132 },
]

/** Convert a section's fraction-correct (0-1) to a 118-132 scaled score. */
export function sectionScaledScore(fractionCorrect: number): number {
  const p = Math.max(0, Math.min(1, fractionCorrect))
  for (let i = 1; i < ANCHORS.length; i++) {
    const lo = ANCHORS[i - 1]
    const hi = ANCHORS[i]
    if (p <= hi.pct) {
      const t = (p - lo.pct) / (hi.pct - lo.pct || 1)
      return Math.round(lo.scaled + t * (hi.scaled - lo.scaled))
    }
  }
  return 132
}

export interface MCATSectionResult {
  section: MCATSection
  name: string
  short: string
  correct: number
  total: number
  scaled: number
}

export interface MCATScoreReport {
  sections: MCATSectionResult[]
  total: number // 472-528
  /** Rough percentile band for the total — descriptive, not official. */
  percentileLabel: string
}

/** Build a full section-aware report from per-section raw counts. */
export function scoreMCAT(rawBySection: Record<MCATSection, { correct: number; total: number }>): MCATScoreReport {
  const sections: MCATSectionResult[] = MCAT_SECTION_ORDER.map((s) => {
    const { correct, total } = rawBySection[s] ?? { correct: 0, total: 0 }
    const meta = MCAT_SECTION_META[s]
    return {
      section: s,
      name: meta.name,
      short: meta.short,
      correct,
      total,
      scaled: total > 0 ? sectionScaledScore(correct / total) : 118,
    }
  })
  // Only sum sections the student actually attempted (total > 0); if none, 472.
  const attempted = sections.filter((s) => s.total > 0)
  const total = attempted.length
    ? attempted.reduce((sum, s) => sum + s.scaled, 0) + (4 - attempted.length) * 118
    : 472
  return { sections, total, percentileLabel: percentileBand(total) }
}

/**
 * How much evidence backs a projection. Callers decide the level (e.g. the
 * predictor's confidence tiers, or "one full-length from practice items" =
 * medium). Same pattern as sat-scoring's EvidenceLevel.
 */
export type EvidenceLevel = 'low' | 'medium' | 'high'

const RANGE_HALF_WIDTH: Record<EvidenceLevel, number> = {
  high: 2,
  medium: 3,
  low: 4,
}

export interface ScoreRange {
  low: number
  high: number
}

/**
 * A projection range around a 472-528 total: ±3 by default, tightening to ±2
 * with high evidence and widening to ±4 with low. Clamped to the valid scale.
 * Unequated practice items simply cannot resolve an MCAT total more finely
 * than this, and displaying a range says so.
 */
export function projectionRange(total: number, evidence: EvidenceLevel = 'medium'): ScoreRange {
  const half = RANGE_HALF_WIDTH[evidence]
  return {
    low: Math.max(472, Math.round(total) - half),
    high: Math.min(528, Math.round(total) + half),
  }
}

/** Published AAMC total-score percentile landmarks (approx, recent cycles). */
function percentileBand(total: number): string {
  if (total >= 524) return '~99th percentile'
  if (total >= 520) return '~97th percentile'
  if (total >= 515) return '~90th percentile'
  if (total >= 511) return '~80th percentile (competitive)'
  if (total >= 508) return '~70th percentile'
  if (total >= 504) return '~57th percentile'
  if (total >= 500) return '~45th percentile'
  if (total >= 494) return '~28th percentile'
  return 'below ~25th percentile'
}
