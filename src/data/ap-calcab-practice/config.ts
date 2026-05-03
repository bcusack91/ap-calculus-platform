import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Calculus AB',
  description:
    'Full-length practice exam modeled on the official College Board AP Calculus AB exam. 45 multiple-choice questions and 6 free-response questions across all 8 units. Section I Part A is no-calculator; Part B allows graphing calculator. Section II Part A allows calculator; Part B is no-calculator.',
  backLink: { href: '/ap-calculus-ab', label: 'AP Calculus AB' },
  ctaLinks: [
    { href: '/calcab-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-calcab-unit-tests', label: 'Unit Tests' },
    { href: '/ap-calcab-daily-question', label: 'Daily Question' },
  ],
  accent: 'orange',
  totalTimeMinutes: 195, // 105 + 90
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '45 multiple-choice questions across all 8 units. Part A (Q1–Q30): NO calculator (60 min). Part B (Q31–Q45): graphing calculator allowed/required (45 min). Equal weight per question.',
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
    title: 'About the AP Calculus AB Exam',
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
        heading: 'Unit Weighting',
        items: [
          'U1 Limits & Continuity (10–12%)',
          'U2 Differentiation: Definition & Properties (10–12%)',
          'U3 Differentiation: Composite/Implicit/Inverse (9–13%)',
          'U4 Contextual Apps of Differentiation (10–15%)',
          'U5 Analytical Apps of Differentiation (15–18%)',
          'U6 Integration & Accumulation (17–20%)',
          'U7 Differential Equations (6–12%)',
          'U8 Applications of Integration (10–15%)',
        ],
      },
    ],
  },
}
