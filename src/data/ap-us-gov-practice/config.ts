import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { SAQS, ARGUMENT_ESSAY } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP US Government & Politics',
  description:
    'Full-length practice exam modeled on the official College Board AP US Government & Politics exam. 55 stimulus-based MCQs and 4 free-response questions: Concept Application, Quantitative Analysis, SCOTUS Comparison, and an Argument Essay (LEQ-style with prompt choice). Self-grading rubric checklist after each FRQ.',
  backLink: { href: '/ap-us-government', label: 'AP US Government & Politics' },
  ctaLinks: [
    { href: '/ap-us-gov-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-us-gov-unit-tests', label: 'Unit Tests' },
    { href: '/ap-us-gov-daily-question', label: 'Daily Question' },
  ],
  accent: 'blue',
  totalTimeMinutes: 180, // 80 + 100, matches official exam
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '55 stimulus-based multiple-choice questions across all 5 units, with quotes from foundational documents, scenarios, and quantitative stimuli.',
      timeLimitMinutes: 80,
      items: MCQS,
    },
    {
      id: 'frq-short',
      name: 'Section II — Free Response (Concept App, Quant, SCOTUS)',
      shortName: 'Short FRQs',
      description:
        '3 free-response questions: Concept Application (3 parts), Quantitative Analysis (4 parts), and SCOTUS Comparison (3 parts). Each part is graded on a 1-point rubric you check off after submitting.',
      timeLimitMinutes: 60,
      items: SAQS,
    },
    {
      id: 'argument-essay',
      name: 'Section II — Argument Essay',
      shortName: 'Argument Essay',
      description:
        'Choose ONE of the three argument-essay prompts. Develop a defensible thesis supported by at least one required foundational document and a second piece of evidence, with explicit reasoning and a response to an opposing perspective. Self-grading rubric checklist (5 points).',
      timeLimitMinutes: 40,
      items: ARGUMENT_ESSAY,
    },
  ],
  aboutInfo: {
    title: 'About the AP US Government & Politics Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 55 MCQs (80 min, 50%)',
          'Section II: 4 FRQs (100 min, 50%)',
          '   • Concept Application (3 pts)',
          '   • Quantitative Analysis (4 pts)',
          '   • SCOTUS Comparison (3 pts)',
          '   • Argument Essay (6 pts)',
        ],
      },
      {
        heading: 'Required Foundational Documents',
        items: [
          'Federalist Nos. 10, 51, 70, 78',
          'Brutus No. 1',
          'Declaration of Independence',
          'U.S. Constitution',
          'Letter from a Birmingham Jail',
          'Articles of Confederation',
        ],
      },
    ],
  },
}
