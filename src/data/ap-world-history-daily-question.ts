/**
 * AP World History — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'wh-global-tapestry',
  'wh-dar-al-islam',
  'wh-silk-roads-mongols',
  'wh-indian-ocean-trade',
  'wh-americas-africa-1200',
  'wh-land-based-empires',
  'wh-islamic-empires',
  'wh-east-asian-empires',
  'wh-exploration-columbian-exchange',
  'wh-maritime-empires-labor',
  'wh-transoceanic',
  'wh-enlightenment-political-revolutions',
  'wh-industrial-revolution',
  'wh-revolutions',
  'wh-consequences-industrialization',
  'wh-imperialism',
  'wh-reform-migration',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface WorldHistoryDailyQuestion {
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

export async function getDailyQuestions(): Promise<WorldHistoryDailyQuestion[]> {
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
