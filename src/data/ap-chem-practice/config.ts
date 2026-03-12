import { generateExitQuiz } from '../exit-quizzes'
import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const TOPIC_SLUGS = [
  'atomic-structure-periodicity-apchem', 'chemical-bonding-apchem', 'intermolecular-forces-apchem',
  'stoichiometry-apchem', 'gas-laws-apchem', 'solutions-mixtures-apchem',
  'thermodynamics-apchem', 'enthalpy-hess-law-apchem', 'entropy-gibbs-apchem',
  'kinetics-rate-laws-apchem', 'reaction-mechanisms-apchem', 'equilibrium-apchem',
  'le-chatelier-principle-apchem', 'acids-bases-apchem', 'buffers-titrations-apchem',
  'electrochemistry-apchem', 'oxidation-reduction-apchem', 'nuclear-chemistry-apchem',
  'spectroscopy-analysis-apchem', 'molecular-geometry-apchem',
  'lewis-structures-apchem', 'periodic-trends-apchem',
  'colligative-properties-apchem', 'calorimetry-apchem',
  'solubility-equilibrium-apchem', 'chemical-equations-apchem',
]

async function getQuestions(): Promise<PracticeQuestion[]> {
  const all: PracticeQuestion[] = []
  for (const slug of TOPIC_SLUGS) {
    try {
      const pool = await generateExitQuiz(slug, 3)
      all.push(...pool.map(q => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctIndex ?? 0,
        explanation: q.explanation,
        topic: slug,
      })))
    } catch { /* skip unavailable */ }
  }
  return all.sort(() => Math.random() - 0.5).slice(0, 30)
}

export const config: PracticeExamConfig = {
  subject: 'AP Chemistry',
  description: 'Timed practice exam with AP-level chemistry questions across all units.',
  backLink: { href: '/ap-chemistry', label: 'AP Chemistry' },
  ctaLinks: [
    { href: '/ap-chem-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-chem-daily-question', label: 'Daily Question' },
  ],
  accent: 'emerald',
  sections: [{
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering atomic structure, bonding, reactions, thermodynamics, and more.',
    questionCount: 30, timeLimitMinutes: 45,
  }],
  getQuestions: () => getQuestions(),
  aboutInfo: {
    title: 'About the AP Chemistry Exam',
    columns: [
      { heading: 'Exam Structure', items: ['Section I: 60 MC questions (90 min)', 'Section II: 7 Free Response (105 min)', 'Total: ~3.25 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'College credit: Usually 3+'] },
    ],
  },
}
