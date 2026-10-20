/**
 * Follow-up email for AP diagnostic takers who never started their plan.
 *
 * Phase 3 (Oct 2026): 68% of AP diagnostic takers never produce another row
 * and no automated message ever reached them (every cron keys on lesson
 * activity, streaks or guardians). This module holds the pure targeting and
 * context rules; the cron at src/app/api/cron/ap-diagnostic-followup does the
 * database reads and the sends.
 *
 * TARGETING (one email per student per diagnostic):
 *   - the student's MOST RECENT AP diagnostic (any AP course, v1 or v2
 *     category) was taken between 24 and 48 hours before the run;
 *   - no lesson activity in that course since the diagnostic, by the same
 *     definition as the funnel report (TopicProgress.lastAccessed,
 *     ActiveTimeDaily LESSON/ENTRANCE_QUIZ, QuestionActivity LESSON/ENTRANCE,
 *     or an ExitQuizAttempt on a topic of the course);
 *   - role is not TEACHER (or ADMIN), the address is verified or came from
 *     OAuth, and it is not unsubscribed (EmailSubscriber);
 *   - no `ap_followup_email_sent` AnalyticsEvent already names the diagnostic.
 *
 * WHY 24–48 h: the cron runs once a day, so consecutive runs at R and R+24h
 * cover [R−48h, R−24h) and [R−24h, R) — contiguous and disjoint. A diagnostic
 * is therefore inside exactly one run's window and is considered exactly
 * once; the AnalyticsEvent marker only matters if a run is replayed. A run
 * that never happens (cron skipped) drops that day's diagnostics for good,
 * which is preferable to a late nudge.
 *
 * Pure: no prisma, no email. Safe to import from tests and client code.
 */

import { CLASS_PLAN_COURSES, courseForCategory, type ClassPlanCourse } from '@/lib/class-plan-config'
import { canonicalizeRecommendedTopics } from '@/lib/ap-topic-canonical'
import { apBandLabel, apSittingOf } from '@/lib/ap-score-band'
import { daysUntilApExam } from '@/lib/ap-exam-dates'
import { AP_PRACTICE_EXAMS } from '@/lib/ap-practice-exams'
import { isApToolCourse } from '@/lib/question-tool-courses'

export const AP_FOLLOWUP_EVENT = 'ap_followup_email_sent'
export const AP_FOLLOWUP_MIN_HOURS = 24
export const AP_FOLLOWUP_MAX_HOURS = 48
/** Exam-week variant replaces the "start topic 1" body when the exam is this close. */
export const AP_FOLLOWUP_EXAM_WEEK_DAYS = 21

const HOUR_MS = 3_600_000

/** AP courses with a diagnostic (every CLASS_PLAN_COURSES entry whose course slug is ap-*). */
export const AP_FOLLOWUP_COURSES: (ClassPlanCourse & { courseSlug: string })[] = CLASS_PLAN_COURSES.filter(
  (c): c is ClassPlanCourse & { courseSlug: string } => typeof c.courseSlug === 'string' && c.courseSlug.startsWith('ap-'),
)

/** [from, to): diagnostics with createdAt >= from and < to are this run's. */
export function followupWindow(now: Date): { from: Date; to: Date } {
  return {
    from: new Date(now.getTime() - AP_FOLLOWUP_MAX_HOURS * HOUR_MS),
    to: new Date(now.getTime() - AP_FOLLOWUP_MIN_HOURS * HOUR_MS),
  }
}

/** The AP course of a DiagnosticTest.category (v1 `ap-chem-diagnostic-2` and v2 `ap-chem-diagnostic-v2` alike), else null. */
export function apFollowupCourse(category: string): (ClassPlanCourse & { courseSlug: string }) | null {
  const c = courseForCategory(category)
  if (!c || typeof c.courseSlug !== 'string' || !c.courseSlug.startsWith('ap-')) return null
  return c as ClassPlanCourse & { courseSlug: string }
}

export interface FollowupUser {
  id: string
  email: string | null
  name: string | null
  role: string
  emailVerified: Date | null
  /** Has at least one OAuth Account row (address vouched for by the provider). */
  hasOAuthAccount: boolean
}

export interface FollowupDiagnostic {
  id: string
  userId: string
  category: string
  createdAt: Date
  results: unknown
  weakAreas?: unknown
  user: FollowupUser
}

/** A lesson signal: the student touched a lesson of `courseSlug` at `at`. */
export interface LessonSignal {
  userId: string
  courseSlug: string
  at: Date
}

export type FollowupSkipReason =
  | 'not-ap'
  | 'teacher'
  | 'no-email'
  | 'unverified'
  | 'opted-out'
  | 'newer-diagnostic'
  | 'older-in-window'
  | 'lesson-opened'
  | 'already-sent'
  | 'no-topic'

export interface FollowupSelection {
  recipients: FollowupDiagnostic[]
  skipped: Partial<Record<FollowupSkipReason, number>>
}

export interface FollowupSelectionInput {
  /** AP diagnostics whose createdAt falls in followupWindow(now). */
  diagnostics: FollowupDiagnostic[]
  /** Users with an AP diagnostic at/after the window's `to` (their most recent one is not in the window). */
  newerDiagnosticUserIds: Set<string>
  /** Lesson signals for the candidate users at/after the window's `from`. */
  lessonSignals: LessonSignal[]
  /** Lower-cased unsubscribed addresses (EmailSubscriber.unsubscribed). */
  optedOutEmails: Set<string>
  /** Diagnostic ids that already have an AP_FOLLOWUP_EVENT marker. */
  sentDiagnosticIds: Set<string>
  now: Date
}

/**
 * Applies every targeting rule to the window's diagnostics. The result is
 * at most one diagnostic per student (their most recent in the window), each
 * with a usable email body (a recommended topic, or an exam within
 * AP_FOLLOWUP_EXAM_WEEK_DAYS so the exam-week variant needs none).
 */
export function selectFollowupRecipients(input: FollowupSelectionInput): FollowupSelection {
  const skipped: Partial<Record<FollowupSkipReason, number>> = {}
  const skip = (reason: FollowupSkipReason) => {
    skipped[reason] = (skipped[reason] ?? 0) + 1
  }

  // Most recent in-window diagnostic per student; the others are counted but
  // not emailed (one email per student per run — the latest sitting's plan is
  // the one the dashboard shows).
  const sorted = [...input.diagnostics].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  const seenUsers = new Set<string>()
  const recipients: FollowupDiagnostic[] = []

  for (const d of sorted) {
    const course = apFollowupCourse(d.category)
    if (!course) {
      skip('not-ap')
      continue
    }
    if (seenUsers.has(d.userId)) {
      skip('older-in-window')
      continue
    }
    seenUsers.add(d.userId)

    const u = d.user
    if (u.role === 'TEACHER' || u.role === 'ADMIN') {
      skip('teacher')
      continue
    }
    if (!u.email) {
      skip('no-email')
      continue
    }
    if (!u.emailVerified && !u.hasOAuthAccount) {
      skip('unverified')
      continue
    }
    if (input.optedOutEmails.has(u.email.toLowerCase())) {
      skip('opted-out')
      continue
    }
    if (input.newerDiagnosticUserIds.has(d.userId)) {
      skip('newer-diagnostic')
      continue
    }
    if (input.sentDiagnosticIds.has(d.id)) {
      skip('already-sent')
      continue
    }
    const since = d.createdAt.getTime()
    const opened = input.lessonSignals.some(
      (s) => s.userId === d.userId && s.courseSlug === course.courseSlug && s.at.getTime() >= since,
    )
    if (opened) {
      skip('lesson-opened')
      continue
    }
    const topic = firstRecommendedTopic(course.courseSlug, d.results)
    if (!topic && apFollowupVariant(course.courseSlug, input.now) !== 'exam-week') {
      skip('no-topic')
      continue
    }
    recipients.push(d)
  }

  return { recipients, skipped }
}

export type FollowupVariant = 'next-step' | 'exam-week'

/** Exam-week when the course's exam is 1..AP_FOLLOWUP_EXAM_WEEK_DAYS days away; next-step otherwise (or without a date). */
export function apFollowupVariant(courseSlug: string, now: Date): FollowupVariant {
  const days = daysUntilApExam(courseSlug, now)
  return days !== null && days >= 1 && days <= AP_FOLLOWUP_EXAM_WEEK_DAYS ? 'exam-week' : 'next-step'
}

type RecommendedTopic = { slug: string; name?: string }

function parsedResults(results: unknown): Record<string, unknown> | null {
  let r = results
  if (typeof r === 'string') {
    try {
      r = JSON.parse(r)
    } catch {
      return null
    }
  }
  return r && typeof r === 'object' && !Array.isArray(r) ? (r as Record<string, unknown>) : null
}

/** The first recommended topic of a stored AP results object, canonicalized to a production topic slug. */
export function firstRecommendedTopic(courseSlug: string, results: unknown): RecommendedTopic | null {
  const r = parsedResults(results)
  if (!r || !Array.isArray(r.recommendedTopics)) return null
  const valid = r.recommendedTopics.filter(
    (t): t is RecommendedTopic => !!t && typeof t === 'object' && typeof (t as RecommendedTopic).slug === 'string' && !!(t as RecommendedTopic).slug,
  )
  const canonical = canonicalizeRecommendedTopics(courseSlug, valid)
  return canonical[0] ?? null
}

/** The unit with the lowest percent correct, from the stored per-domain tallies; else the first weak area; else null. */
export function weakestUnit(results: unknown, weakAreas?: unknown): string | null {
  const r = parsedResults(results)
  const domains = r && Array.isArray(r.domains) ? r.domains : []
  let best: { name: string; pct: number } | null = null
  for (const d of domains) {
    if (!d || typeof d !== 'object') continue
    const o = d as { domainName?: unknown; name?: unknown; correct?: unknown; total?: unknown }
    const name = typeof o.domainName === 'string' ? o.domainName : typeof o.name === 'string' ? o.name : null
    if (!name || typeof o.correct !== 'number' || typeof o.total !== 'number' || o.total <= 0) continue
    const pct = o.correct / o.total
    if (!best || pct < best.pct) best = { name, pct }
  }
  if (best) return best.name
  const areas = (r && Array.isArray(r.weakAreas) ? r.weakAreas : Array.isArray(weakAreas) ? weakAreas : []) as unknown[]
  const first = areas.find((a) => typeof a === 'string' && a)
  return typeof first === 'string' ? first : null
}

/** The estimated score as "3–4/5" (or "4/5" when the sitting kept no counts), else null. */
export function followupScoreLabel(results: unknown): string | null {
  const sitting = apSittingOf(results)
  return sitting ? apBandLabel(sitting) : null
}

export interface ApFollowupEmailContext {
  diagnosticId: string
  userId: string
  email: string
  /** First name only — the one piece of PII the email carries. */
  firstName: string | null
  courseSlug: string
  courseLabel: string
  variant: FollowupVariant
  /** "3–4/5" style band, or null when the results carry no estimate. */
  scoreLabel: string | null
  /** Topic 1 of the stored plan (null only on the exam-week variant). */
  topic: { slug: string; title: string } | null
  /** Exam countdown, null without a date. */
  daysToExam: number | null
  weakestUnit: string | null
  /** Site-relative paths; the template prefixes the public app URL. */
  paths: { lesson: string | null; flashcards: string; practiceExam: string | null; mistakes: string }
}

/**
 * Everything the template needs, from one eligible diagnostic. `topicTitles`
 * (slug -> Topic.title from the database) wins over the stored name so the
 * button reads the production title.
 */
export function buildFollowupContext(
  d: FollowupDiagnostic,
  opts: { now: Date; topicTitles?: Map<string, string> },
): ApFollowupEmailContext | null {
  const course = apFollowupCourse(d.category)
  if (!course || !d.user.email) return null
  const slug = course.courseSlug
  const rec = firstRecommendedTopic(slug, d.results)
  const topic = rec ? { slug: rec.slug, title: opts.topicTitles?.get(rec.slug) ?? rec.name ?? rec.slug } : null
  const practice = Object.values(AP_PRACTICE_EXAMS).find((p) => p.courseSlug === slug)?.path ?? null
  return {
    diagnosticId: d.id,
    userId: d.userId,
    email: d.user.email,
    firstName: d.user.name?.trim().split(/\s+/)[0] || null,
    courseSlug: slug,
    courseLabel: course.label,
    variant: apFollowupVariant(slug, opts.now),
    scoreLabel: followupScoreLabel(d.results),
    topic,
    daysToExam: daysUntilApExam(slug, opts.now),
    weakestUnit: weakestUnit(d.results, d.weakAreas),
    paths: {
      lesson: topic ? `/topics/${topic.slug}/interactive` : null,
      flashcards: `/flashcards?course=${encodeURIComponent(slug)}`,
      practiceExam: practice,
      mistakes: isApToolCourse(slug) ? `/${slug}/mistakes` : '/dashboard',
    },
  }
}
