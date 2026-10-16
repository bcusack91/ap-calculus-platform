/**
 * AP Physics C: Mechanics Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~30 questions spanning
 * all 5 core domains.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 */

import { apPhysicsCMechQuestionPool } from './exit-quizzes/ap-physics-c-mechanics'
import { mulberry32 } from './_shared/prng'
import { estimateApScore } from '@/lib/ap-scoring'
import { AP_CANONICAL_TOPIC_NAMES, diagnosticItemTopic, isServedItem } from '@/lib/ap-topic-canonical'

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
  { id: 'kinematics', name: 'Kinematics', topicSlugs: ['physics-c-position-velocity-acceleration', 'physics-c-variable-acceleration'], questionTarget: 6 },
  { id: 'newtons-laws', name: "Newton's Laws of Motion", topicSlugs: ['physics-c-newtons-laws-calculus', 'physics-c-friction-inclines', 'physics-c-circular-motion'], questionTarget: 6 },
  { id: 'work-energy-power', name: 'Work, Energy & Power', topicSlugs: ['physics-c-work-power', 'physics-c-conservative-forces'], questionTarget: 6 },
  { id: 'momentum', name: 'Systems of Particles & Momentum', topicSlugs: ['physics-c-momentum-collisions', 'physics-c-center-of-mass'], questionTarget: 6 },
  { id: 'rotation-oscillation', name: 'Rotation & Oscillation', topicSlugs: ['physics-c-rotational-kinematics-dynamics', 'physics-c-angular-momentum', 'physics-c-simple-harmonic-motion'], questionTarget: 6 },
]

export { AP_PHYSICS_C_MECH_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Seeded PRNG (mulberry32) for deterministic per-form selection      */
/* ------------------------------------------------------------------ */

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/* ------------------------------------------------------------------ */
/*  Served pool: production topic slugs only                           */
/* ------------------------------------------------------------------ */

/**
 * Legacy sub-slugs (physics-c-1d-kinematics, physics-c-variable-mass, …) have no Topic row, so they map through AP_LEGACY_TOPIC_SLUGS['ap-physics-c-mechanics'];
 * these items, keyed by diagnosticItemKey(question), go to a different lesson
 * than their slug's default (null = not served). Phase 2 (Oct 2026).
 */
export const PCMECH_ITEM_TOPIC_EXCEPTIONS: Record<string, string | null> = {
  'c7819760': 'physics-c-variable-acceleration', // The acceleration of a particle is a(t) = 4t. If v(0) = 2 m/s, what is
  '57aa1b0c': 'physics-c-variable-acceleration', // A car accelerates from rest with a(t) = 6 − 2t $(m/s^{2})$. What is th
  '1eab6b4d': 'physics-c-variable-acceleration', // The acceleration of a particle is a = 4 − 2t $m/s^{2}$. With v(0) = 0,
  '75cb894c': 'physics-c-circular-motion', // A particle moves in a circle of radius 2 m. Its angular position is θ(
  'fa9ecd6a': 'physics-c-circular-motion', // A particle has position r(t) = (R cos ωt)î + (R sin ωt)ĵ. What is the
  '150d4f20': null, // The thrust of a rocket is given by: [rockets / falling chain: off the CED (4.2.B.2.iii covers only constant velocity with changing mass)]
  'c2c10da1': null, // A chain of linear density λ hangs vertically. If it falls under gravit [rockets / falling chain: off the CED (4.2.B.2.iii covers only constant velocity with changing mass)]
  'a51824ea': null, // A rocket has initial mass 1000 kg and burns fuel at 10 kg/s with exhau [rockets / falling chain: off the CED (4.2.B.2.iii covers only constant velocity with changing mass)]
  '8ddd055e': null, // A 400 kg rocket hovers motionless just above the ground (g = 10 $m/s^{ [rockets / falling chain: off the CED (4.2.B.2.iii covers only constant velocity with changing mass)]
}

/**
 * The exit pool tagged with the production topic that teaches each item
 * (null = not served; skipped at selection so other items keep their slots).
 */
const TAGGED_POOL = apPhysicsCMechQuestionPool.map((q) => ({ ...q, topicSlug: diagnosticItemTopic('ap-physics-c-mechanics', q, PCMECH_ITEM_TOPIC_EXCEPTIONS) }))

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateAPPhysicsCMechTest(form: number): APPhysicsCMechTestData {
  const rng = mulberry32(form * 7919)
  const questions: APPhysicsCMechQuestion[] = []

  for (const domain of AP_PHYSICS_C_MECH_DOMAINS) {
    const pool = TAGGED_POOL.filter(q => q.domain === domain.id)
    // Dropped items keep their place in the shuffle; the next served item takes the slot.
    const shuffled = seededShuffle(pool, rng).filter(isServedItem)
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

  const estimatedAPScore = estimateApScore(percentage)

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Some legacy domain slugs aren't real Topic records — canonicalize them so
  // recommendation links resolve to live topic/lesson pages (same pattern as SAT).
  const CANONICAL_TOPIC_MAP: Record<string, string> = {
    'physics-c-1d-kinematics': 'physics-c-position-velocity-acceleration',
    'physics-c-2d-kinematics': 'physics-c-position-velocity-acceleration',
    'physics-c-potential-energy-curves': 'physics-c-conservative-forces',
    'physics-c-variable-mass': 'physics-c-momentum-collisions',
  }
  const canonicalizeTopicSlug = (s: string) => CANONICAL_TOPIC_MAP[s] ?? s
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
      const canonical = canonicalizeTopicSlug(slug)
      if (recommendedTopics.some(t => t.slug === canonical)) continue
      recommendedTopics.push({ slug: canonical, name: slugToReadableName(canonical), domainId: wd.domainId, priority: 'high' })
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
    const canonicalMd = canonicalizeTopicSlug(slug)
    if (!recommendedTopics.some(t => t.slug === canonicalMd)) {
      recommendedTopics.push({ slug: canonicalMd, name: slugToReadableName(canonicalMd), domainId: md.domainId, priority: 'medium' })
    }
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

/** Production Topic titles, so a recommendation reads like the topic page it links to. */
const SLUG_LABELS: Record<string, string> = {
  'physics-c-angular-momentum': 'Angular Momentum',
  'physics-c-center-of-mass': 'Center of Mass',
  'physics-c-circular-motion': 'Circular Motion and Polar Coordinates',
  'physics-c-conservative-forces': 'Conservative Forces and Potential Energy',
  'physics-c-friction-inclines': 'Friction and Inclined Planes',
  'physics-c-moment-of-inertia': 'Moment of Inertia',
  'physics-c-momentum-collisions': 'Momentum and Collisions',
  'physics-c-newtons-laws-calculus': 'Newton\'s Laws with Calculus',
  'physics-c-position-velocity-acceleration': 'Position, Velocity, and Acceleration',
  'physics-c-rotational-kinematics-dynamics': 'Rotational Kinematics and Dynamics',
  'physics-c-simple-harmonic-motion': 'Simple Harmonic Motion',
  'physics-c-universal-gravitation': 'Universal Gravitation and Orbits',
  'physics-c-variable-acceleration': 'Motion with Variable Acceleration',
  'physics-c-work-power': 'Work and Power',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? AP_CANONICAL_TOPIC_NAMES[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
