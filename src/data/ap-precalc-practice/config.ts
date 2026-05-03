import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Precalculus',
  description:
    'Full-length practice exam modeled on the official College Board AP Precalculus exam: 40 multiple-choice questions (Section I, 120 min) covering polynomial, rational, exponential, logarithmic, trigonometric, polar, sequence, vector, and matrix functions, plus 4 free-response questions (Section II, 60 min) on function concepts, modeling, and symbolic manipulation.',
  backLink: { href: '/ap-precalculus', label: 'AP Precalculus' },
  ctaLinks: [
    { href: '/ap-precalculus-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-precalc-frq', label: 'FRQ Practice' },
    { href: '/precalc-daily-question', label: 'Daily Question' },
  ],
  accent: 'indigo',
  totalTimeMinutes: 180,
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '40 MCQs covering Units 1–4. Part A (Q1–Q28) is no calculator (80 min); Part B (Q29–Q40) is calculator-allowed (40 min). Reference formulas provided.',
      timeLimitMinutes: 120,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 FRQs (6 points each, 24 total): Q1 Function Concepts (calc), Q2 Modeling (calc), Q3 Symbolic Manipulation (no calc), Q4 Trig & Symbolic Manipulation (no calc). Self-graded rubric.',
      timeLimitMinutes: 60,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Precalculus Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 40 MCQs (120 min, 62.5%)',
          '   • Part A: 28 no-calc (80 min)',
          '   • Part B: 12 calc-allowed (40 min)',
          'Section II: 4 FRQs (60 min, 37.5%)',
          '   • Q1 Function Concepts (calc, 6 pts)',
          '   • Q2 Modeling (calc, 6 pts)',
          '   • Q3 Symbolic Manipulation (no calc, 6 pts)',
          '   • Q4 Trig Symbolic Manipulation (no calc, 6 pts)',
          'Total: 3 hours',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'Unit 1 — Polynomial & Rational Functions (~30%)',
          'Unit 2 — Exponential & Logarithmic Functions (~30%)',
          'Unit 3 — Trigonometric & Polar Functions (~30%)',
          'Unit 4 — Functions, Sequences, Vectors, Matrices (~10%, not assessed on the AP exam itself but may appear in MCQ practice)',
        ],
      },
    ],
  },
}
