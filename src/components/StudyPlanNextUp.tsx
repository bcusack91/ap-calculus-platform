'use client'

/**
 * Post-completion study-plan router. Closes the diagnostic remediation loop:
 * after a student finishes one of their recommended topics (exit-quiz pass or
 * lesson finish), this panel tells them what to do NEXT — the next pending
 * recommendation, or the diagnostic retake once the plan is done — plus a
 * "flashcards unlocked" notice when this completion satisfied the unlock rule.
 *
 * Mount it ONLY on a completion surface (it fetches on mount, so mounting it
 * during the quiz/lesson would add a request before the student is done).
 * Everything degrades silently: signed out (401), no diagnostic plan, topic
 * not in any plan, or a failed fetch all render nothing — the surface's
 * existing completion actions are never blocked or altered.
 *
 * Data: the generic /api/study-plan/plan-status covers all 33 diagnostic
 * courses (slug/name/isSatisfied per topic). When the matched plan is the
 * MCAT's, /api/mcat-diagnostic/plan-status enriches topics with real study
 * surfaces (lessonPath/exitQuizPath/flashcardCount) — most MCAT subtopic
 * pages have no written lesson, so bare topic links would dead-end there.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, ClipboardList, Layers } from 'lucide-react'

interface PlanTopic {
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

/**
 * How many of this topic's cards we bother counting. The session endpoint
 * `take`s this many per bucket, so a bigger deck reads as "N+".
 */
const CARD_PROBE_LIMIT = 50

interface PanelData {
  topics: PlanTopic[]
  planLabel: string
  diagnosticRoute: string
  gated: boolean
}

interface StudyPlanNextUpProps {
  /** The topic the student just completed on this surface. */
  topicSlug: string
  /** Which completion event mounted this panel. */
  completion: 'quiz' | 'lesson'
  /** Quiz surface only: did this attempt pass? */
  quizPassed?: boolean
}

export default function StudyPlanNextUp({ topicSlug, completion, quizPassed }: StudyPlanNextUpProps) {
  const [data, setData] = useState<PanelData | null>(null)
  // Cards still owed on THIS topic today; null = unknown (not unlocked, or the
  // count couldn't be fetched), which degrades to "nothing is being withheld".
  const [cardsRemaining, setCardsRemaining] = useState<number | null>(null)
  const [cardsChecked, setCardsChecked] = useState(false)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await fetch('/api/study-plan/plan-status')
        if (!res.ok) return // signed out (401) or server error — stay silent
        const body = await res.json()
        const plans = Array.isArray(body?.plans) ? body.plans : []
        const plan = plans.find(
          (p: { topics?: PlanTopic[] }) =>
            Array.isArray(p?.topics) && p.topics.some((t) => t?.slug === topicSlug),
        )
        if (!plan) return // completed topic isn't in any diagnostic plan

        let topics: PlanTopic[] = plan.topics
        if (plan.courseKey === 'mcat') {
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

        if (!cancelled && topics.some((t) => t.slug === topicSlug)) {
          setData({
            topics,
            planLabel: typeof plan.label === 'string' ? plan.label : '',
            diagnosticRoute: typeof plan.diagnosticRoute === 'string' ? plan.diagnosticRoute : '/dashboard',
            gated: plan.gated === true,
          })
        }
      } catch {
        // network failure — render nothing, existing completion UI is untouched
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [topicSlug])

  // Owner's rule: finish THIS topic's cards, then the next lesson. Count what's
  // still due on this topic (existing per-topic session endpoint — no new API)
  // so the panel can hold the "next up" invitation back until they're cleared.
  useEffect(() => {
    if (!data) return
    const topic = data.topics.find((t) => t.slug === topicSlug)
    if (!topic) return
    const unlocked =
      completion === 'lesson' || quizPassed === true || topic.entranceSatisfied === true
    if (!unlocked) {
      setCardsChecked(true)
      return
    }
    let cancelled = false
    const loadCards = async () => {
      try {
        const res = await fetch(
          `/api/flashcards/session?topicSlug=${encodeURIComponent(topicSlug)}&limit=${CARD_PROBE_LIMIT}`,
        )
        if (res.ok) {
          const body = await res.json()
          const due = Number(body?.stats?.dueCount)
          const fresh = Number(body?.stats?.newCount)
          if (!cancelled && (Number.isFinite(due) || Number.isFinite(fresh))) {
            setCardsRemaining((Number.isFinite(due) ? due : 0) + (Number.isFinite(fresh) ? fresh : 0))
          }
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
  }, [data, topicSlug, completion, quizPassed])

  if (!data) return null

  const completedTopic = data.topics.find((t) => t.slug === topicSlug)
  if (!completedTopic) return null

  // The just-completed topic counts as done even if the server snapshot raced
  // this completion's own progress/attempt write (the fetch fires right after
  // submit, so the row may not be visible yet).
  const pending = data.topics.filter((t) => !t.isSatisfied && t.slug !== topicSlug)
  const total = data.topics.length
  const done = total - pending.length
  const next = pending[0] ?? null

  // Flashcard unlock (display only — the rule itself lives in
  // src/lib/flashcard-unlock.ts): lesson done + exit quiz submitted.
  // - Lesson surface: only reachable once the exit quiz is passed or the topic
  //   has none, so this lesson finish completes the pair.
  // - Quiz surface: a pass sets MASTERED (counts as the lesson), and a failed
  //   attempt still unlocks when the lesson side was already done
  //   (entranceSatisfied = aced the ENTRANCE quiz, for MCAT-enriched topics;
  //   merely finishing the lesson parts no longer counts — same narrowing as
  //   the server rule).
  const flashcardsUnlocked =
    completion === 'lesson' || quizPassed === true || completedTopic.entranceSatisfied === true
  const flashcardCount =
    typeof completedTopic.flashcardCount === 'number' && completedTopic.flashcardCount > 0
      ? completedTopic.flashcardCount
      : null
  const flashcardsPath = completedTopic.flashcardsPath || `/flashcards/${topicSlug}`

  // Cards owed on this topic today. Unknown (fetch failed, or the topic has no
  // unlock) reads as "none owed" so the panel never strands a student.
  const cardsDue = cardsRemaining ?? 0
  const cardsDueLabel = cardsDue >= CARD_PROBE_LIMIT ? `${CARD_PROBE_LIMIT}+` : `${cardsDue}`
  const topicCardsPending = flashcardsUnlocked && cardsDue > 0
  // Hold the whole "what's next" invitation until this topic's cards are done
  // for the day — and until we know, so it can't flash on screen first.
  const showWhatsNext = cardsChecked && !topicCardsPending

  const nextLessonPath = next?.hasLesson && next.lessonPath ? next.lessonPath : null
  const nextQuizPath = next?.hasExitQuiz && next.exitQuizPath ? next.exitQuizPath : null
  const nextTopicPath = next?.topicPath || (next ? `/topics/${next.slug}` : null)

  return (
    <div className="mt-6 space-y-4 text-left">
      {/* Flashcards: what's actually left to do on THIS topic today. */}
      {flashcardsUnlocked && (
        <Link
          href={flashcardsPath}
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
                🎴 <span className="font-semibold">{cardsDueLabel} card{cardsDue === 1 ? '' : 's'} left</span> in
                this topic today —{' '}
                <span className="font-semibold text-accent-hover dark:text-accent-muted underline underline-offset-2">
                  rate them now
                </span>
                {next ? ', then your next lesson opens up' : ''}
              </>
            ) : cardsChecked && cardsRemaining === 0 ? (
              <>
                ✅ This topic&apos;s cards are done for today —{' '}
                <span className="font-semibold text-accent-hover dark:text-accent-muted underline underline-offset-2">
                  review them again
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
              <Link
                href={nextLessonPath}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-accent to-pink-600 text-white hover:from-accent-hover hover:to-pink-700 shadow-lg transition-colors"
              >
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
                    : 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-accent to-pink-600 text-white hover:from-accent-hover hover:to-pink-700 shadow-lg transition-colors'
                }
              >
                <ClipboardList className="w-4 h-4" aria-hidden="true" />
                {/* This links ?exitQuiz=1 — the GRADED exit quiz, not practice. */}
                Take Exit Quiz
                {!nextLessonPath && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
              </Link>
            )}
            {!nextLessonPath && !nextQuizPath && nextTopicPath && (
              <Link
                href={nextTopicPath}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-accent to-pink-600 text-white hover:from-accent-hover hover:to-pink-700 shadow-lg transition-colors"
              >
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
