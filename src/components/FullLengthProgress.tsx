'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Trophy } from 'lucide-react'
import ExternalScoreForm from '@/components/ExternalScoreForm'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'
import { describeReadiness, levelThresholds, type FullLengthCourse, type FullLengthReadiness } from '@/lib/full-length-progress'

const TICKS = levelThresholds().slice(1, -1)

function formatDay(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

/**
 * How close the student is to their next full-length: an experience bar from
 * level 1 to 10 over complete study cycles (MCAT 4, SAT 2). Early levels fill
 * fast, later ones take longer; the plain line underneath says exactly where
 * they are. At level 10 it offers the full-length — on StudyMondo, or by
 * entering an outside score — and starts over afterwards.
 */
export default function FullLengthProgress({
  course,
  compact = false,
  className = '',
}: {
  course: FullLengthCourse
  compact?: boolean
  className?: string
}) {
  const [r, setR] = useState<FullLengthReadiness | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [saved, setSaved] = useState(false)

  const fetchReadiness = useCallback(
    () =>
      fetch(`/api/full-length/readiness?course=${course}`, { cache: 'no-store' })
        .then((res) => (res.ok ? res.json() : null))
        .then((d) => (d?.readiness as FullLengthReadiness | undefined) ?? null)
        .catch(() => null),
    [course],
  )
  const load = useCallback(() => fetchReadiness().then((v) => { if (v) setR(v) }), [fetchReadiness])

  useEffect(() => {
    let active = true
    fetchReadiness().then((v) => { if (active && v) setR(v) })
    return () => { active = false }
  }, [fetchReadiness])

  if (!r) return null

  const pct = Math.round(r.fraction * 100)
  const caption = describeReadiness(r)
  const last = r.lastFullLength

  return (
    <section
      className={`rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 ${compact ? '' : 'sm:p-5'} ${className}`}
      aria-labelledby={`fl-progress-${course}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 id={`fl-progress-${course}`} className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
          <Trophy className="h-4 w-4 text-accent" aria-hidden />
          {r.label} full-length readiness
          <HelpLink article={HELP_ARTICLES.fullLengthReadiness} label="How the levels work" />
        </h3>
        <p className="text-sm font-semibold tabular-nums text-gray-900 dark:text-white">
          Level {r.level}
          <span className="font-normal text-gray-500 dark:text-gray-400"> / {r.levels}</span>
          <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">{r.xp.toLocaleString()} / {r.xpTotal.toLocaleString()} XP</span>
        </p>
      </div>

      <div
        className="relative mt-3 h-3.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={r.levels}
        aria-valuenow={r.level}
        aria-valuetext={`Level ${r.level} of ${r.levels}, ${pct}% of the way to your next full-length`}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-700 motion-reduce:transition-none ${r.ready ? 'bg-green-500' : 'bg-accent'}`}
          style={{ width: `${pct}%` }}
        />
        {/* Level boundaries: closer together at the start, wider later */}
        {TICKS.map((t, i) => (
          <span
            key={i}
            aria-hidden
            className="absolute top-0 h-full w-px bg-white/70 dark:bg-gray-900/60"
            style={{ left: `${t * 100}%` }}
          />
        ))}
      </div>

      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{caption}</p>

      {r.ready ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Link
            href={r.fullLengthHref}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Take a {r.fullLengthLabel} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            aria-expanded={showForm}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            I took {course === 'mcat' ? 'an' : 'a'} {r.externalLabel}
          </button>
        </div>
      ) : (
        !compact && (
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            {last
              ? `Last full-length: ${last.score != null ? `${last.score} ` : ''}${last.kind === 'external' ? `(${last.source ?? 'outside test'}) ` : ''}on ${formatDay(last.at)}. `
              : ''}
            Took {course === 'mcat' ? 'an' : 'a'} {r.externalLabel} already?{' '}
            <button type="button" onClick={() => setShowForm((v) => !v)} aria-expanded={showForm} className="font-medium text-accent hover:underline">
              Enter the score
            </button>
          </p>
        )
      )}

      {saved && (
        <p role="status" className="mt-2 text-sm text-green-700 dark:text-green-400">
          Saved. Your bar now counts toward your next full-length.
        </p>
      )}
      {showForm && (
        <div className="mt-3">
          <ExternalScoreForm
            course={course}
            onCancel={() => setShowForm(false)}
            onSaved={() => {
              setShowForm(false)
              setSaved(true)
              void load()
            }}
          />
        </div>
      )}
    </section>
  )
}
