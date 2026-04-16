/**
 * AP Microeconomics — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'micro-scarcity-marginal-analysis',
  'micro-supply-demand',
  'micro-demand-supply-equilibrium',
  'micro-elasticity',
  'micro-government-intervention',
  'micro-production-costs',
  'micro-perfect-competition',
  'micro-monopoly',
  'micro-monopolistic-oligopoly',
  'micro-labor-markets',
  'micro-factor-markets',
  'micro-externalities-public-goods',
  'micro-market-failure',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface MicroDailyQuestion {
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

export async function getDailyQuestions(): Promise<MicroDailyQuestion[]> {
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
