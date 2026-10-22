/**
 * The exam-aware AP next step (Phase 3 W4).
 *
 * AP diagnostic volume is exam week (358 sittings on 2026-05-03), and the
 * students who score a 5 study least. "Start topic 1 of a 7-part lesson" is
 * the wrong next step for both, so ONE mode, computed here, drives the
 * results screen, the course hub's "Start here" and the dashboard card:
 *
 *   exam-week  the course's exam is 1..AP_EXAM_WEEK_DAYS days away: cram
 *              (weakest unit's high-yield flashcards → timed practice exam →
 *              every mistake), the topic plan demoted to "if you have time".
 *   confirm-5  estimated 5 (or the range's low end ≥ AP_CONFIRM_5_LOW) with
 *              the exam further out: confirm it with a full practice exam,
 *              topic 1 secondary.
 *   plan       everything else, including a course without a date and the
 *              weeks after the exam (the table targets the NEXT May; once it
 *              has passed, the plan is the only sensible step).
 *
 * Pure (no prisma, no React), so client components, the plan-status route
 * and tests share it.
 */
import { daysUntilApExam } from '@/lib/ap-exam-dates'
import { FULL_LENGTH_COURSES, isApFullLengthCourse } from '@/lib/full-length-progress'
import { isApToolCourse, mistakesHref } from '@/lib/question-tool-courses'

export type ApNextStepMode = 'plan' | 'exam-week' | 'confirm-5'

/** Exam-week mode switches on this many days before the exam (same window as the follow-up email). */
export const AP_EXAM_WEEK_DAYS = 21
/** A score range whose low end is at least this counts as a 5 for confirm-5. */
export const AP_CONFIRM_5_LOW = 4.5

export interface ApNextStepResults {
  /** The diagnostic's estimated AP score (1–5). */
  estimatedScore: number | null | undefined
  /** The 1–5 band when the sitting has one (v2 stores it; v1 derives it from apScoreRange). */
  scoreRange?: { low: number; high: number } | null
}

export interface ApNextStepDecision {
  mode: ApNextStepMode
  /** Why this mode, in a sentence (for tests, logs and the teacher). */
  reason: string
  /** Whole days until the course's exam (daysUntilApExam); null without a date. */
  daysToExam: number | null
}

/** The mode for a known day count (the dashboard and hub get the count from the plan-status payload). */
export function apNextStepModeForDays(daysToExam: number | null | undefined, results: ApNextStepResults): ApNextStepDecision {
  // Math.ceil on the exam afternoon yields -0; normalise so callers and tests see 0.
  const days = typeof daysToExam === 'number' && Number.isFinite(daysToExam) ? (daysToExam === 0 ? 0 : daysToExam) : null
  if (days === null) return { mode: 'plan', reason: 'No exam date for this course.', daysToExam: null }
  if (days <= 0) return { mode: 'plan', reason: 'The exam date has passed; the plan is the next step until the next cycle.', daysToExam: days }
  if (days <= AP_EXAM_WEEK_DAYS) {
    return { mode: 'exam-week', reason: `The exam is ${days} day${days === 1 ? '' : 's'} away (within ${AP_EXAM_WEEK_DAYS}).`, daysToExam: days }
  }
  const score = typeof results.estimatedScore === 'number' ? results.estimatedScore : null
  const low = results.scoreRange && typeof results.scoreRange.low === 'number' ? results.scoreRange.low : null
  if (score !== null && score >= 5) {
    return { mode: 'confirm-5', reason: `Estimated score ${score} with the exam ${days} days away.`, daysToExam: days }
  }
  if (low !== null && low >= AP_CONFIRM_5_LOW) {
    return { mode: 'confirm-5', reason: `The score range's low end (${low}) is at least ${AP_CONFIRM_5_LOW} with the exam ${days} days away.`, daysToExam: days }
  }
  return { mode: 'plan', reason: `Estimated score ${score ?? 'unknown'} with the exam ${days} days away.`, daysToExam: days }
}

/**
 * The mode for a course (hub slug, e.g. 'ap-chemistry') at `now`: the results
 * screen calls this with the sitting it just scored.
 */
export function apNextStepMode(course: string | { courseSlug: string }, results: ApNextStepResults, now: Date = new Date()): ApNextStepDecision {
  const slug = typeof course === 'string' ? course : course.courseSlug
  return apNextStepModeForDays(daysUntilApExam(slug, now), results)
}

/** "Exam in 5 days" / "Exam in 1 day"; null without a date or once the exam has passed. */
export function apExamCountdownLabel(daysToExam: number | null | undefined): string | null {
  if (typeof daysToExam !== 'number' || !Number.isFinite(daysToExam) || daysToExam <= 0) return null
  return `Exam in ${daysToExam} day${daysToExam === 1 ? '' : 's'}`
}

/** The `cta_type` the results screen's ap_results_next_step_click carries: the mode's primary action. */
export const AP_NEXT_STEP_CTA_TYPE: Record<ApNextStepMode, string> = {
  plan: 'next_step',
  'exam-week': 'exam_week_flashcards',
  'confirm-5': 'confirm_5_practice_exam',
}

export interface ApExamWeekLinks {
  /** The course's flashcards (yield tiers put high-yield first). */
  flashcards: string
  /** The course's timed practice exam page (it shows a form picker when the course has more than one form). */
  practice: string
  /** The course's mistake log. */
  mistakes: string
}

/**
 * The three cram destinations for an AP course, or null when the course has
 * no practice exam / mistake log (a non-AP class-plan key). `courseKey` is
 * the class-plan key ('ap-chem'); `courseSlug` the hub slug ('ap-chemistry').
 */
export function apExamWeekLinks(courseSlug: string | null | undefined, courseKey: string): ApExamWeekLinks | null {
  if (!isApFullLengthCourse(courseKey)) return null
  const slug = isApToolCourse(courseSlug) ? courseSlug : null
  if (!slug) return null
  return {
    flashcards: `/flashcards?course=${encodeURIComponent(slug)}`,
    practice: FULL_LENGTH_COURSES[courseKey].fullLengthHref,
    mistakes: mistakesHref(slug),
  }
}
