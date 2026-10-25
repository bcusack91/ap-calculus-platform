// Server-side generation of the Daily question: 5 questions per UTC day from
// the student's OWN course bank (see pickDailySet), chosen with a date-seeded
// PRNG so everyone in the same course sees the SAME questions on a given day
// and the POST grader can regenerate the identical set (questions AND option
// order) to grade server-side. Students whose course has no bank get the
// original mixed set (Limits, Derivatives, Integrals, Algebra, SAT Math).
//
// The bank getters themselves shuffle with Math.random, so determinism is
// achieved by pulling the ENTIRE bank (huge count) and canonicalizing the
// order by sorting on question text before the seeded pick.

interface BankQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty?: string
}

export interface DailyQuestion {
  /** Stable per-day id, e.g. "2026-07-09-limits" or "2026-07-09-mcat-mcat-2" */
  id: string
  subject: string
  question: string
  /** Options in served (seeded-shuffled) order. */
  options: string[]
  /** Index of the correct option in the SERVED order. Never send to clients pre-submit. */
  correctAnswer: number
  explanation: string
}

/** Question shape safe to send to the client before submission. */
export interface PublicDailyQuestion {
  id: string
  subject: string
  question: string
  options: string[]
}

export function toPublicQuestion(q: DailyQuestion): PublicDailyQuestion {
  return { id: q.id, subject: q.subject, question: q.question, options: q.options }
}

/** Today's challenge key: UTC yyyy-mm-dd. */
export function getUtcDayKey(now: Date = new Date()): string {
  return now.toISOString().slice(0, 10)
}

/** The @db.Date value for a day key (UTC midnight). */
export function dayKeyToDate(dayKey: string): Date {
  return new Date(`${dayKey}T00:00:00.000Z`)
}

// --- Tiny seeded PRNG (FNV-1a hash -> mulberry32). Math.random is fine
// elsewhere at runtime, but the daily selection must be deterministic. ---

function hashSeed(str: string): number {
  let h = 2166136261 >>> 0
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry32(seed: number): () => number {
  let t = seed >>> 0
  return () => {
    t = (t + 0x6d2b79f5) >>> 0
    let x = t
    x = Math.imul(x ^ (x >>> 15), x | 1)
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

// Lazily loaded banks (mirrors competitive-utils' pattern so this route only
// pulls the banks it needs at runtime). A huge count returns the whole bank.
const ALL = 1_000_000

interface DailyBank {
  key: string
  subject: string
  load: () => Promise<BankQuestion[]>
}

const bank = (key: string, subject: string, load: () => Promise<BankQuestion[]>): DailyBank => ({ key, subject, load })

const LIMITS = bank('limits', 'Limits', async () => (await import('@/data/competitive-questions/limits-bank')).getLimitQuestions(ALL))
const DERIVATIVES = bank('derivatives', 'Derivatives', async () => (await import('@/data/competitive-questions/derivatives-bank')).getDerivativeQuestions(ALL))
const INTEGRALS = bank('integrals', 'Integrals', async () => (await import('@/data/competitive-questions/integrals-bank')).getIntegralQuestions(ALL))
const ALGEBRA = bank('algebra', 'Algebra', async () => (await import('@/data/competitive-questions/algebra-bank')).getAlgebraQuestions(ALL))
const SAT_MATH = bank('sat-math', 'SAT Math', async () => (await import('@/data/competitive-questions/sat-math-bank')).getSatMathQuestions(ALL))

/**
 * Question sets. `mixed` is the original five-bank challenge and the fallback
 * for any student whose course has no bank. Every other set is one course's
 * bank(s); five questions are drawn round-robin across its banks.
 */
const DAILY_SETS: Record<string, { label: string; banks: DailyBank[] }> = {
  mixed: { label: 'Mixed practice', banks: [LIMITS, DERIVATIVES, INTEGRALS, ALGEBRA, SAT_MATH] },
  sat: {
    label: 'SAT',
    banks: [
      SAT_MATH,
      bank('sat-rw', 'SAT Reading & Writing', async () => (await import('@/data/competitive-questions/sat-rw-bank')).getSatRwQuestions(ALL)),
    ],
  },
  act: {
    label: 'ACT',
    banks: [
      bank('act-math', 'ACT Math', async () => (await import('@/data/competitive-questions/act-math-bank')).getActMathQuestions(ALL)),
      bank('act-science', 'ACT Science', async () => (await import('@/data/competitive-questions/act-science-bank')).getActScienceQuestions(ALL)),
    ],
  },
  mcat: { label: 'MCAT', banks: [bank('mcat', 'MCAT', async () => (await import('@/data/competitive-questions/mcat-bank')).getMcatQuestions(ALL))] },
  asvab: { label: 'ASVAB', banks: [bank('asvab', 'ASVAB', async () => (await import('@/data/competitive-questions/asvab-bank')).getAsvabQuestions(ALL).filter((q) => !q.figure))] },
  'ap-calculus-ab': { label: 'AP Calculus AB', banks: [bank('ap-calculus', 'AP Calculus AB', async () => (await import('@/data/competitive-questions/ap-calculus-bank')).getApCalculusQuestions(ALL))] },
  'ap-calculus-bc': { label: 'AP Calculus BC', banks: [bank('ap-calculus-bc', 'AP Calculus BC', async () => (await import('@/data/competitive-questions/ap-calculus-bc-bank')).getApCalculusBCQuestions(ALL))] },
  'ap-precalculus': { label: 'AP Precalculus', banks: [bank('ap-precalculus', 'AP Precalculus', async () => (await import('@/data/competitive-questions/precalc-bank')).getApPrecalcQuestions(ALL))] },
  'ap-statistics': { label: 'AP Statistics', banks: [bank('ap-statistics', 'AP Statistics', async () => (await import('@/data/competitive-questions/ap-statistics-bank')).getApStatisticsQuestions(ALL))] },
  'ap-biology': { label: 'AP Biology', banks: [bank('ap-biology', 'AP Biology', async () => (await import('@/data/competitive-questions/ap-biology-bank')).getApBiologyQuestions(ALL))] },
  'ap-chemistry': { label: 'AP Chemistry', banks: [bank('ap-chemistry', 'AP Chemistry', async () => (await import('@/data/competitive-questions/ap-chemistry-bank')).getApChemistryQuestions(ALL))] },
  'ap-physics-1': { label: 'AP Physics 1', banks: [bank('ap-physics1', 'AP Physics 1', async () => (await import('@/data/competitive-questions/ap-physics1-bank')).getApPhysics1Questions(ALL))] },
  'ap-physics-2': { label: 'AP Physics 2', banks: [bank('ap-physics2', 'AP Physics 2', async () => (await import('@/data/competitive-questions/ap-physics2-bank')).getApPhysics2Questions(ALL))] },
  'ap-physics-c-mechanics': { label: 'AP Physics C: Mechanics', banks: [bank('ap-physics-c-mech', 'AP Physics C: Mechanics', async () => (await import('@/data/competitive-questions/ap-physics-c-mech-bank')).getApPhysicsCMechQuestions(ALL))] },
  'ap-physics-c-em': { label: 'AP Physics C: E&M', banks: [bank('ap-physics-c-em', 'AP Physics C: E&M', async () => (await import('@/data/competitive-questions/ap-physics-c-em-bank')).getApPhysicsCEMQuestions(ALL))] },
  'ap-environmental-science': { label: 'AP Environmental Science', banks: [bank('ap-enviro', 'AP Environmental Science', async () => (await import('@/data/competitive-questions/ap-enviro-bank')).getApAPESQuestions(ALL))] },
  'ap-computer-science-a': { label: 'AP Computer Science A', banks: [bank('ap-csa', 'AP Computer Science A', async () => (await import('@/data/competitive-questions/ap-csa-bank')).getApCSAQuestions(ALL))] },
  'ap-computer-science-principles': { label: 'AP CS Principles', banks: [bank('ap-csp', 'AP CS Principles', async () => (await import('@/data/competitive-questions/ap-csp-bank')).getApCSPQuestions(ALL))] },
  'ap-english-language': { label: 'AP English Language', banks: [bank('ap-english-lang', 'AP English Language', async () => (await import('@/data/competitive-questions/ap-english-lang-bank')).getApEngLangQuestions(ALL))] },
  'ap-english-literature': { label: 'AP English Literature', banks: [bank('ap-english-lit', 'AP English Literature', async () => (await import('@/data/competitive-questions/ap-english-lit-bank')).getApEngLitQuestions(ALL))] },
  'ap-us-history': { label: 'AP US History', banks: [bank('ap-us-history', 'AP US History', async () => (await import('@/data/competitive-questions/ap-us-history-bank')).getApUSHistoryQuestions(ALL))] },
  'ap-world-history': { label: 'AP World History', banks: [bank('ap-world-history', 'AP World History', async () => (await import('@/data/competitive-questions/ap-world-history-bank')).getApWorldHistoryQuestions(ALL))] },
  'ap-us-government': { label: 'AP US Government', banks: [bank('ap-us-gov', 'AP US Government', async () => (await import('@/data/competitive-questions/ap-us-gov-bank')).getApUSGovQuestions(ALL))] },
  'ap-human-geography': { label: 'AP Human Geography', banks: [bank('ap-human-geo', 'AP Human Geography', async () => (await import('@/data/competitive-questions/ap-human-geo-bank')).getApHumanGeoQuestions(ALL))] },
  'ap-macroeconomics': { label: 'AP Macroeconomics', banks: [bank('ap-macro', 'AP Macroeconomics', async () => (await import('@/data/competitive-questions/ap-macro-bank')).getApMacroQuestions(ALL))] },
  'ap-microeconomics': { label: 'AP Microeconomics', banks: [bank('ap-micro', 'AP Microeconomics', async () => (await import('@/data/competitive-questions/ap-micro-bank')).getApMicroQuestions(ALL))] },
  'ap-psychology': { label: 'AP Psychology', banks: [bank('ap-psychology', 'AP Psychology', async () => (await import('@/data/competitive-questions/ap-psychology-bank')).getApPsychologyQuestions(ALL))] },
  'ap-african-american-studies': { label: 'AP African American Studies', banks: [bank('ap-aas', 'AP African American Studies', async () => (await import('@/data/competitive-questions/ap-african-american-studies-bank')).getApAASQuestions(ALL))] },
  'algebra-1': { label: 'Algebra 1', banks: [bank('algebra1', 'Algebra 1', async () => (await import('@/data/competitive-questions/algebra1-bank')).getAlgebra1Questions(ALL))] },
  'algebra-2': { label: 'Algebra 2', banks: [bank('algebra2', 'Algebra 2', async () => (await import('@/data/competitive-questions/algebra2-bank')).getAlgebra2Questions(ALL))] },
  geometry: { label: 'Geometry', banks: [bank('geometry', 'Geometry', async () => (await import('@/data/competitive-questions/geometry-bank')).getGeometryQuestions(ALL))] },
  ochem: { label: 'Organic Chemistry', banks: [bank('ochem', 'Organic Chemistry', async () => (await import('@/data/competitive-questions/ochem-bank')).getOChemQuestions(ALL))] },
}

export const DEFAULT_DAILY_SET = 'mixed'

/**
 * Course slug (DB slug, plus the hub/SEO aliases) -> question set. A course
 * missing here has no bank of its own and falls back to the mixed set.
 */
const COURSE_DAILY_SET: Record<string, string> = {
  'sat-prep': 'sat', sat: 'sat', psat: 'sat',
  'act-prep': 'act', act: 'act',
  'mcat-prep': 'mcat', mcat: 'mcat',
  // The retired non-AP Precalculus track studies the AP (on-exam) set.
  precalculus: 'ap-precalculus',
  'organic-chemistry-1': 'ochem', 'organic-chemistry-2': 'ochem',
  'ap-cs-principles': 'ap-computer-science-principles',
}
for (const key of Object.keys(DAILY_SETS)) {
  if (key !== DEFAULT_DAILY_SET && !(key in COURSE_DAILY_SET)) COURSE_DAILY_SET[key] = key
}

/** Every question set's key (for validating a client-supplied set). */
export function isDailySetKey(value: unknown): value is string {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(DAILY_SETS, value)
}

/** The question set for one course slug, or null when it has no bank. */
export function dailySetForCourse(courseSlug: string): string | null {
  return COURSE_DAILY_SET[courseSlug] ?? null
}

/**
 * The student's question set: the first of their ranked courses (best first,
 * see rankStudentCourses) that has a bank, else the mixed set.
 */
export function pickDailySet(rankedCourseSlugs: string[]): string {
  for (const slug of rankedCourseSlugs) {
    const set = dailySetForCourse(slug)
    if (set) return set
  }
  return DEFAULT_DAILY_SET
}

/** Human label for a set ("AP Biology", "Mixed practice"). */
export function dailySetLabel(set: string): string {
  return DAILY_SETS[set]?.label ?? DAILY_SETS[DEFAULT_DAILY_SET].label
}

/** Questions per day, whatever the set. */
export const DAILY_CHALLENGE_SIZE = 5

/** Deterministic Fisher-Yates using the provided PRNG. */
function seededShuffle<T>(items: T[], rand: () => number): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Usable multiple-choice question (some banks hold a few malformed rows). */
function isUsable(q: BankQuestion): boolean {
  return (
    typeof q?.question === 'string' &&
    Array.isArray(q.options) &&
    q.options.length >= 2 &&
    Number.isInteger(q.correctAnswer) &&
    q.correctAnswer >= 0 &&
    q.correctAnswer < q.options.length
  )
}

async function generateDailyQuestions(dayKey: string, set: string): Promise<DailyQuestion[]> {
  const def = DAILY_SETS[set] ?? DAILY_SETS[DEFAULT_DAILY_SET]
  const setKey = DAILY_SETS[set] ? set : DEFAULT_DAILY_SET
  const legacy = setKey === DEFAULT_DAILY_SET

  // Per-bank state: the canonical pool, its own PRNG stream, and the picks used.
  const state = new Map<string, { pool: BankQuestion[]; rand: () => number; used: Set<number> }>()
  for (const b of def.banks) {
    const all = (await b.load()).filter(isUsable)
    if (all.length === 0) continue
    // The getter returns a Math.random-shuffled copy — canonicalize the order
    // so the seeded pick is stable across processes and requests.
    const pool = [...all].sort((a, c) =>
      a.question === c.question
        ? a.options.join(' ').localeCompare(c.options.join(' '))
        : a.question.localeCompare(c.question)
    )
    // Independent PRNG stream per (day, set, bank) so adding/removing a bank
    // never shifts the other banks' picks. The mixed set keeps its original
    // seeds, so its questions are unchanged for students who get it.
    const seed = legacy ? `${dayKey}:${b.key}` : `${dayKey}:${setKey}:${b.key}`
    state.set(b.key, { pool, rand: mulberry32(hashSeed(seed)), used: new Set() })
  }
  const banks = def.banks.filter((b) => state.has(b.key))
  if (banks.length === 0) return []

  const questions: DailyQuestion[] = []
  for (let slot = 0; questions.length < DAILY_CHALLENGE_SIZE && slot < DAILY_CHALLENGE_SIZE * 4; slot++) {
    const b = banks[slot % banks.length]
    const s = state.get(b.key)!
    if (s.used.size >= s.pool.length) continue
    let index = Math.floor(s.rand() * s.pool.length)
    while (s.used.has(index)) index = (index + 1) % s.pool.length
    s.used.add(index)
    const picked = s.pool[index]
    const shuffledOptions = seededShuffle(picked.options, s.rand)
    const n = s.used.size
    questions.push({
      id: legacy ? `${dayKey}-${b.key}` : `${dayKey}-${setKey}-${b.key}-${n}`,
      subject: b.subject,
      question: picked.question,
      options: shuffledOptions,
      correctAnswer: shuffledOptions.indexOf(picked.options[picked.correctAnswer]),
      explanation: picked.explanation,
    })
  }
  return questions
}

// In-memory cache of each day's selection per set (module map keyed by
// day + set). Old days are pruned so a long-lived server process doesn't
// accumulate entries. The promise is cached (not the value) so concurrent first
// requests share one generation; a failed generation is evicted so the next
// request retries.
const dailyCache = new Map<string, Promise<DailyQuestion[]>>()

export function getDailyQuestions(dayKey: string, set: string = DEFAULT_DAILY_SET): Promise<DailyQuestion[]> {
  const setKey = isDailySetKey(set) ? set : DEFAULT_DAILY_SET
  const cacheKey = `${dayKey}|${setKey}`
  let cached = dailyCache.get(cacheKey)
  if (!cached) {
    for (const key of dailyCache.keys()) {
      if (!key.startsWith(`${dayKey}|`)) dailyCache.delete(key)
    }
    cached = generateDailyQuestions(dayKey, setKey).catch((err) => {
      dailyCache.delete(cacheKey)
      throw err
    })
    dailyCache.set(cacheKey, cached)
  }
  return cached
}
