/**
 * AP Physics C: Mechanics Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~30 questions spanning
 * all 5 core domains.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 */

import { apPhysicsCMechQuestionPool } from './exit-quizzes/ap-physics-c-mechanics'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APPhysicsCMechQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPhysicsCMechDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APPhysicsCMechTestData {
  form: number
  questions: APPhysicsCMechQuestion[]
  domains: APPhysicsCMechDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPhysicsCMechDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPhysicsCMechRecommendedTopic { slug: string; name: string; domainId: string; priority: 'high' | 'medium' }

export interface APPhysicsCMechResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APPhysicsCMechDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPhysicsCMechRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const AP_PHYSICS_C_MECH_DOMAINS: APPhysicsCMechDomain[] = [
  { id: 'kinematics', name: 'Kinematics', topicSlugs: ['physics-c-1d-kinematics', 'physics-c-2d-kinematics', 'physics-c-variable-acceleration'], questionTarget: 6 },
  { id: 'newtons-laws', name: "Newton's Laws of Motion", topicSlugs: ['physics-c-newtons-laws-calculus', 'physics-c-friction-inclines', 'physics-c-circular-motion'], questionTarget: 6 },
  { id: 'work-energy-power', name: 'Work, Energy & Power', topicSlugs: ['physics-c-work-power', 'physics-c-conservative-forces', 'physics-c-potential-energy-curves'], questionTarget: 6 },
  { id: 'momentum', name: 'Systems of Particles & Momentum', topicSlugs: ['physics-c-momentum-collisions', 'physics-c-center-of-mass', 'physics-c-variable-mass'], questionTarget: 6 },
  { id: 'rotation-oscillation', name: 'Rotation & Oscillation', topicSlugs: ['physics-c-rotational-kinematics-dynamics', 'physics-c-angular-momentum', 'physics-c-simple-harmonic-motion'], questionTarget: 6 },
]

export { AP_PHYSICS_C_MECH_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Seeded PRNG (mulberry32) for deterministic per-form selection      */
/* ------------------------------------------------------------------ */

function mulberry32(seed: number) {
  return function () {
    // eslint-disable-next-line no-param-reassign
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateAPPhysicsCMechTest(form: number): APPhysicsCMechTestData {
  const rng = mulberry32(form * 7919)
  const questions: APPhysicsCMechQuestion[] = []

  for (const domain of AP_PHYSICS_C_MECH_DOMAINS) {
    const pool = apPhysicsCMechQuestionPool.filter(q => q.domain === domain.id)
    const shuffled = seededShuffle(pool, rng)
    const selected = shuffled.slice(0, domain.questionTarget)

    for (const q of selected) {
      questions.push({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        domain: domain.id,
        topicSlug: q.topicSlug,
      })
    }
  }

  const shuffledQuestions = seededShuffle(questions, rng)

  return {
    form,
    questions: shuffledQuestions,
    domains: AP_PHYSICS_C_MECH_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 40,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPPhysicsCMech(
  form: number,
  questions: APPhysicsCMechQuestion[],
  answers: Record<number, number>,
): APPhysicsCMechResults {
  const domainResults: APPhysicsCMechDomainResult[] = AP_PHYSICS_C_MECH_DOMAINS.map(domain => {
    const domainQs = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.domain === domain.id)

    const correct = domainQs.filter(({ i }) => {
      const answer = answers[i]
      return answer !== undefined && answer === questions[i].correctAnswer
    }).length

    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' =
      percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'

    return { domainId: domain.id, domainName: domain.name, correct, total, percentage, level }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  const recommendedTopics: APPhysicsCMechRecommendedTopic[] = []

  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_PHYSICS_C_MECH_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))

  for (const wd of weakDomainResults) {
    const domainDef = AP_PHYSICS_C_MECH_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === wd.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) missedSlugs.add(q.topicSlug)
      }
    })
    const slugsToRecommend = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugsToRecommend) {
      if (recommendedTopics.length >= 5) break
      recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' })
    }
  }

  for (const md of moderateDomainResults) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_PHYSICS_C_MECH_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === md.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) missedSlugs.add(q.topicSlug)
      }
    })
    const slug = missedSlugs.size > 0 ? [...missedSlugs][0] : domainDef.topicSlugs[0]
    recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: md.domainId, priority: 'medium' })
  }

  return {
    form,
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedAPScore,
    domains: domainResults,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics: recommendedTopics.slice(0, 5),
  }
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
  'physics-c-1d-kinematics': '1D Kinematics (Calculus)',
  'physics-c-2d-kinematics': '2D Kinematics & Projectiles',
  'physics-c-variable-acceleration': 'Variable Acceleration',
  'physics-c-newtons-laws-calculus': "Newton's Laws (Calculus)",
  'physics-c-friction-inclines': 'Friction & Inclines',
  'physics-c-circular-motion': 'Circular Motion',
  'physics-c-work-power': 'Work & Power',
  'physics-c-conservative-forces': 'Conservative Forces & PE',
  'physics-c-potential-energy-curves': 'Potential Energy Curves',
  'physics-c-momentum-collisions': 'Momentum & Collisions',
  'physics-c-center-of-mass': 'Center of Mass',
  'physics-c-variable-mass': 'Variable Mass Systems',
  'physics-c-rotational-kinematics-dynamics': 'Rotational Dynamics',
  'physics-c-angular-momentum': 'Angular Momentum',
  'physics-c-simple-harmonic-motion': 'Simple Harmonic Motion',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
