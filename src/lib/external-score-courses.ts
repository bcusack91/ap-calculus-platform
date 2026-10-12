/**
 * Courses whose outside scores a student can log (ExternalExamScore): the
 * full-length readiness courses (MCAT, SAT — an entry there counts as a
 * full-length taken) plus the ACT, where a logged official ACT / ACT practice
 * score is calibration data for the 1-36 curve and the ACT score goal.
 * Pure — safe for client components.
 */
import { FULL_LENGTH_COURSES, isFullLengthCourse, type FullLengthCourse } from '@/lib/full-length-progress'

export type ExternalScoreCourse = FullLengthCourse | 'act'

export interface ExternalScoreConfig {
  label: string
  /** What an outside score is called on the entry form. */
  externalLabel: string
  externalSources: string[]
  total: { min: number; max: number }
  sections: { key: string; label: string; min: number; max: number }[]
  /** An entry resets the full-length readiness bar (MCAT, SAT). */
  countsAsFullLength: boolean
}

/** The "Official ACT" source gets the test month appended: 'Official ACT (Apr 2026)'. */
export const ACT_OFFICIAL_SOURCE = 'Official ACT'

export const ACT_EXTERNAL_SCORE: ExternalScoreConfig = {
  label: 'ACT',
  externalLabel: 'ACT',
  externalSources: [ACT_OFFICIAL_SOURCE, 'ACT practice test 1', 'ACT practice test 2', 'ACT practice test 3', 'ACT practice test 4', 'ACT practice test 5', 'Other ACT practice test'],
  total: { min: 1, max: 36 },
  sections: [
    { key: 'english', label: 'English', min: 1, max: 36 },
    { key: 'math', label: 'Math', min: 1, max: 36 },
    { key: 'reading', label: 'Reading', min: 1, max: 36 },
    { key: 'science', label: 'Science', min: 1, max: 36 },
  ],
  countsAsFullLength: false,
}

export function isExternalScoreCourse(c: unknown): c is ExternalScoreCourse {
  return isFullLengthCourse(c) || c === 'act'
}

export function externalScoreConfig(course: ExternalScoreCourse): ExternalScoreConfig {
  if (course === 'act') return ACT_EXTERNAL_SCORE
  const c = FULL_LENGTH_COURSES[course]
  return { label: c.label, externalLabel: c.externalLabel, externalSources: c.externalSources, total: c.total, sections: c.sections, countsAsFullLength: true }
}

/**
 * Check a total and optional section scores against the course's scale.
 * Returns the cleaned sections (known keys only) or the error to show.
 */
export function validateExternalScore(
  course: ExternalScoreCourse,
  totalScore: number,
  sectionScores: Record<string, number> | undefined,
): { ok: true; sections: Record<string, number> } | { ok: false; error: string } {
  const cfg = externalScoreConfig(course)
  if (!Number.isInteger(totalScore) || totalScore < cfg.total.min || totalScore > cfg.total.max) {
    return { ok: false, error: `${cfg.label} total scores run ${cfg.total.min}–${cfg.total.max}.` }
  }
  const sections: Record<string, number> = {}
  for (const s of cfg.sections) {
    const v = sectionScores?.[s.key]
    if (v === undefined) continue
    if (!Number.isInteger(v) || v < s.min || v > s.max) return { ok: false, error: `${s.label} scores run ${s.min}–${s.max}.` }
    sections[s.key] = v
  }
  return { ok: true, sections }
}

/** 'Official ACT (Apr 2026)' for the official source; other sources as given. */
export function actSourceLabel(source: string, takenAt: Date): string {
  if (source !== ACT_OFFICIAL_SOURCE || Number.isNaN(takenAt.getTime())) return source
  const month = takenAt.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })
  return `${ACT_OFFICIAL_SOURCE} (${month} ${takenAt.getUTCFullYear()})`
}
