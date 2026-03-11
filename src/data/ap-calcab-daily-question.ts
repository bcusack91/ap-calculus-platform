/**
 * AP Calculus AB — Question of the Day
 *
 * Uses the exit-quiz registry for rich, randomized question pools.
 * Deterministic per calendar day so every visitor sees the same question.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'limits-continuity-calcab',
  'definition-of-derivative-calcab',
  'basic-differentiation-rules-calcab',
  'chain-rule-calcab',
  'inverse-functions-derivatives-calcab',
  'applications-of-derivatives-calcab',
  'optimization-calcab',
  'linearization-differentials-calcab',
  'theorem-applications-calcab',
  'particle-motion-calcab',
  'definite-integrals-calcab',
  'antiderivatives-indefinite-integrals-calcab',
  'u-substitution-calcab',
  'accumulation-functions-calcab',
  'area-between-curves-calcab',
  'volumes-of-revolution-calcab',
  'integration-applications-calcab',
  'differential-equations-calcab',
  'exponential-models-calcab',
  'tables-data-calcab',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface CalcABDailyQuestion {
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

export async function getDailyQuestions(): Promise<CalcABDailyQuestion[]> {
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
