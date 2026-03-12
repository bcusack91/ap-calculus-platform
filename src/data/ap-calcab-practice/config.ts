import { generateExitQuiz } from '../exit-quizzes'
import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const TOPIC_SLUGS = [
  'limits-continuity-calcab', 'derivatives-definition-calcab', 'derivatives-rules-calcab',
  'derivatives-trig-calcab', 'chain-rule-calcab', 'implicit-differentiation-calcab',
  'related-rates-calcab', 'mean-value-theorem-calcab', 'curve-sketching-calcab',
  'optimization-calcab', 'linearization-calcab', 'lhopitals-rule-calcab',
  'antiderivatives-calcab', 'definite-integrals-calcab', 'fundamental-theorem-calcab',
  'u-substitution-calcab', 'area-between-curves-calcab', 'volumes-revolution-calcab',
  'differential-equations-calcab', 'accumulation-functions-calcab',
  'riemann-sums-calcab', 'applications-integrals-calcab',
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
  subject: 'AP Calculus AB',
  description: 'Timed practice exam with AP-level calculus questions across all AB topics.',
  backLink: { href: '/ap-calculus-ab', label: 'AP Calculus AB' },
  ctaLinks: [
    { href: '/calcab-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-calcab-daily-question', label: 'Daily Question' },
  ],
  accent: 'blue',
  sections: [{
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering limits, derivatives, integrals, and applications.',
    questionCount: 30, timeLimitMinutes: 60,
  }],
  getQuestions: () => getQuestions(),
  aboutInfo: {
    title: 'About the AP Calculus AB Exam',
    columns: [
      { heading: 'Exam Structure', items: ['Section I: 45 MC questions (105 min)', 'Section II: 6 Free Response (90 min)', 'Total: ~3.25 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: ~50% of score', 'FRQ: ~50% of score', 'College credit: Usually 3+'] },
    ],
  },
}
