/**
 * ACT Practice Test Generator
 *
 * Composes full-length and mini practice tests from existing exit quiz pools.
 * Real ACT format:
 *   - English: 75 questions, 45 minutes
 *   - Math: 60 questions, 60 minutes
 *   - Reading: 40 questions, 35 minutes
 *   - Science: 40 questions, 35 minutes
 *   - Total: 215 questions, 175 minutes
 *
 * Mini test (half-length):
 *   - English: 38 questions, 23 min
 *   - Math: 30 questions, 30 min
 *   - Reading: 20 questions, 18 min
 *   - Science: 20 questions, 18 min
 *   - Total: 108 questions, 89 minutes
 */

import { generateExitQuiz, type ExitQuizQuestion } from '../exit-quizzes'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type ACTSectionType = 'english' | 'math' | 'reading' | 'science'

export interface ACTTestQuestion extends ExitQuizQuestion {
  section: ACTSectionType
  sourceSlug: string
}

export interface ACTTestSection {
  id: string
  name: string
  section: ACTSectionType
  questionCount: number
  timeLimitSeconds: number
  questions: ACTTestQuestion[]
}

export interface ACTFullTest {
  testNumber: number
  format: 'full' | 'mini'
  sections: ACTTestSection[]
  totalQuestions: number
  totalTimeSeconds: number
}

/* ------------------------------------------------------------------ */
/*  Question Sources                                                   */
/* ------------------------------------------------------------------ */

const ENGLISH_SLUGS = [
  'act-english-grammar-act',
  'act-english-grammar-usage',
  'act-english-punctuation-act',
  'act-english-punctuation',
  'act-english-sentence-structure',
  'act-english-rhetorical-act',
  'act-english-rhetorical-skills',
  'act-english-strategy-act',
  'act-english-strategy',
]

const MATH_SLUGS = [
  'act-pre-algebra-basics-act',
  'act-math-pre-algebra',
  'act-math-elementary-algebra',
  'act-algebra-equations-act',
  'act-intermediate-algebra-act',
  'act-math-intermediate-algebra',
  'act-coordinate-geometry-act',
  'act-math-coordinate-geometry',
  'act-plane-geometry-act',
  'act-math-plane-geometry',
  'act-trigonometry-act',
  'act-statistics-probability-act',
  'act-math-strategy-act',
]

const READING_SLUGS = [
  'act-reading-main-ideas-act',
  'act-reading-passage-types-act',
  'act-reading-strategy-act',
  'act-reading-science-tips-act',
  'act-reading-prose-fiction',
  'act-reading-social-science',
  'act-reading-humanities',
  'act-reading-natural-science',
  'act-reading-paired-passages',
]

const SCIENCE_SLUGS = [
  'act-science-data-act',
  'act-science-data-representation',
  'act-science-experiments-act',
  'act-science-research-summaries',
  'act-science-experimental-design',
  'act-science-reasoning-act',
  'act-science-conflicting-viewpoints',
  'act-science-scientific-reasoning',
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

async function generateSectionQuestions(
  slugs: string[],
  count: number,
  section: ACTSectionType,
): Promise<ACTTestQuestion[]> {
  const questionsPerSlug = Math.ceil(count / slugs.length)
  const pool: ACTTestQuestion[] = []

  for (const slug of slugs) {
    try {
      const questions = await generateExitQuiz(slug, questionsPerSlug)
      for (const q of questions) {
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

  return shuffle(pool).slice(0, count)
}

/* ------------------------------------------------------------------ */
/*  Score Estimation                                                   */
/* ------------------------------------------------------------------ */

export function estimateACTScore(correct: number, total: number): number {
  const pct = total > 0 ? (correct / total) * 100 : 0
  if (pct >= 97) return 36
  if (pct >= 93) return 34
  if (pct >= 90) return 33
  if (pct >= 87) return 32
  if (pct >= 83) return 31
  if (pct >= 80) return 30
  if (pct >= 77) return 29
  if (pct >= 73) return 28
  if (pct >= 70) return 27
  if (pct >= 67) return 26
  if (pct >= 63) return 25
  if (pct >= 60) return 24
  if (pct >= 57) return 23
  if (pct >= 53) return 22
  if (pct >= 50) return 21
  if (pct >= 47) return 20
  if (pct >= 43) return 19
  if (pct >= 40) return 18
  if (pct >= 37) return 17
  if (pct >= 33) return 16
  if (pct >= 30) return 15
  if (pct >= 25) return 14
  if (pct >= 20) return 13
  if (pct >= 15) return 12
  if (pct >= 10) return 11
  return 10
}

export function analyzePerformance(
  answers: {
    question: ACTTestQuestion
    selectedIndex: number
    correct: boolean
  }[],
): { weakAreas: string[]; strengths: string[] } {
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
      .replace(/^act-/, '')
      .replace(/-act$/, '')
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

export async function generateFullTest(testNumber: number): Promise<ACTFullTest> {
  const sections: ACTTestSection[] = [
    {
      id: 'english',
      name: 'English',
      section: 'english',
      questionCount: 75,
      timeLimitSeconds: 45 * 60,
      questions: await generateSectionQuestions(ENGLISH_SLUGS, 75, 'english'),
    },
    {
      id: 'math',
      name: 'Mathematics',
      section: 'math',
      questionCount: 60,
      timeLimitSeconds: 60 * 60,
      questions: await generateSectionQuestions(MATH_SLUGS, 60, 'math'),
    },
    {
      id: 'reading',
      name: 'Reading',
      section: 'reading',
      questionCount: 40,
      timeLimitSeconds: 35 * 60,
      questions: await generateSectionQuestions(READING_SLUGS, 40, 'reading'),
    },
    {
      id: 'science',
      name: 'Science',
      section: 'science',
      questionCount: 40,
      timeLimitSeconds: 35 * 60,
      questions: await generateSectionQuestions(SCIENCE_SLUGS, 40, 'science'),
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

export async function generateMiniTest(testNumber: number): Promise<ACTFullTest> {
  const sections: ACTTestSection[] = [
    {
      id: 'english',
      name: 'English',
      section: 'english',
      questionCount: 38,
      timeLimitSeconds: 23 * 60,
      questions: await generateSectionQuestions(ENGLISH_SLUGS, 38, 'english'),
    },
    {
      id: 'math',
      name: 'Mathematics',
      section: 'math',
      questionCount: 30,
      timeLimitSeconds: 30 * 60,
      questions: await generateSectionQuestions(MATH_SLUGS, 30, 'math'),
    },
    {
      id: 'reading',
      name: 'Reading',
      section: 'reading',
      questionCount: 20,
      timeLimitSeconds: 18 * 60,
      questions: await generateSectionQuestions(READING_SLUGS, 20, 'reading'),
    },
    {
      id: 'science',
      name: 'Science',
      section: 'science',
      questionCount: 20,
      timeLimitSeconds: 18 * 60,
      questions: await generateSectionQuestions(SCIENCE_SLUGS, 20, 'science'),
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

export const PRACTICE_TESTS = [
  { id: 1, title: 'Practice Test 1', description: 'Full-length ACT simulation with all 4 sections', difficulty: 'Standard' },
  { id: 2, title: 'Practice Test 2', description: 'Full-length test with emphasis on algebra and grammar', difficulty: 'Standard' },
  { id: 3, title: 'Practice Test 3', description: 'Full-length test with varied question types', difficulty: 'Standard' },
  { id: 4, title: 'Practice Test 4', description: 'Challenging test with advanced science reasoning', difficulty: 'Hard' },
  { id: 5, title: 'Practice Test 5', description: 'Comprehensive review across all ACT domains', difficulty: 'Standard' },
] as const
