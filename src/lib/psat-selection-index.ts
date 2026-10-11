/**
 * PSAT/NMSQT Selection Index — the number National Merit uses to pick
 * Commended Students and Semifinalists.
 *
 *   Selection Index = 2 × (Reading & Writing ÷ 10) + (Math ÷ 10)
 *                   = (2·RW + Math) / 10
 *
 * Reading & Writing counts twice because the old three-test PSAT weighted
 * reading and writing as two of its three tests. Section scores run 160–760 in
 * steps of 10, so the index runs 48–228 and is always a whole number.
 */
import { CURRENT_CUTOFFS, semifinalistCutoff, nationalRange, type CutoffClass } from '@/data/psat-cutoffs'

export const PSAT_SECTION_MIN = 160
export const PSAT_SECTION_MAX = 760
export const SELECTION_INDEX_MIN = 48
export const SELECTION_INDEX_MAX = 228

export function isValidPsatSection(score: number): boolean {
  return Number.isInteger(score) && score >= PSAT_SECTION_MIN && score <= PSAT_SECTION_MAX && score % 10 === 0
}

/** The Selection Index, or null when either section score is out of range or not a multiple of 10. */
export function selectionIndex(rw: number, math: number): number | null {
  if (!isValidPsatSection(rw) || !isValidPsatSection(math)) return null
  return (2 * rw + math) / 10
}

export type SelectionStanding = 'semifinalist' | 'commended' | 'below'

export interface SelectionComparison {
  index: number
  standing: SelectionStanding
  commended: number
  /** The state's Semifinalist cutoff; null when unknown (the page then shows the national range). */
  stateCutoff: number | null
  range: { low: number; high: number }
  /** Points short of the state cutoff (0 when at or above); null when the cutoff is unknown. */
  pointsToSemifinalist: number | null
  pointsToCommended: number
}

/**
 * Compare an index with a state's cutoffs. With no known state cutoff the
 * standing can still be 'semifinalist' if the index clears the HIGHEST cutoff
 * anywhere (it would qualify in every state).
 */
export function compareToCutoffs(index: number, stateKey: string | null, cls: CutoffClass = CURRENT_CUTOFFS): SelectionComparison {
  const range = nationalRange(cls)
  const stateCutoff = stateKey ? semifinalistCutoff(stateKey, cls) : null
  const semifinalBar = stateCutoff ?? range.high
  const standing: SelectionStanding = index >= semifinalBar ? 'semifinalist' : index >= cls.commended ? 'commended' : 'below'
  return {
    index,
    standing,
    commended: cls.commended,
    stateCutoff,
    range,
    pointsToSemifinalist: stateCutoff == null ? null : Math.max(0, stateCutoff - index),
    pointsToCommended: Math.max(0, cls.commended - index),
  }
}

/**
 * Smallest Math score (with R&W fixed) that reaches a target index, or null
 * when no valid Math score gets there. Every 10 Math points = 1 index point;
 * every 10 R&W points = 2.
 */
export function mathNeeded(rw: number, target: number): number | null {
  if (!isValidPsatSection(rw)) return null
  const math = Math.max(PSAT_SECTION_MIN, Math.ceil((target * 10 - 2 * rw) / 10) * 10)
  return math <= PSAT_SECTION_MAX ? math : null
}
