/**
 * Aggregated MCAT passage banks. One import surface for the full-length exam,
 * the CARS library, and per-section practice.
 */
import type { MCATPassage, MCATDiscreteQuestion, MCATSection } from '../types'
import { buildDiscretesPassage } from './discretes-helper'
import { CARS_HUMANITIES_PASSAGES } from './cars-humanities'
import { CARS_SOCIAL_SCIENCE_PASSAGES } from './cars-social-science'
import { CARS_PHILOSOPHY_PASSAGES } from './cars-philosophy'
import { CARS_ETHICS_PASSAGES } from './cars-ethics'
import { CARS_LITERATURE_PASSAGES } from './cars-literature'
import { CARS_ARTS_PASSAGES } from './cars-arts'
import { CARS_HISTORY_PASSAGES } from './cars-history'
import { CARS_SOCIAL_THEORY_PASSAGES } from './cars-social-theory'
import { CARS_POLITICS_PASSAGES } from './cars-politics'
import { CARS_ECONOMICS_PASSAGES } from './cars-economics'
import { CARS_CULTURE_PASSAGES } from './cars-culture'
import { CARS_LANGUAGE_ED_PASSAGES } from './cars-language-education'
import { CHEM_PHYS_PASSAGES, CHEM_PHYS_DISCRETES } from './chem-phys'
import { CHEM_PHYS_PASSAGES_2 } from './chem-phys-2'
import { BIO_BIOCHEM_PASSAGES, BIO_BIOCHEM_DISCRETES } from './bio-biochem'
import { BIO_BIOCHEM_PASSAGES_2 } from './bio-biochem-2'
import { PSYCH_SOC_PASSAGES, PSYCH_SOC_DISCRETES } from './psych-soc'
import { PSYCH_SOC_PASSAGES_2 } from './psych-soc-2'

export const CARS_PASSAGES: MCATPassage[] = [
  ...CARS_HUMANITIES_PASSAGES,
  ...CARS_SOCIAL_SCIENCE_PASSAGES,
  ...CARS_PHILOSOPHY_PASSAGES,
  ...CARS_ETHICS_PASSAGES,
  ...CARS_LITERATURE_PASSAGES,
  ...CARS_ARTS_PASSAGES,
  ...CARS_HISTORY_PASSAGES,
  ...CARS_SOCIAL_THEORY_PASSAGES,
  ...CARS_POLITICS_PASSAGES,
  ...CARS_ECONOMICS_PASSAGES,
  ...CARS_CULTURE_PASSAGES,
  ...CARS_LANGUAGE_ED_PASSAGES,
]

export const SECTION_PASSAGES: Record<Exclude<MCATSection, 'cars'>, MCATPassage[]> = {
  'chem-phys': [...CHEM_PHYS_PASSAGES, ...CHEM_PHYS_PASSAGES_2],
  'bio-biochem': [...BIO_BIOCHEM_PASSAGES, ...BIO_BIOCHEM_PASSAGES_2],
  'psych-soc': [...PSYCH_SOC_PASSAGES, ...PSYCH_SOC_PASSAGES_2],
}

export const SECTION_DISCRETES: Record<Exclude<MCATSection, 'cars'>, MCATDiscreteQuestion[]> = {
  'chem-phys': CHEM_PHYS_DISCRETES,
  'bio-biochem': BIO_BIOCHEM_DISCRETES,
  'psych-soc': PSYCH_SOC_DISCRETES,
}

/**
 * Wrap a section's discrete (non-passage) questions as a single synthetic
 * "passage" so the passage runner can present them like the real exam's
 * discrete sets (a short framing note instead of a passage body).
 */
export function discretesAsPassage(
  section: Exclude<MCATSection, 'cars'>,
  limit?: number,
): MCATPassage | null {
  return buildDiscretesPassage(section, SECTION_DISCRETES[section], limit)
}

export const ALL_MCAT_PASSAGES: MCATPassage[] = [
  ...CARS_PASSAGES,
  ...CHEM_PHYS_PASSAGES,
  ...CHEM_PHYS_PASSAGES_2,
  ...BIO_BIOCHEM_PASSAGES,
  ...BIO_BIOCHEM_PASSAGES_2,
  ...PSYCH_SOC_PASSAGES,
  ...PSYCH_SOC_PASSAGES_2,
]
