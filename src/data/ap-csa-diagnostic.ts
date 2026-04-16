/**
 * AP Computer Science A Diagnostic Test Generator
 */

import { csaQuestionPool, type CsaQuestion } from './exit-quizzes/ap-computer-science-a'

export interface APCsaDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APCsaDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APCsaDiagnosticTestData {
  form: number
  questions: APCsaDiagnosticQuestion[]
  domains: APCsaDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APCsaDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APCsaRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APCsaDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APCsaDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APCsaRecommendedTopic[]
}

const AP_CSA_DOMAINS: APCsaDomain[] = [
  {
    id: 'primitive-types',
    name: 'Primitive Types',
    topicSlugs: ['csa-variables-types', 'csa-expressions-operators'],
    questionTarget: 3,
  },
  {
    id: 'using-objects',
    name: 'Using Objects',
    topicSlugs: ['csa-strings-objects', 'csa-using-objects'],
    questionTarget: 3,
  },
  {
    id: 'conditionals',
    name: 'Boolean Expressions & Conditionals',
    topicSlugs: ['csa-boolean-if', 'csa-conditionals'],
    questionTarget: 3,
  },
  {
    id: 'iteration',
    name: 'Iteration',
    topicSlugs: ['csa-iteration', 'csa-loops'],
    questionTarget: 3,
  },
  {
    id: 'writing-classes',
    name: 'Writing Classes',
    topicSlugs: ['csa-writing-classes', 'csa-class-design'],
    questionTarget: 3,
  },
  {
    id: 'arrays',
    name: 'Arrays',
    topicSlugs: ['csa-array', 'csa-arrays'],
    questionTarget: 2,
  },
  {
    id: 'arraylist',
    name: 'ArrayList',
    topicSlugs: ['csa-arraylist', 'csa-arraylist-usage'],
    questionTarget: 2,
  },
  {
    id: '2d-array',
    name: '2D Arrays',
    topicSlugs: ['csa-2d-array', 'csa-2d-arrays'],
    questionTarget: 2,
  },
  {
    id: 'inheritance',
    name: 'Inheritance',
    topicSlugs: ['csa-inheritance', 'csa-inheritance-polymorphism'],
    questionTarget: 3,
  }
]

export { AP_CSA_DOMAINS }

function mulberry32(seed: number) {
  return function () {
    // eslint-disable-next-line no-param-reassign
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function seededShuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generateAPCsaDiagnosticTest(form: number): APCsaDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APCsaDiagnosticQuestion[] = []

  for (const domain of AP_CSA_DOMAINS) {
    const pool = csaQuestionPool.filter(
      (q: CsaQuestion) => q.domain === domain.id,
    )
    const shuffled = seededShuffle(pool, rng)
    const selected = shuffled.slice(0, domain.questionTarget)

    for (const q of selected) {
      questions.push({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        domain: domain.id,
        topicSlug: q.topicSlug,
      })
    }
  }

  return {
    form,
    questions: seededShuffle(questions, rng),
    domains: AP_CSA_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 35,
  }
}

export function scoreAPCsaDiagnostic(
  form: number,
  questions: APCsaDiagnosticQuestion[],
  answers: Record<number, number>,
): APCsaDiagnosticResults {
  const domainResults: APCsaDomainResult[] = AP_CSA_DOMAINS.map(domain => {
    const domainQs = questions.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === domain.id)
    const correct = domainQs.filter(({ i }) => { const a = answers[i]; return a !== undefined && a === questions[i].correctAnswer }).length
    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' = percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'
    return { domainId: domain.id, domainName: domain.name, correct, total, percentage, level }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  const recommendedTopics: APCsaRecommendedTopic[] = []
  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = AP_CSA_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_CSA_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === md.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slug = missedSlugs.size > 0 ? [...missedSlugs][0] : domainDef.topicSlugs[0]
    recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: md.domainId, priority: 'medium' })
  }

  return { form, totalCorrect, totalQuestions, percentage, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics: recommendedTopics.slice(0, 5) }
}

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
  'csa-variables-types': 'Variables Types',
  'csa-expressions-operators': 'Expressions Operators',
  'csa-strings-objects': 'Strings Objects',
  'csa-using-objects': 'Using Objects',
  'csa-boolean-if': 'Boolean If',
  'csa-conditionals': 'Conditionals',
  'csa-iteration': 'Iteration',
  'csa-loops': 'Loops',
  'csa-writing-classes': 'Writing Classes',
  'csa-class-design': 'Class Design',
  'csa-array': 'Array',
  'csa-arrays': 'Arrays',
  'csa-arraylist': 'Arraylist',
  'csa-arraylist-usage': 'Arraylist Usage',
  'csa-2d-array': '2d Array',
  'csa-2d-arrays': '2d Arrays',
  'csa-inheritance': 'Inheritance',
  'csa-inheritance-polymorphism': 'Inheritance Polymorphism',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
