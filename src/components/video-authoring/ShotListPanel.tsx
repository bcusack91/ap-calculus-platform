'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ClipboardList } from 'lucide-react'
import type { ShotList } from '@/data/video-shot-lists/types'
import { card, jsonFetch } from './ui'

/**
 * The topic's recording plan, beside the lesson editor: which clips to
 * record, what each must cover and show, and the drafted checkpoints (also
 * offered under "Use a suggestion"). Renders nothing when the topic has none.
 */
export function ShotListPanel({ topicSlug, query }: { topicSlug: string; query: string }) {
  const [plan, setPlan] = useState<ShotList | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sep = query ? '&' : '?'
    jsonFetch<{ shotList: ShotList | null }>(`/api/teacher/video-lessons/shot-list${query}${sep}topic=${encodeURIComponent(topicSlug)}`).then((r) =>
      setPlan(r.ok ? r.data.shotList : null),
    )
  }, [topicSlug, query])

  if (!plan) return null
  const minutes = plan.clips.reduce((n, c) => n + c.minutes, 0)
  return (
    <section className={card} aria-label="Recording plan">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="flex w-full items-center justify-between gap-3 text-left">
        <span className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-accent" aria-hidden />
          <span>
            <span className="block font-semibold text-gray-900 dark:text-white">Recording plan</span>
            <span className="block text-sm text-gray-600 dark:text-gray-400">{plan.clips.length} clips · about {minutes} min · its checkpoint questions are under “Use a suggestion”</span>
          </span>
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>
      {open && (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">{plan.overview}</p>
          <ol className="space-y-4">
            {plan.clips.map((c, i) => (
              <li key={c.title} className="rounded-xl border border-gray-200 p-3 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Clip {i + 1}: {c.title} <span className="font-normal text-gray-500 dark:text-gray-400">· {c.minutes} min</span>
                </p>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300"><span className="font-medium">Goal:</span> {c.goal}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Say, in order</p>
                <ul className="ml-4 list-disc text-sm text-gray-700 dark:text-gray-300">
                  {c.keyPoints.map((k) => <li key={k}>{k}</li>)}
                </ul>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Show on screen</p>
                <ul className="ml-4 list-disc text-sm text-gray-700 dark:text-gray-300">
                  {c.showOnScreen.map((k) => <li key={k}>{k}</li>)}
                </ul>
                {c.workedExample && <p className="mt-2 text-sm text-gray-700 dark:text-gray-300"><span className="font-medium">Worked example:</span> {c.workedExample}</p>}
                {c.pitfalls && c.pitfalls.length > 0 && (
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300"><span className="font-medium">Call out:</span> {c.pitfalls.join(' · ')}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}
