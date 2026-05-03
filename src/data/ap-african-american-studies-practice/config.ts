import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP African American Studies',
  description:
    'Full-length practice exam modeled on the official College Board AP African American Studies exam: 40 multiple-choice questions across all 4 units (Section I Part A, 45 min), 2 short-answer questions (Section I Part B, 20 min), and 1 document-based question (Section II, 40 min).',
  backLink: { href: '/ap-african-american-studies', label: 'AP African American Studies' },
  ctaLinks: [
    { href: '/ap-african-american-studies-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-african-american-studies-frq', label: 'FRQ Practice' },
    { href: '/ap-african-american-studies-daily-question', label: 'Daily Question' },
    { href: '/ap-african-american-studies-study-plans', label: 'Study Plans' },
  ],
  accent: 'amber',
  totalTimeMinutes: 105,
  sections: [
    {
      id: 'mcq',
      name: 'Section I Part A',
      shortName: 'Multiple Choice',
      description:
        '40 MCQs covering all four units: Origins of the African Diaspora, Freedom & Enslavement & Resistance, The Practice of Freedom, and Movements & Debates.',
      timeLimitMinutes: 45,
      items: MCQS,
    },
    {
      id: 'saq',
      name: 'Section I Part B + Section II',
      shortName: 'Short Answer + DBQ',
      description:
        '2 short-answer questions (one source-based on Reconstruction, one non-source-based on the civil rights movement) plus a 6-document DBQ on 20th-century African American cultural and intellectual movements. Self-graded rubric.',
      timeLimitMinutes: 60,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP African American Studies Exam',
    columns: [
      {
        heading: 'Real Exam Structure',
        items: [
          'Section I Part A: 55 MCQs (60 min, 40%)',
          'Section I Part B: 4 SAQs (40 min, 20%)',
          'Section II: 1 DBQ (60 min including 15-min reading, 20%)',
          'Individual Research Project (pre-exam, 20%)',
          'Practice version: scaled to 40 MCQs + 2 SAQs + 1 DBQ',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'Unit 1 — Origins of the African Diaspora (~20%)',
          'Unit 2 — Freedom, Enslavement & Resistance (~25%)',
          'Unit 3 — The Practice of Freedom (~25%)',
          'Unit 4 — Movements & Debates (~30%)',
        ],
      },
    ],
  },
}
