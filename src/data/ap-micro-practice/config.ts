import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Microeconomics',
  description:
    'Full-length practice exam modeled on the official College Board AP Microeconomics exam. 60 stimulus-based MCQs and 3 free-response questions (1 long FRQ + 2 short FRQs) covering all 6 units. Each FRQ part has a 1-point rubric checklist you grade after submitting.',
  backLink: { href: '/ap-microeconomics', label: 'AP Microeconomics' },
  ctaLinks: [
    { href: '/ap-micro-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-micro-unit-tests', label: 'Unit Tests' },
    { href: '/ap-micro-daily-question', label: 'Daily Question' },
  ],
  accent: 'violet',
  totalTimeMinutes: 130, // 70 + 60, matches official exam
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '60 stimulus-based multiple-choice questions across all 6 units (Basic Concepts; Supply & Demand; Production, Cost & Perfect Competition; Imperfect Competition; Factor Markets; Market Failure & Government).',
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
    title: 'About the AP Microeconomics Exam',
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
          'U1 Basic Concepts (12–15%)',
          'U2 Supply & Demand (20–25%)',
          'U3 Production, Cost & Perfect Comp (22–25%)',
          'U4 Imperfect Competition (15–22%)',
          'U5 Factor Markets (10–13%)',
          'U6 Market Failure & Government (8–13%)',
        ],
      },
    ],
  },
}
