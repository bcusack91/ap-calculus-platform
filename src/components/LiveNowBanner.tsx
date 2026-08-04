'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface LiveInfo { id: string; mode: string; classroomName: string }

/**
 * "Your class is live" banner. Self-contained — drop onto any signed-in page
 * (dashboard, assignments); renders nothing when no enrolled class is live.
 * Polls every 60s so a session started mid-visit still surfaces.
 */
export default function LiveNowBanner() {
  const { status } = useSession()
  const [sessions, setSessions] = useState<LiveInfo[]>([])

  useEffect(() => {
    if (status !== 'authenticated') return
    let active = true
    const check = () => {
      fetch('/api/live-sessions/active', { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => { if (active && d?.sessions) setSessions(d.sessions) })
        .catch(() => {})
    }
    check()
    const t = setInterval(check, 60_000)
    return () => { active = false; clearInterval(t) }
  }, [status])

  if (sessions.length === 0) return null

  return (
    <div className="mb-6 space-y-2">
      {sessions.map((s) => (
        <Link
          key={s.id}
          href={`/live/${s.id}`}
          className="flex items-center justify-between rounded-xl border-2 border-red-300 bg-gradient-to-r from-red-50 to-rose-50 p-4 shadow-sm transition hover:shadow-md dark:border-red-700 dark:from-red-900/30 dark:to-rose-900/30 group"
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> LIVE
            </span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{s.classroomName} is live now</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {s.mode === 'CONFERENCE' ? 'Class video conference — join with your camera and mic' : 'Class webcast — watch and ask questions in chat'}
              </p>
            </div>
          </div>
          <span className="font-semibold text-red-600 group-hover:translate-x-1 transition-transform dark:text-red-400">Join →</span>
        </Link>
      ))}
    </div>
  )
}
