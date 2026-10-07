'use client'

import { useId, useState } from 'react'
import { ChevronDown, ClipboardCheck, DoorOpen } from 'lucide-react'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'

export interface ExitQuizResult {
  topicSlug: string
  topicTitle?: string | null
  totalAttempts: number
  passed: boolean
  bestScore: number
  /** Question count of the best attempt (exit quizzes run 8, 10, 20 … questions). */
  bestTotal?: number
  bestPercent?: number
  lastScore: number | null
  lastAttempt: string | null
  mustRedoUnit: boolean
}

export interface EntranceQuizResult {
  topicSlug: string
  topicTitle?: string | null
  sittings: number
  lastCorrect: number | null
  lastTotal: number | null
  lastPercent: number | null
  bestCorrect: number | null
  bestTotal: number | null
  bestPercent: number | null
  lastTaken: string | null
  partsTestedOut: number
  totalParts: number | null
}

export interface QuizResultsStudent {
  userId: string
  name: string
  exitQuizzes?: ExitQuizResult[]
  entranceQuizzes?: EntranceQuizResult[]
}

/** Prefer the real Topic title from the API; the humanized fallback drops a
 *  duplicated leading/trailing "mcat" segment (e.g. "mcat-physics-…-mcat") and
 *  renders the exam name as MCAT, not "Mcat". */
function topicLabel(q: { topicSlug: string; topicTitle?: string | null }) {
  if (q.topicTitle) return q.topicTitle
  const parts = q.topicSlug.split('-')
  if (parts.length > 1 && parts[0] === 'mcat' && parts[parts.length - 1] === 'mcat') parts.pop()
  return parts.map((w) => (w === 'mcat' ? 'MCAT' : w.charAt(0).toUpperCase() + w.slice(1))).join(' ')
}

const scoreColor = (percent: number) =>
  percent >= TOPIC_CLEAR_PERCENT ? 'text-green-700 dark:text-green-400' : percent >= 50 ? 'text-yellow-700 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'

const fmtDate = (iso: string | null) => (iso ? new Date(iso).toLocaleDateString() : '—')

const BADGE = 'inline-flex items-center whitespace-nowrap px-2.5 py-0.5 rounded-full text-xs font-medium'
const TH = 'whitespace-nowrap py-3 px-4 font-semibold text-gray-700 dark:text-gray-300'
const ROW = 'border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/30'

/** A section the teacher can fold away; the open/closed choice is remembered per browser. */
function CollapsibleSection({
  storageKey,
  icon,
  title,
  summary,
  children,
}: {
  storageKey: string
  icon: React.ReactNode
  title: string
  summary: string
  children: React.ReactNode
}) {
  // Read once on mount: these tables render only after the Performance data
  // loads in the browser, so there is no server render to mismatch.
  const [open, setOpen] = useState(() => {
    try {
      return typeof window !== 'undefined' && localStorage.getItem(storageKey) === 'open'
    } catch {
      return false
    }
  })
  const panelId = useId()
  const toggle = () => {
    const next = !open
    setOpen(next)
    try {
      localStorage.setItem(storageKey, next ? 'open' : 'closed')
    } catch {}
  }
  return (
    <section className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <h3>
        {/* The print stylesheet hides every button, so print the title as text. */}
        <span className="hidden print:flex items-baseline gap-3 px-4 pt-3 pb-1 text-lg font-bold text-gray-900">
          {title}
          <span className="text-sm font-normal text-gray-600">{summary}</span>
        </span>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
        >
          {icon}
          <span className="text-lg font-bold text-gray-900 dark:text-white">{title}</span>
          <span className="ml-auto whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{summary}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400 transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
      </h3>
      {/* Closed panels still print, so a printed report keeps the tables. */}
      <div id={panelId} className={`border-t border-gray-200 px-2 pb-2 dark:border-gray-700 ${open ? '' : 'hidden print:block'}`}>
        {children}
      </div>
    </section>
  )
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

function ExitQuizTable({ students, showStudent }: { students: QuizResultsStudent[]; showStudent: boolean }) {
  const rows = students.flatMap((s) => (s.exitQuizzes ?? []).map((eq) => ({ s, eq })))
  if (rows.length === 0) {
    return <p className="px-2 py-4 text-sm text-gray-500 dark:text-gray-400">No exit quizzes taken yet.</p>
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            {showStudent && <th className={`${TH} text-left`}>Student</th>}
            <th className={`${TH} text-left`}>Topic</th>
            <th className={`${TH} text-center`}>Best Score</th>
            <th className={`${TH} text-center`}>Attempts</th>
            <th className={`${TH} text-center`}>Status</th>
            <th className={`${TH} text-center`}>Last Attempt</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ s, eq }) => {
            const total = eq.bestTotal ?? 10
            const percent = eq.bestPercent ?? Math.round((eq.bestScore / total) * 100)
            return (
              <tr key={`${s.userId}-${eq.topicSlug}`} className={ROW}>
                {showStudent && <td className="whitespace-nowrap py-3 px-4 font-medium text-gray-900 dark:text-white">{s.name}</td>}
                <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{topicLabel(eq)}</td>
                <td className="whitespace-nowrap py-3 px-4 text-center">
                  <span className={`font-bold ${scoreColor(percent)}`}>
                    {eq.bestScore}/{total}
                  </span>
                  <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({percent}%)</span>
                </td>
                <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400">{eq.totalAttempts}</td>
                <td className="py-3 px-4 text-center">
                  {eq.passed ? (
                    <span className={`${BADGE} bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400`}>Passed</span>
                  ) : eq.mustRedoUnit ? (
                    <span className={`${BADGE} bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400`}>Must Redo Unit</span>
                  ) : (
                    <span className={`${BADGE} bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400`}>Can Retry</span>
                  )}
                </td>
                <td className="py-3 px-4 text-center text-xs text-gray-500 dark:text-gray-400">{fmtDate(eq.lastAttempt)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function EntranceQuizTable({ students, showStudent }: { students: QuizResultsStudent[]; showStudent: boolean }) {
  const rows = students.flatMap((s) => (s.entranceQuizzes ?? []).map((q) => ({ s, q })))
  if (rows.length === 0) {
    return <p className="px-2 py-4 text-sm text-gray-500 dark:text-gray-400">No entrance quizzes taken yet.</p>
  }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {showStudent && <th className={`${TH} text-left`}>Student</th>}
              <th className={`${TH} text-left`}>Topic</th>
              <th className={`${TH} text-center`}>Latest Score</th>
              <th className={`${TH} text-center`}>Best Score</th>
              <th className={`${TH} text-center`}>Attempts</th>
              <th className={`${TH} text-center`}>Lesson Parts Skipped</th>
              <th className={`${TH} text-center`}>Last Taken</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ s, q }) => {
              const allParts = q.totalParts != null && q.totalParts > 0 && q.partsTestedOut >= q.totalParts
              return (
                <tr key={`${s.userId}-${q.topicSlug}`} className={ROW}>
                  {showStudent && <td className="whitespace-nowrap py-3 px-4 font-medium text-gray-900 dark:text-white">{s.name}</td>}
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{topicLabel(q)}</td>
                  <td className="whitespace-nowrap py-3 px-4 text-center">
                    {q.lastCorrect != null && q.lastTotal ? (
                      <>
                        <span className={`font-bold ${scoreColor(q.lastPercent ?? 0)}`}>
                          {q.lastCorrect}/{q.lastTotal}
                        </span>
                        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">({q.lastPercent}%)</span>
                      </>
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400" title="Taken before entrance quiz scores were recorded (Sept 29, 2026)">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400">
                    {q.bestCorrect != null && q.bestTotal ? `${q.bestCorrect}/${q.bestTotal}` : '—'}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400">{q.sittings || '—'}</td>
                  <td className="py-3 px-4 text-center">
                    {allParts ? (
                      <span className={`${BADGE} bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400`}>Tested out</span>
                    ) : q.partsTestedOut > 0 ? (
                      <span className={`${BADGE} bg-accent-subtle text-accent dark:bg-accent-light/20 dark:text-accent-muted`}>
                        {q.partsTestedOut}
                        {q.totalParts ? ` of ${q.totalParts}` : ''} parts
                      </span>
                    ) : (
                      <span className={`${BADGE} bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300`}>None</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center text-xs text-gray-500 dark:text-gray-400">{fmtDate(q.lastTaken)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="px-4 pt-2 text-[11px] text-gray-500 dark:text-gray-400">
        A student skips a lesson part by answering every entrance question on that part correctly. Scores are recorded from
        Sept 29, 2026; earlier quizzes show only the parts skipped.
      </p>
    </>
  )
}

/**
 * Entrance- and exit-quiz results, each collapsible: the class Performance tab
 * (every student) and one student's study report (`showStudent={false}`).
 * `storagePrefix` keeps each page's open/closed choice separate.
 */
export default function QuizResultsSections({
  students,
  showStudent = true,
  storagePrefix = 'teacher.performance',
  className = '',
}: {
  students: QuizResultsStudent[]
  showStudent?: boolean
  storagePrefix?: string
  className?: string
}) {
  const entrance = students.flatMap((s) => s.entranceQuizzes ?? [])
  const exit = students.flatMap((s) => s.exitQuizzes ?? [])
  const testedOut = entrance.filter((q) => q.totalParts && q.partsTestedOut >= q.totalParts).length
  const passed = exit.filter((q) => q.passed).length
  // One row per student per topic; for a single student that's one per topic.
  const unit = showStudent ? 'result' : 'topic'
  return (
    <div className={`space-y-4 ${className}`}>
      <CollapsibleSection
        storageKey={`${storagePrefix}.entranceQuizzes`}
        icon={<DoorOpen className="h-5 w-5 shrink-0 text-accent" aria-hidden />}
        title="Entrance Quiz Results"
        summary={entrance.length ? `${plural(entrance.length, unit)} · ${testedOut} tested out` : 'None yet'}
      >
        <EntranceQuizTable students={students} showStudent={showStudent} />
      </CollapsibleSection>
      <CollapsibleSection
        storageKey={`${storagePrefix}.exitQuizzes`}
        icon={<ClipboardCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden />}
        title="Exit Quiz Results"
        summary={exit.length ? `${plural(exit.length, unit)} · ${passed} passed` : 'None yet'}
      >
        <ExitQuizTable students={students} showStudent={showStudent} />
      </CollapsibleSection>
    </div>
  )
}
