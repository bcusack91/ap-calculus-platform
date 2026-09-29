import { CLASS_PLAN_COURSES } from '@/lib/class-plan-config'

/**
 * OPEN class diagnostics — "everyone takes the AP Biology diagnostic by Friday".
 *
 * Only MCAT and SAT can generate one frozen test for a whole class. Every other
 * course's diagnostic page builds its own test, so an assigned diagnostic there
 * cannot be pinned to identical questions. It is still a ClassDiagnostic row
 * (same student banner, assignments-page entry, due date and teacher results
 * panel), but its testData is this marker instead of a frozen test, and a
 * student's attempt is matched by course and date instead of by
 * DiagnosticTest.classDiagnosticId: any sitting of the course's diagnostic on
 * or after the assignment date counts. No schema change.
 */

export const OPEN_DIAGNOSTIC_TEST_DATA = { mode: 'course-diagnostic' } as const

export function isOpenClassDiagnostic(testData: unknown): boolean {
  return (
    !!testData &&
    typeof testData === 'object' &&
    (testData as { mode?: unknown }).mode === OPEN_DIAGNOSTIC_TEST_DATA.mode
  )
}

/**
 * The diagnostic course to preselect for a class: its first pinned course
 * (Settings › Class courses) that has a diagnostic, else null.
 */
export function defaultDiagnosticCourseKey(pinnedCourseSlugs: string[]): string | null {
  for (const slug of pinnedCourseSlugs) {
    const course = CLASS_PLAN_COURSES.find((c) => c.courseSlug === slug)
    if (course) return course.key
  }
  return null
}
