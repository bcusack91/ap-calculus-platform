/**
 * AP Human Geography — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'hg-intro-geography',
  'hg-spatial-concepts',
  'hg-population-distribution',
  'hg-population-growth',
  'hg-migration',
  'hg-culture-diffusion',
  'hg-language-religion',
  'hg-ethnicity-identity',
  'hg-political-geography',
  'hg-political-power',
  'hg-agricultural-origins',
  'hg-agricultural-practices',
  'hg-urbanization',
  'hg-urban-challenges',
  'hg-industrialization',
  'hg-globalization-trade',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface HumanGeoDailyQuestion {
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

export async function getDailyQuestions(): Promise<HumanGeoDailyQuestion[]> {
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
