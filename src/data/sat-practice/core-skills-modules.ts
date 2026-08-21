/**
 * SAT Core Skills Track — the build-up path.
 *
 * The mirror image of the hard track. The regular 30-question diagnostic
 * samples the whole 200-800 range, so a student working near 400 misses most
 * of it, lands "weak everywhere", and is handed the same 7-part, 42-section
 * lessons a 1200 student gets. That is not a study plan, it is a wall.
 *
 * The Core Skills track fixes that:
 *   - Score under 950 on a regular diagnostic and the student is placed on
 *     the track (a teacher can override the placement either way).
 *   - They work 20-question modules drawn entirely from the EASY and
 *     light-medium item tiers, and are recommended short 2-part Core Skills
 *     lessons instead of the full-length ones.
 *   - Clear 950 on a Core Skills module and the track retires: they graduate
 *     back to the regular diagnostic and the normal lessons.
 *
 * Scores here are reported on the compressed `easy` band (see SECTION_BANDS in
 * diagnostic-generator), so 950 means roughly 79 percent correct on easy and
 * light-medium items — a real bar, honestly reported, and reachable.
 */
import type { ExitQuizQuestion } from '../exit-quizzes'
import type { DiagnosticQuestion, DiagnosticResults } from './diagnostic-generator'
import { domainIdForTopicSlug } from './diagnostic-generator'

export const CORE_MODULE_COUNT = 12
export const CORE_MODULE_RW_COUNT = 10
export const CORE_MODULE_MATH_COUNT = 10
/** Five minutes longer than a hard module: these students read more slowly,
 *  and time pressure is not the skill under test here. */
export const CORE_MODULE_MINUTES = 35
/** DiagnosticTest.category prefix for Core Skills module attempts. */
export const CORE_MODULE_CATEGORY = 'sat-core-module'

/** Below this estimated score, a regular diagnostic places the student. */
export const CORE_SKILLS_ENTRY_SCORE = 950
/** At or above this on a Core Skills module, the track retires. */
export const CORE_SKILLS_GRADUATION_SCORE = 950

/** Teacher override values stored on User.satTrackOverride. */
export type SatTrackOverride = 'core-skills' | 'regular' | null

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
 * Placement rule for the Core Skills track.
 *
 * Deliberately generous where the hard track is strict: a student anywhere
 * under 950 is better served by short lessons on easy items than by the full
 * regular track, and the cost of a wrong placement is small because clearing
 * one module graduates them straight back out.
 */
export function qualifiesForCoreSkills(
  results: Pick<DiagnosticResults, 'estimatedScore'>,
): boolean {
  return typeof results.estimatedScore === 'number' && results.estimatedScore < CORE_SKILLS_ENTRY_SCORE
}

export interface CoreSkillsTrackStatus {
  /** The student is on the Core Skills track right now. */
  placed: boolean
  /** They cleared the graduation score on a Core Skills module. */
  graduated: boolean
  /** Best estimated score across their Core Skills modules, if any. */
  bestModuleScore: number | null
  /** Points still needed to graduate, or null once graduated / never attempted. */
  pointsToGraduate: number | null
  completedModules: number
  /** Next module number to serve (1-based), or null when all are done. */
  nextModule: number | null
  /** What put them here — a teacher's decision or their diagnostic score. */
  source: 'override' | 'diagnostic' | 'none'
}

function estimatedScoreOf(results: unknown): number | null {
  if (!results || typeof results !== 'object') return null
  const s = (results as { estimatedScore?: unknown }).estimatedScore
  return typeof s === 'number' && Number.isFinite(s) ? s : null
}

/**
 * Derive Core Skills state from history plus any teacher override.
 * `regularAttempts` must be newest-first (the history API's default order).
 *
 * A teacher override always wins: 'core-skills' keeps a student on the track
 * even after they clear 950, and 'regular' keeps them off it however they
 * scored. That is the point of an override — the teacher knows things the
 * score does not.
 */
export function coreSkillsTrackStatus(
  regularAttempts: { results: unknown }[],
  coreModuleAttempts: { category: string; results: unknown }[] = [],
  override: SatTrackOverride = null,
): CoreSkillsTrackStatus {
  const moduleScores = coreModuleAttempts
    .map((a) => estimatedScoreOf(a.results))
    .filter((s): s is number => s !== null)
  const bestModuleScore = moduleScores.length > 0 ? Math.max(...moduleScores) : null
  const graduated = bestModuleScore !== null && bestModuleScore >= CORE_SKILLS_GRADUATION_SCORE

  const latestRegular = regularAttempts.length > 0 ? estimatedScoreOf(regularAttempts[0].results) : null
  const placedByScore = latestRegular !== null && latestRegular < CORE_SKILLS_ENTRY_SCORE

  let placed: boolean
  let source: CoreSkillsTrackStatus['source']
  if (override === 'core-skills') {
    placed = true
    source = 'override'
  } else if (override === 'regular') {
    placed = false
    source = 'override'
  } else {
    placed = placedByScore && !graduated
    source = placed ? 'diagnostic' : 'none'
  }

  const attemptedNumbers = new Set(
    coreModuleAttempts
      .map((a) => Number(a.category.replace(`${CORE_MODULE_CATEGORY}-`, '')))
      .filter((n) => Number.isFinite(n) && n >= 1 && n <= CORE_MODULE_COUNT),
  )
  let nextModule: number | null = null
  for (let i = 1; i <= CORE_MODULE_COUNT; i++) {
    if (!attemptedNumbers.has(i)) { nextModule = i; break }
  }

  return {
    placed,
    graduated,
    bestModuleScore,
    pointsToGraduate:
      graduated || bestModuleScore === null ? null : CORE_SKILLS_GRADUATION_SCORE - bestModuleScore,
    completedModules: attemptedNumbers.size,
    nextModule,
    source,
  }
}

function rotate<T>(arr: T[], by: number): T[] {
  if (arr.length === 0) return arr
  const k = ((by % arr.length) + arr.length) % arr.length
  return [...arr.slice(k), ...arr.slice(0, k)]
}

async function drawEasy(
  slugs: string[],
  count: number,
  section: 'reading-writing' | 'math',
  moduleNumber: number,
): Promise<DiagnosticQuestion[]> {
  // `difficulty: 'easy'` filters each pool to its easy/light-medium items and
  // is explicitly excluded from the 700-800 blend, so no hard item can leak
  // into a Core Skills module. The seed makes the draw deterministic, so a
  // student can resume a module and a teacher can discuss specific items.
  const { generateExitQuiz } = await import('../exit-quizzes')
  const ordered = rotate(slugs, moduleNumber)
  const out: DiagnosticQuestion[] = []
  const seenStems = new Set<string>()

  const pools = await Promise.all(
    ordered.map(async (slug) => {
      try {
        const pool = await generateExitQuiz(slug, 60, 'easy', moduleNumber * 7919)
        // Genuinely easy items first, so a module leans on them and only tops
        // up with light-medium when a topic's easy pool runs short.
        return {
          slug,
          items: [...pool].sort((a, b) => Number(b.difficulty === 'easy') - Number(a.difficulty === 'easy')),
        }
      } catch {
        return { slug, items: [] as ExitQuizQuestion[] }
      }
    }),
  )

  // Round-robin across topics so every module spans the domain map, stepping by
  // module number so the twelve modules are near-disjoint.
  for (let pass = 0; pass < 8 && out.length < count; pass++) {
    for (const { slug, items } of pools) {
      if (out.length >= count) break
      if (items.length === 0) continue
      const idx = ((moduleNumber - 1) + pass * CORE_MODULE_COUNT) % items.length
      const q = items[idx]
      const stem = q.question.trim().toLowerCase()
      if (seenStems.has(stem)) continue
      seenStems.add(stem)
      // `domain` must be a real DIAGNOSTIC_DOMAINS id — the scorer buckets by
      // domain and reports zeros for ids it does not know. `sourceSlug` keeps
      // the topic slug for per-topic recommendation tallies.
      out.push({ ...q, domain: domainIdForTopicSlug(slug) ?? slug, sourceSlug: slug, section })
    }
  }
  return out.slice(0, count)
}

export interface CoreModuleData {
  moduleNumber: number
  questions: DiagnosticQuestion[]
  totalQuestions: number
  timeLimitMinutes: number
}

/**
 * Build Core Skills module N: 10 Reading & Writing + 10 Math, all drawn from
 * the easy and light-medium tiers. Deterministic in the module number.
 */
export async function generateCoreModule(moduleNumber: number): Promise<CoreModuleData> {
  const n = Math.min(Math.max(1, Math.round(moduleNumber)), CORE_MODULE_COUNT)
  const [rw, math] = await Promise.all([
    drawEasy(RW_SLUGS, CORE_MODULE_RW_COUNT, 'reading-writing', n),
    drawEasy(MATH_SLUGS, CORE_MODULE_MATH_COUNT, 'math', n),
  ])
  const questions = [...rw, ...math]
  return {
    moduleNumber: n,
    questions,
    totalQuestions: questions.length,
    timeLimitMinutes: CORE_MODULE_MINUTES,
  }
}
