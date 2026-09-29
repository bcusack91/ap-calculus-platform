/**
 * Where the onboarding wizard sends a new student once they pick a goal and a
 * course.
 *
 * It used to ignore the goal and send everyone to the course's first notes
 * page, never to the diagnostic, which is the start of the study loop
 * (diagnostic → plan → lesson → exit quiz → flashcards). Now:
 *   - "Just exploring" → the course hub
 *   - any other goal, for a course with a diagnostic → that diagnostic
 *   - a course with no diagnostic → its first topic, else the hub
 *
 * Pure (no DB), so the API route and the wizard page agree on it.
 */
import { CLASS_PLAN_COURSES, diagnosticRouteForKey } from '@/lib/class-plan-config'
import { getCourseHref } from '@/data/course-metadata'

export type OnboardingGoal = 'just-browsing' | 'catch-up' | 'get-ahead' | 'exam-prep'

/**
 * Onboarding course slugs whose diagnostic is not found through the class-plan
 * registry's `courseSlug` (those entries have no DB course row, or the course
 * shares another course's diagnostic).
 */
const DIAGNOSTIC_KEY_OVERRIDES: Record<string, string> = {
  precalculus: 'precalc',
  'organic-chemistry-1': 'ochem',
  'organic-chemistry-2': 'ochem',
  // The PSAT tests the same skills as the Digital SAT; its hub's diagnostic
  // button already points at the SAT diagnostic.
  psat: 'sat',
}

/**
 * Onboarding slugs that are not DB courses themselves but whose study path is
 * another course's topics (used for the learning path only).
 */
export const ONBOARDING_DB_COURSE_ALIASES: Record<string, string> = {
  psat: 'sat-prep',
}

/** The course's diagnostic page, or null when the course has none. */
export function diagnosticRouteForCourseSlug(courseSlug: string): string | null {
  const key =
    DIAGNOSTIC_KEY_OVERRIDES[courseSlug] ??
    CLASS_PLAN_COURSES.find((c) => c.courseSlug === courseSlug)?.key
  return key ? diagnosticRouteForKey(key) : null
}

export function onboardingDestination({
  courseSlug,
  goal,
  firstTopic,
}: {
  courseSlug: string
  goal?: string | null
  firstTopic?: string | null
}): string {
  const hub = getCourseHref(courseSlug)
  if (goal === 'just-browsing') return hub
  const diagnostic = diagnosticRouteForCourseSlug(courseSlug)
  if (diagnostic) return diagnostic
  if (firstTopic) return `/topics/${firstTopic}`
  return hub
}
