'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Clock, Zap, Trophy } from 'lucide-react'
import { fmtDuration } from '@/components/teacher/StudyReportShared'

/**
 * Compact one-row engagement strip for the Overview tab: current streak,
 * XP earned from this week's challenges (same endpoint ChallengesWidget
 * uses), the student's active study time over the last 7 days (linking to
 * /study-time — rolled out to MCAT/SAT/ACT students first, via
 * `studyTimeCourse`), and a link to the leaderboard. Deliberately a strip,
 * not a banner.
 */
export default function EngagementStrip({ streak, studyTimeCourse }: { streak: number; studyTimeCourse?: 'mcat' | 'sat' | 'act' | null }) {
  const [weeklyXp, setWeeklyXp] = useState<number | null>(null)
  const [weekSeconds, setWeekSeconds] = useState<number | null>(null)

  useEffect(() => {
    if (!studyTimeCourse) return
    let active = true
    fetch(`/api/activity/my-time?range=7d&tz=${new Date().getTimezoneOffset()}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (active && typeof d?.activeTime?.totalSeconds === 'number') setWeekSeconds(d.activeTime.totalSeconds)
      })
      .catch(() => {})
    return () => { active = false }
  }, [studyTimeCourse])

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
      {studyTimeCourse && weekSeconds !== null && (
        <Link
          href={`/study-time?course=${studyTimeCourse}`}
          className="inline-flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
          title="Your active study time: lessons, quizzes, flashcards and tests"
        >
          <Clock className="w-4 h-4 text-accent" aria-hidden /> {fmtDuration(weekSeconds)} studied in the last 7 days
        </Link>
      )}
      <Link href="/leaderboard" className="ml-auto inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent-hover transition-colors">
        <Trophy className="w-4 h-4" aria-hidden /> Leaderboard →
      </Link>
    </div>
  )
}
