/**
 * Client-safe helpers for AP practice-exam forms (see src/lib/ap-practice-exams.ts,
 * which re-exports them). Kept apart from the registry so client components
 * never pull in every course's exam loader.
 */

/** The most forms a course may have (form 1 plus forms 2 and 3). */
export const AP_PRACTICE_MAX_FORMS = 3

/** ContentItem.key of a form: 'exam' for form 1 (unchanged since June 2026), 'exam-N' after. */
export const apPracticeFormContentKey = (form: number) => (form === 1 ? 'exam' : `exam-${form}`)

/** The form a stored attempt was taken on (`results.form`); attempts saved before forms existed are form 1. */
export function apPracticeFormOf(results: unknown): number {
  const f = results && typeof results === 'object' && !Array.isArray(results) ? (results as Record<string, unknown>).form : undefined
  return Number.isInteger(f) && (f as number) >= 1 && (f as number) <= AP_PRACTICE_MAX_FORMS ? (f as number) : 1
}

/**
 * The key a form's in-progress sitting is saved under on the device (see
 * apProgressKey): form 1 keeps the exam key, so sittings saved before forms
 * existed still resume.
 */
export const apPracticeSittingId = (key: string, form: number) => (form === 1 ? key : `${key}:form-${form}`)

/** URL hash that opens a form on the exam page ('' for form 1, the page default). */
export const apPracticeFormHash = (form: number) => (form > 1 ? `#form-${form}` : '')
/** The exam page opened on a form. */
export const apPracticeFormHref = (path: string, form: number) => `${path}${apPracticeFormHash(form)}`
/** The form a URL hash names ('#form-2' → 2), or null. */
export function apPracticeFormFromHash(hash: string): number | null {
  const m = /^#form-(\d)$/.exec(hash)
  return m ? Number(m[1]) : null
}

/** One form's saved attempts, for the form picker. */
export interface ApPracticeFormStatus {
  form: number
  attempts: number
  /** The most recent saved attempt. */
  latest: { id: string; estimatedAPScore: number | null; percentage: number | null; takenAt: string } | null
  /** The best estimated AP score across attempts. */
  bestAPScore: number | null
}

/** Group a student's saved attempts (newest first) by form; every form of the exam gets an entry. */
export function summarizeApPracticeAttempts(
  formCount: number,
  rows: readonly { id: string; results: unknown; createdAt: Date }[],
): ApPracticeFormStatus[] {
  const out: ApPracticeFormStatus[] = Array.from({ length: formCount }, (_, i) => ({ form: i + 1, attempts: 0, latest: null, bestAPScore: null }))
  const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? v : null)
  for (const row of rows) {
    const entry = out[apPracticeFormOf(row.results) - 1]
    if (!entry) continue
    const r = (row.results && typeof row.results === 'object' ? row.results : {}) as Record<string, unknown>
    const score = num(r.estimatedAPScore)
    entry.attempts++
    if (!entry.latest) entry.latest = { id: row.id, estimatedAPScore: score, percentage: num(r.percentage), takenAt: row.createdAt.toISOString() }
    if (score !== null && (entry.bestAPScore === null || score > entry.bestAPScore)) entry.bestAPScore = score
  }
  return out
}
