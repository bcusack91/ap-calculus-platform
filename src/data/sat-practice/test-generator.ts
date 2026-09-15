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
 */

import { generateExitQuiz, type ExitQuizQuestion } from '../exit-quizzes'
import { SAT_PASSAGES, type ReadingPassage } from '../sat-passages'
import { generateGridInProblems, type GridInProblem } from '../sat-grid-in'
import { satSectionScaled } from '@/lib/sat-scoring'
import { arrangeInPassageBlocks } from '@/lib/mcat-diagnostic-order'

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
export const MODULE_2_ROUTING_THRESHOLD = 0.7

export function module2Tier(correct: number, total: number): ModuleDifficulty {
  if (total <= 0) return 'medium'
  return correct / total >= MODULE_2_ROUTING_THRESHOLD ? 'hard' : 'easy'
}

export type RWDomain = 'craft-structure' | 'information-ideas' | 'conventions' | 'expression'
export type MathDomain = 'algebra' | 'advanced' | 'problem-solving' | 'geometry'

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

export interface SATFullTest {
  testNumber: number
  format: 'full' | 'mini'
  sections: SATTestSection[]
  totalQuestions: number
  totalTimeSeconds: number
}

/* ------------------------------------------------------------------ */
/*  Blueprint                                                          */
/* ------------------------------------------------------------------ */

const RW_DOMAIN_SLUGS: Record<RWDomain, string[]> = {
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
  expression: ['sat-effective-language-use', 'sat-transitions-organization', 'sat-conciseness-redundancy'],
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

const MATH_DOMAIN_SLUGS: Record<MathDomain, string[]> = {
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

interface BuildContext {
  /** 0-based fixed form. */
  form: number
  rng: () => number
  usedStems: Set<string>
  usedPassageIds: Set<string>
  difficulty?: ModuleDifficulty
  /** Varies grid-in values between modules of one test. */
  seed: number
}

function newContext(testNumber: number, salt: string): BuildContext {
  const form = (((testNumber - 1) % PRACTICE_FORM_COUNT) + PRACTICE_FORM_COUNT) % PRACTICE_FORM_COUNT
  return {
    form,
    rng: mulberry32(hashString(`sat-${salt}-${testNumber}`)),
    usedStems: new Set(),
    usedPassageIds: new Set(),
    seed: hashString(`sat-grid-${salt}-${testNumber}`),
  }
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
      if (ctx.usedStems.has(stemOf(q.question))) continue
      candidates.push({ ...q, section, sourceSlug: slug, domain })
    }
  }
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
 * A passage's questions in authored order, each with a stable id. The whole
 * passage counts toward one domain (from its first question), so a passage
 * mixing skills still stays in one consecutive block within its domain group.
 */
function passageQuestions(p: ReadingPassage): SATTestQuestion[] {
  const domain = passageSkillDomain(p.questions[0]?.skill ?? '')
  return p.questions.map((q, i) => ({
    id: `sat-passage-${p.id}-q${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: `passage-${p.genre}`,
    section: 'reading-writing' as const,
    sourceSlug: `passage-${p.genre}`,
    domain,
    passage: { id: p.id, title: p.title, genre: p.genre, text: p.text },
  }))
}

/** Whole passages up to `maxQuestions`: this form's passages first, then others. */
function drawPassages(maxQuestions: number, ctx: BuildContext): SATTestQuestion[] {
  const available = SAT_PASSAGES.filter((p) => !ctx.usedPassageIds.has(p.id))
  const ordered = [
    ...shuffle(available.filter((p) => practiceFormOf(p.id) === ctx.form), ctx.rng),
    ...shuffle(available.filter((p) => practiceFormOf(p.id) !== ctx.form), ctx.rng),
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
  const generated = withSeededRandom(ctx.seed, () => generateGridInProblems(60))
  const gridPool = gridInsToTestQuestions(generated, String(ctx.seed)).filter(
    (q) => !ctx.usedStems.has(stemOf(q.question)),
  )
  const gridIns: SATTestQuestion[] = []
  const takeGrid = (domain: MathDomain | null, n: number) => {
    for (const q of gridPool) {
      if (n <= 0) break
      if (gridIns.includes(q) || (domain && q.domain !== domain)) continue
      if (ctx.difficulty === 'hard' && q.difficulty === 'easy') continue
      gridIns.push(q)
      ctx.usedStems.add(stemOf(q.question))
      n--
    }
  }
  const gridTotal = Object.values(GRID_IN_QUOTA).reduce((a, b) => a + b, 0)
  for (const [domain, n] of Object.entries(GRID_IN_QUOTA) as [MathDomain, number][]) takeGrid(domain, n)
  if (gridIns.length < gridTotal) takeGrid(null, gridTotal - gridIns.length)

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
export async function generateFullTest(testNumber: number): Promise<SATFullTest> {
  // One context across all four modules: no passage or question repeats
  // within the test.
  const ctx = newContext(testNumber, 'full')
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
  }
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
): Promise<SATTestSection> {
  const ctx: BuildContext = {
    ...newContext(testNumber, `m2-${section.section}-${tier}`),
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
export async function generateMiniTest(testNumber: number): Promise<SATFullTest> {
  const ctx = newContext(testNumber, 'mini')
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
  }
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
