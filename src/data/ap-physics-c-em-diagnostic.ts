/**
 * AP Physics C: Electricity & Magnetism Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~30 questions spanning
 * all 5 core domains.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 */

import { apPhysicsCEMQuestionPool } from './exit-quizzes/ap-physics-c-em'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APPhysicsCEMQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPhysicsCEMDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APPhysicsCEMTestData {
  form: number
  questions: APPhysicsCEMQuestion[]
  domains: APPhysicsCEMDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPhysicsCEMDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPhysicsCEMRecommendedTopic { slug: string; name: string; domainId: string; priority: 'high' | 'medium' }

export interface APPhysicsCEMResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APPhysicsCEMDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPhysicsCEMRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const AP_PHYSICS_C_EM_DOMAINS: APPhysicsCEMDomain[] = [
  { id: 'electrostatics', name: 'Electrostatics', topicSlugs: ['physics-c-coulomb-law', 'physics-c-electric-fields', 'physics-c-gauss-law'], questionTarget: 6 },
  { id: 'electric-potential', name: 'Electric Potential', topicSlugs: ['physics-c-electric-potential', 'physics-c-conductors-equilibrium', 'physics-c-potential-energy'], questionTarget: 6 },
  { id: 'capacitors-dielectrics', name: 'Capacitors & Dielectrics', topicSlugs: ['physics-c-capacitors', 'physics-c-dielectrics', 'physics-c-energy-density'], questionTarget: 6 },
  { id: 'circuits', name: 'Electric Circuits', topicSlugs: ['physics-c-dc-circuits', 'physics-c-rc-circuits', 'physics-c-power-circuits'], questionTarget: 6 },
  { id: 'magnetism-em-induction', name: 'Magnetism & EM Induction', topicSlugs: ['physics-c-magnetic-forces', 'physics-c-magnetic-field-sources', 'physics-c-faraday-induction', 'physics-c-inductance-rl', 'physics-c-maxwell-equations'], questionTarget: 6 },
]

export { AP_PHYSICS_C_EM_DOMAINS }

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

export function generateAPPhysicsCEMTest(form: number): APPhysicsCEMTestData {
  const rng = mulberry32(form * 7919)
  const questions: APPhysicsCEMQuestion[] = []

  for (const domain of AP_PHYSICS_C_EM_DOMAINS) {
    const pool = apPhysicsCEMQuestionPool.filter(q => q.domain === domain.id)
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
    domains: AP_PHYSICS_C_EM_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 40,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPPhysicsCEM(
  form: number,
  questions: APPhysicsCEMQuestion[],
  answers: Record<number, number>,
): APPhysicsCEMResults {
  const domainResults: APPhysicsCEMDomainResult[] = AP_PHYSICS_C_EM_DOMAINS.map(domain => {
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

  const recommendedTopics: APPhysicsCEMRecommendedTopic[] = []

  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_PHYSICS_C_EM_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))

  for (const wd of weakDomainResults) {
    const domainDef = AP_PHYSICS_C_EM_DOMAINS.find(d => d.id === wd.domainId)
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
    const domainDef = AP_PHYSICS_C_EM_DOMAINS.find(d => d.id === md.domainId)
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
  'physics-c-coulomb-law': "Coulomb's Law & Superposition",
  'physics-c-electric-fields': 'Electric Field Calculations',
  'physics-c-gauss-law': "Gauss's Law",
  'physics-c-electric-potential': 'Electric Potential',
  'physics-c-conductors-equilibrium': 'Conductors in Equilibrium',
  'physics-c-potential-energy': 'Electric Potential Energy',
  'physics-c-capacitors': 'Capacitors',
  'physics-c-dielectrics': 'Dielectrics',
  'physics-c-energy-density': 'Energy Density',
  'physics-c-dc-circuits': 'DC Circuits',
  'physics-c-rc-circuits': 'RC Circuits',
  'physics-c-power-circuits': 'Power in Circuits',
  'physics-c-magnetic-forces': 'Magnetic Forces',
  'physics-c-magnetic-field-sources': 'Magnetic Field Sources',
  'physics-c-faraday-induction': "Faraday's Law & Induction",
  'physics-c-inductance-rl': 'Inductance & RL Circuits',
  'physics-c-maxwell-equations': "Maxwell's Equations",
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
