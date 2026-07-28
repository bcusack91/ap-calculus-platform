'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { courseDiagnosticMap, courseStudyPlanMap } from '@/data/course-feature-config'

/**
 * Turns diagnostic results into an actual StudyPlan.
 *
 * The diagnostic results screen showed a heading called "Your Personalized
 * Study Plan" that was really just a list of topic links — it never created a
 * StudyPlan record. Meanwhile the platform has a full planner: day-by-day
 * templates for all 35 courses, sprint and standard paces, and an adaptive
 * layer that front-loads weak areas from the student's most recent diagnostic.
 * The two were never connected, which is why 1,811 diagnostics produced 19
 * adopted plans.
 *
 * This bridges them. The per-course study-plan API already applies
 * applyAdaptivePriority() using the latest diagnostic, so simply POSTing a
 * template here yields a plan already reordered around what the student just
 * got wrong — no weak-area data needs to be passed along.
 *
 * The endpoint is derived from the existing feature maps rather than hardcoded:
 * diagnostic href -> course slug -> study-plan href -> /api<that href>. Verified
 * to resolve for all 35 courses.
 */

interface Template {
  id: string
  title: string
  durationWeeks: number
  weeklyHours: string
  difficulty: string
}

/** diagnostic page path (e.g. '/calcab-diagnostic') -> its study-plan API */
function resolveEndpoints(diagnosticPath: string): { api: string; view: string } | null {
  const entry = Object.entries(courseDiagnosticMap).find(
    ([, cfg]) => cfg.href === diagnosticPath
  )
  if (!entry) return null
  const plan = (courseStudyPlanMap as Record<string, { href: string } | undefined>)[entry[0]]
  if (!plan) return null
  return { api: `/api${plan.href}`, view: plan.href }
}

export default function StartStudyPlanButton({
  diagnosticPath,
  className = '',
}: {
  /** This diagnostic's own path, e.g. '/calcab-diagnostic'. */
  diagnosticPath: string
  className?: string
}) {
  const router = useRouter()
  const [templates, setTemplates] = useState<Template[] | null>(null)
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const endpoints = resolveEndpoints(diagnosticPath)

  useEffect(() => {
    if (!endpoints) return
    let active = true
    fetch(endpoints.api)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (active && Array.isArray(d)) setTemplates(d) })
      .catch(() => { /* button falls back to linking at the plan page */ })
    return () => { active = false }
  }, [endpoints?.api]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!endpoints) return null

  const start = async (templateId: string) => {
    setCreating(true)
    setError(null)
    try {
      const res = await fetch(endpoints.api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId, startDate: new Date().toISOString() }),
      })
      if (res.status === 401) {
        // Not signed in — send them to sign in and back to the plan page.
        router.push(`/auth/signin?callbackUrl=${encodeURIComponent(endpoints.view)}`)
        return
      }
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j.error || 'Could not create your plan')
      }
      router.push('/study-plan')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setCreating(false)
    }
  }

  // Shortest plan first — after a diagnostic, the sprint is the natural default.
  const sorted = [...(templates ?? [])].sort((a, b) => a.durationWeeks - b.durationWeeks)
  const primary = sorted[0]
  const secondary = sorted[1]

  return (
    <div className={`rounded-2xl border-2 border-accent bg-accent-subtle dark:border-accent-hover dark:bg-accent-light/10 p-5 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Turn this into a day-by-day plan
      </h3>
      <p className="mt-1 mb-4 text-sm text-gray-600 dark:text-gray-400">
        We&apos;ll build a dated schedule of lessons, practice and review — and put the
        topics you just struggled with first.
      </p>

      {error && <p className="mb-3 text-sm text-red-600 dark:text-red-400">{error}</p>}

      <div className="flex flex-wrap gap-3">
        {primary ? (
          <>
            <button
              onClick={() => start(primary.id)}
              disabled={creating}
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow transition hover:opacity-90 disabled:opacity-50"
            >
              {creating ? 'Building your plan…' : `Start the ${primary.durationWeeks}-week plan`}
            </button>
            {secondary && (
              <button
                onClick={() => start(secondary.id)}
                disabled={creating}
                className="rounded-xl border-2 border-accent px-6 py-3 font-semibold text-accent-hover transition hover:bg-accent-subtle disabled:opacity-50 dark:text-accent-muted"
              >
                Prefer {secondary.durationWeeks} weeks?
              </button>
            )}
          </>
        ) : (
          // Templates not loaded (or fetch failed) — always leave a way through.
          <a
            href={endpoints.view}
            className="rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow transition hover:opacity-90"
          >
            Choose a study plan
          </a>
        )}
      </div>
    </div>
  )
}
