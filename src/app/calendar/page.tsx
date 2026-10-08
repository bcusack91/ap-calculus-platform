'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  ListChecks,
  NotebookPen,
  Plus,
  RotateCcw,
  Trash2,
  X,
} from 'lucide-react'
import type { CalendarCycle, CalendarEvent, CalendarEventKind } from '@/lib/calendar-types'
import FullLengthProgress from '@/components/FullLengthProgress'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'

/* ── dates (all "days" are local YYYY-MM-DD strings) ─────────────────── */

const pad = (n: number) => String(n).padStart(2, '0')
const localYmd = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const fromYmd = (s: string) => {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}
const dayOf = (e: CalendarEvent): string => e.date ?? (e.at ? localYmd(new Date(e.at)) : '')
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const fmtLong = (s: string) => fromYmd(s).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
const fmtShort = (s: string) => fromYmd(s).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })

/** The visible grid for a month: whole weeks, Sunday first. */
function monthGrid(year: number, month: number): string[] {
  const first = new Date(year, month, 1)
  const start = new Date(year, month, 1 - first.getDay())
  const last = new Date(year, month + 1, 0)
  const end = new Date(year, month + 1, 0 + (6 - last.getDay()))
  const days: string[] = []
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) days.push(localYmd(d))
  return days
}

/* ── kinds ──────────────────────────────────────────────────────────── */

const KIND: Record<CalendarEventKind, { label: string; chip: string; dot: string; Icon: typeof BookOpen }> = {
  lesson: { label: 'Lesson', chip: 'bg-accent-subtle text-accent dark:bg-accent-light/20 dark:text-accent-muted', dot: 'bg-accent', Icon: BookOpen },
  'unit-test': { label: 'Unit test', chip: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300', dot: 'bg-amber-500', Icon: ClipboardCheck },
  diagnostic: { label: 'Diagnostic', chip: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300', dot: 'bg-emerald-500', Icon: NotebookPen },
  'class-diagnostic': { label: 'Class diagnostic', chip: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300', dot: 'bg-emerald-500', Icon: NotebookPen },
  assignment: { label: 'Assignment', chip: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300', dot: 'bg-rose-500', Icon: ClipboardList },
  task: { label: 'Your task', chip: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200', dot: 'bg-gray-400', Icon: ListChecks },
}

const BTN = 'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring'
const BTN_PRIMARY = `${BTN} bg-accent text-white hover:bg-accent-hover`
const BTN_QUIET = `${BTN} border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700`
const INPUT = 'rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-ring dark:border-gray-600 dark:bg-gray-700 dark:text-white'

type Panel = { kind: 'day'; date: string } | { kind: 'event'; id: string } | null

/* ── page ───────────────────────────────────────────────────────────── */

export default function CalendarPage() {
  const { status } = useSession()
  const today = localYmd(new Date())
  const [cursor, setCursor] = useState(() => ({ y: new Date().getFullYear(), m: new Date().getMonth() }))
  const [view, setView] = useState<'month' | 'list'>('month')
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [cycles, setCycles] = useState<CalendarCycle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [panel, setPanel] = useState<Panel>(null)
  const [adding, setAdding] = useState<{ date: string; title: string } | null>(null)
  const syncedRef = useRef(false)

  const days = useMemo(() => monthGrid(cursor.y, cursor.m), [cursor])
  const range = useMemo(() => ({ from: days[0], to: days[days.length - 1] }), [days])

  // Phones get the list by default: a 7-column month is cramped under ~640px.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) setView('list')
  }, [])

  const load = useCallback(async () => {
    setError(null)
    try {
      const sync = syncedRef.current ? '' : '&sync=1'
      const res = await fetch(`/api/calendar?from=${range.from}&to=${range.to}${sync}`, { cache: 'no-store' })
      if (!res.ok) throw new Error('Could not load your calendar.')
      const d = await res.json()
      syncedRef.current = true
      setEvents(d.events ?? [])
      setCycles(d.cycles ?? [])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load your calendar.')
    } finally {
      setLoading(false)
    }
  }, [range])

  useEffect(() => {
    if (status !== 'authenticated') return
    let active = true
    setLoading(true)
    load().then(() => { if (!active) return })
    return () => { active = false }
  }, [status, load])

  const byDay = useMemo(() => {
    const m = new Map<string, CalendarEvent[]>()
    for (const e of events) {
      const d = dayOf(e)
      if (!d) continue
      m.set(d, [...(m.get(d) ?? []), e])
    }
    return m
  }, [events])

  /* ── task actions ── */
  const patchTask = async (taskId: string, body: Record<string, unknown>) => {
    const res = await fetch('/api/study-plans/tasks', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: taskId, ...body }) })
    if (!res.ok) throw new Error('Could not save that change.')
  }
  const toggleDone = async (e: CalendarEvent) => {
    if (!e.taskId) return
    const next = !e.completed
    setEvents((evs) => evs.map((x) => (x.id === e.id ? { ...x, completed: next, overdue: !next && x.overdue } : x)))
    try {
      await patchTask(e.taskId, { completed: next })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save that change.')
      void load()
    }
  }
  const moveTo = async (e: CalendarEvent, date: string) => {
    if (!e.taskId || !date) return
    setEvents((evs) => evs.map((x) => (x.id === e.id ? { ...x, date, overdue: !x.completed && date < today } : x)))
    try {
      await patchTask(e.taskId, { dueDate: `${date}T12:00:00.000Z` })
      if (date < range.from || date > range.to) void load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not move that task.')
      void load()
    }
  }
  const removeTask = async (e: CalendarEvent) => {
    if (!e.taskId || e.auto) return
    setEvents((evs) => evs.filter((x) => x.id !== e.id))
    setPanel(null)
    await fetch(`/api/study-plans/tasks?id=${e.taskId}`, { method: 'DELETE' }).catch(() => {})
  }
  const addTask = async () => {
    if (!adding?.title.trim()) return
    const res = await fetch('/api/calendar/tasks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: adding.title.trim(), date: adding.date }) })
    if (!res.ok) {
      setError('Could not add the task.')
      return
    }
    setAdding(null)
    void load()
  }
  const setTarget = async (course: CalendarCycle['course'], date: string | null) => {
    setError(null)
    const res = await fetch('/api/calendar/target', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ course, date }) })
    const body = await res.json().catch(() => ({}))
    if (!res.ok) {
      setError(body.error || 'Could not save the target date.')
      return
    }
    void load()
  }

  const selectedEvent = panel?.kind === 'event' ? events.find((e) => e.id === panel.id) ?? null : null
  const monthLabel = new Date(cursor.y, cursor.m, 1).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
  const goMonth = (delta: number) => {
    const d = new Date(cursor.y, cursor.m + delta, 1)
    setCursor({ y: d.getFullYear(), m: d.getMonth() })
    setPanel(null)
  }

  if (status === 'unauthenticated') {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-gray-700 dark:text-gray-300">Sign in to see your study calendar.</p>
        <Link href="/auth/signin?callbackUrl=/calendar" className={`${BTN_PRIMARY} mt-4`}>Sign in</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            <CalendarDays className="h-7 w-7 text-accent" aria-hidden />
            Study calendar
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Your lessons, unit tests and diagnostics, spaced out to your next due date. Move anything to another day.
            <HelpLink article={HELP_ARTICLES.studyCalendar} label="How the calendar schedules your work" className="ml-1" />
          </p>
        </div>
        <Link href="/dashboard?tab=practice" className="text-sm font-medium text-accent hover:underline">Study planner →</Link>
      </header>

      {/* ── cycle targets ── */}
      {cycles.length > 0 && (
        <div className="mb-6 grid gap-3 md:grid-cols-2">
          {cycles.map((c) => (
            <CycleCard key={c.course} cycle={c} today={today} onSetTarget={(date) => setTarget(c.course, date)} />
          ))}
        </div>
      )}

      {error && (
        <p role="alert" className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
          {error}
        </p>
      )}

      {/* ── toolbar ── */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => goMonth(-1)} className={BTN_QUIET} aria-label="Previous month"><ChevronLeft className="h-4 w-4" aria-hidden /></button>
          <h2 className="min-w-[11rem] px-2 text-center text-lg font-semibold text-gray-900 dark:text-white" aria-live="polite">{monthLabel}</h2>
          <button type="button" onClick={() => goMonth(1)} className={BTN_QUIET} aria-label="Next month"><ChevronRight className="h-4 w-4" aria-hidden /></button>
          <button type="button" onClick={() => { const d = new Date(); setCursor({ y: d.getFullYear(), m: d.getMonth() }); setPanel({ kind: 'day', date: today }) }} className={`${BTN_QUIET} ml-1`}>Today</button>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setAdding({ date: today, title: '' })} className={BTN_QUIET}><Plus className="h-4 w-4" aria-hidden /> Add task</button>
          <div className="inline-flex overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600" role="group" aria-label="View">
            {(['month', 'list'] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                aria-pressed={view === v}
                className={`px-3 py-1.5 text-sm font-medium ${view === v ? 'bg-accent text-white' : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'}`}
              >
                {v === 'month' ? 'Month' : 'List'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {adding && (
        <form
          onSubmit={(e) => { e.preventDefault(); void addTask() }}
          className="mb-4 flex flex-wrap items-end gap-2 rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800"
        >
          <label className="flex-1 min-w-[12rem] text-xs font-semibold text-gray-700 dark:text-gray-300">
            Task
            <input autoFocus value={adding.title} onChange={(e) => setAdding({ ...adding, title: e.target.value })} maxLength={120} placeholder="Read chapter 4, review flashcards…" className={`mt-1 w-full ${INPUT}`} />
          </label>
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Date
            <input type="date" value={adding.date} onChange={(e) => setAdding({ ...adding, date: e.target.value })} className={`mt-1 block ${INPUT}`} />
          </label>
          <button type="submit" className={BTN_PRIMARY}>Add</button>
          <button type="button" onClick={() => setAdding(null)} className={BTN_QUIET}>Cancel</button>
        </form>
      )}

      <div className="grid gap-4 lg:grid-cols-[1fr_20rem]">
        <div className="min-w-0">
          {loading && events.length === 0 ? (
            <div className="h-96 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700" aria-busy="true" />
          ) : view === 'month' ? (
            <MonthGrid days={days} month={cursor.m} today={today} byDay={byDay} onDay={(d) => setPanel({ kind: 'day', date: d })} onEvent={(e) => setPanel({ kind: 'event', id: e.id })} />
          ) : (
            <ListView days={days.filter((d) => fromYmd(d).getMonth() === cursor.m)} today={today} byDay={byDay} onEvent={(e) => setPanel({ kind: 'event', id: e.id })} />
          )}
          <Legend />
        </div>

        <aside className="min-w-0">
          {selectedEvent ? (
            <EventPanel event={selectedEvent} today={today} onClose={() => setPanel(null)} onToggleDone={toggleDone} onMove={moveTo} onRemove={removeTask} />
          ) : panel?.kind === 'day' ? (
            <DayPanel date={panel.date} events={byDay.get(panel.date) ?? []} onClose={() => setPanel(null)} onEvent={(e) => setPanel({ kind: 'event', id: e.id })} onAdd={() => setAdding({ date: panel.date, title: '' })} />
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 p-4 text-sm text-gray-500 dark:border-gray-600 dark:text-gray-400">
              Click a day or an item to see details, mark it done, or move it.
            </div>
          )}
          {cycles.filter((c) => c.hasDiagnostic).map((c) => (
            <FullLengthProgress key={c.course} course={c.course} compact className="mt-4" />
          ))}
        </aside>
      </div>
    </div>
  )
}

/* ── pieces ─────────────────────────────────────────────────────────── */

function CycleCard({ cycle, today, onSetTarget }: { cycle: CalendarCycle; today: string; onSetTarget: (date: string | null) => void }) {
  const [date, setDate] = useState('')
  const due = cycle.dueDate ? localYmd(new Date(cycle.dueDate)) : null
  const left = cycle.pending
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800" aria-label={`${cycle.label} cycle`}>
      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{cycle.label} study cycle</p>
      {!cycle.hasDiagnostic ? (
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
          Take the {cycle.label} diagnostic first — it picks the lessons that get scheduled.{' '}
          <Link href={`/${cycle.course}-diagnostic`} className="font-medium text-accent hover:underline">Take it →</Link>
        </p>
      ) : due && cycle.source === 'class' ? (
        <>
          <p className="mt-1 font-semibold text-gray-900 dark:text-white">Next diagnostic due {fmtLong(due)}</p>
          <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
            Set by your teacher{cycle.classroomName ? ` (${cycle.classroomName})` : ''}. {left === 0 ? 'Everything is scheduled and done.' : `${left} item${left === 1 ? '' : 's'} spaced out until then.`}
          </p>
        </>
      ) : due && cycle.source === 'self' ? (
        <>
          <p className="mt-1 font-semibold text-gray-900 dark:text-white">Your target: next diagnostic by {fmtLong(due)}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <input type="date" aria-label={`New ${cycle.label} target date`} min={today} value={date} onChange={(e) => setDate(e.target.value)} className={INPUT} />
            <button type="button" disabled={!date} onClick={() => { onSetTarget(date); setDate('') }} className={`${BTN_PRIMARY} disabled:opacity-50`}>Reschedule</button>
            <button type="button" onClick={() => onSetTarget(null)} className={BTN_QUIET}>Clear target</button>
          </div>
        </>
      ) : (
        <>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            When do you want to take your next {cycle.label} diagnostic? Your remaining lessons get spread out evenly until then.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <input type="date" aria-label={`${cycle.label} target date`} min={today} value={date} onChange={(e) => setDate(e.target.value)} className={INPUT} />
            <button type="button" disabled={!date} onClick={() => { onSetTarget(date); setDate('') }} className={`${BTN_PRIMARY} disabled:opacity-50`}>Schedule my lessons</button>
          </div>
        </>
      )}
    </section>
  )
}

function Chip({ e, onClick }: { e: CalendarEvent; onClick: () => void }) {
  const k = KIND[e.kind]
  return (
    <button
      type="button"
      onClick={onClick}
      title={e.title}
      aria-label={`${e.title}, ${k.label}${e.completed ? ', done' : e.overdue ? ', overdue' : ''}`}
      className={`flex w-full items-center gap-1 truncate rounded px-1.5 py-0.5 text-left text-[11px] font-medium leading-4 ${k.chip} ${e.completed ? 'line-through opacity-60' : ''} ${e.overdue ? 'ring-1 ring-red-400' : ''} hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${k.dot}`} aria-hidden />
      <span className="truncate">{e.title}</span>
    </button>
  )
}

function MonthGrid({ days, month, today, byDay, onDay, onEvent }: {
  days: string[]; month: number; today: string; byDay: Map<string, CalendarEvent[]>
  onDay: (d: string) => void; onEvent: (e: CalendarEvent) => void
}) {
  const weeks: string[][] = []
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7))
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <table className="w-full min-w-[40rem] table-fixed border-collapse">
        <thead>
          <tr>
            {WEEKDAYS.map((w) => (
              <th key={w} scope="col" className="border-b border-gray-200 py-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:text-gray-400">{w}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>
              {week.map((d) => {
                const inMonth = fromYmd(d).getMonth() === month
                const list = byDay.get(d) ?? []
                const shown = list.slice(0, 3)
                const isToday = d === today
                return (
                  <td key={d} className={`h-28 w-[14.28%] border-b border-r border-gray-100 p-1 align-top last:border-r-0 dark:border-gray-700/60 ${inMonth ? '' : 'bg-gray-50/60 dark:bg-gray-900/30'}`}>
                    <button
                      type="button"
                      onClick={() => onDay(d)}
                      aria-label={`${fmtLong(d)}${list.length ? `, ${list.length} item${list.length === 1 ? '' : 's'}` : ''}`}
                      className={`mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${isToday ? 'bg-accent text-white' : inMonth ? 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700' : 'text-gray-400 dark:text-gray-500'}`}
                    >
                      {fromYmd(d).getDate()}
                    </button>
                    <div className="space-y-0.5">
                      {shown.map((e) => <Chip key={e.id} e={e} onClick={() => onEvent(e)} />)}
                      {list.length > shown.length && (
                        <button type="button" onClick={() => onDay(d)} className="px-1.5 text-[11px] font-medium text-gray-500 hover:underline dark:text-gray-400">
                          +{list.length - shown.length} more
                        </button>
                      )}
                    </div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ListView({ days, today, byDay, onEvent }: { days: string[]; today: string; byDay: Map<string, CalendarEvent[]>; onEvent: (e: CalendarEvent) => void }) {
  const withEvents = days.filter((d) => (byDay.get(d) ?? []).length > 0)
  if (withEvents.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
        Nothing scheduled this month. Set a target date above, or add a task.
      </div>
    )
  }
  return (
    <div className="space-y-3">
      {withEvents.map((d) => (
        <section key={d} className="rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800" aria-label={fmtLong(d)}>
          <h3 className={`mb-2 text-sm font-semibold ${d === today ? 'text-accent' : d < today ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
            {d === today ? 'Today · ' : ''}{fmtLong(d)}
          </h3>
          <ul className="space-y-1">
            {(byDay.get(d) ?? []).map((e) => {
              const k = KIND[e.kind]
              return (
                <li key={e.id}>
                  <button
                    type="button"
                    onClick={() => onEvent(e)}
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:hover:bg-gray-700/40"
                  >
                    <span className={`h-2 w-2 shrink-0 rounded-full ${k.dot}`} aria-hidden />
                    <span className={`min-w-0 flex-1 truncate ${e.completed ? 'text-gray-400 line-through' : 'text-gray-900 dark:text-white'}`}>{e.title}</span>
                    <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">{k.label}</span>
                    {e.completed && <Check className="h-4 w-4 shrink-0 text-green-600" aria-label="done" />}
                    {e.overdue && <span className="shrink-0 text-xs font-semibold text-red-600 dark:text-red-400">overdue</span>}
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}

function Legend() {
  return (
    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400" aria-label="Legend">
      {(Object.keys(KIND) as CalendarEventKind[]).filter((k) => k !== 'class-diagnostic').map((k) => (
        <li key={k} className="inline-flex items-center gap-1.5"><span className={`h-2 w-2 rounded-full ${KIND[k].dot}`} aria-hidden />{KIND[k].label}</li>
      ))}
    </ul>
  )
}

function PanelShell({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  // Opened by a click far away in the grid: bring the keyboard along.
  const headingRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    headingRef.current?.focus()
  }, [title])
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800" aria-label={title}>
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 ref={headingRef} tabIndex={-1} className="text-base font-bold text-gray-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring rounded">{title}</h3>
        <button type="button" onClick={onClose} aria-label="Close" className="rounded-md p-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-400 dark:hover:bg-gray-700">
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
      {children}
    </section>
  )
}

function DayPanel({ date, events, onClose, onEvent, onAdd }: { date: string; events: CalendarEvent[]; onClose: () => void; onEvent: (e: CalendarEvent) => void; onAdd: () => void }) {
  return (
    <PanelShell title={fmtLong(date)} onClose={onClose}>
      {events.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">Nothing on this day.</p>
      ) : (
        <ul className="space-y-1">
          {events.map((e) => (
            <li key={e.id}><Chip e={e} onClick={() => onEvent(e)} /></li>
          ))}
        </ul>
      )}
      <button type="button" onClick={onAdd} className={`${BTN_QUIET} mt-3`}><Plus className="h-4 w-4" aria-hidden /> Add a task here</button>
    </PanelShell>
  )
}

function EventPanel({ event: e, today, onClose, onToggleDone, onMove, onRemove }: {
  event: CalendarEvent; today: string; onClose: () => void
  onToggleDone: (e: CalendarEvent) => void; onMove: (e: CalendarEvent, date: string) => void; onRemove: (e: CalendarEvent) => void
}) {
  const k = KIND[e.kind]
  const day = dayOf(e)
  const [moveDate, setMoveDate] = useState(day)
  const movedFromSuggested = e.auto && e.autoDate && e.autoDate !== day
  const deadline = e.kind === 'class-diagnostic' || e.kind === 'assignment'
  return (
    <PanelShell title={e.title} onClose={onClose}>
      <p className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${k.chip}`}><k.Icon className="h-3.5 w-3.5" aria-hidden />{k.label}</span>
        {e.course && <span className="uppercase">{e.course}</span>}
        {e.planTitle && e.kind === 'task' && <span>· {e.planTitle}</span>}
      </p>
      <p className="mt-2 text-sm text-gray-900 dark:text-white">
        {deadline ? 'Due end of day ' : ''}{fmtLong(day)}
        {e.completed && <span className="ml-2 text-green-700 dark:text-green-400">· done</span>}
        {e.overdue && <span className="ml-2 font-semibold text-red-600 dark:text-red-400">· overdue</span>}
      </p>
      {movedFromSuggested && e.autoDate && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Suggested date was {fmtShort(e.autoDate)}.</p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {e.href && (
          <Link href={e.href} className={BTN_PRIMARY}>
            {e.kind === 'lesson' ? 'Open lesson' : e.kind === 'unit-test' ? 'Open unit test' : e.kind === 'diagnostic' || e.kind === 'class-diagnostic' ? 'Open diagnostic' : e.kind === 'assignment' ? 'See assignments' : 'Open'}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
        {e.taskId && (
          <button type="button" onClick={() => onToggleDone(e)} className={BTN_QUIET}>
            <Check className="h-4 w-4" aria-hidden /> {e.completed ? 'Mark not done' : 'Mark done'}
          </button>
        )}
      </div>
      {e.taskId && (
        <div className="mt-4 border-t border-gray-200 pt-3 dark:border-gray-700">
          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            Move to
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <input type="date" value={moveDate} onChange={(ev) => setMoveDate(ev.target.value)} className={INPUT} />
              <button type="button" disabled={!moveDate || moveDate === day} onClick={() => onMove(e, moveDate)} className={`${BTN_PRIMARY} disabled:opacity-50`}>Move</button>
            </div>
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {day !== today && (
              <button type="button" onClick={() => onMove(e, today)} className={BTN_QUIET}>Move to today</button>
            )}
            {movedFromSuggested && e.autoDate && (
              <button type="button" onClick={() => onMove(e, e.autoDate!)} className={BTN_QUIET}><RotateCcw className="h-4 w-4" aria-hidden /> Back to suggested</button>
            )}
            {!e.auto && (
              <button type="button" onClick={() => onRemove(e)} className={`${BTN_QUIET} text-red-700 dark:text-red-300`}><Trash2 className="h-4 w-4" aria-hidden /> Remove</button>
            )}
          </div>
          {e.auto && <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Part of your scheduled cycle: it ticks itself off when you clear the lesson.</p>}
        </div>
      )}
    </PanelShell>
  )
}
