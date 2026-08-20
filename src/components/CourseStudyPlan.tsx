'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { formatTimeUntil } from '@/lib/format-due-time'

type PlanTopicStatus = {
  slug: string
  name: string
  priority: 'high' | 'medium' | 'low'
  topicPath: string
  isSatisfied: boolean
  bestExitScorePercent: number | null
}

type PlanStatus = {
  hasDiagnostic: boolean
  canRetakeDiagnostic: boolean
  requiredScorePercent: number
  recommendedTopics: PlanTopicStatus[]
  pendingTopics: PlanTopicStatus[]
  /** 'hard' when the plan comes from a hard-track module (SAT 700-800 path). */
  planSource?: 'regular' | 'hard'
}

type FlashcardStats = {
  due: number
  dueLaterToday: number
  nextDueAt: string | null
}

/** Static Tailwind class sets per accent (no dynamic class names). */
const ACCENTS = {
  purple: {
    cardBorder: 'border-purple-300 dark:border-purple-700',
    cardHover: 'hover:border-purple-400 dark:hover:border-purple-500',
    cta: 'bg-purple-600',
    rowHover: 'hover:border-purple-300 hover:bg-purple-50/50 dark:hover:border-purple-500',
    todo: 'text-purple-700 dark:text-purple-400',
  },
  emerald: {
    cardBorder: 'border-emerald-300 dark:border-emerald-700',
    cardHover: 'hover:border-emerald-400 dark:hover:border-emerald-500',
    cta: 'bg-emerald-600',
    rowHover: 'hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:border-emerald-500',
    todo: 'text-emerald-700 dark:text-emerald-400',
  },
} as const

interface CourseStudyPlanProps {
  /** DB course slug for the flashcard due-count filter (e.g. 'sat-prep'). */
  courseSlug: string
  /** Short label in student-facing copy (e.g. 'SAT'). */
  courseLabel: string
  /** Plan-status endpoint (e.g. '/api/sat-diagnostic/plan-status'). */
  planStatusEndpoint: string
  /** Diagnostic page href for the all-done call to action. */
  diagnosticHref: string
  accent: keyof typeof ACCENTS
}

/**
 * Personalized header for a course page: flashcards due right now, the study
 * modules recommended by the student's last diagnostic with done/to-do
 * status, and — once every module is done — the next-diagnostic call to
 * action. Signed-out visitors see nothing (the hero handles them).
 */
export default function CourseStudyPlan({ courseSlug, courseLabel, planStatusEndpoint, diagnosticHref, accent }: CourseStudyPlanProps) {
  const { status } = useSession()
  const [plan, setPlan] = useState<PlanStatus | null>(null)
  const [cards, setCards] = useState<FlashcardStats | null>(null)
  const a = ACCENTS[accent]

  useEffect(() => {
    if (status !== 'authenticated') return
    fetch(`/api/flashcards/review?courseSlug=${encodeURIComponent(courseSlug)}&tzOffset=${new Date().getTimezoneOffset()}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d?.stats) setCards(d.stats) })
      .catch(() => {})
    fetch(planStatusEndpoint)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d) setPlan(d) })
      .catch(() => {})
  }, [status, courseSlug, planStatusEndpoint])

  if (status !== 'authenticated') return null

  const hasPlan = !!plan?.hasDiagnostic && (plan?.recommendedTopics?.length ?? 0) > 0
  const allDone = hasPlan && plan!.pendingTopics.length === 0
  const showCards = !!cards && (cards.due > 0 || cards.dueLaterToday > 0)

  if (!showCards && !hasPlan) return null

  return (
    <section className="container pt-8">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* Flashcards due banner */}
        {cards && cards.due > 0 && (
          <Link
            href="/flashcards/review/start"
            className={`flex items-center justify-between gap-4 rounded-2xl border-2 bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-gray-800 ${a.cardBorder} ${a.cardHover}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🃏</span>
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {cards.due} {courseLabel} flashcard{cards.due === 1 ? '' : 's'} due now
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Keep your spaced-repetition streak going before new material.
                </div>
              </div>
            </div>
            <span className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold text-white ${a.cta}`}>
              Review now →
            </span>
          </Link>
        )}
        {cards && cards.due === 0 && cards.dueLaterToday > 0 && (
          <div className="flex items-center gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-600/60 dark:bg-amber-900/20 dark:text-amber-300">
            <span className="text-xl">⏳</span>
            <span>
              Flashcards: caught up for now — {cards.dueLaterToday} card{cards.dueLaterToday === 1 ? '' : 's'} return{cards.dueLaterToday === 1 ? 's' : ''} later today
              {cards.nextDueAt ? ` (next one ${formatTimeUntil(cards.nextDueAt)})` : ''}.
            </span>
          </div>
        )}

        {/* Recommended study modules from the last diagnostic */}
        {hasPlan && (
          <div className={`rounded-2xl border-2 bg-white p-6 shadow-sm dark:bg-gray-800 ${a.cardBorder}`}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Your Recommended Study Modules
              </h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {plan!.planSource === 'hard' ? 'From your last hard module' : 'From your last diagnostic'} · {plan!.recommendedTopics.length - plan!.pendingTopics.length} of {plan!.recommendedTopics.length} done
              </span>
            </div>
            <ul className="space-y-2">
              {plan!.recommendedTopics.map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={topic.topicPath}
                    className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition ${
                      topic.isSatisfied
                        ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                        : `border-gray-200 dark:border-gray-600 ${a.rowHover}`
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{topic.isSatisfied ? '✅' : '📘'}</span>
                      <span className={`font-medium ${topic.isSatisfied ? 'text-green-900 line-through decoration-green-700/40 dark:text-green-300' : 'text-gray-900 dark:text-gray-100'}`}>
                        {topic.name}
                      </span>
                      {topic.priority === 'high' && !topic.isSatisfied && (
                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-300">
                          High priority
                        </span>
                      )}
                    </div>
                    <span className={`shrink-0 text-sm font-semibold ${topic.isSatisfied ? 'text-green-700 dark:text-green-400' : a.todo}`}>
                      {topic.isSatisfied ? 'Done' : 'To do →'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {!allDone && (
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                Finish a module by completing its lesson or scoring at least {plan!.requiredScorePercent}% on its exit quiz. Complete all modules to unlock your next diagnostic.
              </p>
            )}
            {allDone && (
              <div className="mt-5 rounded-xl border-2 border-green-300 bg-green-50 p-5 text-center dark:border-green-700 dark:bg-green-900/20">
                <div className="mb-1 text-lg font-bold text-green-900 dark:text-green-300">
                  🎉 All study modules complete!
                </div>
                <p className="mb-4 text-sm text-green-800 dark:text-green-400">
                  Time to measure your progress with a fresh diagnostic.
                </p>
                <Link
                  href={diagnosticHref}
                  className="inline-block rounded-lg bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
                >
                  Take Your Next Diagnostic
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
