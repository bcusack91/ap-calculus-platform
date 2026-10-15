import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'
import { FRQS } from './frqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Computer Science A',
  description:
    'Full-length practice exam modeled on the official College Board AP Computer Science A exam (2025–26 course). 42 Java multiple-choice questions covering objects and methods, selection and iteration, class creation, and data collections (arrays, ArrayList, 2D arrays, text files, wrapper classes, searching, sorting, and recursion), plus 4 free-response questions: Methods & Control Structures, Class Design, Data Analysis with ArrayList, and 2D Array. All Java code follows the AP CSA Java Quick Reference.',
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
        '42 Java MCQs covering all 4 units (55% of the score). No calculator. AP CSA Java Quick Reference provided.',
      timeLimitMinutes: 90,
      items: MCQS,
    },
    {
      id: 'frq',
      name: 'Section II',
      shortName: 'Free Response',
      description:
        '4 FRQs (9 points each, 36 total; 45% of the score): Q1 Methods & Control Structures, Q2 Class Design, Q3 Data Analysis with ArrayList, Q4 2D Array. Self-graded rubric checklist.',
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
          'Section I: 42 MCQs (90 min, 55%)',
          'Section II: 4 FRQs (90 min, 45%)',
          '   • Q1 Methods & Control Structures (9 pts)',
          '   • Q2 Class Design (9 pts)',
          '   • Q3 Data Analysis with ArrayList (9 pts)',
          '   • Q4 2D Array (9 pts)',
          'Total: 3 hours · Java',
        ],
      },
      {
        heading: 'Topic Weighting',
        items: [
          'Unit 1: Using Objects and Methods (15–25%)',
          'Unit 2: Selection and Iteration (25–35%)',
          'Unit 3: Class Creation (10–18%)',
          'Unit 4: Data Collections (30–40%)',
        ],
      },
    ],
  },
}
