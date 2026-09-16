'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface PendingDiag { id: string; title: string; courseKey: string; dueDate: string | null; classroomName: string; href: string }

/**
 * Due dates are DAYS, and work is due at the END of the day.
 *
 * A date-only value (`<input type="date">` → `new Date('2026-09-18')`) is
 * stored as UTC midnight, the FIRST instant of the day. Rendering that instant
 * in ET printed "9/17" and flipped the banner to "Overdue" at 8pm the evening
 * BEFORE the date the teacher picked. New assignments store a real end-of-day
 * instant, and these two helpers also repair rows frozen at UTC midnight
 * before that fix, so nothing has to be migrated.
 *
 * Exported so ClassDiagnosticsPanel renders the same date the student sees.
 */
export function isDateOnly(iso: string | Date): boolean {
  const d = typeof iso === 'string' ? new Date(iso) : iso
  return !isNaN(d.getTime()) && d.getTime() % 86_400_000 === 0
}

/** The instant the assignment actually becomes late, in the viewer's timezone. */
export function dueDeadline(iso: string | Date): Date {
  const d = typeof iso === 'string' ? new Date(iso) : iso
  if (!isDateOnly(d)) return d
  return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 23, 59, 59, 999)
}

/** The calendar date to show — the day the teacher picked, not a shifted one. */
export function formatDueDate(iso: string | Date): string {
  const d = typeof iso === 'string' ? new Date(iso) : iso
  if (isNaN(d.getTime())) return ''
  return dueDeadline(d).toLocaleDateString()
}

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
        const overdue = p.dueDate && dueDeadline(p.dueDate).getTime() < now
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
                      ? <span className="font-medium text-red-600 dark:text-red-400">Overdue — was due {formatDueDate(p.dueDate)}</span>
                      : `Due end of day ${formatDueDate(p.dueDate)}`
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
