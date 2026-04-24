/**
 * AP Physics 1 Unit Tests
 *
 * Narrower than the full diagnostic, broader than a single topic.
 * Each AP-exam unit gets 4 deterministic test variations so a
 * student can retake the same unit several times without seeing
 * the exact same set of questions in the exact same order.
 *
 * Question pool is reused from the diagnostic generator so we
 * have a single source of truth for AP Physics 1 multiple choice.
 */

import {
  AP_PHYSICS1_QUESTION_POOL,
  AP_PHYSICS1_SLUG_LABELS,
  type PoolQuestion,
} from '@/data/ap-physics-1-diagnostic'

export const UNIT_TEST_VARIANTS = 4
export const QUESTIONS_PER_VARIANT = 12
export const UNIT_TEST_TIME_LIMIT_MINUTES = 18

export interface APPhysics1Unit {
  id: string                 // matches the diagnostic `domain` id
  unitNumber: number         // 1..N as displayed to students
  name: string               // College-Board style unit title
  shortName: string          // compact label (used in cards)
  description: string
  topicSlugs: string[]       // canonical topics covered (also for review links)
  exam_weight: string        // approximate weight on the AP exam
  color: string              // tailwind gradient suffix
  icon: string               // emoji
}

export const AP_PHYSICS1_UNITS: APPhysics1Unit[] = [
  {
    id: 'kinematics',
    unitNumber: 1,
    name: 'Unit 1: Kinematics',
    shortName: 'Kinematics',
    description: '1D & 2D motion, free fall, projectiles, and motion graphs.',
    topicSlugs: ['one-dimensional-motion', 'two-dimensional-motion'],
    exam_weight: '10–15%',
    color: 'from-blue-500 to-cyan-500',
    icon: '🚀',
  },
  {
    id: 'dynamics',
    unitNumber: 2,
    name: 'Unit 2: Dynamics (Newton\u2019s Laws)',
    shortName: 'Dynamics',
    description: 'Forces, free-body diagrams, friction, and Newton\u2019s laws.',
    topicSlugs: ['newtons-first-second-laws', 'friction'],
    exam_weight: '12–18%',
    color: 'from-indigo-500 to-purple-500',
    icon: '🧲',
  },
  {
    id: 'circular-motion-gravity',
    unitNumber: 3,
    name: 'Unit 3: Circular Motion & Gravitation',
    shortName: 'Circular & Gravity',
    description: 'Uniform circular motion, centripetal force, and gravitation.',
    topicSlugs: ['uniform-circular-motion', 'universal-gravitation'],
    exam_weight: '4–6%',
    color: 'from-purple-500 to-pink-500',
    icon: '🪐',
  },
  {
    id: 'energy',
    unitNumber: 4,
    name: 'Unit 4: Energy',
    shortName: 'Energy',
    description: 'Work, kinetic & potential energy, conservation of energy, power.',
    topicSlugs: ['work-and-kinetic-energy', 'conservation-of-energy'],
    exam_weight: '20–28%',
    color: 'from-emerald-500 to-teal-500',
    icon: '⚡',
  },
  {
    id: 'momentum',
    unitNumber: 5,
    name: 'Unit 5: Momentum',
    shortName: 'Momentum',
    description: 'Linear momentum, impulse, and elastic / inelastic collisions.',
    topicSlugs: ['momentum-and-impulse', 'collisions'],
    exam_weight: '12–18%',
    color: 'from-amber-500 to-orange-500',
    icon: '💥',
  },
  {
    id: 'simple-harmonic-motion',
    unitNumber: 6,
    name: 'Unit 6: Simple Harmonic Motion',
    shortName: 'Simple Harmonic Motion',
    description: 'Springs, pendulums, period & frequency, and energy in SHM.',
    topicSlugs: ['introduction-to-shm', 'energy-in-shm'],
    exam_weight: '4–6%',
    color: 'from-rose-500 to-pink-500',
    icon: '🌊',
  },
  {
    id: 'torque-rotation',
    unitNumber: 7,
    name: 'Unit 7: Torque & Rotational Motion',
    shortName: 'Torque & Rotation',
    description: 'Torque, rotational equilibrium, rotational kinematics, and angular momentum.',
    topicSlugs: ['torque-and-equilibrium', 'angular-momentum'],
    exam_weight: '10–16%',
    color: 'from-violet-500 to-fuchsia-500',
    icon: '🔄',
  },
]

export interface APPhysics1UnitTestQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topicSlug: string
}

export interface APPhysics1UnitTestData {
  unitId: string
  unitName: string
  unitNumber: number
  variant: number
  questions: APPhysics1UnitTestQuestion[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPhysics1UnitTestResults {
  unitId: string
  unitName: string
  unitNumber: number
  variant: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
  missedTopicSlugs: string[]
  recommendedTopics: { slug: string; name: string }[]
}

/* ------------------------------------------------------------------ */
/*  Seeded deterministic shuffle (LCG, same idiom as the diagnostic)   */
/* ------------------------------------------------------------------ */

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr]
  let s = seed | 0
  const next = () => {
    s = (Math.imul(s, 1664525) + 1013904223) | 0
    return ((s >>> 0) / 0x100000000)
  }
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function unitSeed(unitId: string, variant: number): number {
  let h = 2166136261
  for (let i = 0; i < unitId.length; i++) {
    h ^= unitId.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h ^ (variant * 2654435761)) | 0
}

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function getUnit(unitId: string): APPhysics1Unit | undefined {
  return AP_PHYSICS1_UNITS.find(u => u.id === unitId)
}

export function generateUnitTest(unitId: string, variant: number): APPhysics1UnitTestData {
  const unit = getUnit(unitId)
  if (!unit) throw new Error(`Unknown AP Physics 1 unit: ${unitId}`)
  const v = Math.max(1, Math.min(UNIT_TEST_VARIANTS, Math.floor(variant) || 1))

  const pool: PoolQuestion[] = AP_PHYSICS1_QUESTION_POOL.filter(q => q.domain === unitId)
  if (pool.length === 0) throw new Error(`No question pool for unit: ${unitId}`)

  // Deterministic per (unit, variant). Different variants pick a
  // shifted window of the same shuffled pool so each variant is
  // distinct (no two variants produce the same first question)
  // while still sampling the entire pool.
  const shuffled = seededShuffle(pool, unitSeed(unitId, v))
  const target = Math.min(QUESTIONS_PER_VARIANT, shuffled.length)
  const offset = (v - 1) * Math.max(1, Math.floor(shuffled.length / UNIT_TEST_VARIANTS))
  const selected: PoolQuestion[] = []
  for (let i = 0; i < target; i++) {
    selected.push(shuffled[(offset + i) % shuffled.length])
  }

  // Final shuffle of order is also seeded so the same variant
  // always produces the same order.
  const ordered = seededShuffle(selected, unitSeed(unitId, v) ^ 0x9e3779b9)

  const questions: APPhysics1UnitTestQuestion[] = ordered.map(q => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    topicSlug: q.topicSlug,
  }))

  return {
    unitId,
    unitName: unit.name,
    unitNumber: unit.unitNumber,
    variant: v,
    questions,
    totalQuestions: questions.length,
    timeLimitMinutes: UNIT_TEST_TIME_LIMIT_MINUTES,
  }
}

export function scoreUnitTest(
  test: APPhysics1UnitTestData,
  answers: Record<number, number>,
): APPhysics1UnitTestResults {
  let totalCorrect = 0
  const missed = new Set<string>()
  test.questions.forEach((q, i) => {
    if (answers[i] !== undefined && answers[i] === q.correctAnswer) totalCorrect++
    else missed.add(q.topicSlug)
  })
  const totalQuestions = test.questions.length
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const level: 'strong' | 'moderate' | 'weak' =
    percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'

  const missedTopicSlugs = [...missed]
  const recommendedTopics = missedTopicSlugs.slice(0, 3).map(slug => ({
    slug,
    name: AP_PHYSICS1_SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
  }))

  return {
    unitId: test.unitId,
    unitName: test.unitName,
    unitNumber: test.unitNumber,
    variant: test.variant,
    totalCorrect,
    totalQuestions,
    percentage,
    level,
    missedTopicSlugs,
    recommendedTopics,
  }
}
