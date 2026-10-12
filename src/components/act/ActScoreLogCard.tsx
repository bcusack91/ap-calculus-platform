'use client'

/**
 * "Took the real ACT? Log your score" — a small card on the ACT hub and the
 * full-length results page. Signed-in students enter an official ACT or ACT
 * practice-test composite (and optional section scores); the server stores it
 * with what StudyMondo predicted at the time, which is how the 1-36 curve gets
 * calibrated, and the ACT score goal measures against it.
 */

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { ClipboardList, Trash2 } from 'lucide-react'
import ExternalScoreForm from '@/components/ExternalScoreForm'
import { signInUrl } from '@/lib/auth-redirect'

interface LoggedScore {
  id: string
  source: string
  totalScore: number
  sectionScores: Record<string, number> | null
  takenAt: string
}

const SECTION_SHORT: [string, string][] = [['english', 'E'], ['math', 'M'], ['reading', 'R'], ['science', 'S']]

export default function ActScoreLogCard({ className = '', callbackUrl = '/act' }: { className?: string; callbackUrl?: string }) {
  const { status } = useSession()
  const [open, setOpen] = useState(false)
  const [scores, setScores] = useState<LoggedScore[]>([])
  const [saved, setSaved] = useState(false)

  const load = useCallback(() => {
    fetch('/api/exam-scores?course=act', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (Array.isArray(d?.scores)) setScores(d.scores) })
      .catch(() => { /* offline: no list */ })
  }, [])

  useEffect(() => {
    if (status === 'authenticated') load()
  }, [status, load])

  const remove = async (id: string) => {
    const res = await fetch(`/api/exam-scores?id=${encodeURIComponent(id)}`, { method: 'DELETE' }).catch(() => null)
    if (res?.ok) setScores((s) => s.filter((x) => x.id !== id))
  }

  return (
    <section className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 ${className}`} aria-labelledby="act-score-log-heading">
      <div className="flex flex-wrap items-start gap-3">
        <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-accent dark:text-accent-muted" aria-hidden />
        <div className="min-w-0 flex-1">
          <h2 id="act-score-log-heading" className="text-base font-bold text-gray-900 dark:text-white">Took the real ACT? Log your score</h2>
          <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
            Your official (or official practice) ACT score tracks your goal and shows how close our estimates run. It takes 20 seconds.
          </p>
        </div>
        {status === 'authenticated' && !open && (
          <button
            type="button"
            onClick={() => { setOpen(true); setSaved(false) }}
            className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
          >
            Log a score
          </button>
        )}
        {status === 'unauthenticated' && (
          <Link
            href={signInUrl({ callbackUrl })}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-accent-muted hover:text-accent dark:border-gray-600 dark:text-gray-200"
          >
            Sign in to log a score
          </Link>
        )}
      </div>
      {saved && <p role="status" className="mt-3 text-sm font-medium text-green-700 dark:text-green-400">Saved. Thanks: every real score makes our estimates more accurate.</p>}
      {open && (
        <div className="mt-4">
          <ExternalScoreForm
            course="act"
            onSaved={() => { setOpen(false); setSaved(true); load() }}
            onCancel={() => setOpen(false)}
          />
        </div>
      )}
      {scores.length > 0 && (
        <ul className="mt-4 divide-y divide-gray-100 rounded-xl border border-gray-200 dark:divide-gray-700 dark:border-gray-700" aria-label="Your logged ACT scores">
          {scores.slice(0, 5).map((s) => (
            <li key={s.id} className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-sm">
              <span className="min-w-0">
                <span className="font-semibold text-gray-900 dark:text-white">{s.totalScore}</span>
                <span className="ml-2 text-gray-600 dark:text-gray-300">{s.source}</span>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                  {new Date(s.takenAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                {s.sectionScores && SECTION_SHORT.some(([k]) => typeof s.sectionScores?.[k] === 'number') && (
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                    {SECTION_SHORT.filter(([k]) => typeof s.sectionScores?.[k] === 'number').map(([k, l]) => `${l} ${s.sectionScores![k]}`).join(' · ')}
                  </span>
                )}
              </span>
              <button
                type="button"
                onClick={() => { void remove(s.id) }}
                aria-label={`Delete the ${s.source} score`}
                className="rounded p-1 text-gray-400 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:hover:text-red-400"
              >
                <Trash2 className="h-4 w-4" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
