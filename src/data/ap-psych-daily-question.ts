/**
 * AP Psychology — Question of the Day
 *
 * Uses the exit-quiz registry for rich, randomized question pools.
 * Deterministic per calendar day so every visitor sees the same question.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'history-approaches-psychology',
  'biological-bases-brain',
  'genetics-behavior',
  'sensation-sensory-processing',
  'perception-attention',
  'classical-conditioning',
  'operant-conditioning',
  'observational-learning-cognition',
  'memory-encoding-storage',
  'retrieval-forgetting',
  'thinking-problem-solving',
  'language-intelligence',
  'prenatal-childhood-development',
  'adolescence-adulthood',
  'motivation-theories',
  'emotion-stress',
  'personality-theories',
  'psychological-disorders-overview',
  'mood-psychotic-disorders',
  'treatment-therapy',
  'social-influence-conformity',
  'attitudes-persuasion',
  'group-behavior-prejudice',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface PsychDailyQuestion {
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

export async function getDailyQuestions(): Promise<PsychDailyQuestion[]> {
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
