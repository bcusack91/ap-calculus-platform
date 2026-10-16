import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Biology',
  description:
    'Form 2: a second full-length AP Biology practice exam in the May 2027 format. 60 MCQs, about half of them in data and experiment sets of 4–5 questions, and 6 free-response questions (2 long at 9 points, 4 short at 4 points) covering all 8 units. Each FRQ point is a rubric checkbox you grade after submitting.',
  backLink: { href: '/ap-biology', label: 'AP Biology' },
  ctaLinks: [
    { href: '/ap-bio-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-bio-unit-tests', label: 'Unit Tests' },
    { href: '/ap-bio-daily-question', label: 'Daily Question' },
  ],
  accent: 'green',
  totalTimeMinutes: 180, // 90 + 90
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '60 multiple-choice questions, many built on data or scenarios, across all 8 units (Chemistry of Life; Cell Structure & Function; Cellular Energetics; Cell Communication & Cell Cycle; Heredity; Gene Expression & Regulation; Natural Selection; Ecology).',
      timeLimitMinutes: 90,
      weight: 50, // May 2027: Section I is 50% of the AP score
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '6 free-response questions: 2 long FRQs (~25 min each) and 4 short FRQs (~10 min each). Self-graded rubric checklist after each part.',
      timeLimitMinutes: 90,
      weight: 50, // May 2027: Section II is 50%
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Biology Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 60 MCQs (90 min, 50%)',
          'Section II: 6 FRQs (90 min, 50%)',
          '   • 2 long FRQs (~25 min each)',
          '   • 4 short FRQs (~10 min each)',
          'Total: 3 hours',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'U1 Chemistry of Life (8–11%)',
          'U2 Cell Structure & Function (10–13%)',
          'U3 Cellular Energetics (12–16%)',
          'U4 Cell Communication & Cell Cycle (10–15%)',
          'U5 Heredity (8–11%)',
          'U6 Gene Expression & Regulation (12–16%)',
          'U7 Natural Selection (13–20%)',
          'U8 Ecology (10–15%)',
        ],
      },
    ],
  },
}
