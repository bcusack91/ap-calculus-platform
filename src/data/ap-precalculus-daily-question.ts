/**
 * AP Precalculus - Question of the Day
 *
 * Uses AP Precalculus-tagged exit quiz slugs so AP Precalculus can evolve
 * independently from the general Precalculus daily stream.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'ap-precalculus-functions',
  'ap-precalculus-polynomials',
  'ap-precalculus-rational-functions',
  'ap-precalculus-exponentials-logs',
  'ap-precalculus-trig-unit-circle',
  'ap-precalculus-trig-identities',
  'ap-precalculus-inverse-trig',
  'ap-precalculus-law-of-sines-cosines',
  'ap-precalculus-sequences-series',
  'ap-precalculus-polar-vectors',
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
