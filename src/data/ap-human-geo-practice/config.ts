import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Human Geography',
  description:
    'Full-length practice exam modeled on the official College Board AP Human Geography exam. 60 stimulus-based MCQs and 3 multi-part free-response questions (one no-stimulus, one one-stimulus, one with paired stimuli) covering all 7 units. FRQs use a self-grading rubric checklist after you submit.',
  backLink: { href: '/ap-human-geography', label: 'AP Human Geography' },
  ctaLinks: [
    { href: '/ap-human-geo-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-human-geo-unit-tests', label: 'Unit Tests' },
    { href: '/ap-human-geo-daily-question', label: 'Daily Question' },
  ],
  accent: 'green',
  totalTimeMinutes: 135, // 60 + 75 = matches official exam
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '60 stimulus-based multiple-choice questions across all 7 units, with maps, charts, descriptions, and source quotations.',
      timeLimitMinutes: 60,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '3 free-response questions, each with 7 parts (A–G). FRQ 1 has no stimulus, FRQ 2 has one stimulus, and FRQ 3 has paired stimuli. Each part is graded on a 1-point rubric you check off yourself.',
      timeLimitMinutes: 75,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Human Geography Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 60 MCQs (60 min, 50%)',
          'Section II: 3 FRQs (75 min, 50%)',
          'Total: 2 hours 15 minutes',
        ],
      },
      {
        heading: 'Scoring',
        items: [
          'Score range: 1–5',
          'Each FRQ scored out of 7 rubric points',
          'Total FRQ points: 21',
        ],
      },
    ],
  },
}
