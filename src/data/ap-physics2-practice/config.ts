import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Physics 2',
  description:
    'Full-length practice exam modeled on the official College Board AP Physics 2: Algebra-Based exam. 42 multiple-choice questions across all 7 units of the 2024+ course (thermodynamics, electric force/field/potential, circuits, magnetism and induction, geometric optics, waves/sound/physical optics, modern physics), plus 4 free-response questions. Calculator allowed throughout.',
  backLink: { href: '/ap-physics-2', label: 'AP Physics 2' },
  ctaLinks: [
    { href: '/physics2-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-physics2-unit-tests', label: 'Unit Tests' },
    { href: '/ap-physics2-daily-question', label: 'Daily Question' },
  ],
  accent: 'cyan',
  totalTimeMinutes: 180, // 85 + 95
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '42 multiple-choice questions across all 7 units (Thermodynamics; Electric Force, Field, and Potential; Electric Circuits; Magnetism and Electromagnetism; Geometric Optics; Waves, Sound, and Physical Optics; Modern Physics). Calculator allowed.',
      timeLimitMinutes: 85,
      weight: 50, // May 2027: Section I is 50% of the AP score
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 free-response questions: Q1 Mathematical Routines (circuits), Q2 Translation Between Representations (PV diagram), Q3 Experimental Design (index of refraction), Q4 Qualitative/Quantitative Translation (EM induction).',
      timeLimitMinutes: 95,
      weight: 50, // May 2027: Section II is 50%
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Physics 2 Exam',
    columns: [
      {
        heading: 'Exam Structure (May 2027)',
        items: [
          'Section I: 42 MCQs (85 min, 50%)',
          'Section II: 4 FRQs (95 min, 50%)',
          '   • Q1 Mathematical Routines',
          '   • Q2 Translation Between Representations',
          '   • Q3 Experimental Design & Analysis',
          '   • Q4 Qualitative/Quantitative Translation',
          'Total: 3 hours · Calculator allowed throughout',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'U9 Thermodynamics (15–18%)',
          'U10 Electric Force, Field, and Potential (15–18%)',
          'U11 Electric Circuits (15–18%)',
          'U12 Magnetism and Electromagnetism (12–15%)',
          'U13 Geometric Optics (12–15%)',
          'U14 Waves, Sound, and Physical Optics (12–15%)',
          'U15 Modern Physics (12–15%)',
        ],
      },
    ],
  },
}
