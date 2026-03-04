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
}

/**
 * Returns today's two SAT questions (one Math, one R&W).
 * Deterministic per calendar day.
 */
export function getDailyQuestions(): DailyQuestion[] {
  const day = dayOfYear()

  const mathSlug = MATH_SLUGS[day % MATH_SLUGS.length]
  const rwSlug = RW_SLUGS[day % RW_SLUGS.length]

  // Generate a small pool and pick deterministically
  const mathPool = generateExitQuiz(mathSlug, 5)
  const rwPool = generateExitQuiz(rwSlug, 5)

  const mathQ = mathPool[day % mathPool.length]
  const rwQ = rwPool[day % rwPool.length]

  return [
    { section: 'math', topicSlug: mathSlug, question: mathQ, dayNumber: day },
    {
      section: 'reading-writing',
      topicSlug: rwSlug,
      question: rwQ,
      dayNumber: day,
    },
  ]
}
