/**
 * The eight full-length forms' dedicated banks (Forms 1-2 rebuilt 2026-09-29,
 * Forms 3-6 added 2026-09-30, Forms 7-8 added 2026-10-01, all to the AAMC
 * blueprint). Each form is an
 * explicit, curated set: per science section 10 passages (44 questions) + 15
 * discretes = 59; CARS 9 passages = 53; 230 questions. These banks are used
 * ONLY by the full-length exam, so a student's diagnostics and section
 * practice (src/data/mcat/passages) never repeat on a full-length, and no
 * passage or discrete appears on more than one form.
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
import { FL3_CHEM_PHYS_A_PASSAGES, FL3_CHEM_PHYS_A_DISCRETES } from './fl3-chem-phys-a'
import { FL3_CHEM_PHYS_B_PASSAGES, FL3_CHEM_PHYS_B_DISCRETES } from './fl3-chem-phys-b'
import { FL3_BIO_BIOCHEM_A_PASSAGES, FL3_BIO_BIOCHEM_A_DISCRETES } from './fl3-bio-biochem-a'
import { FL3_BIO_BIOCHEM_B_PASSAGES, FL3_BIO_BIOCHEM_B_DISCRETES } from './fl3-bio-biochem-b'
import { FL3_PSYCH_SOC_A_PASSAGES, FL3_PSYCH_SOC_A_DISCRETES } from './fl3-psych-soc-a'
import { FL3_PSYCH_SOC_B_PASSAGES, FL3_PSYCH_SOC_B_DISCRETES } from './fl3-psych-soc-b'
import { FL3_CARS_A_PASSAGES } from './fl3-cars-a'
import { FL3_CARS_B_PASSAGES } from './fl3-cars-b'
import { FL4_CHEM_PHYS_A_PASSAGES, FL4_CHEM_PHYS_A_DISCRETES } from './fl4-chem-phys-a'
import { FL4_CHEM_PHYS_B_PASSAGES, FL4_CHEM_PHYS_B_DISCRETES } from './fl4-chem-phys-b'
import { FL4_BIO_BIOCHEM_A_PASSAGES, FL4_BIO_BIOCHEM_A_DISCRETES } from './fl4-bio-biochem-a'
import { FL4_BIO_BIOCHEM_B_PASSAGES, FL4_BIO_BIOCHEM_B_DISCRETES } from './fl4-bio-biochem-b'
import { FL4_PSYCH_SOC_A_PASSAGES, FL4_PSYCH_SOC_A_DISCRETES } from './fl4-psych-soc-a'
import { FL4_PSYCH_SOC_B_PASSAGES, FL4_PSYCH_SOC_B_DISCRETES } from './fl4-psych-soc-b'
import { FL4_CARS_A_PASSAGES } from './fl4-cars-a'
import { FL4_CARS_B_PASSAGES } from './fl4-cars-b'
import { FL5_CHEM_PHYS_A_PASSAGES, FL5_CHEM_PHYS_A_DISCRETES } from './fl5-chem-phys-a'
import { FL5_CHEM_PHYS_B_PASSAGES, FL5_CHEM_PHYS_B_DISCRETES } from './fl5-chem-phys-b'
import { FL5_BIO_BIOCHEM_A_PASSAGES, FL5_BIO_BIOCHEM_A_DISCRETES } from './fl5-bio-biochem-a'
import { FL5_BIO_BIOCHEM_B_PASSAGES, FL5_BIO_BIOCHEM_B_DISCRETES } from './fl5-bio-biochem-b'
import { FL5_PSYCH_SOC_A_PASSAGES, FL5_PSYCH_SOC_A_DISCRETES } from './fl5-psych-soc-a'
import { FL5_PSYCH_SOC_B_PASSAGES, FL5_PSYCH_SOC_B_DISCRETES } from './fl5-psych-soc-b'
import { FL5_CARS_A_PASSAGES } from './fl5-cars-a'
import { FL5_CARS_B_PASSAGES } from './fl5-cars-b'
import { FL6_CHEM_PHYS_A_PASSAGES, FL6_CHEM_PHYS_A_DISCRETES } from './fl6-chem-phys-a'
import { FL6_CHEM_PHYS_B_PASSAGES, FL6_CHEM_PHYS_B_DISCRETES } from './fl6-chem-phys-b'
import { FL6_BIO_BIOCHEM_A_PASSAGES, FL6_BIO_BIOCHEM_A_DISCRETES } from './fl6-bio-biochem-a'
import { FL6_BIO_BIOCHEM_B_PASSAGES, FL6_BIO_BIOCHEM_B_DISCRETES } from './fl6-bio-biochem-b'
import { FL6_PSYCH_SOC_A_PASSAGES, FL6_PSYCH_SOC_A_DISCRETES } from './fl6-psych-soc-a'
import { FL6_PSYCH_SOC_B_PASSAGES, FL6_PSYCH_SOC_B_DISCRETES } from './fl6-psych-soc-b'
import { FL6_CARS_A_PASSAGES } from './fl6-cars-a'
import { FL6_CARS_B_PASSAGES } from './fl6-cars-b'
import { FL7_CHEM_PHYS_A_PASSAGES, FL7_CHEM_PHYS_A_DISCRETES } from './fl7-chem-phys-a'
import { FL7_CHEM_PHYS_B_PASSAGES, FL7_CHEM_PHYS_B_DISCRETES } from './fl7-chem-phys-b'
import { FL7_BIO_BIOCHEM_A_PASSAGES, FL7_BIO_BIOCHEM_A_DISCRETES } from './fl7-bio-biochem-a'
import { FL7_BIO_BIOCHEM_B_PASSAGES, FL7_BIO_BIOCHEM_B_DISCRETES } from './fl7-bio-biochem-b'
import { FL7_PSYCH_SOC_A_PASSAGES, FL7_PSYCH_SOC_A_DISCRETES } from './fl7-psych-soc-a'
import { FL7_PSYCH_SOC_B_PASSAGES, FL7_PSYCH_SOC_B_DISCRETES } from './fl7-psych-soc-b'
import { FL7_CARS_A_PASSAGES } from './fl7-cars-a'
import { FL7_CARS_B_PASSAGES } from './fl7-cars-b'
import { FL8_CHEM_PHYS_A_PASSAGES, FL8_CHEM_PHYS_A_DISCRETES } from './fl8-chem-phys-a'
import { FL8_CHEM_PHYS_B_PASSAGES, FL8_CHEM_PHYS_B_DISCRETES } from './fl8-chem-phys-b'
import { FL8_BIO_BIOCHEM_A_PASSAGES, FL8_BIO_BIOCHEM_A_DISCRETES } from './fl8-bio-biochem-a'
import { FL8_BIO_BIOCHEM_B_PASSAGES, FL8_BIO_BIOCHEM_B_DISCRETES } from './fl8-bio-biochem-b'
import { FL8_PSYCH_SOC_A_PASSAGES, FL8_PSYCH_SOC_A_DISCRETES } from './fl8-psych-soc-a'
import { FL8_PSYCH_SOC_B_PASSAGES, FL8_PSYCH_SOC_B_DISCRETES } from './fl8-psych-soc-b'
import { FL8_CARS_A_PASSAGES } from './fl8-cars-a'
import { FL8_CARS_B_PASSAGES } from './fl8-cars-b'

export type ScienceSection = Exclude<MCATSection, 'cars'>
export type FullLengthFormNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export const FULL_LENGTH_FORM_NUMBERS: readonly FullLengthFormNumber[] = [1, 2, 3, 4, 5, 6, 7, 8]

export interface FullLengthFormBank {
  form: FullLengthFormNumber
  science: Record<ScienceSection, { passages: MCATPassage[]; discretes: MCATDiscreteQuestion[] }>
  cars: MCATPassage[]
}

type Half = { passages: MCATPassage[]; discretes: MCATDiscreteQuestion[] }
const section = (a: Half, b: Half) => ({ passages: [...a.passages, ...b.passages], discretes: [...a.discretes, ...b.discretes] })

export const FULL_LENGTH_BANKS: Record<FullLengthFormNumber, FullLengthFormBank> = {
  1: {
    form: 1,
    science: {
      'chem-phys': section({ passages: FL1_CHEM_PHYS_A_PASSAGES, discretes: FL1_CHEM_PHYS_A_DISCRETES }, { passages: FL1_CHEM_PHYS_B_PASSAGES, discretes: FL1_CHEM_PHYS_B_DISCRETES }),
      'bio-biochem': section({ passages: FL1_BIO_BIOCHEM_A_PASSAGES, discretes: FL1_BIO_BIOCHEM_A_DISCRETES }, { passages: FL1_BIO_BIOCHEM_B_PASSAGES, discretes: FL1_BIO_BIOCHEM_B_DISCRETES }),
      'psych-soc': section({ passages: FL1_PSYCH_SOC_A_PASSAGES, discretes: FL1_PSYCH_SOC_A_DISCRETES }, { passages: FL1_PSYCH_SOC_B_PASSAGES, discretes: FL1_PSYCH_SOC_B_DISCRETES }),
    },
    cars: [...FL1_CARS_A_PASSAGES, ...FL1_CARS_B_PASSAGES],
  },
  2: {
    form: 2,
    science: {
      'chem-phys': section({ passages: FL2_CHEM_PHYS_A_PASSAGES, discretes: FL2_CHEM_PHYS_A_DISCRETES }, { passages: FL2_CHEM_PHYS_B_PASSAGES, discretes: FL2_CHEM_PHYS_B_DISCRETES }),
      'bio-biochem': section({ passages: FL2_BIO_BIOCHEM_A_PASSAGES, discretes: FL2_BIO_BIOCHEM_A_DISCRETES }, { passages: FL2_BIO_BIOCHEM_B_PASSAGES, discretes: FL2_BIO_BIOCHEM_B_DISCRETES }),
      'psych-soc': section({ passages: FL2_PSYCH_SOC_A_PASSAGES, discretes: FL2_PSYCH_SOC_A_DISCRETES }, { passages: FL2_PSYCH_SOC_B_PASSAGES, discretes: FL2_PSYCH_SOC_B_DISCRETES }),
    },
    cars: [...FL2_CARS_A_PASSAGES, ...FL2_CARS_B_PASSAGES],
  },
  3: {
    form: 3,
    science: {
      'chem-phys': section({ passages: FL3_CHEM_PHYS_A_PASSAGES, discretes: FL3_CHEM_PHYS_A_DISCRETES }, { passages: FL3_CHEM_PHYS_B_PASSAGES, discretes: FL3_CHEM_PHYS_B_DISCRETES }),
      'bio-biochem': section({ passages: FL3_BIO_BIOCHEM_A_PASSAGES, discretes: FL3_BIO_BIOCHEM_A_DISCRETES }, { passages: FL3_BIO_BIOCHEM_B_PASSAGES, discretes: FL3_BIO_BIOCHEM_B_DISCRETES }),
      'psych-soc': section({ passages: FL3_PSYCH_SOC_A_PASSAGES, discretes: FL3_PSYCH_SOC_A_DISCRETES }, { passages: FL3_PSYCH_SOC_B_PASSAGES, discretes: FL3_PSYCH_SOC_B_DISCRETES }),
    },
    cars: [...FL3_CARS_A_PASSAGES, ...FL3_CARS_B_PASSAGES],
  },
  4: {
    form: 4,
    science: {
      'chem-phys': section({ passages: FL4_CHEM_PHYS_A_PASSAGES, discretes: FL4_CHEM_PHYS_A_DISCRETES }, { passages: FL4_CHEM_PHYS_B_PASSAGES, discretes: FL4_CHEM_PHYS_B_DISCRETES }),
      'bio-biochem': section({ passages: FL4_BIO_BIOCHEM_A_PASSAGES, discretes: FL4_BIO_BIOCHEM_A_DISCRETES }, { passages: FL4_BIO_BIOCHEM_B_PASSAGES, discretes: FL4_BIO_BIOCHEM_B_DISCRETES }),
      'psych-soc': section({ passages: FL4_PSYCH_SOC_A_PASSAGES, discretes: FL4_PSYCH_SOC_A_DISCRETES }, { passages: FL4_PSYCH_SOC_B_PASSAGES, discretes: FL4_PSYCH_SOC_B_DISCRETES }),
    },
    cars: [...FL4_CARS_A_PASSAGES, ...FL4_CARS_B_PASSAGES],
  },
  5: {
    form: 5,
    science: {
      'chem-phys': section({ passages: FL5_CHEM_PHYS_A_PASSAGES, discretes: FL5_CHEM_PHYS_A_DISCRETES }, { passages: FL5_CHEM_PHYS_B_PASSAGES, discretes: FL5_CHEM_PHYS_B_DISCRETES }),
      'bio-biochem': section({ passages: FL5_BIO_BIOCHEM_A_PASSAGES, discretes: FL5_BIO_BIOCHEM_A_DISCRETES }, { passages: FL5_BIO_BIOCHEM_B_PASSAGES, discretes: FL5_BIO_BIOCHEM_B_DISCRETES }),
      'psych-soc': section({ passages: FL5_PSYCH_SOC_A_PASSAGES, discretes: FL5_PSYCH_SOC_A_DISCRETES }, { passages: FL5_PSYCH_SOC_B_PASSAGES, discretes: FL5_PSYCH_SOC_B_DISCRETES }),
    },
    cars: [...FL5_CARS_A_PASSAGES, ...FL5_CARS_B_PASSAGES],
  },
  6: {
    form: 6,
    science: {
      'chem-phys': section({ passages: FL6_CHEM_PHYS_A_PASSAGES, discretes: FL6_CHEM_PHYS_A_DISCRETES }, { passages: FL6_CHEM_PHYS_B_PASSAGES, discretes: FL6_CHEM_PHYS_B_DISCRETES }),
      'bio-biochem': section({ passages: FL6_BIO_BIOCHEM_A_PASSAGES, discretes: FL6_BIO_BIOCHEM_A_DISCRETES }, { passages: FL6_BIO_BIOCHEM_B_PASSAGES, discretes: FL6_BIO_BIOCHEM_B_DISCRETES }),
      'psych-soc': section({ passages: FL6_PSYCH_SOC_A_PASSAGES, discretes: FL6_PSYCH_SOC_A_DISCRETES }, { passages: FL6_PSYCH_SOC_B_PASSAGES, discretes: FL6_PSYCH_SOC_B_DISCRETES }),
    },
    cars: [...FL6_CARS_A_PASSAGES, ...FL6_CARS_B_PASSAGES],
  },
  7: {
    form: 7,
    science: {
      'chem-phys': section({ passages: FL7_CHEM_PHYS_A_PASSAGES, discretes: FL7_CHEM_PHYS_A_DISCRETES }, { passages: FL7_CHEM_PHYS_B_PASSAGES, discretes: FL7_CHEM_PHYS_B_DISCRETES }),
      'bio-biochem': section({ passages: FL7_BIO_BIOCHEM_A_PASSAGES, discretes: FL7_BIO_BIOCHEM_A_DISCRETES }, { passages: FL7_BIO_BIOCHEM_B_PASSAGES, discretes: FL7_BIO_BIOCHEM_B_DISCRETES }),
      'psych-soc': section({ passages: FL7_PSYCH_SOC_A_PASSAGES, discretes: FL7_PSYCH_SOC_A_DISCRETES }, { passages: FL7_PSYCH_SOC_B_PASSAGES, discretes: FL7_PSYCH_SOC_B_DISCRETES }),
    },
    cars: [...FL7_CARS_A_PASSAGES, ...FL7_CARS_B_PASSAGES],
  },
  8: {
    form: 8,
    science: {
      'chem-phys': section({ passages: FL8_CHEM_PHYS_A_PASSAGES, discretes: FL8_CHEM_PHYS_A_DISCRETES }, { passages: FL8_CHEM_PHYS_B_PASSAGES, discretes: FL8_CHEM_PHYS_B_DISCRETES }),
      'bio-biochem': section({ passages: FL8_BIO_BIOCHEM_A_PASSAGES, discretes: FL8_BIO_BIOCHEM_A_DISCRETES }, { passages: FL8_BIO_BIOCHEM_B_PASSAGES, discretes: FL8_BIO_BIOCHEM_B_DISCRETES }),
      'psych-soc': section({ passages: FL8_PSYCH_SOC_A_PASSAGES, discretes: FL8_PSYCH_SOC_A_DISCRETES }, { passages: FL8_PSYCH_SOC_B_PASSAGES, discretes: FL8_PSYCH_SOC_B_DISCRETES }),
    },
    cars: [...FL8_CARS_A_PASSAGES, ...FL8_CARS_B_PASSAGES],
  },
}
