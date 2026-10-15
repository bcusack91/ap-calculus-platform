import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { SAQS, DBQ, LEQ } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP World History',
  description:
    'Full-length practice exam modeled on the official College Board AP World History: Modern exam. 55 stimulus-based MCQs, 3 required SAQs, 1 DBQ with 7 documents, and 1 required LEQ, in the format used from the May 2027 exam. Free-response sections use a self-grading rubric checklist after you submit.',
  backLink: { href: '/ap-world-history', label: 'AP World History' },
  ctaLinks: [
    { href: '/ap-world-history-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-world-history-unit-tests', label: 'Unit Tests' },
    { href: '/ap-world-history-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  totalTimeMinutes: 195, // 55 + 40 + 60 + 40 = matches official exam
  sections: [
    {
      id: 'mcq',
      name: 'Section I, Part A',
      shortName: 'Multiple Choice',
      description:
        '55 stimulus-based multiple-choice questions covering Units 1–9, with primary and secondary source prompts and balanced distractors.',
      timeLimitMinutes: 55,
      items: MCQS,
    },
    {
      id: 'saq',
      name: 'Section I, Part B',
      shortName: 'Short Answer',
      description:
        '3 required short-answer questions, each with a source: 1 secondary text (land-based empires and industrial competitors), 1 primary text (Hồ Chí Minh, 1945), and 1 non-text source (a data table on the trans-Atlantic slave trade). Each part is graded on a 1-point rubric you check off yourself.',
      timeLimitMinutes: 40,
      items: SAQS,
    },
    {
      id: 'dbq',
      name: 'Section II, Part A',
      shortName: 'Document-Based Question',
      description:
        '1 DBQ with 7 historical documents on industrialization and workers (1750–1900) and a 7-point rubric. Includes 15 minutes of suggested reading time built into the writing window.',
      timeLimitMinutes: 60,
      items: [DBQ],
    },
    {
      id: 'leq',
      name: 'Section II, Part B',
      shortName: 'Long Essay Question',
      description:
        '1 required long essay question with a broad prompt covering c. 1200–c. 1750; you may focus on one or more developments it names. Graded on a 6-point rubric.',
      timeLimitMinutes: 40,
      items: [LEQ],
    },
  ],
  aboutInfo: {
    title: 'About the AP World History Exam',
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
