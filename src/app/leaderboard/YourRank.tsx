'use client'

import { useEffect, useState } from 'react'

interface MyRank {
  ranked: boolean
  position?: number
  mmr?: number
  rank?: string
}

/**
 * "You're #340 · Gold · 1240 MMR" banner above the leaderboard table.
 *
 * The table itself is ISR (identical for every visitor); this small client
 * component fetches the viewer's own standing at runtime and renders nothing
 * when signed out or unranked, so the static page is untouched for them.
 */
export default function YourRank({
  rankColors,
  rankEmoji,
}: {
  rankColors: Record<string, string>
  rankEmoji: Record<string, string>
}) {
  const [data, setData] = useState<MyRank | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/leaderboard/me')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled) setData(d)
      })
      .catch(() => {
        /* signed-out / transient failure → render nothing */
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (!data?.ranked || !data.position || !data.rank || typeof data.mmr !== 'number') {
    return null
  }

  return (
    <div className="mb-4 animate-fadeIn rounded-xl border border-accent-muted/40 bg-accent-subtle dark:bg-accent-light/20 px-4 py-3">
      <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-semibold text-gray-900 dark:text-white">
        <span>You&apos;re #{data.position}</span>
        <span className="text-gray-400 dark:text-gray-500">&middot;</span>
        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${rankColors[data.rank] || ''}`}>
          {rankEmoji[data.rank] || ''} {data.rank}
        </span>
        <span className="text-gray-400 dark:text-gray-500">&middot;</span>
        <span className="font-mono">{data.mmr} MMR</span>
      </p>
    </div>
  )
}
