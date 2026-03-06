/**
 * MCAT Practice Test Generator
 *
 * Generates section-specific practice sessions with questions from
 * the exit quiz pools.
 */

import { generateExitQuiz } from '../exit-quizzes'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface MCATSection {
  id: string
  name: string
  shortName: string
  questionCount: number
  timeLimitMinutes: number
  slugs: string[]
  description: string
  difficultyMix?: {
    easy: number
    medium: number
    hard: number
  }
}

export interface MCATSectionTest {
  section: MCATSection
  questions: MCATTestQuestion[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface MCATTestQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  topicSlug: string
  sectionId: string
  difficulty: 'easy' | 'medium' | 'hard'
}

function takeRandom<T>(items: T[], count: number): T[] {
  const shuffled = [...items].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

function selectQuestionsByDifficulty(
  allQuestions: MCATTestQuestion[],
  questionCount: number,
  mix: { easy: number; medium: number; hard: number },
): MCATTestQuestion[] {
  const easy = allQuestions.filter((q) => q.difficulty === 'easy')
  const medium = allQuestions.filter((q) => q.difficulty === 'medium')
  const hard = allQuestions.filter((q) => q.difficulty === 'hard')

  const selected: MCATTestQuestion[] = []

  const selectedEasy = takeRandom(easy, mix.easy)
  const selectedMedium = takeRandom(medium, mix.medium)
  const selectedHard = takeRandom(hard, mix.hard)

  selected.push(...selectedEasy, ...selectedMedium, ...selectedHard)

  if (selected.length < questionCount) {
    const selectedSet = new Set(selected)
    const remaining = allQuestions.filter((q) => !selectedSet.has(q))
    selected.push(...takeRandom(remaining, questionCount - selected.length))
  }

  return takeRandom(selected, questionCount)
}

/* ------------------------------------------------------------------ */
/*  Section Definitions                                                */
/* ------------------------------------------------------------------ */

export const MCAT_SECTIONS: MCATSection[] = [
  {
    id: 'gen-chem-comprehensive',
    name: 'General Chemistry Comprehensive',
    shortName: 'Gen Chem',
    questionCount: 20,
    timeLimitMinutes: 35,
    slugs: [
      'mcat-general-chemistry-atomic-structure-mcat',
      'mcat-general-chemistry-stoichiometry-mcat',
      'mcat-general-chemistry-thermodynamics-mcat',
      'mcat-general-chemistry-kinetics-mcat',
      'mcat-general-chemistry-acid-base-equilibrium-mcat',
    ],
    description: 'Targeted mixed exam across atomic structure, stoichiometry, thermodynamics, kinetics, and acid-base/equilibrium',
    difficultyMix: { easy: 7, medium: 10, hard: 3 },
  },
  {
    id: 'organic-comprehensive',
    name: 'Organic Chemistry Comprehensive',
    shortName: 'Organic',
    questionCount: 20,
    timeLimitMinutes: 35,
    slugs: [
      'mcat-organic-chemistry-functional-groups-mcat',
      'mcat-organic-chemistry-stereochemistry-mcat',
      'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
      'mcat-organic-chemistry-carbonyls-mcat',
      'mcat-organic-chemistry-spectroscopy-mcat',
    ],
    description: 'Targeted mixed exam across functional groups, stereochemistry, mechanisms, carbonyls, and spectroscopy',
    difficultyMix: { easy: 7, medium: 10, hard: 3 },
  },
  {
    id: 'physics-comprehensive',
    name: 'Physics Comprehensive',
    shortName: 'Physics',
    questionCount: 24,
    timeLimitMinutes: 40,
    slugs: [
      'mcat-physics-mechanics-kinematics-mcat',
      'mcat-physics-mechanics-forces-newton-laws-mcat',
      'mcat-physics-mechanics-work-energy-power-mcat',
      'mcat-physics-mechanics-momentum-collisions-mcat',
      'mcat-physics-mechanics-fluids-waves-mcat',
      'mcat-physics-electricity-electrostatics-mcat',
      'mcat-physics-electricity-circuits-mcat',
      'mcat-physics-electricity-magnetism-mcat',
      'mcat-physics-electricity-optics-mcat',
      'mcat-physics-electricity-electrochemistry-mcat',
    ],
    description: 'Targeted mixed exam across mechanics, fluids/waves, electrostatics, circuits, magnetism, optics, and electrochemistry',
    difficultyMix: { easy: 8, medium: 12, hard: 4 },
  },
  {
    id: 'biochem-comprehensive',
    name: 'Biochemistry Comprehensive',
    shortName: 'Biochem',
    questionCount: 20,
    timeLimitMinutes: 35,
    slugs: [
      'mcat-biochemistry-amino-acids-proteins-mcat',
      'mcat-biochemistry-enzymes-kinetics-mcat',
      'mcat-biochemistry-carbohydrate-metabolism-mcat',
      'mcat-biochemistry-lipid-metabolism-mcat',
      'mcat-biochemistry-bioenergetics-mcat',
    ],
    description: 'Targeted mixed exam across amino acids/proteins, enzymes, metabolism, and bioenergetics',
    difficultyMix: { easy: 7, medium: 10, hard: 3 },
  },
  {
    id: 'chem-phys',
    name: 'Chemical & Physical Foundations of Biological Systems',
    shortName: 'Chem/Phys',
    questionCount: 30,
    timeLimitMinutes: 45,
    slugs: [
      'mcat-general-chemistry',
      'mcat-organic-chemistry',
      'mcat-physics-mechanics',
      'mcat-physics-electricity',
      'mcat-biochemistry',
    ],
    description: 'General chemistry, organic chemistry, physics, and biochemistry',
  },
  {
    id: 'cars',
    name: 'Critical Analysis and Reasoning Skills',
    shortName: 'CARS',
    questionCount: 15,
    timeLimitMinutes: 30,
    slugs: ['mcat-cars'],
    description: 'Reading comprehension, reasoning, and argument analysis',
  },
  {
    id: 'bio-biochem',
    name: 'Biological and Biochemical Foundations of Living Systems',
    shortName: 'Bio/Biochem',
    questionCount: 30,
    timeLimitMinutes: 45,
    slugs: [
      'mcat-biology',
      'mcat-organ-systems',
      'mcat-genetics-evolution',
      'mcat-biochemistry',
    ],
    description: 'Cell biology, organ systems, genetics, evolution, and biochemistry',
  },
  {
    id: 'psych-soc',
    name: 'Psychological, Social, and Biological Foundations of Behavior',
    shortName: 'Psych/Soc',
    questionCount: 20,
    timeLimitMinutes: 35,
    slugs: ['mcat-psychology-sociology'],
    description: 'Psychology, sociology, and biological bases of behavior',
  },
]

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export async function generateSectionTest(sectionId: string): Promise<MCATSectionTest> {
  const section = MCAT_SECTIONS.find(s => s.id === sectionId)
  if (!section) throw new Error(`Unknown MCAT section: ${sectionId}`)

  const questionsPerSlug = Math.ceil(section.questionCount / section.slugs.length)
  const allQuestions: MCATTestQuestion[] = []

  for (const slug of section.slugs) {
    try {
      const pool = await generateExitQuiz(slug, questionsPerSlug + 3)
      const tagged: MCATTestQuestion[] = pool.map(q => {
        // Normalize: MCAT quizzes use correctAnswer, SAT quizzes use correctIndex
        const raw = q as unknown as Record<string, unknown>
        const correctAnswer = (raw.correctAnswer ?? raw.correctIndex ?? 0) as number
        return {
          question: q.question,
          options: q.options,
          correctAnswer,
          explanation: q.explanation,
          topicSlug: typeof raw.category === 'string' ? raw.category : slug,
          sectionId: section.id,
          difficulty:
            raw.difficulty === 'easy' || raw.difficulty === 'medium' || raw.difficulty === 'hard'
              ? raw.difficulty
              : 'medium',
        }
      })
      allQuestions.push(...tagged)
    } catch {
      // Skip if quiz not available
    }
  }

  // Shuffle and cap
  const questions = section.difficultyMix
    ? selectQuestionsByDifficulty(allQuestions, section.questionCount, section.difficultyMix)
    : allQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, section.questionCount)

  return {
    section,
    questions,
    totalQuestions: questions.length,
    timeLimitMinutes: section.timeLimitMinutes,
  }
}

/**
 * Score a completed section test.
 */
export function scoreSectionTest(
  test: MCATSectionTest,
  answers: Record<number, number>,
): {
  correct: number
  total: number
  percentage: number
  scaledScore: number // 118-132
  byTopic: { slug: string; correct: number; total: number }[]
} {
  let correct = 0
  const topicMap = new Map<string, { correct: number; total: number }>()

  test.questions.forEach((q, i) => {
    if (!topicMap.has(q.topicSlug)) {
      topicMap.set(q.topicSlug, { correct: 0, total: 0 })
    }
    const entry = topicMap.get(q.topicSlug)!
    entry.total++

    if (answers[i] === q.correctAnswer) {
      correct++
      entry.correct++
    }
  })

  const total = test.questions.length
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
  const scaledScore = Math.round(118 + (percentage / 100) * 14)

  return {
    correct,
    total,
    percentage,
    scaledScore,
    byTopic: Array.from(topicMap.entries()).map(([slug, data]) => ({
      slug,
      ...data,
    })),
  }
}
