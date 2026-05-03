import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { SAQS, DBQ, LEQ } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP U.S. History',
  description:
    'Full-length practice exam modeled on the official College Board AP U.S. History exam. 55 stimulus-based MCQs, 3 SAQs, 1 DBQ with 7 documents, and 1 LEQ with three prompt choices spanning the colonial era through the late 20th century. Free-response sections use a self-grading rubric checklist after you submit.',
  backLink: { href: '/ap-us-history', label: 'AP U.S. History' },
  ctaLinks: [
    { href: '/ap-us-history-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-us-history-unit-tests', label: 'Unit Tests' },
    { href: '/ap-us-history-daily-question', label: 'Daily Question' },
  ],
  accent: 'red',
  totalTimeMinutes: 195, // 55 + 40 + 60 + 40 = matches official exam
  sections: [
    {
      id: 'mcq',
      name: 'Section I, Part A',
      shortName: 'Multiple Choice',
      description:
        '55 stimulus-based multiple-choice questions covering Periods 1–9 (1491–present), with primary and secondary source prompts and balanced distractors.',
      timeLimitMinutes: 55,
      items: MCQS,
    },
    {
      id: 'saq',
      name: 'Section I, Part B',
      shortName: 'Short Answer',
      description:
        '3 short-answer questions: 1 secondary-source-based, 1 primary-source-based, and 1 student-choice (pick Option A: 1763–1815 or Option B: 1945–1980). Each part is graded on a 1-point rubric you check off yourself.',
      timeLimitMinutes: 40,
      items: SAQS,
    },
    {
      id: 'dbq',
      name: 'Section II, Part A',
      shortName: 'Document-Based Question',
      description:
        '1 DBQ with 7 historical documents and a 7-point rubric. Includes 15 minutes of suggested reading time built into the writing window.',
      timeLimitMinutes: 60,
      items: [DBQ],
    },
    {
      id: 'leq',
      name: 'Section II, Part B',
      shortName: 'Long Essay Question',
      description:
        '1 long essay question — choose ONE of three prompts spanning the Revolutionary era, the long 19th century, or the modern federal-state era. Graded on a 6-point rubric.',
      timeLimitMinutes: 40,
      items: [LEQ],
    },
  ],
  aboutInfo: {
    title: 'About the AP U.S. History Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I-A: 55 MCQs (55 min, 40%)',
          'Section I-B: 3 SAQs (40 min, 20%)',
          'Section II-A: 1 DBQ (60 min, 25%)',
          'Section II-B: 1 LEQ (40 min, 15%)',
          'Total: 3 hours 15 minutes',
        ],
      },
      {
        heading: 'Scoring',
        items: [
          'Score range: 1–5',
          'DBQ: out of 7 rubric points',
          'LEQ: out of 6 rubric points',
          'SAQ parts: 1 rubric point each',
        ],
      },
    ],
  },
}
