/**
 * Candidate pools for the custom question bank (/mcat/qbank, /sat/qbank,
 * /act/qbank).
 *
 * MCAT: every exit-quiz bank item of every MCAT topic (lesson-built pools carry
 * difficulty and yield; LOW items are served only to students who turned on
 * low-yield content, as in the exit quiz and unit test), plus the authored
 * passage sets that section practice draws from (src/data/mcat/passages).
 *
 * SAT: the topic pools SAT practice tests and diagnostics draw from (with the
 * 700-800 tier blended in the same way, and the same seed, so an item has the
 * same question key here as on a practice form), the passage bank, and a
 * fixed set of grid-ins.
 *
 * ACT: the lesson-built exit pools of the ACT topics (`act-*-act`), filed
 * under English / Math / Reading / Science by topic; low-yield items follow the
 * student's setting as on MCAT. Full-length form items are never in it: the
 * full-lengths stay unseen practice tests (they are not imported here).
 *
 * A passage is one UNIT: it is selected, filtered and served whole, its
 * questions in authored order, never split. A discrete question is a unit of
 * one. Items are deduplicated by questionKey; when several topic slugs share
 * a pool (aliases, subtopics), the topic with the smallest pool claims an item
 * first, so each question is filed under its most specific topic.
 *
 * Built once per server instance (memoized); everything below the build is
 * pure, so the builder API and tests share it.
 */
import { questionKey } from '@/lib/question-key'
import { generateExitQuiz, listExitQuizSlugs, type ExitQuizQuestion } from '@/data/exit-quizzes'
import { SAT_FORM_V2_EXCLUDED } from '@/data/sat-practice/form-v2-exclusions'
import { LESSON_BUILT_EXIT_TOPICS, type LessonExitItem } from '@/data/exit-quizzes/lesson-built'
import { CARS_PASSAGES, SECTION_PASSAGES } from '@/data/mcat/passages'
import type { MCATPassage } from '@/data/mcat/types'
import { toTestPassage, topicSlugForPassage } from '@/data/mcat-practice/test-generator'
import { SAT_PASSAGES, type ReadingPassage } from '@/data/sat-passages'
import { generateGridInProblems } from '@/data/sat-grid-in'
import { SAT_DOMAIN_LABELS, type MathDomain, type RWDomain } from '@/data/sat-practice/test-generator'
import { canonicalizeSlug } from '@/data/sat-practice/diagnostic-generator'
import { shuffleOptions } from '@/lib/shuffle-options'
import { actMixedItemSection, actTopicSection } from '@/lib/act-topic-sections'
import type {
  GridInKey,
  QbankCourse,
  QbankDifficulty,
  QbankFilters,
  QbankItem,
  QbankPassage,
  QbankPoolKind,
} from '@/lib/qbank-types'

export interface QbankCandidate {
  questionKey: string
  section: string
  discipline: string
  topicSlug: string
  /** null = the bank doesn't tag it (passage sets); filters treat it as medium. */
  difficulty: QbankDifficulty | null
  /** Low-yield (served only when the student opted in). */
  lowYield: boolean
  passageId: string | null
  question: string
  /** Authored order. Empty for a grid-in. */
  options: string[]
  /** Authored key; -1 for a grid-in. */
  correctIndex: number
  explanation: string
  passage: QbankPassage | null
  gridIn?: GridInKey
}

export interface QbankUnit {
  /** questionKey for a discrete; `psg:<passageId>` for a passage set. */
  id: string
  passageId: string | null
  section: string
  discipline: string
  topicSlug: string
  items: QbankCandidate[]
}

export interface QbankPool {
  course: QbankCourse
  units: QbankUnit[]
}

/* ------------------------------------------------------------------ */
/*  MCAT                                                               */
/* ------------------------------------------------------------------ */

/** Seed for drawing whole pools in a fixed order (any value; kept stable). */
const MCAT_POOL_SEED = 20261012
const MCAT_DRAW = 5000

/** Section + discipline of an MCAT curriculum topic; null = not exam content (strategy/logistics). */
export function mcatTopicInfo(slug: string): { section: string; discipline: string } | null {
  if (/test-day-strategy|science-passage-strategy|quantitative-skills/.test(slug)) return null
  if (slug.startsWith('mcat-cars')) return { section: 'cars', discipline: 'CARS' }
  if (/general-chemistry/.test(slug)) return { section: 'chem-phys', discipline: 'General Chemistry' }
  if (/organic-chemistry|lab-methods/.test(slug)) return { section: 'chem-phys', discipline: 'Organic Chemistry' }
  if (/physics/.test(slug)) return { section: 'chem-phys', discipline: 'Physics' }
  if (/biochemistry/.test(slug)) return { section: 'bio-biochem', discipline: 'Biochemistry' }
  if (/cell-biology|molecular-biology|microbiology|genetics|organ-systems|anatomy-physiology/.test(slug)) {
    return { section: 'bio-biochem', discipline: 'Biology' }
  }
  if (/sociology/.test(slug)) return { section: 'psych-soc', discipline: 'Sociology' }
  if (/psychology|biological-basis-behavior/.test(slug)) return { section: 'psych-soc', discipline: 'Psychology' }
  if (/biostatistics|research-methods/.test(slug)) return { section: 'psych-soc', discipline: 'Research Methods and Statistics' }
  return null
}

function mcatPassageDiscipline(p: MCATPassage): string {
  const d = p.discipline.toLowerCase()
  if (p.section === 'cars') return 'CARS'
  if (d === 'general chemistry' || d === 'thermodynamics') return 'General Chemistry'
  if (d === 'organic chemistry') return 'Organic Chemistry'
  if (d === 'physics') return 'Physics'
  if (d === 'biochemistry' || d === 'metabolism') return 'Biochemistry'
  if (p.section === 'bio-biochem') return 'Biology'
  if (p.section === 'psych-soc') {
    if (d.includes('sociology')) return 'Sociology'
    if (d.includes('research')) return 'Research Methods and Statistics'
    return 'Psychology'
  }
  return 'General Chemistry'
}

const asDifficulty = (v: unknown): QbankDifficulty | null => (v === 'easy' || v === 'medium' || v === 'hard' ? v : null)

/** A bank item's key index (MCAT banks use correctAnswer, the generator correctIndex). */
function keyIndexOf(q: ExitQuizQuestion): number {
  const raw = q as unknown as { correctIndex?: unknown; correctAnswer?: unknown }
  const v = typeof raw.correctIndex === 'number' ? raw.correctIndex : raw.correctAnswer
  return typeof v === 'number' && Number.isInteger(v) ? v : -1
}

const LESSON_BUILT = new Set<string>(LESSON_BUILT_EXIT_TOPICS)

/** Difficulty per question key from a lesson-built pool (its generated quiz drops the tag). */
async function lessonBuiltDifficulties(slug: string): Promise<Map<string, QbankDifficulty>> {
  const out = new Map<string, QbankDifficulty>()
  if (!LESSON_BUILT.has(slug)) return out
  try {
    const mod = (await import(/* @vite-ignore */ `../data/exit-quizzes/lesson-built/${slug}`)) as { EXIT_POOL?: LessonExitItem[] }
    for (const it of mod.EXIT_POOL ?? []) {
      out.set(questionKey({ question: it.question, options: it.options, correctIndex: it.correctAnswer }), it.difficulty)
    }
  } catch {
    // No difficulty tags for this pool: its items count as medium.
  }
  return out
}

async function mcatTopicPool(slug: string) {
  try {
    const [all, regular, difficulties] = await Promise.all([
      generateExitQuiz(slug, MCAT_DRAW, undefined, MCAT_POOL_SEED, { includeLowYield: true }),
      generateExitQuiz(slug, MCAT_DRAW, undefined, MCAT_POOL_SEED, { includeLowYield: false }),
      lessonBuiltDifficulties(slug),
    ])
    const keyed = (qs: ExitQuizQuestion[]) =>
      qs
        .map((q) => ({ q, correctIndex: keyIndexOf(q) }))
        .filter(({ q, correctIndex }) => typeof q.question === 'string' && Array.isArray(q.options) && correctIndex >= 0 && correctIndex < q.options.length)
        .map(({ q, correctIndex }) => ({ q, correctIndex, key: questionKey({ question: q.question, options: q.options, correctIndex }) }))
    const regularKeys = new Set(keyed(regular).map((r) => r.key))
    return { slug, items: keyed(all), regularKeys, difficulties }
  } catch (err) {
    console.warn(`[qbank] no exit pool for ${slug}:`, err)
    return { slug, items: [], regularKeys: new Set<string>(), difficulties: new Map<string, QbankDifficulty>() }
  }
}

function mcatPassageUnit(p: MCATPassage): QbankUnit {
  const dp = toTestPassage(p)
  const figure = dp.figureMarkdown || dp.dataTable || dp.figure
    ? { ...(dp.figureMarkdown ? { figureMarkdown: dp.figureMarkdown } : {}), ...(dp.dataTable ? { dataTable: dp.dataTable } : {}), ...(dp.figure ? { figure: dp.figure } : {}) }
    : undefined
  const passage: QbankPassage = { id: dp.id, title: dp.title, body: dp.body, ...(figure ? { figure } : {}) }
  const discipline = mcatPassageDiscipline(p)
  const topicSlug = topicSlugForPassage(p)
  return {
    id: `psg:${dp.id}`,
    passageId: dp.id,
    section: p.section,
    discipline,
    topicSlug,
    items: p.questions.map((q) => ({
      // Same key as section practice and the diagnostic (passage id `authored-<id>`).
      questionKey: questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer, passageId: dp.id }),
      section: p.section,
      discipline,
      topicSlug,
      difficulty: null,
      lowYield: false,
      passageId: dp.id,
      question: q.question,
      options: [...q.options],
      correctIndex: q.correctAnswer,
      explanation: q.explanation,
      passage,
    })),
  }
}

export async function buildMcatPool(): Promise<QbankPool> {
  const slugs = listExitQuizSlugs('mcat-').filter((s) => s.endsWith('-mcat') && mcatTopicInfo(s))
  const pools = await Promise.all(slugs.map(mcatTopicPool))
  // Most specific topic first: the smallest pool claims a shared item.
  pools.sort((a, b) => a.items.length - b.items.length || a.slug.localeCompare(b.slug))
  const seen = new Set<string>()
  const units: QbankUnit[] = []
  for (const pool of pools) {
    const info = mcatTopicInfo(pool.slug)!
    for (const { q, correctIndex, key } of pool.items) {
      if (seen.has(key)) continue
      seen.add(key)
      const item: QbankCandidate = {
        questionKey: key,
        section: info.section,
        discipline: info.discipline,
        topicSlug: pool.slug,
        difficulty: asDifficulty(q.difficulty) ?? pool.difficulties.get(key) ?? null,
        lowYield: !pool.regularKeys.has(key),
        passageId: null,
        question: q.question,
        options: [...q.options],
        correctIndex,
        explanation: q.explanation ?? '',
        passage: null,
      }
      units.push({ id: key, passageId: null, section: info.section, discipline: info.discipline, topicSlug: pool.slug, items: [item] })
    }
  }
  for (const p of [...CARS_PASSAGES, ...Object.values(SECTION_PASSAGES).flat()]) {
    if (!p.questions.length) continue
    const unit = mcatPassageUnit(p)
    if (unit.items.some((i) => seen.has(i.questionKey))) continue
    unit.items.forEach((i) => seen.add(i.questionKey))
    units.push(unit)
  }
  return { course: 'mcat', units }
}

/* ------------------------------------------------------------------ */
/*  SAT                                                                */
/* ------------------------------------------------------------------ */

/**
 * The SAT practice blueprint's topic pools by content domain — kept in step
 * with RW_DOMAIN_SLUGS / MATH_DOMAIN_SLUGS in src/data/sat-practice/test-generator.ts.
 */
const SAT_DOMAIN_SLUGS: Record<RWDomain | MathDomain, string[]> = {
  'craft-structure': ['sat-vocabulary-context'],
  'information-ideas': ['sat-reading-comprehension', 'sat-central-ideas-details', 'sat-command-evidence', 'sat-finding-textual-evidence'],
  conventions: [
    'sat-grammar-usage',
    'sat-grammar-conventions',
    'sat-punctuation',
    'sat-punctuation-commas-semicolons',
    'sat-sentence-structure',
    'sat-pronoun-agreement',
    'sat-subject-verb-agreement',
  ],
  expression: ['sat-effective-language-use', 'sat-transitions-organization'],
  algebra: ['sat-linear-equations-inequalities', 'sat-systems-linear-equations', 'sat-linear-inequalities-graphs'],
  advanced: [
    'sat-quadratic-equations',
    'sat-polynomials-factoring',
    'sat-polynomial-rational-expressions',
    'sat-nonlinear-equations-functions',
    'sat-functions',
    'sat-exponential-functions',
    'sat-exponents-radicals',
  ],
  'problem-solving': [
    'sat-ratios-proportions-percents',
    'sat-statistics-data-interpretation',
    'sat-data-statistics',
    'sat-probability-two-way-tables',
    'sat-scatterplots-line-fit',
  ],
  geometry: ['sat-geometry-basics', 'sat-geometry-trigonometry', 'sat-circles'],
}
const RW_DOMAINS = new Set<string>(['craft-structure', 'information-ideas', 'conventions', 'expression'])

/** Same seed and size as the practice forms' loadPool, so keys match across surfaces. */
const SAT_POOL_SEED = 20260915
const SAT_POOL_SIZE = 400
/** Grid-in generators make one problem each per draw; several seeded draws give varied values. */
const SAT_GRID_SEEDS = [20261012, 20261013, 20261014, 20261015]

/** The sat-prep topic a grid-in of each category studies (as in the SAT diagnostic). */
const GRID_IN_TOPIC: Record<string, string> = {
  Algebra: 'sat-linear-equations-inequalities',
  'Advanced Math': 'sat-quadratic-equations',
  'Problem Solving': 'sat-ratios-proportions-percents',
  Statistics: 'sat-data-statistics',
  Geometry: 'sat-geometry-basics',
}
function gridInDomain(category: string): MathDomain {
  if (category === 'Algebra') return 'algebra'
  if (category === 'Advanced Math') return 'advanced'
  if (category === 'Geometry') return 'geometry'
  return 'problem-solving'
}

/** A passage's domain and topic, from its first question's skill (the passage stays one unit). */
function satPassageInfo(p: ReadingPassage): { domain: RWDomain; topicSlug: string } {
  const skill = p.questions[0]?.skill ?? ''
  if (/vocabulary|craft/.test(skill)) return { domain: 'craft-structure', topicSlug: 'sat-vocabulary-context' }
  if (/evidence/.test(skill)) return { domain: 'information-ideas', topicSlug: 'sat-finding-textual-evidence' }
  return { domain: 'information-ideas', topicSlug: 'sat-central-ideas-details' }
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function withSeededRandom<T>(seed: number, fn: () => T): T {
  const real = Math.random
  Math.random = mulberry32(seed)
  try {
    return fn()
  } finally {
    Math.random = real
  }
}

const stemOf = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()

export async function buildSatPool(): Promise<QbankPool> {
  const entries = Object.entries(SAT_DOMAIN_SLUGS).flatMap(([domain, slugs]) => slugs.map((slug) => ({ domain, slug })))
  const pools = await Promise.all(
    entries.map(async ({ domain, slug }) => {
      try {
        return { domain, slug, items: await generateExitQuiz(slug, SAT_POOL_SIZE, undefined, SAT_POOL_SEED) }
      } catch {
        return { domain, slug, items: [] as ExitQuizQuestion[] }
      }
    }),
  )
  pools.sort((a, b) => a.items.length - b.items.length || a.slug.localeCompare(b.slug))
  const seen = new Set<string>()
  const units: QbankUnit[] = []
  const add = (unit: QbankUnit) => {
    if (unit.items.some((i) => seen.has(i.questionKey))) return
    unit.items.forEach((i) => seen.add(i.questionKey))
    units.push(unit)
  }

  for (const pool of pools) {
    const section = RW_DOMAINS.has(pool.domain) ? 'reading-writing' : 'math'
    const discipline = SAT_DOMAIN_LABELS[pool.domain as RWDomain | MathDomain]
    const topicSlug = canonicalizeSlug(pool.slug)
    for (const q of pool.items) {
      // Not on the exam = not in the program: the items SAT form v2 leaves out
      // (definitions, test strategy, broken/two-answer/giveaway items) are
      // lesson checks, not SAT practice.
      if (q.id && SAT_FORM_V2_EXCLUDED.has(q.id)) continue
      const correctIndex = keyIndexOf(q)
      if (typeof q.question !== 'string' || !Array.isArray(q.options) || correctIndex < 0 || correctIndex >= q.options.length) continue
      const key = questionKey({ question: q.question, options: q.options, correctIndex })
      add({
        id: key,
        passageId: null,
        section,
        discipline,
        topicSlug,
        items: [{
          questionKey: key, section, discipline, topicSlug,
          difficulty: asDifficulty(q.difficulty), lowYield: false, passageId: null,
          question: q.question, options: [...q.options], correctIndex, explanation: q.explanation ?? '', passage: null,
        }],
      })
    }
  }

  for (const p of SAT_PASSAGES) {
    if (!p.questions.length) continue
    if (p.questions.some((_, i) => SAT_FORM_V2_EXCLUDED.has(`sat-passage-${p.id}-q${i}`))) continue
    const { domain, topicSlug } = satPassageInfo(p)
    const discipline = SAT_DOMAIN_LABELS[domain]
    const passage: QbankPassage = { id: p.id, title: p.title, body: p.text }
    add({
      id: `psg:${p.id}`,
      passageId: p.id,
      section: 'reading-writing',
      discipline,
      topicSlug,
      items: p.questions.map((q) => ({
        questionKey: questionKey({ question: q.question, options: q.options, correctIndex: q.correctAnswer, passageId: p.id }),
        section: 'reading-writing', discipline, topicSlug, difficulty: null, lowYield: false, passageId: p.id,
        question: q.question, options: [...q.options], correctIndex: q.correctAnswer, explanation: q.explanation, passage,
      })),
    })
  }

  const grids = SAT_GRID_SEEDS.flatMap((seed) => withSeededRandom(seed, () => generateGridInProblems(200)))
  const gridStems = new Set<string>()
  for (const g of grids) {
    const stem = stemOf(g.question)
    if (gridStems.has(stem)) continue
    gridStems.add(stem)
    const domain = gridInDomain(g.category)
    const discipline = SAT_DOMAIN_LABELS[domain]
    const topicSlug = GRID_IN_TOPIC[g.category] ?? 'sat-linear-equations-inequalities'
    // Grid-ins are keyed with no options and key -1, exactly as practice tests store them.
    const key = questionKey({ question: g.question, options: [], correctIndex: -1 })
    add({
      id: key,
      passageId: null,
      section: 'math',
      discipline,
      topicSlug,
      items: [{
        questionKey: key, section: 'math', discipline, topicSlug, difficulty: g.difficulty, lowYield: false, passageId: null,
        question: g.question, options: [], correctIndex: -1, explanation: g.explanation, passage: null,
        gridIn: { correctAnswer: g.correctAnswer, acceptableAnswers: [...g.acceptableAnswers], tolerance: g.tolerance },
      }],
    })
  }
  return { course: 'sat', units }
}

/* ------------------------------------------------------------------ */
/*  ACT                                                                */
/* ------------------------------------------------------------------ */

const ACT_SECTION_LABEL: Record<'english' | 'math' | 'reading' | 'science', string> = {
  english: 'English',
  math: 'Math',
  reading: 'Reading',
  science: 'Science',
}

export async function buildActPool(): Promise<QbankPool> {
  const slugs = LESSON_BUILT_EXIT_TOPICS.filter((s) => actTopicSection(s) !== null)
  const pools = await Promise.all(slugs.map(mcatTopicPool))
  pools.sort((a, b) => a.items.length - b.items.length || a.slug.localeCompare(b.slug))
  const seen = new Set<string>()
  const units: QbankUnit[] = []
  for (const pool of pools) {
    const topicSection = actTopicSection(pool.slug)!
    for (const { q, correctIndex, key } of pool.items) {
      if (seen.has(key)) continue
      seen.add(key)
      const section = topicSection === 'mixed' ? actMixedItemSection(q.question) : topicSection
      const discipline = ACT_SECTION_LABEL[section]
      units.push({
        id: key,
        passageId: null,
        section,
        discipline,
        topicSlug: pool.slug,
        items: [{
          questionKey: key,
          section,
          discipline,
          topicSlug: pool.slug,
          difficulty: asDifficulty(q.difficulty) ?? pool.difficulties.get(key) ?? null,
          lowYield: !pool.regularKeys.has(key),
          passageId: null,
          question: q.question,
          options: [...q.options],
          correctIndex,
          explanation: q.explanation ?? '',
          passage: null,
        }],
      })
    }
  }
  return { course: 'act', units }
}

/* ------------------------------------------------------------------ */
/*  Cache                                                              */
/* ------------------------------------------------------------------ */

const poolCache = new Map<QbankCourse, Promise<QbankPool>>()

/** The course's pool, built once per server instance (a failed build is retried next call). */
export function getQbankPool(course: QbankCourse): Promise<QbankPool> {
  let p = poolCache.get(course)
  if (!p) {
    p = (course === 'mcat' ? buildMcatPool() : course === 'act' ? buildActPool() : buildSatPool()).catch((err) => {
      poolCache.delete(course)
      throw err
    })
    poolCache.set(course, p)
  }
  return p
}

/* ------------------------------------------------------------------ */
/*  Filtering and selection (pure)                                     */
/* ------------------------------------------------------------------ */

/** What the student brings to a selection: their low-yield setting and answer history. */
export interface QbankStudentState {
  includeLowYield: boolean
  /** Every question key in the student's answer log. */
  seenKeys: ReadonlySet<string>
  /** Active mistakes missed by a wrong or skipped answer. */
  incorrectKeys: ReadonlySet<string>
  /** Active mistakes whose latest miss was a flag. */
  flaggedKeys: ReadonlySet<string>
}

const difficultyOf = (c: QbankCandidate): QbankDifficulty => c.difficulty ?? 'medium'

/**
 * The unit as this student may see it under these filters, or null. Low-yield
 * discretes drop out unless the student opted in. A passage is matched by its
 * section, discipline and topic (shared by all its questions) and by
 * difficulty if any question matches; it is never trimmed.
 */
export function filterUnit(unit: QbankUnit, f: QbankFilters, includeLowYield: boolean): QbankUnit | null {
  if (f.sections?.length && !f.sections.includes(unit.section)) return null
  if (f.disciplines?.length && !f.disciplines.includes(unit.discipline)) return null
  if (f.topics?.length && !f.topics.includes(unit.topicSlug)) return null
  if (!includeLowYield && unit.items.some((i) => i.lowYield)) return null
  if (f.difficulties?.length && !unit.items.some((i) => f.difficulties!.includes(difficultyOf(i)))) return null
  return unit
}

/** Does the unit belong to this pool kind for this student? */
export function unitInPoolKind(unit: QbankUnit, kind: QbankPoolKind, s: QbankStudentState): boolean {
  switch (kind) {
    case 'all':
      return true
    case 'unused':
      // A passage is unused only if none of its questions was ever answered.
      return unit.items.every((i) => !s.seenKeys.has(i.questionKey))
    case 'incorrect':
      return unit.items.some((i) => s.incorrectKeys.has(i.questionKey))
    case 'flagged':
      return unit.items.some((i) => s.flaggedKeys.has(i.questionKey))
  }
}

export function eligibleUnits(pool: QbankPool, f: QbankFilters, kind: QbankPoolKind, s: QbankStudentState): QbankUnit[] {
  const out: QbankUnit[] = []
  for (const u of pool.units) {
    const unit = filterUnit(u, f, s.includeLowYield)
    if (unit && unitInPoolKind(unit, kind, s)) out.push(unit)
  }
  return out
}

export const questionCount = (units: readonly QbankUnit[]) => units.reduce((n, u) => n + u.items.length, 0)

function shuffled<T>(arr: readonly T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Random whole units adding up to `count` questions. Passages are never split,
 * so the set can land a little short of (or, when nothing smaller is left, a
 * little over) the request: after filling greedily, one more unit is added if
 * it brings the total closer to `count`.
 */
export function pickUnits(units: readonly QbankUnit[], count: number, rng: () => number = Math.random): QbankUnit[] {
  const order = shuffled(units, rng)
  const picked: QbankUnit[] = []
  const rest: QbankUnit[] = []
  let total = 0
  for (const u of order) {
    if (total + u.items.length <= count) {
      picked.push(u)
      total += u.items.length
    } else {
      rest.push(u)
    }
  }
  if (total < count && rest.length) {
    const best = rest.reduce((a, b) => (Math.abs(count - total - b.items.length) < Math.abs(count - total - a.items.length) ? b : a))
    if (Math.abs(count - total - best.items.length) < count - total) picked.push(best)
  }
  return picked
}

/**
 * Freeze picked units into session items: passages keep their questions
 * consecutive and in authored order; options are shuffled (seeded per session
 * and question) with the key remapped. Grid-ins have no options to shuffle.
 */
export function freezeItems(units: readonly QbankUnit[], salt: string): QbankItem[] {
  const items: QbankItem[] = []
  for (const u of units) {
    for (const c of u.items) {
      const shown = c.gridIn || c.options.length < 2
        ? { options: [...c.options], correctIndex: c.correctIndex }
        : shuffleOptions([...c.options], c.correctIndex, `${salt}:${c.questionKey}`)
      items.push({
        index: items.length,
        questionKey: c.questionKey,
        question: c.question,
        options: shown.options,
        correctIndex: shown.correctIndex,
        explanation: c.explanation,
        passage: c.passage,
        ...(c.gridIn ? { gridIn: c.gridIn } : {}),
        topicSlug: c.topicSlug,
        section: c.section,
        discipline: c.discipline,
        difficulty: c.difficulty,
      })
    }
  }
  return items
}
