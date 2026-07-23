'use client'


import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'
import { ToolBreadcrumb } from '@/components/ToolBreadcrumb'
import { toolLearningResourceJsonLd } from '@/lib/jsonld'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { StudyPlanTemplate } from '@/lib/study-plan-utils'
import DiagnosticFocusBanner from '@/components/DiagnosticFocusBanner'

/* ------------------------------------------------------------------ */
/*  Accent colour map — every class literal for Tailwind detection     */
/* ------------------------------------------------------------------ */

type AccentColor = 'blue' | 'emerald' | 'green' | 'rose' | 'cyan' | 'amber' | 'red' | 'violet'

const A: Record<AccentColor, {
  pageBg: string; selBorder: string; selRing: string; btnBg: string
  btnBorder: string; btnText: string; btnHover: string; link: string
}> = {
  blue: {
    pageBg: 'from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    selBorder: 'border-blue-500', selRing: 'ring-blue-300 dark:ring-blue-600',
    btnBg: 'from-blue-600 to-indigo-600', btnBorder: 'border-blue-500',
    btnText: 'text-blue-600 dark:text-blue-400', btnHover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    link: 'text-blue-600 hover:underline dark:text-blue-400',
  },
  emerald: {
    pageBg: 'from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    selBorder: 'border-emerald-500', selRing: 'ring-emerald-300 dark:ring-emerald-600',
    btnBg: 'from-emerald-600 to-teal-600', btnBorder: 'border-emerald-500',
    btnText: 'text-emerald-600 dark:text-emerald-400', btnHover: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20',
    link: 'text-emerald-600 hover:underline dark:text-emerald-400',
  },
  green: {
    pageBg: 'from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    selBorder: 'border-green-500', selRing: 'ring-green-300 dark:ring-green-600',
    btnBg: 'from-green-600 to-emerald-600', btnBorder: 'border-green-500',
    btnText: 'text-green-600 dark:text-green-400', btnHover: 'hover:bg-green-50 dark:hover:bg-green-900/20',
    link: 'text-green-600 hover:underline dark:text-green-400',
  },
  rose: {
    pageBg: 'from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    selBorder: 'border-rose-500', selRing: 'ring-rose-300 dark:ring-rose-600',
    btnBg: 'from-rose-600 to-pink-600', btnBorder: 'border-rose-500',
    btnText: 'text-rose-600 dark:text-rose-400', btnHover: 'hover:bg-rose-50 dark:hover:bg-rose-900/20',
    link: 'text-rose-600 hover:underline dark:text-rose-400',
  },
  cyan: {
    pageBg: 'from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    selBorder: 'border-cyan-500', selRing: 'ring-cyan-300 dark:ring-cyan-600',
    btnBg: 'from-cyan-600 to-blue-600', btnBorder: 'border-cyan-500',
    btnText: 'text-cyan-600 dark:text-cyan-400', btnHover: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20',
    link: 'text-cyan-600 hover:underline dark:text-cyan-400',
  },
  amber: {
    pageBg: 'from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    selBorder: 'border-amber-500', selRing: 'ring-amber-300 dark:ring-amber-600',
    btnBg: 'from-amber-600 to-orange-600', btnBorder: 'border-amber-500',
    btnText: 'text-amber-600 dark:text-amber-400', btnHover: 'hover:bg-amber-50 dark:hover:bg-amber-900/20',
    link: 'text-amber-600 hover:underline dark:text-amber-400',
  },
  red: {
    pageBg: 'from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    selBorder: 'border-red-500', selRing: 'ring-red-300 dark:ring-red-600',
    btnBg: 'from-red-600 to-rose-600', btnBorder: 'border-red-500',
    btnText: 'text-red-600 dark:text-red-400', btnHover: 'hover:bg-red-50 dark:hover:bg-red-900/20',
    link: 'text-red-600 hover:underline dark:text-red-400',
  },
  violet: {
    pageBg: 'from-violet-50 via-white to-accent-subtle dark:from-gray-900 dark:via-gray-950 dark:to-gray-900',
    selBorder: 'border-violet-500', selRing: 'ring-violet-300 dark:ring-violet-600',
    btnBg: 'from-violet-600 to-accent', btnBorder: 'border-violet-500',
    btnText: 'text-violet-600 dark:text-violet-400', btnHover: 'hover:bg-violet-50 dark:hover:bg-violet-900/20',
    link: 'text-violet-600 hover:underline dark:text-violet-400',
  },
}

const PLAN_GRADIENTS = [
  'from-red-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-indigo-600',
]

const DIFF_BADGE: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

/* ------------------------------------------------------------------ */
/*  Public config type                                                 */
/* ------------------------------------------------------------------ */

export interface StudyPlanSelectorConfig {
  subject: string
  description: string
  backLink: { href: string; label: string }
  apiEndpoint: string
  accent: AccentColor
  examLabel?: string
  plans: StudyPlanTemplate[]
  /**
   * Diagnostic category prefix for this course (e.g. "ap-stats-diagnostic").
   * When set, the page personalizes from the student's latest diagnostic:
   * a focus banner here, and weak-area tasks front-loaded at adopt time.
   */
  diagnosticPrefix?: string
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

function StudyPlanSelectorInner(config: StudyPlanSelectorConfig) {
  const { subject, description, backLink, apiEndpoint, accent, examLabel, plans, diagnosticPrefix } = config
  const t = A[accent]
  const { status } = useSession()
  const router = useRouter()
  const [adopting, setAdopting] = useState<string | null>(null)
  const [examDate, setExamDate] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function adoptPlan(templateId: string) {
    if (status !== 'authenticated') { router.push('/auth/signin'); return }
    setAdopting(templateId)
    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateId,
          startDate: new Date().toISOString(),
          ...(examDate ? { examDate: new Date(examDate).toISOString() } : {}),
        }),
      })
      if (res.ok) { setSuccess(true); setTimeout(() => router.push('/dashboard'), 1500) }
    } finally { setAdopting(null) }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${t.pageBg}`}>
      <div className="container py-12">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Link href={backLink.href} className={`mb-4 inline-flex items-center gap-1 text-sm ${t.link}`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {backLink.label}
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {subject} Study Plan Templates
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>

        {success && (
          <div className="mx-auto mb-8 max-w-lg rounded-xl bg-green-100 p-4 text-center text-green-800 dark:bg-green-900/30 dark:text-green-300">
            <p className="font-semibold">Plan adopted! Redirecting to your dashboard…</p>
          </div>
        )}

        {/* Personalized focus banner — shown when the student has a diagnostic
            on record. Any plan they adopt will front-load these areas. */}
        {diagnosticPrefix && <DiagnosticFocusBanner prefix={diagnosticPrefix} />}

        {/* Plans Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan, pi) => {
            const isSelected = selectedPlan === plan.id
            return (
              <div key={plan.id} className={`flex flex-col rounded-2xl border bg-white shadow-sm transition dark:bg-gray-800 ${isSelected ? `${t.selBorder} shadow-lg ring-2 ${t.selRing}` : 'border-gray-200 hover:shadow-md dark:border-gray-700'}`}>
                <div className={`rounded-t-2xl bg-gradient-to-r p-6 text-white ${PLAN_GRADIENTS[pi] ?? PLAN_GRADIENTS[0]}`}>
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${DIFF_BADGE[plan.difficulty] ?? ''}`}>{plan.difficulty}</span>
                  <h2 className="mt-2 text-xl font-bold">{plan.title}</h2>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
                  <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                    {[
                      ['Duration', `${plan.durationWeeks} weeks`],
                      ['Target Gain', plan.targetImprovement],
                      ['Weekly Time', plan.weeklyHours],
                      ['Tasks', String(plan.tasks.length)],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-lg bg-gray-50 p-2.5 dark:bg-gray-700/50">
                        <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
                        <div className="font-bold text-gray-900 dark:text-white">{val}</div>
                      </div>
                    ))}
                  </div>
                  {isSelected ? (
                    <div className="space-y-3">
                      <label className="block text-sm text-gray-700 dark:text-gray-300">
                        {examLabel ?? `${subject} Exam Date`} (optional)
                        <input type="date" value={examDate} onChange={e => setExamDate(e.target.value)}
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
                      </label>
                      <button onClick={() => adoptPlan(plan.id)} disabled={!!adopting}
                        className={`w-full rounded-xl bg-gradient-to-r ${t.btnBg} py-2.5 font-semibold text-white shadow transition hover:shadow-lg disabled:opacity-50`}>
                        {adopting === plan.id ? 'Creating Plan…' : 'Start This Plan'}
                      </button>
                      <button onClick={() => setSelectedPlan(null)} className="w-full text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400">Cancel</button>
                    </div>
                  ) : (
                    <button onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full rounded-xl border-2 ${t.btnBorder} py-2.5 font-semibold ${t.btnText} transition ${t.btnHover}`}>
                      Select Plan
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Plans are added to your <Link href="/dashboard" className={`font-medium ${t.link}`}>dashboard</Link> Study Planner where you can track progress, check off tasks, and adjust the schedule.</p>
        </div>
      </div>
    </div>
  )
}

export default function StudyPlanSelector(config: StudyPlanSelectorConfig) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolLearningResourceJsonLd({ subjectName: config.subject, tool: 'study-plan' })
          ),
        }}
      />
      <ToolBreadcrumb subjectName={config.subject} tool="Study Plan" />
      <StudyPlanSelectorInner {...config} />
      <ToolPageSeoBody subjectName={config.subject} tool="study-plan" />
    </>
  )
}
