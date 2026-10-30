'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { ActivitySurface } from '@prisma/client'
import type { ActiveTimeSummary } from '@/lib/student-metrics'
import { ActiveTimeChart, SURFACE_META, dayList } from '@/components/teacher/StudyReportCharts'
import { TRACKING_START, TRACKING_START_LABEL, fmtDuration } from '@/components/teacher/StudyReportShared'
import { signInUrl } from '@/lib/auth-redirect'

/**
 * /study-time — a student's own active study time (students asked to see
 * what their teacher sees). Linked from the MCAT, SAT and ACT hubs; the
 * numbers cover every course. Signed-in only (redirects itself).
 */

type Range = '7d' | '30d' | 'all'
const RANGES: { value: Range; label: string }[] = [
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
  { value: 'all', label: 'All time' },
]
const HUBS: Record<string, string> = { mcat: 'MCAT Prep', sat: 'SAT Prep', act: 'ACT Prep' }

/** The breakdown students asked for; each group sums one or more tracked surfaces. */
const GROUPS: { label: string; surfaces: ActivitySurface[]; parts?: Partial<Record<ActivitySurface, string>>; hint?: string }[] = [
  { label: 'Lessons', surfaces: ['LESSON', 'VIDEO'], parts: { LESSON: 'Reading', VIDEO: 'Video' } },
  { label: 'Entrance & exit quizzes', surfaces: ['ENTRANCE_QUIZ', 'EXIT_QUIZ'], parts: { ENTRANCE_QUIZ: 'Entrance', EXIT_QUIZ: 'Exit' } },
  { label: 'Flashcards', surfaces: ['FLASHCARDS'] },
  {
    label: 'Tests',
    surfaces: ['DIAGNOSTIC', 'PRACTICE_TEST', 'FULL_LENGTH'],
    parts: { DIAGNOSTIC: 'Diagnostics', PRACTICE_TEST: 'Practice & unit tests', FULL_LENGTH: 'Full-lengths' },
  },
  { label: 'Competitive', surfaces: ['COMPETITIVE'] },
  { label: 'Everything else', surfaces: ['OTHER'], hint: 'Dashboard, study plans, reviews and other pages' },
]
const fillOf = (s: ActivitySurface) => SURFACE_META.find((m) => m.key === s)?.fill ?? 'bg-gray-400'

interface Payload { range: Range; from: string | null; today: string; activeTime: ActiveTimeSummary }

export default function StudyTimePage() {
  return (
    <Suspense fallback={null}>
      <StudyTime />
    </Suspense>
  )
}

function StudyTime() {
  const { status } = useSession()
  const router = useRouter()
  const search = useSearchParams()
  const course = search.get('course') ?? ''
  const hub = HUBS[course]
  const [range, setRange] = useState<Range>('7d')
  const [data, setData] = useState<Payload | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') router.push(signInUrl({ callbackUrl: `/study-time${course ? `?course=${course}` : ''}` }))
  }, [status, router, course])

  useEffect(() => {
    if (status !== 'authenticated') return
    let cancelled = false
    fetch(`/api/activity/my-time?range=${range}&tz=${new Date().getTimezoneOffset()}`, { cache: 'no-store' })
      .then(async (r) => {
        if (!r.ok) throw new Error()
        const d = (await r.json()) as Payload
        if (!cancelled) {
          setData(d)
          setError(false)
        }
      })
      .catch(() => !cancelled && setError(true))
    return () => {
      cancelled = true
    }
  }, [status, range])

  const shown = data?.range === range ? data : null
  const a = shown?.activeTime
  const days = useMemo(() => {
    if (!shown) return []
    let start = shown.from ?? shown.activeTime.byDay[0]?.day ?? TRACKING_START
    if (start < TRACKING_START) start = TRACKING_START
    return dayList(start, shown.today)
  }, [shown])

  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-950">
      <div className="container max-w-3xl px-4">
        <Link
          href={hub ? `/${course}` : '/dashboard'}
          className="inline-flex items-center gap-1 rounded text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> {hub ?? 'Dashboard'}
        </Link>
        <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">Your study time</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Active time across every course on Study Mondo: the same numbers your teacher sees.
        </p>

        <div role="group" aria-label="Time range" className="mt-5 inline-flex rounded-xl border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800">
          {RANGES.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => setRange(r.value)}
              aria-pressed={range === r.value}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${
                range === r.value
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {error ? (
          <p className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
            Could not load your study time. Refresh to try again.
          </p>
        ) : !a ? (
          <div className="mt-6 space-y-4" aria-busy="true">
            <div className="h-28 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800" />
            <div className="h-64 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800" />
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            <section className="grid grid-cols-3 gap-3">
              <Stat label="Total time" value={fmtDuration(a.totalSeconds)} />
              <Stat label="Days you studied" value={String(a.activeDays)} hint={range === 'all' ? undefined : `of ${days.length}`} />
              <Stat label="Per study day" value={fmtDuration(a.activeDays ? a.totalSeconds / a.activeDays : 0)} hint="average" />
            </section>

            <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 dark:bg-gray-800">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Where your time went</h2>
              {a.totalSeconds === 0 ? (
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">No study time recorded in this range yet.</p>
              ) : (
                <ul className="mt-4 space-y-4">
                  {GROUPS.map((g) => {
                    const seconds = g.surfaces.reduce((s, k) => s + a.bySurface[k], 0)
                    if (seconds === 0 && (g.label === 'Competitive' || g.label === 'Everything else')) return null
                    const share = a.totalSeconds ? seconds / a.totalSeconds : 0
                    const parts = g.parts
                      ? g.surfaces.filter((k) => a.bySurface[k] > 0).map((k) => `${g.parts![k]} ${fmtDuration(a.bySurface[k])}`)
                      : []
                    return (
                      <li key={g.label}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{g.label}</span>
                          <span className="text-sm tabular-nums text-gray-700 dark:text-gray-200">
                            {fmtDuration(seconds)}
                            <span className="ml-2 text-xs text-gray-400 dark:text-gray-500">{Math.round(share * 100)}%</span>
                          </span>
                        </div>
                        <div className="mt-1.5 flex h-2.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700" aria-hidden>
                          {g.surfaces.map((k) =>
                            a.bySurface[k] > 0 ? (
                              <span key={k} className={fillOf(k)} style={{ width: `${(a.bySurface[k] / a.totalSeconds) * 100}%` }} />
                            ) : null,
                          )}
                        </div>
                        {(parts.length > 1 || g.hint) && (
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{parts.length > 1 ? parts.join(' · ') : g.hint}</p>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </section>

            {a.totalSeconds > 0 && (
              <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 dark:bg-gray-800">
                <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">Day by day</h2>
                <ActiveTimeChart activeTime={a} days={days} />
              </section>
            )}

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Only active time counts: this tab is open and you clicked, typed or scrolled in the last 2 minutes. A timed test
              always counts while it runs. Time has been recorded since {TRACKING_START_LABEL}.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="text-xl font-bold tabular-nums text-gray-900 sm:text-2xl dark:text-white">{value}</div>
      <div className="text-xs font-medium text-gray-600 dark:text-gray-300">
        {label}
        {hint && <span className="text-gray-400 dark:text-gray-500"> {hint}</span>}
      </div>
    </div>
  )
}
