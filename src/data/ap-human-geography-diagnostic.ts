/**
 * AP Human Geography Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~21 questions spanning
 * all 7 AP Human Geography domains.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 */

import { apHumanGeoQuestionPool, type APHumanGeoQuestion } from './exit-quizzes/ap-human-geography'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APHumanGeoDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APHumanGeoDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APHumanGeoDiagnosticTestData {
  form: number
  questions: APHumanGeoDiagnosticQuestion[]
  domains: APHumanGeoDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APHumanGeoDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APHumanGeoRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APHumanGeoDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APHumanGeoDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APHumanGeoRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const AP_HUMAN_GEO_DOMAINS: APHumanGeoDomain[] = [
  {
    id: 'thinking-geographically',
    name: 'Thinking Geographically',
    topicSlugs: ['hg-intro-geography', 'hg-spatial-concepts'],
    questionTarget: 4,
  },
  {
    id: 'population-migration',
    name: 'Population & Migration',
    topicSlugs: ['hg-population-distribution', 'hg-population-growth', 'hg-migration'],
    questionTarget: 4,
  },
  {
    id: 'cultural-patterns',
    name: 'Cultural Patterns & Processes',
    topicSlugs: ['hg-culture-diffusion', 'hg-language-religion', 'hg-ethnicity-identity'],
    questionTarget: 4,
  },
  {
    id: 'political-patterns',
    name: 'Political Patterns & Processes',
    topicSlugs: ['hg-political-geography', 'hg-political-power'],
    questionTarget: 4,
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Rural Land-Use',
    topicSlugs: ['hg-agricultural-origins', 'hg-agricultural-practices'],
    questionTarget: 4,
  },
  {
    id: 'cities-urban',
    name: 'Cities & Urban Land-Use',
    topicSlugs: ['hg-urbanization', 'hg-urban-challenges'],
    questionTarget: 4,
  },
  {
    id: 'industrialization-development',
    name: 'Industrialization & Economic Development',
    topicSlugs: ['hg-industrialization', 'hg-globalization-trade'],
    questionTarget: 4,
  },
]

export { AP_HUMAN_GEO_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Seeded PRNG (mulberry32)                                           */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateAPHumanGeoDiagnosticTest(form: number): APHumanGeoDiagnosticTestData {
  const rng = mulberry32(form * 7919)
  const questions: APHumanGeoDiagnosticQuestion[] = []

  for (const domain of AP_HUMAN_GEO_DOMAINS) {
    const pool = apHumanGeoQuestionPool.filter(
      (q: APHumanGeoQuestion) => q.domain === domain.id,
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

  const shuffledQuestions = seededShuffle(questions, rng)

  return {
    form,
    questions: shuffledQuestions,
    domains: AP_HUMAN_GEO_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 55,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPHumanGeoDiagnostic(
  form: number,
  questions: APHumanGeoDiagnosticQuestion[],
  answers: Record<number, number>,
): APHumanGeoDiagnosticResults {
  const domainResults: APHumanGeoDomainResult[] = AP_HUMAN_GEO_DOMAINS.map(domain => {
    const domainQs = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.domain === domain.id)

    const correct = domainQs.filter(({ i }) => {
      const answer = answers[i]
      return answer !== undefined && answer === questions[i].correctAnswer
    }).length

    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' =
      percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'

    return {
      domainId: domain.id,
      domainName: domain.name,
      correct,
      total,
      percentage,
      level,
    }
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

  const recommendedTopics: APHumanGeoRecommendedTopic[] = []

  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_HUMAN_GEO_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomains = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomains = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))

  for (const wd of weakDomains) {
    const domainDef = AP_HUMAN_GEO_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue

    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === wd.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slugsToRecommend = missedSlugs.size > 0
      ? [...missedSlugs].slice(0, 2)
      : domainDef.topicSlugs.slice(0, 2)

    for (const slug of slugsToRecommend) {
      if (recommendedTopics.length >= 5) break
      recommendedTopics.push({
        slug,
        name: slugToReadableName(slug),
        domainId: wd.domainId,
        priority: 'high',
      })
    }
  }

  for (const md of moderateDomains) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_HUMAN_GEO_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue

    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === md.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slug = missedSlugs.size > 0
      ? [...missedSlugs][0]
      : domainDef.topicSlugs[0]

    recommendedTopics.push({
      slug,
      name: slugToReadableName(slug),
      domainId: md.domainId,
      priority: 'medium',
    })
  }

  return {
    form,
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedAPScore,
    domains: domainResults,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics: recommendedTopics.slice(0, 5),
  }
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
  'hg-intro-geography': 'Introduction to Geography',
  'hg-spatial-concepts': 'Spatial Concepts & Tools',
  'hg-population-distribution': 'Population Distribution & Composition',
  'hg-population-growth': 'Population Growth & Decline',
  'hg-migration': 'Migration Patterns & Processes',
  'hg-culture-diffusion': 'Cultural Diffusion & Landscapes',
  'hg-language-religion': 'Language & Religion',
  'hg-ethnicity-identity': 'Ethnicity & Identity',
  'hg-political-geography': 'Political Geography & Boundaries',
  'hg-political-power': 'Political Power & Territoriality',
  'hg-agricultural-origins': 'Agricultural Origins & Revolutions',
  'hg-agricultural-practices': 'Agricultural Practices & Systems',
  'hg-urbanization': 'Urbanization & Urban Models',
  'hg-urban-challenges': 'Urban Challenges & Sustainability',
  'hg-industrialization': 'Industrialization & Development',
  'hg-globalization-trade': 'Globalization & International Trade',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
