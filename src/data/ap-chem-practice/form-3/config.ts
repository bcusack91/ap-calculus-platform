import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Chemistry',
  description:
    'Full-length practice exam, form 3, modeled on the May 2027 AP Chemistry exam. 60 multiple-choice questions across all 9 units (including composition, gas, kinetics and pH data sets), plus 7 free-response questions: 3 long (solubility equilibrium and titration; a galvanic cell and electrochemical stoichiometry; heating curves and intermolecular forces) and 4 short (collision theory, molecular geometry, photoelectron spectroscopy, measuring the gas constant). Calculator and equations sheet allowed.',
  backLink: { href: '/ap-chemistry', label: 'AP Chemistry' },
  ctaLinks: [
    { href: '/ap-chem-frq', label: 'FRQ Practice' },
    { href: '/ap-chem-labs', label: 'Virtual Labs' },
    { href: '/periodic-table', label: 'Periodic Table' },
  ],
  accent: 'cyan',
  totalTimeMinutes: 195, // 90 + 105
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '60 multiple-choice questions across all 9 units (Atomic Structure, Bonding, IMFs, Reactions, Kinetics, Thermodynamics, Equilibrium, Acids/Bases, Applications of Thermodynamics). Calculator allowed.',
      timeLimitMinutes: 90,
      weight: 50, // May 2027: Section I is 50% of the AP score
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '7 free-response questions: Q1–Q3 long FRQs (10 pts each) and Q4–Q7 short FRQs (4 pts each). Self-graded rubric checklist.',
      timeLimitMinutes: 105,
      weight: 50, // May 2027: Section II is 50%
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Chemistry Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 60 MCQs (90 min, 50%)',
          'Section II: 7 FRQs (105 min, 50%)',
          '   • 3 Long FRQs (10 points each)',
          '   • 4 Short FRQs (4 points each)',
          'Total: 3 hr 15 min · Calculator allowed throughout',
          'Equations sheet and periodic table provided',
        ],
      },
      {
        heading: 'Unit Weighting',
        items: [
          'U1 Atomic Structure & Properties (7–9%)',
          'U2 Compound Structure & Properties (7–9%)',
          'U3 IMFs & Properties (18–22%)',
          'U4 Chemical Reactions (7–9%)',
          'U5 Kinetics (7–9%)',
          'U6 Thermodynamics (7–9%)',
          'U7 Equilibrium (7–9%)',
          'U8 Acids & Bases (11–15%)',
          'U9 Applications of Thermodynamics (7–9%)',
        ],
      },
    ],
  },
}
