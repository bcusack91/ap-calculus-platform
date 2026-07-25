import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { RW_FULL, MATH_FULL } from './full-length'

export const config: FullLengthExamConfig = {
  subject: 'PSAT/NMSQT',
  description:
    'Full-length practice exam modeled on the digital PSAT/NMSQT (2024+) format: a Reading & Writing section followed by a Math section. Full length: 54 Reading & Writing questions followed by 44 Math questions.',
  backLink: { href: '/', label: 'Home' },
  ctaLinks: [
    { href: '/sat-practice', label: 'SAT Practice' },
    { href: '/sat-daily-question', label: 'SAT Daily Question' },
  ],
  accent: 'sky',
  totalTimeMinutes: 134,
  sections: [
    {
      id: 'rw',
      name: 'Reading & Writing',
      shortName: 'R&W',
      description: 'Information & ideas, craft & structure, expression of ideas, and standard English conventions. Calculator not applicable. 54 questions, 64 minutes — matching the real test.',
      timeLimitMinutes: 64,
      items: RW_FULL,
    },
    {
      id: 'math',
      name: 'Math',
      shortName: 'Math',
      description: 'Algebra, advanced math, problem-solving & data analysis, and geometry/trigonometry. Calculator allowed throughout. 44 questions, 70 minutes — matching the real test.',
      timeLimitMinutes: 70,
      items: MATH_FULL,
    },
  ],
  aboutInfo: {
    title: 'About the Digital PSAT/NMSQT (2024+)',
    columns: [
      {
        heading: 'Real Test Structure',
        items: [
          'Reading & Writing: 54 questions, 64 min (2 adaptive modules of 27)',
          'Math: 44 questions, 70 min (2 adaptive modules of 22)',
          'Total: 98 questions, 2 hours 14 minutes',
          'Calculator: allowed for all Math questions',
          'Stage-adaptive: Module 2 difficulty depends on Module 1 performance',
        ],
      },
      {
        heading: 'Scoring',
        items: [
          'Each section: 160–760',
          'Total: 320–1520',
          'NMSC Selection Index: 48–228',
          'Semifinalist cutoffs vary by state (typically 207–223)',
          'Practice scores cannot be used as official PSAT/NMSQT entries',
        ],
      },
    ],
  },
}
