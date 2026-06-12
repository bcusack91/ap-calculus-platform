/**
 * Aggregated MCAT passage banks. One import surface for the full-length exam,
 * the CARS library, and per-section practice.
 */
import type { MCATPassage, MCATDiscreteQuestion, MCATSection } from '../types'
import { CARS_HUMANITIES_PASSAGES } from './cars-humanities'
import { CARS_SOCIAL_SCIENCE_PASSAGES } from './cars-social-science'
import { CHEM_PHYS_PASSAGES, CHEM_PHYS_DISCRETES } from './chem-phys'
import { BIO_BIOCHEM_PASSAGES, BIO_BIOCHEM_DISCRETES } from './bio-biochem'
import { PSYCH_SOC_PASSAGES, PSYCH_SOC_DISCRETES } from './psych-soc'

export const CARS_PASSAGES: MCATPassage[] = [...CARS_HUMANITIES_PASSAGES, ...CARS_SOCIAL_SCIENCE_PASSAGES]

export const SECTION_PASSAGES: Record<Exclude<MCATSection, 'cars'>, MCATPassage[]> = {
  'chem-phys': CHEM_PHYS_PASSAGES,
  'bio-biochem': BIO_BIOCHEM_PASSAGES,
  'psych-soc': PSYCH_SOC_PASSAGES,
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
  const all = SECTION_DISCRETES[section]
  const discretes = typeof limit === 'number' ? all.slice(0, Math.max(0, limit)) : all
  if (!discretes.length) return null
  const needsReview = discretes.some((d) => d.needsReview)
  return {
    id: `${section}-discretes`,
    section,
    discipline: 'Discrete questions',
    title: 'Discrete Questions',
    passageText:
      'The following questions are **independent of any passage** — each stands alone, as in the discrete sets on the real MCAT.',
    questions: discretes.map(({ question, options, correctAnswer, explanation, skill, needsReview }) => ({
      question, options, correctAnswer, explanation, skill, needsReview,
    })),
    needsReview,
  }
}

export const ALL_MCAT_PASSAGES: MCATPassage[] = [
  ...CARS_PASSAGES,
  ...CHEM_PHYS_PASSAGES,
  ...BIO_BIOCHEM_PASSAGES,
  ...PSYCH_SOC_PASSAGES,
]
