import { generateExitQuiz } from '../exit-quizzes'
import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const TOPIC_SLUGS = [
  'integration-by-parts-calcbc', 'parametric-equations-calcbc', 'polar-curves-calcbc',
  'series-convergence-calcbc', 'taylor-series-calcbc', 'maclaurin-series-calcbc',
  'power-series-calcbc', 'ratio-root-test-calcbc', 'arc-length-calcbc',
  'improper-integrals-calcbc', 'logistic-growth-calcbc', 'euler-method-calcbc',
  'partial-fractions-calcbc', 'vector-valued-functions-calcbc',
  'comparison-test-calcbc', 'alternating-series-calcbc',
  'lagrange-error-calcbc', 'sequences-calcbc',
]

async function getQuestions(): Promise<PracticeQuestion[]> {
  const all: PracticeQuestion[] = []
  for (const slug of TOPIC_SLUGS) {
    try {
      const pool = await generateExitQuiz(slug, 3)
      all.push(...pool.map(q => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctIndex ?? 0,
        explanation: q.explanation,
        topic: slug,
      })))
    } catch { /* skip unavailable */ }
  }
  return all.sort(() => Math.random() - 0.5).slice(0, 30)
}

export const config: PracticeExamConfig = {
  subject: 'AP Calculus BC',
  description: 'Timed practice exam covering all BC-specific topics including series, parametric/polar, and advanced integration.',
  backLink: { href: '/ap-calculus-bc', label: 'AP Calculus BC' },
  ctaLinks: [
    { href: '/calcbc-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-calcbc-daily-question', label: 'Daily Question' },
  ],
  accent: 'indigo',
  sections: [{
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering series, parametric/polar, integration techniques, and more.',
    questionCount: 30, timeLimitMinutes: 60,
  }],
  getQuestions: () => getQuestions(),
  aboutInfo: {
    title: 'About the AP Calculus BC Exam',
    columns: [
      { heading: 'Exam Structure', items: ['Section I: 45 MC questions (105 min)', 'Section II: 6 Free Response (90 min)', 'Includes all AB topics + BC-only'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'AB sub-score also reported', 'College credit: Usually 3+', 'Covers Calc I + II equivalent'] },
    ],
  },
}
