/**
 * AP Calculus BC — Question of the Day
 *
 * Uses the exit-quiz registry for rich, randomized question pools.
 * Deterministic per calendar day so every visitor sees the same question.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'integration-by-parts-calcbc',
  'partial-fractions-calcbc',
  'improper-integrals-calcbc',
  'advanced-integration-calcbc',
  'parametric-curves-calculus-calcbc',
  'polar-calculus-calcbc',
  'vector-valued-functions-calcbc',
  'arc-length-surface-area-calcbc',
  'infinite-sequences-calcbc',
  'infinite-series-calcbc',
  'convergence-tests-summary-calcbc',
  'alternating-series-calcbc',
  'power-series-calcbc',
  'taylor-maclaurin-series-calcbc',
  'lagrange-error-bound-calcbc',
  'series-applications-calcbc',
  'euler-method-advanced-calcbc',
  'logistic-models-calcbc',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface CalcBCDailyQuestion {
  topicSlug: string
  question: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    category: string
  }
  dayNumber: number
}

export async function getDailyQuestions(): Promise<CalcBCDailyQuestion[]> {
  const day = dayOfYear()
  const slug = TOPIC_SLUGS[day % TOPIC_SLUGS.length]
  const pool = await generateExitQuiz(slug, 5)
  const q = pool[day % pool.length]

  return [
    {
      topicSlug: slug,
      question: {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctIndex ?? 0,
        explanation: q.explanation,
        category: q.category ?? slug,
      },
      dayNumber: day,
    },
  ]
}
