import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Statistics',
  description:
    'Full-length practice exam modeled on the official College Board AP Statistics exam. 40 multiple-choice questions across all 9 units, plus 6 free-response questions (5 short + 1 investigative task). Calculator and formulas/tables provided throughout.',
  backLink: { href: '/ap-statistics', label: 'AP Statistics' },
  ctaLinks: [
    { href: '/ap-statistics-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-statistics-unit-tests', label: 'Unit Tests' },
    { href: '/ap-statistics-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  totalTimeMinutes: 180, // 90 + 90
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '40 multiple-choice questions across all 9 units (Categorical Data, Quantitative Data, Two-Variable Data, Collecting Data, Probability/RVs, Sampling Distributions, Inference for Proportions, Inference for Means, Chi-Square & Slopes). Calculator allowed.',
      timeLimitMinutes: 90,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '6 free-response questions: Q1–Q5 standard FRQs (~12 min each), plus Q6 INVESTIGATIVE TASK (~25 min, multi-method analysis). Self-graded rubric checklist.',
      timeLimitMinutes: 90,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Statistics Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 40 MCQs (90 min, 50%)',
          'Section II: 6 FRQs (90 min, 50%)',
          '   • Q1–Q5 short FRQs (~12 min each)',
          '   • Q6 Investigative Task (~25 min)',
          'Total: 3 hours · Calculator allowed throughout',
          'Formulas and tables provided',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'U1 Categorical Data (5–7%)',
          'U2 Quantitative Data (17–23%)',
          'U3 Two-Variable Data (5–7%)',
          'U4 Collecting Data (12–15%)',
          'U5 Probability, RVs, Distributions (10–20%)',
          'U6 Sampling Distributions (7–12%)',
          'U7 Inference for Proportions (12–15%)',
          'U8 Inference for Means (10–18%)',
          'U9 Chi-Square & Slopes (2–5%)',
        ],
      },
    ],
  },
}
