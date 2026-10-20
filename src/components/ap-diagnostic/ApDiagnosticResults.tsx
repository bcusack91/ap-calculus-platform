'use client'

/**
 * The AP diagnostic results screen, shared by every v1 course page
 * (src/app/<course>-diagnostic/page.tsx) and the v2 page
 * (ApDiagnosticV2Page). The pages keep their own test flow, scoring and
 * submit; this component only renders the result they hand it.
 *
 * Order (owner rule "next step first", Competitive secondary):
 *   score + range → track line (flagships) → YOUR NEXT STEP (topic 1 as the
 *   one filled button) → topics 2–5 → study schedule → unit bars →
 *   strengths → answer review (collapsed) → Competitive extras → how the
 *   cycle works → text links (hub, predictor, daily question) → retake.
 *
 * The Premium plan lock (DiagnosticPlanLock) replaces the next-step card and
 * the topic list exactly as it replaced the old topic list: a locked student
 * sees the paywall under the score, with no topic links on the page.
 *
 * Analytics: ap_diagnostic_submit on mount; ap_diagnostic_complete once the
 * saved attempt's id shows up in `history` (or after a fallback deadline);
 * ap_results_next_step_click / ap_results_retake_click on the two actions.
 */

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, Info, Target } from 'lucide-react'
import DiagnosticReview, { type ReviewQuestion } from '@/components/DiagnosticReview'
import { DiagnosticPlanPaywall } from '@/components/DiagnosticPlanLock'
import StartStudyPlanButton from '@/components/StartStudyPlanButton'
import { studyPlanTopicHref } from '@/lib/dashboard-next-step'
import { apScoreRange } from '@/lib/ap-scoring'
import { apTrackFromResults, isApTrackCourse } from '@/lib/ap-track'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { MCAT_UNIT_TEST_PASS_PERCENT, MCAT_UNIT_TEST_QUESTIONS } from '@/lib/mcat-unit-test'
import { UNIT_TEST_COURSES } from '@/lib/unit-test-courses'
import { estimateLessonMinutes } from '@/lib/lesson-minutes'
import {
  trackApDiagnosticComplete,
  trackApDiagnosticSubmit,
  trackApResultsNextStepClick,
  trackApResultsRetakeClick,
} from '@/lib/analytics'
import type { ApDiagnosticCourse } from '@/lib/ap-diagnostic-courses'

export interface ApDiagnosticDomainBar {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface ApDiagnosticRecommendedTopic {
  slug: string
  name: string
  priority: 'high' | 'medium'
}

export interface ApDiagnosticResultsData {
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  /** v2 supplies its band; v1 results get one from apScoreRange. */
  scoreRange?: { low: number; high: number }
  percentRange?: { low: number; high: number }
  domains: ApDiagnosticDomainBar[]
  strengths: string[]
  weakAreas: string[]
  recommendedTopics: ApDiagnosticRecommendedTopic[]
}

export interface ApDiagnosticResultsProps {
  course: ApDiagnosticCourse
  /** 1 = fixed-form page, 2 = ApDiagnosticV2Page. */
  version?: 1 | 2
  results: ApDiagnosticResultsData
  /** From useDiagnosticPlanAccess on the page (never changed here). */
  planAccess: { loading: boolean; canAccess: boolean }
  /**
   * The page's attempt list, newest first, as it refreshes after the save.
   * The id that was not in the list when results opened is this sitting's
   * DiagnosticTest id (for the analytics rows); nothing else is read from it.
   */
  history: ReadonlyArray<{ id: string }>
  /** The sitting's questions and answers for the collapsed answer review. */
  review: { questions: ReviewQuestion[]; answers: (number | null)[]; domainNames: Record<string, string> } | null
  onRetake: () => void
  retakeDisabled?: boolean
  /** Competitive extras (challenge-a-friend card). Rendered after the review, never above the plan. */
  secondary?: ReactNode
  /** Rendered above the heading (the v2 QA banner). */
  banner?: ReactNode
}

/** How long to wait for the save before ap_diagnostic_complete is sent without an attempt id. */
const COMPLETE_FALLBACK_MS = 8000

const LEVEL_CHIP = {
  strong: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  moderate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  weak: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
} as const
const LEVEL_BAR = { strong: 'bg-green-500', moderate: 'bg-amber-500', weak: 'bg-red-500' } as const

const PRIORITY_CHIP = {
  high: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
} as const

/** The plan topic's lesson link (the hub and dashboard use the same helper, so it always lands on /interactive). */
export function apResultsTopicHref(topic: ApDiagnosticRecommendedTopic, course: ApDiagnosticCourse): string {
  return studyPlanTopicHref({ slug: topic.slug, name: topic.name, isSatisfied: false }, course.key)
}

/** "Start Moles & Molar Mass · ~30 min" (no minutes until the lesson's length is known). */
export function nextStepLabel(topicName: string, minutes: number | null): string {
  return minutes ? `Start ${topicName} · ~${minutes} min` : `Start ${topicName}`
}

export default function ApDiagnosticResults({
  course,
  version = 1,
  results,
  planAccess,
  history,
  review,
  onRetake,
  retakeDisabled = false,
  secondary,
  banner,
}: ApDiagnosticResultsProps) {
  const theme = course.theme
  const band = useMemo(() => {
    if (results.scoreRange && results.percentRange) return { score: results.scoreRange, percent: results.percentRange }
    const r = apScoreRange(results.totalCorrect, results.totalQuestions)
    return { score: { low: r.low, high: r.high }, percent: { low: r.percentLow, high: r.percentHigh } }
  }, [results])
  const bandText = band.score.low === band.score.high ? `${results.estimatedAPScore}` : `${band.score.low}–${band.score.high}`

  const track = useMemo(
    () => (isApTrackCourse(course.courseSlug) ? apTrackFromResults({ totalCorrect: results.totalCorrect, totalQuestions: results.totalQuestions }) : null),
    [course.courseSlug, results.totalCorrect, results.totalQuestions],
  )

  const topics = results.recommendedTopics
  const first = topics[0] ?? null
  const rest = topics.slice(1)
  const cycleTest = UNIT_TEST_COURSES[course.key]

  /* ---- this sitting's saved attempt: the id that was not there at mount ---- */
  const initialIds = useRef<Set<string> | null>(null)
  if (initialIds.current === null) initialIds.current = new Set(history.map((h) => h.id))
  const attemptId = history.find((h) => !initialIds.current!.has(h.id))?.id ?? null

  /* ---- analytics ---- */
  const completeSent = useRef(false)
  useEffect(() => {
    trackApDiagnosticSubmit(course.courseSlug, results.percentage, version)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- once per results screen
  }, [])
  useEffect(() => {
    if (completeSent.current) return
    if (attemptId) {
      completeSent.current = true
      trackApDiagnosticComplete(course.courseSlug, attemptId, version)
      return
    }
    const t = setTimeout(() => {
      if (completeSent.current) return
      completeSent.current = true
      trackApDiagnosticComplete(course.courseSlug, null, version)
    }, COMPLETE_FALLBACK_MS)
    return () => clearTimeout(t)
  }, [attemptId, course.courseSlug, version])

  /* ---- lesson lengths for "~N min" ---- */
  const [partCounts, setPartCounts] = useState<Record<string, number>>({})
  useEffect(() => {
    if (topics.length === 0) return
    let alive = true
    fetch(`/api/lessons/length?slugs=${encodeURIComponent(topics.map((t) => t.slug).join(','))}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { parts?: Record<string, number> } | null) => {
        if (alive && d?.parts) setPartCounts(d.parts)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [topics])
  const minutesFor = (slug: string) => estimateLessonMinutes(partCounts[slug] ?? 0)

  const showPlan = topics.length > 0 && planAccess.canAccess
  const showLock = topics.length > 0 && !planAccess.loading && !planAccess.canAccess

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.page} py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900`}>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {banner}
          <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{course.label} diagnostic results</h1>

          {/* Score + range */}
          <div className="mb-3 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP score</p>
              <p className={`text-5xl font-black tabular-nums ${theme.score}`} data-testid="ap-score-band">{bandText}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {band.score.low === band.score.high ? 'out of 5' : `most likely ${results.estimatedAPScore} · out of 5`}
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Correct</p>
              <p className="text-4xl font-black tabular-nums text-gray-800 dark:text-gray-100">{results.totalCorrect}/{results.totalQuestions}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{results.percentage}% (likely {band.percent.low}–{band.percent.high}%)</p>
            </div>
          </div>
          <p className="mb-6 flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            The range reflects how much a score from {results.totalQuestions} questions can vary from sitting to sitting. The 1–5 cutoffs are an estimate based on typical AP composite cutoffs, not yet calibrated against real AP results.
          </p>

          {/* Track (flagships) */}
          {track && (
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-400" data-testid="ap-track-line">
              <span className="mr-2 rounded-full bg-accent-subtle px-2 py-0.5 text-xs font-semibold text-accent-hover dark:bg-accent-light/20 dark:text-accent-muted">{track.label}</span>
              {track.explanation}
            </p>
          )}

          {/* ═══ Your next step (the one filled button) ═══ */}
          {showLock && <DiagnosticPlanPaywall />}
          {topics.length > 0 && planAccess.loading && (
            <div className="mb-6 h-36 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700" aria-busy="true" aria-label="Loading your study plan" />
          )}
          {showPlan && first && (
            <section className={`mb-6 rounded-2xl border-2 bg-white p-6 shadow-sm dark:bg-gray-800 ${theme.border}`} aria-labelledby="ap-results-next-step">
              <p id="ap-results-next-step" className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Your next step</p>
              <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
                <span className={`mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold align-middle ${theme.chip}`}>1</span>
                {first.name}
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Topic 1 of {topics.length} in your {course.label} study plan. Work through the lesson, then score {TOPIC_CLEAR_PERCENT}% on its exit quiz to clear it.
              </p>
              <Link
                href={apResultsTopicHref(first, course)}
                onClick={() => trackApResultsNextStepClick(course.courseSlug, first.slug, apResultsTopicHref(first, course), attemptId)}
                data-testid="ap-results-next-step-cta"
                className={`mt-4 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${theme.button}`}
              >
                {nextStepLabel(first.name, minutesFor(first.slug))} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </section>
          )}

          {/* The rest of the plan */}
          {showPlan && rest.length > 0 && (
            <section className={`mb-6 rounded-2xl border p-5 ${theme.border} ${theme.soft}`} aria-labelledby="ap-results-plan">
              <h2 id="ap-results-plan" className={`mb-1 flex items-center gap-1.5 text-base font-bold ${theme.text}`}>
                <Target className="h-4 w-4" aria-hidden />Then, in order
              </h2>
              <p className="mb-3 text-xs text-gray-600 dark:text-gray-300">Each topic clears at {TOPIC_CLEAR_PERCENT}% on its exit quiz. Your dashboard and the {course.label} hub keep this plan.</p>
              <ol className="space-y-2">
                {rest.map((t, i) => {
                  const mins = minutesFor(t.slug)
                  return (
                    <li key={t.slug}>
                      <Link href={apResultsTopicHref(t, course)} className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 transition hover:shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <span className="flex min-w-0 items-center gap-3">
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${theme.chip}`}>{i + 2}</span>
                          <span className="truncate text-sm font-semibold text-gray-800 dark:text-gray-200">{t.name}</span>
                          {mins && <span className="hidden shrink-0 text-xs text-gray-500 sm:inline dark:text-gray-400">~{mins} min</span>}
                        </span>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${PRIORITY_CHIP[t.priority]}`}>
                          {t.priority === 'high' ? 'High priority' : 'Medium priority'}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </section>
          )}

          {showPlan && <StartStudyPlanButton diagnosticPath={course.diagnosticPath} className="mb-8" />}

          {/* Unit breakdown */}
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">Unit breakdown</h2>
            <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Each unit has only a few questions, so treat these as starting points and confirm them with the topic quizzes.</p>
            <div className="space-y-3">
              {results.domains.map((d) => (
                <div key={d.domainId}>
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{d.domainName}</span>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${LEVEL_CHIP[d.level]}`}>{d.correct}/{d.total} ({d.percentage}%)</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className={`h-full rounded-full transition-all ${LEVEL_BAR[d.level]}`} style={{ width: `${d.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths / areas to improve */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-800 dark:bg-green-900/20">
              <h2 className="mb-2 font-semibold text-green-800 dark:text-green-300">Strengths</h2>
              <ul className="space-y-1 text-sm text-green-700 dark:text-green-400">
                {results.strengths.length > 0 ? results.strengths.map((s) => <li key={s}>• {s}</li>) : <li>Complete more questions to identify strengths</li>}
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
              <h2 className="mb-2 font-semibold text-red-800 dark:text-red-300">Areas to improve</h2>
              <ul className="space-y-1 text-sm text-red-700 dark:text-red-400">
                {results.weakAreas.length > 0 ? results.weakAreas.map((w) => <li key={w}>• {w}</li>) : <li>Great job — no major weak areas!</li>}
              </ul>
            </div>
          </div>

          {/* Answer review (collapsed by default inside DiagnosticReview) */}
          {review && <DiagnosticReview questions={review.questions} answers={review.answers} domainNames={review.domainNames} />}

          {/* Competitive extras stay below the plan */}
          {secondary}

          {/* How the cycle works */}
          <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20" data-testid="ap-results-explainer">
            <h2 className="mb-2 font-semibold text-blue-800 dark:text-blue-300">How this cycle works</h2>
            <ol className="list-inside list-decimal space-y-2 text-sm text-blue-700 dark:text-blue-400">
              <li>
                Start topic 1 above. Each topic is a lesson plus an exit quiz; score {TOPIC_CLEAR_PERCENT}% on the quiz to clear it. Its flashcards unlock as you go.
              </li>
              <li>
                Clear {topics.length > 0 ? `all ${topics.length} topic${topics.length === 1 ? '' : 's'}` : 'every topic'} in your plan. Your dashboard tracks what is cleared.
              </li>
              <li>
                Take the {cycleTest.testName} (recommended): {MCAT_UNIT_TEST_QUESTIONS} questions drawn from your plan topics, {MCAT_UNIT_TEST_PASS_PERCENT}% to pass.
                {' '}<Link href={cycleTest.path} className="underline">It unlocks once every topic is cleared.</Link>
              </li>
              <li>
                Retake this diagnostic: {version === 2 ? 'questions you have not seen yet' : 'a different form with different questions'}, a new plan, and your growth from today&apos;s {results.totalCorrect}/{results.totalQuestions}.
              </li>
            </ol>
          </div>

          {/* Secondary links */}
          <nav aria-label="More for this course" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <Link href={`/courses/${course.courseSlug}`} className={`font-medium hover:underline ${theme.text}`}>Browse all {course.label} topics</Link>
            <Link href={course.scorePredictorPath} className="text-gray-600 hover:underline dark:text-gray-400">Score predictor</Link>
            <Link href={course.dailyQuestionPath} className="text-gray-600 hover:underline dark:text-gray-400">Today&apos;s question</Link>
          </nav>
          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
            <button
              type="button"
              onClick={() => { trackApResultsRetakeClick(course.courseSlug, attemptId); onRetake() }}
              disabled={retakeDisabled}
              data-testid="ap-results-retake"
              className="underline decoration-dotted underline-offset-2 hover:text-gray-700 disabled:opacity-60 dark:hover:text-gray-300"
            >
              Retake after you&apos;ve cleared your plan
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
