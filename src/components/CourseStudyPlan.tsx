'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { formatTimeUntil } from '@/lib/format-due-time'
import { studyPlanTopicHref } from '@/lib/dashboard-next-step'
import { courseDiagnosticForKey } from '@/lib/student-courses'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { unitTestIsNextStep } from '@/lib/unit-test-courses'
import type { PlanTopic } from '@/components/StudyPlanNextUp'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'

type PlanTopicStatus = PlanTopic & {
  priority?: 'high' | 'medium' | 'low'
  topicPath: string
  bestExitScorePercent?: number | null
}

export type PlanStatus = {
  hasDiagnostic: boolean
  canRetakeDiagnostic: boolean
  requiredScorePercent: number
  recommendedTopics: PlanTopicStatus[]
  pendingTopics: PlanTopicStatus[]
  /** 'hard' when the plan comes from a hard-track module (SAT 700-800 path). */
  planSource?: 'regular' | 'hard' | 'core-skills'
  /** The cycle's unit test (src/lib/unit-test-courses.ts). */
  unitTest?: { available?: boolean; passed: boolean; path: string; questionCount: number; passPercent: number; attempts: number; inProgressId?: string | null; locksDiagnostic?: boolean } | null
}

type FlashcardStats = {
  due: number
  dueLaterToday: number
  nextDueAt: string | null
}

/**
 * Static Tailwind class sets per accent (no dynamic class names). `accent` is
 * the site theme (accent tokens); SAT and MCAT keep their identity colors.
 */
const ACCENTS = {
  accent: {
    cardBorder: 'border-accent-light dark:border-accent-hover',
    cardHover: 'hover:border-accent-muted dark:hover:border-accent',
    cta: 'bg-accent hover:bg-accent-hover',
    rowHover: 'hover:border-accent-muted hover:bg-accent-subtle/50 dark:hover:border-accent dark:hover:bg-accent-light/10',
    todo: 'text-accent-hover dark:text-accent-muted',
  },
  purple: {
    cardBorder: 'border-purple-300 dark:border-purple-700',
    cardHover: 'hover:border-purple-400 dark:hover:border-purple-500',
    cta: 'bg-purple-600 hover:bg-purple-700',
    rowHover: 'hover:border-purple-300 hover:bg-purple-50/50 dark:hover:border-purple-500 dark:hover:bg-purple-900/10',
    todo: 'text-purple-700 dark:text-purple-400',
  },
  emerald: {
    cardBorder: 'border-emerald-300 dark:border-emerald-700',
    cardHover: 'hover:border-emerald-400 dark:hover:border-emerald-500',
    cta: 'bg-emerald-600 hover:bg-emerald-700',
    rowHover: 'hover:border-emerald-300 hover:bg-emerald-50/50 dark:hover:border-emerald-500 dark:hover:bg-emerald-900/10',
    todo: 'text-emerald-700 dark:text-emerald-400',
  },
} as const

export type CourseStudyPlanAccent = keyof typeof ACCENTS

/** Courses with their own richer plan endpoint (the SAT track system, MCAT study surfaces). */
const DEDICATED_PLAN: Record<string, { endpoint: string; accent: CourseStudyPlanAccent }> = {
  sat: { endpoint: '/api/sat-diagnostic/plan-status', accent: 'purple' },
  mcat: { endpoint: '/api/mcat-diagnostic/plan-status', accent: 'emerald' },
}

interface GenericPlan {
  courseKey?: string
  canRetakeDiagnostic?: boolean
  unitTest?: PlanStatus['unitTest']
  requiredScorePercent?: number
  topics?: PlanTopicStatus[]
}

/** One course's plan from the generic /api/study-plan/plan-status payload. */
export function planFromGenericPayload(body: unknown, courseKey: string): PlanStatus | null {
  const plans = (body as { plans?: GenericPlan[] } | null)?.plans
  if (!Array.isArray(plans)) return null
  const plan = plans.find((p) => p?.courseKey === courseKey)
  if (!plan || !Array.isArray(plan.topics) || plan.topics.length === 0) return null
  const topics = plan.topics
  return {
    hasDiagnostic: true,
    canRetakeDiagnostic: plan.canRetakeDiagnostic !== false,
    requiredScorePercent: plan.requiredScorePercent ?? TOPIC_CLEAR_PERCENT,
    recommendedTopics: topics,
    pendingTopics: topics.filter((t) => !t.isSatisfied),
    unitTest: plan.unitTest ?? null,
  }
}

interface CourseStudyPlanProps {
  /** CLASS_PLAN_COURSES key (e.g. 'calcab', 'sat') — plan-status's `courseKey`. */
  courseKey: string
  /** Short label in student-facing copy; defaults to the course's plan label. */
  courseLabel?: string
  /** DB course slug for the flashcards-due line (e.g. 'sat-prep'). */
  courseSlug?: string
  /** Diagnostic page; defaults to the course's diagnostic route. */
  diagnosticHref?: string
  accent?: CourseStudyPlanAccent
  /** Wrapper classes; defaults to a page-width container for hub pages. */
  className?: string
}

/**
 * A course page's one "Start here" block, plus the personalized study plan.
 *
 * - Signed out, or no diagnostic yet: take the free diagnostic.
 * - A plan: the next topic to clear (one button), cards due, and the plan.
 * - Every topic cleared: retake the diagnostic.
 *
 * Client-only data (fetched after mount), so hub pages stay static: the
 * server render is always the signed-out version.
 */
export default function CourseStudyPlan({
  courseKey,
  courseLabel,
  courseSlug,
  diagnosticHref,
  accent,
  className = 'container pb-8',
}: CourseStudyPlanProps) {
  const { status } = useSession()
  const [plan, setPlan] = useState<PlanStatus | null>(null)
  const [cards, setCards] = useState<FlashcardStats | null>(null)
  const [loaded, setLoaded] = useState(false)

  const course = courseDiagnosticForKey(courseKey)
  const label = courseLabel ?? course?.label ?? 'this course'
  const diagHref = diagnosticHref ?? course?.diagnosticHref ?? '/topics'
  const gated = course?.gated === true
  const dedicated = DEDICATED_PLAN[courseKey]
  const a = ACCENTS[accent ?? dedicated?.accent ?? 'accent']

  useEffect(() => {
    if (status !== 'authenticated') return
    let cancelled = false
    if (courseSlug) {
      fetch(`/api/flashcards/review?courseSlug=${encodeURIComponent(courseSlug)}&tzOffset=${new Date().getTimezoneOffset()}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => { if (!cancelled && d?.stats) setCards(d.stats) })
        .catch(() => {})
    }
    fetch(dedicated?.endpoint ?? '/api/study-plan/plan-status')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled || !d) return
        setPlan(dedicated ? (d as PlanStatus) : planFromGenericPayload(d, courseKey))
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoaded(true) })
    return () => { cancelled = true }
  }, [status, courseSlug, courseKey, dedicated])

  const hasPlan = !!plan?.hasDiagnostic && (plan?.recommendedTopics?.length ?? 0) > 0
  const pending = hasPlan ? plan!.recommendedTopics.filter((t) => !t.isSatisfied) : []
  const allDone = hasPlan && pending.length === 0
  const nextTopic = pending[0] ?? null
  const cleared = hasPlan ? plan!.recommendedTopics.length - pending.length : 0
  const clearPercent = plan?.requiredScorePercent ?? TOPIC_CLEAR_PERCENT

  // Signed in and still fetching: hold the space instead of flashing the
  // "take the diagnostic" pitch at a student who already has a plan.
  const checking = status === 'authenticated' && !loaded

  return (
    <section className={className} aria-labelledby={`start-here-${courseKey}`}>
      <div className="mx-auto max-w-5xl space-y-4">
        {/* ── Start here: the one next step on this course ── */}
        <div className={`rounded-2xl border-2 bg-white p-6 shadow-sm dark:bg-gray-800 ${a.cardBorder}`}>
          <p id={`start-here-${courseKey}`} className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Start here
          </p>
          {checking ? (
            <div className="mt-2 animate-pulse space-y-2" aria-busy="true">
              <div className="h-6 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-10 w-48 rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
          ) : nextTopic ? (
            <>
              <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">Next topic: {nextTopic.name}</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                From your {label} study plan ({cleared} of {plan!.recommendedTopics.length} cleared). Score {clearPercent}% on its exit quiz to clear it.
                <HelpLink article={HELP_ARTICLES.whatClearedMeans} label="What does cleared mean?" className="ml-1" />
              </p>
              <Link
                href={studyPlanTopicHref(nextTopic, courseKey)}
                className={`mt-4 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition ${a.cta}`}
              >
                Start this topic <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </>
          ) : allDone && plan?.unitTest && unitTestIsNextStep(plan.unitTest, plan.canRetakeDiagnostic, { requireAvailable: false }) ? (
            <>
              <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">📝 Every topic cleared — take your unit test</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                A {plan.unitTest.questionCount}-question test on your study-plan topics.{' '}
                {plan.unitTest.locksDiagnostic !== false
                  ? `Score ${plan.unitTest.passPercent}% or better to unlock your next ${label} diagnostic.`
                  : `Score ${plan.unitTest.passPercent}% or better to finish this cycle, then retake the ${label} diagnostic to see your growth.`}
              </p>
              <Link
                href={plan.unitTest.path}
                className={`mt-4 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition ${a.cta}`}
              >
                {plan.unitTest.inProgressId ? 'Resume the unit test' : plan.unitTest.attempts > 0 ? 'Retake the unit test' : 'Take the unit test'} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </>
          ) : allDone ? (
            <>
              <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">🎉 Every topic in your study plan is cleared</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Retake the {label} diagnostic to see your growth and get a new plan.
              </p>
              <Link
                href={diagHref}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Retake the diagnostic <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </>
          ) : (
            <>
              <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">Take the free {label} diagnostic</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                It finds what you already know and builds your study plan: the topics to clear first, each a short lesson plus an exit quiz.
                <HelpLink article={HELP_ARTICLES.diagnosticsAndStudyPlans} label="How diagnostics and study plans work" className="ml-1" />
              </p>
              <Link
                href={diagHref}
                className={`mt-4 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition ${a.cta}`}
              >
                Take the free diagnostic <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </>
          )}
        </div>

        {/* Flashcards due in this course */}
        {cards && cards.due > 0 && (
          <Link
            href="/flashcards/review"
            className={`flex items-center justify-between gap-4 rounded-2xl border-2 bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-gray-800 ${a.cardBorder} ${a.cardHover}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl" aria-hidden>🃏</span>
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {cards.due} {label} flashcard{cards.due === 1 ? '' : 's'} due now
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Review them before new material — a few minutes keeps them from piling up.
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
            <span className="text-xl" aria-hidden>⏳</span>
            <span>
              Flashcards: caught up for now — {cards.dueLaterToday} card{cards.dueLaterToday === 1 ? '' : 's'} return{cards.dueLaterToday === 1 ? 's' : ''} later today
              {cards.nextDueAt ? ` (next one ${formatTimeUntil(cards.nextDueAt)})` : ''}.
            </span>
          </div>
        )}

        {/* The study plan from the last diagnostic */}
        {hasPlan && (
          <div className={`rounded-2xl border-2 bg-white p-6 shadow-sm dark:bg-gray-800 ${a.cardBorder}`}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Your {label} study plan
              </h2>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {plan!.planSource === 'hard'
                  ? 'From your last hard module'
                  : plan!.planSource === 'core-skills'
                    ? 'Core Skills — start here'
                    : 'From your last diagnostic'} · {cleared} of {plan!.recommendedTopics.length} cleared
              </span>
            </div>
            <ul className="space-y-2">
              {plan!.recommendedTopics.map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={studyPlanTopicHref(topic, courseKey)}
                    className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition ${
                      topic.isSatisfied
                        ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                        : `border-gray-200 dark:border-gray-600 ${a.rowHover}`
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg" aria-hidden>{topic.isSatisfied ? '✅' : '📘'}</span>
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
                      {topic.isSatisfied ? 'Cleared' : 'To do →'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {!allDone && (
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                Clear a topic by scoring {clearPercent}% or better on its exit quiz (or by testing out on its entrance quiz).{' '}
                {gated
                  ? plan?.unitTest
                    ? `Clear them all, then pass a ${plan.unitTest.questionCount}-question unit test on them, to unlock your next diagnostic.`
                    : 'Clear them all to unlock your next diagnostic.'
                  : plan?.unitTest
                  ? `When you've cleared them all, take a ${plan.unitTest.questionCount}-question unit test on them, then retake the diagnostic to see your growth and get a new plan.`
                  : "When you've cleared them all, retake the diagnostic to see your growth and get a new plan."}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
