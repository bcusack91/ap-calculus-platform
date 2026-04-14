/**
 * AP Physics C: Mechanics — Question of the Day
 *
 * Uses proven AP Physics 1/Mechanics-aligned topic pools from exit quizzes.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'physics-c-1d-kinematics',
  'physics-c-2d-kinematics',
  'physics-c-variable-acceleration',
  'physics-c-newtons-laws-calculus',
  'physics-c-friction-inclines',
  'physics-c-circular-motion',
  'physics-c-work-power',
  'physics-c-conservative-forces',
  'physics-c-potential-energy-curves',
  'physics-c-momentum-collisions',
  'physics-c-center-of-mass',
  'physics-c-variable-mass',
  'physics-c-rotational-kinematics-dynamics',
  'physics-c-angular-momentum',
  'physics-c-simple-harmonic-motion',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface PhysicsCMechDailyQuestion {
  topicSlug: string
  question: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
  dayNumber: number
}

export async function getDailyQuestions(): Promise<PhysicsCMechDailyQuestion[]> {
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
