/**
 * Server side of competitive pacing (see bot-pacing.ts for the model).
 *
 * The match-creation routes call `paceMatchQuestions` once, at creation, and
 * store the result in gameData: `paceCourseKey`, `expectedSeconds` on every
 * question, and the Accuracy Challenge `timeLimitSeconds`. The client then
 * reads those numbers instead of guessing — and matches created before pacing
 * existed fall back to the client-side static resolver + the legacy 5-minute
 * clock (matchTimeLimitSeconds).
 *
 * Resolution order: the static routing tables → the SAT hierarchy → a scan of
 * the question banks (a bank topic slug like 'power-rule' or
 * 'activation-energy-arrhenius' carries no course in its name) → the slug
 * naming conventions. The bank scan is lazy and cached per server instance;
 * generateMatchQuestions already pays the same cost on its first AP draw.
 */

import {
  accuracyChallengeLimitSeconds,
  annotateExpectedSeconds,
  asyncChallengeDefaultLimit,
  courseKeyFromPatterns,
  courseKeyFromTables,
  isUnitCircleSlug,
  slowestCourse,
  type PaceCourseKey,
} from '@/lib/bot-pacing'
import { isMultiSlug, parseMultiSlug, type MatchQuestion } from '@/lib/competitive-utils'

type SlugCarrier = { topicSlug?: string }
type BankScan = [PaceCourseKey, () => Promise<SlugCarrier[]>]

// Every bank whose questions carry a canonical topicSlug. Statistics and
// psychology have no per-question slug (their lesson lists live in the static
// tables), SAT and MCAT have their own hierarchies, and the legacy calculus
// category banks are direct keys.
const BANK_SCANS: BankScan[] = [
  ['ap-biology', async () => (await import('@/data/competitive-questions/ap-biology-bank')).getApBiologyQuestions(1_000_000)],
  ['ap-chemistry', async () => (await import('@/data/competitive-questions/ap-chemistry-bank')).getApChemistryQuestions(1_000_000)],
  ['ap-physics1', async () => (await import('@/data/competitive-questions/ap-physics1-bank')).getApPhysics1Questions(1_000_000)],
  ['ap-physics2', async () => (await import('@/data/competitive-questions/ap-physics2-bank')).getApPhysics2Questions(1_000_000)],
  ['ap-physics-c-mech', async () => (await import('@/data/competitive-questions/ap-physics-c-mech-bank')).getApPhysicsCMechQuestions(1_000_000)],
  ['ap-physics-c-em', async () => (await import('@/data/competitive-questions/ap-physics-c-em-bank')).getApPhysicsCEMQuestions(1_000_000)],
  ['ap-calculus-ab', async () => (await import('@/data/competitive-questions/ap-calculus-bank')).getApCalculusQuestions(1_000_000)],
  ['ap-calculus-bc', async () => (await import('@/data/competitive-questions/ap-calculus-bc-bank')).getApCalculusBCQuestions(1_000_000)],
  ['ap-us-gov', async () => (await import('@/data/competitive-questions/ap-us-gov-bank')).getApUSGovQuestions(1_000_000)],
  ['ap-us-history', async () => (await import('@/data/competitive-questions/ap-us-history-bank')).getApUSHistoryQuestions(1_000_000)],
  ['ap-world-history', async () => (await import('@/data/competitive-questions/ap-world-history-bank')).getApWorldHistoryQuestions(1_000_000)],
  ['ap-human-geo', async () => (await import('@/data/competitive-questions/ap-human-geo-bank')).getApHumanGeoQuestions(1_000_000)],
  ['ap-macro', async () => (await import('@/data/competitive-questions/ap-macro-bank')).getApMacroQuestions(1_000_000)],
  ['ap-micro', async () => (await import('@/data/competitive-questions/ap-micro-bank')).getApMicroQuestions(1_000_000)],
  ['ap-enviro', async () => (await import('@/data/competitive-questions/ap-enviro-bank')).getApAPESQuestions(1_000_000)],
  ['ap-english-lang', async () => (await import('@/data/competitive-questions/ap-english-lang-bank')).getApEngLangQuestions(1_000_000)],
  ['ap-english-lit', async () => (await import('@/data/competitive-questions/ap-english-lit-bank')).getApEngLitQuestions(1_000_000)],
  ['ap-african-american-studies', async () => (await import('@/data/competitive-questions/ap-african-american-studies-bank')).getApAASQuestions(1_000_000)],
  ['ap-csp', async () => (await import('@/data/competitive-questions/ap-csp-bank')).getApCSPQuestions(1_000_000)],
  ['ap-csa', async () => (await import('@/data/competitive-questions/ap-csa-bank')).getApCSAQuestions(1_000_000)],
  ['ap-precalculus', async () => (await import('@/data/competitive-questions/precalc-bank')).getPreCalcQuestions(1_000_000)],
  ['geometry', async () => (await import('@/data/competitive-questions/geometry-bank')).getGeometryQuestions(1_000_000)],
  ['algebra-1', async () => (await import('@/data/competitive-questions/algebra1-bank')).getAlgebra1Questions(1_000_000)],
]

let _bankSlugCourses: Promise<Map<string, PaceCourseKey>> | null = null
function bankSlugCourses(): Promise<Map<string, PaceCourseKey>> {
  if (_bankSlugCourses) return _bankSlugCourses
  _bankSlugCourses = (async () => {
    const map = new Map<string, PaceCourseKey>()
    for (const [course, load] of BANK_SCANS) {
      try {
        for (const q of await load()) if (q.topicSlug && !map.has(q.topicSlug)) map.set(q.topicSlug, course)
      } catch {
        /* a bank that fails to load just contributes nothing */
      }
    }
    return map
  })()
  return _bankSlugCourses
}

/** SAT hierarchy slug → its section's pacing key ('sat' for the whole test). */
async function satCourseKey(slug: string): Promise<PaceCourseKey | null> {
  const m = await import('@/data/competitive-questions/sat-bank')
  if (!m.isSatHierarchySlug(slug)) return null
  if (slug === m.SAT_ALL_SLUG) return 'sat'
  for (const sections of [m.SAT_SECTIONS, m.SAT_POOL_SECTIONS]) {
    for (const sec of sections) {
      const key: PaceCourseKey = sec.slug === 'sat-math' ? 'sat-math' : 'sat-rw'
      if (sec.slug === slug) return key
      for (const d of sec.domains) {
        if (d.slug === slug) return key
        if (d.skills.some((s) => s.slug === slug)) return key
      }
    }
  }
  return 'sat'
}

/**
 * The pacing course for a match topic slug, with the bank scan available.
 * Composite `multi:` slugs resolve to the slowest of their parts.
 */
export async function resolvePaceCourseKey(topicSlug: string | null | undefined): Promise<PaceCourseKey> {
  if (isUnitCircleSlug(topicSlug)) return 'unit-circle'
  const slug = (topicSlug as string).trim()

  if (isMultiSlug(slug)) return slowestCourse(await Promise.all(parseMultiSlug(slug).map(resolvePaceCourseKey)))

  const fromTables = courseKeyFromTables(slug)
  if (fromTables !== 'unknown') return fromTables

  if (slug.startsWith('sat')) {
    const sat = await satCourseKey(slug)
    if (sat) return sat
  }

  const scanned = (await bankSlugCourses()).get(slug)
  if (scanned) return scanned

  return courseKeyFromPatterns(slug)
}

export interface MatchPacing {
  paceCourseKey: PaceCourseKey
  /** Only for ACCURACY_CHALLENGE: the match clock derived from the questions. */
  timeLimitSeconds?: number
}

/**
 * Stamp a freshly generated question set for storage: every question gets its
 * `expectedSeconds`, and the returned `pacing` object is spread into gameData.
 */
export async function paceMatchQuestions<T extends MatchQuestion>(
  questions: T[],
  topicSlug: string | null | undefined,
  gameMode: string | null | undefined,
): Promise<{ questions: T[]; pacing: MatchPacing }> {
  const paceCourseKey = await resolvePaceCourseKey(topicSlug)
  const paced = annotateExpectedSeconds(questions, paceCourseKey)
  const pacing: MatchPacing =
    gameMode === 'ACCURACY_CHALLENGE'
      ? { paceCourseKey, timeLimitSeconds: accuracyChallengeLimitSeconds(paced, paceCourseKey) }
      : { paceCourseKey }
  return { questions: paced, pacing }
}

/** Same stamping for an async challenge, plus the default clock when the caller sends none. */
export async function paceAsyncChallenge<T extends MatchQuestion>(
  questions: T[],
  topicSlug: string,
): Promise<{ questions: T[]; paceCourseKey: PaceCourseKey; defaultTimeLimit: number }> {
  const paceCourseKey = await resolvePaceCourseKey(topicSlug)
  const paced = annotateExpectedSeconds(questions, paceCourseKey)
  return { questions: paced, paceCourseKey, defaultTimeLimit: asyncChallengeDefaultLimit(paced, paceCourseKey) }
}
