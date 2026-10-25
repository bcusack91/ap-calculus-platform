/**
 * Competitive-mode pacing: how long a question SHOULD take, and how the
 * practice bot paces itself against that.
 *
 * Owner request (2026-10-22): the bot answered an inverse-derivative item on
 * the same 2.5–4.5 s clock as a one-variable linear equation. Every timing in
 * competitive mode now flows from one number per question —
 * `expectedSolveSeconds` — the time a solid student needs for THAT item:
 *
 *     course baseline (real exam pacing) × difficulty factor × length factor
 *
 * The bot's delay is that number times a strength factor; the Accuracy
 * Challenge clock and the async-challenge default are its sum over the match.
 *
 * Pure and client-safe (no Prisma, no bank imports): the match page runs the
 * bot from here, and the match-creation routes call the same functions so
 * what gets stored in gameData and what the client computes never disagree.
 * The server-only resolver that can also scan the question banks lives in
 * competitive-utils (`resolvePaceCourseKey`); this file's `courseKeyForTopic`
 * is the static part both sides share.
 */

import {
  AP_LESSON_BANK_TOPICS,
  COURSE_GROUPING_LESSONS,
  LESSON_TO_COURSE_BANK_KEY,
  PSYCHOLOGY_LESSON_SLUGS,
  STATISTICS_LESSON_SLUGS,
  UNIT_CIRCLE_POSITIONS,
  isMultiSlug,
  parseMultiSlug,
} from '@/lib/competitive-utils'
import { CALC_CATEGORIES } from '@/lib/course-includes'

export type BotStrength = 'easy' | 'medium' | 'hard'
export type ItemDifficulty = 'easy' | 'medium' | 'hard'

// ---------------------------------------------------------------------------
// Course baselines
// ---------------------------------------------------------------------------

export interface CourseBaseline {
  /** Seconds a solid student needs for a MEDIUM-difficulty, average-length item. */
  seconds: number
  label: string
  /** Where the number comes from (exam section pacing, then the competitive adjustment). */
  source: string
}

/**
 * Baselines come from the real exam's MCQ pacing (section minutes ÷ items),
 * then trimmed where competitive items are single-skill versions of the exam
 * item. AP figures are the May 2027 formats verified in
 * ap-phase1-pipeline/AP-2027-FORMATS.md; SAT/ACT/MCAT are the published
 * section timings. Tune HERE — nothing else carries a number.
 */
export const COURSE_BASELINES = {
  'ap-calculus-ab': {
    seconds: 110,
    label: 'AP Calculus AB',
    source: 'Section I Part A (no calculator): 29 MCQ in 62 min = 128 s. Competitive items are single-step, so 110 s.',
  },
  'ap-calculus-bc': {
    seconds: 110,
    label: 'AP Calculus BC',
    source: 'Same Section I structure as AB: 29 MCQ in 62 min = 128 s; 110 s for single-step competitive items.',
  },
  'ap-physics1': { seconds: 120, label: 'AP Physics 1', source: 'Section I: 42 MCQ in 85 min = 121 s.' },
  'ap-physics2': { seconds: 120, label: 'AP Physics 2', source: 'Section I: 42 MCQ in 85 min = 121 s.' },
  'ap-physics-c-mech': { seconds: 120, label: 'AP Physics C: Mechanics', source: 'Section I: 42 MCQ in 85 min = 121 s.' },
  'ap-physics-c-em': { seconds: 120, label: 'AP Physics C: E&M', source: 'Section I: 42 MCQ in 85 min = 121 s.' },
  'ap-chemistry': { seconds: 90, label: 'AP Chemistry', source: 'Section I: 60 MCQ in 90 min = 90 s.' },
  'ap-biology': { seconds: 90, label: 'AP Biology', source: 'Section I: 60 MCQ in 90 min = 90 s.' },
  'ap-statistics': {
    seconds: 90,
    label: 'AP Statistics',
    source: 'Section I: 42 MCQ in 90 min = 129 s on the exam; competitive items drop the long scenario, so 90 s.',
  },
  'ap-precalculus': {
    // Items are short today (median solve ~20 s in the 2026-10-22 audit); revisit
    // 90 s after the depth rebuild lands exam-style multi-step items. Owner may overrule.
    seconds: 60,
    label: 'AP Precalculus',
    source: 'Section I Part A (no calculator): 29 MCQ in 65 min = 134 s; competitive items are one skill each and short, so 60 s (revisit 90 s after the depth rebuild).',
  },
  'ap-macro': { seconds: 70, label: 'AP Macroeconomics', source: 'Section I: 60 MCQ in 70 min = 70 s.' },
  'ap-micro': { seconds: 70, label: 'AP Microeconomics', source: 'Section I: 60 MCQ in 70 min = 70 s.' },
  'ap-psychology': { seconds: 60, label: 'AP Psychology', source: 'Section I: 75 MCQ in 90 min = 72 s; recall items, so 60 s.' },
  'ap-us-history': { seconds: 60, label: 'AP US History', source: 'Section I Part A: 55 MCQ in 55 min = 60 s.' },
  'ap-world-history': { seconds: 60, label: 'AP World History', source: 'Section I Part A: 55 MCQ in 55 min = 60 s.' },
  'ap-us-gov': {
    seconds: 60,
    label: 'AP US Government',
    source: 'Section I: 55 MCQ in 80 min = 87 s on the exam (stimulus sets); competitive items are stand-alone, so 60 s.',
  },
  'ap-human-geo': { seconds: 60, label: 'AP Human Geography', source: 'Section I: 60 MCQ in 60 min = 60 s.' },
  'ap-african-american-studies': { seconds: 60, label: 'AP African American Studies', source: 'Section I: 60 MCQ in 70 min = 70 s; stand-alone competitive items, so 60 s.' },
  'ap-english-lang': { seconds: 75, label: 'AP English Language', source: 'Section I: 45 MCQ in 60 min = 80 s (passage sets); 75 s.' },
  'ap-english-lit': { seconds: 75, label: 'AP English Literature', source: 'Section I: 55 MCQ in 60 min = 65 s; competitive items carry their own excerpt, so 75 s.' },
  'ap-enviro': { seconds: 70, label: 'AP Environmental Science', source: 'Section I: 80 MCQ in 90 min = 68 s.' },
  'ap-csa': {
    seconds: 90,
    label: 'AP Computer Science A',
    source: 'Section I: 42 MCQ in 90 min = 129 s on the exam (code tracing); competitive items are short snippets, so 90 s.',
  },
  'ap-csp': { seconds: 90, label: 'AP Computer Science Principles', source: 'Section I: 70 MCQ in 120 min = 103 s; 90 s.' },
  'sat-math': { seconds: 95, label: 'SAT Math', source: 'Digital SAT Math: 44 questions in 70 min = 95 s.' },
  'sat-rw': { seconds: 70, label: 'SAT Reading and Writing', source: 'Digital SAT R&W: 54 questions in 64 min = 71 s.' },
  'sat': { seconds: 82, label: 'SAT (both sections)', source: 'Whole digital SAT: 98 questions in 134 min = 82 s.' },
  'act-math': { seconds: 60, label: 'ACT Math', source: 'ACT Math: 60 questions in 60 min = 60 s (enhanced ACT: 45 in 50 min = 67 s).' },
  'act-science': { seconds: 55, label: 'ACT Science', source: 'ACT Science: 40 questions in 35 min = 53 s (enhanced: 40 in 40 min).' },
  'act-english': { seconds: 35, label: 'ACT English', source: 'ACT English: 75 questions in 45 min = 36 s.' },
  'act-reading': { seconds: 50, label: 'ACT Reading', source: 'ACT Reading: 40 questions in 35 min = 53 s.' },
  'act': { seconds: 50, label: 'ACT (mixed)', source: 'Blend of the four ACT sections: 215 questions in 175 min = 49 s.' },
  'mcat': { seconds: 95, label: 'MCAT', source: 'C/P, B/B, P/S: 59 questions in 95 min = 97 s; CARS: 53 in 90 min = 102 s.' },
  'asvab': { seconds: 45, label: 'ASVAB', source: 'CAT-ASVAB per-item time on the timed AFQT/technical subtests runs roughly 36-60 s (AR/MK/GS); 45 s blended baseline (asvab-pipeline PLAN.md; verify against ASVAB-FACTS.md).' },
  'algebra-2': { seconds: 60, label: 'Algebra 2', source: 'Non-AP Algebra 2 drill pacing (owner baseline).' },
  'geometry': { seconds: 50, label: 'Geometry', source: 'Geometry drill pacing (owner baseline).' },
  'algebra-1': { seconds: 40, label: 'Algebra 1', source: 'Algebra 1 drill pacing (owner baseline): a one-variable linear equation is a 30-45 s item.' },
  'pre-algebra': { seconds: 30, label: 'Pre-algebra / Grade 6-8', source: 'Middle-school arithmetic drill pacing (owner baseline).' },
  'unit-circle': { seconds: 5, label: 'Unit circle (click game)', source: 'Click-the-position recall; a fluent student clicks in ~5 s.' },
  'unknown': { seconds: 60, label: 'Unknown course', source: 'Fallback when a topic slug resolves to no course.' },
} as const satisfies Record<string, CourseBaseline>

export type PaceCourseKey = keyof typeof COURSE_BASELINES

export function isPaceCourseKey(key: unknown): key is PaceCourseKey {
  return typeof key === 'string' && key in COURSE_BASELINES
}

export function courseBaselineSeconds(course: PaceCourseKey | string | null | undefined): number {
  return (isPaceCourseKey(course) ? COURSE_BASELINES[course] : COURSE_BASELINES.unknown).seconds
}

// ---------------------------------------------------------------------------
// Course resolution (static part — shared by client and server)
// ---------------------------------------------------------------------------

const UNIT_CIRCLE_SLUGS = new Set(['unit-circle', 'the-unit-circle'])

/** Slugs the competitive routes use directly as a bank / course key. */
const DIRECT_COURSE_KEYS: Record<string, PaceCourseKey> = {
  'ap-calculus-ab': 'ap-calculus-ab',
  'ap-calculus-bc': 'ap-calculus-bc',
  'ap-chemistry': 'ap-chemistry',
  'ap-biology': 'ap-biology',
  'ap-physics1': 'ap-physics1',
  'ap-physics-1': 'ap-physics1',
  'ap-physics2': 'ap-physics2',
  'ap-physics-2': 'ap-physics2',
  'ap-physics-c-mech': 'ap-physics-c-mech',
  'ap-physics-c-mechanics': 'ap-physics-c-mech',
  'ap-physics-c-em': 'ap-physics-c-em',
  'ap-statistics': 'ap-statistics',
  'ap-psychology': 'ap-psychology',
  'ap-precalculus': 'ap-precalculus',
  // Retired non-AP Precalculus keys (old match rows) pace as the AP course.
  'precalc': 'ap-precalculus',
  'precalculus': 'ap-precalculus',
  'algebra-1': 'algebra-1',
  'algebra1': 'algebra-1',
  'algebra': 'algebra-1',
  'algebra2': 'algebra-2',
  'algebra-2': 'algebra-2',
  'geometry': 'geometry',
  'ap-macro': 'ap-macro',
  'ap-micro': 'ap-micro',
  'ap-us-history': 'ap-us-history',
  'ap-world-history': 'ap-world-history',
  'ap-us-gov': 'ap-us-gov',
  'ap-human-geo': 'ap-human-geo',
  'ap-african-american-studies': 'ap-african-american-studies',
  'ap-english-lang': 'ap-english-lang',
  'ap-english-lit': 'ap-english-lit',
  'ap-enviro': 'ap-enviro',
  'ap-csa': 'ap-csa',
  'ap-csp': 'ap-csp',
  'sat': 'sat',
  'sat-math': 'sat-math',
  'sat-rw': 'sat-rw',
  'sat-reading': 'sat-rw',
  'sat-punctuation': 'sat-rw',
  'sat-punctuation-commas-semicolons': 'sat-rw',
  'act-math': 'act-math',
  'act-science': 'act-science',
  'act-english': 'act-english',
  'act-reading': 'act-reading',
  'mcat': 'mcat',
  'ochem': 'mcat',
  'asvab': 'asvab',
  // Legacy calculus category ids (the derivatives/limits/integrals banks).
  'derivatives': 'ap-calculus-ab',
  'limits': 'ap-calculus-ab',
  'integrals': 'ap-calculus-ab',
  'parametric-equations': 'ap-calculus-bc',
  'vectors': 'ap-calculus-bc',
  'negative-numbers-grade6': 'pre-algebra',
  'reflection-refraction': 'ap-physics2',
}

/** Bank keys used by the competitive routing tables → pacing key. */
const BANK_KEY_TO_COURSE: Record<string, PaceCourseKey> = {
  ...DIRECT_COURSE_KEYS,
}

/** Reverse map of AP_LESSON_BANK_TOPICS: a bank topic slug → its course. */
let _bankTopicCourse: Map<string, PaceCourseKey> | null = null
function bankTopicCourse(): Map<string, PaceCourseKey> {
  if (_bankTopicCourse) return _bankTopicCourse
  const map = new Map<string, PaceCourseKey>()
  for (const entry of Object.values(AP_LESSON_BANK_TOPICS)) {
    const course = BANK_KEY_TO_COURSE[entry.course]
    if (!course) continue
    for (const t of entry.topics) if (!map.has(t)) map.set(t, course)
  }
  for (const cat of CALC_CATEGORIES) {
    if (!isPaceCourseKey(cat.course)) continue
    for (const t of cat.topics) if (!map.has(t)) map.set(t, cat.course)
  }
  for (const s of PSYCHOLOGY_LESSON_SLUGS) map.set(s, 'ap-psychology')
  for (const s of STATISTICS_LESSON_SLUGS) map.set(s, 'ap-statistics')
  _bankTopicCourse = map
  return map
}

/** Slug prefixes/suffixes the curriculum uses per course (checked after the tables). */
const SLUG_PATTERNS: Array<[RegExp, PaceCourseKey]> = [
  [/-calcab$|^calcab-/, 'ap-calculus-ab'],
  [/-calcbc$|^calcbc-/, 'ap-calculus-bc'],
  [/-algebra1$|-alg1$/, 'algebra-1'],
  [/-precalc$/, 'ap-precalculus'],
  [/^physics-c-/, 'ap-physics-c-mech'],
  [/^ap-bio-/, 'ap-biology'],
  [/^apush-/, 'ap-us-history'],
  [/^gov-/, 'ap-us-gov'],
  [/^wh-/, 'ap-world-history'],
  [/^hg-/, 'ap-human-geo'],
  [/^enviro-|^apes-/, 'ap-enviro'],
  [/^englang-/, 'ap-english-lang'],
  [/^englit-/, 'ap-english-lit'],
  [/^micro-/, 'ap-micro'],
  [/^macro-/, 'ap-macro'],
  [/^aas-/, 'ap-african-american-studies'],
  [/^csp-/, 'ap-csp'],
  [/^csa-/, 'ap-csa'],
  [/-geometry$|-geo$/, 'geometry'],
  [/^sat-math/, 'sat-math'],
  [/^sat-rw|^sat-reading|^sat-punctuation|^sat-writing/, 'sat-rw'],
  [/^sat-/, 'sat'],
  [/^act-math/, 'act-math'],
  [/^act-science/, 'act-science'],
  [/^act-english/, 'act-english'],
  [/^act-reading/, 'act-reading'],
  [/^act-|-act$/, 'act'],
  [/^mcat-|-mcat$/, 'mcat'],
  [/^asvab(-|$)/, 'asvab'],
  [/grade-?[678]|^pre-?algebra/, 'pre-algebra'],
]

/** Composite `multi:` slugs: the slowest of the parts' courses. */
export function slowestCourse(keys: PaceCourseKey[]): PaceCourseKey {
  const known = keys.filter((k) => k !== 'unknown')
  if (known.length === 0) return 'unknown'
  return known.reduce((best, k) => (courseBaselineSeconds(k) > courseBaselineSeconds(best) ? k : best))
}

/**
 * Exact-slug resolution from the routing tables the competitive routes use:
 * the direct bank keys, AP_LESSON_BANK_TOPICS (and its bank topics),
 * COURSE_GROUPING_LESSONS, LESSON_TO_COURSE_BANK_KEY, the calculus layout and
 * the psychology/statistics lesson lists. 'unknown' when the slug is in none.
 */
export function courseKeyFromTables(slug: string): PaceCourseKey {
  const direct = DIRECT_COURSE_KEYS[slug]
  if (direct) return direct

  const apLesson = AP_LESSON_BANK_TOPICS[slug]
  if (apLesson) {
    const c = BANK_KEY_TO_COURSE[apLesson.course]
    if (c) return c
  }

  const grouping = COURSE_GROUPING_LESSONS[slug]
  if (grouping) return grouping

  const bankKey = LESSON_TO_COURSE_BANK_KEY[slug]
  if (bankKey && BANK_KEY_TO_COURSE[bankKey]) return BANK_KEY_TO_COURSE[bankKey]

  return bankTopicCourse().get(slug) ?? 'unknown'
}

/** Naming-convention fallback (slug prefixes/suffixes); 'unknown' when none fits. */
export function courseKeyFromPatterns(slug: string): PaceCourseKey {
  for (const [re, course] of SLUG_PATTERNS) if (re.test(slug)) return course
  return 'unknown'
}

/**
 * The pacing course for a match topic slug, from the static routing tables
 * and slug conventions only (no bank scan — this runs on the client too).
 * Composite `multi:` slugs resolve to the slowest of their parts — a mixed
 * match is paced for the course that needs the most time, so the bot is never
 * unfairly quick on the heavy items.
 *
 * Returns 'unknown' when nothing matches; the server resolver
 * (competitive-utils `resolvePaceCourseKey`) also scans the question banks and
 * stores its answer in gameData, so a live match never has to guess.
 */
export function courseKeyForTopic(topicSlug: string | null | undefined): PaceCourseKey {
  if (!topicSlug) return 'unit-circle'
  const slug = topicSlug.trim()
  if (!slug || UNIT_CIRCLE_SLUGS.has(slug)) return 'unit-circle'

  if (isMultiSlug(slug)) return slowestCourse(parseMultiSlug(slug).map(courseKeyForTopic))

  const fromTables = courseKeyFromTables(slug)
  if (fromTables !== 'unknown') return fromTables
  return courseKeyFromPatterns(slug)
}

export function isUnitCircleSlug(topicSlug: string | null | undefined): boolean {
  return !topicSlug || UNIT_CIRCLE_SLUGS.has(topicSlug.trim())
}

// ---------------------------------------------------------------------------
// Expected solve time per question
// ---------------------------------------------------------------------------

/** Minimal shape of a stored match question that the pacing reads. */
export interface PaceableQuestion {
  type?: string
  question?: string
  prompt?: string
  options?: string[]
  difficulty?: unknown
  /** Stamped at match creation; when present it wins over a recomputation. */
  expectedSeconds?: unknown
}

export const DIFFICULTY_FACTOR: Record<ItemDifficulty, number> = { easy: 0.6, medium: 1.0, hard: 1.5 }

/** Stem length (characters) that counts as "average"; longer stems add time. */
export const AVERAGE_STEM_CHARS = 120
/** Hard ceiling on how much a long/figure-heavy item can stretch the baseline. */
export const MAX_LENGTH_FACTOR = 1.6

export function itemDifficulty(q: PaceableQuestion): ItemDifficulty {
  return q.difficulty === 'easy' || q.difficulty === 'hard' ? q.difficulty : 'medium'
}

function isUnitCircleQuestion(q: PaceableQuestion): boolean {
  return q.type === 'find-angle' || q.type === 'find-coordinate'
}

const TABLE_OR_FIGURE = /\|\s*:?-{2,}|<svg|<table|<img|!\[/i

/**
 * How much longer than an average item this one takes to READ: stem length
 * past ~120 characters, a table or figure, several math spans, long options.
 * Multiplicative, capped at 1.6× so a wall of text never dwarfs the course
 * and difficulty terms.
 */
export function lengthFactor(q: PaceableQuestion): number {
  const stem = typeof q.question === 'string' ? q.question : typeof q.prompt === 'string' ? q.prompt : ''
  let factor = 1
  const over = stem.length - AVERAGE_STEM_CHARS
  if (over > 0) factor += 0.1 * (over / 100)
  if (TABLE_OR_FIGURE.test(stem)) factor += 0.25
  const mathSpans = Math.floor((stem.match(/\$/g)?.length ?? 0) / 2)
  if (mathSpans >= 6) factor += 0.2
  else if (mathSpans >= 3) factor += 0.1
  const options = Array.isArray(q.options) ? q.options.filter((o) => typeof o === 'string') : []
  if (options.length > 0) {
    const avg = options.reduce((s, o) => s + o.length, 0) / options.length
    if (avg > 80) factor += 0.2
    else if (avg > 40) factor += 0.1
  }
  return Math.min(MAX_LENGTH_FACTOR, Math.round(factor * 100) / 100)
}

/**
 * Seconds a solid student needs for this question in this course. Unit-circle
 * click items are always the 5 s recall baseline regardless of course.
 */
export function expectedSolveSeconds(q: PaceableQuestion, course: PaceCourseKey | string | null | undefined): number {
  if (isUnitCircleQuestion(q)) return COURSE_BASELINES['unit-circle'].seconds
  const base = courseBaselineSeconds(course)
  const seconds = base * DIFFICULTY_FACTOR[itemDifficulty(q)] * lengthFactor(q)
  return Math.round(seconds * 10) / 10
}

/** The stored `expectedSeconds` when valid, else a fresh computation. */
export function questionExpectedSeconds(q: PaceableQuestion, course: PaceCourseKey | string | null | undefined): number {
  const stored = q.expectedSeconds
  if (typeof stored === 'number' && Number.isFinite(stored) && stored > 0) return stored
  return expectedSolveSeconds(q, course)
}

/** Stamp every question with its expected seconds (done once, at match creation). */
export function annotateExpectedSeconds<T extends PaceableQuestion>(questions: T[], course: PaceCourseKey | string): T[] {
  return questions.map((q) => ({ ...q, expectedSeconds: expectedSolveSeconds(q, course) }))
}

// ---------------------------------------------------------------------------
// Bot behaviour
// ---------------------------------------------------------------------------

/** Multiplier on the expected solve time by bot strength (low, high). */
export const STRENGTH_FACTOR: Record<BotStrength, { lo: number; hi: number }> = {
  easy: { lo: 1.15, hi: 1.6 },
  medium: { lo: 0.75, hi: 1.05 },
  hard: { lo: 0.5, hi: 0.7 },
}
/** An easy bot occasionally stalls: this often, for this much extra of the expected time. */
export const EASY_BOT_PAUSE = { chance: 0.12, extraFactor: 0.5 }
export const MIN_BOT_DELAY_SECONDS = 3
export const MAX_BOT_DELAY_MULTIPLE = 3

export const BASE_ACCURACY: Record<BotStrength, number> = { easy: 0.7, medium: 0.83, hard: 0.95 }
export const ACCURACY_BOUNDS = { min: 0.4, max: 0.98 }

/** How the item's difficulty shifts the bot's accuracy. */
export function accuracyShift(item: ItemDifficulty, strength: BotStrength): number {
  if (item === 'easy') return 0.07
  if (item === 'hard') return strength === 'hard' ? -0.06 : -0.12
  return 0
}

export function botAccuracy(q: PaceableQuestion, strength: BotStrength): number {
  const raw = BASE_ACCURACY[strength] + accuracyShift(itemDifficulty(q), strength)
  return Math.min(ACCURACY_BOUNDS.max, Math.max(ACCURACY_BOUNDS.min, Math.round(raw * 1000) / 1000))
}

export type Rng = () => number

function normalizeStrength(s: unknown): BotStrength {
  return s === 'easy' || s === 'hard' ? s : 'medium'
}

/**
 * Draw the strength factor from a right-skewed distribution: most answers land
 * near the quick end of the band, with a tail toward the slow end, and the
 * easy bot sometimes adds a long pause. Bounded in [lo, hi(+pause)].
 */
export function drawStrengthFactor(strength: BotStrength, rng: Rng): number {
  const { lo, hi } = STRENGTH_FACTOR[strength]
  const u = Math.min(1, Math.max(0, rng()))
  let factor = lo + (hi - lo) * Math.pow(u, 1.5)
  if (strength === 'easy' && rng() < EASY_BOT_PAUSE.chance) factor += EASY_BOT_PAUSE.extraFactor
  return factor
}

export interface BotAnswerPlan {
  /** Milliseconds after the question appears that the bot submits. */
  delayMs: number
  correct: boolean
  /** The expected student solve time the delay was derived from. */
  expectedSeconds: number
  /** The accuracy the correct/incorrect draw used. */
  accuracy: number
}

/**
 * When the bot answers, and whether it gets it right. The delay is the
 * expected solve time × a strength factor (easy bots are slower than a strong
 * student, hard bots faster), never under 3 s and never over 3× expected.
 */
export function botAnswerPlan(
  q: PaceableQuestion,
  course: PaceCourseKey | string | null | undefined,
  aiDifficulty: unknown,
  rng: Rng = Math.random,
): BotAnswerPlan {
  const strength = normalizeStrength(aiDifficulty)
  const expectedSeconds = questionExpectedSeconds(q, course)
  const raw = expectedSeconds * drawStrengthFactor(strength, rng)
  const seconds = Math.max(MIN_BOT_DELAY_SECONDS, Math.min(MAX_BOT_DELAY_MULTIPLE * expectedSeconds, raw))
  const accuracy = botAccuracy(q, strength)
  const correct = rng() < accuracy
  return { delayMs: Math.round(seconds * 1000), correct, expectedSeconds, accuracy }
}

/** Index the bot submits: the key when correct, otherwise a different option. */
export function botAnswerIndex(q: PaceableQuestion & { answerIndex?: unknown }, correct: boolean, rng: Rng = Math.random): number {
  const key = typeof q.answerIndex === 'number' ? q.answerIndex : 0
  if (correct) return key
  const total = Array.isArray(q.options) && q.options.length > 0 ? q.options.length : UNIT_CIRCLE_POSITIONS.length
  if (total <= 1) return key
  let idx = key
  while (idx === key) idx = Math.floor(rng() * total)
  return idx
}

// ---- The match page's bot decision, extracted so it can be tested ---------

interface FreezeEffectLike { type: string; startedAt: number; durationMs: number }
interface PlayerPowerUpsLike { effects?: FreezeEffectLike[] }

/** The slice of the live match state the bot decision reads. */
export interface BotMatchView {
  status: string
  player1Id: string
  player2Id: string
  player1IsAI?: boolean
  player2IsAI?: boolean
  player1QuestionIndex: number
  player2QuestionIndex: number
  questions: Array<PaceableQuestion & { answerIndex?: unknown }>
  topicSlug?: string | null
  gameData?: {
    aiDifficulty?: unknown
    paceCourseKey?: unknown
    powerUps?: { player1?: PlayerPowerUpsLike; player2?: PlayerPowerUpsLike } | unknown
    [key: string]: unknown
  }
}

export interface BotMove {
  delayMs: number
  answerIndex: number
  questionIndex: number
  playerId: string
  correct: boolean
  /** How much of the delay is the bot waiting out a Freeze power-up. */
  freezeWaitMs: number
}

/** Remaining Freeze on the bot's slot, so the player's Freeze actually lands. */
export function freezeRemainingMs(powerUps: PlayerPowerUpsLike | undefined, nowMs: number): number {
  return Math.max(
    0,
    ...((powerUps?.effects || [])
      .filter((e) => e.type === 'freeze')
      .map((e) => e.startedAt + e.durationMs - nowMs)),
  )
}

/** The pacing course for a live match: stored at creation, else resolved from the slug. */
export function matchPaceCourseKey(view: { topicSlug?: string | null; gameData?: { paceCourseKey?: unknown } }): PaceCourseKey {
  const stored = view.gameData?.paceCourseKey
  if (isPaceCourseKey(stored)) return stored
  return courseKeyForTopic(view.topicSlug)
}

/**
 * Decide the bot's next move for the viewer's opponent, or null when there is
 * no bot opponent, the match is over, or the bot is out of questions. The
 * page schedules `fetch(answer)` after `delayMs`; nothing else is decided there.
 */
export function planBotMove(view: BotMatchView, currentUserId: string, nowMs: number = Date.now(), rng: Rng = Math.random): BotMove | null {
  if (view.status !== 'IN_PROGRESS') return null
  const isPlayer1 = currentUserId === view.player1Id
  const opponentIsAI = isPlayer1 ? view.player2IsAI : view.player1IsAI
  if (!opponentIsAI) return null

  const questionIndex = isPlayer1 ? view.player2QuestionIndex : view.player1QuestionIndex
  if (questionIndex >= view.questions.length) return null
  const q = view.questions[questionIndex]
  if (!q) return null

  const plan = botAnswerPlan(q, matchPaceCourseKey(view), view.gameData?.aiDifficulty, rng)
  const pu = view.gameData?.powerUps as { player1?: PlayerPowerUpsLike; player2?: PlayerPowerUpsLike } | undefined
  const freezeWaitMs = freezeRemainingMs(isPlayer1 ? pu?.player2 : pu?.player1, nowMs)

  return {
    delayMs: plan.delayMs + freezeWaitMs,
    answerIndex: botAnswerIndex(q, plan.correct, rng),
    questionIndex,
    playerId: isPlayer1 ? view.player2Id : view.player1Id,
    correct: plan.correct,
    freezeWaitMs,
  }
}

// ---------------------------------------------------------------------------
// Match clocks
// ---------------------------------------------------------------------------

/** The Accuracy Challenge clock before pacing existed; matches created earlier keep it. */
export const LEGACY_ACCURACY_LIMIT_SECONDS = 5 * 60
export const ACCURACY_LIMIT_BOUNDS = { min: 5 * 60, max: 45 * 60 }
export const ASYNC_LIMIT_BOUNDS = { min: 60, max: 45 * 60 }
/**
 * Headroom over the sum of expected seconds. 1.0 would let a SOLID student
 * finish with nothing to spare; 1.15 gives an average student a real shot at
 * every question (owner, 2026-10-22). One constant for both clocks.
 */
export const CLOCK_HEADROOM = 1.15

function sumExpectedSeconds(questions: PaceableQuestion[], course: PaceCourseKey | string): number {
  return questions.reduce((s, q) => s + questionExpectedSeconds(q, course), 0)
}

function roundUpToMinute(seconds: number): number {
  return Math.ceil(seconds / 60) * 60
}

/**
 * Accuracy Challenge clock: the sum of expected seconds × CLOCK_HEADROOM,
 * rounded up to the minute, between 5 and 45 minutes.
 */
export function accuracyChallengeLimitSeconds(questions: PaceableQuestion[], course: PaceCourseKey | string): number {
  const total = roundUpToMinute(sumExpectedSeconds(questions, course) * CLOCK_HEADROOM)
  return Math.min(ACCURACY_LIMIT_BOUNDS.max, Math.max(ACCURACY_LIMIT_BOUNDS.min, total))
}

/** Async-challenge default clock: same shape, clamped to the route's [60 s, 45 min]. */
export function asyncChallengeDefaultLimit(questions: PaceableQuestion[], course: PaceCourseKey | string): number {
  const total = roundUpToMinute(sumExpectedSeconds(questions, course) * CLOCK_HEADROOM)
  return Math.min(ASYNC_LIMIT_BOUNDS.max, Math.max(ASYNC_LIMIT_BOUNDS.min, total))
}

/** Clamp a caller-supplied async time limit to the route's bounds. */
export function clampAsyncLimit(seconds: number): number {
  return Math.min(ASYNC_LIMIT_BOUNDS.max, Math.max(ASYNC_LIMIT_BOUNDS.min, Math.round(seconds)))
}

/**
 * The Accuracy Challenge clock for a stored match: `gameData.timeLimitSeconds`
 * when the match was created with pacing, else the legacy 5 minutes. Client
 * timer and server deadline both read this, so they can never disagree.
 */
export function matchTimeLimitSeconds(gameData: object | null | undefined): number {
  const v = (gameData as { timeLimitSeconds?: unknown } | null | undefined)?.timeLimitSeconds
  if (typeof v === 'number' && Number.isFinite(v) && v > 0) return Math.round(v)
  return LEGACY_ACCURACY_LIMIT_SECONDS
}

export function formatMinutes(seconds: number): string {
  const m = seconds / 60
  return Number.isInteger(m) ? `${m} min` : `${Math.round(m * 10) / 10} min`
}

// ---------------------------------------------------------------------------
// Student-facing copy
// ---------------------------------------------------------------------------

/**
 * What picking a bot strength means, in terms of the problems rather than
 * seconds (the seconds depend on the topic now).
 */
export const BOT_STRENGTH_COPY: Record<BotStrength, { label: string; desc: string }> = {
  easy: { label: 'Easy', desc: 'Works a bit slower than a strong student and gets about 70% right.' },
  medium: { label: 'Medium', desc: 'Keeps pace with a strong student and gets about 80% right.' },
  hard: { label: 'Hard', desc: 'Faster than a strong student and gets about 95% right.' },
}
