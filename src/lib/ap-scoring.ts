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

/** One graded section of a practice exam, in raw points plus its official share of the composite. */
export interface ApSectionScore {
  earned: number
  possible: number
  /** Percent of the AP composite this section carries on the real exam (FullExamSection.weight). */
  weight?: number
}

/**
 * Composite percentage (0–100, rounded) of a full-length AP practice exam.
 *
 * On the real exam each section carries a fixed share of the composite (Calc
 * MCQ 50% / FRQ 50%; APUSH MCQ 40 / SAQ 20 / DBQ 25 / LEQ 15), however many
 * raw points it has. When every section has a weight, this is
 * Σ(weight × section fraction) ÷ Σ weight. Without weights on every section it
 * falls back to raw points earned ÷ raw points possible. The server grader
 * (gradeApExam) and the results screen both call this, so they always agree.
 */
export function apCompositePercent(sections: ApSectionScore[]): number {
  const weighted = sections.length > 0 && sections.every((s) => typeof s.weight === 'number' && s.weight > 0)
  if (weighted) {
    const totalWeight = sections.reduce((n, s) => n + (s.weight as number), 0)
    const sum = sections.reduce((n, s) => n + (s.weight as number) * (s.possible ? s.earned / s.possible : 0), 0)
    return Math.round((sum / totalWeight) * 100)
  }
  const earned = sections.reduce((n, s) => n + s.earned, 0)
  const possible = sections.reduce((n, s) => n + s.possible, 0)
  return possible ? Math.round((earned / possible) * 100) : 0
}
