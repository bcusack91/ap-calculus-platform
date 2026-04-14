/**
 * AP Physics 2 Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~33 questions spanning
 * all 7 core domains.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 */

import { apPhysics2QuestionPool } from './exit-quizzes/ap-physics-2'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APPhysics2DiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPhysics2Domain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APPhysics2DiagnosticTestData {
  form: number
  questions: APPhysics2DiagnosticQuestion[]
  domains: APPhysics2Domain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPhysics2DomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPhysics2RecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APPhysics2DiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APPhysics2DomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPhysics2RecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const AP_PHYSICS2_DOMAINS: APPhysics2Domain[] = [
  { id: 'fluids', name: 'Fluids', topicSlugs: ['fluid-pressure', 'buoyancy', 'fluid-dynamics'], questionTarget: 5 },
  { id: 'thermodynamics', name: 'Thermodynamics', topicSlugs: ['temperature-and-heat', 'kinetic-theory', 'thermodynamic-laws'], questionTarget: 5 },
  { id: 'electricity', name: 'Electric Force, Field & Potential', topicSlugs: ['electric-charge-and-force', 'electric-fields', 'electric-potential', 'capacitance'], questionTarget: 5 },
  { id: 'circuits', name: 'Electric Circuits', topicSlugs: ['dc-circuits', 'rc-circuits'], questionTarget: 5 },
  { id: 'magnetism', name: 'Magnetism & Electromagnetic Induction', topicSlugs: ['magnetic-fields', 'electromagnetic-induction'], questionTarget: 5 },
  { id: 'optics', name: 'Geometric & Physical Optics', topicSlugs: ['geometric-optics', 'wave-optics'], questionTarget: 4 },
  { id: 'modern-physics', name: 'Quantum, Atomic & Nuclear Physics', topicSlugs: ['atomic-structure', 'nuclear-physics', 'quantum-mechanics'], questionTarget: 4 },
]

export { AP_PHYSICS2_DOMAINS }

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

export function generateAPPhysics2DiagnosticTest(form: number): APPhysics2DiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APPhysics2DiagnosticQuestion[] = []

  for (const domain of AP_PHYSICS2_DOMAINS) {
    const pool = apPhysics2QuestionPool.filter(q => q.domain === domain.id)
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
    domains: AP_PHYSICS2_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 45,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPPhysics2Diagnostic(
  form: number,
  questions: APPhysics2DiagnosticQuestion[],
  answers: Record<number, number>,
): APPhysics2DiagnosticResults {
  const domainResults: APPhysics2DomainResult[] = AP_PHYSICS2_DOMAINS.map(domain => {
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

  const recommendedTopics: APPhysics2RecommendedTopic[] = []

  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = AP_PHYSICS2_DOMAINS.find(d => d.id === wd.domainId)
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

  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_PHYSICS2_DOMAINS.find(d => d.id === md.domainId)
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
  'fluid-pressure': 'Fluid Pressure & Density',
  'buoyancy': 'Buoyancy & Archimedes',
  'fluid-dynamics': 'Fluid Dynamics & Bernoulli',
  'temperature-and-heat': 'Temperature & Heat Transfer',
  'kinetic-theory': 'Kinetic Theory of Gases',
  'thermodynamic-laws': 'Laws of Thermodynamics',
  'electric-charge-and-force': 'Electric Charge & Coulomb\'s Law',
  'electric-fields': 'Electric Fields',
  'electric-potential': 'Electric Potential & Energy',
  'capacitance': 'Capacitance',
  'dc-circuits': 'DC Circuits',
  'rc-circuits': 'RC Circuits',
  'magnetic-fields': 'Magnetic Fields & Forces',
  'electromagnetic-induction': 'Electromagnetic Induction',
  'geometric-optics': 'Reflection, Refraction & Lenses',
  'wave-optics': 'Interference & Diffraction',
  'atomic-structure': 'Atomic Structure & Photoelectric Effect',
  'nuclear-physics': 'Nuclear Physics & Radioactivity',
  'quantum-mechanics': 'Quantum Mechanics & Wave-Particle Duality',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
