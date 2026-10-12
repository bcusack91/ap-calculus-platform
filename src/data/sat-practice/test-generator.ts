/**
 * SAT Practice Test Generator
 *
 * Composes full-length and mini practice tests. Digital SAT format:
 *   - Reading & Writing: 2 modules × 27 questions × 32 min each
 *   - Math: 2 modules × 22 questions × 35 min each
 *   - Total: 98 questions, 134 minutes
 *
 * Mini test (half-length): R&W 27 / 32 min + Math 22 / 35 min.
 *
 * Practice Tests 1–5 are FIXED FORMS. Every pool item and passage is assigned
 * to exactly one form by a stable hash of its id, so the five forms don't
 * share content (a thin pool may borrow from another form rather than come up
 * short), and each form draws the same items every time. Modules follow the
 * College Board blueprint: R&W by content domain in exam order (Craft &
 * Structure, Information & Ideas, Standard English Conventions, Expression of
 * Ideas), Math by domain quotas including the grid-ins.
 *
 * FORM VERSIONS. Version 1 is the original draw. Version 2 (current) is the
 * same build with the items and passages in SAT_FORM_V2_EXCLUDED skipped
 * (lesson concept checks, broken, two-answer and giveaway items). Past
 * attempts are reviewed and graded by replaying the deterministic draw, so v1
 * must keep rebuilding byte-for-byte: every v2 difference is behind
 * `ctx.version === 2`, and a v1 form carries no `formVersion` field at all.
 * New tests build CURRENT_SAT_FORM_VERSION; anything rebuilding a stored
 * attempt passes the attempt's version (formVersionForScoring in
 * src/lib/sat-attempt-format.ts).
 */

import { generateExitQuiz, type ExitQuizQuestion } from '../exit-quizzes'
import { SAT_PASSAGES, type ReadingPassage } from '../sat-passages'
import { generateGridInProblems, type GridInProblem } from '../sat-grid-in'
import { satSectionScaled, satRouteFor, SAT_ROUTING_THRESHOLD, type SatRoute } from '@/lib/sat-scoring'
import { arrangeInPassageBlocks } from '@/lib/mcat-diagnostic-order'
import { SAT_FORM_V2_EXCLUDED } from './form-v2-exclusions'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type SATSectionType = 'reading-writing' | 'math'

/** Tier a module's items are drawn at. */
export type ModuleDifficulty = 'easy' | 'medium' | 'hard'

/**
 * Digital-SAT adaptive routing. On the real exam, Module 1 performance decides
 * whether Module 2 is the harder or easier form, and the form you earn caps
 * the score you can reach — which is precisely what matters in the 700-800
 * band. ~70% correct on Module 1 is the commonly cited routing threshold.
 */
export const MODULE_2_ROUTING_THRESHOLD = SAT_ROUTING_THRESHOLD

export function module2Tier(correct: number, total: number): ModuleDifficulty {
  if (total <= 0) return 'medium'
  return correct / total >= MODULE_2_ROUTING_THRESHOLD ? 'hard' : 'easy'
}

export type RWDomain = 'craft-structure' | 'information-ideas' | 'conventions' | 'expression'
export type MathDomain = 'algebra' | 'advanced' | 'problem-solving' | 'geometry'

/** College Board names for the content domains (teacher reports, review pages). */
export const SAT_DOMAIN_LABELS: Record<RWDomain | MathDomain, string> = {
  'craft-structure': 'Craft and Structure',
  'information-ideas': 'Information and Ideas',
  conventions: 'Standard English Conventions',
  expression: 'Expression of Ideas',
  algebra: 'Algebra',
  advanced: 'Advanced Math',
  'problem-solving': 'Problem-Solving and Data Analysis',
  geometry: 'Geometry and Trigonometry',
}

export interface SATTestQuestion extends ExitQuizQuestion {
  section: SATSectionType
  sourceSlug: string // which quiz pool generated the question
  /** College Board content domain the item counts toward. */
  domain?: RWDomain | MathDomain
  passage?: {
    id: string
    title: string
    genre: string
    text: string
  }
  /**
   * Present only for student-produced-response (grid-in / SPR) items. When set,
   * this is a typed-answer question: `options` is empty and `correctIndex` is
   * -1; the runner grades the typed value against these fields instead.
   */
  gridIn?: {
    correctAnswer: number
    acceptableAnswers: number[]
    tolerance: number
  }
}

export interface SATTestSection {
  id: string
  name: string
  section: SATSectionType
  moduleNum: number
  /**
   * Which adaptive form this module was built at. Module 1 is always mixed
   * (undefined); Module 2 is set once Module 1 has been scored.
   */
  tier?: ModuleDifficulty
  questionCount: number
  timeLimitSeconds: number
  questions: SATTestQuestion[]
}

/** Which exam a form simulates. Absent = 'sat' (every form built before PSAT mode). */
export type SatExam = 'sat' | 'psat'

/**
 * Form version (see header): 1 = the original draw, 2 = the draw without
 * SAT_FORM_V2_EXCLUDED. Stored on attempts through scoringVersion
 * (src/lib/sat-attempt-format.ts).
 */
export type SatFormVersion = 1 | 2

/** The version new tests are built at. */
export const CURRENT_SAT_FORM_VERSION: SatFormVersion = 2

/** Coerce an unknown value to a form version (anything but 2 is v1). */
export function satFormVersion(v: unknown): SatFormVersion {
  return v === 2 ? 2 : 1
}

export interface SATFullTest {
  testNumber: number
  format: 'full' | 'mini'
  /** 'psat' = an adaptive PSAT/NMSQT form (buildPsatForm); absent = SAT. */
  exam?: SatExam
  /** 2 on a v2 form; absent = version 1 (never written on v1, keeping it byte-identical). */
  formVersion?: SatFormVersion
  sections: SATTestSection[]
  totalQuestions: number
  totalTimeSeconds: number
}

/* ------------------------------------------------------------------ */
/*  Blueprint                                                          */
/* ------------------------------------------------------------------ */

export const RW_DOMAIN_SLUGS: Record<RWDomain, string[]> = {
  'craft-structure': ['sat-vocabulary-context'],
  'information-ideas': [
    'sat-reading-comprehension',
    'sat-central-ideas-details',
    'sat-command-evidence',
    'sat-finding-textual-evidence',
  ],
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
}

/** Real exam order of R&W domains within a module. */
const RW_DOMAIN_ORDER: RWDomain[] = ['craft-structure', 'information-ideas', 'conventions', 'expression']

/** Per 27-question R&W module: C&S ~28%, I&I ~26%, SEC ~26%, EoI ~20%. */
const RW_MODULE_QUOTA: Record<RWDomain, number> = {
  'craft-structure': 8,
  'information-ideas': 7,
  conventions: 7,
  expression: 5,
}

/** Passage-bank questions per R&W module (whole passages only). */
const RW_PASSAGE_QUESTIONS = 7

export const MATH_DOMAIN_SLUGS: Record<MathDomain, string[]> = {
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

/** Per 22-question Math module (grid-ins included): Algebra/Advanced ~35%, PSDA/Geometry ~15%. */
const MATH_MODULE_QUOTA: Record<MathDomain, number> = { algebra: 8, advanced: 8, 'problem-solving': 3, geometry: 3 }
/** Grid-ins (student-produced response) per module, by domain (6 of 22 ≈ 27%). */
const GRID_IN_QUOTA: Record<MathDomain, number> = { algebra: 2, advanced: 2, 'problem-solving': 1, geometry: 1 }

function gridInDomain(category: string): MathDomain {
  if (category === 'Algebra') return 'algebra'
  if (category === 'Advanced Math') return 'advanced'
  if (category === 'Geometry') return 'geometry'
  return 'problem-solving'
}

function passageSkillDomain(skill: string): RWDomain {
  return /vocabulary|craft/.test(skill) ? 'craft-structure' : 'information-ideas'
}

/* ------------------------------------------------------------------ */
/*  Deterministic helpers                                              */
/* ------------------------------------------------------------------ */

export const PRACTICE_FORM_COUNT = 5
const POOL_SEED = 20260915
const POOL_SIZE = 400

function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function hashString(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function shuffle<T>(arr: T[], rng: () => number = Math.random): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const stemOf = (text: string) => text.replace(/\s+/g, ' ').trim().toLowerCase()

/** The fixed form (0-based) an item or passage belongs to. */
export function practiceFormOf(id: string): number {
  return hashString(id) % PRACTICE_FORM_COUNT
}

/** Run a synchronous generator with Math.random seeded, so it is reproducible. */
function withSeededRandom<T>(seed: number, fn: () => T): T {
  const real = Math.random
  Math.random = mulberry32(seed)
  try {
    return fn()
  } finally {
    Math.random = real
  }
}

/**
 * PSAT/NMSQT difficulty profile for one module: the most hard-tier items it may
 * hold (as a share of the module) and the order tiers are preferred in (empty
 * = no preference, a mixed module).
 */
export interface PsatModuleProfile {
  hardShare: number
  prefer: ModuleDifficulty[]
}

/**
 * The PSAT/NMSQT has the SAT's structure but a lower content ceiling: fewer of
 * the hardest items overall, and a harder Module 2 that leans on medium items
 * instead of being drawn almost entirely from the hard tier as the SAT's is.
 * Shares are CAPS on hard-tier items per module (passage-bank items are
 * untiered and never count as hard).
 */
export const PSAT_DIFFICULTY_PROFILE: Record<'module1' | 'harder' | 'easier', PsatModuleProfile> = {
  module1: { hardShare: 0.25, prefer: [] },
  harder: { hardShare: 0.5, prefer: ['hard', 'medium', 'easy'] },
  easier: { hardShare: 0, prefer: ['easy', 'medium', 'hard'] },
}

interface BuildContext {
  /** 0-based fixed form. */
  form: number
  /** Form version: 2 skips SAT_FORM_V2_EXCLUDED items and passages. */
  version: SatFormVersion
  /** Which fixed form an item or passage id belongs to (default practiceFormOf). */
  formOf?: (id: string) => number
  /** PSAT only: the module's difficulty profile and its running hard-item tally. */
  psat?: { profile: PsatModuleProfile; owed: number; used: number }
  rng: () => number
  usedStems: Set<string>
  usedPassageIds: Set<string>
  difficulty?: ModuleDifficulty
  /** Varies grid-in values between modules of one test. */
  seed: number
}

function newContext(testNumber: number, salt: string, version: SatFormVersion): BuildContext {
  const form = (((testNumber - 1) % PRACTICE_FORM_COUNT) + PRACTICE_FORM_COUNT) % PRACTICE_FORM_COUNT
  return {
    form,
    version,
    rng: mulberry32(hashString(`sat-${salt}-${testNumber}`)),
    usedStems: new Set(),
    usedPassageIds: new Set(),
    seed: hashString(`sat-grid-${salt}-${testNumber}`),
  }
}

export const PSAT_FORM_COUNT = 3

/**
 * The fixed PSAT form (0-based) an item or passage belongs to. A separate hash
 * from practiceFormOf, so the three PSAT forms don't share content with each
 * other (they can share items with the SAT forms: same pools).
 */
export function psatFormOf(id: string): number {
  return hashString(`psat:${id}`) % PSAT_FORM_COUNT
}

function newPsatContext(testNumber: number, salt: string, profile: PsatModuleProfile, version: SatFormVersion): BuildContext {
  const form = (((testNumber - 1) % PSAT_FORM_COUNT) + PSAT_FORM_COUNT) % PSAT_FORM_COUNT
  return {
    form,
    version,
    formOf: psatFormOf,
    psat: { profile, owed: 0, used: 0 },
    rng: mulberry32(hashString(`psat-${salt}-${testNumber}`)),
    usedStems: new Set(),
    usedPassageIds: new Set(),
    seed: hashString(`psat-grid-${salt}-${testNumber}`),
  }
}

/** Start a module: reset the PSAT hard-item tally (no-op for SAT contexts). */
function startModule(ctx: BuildContext): void {
  if (ctx.psat) ctx.psat = { profile: ctx.psat.profile, owed: 0, used: 0 }
}

const isHard = (q: { difficulty?: string }) => q.difficulty === 'hard'

/** v2 only: an item left off v2 forms. Always false on v1. */
function excludedFrom(ctx: BuildContext, id: string | undefined): boolean {
  return ctx.version === 2 && !!id && SAT_FORM_V2_EXCLUDED.has(id)
}

/** v2 only: a passage with any excluded question (passages are drawn whole). */
function passageExcludedFrom(ctx: BuildContext, p: ReadingPassage): boolean {
  return ctx.version === 2 && p.questions.some((_, i) => SAT_FORM_V2_EXCLUDED.has(`sat-passage-${p.id}-q${i}`))
}

/* ------------------------------------------------------------------ */
/*  Pools                                                              */
/* ------------------------------------------------------------------ */

const poolCache = new Map<string, Promise<ExitQuizQuestion[]>>()

/** A slug's whole pool in one fixed order (same seed every call), deduped by stem. */
function loadPool(slug: string): Promise<ExitQuizQuestion[]> {
  let cached = poolCache.get(slug)
  if (!cached) {
    cached = generateExitQuiz(slug, POOL_SIZE, undefined, POOL_SEED)
      .then((items) => {
        const seen = new Set<string>()
        return items.filter((q) => {
          const stem = stemOf(q.question)
          if (seen.has(stem)) return false
          seen.add(stem)
          return true
        })
      })
      .catch(() => [])
    poolCache.set(slug, cached)
  }
  return cached
}

/**
 * Draw `count` questions from a domain's slugs for this form, round-robin
 * across slugs. Preference: this form at the requested tier, this form at any
 * tier, then other forms (only when this form's slice runs short).
 */
async function drawDomain(
  slugs: string[],
  count: number,
  section: SATSectionType,
  domain: RWDomain | MathDomain,
  ctx: BuildContext,
): Promise<SATTestQuestion[]> {
  if (count <= 0) return []
  const candidates: SATTestQuestion[] = []
  for (const slug of slugs) {
    for (const q of await loadPool(slug)) {
      if (excludedFrom(ctx, q.id)) continue
      if (ctx.usedStems.has(stemOf(q.question))) continue
      candidates.push({ ...q, section, sourceSlug: slug, domain })
    }
  }
  if (ctx.psat) return drawProfiled(candidates, count, ctx)
  const inForm = (q: SATTestQuestion) => practiceFormOf(q.id ?? q.question) === ctx.form
  const atTier = (q: SATTestQuestion) => !ctx.difficulty || (q.difficulty ?? 'medium') === ctx.difficulty
  const tiers = [
    candidates.filter((q) => inForm(q) && atTier(q)),
    candidates.filter((q) => inForm(q) && !atTier(q)),
    candidates.filter((q) => !inForm(q) && atTier(q)),
    candidates.filter((q) => !inForm(q) && !atTier(q)),
  ]

  const picked: SATTestQuestion[] = []
  for (const tier of tiers) {
    if (picked.length >= count) break
    // Round-robin by slug so a domain spans its topics.
    const bySlug = new Map<string, SATTestQuestion[]>()
    for (const q of shuffle(tier, ctx.rng)) bySlug.set(q.sourceSlug, [...(bySlug.get(q.sourceSlug) ?? []), q])
    const queues = [...bySlug.values()]
    while (picked.length < count && queues.some((queue) => queue.length > 0)) {
      for (const queue of queues) {
        if (picked.length >= count) break
        const q = queue.shift()
        if (!q || ctx.usedStems.has(stemOf(q.question))) continue
        ctx.usedStems.add(stemOf(q.question))
        picked.push(q)
      }
    }
  }
  return picked
}

/**
 * PSAT draw: like drawDomain's SAT path (this form first, round-robin by slug)
 * but tier preference comes from the module's profile and hard-tier items stop
 * once the module's cap is reached. The cap accrues per call (count × share),
 * so hard items spread across domains instead of the first domain taking them
 * all. Only if every capped bucket runs dry does a last pass allow more hard
 * items, so a thin pool still fills its module.
 */
function drawProfiled(candidates: SATTestQuestion[], count: number, ctx: BuildContext): SATTestQuestion[] {
  const state = ctx.psat!
  const formOf = ctx.formOf ?? practiceFormOf
  state.owed += count * state.profile.hardShare
  const hardLeft = () => Math.floor(state.owed + 1e-9) - state.used
  const inForm = (q: SATTestQuestion) => formOf(q.id ?? q.question) === ctx.form
  const tierOf = (q: SATTestQuestion) => q.difficulty ?? 'medium'
  const prefer = state.profile.prefer
  const buckets: SATTestQuestion[][] = []
  for (const form of [true, false]) {
    const pool = candidates.filter((q) => inForm(q) === form)
    if (prefer.length === 0) buckets.push(pool)
    else for (const tier of prefer) buckets.push(pool.filter((q) => tierOf(q) === tier))
  }

  const picked: SATTestQuestion[] = []
  const take = (bucket: SATTestQuestion[], capHard: boolean) => {
    const bySlug = new Map<string, SATTestQuestion[]>()
    for (const q of shuffle(bucket, ctx.rng)) bySlug.set(q.sourceSlug, [...(bySlug.get(q.sourceSlug) ?? []), q])
    const queues = [...bySlug.values()]
    while (picked.length < count && queues.some((queue) => queue.length > 0)) {
      for (const queue of queues) {
        if (picked.length >= count) break
        const q = queue.shift()
        if (!q || ctx.usedStems.has(stemOf(q.question))) continue
        if (capHard && isHard(q) && hardLeft() <= 0) continue
        ctx.usedStems.add(stemOf(q.question))
        if (isHard(q)) state.used++
        picked.push(q)
      }
    }
  }
  for (const bucket of buckets) {
    if (picked.length >= count) break
    take(bucket, true)
  }
  if (picked.length < count) take(candidates, false)
  return picked
}

/**
 * A passage's questions in authored order, each with a stable id. The whole
 * passage counts toward one domain (from its first question), so a passage
 * mixing skills still stays in one consecutive block within its domain group.
 *
 * OPTIONS are shuffled, though: the authored bank keys 52 of 62 items at B, and
 * the full-test renderer shows options as given, so "always pick B" scored ~60%
 * on passage items. The shuffle is seeded by the question's own id, so a form
 * stays fixed (same order for every student, every time) — which a teacher
 * reviewing "question 12, choice C" with the class depends on.
 */
function passageQuestions(p: ReadingPassage): SATTestQuestion[] {
  const domain = passageSkillDomain(p.questions[0]?.skill ?? '')
  return p.questions.map((q, i) => {
    const id = `sat-passage-${p.id}-q${i}`
    const order = shuffle(q.options.map((_, k) => k), mulberry32(hashString(`options-${id}`)))
    return {
      id,
      question: q.question,
      options: order.map((k) => q.options[k]),
      correctIndex: order.indexOf(q.correctAnswer),
      explanation: q.explanation,
      category: `passage-${p.genre}`,
      section: 'reading-writing' as const,
      sourceSlug: `passage-${p.genre}`,
      domain,
      passage: { id: p.id, title: p.title, genre: p.genre, text: p.text },
    }
  })
}

/** Whole passages up to `maxQuestions`: this form's passages first, then others. */
function drawPassages(maxQuestions: number, ctx: BuildContext): SATTestQuestion[] {
  const available = SAT_PASSAGES.filter((p) => !ctx.usedPassageIds.has(p.id) && !passageExcludedFrom(ctx, p))
  const formOf = ctx.formOf ?? practiceFormOf
  const ordered = [
    ...shuffle(available.filter((p) => formOf(p.id) === ctx.form), ctx.rng),
    ...shuffle(available.filter((p) => formOf(p.id) !== ctx.form), ctx.rng),
  ]
  // Passage prompts are generic ("Which choice best states the main idea of the
  // text?"), so a passage question is keyed by passage + prompt; keying on the
  // prompt alone would reject every later passage that asks the same thing.
  const passageKey = (q: SATTestQuestion) => stemOf(`${q.passage?.id}|${q.question}`)
  const out: SATTestQuestion[] = []
  for (const p of ordered) {
    if (out.length >= maxQuestions) break
    const qs = passageQuestions(p).filter((q) => !ctx.usedStems.has(passageKey(q)))
    if (qs.length !== p.questions.length || out.length + qs.length > maxQuestions) continue
    ctx.usedPassageIds.add(p.id)
    for (const q of qs) ctx.usedStems.add(passageKey(q))
    out.push(...qs)
  }
  return out
}

/* ------------------------------------------------------------------ */
/*  Modules                                                            */
/* ------------------------------------------------------------------ */

async function generateRWModule(count: number, ctx: BuildContext): Promise<SATTestQuestion[]> {
  startModule(ctx)
  const passageQs = drawPassages(RW_PASSAGE_QUESTIONS, ctx)
  const byDomain = new Map<RWDomain, SATTestQuestion[]>(RW_DOMAIN_ORDER.map((d) => [d, []]))
  for (const q of passageQs) byDomain.get(q.domain as RWDomain)!.push(q)

  for (const domain of RW_DOMAIN_ORDER) {
    const need = RW_MODULE_QUOTA[domain] - byDomain.get(domain)!.length
    byDomain.get(domain)!.push(...(await drawDomain(RW_DOMAIN_SLUGS[domain], need, 'reading-writing', domain, ctx)))
  }

  // A short domain (e.g. a thin Craft & Structure pool) is topped up from the
  // largest domains so the module still has its full count.
  let total = [...byDomain.values()].reduce((n, qs) => n + qs.length, 0)
  for (const domain of ['information-ideas', 'conventions', 'expression'] as RWDomain[]) {
    if (total >= count) break
    const extra = await drawDomain(RW_DOMAIN_SLUGS[domain], count - total, 'reading-writing', domain, ctx)
    byDomain.get(domain)!.push(...extra)
    total += extra.length
  }

  // Exam order by domain; within a domain, passage sets stay together.
  return RW_DOMAIN_ORDER.flatMap((domain) =>
    arrangeInPassageBlocks(byDomain.get(domain)!, (units) => shuffle(units, ctx.rng)),
  ).slice(0, count)
}

/**
 * Convert procedurally-generated grid-in (SPR) problems into SATTestQuestions.
 * SPR items have no answer choices: `options` is empty and `correctIndex` is -1;
 * the runner grades the typed response against the `gridIn` key.
 */
function gridInsToTestQuestions(problems: GridInProblem[], salt: string): SATTestQuestion[] {
  return problems.map((p, i) => ({
    id: `sat-gridin-${salt}-${i}`,
    question: p.question,
    options: [],
    correctIndex: -1,
    explanation: p.explanation,
    category: p.category,
    difficulty: p.difficulty,
    section: 'math' as const,
    sourceSlug: `grid-in-${p.category.toLowerCase().replace(/\s+/g, '-')}`,
    domain: gridInDomain(p.category),
    gridIn: {
      correctAnswer: p.correctAnswer,
      acceptableAnswers: p.acceptableAnswers,
      tolerance: p.tolerance,
    },
  }))
}

/**
 * Build one Math module to the domain quotas: multiple-choice items followed
 * by student-produced-response (grid-in) items, as on the digital SAT.
 */
async function generateMathModule(ctx: BuildContext): Promise<SATTestQuestion[]> {
  startModule(ctx)
  const generated = withSeededRandom(ctx.seed, () => generateGridInProblems(60))
  let gridPool = gridInsToTestQuestions(generated, String(ctx.seed)).filter(
    (q) => !ctx.usedStems.has(stemOf(q.question)) && !excludedFrom(ctx, q.id),
  )
  const gridTotal = Object.values(GRID_IN_QUOTA).reduce((a, b) => a + b, 0)
  const psat = ctx.psat
  if (psat) {
    // PSAT: grid-ins follow the module's tier preference and share its hard cap.
    const rank = (q: SATTestQuestion) => {
      const i = psat.profile.prefer.indexOf(q.difficulty ?? 'medium')
      return i < 0 ? psat.profile.prefer.length : i
    }
    gridPool = gridPool.map((q, i) => ({ q, i })).sort((a, b) => rank(a.q) - rank(b.q) || a.i - b.i).map((x) => x.q)
    psat.owed += gridTotal * psat.profile.hardShare
  }
  const gridIns: SATTestQuestion[] = []
  const takeGrid = (domain: MathDomain | null, n: number, capHard = true) => {
    for (const q of gridPool) {
      if (n <= 0) break
      if (gridIns.includes(q) || (domain && q.domain !== domain)) continue
      if (psat) {
        if (capHard && isHard(q) && Math.floor(psat.owed + 1e-9) - psat.used <= 0) continue
        if (isHard(q)) psat.used++
      } else if (ctx.difficulty === 'hard' && q.difficulty === 'easy') continue
      gridIns.push(q)
      ctx.usedStems.add(stemOf(q.question))
      n--
    }
  }
  for (const [domain, n] of Object.entries(GRID_IN_QUOTA) as [MathDomain, number][]) takeGrid(domain, n)
  if (gridIns.length < gridTotal) takeGrid(null, gridTotal - gridIns.length)
  if (psat && gridIns.length < gridTotal) takeGrid(null, gridTotal - gridIns.length, false)

  const mcq: SATTestQuestion[] = []
  for (const [domain, quota] of Object.entries(MATH_MODULE_QUOTA) as [MathDomain, number][]) {
    const need = quota - gridIns.filter((q) => q.domain === domain).length
    mcq.push(...(await drawDomain(MATH_DOMAIN_SLUGS[domain], need, 'math', domain, ctx)))
  }
  const mcqTarget = 22 - gridIns.length
  if (mcq.length < mcqTarget) {
    mcq.push(...(await drawDomain(MATH_DOMAIN_SLUGS.algebra, mcqTarget - mcq.length, 'math', 'algebra', ctx)))
  }
  return [...shuffle(mcq, ctx.rng).slice(0, mcqTarget), ...gridIns]
}

/* ------------------------------------------------------------------ */
/*  Score Estimation                                                   */
/* ------------------------------------------------------------------ */

/**
 * Estimate scaled SAT score from raw correct answers.
 * Digital SAT uses equating/scaling — this is an approximation.
 *
 * Both sections run through the calibrated piecewise-linear curve in
 * src/lib/sat-scoring.ts, which is anchored on real students' College Board
 * results measured against OUR item mix. The step tables this replaced were
 * transcribed from official raw→scaled conversions, but official tables
 * assume official items: on our pools they read ~60-130 total points high
 * (e.g. 88% correct mapped to ~1450 when the real outcome was ~1345). One
 * shared curve also keeps practice tests, diagnostics, and the score
 * predictor telling the student the same story. The `section` parameter is
 * kept for call-site compatibility (real R&W/Math curves differ by less than
 * our calibration error can resolve).
 */
export function estimateScaledScore(
  correct: number,
  total: number,
  _section: SATSectionType,
): number {
  const pct = total > 0 ? correct / total : 0
  return satSectionScaled(pct)
}

/**
 * Analyze weak and strong areas from quiz results.
 */
export function analyzePerformance(
  answers: {
    question: SATTestQuestion
    selectedIndex: number
    correct: boolean
  }[],
): { weakAreas: string[]; strengths: string[] } {
  // Group by sourceSlug
  const bySlug = new Map<string, { correct: number; total: number }>()
  for (const a of answers) {
    const slug = a.question.sourceSlug
    const entry = bySlug.get(slug) ?? { correct: 0, total: 0 }
    entry.total++
    if (a.correct) entry.correct++
    bySlug.set(slug, entry)
  }

  const weakAreas: string[] = []
  const strengths: string[] = []

  for (const [slug, { correct, total }] of bySlug) {
    const pct = correct / total
    const label = slug
      .replace(/^sat-/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())

    if (pct < 0.5) weakAreas.push(label)
    else if (pct >= 0.8) strengths.push(label)
  }

  return { weakAreas, strengths }
}

/* ------------------------------------------------------------------ */
/*  Test Generation                                                    */
/* ------------------------------------------------------------------ */

/**
 * Generate full-length Practice Test N (98 questions, 134 minutes). The same
 * test number always produces the same form.
 */
export async function generateFullTest(
  testNumber: number,
  version: SatFormVersion = CURRENT_SAT_FORM_VERSION,
): Promise<SATFullTest> {
  // One context across all four modules: no passage or question repeats
  // within the test.
  return assembleFullTest(testNumber, newContext(testNumber, 'full', version))
}

/**
 * Generate adaptive PSAT/NMSQT Practice Test N: the SAT's structure (2×27 R&W
 * in 32 min, 2×22 Math in 35 min) drawn from the same pools, on one of
 * PSAT_FORM_COUNT fixed PSAT forms, with Module 1 (and the pre-built Module 2)
 * held to PSAT_DIFFICULTY_PROFILE.module1.
 */
export async function generatePsatFullTest(
  testNumber: number,
  version: SatFormVersion = CURRENT_SAT_FORM_VERSION,
): Promise<SATFullTest> {
  const test = await assembleFullTest(
    testNumber,
    newPsatContext(testNumber, 'full', PSAT_DIFFICULTY_PROFILE.module1, version),
  )
  return { ...test, exam: 'psat' }
}

async function assembleFullTest(testNumber: number, ctx: BuildContext): Promise<SATFullTest> {
  const rw1 = await generateRWModule(27, ctx)
  const rw2 = await generateRWModule(27, ctx)
  const math1 = await generateMathModule({ ...ctx, seed: ctx.seed ^ 0x1 })
  const math2 = await generateMathModule({ ...ctx, seed: ctx.seed ^ 0x2 })

  const sections: SATTestSection[] = [
    { id: 'rw-1', name: 'Reading & Writing — Module 1', section: 'reading-writing', moduleNum: 1, questionCount: 27, timeLimitSeconds: 32 * 60, questions: rw1 },
    { id: 'rw-2', name: 'Reading & Writing — Module 2', section: 'reading-writing', moduleNum: 2, questionCount: 27, timeLimitSeconds: 32 * 60, questions: rw2 },
    { id: 'math-1', name: 'Math — Module 1', section: 'math', moduleNum: 1, questionCount: 22, timeLimitSeconds: 35 * 60, questions: math1 },
    { id: 'math-2', name: 'Math — Module 2', section: 'math', moduleNum: 2, questionCount: 22, timeLimitSeconds: 35 * 60, questions: math2 },
  ]

  return {
    testNumber,
    format: 'full',
    sections,
    totalQuestions: sections.reduce((s, sec) => s + sec.questionCount, 0),
    totalTimeSeconds: sections.reduce((s, sec) => s + sec.timeLimitSeconds, 0),
    ...versionField(ctx.version),
  }
}

/** `{ formVersion: 2 }` on a v2 form; nothing on v1 (keeps v1 forms byte-identical). */
function versionField(version: SatFormVersion): Pick<SATFullTest, 'formVersion'> {
  return version === 2 ? { formVersion: 2 } : {}
}

/**
 * Rebuild a Module 2 section at the tier the student earned in Module 1.
 *
 * The real digital SAT decides Module 2's form from Module 1 performance, and
 * that decision sets the reachable score ceiling. The runner calls this after
 * scoring a Module 1 section and swaps the result in. It draws from the same
 * practice form, never repeats a question text used elsewhere in the test,
 * and never reuses a passage from another module.
 */
export async function regenerateModule2(
  section: SATTestSection,
  tier: ModuleDifficulty,
  usedQuestionTexts: Set<string>,
  usedPassageIds: Set<string> = new Set(),
  testNumber = 1,
  exam: SatExam = 'sat',
  version: SatFormVersion = CURRENT_SAT_FORM_VERSION,
): Promise<SATTestSection> {
  const salt = `m2-${section.section}-${tier}`
  const ctx: BuildContext = {
    ...(exam === 'psat'
      ? newPsatContext(
          testNumber,
          salt,
          tier === 'hard' ? PSAT_DIFFICULTY_PROFILE.harder : PSAT_DIFFICULTY_PROFILE.easier,
          version,
        )
      : newContext(testNumber, salt, version)),
    usedStems: new Set([...usedQuestionTexts].map(stemOf)),
    usedPassageIds: new Set(usedPassageIds),
    difficulty: tier,
  }
  const questions = section.section === 'reading-writing'
    ? await generateRWModule(section.questionCount, ctx)
    : await generateMathModule(ctx)
  // If a tier is too thin to fill the module, keep the original rather than
  // serving a short section.
  if (questions.length < section.questionCount) return { ...section, tier }
  return { ...section, tier, questions }
}

/**
 * Generate a mini practice test (49 questions, 67 minutes).
 * Good for focused practice or time-limited sessions.
 */
export async function generateMiniTest(
  testNumber: number,
  version: SatFormVersion = CURRENT_SAT_FORM_VERSION,
): Promise<SATFullTest> {
  const ctx = newContext(testNumber, 'mini', version)
  const sections: SATTestSection[] = [
    { id: 'rw-1', name: 'Reading & Writing', section: 'reading-writing', moduleNum: 1, questionCount: 27, timeLimitSeconds: 32 * 60, questions: await generateRWModule(27, ctx) },
    { id: 'math-1', name: 'Math', section: 'math', moduleNum: 1, questionCount: 22, timeLimitSeconds: 35 * 60, questions: await generateMathModule(ctx) },
  ]

  return {
    testNumber,
    format: 'mini',
    sections,
    totalQuestions: sections.reduce((s, sec) => s + sec.questionCount, 0),
    totalTimeSeconds: sections.reduce((s, sec) => s + sec.timeLimitSeconds, 0),
    ...versionField(ctx.version),
  }
}

/* ------------------------------------------------------------------ */
/*  Shared form build (client runner AND server grader)                */
/* ------------------------------------------------------------------ */

export type { SatRoute }
export type SatTestFormat = 'full' | 'mini'

/** The Module 2 difficulty a route draws at. */
export function routeDifficulty(route: SatRoute): ModuleDifficulty {
  return route === 'harder' ? 'hard' : 'easy'
}

/** The route a finished Module 1 earns (the same threshold as module2Tier). */
export function module2Route(correct: number, total: number): SatRoute {
  return satRouteFor(correct, total)
}

const baseFormCache = new Map<string, Promise<SATFullTest>>()
const routedModuleCache = new Map<string, Promise<SATTestSection>>()
const builtFormCache = new Map<string, Promise<SATFullTest>>()

/** Memoize a promise, dropping it on failure so a retry can rebuild. */
function memo<T>(cache: Map<string, Promise<T>>, key: string, build: () => Promise<T>): Promise<T> {
  let hit = cache.get(key)
  if (!hit) {
    hit = build()
    cache.set(key, hit)
    hit.catch(() => cache.delete(key))
  }
  return hit
}

/** Cache-key prefix per exam ('' for the SAT, so its keys are unchanged). */
const examKey = (exam: SatExam | undefined) => (exam === 'psat' ? 'psat:' : '')
/** Cache-key prefix per form version ('' for v1, so its keys are unchanged). */
const versionKey = (version: SatFormVersion) => (version === 2 ? 'v2:' : '')

/** The unrouted form exactly as the runner first serves it. Shared: treat as read-only. */
function baseForm(
  testNumber: number,
  format: SatTestFormat,
  exam: SatExam,
  version: SatFormVersion,
): Promise<SATFullTest> {
  const v = versionKey(version)
  if (exam === 'psat') return memo(baseFormCache, `${v}psat:full:${testNumber}`, () => generatePsatFullTest(testNumber, version))
  return memo(baseFormCache, `${v}${format}:${testNumber}`, () =>
    format === 'full' ? generateFullTest(testNumber, version) : generateMiniTest(testNumber, version),
  )
}

/**
 * The Module 2 at `test.sections[moduleIndex]` as served on `tier`. Built only
 * from the UNROUTED form (never from whatever the caller has swapped in), so
 * the runner and the server grader get the identical question set however and
 * whenever each builds it. `tier` null, a Module 1 index, or a mini test
 * returns the pre-built section unchanged. Cached per path; read-only.
 *
 * The form version comes from the test itself (`formVersion`, absent = v1),
 * so a test keeps the version it was started on end to end.
 */
export async function routedModule2(
  test: Pick<SATFullTest, 'testNumber' | 'format' | 'exam' | 'formVersion'>,
  moduleIndex: number,
  tier: SatRoute | null,
): Promise<SATTestSection> {
  const exam: SatExam = test.exam === 'psat' ? 'psat' : 'sat'
  const version = satFormVersion(test.formVersion)
  const base = await baseForm(test.testNumber, test.format, exam, version)
  const section = base.sections[moduleIndex]
  if (!section) throw new Error(`${exam.toUpperCase()} form ${test.format}:${test.testNumber} has no module ${moduleIndex}`)
  if (!tier || section.moduleNum !== 2) return section
  return memo(routedModuleCache, `${versionKey(version)}${examKey(exam)}${test.format}:${test.testNumber}:${moduleIndex}:${tier}`, () => {
    const used = new Set(base.sections.flatMap((s) => s.questions.map((q) => q.question)))
    // Passages from every OTHER module are off limits, so the routed Module 2
    // never repeats a passage the student already read.
    const usedPassageIds = new Set(
      base.sections
        .filter((_, i) => i !== moduleIndex)
        .flatMap((s) => s.questions.flatMap((q) => (q.passage ? [q.passage.id] : []))),
    )
    return regenerateModule2(section, routeDifficulty(tier), used, usedPassageIds, test.testNumber, exam, version)
  })
}

/**
 * Deterministic rebuild of exactly what the runner serves for a test number,
 * format and pair of Module 2 routes (null = the pre-built, unrouted module).
 * The server grades and the review page renders from this. Cached per path;
 * the returned form is shared, so treat it as read-only. `version` defaults to
 * the current form version; rebuilding a stored attempt must pass its own.
 */
export function buildSatForm(
  testNumber: number,
  format: SatTestFormat,
  rwTier: SatRoute | null = null,
  mathTier: SatRoute | null = null,
  version: SatFormVersion = CURRENT_SAT_FORM_VERSION,
): Promise<SATFullTest> {
  return buildExamForm('sat', testNumber, format, rwTier, mathTier, version)
}

/**
 * Deterministic rebuild of adaptive PSAT/NMSQT Practice Test N (1 to
 * PSAT_FORM_COUNT) for a pair of Module 2 routes — the PSAT counterpart of
 * buildSatForm, used by the runner, the server grader and the review page.
 * Always full length. Cached per path; treat the result as read-only.
 */
export function buildPsatForm(
  testNumber: number,
  rwTier: SatRoute | null = null,
  mathTier: SatRoute | null = null,
  version: SatFormVersion = CURRENT_SAT_FORM_VERSION,
): Promise<SATFullTest> {
  return buildExamForm('psat', testNumber, 'full', rwTier, mathTier, version)
}

/** buildSatForm / buildPsatForm by exam. */
export function buildExamForm(
  exam: SatExam,
  testNumber: number,
  format: SatTestFormat,
  rwTier: SatRoute | null = null,
  mathTier: SatRoute | null = null,
  version: SatFormVersion = CURRENT_SAT_FORM_VERSION,
): Promise<SATFullTest> {
  if (exam === 'psat') format = 'full'
  if (format !== 'full' || (!rwTier && !mathTier)) return baseForm(testNumber, format, exam, version)
  return memo(builtFormCache, `${versionKey(version)}${examKey(exam)}${format}:${testNumber}:${rwTier}:${mathTier}`, async () => {
    const base = await baseForm(testNumber, format, exam, version)
    const sections: SATTestSection[] = []
    for (let i = 0; i < base.sections.length; i++) {
      const s = base.sections[i]
      const tier = s.section === 'reading-writing' ? rwTier : mathTier
      sections.push(s.moduleNum === 2 ? await routedModule2(base, i, tier) : s)
    }
    return { ...base, sections }
  })
}

/**
 * Every id a form could draw: pool item ids from every domain slug plus
 * passage question ids. Used to check SAT_FORM_V2_EXCLUDED for stale ids.
 */
export async function satFormCandidateIds(): Promise<Set<string>> {
  const ids = new Set<string>()
  const slugs = [...Object.values(RW_DOMAIN_SLUGS), ...Object.values(MATH_DOMAIN_SLUGS)].flat()
  for (const slug of slugs) for (const q of await loadPool(slug)) if (q.id) ids.add(q.id)
  for (const p of SAT_PASSAGES) p.questions.forEach((_, i) => ids.add(`sat-passage-${p.id}-q${i}`))
  return ids
}

/**
 * Available practice tests with metadata. Each is a fixed form (see header).
 */
export const PRACTICE_TESTS = [
  { id: 1, title: 'Practice Test 1', description: 'Full-length Digital SAT simulation with all sections', difficulty: 'Standard' },
  { id: 2, title: 'Practice Test 2', description: 'Full-length Digital SAT simulation with all sections', difficulty: 'Standard' },
  { id: 3, title: 'Practice Test 3', description: 'Full-length Digital SAT simulation with all sections', difficulty: 'Standard' },
  { id: 4, title: 'Practice Test 4', description: 'Full-length Digital SAT simulation with all sections', difficulty: 'Standard' },
  { id: 5, title: 'Practice Test 5', description: 'Full-length Digital SAT simulation with all sections', difficulty: 'Standard' },
] as const

/** The adaptive PSAT/NMSQT practice forms (fixed; see buildPsatForm). */
export const PSAT_PRACTICE_TESTS = [
  { id: 1, title: 'PSAT Practice Test 1', description: 'Full-length adaptive Digital PSAT/NMSQT simulation' },
  { id: 2, title: 'PSAT Practice Test 2', description: 'Full-length adaptive Digital PSAT/NMSQT simulation' },
  { id: 3, title: 'PSAT Practice Test 3', description: 'Full-length adaptive Digital PSAT/NMSQT simulation' },
] as const
