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
        '75 MCQs in 90 minutes covering all five units (15 each): Biological Bases of Behavior, Cognition, Development and Learning, Social Psychology and Personality, and Mental and Physical Health. About a third are science-practice items (research design, ethics, and data interpretation) set within those units.',
      timeLimitMinutes: 90,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '2 FRQs in 70 minutes (14 points total): Q1 Article Analysis Question (AAQ, 7 pts, ~25 min) — analyze a study summary: method, operational definition, a statistic, an ethical guideline, generalizability, and whether the results support a hypothesis; Q2 Evidence-Based Question (EBQ, 7 pts, ~45 min) — make a claim and support it with evidence from two of three sources, each explained with a psychological concept. Self-graded against the rubric.',
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
          'Unit 1 — Biological Bases of Behavior (15–25%)',
          'Unit 2 — Cognition (15–25%)',
          'Unit 3 — Development and Learning (15–25%)',
          'Unit 4 — Social Psychology and Personality (15–25%)',
          'Unit 5 — Mental and Physical Health (15–25%)',
          'Research methods and data analysis are tested within every unit',
        ],
      },
    ],
  },
}
