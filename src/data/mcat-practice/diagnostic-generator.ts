/**
 * MCAT Diagnostic Test Generator
 *
 * A ~40 question assessment that samples across all MCAT sections/domains
 * to identify student strengths and weaknesses.
 */

import { generateExitQuiz } from '../exit-quizzes'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface MCATDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  sourceSlug: string
}

export interface MCATDiagnosticDomain {
  id: string
  name: string
  section: 'chem-phys' | 'cars' | 'bio-biochem' | 'psych-soc'
  slugs: string[]
  questionCount: number
}

export interface MCATDiagnosticTestData {
  questions: MCATDiagnosticQuestion[]
  domains: MCATDiagnosticDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface MCATDomainResult {
  domainId: string
  domainName: string
  section: 'chem-phys' | 'cars' | 'bio-biochem' | 'psych-soc'
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface MCATDiagnosticResults {
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedScore: number // 472-528
  chemPhysScore: number  // 118-132
  carsScore: number      // 118-132
  bioBiochemScore: number // 118-132
  psychSocScore: number  // 118-132
  domains: MCATDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: { slug: string; name: string; priority: 'high' | 'medium' | 'low' }[]
}

/* ------------------------------------------------------------------ */
/*  Diagnostic Domains                                                 */
/* ------------------------------------------------------------------ */

const DIAGNOSTIC_DOMAINS: MCATDiagnosticDomain[] = [
  // Chem/Phys
  {
    id: 'gen-chem',
    name: 'General Chemistry',
    section: 'chem-phys',
    slugs: ['mcat-general-chemistry'],
    questionCount: 4,
  },
  {
    id: 'org-chem',
    name: 'Organic Chemistry',
    section: 'chem-phys',
    slugs: ['mcat-organic-chemistry'],
    questionCount: 3,
  },
  {
    id: 'physics',
    name: 'Physics',
    section: 'chem-phys',
    slugs: ['mcat-physics-mechanics', 'mcat-physics-electricity'],
    questionCount: 4,
  },
  {
    id: 'biochem-cp',
    name: 'Biochemistry (Chem/Phys)',
    section: 'chem-phys',
    slugs: ['mcat-biochemistry'],
    questionCount: 3,
  },
  // CARS
  {
    id: 'cars',
    name: 'Critical Analysis & Reasoning',
    section: 'cars',
    slugs: ['mcat-cars'],
    questionCount: 5,
  },
  // Bio/Biochem
  {
    id: 'cell-mol-bio',
    name: 'Cell & Molecular Biology',
    section: 'bio-biochem',
    slugs: ['mcat-biology'],
    questionCount: 4,
  },
  {
    id: 'organ-systems',
    name: 'Organ Systems & Physiology',
    section: 'bio-biochem',
    slugs: ['mcat-organ-systems'],
    questionCount: 4,
  },
  {
    id: 'genetics',
    name: 'Genetics & Evolution',
    section: 'bio-biochem',
    slugs: ['mcat-genetics-evolution'],
    questionCount: 3,
  },
  // Psych/Soc
  {
    id: 'psych-soc',
    name: 'Psychology & Sociology',
    section: 'psych-soc',
    slugs: ['mcat-psychology-sociology'],
    questionCount: 5,
  },
]

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export async function generateMCATDiagnosticTest(): Promise<MCATDiagnosticTestData> {
  const questions: MCATDiagnosticQuestion[] = []

  for (const domain of DIAGNOSTIC_DOMAINS) {
    const questionsPerSlug = Math.ceil(domain.questionCount / domain.slugs.length)
    let domainQuestions: MCATDiagnosticQuestion[] = []

    for (const slug of domain.slugs) {
      try {
        const pool = await generateExitQuiz(slug, questionsPerSlug + 2)
        const tagged: MCATDiagnosticQuestion[] = pool.map(q => {
          const raw = q as unknown as Record<string, unknown>
          const correctAnswer = (raw.correctAnswer ?? raw.correctIndex ?? 0) as number
          return {
            question: q.question,
            options: q.options,
            correctAnswer,
            explanation: q.explanation,
            domain: domain.id,
            sourceSlug: slug,
          }
        })
        domainQuestions.push(...tagged)
      } catch {
        // If a quiz isn't found, skip silently
      }
    }

    // Shuffle and take the right number
    domainQuestions = domainQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, domain.questionCount)

    questions.push(...domainQuestions)
  }

  return {
    questions: questions.sort(() => Math.random() - 0.5),
    domains: DIAGNOSTIC_DOMAINS,
    totalQuestions: questions.length,
    timeLimitMinutes: 30,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreMCATDiagnostic(
  questions: MCATDiagnosticQuestion[],
  answers: Record<number, number>,
): MCATDiagnosticResults {
  const domainResults: MCATDomainResult[] = DIAGNOSTIC_DOMAINS.map(domain => {
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
      percentage >= 70 ? 'strong' : percentage >= 40 ? 'moderate' : 'weak'

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

  // Score estimation per section (118-132 range)
  function sectionScore(sectionId: string): number {
    const sectionDomains = domainResults.filter(d => d.section === sectionId)
    const correct = sectionDomains.reduce((s, d) => s + d.correct, 0)
    const total = sectionDomains.reduce((s, d) => s + d.total, 0)
    const pct = total > 0 ? correct / total : 0
    return Math.round(118 + pct * 14) // 118-132 range
  }

  const chemPhysScore = sectionScore('chem-phys')
  const carsScore = sectionScore('cars')
  const bioBiochemScore = sectionScore('bio-biochem')
  const psychSocScore = sectionScore('psych-soc')
  const estimatedScore = chemPhysScore + carsScore + bioBiochemScore + psychSocScore

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  const recommendedTopics = domainResults
    .filter(d => d.level === 'weak' || d.level === 'moderate')
    .flatMap(d => {
      const domain = DIAGNOSTIC_DOMAINS.find(dom => dom.id === d.domainId)
      return (domain?.slugs ?? []).map(slug => ({
        slug,
        name: d.domainName,
        priority: d.level === 'weak' ? 'high' as const : 'medium' as const,
      }))
    })

  return {
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedScore,
    chemPhysScore,
    carsScore,
    bioBiochemScore,
    psychSocScore,
    domains: domainResults,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics,
  }
}
