/**
 * AP Physics C: Mechanics — Question of the Day
 *
 * Uses proven AP Physics 1/Mechanics-aligned topic pools from exit quizzes.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'one-dimensional-motion',
  'motion-graphs',
  'two-dimensional-motion',
  'projectile-motion',
  'newtons-first-second-laws',
  'newtons-third-law',
  'friction',
  'inclined-planes',
  'work-and-kinetic-energy',
  'conservation-of-energy',
  'momentum-and-impulse',
  'conservation-of-momentum',
  'collisions',
  'uniform-circular-motion',
  'centripetal-force',
  'torque-and-equilibrium',
  'rotational-kinematics',
  'angular-momentum',
  'introduction-to-shm',
  'energy-in-shm',
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
