/**
 * Assembles a passage-based full-length MCAT practice exam from the section
 * banks, in real-exam section order, each science section followed by its
 * discrete (non-passage) questions — mirroring the AAMC format.
 *
 * This is a genuine passage-based full-length (currently ~190 questions vs the
 * official 230, and growing as banks expand). The UI scores it section-aware on
 * the 472-528 scale.
 */
import type { MCATPassage } from './types'
import { MCAT_SECTION_META } from './types'
import { CARS_PASSAGES, SECTION_PASSAGES, discretesAsPassage } from './passages'
import { countQuestions } from './types'

// Use 9 CARS passages in the full-length (~54 Q, ≈ the official 53) — the full
// 12-passage bank remains available in the dedicated CARS practice library.
const FULL_LENGTH_CARS = CARS_PASSAGES.slice(0, 9)

export const FULL_LENGTH_PASSAGES: MCATPassage[] = [
  ...SECTION_PASSAGES['chem-phys'],
  ...[discretesAsPassage('chem-phys')].filter((p): p is MCATPassage => p !== null),
  ...FULL_LENGTH_CARS,
  ...SECTION_PASSAGES['bio-biochem'],
  ...[discretesAsPassage('bio-biochem')].filter((p): p is MCATPassage => p !== null),
  ...SECTION_PASSAGES['psych-soc'],
  ...[discretesAsPassage('psych-soc')].filter((p): p is MCATPassage => p !== null),
]

export const FULL_LENGTH_QUESTION_COUNT = countQuestions(FULL_LENGTH_PASSAGES)

/** Sum of official per-section limits (Chem/Phys 95 + CARS 90 + Bio 95 + Psych 95). */
export const FULL_LENGTH_MINUTES =
  MCAT_SECTION_META['chem-phys'].minutes +
  MCAT_SECTION_META.cars.minutes +
  MCAT_SECTION_META['bio-biochem'].minutes +
  MCAT_SECTION_META['psych-soc'].minutes
