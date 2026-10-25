/**
 * Courses whose diagnostic cycle ends with the customized unit test (see
 * mcat-unit-test.ts for how a test is built and scored).
 *
 * `locksDiagnostic`: the MCAT keeps the next diagnostic closed until the test
 * is passed. SAT, ACT and every AP course recommend it as the cycle's last
 * step but leave the diagnostic open (owner ruling 2026-10-03: "Recommend,
 * don't lock"; AP followed the SAT/ACT precedent, Oct 2026).
 *
 * `enabled`: a course's test switches on only once every topic its diagnostic
 * recommends has a deep exit pool (ACT was held back until its lesson-built
 * pools replaced the 2-6-question legacy bank, 2026-10-03). Every topic an AP
 * diagnostic can recommend has 15+ exit-pool items (guarded by
 * tests/lib/ap-cycle-test.test.ts).
 *
 * Naming: AP courses already have per-unit "Unit tests" (/ap-chem-unit-tests
 * and friends), so the AP cycle test is called the "cycle test" and lives at
 * /cycle-test/<key> (one dynamic page and API, src/app/cycle-test and
 * src/app/api/cycle-test). MCAT/SAT/ACT keep "unit test" and their own URLs.
 */
import { classPlanCourse, diagnosticRouteForKey } from '@/lib/class-plan-config'

/**
 * Every AP course in CLASS_PLAN_COURSES. Keys MUST equal the class-plan keys:
 * class-unit-tests.ts and plan-status match on them.
 */
export const AP_UNIT_TEST_COURSES = [
  'calcab', 'calcbc', 'ap-precalculus', 'ap-stats', 'ap-bio', 'ap-chem', 'ap-physics1', 'ap-physics2',
  'ap-physics-c-mech', 'ap-physics-c-em', 'ap-enviro', 'ap-csa', 'ap-csp', 'ap-english-lang', 'ap-english-lit',
  'ap-us-history', 'ap-world-history', 'ap-us-gov', 'ap-human-geo', 'ap-macro', 'ap-micro', 'ap-psych', 'ap-aas',
] as const

export type ApUnitTestCourse = (typeof AP_UNIT_TEST_COURSES)[number]
export type UnitTestCourse = 'mcat' | 'sat' | 'act' | 'asvab' | ApUnitTestCourse

export interface UnitTestCourseConfig {
  key: UnitTestCourse
  label: string
  courseSlug: string
  /** The student page. */
  path: string
  /** The page's API (GET status; POST `${apiPath}/start`, `${apiPath}/submit`). */
  apiPath: string
  /** What students call it: "unit test" (MCAT/SAT/ACT) or "cycle test" (AP, which has per-unit tests too). */
  testName: string
  diagnosticPath: string
  locksDiagnostic: boolean
  enabled: boolean
}

/** The AP cycle test's name (AP courses also have per-unit "unit tests"). */
export const AP_CYCLE_TEST_NAME = 'cycle test'

function apConfig(key: ApUnitTestCourse): UnitTestCourseConfig {
  const c = classPlanCourse(key)
  if (!c?.courseSlug) throw new Error(`unit-test-courses: ${key} is not an AP class-plan course`)
  return {
    key,
    label: c.label,
    courseSlug: c.courseSlug,
    path: `/cycle-test/${key}`,
    apiPath: `/api/cycle-test/${key}`,
    testName: AP_CYCLE_TEST_NAME,
    diagnosticPath: diagnosticRouteForKey(key),
    locksDiagnostic: false,
    enabled: true,
  }
}

export const UNIT_TEST_COURSES: Record<UnitTestCourse, UnitTestCourseConfig> = {
  mcat: { key: 'mcat', label: 'MCAT', courseSlug: 'mcat-prep', path: '/mcat-unit-test', apiPath: '/api/mcat-unit-test', testName: 'unit test', diagnosticPath: '/mcat-diagnostic', locksDiagnostic: true, enabled: true },
  sat: { key: 'sat', label: 'SAT', courseSlug: 'sat-prep', path: '/sat-unit-test', apiPath: '/api/sat-unit-test', testName: 'unit test', diagnosticPath: '/sat-diagnostic', locksDiagnostic: false, enabled: true },
  act: { key: 'act', label: 'ACT', courseSlug: 'act-prep', path: '/act-unit-test', apiPath: '/api/act-unit-test', testName: 'unit test', diagnosticPath: '/act-diagnostic', locksDiagnostic: false, enabled: true },
  // ASVAB: every topic's exit pool has 18+ items (2026-10-25); recommended, like ACT.
  asvab: { key: 'asvab', label: 'ASVAB', courseSlug: 'asvab', path: '/asvab-unit-test', apiPath: '/api/asvab-unit-test', testName: 'unit test', diagnosticPath: '/asvab-diagnostic', locksDiagnostic: false, enabled: true },
  ...(Object.fromEntries(AP_UNIT_TEST_COURSES.map((k) => [k, apConfig(k)])) as Record<ApUnitTestCourse, UnitTestCourseConfig>),
}

/** The student-facing name of a cycle's test ("unit test" unless the status says otherwise). */
export function unitTestName(unitTest: { testName?: string } | null | undefined): string {
  return unitTest?.testName || 'unit test'
}

/** Narrow a route/class-plan key to a unit-test course. */
export function isUnitTestCourse(key: string): key is UnitTestCourse {
  return Object.prototype.hasOwnProperty.call(UNIT_TEST_COURSES, key)
}

/** An AP course's cycle test (served by the generic /cycle-test/<key> page and API). */
export function isApUnitTestCourse(key: string): key is ApUnitTestCourse {
  return (AP_UNIT_TEST_COURSES as readonly string[]).includes(key)
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
