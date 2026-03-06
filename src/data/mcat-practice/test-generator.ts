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
}

/* ------------------------------------------------------------------ */
/*  Section Definitions                                                */
/* ------------------------------------------------------------------ */

export const MCAT_SECTIONS: MCATSection[] = [
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
          topicSlug: slug,
          sectionId: section.id,
        }
      })
      allQuestions.push(...tagged)
    } catch {
      // Skip if quiz not available
    }
  }

  // Shuffle and cap
  const questions = allQuestions
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
