'use client'

import { AlertTriangle, Layers, Moon, TrendingDown } from 'lucide-react'
import type { ClassStudentRow, MetricsRange } from '@/lib/student-metrics'

/**
 * Pieces shared by the per-student study report
 * (/teacher/classroom/[id]/student/[studentId]) and the class activity table
 * (Insights › Engagement): the Range + Scope filters, number formatting, the
 * flag badges and the "tracking began" copy.
 *
 * Types only from student-metrics — it imports Prisma, so values must not be
 * pulled into a client bundle.
 */

export type StudyScope = 'all' | 'class'

export const RANGE_OPTIONS: { value: MetricsRange; label: string }[] = [
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
  { value: '90d', label: 'Last 90 days' },
  { value: 'all', label: 'All time' },
]
export const SCOPE_OPTIONS: { value: StudyScope; label: string }[] = [
  { value: 'all', label: 'All study' },
  { value: 'class', label: 'This class only' },
]

export const parseRange = (v: string | null | undefined): MetricsRange =>
  v === '30d' || v === '90d' || v === 'all' ? v : '7d'
export const parseScope = (v: string | null | undefined): StudyScope => (v === 'class' ? 'class' : 'all')

/** Active time, flashcard ratings and in-lesson answers were first recorded on this day. */
export const TRACKING_START = '2026-09-29'
export const TRACKING_START_LABEL = 'Sept 29, 2026'
export const NO_DATA_COPY = `No data yet — tracking began ${TRACKING_START_LABEL}`

/** "1h 05m", "42m", "<1m" — for durations a teacher reads at a glance. */
export function fmtDuration(seconds: number): string {
  if (seconds <= 0) return '0m'
  if (seconds < 60) return '<1m'
  const m = Math.round(seconds / 60)
  if (m < 60) return `${m}m`
  return `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, '0')}m`
}

export const fmtHours = (seconds: number) => `${(seconds / 3600).toFixed(1)}h`
export const fmtPct = (x: number | null | undefined) => (x == null ? '—' : `${Math.round(x * 100)}%`)
export const fmtDay = (day: string, opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }) =>
  new Date(`${day.slice(0, 10)}T12:00:00Z`).toLocaleDateString(undefined, { ...opts, timeZone: 'UTC' })
export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })

/** One segmented control: a labelled group of mutually exclusive buttons. */
function Segmented<T extends string>({
  label, options, value, onChange,
}: { label: string; options: { value: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div role="group" aria-label={label} className="inline-flex flex-wrap rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-0.5">
      {options.map((o) => {
        const active = o.value === value
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.value)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              active
                ? 'bg-accent text-accent-foreground shadow-sm'
                : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-accent'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

/** The Range + Scope filter row. Sits above everything it scopes. */
export function StudyFilters({
  range, scope, onChange, className = '',
}: {
  range: MetricsRange
  scope: StudyScope
  onChange: (next: { range: MetricsRange; scope: StudyScope }) => void
  className?: string
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <Segmented label="Date range" options={RANGE_OPTIONS} value={range} onChange={(r) => onChange({ range: r, scope })} />
      <Segmented label="Scope" options={SCOPE_OPTIONS} value={scope} onChange={(s) => onChange({ range, scope: s })} />
    </div>
  )
}

type Flag = ClassStudentRow['flags'][number]

export const FLAG_META: Record<Flag, { label: string; hint: string; tone: 'warn' | 'bad' | 'muted'; Icon: typeof AlertTriangle }> = {
  rushing: { label: 'Rushing', hint: 'Rating flashcards in under 2 s on average — may be tapping through', tone: 'warn', Icon: AlertTriangle },
  backlog: { label: 'Backlog', hint: '100+ flashcards overdue', tone: 'warn', Icon: Layers },
  'below-target': { label: 'Below target', hint: 'Active time is under the weekly study target for this range', tone: 'bad', Icon: TrendingDown },
  inactive: { label: 'Inactive', hint: 'No study time, flashcard reviews or answered questions in this range', tone: 'muted', Icon: Moon },
}

/** Status badge: icon + label, never color alone. */
export function FlagBadge({ flag }: { flag: Flag }) {
  const m = FLAG_META[flag]
  const tone =
    m.tone === 'warn'
      ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
      : m.tone === 'bad'
        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
        : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
  return (
    <span title={m.hint} className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-semibold ${tone}`}>
      <m.Icon className="w-3 h-3" aria-hidden />
      {m.label}
    </span>
  )
}

/** Honest empty state: nothing recorded yet is not the same as a zero. */
export function NoData({ children }: { children?: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 px-4 py-6 text-center">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{NO_DATA_COPY}.</p>
      {children && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{children}</p>}
    </div>
  )
}
