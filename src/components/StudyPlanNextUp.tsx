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

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, ClipboardList, Layers } from 'lucide-react'
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
}

interface PanelData {
  topics: PlanTopic[]
  planLabel: string
  diagnosticRoute: string
  gated: boolean
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

export default function StudyPlanNextUp({ topicSlug, completion, quizPassed, fallback }: StudyPlanNextUpProps) {
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
              planLabel: typeof match.label === 'string' ? match.label : '',
              diagnosticRoute: typeof match.diagnosticRoute === 'string' ? match.diagnosticRoute : '/dashboard',
              gated: match.gated === true,
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

  // Flashcard unlock (display only — the rule itself lives in
  // src/lib/flashcard-unlock.ts): lesson done + exit quiz submitted.
  // - Lesson surface: only reachable once the exit quiz is passed or the topic
  //   has none, so this lesson finish completes the pair.
  // - Entrance surface: every part aced is the test-out waiver.
  // - Quiz surface: a pass sets MASTERED (counts as the lesson), and a failed
  //   attempt still unlocks when the lesson side was already done
  //   (entranceSatisfied = aced the ENTRANCE quiz, for MCAT-enriched topics).
  const flashcardsUnlocked =
    completion === 'lesson' ||
    completion === 'entrance' ||
    quizPassed === true ||
    planTopic?.entranceSatisfied === true

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
  const pendingCount = data.topics.filter((t) => !t.isSatisfied && t.slug !== topicSlug).length
  const total = data.topics.length
  const done = total - pendingCount

  const flashcardCount =
    typeof planTopic.flashcardCount === 'number' && planTopic.flashcardCount > 0
      ? planTopic.flashcardCount
      : null

  const topicCardsPending = flashcardsUnlocked && cardsDue > 0
  // Hold the whole "what's next" invitation until this topic's cards are done
  // for the day — and until we know, so it can't flash on screen first.
  const showWhatsNext = cardsChecked && !topicCardsPending

  const nextLessonPath = next?.hasLesson && next.lessonPath ? next.lessonPath : null
  const nextQuizPath = next?.hasExitQuiz && next.exitQuizPath ? next.exitQuizPath : null
  const nextTopicPath = next?.topicPath || (next ? `/topics/${next.slug}` : null)

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
            setTarget({ href: planTopicHref(next), label: `Next topic: ${next.name}` })
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
