/**
 * SAT Diagnostic Test Generator
 *
 * A short (~30 question) assessment that samples across all SAT domains
 * to identify student strengths and weaknesses. Results direct students
 * to the topics where they need the most practice.
 */

import { generateExitQuiz, type ExitQuizQuestion } from '../exit-quizzes'
import { getBalancedPassages } from '../sat-passages'

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
    name: 'Heart of Algebra',
    section: 'math',
    slugs: ['sat-linear-equations-inequalities', 'sat-systems-linear-equations', 'sat-linear-inequalities-graphs'],
    questionCount: 4,
  },
  {
    id: 'advanced-math',
    name: 'Advanced Math',
    section: 'math',
    slugs: ['sat-quadratic-equations', 'sat-polynomials-factoring', 'sat-polynomial-rational-expressions', 'sat-nonlinear-equations-functions'],
    questionCount: 4,
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
    questionCount: 3,
  },
  {
    id: 'geometry',
    name: 'Geometry & Trigonometry',
    section: 'math',
    slugs: ['sat-geometry-basics', 'sat-geometry-trigonometry', 'sat-circles', 'sat-complex-numbers'],
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
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

/* ------------------------------------------------------------------ */
/*  Generation                                                         */
/* ------------------------------------------------------------------ */

export async function generateDiagnosticTest(): Promise<DiagnosticTestData> {
  const rwQuestions: DiagnosticQuestion[] = []
  const mathQuestions: DiagnosticQuestion[] = []

  for (const domain of DIAGNOSTIC_DOMAINS) {
    const domainQuestions: DiagnosticQuestion[] = []
    const shuffledSlugs = shuffle(domain.slugs)

    for (const slug of shuffledSlugs) {
      try {
        const generated = await generateExitQuiz(slug, 2)
        for (const q of generated) {
          domainQuestions.push({
            ...q,
            domain: domain.id,
            sourceSlug: slug,
            section: domain.section,
          })
        }
      } catch {
        // Skip unavailable pools
      }
    }

    // Take the requested number from the pool
    const selected = shuffle(domainQuestions).slice(0, domain.questionCount)
    if (domain.section === 'reading-writing') {
      rwQuestions.push(...selected)
    } else {
      mathQuestions.push(...selected)
    }
  }

  // Add 4 passage-based reading questions for comprehension & evidence domains
  const passages = getBalancedPassages(4)
  for (const p of passages) {
    for (const q of p.questions) {
      const domain = q.skill === 'evidence' ? 'evidence'
        : q.skill === 'vocabulary-context' ? 'vocabulary'
        : q.skill === 'inference' ? 'comprehension'
        : 'comprehension'
      rwQuestions.push({
        id: `diag-passage-${p.genre}-${q.question.slice(0, 20).replace(/\W/g, '')}`,
        question: q.question,
        options: q.options,
        correctIndex: q.correctAnswer,
        explanation: q.explanation,
        category: `passage-${p.genre}`,
        domain,
        sourceSlug: `passage-${p.genre}`,
        passage: p.text,
        section: 'reading-writing',
      })
    }
  }

  // R&W first, then Math — each section shuffled internally
  const questions = [...shuffle(rwQuestions), ...shuffle(mathQuestions)]

  return {
    questions,
    domains: DIAGNOSTIC_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 25,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring & Analysis                                                 */
/* ------------------------------------------------------------------ */

export function analyzeDiagnosticResults(
  questions: DiagnosticQuestion[],
  answers: { questionIndex: number; selectedIndex: number | null }[],
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

  // Build domain results
  const domains: DomainResult[] = DIAGNOSTIC_DOMAINS.map(d => {
    const scores = domainScores.get(d.id) ?? { correct: 0, total: 0 }
    const pct = scores.total > 0 ? Math.round((scores.correct / scores.total) * 100) : 0
    const level = pct >= 75 ? 'strong' : pct >= 50 ? 'moderate' : 'weak'
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

  const rwScore = Math.round(200 + rwPct * 600)
  const mathScore = Math.round(200 + mathPct * 600)

  // Categorize areas
  const weakAreas = domains.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domains.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domains.filter(d => d.level === 'strong').map(d => d.domainName)

  // Build recommended topics - weak domains first, then moderate
  const recommendedTopics: DiagnosticResults['recommendedTopics'] = []
  for (const domain of domains.filter(d => d.level === 'weak')) {
    const domainDef = DIAGNOSTIC_DOMAINS.find(d => d.id === domain.domainId)!
    for (const slug of domainDef.slugs) {
      recommendedTopics.push({ slug, name: slugToName(slug), priority: 'high' })
    }
  }
  for (const domain of domains.filter(d => d.level === 'moderate')) {
    const domainDef = DIAGNOSTIC_DOMAINS.find(d => d.id === domain.domainId)!
    for (const slug of domainDef.slugs) {
      recommendedTopics.push({ slug, name: slugToName(slug), priority: 'medium' })
    }
  }

  return {
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedScore: rwScore + mathScore,
    rwScore,
    mathScore,
    domains,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics,
  }
}
