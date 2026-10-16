/**
 * AP difficulty tracks (Phase 2, gap 7, routing only): Foundation / Regular /
 * 5-track for the flagship AP courses.
 *
 * Routing only — no new content. A track changes two things:
 *  1. the gating exit quiz's difficulty mix (track-mix.ts): Foundation leans
 *     easy/medium, 5-track leans medium/hard, Regular is the untracked draw.
 *     The quiz is the same size either way and the pass mark is still 80%.
 *  2. the order of the study plan's topics (orderTopicsForTrack below).
 *
 * Placement is a property of the STUDENT in a course, read from their latest
 * diagnostic in it (v1 forms and v2 `<prefix>-v2` sittings alike), and
 * computed the same way on every surface — the lesson's exit quiz, the plan,
 * the course hub and the teacher's class plan — so they always agree. There
 * is no stored placement and no teacher override (that would need a User
 * column, i.e. a migration; left for the owner). No diagnostic = Regular.
 *
 * Thresholds, against the one AP scale in ap-scoring.ts (5 ≥ 70%, 4 ≥ 57%,
 * 3 ≥ 43%, 2 ≥ 30%):
 *  - Foundation: an estimated 1 or 2 (under 43%). Below the pass line, the
 *    job is getting fundamentals to a 3, so the quiz checks the core of the
 *    lesson rather than its hardest items.
 *  - 5-track: an estimated 5 (70% and up). Already scoring at the 5 cutoff on
 *    the diagnostic, the student needs the hard items to keep it on exam day.
 *  - Regular: an estimated 3 or 4. A 4 stays here: they still miss about a
 *    third of the diagnostic, and the regular mix already includes hard items.
 * The estimate is recomputed from the stored percent with today's cutoffs,
 * not read from `estimatedAPScore`: attempts stored before October 2026 used
 * older cutoffs (80/65/50/35), so the stored number would place them on a
 * different scale from new attempts.
 */
import { AP_SCORE_CUTOFFS, estimateApScore, type ApScore } from '@/lib/ap-scoring'
import { AP_DIAG_V2_BLUEPRINTS, unitMidpoint } from '@/lib/ap-diagnostic-v2/blueprints'
import type { ApDiagV2Course } from '@/lib/ap-diagnostic-v2/types'
import type { ExitQuizTrackMix } from '@/data/exit-quizzes/track-mix'

export type ApTrack = 'foundation' | 'regular' | 'five'

/**
 * Courses with tracks switched on. The routing is generic (every AP exit pool
 * is difficulty-tagged and could honour a mix with a one-line change), but
 * the plan ordering reads the v2 blueprints' units and CED weights, which
 * exist for these four only.
 */
export const AP_TRACK_COURSES = ['ap-chemistry', 'ap-biology', 'ap-physics-1', 'ap-calculus-ab'] as const satisfies readonly ApDiagV2Course[]
export type ApTrackCourse = (typeof AP_TRACK_COURSES)[number]

export function isApTrackCourse(courseSlug: string | null | undefined): courseSlug is ApTrackCourse {
  return !!courseSlug && (AP_TRACK_COURSES as readonly string[]).includes(courseSlug)
}

const cutoff = (score: ApScore) => AP_SCORE_CUTOFFS.find((c) => c.score === score)!.minPercent

/** Percent-correct boundaries, from the shared cutoffs (Foundation below the 3 line, 5-track at the 5 line). */
export const AP_TRACK_THRESHOLDS = {
  /** Below this = Foundation (an estimated 1 or 2). */
  foundationBelow: cutoff(3),
  /** At or above this = 5-track (an estimated 5). */
  fiveAtOrAbove: cutoff(5),
} as const

/** The gating exit quiz's difficulty for a track (Regular: none, the untracked draw). */
export const AP_TRACK_MIX: Record<ApTrack, ExitQuizTrackMix | undefined> = {
  foundation: 'foundation-mix',
  regular: undefined,
  five: 'five-mix',
}

/** Display names, used as-is ("5-track" already says track). */
export const AP_TRACK_LABEL: Record<ApTrack, string> = {
  foundation: 'Foundation track',
  regular: 'Regular track',
  five: '5-track',
}

/** Percent correct (0–100) of a stored AP diagnostic, v1 or v2; null when it cannot be read. */
export function apDiagnosticPercent(results: unknown): number | null {
  if (!results || typeof results !== 'object') return null
  const r = results as { percentage?: unknown; totalCorrect?: unknown; totalQuestions?: unknown }
  if (typeof r.totalCorrect === 'number' && typeof r.totalQuestions === 'number' && r.totalQuestions > 0) {
    return Math.max(0, Math.min(100, Math.round((r.totalCorrect / r.totalQuestions) * 100)))
  }
  if (typeof r.percentage === 'number' && Number.isFinite(r.percentage)) return Math.max(0, Math.min(100, Math.round(r.percentage)))
  return null
}

/** Track for a percent correct. */
export function apTrackForPercent(percent: number): ApTrack {
  if (percent < AP_TRACK_THRESHOLDS.foundationBelow) return 'foundation'
  if (percent >= AP_TRACK_THRESHOLDS.fiveAtOrAbove) return 'five'
  return 'regular'
}

export interface ApTrackPlacement {
  track: ApTrack
  label: string
  /** The gating exit quiz's difficulty (undefined = untracked). */
  mix: ExitQuizTrackMix | undefined
  /** 'diagnostic' = placed from the latest diagnostic; 'none' = no readable diagnostic (Regular). */
  source: 'diagnostic' | 'none'
  percent: number | null
  estimatedScore: ApScore | null
  /** One line for the student. */
  explanation: string
}

function explain(track: ApTrack, score: ApScore | null): string {
  const est = score === null ? '' : `Your last diagnostic estimated a ${score}, so `
  const lead = (s: string) => (est ? est + s : s.charAt(0).toUpperCase() + s.slice(1))
  if (track === 'foundation') return lead('your exit quizzes lean toward easy and medium questions and your plan starts with the earliest units. The pass mark is still 80%.')
  if (track === 'five') return lead('your exit quizzes lean toward medium and hard questions and your plan starts with the units the exam weights most. The pass mark is still 80%.')
  return score === null
    ? 'Take the diagnostic to be placed. Until then your exit quizzes use the standard mix of easy, medium and hard questions.'
    : lead('your exit quizzes use the standard mix of easy, medium and hard questions.')
}

/**
 * A student's track in a course from their latest diagnostic's stored
 * results (null = none). Courses without tracks, and unreadable results, are
 * Regular.
 */
export function apTrackFromResults(results: unknown): ApTrackPlacement {
  const percent = apDiagnosticPercent(results)
  if (percent === null) {
    return { track: 'regular', label: AP_TRACK_LABEL.regular, mix: undefined, source: 'none', percent: null, estimatedScore: null, explanation: explain('regular', null) }
  }
  const track = apTrackForPercent(percent)
  const estimatedScore = estimateApScore(percent)
  return { track, label: AP_TRACK_LABEL[track], mix: AP_TRACK_MIX[track], source: 'diagnostic', percent, estimatedScore, explanation: explain(track, estimatedScore) }
}

/* ------------------------------------------------------------------ */
/*  Plan ordering                                                      */
/* ------------------------------------------------------------------ */

const PRIORITY_RANK: Record<string, number> = { high: 0, medium: 1, low: 2 }

/** Unit number and CED weight midpoint of a production topic slug in a track course. */
function unitOf(courseSlug: ApTrackCourse, slug: string): { number: number; weight: number } | null {
  const unit = AP_DIAG_V2_BLUEPRINTS[courseSlug].units.find((u) => u.topicSlugs.includes(slug))
  return unit ? { number: unit.number, weight: unitMidpoint(unit) } : null
}

/**
 * The study plan's topic order for a track. Stable, and Regular is the order
 * given (diagnostic priority).
 *
 * - Foundation: weakest first (diagnostic priority: high, then medium), and
 *   within a priority the most foundational topic first (lowest CED unit),
 *   since later units build on earlier ones.
 * - 5-track: the units the exam weights most first (CED weighting midpoint),
 *   then priority, then unit order. Points are where a 5 is won or lost.
 * Topics outside the blueprint (none expected) keep their place after the rest.
 */
export function orderTopicsForTrack<T extends { slug: string; priority?: string }>(
  courseSlug: string | null | undefined,
  topics: readonly T[],
  track: ApTrack,
): T[] {
  if (!isApTrackCourse(courseSlug) || track === 'regular') return [...topics]
  const keyed = topics.map((t, i) => {
    const u = unitOf(courseSlug, t.slug)
    return { t, i, rank: PRIORITY_RANK[t.priority ?? 'medium'] ?? 1, unit: u?.number ?? Infinity, weight: u?.weight ?? -1 }
  })
  keyed.sort((a, b) =>
    track === 'foundation'
      ? a.rank - b.rank || a.unit - b.unit || a.i - b.i
      : b.weight - a.weight || a.rank - b.rank || a.unit - b.unit || a.i - b.i,
  )
  return keyed.map((k) => k.t)
}
