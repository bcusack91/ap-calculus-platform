import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Macroeconomics',
  description:
    'Full-length practice exam modeled on the official College Board AP Macroeconomics exam. 60 stimulus-based MCQs and 3 free-response questions (1 long FRQ + 2 short FRQs) covering all 6 units. Each FRQ part has a 1-point rubric checklist you grade after submitting.',
  backLink: { href: '/ap-macroeconomics', label: 'AP Macroeconomics' },
  ctaLinks: [
    { href: '/ap-macro-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-macro-unit-tests', label: 'Unit Tests' },
    { href: '/ap-macro-daily-question', label: 'Daily Question' },
  ],
  accent: 'cyan',
  totalTimeMinutes: 130, // 70 + 60, matches official exam
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '60 stimulus-based multiple-choice questions across all 6 units (Basic Concepts, Indicators & Business Cycle, National Income & Price Determination, Financial Sector, Long-Run Stabilization, Open Economy).',
      timeLimitMinutes: 70,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '3 free-response questions: one long FRQ (10 parts, ~25 minutes recommended planning + writing) and two short FRQs (5 parts each, ~12.5 minutes each). Self-graded rubric checklist after each part.',
      timeLimitMinutes: 60,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Macroeconomics Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 60 MCQs (70 min, 66%)',
          'Section II: 3 FRQs (60 min, 33%)',
          '   • 1 long FRQ (50%, ~25 min)',
          '   • 2 short FRQs (25% each, ~12.5 min each)',
          'Total: 2 hours 10 minutes',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'U1 Basic Concepts (5–10%)',
          'U2 Indicators / Business Cycle (12–17%)',
          'U3 National Income & Price (17–27%)',
          'U4 Financial Sector (18–23%)',
          'U5 Long-Run Stabilization (20–30%)',
          'U6 Open Economy (10–13%)',
        ],
      },
    ],
  },
}
