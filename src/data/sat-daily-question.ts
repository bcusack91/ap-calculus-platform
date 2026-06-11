/**
 * SAT Question of the Day
 *
 * Deterministic daily question generator. Uses the day of year as seed
 * to pick one Math and one R&W question, so every user sees the same
 * questions on a given day.
 */

import { generateExitQuiz, type ExitQuizQuestion } from '@/data/exit-quizzes'

// All available SAT exit-quiz slugs, split by section
const MATH_SLUGS = [
  'sat-linear-equations',
  'sat-linear-inequalities',
  'sat-systems-equations',
  'sat-quadratic-equations',
  'sat-functions-graphs',
  'sat-exponents-radicals',
  'sat-polynomials-factoring',
  'sat-statistics-data',
  'sat-geometry-trigonometry',
  'sat-circles-complex-numbers',
  'sat-word-problems',
  'sat-calculator-strategy',
  'sat-passport-advanced-math',
  'sat-problem-solving-data',
]

const RW_SLUGS = [
  'sat-reading-comprehension',
  'sat-vocabulary-context',
  'sat-sentence-structure',
  'sat-effective-language-use',
  'sat-grammar-conventions',
  'sat-punctuation-commas-semicolons',
  'sat-transitions',
  'sat-central-ideas-details',
  'sat-command-evidence',
  'sat-finding-textual-evidence',
  'sat-expression-ideas',
  'sat-reading-writing-strategy',
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface DailyQuestion {
  section: 'math' | 'reading-writing'
  topicSlug: string
  question: ExitQuizQuestion
  dayNumber: number
  /** True when this slug was chosen because the diagnostic flagged it weak. */
  targeted?: boolean
}

/**
 * Maps a diagnostic domain id to the daily-question (exit-quiz) slugs that
 * belong to it, so a student's weak diagnostic domains can steer the daily
 * question toward their gaps.
 */
export const DOMAIN_TO_DAILY_SLUGS: Record<string, { section: 'math' | 'reading-writing'; slugs: string[] }> = {
  comprehension: { section: 'reading-writing', slugs: ['sat-reading-comprehension', 'sat-central-ideas-details'] },
  evidence: { section: 'reading-writing', slugs: ['sat-command-evidence', 'sat-finding-textual-evidence'] },
  vocabulary: { section: 'reading-writing', slugs: ['sat-vocabulary-context'] },
  grammar: { section: 'reading-writing', slugs: ['sat-grammar-conventions'] },
  expression: { section: 'reading-writing', slugs: ['sat-effective-language-use', 'sat-transitions', 'sat-expression-ideas'] },
  punctuation: { section: 'reading-writing', slugs: ['sat-punctuation-commas-semicolons', 'sat-sentence-structure'] },
  algebra: { section: 'math', slugs: ['sat-linear-equations', 'sat-linear-inequalities', 'sat-systems-equations'] },
  'advanced-math': { section: 'math', slugs: ['sat-quadratic-equations', 'sat-polynomials-factoring', 'sat-passport-advanced-math'] },
  functions: { section: 'math', slugs: ['sat-functions-graphs', 'sat-exponents-radicals'] },
  'problem-solving': { section: 'math', slugs: ['sat-statistics-data', 'sat-problem-solving-data', 'sat-word-problems'] },
  geometry: { section: 'math', slugs: ['sat-geometry-trigonometry', 'sat-circles-complex-numbers'] },
}

/**
 * Returns today's two SAT questions (one Math, one R&W). Deterministic per
 * calendar day. When `preferred` math/R&W slugs are supplied (a signed-in
 * student's weak areas), the question is drawn from those instead — still
 * deterministic per day so it's stable across a session.
 */
export async function getDailyQuestions(
  preferred?: { mathSlugs?: string[]; rwSlugs?: string[] },
): Promise<DailyQuestion[]> {
  const day = dayOfYear()

  const mathPoolSlugs = preferred?.mathSlugs?.filter((s) => MATH_SLUGS.includes(s))
  const rwPoolSlugs = preferred?.rwSlugs?.filter((s) => RW_SLUGS.includes(s))
  const mathTargeted = !!mathPoolSlugs?.length
  const rwTargeted = !!rwPoolSlugs?.length

  const mathSlug = mathTargeted ? mathPoolSlugs![day % mathPoolSlugs!.length] : MATH_SLUGS[day % MATH_SLUGS.length]
  const rwSlug = rwTargeted ? rwPoolSlugs![day % rwPoolSlugs!.length] : RW_SLUGS[day % RW_SLUGS.length]

  // Generate a small pool and pick deterministically
  const mathPool = await generateExitQuiz(mathSlug, 5)
  const rwPool = await generateExitQuiz(rwSlug, 5)

  const mathQ = mathPool[day % mathPool.length]
  const rwQ = rwPool[day % rwPool.length]

  return [
    { section: 'math', topicSlug: mathSlug, question: mathQ, dayNumber: day, targeted: mathTargeted },
    {
      section: 'reading-writing',
      topicSlug: rwSlug,
      question: rwQ,
      dayNumber: day,
      targeted: rwTargeted,
    },
  ]
}
