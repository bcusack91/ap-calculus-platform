'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import DiagnosticFocusBanner from '@/components/DiagnosticFocusBanner'

type PlanTemplatesModule = typeof import('@/data/mcat-study-plans')

const difficultyColors: Record<string, string> = {
  Beginner:
    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Intermediate:
    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Advanced:
    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

const gradients: Record<string, string> = {
  '3-month-intensive': 'from-red-500 to-orange-600',
  '6-month-comprehensive': 'from-emerald-500 to-teal-600',
  '12-month-mastery': 'from-blue-500 to-indigo-600',
}

export default function MCATStudyPlansPage() {
  const { status } = useSession()
  const router = useRouter()
  const [adopting, setAdopting] = useState<string | null>(null)
  const [examDate, setExamDate] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  // Defer the large study-plan templates module out of the initial bundle —
  // it's only needed to render the grid below, so load it on mount.
  const [planLib, setPlanLib] = useState<PlanTemplatesModule | null>(null)
  const plans = planLib?.MCAT_STUDY_PLANS ?? []

  useEffect(() => {
    let active = true
    import('@/data/mcat-study-plans').then((m) => {
      if (active) setPlanLib(m)
    })
    return () => { active = false }
  }, [])

  // Weeks from today until the entered exam date (null when unset/invalid).
  const weeksToExam = useMemo(() => {
    if (!examDate || !planLib) return null
    const d = new Date(`${examDate}T12:00:00`)
    if (Number.isNaN(d.getTime())) return null
    return planLib.weeksUntil(d)
  }, [examDate, planLib])

  const recommendedId =
    planLib && weeksToExam !== null && weeksToExam > 0
      ? planLib.recommendMCATTemplateId(weeksToExam)
      : null

  async function adoptPlan(templateId: string) {
    if (status !== 'authenticated') {
      router.push('/auth/signin')
      return
    }
    setAdopting(templateId)
    try {
      const res = await fetch('/api/mcat-study-plans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateId,
          startDate: new Date().toISOString(),
          ...(examDate ? { examDate: new Date(`${examDate}T12:00:00`).toISOString() } : {}),
        }),
      })
      if (res.ok) {
        setSuccess(true)
        setTimeout(() => router.push('/dashboard'), 1500)
      }
    } finally {
      setAdopting(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Link
            href="/mcat"
            className="mb-4 inline-flex items-center gap-1 text-sm text-emerald-600 hover:underline dark:text-emerald-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            MCAT Prep
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            MCAT Study Plan Templates
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Choose a pre-built study schedule that fits your timeline. Each plan includes
            lessons, quizzes, practice sections, and review tasks — automatically scheduled
            for you.
          </p>
        </div>

        {/* Success Banner */}
        {success && (
          <div className="mx-auto mb-8 max-w-lg rounded-xl bg-green-100 p-4 text-center text-green-800 dark:bg-green-900/30 dark:text-green-300">
            <p className="font-semibold">Plan adopted! Redirecting to your dashboard…</p>
          </div>
        )}

        {/* Personalized from the student's MCAT diagnostic (#4) */}
        <DiagnosticFocusBanner prefix="mcat-full-diagnostic" />

        {/* Exam date → timeline-aware recommendation. The adopted plan's task
            schedule is scaled to finish ~1 week before this date. */}
        <div className="mx-auto mb-8 max-w-lg rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
            When is your MCAT? (optional)
            <input
              type="date"
              value={examDate}
              onChange={e => setExamDate(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-normal dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </label>
          {weeksToExam !== null && (
            weeksToExam > 0 ? (
              <p className="mt-3 text-sm text-emerald-700 dark:text-emerald-400">
                <span className="font-bold">{weeksToExam} {weeksToExam === 1 ? 'week' : 'weeks'} until your exam.</span>{' '}
                Whichever plan you pick, its tasks are scheduled to wrap up about a week before test day
                {recommendedId ? ' — the best fit for your timeline is highlighted below.' : '.'}
              </p>
            ) : (
              <p className="mt-3 text-sm text-amber-700 dark:text-amber-400">
                That date is less than a week away (or in the past) — pick a future test date, or adopt a plan without one.
              </p>
            )
          )}
        </div>

        {/* Plans Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.length === 0
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-80 animate-pulse flex-col rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="h-28 rounded-t-2xl bg-gray-200 dark:bg-gray-700" />
                  <div className="flex-1 p-6">
                    <div className="mb-4 h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="mb-2 h-3 w-full rounded bg-gray-100 dark:bg-gray-700/60" />
                    <div className="h-3 w-5/6 rounded bg-gray-100 dark:bg-gray-700/60" />
                  </div>
                </div>
              ))
            : plans.map(plan => {
            const isSelected = selectedPlan === plan.id
            const isRecommended = recommendedId === plan.id
            return (
              <div
                key={plan.id}
                className={`flex flex-col rounded-2xl border bg-white shadow-sm transition dark:bg-gray-800 ${
                  isSelected
                    ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-300 dark:ring-emerald-600'
                    : isRecommended
                    ? 'border-emerald-400 shadow-md dark:border-emerald-600'
                    : 'border-gray-200 hover:shadow-md dark:border-gray-700'
                }`}
              >
                {/* Color Header */}
                <div
                  className={`rounded-t-2xl bg-gradient-to-r p-6 text-white ${gradients[plan.id] ?? 'from-gray-500 to-gray-600'}`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${difficultyColors[plan.difficulty]}`}
                    >
                      {plan.difficulty}
                    </span>
                    {isRecommended && (
                      <span className="inline-block rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                        ★ Best fit for your exam date
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 text-xl font-bold">{plan.title}</h2>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>

                  {/* Stats */}
                  <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {plan.durationWeeks} weeks
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Target Gain</div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {plan.targetImprovement}
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Weekly Time</div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {plan.weeklyHours}
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Tasks</div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {plan.tasks.length}
                      </div>
                    </div>
                  </div>

                  {/* Select / Adopt */}
                  {isSelected ? (
                    <div className="space-y-3">
                      {weeksToExam !== null && weeksToExam > 0 ? (
                        <p className="rounded-lg bg-emerald-50 p-2.5 text-xs text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
                          {weeksToExam < plan.durationWeeks
                            ? `This ${plan.durationWeeks}-week plan will be compressed into your ${weeksToExam}-week runway — same tasks, tighter schedule.`
                            : weeksToExam > plan.durationWeeks
                            ? `This ${plan.durationWeeks}-week plan will be stretched across your ${weeksToExam}-week runway.`
                            : `Your ${weeksToExam}-week runway matches this plan exactly.`}
                        </p>
                      ) : (
                        <p className="rounded-lg bg-gray-50 p-2.5 text-xs text-gray-600 dark:bg-gray-700/50 dark:text-gray-300">
                          No exam date set — tasks follow the template&apos;s full {plan.durationWeeks}-week schedule. Add your test date above to fit the plan to it.
                        </p>
                      )}
                      <button
                        onClick={() => adoptPlan(plan.id)}
                        disabled={!!adopting}
                        className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-2.5 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-50"
                      >
                        {adopting === plan.id ? 'Creating Plan…' : 'Start This Plan'}
                      </button>
                      <button
                        onClick={() => setSelectedPlan(null)}
                        className="w-full text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className="w-full rounded-xl border-2 border-emerald-500 py-2.5 font-semibold text-emerald-600 transition hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                    >
                      Select Plan
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Info */}
        <div className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Plans are added to your{' '}
            <Link href="/dashboard" className="font-medium text-emerald-600 hover:underline dark:text-emerald-400">
              dashboard
            </Link>{' '}
            Study Planner where you can track progress, check off tasks, and adjust
            the schedule.
          </p>
        </div>
      </div>
    </div>
  )
}
