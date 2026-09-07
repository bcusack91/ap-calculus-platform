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

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface DiagnosticQuestion extends ExitQuizQuestion {
  domain: string
  sourceSlug: string
  passage?: string
  section: 'reading-writing' | 'math'
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
const RW_PASSAGE_QUESTION_TARGET = 10
const RW_HARD_COUNT = 5
const RW_DISCRETE_COUNT = 3
// Math: 13 regular (DIAGNOSTIC_DOMAINS questionCounts) + 5 hard (1 per domain)
const DIAGNOSTIC_TIME_LIMIT_MINUTES = 30

/**
 * R&W hard-tier slugs available in SAT_HARD_TIER. Hard R&W items embed their
 * own mini-passage in the stem, so they are real reading tasks, not drills.
 */
const RW_HARD_SLUGS = [
  'sat-central-ideas-details',
  'sat-command-evidence',
  'sat-vocabulary-context',
  'sat-reading-comprehension',
  'sat-punctuation',
  'sat-sentence-structure',
  'sat-transitions-organization',
  'sat-effective-language-use',
]

/**
 * Real-skill discrete pools per writing domain, in preference order. Pools of
 * meta-strategy questions ABOUT the SAT (command-evidence, finding-textual-
 * evidence, the "what do transitions signal?" style items) are excluded — the
 * diagnostic must measure the skill, not familiarity with our lesson copy.
 */
const RW_DISCRETE_POOLS: { domain: string; slugs: string[] }[] = [
  { domain: 'grammar', slugs: ['sat-grammar-usage', 'sat-subject-verb-agreement', 'sat-grammar-conventions'] },
  { domain: 'punctuation', slugs: ['sat-sentence-structure', 'sat-punctuation-commas-semicolons', 'sat-punctuation'] },
  { domain: 'expression', slugs: ['sat-conciseness-redundancy', 'sat-effective-language-use'] },
]

/** Map a passage-bank skill tag to a diagnostic domain id. */
function passageSkillToDomain(skill: string): string {
  if (skill === 'evidence') return 'evidence'
  if (skill === 'vocabulary-context' || skill === 'vocabulary-in-context') return 'vocabulary'
  return 'comprehension' // central-ideas, inference, craft-and-structure
}

/** Draw `count` hard-tier items, one per slug, cycling if slugs run short. */
async function drawHardTierItems(
  slugs: string[],
  count: number,
  section: 'reading-writing' | 'math',
): Promise<DiagnosticQuestion[]> {
  const { hardTierFor } = await import('../exit-quizzes/sat-hard-tier')
  const out: DiagnosticQuestion[] = []
  const ordered = shuffle(slugs)
  for (let pass = 0; out.length < count && pass < 3; pass++) {
    for (const slug of ordered) {
      if (out.length >= count) break
      const tier = hardTierFor(slug)
      if (tier.length === 0) continue
      const q = tier[Math.floor(Math.random() * tier.length)]
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

export async function generateDiagnosticTest(): Promise<DiagnosticTestData> {
  const rwQuestions: DiagnosticQuestion[] = []
  const mathQuestions: DiagnosticQuestion[] = []

  /* ---- R&W: passage-based majority ------------------------------------ */
  // The passage bank (~80 KB of prose) is dynamically imported here so it is
  // code-split out of the client bundle for /sat-diagnostic and only fetched
  // when the diagnostic is actually generated. Passages carry 1-2 questions
  // each, so over-draw and stop once the target is met (~6-9 passages).
  const { getBalancedPassages } = await import('../sat-passages')
  const passages = getBalancedPassages(RW_PASSAGE_QUESTION_TARGET)
  for (const p of passages) {
    if (rwQuestions.length >= RW_PASSAGE_QUESTION_TARGET) break
    for (const q of p.questions) {
      if (rwQuestions.length >= RW_PASSAGE_QUESTION_TARGET) break
      rwQuestions.push({
        id: `diag-passage-${p.genre}-${q.question.slice(0, 20).replace(/\W/g, '')}`,
        question: q.question,
        options: q.options,
        correctIndex: q.correctAnswer,
        explanation: q.explanation,
        category: `passage-${p.genre}`,
        domain: passageSkillToDomain(q.skill),
        sourceSlug: `passage-${p.genre}`,
        passage: p.text,
        section: 'reading-writing',
      })
    }
  }

  /* ---- R&W: writing-skill discretes ----------------------------------- */
  // One real convention/expression item per writing domain, at the medium
  // tier (easy/medium fallback lives in the pool generator; 'medium' also
  // skips the exit-quiz hard-tier blend so the hard share stays controlled).
  for (const pool of shuffle(RW_DISCRETE_POOLS).slice(0, RW_DISCRETE_COUNT)) {
    for (const slug of shuffle(pool.slugs)) {
      try {
        const [q] = await generateExitQuiz(slug, 1, 'medium')
        if (!q) continue
        rwQuestions.push({ ...q, domain: pool.domain, sourceSlug: slug, section: 'reading-writing' })
        break
      } catch {
        // Pool unavailable — try the next slug for this domain
      }
    }
  }

  /* ---- R&W: hard tier -------------------------------------------------- */
  rwQuestions.push(...await drawHardTierItems(RW_HARD_SLUGS, RW_HARD_COUNT, 'reading-writing'))

  /* ---- Math: regular tier across all five domains ---------------------- */
  // One easy + one medium draw per slug. Requesting an explicit tier bypasses
  // the exit-quiz generator's automatic ~25% hard-tier blend, so the hard
  // share stays at the ~28% the score curve assumes — added explicitly below,
  // not leaked here.
  for (const domain of DIAGNOSTIC_DOMAINS) {
    if (domain.section !== 'math') continue
    const domainQuestions: DiagnosticQuestion[] = []
    for (const slug of shuffle(domain.slugs)) {
      for (const tier of ['easy', 'medium'] as const) {
        try {
          const [q] = await generateExitQuiz(slug, 1, tier)
          if (q) domainQuestions.push({ ...q, domain: domain.id, sourceSlug: slug, section: 'math' })
        } catch {
          // Skip unavailable pools
        }
      }
    }
    // Drop any hard item a thin pool's tier-fallback let through, unless we
    // need it to fill the domain's count.
    const nonHard = shuffle(domainQuestions.filter(q => q.difficulty !== 'hard'))
    const hardLeftovers = shuffle(domainQuestions.filter(q => q.difficulty === 'hard'))
    mathQuestions.push(...[...nonHard, ...hardLeftovers].slice(0, domain.questionCount))
  }

  /* ---- Math: hard tier, one item per domain ---------------------------- */
  for (const domain of DIAGNOSTIC_DOMAINS) {
    if (domain.section !== 'math') continue
    const drawn = await drawHardTierItems(shuffle(domain.slugs), 1, 'math')
    for (const q of drawn) {
      if (!mathQuestions.some(existing => existing.question === q.question)) mathQuestions.push(q)
    }
  }

  // R&W first, then Math — each section shuffled internally
  const questions = [...shuffle(rwQuestions), ...shuffle(mathQuestions)]

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
  answers: { questionIndex: number; selectedIndex: number | null }[],
  /** Which item tier the questions came from, which decides how a raw
   *  percentage maps onto the 200-800 section scale. See SECTION_BANDS. */
  band: DiagnosticBand = 'regular',
): DiagnosticResults {
  // Score by domain
  const domainScores = new Map<string, { correct: number; total: number }>()

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i]
    const ans = answers.find(a => a.questionIndex === i)
    const isCorrect = ans?.selectedIndex === q.correctIndex

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
