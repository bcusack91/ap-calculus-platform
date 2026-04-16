/**
 * AP CS Principles — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'csp-creative-development',
  'csp-collaboration-development',
  'csp-binary-data',
  'csp-data-compression-analysis',
  'csp-data',
  'csp-algorithms',
  'csp-algorithms-programming',
  'csp-variables-control',
  'csp-procedures-lists',
  'csp-computing-systems-networks',
  'csp-internet-protocols',
  'csp-fault-tolerance-security',
  'csp-impact-of-computing',
  'csp-safe-computing',
  'csp-social-ethical-impacts',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface CspDailyQuestion {
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

export async function getDailyQuestions(): Promise<CspDailyQuestion[]> {
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
