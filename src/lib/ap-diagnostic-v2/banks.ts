/**
 * The v2 banks, by course, and the version a course's diagnostic page serves.
 * Pure data + logic (no prisma), so pages, the review resolver, tests and the
 * check script all share it.
 */
import { bank as chemistry } from '@/data/ap-diagnostic-v2/ap-chemistry'
import { bank as biology } from '@/data/ap-diagnostic-v2/ap-biology'
import { bank as physics1 } from '@/data/ap-diagnostic-v2/ap-physics-1'
import { bank as calculusAb } from '@/data/ap-diagnostic-v2/ap-calculus-ab'
import { bank as calculusBc } from '@/data/ap-diagnostic-v2/ap-calculus-bc'
import { AP_DIAG_V2_BLUEPRINTS } from './blueprints'
import { AP_DIAG_V2_LIVE, bankReadiness } from './readiness'
import type { ApDiagV2Bank, ApDiagV2Course, ApDiagV2Stimulus } from './types'

export const AP_DIAG_V2_BANKS: Record<ApDiagV2Course, ApDiagV2Bank> = {
  'ap-chemistry': chemistry,
  'ap-biology': biology,
  'ap-physics-1': physics1,
  'ap-calculus-ab': calculusAb,
  'ap-calculus-bc': calculusBc,
}

/**
 * True when the course has switched to v2: flagged live AND its bank meets
 * the minimum. Pages use the flag alone (version.ts, so they do not bundle
 * every bank); tests/lib/ap-diagnostic-v2.test.ts asserts the two agree.
 */
export function isApDiagV2Live(course: ApDiagV2Course): boolean {
  return AP_DIAG_V2_LIVE[course] === true && bankReadiness(AP_DIAG_V2_BANKS[course]).ready
}

/** The v2 course a stored category belongs to (`ap-chem-diagnostic-v2` → ap-chemistry), else null. */
export function apDiagV2CourseOfCategory(category: string | null | undefined): ApDiagV2Course | null {
  if (!category) return null
  for (const bp of Object.values(AP_DIAG_V2_BLUEPRINTS)) if (category === `${bp.categoryPrefix}-v2`) return bp.course
  return null
}

/** A stimulus from a course bank by id (the review layer re-attaches diagrams from here). */
export function apDiagV2Stimulus(course: ApDiagV2Course, id: string): ApDiagV2Stimulus | undefined {
  return AP_DIAG_V2_BANKS[course].stimuli.find((s) => s.id === id)
}
