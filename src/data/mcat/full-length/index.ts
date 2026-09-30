/**
 * The two full-length forms' dedicated banks (rebuilt 2026-09-29 to the AAMC
 * blueprint). Each form is an explicit, curated set: per science section 10
 * passages (44 questions) + 15 discretes = 59; CARS 9 passages = 53. These
 * banks are used ONLY by the full-length exam, so a student's diagnostics and
 * section practice (src/data/mcat/passages) never repeat on a full-length.
 *
 * Blueprint per form (AAMC "What's on the MCAT Exam?"):
 *   C/P  gen chem ~30%, physics ~25%, orgo ~15%, biochem ~25%, bio ~5%
 *   B/B  bio ~65%, biochem ~25%, gen chem ~5%, orgo ~5%
 *   P/S  psych ~65%, soc ~30%, bio ~5%
 *   CARS ~half humanities, ~half social science; skills 30/30/40
 *   Science passages 400–600 words, ~half experiment / half information.
 */
import type { MCATPassage, MCATDiscreteQuestion, MCATSection } from '../types'
import { FL1_CHEM_PHYS_A_PASSAGES, FL1_CHEM_PHYS_A_DISCRETES } from './fl1-chem-phys-a'
import { FL1_CHEM_PHYS_B_PASSAGES, FL1_CHEM_PHYS_B_DISCRETES } from './fl1-chem-phys-b'
import { FL1_BIO_BIOCHEM_A_PASSAGES, FL1_BIO_BIOCHEM_A_DISCRETES } from './fl1-bio-biochem-a'
import { FL1_BIO_BIOCHEM_B_PASSAGES, FL1_BIO_BIOCHEM_B_DISCRETES } from './fl1-bio-biochem-b'
import { FL1_PSYCH_SOC_A_PASSAGES, FL1_PSYCH_SOC_A_DISCRETES } from './fl1-psych-soc-a'
import { FL1_PSYCH_SOC_B_PASSAGES, FL1_PSYCH_SOC_B_DISCRETES } from './fl1-psych-soc-b'
import { FL1_CARS_A_PASSAGES } from './fl1-cars-a'
import { FL1_CARS_B_PASSAGES } from './fl1-cars-b'
import { FL2_CHEM_PHYS_A_PASSAGES, FL2_CHEM_PHYS_A_DISCRETES } from './fl2-chem-phys-a'
import { FL2_CHEM_PHYS_B_PASSAGES, FL2_CHEM_PHYS_B_DISCRETES } from './fl2-chem-phys-b'
import { FL2_BIO_BIOCHEM_A_PASSAGES, FL2_BIO_BIOCHEM_A_DISCRETES } from './fl2-bio-biochem-a'
import { FL2_BIO_BIOCHEM_B_PASSAGES, FL2_BIO_BIOCHEM_B_DISCRETES } from './fl2-bio-biochem-b'
import { FL2_PSYCH_SOC_A_PASSAGES, FL2_PSYCH_SOC_A_DISCRETES } from './fl2-psych-soc-a'
import { FL2_PSYCH_SOC_B_PASSAGES, FL2_PSYCH_SOC_B_DISCRETES } from './fl2-psych-soc-b'
import { FL2_CARS_A_PASSAGES } from './fl2-cars-a'
import { FL2_CARS_B_PASSAGES } from './fl2-cars-b'

export type ScienceSection = Exclude<MCATSection, 'cars'>

export interface FullLengthFormBank {
  form: 1 | 2
  science: Record<ScienceSection, { passages: MCATPassage[]; discretes: MCATDiscreteQuestion[] }>
  cars: MCATPassage[]
}

export const FULL_LENGTH_BANKS: Record<1 | 2, FullLengthFormBank> = {
  1: {
    form: 1,
    science: {
      'chem-phys': { passages: [...FL1_CHEM_PHYS_A_PASSAGES, ...FL1_CHEM_PHYS_B_PASSAGES], discretes: [...FL1_CHEM_PHYS_A_DISCRETES, ...FL1_CHEM_PHYS_B_DISCRETES] },
      'bio-biochem': { passages: [...FL1_BIO_BIOCHEM_A_PASSAGES, ...FL1_BIO_BIOCHEM_B_PASSAGES], discretes: [...FL1_BIO_BIOCHEM_A_DISCRETES, ...FL1_BIO_BIOCHEM_B_DISCRETES] },
      'psych-soc': { passages: [...FL1_PSYCH_SOC_A_PASSAGES, ...FL1_PSYCH_SOC_B_PASSAGES], discretes: [...FL1_PSYCH_SOC_A_DISCRETES, ...FL1_PSYCH_SOC_B_DISCRETES] },
    },
    cars: [...FL1_CARS_A_PASSAGES, ...FL1_CARS_B_PASSAGES],
  },
  2: {
    form: 2,
    science: {
      'chem-phys': { passages: [...FL2_CHEM_PHYS_A_PASSAGES, ...FL2_CHEM_PHYS_B_PASSAGES], discretes: [...FL2_CHEM_PHYS_A_DISCRETES, ...FL2_CHEM_PHYS_B_DISCRETES] },
      'bio-biochem': { passages: [...FL2_BIO_BIOCHEM_A_PASSAGES, ...FL2_BIO_BIOCHEM_B_PASSAGES], discretes: [...FL2_BIO_BIOCHEM_A_DISCRETES, ...FL2_BIO_BIOCHEM_B_DISCRETES] },
      'psych-soc': { passages: [...FL2_PSYCH_SOC_A_PASSAGES, ...FL2_PSYCH_SOC_B_PASSAGES], discretes: [...FL2_PSYCH_SOC_A_DISCRETES, ...FL2_PSYCH_SOC_B_DISCRETES] },
    },
    cars: [...FL2_CARS_A_PASSAGES, ...FL2_CARS_B_PASSAGES],
  },
}
