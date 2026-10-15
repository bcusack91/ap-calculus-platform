import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Statistics',
  description:
    'Full-length practice exam modeled on the AP Statistics exam for the revised 2026–27 course (first given May 2027). 42 four-choice multiple-choice questions across all 5 units, plus 4 ten-point free-response questions. The real exam is fully digital in Bluebook; a graphing calculator and the built-in Desmos calculator, plus formulas and tables, are allowed throughout.',
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
        '42 multiple-choice questions (4 choices each) across all 5 units: One-Variable Data and Collecting Data; Probability, Random Variables, and Probability Distributions; Inference for Proportions (including chi-square); Inference for Means; and Regression Analysis. Includes two 3-question sets that share a scenario. Calculator allowed.',
      timeLimitMinutes: 90,
      weight: 50, // May 2027: Section I is 50% of the AP score
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 free-response questions, 10 points each (~22 min each): Q1 Multi-Focus on Practices 1 and 2 (formulating questions and collecting data), Q2 Multi-Focus on Practices 3 and 4 (analyzing data and interpreting results), Q3 Inference, and Q4 Multi-Focus on Practices 2, 3, and 4. Self-graded rubric checklist.',
      timeLimitMinutes: 90,
      weight: 50, // May 2027: Section II is 50% (each FRQ 12.5%)
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Statistics Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 42 MCQs, 4 choices each (90 min, 50%)',
          'Section II: 4 FRQs, 10 points each (90 min, 50%; 12.5% each)',
          '   • Q1 Multi-Focus on Practices 1 and 2',
          '   • Q2 Multi-Focus on Practices 3 and 4',
          '   • Q3 Inference (hypothesis test or confidence interval)',
          '   • Q4 Multi-Focus on Practices 2, 3, and 4',
          'Total: 3 hours · Fully digital (Bluebook) from May 2027',
          'Graphing calculator + built-in Desmos; formulas and tables provided',
        ],
      },
      {
        heading: 'Unit Weighting (multiple choice, 2026–27 course)',
        items: [
          'U1 Exploring One-Variable Data and Collecting Data (20–30%)',
          'U2 Probability, Random Variables, and Probability Distributions (15–25%)',
          'U3 Inference for Categorical Data: Proportions (15–25%)',
          'U4 Inference for Quantitative Data: Means (10–20%)',
          'U5 Regression Analysis (10–20%)',
          'Removed for 2026–27: departures from linearity, combining random variables, the geometric distribution, chi-square goodness-of-fit, and inference for slope',
        ],
      },
    ],
  },
}
