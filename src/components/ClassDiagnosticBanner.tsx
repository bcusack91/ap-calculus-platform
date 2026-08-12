'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface PendingDiag { id: string; title: string; courseKey: string; dueDate: string | null; classroomName: string; href: string }

/**
 * "Your class has a diagnostic due" banner. Self-contained — renders nothing
 * when there's nothing pending; disappears as soon as the student submits.
 */
export default function ClassDiagnosticBanner() {
  const { status } = useSession()
  const [pending, setPending] = useState<PendingDiag[]>([])
  // Snapshot once — the repo lint forbids impure calls (Date.now) in render.
  const [now] = useState(() => Date.now())

  useEffect(() => {
    if (status !== 'authenticated') return
    let active = true
    fetch('/api/class-diagnostics/pending', { cache: 'no-store' })
      .then(r => (r.ok ? r.json() : null))
      .then(d => { if (active && d?.pending) setPending(d.pending) })
      .catch(() => {})
    return () => { active = false }
  }, [status])

  if (pending.length === 0) return null

  return (
    <div className="mb-6 space-y-2">
      {pending.map(p => {
        const overdue = p.dueDate && new Date(p.dueDate).getTime() < now
        return (
          <Link
            key={p.id}
            href={p.href}
            className="flex items-center justify-between rounded-xl border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 shadow-sm transition hover:shadow-md dark:border-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {p.classroomName}: {p.title} assigned
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {p.dueDate
                    ? overdue
                      ? <span className="font-medium text-red-600 dark:text-red-400">Overdue — was due {new Date(p.dueDate).toLocaleDateString()}</span>
                      : `Due ${new Date(p.dueDate).toLocaleDateString()}`
                    : 'Take it before your next class meeting'}
                </p>
              </div>
            </div>
            <span className="font-semibold text-blue-600 group-hover:translate-x-1 transition-transform dark:text-blue-400">Take it →</span>
          </Link>
        )
      })}
    </div>
  )
}
