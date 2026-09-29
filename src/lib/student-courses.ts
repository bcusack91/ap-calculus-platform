/**
 * Which course a student is "in", for surfaces that personalize by course
 * (the dashboard's next step, the daily question's bank).
 *
 * Pure, client-safe helpers. The Prisma-backed lookup is in
 * student-courses-server.ts so client bundles never pull in Prisma.
 */

import { CLASS_PLAN_COURSES, diagnosticRouteForKey } from '@/lib/class-plan-config'

/**
 * Catalog slugs whose diagnostic course is not found by `courseSlug` in
 * CLASS_PLAN_COURSES: DB course slugs with no mapping there (Precalculus,
 * both Organic Chemistry courses) and the hub/SEO slugs used by route names.
 */
const PLAN_KEY_ALIASES: Record<string, string> = {
  precalculus: 'precalc',
  'organic-chemistry-1': 'ochem',
  'organic-chemistry-2': 'ochem',
  sat: 'sat',
  psat: 'sat',
  act: 'act',
  mcat: 'mcat',
  'ap-cs-principles': 'ap-csp',
}

export interface CourseDiagnostic {
  /** CLASS_PLAN_COURSES key, which is also plan-status's `courseKey`. */
  key: string
  label: string
  diagnosticHref: string
  /** Whether finishing the plan gates the retake (MCAT only). */
  gated: boolean
}

/** The diagnostic course for a DB course slug or hub slug, or null when it has none. */
export function courseDiagnosticForSlug(slug: string | null | undefined): CourseDiagnostic | null {
  if (!slug) return null
  const key = PLAN_KEY_ALIASES[slug] ?? CLASS_PLAN_COURSES.find((c) => c.courseSlug === slug)?.key
  if (!key) return null
  return courseDiagnosticForKey(key)
}

/** The diagnostic course for a CLASS_PLAN_COURSES key. */
export function courseDiagnosticForKey(key: string): CourseDiagnostic | null {
  const course = CLASS_PLAN_COURSES.find((c) => c.key === key)
  if (!course) return null
  return {
    key: course.key,
    label: course.label,
    diagnosticHref: diagnosticRouteForKey(course.key),
    gated: course.gated === true,
  }
}

/** The diagnostic course whose page is `href` (e.g. '/calcab-diagnostic'). */
export function courseDiagnosticForHref(href: string): CourseDiagnostic | null {
  const course = CLASS_PLAN_COURSES.find((c) => diagnosticRouteForKey(c.key) === href)
  return course ? courseDiagnosticForKey(course.key) : null
}

export interface CourseRankingInput {
  /** One course slug per TopicProgress row, most recently studied first. */
  progressCourseSlugs: string[]
  /** The course picked in onboarding (its first topic's course). */
  chosenCourseSlug?: string | null
  /** The course of the student's most recent diagnostic. */
  latestDiagnosticCourseSlug?: string | null
}

/**
 * The student's courses, best first: most-studied (ties go to the one studied
 * most recently), then the onboarding choice, then the latest diagnostic's
 * course. Deduplicated.
 */
export function rankStudentCourses({
  progressCourseSlugs,
  chosenCourseSlug,
  latestDiagnosticCourseSlug,
}: CourseRankingInput): string[] {
  const count = new Map<string, number>()
  const firstSeen = new Map<string, number>()
  progressCourseSlugs.forEach((slug, i) => {
    if (!slug) return
    count.set(slug, (count.get(slug) ?? 0) + 1)
    if (!firstSeen.has(slug)) firstSeen.set(slug, i)
  })
  const studied = [...count.keys()].sort(
    (a, b) => count.get(b)! - count.get(a)! || firstSeen.get(a)! - firstSeen.get(b)!,
  )
  const out: string[] = []
  for (const slug of [...studied, chosenCourseSlug, latestDiagnosticCourseSlug]) {
    if (slug && !out.includes(slug)) out.push(slug)
  }
  return out
}
