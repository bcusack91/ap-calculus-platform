'use client'

/**
 * The Report tab on /review/<kind>/<id>: accuracy by section and topic
 * (weakest first), CARS accuracy by skill, and pacing. Built from the review
 * items by buildReviewReport (src/lib/review-report.ts). Every bar is drawn to
 * scale (0–100%) with its value written beside it, so nothing relies on the bar.
 */

import { useState } from 'react'
import { CheckCircle2, Clock, MinusCircle, XCircle } from 'lucide-react'
import type { AccuracyBucket, ReviewReport as Report, ReportStatus } from '@/lib/review-report'
import { formatStatTime } from '@/components/AnswerStats'

const pct = (x: number) => `${Math.round(x * 100)}%`
const time = (ms: number) => formatStatTime(ms / 1000)

const STATUS_ICON: Record<ReportStatus, { Icon: typeof CheckCircle2; label: string; cls: string }> = {
  correct: { Icon: CheckCircle2, label: 'Correct', cls: 'text-green-700 dark:text-green-400' },
  wrong: { Icon: XCircle, label: 'Incorrect', cls: 'text-red-700 dark:text-red-400' },
  skipped: { Icon: MinusCircle, label: 'Skipped', cls: 'text-amber-700 dark:text-amber-400' },
  typed: { Icon: MinusCircle, label: 'Typed', cls: 'text-gray-500 dark:text-gray-400' },
}

function Meter({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="h-2 w-full overflow-hidden rounded bg-gray-200 dark:bg-gray-700"
      role="img"
      aria-label={label}
      title={label}
    >
      <div className="h-full rounded bg-accent dark:bg-accent-muted" style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }} />
    </div>
  )
}

function BucketList({ buckets, limit }: { buckets: AccuracyBucket[]; limit?: number }) {
  const [all, setAll] = useState(false)
  const shown = limit && !all ? buckets.slice(0, limit) : buckets
  return (
    <>
      <ul className="space-y-3">
        {shown.map((b) => {
          const detail = `${b.correct} of ${b.total} correct${b.skipped ? `, ${b.skipped} skipped` : ''}`
          return (
            <li key={b.key}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 text-sm">
                <span className="min-w-0 font-medium text-gray-800 dark:text-gray-100">{b.label}</span>
                <span className="tabular-nums text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">{pct(b.accuracy)}</span> · {detail}
                </span>
              </div>
              <div className="mt-1">
                <Meter value={b.accuracy} label={`${b.label}: ${pct(b.accuracy)}, ${detail}`} />
              </div>
            </li>
          )
        })}
      </ul>
      {limit && buckets.length > limit && (
        <button
          type="button"
          onClick={() => setAll((v) => !v)}
          aria-expanded={all}
          className="mt-3 rounded text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
        >
          {all ? 'Show fewer' : `Show all ${buckets.length}`}
        </button>
      )}
    </>
  )
}

function Section({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h2>
      {hint && <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{hint}</p>}
      <div className="mt-3">{children}</div>
    </section>
  )
}

export default function ReviewReport({
  report,
  approximateTiming = false,
  onOpenQuestion,
  skillsTitle = 'CARS by reasoning skill',
  skillsHint = 'Weakest first. Each CARS question tests one reasoning skill.',
  studentName,
}: {
  report: Report
  /** A teacher is reviewing this student's attempt. */
  studentName?: string
  /** Times were recorded per passage / per attempt, so per-question times are averages. */
  approximateTiming?: boolean
  /** Jump to a question in the All tab. */
  onOpenQuestion?: (index: number) => void
  /** Heading / hint of the per-skill panel (CARS by default; ACT reporting categories on ACT). */
  skillsTitle?: string
  skillsHint?: string
}) {
  const { overall, sections, topics, skills, pacing } = report
  return (
    <div className="space-y-4">
      <Section title="Overall">
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{pct(overall.accuracy)}</span>{' '}
          <span className="tabular-nums">· {overall.correct} of {overall.total} correct</span>
        </p>
      </Section>

      {sections.length > 0 && (
        <Section title="By section" hint="Weakest first.">
          <BucketList buckets={sections} />
        </Section>
      )}

      {skills.length > 0 && (
        <Section title={skillsTitle} hint={skillsHint}>
          <BucketList buckets={skills} />
        </Section>
      )}

      {topics.length > 0 && (
        <Section title="By topic" hint="Weakest first, with the number of questions on each.">
          <BucketList buckets={topics} limit={8} />
        </Section>
      )}

      <Section
        title="Pacing"
        hint={approximateTiming ? 'Time is recorded per passage (or per test), so per-question times are averages.' : undefined}
      >
        {pacing.totalMs === null ? (
          <p className="text-sm text-gray-600 dark:text-gray-400">No time was recorded for this attempt.</p>
        ) : (
          <div className="space-y-4">
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900/40">
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Total time</dt>
                <dd className="text-lg font-bold tabular-nums text-gray-900 dark:text-white">{time(pacing.totalMs)}</dd>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-900/40">
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Per question</dt>
                <dd className="text-lg font-bold tabular-nums text-gray-900 dark:text-white">{pacing.avgMs !== null ? time(pacing.avgMs) : '—'}</dd>
              </div>
              {pacing.compared > 0 && (
                <div className="col-span-2 rounded-lg bg-gray-50 p-3 sm:col-span-1 dark:bg-gray-900/40">
                  <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Vs. other students</dt>
                  <dd className="text-sm text-gray-800 dark:text-gray-200">
                    <span className="font-bold tabular-nums">{time(pacing.yourComparedMs)}</span> vs median{' '}
                    <span className="font-bold tabular-nums">{time(pacing.medianComparedMs)}</span>
                  </dd>
                </div>
              )}
            </dl>
            {pacing.compared > 0 && (
              <p className="text-sm text-gray-700 dark:text-gray-200">
                On the {pacing.compared} question{pacing.compared === 1 ? '' : 's'} with enough answers to compare, {studentName ? `${studentName} was` : 'you were'} slower than the median on{' '}
                <span className="font-semibold">{pacing.slower}</span> and faster on <span className="font-semibold">{pacing.faster}</span>.
              </p>
            )}
            {pacing.slowest.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Slowest questions</h3>
                <ol className="mt-2 space-y-1.5">
                  {pacing.slowest.map((q) => {
                    const s = STATUS_ICON[q.status]
                    const body = (
                      <>
                        <span className="font-semibold text-gray-800 dark:text-gray-100">Q{q.index + 1}</span>
                        <span className={`inline-flex items-center gap-1 text-xs font-medium ${s.cls}`}>
                          <s.Icon className="h-3.5 w-3.5" aria-hidden /> {s.label}
                        </span>
                        {q.label && <span className="min-w-0 truncate text-gray-600 dark:text-gray-300">{q.label}</span>}
                        <span className="ml-auto inline-flex items-center gap-1 tabular-nums text-gray-700 dark:text-gray-200">
                          <Clock className="h-3.5 w-3.5" aria-hidden /> {time(q.durationMs)}
                          {q.medianMs !== null && <span className="text-gray-500 dark:text-gray-400">(median {time(q.medianMs)})</span>}
                        </span>
                      </>
                    )
                    return (
                      <li key={q.index}>
                        {onOpenQuestion ? (
                          <button
                            type="button"
                            onClick={() => onOpenQuestion(q.index)}
                            className="flex w-full flex-wrap items-center gap-x-2 gap-y-0.5 rounded-lg border border-gray-200 px-3 py-2 text-left text-sm hover:border-accent-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-700"
                          >
                            {body}
                          </button>
                        ) : (
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 rounded-lg border border-gray-200 px-3 py-2 text-sm dark:border-gray-700">{body}</div>
                        )}
                      </li>
                    )
                  })}
                </ol>
              </div>
            )}
          </div>
        )}
      </Section>
    </div>
  )
}
