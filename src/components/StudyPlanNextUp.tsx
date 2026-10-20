'use client'

/**
 * Post-completion study-plan router. Closes the diagnostic remediation loop:
 * after a student finishes one of their recommended topics (exit-quiz pass,
 * lesson finish, or an aced entrance quiz), this panel tells them what to do
 * NEXT — the next pending recommendation, or the diagnostic retake once the
 * plan is done — plus a "flashcards unlocked" notice when this completion
 * satisfied the unlock rule.
 *
 * Owner rule (2026-09-28): the next STUDY step is always the primary action
 * after a study action. Competitive Mode is secondary and lives in the
 * caller's secondary links, never here.
 *
 * Mount it ONLY on a completion surface (it fetches on mount, so mounting it
 * during the quiz/lesson would add a request before the student is done).
 * Everything degrades silently: signed out (401), no diagnostic plan, topic
 * not in any plan, or a failed fetch render the caller's `fallback` (or
 * nothing when none is given) — the surface's completion actions are never
 * blocked.
 *
 * Data: the generic /api/study-plan/plan-status covers all 33 diagnostic
 * courses (slug/name/isSatisfied per topic). When the matched plan is the
 * MCAT's, /api/mcat-diagnostic/plan-status enriches topics with real study
 * surfaces (lessonPath/exitQuizPath/flashcardCount) — most MCAT subtopic
 * pages have no written lesson, so bare topic links would dead-end there.
 *
 * Flashcard links go to the RATED review session filtered to this topic
 * (topicFlashcardReviewHref). The card count comes from the same endpoint that
 * session reads (/api/flashcards/review?topicSlug=…), so "N cards left — rate
 * them now" always opens exactly those N cards and the hold on "Next up"
 * releases once they are rated.
 */

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { UNIT_TEST_COURSES, unitTestIsNextStep, unitTestName } from '@/lib/unit-test-courses'
import { FULL_LENGTH_COURSES, isFullLengthCourse, type FullLengthCourse } from '@/lib/full-length-progress'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { trackPlanNextBlockedByCards } from '@/lib/analytics'
import { ArrowRight, BookOpen, CalendarDays, ClipboardList, Layers } from 'lucide-react'
import { topicFlashcardBrowseHref, topicFlashcardReviewHref } from '@/lib/flashcard-links'

export interface PlanTopic {
  slug: string
  name: string
  isSatisfied: boolean
  topicPath?: string
  topicFound?: boolean
  // MCAT enrichment (absent on the generic payload)
  hasLesson?: boolean
  lessonPath?: string | null
  hasExitQuiz?: boolean
  exitQuizPath?: string | null
  flashcardCount?: number
  flashcardsPath?: string
  entranceSatisfied?: boolean
  exitQuizRequired?: boolean
}

interface PlanPayload {
  topics?: PlanTopic[]
  label?: string
  courseKey?: string
  courseSlug?: string | null
  diagnosticRoute?: string
  gated?: boolean
  canRetakeDiagnostic?: boolean
  unitTest?: { passed: boolean; path: string; questionCount: number; passPercent: number; locksDiagnostic?: boolean; testName?: string } | null
}

interface PanelData {
  topics: PlanTopic[]
  /** CLASS_PLAN_COURSES key ('ap-chem', 'mcat', …); '' when the payload has none. */
  courseKey: string
  planLabel: string
  diagnosticRoute: string
  gated: boolean
  /** The cycle's unit test still to pass (null when none / passed / waived). */
  unitTest: { path: string; questionCount: number; passPercent: number; locks: boolean; name: string } | null
}

/**
 * The next pending recommendation after `justCompletedSlug`. The completed
 * topic counts as done even when the server snapshot raced this completion's
 * own write (the fetch fires right after submit).
 */
export function pickNextPendingTopic(
  topics: PlanTopic[],
  justCompletedSlug?: string | null,
): PlanTopic | null {
  return topics.find((t) => !t.isSatisfied && t.slug !== justCompletedSlug) ?? null
}

/** Best link for a plan topic: its lesson, else its exit quiz, else its page. */
export function planTopicHref(topic: PlanTopic): string {
  if (topic.hasLesson && topic.lessonPath) return topic.lessonPath
  if (topic.hasExitQuiz && topic.exitQuizPath) return topic.exitQuizPath
  return topic.topicPath || `/topics/${topic.slug}`
}

/**
 * THE link for a plan topic, used by every surface that links one (dashboard
 * next step, course hub "Start here", this panel). The interactive lesson is
 * where the loop runs (entrance quiz, lesson parts, exit quiz), so a bare
 * topic page link goes there — except for the MCAT, whose subtopic pages often
 * have no written lesson (its enriched plan carries real lesson/quiz paths).
 */
export function studyPlanTopicHref(topic: PlanTopic, courseKey: string): string {
  const href = planTopicHref(topic)
  if (courseKey !== 'mcat' && href === `/topics/${topic.slug}`) return `${href}/interactive`
  return href
}

/**
 * Does this completion leave the completed topic CLEARED? The server snapshot
 * may race this completion's own write, so the completion itself counts:
 *   - a passed exit quiz or an aced entrance quiz clears the topic;
 *   - a finished lesson clears it only when the topic has no exit quiz — with
 *     one, the gating quiz is still owed (plan rule: a topic clears on its
 *     exit quiz, not when the lesson ends), unless the snapshot already says
 *     it is cleared.
 */
export function completedTopicCleared(
  topic: Pick<PlanTopic, 'isSatisfied' | 'hasExitQuiz'>,
  completion: StudyPlanNextUpProps['completion'],
  quizPassed?: boolean,
): boolean {
  if (topic.isSatisfied) return true
  if (completion === 'quiz') return quizPassed === true
  if (completion === 'entrance') return true
  return topic.hasExitQuiz !== true
}

/**
 * The default calendar target when a student says "done for today" with no
 * target set: one topic a day starting tomorrow for the remaining topics,
 * the unit/cycle test the day after the last one, the diagnostic retake the
 * day after that. The scheduler (src/lib/cycle-scheduler.ts) spaces the
 * remaining lessons evenly up to that date, so with N topics left the target
 * is today + N + 2. Local calendar date, as the target API expects.
 */
export function defaultCycleTargetDate(today: Date, pendingLessons: number): string {
  const d = new Date(today)
  d.setDate(d.getDate() + Math.max(0, pendingLessons) + 2)
  return localYmd(d)
}

function localYmd(d: Date): string {
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

function fmtDay(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
}

/** The day before a noon-UTC date stamp, as the same kind of stamp. */
function dayBefore(iso: string): string {
  return new Date(new Date(iso).getTime() - 86_400_000).toISOString()
}

export interface StudyPlanNextUpProps {
  /** The topic the student just completed on this surface. */
  topicSlug: string
  /**
   * Which completion event mounted this panel. 'entrance' = every part of the
   * entrance quiz aced (a test-out: flashcards unlock without an exit quiz).
   */
  completion: 'quiz' | 'lesson' | 'entrance'
  /** Quiz surface only: did this attempt pass? */
  quizPassed?: boolean
  /**
   * Lesson surface: opens this topic's GRADED exit quiz in place. Used when
   * the plan still shows the topic uncleared after the lesson (its exit quiz
   * is owed); without it the panel links the lesson's ?exitQuiz=1 deep link.
   */
  onTakeExitQuiz?: () => void
  /**
   * Rendered when this topic is in no diagnostic plan (or the student is
   * signed out / the fetch failed), so the surface still leads with a next
   * step. `cardsToReview` > 0 means a "Review your N flashcards" button was
   * already rendered as the primary action above it.
   */
  fallback?: (ctx: { cardsToReview: number }) => ReactNode
}

type PlanState = { status: 'loading' } | { status: 'none'; signedIn: boolean } | { status: 'plan'; data: PanelData }

const PRIMARY_BUTTON =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-accent to-pink-600 text-white hover:from-accent-hover hover:to-pink-700 shadow-lg transition-colors'
const SECONDARY_BUTTON =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-accent-light dark:border-accent-hover text-accent-hover dark:text-accent-muted hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors'

export default function StudyPlanNextUp({ topicSlug, completion, quizPassed, onTakeExitQuiz, fallback }: StudyPlanNextUpProps) {
  const [plan, setPlan] = useState<PlanState>({ status: 'loading' })
  // Cards still owed on THIS topic today; null = unknown (not unlocked, or the
  // count couldn't be fetched), which degrades to "nothing is being withheld".
  const [cardsRemaining, setCardsRemaining] = useState<number | null>(null)
  const [cardsChecked, setCardsChecked] = useState(false)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      let next: PlanState = { status: 'none', signedIn: true }
      try {
        const res = await fetch('/api/study-plan/plan-status')
        if (!res.ok) {
          // signed out (401) or server error — no plan; the fallback still shows
          next = { status: 'none', signedIn: res.status !== 401 }
          return
        }
        const body = await res.json()
        const plans: PlanPayload[] = Array.isArray(body?.plans) ? body.plans : []
        const match = plans.find(
          (p) => Array.isArray(p?.topics) && p.topics.some((t) => t?.slug === topicSlug),
        )
        if (!match) return // completed topic isn't in any diagnostic plan

        let topics: PlanTopic[] = match.topics ?? []
        if (match.courseKey === 'mcat') {
          // Enrich with the MCAT endpoint's per-topic study surfaces.
          try {
            const mcatRes = await fetch('/api/mcat-diagnostic/plan-status')
            if (mcatRes.ok) {
              const mcat = await mcatRes.json()
              if (Array.isArray(mcat?.recommendedTopics) && mcat.recommendedTopics.length > 0) {
                topics = mcat.recommendedTopics
              }
            }
          } catch {
            // enrichment is optional — generic topic links still work
          }
        }

        if (topics.some((t) => t.slug === topicSlug)) {
          next = {
            status: 'plan',
            data: {
              topics,
              courseKey: typeof match.courseKey === 'string' ? match.courseKey : '',
              planLabel: typeof match.label === 'string' ? match.label : '',
              diagnosticRoute: typeof match.diagnosticRoute === 'string' ? match.diagnosticRoute : '/dashboard',
              gated: match.gated === true,
              // Not gated on `available`: this panel may be reporting the very
              // quiz that cleared the last topic, ahead of the server snapshot.
              unitTest:
                match.unitTest && unitTestIsNextStep(match.unitTest, match.canRetakeDiagnostic, { requireAvailable: false })
                  ? {
                      path: match.unitTest.path,
                      questionCount: match.unitTest.questionCount,
                      passPercent: match.unitTest.passPercent,
                      locks: match.unitTest.locksDiagnostic !== false,
                      name: unitTestName(match.unitTest),
                    }
                  : null,
            },
          }
        }
      } catch {
        // network failure — fall back, existing completion UI is untouched
      } finally {
        if (!cancelled) setPlan(next)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [topicSlug])

  const planTopic = plan.status === 'plan' ? plan.data.topics.find((t) => t.slug === topicSlug) : undefined

  // Is the completed topic cleared, by this completion or the snapshot? On the
  // lesson surface a topic with an exit quiz stays uncleared until the quiz
  // is passed at the plan's mark — the panel then leads with that quiz.
  const topicCleared = planTopic ? completedTopicCleared(planTopic, completion, quizPassed) : true
  const exitQuizPending = completion === 'lesson' && !topicCleared

  // Flashcard unlock (display only — the rule itself lives in
  // src/lib/flashcard-unlock.ts): lesson done + exit quiz submitted.
  // - Lesson surface: normally reachable once the exit quiz is passed or the
  //   topic has none, so this lesson finish completes the pair — unless the
  //   plan says the quiz is still owed (exitQuizPending), then nothing yet.
  // - Entrance surface: every part aced is the test-out waiver.
  // - Quiz surface: a pass sets MASTERED (counts as the lesson), and a failed
  //   attempt still unlocks when the lesson side was already done
  //   (entranceSatisfied = aced the ENTRANCE quiz, for MCAT-enriched topics).
  const flashcardsUnlocked =
    !exitQuizPending &&
    (completion === 'lesson' ||
      completion === 'entrance' ||
      quizPassed === true ||
      planTopic?.entranceSatisfied === true)

  const signedIn = plan.status === 'plan' || (plan.status === 'none' && plan.signedIn)

  // Owner's rule: finish THIS topic's cards, then the next lesson. Count what
  // the rated topic session will actually serve right now.
  useEffect(() => {
    if (plan.status === 'loading') return
    if (!flashcardsUnlocked || !signedIn) {
      setCardsChecked(true)
      return
    }
    let cancelled = false
    const loadCards = async () => {
      try {
        const res = await fetch(
          `/api/flashcards/review?topicSlug=${encodeURIComponent(topicSlug)}&tzOffset=${new Date().getTimezoneOffset()}`,
        )
        if (res.ok) {
          const body = await res.json()
          const due = Number(body?.stats?.due)
          if (!cancelled && Number.isFinite(due)) setCardsRemaining(Math.max(0, due))
        }
      } catch {
        // leave cardsRemaining null — never trap a student behind a failed fetch
      } finally {
        if (!cancelled) setCardsChecked(true)
      }
    }
    loadCards()
    return () => {
      cancelled = true
    }
  }, [plan.status, flashcardsUnlocked, signedIn, topicSlug])

  // GA4: the hold on "Next up" (owner rule, kept) landed on this student —
  // their plan's next step is withheld until this topic's cards are rated.
  // Once per mount, only once the count is known.
  const blockedByCards = plan.status === 'plan' && cardsChecked && flashcardsUnlocked && (cardsRemaining ?? 0) > 0
  const blockedTracked = useRef(false)
  useEffect(() => {
    if (!blockedByCards || blockedTracked.current) return
    blockedTracked.current = true
    trackPlanNextBlockedByCards(topicSlug, cardsRemaining ?? 0, plan.status === 'plan' ? plan.data.courseKey : '')
  }, [blockedByCards, cardsRemaining, topicSlug, plan])

  if (plan.status === 'loading') return null

  const reviewHref = topicFlashcardReviewHref(topicSlug)
  const cardsDue = cardsRemaining ?? 0

  // ── No plan for this topic: review cards first (if any), then the caller's
  // fallback next step.
  if (plan.status === 'none') {
    if (!fallback || !cardsChecked) return null
    return (
      <div className="mt-6 space-y-3 text-left">
        {flashcardsUnlocked && cardsDue > 0 && (
          <div className="flex justify-center">
            <Link href={reviewHref} className={PRIMARY_BUTTON}>
              <Layers className="w-4 h-4" aria-hidden="true" />
              Review your {cardsDue} flashcard{cardsDue === 1 ? '' : 's'} for this topic
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        )}
        {fallback({ cardsToReview: flashcardsUnlocked ? cardsDue : 0 })}
      </div>
    )
  }

  const data = plan.data
  if (!planTopic) return null

  const next = pickNextPendingTopic(data.topics, topicSlug)
  const pendingOthers = data.topics.filter((t) => !t.isSatisfied && t.slug !== topicSlug).length
  const total = data.topics.length
  // This topic counts as done unless its gating quiz is still owed.
  const done = total - pendingOthers - (topicCleared ? 0 : 1)
  // ONE helper for every plan-topic link (dashboard, hub, here).
  const nextHref = next ? studyPlanTopicHref(next, data.courseKey) : null

  // ── Lesson finished but the plan still owes this topic's exit quiz: that
  // quiz is the next step, the next topic is secondary. (Sending them on to
  // topic 2 left topic 1 uncleared, with the dashboard pointing back at it.)
  if (exitQuizPending) {
    const quizHref = `/topics/${topicSlug}/interactive?exitQuiz=1`
    const cta = (
      <>
        <ClipboardList className="w-4 h-4" aria-hidden="true" />
        Take the exit quiz for {planTopic.name}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </>
    )
    return (
      <div className="mt-6 space-y-4 text-left">
        <div className="rounded-2xl border-2 border-accent-light dark:border-accent/40 bg-gradient-to-r from-accent-subtle to-pink-50 dark:from-accent-light/20 dark:to-pink-900/20 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-hover dark:text-accent-muted">
            {data.planLabel ? `Your ${data.planLabel} study plan` : 'Your study plan'}
          </p>
          <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
            One step left on {planTopic.name}: its exit quiz
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Score {TOPIC_CLEAR_PERCENT}% to clear this topic and unlock its flashcards — finishing the lesson alone doesn&apos;t clear it.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            {onTakeExitQuiz ? (
              <button type="button" onClick={onTakeExitQuiz} className={PRIMARY_BUTTON}>
                {cta}
              </button>
            ) : (
              /* A full load: the lesson page opens the graded quiz from ?exitQuiz=1 on mount. */
              <a href={quizHref} className={PRIMARY_BUTTON}>
                {cta}
              </a>
            )}
            {next && nextHref && (
              <Link href={nextHref} className={SECONDARY_BUTTON}>
                Skip ahead to {next.name}
              </Link>
            )}
          </div>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            {done} of {total} sections complete — a section clears when you pass its exit quiz, not when the lesson ends
          </p>
        </div>
      </div>
    )
  }

  const flashcardCount =
    typeof planTopic.flashcardCount === 'number' && planTopic.flashcardCount > 0
      ? planTopic.flashcardCount
      : null

  const topicCardsPending = flashcardsUnlocked && cardsDue > 0
  // Hold the whole "what's next" invitation until this topic's cards are done
  // for the day — and until we know, so it can't flash on screen first.
  const showWhatsNext = cardsChecked && !topicCardsPending

  // MCAT-enriched topics carry real lesson/quiz paths; otherwise the one helper.
  const nextLessonPath = next?.hasLesson && next.lessonPath ? next.lessonPath : null
  const nextQuizPath = next?.hasExitQuiz && next.exitQuizPath ? next.exitQuizPath : null
  const nextTopicPath = nextHref

  const cardsDoneForToday = cardsChecked && cardsRemaining === 0

  return (
    <div className="mt-6 space-y-4 text-left">
      {/* Flashcards: what's actually left to do on THIS topic today. */}
      {flashcardsUnlocked && (
        <Link
          href={cardsDoneForToday ? topicFlashcardBrowseHref(topicSlug) : reviewHref}
          className={
            topicCardsPending
              ? 'flex items-center gap-3 rounded-xl border-2 border-accent-light dark:border-accent/40 bg-accent-subtle dark:bg-accent-light/20 p-4 hover:bg-accent-light dark:hover:bg-accent-light/30 transition-colors'
              : 'flex items-center gap-3 rounded-xl border border-accent-light dark:border-accent/30 bg-accent-subtle dark:bg-accent-light/20 p-4 hover:bg-accent-light dark:hover:bg-accent-light/30 transition-colors'
          }
        >
          <Layers className="w-5 h-5 shrink-0 text-accent-hover dark:text-accent-muted" aria-hidden="true" />
          <span className="text-sm text-gray-800 dark:text-gray-200">
            {topicCardsPending ? (
              <>
                🎴 <span className="font-semibold">{cardsDue} card{cardsDue === 1 ? '' : 's'} left</span> in
                this topic today —{' '}
                <span className="font-semibold text-accent-hover dark:text-accent-muted underline underline-offset-2">
                  rate them now
                </span>
                {next ? ', then your next lesson opens up' : ''}
              </>
            ) : cardsDoneForToday ? (
              <>
                ✅ This topic&apos;s cards are done for today —{' '}
                <span className="font-semibold text-accent-hover dark:text-accent-muted underline underline-offset-2">
                  browse them
                </span>{' '}
                any time
              </>
            ) : (
              <>
                🎴 {flashcardCount !== null ? `${flashcardCount} flashcards` : 'Flashcards'} unlocked for this
                topic —{' '}
                <span className="font-semibold text-accent-hover dark:text-accent-muted underline underline-offset-2">
                  study them now
                </span>
              </>
            )}
          </span>
        </Link>
      )}

      {topicCardsPending && next && (
        <p className="px-1 text-xs text-gray-500 dark:text-gray-400">
          Next up after that: {next.name}
        </p>
      )}

      {!showWhatsNext ? null : next ? (
        /* Next pending recommendation */
        <div className="rounded-2xl border-2 border-accent-light dark:border-accent/40 bg-gradient-to-r from-accent-subtle to-pink-50 dark:from-accent-light/20 dark:to-pink-900/20 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-hover dark:text-accent-muted">
            {data.planLabel ? `Your ${data.planLabel} study plan` : 'Your study plan'}
          </p>
          <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
            Next up: {next.name}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            {nextLessonPath && (
              <Link href={nextLessonPath} className={PRIMARY_BUTTON}>
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Start Lesson
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            )}
            {nextQuizPath && (
              <Link
                href={nextQuizPath}
                className={
                  nextLessonPath
                    ? 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-accent-light dark:border-accent-hover text-accent-hover dark:text-accent-muted hover:bg-accent-subtle dark:hover:bg-accent-light/30 transition-colors'
                    : PRIMARY_BUTTON
                }
              >
                <ClipboardList className="w-4 h-4" aria-hidden="true" />
                {/* This links ?exitQuiz=1 — the GRADED exit quiz, not practice. */}
                Take Exit Quiz
                {!nextLessonPath && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
              </Link>
            )}
            {!nextLessonPath && !nextQuizPath && nextTopicPath && (
              <Link href={nextTopicPath} className={PRIMARY_BUTTON}>
                Go to Topic
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            )}
          </div>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            {done} of {total} sections complete
            {next.exitQuizRequired
              ? ' — a section clears when you pass its exit quiz, not when the lesson ends'
              : ''}
          </p>
          {/* A stopping point: come back tomorrow for the next topic, with the
              remaining topics dated on the calendar (MCAT, SAT and AP cycles). */}
          {topicCleared && isFullLengthCourse(data.courseKey) && (
            <DoneForToday course={data.courseKey} nextName={next.name} pendingAfter={pendingOthers} />
          )}
        </div>
      ) : data.unitTest ? (
        /* Every topic cleared — the cycle's unit test (AP: cycle test) is the last step */
        <div className="rounded-2xl border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 text-center">
          <div className="text-4xl mb-2">📝</div>
          <p className="text-lg font-bold text-green-800 dark:text-green-300">
            All {total} sections cleared — one step left
          </p>
          <p className="mt-1 text-sm text-green-700 dark:text-green-400">
            {data.unitTest.locks
              ? `Pass the ${data.unitTest.questionCount}-question ${data.unitTest.name} on these topics (${data.unitTest.passPercent}% or better) to unlock your next diagnostic.`
              : `Finish the cycle with a ${data.unitTest.questionCount}-question ${data.unitTest.name} on these topics (${data.unitTest.passPercent}% to pass), then retake the diagnostic to see your growth.`}
          </p>
          <Link
            href={data.unitTest.path}
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg transition-colors"
          >
            Take the {data.unitTest.name}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      ) : (
        /* Plan finished — celebrate and route to the diagnostic retake */
        <div className="rounded-2xl border-2 border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 text-center">
          <div className="text-4xl mb-2">🎉</div>
          <p className="text-lg font-bold text-green-800 dark:text-green-300">
            Study plan complete — all {total} sections done!
          </p>
          <Link
            href={data.diagnosticRoute}
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg transition-colors"
          >
            {data.gated
              ? "You've unlocked your diagnostic retake"
              : 'Retake the diagnostic to see your growth'}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  )
}

type DoneState =
  | { status: 'idle' }
  | { status: 'busy' }
  | { status: 'set'; dueDate: string }
  | { status: 'exists'; source: 'class' | 'self' | null }
  | { status: 'error' }

/**
 * "Done for today — next up tomorrow: <topic>". With no target date for this
 * course's cycle, sets the default pace (defaultCycleTargetDate) through the
 * calendar target API — which refuses to override a teacher's due date, and
 * whose scheduler never moves a task the student moved — then links the
 * calendar. With a target already set (own or teacher's), just links it.
 */
function DoneForToday({ course, nextName, pendingAfter }: { course: FullLengthCourse; nextName: string; pendingAfter: number }) {
  const [state, setState] = useState<DoneState>({ status: 'idle' })
  const label = FULL_LENGTH_COURSES[course].label
  const testName = UNIT_TEST_COURSES[course].testName

  const done = async () => {
    setState({ status: 'busy' })
    try {
      const today = localYmd(new Date())
      const res = await fetch(`/api/calendar?from=${today}&to=${today}`, { cache: 'no-store' })
      if (!res.ok) throw new Error('calendar')
      const body = await res.json()
      const cycles: { course: string; dueDate: string | null; source: 'class' | 'self' | null }[] = Array.isArray(body?.cycles) ? body.cycles : []
      const cycle = cycles.find((c) => c.course === course)
      if (cycle?.dueDate) {
        setState({ status: 'exists', source: cycle.source })
        return
      }
      const date = defaultCycleTargetDate(new Date(), pendingAfter)
      const put = await fetch('/api/calendar/target', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course, date }),
      })
      if (put.status === 409) {
        // A teacher's due date arrived meanwhile: that schedule stands.
        setState({ status: 'exists', source: 'class' })
        return
      }
      if (!put.ok) throw new Error('target')
      const r = await put.json()
      setState({ status: 'set', dueDate: typeof r?.dueDate === 'string' ? r.dueDate : `${date}T12:00:00.000Z` })
    } catch {
      setState({ status: 'error' })
    }
  }

  const calendarLink = (text: string) => (
    <Link href="/calendar" className="inline-flex items-center gap-1 font-semibold text-accent-hover dark:text-accent-muted underline underline-offset-2">
      <CalendarDays className="w-4 h-4" aria-hidden="true" />
      {text}
    </Link>
  )

  if (state.status === 'set') {
    return (
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300" role="status">
        ✅ See you tomorrow. {pendingAfter > 0 ? `Your ${pendingAfter} remaining topic${pendingAfter === 1 ? ' is' : 's are'} on your calendar at one a day, ` : 'Your calendar has '}
        the {testName} on {fmtDay(dayBefore(state.dueDate))}, then your {label} diagnostic on {fmtDay(state.dueDate)}.{' '}
        {calendarLink('Open your calendar')}
      </p>
    )
  }
  if (state.status === 'exists') {
    return (
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300" role="status">
        ✅ See you tomorrow — {nextName} is already on your calendar
        {state.source === 'class' ? ' (your teacher set the due date)' : ''}. {calendarLink('Open your calendar')}
      </p>
    )
  }
  if (state.status === 'error') {
    return (
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-300" role="status">
        Couldn&apos;t save a target date just now. {calendarLink('Set one on your calendar')}
      </p>
    )
  }
  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={done}
        disabled={state.status === 'busy'}
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent-hover dark:text-accent-muted underline underline-offset-2 disabled:opacity-60"
      >
        <CalendarDays className="w-4 h-4" aria-hidden="true" />
        {state.status === 'busy' ? 'Saving your calendar…' : `Done for today — next up tomorrow: ${nextName}`}
      </button>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        Puts your remaining topics on your calendar, one a day, with the {testName} and your next diagnostic after them.
      </p>
    </div>
  )
}

/**
 * One "go study next" button for flashcard empty states: the first pending
 * topic in the student's diagnostic plan, else their plan's course, else
 * `fallbackHref`. Renders the fallback immediately and upgrades it once the
 * plan loads, so the button is never missing.
 */
export function NextStudyStepButton({
  fallbackHref = '/topics',
  fallbackLabel = 'Find a topic to start',
  className = PRIMARY_BUTTON,
}: {
  fallbackHref?: string
  fallbackLabel?: string
  className?: string
}) {
  const [target, setTarget] = useState<{ href: string; label: string } | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/study-plan/plan-status')
      .then((res) => (res.ok ? res.json() : null))
      .then((body) => {
        if (cancelled || !body) return
        const plans: PlanPayload[] = Array.isArray(body?.plans) ? body.plans : []
        for (const p of plans) {
          const next = pickNextPendingTopic(Array.isArray(p?.topics) ? p.topics : [])
          if (next) {
            setTarget({ href: studyPlanTopicHref(next, typeof p.courseKey === 'string' ? p.courseKey : ''), label: `Next topic: ${next.name}` })
            return
          }
        }
        const withCourse = plans.find((p) => typeof p?.courseSlug === 'string' && p.courseSlug)
        if (withCourse?.courseSlug) {
          setTarget({
            href: `/courses/${withCourse.courseSlug}`,
            label: withCourse.label ? `Go to ${withCourse.label}` : 'Go to your course',
          })
        }
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <Link href={target?.href ?? fallbackHref} className={className}>
      <BookOpen className="w-4 h-4" aria-hidden="true" />
      {target?.label ?? fallbackLabel}
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  )
}
