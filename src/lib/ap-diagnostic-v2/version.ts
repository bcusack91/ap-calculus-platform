/**
 * Which diagnostic version a course page serves. Kept free of the banks so a
 * page only loads its own bank, lazily, when it actually serves v2
 * (load-bank.ts). A course is live only when AP_DIAG_V2_LIVE says so; the
 * guard test fails if a live course's bank is below the switch minimum.
 */
import { AP_DIAG_V2_LIVE } from './readiness'
import type { ApDiagV2Course } from './types'

/** QA preview (`?diagV2=1`) is honoured outside production, or with NEXT_PUBLIC_AP_DIAG_V2_QA=1. */
export function apDiagV2QaAllowed(): boolean {
  return process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_AP_DIAG_V2_QA === '1'
}

/** `forceParam` is the `diagV2` query value. */
export function apDiagnosticVersion(course: ApDiagV2Course, forceParam?: string | null): 1 | 2 {
  if (AP_DIAG_V2_LIVE[course] === true) return 2
  if (forceParam === '1' && apDiagV2QaAllowed()) return 2
  return 1
}
