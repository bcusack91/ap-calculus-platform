import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Psychology',
  description:
    'Full-length practice exam modeled on the revised 2024–25 College Board AP Psychology exam: 75 multiple-choice questions (Section I, 90 min) covering all five redesigned units, plus 2 free-response questions (Section II, 70 min) — an Article Analysis Question (AAQ) and an Evidence-Based Question (EBQ).',
  backLink: { href: '/ap-psychology', label: 'AP Psychology' },
  ctaLinks: [
    { href: '/ap-psych-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-psych-frq', label: 'FRQ Practice' },
    { href: '/ap-psych-daily-question', label: 'Daily Question' },
    { href: '/ap-psych-study-plans', label: 'Study Plans' },
  ],
  accent: 'rose',
  totalTimeMinutes: 160,
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '75 MCQs covering all five redesigned units (15 each): Biological Bases of Behavior, Cognition, Development & Learning, Social Psychology & Personality, and Mental & Physical Health. Research-methods items are integrated within each unit per the official CED.',
      timeLimitMinutes: 90,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '2 FRQs (14 points total): Q1 Article Analysis Question (AAQ, 7 pts, ~25 min) — analyze a research study summary; Q2 Evidence-Based Question (EBQ, 7 pts, ~45 min) — defend a claim using provided sources. Self-graded rubric.',
      timeLimitMinutes: 70,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Psychology Exam (Revised 2024–25)',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 75 MCQs (90 min, 66.67%)',
          'Section II: 2 FRQs (70 min, 33.33%)',
          '   • Q1 Article Analysis Question (AAQ, 7 pts)',
          '   • Q2 Evidence-Based Question (EBQ, 7 pts)',
          'Total: 2 hours 40 minutes',
        ],
      },
      {
        heading: 'Unit Weighting (Revised CED)',
        items: [
          'Unit 1 — Biological Bases of Behavior (15–19%)',
          'Unit 2 — Cognition (13–17%)',
          'Unit 3 — Development & Learning (15–19%)',
          'Unit 4 — Social Psychology & Personality (12–16%)',
          'Unit 5 — Mental & Physical Health (15–19%)',
          'Research methods integrated throughout (~10%)',
        ],
      },
    ],
  },
}
