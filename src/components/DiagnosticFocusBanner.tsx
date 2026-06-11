'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface FocusTopic {
  slug: string
  name: string
  priority?: string
  exists?: boolean
  path?: string | null
}

interface DiagnosticFocus {
  weakAreas: string[]
  recommendedTopics: FocusTopic[]
  takenAt: string
}

/**
 * "Personalized from your diagnostic" banner for study-plan pages (#4). Fetches
 * the signed-in user's latest diagnostic focus for `prefix` and renders weak
 * areas + recommended-topic chips. Chips link to /topics only when the topic
 * actually exists (so courses like SAT, whose recommended slugs have no topic
 * page, render plain chips instead of broken links). Renders nothing when the
 * user has no diagnostic — safe to drop onto any page.
 */
export default function DiagnosticFocusBanner({ prefix }: { prefix: string }) {
  const { status } = useSession()
  const [focus, setFocus] = useState<DiagnosticFocus | null>(null)

  useEffect(() => {
    if (status !== 'authenticated') return
    let active = true
    fetch(`/api/study-plans/diagnostic-focus?prefix=${encodeURIComponent(prefix)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (active && data?.focus) setFocus(data.focus as DiagnosticFocus)
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [prefix, status])

  if (!focus || (focus.weakAreas.length === 0 && focus.recommendedTopics.length === 0)) {
    return null
  }

  return (
    <div className="mx-auto mb-8 max-w-3xl rounded-2xl border-2 border-indigo-300 bg-white/70 p-5 dark:border-indigo-700 dark:bg-gray-800/50">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xl">🎯</span>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Personalized from your diagnostic</h2>
      </div>
      {focus.weakAreas.length > 0 && (
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
          Based on your results, focus extra on:{' '}
          <span className="font-semibold text-gray-900 dark:text-gray-100">{focus.weakAreas.join(', ')}</span>. Any plan
          you start will front-load these areas.
        </p>
      )}
      {focus.recommendedTopics.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {focus.recommendedTopics.slice(0, 6).map((topic) =>
            topic.exists && topic.path ? (
              <Link
                key={topic.slug}
                href={topic.path}
                className="rounded-full border border-indigo-300 px-3 py-1 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50 dark:border-indigo-600 dark:text-indigo-300 dark:hover:bg-indigo-900/20"
              >
                {topic.name}
              </Link>
            ) : (
              <span
                key={topic.slug}
                className="rounded-full border border-gray-300 px-3 py-1 text-sm font-medium text-gray-600 dark:border-gray-600 dark:text-gray-300"
              >
                {topic.name}
              </span>
            ),
          )}
        </div>
      )}
    </div>
  )
}
