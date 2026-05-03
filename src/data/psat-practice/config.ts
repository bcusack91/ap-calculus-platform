import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { RW_MCQS, MATH_MCQS } from './mcqs'

export const config: FullLengthExamConfig = {
  subject: 'PSAT/NMSQT',
  description:
    'Full-length practice exam modeled on the digital PSAT/NMSQT (2024+) format: a Reading & Writing section followed by a Math section. Representative scaled-down version (42 MCQs total).',
  backLink: { href: '/', label: 'Home' },
  ctaLinks: [
    { href: '/sat-practice', label: 'SAT Practice' },
    { href: '/sat-daily-question', label: 'SAT Daily Question' },
  ],
  accent: 'sky',
  totalTimeMinutes: 62,
  sections: [
    {
      id: 'rw',
      name: 'Reading & Writing',
      shortName: 'R&W',
      description: 'Information & ideas, craft & structure, expression of ideas, and standard English conventions. Calculator not applicable. (Real PSAT: 54 questions across 2 modules, 64 min — practice version 24 questions, 32 min.)',
      timeLimitMinutes: 32,
      items: RW_MCQS,
    },
    {
      id: 'math',
      name: 'Math',
      shortName: 'Math',
      description: 'Algebra, advanced math, problem-solving & data analysis, and geometry/trigonometry. Calculator allowed throughout. (Real PSAT: 44 questions across 2 modules, 70 min — practice version 18 questions, 30 min.)',
      timeLimitMinutes: 30,
      items: MATH_MCQS,
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
