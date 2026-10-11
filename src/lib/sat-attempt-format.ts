/**
 * SatTestAttempt holds both SAT practice tests and adaptive PSAT/NMSQT
 * practice tests. `format` tells them apart:
 *
 *   'full' | 'mini' | null (legacy rows)  -> SAT (200-800 sections, 400-1600)
 *   'psat-full'                           -> PSAT/NMSQT (160-760, 320-1520)
 *
 * Anything that reads SAT scores (score predictor, full-length readiness,
 * superscore, best-score stats) must exclude PSAT rows: a PSAT 1200 is not an
 * SAT 1200 on our curves, and a PSAT is not an SAT full-length. Pure — no
 * Prisma import, so tests and client code can use it.
 */

export const PSAT_FULL_FORMAT = 'psat-full'

export type SatAttemptExam = 'sat' | 'psat'

/** True when a stored attempt is an adaptive PSAT/NMSQT practice test. */
export function isPsatAttemptFormat(format: string | null | undefined): boolean {
  return format === PSAT_FULL_FORMAT
}

export function attemptExam(format: string | null | undefined): SatAttemptExam {
  return isPsatAttemptFormat(format) ? 'psat' : 'sat'
}

/**
 * Prisma `where` fragment: SAT attempts only. `format` is nullable (legacy
 * rows), and `{ not: 'psat-full' }` alone would drop the NULL rows in SQL, so
 * NULL is allowed explicitly.
 */
export const SAT_ONLY_ATTEMPTS = {
  OR: [{ format: null }, { format: { not: PSAT_FULL_FORMAT } }],
}

/** Prisma `where` fragment: PSAT attempts only. */
export const PSAT_ONLY_ATTEMPTS = { format: PSAT_FULL_FORMAT }

/**
 * Prisma `where` fragment: SAT full-length attempts only (no PSAT, no mini
 * tests). Legacy rows carry no format; a full test has 54 Reading and Writing
 * questions and a mini 27, so the R&W total tells them apart.
 */
export const SAT_FULL_LENGTH_ATTEMPTS = {
  OR: [{ format: 'full' }, { format: null, rwTotal: { gte: 54 } }],
}
