import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { SAQS, DBQ } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP African American Studies',
  description:
    'Full-length practice exam modeled on the official College Board AP African American Studies exam: 60 multiple-choice questions, mostly in source-based sets, across all 4 units (Section I, 70 min), plus 3 short-answer questions (40 min) and 1 document-based question with 5 sources (45 min).',
  backLink: { href: '/ap-african-american-studies', label: 'AP African American Studies' },
  ctaLinks: [
    { href: '/ap-african-american-studies-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-african-american-studies-frq', label: 'FRQ Practice' },
    { href: '/ap-african-american-studies-daily-question', label: 'Daily Question' },
    { href: '/ap-african-american-studies-study-plans', label: 'Study Plans' },
  ],
  accent: 'amber',
  totalTimeMinutes: 155, // 70 + 40 + 45; the 10-min Exam Day Validation (project) question is not included
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
      name: 'Section II, Part A',
      shortName: 'Short Answer',
      description:
        '3 short-answer questions: Question 1 uses a text source (Frederick Douglass, 1865; 4 points), Question 2 uses a non-text source (Jacob Lawrence\'s Migration Series; 3 points), and Question 3 has no source (the civil rights movement; 3 points). Each part is graded on a 1-point rubric you check off yourself.',
      timeLimitMinutes: 40,
      items: SAQS,
    },
    {
      id: 'dbq',
      name: 'Section II, Part B',
      shortName: 'Document-Based Question',
      description:
        '1 document-based question with 5 sources on the Harlem Renaissance, graded on the 7-point AP African American Studies rubric (thesis, context, evidence from sources, evidence beyond sources, source use, reasoning).',
      timeLimitMinutes: 45,
      items: [DBQ],
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
          'Practice version: full 60 MCQs + 3 SAQs + 1 DBQ with 5 sources (no project validation question)',
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
