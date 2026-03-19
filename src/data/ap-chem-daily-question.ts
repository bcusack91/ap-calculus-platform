/**
 * AP Chemistry — Question of the Day
 *
 * Uses the exit-quiz registry for rich, randomized question pools.
 * Deterministic per calendar day so every visitor sees the same question.
 */

import { generateExitQuiz } from '@/data/exit-quizzes'

const TOPIC_SLUGS = [
  'moles-molar-mass',
  'electron-configuration',
  'periodic-trends',
  'photoelectron-spectroscopy',
  'types-of-chemical-bonds',
  'lewis-structures-formal-charge',
  'vsepr-molecular-geometry',
  'hybridization-sigma-pi-bonds',
  'types-intermolecular-forces',
  'properties-states-matter',
  'solutions-solubility',
  'ideal-gas-law',
  'mixtures-separations',
  'reaction-types',
  'stoichiometry-limiting-reactants',
  'net-ionic-equations',
  'oxidation-reduction-reactions',
  'reaction-rates-and-rate-laws',
  'integrated-rate-laws',
  'activation-energy-arrhenius',
  'reaction-mechanisms',
  'enthalpy-calorimetry',
  'entropy-second-law',
  'gibbs-free-energy',
  'intro-equilibrium',
  'equilibrium-constants-expressions',
  'le-chatelier-equilibrium-shifts',
  'reaction-quotient-le-chatelier',
  'ice-tables-calculations',
  'solubility-ksp',
  'acid-base-theories-ph',
  'weak-acids-bases-ka-kb',
  'buffer-solutions-henderson-hasselbalch',
  'acid-base-titrations',
  'galvanic-cells-potentials',
  'nernst-equation-concentration',
  'electrolytic-cells-faraday',
  'spontaneity-free-energy-applications',
  'galvanic-cells-thermo-applications',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface ChemDailyQuestion {
  topicSlug: string
  question: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    category: string
  }
  dayNumber: number
}

export async function getDailyQuestions(): Promise<ChemDailyQuestion[]> {
  const day = dayOfYear()
  const slug = TOPIC_SLUGS[day % TOPIC_SLUGS.length]
  const pool = await generateExitQuiz(slug, 5)
  const q = pool[day % pool.length]

  return [
    {
      topicSlug: slug,
      question: {
        question: q.question,
        options: q.options,
        correctAnswer: q.correctIndex ?? 0,
        explanation: q.explanation,
        category: q.category ?? slug,
      },
      dayNumber: day,
    },
  ]
}
