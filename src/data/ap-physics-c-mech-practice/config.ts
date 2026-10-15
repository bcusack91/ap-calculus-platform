import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Physics C: Mechanics',
  description:
    'Full-length practice exam modeled on the official College Board AP Physics C: Mechanics exam (2025+ CED). 40 calculus-based multiple-choice questions across all 7 units, plus 4 free-response questions covering mathematical routines, translation between representations, experimental design, and qualitative/quantitative translation. Calculator allowed throughout.',
  backLink: { href: '/ap-physics-c-mechanics', label: 'AP Physics C: Mechanics' },
  ctaLinks: [
    { href: '/ap-physics-c-mech-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-physics-c-mech-frq', label: 'FRQ Practice' },
    { href: '/ap-physics-c-mech-daily-question', label: 'Daily Question' },
  ],
  accent: 'blue',
  totalTimeMinutes: 180, // 80 + 100
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '40 calculus-based MCQs across all 7 units (Kinematics, Force and Translational Dynamics, Work/Energy/Power, Linear Momentum, Torque and Rotational Dynamics, Energy and Momentum of Rotating Systems, Oscillations), with gravitation and orbits woven in. Calculator allowed.',
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
    title: 'About the AP Physics C: Mechanics Exam',
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
        heading: 'Unit Weighting',
        items: [
          'U1 Kinematics (10–15%)',
          'U2 Force and Translational Dynamics (20–25%)',
          'U3 Work, Energy, and Power (15–25%)',
          'U4 Linear Momentum (10–20%)',
          'U5 Torque and Rotational Dynamics (10–15%)',
          'U6 Energy and Momentum of Rotating Systems (10–15%)',
          'U7 Oscillations (10–15%)',
        ],
      },
    ],
  },
}
