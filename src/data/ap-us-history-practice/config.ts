import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { SAQS, DBQ, LEQ } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP U.S. History',
  description:
    'Full-length practice exam modeled on the official College Board AP U.S. History exam. 55 stimulus-based MCQs, 3 required SAQs, 1 DBQ with 7 documents, and 1 required LEQ, in the format used from the May 2027 exam. Free-response sections use a self-grading rubric checklist after you submit.',
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
      weight: 40, // May 2027: Section I Part A is 40% of the AP score
      items: MCQS,
    },
    {
      id: 'saq',
      name: 'Section I, Part B',
      shortName: 'Short Answer',
      description:
        '3 required short-answer questions, each with a source: 1 secondary text (historians on the American Revolution), 1 primary text (the 1848 Declaration of Sentiments), and 1 non-text source (a 1904 political cartoon). Each part is graded on a 1-point rubric you check off yourself.',
      timeLimitMinutes: 40,
      weight: 20, // May 2027: Section I Part B, SAQs, is 20%
      items: SAQS,
    },
    {
      id: 'dbq',
      name: 'Section II, Part A',
      shortName: 'Document-Based Question',
      description:
        '1 DBQ with 7 historical documents (1945–1965) and a 7-point rubric. Includes 15 minutes of suggested reading time built into the writing window.',
      timeLimitMinutes: 60,
      weight: 25, // May 2027: Section II DBQ is 25%
      items: [DBQ],
    },
    {
      id: 'leq',
      name: 'Section II, Part B',
      shortName: 'Long Essay Question',
      description:
        '1 required long essay question with a broad prompt covering 1800–1945; you may focus on one or more developments it names. Graded on a 6-point rubric.',
      timeLimitMinutes: 40,
      weight: 15, // May 2027: Section II LEQ is 15%
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
          'Section I-B: 3 required SAQs, all with sources (40 min, 20%)',
          'Section II-A: 1 DBQ (60 min, 25%)',
          'Section II-B: 1 required LEQ (40 min, 15%)',
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
