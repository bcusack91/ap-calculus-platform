import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Computer Science A',
  description:
    'Full-length practice exam modeled on the official College Board AP Computer Science A exam. 40 Java multiple-choice questions covering primitives, objects, control flow, classes, arrays, ArrayList, 2D arrays, inheritance, and recursion, plus 4 free-response questions: Methods & Control Structures, Class Design, ArrayList, and 2D Array. All Java code follows the AP CSA Reference (Java subset).',
  backLink: { href: '/ap-computer-science-a', label: 'AP Computer Science A' },
  ctaLinks: [
    { href: '/ap-csa-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-csa-frq', label: 'FRQ Practice' },
    { href: '/ap-csa-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  totalTimeMinutes: 180, // 90 + 90
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '40 Java MCQs covering all 10 units. No calculator. AP CSA Reference Sheet provided.',
      timeLimitMinutes: 90,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 FRQs (9 points each, 36 total): Q1 Methods & Control Structures, Q2 Class Design, Q3 Array/ArrayList, Q4 2D Array. Self-graded rubric checklist.',
      timeLimitMinutes: 90,
      items: FRQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Computer Science A Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Section I: 40 MCQs (90 min, 50%)',
          'Section II: 4 FRQs (90 min, 50%)',
          '   • Q1 Methods & Control Structures (9 pts)',
          '   • Q2 Class Design (9 pts)',
          '   • Q3 Array/ArrayList (9 pts)',
          '   • Q4 2D Array (9 pts)',
          'Total: 3 hours · Java',
        ],
      },
      {
        heading: 'Topic Weighting',
        items: [
          'Primitive Types & Using Objects (~10–17%)',
          'Boolean Expressions & Iteration (~22–35%)',
          'Writing Classes (~15–22%)',
          'Array & ArrayList & 2D Array (~17–32%)',
          'Inheritance & Recursion (~10–17%)',
        ],
      },
    ],
  },
}
