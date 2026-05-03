import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { MCQS } from './mcqs'

export const config: FullLengthExamConfig = {
  subject: 'AP Computer Science Principles',
  description:
    'Full-length practice exam modeled on the in-school portion of the AP Computer Science Principles exam (revised 2024–25 format): 70 multiple-choice questions in 120 minutes covering all five Big Ideas — Creative Development, Data, Algorithms & Programming (the largest weight), Computing Systems & Networks, and Impact of Computing. Code questions use the official AP CSP pseudocode reference.',
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
        '70 multiple-choice questions covering all five Big Ideas. The official AP CSP Reference Sheet (pseudocode) is provided. (Section II — the Create Performance Task — is submitted separately to the College Board portal before the exam window.)',
      timeLimitMinutes: 120,
      items: MCQS,
    },
  ],
  aboutInfo: {
    title: 'About the AP Computer Science Principles Exam',
    columns: [
      {
        heading: 'Exam Structure (revised 2024–25)',
        items: [
          'In-school exam: 70 MCQs in 120 minutes (100% of exam-day score)',
          'Create Performance Task: written + program submitted via College Board portal before exam (no longer included in score for current administration)',
          'Reference: AP CSP pseudocode reference sheet provided',
        ],
      },
      {
        heading: 'Big Idea Weighting',
        items: [
          'BI 1 — Creative Development (10–13%)',
          'BI 2 — Data (17–22%)',
          'BI 3 — Algorithms & Programming (30–35%)',
          'BI 4 — Computing Systems & Networks (11–15%)',
          'BI 5 — Impact of Computing (21–26%)',
        ],
      },
    ],
  },
}
