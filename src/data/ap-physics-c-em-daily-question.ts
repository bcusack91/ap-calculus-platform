/**
 * AP Physics C: E&M — Question of the Day
 *
 * Uses proven AP Physics 2/E&M-aligned topic pools from exit quizzes.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'electric-charge-and-force',
  'electric-fields',
  'electric-potential',
  'capacitance',
  'dc-circuits',
  'rc-circuits',
  'magnetic-fields',
  'electromagnetic-induction',
  'fluid-pressure',
  'thermodynamic-laws',
  'geometric-optics',
  'wave-optics',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface PhysicsCEMDailyQuestion {
  topicSlug: string
  question: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
  dayNumber: number
}

export async function getDailyQuestions(): Promise<PhysicsCEMDailyQuestion[]> {
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
      },
      dayNumber: day,
    },
  ]
}
