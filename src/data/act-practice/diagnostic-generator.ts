/**
 * ACT Diagnostic Test Generator
 *
 * A ~40-question assessment that dynamically samples from exit quiz pools
 * across all 4 ACT sections (English, Math, Reading, Science) to identify
 * student strengths and weaknesses. Supports 10 alternate forms (1–10) for retakes.
 *
 * Follows the same pattern as the MCAT and SAT diagnostic generators:
 *   1. Loads questions dynamically from exit quiz banks
 *   2. Balances difficulty across domains
 *   3. Scores per-section and maps to ACT composite (1–36)
 *   4. Recommends specific topics based on missed questions
 */

export const TOTAL_FORMS = 10

import { generateExitQuiz, type ExitQuizQuestion } from '../exit-quizzes'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface ACTDiagnosticQuestion extends ExitQuizQuestion {
  domain: string
  section: 'english' | 'math' | 'reading' | 'science'
  sourceSlug: string
  difficulty?: 'easy' | 'medium' | 'hard'
}

export interface ACTDiagnosticDomain {
  id: string
  name: string
  section: 'english' | 'math' | 'reading' | 'science'
  slugs: string[]
  questionCount: number
  difficultyMix?: { easy: number; medium: number; hard: number }
}

export interface ACTDiagnosticTestData {
  form: number
  questions: ACTDiagnosticQuestion[]
  domains: ACTDiagnosticDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface ACTDomainResult {
  domainId: string
  domainName: string
  section: 'english' | 'math' | 'reading' | 'science'
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface ACTRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface ACTDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedComposite: number // 1-36
  englishScore: number       // 1-36
  mathScore: number          // 1-36
  readingScore: number       // 1-36
  scienceScore: number       // 1-36
  domains: ACTDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: ACTRecommendedTopic[]
}

export type ACTDiagnosticGenerationOptions = {
  form?: number
  excludeQuestionIds?: Set<string>
}

/* ------------------------------------------------------------------ */
/*  Diagnostic Domains                                                 */
/* ------------------------------------------------------------------ */

const DIAGNOSTIC_DOMAINS: ACTDiagnosticDomain[] = [
  // English
  {
    id: 'grammar-usage',
    name: 'Grammar & Usage',
    section: 'english',
    slugs: ['act-english-grammar-act', 'act-english-grammar-usage'],
    questionCount: 4,
    difficultyMix: { easy: 1, medium: 2, hard: 1 },
  },
  {
    id: 'punctuation',
    name: 'Punctuation',
    section: 'english',
    slugs: ['act-english-punctuation-act', 'act-english-punctuation'],
    questionCount: 3,
    difficultyMix: { easy: 1, medium: 1, hard: 1 },
  },
  {
    id: 'sentence-structure',
    name: 'Sentence Structure',
    section: 'english',
    slugs: ['act-english-strategy-act', 'act-english-sentence-structure'],
    questionCount: 3,
    difficultyMix: { easy: 1, medium: 1, hard: 1 },
  },
  {
    id: 'rhetorical-skills',
    name: 'Rhetorical Skills',
    section: 'english',
    slugs: ['act-english-rhetorical-act', 'act-english-rhetorical-skills'],
    questionCount: 2,
    difficultyMix: { easy: 0, medium: 1, hard: 1 },
  },
  // Math
  {
    id: 'pre-algebra',
    name: 'Pre-Algebra & Elementary Algebra',
    section: 'math',
    slugs: ['act-pre-algebra-basics-act', 'act-math-pre-algebra', 'act-math-elementary-algebra'],
    questionCount: 3,
    difficultyMix: { easy: 1, medium: 1, hard: 1 },
  },
  {
    id: 'algebra',
    name: 'Algebra & Intermediate Algebra',
    section: 'math',
    slugs: ['act-algebra-equations-act', 'act-intermediate-algebra-act', 'act-math-intermediate-algebra'],
    questionCount: 3,
    difficultyMix: { easy: 0, medium: 2, hard: 1 },
  },
  {
    id: 'geometry',
    name: 'Coordinate & Plane Geometry',
    section: 'math',
    slugs: ['act-coordinate-geometry-act', 'act-plane-geometry-act', 'act-math-coordinate-geometry', 'act-math-plane-geometry'],
    questionCount: 3,
    difficultyMix: { easy: 1, medium: 1, hard: 1 },
  },
  {
    id: 'trig-stats',
    name: 'Trigonometry & Statistics',
    section: 'math',
    slugs: ['act-trigonometry-act', 'act-statistics-probability-act'],
    questionCount: 3,
    difficultyMix: { easy: 0, medium: 2, hard: 1 },
  },
  // Reading
  {
    id: 'reading-comp',
    name: 'Main Ideas & Inference',
    section: 'reading',
    slugs: ['act-reading-main-ideas-act', 'act-reading-prose-fiction', 'act-reading-social-science'],
    questionCount: 4,
    difficultyMix: { easy: 1, medium: 2, hard: 1 },
  },
  {
    id: 'reading-analysis',
    name: 'Passage Analysis & Strategy',
    section: 'reading',
    slugs: ['act-reading-passage-types-act', 'act-reading-strategy-act', 'act-reading-humanities', 'act-reading-natural-science', 'act-reading-paired-passages'],
    questionCount: 4,
    difficultyMix: { easy: 1, medium: 1, hard: 2 },
  },
  // Science
  {
    id: 'data-representation',
    name: 'Data Representation',
    section: 'science',
    slugs: ['act-science-data-act', 'act-science-data-representation'],
    questionCount: 3,
    difficultyMix: { easy: 1, medium: 1, hard: 1 },
  },
  {
    id: 'research-experiments',
    name: 'Research Summaries & Experiments',
    section: 'science',
    slugs: ['act-science-experiments-act', 'act-science-research-summaries', 'act-science-experimental-design'],
    questionCount: 3,
    difficultyMix: { easy: 0, medium: 2, hard: 1 },
  },
  {
    id: 'science-reasoning',
    name: 'Scientific Reasoning & Viewpoints',
    section: 'science',
    slugs: ['act-science-reasoning-act', 'act-science-conflicting-viewpoints', 'act-science-scientific-reasoning'],
    questionCount: 2,
    difficultyMix: { easy: 0, medium: 1, hard: 1 },
  },
]

export { DIAGNOSTIC_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function mulberry32(seed: number): () => number {
  return () => { let t = (seed += 0x6d2b79f5); t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
}

function shuffle<T>(items: T[], rng: () => number = Math.random): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function pickRandom<T>(items: T[], count: number, rng: () => number = Math.random): T[] {
  return shuffle(items, rng).slice(0, Math.min(count, items.length))
}

function hashString(input: string): string {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash).toString(36)
}

function inferDifficulty(q: ACTDiagnosticQuestion): 'easy' | 'medium' | 'hard' {
  if (q.difficulty) return q.difficulty
  if (q.question.length > 200) return 'hard'
  if (q.question.length > 120) return 'medium'
  return 'easy'
}

function selectByDifficulty(
  pool: ACTDiagnosticQuestion[],
  count: number,
  mix?: { easy: number; medium: number; hard: number },
  rng: () => number = Math.random,
): ACTDiagnosticQuestion[] {
  if (!mix) return pickRandom(pool, count, rng)

  const easy = pool.filter(q => inferDifficulty(q) === 'easy')
  const medium = pool.filter(q => inferDifficulty(q) === 'medium')
  const hard = pool.filter(q => inferDifficulty(q) === 'hard')

  const selected = [
    ...pickRandom(easy, mix.easy, rng),
    ...pickRandom(medium, mix.medium, rng),
    ...pickRandom(hard, mix.hard, rng),
  ]

  if (selected.length < count) {
    const usedIds = new Set(selected.map(q => q.id))
    const remaining = pool.filter(q => !usedIds.has(q.id))
    selected.push(...pickRandom(remaining, count - selected.length, rng))
  }

  return dedupeQuestions(selected).slice(0, count)
}

function dedupeQuestions(questions: ACTDiagnosticQuestion[]): ACTDiagnosticQuestion[] {
  const byId = new Map<string, ACTDiagnosticQuestion>()
  for (const q of questions) {
    if (!byId.has(q.id)) byId.set(q.id, q)
  }
  return Array.from(byId.values())
}

function slugToName(slug: string): string {
  return slug
    .replace(/^act-/, '')
    .replace(/-act$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

/**
 * Maps alternative exit quiz slugs to canonical topic slugs
 * that have entrance quizzes and interactive lessons registered.
 */
const CANONICAL_SLUG_MAP: Record<string, string> = {
  'act-english-grammar-usage': 'act-english-grammar-act',
  'act-english-punctuation': 'act-english-punctuation-act',
  'act-english-sentence-structure': 'act-english-strategy-act',
  'act-english-rhetorical-skills': 'act-english-rhetorical-act',
  'act-english-strategy': 'act-english-strategy-act',
  'act-math-pre-algebra': 'act-pre-algebra-basics-act',
  'act-math-elementary-algebra': 'act-algebra-equations-act',
  'act-math-intermediate-algebra': 'act-intermediate-algebra-act',
  'act-math-coordinate-geometry': 'act-coordinate-geometry-act',
  'act-math-plane-geometry': 'act-plane-geometry-act',
  'act-reading-prose-fiction': 'act-reading-main-ideas-act',
  'act-reading-social-science': 'act-reading-passage-types-act',
  'act-reading-humanities': 'act-reading-passage-types-act',
  'act-reading-natural-science': 'act-reading-science-tips-act',
  'act-reading-paired-passages': 'act-reading-strategy-act',
  'act-science-data-representation': 'act-science-data-act',
  'act-science-research-summaries': 'act-science-experiments-act',
  'act-science-experimental-design': 'act-science-experiments-act',
  'act-science-conflicting-viewpoints': 'act-science-reasoning-act',
  'act-science-scientific-reasoning': 'act-science-reasoning-act',
}

function canonicalizeSlug(slug: string): string {
  return CANONICAL_SLUG_MAP[slug] ?? slug
}

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export async function generateACTDiagnosticTest(
  options: ACTDiagnosticGenerationOptions = {},
): Promise<ACTDiagnosticTestData> {
  const form = options.form ?? 1
  const rng = mulberry32(form * 7919)
  const excludeIds = options.excludeQuestionIds ?? new Set<string>()
  const allQuestions: ACTDiagnosticQuestion[] = []

  for (const domain of DIAGNOSTIC_DOMAINS) {
    const domainPool: ACTDiagnosticQuestion[] = []
    const shuffledSlugs = shuffle(domain.slugs, rng)

    for (const slug of shuffledSlugs) {
      try {
        const questionsPerSlug = Math.max(Math.ceil((domain.questionCount + 4) / domain.slugs.length), 6)
        const pool = await generateExitQuiz(slug, questionsPerSlug)
        const tagged: ACTDiagnosticQuestion[] = pool.map(q => {
          const raw = q as unknown as Record<string, unknown>
          const correctIndex = (raw.correctIndex ?? raw.correctAnswer ?? 0) as number
          const id = typeof raw.id === 'string' && raw.id.length > 0
            ? `${domain.id}-${slug}-${raw.id}`
            : `${domain.id}-${slug}-${hashString(q.question)}`
          return {
            id,
            question: q.question,
            options: q.options,
            correctIndex,
            explanation: q.explanation,
            category: q.category ?? domain.name,
            domain: domain.id,
            section: domain.section,
            sourceSlug: slug,
            difficulty: raw.difficulty === 'easy' || raw.difficulty === 'medium' || raw.difficulty === 'hard'
              ? raw.difficulty
              : undefined,
          }
        })
        domainPool.push(...tagged)
      } catch {
        // Skip unavailable pools
      }
    }

    // Filter out previously seen questions
    const unseen = domainPool.filter(q => !excludeIds.has(q.id))
    const poolToSample = unseen.length >= domain.questionCount ? unseen : domainPool

    // Select with difficulty balancing
    const selected = selectByDifficulty(poolToSample, domain.questionCount, domain.difficultyMix, rng)
    allQuestions.push(...selected)
  }

  // English first, then Math, Reading, Science — each section shuffled internally
  const sectionOrder: ACTDiagnosticQuestion['section'][] = ['english', 'math', 'reading', 'science']
  const ordered: ACTDiagnosticQuestion[] = []
  for (const section of sectionOrder) {
    ordered.push(...shuffle(allQuestions.filter(q => q.section === section), rng))
  }

  return {
    form,
    questions: ordered,
    domains: DIAGNOSTIC_DOMAINS,
    totalQuestions: ordered.length,
    timeLimitMinutes: 40,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

function percentToACTScore(pct: number): number {
  // Map percentage to ACT 1-36 scale
  if (pct >= 97) return 36
  if (pct >= 93) return 34
  if (pct >= 90) return 33
  if (pct >= 87) return 32
  if (pct >= 83) return 31
  if (pct >= 80) return 30
  if (pct >= 77) return 29
  if (pct >= 73) return 28
  if (pct >= 70) return 27
  if (pct >= 67) return 26
  if (pct >= 63) return 25
  if (pct >= 60) return 24
  if (pct >= 57) return 23
  if (pct >= 53) return 22
  if (pct >= 50) return 21
  if (pct >= 47) return 20
  if (pct >= 43) return 19
  if (pct >= 40) return 18
  if (pct >= 37) return 17
  if (pct >= 33) return 16
  if (pct >= 30) return 15
  if (pct >= 25) return 14
  if (pct >= 20) return 13
  if (pct >= 15) return 12
  if (pct >= 10) return 11
  return 10
}

export function scoreACTDiagnostic(
  form: number,
  questions: ACTDiagnosticQuestion[],
  answers: Record<number, number>,
): ACTDiagnosticResults {
  const domainResults: ACTDomainResult[] = DIAGNOSTIC_DOMAINS.map(domain => {
    const domainQs = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.domain === domain.id)

    const correct = domainQs.filter(({ q, i }) => {
      const answer = answers[i]
      const correctAnswer = (q as unknown as Record<string, unknown>).correctIndex as number
        ?? (q as unknown as Record<string, unknown>).correctAnswer as number
        ?? 0
      return answer !== undefined && answer === correctAnswer
    }).length

    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' =
      percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'

    return {
      domainId: domain.id,
      domainName: domain.name,
      section: domain.section,
      correct,
      total,
      percentage,
      level,
    }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Per-section ACT scores (1-36)
  function sectionScore(sectionId: string): number {
    const sectionDomains = domainResults.filter(d => d.section === sectionId)
    const correct = sectionDomains.reduce((s, d) => s + d.correct, 0)
    const total = sectionDomains.reduce((s, d) => s + d.total, 0)
    const pct = total > 0 ? (correct / total) * 100 : 0
    return percentToACTScore(pct)
  }

  const englishScore = sectionScore('english')
  const mathScore = sectionScore('math')
  const readingScore = sectionScore('reading')
  const scienceScore = sectionScore('science')
  const estimatedComposite = Math.round((englishScore + mathScore + readingScore + scienceScore) / 4)

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Build recommended topics from missed questions (canonicalized to slugs with entrance quizzes)
  // Cap at 5 and prioritize by exam weight (questionCount).
  const MAX_RECOMMENDED = 5
  const examWeight = (id: string) => DIAGNOSTIC_DOMAINS.find(d => d.id === id)?.questionCount ?? 0
  const recommendedTopics: ACTRecommendedTopic[] = []
  const addedSlugs = new Set<string>()
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))

  for (const domain of weakDomainResults) {
    if (recommendedTopics.length >= MAX_RECOMMENDED) break
    const domainDef = DIAGNOSTIC_DOMAINS.find(d => d.id === domain.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain !== domain.domainId) return
      const correctAnswer = (q as unknown as Record<string, unknown>).correctIndex as number
        ?? (q as unknown as Record<string, unknown>).correctAnswer as number
        ?? 0
      if (answers[i] === undefined || answers[i] !== correctAnswer) {
        missedSlugs.add(canonicalizeSlug(q.sourceSlug))
      }
    })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.slugs.slice(0, 2).map(canonicalizeSlug)
    for (const slug of slugs) {
      if (recommendedTopics.length < MAX_RECOMMENDED && !addedSlugs.has(slug)) {
        addedSlugs.add(slug)
        recommendedTopics.push({ slug, name: slugToName(slug), domainId: domain.domainId, priority: 'high' })
      }
    }
  }

  for (const domain of moderateDomainResults) {
    if (recommendedTopics.length >= MAX_RECOMMENDED) break
    const domainDef = DIAGNOSTIC_DOMAINS.find(d => d.id === domain.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain !== domain.domainId) return
      const correctAnswer = (q as unknown as Record<string, unknown>).correctIndex as number
        ?? (q as unknown as Record<string, unknown>).correctAnswer as number
        ?? 0
      if (answers[i] === undefined || answers[i] !== correctAnswer) {
        missedSlugs.add(canonicalizeSlug(q.sourceSlug))
      }
    })
    const slug = missedSlugs.size > 0 ? [...missedSlugs][0] : canonicalizeSlug(domainDef.slugs[0])
    if (slug && !addedSlugs.has(slug)) {
      addedSlugs.add(slug)
      recommendedTopics.push({ slug, name: slugToName(slug), domainId: domain.domainId, priority: 'medium' })
    }
  }

  return {
    form,
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedComposite,
    englishScore,
    mathScore,
    readingScore,
    scienceScore,
    domains: domainResults,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics: recommendedTopics.slice(0, MAX_RECOMMENDED),
  }
}

/* ------------------------------------------------------------------ */
/*  Form alternation helper                                            */
/* ------------------------------------------------------------------ */

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}
