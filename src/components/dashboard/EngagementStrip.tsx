'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Zap, Trophy } from 'lucide-react'

/**
 * Compact one-row engagement strip for the Overview tab: current streak,
 * XP earned from this week's challenges (same endpoint ChallengesWidget
 * uses), and a link to the leaderboard. Deliberately a strip, not a banner.
 */
export default function EngagementStrip({ streak }: { streak: number }) {
  const [weeklyXp, setWeeklyXp] = useState<number | null>(null)

  useEffect(() => {
    let active = true
    fetch('/api/challenges')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!active || !d?.challenges) return
        const total = (d.challenges as { type: string; xpEarned?: number }[])
          .filter((c) => c.type === 'WEEKLY')
          .reduce((sum, c) => sum + (c.xpEarned ?? 0), 0)
        setWeeklyXp(total)
      })
      .catch(() => {})
    return () => { active = false }
  }, [])

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 shadow-sm text-sm">
      <span className="font-semibold text-gray-900 dark:text-white" title="Current daily streak">
        <span aria-hidden>🔥</span> {streak}-day streak
      </span>
      {weeklyXp !== null && (
        <Link href="/dashboard?tab=practice" className="inline-flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300 hover:text-accent transition-colors" title="XP earned from this week's challenges">
          <Zap className="w-4 h-4 text-accent" aria-hidden /> {weeklyXp} XP this week
        </Link>
      )}
      <Link href="/leaderboard" className="ml-auto inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent-hover transition-colors">
        <Trophy className="w-4 h-4" aria-hidden /> Leaderboard →
      </Link>
    </div>
  )
}
