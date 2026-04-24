/**
 * AP Chemistry Diagnostic Test Generator
 *
 * Produces 10 alternate forms (1–10) each with ~33 questions spanning
 * all 9 AP Chemistry domains.  Each form uses a seeded PRNG to
 * deterministically select a different subset of questions from the pool.
 * After each test, weak domains are mapped to 3-5 specific topic slugs
 * the student should review.
 */

import { apChemQuestionPool } from './exit-quizzes/ap-chemistry'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APChemDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APChemDomain {
  id: string
  name: string
  /** Topic slugs that map to this domain (used for remediation links) */
  topicSlugs: string[]
  questionTarget: number
}

export const TOTAL_FORMS = 10

export interface APChemDiagnosticTestData {
  form: number
  questions: APChemDiagnosticQuestion[]
  domains: APChemDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APChemDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APChemRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APChemDiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number // 1-5
  domains: APChemDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APChemRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const AP_CHEM_DOMAINS: APChemDomain[] = [
  {
    id: 'atomic-structure',
    name: 'Atomic Structure & Periodic Trends',
    topicSlugs: ['moles-molar-mass', 'electron-configuration', 'periodic-trends', 'photoelectron-spectroscopy'],
    questionTarget: 4,
  },
  {
    id: 'bonding',
    name: 'Chemical Bonding',
    topicSlugs: ['types-of-chemical-bonds', 'lewis-structures-formal-charge', 'vsepr-molecular-geometry', 'hybridization-sigma-pi-bonds'],
    questionTarget: 4,
  },
  {
    id: 'imf',
    name: 'Intermolecular Forces & Properties',
    topicSlugs: ['types-intermolecular-forces', 'solutions-solubility', 'ideal-gas-law', 'properties-states-matter'],
    questionTarget: 3,
  },
  {
    id: 'reactions',
    name: 'Chemical Reactions & Stoichiometry',
    topicSlugs: ['reaction-types', 'stoichiometry-limiting-reactants', 'net-ionic-equations', 'oxidation-reduction-reactions'],
    questionTarget: 4,
  },
  {
    id: 'kinetics',
    name: 'Kinetics',
    topicSlugs: ['reaction-rates-and-rate-laws', 'integrated-rate-laws', 'activation-energy-arrhenius', 'reaction-mechanisms'],
    questionTarget: 4,
  },
  {
    id: 'thermodynamics',
    name: 'Thermodynamics',
    topicSlugs: ['enthalpy-calorimetry', 'entropy-second-law', 'gibbs-free-energy'],
    questionTarget: 3,
  },
  {
    id: 'equilibrium',
    name: 'Equilibrium',
    topicSlugs: ['equilibrium-constants-expressions', 'le-chatelier-equilibrium-shifts', 'ice-tables-calculations', 'solubility-ksp', 'reaction-quotient-le-chatelier'],
    questionTarget: 4,
  },
  {
    id: 'acids-bases',
    name: 'Acids & Bases',
    topicSlugs: ['acid-base-theories-ph', 'weak-acids-bases-ka-kb', 'buffer-solutions-henderson-hasselbalch', 'acid-base-titrations'],
    questionTarget: 4,
  },
  {
    id: 'electrochemistry',
    name: 'Electrochemistry',
    topicSlugs: ['galvanic-cells-potentials', 'nernst-equation-concentration', 'electrolytic-cells-faraday'],
    questionTarget: 3,
  },
]

export { AP_CHEM_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Seeded PRNG (mulberry32) for deterministic per-form selection      */
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

/**
 * Build a diagnostic test for a given form number (1–10).
 * Uses a seeded PRNG so each form deterministically selects a different
 * subset of questions from the pool for each domain.
 */
export function generateAPChemDiagnosticTest(form: number): APChemDiagnosticTestData {
  const rng = mulberry32(form * 7919) // distinct seed per form
  const questions: APChemDiagnosticQuestion[] = []

  for (const domain of AP_CHEM_DOMAINS) {
    const pool = apChemQuestionPool.filter(q => q.domain === domain.id)
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

  // Final shuffle so domains aren't grouped together
  const shuffledQuestions = seededShuffle(questions, rng)

  return {
    form,
    questions: shuffledQuestions,
    domains: AP_CHEM_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 40,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPChemDiagnostic(
  form: number,
  questions: APChemDiagnosticQuestion[],
  answers: Record<number, number>,
): APChemDiagnosticResults {
  const domainResults: APChemDomainResult[] = AP_CHEM_DOMAINS.map(domain => {
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

  // Estimated AP score (1-5 scale)
  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Build recommended topics — pick 1-2 slugs per weak domain, 1 per moderate domain
  // prioritize weak first, cap at 5 total
  const recommendedTopics: APChemRecommendedTopic[] = []

  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_CHEM_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomains = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomains = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))

  for (const wd of weakDomains) {
    const domainDef = AP_CHEM_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue

    // Find specific topic slugs the student missed
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
    const domainDef = AP_CHEM_DOMAINS.find(d => d.id === md.domainId)
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

/**
 * Pick the next form the student should take.
 * Cycles sequentially through forms 1–10.
 */
export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

const SLUG_LABELS: Record<string, string> = {
  'moles-molar-mass': 'Moles and Molar Mass',
  'electron-configuration': 'Electron Configuration',
  'periodic-trends': 'Periodic Trends',
  'photoelectron-spectroscopy': 'Photoelectron Spectroscopy',
  'types-of-chemical-bonds': 'Types of Chemical Bonds',
  'lewis-structures-formal-charge': 'Lewis Structures & Formal Charge',
  'vsepr-molecular-geometry': 'VSEPR & Molecular Geometry',
  'hybridization-sigma-pi-bonds': 'Hybridization & Sigma/Pi Bonds',
  'types-intermolecular-forces': 'Types of Intermolecular Forces',
  'properties-states-matter': 'Properties of States of Matter',
  'solutions-solubility': 'Solutions & Solubility',
  'ideal-gas-law': 'Ideal Gas Law',
  'mixtures-separations': 'Mixtures & Separations',
  'reaction-types': 'Types of Chemical Reactions',
  'stoichiometry-limiting-reactants': 'Stoichiometry & Limiting Reactants',
  'net-ionic-equations': 'Net Ionic Equations',
  'oxidation-reduction-reactions': 'Redox Reactions',
  'reaction-rates-and-rate-laws': 'Reaction Rates & Rate Laws',
  'integrated-rate-laws': 'Integrated Rate Laws & Half-Life',
  'activation-energy-arrhenius': 'Activation Energy & Arrhenius',
  'reaction-mechanisms': 'Reaction Mechanisms',
  'enthalpy-calorimetry': 'Enthalpy & Calorimetry',
  'entropy-second-law': 'Entropy & the Second Law',
  'gibbs-free-energy': 'Gibbs Free Energy',
  'equilibrium-constants-expressions': 'Equilibrium Constants',
  'le-chatelier-equilibrium-shifts': "Le Chatelier's Principle",
  'intro-equilibrium': 'Introduction to Equilibrium',
  'reaction-quotient-le-chatelier': 'Reaction Quotient & Le Chatelier',
  'ice-tables-calculations': 'ICE Tables & Calculations',
  'solubility-ksp': 'Solubility & Ksp',
  'acid-base-theories-ph': 'Acid-Base Theories & pH',
  'weak-acids-bases-ka-kb': 'Weak Acids/Bases & Ka/Kb',
  'buffer-solutions-henderson-hasselbalch': 'Buffer Solutions',
  'acid-base-titrations': 'Acid-Base Titrations',
  'galvanic-cells-potentials': 'Galvanic Cells & Cell Potentials',
  'nernst-equation-concentration': 'Nernst Equation',
  'electrolytic-cells-faraday': 'Electrolytic Cells & Faraday',
  'spontaneity-free-energy-applications': 'Free Energy Applications',
  'galvanic-cells-thermo-applications': 'Galvanic Cells (Thermo Applications)',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
