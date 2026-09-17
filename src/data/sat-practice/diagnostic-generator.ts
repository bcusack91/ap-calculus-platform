/**
 * SAT Diagnostic Test Generator
 *
 * A 36-question / 30-minute assessment that samples across all SAT domains
 * to identify student strengths and weaknesses. Results direct students
 * to the topics where they need the most practice.
 *
 * Composition (per the calibration overhaul — see src/lib/sat-scoring.ts):
 *   Reading & Writing (18): 10 passage-based questions from the real passage
 *   bank, 5 hard-tier (700-800) items, 3 skill discretes from
 *   grammar/convention pools. Meta-strategy pools ("what does a best-evidence
 *   question ask?") are deliberately excluded — they measured familiarity with
 *   our lessons, not SAT reading.
 *   Math (18): 13 regular-tier items across the five math domains, 5
 *   hard-tier items (one per domain).
 * Hard-tier share ≈ 28% of each section, mirroring the real exam's gating of
 * the top band. Percent-correct on this mix feeds the calibrated (convex)
 * curve in sat-scoring.ts rather than the old linear 200 + pct*600 map.
 */

import { generateExitQuiz, type ExitQuizQuestion } from '../exit-quizzes'
import { satSectionScaled, projectionRange, type ScoreRange } from '@/lib/sat-scoring'
import { gradeGridIn } from '../sat-grid-in'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface DiagnosticQuestion extends ExitQuizQuestion {
  domain: string
  sourceSlug: string
  passage?: string
  /** Authored passage id, so a passage's questions stay one consecutive set. */
  passageId?: string
  section: 'reading-writing' | 'math'
  /** Student-produced response (grid-in): typed numeric answer, no options. */
  gridIn?: {
    correctAnswer: number
    acceptableAnswers: number[]
    tolerance: number
  }
}

export interface DiagnosticDomain {
  id: string
  name: string
  section: 'reading-writing' | 'math'
  slugs: string[]
  questionCount: number
}

export interface DiagnosticTestData {
  questions: DiagnosticQuestion[]
  domains: DiagnosticDomain[]
  totalQuestions: number
  timeLimitMinutes: number
  /** Which item tier this test was drawn from; affects score scaling. See
   *  SECTION_BANDS: 'hard' = all 700-800 tier, 'easy' = all easy/light-medium. */
  band?: DiagnosticBand
}

export interface DomainResult {
  domainId: string
  domainName: string
  section: 'reading-writing' | 'math'
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface DiagnosticResults {
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedScore: number
  /**
   * Honest projection window around estimatedScore (±40 for the full
   * diagnostic, ±50 for the shorter hard/easy modules). Additive — older
   * stored results won't have it; estimatedScore stays the trend value.
   */
  scoreRange?: ScoreRange
  rwScore: number
  mathScore: number
  domains: DomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: { slug: string; name: string; priority: 'high' | 'medium' | 'low' }[]
}

/* ------------------------------------------------------------------ */
/*  Diagnostic Domains                                                 */
/* ------------------------------------------------------------------ */

const DIAGNOSTIC_DOMAINS: DiagnosticDomain[] = [
  // Reading & Writing domains
  {
    id: 'comprehension',
    name: 'Reading Comprehension',
    section: 'reading-writing',
    slugs: ['sat-reading-comprehension', 'sat-central-ideas-details'],
    questionCount: 3,
  },
  {
    id: 'evidence',
    name: 'Evidence & Analysis',
    section: 'reading-writing',
    slugs: ['sat-command-evidence', 'sat-finding-textual-evidence'],
    questionCount: 2,
  },
  {
    id: 'vocabulary',
    name: 'Vocabulary in Context',
    section: 'reading-writing',
    slugs: ['sat-vocabulary-context'],
    questionCount: 2,
  },
  {
    id: 'grammar',
    name: 'Grammar & Conventions',
    section: 'reading-writing',
    slugs: ['sat-grammar-usage', 'sat-grammar-conventions', 'sat-subject-verb-agreement'],
    questionCount: 3,
  },
  {
    id: 'expression',
    name: 'Expression & Style',
    section: 'reading-writing',
    slugs: ['sat-effective-language-use', 'sat-conciseness-redundancy', 'sat-transitions-organization'],
    questionCount: 2,
  },
  {
    id: 'punctuation',
    name: 'Punctuation & Sentence Structure',
    section: 'reading-writing',
    slugs: ['sat-punctuation', 'sat-punctuation-commas-semicolons', 'sat-sentence-structure'],
    questionCount: 2,
  },
  // Math domains
  {
    id: 'algebra',
    name: 'Algebra',
    section: 'math',
    slugs: ['sat-linear-equations-inequalities', 'sat-systems-linear-equations', 'sat-linear-inequalities-graphs'],
    questionCount: 3,
  },
  {
    id: 'advanced-math',
    name: 'Advanced Math',
    section: 'math',
    slugs: ['sat-quadratic-equations', 'sat-polynomials-factoring', 'sat-polynomial-rational-expressions', 'sat-nonlinear-equations-functions'],
    questionCount: 3,
  },
  {
    id: 'functions',
    name: 'Functions & Exponentials',
    section: 'math',
    slugs: ['sat-functions', 'sat-exponential-functions', 'sat-exponents-radicals'],
    questionCount: 3,
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving & Data',
    section: 'math',
    slugs: ['sat-statistics-data-interpretation', 'sat-data-statistics', 'sat-probability-two-way-tables', 'sat-scatterplots-line-fit', 'sat-ratios-proportions-percents'],
    questionCount: 2,
  },
  {
    id: 'geometry',
    name: 'Geometry & Trigonometry',
    section: 'math',
    slugs: ['sat-geometry-basics', 'sat-geometry-trigonometry', 'sat-circles'],
    questionCount: 2,
  },
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function slugToName(slug: string): string {
  return slug
    .replace(/^sat-/, '')
    .replace(/-sat$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

/**
 * Maps diagnostic/skill slugs to the real Topic slug (served at /topics/[slug],
 * with lesson text + worked examples) so recommended topics LINK to a working
 * lesson page. Most diagnostic slugs are already real topic slugs and are left
 * unchanged; only the few that aren't a topic are mapped to their closest topic.
 * (The topic page then loads its interactive lesson via the registry's
 * slugAliases — see interactive-lessons/registry.ts.)
 */
const CANONICAL_SLUG_MAP: Record<string, string> = {
  // Reading & Writing — slugs without their own topic record → closest topic
  'sat-reading-comprehension': 'sat-central-ideas-details',
  'sat-command-evidence': 'sat-finding-textual-evidence',
  'sat-grammar-conventions': 'sat-grammar-usage',
  'sat-subject-verb-agreement': 'sat-grammar-usage',
  'sat-effective-language-use': 'sat-conciseness-redundancy',
  'sat-punctuation-commas-semicolons': 'sat-punctuation',
  // Math
  'sat-geometry-trigonometry': 'sat-geometry-basics',
}

function canonicalizeSlug(slug: string): string {
  return CANONICAL_SLUG_MAP[slug] ?? slug
}

/**
 * Approximate questions each diagnostic domain represents on a FULL digital
 * SAT (54 R&W + 44 Math = 98 scored questions), from the College Board
 * blueprint: R&W — Information & Ideas ~26%, Craft & Structure ~28%,
 * Expression of Ideas ~20%, Standard English Conventions ~26%; Math — Algebra
 * ~35%, Advanced Math ~35%, Problem-Solving & Data Analysis ~15%, Geometry &
 * Trigonometry ~15%. Our diagnostic domains don't map 1:1 onto the blueprint
 * (comprehension absorbs Craft & Structure's text-structure work; functions
 * straddles Algebra and Advanced Math), so these are sensible splits of the
 * official shares, not exact figures. Used to rank recommendations by how many
 * real-test questions a domain is worth.
 */
const FULL_TEST_WEIGHT: Record<string, number> = {
  comprehension: 11,
  evidence: 6,
  vocabulary: 8,
  grammar: 7,
  expression: 11,
  punctuation: 7,
  algebra: 12,
  'advanced-math': 12,
  functions: 6,
  'problem-solving': 7,
  geometry: 7,
}

/**
 * Rebuild recommendedTopics from stored domain results.
 * Used to reconstruct full DiagnosticResults from history entries
 * that may not have stored recommendedTopics. Domain-level only — the
 * per-question answers aren't stored, so this can't rank by actual misses the
 * way analyzeDiagnosticResults does.
 */
export function rebuildRecommendedTopics(
  domains: DomainResult[],
): DiagnosticResults['recommendedTopics'] {
  const MAX_RECOMMENDED = 5
  // Prioritize by full-test exam weight so highest-impact topics surface first.
  const examWeight = (id: string) => FULL_TEST_WEIGHT[id] ?? 0
  const recommendedTopics: DiagnosticResults['recommendedTopics'] = []
  const addedSlugs = new Set<string>()
  const weakDomains = [...domains.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomains = [...domains.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  for (const domain of weakDomains) {
    if (recommendedTopics.length >= MAX_RECOMMENDED) break
    const domainDef = DIAGNOSTIC_DOMAINS.find(d => d.id === domain.domainId)
    if (!domainDef) continue
    for (const slug of domainDef.slugs) {
      if (recommendedTopics.length >= MAX_RECOMMENDED) break
      const canonical = canonicalizeSlug(slug)
      if (!addedSlugs.has(canonical)) {
        addedSlugs.add(canonical)
        recommendedTopics.push({ slug: canonical, name: slugToName(canonical), priority: 'high' })
      }
    }
  }
  for (const domain of moderateDomains) {
    if (recommendedTopics.length >= MAX_RECOMMENDED) break
    const domainDef = DIAGNOSTIC_DOMAINS.find(d => d.id === domain.domainId)
    if (!domainDef) continue
    for (const slug of domainDef.slugs) {
      if (recommendedTopics.length >= MAX_RECOMMENDED) break
      const canonical = canonicalizeSlug(slug)
      if (!addedSlugs.has(canonical)) {
        addedSlugs.add(canonical)
        recommendedTopics.push({ slug: canonical, name: slugToName(canonical), priority: 'medium' })
      }
    }
  }
  return recommendedTopics
}

/* ------------------------------------------------------------------ */
/*  Generation                                                         */
/* ------------------------------------------------------------------ */

/* Composition targets — see the module header. 36 questions at ~50s each
 * keeps the diagnostic at 30 minutes. */
/*
 * Composition, weighted to the College Board blueprint while keeping the hard
 * share (~28%) the score curve was calibrated on:
 *   R&W 18 = 5 passage questions (Information & Ideas) + 8 regular discretes
 *            (3 Craft & Structure, 3 Conventions, 2 Expression) + 5 hard
 *            (2 C&S, 1 I&I, 1 Conventions, 1 Expression)
 *            → I&I ~33%, C&S ~28%, Conventions ~22%, Expression ~17%
 *            (was ~63% I&I and ~6% C&S).
 *   Math 18 = 9 multiple-choice + 4 grid-ins (student-produced response, ~22%)
 *            + 5 hard (one per domain) → Algebra 6, Advanced 6, PSDA 3, Geo 3.
 * Calibration note: grid-ins can't be guessed, so percent-correct on this mix
 * runs slightly below the all-multiple-choice mix the curve was anchored on;
 * recalibrate once new ground-truth score pairs arrive.
 */
const RW_PASSAGE_QUESTION_TARGET = 5
const DIAGNOSTIC_TIME_LIMIT_MINUTES = 30

/** Regular R&W discretes by diagnostic domain (medium tier). */
const RW_DISCRETE_PLAN: { domain: string; slugs: string[]; count: number }[] = [
  { domain: 'vocabulary', slugs: ['sat-vocabulary-context'], count: 3 },
  { domain: 'grammar', slugs: ['sat-grammar-usage', 'sat-subject-verb-agreement', 'sat-grammar-conventions'], count: 2 },
  { domain: 'punctuation', slugs: ['sat-sentence-structure', 'sat-punctuation-commas-semicolons', 'sat-punctuation'], count: 1 },
  // Meta-strategy pools ABOUT the SAT stay excluded; these measure the skill.
  { domain: 'expression', slugs: ['sat-conciseness-redundancy', 'sat-effective-language-use'], count: 2 },
]

/**
 * R&W hard-tier draws. Hard R&W items embed their own mini-passage in the
 * stem, so they are real reading tasks, not drills.
 */
const RW_HARD_PLAN: { slugs: string[]; count: number }[] = [
  { slugs: ['sat-vocabulary-context'], count: 2 },
  { slugs: ['sat-central-ideas-details', 'sat-command-evidence', 'sat-reading-comprehension'], count: 1 },
  { slugs: ['sat-punctuation', 'sat-sentence-structure'], count: 1 },
  { slugs: ['sat-transitions-organization', 'sat-effective-language-use'], count: 1 },
]

/** Regular multiple-choice Math items per diagnostic domain. */
const MATH_MCQ_COUNTS: Record<string, number> = {
  algebra: 3,
  'advanced-math': 1,
  functions: 2,
  'problem-solving': 1,
  geometry: 2,
}

/** Grid-ins by diagnostic domain and the grid-in generator categories that feed it. */
const MATH_GRID_IN_PLAN: { domain: string; categories: string[]; count: number }[] = [
  { domain: 'algebra', categories: ['Algebra'], count: 2 },
  { domain: 'advanced-math', categories: ['Advanced Math'], count: 1 },
  { domain: 'problem-solving', categories: ['Problem Solving', 'Statistics'], count: 1 },
]

const stemOf = (text: string) => text.replace(/\s+/g, ' ').trim().toLowerCase()

/** Short, stable fingerprint of a question's text (FNV-1a, base 36). */
function stemKey(text: string): string {
  let h = 2166136261
  const s = stemOf(text)
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return `stem:${(h >>> 0).toString(36)}`
}

/**
 * Keys to remember a question by across diagnostic attempts: its id AND a
 * fingerprint of its text. Some pools serve the same question text under
 * different ids (e.g. different option sets), which id-only tracking missed.
 * Passage prompts are generic ("Which choice best states the main idea of the
 * text?"), so a passage question is fingerprinted with its passage.
 */
export function seenKeysForQuestion(q: { id?: string; question: string; passage?: string }): string[] {
  return [...(q.id ? [q.id] : []), stemKey(q.passage ? `${q.passage}|${q.question}` : q.question)]
}

const isSeen = (exclude: Set<string>, q: { id?: string; question: string; passage?: string }) =>
  seenKeysForQuestion(q).some((key) => exclude.has(key))

/** Map a passage-bank skill tag to a diagnostic domain id. */
function passageSkillToDomain(skill: string): string {
  if (skill === 'evidence') return 'evidence'
  // Craft & Structure (words in context, text structure, cross-text) all count
  // toward the one C&S domain the diagnostic has, so the blueprint weights hold.
  if (skill === 'vocabulary-context' || skill === 'vocabulary-in-context' || skill === 'craft-and-structure') return 'vocabulary'
  return 'comprehension' // central-ideas, inference
}

/**
 * Draw `count` hard-tier items, cycling through slugs. Items the student has
 * already seen (by id) or that are already in this test (by stem) are skipped
 * while unseen ones remain.
 */
async function drawHardTierItems(
  slugs: string[],
  count: number,
  section: 'reading-writing' | 'math',
  exclude: Set<string> = new Set(),
  usedStems: Set<string> = new Set(),
): Promise<DiagnosticQuestion[]> {
  const { hardTierFor } = await import('../exit-quizzes/sat-hard-tier')
  const out: DiagnosticQuestion[] = []
  const ordered = shuffle(slugs)
  for (let pass = 0; out.length < count && pass < 3; pass++) {
    for (const slug of ordered) {
      if (out.length >= count) break
      const tier = hardTierFor(slug).filter((item) => !usedStems.has(stemOf(item.question)))
      if (tier.length === 0) continue
      const unseen = tier.filter((item) => !isSeen(exclude, item))
      const source = unseen.length > 0 ? unseen : tier
      const q = source[Math.floor(Math.random() * source.length)]
      usedStems.add(stemOf(q.question))
      if (out.some(existing => existing.question === q.question)) continue
      out.push({
        ...q,
        domain: domainIdForTopicSlug(slug) ?? slug,
        sourceSlug: slug,
        section,
      })
    }
  }
  return out
}

export async function generateDiagnosticTest(
  options: { excludeQuestionIds?: Set<string> } = {},
): Promise<DiagnosticTestData> {
  // Question ids the student has already seen on earlier diagnostics. Unseen
  // items are always preferred; seen ones are used only when a pool runs dry.
  const exclude = options.excludeQuestionIds ?? new Set<string>()
  const usedStems = new Set<string>()
  const rwQuestions: DiagnosticQuestion[] = []
  const mathQuestions: DiagnosticQuestion[] = []

  /** An unseen, not-yet-used item from a slug's pool at an explicit tier. */
  const drawOne = async (slug: string, tier: 'easy' | 'medium'): Promise<ExitQuizQuestion | null> => {
    try {
      // An explicit tier bypasses the exit-quiz hard-tier blend, so the hard
      // share stays at the ~28% the score curve assumes.
      const pool = (await generateExitQuiz(slug, 40, tier)).filter(
        (q) => q.difficulty !== 'hard' && !usedStems.has(stemOf(q.question)),
      )
      const pick = pool.find((q) => !isSeen(exclude, q)) ?? pool[0]
      if (pick) usedStems.add(stemOf(pick.question))
      return pick ?? null
    } catch {
      return null
    }
  }

  /* ---- R&W: passage sets ---------------------------------------------- */
  // The passage bank (~80 KB of prose) is dynamically imported so it is
  // code-split out of the /sat-diagnostic bundle. Whole passages only, and
  // passages the student has never seen come first.
  const { SAT_PASSAGES } = await import('../sat-passages')
  const passageQuestionId = (passageId: string, index: number) => `diag-passage-${passageId}-q${index}`
  const neverSeen = SAT_PASSAGES.filter((p) => !p.questions.some((_, i) => exclude.has(passageQuestionId(p.id, i))))
  const passageOrder = [...shuffle(neverSeen), ...shuffle(SAT_PASSAGES.filter((p) => !neverSeen.includes(p)))]
  // Passage slots are mostly Information & Ideas with one Craft & Structure
  // slot: C&S already gets the vocabulary discretes, so an unrestricted draw
  // over-weights it (C&S 5–9, I&I 2–6) and breaks the blueprint.
  const RW_CS_PASSAGE_QUESTIONS = 1
  const passageCap = { 'craft-structure': RW_CS_PASSAGE_QUESTIONS, 'information-ideas': RW_PASSAGE_QUESTION_TARGET - RW_CS_PASSAGE_QUESTIONS }
  const passageTaken = { 'craft-structure': 0, 'information-ideas': 0 }
  for (const p of passageOrder) {
    if (rwQuestions.length >= RW_PASSAGE_QUESTION_TARGET) break
    if (rwQuestions.length + p.questions.length > RW_PASSAGE_QUESTION_TARGET) continue
    // The whole passage takes its first question's domain (as in the full
    // tests), so the slot it fills is the domain its questions are scored in.
    const passageDomain = passageSkillToDomain(p.questions[0]?.skill ?? '')
    const bucket = passageDomain === 'vocabulary' ? 'craft-structure' : 'information-ideas'
    if (passageTaken[bucket] + p.questions.length > passageCap[bucket]) continue
    passageTaken[bucket] += p.questions.length
    p.questions.forEach((q, i) => {
      usedStems.add(stemOf(q.question))
      rwQuestions.push({
        id: passageQuestionId(p.id, i),
        question: q.question,
        options: q.options,
        correctIndex: q.correctAnswer,
        explanation: q.explanation,
        category: `passage-${p.genre}`,
        domain: passageDomain,
        sourceSlug: `passage-${p.genre}`,
        passage: p.text,
        passageId: p.id,
        section: 'reading-writing',
      })
    })
  }
  // Rare shortfall (no passage fits the last slot): top up with a comprehension item.
  while (rwQuestions.length < RW_PASSAGE_QUESTION_TARGET) {
    const q = await drawOne('sat-central-ideas-details', 'medium')
    if (!q) break
    rwQuestions.push({ ...q, domain: 'comprehension', sourceSlug: 'sat-central-ideas-details', section: 'reading-writing' })
  }

  /* ---- R&W: regular discretes ----------------------------------------- */
  for (const plan of RW_DISCRETE_PLAN) {
    const slugs = shuffle(plan.slugs)
    for (let k = 0; k < plan.count; k++) {
      for (let s = 0; s < slugs.length; s++) {
        const slug = slugs[(k + s) % slugs.length]
        const drawn = await drawOne(slug, 'medium')
        if (!drawn) continue
        // sourceSlug is the topic slug the item came from (recommendations use it).
        rwQuestions.push({ ...drawn, domain: plan.domain, sourceSlug: slug, section: 'reading-writing' })
        break
      }
    }
  }

  /* ---- R&W: hard tier -------------------------------------------------- */
  for (const plan of RW_HARD_PLAN) {
    rwQuestions.push(...await drawHardTierItems(plan.slugs, plan.count, 'reading-writing', exclude, usedStems))
  }

  /* ---- Math: regular multiple choice ----------------------------------- */
  for (const domain of DIAGNOSTIC_DOMAINS) {
    if (domain.section !== 'math') continue
    const want = MATH_MCQ_COUNTS[domain.id] ?? 0
    const slugs = shuffle(domain.slugs)
    for (let k = 0; k < want; k++) {
      for (let s = 0; s < slugs.length * 2; s++) {
        const slug = slugs[(k + s) % slugs.length]
        const drawn = await drawOne(slug, (k + s) % 2 === 0 ? 'easy' : 'medium')
        if (!drawn) continue
        mathQuestions.push({ ...drawn, domain: domain.id, sourceSlug: slug, section: 'math' })
        break
      }
    }
  }

  /* ---- Math: hard tier, one item per domain ---------------------------- */
  for (const domain of DIAGNOSTIC_DOMAINS) {
    if (domain.section !== 'math') continue
    mathQuestions.push(...await drawHardTierItems(shuffle(domain.slugs), 1, 'math', exclude, usedStems))
  }

  /* ---- Math: grid-ins (student-produced response) ---------------------- */
  // Easy/medium only. The values are procedural but the templates are few, so
  // a second attempt re-served the same problem about one time in four
  // (found by the cross-device no-repeat test); prefer problems whose text the
  // student has not seen, falling back to seen ones only if a category's pool
  // runs dry.
  const { generateGridInProblems } = await import('../sat-grid-in')
  const gridPool = shuffle(generateGridInProblems(60).filter((p) => p.difficulty !== 'hard'))
  const gridIns: DiagnosticQuestion[] = []
  for (const plan of MATH_GRID_IN_PLAN) {
    const inCategory = gridPool.filter((g) => plan.categories.includes(g.category))
    const unseen = inCategory.filter((g) => !isSeen(exclude, { question: g.question }))
    const picks = [...unseen, ...inCategory.filter((g) => !unseen.includes(g))].slice(0, plan.count)
    for (const p of picks) {
      gridIns.push({
        // Fingerprint of the FULL text: a 24-character prefix collided across
        // different values of one template ("In an arithmetic sequence, the
        // first term is 3…" vs "…is 2…"), so seen-tracking treated distinct
        // problems as one and the no-repeat test flaked.
        id: `diag-gridin-${stemKey(p.question).slice('stem:'.length)}`,
        question: p.question,
        options: [],
        correctIndex: -1,
        explanation: p.explanation,
        category: p.category,
        difficulty: p.difficulty,
        domain: plan.domain,
        sourceSlug: `grid-in-${p.category.toLowerCase().replace(/\s+/g, '-')}`,
        section: 'math',
        gridIn: { correctAnswer: p.correctAnswer, acceptableAnswers: p.acceptableAnswers, tolerance: p.tolerance },
      })
    }
  }

  // R&W: shuffle whole units so each passage's questions stay consecutive and
  // in authored order. Math: multiple choice shuffled, grid-ins at the end.
  const rwUnits: DiagnosticQuestion[][] = []
  const unitByPassage = new Map<string, DiagnosticQuestion[]>()
  for (const q of rwQuestions) {
    if (!q.passageId) {
      rwUnits.push([q])
      continue
    }
    let unit = unitByPassage.get(q.passageId)
    if (!unit) {
      unit = []
      unitByPassage.set(q.passageId, unit)
      rwUnits.push(unit)
    }
    unit.push(q)
  }
  const questions = [...shuffle(rwUnits).flat(), ...shuffle(mathQuestions), ...gridIns]

  return {
    questions,
    domains: DIAGNOSTIC_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: DIAGNOSTIC_TIME_LIMIT_MINUTES,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring & Analysis                                                 */
/* ------------------------------------------------------------------ */

/** Diagnostic domain id that studies the given topic slug (null if unknown). */
export function domainIdForTopicSlug(slug: string): string | null {
  const canonical = canonicalizeSlug(slug)
  for (const d of DIAGNOSTIC_DOMAINS) {
    if (d.slugs.includes(slug) || d.slugs.includes(canonical)) return d.id
  }
  return null
}

/** Read-only view of the diagnostic domains (for hard-track test data). */
export function listDiagnosticDomains(): DiagnosticDomain[] {
  return DIAGNOSTIC_DOMAINS
}

/** Which item tier a diagnostic attempt was drawn from. */
export type DiagnosticBand = 'regular' | 'hard' | 'easy'

/**
 * How a raw percentage maps onto one section's 200-800 scale, per tier.
 *
 * A percentage only means something relative to the difficulty of the items
 * that produced it.
 *
 * - `regular` — no linear band anymore: the full diagnostic's mixed-tier
 *   percentage runs through the calibrated convex curve in
 *   src/lib/sat-scoring.ts, anchored on real students' College Board scores.
 *   (The old `200 + pct*600` map ran ~60-130 points high mid-scale.)
 * - `hard` — every item is 700-800 tier, so missing 4 of 20 puts a student in
 *   the mid-700s, not the low 600s the regular mapping would report.
 * - `easy` — every item is easy or light-medium tier. Acing those proves
 *   command of the fundamentals, not a 1600: the ceiling is 550 per section
 *   (1100 total). This keeps the reported score honest, and it sets the Core
 *   Skills graduation bar of 950 total at about 79 percent correct — a real
 *   standard a student has to clear, and one they can actually reach.
 *   The hard and easy band mappings are deliberate and MUST NOT change (the
 *   Core Skills graduation bar depends on `easy` exactly as it is).
 */
const SECTION_BANDS: Record<Exclude<DiagnosticBand, 'regular'>, { base: number; span: number }> = {
  hard: { base: 600, span: 200 },
  easy: { base: 200, span: 350 },
}

export function analyzeDiagnosticResults(
  questions: DiagnosticQuestion[],
  answers: { questionIndex: number; selectedIndex: number | null; textValue?: string }[],
  /** Which item tier the questions came from, which decides how a raw
   *  percentage maps onto the 200-800 section scale. See SECTION_BANDS. */
  band: DiagnosticBand = 'regular',
): DiagnosticResults {
  // Score by domain
  const domainScores = new Map<string, { correct: number; total: number }>()

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i]
    const ans = answers.find(a => a.questionIndex === i)
    // Grid-ins are graded on the typed value; everything else on the choice.
    const isCorrect = q.gridIn
      ? gradeGridIn(q.gridIn, ans?.textValue ?? '')
      : ans?.selectedIndex === q.correctIndex

    const entry = domainScores.get(q.domain) ?? { correct: 0, total: 0 }
    entry.total++
    if (isCorrect) entry.correct++
    domainScores.set(q.domain, entry)
  }

  // Build domain results. Domains the test didn't sample are EXCLUDED — an
  // untested domain is unknown, not weak. (The regular diagnostic covers every
  // domain; hard-track modules sample a rotating subset, and treating the
  // unsampled ones as 0% once made a perfect hard run "weak everywhere".)
  const domains: DomainResult[] = DIAGNOSTIC_DOMAINS
    .map(d => {
      const scores = domainScores.get(d.id) ?? { correct: 0, total: 0 }
      const pct = scores.total > 0 ? Math.round((scores.correct / scores.total) * 100) : 0
      const level: DomainResult['level'] = pct >= 75 ? 'strong' : pct >= 50 ? 'moderate' : 'weak'
      return {
        domainId: d.id,
        domainName: d.name,
        section: d.section,
        correct: scores.correct,
        total: scores.total,
        percentage: pct,
        level,
      }
    })
    .filter(d => d.total > 0)

  // Overall stats
  const totalCorrect = domains.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domains.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Section scores
  const rwDomains = domains.filter(d => d.section === 'reading-writing')
  const mathDomains = domains.filter(d => d.section === 'math')
  const rwCorrect = rwDomains.reduce((s, d) => s + d.correct, 0)
  const rwTotal = rwDomains.reduce((s, d) => s + d.total, 0)
  const mathCorrect = mathDomains.reduce((s, d) => s + d.correct, 0)
  const mathTotal = mathDomains.reduce((s, d) => s + d.total, 0)

  const rwPct = rwTotal > 0 ? rwCorrect / rwTotal : 0
  const mathPct = mathTotal > 0 ? mathCorrect / mathTotal : 0

  let rwScore: number
  let mathScore: number
  if (band === 'regular') {
    // Calibrated convex curve — see src/lib/sat-scoring.ts for the anchors
    // and the two ground-truth student validations behind them.
    rwScore = satSectionScaled(rwPct)
    mathScore = satSectionScaled(mathPct)
  } else {
    const { base, span } = SECTION_BANDS[band]
    rwScore = Math.round(base + rwPct * span)
    mathScore = Math.round(base + mathPct * span)
  }

  // Categorize areas
  const weakAreas = domains.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domains.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domains.filter(d => d.level === 'strong').map(d => d.domainName)

  // Build recommended topics — the 5 highest-impact things to study, ranked by
  // expected payoff on a REAL test: (full-test weight of the domain) × (how
  // badly the student missed it). Driven by the actual questions missed, not
  // just domain averages.
  const MAX_RECOMMENDED = 5
  const examWeight = (id: string) => FULL_TEST_WEIGHT[id] ?? 0

  // Per-topic tallies from the student's answers. Passage questions carry a
  // pseudo sourceSlug ('passage-<genre>'), so route them to the topic their
  // domain studies before tallying. Blank answers count as misses — on the
  // real (no-penalty) SAT a blank is a lost question all the same.
  const PASSAGE_TOPIC: Record<string, string> = {
    evidence: 'sat-command-evidence',
    vocabulary: 'sat-vocabulary-context',
    comprehension: 'sat-reading-comprehension',
  }
  const tallies = new Map<string, { asked: number; missed: number; domainId: string }>()
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i]
    const raw = q.sourceSlug.startsWith('passage-') ? PASSAGE_TOPIC[q.domain] : q.sourceSlug
    if (!raw) continue
    const slug = canonicalizeSlug(raw)
    const t = tallies.get(slug) ?? { asked: 0, missed: 0, domainId: q.domain }
    t.asked++
    if (answers.find(a => a.questionIndex === i)?.selectedIndex !== q.correctIndex) t.missed++
    tallies.set(slug, t)
  }

  const domainById = new Map(domains.map(d => [d.domainId, d]))
  const domainMissRate = (id: string) => {
    const d = domainById.get(id)
    return d && d.total > 0 ? 1 - d.correct / d.total : 0
  }

  // A topic is only sampled 1–3 times, so shrink its raw miss rate toward the
  // domain's rate in proportion to how much evidence there is. gain ≈ how many
  // full-test questions studying this topic can win back.
  const candidates = [...tallies.entries()]
    .filter(([, t]) => t.missed > 0)
    .map(([slug, t]) => {
      const topicRate = t.missed / t.asked
      const shrink = t.asked / (t.asked + 1)
      const blended = shrink * topicRate + (1 - shrink) * domainMissRate(t.domainId)
      return {
        slug,
        domainId: t.domainId,
        gain: examWeight(t.domainId) * blended,
        priority: (domainById.get(t.domainId)?.level === 'weak' || topicRate === 1
          ? 'high'
          : 'medium') as 'high' | 'medium',
      }
    })
    .sort((a, b) => b.gain - a.gain)

  // At most 2 topics per domain, so a student who bombed everywhere gets a
  // list spanning their weak areas instead of 5 entries from the two
  // heaviest-weighted domains.
  const MAX_PER_DOMAIN = 2
  const perDomain = new Map<string, number>()
  const recommendedTopics: DiagnosticResults['recommendedTopics'] = []
  const addedSlugs = new Set<string>()
  for (const c of candidates) {
    if (recommendedTopics.length >= MAX_RECOMMENDED) break
    if (addedSlugs.has(c.slug)) continue
    if ((perDomain.get(c.domainId) ?? 0) >= MAX_PER_DOMAIN) continue
    addedSlugs.add(c.slug)
    perDomain.set(c.domainId, (perDomain.get(c.domainId) ?? 0) + 1)
    recommendedTopics.push({ slug: c.slug, name: slugToName(c.slug), priority: c.priority })
  }

  // If misses alone don't fill 5 slots (strong students), top up from weak
  // then moderate domains in full-test-weight order so the study list is
  // always complete.
  const weakDomainResults = [...domains.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domains.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  for (const { list, priority } of [
    { list: weakDomainResults, priority: 'high' as const },
    { list: moderateDomainResults, priority: 'medium' as const },
  ]) {
    for (const domain of list) {
      if (recommendedTopics.length >= MAX_RECOMMENDED) break
      const domainDef = DIAGNOSTIC_DOMAINS.find(d => d.id === domain.domainId)!
      for (const slug of domainDef.slugs) {
        if (recommendedTopics.length >= MAX_RECOMMENDED) break
        const canonical = canonicalizeSlug(slug)
        if (!addedSlugs.has(canonical)) {
          addedSlugs.add(canonical)
          recommendedTopics.push({ slug: canonical, name: slugToName(canonical), priority })
        }
      }
    }
  }

  const estimatedScore = rwScore + mathScore

  return {
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedScore,
    // A 36-question sample is 'medium' evidence (±40); the 20-question
    // hard/easy modules resolve less, so their window is wider (±50).
    scoreRange: projectionRange(estimatedScore, band === 'regular' ? 'medium' : 'low'),
    rwScore,
    mathScore,
    domains,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics,
  }
}
