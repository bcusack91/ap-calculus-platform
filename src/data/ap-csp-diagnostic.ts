/**
 * AP CS Principles Diagnostic Test Generator
 */

import { cspQuestionPool, type CspQuestion } from './exit-quizzes/ap-cs-principles'

export interface APCspDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APCspDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APCspDiagnosticTestData {
  form: number
  questions: APCspDiagnosticQuestion[]
  domains: APCspDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APCspDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APCspRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APCspDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APCspDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APCspRecommendedTopic[]
}

const AP_CSP_DOMAINS: APCspDomain[] = [
  {
    id: 'creative-development',
    name: 'Creative Development',
    topicSlugs: ['csp-creative-development', 'csp-collaboration-development'],
    questionTarget: 3,
  },
  {
    id: 'data',
    name: 'Data',
    topicSlugs: ['csp-binary-data', 'csp-data-compression-analysis', 'csp-data'],
    questionTarget: 3,
  },
  {
    id: 'algorithms',
    name: 'Algorithms & Programming',
    topicSlugs: ['csp-algorithms', 'csp-algorithms-programming', 'csp-variables-control', 'csp-procedures-lists'],
    questionTarget: 3,
  },
  {
    id: 'computing-systems',
    name: 'Computing Systems & Networks',
    topicSlugs: ['csp-computing-systems-networks', 'csp-internet-protocols', 'csp-fault-tolerance-security'],
    questionTarget: 3,
  },
  {
    id: 'impact',
    name: 'Impact of Computing',
    topicSlugs: ['csp-impact-of-computing', 'csp-safe-computing', 'csp-social-ethical-impacts'],
    questionTarget: 3,
  }
]

export { AP_CSP_DOMAINS }

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

export function generateAPCspDiagnosticTest(form: number): APCspDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APCspDiagnosticQuestion[] = []

  for (const domain of AP_CSP_DOMAINS) {
    const pool = cspQuestionPool.filter(
      (q: CspQuestion) => q.domain === domain.id,
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
    domains: AP_CSP_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 35,
  }
}

export function scoreAPCspDiagnostic(
  form: number,
  questions: APCspDiagnosticQuestion[],
  answers: Record<number, number>,
): APCspDiagnosticResults {
  const domainResults: APCspDomainResult[] = AP_CSP_DOMAINS.map(domain => {
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

  const recommendedTopics: APCspRecommendedTopic[] = []
  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_CSP_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  for (const wd of weakDomainResults) {
    const domainDef = AP_CSP_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of moderateDomainResults) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_CSP_DOMAINS.find(d => d.id === md.domainId)
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
  'csp-creative-development': 'Creative Development',
  'csp-collaboration-development': 'Collaboration Development',
  'csp-binary-data': 'Binary Data',
  'csp-data-compression-analysis': 'Data Compression Analysis',
  'csp-data': 'Data',
  'csp-algorithms': 'Algorithms',
  'csp-algorithms-programming': 'Algorithms Programming',
  'csp-variables-control': 'Variables Control',
  'csp-procedures-lists': 'Procedures Lists',
  'csp-computing-systems-networks': 'Computing Systems Networks',
  'csp-internet-protocols': 'Internet Protocols',
  'csp-fault-tolerance-security': 'Fault Tolerance Security',
  'csp-impact-of-computing': 'Impact Of Computing',
  'csp-safe-computing': 'Safe Computing',
  'csp-social-ethical-impacts': 'Social Ethical Impacts',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
