'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface PlanTemplate {
  id: string
  title: string
  description: string
  durationWeeks: number
  targetImprovement: string
  weeklyHours: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  taskCount: number
}

const PLANS: PlanTemplate[] = [
  {
    id: '4-week-sprint',
    title: '4-Week SAT Sprint',
    description:
      'A fast-paced crash course covering all essential SAT topics. Perfect if your test is coming up soon and you need a focused review.',
    durationWeeks: 4,
    targetImprovement: '50–100 points',
    weeklyHours: '5–7 hours',
    difficulty: 'Beginner',
    taskCount: 24,
  },
  {
    id: '8-week-comprehensive',
    title: '8-Week Comprehensive Plan',
    description:
      'A balanced study plan that covers every SAT domain in depth with two practice tests. Ideal for students aiming for a solid score improvement.',
    durationWeeks: 8,
    targetImprovement: '100–200 points',
    weeklyHours: '5–8 hours',
    difficulty: 'Intermediate',
    taskCount: 41,
  },
  {
    id: '12-week-mastery',
    title: '12-Week Mastery Plan',
    description:
      'The most thorough plan with deep coverage of every topic, multiple practice tests, targeted remediation, and test-day strategy. For students targeting 1400+.',
    durationWeeks: 12,
    targetImprovement: '150–300 points',
    weeklyHours: '7–10 hours',
    difficulty: 'Advanced',
    taskCount: 63,
  },
]

const difficultyColors: Record<string, string> = {
  Beginner:
    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Intermediate:
    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Advanced:
    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

const gradients: Record<string, string> = {
  '4-week-sprint': 'from-green-500 to-emerald-600',
  '8-week-comprehensive': 'from-purple-500 to-pink-600',
  '12-week-mastery': 'from-amber-500 to-red-600',
}

export default function SATStudyPlansPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [adopting, setAdopting] = useState<string | null>(null)
  const [examDate, setExamDate] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function adoptPlan(templateId: string) {
    if (status !== 'authenticated') {
      router.push('/login')
      return
    }
    setAdopting(templateId)
    try {
      const res = await fetch('/api/sat-study-plans', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateId,
          startDate: new Date().toISOString(),
          ...(examDate ? { examDate: new Date(examDate).toISOString() } : {}),
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Link
            href="/sat"
            className="mb-4 inline-flex items-center gap-1 text-sm text-purple-600 hover:underline dark:text-purple-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            SAT Prep
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            SAT Study Plan Templates
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Choose a pre-built study schedule that fits your timeline. Each plan includes
            lessons, quizzes, practice tests, and review tasks — automatically scheduled
            for you.
          </p>
        </div>

        {/* Success Banner */}
        {success && (
          <div className="mx-auto mb-8 max-w-lg rounded-xl bg-green-100 p-4 text-center text-green-800 dark:bg-green-900/30 dark:text-green-300">
            <p className="font-semibold">Plan adopted! Redirecting to your dashboard…</p>
          </div>
        )}

        {/* Plans Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {PLANS.map(plan => {
            const isSelected = selectedPlan === plan.id
            return (
              <div
                key={plan.id}
                className={`flex flex-col rounded-2xl border bg-white shadow-sm transition dark:bg-gray-800 ${
                  isSelected
                    ? 'border-purple-500 shadow-lg ring-2 ring-purple-300 dark:ring-purple-600'
                    : 'border-gray-200 hover:shadow-md dark:border-gray-700'
                }`}
              >
                {/* Color Header */}
                <div
                  className={`rounded-t-2xl bg-gradient-to-r p-6 text-white ${gradients[plan.id] ?? 'from-gray-500 to-gray-600'}`}
                >
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${difficultyColors[plan.difficulty]}`}
                  >
                    {plan.difficulty}
                  </span>
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
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Duration
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {plan.durationWeeks} weeks
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Target Gain
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {plan.targetImprovement}
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Weekly Time
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {plan.weeklyHours}
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Tasks
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {plan.taskCount}
                      </div>
                    </div>
                  </div>

                  {/* Select / Adopt */}
                  {isSelected ? (
                    <div className="space-y-3">
                      <label className="block text-sm text-gray-700 dark:text-gray-300">
                        SAT Test Date (optional)
                        <input
                          type="date"
                          value={examDate}
                          onChange={e => setExamDate(e.target.value)}
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        />
                      </label>
                      <button
                        onClick={() => adoptPlan(plan.id)}
                        disabled={!!adopting}
                        className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-2.5 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-50"
                      >
                        {adopting === plan.id
                          ? 'Creating Plan…'
                          : 'Start This Plan'}
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
                      className="w-full rounded-xl border-2 border-purple-500 py-2.5 font-semibold text-purple-600 transition hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/20"
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
            <Link href="/dashboard" className="font-medium text-purple-600 hover:underline dark:text-purple-400">
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
