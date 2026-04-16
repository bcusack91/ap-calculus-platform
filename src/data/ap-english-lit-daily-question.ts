/**
 * AP English Literature — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'englit-short-fiction-1',
  'englit-short-fiction-2',
  'englit-short-fiction-3',
  'englit-poetry-1',
  'englit-poetry-2',
  'englit-poetic-structure-form',
  'englit-sound-devices',
  'englit-longer-fiction',
  'englit-longer-fiction-2',
  'englit-dramatic-structure',
  'englit-character-setting',
  'englit-narration-pov',
  'englit-narrative-complexity',
  'englit-narrative-perspective',
  'englit-figurative-language',
  'englit-tone-speaker',
  'englit-symbol-motif-fiction',
  'englit-plot-conflict-theme',
  'englit-social-commentary-drama',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface EnglishLitDailyQuestion {
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

export async function getDailyQuestions(): Promise<EnglishLitDailyQuestion[]> {
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
