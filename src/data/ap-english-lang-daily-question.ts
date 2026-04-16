/**
 * AP English Language — Question of the Day
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'englang-intro-rhetoric',
  'englang-rhetorical-situation',
  'englang-rhetorical-situation-writing',
  'englang-claims-evidence',
  'englang-claims-evidence-reading',
  'englang-claims-evidence-writing',
  'englang-reasoning-org-reading',
  'englang-reasoning-org-writing',
  'englang-argument-structure',
  'englang-diction-syntax',
  'englang-style-reading',
  'englang-style-writing',
  'englang-tone-voice-analysis',
  'englang-ethos-pathos-logos',
  'englang-logical-fallacies',
  'englang-synthesis',
  'englang-synthesis-essay',
  'englang-developing-arguments',
  'englang-writing-for-audience',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface EnglishLangDailyQuestion {
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

export async function getDailyQuestions(): Promise<EnglishLangDailyQuestion[]> {
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
