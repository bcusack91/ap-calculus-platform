/**
 * SAT Practice Test Generator
 *
 * Composes full-length and mini practice tests from existing exit quiz pools.
 * Digital SAT format:
 *   - Reading & Writing: 2 modules × 27 questions × 32 min each
 *   - Math: 2 modules × 22 questions × 35 min each
 *   - Total: 98 questions, 134 minutes
 *
 * Mini test (half-length):
 *   - Reading & Writing: 27 questions, 32 min
 *   - Math: 22 questions, 35 min
 *   - Total: 49 questions, 67 minutes
 */

import { generateExitQuiz, type ExitQuizQuestion } from '../exit-quizzes'
import { getBalancedPassages, type ReadingPassage } from '../sat-passages'
import { generateGridInProblems, type GridInProblem } from '../sat-grid-in'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type SATSectionType = 'reading-writing' | 'math'

export interface SATTestQuestion extends ExitQuizQuestion {
  section: SATSectionType
  sourceSlug: string // which quiz pool generated the question
  passage?: {
    id: string
    title: string
    genre: string
    text: string
  }
  /**
   * Present only for student-produced-response (grid-in / SPR) items. When set,
   * this is a typed-answer question: `options` is empty and `correctIndex` is
   * -1; the runner grades the typed value against these fields instead.
   */
  gridIn?: {
    correctAnswer: number
    acceptableAnswers: number[]
    tolerance: number
  }
}

export interface SATTestSection {
  id: string
  name: string
  section: SATSectionType
  moduleNum: number
  questionCount: number
  timeLimitSeconds: number
  questions: SATTestQuestion[]
}

export interface SATFullTest {
  testNumber: number
  format: 'full' | 'mini'
  sections: SATTestSection[]
  totalQuestions: number
  totalTimeSeconds: number
}

/* ------------------------------------------------------------------ */
/*  Question Sources                                                   */
/* ------------------------------------------------------------------ */

const RW_READING_SLUGS = [
  'sat-reading-comprehension',
  'sat-vocabulary-context',
  'sat-central-ideas-details',
  'sat-command-evidence',
  'sat-finding-textual-evidence',
]

const RW_WRITING_SLUGS = [
  'sat-grammar-usage',
  'sat-grammar-conventions',
  'sat-punctuation',
  'sat-punctuation-commas-semicolons',
  'sat-sentence-structure',
  'sat-pronoun-agreement',
  'sat-effective-language-use',
  'sat-transitions-organization',
  'sat-conciseness-redundancy',
  'sat-subject-verb-agreement',
]

const MATH_SLUGS = [
  'sat-linear-equations-inequalities',
  'sat-quadratic-equations',
  'sat-functions',
  'sat-exponents-radicals',
  'sat-ratios-proportions-percents',
  'sat-statistics-data-interpretation',
  'sat-exponential-functions',
  'sat-circles',
  'sat-systems-linear-equations',
  'sat-linear-inequalities-graphs',
  'sat-probability-two-way-tables',
  'sat-scatterplots-line-fit',
  'sat-data-statistics',
  'sat-polynomials-factoring',
  'sat-polynomial-rational-expressions',
  'sat-nonlinear-equations-functions',
  'sat-geometry-trigonometry',
  'sat-geometry-basics',
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Generate N questions from a pool of slugs, balancing across slug sources.
 */
async function generateSectionQuestions(
  slugs: string[],
  count: number,
  section: SATSectionType,
  usedQuestionTexts?: Set<string>,
): Promise<SATTestQuestion[]> {
  const questionsPerSlug = Math.ceil(count / slugs.length)
  const pool: SATTestQuestion[] = []

  for (const slug of slugs) {
    try {
      const questions = await generateExitQuiz(slug, questionsPerSlug)
      for (const q of questions) {
        // Static pools (all R&W) can serve the same item to both modules of a
        // test — skip anything an earlier module already used.
        if (usedQuestionTexts?.has(q.question)) continue
        pool.push({
          ...q,
          section,
          sourceSlug: slug,
        })
      }
    } catch {
      // Skip if slug has no quiz pool
    }
  }

  // Shuffle, take exactly count, and record what this module consumed
  const picked = shuffle(pool).slice(0, count)
  if (usedQuestionTexts) for (const q of picked) usedQuestionTexts.add(q.question)
  return picked
}

/**
 * Convert passage-bank entries into SATTestQuestions.
 * Each passage produces one question (Digital SAT format).
 */
function passagesToTestQuestions(passages: ReadingPassage[]): SATTestQuestion[] {
  const questions: SATTestQuestion[] = []
  for (const p of passages) {
    for (const q of p.questions) {
      questions.push({
        id: `sat-passage-${p.genre}-${q.question.slice(0, 20).replace(/\W/g, '')}`,
        question: q.question,
        options: q.options,
        correctIndex: q.correctAnswer,
        explanation: q.explanation,
        category: `passage-${p.genre}`,
        section: 'reading-writing',
        sourceSlug: `passage-${p.genre}`,
        passage: {
          id: p.id,
          title: p.title,
          genre: p.genre,
          text: p.text,
        },
      })
    }
  }
  return questions
}

/**
 * Generate R&W questions with a mix of passage-based and skills-based items.
 * Digital SAT R&W modules blend both types.
 */
async function generateRWQuestions(
  count: number,
  passageCount: number,
  dedupe?: { usedQuestionTexts: Set<string>; usedPassageIds: Set<string> },
): Promise<SATTestQuestion[]> {
  const rwSlugs = [...RW_READING_SLUGS, ...RW_WRITING_SLUGS]

  // Get passage-based questions. Over-draw so that after excluding passages an
  // earlier module already used we still have enough (the bank holds 60).
  const candidates = getBalancedPassages(passageCount * 2 + 4)
    .filter((p) => !dedupe?.usedPassageIds.has(p.id))
    .slice(0, passageCount)
  if (dedupe) for (const p of candidates) dedupe.usedPassageIds.add(p.id)
  const passageQs = passagesToTestQuestions(candidates)

  // Get remaining from exit quiz pools
  const remaining = count - passageQs.length
  const poolQs = remaining > 0
    ? await generateSectionQuestions(rwSlugs, remaining, 'reading-writing', dedupe?.usedQuestionTexts)
    : []

  return shuffle([...passageQs, ...poolQs]).slice(0, count)
}

/**
 * Convert procedurally-generated grid-in (SPR) problems into SATTestQuestions.
 * SPR items have no answer choices: `options` is empty and `correctIndex` is -1;
 * the runner grades the typed response against the `gridIn` key.
 */
function gridInsToTestQuestions(problems: GridInProblem[]): SATTestQuestion[] {
  return problems.map((p) => ({
    id: `sat-gridin-${p.id}`,
    question: p.question,
    options: [],
    correctIndex: -1,
    explanation: p.explanation,
    category: p.category,
    difficulty: p.difficulty,
    section: 'math' as const,
    sourceSlug: `grid-in-${p.category.toLowerCase().replace(/\s+/g, '-')}`,
    gridIn: {
      correctAnswer: p.correctAnswer,
      acceptableAnswers: p.acceptableAnswers,
      tolerance: p.tolerance,
    },
  }))
}

/**
 * Build one Math module: a block of multiple-choice items followed by
 * student-produced-response (grid-in) items. On the digital SAT ~25% of Math
 * questions are SPR and they appear at the end of each module, so grid-ins are
 * appended after the MCQ block rather than shuffled through it.
 */
async function generateMathModule(
  mcqCount: number,
  gridInCount: number,
  usedQuestionTexts?: Set<string>,
): Promise<SATTestQuestion[]> {
  const mcq = await generateSectionQuestions(MATH_SLUGS, mcqCount, 'math', usedQuestionTexts)
  const gridIns = gridInsToTestQuestions(generateGridInProblems(gridInCount))
  return [...mcq, ...gridIns]
}

/* ------------------------------------------------------------------ */
/*  Score Estimation                                                   */
/* ------------------------------------------------------------------ */

/**
 * Estimate scaled SAT score from raw correct answers.
 * Digital SAT uses equating/scaling — this is an approximation.
 *
 * Reading & Writing: ~27 raw → 200-800 scaled per module
 * Math: ~22 raw → 200-800 scaled per module
 */
export function estimateScaledScore(
  correct: number,
  total: number,
  section: SATSectionType,
): number {
  const pct = total > 0 ? correct / total : 0

  // Approximate conversion curves based on official SAT tables
  if (section === 'reading-writing') {
    // R&W: 200 base, up to 800
    if (pct >= 0.98) return 800
    if (pct >= 0.95) return 780
    if (pct >= 0.90) return 750
    if (pct >= 0.85) return 720
    if (pct >= 0.80) return 690
    if (pct >= 0.75) return 660
    if (pct >= 0.70) return 630
    if (pct >= 0.65) return 600
    if (pct >= 0.60) return 570
    if (pct >= 0.55) return 540
    if (pct >= 0.50) return 510
    if (pct >= 0.45) return 480
    if (pct >= 0.40) return 450
    if (pct >= 0.35) return 420
    if (pct >= 0.30) return 390
    if (pct >= 0.25) return 360
    if (pct >= 0.20) return 330
    if (pct >= 0.15) return 300
    if (pct >= 0.10) return 270
    if (pct >= 0.05) return 240
    return 200
  } else {
    // Math: slightly different curve
    if (pct >= 0.98) return 800
    if (pct >= 0.95) return 790
    if (pct >= 0.90) return 760
    if (pct >= 0.85) return 730
    if (pct >= 0.80) return 700
    if (pct >= 0.75) return 670
    if (pct >= 0.70) return 640
    if (pct >= 0.65) return 610
    if (pct >= 0.60) return 580
    if (pct >= 0.55) return 550
    if (pct >= 0.50) return 520
    if (pct >= 0.45) return 490
    if (pct >= 0.40) return 460
    if (pct >= 0.35) return 430
    if (pct >= 0.30) return 400
    if (pct >= 0.25) return 370
    if (pct >= 0.20) return 340
    if (pct >= 0.15) return 310
    if (pct >= 0.10) return 280
    if (pct >= 0.05) return 250
    return 200
  }
}

/**
 * Analyze weak and strong areas from quiz results.
 */
export function analyzePerformance(
  answers: {
    question: SATTestQuestion
    selectedIndex: number
    correct: boolean
  }[],
): { weakAreas: string[]; strengths: string[] } {
  // Group by sourceSlug
  const bySlug = new Map<string, { correct: number; total: number }>()
  for (const a of answers) {
    const slug = a.question.sourceSlug
    const entry = bySlug.get(slug) ?? { correct: 0, total: 0 }
    entry.total++
    if (a.correct) entry.correct++
    bySlug.set(slug, entry)
  }

  const weakAreas: string[] = []
  const strengths: string[] = []

  for (const [slug, { correct, total }] of bySlug) {
    const pct = correct / total
    const label = slug
      .replace(/^sat-/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())

    if (pct < 0.5) weakAreas.push(label)
    else if (pct >= 0.8) strengths.push(label)
  }

  return { weakAreas, strengths }
}

/* ------------------------------------------------------------------ */
/*  Test Generation                                                    */
/* ------------------------------------------------------------------ */

/**
 * Generate a full-length SAT practice test (98 questions, 134 minutes).
 */
export async function generateFullTest(testNumber: number): Promise<SATFullTest> {
  // Shared across all four modules so the same passage or pool question can
  // never appear twice within one test.
  const dedupe = { usedQuestionTexts: new Set<string>(), usedPassageIds: new Set<string>() }

  // Each R&W module gets ~8 passage-based questions (out of 27)
  const sections: SATTestSection[] = [
    {
      id: 'rw-1',
      name: 'Reading & Writing — Module 1',
      section: 'reading-writing',
      moduleNum: 1,
      questionCount: 27,
      timeLimitSeconds: 32 * 60, // 32 minutes
      questions: await generateRWQuestions(27, 8, dedupe),
    },
    {
      id: 'rw-2',
      name: 'Reading & Writing — Module 2',
      section: 'reading-writing',
      moduleNum: 2,
      questionCount: 27,
      timeLimitSeconds: 32 * 60,
      questions: await generateRWQuestions(27, 8, dedupe),
    },
    {
      id: 'math-1',
      name: 'Math — Module 1',
      section: 'math',
      moduleNum: 1,
      questionCount: 22,
      timeLimitSeconds: 35 * 60, // 35 minutes
      // 16 MCQ + 6 grid-in (~27%), matching the digital SAT's SPR share
      questions: await generateMathModule(16, 6, dedupe.usedQuestionTexts),
    },
    {
      id: 'math-2',
      name: 'Math — Module 2',
      section: 'math',
      moduleNum: 2,
      questionCount: 22,
      timeLimitSeconds: 35 * 60,
      questions: await generateMathModule(16, 6, dedupe.usedQuestionTexts),
    },
  ]

  return {
    testNumber,
    format: 'full',
    sections,
    totalQuestions: sections.reduce((s, sec) => s + sec.questionCount, 0),
    totalTimeSeconds: sections.reduce((s, sec) => s + sec.timeLimitSeconds, 0),
  }
}

/**
 * Generate a mini practice test (49 questions, 67 minutes).
 * Good for focused practice or time-limited sessions.
 */
export async function generateMiniTest(testNumber: number): Promise<SATFullTest> {
  // Mini test R&W gets ~6 passage-based questions
  const sections: SATTestSection[] = [
    {
      id: 'rw-1',
      name: 'Reading & Writing',
      section: 'reading-writing',
      moduleNum: 1,
      questionCount: 27,
      timeLimitSeconds: 32 * 60,
      questions: await generateRWQuestions(27, 6),
    },
    {
      id: 'math-1',
      name: 'Math',
      section: 'math',
      moduleNum: 1,
      questionCount: 22,
      timeLimitSeconds: 35 * 60,
      questions: await generateMathModule(16, 6),
    },
  ]

  return {
    testNumber,
    format: 'mini',
    sections,
    totalQuestions: sections.reduce((s, sec) => s + sec.questionCount, 0),
    totalTimeSeconds: sections.reduce((s, sec) => s + sec.timeLimitSeconds, 0),
  }
}

/**
 * Available practice tests with metadata.
 */
export const PRACTICE_TESTS = [
  { id: 1, title: 'Practice Test 1', description: 'Full-length Digital SAT simulation with all sections', difficulty: 'Standard' },
  { id: 2, title: 'Practice Test 2', description: 'Full-length test with emphasis on algebra and grammar', difficulty: 'Standard' },
  { id: 3, title: 'Practice Test 3', description: 'Full-length test with varied question types', difficulty: 'Standard' },
  { id: 4, title: 'Practice Test 4', description: 'Challenging test with advanced problem solving', difficulty: 'Hard' },
  { id: 5, title: 'Practice Test 5', description: 'Comprehensive review across all SAT domains', difficulty: 'Standard' },
] as const
