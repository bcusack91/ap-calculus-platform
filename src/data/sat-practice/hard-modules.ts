/**
 * SAT Hard Track — the 700-800 path.
 *
 * The regular 30-question diagnostic cannot resolve the top band: with 2-4
 * questions per domain, a student who misses two items is indistinguishable
 * from one who misses none for the wrong reasons, and the study plan only
 * recommends domains scoring under 75 percent — so a genuine 750 scorer got an
 * empty plan and nothing to practice.
 *
 * The hard track fixes that:
 *   - Score exceptionally on a regular diagnostic and a 20-question HARD
 *     module unlocks (10 Reading & Writing + 10 Math, drawn entirely from the
 *     700-800 item tier).
 *   - Score exceptionally on TWO regular diagnostics in a row and the regular
 *     diagnostic is retired for that student — they work the 12 hard modules
 *     from then on, because more mid-level screening tells them nothing.
 */
import type { ExitQuizQuestion } from '../exit-quizzes'
import type { DiagnosticQuestion, DiagnosticResults } from './diagnostic-generator'

export const HARD_MODULE_COUNT = 12
export const HARD_MODULE_RW_COUNT = 10
export const HARD_MODULE_MATH_COUNT = 10
export const HARD_MODULE_MINUTES = 30
/** DiagnosticTest.category prefix for hard-module attempts. */
export const HARD_MODULE_CATEGORY = 'sat-hard-module'

/** Consecutive exceptional regular diagnostics before the regular test retires. */
export const CONSECUTIVE_STRONG_TO_GRADUATE = 2

const RW_SLUGS = [
  'sat-vocabulary-context',
  'sat-central-ideas-details',
  'sat-command-evidence',
  'sat-reading-comprehension',
  'sat-punctuation',
  'sat-sentence-structure',
  'sat-transitions-organization',
  'sat-effective-language-use',
]

const MATH_SLUGS = [
  'sat-linear-equations-inequalities',
  'sat-systems-linear-equations',
  'sat-linear-inequalities-graphs',
  'sat-ratios-proportions-percents',
  'sat-functions',
  'sat-nonlinear-equations-functions',
  'sat-quadratic-equations',
  'sat-exponential-functions',
  'sat-polynomials-factoring',
  'sat-polynomial-rational-expressions',
  'sat-exponents-radicals',
  'sat-geometry-basics',
  'sat-geometry-trigonometry',
  'sat-circles',
  'sat-statistics-data-interpretation',
  'sat-data-statistics',
  'sat-scatterplots-line-fit',
  'sat-probability-two-way-tables',
]

/**
 * Qualification for the hard track.
 *
 * Deliberately strict: this is the 700-800 path, and sending a 620 student
 * into all-hard practice teaches discouragement rather than the top band.
 */
export function qualifiesForHardTrack(results: Pick<DiagnosticResults, 'estimatedScore' | 'rwScore' | 'mathScore' | 'percentage'>): boolean {
  if (typeof results.estimatedScore === 'number' && results.estimatedScore >= 1400) return true
  if (typeof results.percentage === 'number' && results.percentage >= 88) return true
  const rw = results.rwScore ?? 0
  const math = results.mathScore ?? 0
  return rw >= 700 && math >= 700
}

export interface HardTrackStatus {
  /** A hard module is available to attempt. */
  unlocked: boolean
  /** Regular diagnostic retired — this student works hard modules only. */
  graduated: boolean
  /** How many consecutive exceptional regular diagnostics, most recent first. */
  consecutiveStrong: number
  /** Hard modules already attempted. */
  completedModules: number
  /** Next module number to serve (1-based), or null when all are done. */
  nextModule: number | null
}

/**
 * Derive the student's hard-track state from their diagnostic history.
 * `regularAttempts` must be newest-first (the history API's default order).
 */
export function hardTrackStatus(
  regularAttempts: { results: unknown }[],
  hardModuleAttempts: { category: string }[] = [],
): HardTrackStatus {
  let consecutiveStrong = 0
  for (const attempt of regularAttempts) {
    const r = attempt.results as Partial<DiagnosticResults> | null
    if (!r || typeof r !== 'object') break
    if (!qualifiesForHardTrack(r as DiagnosticResults)) break
    consecutiveStrong++
  }

  const attemptedNumbers = new Set(
    hardModuleAttempts
      .map((a) => Number(a.category.replace(`${HARD_MODULE_CATEGORY}-`, '')))
      .filter((n) => Number.isFinite(n) && n >= 1 && n <= HARD_MODULE_COUNT),
  )
  let nextModule: number | null = null
  for (let i = 1; i <= HARD_MODULE_COUNT; i++) {
    if (!attemptedNumbers.has(i)) { nextModule = i; break }
  }

  return {
    unlocked: consecutiveStrong >= 1,
    graduated: consecutiveStrong >= CONSECUTIVE_STRONG_TO_GRADUATE,
    consecutiveStrong,
    completedModules: attemptedNumbers.size,
    nextModule,
  }
}

function rotate<T>(arr: T[], by: number): T[] {
  if (arr.length === 0) return arr
  const k = ((by % arr.length) + arr.length) % arr.length
  return [...arr.slice(k), ...arr.slice(0, k)]
}

async function drawHard(
  slugs: string[],
  count: number,
  section: 'reading-writing' | 'math',
  moduleNumber: number,
): Promise<DiagnosticQuestion[]> {
  // Pull straight from the 700-800 tier with a per-module STRIDE rather than
  // sampling randomly: module N takes a different slice of each topic's items,
  // so the twelve modules are near-disjoint and a student working the whole
  // track meets ~240 distinct questions instead of re-seeing the same ones.
  const { hardTierFor } = await import('../exit-quizzes/sat-hard-tier')
  const ordered = rotate(slugs, moduleNumber)
  const out: DiagnosticQuestion[] = []
  const seenStems = new Set<string>()

  // Round-robin across topics so every module spans the domain map.
  for (let pass = 0; pass < 6 && out.length < count; pass++) {
    for (const slug of ordered) {
      if (out.length >= count) break
      const tier = hardTierFor(slug)
      if (tier.length === 0) continue
      // Offset by module so modules do not collide, then step by pass.
      const idx = ((moduleNumber - 1) + pass * HARD_MODULE_COUNT) % tier.length
      const q = tier[idx]
      const stem = q.question.trim().toLowerCase()
      if (seenStems.has(stem)) continue
      seenStems.add(stem)
      out.push({ ...(q as ExitQuizQuestion), domain: slug, sourceSlug: slug, section })
    }
  }
  return out.slice(0, count)
}

export interface HardModuleData {
  moduleNumber: number
  questions: DiagnosticQuestion[]
  totalQuestions: number
  timeLimitMinutes: number
}

/**
 * Build hard module N: 10 Reading & Writing + 10 Math, all from the 700-800
 * tier. Deterministic — the same module number always yields the same test, so
 * a student can resume it and a teacher can discuss specific items.
 */
export async function generateHardModule(moduleNumber: number): Promise<HardModuleData> {
  const n = Math.min(Math.max(1, Math.round(moduleNumber)), HARD_MODULE_COUNT)
  const [rw, math] = await Promise.all([
    drawHard(RW_SLUGS, HARD_MODULE_RW_COUNT, 'reading-writing', n),
    drawHard(MATH_SLUGS, HARD_MODULE_MATH_COUNT, 'math', n),
  ])
  const questions = [...rw, ...math]
  return {
    moduleNumber: n,
    questions,
    totalQuestions: questions.length,
    timeLimitMinutes: HARD_MODULE_MINUTES,
  }
}
