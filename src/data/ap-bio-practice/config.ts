import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Biology',
  description:
    'Full-length practice exam modeled on the official College Board AP Biology exam. 60 stimulus-based MCQs and 6 free-response questions (2 long + 4 short) covering all 8 units. Each FRQ part has a 1-point rubric checklist you grade after submitting.',
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
        '60 stimulus-based multiple-choice questions across all 8 units (Chemistry of Life; Cell Structure & Function; Cellular Energetics; Cell Communication & Cell Cycle; Heredity; Gene Expression & Regulation; Natural Selection; Ecology).',
      timeLimitMinutes: 90,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '6 free-response questions: 2 long FRQs (~25 min each) and 4 short FRQs (~10 min each). Self-graded rubric checklist after each part.',
      timeLimitMinutes: 90,
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
