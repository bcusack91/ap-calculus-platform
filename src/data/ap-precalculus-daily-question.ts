/**
 * AP Precalculus — Question of the Day
 *
 * Rotates through the course's canonical lesson topics (precalc-final PLAN.md),
 * each backed by the AP Precalculus exit-quiz pool (`exit-quizzes/ap-precalculus.ts`,
 * exact-tag match first), the way ap-calcab-daily-question.ts does. Until Oct 2026
 * this file rotated `ap-precalculus-*` aliases of the legacy randomized
 * pre-calculus generator, whose relevance fallback served off-topic items under
 * the day's label and included Unit 4 / Law of Sines names that are not on the
 * exam. Deterministic per calendar day so every visitor sees the same question.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

/**
 * Canonical AP Precalculus topics with an exit-quiz pool today. The two Wave 2
 * topics (`function-modeling-precalc`, `exponential-logarithmic-modeling-precalc`)
 * join the rotation once their pools are registered in exit-quizzes/index.ts.
 */
export const TOPIC_SLUGS = [
  // Unit 1: Polynomial and Rational Functions
  'rates-of-change-precalc',
  'polynomial-functions-precalc',
  'fundamental-theorem-algebra',
  'polynomial-division-remainder-theorem',
  'rational-functions-precalc',
  'transformations-precalc',
  // Unit 2: Exponential and Logarithmic Functions
  'sequences-series-precalc',
  'exponential-functions-precalc',
  'function-composition-inverses-precalc',
  'logarithmic-functions-precalc',
  // Unit 3: Trigonometric and Polar Functions
  'the-unit-circle',
  'trigonometric-functions-precalc',
  'graphing-trig-functions',
  'inverse-trig-functions-precalc',
  'solving-trig-equations',
  'trigonometric-identities-precalc',
  'polar-coordinates-precalc',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface APPrecalcDailyQuestion {
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

export async function getDailyQuestions(): Promise<APPrecalcDailyQuestion[]> {
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
