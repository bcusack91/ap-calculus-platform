import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Environmental Science',
  description:
    'Full-length practice exam modeled on the official College Board AP Environmental Science exam. 80 stimulus-based MCQs and 3 long free-response questions covering all 9 units. Each FRQ part has a 1-point rubric checklist you grade after submitting.',
  backLink: { href: '/ap-environmental-science', label: 'AP Environmental Science' },
  ctaLinks: [
    { href: '/ap-enviro-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-enviro-unit-tests', label: 'Unit Tests' },
    { href: '/ap-enviro-daily-question', label: 'Daily Question' },
  ],
  accent: 'green',
  totalTimeMinutes: 160, // 90 + 70
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '80 stimulus-based multiple-choice questions across all 9 units (Living World: Ecosystems; Living World: Biodiversity; Populations; Earth Systems & Resources; Land & Water Use; Energy Resources; Atmospheric Pollution; Aquatic & Terrestrial Pollution; Global Change).',
      timeLimitMinutes: 90,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '3 long free-response questions (10 points each, ~23 min each): Q1 Design an Investigation, Q2 Analyze an Environmental Problem and Propose a Solution (with calculations), Q3 Analyze an Environmental Problem (with calculations). Self-graded rubric checklist after each part.',
      timeLimitMinutes: 70,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Environmental Science Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 80 MCQs (90 min, 60%)',
          'Section II: 3 FRQs (70 min, 40%)',
          '   • Q1 Design an Investigation (10 pts)',
          '   • Q2 Analyze + Propose Solution w/ math (10 pts)',
          '   • Q3 Analyze Environmental Problem w/ math (10 pts)',
          'Total: 2 hours 40 minutes',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'U1 Living World: Ecosystems (6–8%)',
          'U2 Living World: Biodiversity (6–8%)',
          'U3 Populations (10–15%)',
          'U4 Earth Systems & Resources (10–15%)',
          'U5 Land & Water Use (10–15%)',
          'U6 Energy Resources & Consumption (10–15%)',
          'U7 Atmospheric Pollution (7–10%)',
          'U8 Aquatic & Terrestrial Pollution (7–10%)',
          'U9 Global Change (15–20%)',
        ],
      },
    ],
  },
}
