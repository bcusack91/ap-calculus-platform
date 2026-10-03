/**
 * Courses whose diagnostic cycle ends with the customized unit test (see
 * mcat-unit-test.ts for how a test is built and scored).
 *
 * `locksDiagnostic`: the MCAT keeps the next diagnostic closed until the test
 * is passed. SAT and ACT recommend it as the cycle's last step but leave the
 * diagnostic open (owner ruling 2026-10-03: "Recommend, don't lock").
 *
 * `enabled`: a course's test switches on only once every topic its diagnostic
 * recommends has a deep exit pool (ACT was held back until its lesson-built
 * pools replaced the 2-6-question legacy bank, 2026-10-03).
 */
export type UnitTestCourse = 'mcat' | 'sat' | 'act'

export interface UnitTestCourseConfig {
  key: UnitTestCourse
  label: string
  courseSlug: string
  /** The student page. */
  path: string
  diagnosticPath: string
  locksDiagnostic: boolean
  enabled: boolean
}

export const UNIT_TEST_COURSES: Record<UnitTestCourse, UnitTestCourseConfig> = {
  mcat: { key: 'mcat', label: 'MCAT', courseSlug: 'mcat-prep', path: '/mcat-unit-test', diagnosticPath: '/mcat-diagnostic', locksDiagnostic: true, enabled: true },
  sat: { key: 'sat', label: 'SAT', courseSlug: 'sat-prep', path: '/sat-unit-test', diagnosticPath: '/sat-diagnostic', locksDiagnostic: false, enabled: true },
  act: { key: 'act', label: 'ACT', courseSlug: 'act-prep', path: '/act-unit-test', diagnosticPath: '/act-diagnostic', locksDiagnostic: false, enabled: true },
}

/** The UnitTestAttempt unit id for a cycle, so teachers see each sitting. */
export function cycleUnitId(course: UnitTestCourse, diagnosticId: string): string {
  return `${course}-cycle-${diagnosticId}`
}

/**
 * Is the cycle's unit test the student's next step? Every plan topic cleared,
 * not yet passed — and, where it locks the diagnostic, not bypassed by a
 * teacher's waiver (which already opened the diagnostic).
 */
export function unitTestIsNextStep(
  unitTest: { available?: boolean; passed: boolean; locksDiagnostic?: boolean } | null | undefined,
  canRetakeDiagnostic: boolean | undefined,
  { requireAvailable = true }: { requireAvailable?: boolean } = {},
): boolean {
  if (!unitTest || unitTest.passed) return false
  if (requireAvailable && unitTest.available === false) return false
  const locks = unitTest.locksDiagnostic !== false
  return !locks || canRetakeDiagnostic !== true
}
