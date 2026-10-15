import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Computer Science Principles',
  description:
    'Full-length practice exam modeled on the multiple-choice section of the AP Computer Science Principles end-of-course exam: 70 multiple-choice questions in 120 minutes covering all five Big Ideas in their CED proportions — Creative Development, Data, Algorithms & Programming (the largest weight), Computer Systems & Networks, and Impact of Computing. Code questions use the official AP CSP exam reference sheet pseudocode.',
  backLink: { href: '/ap-cs-principles', label: 'AP Computer Science Principles' },
  ctaLinks: [
    { href: '/ap-csp-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-csp-daily-question', label: 'Daily Question' },
    { href: '/ap-csp-study-plans', label: 'Study Plans' },
    { href: '/ap-csp-unit-tests', label: 'Unit Tests' },
  ],
  accent: 'blue',
  totalTimeMinutes: 120,
  sections: [
    {
      id: 'mcq',
      name: 'Section I',
      shortName: 'Multiple Choice',
      description:
        '70 multiple-choice questions in 120 minutes covering all five Big Ideas. Code questions use the AP CSP exam reference sheet pseudocode (lists are 1-indexed). The real exam ends with a few select-two-answers questions; every question here has one answer. The Create performance task and its exam-day written response are not part of this practice section.',
      timeLimitMinutes: 120,
      weight: 100, // May 2027: MCQ is 70% of the real AP score; the Create performance task (30%) isn't part of this exam, so this section is the whole practice composite
      items: MCQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Computer Science Principles Exam',
    columns: [
      {
        heading: 'Exam Structure',
        items: [
          'Multiple choice: 70 questions in 120 minutes (70% of the AP score)',
          'Create performance task (30%): program code, video, and Personalized Project Reference submitted through the AP Digital Portal, plus a 60-minute written response on exam day',
          'An exam reference sheet with the AP CSP pseudocode is provided',
        ],
      },
      {
        heading: 'Big Idea Weighting',
        items: [
          'BI 1 — Creative Development (10–13%)',
          'BI 2 — Data (17–22%)',
          'BI 3 — Algorithms & Programming (30–35%)',
          'BI 4 — Computer Systems & Networks (11–15%)',
          'BI 5 — Impact of Computing (21–26%)',
        ],
      },
    ],
  },
}
