import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP English Literature & Composition',
  description:
    'Full-length practice exam modeled on the official College Board AP English Literature & Composition exam. 55 multiple-choice questions across five literary passages (two poems, two prose-fiction excerpts, one drama scene), plus 3 free-response essays: poetry analysis, prose-fiction analysis, and a literary argument on a work of literary merit.',
  backLink: { href: '/ap-english-literature', label: 'AP English Literature' },
  ctaLinks: [
    { href: '/ap-english-lit-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-english-lit-frq', label: 'FRQ Practice' },
    { href: '/ap-english-lit-daily-question', label: 'Daily Question' },
  ],
  accent: 'rose',
  totalTimeMinutes: 180, // 60 + 120
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '55 questions across five literary passages: a domestic lyric, a New England prose excerpt, a meditation on rural land, an ironic London office story, and a contemporary one-act play scene. 60 minutes.',
      timeLimitMinutes: 60,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '3 essays: Q1 Poetry Analysis, Q2 Prose Fiction Analysis, Q3 Literary Argument (open question on a work of literary merit). Suggested 40 minutes per essay. Each essay is scored on a 6-point AP rubric: Thesis (0–1), Evidence & Commentary (0–4), Sophistication (0–1).',
      timeLimitMinutes: 120,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP English Literature & Composition Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 55 MCQs (60 min, 45%)',
          '   • ~5 passages: poetry, prose fiction, drama',
          '   • ~10–13 questions per passage',
          'Section II: 3 essays (120 min, 55%)',
          '   • Q1 Poetry Analysis',
          '   • Q2 Prose Fiction Analysis',
          '   • Q3 Literary Argument (open question)',
          'Total: 3 hours',
        ],
      },
      {
        heading: 'Skill Categories',
        items: [
          'Character',
          'Setting',
          'Structure',
          'Narration',
          'Figurative Language',
          'Literary Argumentation',
          'Each FRQ scored 0–6: Thesis (0–1) + Evidence & Commentary (0–4) + Sophistication (0–1)',
        ],
      },
    ],
  },
}
