import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Physics C: E&M',
  description:
    'Full-length practice exam modeled on the official College Board AP Physics C: Electricity & Magnetism exam (2025+ CED). 42 calculus-based multiple-choice questions across all units, plus 4 free-response questions covering mathematical routines, translation between representations, experimental design, and qualitative/quantitative translation. Calculator allowed throughout.',
  backLink: { href: '/ap-physics-c-em', label: 'AP Physics C: E&M' },
  ctaLinks: [
    { href: '/ap-physics-c-em-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-physics-c-em-frq', label: 'FRQ Practice' },
    { href: '/ap-physics-c-em-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  totalTimeMinutes: 180, // 85 + 95
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '42 calculus-based MCQs covering electrostatics (Coulomb, Gauss\'s law), conductors and capacitors, electric circuits (RC, Kirchhoff), magnetic fields and forces (Biot-Savart, Ampère\'s law), and electromagnetic induction (Faraday, inductors). Calculator allowed.',
      timeLimitMinutes: 85,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 calculus-based FRQs: Q1 Mathematical Routines, Q2 Translation Between Representations, Q3 Experimental Design, Q4 Qualitative/Quantitative Translation. Self-graded rubric checklist.',
      timeLimitMinutes: 95,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Physics C: E&M Exam',
    columns: [
      {
        heading: 'Exam Structure (2025+)',
        items: [
          'Section I: 42 MCQs (85 min, 50%)',
          'Section II: 4 FRQs (95 min, 50%)',
          '   • Q1 Mathematical Routines',
          '   • Q2 Translation Between Representations',
          '   • Q3 Experimental Design & Analysis',
          '   • Q4 Qualitative/Quantitative Translation',
          'Total: 3 hours · Calculus-based · Calculator throughout',
        ],
      },
      {
        heading: 'Topic Weighting',
        items: [
          'U8 Electric Charges, Fields, and Gauss\'s Law (15–25%)',
          'U9 Electric Potential (10–20%)',
          'U10 Conductors and Capacitors (10–15%)',
          'U11 Electric Circuits (15–25%)',
          'U12 Magnetic Fields and Electromagnetism (10–20%)',
          'U13 Electromagnetic Induction (10–20%)',
        ],
      },
    ],
  },
}
