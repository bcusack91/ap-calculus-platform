import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP African American Studies',
  description:
    'Full-length practice exam modeled on the official College Board AP African American Studies exam: 60 multiple-choice questions, mostly in source-based sets, across all 4 units (Section I, 70 min), plus 2 short-answer questions and 1 document-based question (free response, 60 min).',
  backLink: { href: '/ap-african-american-studies', label: 'AP African American Studies' },
  ctaLinks: [
    { href: '/ap-african-american-studies-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-african-american-studies-frq', label: 'FRQ Practice' },
    { href: '/ap-african-american-studies-daily-question', label: 'Daily Question' },
    { href: '/ap-african-american-studies-study-plans', label: 'Study Plans' },
  ],
  accent: 'amber',
  totalTimeMinutes: 130,
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '60 MCQs, most in sets of 3 built around a text excerpt, image description, or data table, covering all four units: Origins of the African Diaspora; Freedom, Enslavement, and Resistance; The Practice of Freedom; and Movements and Debates.',
      timeLimitMinutes: 70,
      items: MCQS,
    },
    {
      id: 'saq',
      name: 'Section II',
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
          'Section I: 60 MCQs in source-based sets (70 min, 60%)',
          'Project validation question: 1 written response (10 min, 1.5%)',
          'Section II: 3 SAQs (40 min, 18%) + 1 DBQ with 5 documents (45 min, 12%)',
          'Individual Student Project (3-week in-class project, 8.5%)',
          'Practice version: full 60 MCQs + 2 SAQs + 1 DBQ',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'Unit 1 — Origins of the African Diaspora (20–25%)',
          'Unit 2 — Freedom, Enslavement, and Resistance (30–35%)',
          'Unit 3 — The Practice of Freedom (20–25%)',
          'Unit 4 — Movements and Debates (20–25%)',
        ],
      },
    ],
  },
}
