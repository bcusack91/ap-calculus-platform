import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Physics 2',
  description:
    'Full-length practice exam modeled on the official College Board AP Physics 2: Algebra-Based exam. 40 multiple-choice questions across all 7 units (fluids, thermodynamics, E&M, optics, modern physics), plus 4 free-response questions. Calculator allowed throughout.',
  backLink: { href: '/ap-physics-2', label: 'AP Physics 2' },
  ctaLinks: [
    { href: '/physics2-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-physics2-unit-tests', label: 'Unit Tests' },
    { href: '/ap-physics2-daily-question', label: 'Daily Question' },
  ],
  accent: 'cyan',
  totalTimeMinutes: 180,
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '40 multiple-choice questions across all 7 units (Fluids, Thermodynamics, Electric Forces/Fields/Potential, DC Circuits, Magnetism & Induction, Geometric Optics & Waves, Modern Physics). Calculator allowed.',
      timeLimitMinutes: 80,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 free-response questions: Q1 Mathematical Routines (circuits), Q2 Translation Between Representations (PV diagram), Q3 Experimental Design (index of refraction), Q4 Qualitative/Quantitative Translation (EM induction).',
      timeLimitMinutes: 100,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Physics 2 Exam',
    columns: [
      {
        heading: 'Exam Structure (2024+)',
        items: [
          'Section I: 40 MCQs (80 min, 50%)',
          'Section II: 4 FRQs (100 min, 50%)',
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
          'U1 Fluids (10–12%)',
          'U2 Thermodynamics (12–18%)',
          'U3 Electric Forces, Fields, Potential (18–22%)',
          'U4 Electric Circuits (15–18%)',
          'U5 Magnetism & EM Induction (12–15%)',
          'U6 Geometric Optics & Waves (12–15%)',
          'U7 Modern / Quantum Physics (10–12%)',
        ],
      },
    ],
  },
}
