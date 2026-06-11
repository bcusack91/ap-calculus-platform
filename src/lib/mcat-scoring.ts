/**
 * MCAT scaled scoring — section-aware.
 *
 * Each of the 4 MCAT sections is reported on a 118-132 scale (midpoint 125);
 * the total is their sum, 472-528 (midpoint 500). A real exam uses an equated
 * raw→scaled conversion that varies per form; we don't have equating data, so we
 * use a piecewise-linear curve anchored on published percentile landmarks. It is
 * an ESTIMATE — good enough to give students a realistic, section-by-section
 * sense of standing, and honest about being approximate.
 *
 * Anchors (raw % correct on a section → scaled), interpolated linearly between:
 *   0%   → 118
 *   ~33% → 123   (low)
 *   ~50% → 125   (≈50th percentile / midpoint)
 *   ~67% → 127
 *   ~83% → 130
 *   100% → 132
 * This deliberately makes the middle of the scale "sticky" (most scores cluster
 * 124-128) the way the real exam does, rather than a flat raw%→scaled line.
 */

import type { MCATSection } from '@/data/mcat/types'
import { MCAT_SECTION_META, MCAT_SECTION_ORDER } from '@/data/mcat/types'

const ANCHORS: { pct: number; scaled: number }[] = [
  { pct: 0, scaled: 118 },
  { pct: 0.33, scaled: 123 },
  { pct: 0.5, scaled: 125 },
  { pct: 0.67, scaled: 127 },
  { pct: 0.83, scaled: 130 },
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
