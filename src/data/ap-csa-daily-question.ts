/**
 * AP Computer Science A — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'csa-variables-types',
  'csa-expressions-operators',
  'csa-strings-objects',
  'csa-using-objects',
  'csa-boolean-if',
  'csa-conditionals',
  'csa-iteration',
  'csa-loops',
  'csa-writing-classes',
  'csa-class-design',
  'csa-array',
  'csa-arrays',
  'csa-arraylist',
  'csa-arraylist-usage',
  'csa-2d-array',
  'csa-2d-arrays',
  'csa-inheritance',
  'csa-inheritance-polymorphism',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface CsaDailyQuestion {
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

export async function getDailyQuestions(): Promise<CsaDailyQuestion[]> {
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
