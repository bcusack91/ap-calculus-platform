import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Physics 1',
  description:
    'Practice form 2, a second full-length exam modeled on the official College Board AP Physics 1: Algebra-Based exam (2024+ CED, May 2027 format) with all-new questions. 42 multiple-choice questions across all 8 units, plus 4 free-response questions covering mathematical routines, translation between representations, experimental design, and qualitative/quantitative translation. Calculator allowed throughout.',
  backLink: { href: '/ap-physics-1', label: 'AP Physics 1' },
  ctaLinks: [
    { href: '/physics1-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-physics1-unit-tests', label: 'Unit Tests' },
    { href: '/ap-physics1-daily-question', label: 'Daily Question' },
  ],
  accent: 'blue',
  totalTimeMinutes: 180, // 85 + 95
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '42 multiple-choice questions across all 8 units (Kinematics, Forces, Energy, Momentum, Rotation, Rotational Energy, Oscillations, Fluids). Calculator allowed.',
      timeLimitMinutes: 85,
      weight: 50, // May 2027: Section I is 50% of the AP score
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 free-response questions: Q1 Mathematical Routines, Q2 Translation Between Representations, Q3 Experimental Design and Analysis, Q4 Qualitative/Quantitative Translation. Self-graded rubric checklist.',
      timeLimitMinutes: 95,
      weight: 50, // May 2027: Section II is 50%
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Physics 1 Exam',
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
          'U1 Kinematics (10–15%)',
          'U2 Force & Translational Dynamics (18–23%)',
          'U3 Work, Energy, Power (18–23%)',
          'U4 Linear Momentum (10–15%)',
          'U5 Torque & Rotational Dynamics (10–15%)',
          'U6 Energy & Momentum of Rotating Systems (5–8%)',
          'U7 Oscillations / SHM (5–8%)',
          'U8 Fluids (10–15%)',
        ],
      },
    ],
  },
}
