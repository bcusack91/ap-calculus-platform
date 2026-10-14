/**
 * One AP score scale (1–5) for every AP surface: course diagnostics, the
 * score predictor and the practice exams.
 *
 * Before October 2026 three different cutoff sets disagreed (diagnostics
 * 80/65/50/35, the predictor 85/70/55/35, the Chem exam 72/58/43/30), so the
 * same performance could read as a 3 on one page and a 4 on another. These
 * cutoffs sit near typical published AP composite cutoffs, where a 5 usually
 * needs roughly 63–75% of the available points. They are an estimate, not a
 * calibration against real AP results — that needs score pairs, as the SAT and
 * MCAT curves got — so pages present the number as an estimate.
 */

export const AP_SCORE_CUTOFFS = [
  { score: 5, minPercent: 70 },
  { score: 4, minPercent: 57 },
  { score: 3, minPercent: 43 },
  { score: 2, minPercent: 30 },
] as const

export type ApScore = 1 | 2 | 3 | 4 | 5

/** Estimated AP score from a percentage of available points (0–100). */
export function estimateApScore(percent: number): ApScore {
  for (const c of AP_SCORE_CUTOFFS) if (percent >= c.minPercent) return c.score
  return 1
}
