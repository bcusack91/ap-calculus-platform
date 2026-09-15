/**
 * MCAT Practice Test Generator
 *
 * Generates section-specific practice sessions with questions from
 * the exit quiz pools.
 */

import { generateExitQuiz } from '../exit-quizzes'
import { shuffleOptions } from '@/lib/shuffle-options'
import { sectionScaledScore } from '@/lib/mcat-scoring'
import { CARS_PASSAGES, SECTION_PASSAGES } from '../mcat/passages'
import type { MCATPassage } from '../mcat/types'
import { chartToPassageBlocks } from './diagnostic-generator'
import type { DiagnosticPassage } from '@/components/MCATDiagnosticVisuals'

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
  /** Present on passage-based questions; the passage is shown beside each question in its set. */
  passage?: DiagnosticPassage
}

/**
 * Uniform Fisher–Yates shuffle (returns a new array). The old
 * `.sort(() => Math.random() - 0.5)` comparator is biased and
 * engine-dependent.
 */
function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function takeRandom<T>(items: T[], count: number): T[] {
  const shuffled = shuffleArray(items)
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
    // All passages, as on the real CARS section: 3 whole 6-question passages.
    questionCount: 18,
    timeLimitMinutes: 32,
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

/* ------------------------------------------------------------------ */
/*  Passage sets                                                       */
/*                                                                     */
/*  The real MCAT is mostly passage-based: each science section is     */
/*  ~75% passage questions (10 passages) and ~25% discretes, and CARS  */
/*  is all passages. Section practice used to be 100% discrete exit-   */
/*  quiz items. Each test now draws whole authored passages up to a    */
/*  target and fills the rest with difficulty-balanced discretes       */
/*  placed between the passage sets.                                   */
/* ------------------------------------------------------------------ */

interface PassagePlan {
  /** Eligible authored passages for this test. */
  pool: () => MCATPassage[]
  /** Passage questions to aim for (whole passages only; may land up to 2 over). */
  target: number
}

const byDiscipline = (section: keyof typeof SECTION_PASSAGES, disciplines: string[]) => () =>
  SECTION_PASSAGES[section].filter((p) => disciplines.includes(p.discipline))

const PASSAGE_PLANS: Record<string, PassagePlan> = {
  'gen-chem-comprehensive': { pool: byDiscipline('chem-phys', ['general chemistry', 'thermodynamics']), target: 11 },
  'organic-comprehensive': { pool: byDiscipline('chem-phys', ['organic chemistry']), target: 11 },
  'physics-comprehensive': { pool: byDiscipline('chem-phys', ['physics']), target: 16 },
  'biochem-comprehensive': {
    pool: () => [
      ...byDiscipline('chem-phys', ['biochemistry'])(),
      ...byDiscipline('bio-biochem', ['biochemistry', 'metabolism'])(),
    ],
    target: 11,
  },
  'chem-phys': { pool: () => SECTION_PASSAGES['chem-phys'], target: 22 },
  cars: { pool: () => CARS_PASSAGES, target: 18 },
  'bio-biochem': { pool: () => SECTION_PASSAGES['bio-biochem'], target: 22 },
  'psych-soc': { pool: () => SECTION_PASSAGES['psych-soc'], target: 15 },
}

/** Topic module a passage question attributes to (drives "Recommended Learning Modules" links). */
function topicSlugForPassage(p: MCATPassage): string {
  const d = p.discipline
  if (p.section === 'cars') return 'mcat-cars-strategy-mcat'
  if (d === 'physics') {
    return /circuit|current|voltage|resist|electro|capacit|charge|magnet|optic|lens/i.test(p.passageText)
      ? 'mcat-physics-electricity-mcat'
      : 'mcat-physics-mechanics-mcat'
  }
  if (d === 'general chemistry' || d === 'thermodynamics') return 'mcat-general-chemistry-mcat'
  if (d === 'organic chemistry') return 'mcat-organic-chemistry-mcat'
  if (d === 'biochemistry' || d === 'metabolism') return 'mcat-biochemistry-foundations-mcat'
  if (d === 'molecular biology') return 'mcat-molecular-biology-mcat'
  if (d === 'cell biology') return 'mcat-cell-biology-mcat'
  if (d === 'microbiology') return 'mcat-microbiology-mcat'
  if (d === 'genetics' || d === 'immunology') return 'mcat-genetics-evolution-mcat'
  if (d === 'physiology') return 'mcat-organ-systems-mcat'
  if (d === 'sociology') return 'mcat-sociology-mcat'
  return 'mcat-psychology-behavior-mcat'
}

function toTestPassage(p: MCATPassage): DiagnosticPassage {
  const blocks = p.chart ? chartToPassageBlocks(p.chart) : null
  return {
    id: `authored-${p.id}`,
    title: p.title,
    body: blocks?.legend ? `${p.passageText}\n\n${blocks.legend}` : p.passageText,
    ...(p.figure ? { figureMarkdown: p.figure } : {}),
    ...(blocks ? { dataTable: blocks.dataTable, figure: blocks.figure } : {}),
  }
}

/** Whole random passages until the plan's target, each as a block of questions in authored order. */
function pickPassageBlocks(plan: PassagePlan, sectionId: string): MCATTestQuestion[][] {
  const blocks: MCATTestQuestion[][] = []
  let count = 0
  for (const p of shuffleArray(plan.pool())) {
    if (count >= plan.target - 1) break
    // Passages hold 5–6 questions, so allow landing up to 2 over the target;
    // with only +1, two 6-question passages (12) could strand a 15-question
    // target well short.
    if (count + p.questions.length > plan.target + 2) continue
    const passage = toTestPassage(p)
    const topicSlug = topicSlugForPassage(p)
    blocks.push(
      p.questions.map((q) => ({
        question: q.question,
        options: [...q.options],
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        topicSlug,
        sectionId,
        difficulty: 'medium' as const,
        passage,
      })),
    )
    count += p.questions.length
  }
  return blocks
}

/** Passage sets in random order with the discretes spread evenly after them. */
function interleaveDiscretes(blocks: MCATTestQuestion[][], discretes: MCATTestQuestion[]): MCATTestQuestion[] {
  if (blocks.length === 0) return discretes
  const perGap = Math.ceil(discretes.length / blocks.length)
  const out: MCATTestQuestion[] = []
  let next = 0
  for (const block of shuffleArray(blocks)) {
    out.push(...block, ...discretes.slice(next, next + perGap))
    next += perGap
  }
  return out
}

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

  // Passage sets first, then discretes for the rest of the section's count.
  const plan = PASSAGE_PLANS[section.id]
  const blocks = plan ? pickPassageBlocks(plan, section.id) : []
  const passageCount = blocks.reduce((n, b) => n + b.length, 0)
  const discreteCount = Math.max(0, section.questionCount - passageCount)
  const discretes =
    discreteCount === 0
      ? []
      : section.difficultyMix
      ? selectQuestionsByDifficulty(allQuestions, discreteCount, section.difficultyMix)
      : shuffleArray(allQuestions).slice(0, discreteCount)
  const selected = interleaveDiscretes(blocks, discretes)

  // Shuffle each question's options so the correct answer isn't stuck at a
  // fixed position (the authored bank stores correctAnswer: 0 throughout).
  // correctAnswer is remapped to the shuffled index here, so scoring, the
  // review screen, and the submit payload — which all read from this test
  // object — stay consistent automatically. Passage explanations reference
  // options by content, so shuffling them is safe too.
  const questions = selected.map(q => {
    const s = shuffleOptions(q.options, q.correctAnswer, q.question)
    return { ...q, options: s.options, correctAnswer: s.correctIndex }
  })

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
  // Shared percentile-anchored 118-132 curve (@/lib/mcat-scoring) — keeps this
  // surface consistent with the diagnostic and the full-length exam.
  const scaledScore = sectionScaledScore(total > 0 ? correct / total : 0)

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
