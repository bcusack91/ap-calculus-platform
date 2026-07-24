/**
 * Generic AP unit-test engine.
 *
 * Drives the per-course unit-test pages by sampling questions from
 * a course's diagnostic question pool. Each AP unit gets `variantCount`
 * deterministic test variations so a student can retake the same unit
 * several times without the exact same set of questions.
 */

export interface UnitPoolQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface UnitDef {
  id: string                 // matches the course's `domain` id
  unitNumber: number
  name: string               // College-Board style unit title
  shortName: string
  description: string
  topicSlugs: string[]       // canonical topics covered (used for review links)
  exam_weight: string        // approximate weight on the AP exam
  color: string              // tailwind gradient suffix
  icon: string               // emoji
}

export interface CourseUnitTestConfig {
  courseSlug: string         // e.g. 'ap-chemistry' (course landing page)
  courseHubHref: string      // e.g. '/ap-chemistry'
  courseTitle: string        // e.g. 'AP Chemistry'
  unitTestRoute: string      // e.g. '/ap-chem-unit-tests'
  units: UnitDef[]
  pool: UnitPoolQuestion[]
  slugLabels?: Record<string, string>
  questionsPerVariantCap?: number  // default 12
  variantCount?: number            // default 4
  timeLimitMinutesPerQuestion?: number // default 1.5 (90 s)
  /** Optional review path builder. Defaults to /courses/{courseSlug}/{topicSlug}. */
  reviewHrefForTopic?: (topicSlug: string) => string
  /**
   * Serializable alternative to `reviewHrefForTopic`: send every review link to
   * this one URL. Needed for configs consumed by a Client Component (a function
   * can't cross the server/client boundary), and for courses whose pool is
   * tagged with bank slugs rather than curriculum topic slugs — where a
   * per-topic review URL would 404. Takes precedence over the default path.
   */
  reviewHrefBase?: string
}

export interface UnitTestQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topicSlug: string
}

export interface UnitTestData {
  unitId: string
  unitName: string
  unitNumber: number
  variant: number
  questions: UnitTestQuestion[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface UnitTestResults {
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

const DEFAULT_VARIANT_COUNT = 4
const DEFAULT_CAP = 12
const DEFAULT_MIN_QUESTIONS = 5
const DEFAULT_TIME_PER_Q = 1.5

/* ------------------------------------------------------------------ */
/*  Seeded shuffle (LCG)                                               */
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
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

export function getUnit(config: CourseUnitTestConfig, unitId: string): UnitDef | undefined {
  return config.units.find(u => u.id === unitId)
}

export function getUnitPoolSize(config: CourseUnitTestConfig, unitId: string): number {
  return config.pool.filter(q => q.domain === unitId).length
}

export function getQuestionsPerVariant(config: CourseUnitTestConfig, unitId: string): number {
  const cap = config.questionsPerVariantCap ?? DEFAULT_CAP
  const poolSize = getUnitPoolSize(config, unitId)
  return Math.max(1, Math.min(cap, poolSize))
}

export function variantCountFor(config: CourseUnitTestConfig): number {
  return config.variantCount ?? DEFAULT_VARIANT_COUNT
}

export function generateUnitTest(
  config: CourseUnitTestConfig,
  unitId: string,
  variant: number,
): UnitTestData {
  const unit = getUnit(config, unitId)
  if (!unit) throw new Error(`Unknown unit for ${config.courseSlug}: ${unitId}`)

  const variants = variantCountFor(config)
  const v = Math.max(1, Math.min(variants, Math.floor(variant) || 1))

  const pool = config.pool.filter(q => q.domain === unitId)
  if (pool.length === 0) throw new Error(`No question pool for unit: ${unitId}`)

  const target = getQuestionsPerVariant(config, unitId)

  const shuffled = seededShuffle(pool, unitSeed(unitId, v))
  // Offset window so different variants start at different points in the
  // shuffled pool. When the pool is large enough, variants share fewer
  // questions; when the pool is small, variants will inevitably overlap.
  const offset = (v - 1) * Math.max(1, Math.floor(shuffled.length / variants))
  const selected: UnitPoolQuestion[] = []
  const seen = new Set<number>()
  for (let i = 0; i < target; i++) {
    let idx = (offset + i) % shuffled.length
    // If pool < target, accept duplicates only after exhausting unique entries.
    if (seen.size < shuffled.length && seen.has(idx)) {
      // walk forward until we find an unseen index
      for (let k = 1; k < shuffled.length; k++) {
        const candidate = (idx + k) % shuffled.length
        if (!seen.has(candidate)) {
          idx = candidate
          break
        }
      }
    }
    seen.add(idx)
    selected.push(shuffled[idx])
  }

  // Final order shuffle (deterministic per (unit, variant)).
  const ordered = seededShuffle(selected, unitSeed(unitId, v) ^ 0x9e3779b9)

  const questions: UnitTestQuestion[] = ordered.map(q => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    topicSlug: q.topicSlug,
  }))

  const perQ = config.timeLimitMinutesPerQuestion ?? DEFAULT_TIME_PER_Q
  const timeLimitMinutes = Math.max(5, Math.round(questions.length * perQ))

  return {
    unitId,
    unitName: unit.name,
    unitNumber: unit.unitNumber,
    variant: v,
    questions,
    totalQuestions: questions.length,
    timeLimitMinutes,
  }
}

export function scoreUnitTest(
  config: CourseUnitTestConfig,
  test: UnitTestData,
  answers: Record<number, number>,
): UnitTestResults {
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
  const labels = config.slugLabels ?? {}
  const recommendedTopics = missedTopicSlugs.slice(0, 3).map(slug => ({
    slug,
    name:
      labels[slug] ??
      slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
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

// silence unused warnings for shared default
export { DEFAULT_MIN_QUESTIONS }
