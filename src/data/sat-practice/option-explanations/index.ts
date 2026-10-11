import { remapOptionExplanations } from '@/lib/option-explanations'
import type { SatOptionExplanationMap } from './types'
import reading from './sat-1-reading'
import words from './sat-2-words'
import conventions from './sat-3-conventions'
import algebra from './sat-4-algebra'
import advanced from './sat-5-advanced-math-data'

/**
 * Authored "why each choice is right or wrong" notes for the SAT full-length
 * forms' multiple-choice items (grid-ins have no options to explain).
 *
 * Kept beside the banks rather than inside them: many SAT math items are
 * generated in code from a seeded random draw, and pool modules may shuffle
 * options, so an explanation list stored on a bank item could drift out of
 * line. Keying by question key (content-addressed: stem, option set, correct
 * text, passage) and re-aligning by option text is safe on every surface — the
 * forms, diagnostics, question bank — and an edited question simply loses its
 * notes instead of showing the wrong ones.
 */
const ALL: SatOptionExplanationMap = { ...reading, ...words, ...conventions, ...algebra, ...advanced }

/** Explanations for a question in the order its options were shown, when authored. */
export function satOptionExplanationsFor(questionKey: string, shownOptions: readonly string[]): string[] | undefined {
  const entry = ALL[questionKey]
  if (!entry) return undefined
  return remapOptionExplanations(entry.options, entry.explanations, shownOptions)
}

/** Every authored entry (integrity tests). */
export const SAT_OPTION_EXPLANATIONS: Readonly<SatOptionExplanationMap> = ALL
