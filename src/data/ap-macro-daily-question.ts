/**
 * AP Macroeconomics — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'macro-scarcity-opportunity-cost',
  'macro-comparative-advantage',
  'macro-gdp-growth',
  'macro-unemployment-inflation',
  'macro-ad-as',
  'macro-multiplier-effect',
  'macro-phillips-curve',
  'macro-money-banking',
  'macro-monetary-policy',
  'macro-fiscal-policy',
  'macro-fiscal-policy-tools',
  'macro-open-economy',
  'macro-international-trade-finance',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface MacroDailyQuestion {
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

export async function getDailyQuestions(): Promise<MacroDailyQuestion[]> {
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
