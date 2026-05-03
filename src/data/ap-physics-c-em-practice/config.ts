import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Physics C: E&M',
  description:
    'Full-length practice exam modeled on the official College Board AP Physics C: Electricity & Magnetism exam (2025+ CED). 40 calculus-based multiple-choice questions across all units, plus 4 free-response questions covering mathematical routines, translation between representations, experimental design, and qualitative/quantitative translation. Calculator allowed throughout.',
  backLink: { href: '/ap-physics-c-em', label: 'AP Physics C: E&M' },
  ctaLinks: [
    { href: '/ap-physics-c-em-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-physics-c-em-frq', label: 'FRQ Practice' },
    { href: '/ap-physics-c-em-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  totalTimeMinutes: 180, // 80 + 100
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '40 calculus-based MCQs covering electrostatics (Coulomb, Gauss\'s law), conductors and capacitors, electric circuits (RC, Kirchhoff), magnetic fields and forces (Biot-Savart, Ampère\'s law), and electromagnetic induction (Faraday, inductors). Calculator allowed.',
      timeLimitMinutes: 80,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 calculus-based FRQs: Q1 Mathematical Routines, Q2 Translation Between Representations, Q3 Experimental Design, Q4 Qualitative/Quantitative Translation. Self-graded rubric checklist.',
      timeLimitMinutes: 100,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Physics C: E&M Exam',
    columns: [
      {
        heading: 'Exam Structure (2025+)',
        items: [
          'Section I: 40 MCQs (80 min, 50%)',
          'Section II: 4 FRQs (100 min, 50%)',
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
          'Electrostatics (Coulomb, fields, Gauss) (~26–34%)',
          'Conductors, Capacitors, Dielectrics (~14–17%)',
          'Electric Circuits (~14–17%)',
          'Magnetic Fields & Forces (~17–23%)',
          'Electromagnetic Induction (~17–23%)',
        ],
      },
    ],
  },
}
