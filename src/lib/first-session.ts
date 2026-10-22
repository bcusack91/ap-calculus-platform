/**
 * The short first session (AP Phase 3, W5 / UX friction #6).
 *
 * A typical recommended AP topic is 7 parts (~50 sections, ~35 checks) plus a
 * 10-question exit quiz, and the funnel showed 58% of lesson openers never
 * finishing even one part. When a student arrives from a diagnostic's results
 * page (`?from=diagnostic`) or opens the topic that is currently next in
 * their study plan, the lesson frames itself as ONE short step: start with
 * Part 1, see where the exit quiz is, and stop after a part with the place
 * saved. Pure helpers here; the hook and UI live in src/hooks/useFirstSession
 * and src/components/lesson/FirstSession.
 */
import { MINUTES_PER_LESSON_PART } from '@/lib/lesson-minutes'

export const FROM_DIAGNOSTIC_PARAM = 'from'
export const FROM_DIAGNOSTIC_VALUE = 'diagnostic'

export type FirstSessionChoice = 'part1' | 'full' | 'quiz'
export type FirstSessionSource = 'diagnostic' | 'plan'

/** `href` with `?from=diagnostic` appended (keeps any query already there). */
export function withFromDiagnostic(href: string): string {
  return `${href}${href.includes('?') ? '&' : '?'}${FROM_DIAGNOSTIC_PARAM}=${FROM_DIAGNOSTIC_VALUE}`
}

export function isFromDiagnostic(params: Pick<URLSearchParams, 'get'> | null | undefined): boolean {
  return params?.get(FROM_DIAGNOSTIC_PARAM) === FROM_DIAGNOSTIC_VALUE
}

interface PlanTopicLike {
  slug?: unknown
  isSatisfied?: unknown
}
interface PlanLike {
  topics?: unknown
}

/**
 * Is `topicSlug` the student's CURRENT plan topic — the first uncleared topic
 * of a diagnostic plan (the one the dashboard and course hub call "next")?
 * `plans` is the /api/study-plan/plan-status payload's `plans` array; anything
 * malformed reads as "no".
 */
export function isCurrentPlanTopic(plans: unknown, topicSlug: string): boolean {
  if (!Array.isArray(plans)) return false
  for (const plan of plans as PlanLike[]) {
    const topics = Array.isArray(plan?.topics) ? (plan.topics as PlanTopicLike[]) : []
    const current = topics.find((t) => t && t.isSatisfied !== true && typeof t.slug === 'string')
    if (current && current.slug === topicSlug) return true
  }
  return false
}

/**
 * Minutes for ONE part, on the same scale as the whole-lesson estimate the
 * results page shows (`estimateLessonMinutes`: MINUTES_PER_LESSON_PART per
 * typical ~7-section part), so "Part 1 · ~6 min" and "~45 min" for 7 parts
 * agree. Scales with the part's section count; never under 3.
 */
export const TYPICAL_SECTIONS_PER_PART = 7
export function estimatePartMinutes(sectionCount: number): number {
  const sections = Number.isFinite(sectionCount) && sectionCount > 0 ? sectionCount : TYPICAL_SECTIONS_PER_PART
  return Math.max(3, Math.round((sections * MINUTES_PER_LESSON_PART) / TYPICAL_SECTIONS_PER_PART))
}

/** "Start with Part 1 · ~4 min" */
export function startPartLabel(minutes: number): string {
  return `Start with Part 1 · ~${minutes} min`
}

/** "Your first step in AP Chemistry: Moles & Molar Mass" (no course known: "Your first step: …"). */
export function firstStepHeadline(courseName: string | null | undefined, topicTitle: string): string {
  return courseName ? `Your first step in ${courseName}: ${topicTitle}` : `Your first step: ${topicTitle}`
}

/** "Part 1 of 7 · exit quiz after Part 7" — the slim line above the lesson. */
export function progressLineText(part: number, totalParts: number, opts: { hasExitQuiz: boolean; quizPassed?: boolean }): string {
  const base = `Part ${part} of ${totalParts}`
  if (!opts.hasExitQuiz) return base
  if (opts.quizPassed) return `${base} · exit quiz passed`
  return `${base} · exit quiz after Part ${totalParts}`
}

/** The card after Part 1: "Nice — 1 of 7 done. Keep going, or stop here; we saved your place." */
export function checkpointText(completedParts: number, totalParts: number, placeSaved: boolean): string {
  const lead = `Nice — ${completedParts} of ${totalParts} done.`
  return placeSaved ? `${lead} Keep going, or stop here; we saved your place.` : `${lead} Keep going, or stop here.`
}
