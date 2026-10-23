import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Precalculus',
  description:
    'Full-length practice exam, form 3, modeled on the May 2027 College Board AP Precalculus exam: 42 multiple-choice questions (Section I, 105 min) over Units 1–3, the units the AP exam assesses, including graph-description, rational-function, composition-table, sinusoid and regression sets, plus 4 free-response questions (Section II, 70 min): function concepts and a tree-growth model with a calculator; an engine-piston graph and symbolic manipulations without one.',
  backLink: { href: '/ap-precalculus', label: 'AP Precalculus' },
  ctaLinks: [
    { href: '/ap-precalculus-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-precalc-frq', label: 'FRQ Practice' },
    { href: '/ap-precalculus-daily-question', label: 'Daily Question' },
  ],
  accent: 'indigo',
  totalTimeMinutes: 175, // 105 + 70
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '42 MCQs covering Units 1–3. Part A (Q1–Q29) is no calculator (65 min); Part B (Q30–Q42) requires a graphing calculator (40 min).',
      timeLimitMinutes: 105,
      weight: 62.5, // May 2027: Section I is 62.5% of the AP score (Part A 43.75% + Part B 18.75%)
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 FRQs (6 points each, 24 total). Part A, graphing calculator required (35 min): Q1 Function Concepts, Q2 Modeling a Non-Periodic Context. Part B, no calculator (35 min): Q3 Modeling a Periodic Context, Q4 Symbolic Manipulations. Self-graded rubric.',
      timeLimitMinutes: 70,
      weight: 37.5, // May 2027: Section II is 37.5% (Part A 18.75% + Part B 18.75%)
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Precalculus Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 42 MCQs (105 min, 62.5%)',
          '   • Part A: 29 no-calc (65 min)',
          '   • Part B: 13 graphing calculator required (40 min)',
          'Section II: 4 FRQs (70 min, 37.5%)',
          '   • Part A, graphing calculator (35 min): Q1 Function Concepts, Q2 Modeling a Non-Periodic Context',
          '   • Part B, no calculator (35 min): Q3 Modeling a Periodic Context, Q4 Symbolic Manipulations',
          '   • 6 points each',
          'Total: 2 hours 55 minutes',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'Unit 1 — Polynomial & Rational Functions (30–40%)',
          'Unit 2 — Exponential & Logarithmic Functions (27–40%)',
          'Unit 3 — Trigonometric & Polar Functions (30–35%)',
          'Only these three units are assessed on the AP exam',
        ],
      },
    ],
  },
}
