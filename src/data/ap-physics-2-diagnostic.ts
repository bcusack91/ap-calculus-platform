/**
 * AP Physics 2 Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~33 questions spanning
 * all 7 core domains.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 */

import { apPhysics2QuestionPool } from './exit-quizzes/ap-physics-2'
import { mulberry32 } from './_shared/prng'
import { estimateApScore } from '@/lib/ap-scoring'
import { AP_CANONICAL_TOPIC_NAMES, diagnosticItemTopic, isServedItem } from '@/lib/ap-topic-canonical'

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
  // 2024-25 CED: fluids moved to Physics 1; waves & sound moved INTO Physics 2.
  { id: 'waves-sound', name: 'Waves, Sound & Physical Optics', topicSlugs: ['interference-diffraction'], questionTarget: 5 },
  { id: 'thermodynamics', name: 'Thermodynamics', topicSlugs: ['temperature-thermal-expansion', 'heat-specific-heat', 'laws-of-thermodynamics'], questionTarget: 5 },
  { id: 'electricity', name: 'Electric Force, Field & Potential', topicSlugs: ['electric-charge-coulombs-law', 'electric-fields-potential'], questionTarget: 5 },
  { id: 'circuits', name: 'Electric Circuits', topicSlugs: ['current-resistance-ohms-law', 'series-parallel-circuits', 'kirchhoffs-laws'], questionTarget: 5 },
  { id: 'magnetism', name: 'Magnetism & Electromagnetic Induction', topicSlugs: ['magnetic-fields-forces', 'electromagnetic-induction'], questionTarget: 5 },
  { id: 'optics', name: 'Geometric & Physical Optics', topicSlugs: ['reflection-refraction', 'lenses', 'interference-diffraction'], questionTarget: 4 },
  { id: 'modern-physics', name: 'Quantum, Atomic & Nuclear Physics', topicSlugs: ['photons-atomic-nuclear'], questionTarget: 4 },
]

export { AP_PHYSICS2_DOMAINS }

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
 * Pre-2024 unit slugs (wave-properties, kinetic-theory, dc-circuits, …) have no Topic row, so they map through AP_LEGACY_TOPIC_SLUGS['ap-physics-2'];
 * these items, keyed by diagnosticItemKey(question), go to a different lesson
 * than their slug's default (null = not served). Phase 2 (Oct 2026).
 */
export const PHYSICS2_ITEM_TOPIC_EXCEPTIONS: Record<string, string | null> = {
  '13a483d9': 'series-parallel-circuits', // Two capacitors in parallel: $C_{total} =$
  '1e3f3a6f': 'series-parallel-circuits', // Capacitors in parallel: $C_{total} =$
  '8ed141d2': 'series-parallel-circuits', // Two 6 μF capacitors in series have equivalent capacitance:
  '5f50f60a': 'series-parallel-circuits', // Two capacitors $C_{1}$ = 4 μF and $C_{2}$ = 6 μF in series have equiva
  '9fe5d01f': 'series-parallel-circuits', // Two capacitors $C_{1}$ = 3 μF and $C_{2}$ = 6 μF in parallel have equi
  '59cc2179': 'kirchhoffs-laws', // Kirchhoff's junction rule is based on conservation of:
  '80f8d1e6': 'kirchhoffs-laws', // Kirchhoff's current law states that total current entering a junction
  '75cd8447': 'kirchhoffs-laws', // Kirchhoff's loop rule is based on conservation of:
  'aa6332fc': 'series-parallel-circuits', // Three 6 Ω resistors in series: total resistance?
  '732b7132': 'series-parallel-circuits', // Three 6 Ω resistors in parallel: total resistance?
  'c55c486c': 'series-parallel-circuits', // Two 10 Ω resistors in parallel have equivalent resistance:
  'dd780b58': 'series-parallel-circuits', // In a series circuit, ___ is the same through each resistor.
  'd04a9583': 'series-parallel-circuits', // Adding resistors in parallel to a circuit ___ total resistance.
  '7fb67805': 'series-parallel-circuits', // Three resistors of 6 Ω each in parallel have an equivalent resistance
  'ff0e0064': 'series-parallel-circuits', // In a series circuit, the current through each component is:
  'add30a66': 'series-parallel-circuits', // In parallel, the voltage across each branch is:
  '7f72406a': 'lenses', // The thin lens equation: $1/f =$
  '8a464e05': 'lenses', // A converging (convex) lens has a focal length that is:
  '7b30c317': 'lenses', // A converging (convex) lens has a ___ focal length.
  '44ee228a': 'lenses', // Magnification $m = -d_i/d_o$. If $m = -2$:
  '67243c42': 'lenses', // For a thin converging lens, if the object is at 2f, the image is:
  '5261c080': 'lenses', // A virtual image:
  '0f83681b': 'lenses', // The magnification equation for a mirror/lens is m = −d_i/d_o. If m = −
  'a8ba4270': 'temperature-thermal-expansion', // Temperature measures:
  '789b0765': 'temperature-thermal-expansion', // 0 K (absolute zero) corresponds to:
  'beb6ea3c': 'temperature-thermal-expansion', // Two blocks of different materials, one at 20°C and one at 80°C, are pl
}

/**
 * The exit pool tagged with the production topic that teaches each item
 * (null = not served; skipped at selection so other items keep their slots).
 */
const TAGGED_POOL = apPhysics2QuestionPool.map((q) => ({ ...q, topicSlug: diagnosticItemTopic('ap-physics-2', q, PHYSICS2_ITEM_TOPIC_EXCEPTIONS) }))

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateAPPhysics2DiagnosticTest(form: number): APPhysics2DiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APPhysics2DiagnosticQuestion[] = []

  for (const domain of AP_PHYSICS2_DOMAINS) {
    const pool = TAGGED_POOL.filter(q => q.domain === domain.id)
    const shuffled = seededShuffle(pool, rng).filter(isServedItem)
    // The pool deliberately holds near-duplicate variants of some stems (for
    // cross-form variety), so select with distinct stems — otherwise a form
    // can ask the same question twice.
    const seenStems = new Set<string>()
    const selected: typeof shuffled = []
    for (const q of shuffled) {
      const stem = q.question.trim().toLowerCase()
      if (seenStems.has(stem)) continue
      seenStems.add(stem)
      selected.push(q)
      if (selected.length === domain.questionTarget) break
    }

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

  const estimatedAPScore = estimateApScore(percentage)

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Some legacy domain slugs aren't real Topic records — canonicalize them so
  // recommendation links resolve to live topic/lesson pages (same pattern as SAT).
  const CANONICAL_TOPIC_MAP: Record<string, string> = {
    // Waves slugs have no dedicated Physics 2 topic pages yet — route to the
    // nearest live topic (wave-optics) until dedicated topics are seeded.
    'wave-properties': 'wave-optics',
    'sound-waves': 'wave-optics',
    'standing-waves': 'wave-optics',
    'physical-optics': 'wave-optics',
    'temperature-and-heat': 'heat-specific-heat',
    'kinetic-theory': 'temperature-thermal-expansion',
    'thermodynamic-laws': 'laws-of-thermodynamics',
    'electric-charge-and-force': 'electric-charge-coulombs-law',
    'electric-fields': 'electric-fields-potential',
    'electric-potential': 'electric-fields-potential',
    'capacitance': 'electric-fields-potential',
    'dc-circuits': 'current-resistance-ohms-law',
    'rc-circuits': 'kirchhoffs-laws',
    'magnetic-fields': 'magnetic-fields-forces',
    'geometric-optics': 'reflection-refraction',
    'wave-optics': 'interference-diffraction',
    'atomic-structure': 'photons-atomic-nuclear',
    'nuclear-physics': 'photons-atomic-nuclear',
    'quantum-mechanics': 'photons-atomic-nuclear',
  }
  const canonicalizeTopicSlug = (s: string) => CANONICAL_TOPIC_MAP[s] ?? s
  const recommendedTopics: APPhysics2RecommendedTopic[] = []

  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_PHYSICS2_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))

  for (const wd of weakDomainResults) {
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
      const canonical = canonicalizeTopicSlug(slug)
      if (recommendedTopics.some(t => t.slug === canonical)) continue
      recommendedTopics.push({ slug: canonical, name: slugToReadableName(canonical), domainId: wd.domainId, priority: 'high' })
    }
  }

  for (const md of moderateDomainResults) {
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
  'current-resistance-ohms-law': 'Current, Resistance, and Ohm\'s Law',
  'electric-charge-coulombs-law': 'Electric Charge and Coulomb\'s Law',
  'electric-fields-potential': 'Electric Fields and Electric Potential',
  'electromagnetic-induction': 'Electromagnetic Induction',
  'heat-specific-heat': 'Heat and Specific Heat',
  'interference-diffraction': 'Interference and Diffraction',
  'kirchhoffs-laws': 'Kirchhoff\'s Laws',
  'laws-of-thermodynamics': 'Laws of Thermodynamics',
  'lenses': 'Lenses',
  'magnetic-fields-forces': 'Magnetic Fields and Forces',
  'photons-atomic-nuclear': 'Photons and Atomic Physics',
  'reflection-refraction': 'Reflection and Refraction',
  'series-parallel-circuits': 'Series and Parallel Circuits',
  'temperature-thermal-expansion': 'Temperature and Thermal Expansion',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? AP_CANONICAL_TOPIC_NAMES[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
