import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP English Language & Composition',
  description:
    'Full-length practice exam modeled on the official College Board AP English Language & Composition exam. 45 multiple-choice questions across five passages (3 reading sets analyzing rhetorical choices in nonfiction, 2 writing/composition sets revising student drafts), plus 3 free-response essays: synthesis, rhetorical analysis, and argument.',
  backLink: { href: '/ap-english-language', label: 'AP English Language' },
  ctaLinks: [
    { href: '/ap-english-lang-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-english-lang-frq', label: 'FRQ Practice' },
    { href: '/ap-english-lang-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  totalTimeMinutes: 195, // 60 MCQ + 135 FRQ (incl. 15-min reading period)
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '45 questions across five passages. Sets 1–3 are nonfiction reading passages (commencement address, urban-design essay, postwar journalist\'s letter) testing rhetorical analysis. Sets 4–5 are student composition drafts testing revision and editing skills. 60 minutes.',
      timeLimitMinutes: 60,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '3 essays (Synthesis, Rhetorical Analysis, Argument). Suggested 40 minutes per essay, plus a 15-minute reading period. Each essay is scored on a 6-point AP rubric: Thesis (0–1), Evidence & Commentary (0–4), Sophistication (0–1).',
      timeLimitMinutes: 135,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP English Language & Composition Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 45 MCQs (60 min, 45%)',
          '   • ~23–25 reading questions across 4–5 passages',
          '   • ~20–22 writing/composition questions across 3–4 drafts',
          'Section II: 3 essays (135 min, 55%)',
          '   • Q1 Synthesis (6 sources)',
          '   • Q2 Rhetorical Analysis',
          '   • Q3 Argument',
          'Total: 3 hr 15 min',
        ],
      },
      {
        heading: 'Skill Categories',
        items: [
          'Rhetorical Situation — Reading & Writing',
          'Claims & Evidence — Reading & Writing',
          'Reasoning & Organization — Reading & Writing',
          'Style — Reading & Writing',
          'Each FRQ scored 0–6: Thesis (0–1) + Evidence & Commentary (0–4) + Sophistication (0–1)',
        ],
      },
    ],
  },
}
