/**
 * AP Physics 2 — Question of the Day
 *
 * Uses the exit-quiz registry for rich, randomized question pools.
 * Deterministic per calendar day so every visitor sees the same question.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  // Waves, Sound & Physical Optics (moved into Physics 2 in the 2024-25 CED)
  'wave-properties',
  'sound-waves',
  'standing-waves',
  'physical-optics',
  // Thermodynamics
  'temperature-and-heat',
  'kinetic-theory',
  'thermodynamic-laws',
  // Electricity
  'electric-charge-and-force',
  'electric-fields',
  'electric-potential',
  'capacitance',
  // Circuits
  'dc-circuits',
  'rc-circuits',
  // Magnetism
  'magnetic-fields',
  'electromagnetic-induction',
  // Optics
  'geometric-optics',
  'wave-optics',
  // Modern Physics
  'quantum-mechanics',
  'nuclear-physics',
  'atomic-structure',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface Physics2DailyQuestion {
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

export async function getDailyQuestions(): Promise<Physics2DailyQuestion[]> {
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
