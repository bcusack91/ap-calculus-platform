/**
 * AP Environmental Science — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'apes-ecosystem-structure',
  'apes-biogeochemical-cycles',
  'apes-earth-systems',
  'apes-biodiversity',
  'apes-biodiversity-conservation',
  'apes-biomes-succession',
  'apes-population-ecology',
  'apes-human-population',
  'apes-agriculture-land',
  'apes-water-resources',
  'apes-fossil-fuels-nuclear',
  'apes-renewable-energy',
  'apes-energy',
  'apes-atmospheric-pollution',
  'apes-atmosphere-climate',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface EnviroDailyQuestion {
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

export async function getDailyQuestions(): Promise<EnviroDailyQuestion[]> {
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
