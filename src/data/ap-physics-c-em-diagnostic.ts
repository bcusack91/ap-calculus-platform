/**
 * AP Physics C: Electricity & Magnetism Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~30 questions spanning
 * all 5 core domains.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 */

import { apPhysicsCEMQuestionPool } from './exit-quizzes/ap-physics-c-em'
import { mulberry32 } from './_shared/prng'
import { estimateApScore } from '@/lib/ap-scoring'
import { AP_CANONICAL_TOPIC_NAMES, diagnosticItemTopic, isServedItem } from '@/lib/ap-topic-canonical'

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
  { id: 'electrostatics', name: 'Electrostatics', topicSlugs: ['physics-c-electric-field-coulomb', 'physics-c-gauss-law'], questionTarget: 6 },
  { id: 'electric-potential', name: 'Electric Potential', topicSlugs: ['physics-c-electric-potential', 'physics-c-gauss-law'], questionTarget: 6 },
  { id: 'capacitors-dielectrics', name: 'Capacitors & Dielectrics', topicSlugs: ['physics-c-capacitors-dielectrics'], questionTarget: 6 },
  { id: 'circuits', name: 'Electric Circuits', topicSlugs: ['physics-c-dc-circuits', 'physics-c-rc-circuits'], questionTarget: 6 },
  { id: 'magnetism-em-induction', name: 'Magnetism & EM Induction', topicSlugs: ['physics-c-magnetic-forces', 'physics-c-magnetic-field-sources', 'physics-c-faraday-lenz', 'physics-c-inductance-rl-circuits', 'physics-c-maxwell-equations'], questionTarget: 6 },
]

export { AP_PHYSICS_C_EM_DOMAINS }

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
 * Legacy sub-slugs (physics-c-faraday-induction, physics-c-conductors-equilibrium, …) have no Topic row, so they map through AP_LEGACY_TOPIC_SLUGS['ap-physics-c-em'];
 * these items, keyed by diagnosticItemKey(question), go to a different lesson
 * than their slug's default (null = not served). Phase 2 (Oct 2026).
 */
export const PCEM_ITEM_TOPIC_EXCEPTIONS: Record<string, string | null> = {
  '1bc76c6b': 'physics-c-electric-potential', // Charge on an irregularly shaped conductor in equilibrium is distribute
  '3d245a42': 'physics-c-electric-potential', // A grounded conducting sphere of radius R is placed in a uniform electr
  '5677a610': 'physics-c-electric-potential', // A conducting ellipsoid is charged. Compared to a region of smaller cur
  '979efb86': 'physics-c-electric-potential', // A charge Q is distributed uniformly along a thin ring of radius R. The
  'acbb8dad': 'physics-c-gauss-law', // The electric field at distance r from an infinitely long line charge w
  'e70cc09a': 'physics-c-gauss-law', // An infinitely long line of charge has uniform linear charge density λ.
  '7cdb18f1': 'physics-c-gauss-law', // The electric field inside a uniformly charged insulating sphere of rad
  '30149a8a': 'physics-c-gauss-law', // The electric field at the surface of a uniformly charged solid sphere
  '58a747b4': 'physics-c-inductance-rl-circuits', // The current in an inductor falls steadily from 3.0 A to 1.0 A in 0.50
  '7f95997d': 'physics-c-inductance-rl-circuits', // The current in a 0.30 H inductor drops steadily from 4.0 A to zero in
  '05c07b09': 'physics-c-inductance-rl-circuits', // A 9.0 V battery is connected in series with a 3.0 Ω resistor and a 0.6
  '5eb5be4b': 'physics-c-inductance-rl-circuits', // Immediately after the switch closes in a series circuit of an ideal ba
  'd874dc20': 'physics-c-maxwell-equations', // In a region where B is changing at rate dB/dt, the induced electric fi
  'c0ffbeaf': 'physics-c-maxwell-equations', // For the same cylindrical region with uniform dB/dt, the induced electr
}

/**
 * The exit pool tagged with the production topic that teaches each item
 * (null = not served; skipped at selection so other items keep their slots).
 */
const TAGGED_POOL = apPhysicsCEMQuestionPool.map((q) => ({ ...q, topicSlug: diagnosticItemTopic('ap-physics-c-em', q, PCEM_ITEM_TOPIC_EXCEPTIONS) }))

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateAPPhysicsCEMTest(form: number): APPhysicsCEMTestData {
  const rng = mulberry32(form * 7919)
  const questions: APPhysicsCEMQuestion[] = []

  for (const domain of AP_PHYSICS_C_EM_DOMAINS) {
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

  const estimatedAPScore = estimateApScore(percentage)

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Some legacy domain slugs aren't real Topic records — canonicalize them so
  // recommendation links resolve to live topic/lesson pages (same pattern as SAT).
  const CANONICAL_TOPIC_MAP: Record<string, string> = {
    'physics-c-coulomb-law': 'physics-c-electric-field-coulomb',
    'physics-c-electric-fields': 'physics-c-electric-field-coulomb',
    'physics-c-conductors-equilibrium': 'physics-c-gauss-law',
    'physics-c-potential-energy': 'physics-c-electric-potential',
    'physics-c-capacitors': 'physics-c-capacitors-dielectrics',
    'physics-c-dielectrics': 'physics-c-capacitors-dielectrics',
    'physics-c-energy-density': 'physics-c-capacitors-dielectrics',
    'physics-c-power-circuits': 'physics-c-dc-circuits',
    'physics-c-faraday-induction': 'physics-c-faraday-lenz',
    'physics-c-inductance-rl': 'physics-c-inductance-rl-circuits',
  }
  const canonicalizeTopicSlug = (s: string) => CANONICAL_TOPIC_MAP[s] ?? s
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
      const canonical = canonicalizeTopicSlug(slug)
      if (recommendedTopics.some(t => t.slug === canonical)) continue
      recommendedTopics.push({ slug: canonical, name: slugToReadableName(canonical), domainId: wd.domainId, priority: 'high' })
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
  'physics-c-capacitors-dielectrics': 'Capacitors and Dielectrics',
  'physics-c-dc-circuits': 'Current, Resistance, and DC Circuits',
  'physics-c-electric-field-coulomb': 'Electric Field and Coulomb\'s Law',
  'physics-c-electric-potential': 'Electric Potential',
  'physics-c-faraday-lenz': 'Faraday\'s Law and Lenz\'s Law',
  'physics-c-gauss-law': 'Gauss\'s Law',
  'physics-c-inductance-rl-circuits': 'Inductance and RL Circuits',
  'physics-c-magnetic-field-sources': 'Sources of Magnetic Fields',
  'physics-c-magnetic-forces': 'Magnetic Fields and Forces',
  'physics-c-maxwell-equations': 'Maxwell\'s Equations',
  'physics-c-rc-circuits': 'RC Circuits',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? AP_CANONICAL_TOPIC_NAMES[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
