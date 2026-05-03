import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Calculus BC',
  description:
    'Full-length practice exam modeled on the official College Board AP Calculus BC exam. 45 multiple-choice questions and 6 free-response questions across all 10 units (including parametric/polar/vector and infinite series). Section I Part A is no-calculator; Part B allows graphing calculator. Section II Part A allows calculator; Part B is no-calculator.',
  backLink: { href: '/ap-calculus-bc', label: 'AP Calculus BC' },
  ctaLinks: [
    { href: '/calcbc-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-calcbc-unit-tests', label: 'Unit Tests' },
    { href: '/ap-calcbc-daily-question', label: 'Daily Question' },
  ],
  accent: 'violet',
  totalTimeMinutes: 195,
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '45 multiple-choice questions across all 10 units. Part A (Q1–Q30): NO calculator (60 min). Part B (Q31–Q45): graphing calculator allowed/required (45 min). Equal weight per question.',
      timeLimitMinutes: 105,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '6 free-response questions. Part A (Q1, Q2): graphing calculator REQUIRED (~30 min). Part B (Q3–Q6): NO calculator (~60 min). 9 points each. Self-graded rubric checklist after each part.',
      timeLimitMinutes: 90,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Calculus BC Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 45 MCQs (105 min, 50%)',
          '   • Part A: 30 questions, no calculator (60 min)',
          '   • Part B: 15 questions, calculator (45 min)',
          'Section II: 6 FRQs (90 min, 50%)',
          '   • Part A: 2 questions, calculator (30 min)',
          '   • Part B: 4 questions, no calculator (60 min)',
          'Total: 3 hours 15 minutes',
        ],
      },
      {
        heading: 'Unit Weighting (BC adds Units 9 & 10)',
        items: [
          'U1 Limits & Continuity (4–7%)',
          'U2 Differentiation: Definition & Properties (4–7%)',
          'U3 Differentiation: Composite/Implicit/Inverse (4–7%)',
          'U4 Contextual Apps of Differentiation (6–9%)',
          'U5 Analytical Apps of Differentiation (8–11%)',
          'U6 Integration & Accumulation (17–20%)',
          'U7 Differential Equations (6–9%)',
          'U8 Applications of Integration (6–9%)',
          'U9 Parametric, Polar, Vector-Valued (11–12%)',
          'U10 Infinite Sequences & Series (17–18%)',
        ],
      },
    ],
  },
}
