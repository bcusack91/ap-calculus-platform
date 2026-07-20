/**
 * SAT Question of the Day
 *
 * Deterministic daily question generator. Uses the day of year as seed
 * to pick one Math and one R&W question, so every user sees the same
 * questions on a given day.
 */

import { generateExitQuiz, type ExitQuizQuestion } from '@/data/exit-quizzes'

// All available SAT exit-quiz slugs, split by section.
// Every entry MUST exist in the exit-quiz registry (src/data/exit-quizzes/index.ts
// quizLoaders) — generateExitQuiz throws on unknown slugs.
const MATH_SLUGS = [
  'sat-linear-equations-inequalities',
  'sat-linear-inequalities-graphs',
  'sat-systems-linear-equations',
  'sat-quadratic-equations',
  'sat-functions',
  'sat-exponents-radicals',
  'sat-exponential-functions',
  'sat-polynomials-factoring',
  'sat-polynomial-rational-expressions',
  'sat-nonlinear-equations-functions',
  'sat-statistics-data-interpretation',
  'sat-data-statistics',
  'sat-scatterplots-line-fit',
  'sat-probability-two-way-tables',
  'sat-ratios-proportions-percents',
  'sat-geometry-trigonometry',
  'sat-geometry-basics',
  'sat-circles',
  'sat-complex-numbers',
]

const RW_SLUGS = [
  'sat-reading-comprehension',
  'sat-vocabulary-context',
  'sat-sentence-structure',
  'sat-effective-language-use',
  'sat-grammar-conventions',
  'sat-grammar-usage',
  'sat-punctuation',
  'sat-punctuation-commas-semicolons',
  'sat-pronoun-agreement',
  'sat-subject-verb-agreement',
  'sat-transitions-organization',
  'sat-conciseness-redundancy',
  'sat-central-ideas-details',
  'sat-command-evidence',
  'sat-finding-textual-evidence',
]

// UTC so the question flips at the same moment as the date the API reports.
function dayOfYear(): number {
  const now = new Date()
  const startUtc = Date.UTC(now.getUTCFullYear(), 0, 0)
  return Math.floor((now.getTime() - startUtc) / (1000 * 60 * 60 * 24))
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
  grammar: { section: 'reading-writing', slugs: ['sat-grammar-conventions', 'sat-grammar-usage', 'sat-subject-verb-agreement', 'sat-pronoun-agreement'] },
  expression: { section: 'reading-writing', slugs: ['sat-effective-language-use', 'sat-transitions-organization', 'sat-conciseness-redundancy'] },
  punctuation: { section: 'reading-writing', slugs: ['sat-punctuation', 'sat-punctuation-commas-semicolons', 'sat-sentence-structure'] },
  algebra: { section: 'math', slugs: ['sat-linear-equations-inequalities', 'sat-linear-inequalities-graphs', 'sat-systems-linear-equations'] },
  'advanced-math': { section: 'math', slugs: ['sat-quadratic-equations', 'sat-polynomials-factoring', 'sat-polynomial-rational-expressions', 'sat-nonlinear-equations-functions'] },
  functions: { section: 'math', slugs: ['sat-functions', 'sat-exponents-radicals', 'sat-exponential-functions'] },
  'problem-solving': { section: 'math', slugs: ['sat-statistics-data-interpretation', 'sat-data-statistics', 'sat-scatterplots-line-fit', 'sat-probability-two-way-tables', 'sat-ratios-proportions-percents'] },
  geometry: { section: 'math', slugs: ['sat-geometry-trigonometry', 'sat-geometry-basics', 'sat-circles', 'sat-complex-numbers'] },
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

  // Generate a small pool and pick deterministically. A broken slug must never
  // take the endpoint down — fall back to the first slug of the section.
  const safePool = async (slug: string, fallback: string) => {
    try {
      return { slug, pool: await generateExitQuiz(slug, 5) }
    } catch {
      return { slug: fallback, pool: await generateExitQuiz(fallback, 5) }
    }
  }
  const { slug: mathSlugUsed, pool: mathPool } = await safePool(mathSlug, MATH_SLUGS[0])
  const { slug: rwSlugUsed, pool: rwPool } = await safePool(rwSlug, RW_SLUGS[0])

  const mathQ = mathPool[day % mathPool.length]
  const rwQ = rwPool[day % rwPool.length]

  return [
    { section: 'math', topicSlug: mathSlugUsed, question: mathQ, dayNumber: day, targeted: mathTargeted },
    {
      section: 'reading-writing',
      topicSlug: rwSlugUsed,
      question: rwQ,
      dayNumber: day,
      targeted: rwTargeted,
    },
  ]
}
