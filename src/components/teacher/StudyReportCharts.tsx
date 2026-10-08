'use client'

import { useState } from 'react'
import type { ActiveTimeSummary, McatSectionKey, McatTrendPoint, PacingPoint } from '@/lib/student-metrics'
import { fmtDay, fmtDuration } from './StudyReportShared'

/**
 * Hand-built charts for the per-student study report. No chart library: plain
 * flexbox bars and small SVGs.
 *
 * Colors are data colors, not chrome: the validated categorical palette
 * (light / dark steps), assigned to surfaces in fixed order so a surface keeps
 * its color whatever else is on screen. The ninth surface, Other, folds to
 * gray. Marks carry `viz-mark` so the print stylesheet keeps their fill.
 * Every chart has a table view; hover readouts enhance, never gate.
 */

export type SurfaceKey = keyof ActiveTimeSummary['bySurface']

export const SURFACE_META: { key: SurfaceKey; label: string; fill: string }[] = [
  { key: 'LESSON', label: 'Lessons', fill: 'bg-[#2a78d6] dark:bg-[#3987e5]' },
  { key: 'ENTRANCE_QUIZ', label: 'Entrance quizzes', fill: 'bg-[#eb6834] dark:bg-[#d95926]' },
  { key: 'EXIT_QUIZ', label: 'Exit quizzes', fill: 'bg-[#1baf7a] dark:bg-[#199e70]' },
  { key: 'FLASHCARDS', label: 'Flashcards', fill: 'bg-[#eda100] dark:bg-[#c98500]' },
  { key: 'DIAGNOSTIC', label: 'Diagnostics', fill: 'bg-[#e87ba4] dark:bg-[#d55181]' },
  { key: 'PRACTICE_TEST', label: 'Practice tests', fill: 'bg-[#008300] dark:bg-[#008300]' },
  { key: 'FULL_LENGTH', label: 'Full-lengths', fill: 'bg-[#4a3aa7] dark:bg-[#9085e9]' },
  { key: 'COMPETITIVE', label: 'Competitive', fill: 'bg-[#e34948] dark:bg-[#e66767]' },
  { key: 'OTHER', label: 'Other', fill: 'bg-gray-400 dark:bg-gray-500' },
]

/** Single-series data color (categorical slot 1). */
const SERIES_BG = 'bg-[#2a78d6] dark:bg-[#3987e5]'
const SERIES_STROKE = 'stroke-[#2a78d6] dark:stroke-[#3987e5]'
const SERIES_FILL = 'fill-[#2a78d6] dark:fill-[#3987e5]'

const TABLE_TOGGLE =
  'text-xs font-medium text-accent hover:text-accent-hover underline-offset-2 hover:underline print:hidden'

function Swatch({ className }: { className: string }) {
  return <span aria-hidden className={`viz-mark inline-block h-2.5 w-2.5 shrink-0 rounded-sm ${className}`} />
}

/** Clean y-axis step for durations: the smallest step giving ≤ 4 ticks. */
function durationStep(maxSeconds: number): number {
  const steps = [300, 900, 1800, 3600, 7200, 10800, 14400, 21600]
  return steps.find((s) => maxSeconds / s <= 4) ?? 28800
}

/** Every calendar day from `from` to `to` inclusive (YYYY-MM-DD, UTC). */
export function dayList(from: string, to: string): string[] {
  const out: string[] = []
  const end = new Date(`${to}T00:00:00Z`).getTime()
  for (let t = new Date(`${from}T00:00:00Z`).getTime(); t <= end && out.length < 1000; t += 86_400_000) {
    out.push(new Date(t).toISOString().slice(0, 10))
  }
  return out
}

// ─── Active time: daily stacked columns by surface ──────────────────────

export function ActiveTimeChart({ activeTime, days }: { activeTime: ActiveTimeSummary; days: string[] }) {
  const [hover, setHover] = useState<number | null>(null)
  const [showTable, setShowTable] = useState(false)
  const byDay = new Map(activeTime.byDay.map((d) => [d.day, d]))
  const present = SURFACE_META.filter((s) => activeTime.bySurface[s.key] > 0)
  const max = Math.max(1, ...activeTime.byDay.map((d) => d.seconds))
  const step = durationStep(max)
  const top = Math.ceil(max / step) * step
  const ticks = Array.from({ length: Math.round(top / step) + 1 }, (_, i) => i * step)
  const labelEvery = days.length <= 8 ? 1 : days.length <= 16 ? 2 : days.length <= 45 ? 7 : 14
  const hovered = hover == null ? null : days[hover]
  const hoveredDay = hovered ? byDay.get(hovered) : null

  return (
    <div>
      {/* Legend: only surfaces with time, in fixed order. */}
      <ul className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-gray-300">
        {present.map((s) => (
          <li key={s.key} className="inline-flex items-center gap-1.5">
            <Swatch className={s.fill} />
            {s.label}
            <span className="tabular-nums text-gray-400 dark:text-gray-500">{fmtDuration(activeTime.bySurface[s.key])}</span>
          </li>
        ))}
      </ul>

      {/* Readout: the hovered day, else the range total. */}
      <p className="mb-2 min-h-[1.25rem] text-xs text-gray-500 dark:text-gray-400 print:hidden" aria-live="polite">
        {hovered ? (
          <>
            <span className="font-semibold text-gray-900 dark:text-white">{fmtDuration(hoveredDay?.seconds ?? 0)}</span>{' '}
            on {fmtDay(hovered, { weekday: 'short', month: 'short', day: 'numeric' })}
            {hoveredDay &&
              ' — ' +
                SURFACE_META.filter((s) => (hoveredDay.bySurface[s.key] ?? 0) > 0)
                  .map((s) => `${s.label} ${fmtDuration(hoveredDay.bySurface[s.key] ?? 0)}`)
                  .join(', ')}
          </>
        ) : (
          'Hover or focus a day for its breakdown.'
        )}
      </p>

      <div className="flex gap-2 print:hidden">
        {/* y-axis labels */}
        <div className="relative h-40 w-10 shrink-0 text-right text-[10px] tabular-nums text-gray-400 dark:text-gray-500">
          {ticks.map((t) => (
            <span key={t} className="absolute right-0" style={{ bottom: `${(t / top) * 100}%`, transform: 'translateY(50%)' }}>
              {t === 0 ? '0' : fmtDuration(t)}
            </span>
          ))}
        </div>
        <div className="min-w-0 flex-1">
          <div className="relative h-40">
            {ticks.map((t) => (
              <div
                key={t}
                aria-hidden
                className={`absolute inset-x-0 h-px ${t === 0 ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-100 dark:bg-gray-700/60'}`}
                style={{ bottom: `${(t / top) * 100}%` }}
              />
            ))}
            <div className="absolute inset-0 flex items-end gap-[2px]" onMouseLeave={() => setHover(null)}>
              {days.map((day, i) => {
                const d = byDay.get(day)
                const segs = SURFACE_META.filter((s) => (d?.bySurface[s.key] ?? 0) > 0)
                return (
                  <div
                    key={day}
                    tabIndex={0}
                    role="img"
                    aria-label={`${fmtDay(day)}: ${fmtDuration(d?.seconds ?? 0)}`}
                    onMouseEnter={() => setHover(i)}
                    onFocus={() => setHover(i)}
                    onBlur={() => setHover(null)}
                    className={`flex h-full flex-1 cursor-default justify-center outline-none focus-visible:ring-2 focus-visible:ring-accent-ring rounded-sm transition-opacity ${
                      hover != null && hover !== i ? 'opacity-50' : ''
                    }`}
                  >
                    <div
                      className="flex w-full max-w-[24px] flex-col-reverse gap-[2px] self-end"
                      style={{ height: `${((d?.seconds ?? 0) / top) * 100}%` }}
                    >
                      {segs.map((s, j) => (
                        <div
                          key={s.key}
                          className={`viz-mark min-h-[1px] ${s.fill} ${j === segs.length - 1 ? 'rounded-t' : ''}`}
                          style={{ flexGrow: d?.bySurface[s.key] ?? 0, flexBasis: 0 }}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* x-axis labels */}
          <div className="mt-1 flex gap-[2px] text-[10px] tabular-nums text-gray-400 dark:text-gray-500">
            {days.map((day, i) => (
              <span key={day} className="flex-1 overflow-visible whitespace-nowrap text-center">
                {i % labelEvery === 0 ? fmtDay(day, days.length <= 8 ? { weekday: 'short' } : { month: 'numeric', day: 'numeric' }) : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button type="button" className={`mt-3 ${TABLE_TOGGLE}`} onClick={() => setShowTable((v) => !v)} aria-expanded={showTable}>
        {showTable ? 'Hide table' : 'Show as table'}
      </button>
      <div className={`${showTable ? 'block' : 'hidden'} print:block mt-2 overflow-x-auto`}>
        <table className="w-full text-xs tabular-nums">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400">
              <th className="py-1.5 pr-3 font-medium">Day</th>
              <th className="py-1.5 pr-3 font-medium text-right">Total</th>
              {present.map((s) => (
                <th key={s.key} className="py-1.5 pr-3 font-medium text-right">{s.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activeTime.byDay.map((d) => (
              <tr key={d.day} className="border-b border-gray-100 dark:border-gray-700/50 text-gray-700 dark:text-gray-300">
                <td className="py-1.5 pr-3">{fmtDay(d.day, { weekday: 'short', month: 'short', day: 'numeric' })}</td>
                <td className="py-1.5 pr-3 text-right font-semibold text-gray-900 dark:text-white">{fmtDuration(d.seconds)}</td>
                {present.map((s) => (
                  <td key={s.key} className="py-1.5 pr-3 text-right">{d.bySurface[s.key] ? fmtDuration(d.bySurface[s.key]!) : '—'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Horizontal bars (rating distribution, surface totals) ──────────────

export function HBarList({ rows }: { rows: { label: string; value: number; display: string }[] }) {
  const max = Math.max(1, ...rows.map((r) => r.value))
  return (
    <ul className="space-y-2">
      {rows.map((r) => (
        <li key={r.label} className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-3 text-sm">
          <span className="text-gray-600 dark:text-gray-300">{r.label}</span>
          <span className="h-3 min-w-0">
            <span
              className={`viz-mark block h-full rounded-r ${SERIES_BG}`}
              style={{ width: `${(r.value / max) * 100}%`, minWidth: r.value > 0 ? 2 : 0 }}
            />
          </span>
          <span className="text-right text-xs tabular-nums text-gray-700 dark:text-gray-200">{r.display}</span>
        </li>
      ))}
    </ul>
  )
}

// ─── Meter (weekly targets) ─────────────────────────────────────────────

export function Meter({ value, target, label }: { value: number; target: number; label: string }) {
  const pct = Math.max(0, Math.min(1, target > 0 ? value / target : 0))
  return (
    <div
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={target}
      aria-valuenow={Math.round(value * 10) / 10}
      className="viz-mark mt-2 h-2 w-full overflow-hidden rounded-full bg-[#cde2fb] dark:bg-[#104281]"
    >
      <div className={`viz-mark h-full rounded-full ${SERIES_BG}`} style={{ width: `${pct * 100}%` }} />
    </div>
  )
}

// ─── MCAT: section-score small multiples ────────────────────────────────

export const MCAT_SERIES: { key: McatSectionKey | 'total'; label: string; lo: number; hi: number; ticks: number[] }[] = [
  { key: 'C/P', label: 'Chem/Phys (C/P)', lo: 118, hi: 132, ticks: [118, 125, 132] },
  { key: 'CARS', label: 'CARS', lo: 118, hi: 132, ticks: [118, 125, 132] },
  { key: 'B/B', label: 'Bio/Biochem (B/B)', lo: 118, hi: 132, ticks: [118, 125, 132] },
  { key: 'P/S', label: 'Psych/Soc (P/S)', lo: 118, hi: 132, ticks: [118, 125, 132] },
  { key: 'total', label: 'Total', lo: 472, hi: 528, ticks: [472, 500, 528] },
]

export const KIND_LABEL: Record<McatTrendPoint['kind'], string> = {
  diagnostic: 'Diagnostic',
  'class-diagnostic': 'Class diagnostic',
  'full-length': 'Full-length',
  external: 'AAMC full-length (entered)',
}

const trendValue = (p: McatTrendPoint, key: McatSectionKey | 'total') => (key === 'total' ? p.total : p.sections[key]) ?? null

/** Marker shape encodes the kind of test: circle, square, diamond, hollow diamond (entered by hand). */
function KindMarker({ kind, x, y, r = 4 }: { kind: McatTrendPoint['kind']; x: number; y: number; r?: number }) {
  const cls = `${SERIES_FILL} stroke-white dark:stroke-gray-800`
  if (kind === 'class-diagnostic') return <rect x={x - r} y={y - r} width={r * 2} height={r * 2} className={cls} strokeWidth={2} />
  if (kind === 'full-length' || kind === 'external') {
    const d = r * 1.3
    const path = `M${x} ${y - d}L${x + d} ${y}L${x} ${y + d}L${x - d} ${y}Z`
    if (kind === 'external') return <path d={path} className={`${SERIES_STROKE} fill-white dark:fill-gray-800`} strokeWidth={2} />
    return <path d={path} className={cls} strokeWidth={2} />
  }
  return <circle cx={x} cy={y} r={r} className={cls} strokeWidth={2} />
}

export function KindLegend({ kinds }: { kinds: McatTrendPoint['kind'][] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-gray-300">
      {kinds.map((k) => (
        <li key={k} className="inline-flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="viz-mark">
            <KindMarker kind={k} x={7} y={7} r={4} />
          </svg>
          {KIND_LABEL[k]}
        </li>
      ))}
    </ul>
  )
}

const W = 300
const H = 120
const PAD = { l: 30, r: 34, t: 10, b: 20 }

function ScoreMultiple({
  points, series, hover, setHover, focusable,
}: {
  points: McatTrendPoint[]
  series: (typeof MCAT_SERIES)[number]
  hover: number | null
  setHover: (i: number | null) => void
  focusable: boolean
}) {
  const n = points.length
  const x = (i: number) => (n <= 1 ? (PAD.l + W - PAD.r) / 2 : PAD.l + (i * (W - PAD.l - PAD.r)) / (n - 1))
  const y = (v: number) => PAD.t + ((series.hi - v) * (H - PAD.t - PAD.b)) / (series.hi - series.lo)
  const present = points.map((p, i) => ({ i, p, v: trendValue(p, series.key) })).filter((d) => d.v != null) as {
    i: number; p: McatTrendPoint; v: number
  }[]
  const last = present[present.length - 1]
  const path = present.map((d, j) => `${j ? 'L' : 'M'}${x(d.i)} ${y(d.v)}`).join('')
  const band = n <= 1 ? W - PAD.l - PAD.r : (W - PAD.l - PAD.r) / (n - 1)

  return (
    <figure className="min-w-0">
      <figcaption className="mb-1 flex items-baseline justify-between gap-2 text-xs">
        <span className="font-semibold text-gray-800 dark:text-gray-200">{series.label}</span>
        <span className="text-gray-400 dark:text-gray-500 tabular-nums">{series.lo}–{series.hi}</span>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto overflow-visible" role="img" aria-label={`${series.label} by test`} onMouseLeave={() => setHover(null)}>
        {series.ticks.map((t) => (
          <g key={t}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} className="stroke-gray-200 dark:stroke-gray-700" strokeWidth={1} />
            <text x={PAD.l - 4} y={y(t)} dy="0.32em" textAnchor="end" className="fill-gray-400 dark:fill-gray-500 tabular-nums" fontSize={9}>
              {t}
            </text>
          </g>
        ))}
        {hover != null && hover < n && (
          <line x1={x(hover)} x2={x(hover)} y1={PAD.t} y2={H - PAD.b} className="stroke-gray-400 dark:stroke-gray-500" strokeWidth={1} />
        )}
        {present.length > 1 && (
          <path d={path} fill="none" className={SERIES_STROKE} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        )}
        {present.map((d) => (
          <KindMarker key={d.i} kind={d.p.kind} x={x(d.i)} y={y(d.v)} r={hover === d.i ? 5 : 4} />
        ))}
        {last && (
          <text x={x(last.i) + 8} y={y(last.v)} dy="0.32em" className="fill-gray-700 dark:fill-gray-200 tabular-nums" fontSize={10} fontWeight={600}>
            {last.v}
          </text>
        )}
        {n > 0 && (
          <>
            <text x={x(0)} y={H - 5} textAnchor={n > 1 ? 'start' : 'middle'} className="fill-gray-400 dark:fill-gray-500" fontSize={9}>
              {fmtDay(points[0].at)}
            </text>
            {n > 1 && (
              <text x={x(n - 1)} y={H - 5} textAnchor="end" className="fill-gray-400 dark:fill-gray-500" fontSize={9}>
                {fmtDay(points[n - 1].at)}
              </text>
            )}
          </>
        )}
        {/* Hit targets: a full-height band per test, wider than any mark. */}
        {points.map((p, i) => (
          <rect
            key={i}
            x={x(i) - band / 2}
            y={0}
            width={Math.max(24, band)}
            height={H}
            fill="transparent"
            tabIndex={focusable ? 0 : undefined}
            aria-label={focusable ? `${fmtDay(p.at)} ${KIND_LABEL[p.kind]}` : undefined}
            onMouseEnter={() => setHover(i)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            className="outline-none"
          />
        ))}
      </svg>
    </figure>
  )
}

export function McatTrendChart({ trend }: { trend: McatTrendPoint[] }) {
  const [hover, setHover] = useState<number | null>(null)
  const [showTable, setShowTable] = useState(false)
  const shown = hover ?? trend.length - 1
  const p = trend[shown]
  const kinds = (['diagnostic', 'class-diagnostic', 'full-length', 'external'] as const).filter((k) => trend.some((t) => t.kind === k))

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <KindLegend kinds={[...kinds]} />
        <span className="text-[11px] text-gray-400 dark:text-gray-500">One point per test, oldest to newest</span>
      </div>
      {p && (
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400 tabular-nums print:hidden" aria-live="polite">
          <span className="font-semibold text-gray-900 dark:text-white">{fmtDay(p.at, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          {' · '}{KIND_LABEL[p.kind]}{hover == null ? ' (latest)' : ''} —{' '}
          {MCAT_SERIES.map((s) => `${s.key === 'total' ? 'Total' : s.key} ${trendValue(p, s.key) ?? '—'}`).join(' · ')}
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 print:hidden">
        {MCAT_SERIES.map((s) => (
          <ScoreMultiple key={s.key} points={trend} series={s} hover={hover} setHover={setHover} focusable={s.key === 'total'} />
        ))}
      </div>
      <button type="button" className={`mt-3 ${TABLE_TOGGLE}`} onClick={() => setShowTable((v) => !v)} aria-expanded={showTable}>
        {showTable ? 'Hide table' : 'Show as table'}
      </button>
      <div className={`${showTable ? 'block' : 'hidden'} print:block mt-2 overflow-x-auto`}>
        <table className="w-full text-xs tabular-nums">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400">
              <th className="py-1.5 pr-3 font-medium">Date</th>
              <th className="py-1.5 pr-3 font-medium">Test</th>
              {MCAT_SERIES.map((s) => (
                <th key={s.key} className="py-1.5 pr-3 font-medium text-right">{s.key === 'total' ? 'Total' : s.key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trend.map((t, i) => (
              <tr key={i} className="border-b border-gray-100 dark:border-gray-700/50 text-gray-700 dark:text-gray-300">
                <td className="py-1.5 pr-3">{fmtDay(t.at, { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                <td className="py-1.5 pr-3">{KIND_LABEL[t.kind]}</td>
                {MCAT_SERIES.map((s) => (
                  <td key={s.key} className={`py-1.5 pr-3 text-right ${s.key === 'total' ? 'font-semibold text-gray-900 dark:text-white' : ''}`}>
                    {trendValue(t, s.key) ?? '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── MCAT: pacing against exam pace ─────────────────────────────────────

const PACING_ORDER = ['C/P', 'CARS', 'B/B', 'P/S']

export function summarizePacing(points: PacingPoint[]) {
  const by = new Map<string, { label: string; sum: number; n: number; latest: PacingPoint }>()
  for (const p of points) {
    const g = by.get(p.label) ?? { label: p.label, sum: 0, n: 0, latest: p }
    g.sum += p.secondsPerQuestion
    g.n++
    if (p.at >= g.latest.at) g.latest = p
    by.set(p.label, g)
  }
  const rank = (l: string) => (PACING_ORDER.indexOf(l) === -1 ? 99 : PACING_ORDER.indexOf(l))
  return [...by.values()]
    .map((g) => ({ label: g.label, avg: Math.round(g.sum / g.n), n: g.n, latest: g.latest.secondsPerQuestion }))
    .sort((a, b) => rank(a.label) - rank(b.label) || a.label.localeCompare(b.label))
}

export function PacingChart({ points, examPace }: { points: PacingPoint[]; examPace: number }) {
  const [showTable, setShowTable] = useState(false)
  const rows = summarizePacing(points)
  const max = Math.max(examPace, ...rows.map((r) => r.avg)) * 1.15
  const refPct = (examPace / max) * 100

  return (
    <div>
      <div className="grid grid-cols-[4.5rem_1fr] gap-3 text-sm">
        <span />
        <div className="relative h-4 text-[10px] text-gray-500 dark:text-gray-400">
          <span className="absolute -translate-x-1/2 whitespace-nowrap" style={{ left: `${refPct}%` }}>
            Exam pace {examPace} s
          </span>
        </div>
      </div>
      <ul className="space-y-2">
        {rows.map((r) => {
          const delta = r.avg - examPace
          return (
            <li key={r.label} className="grid grid-cols-[4.5rem_1fr] items-center gap-3 text-sm" title={`${r.label}: ${r.avg} s per question on average over ${r.n} timed ${r.n === 1 ? 'set' : 'sets'} (latest ${r.latest} s)`}>
              <span className="truncate text-gray-600 dark:text-gray-300">{r.label}</span>
              <div className="relative flex h-5 items-center">
                <span aria-hidden className="viz-mark absolute inset-y-[-4px] w-px bg-gray-500 dark:bg-gray-400" style={{ left: `${refPct}%` }} />
                <span className={`viz-mark block h-3 rounded-r ${SERIES_BG}`} style={{ width: `${(r.avg / max) * 100}%` }} />
                <span className="ml-2 whitespace-nowrap text-xs tabular-nums text-gray-700 dark:text-gray-200">
                  {r.avg} s
                  <span className="text-gray-400 dark:text-gray-500"> ({delta > 0 ? '+' : ''}{delta} s)</span>
                </span>
              </div>
            </li>
          )
        })}
      </ul>
      <p className="mt-2 text-[11px] text-gray-400 dark:text-gray-500">
        Average seconds per question by section across timed full-lengths and section practice. Longer bars are slower than exam pace.
      </p>
      <button type="button" className={`mt-2 ${TABLE_TOGGLE}`} onClick={() => setShowTable((v) => !v)} aria-expanded={showTable}>
        {showTable ? 'Hide table' : 'Show as table'}
      </button>
      <div className={`${showTable ? 'block' : 'hidden'} print:block mt-2 overflow-x-auto`}>
        <table className="w-full text-xs tabular-nums">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-gray-500 dark:text-gray-400">
              <th className="py-1.5 pr-3 font-medium">Date</th>
              <th className="py-1.5 pr-3 font-medium">Source</th>
              <th className="py-1.5 pr-3 font-medium">Section</th>
              <th className="py-1.5 pr-3 font-medium text-right">Seconds / question</th>
            </tr>
          </thead>
          <tbody>
            {points.map((p, i) => (
              <tr key={i} className="border-b border-gray-100 dark:border-gray-700/50 text-gray-700 dark:text-gray-300">
                <td className="py-1.5 pr-3">{fmtDay(p.at, { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                <td className="py-1.5 pr-3">{p.kind === 'full-length' ? 'Full-length' : 'Section practice'}</td>
                <td className="py-1.5 pr-3">{p.label}</td>
                <td className="py-1.5 pr-3 text-right">{p.secondsPerQuestion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
