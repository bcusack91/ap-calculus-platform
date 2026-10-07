'use client'

import { Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AlertTriangle, ArrowLeft, Check, ClipboardList, Clock, Layers, ListChecks, Printer, Stethoscope, Target } from 'lucide-react'
import type { MetricsRange, StudentMetrics } from '@/lib/student-metrics'
import {
  NoData,
  RANGE_OPTIONS,
  SCOPE_OPTIONS,
  StudyFilters,
  TRACKING_START,
  TRACKING_START_LABEL,
  fmtDate,
  fmtDuration,
  fmtHours,
  fmtPct,
  parseRange,
  parseScope,
  type StudyScope,
} from '@/components/teacher/StudyReportShared'
import { ActiveTimeChart, HBarList, McatTrendChart, Meter, PacingChart, dayList } from '@/components/teacher/StudyReportCharts'
import QuizResultsSections, { type EntranceQuizResult, type ExitQuizResult } from '@/components/teacher/QuizResultsSections'

/**
 * Per-student study report for a teacher (owner request 2026-09-29: robust
 * tracking for SAT and MCAT students). Everything comes from
 * GET /api/teacher/classrooms/[id]/students/[studentId]/metrics, which
 * enforces owner/co-teacher access to an ACTIVE member; this page only renders.
 *
 * Range and scope live in the URL (?range=&scope=) so a report can be
 * bookmarked or shared with a co-teacher. Tracking started 2026-09-29, so
 * empty sections say so instead of showing zeros that read as failure.
 */

interface Payload {
  student: { id: string; name: string | null; email: string | null }
  classroom: { id: string; name: string }
  metrics: StudentMetrics
  /** Entrance/exit quizzes per topic, all time (absent from an older server). */
  quizResults?: { entranceQuizzes: EntranceQuizResult[]; exitQuizzes: ExitQuizResult[] }
}

const SOURCE_ROWS: { key: keyof StudentMetrics['questions']['bySource']; label: string }[] = [
  { key: 'ENTRANCE', label: 'Entrance quiz' },
  { key: 'LESSON', label: 'In-lesson' },
  { key: 'EXIT', label: 'Exit quiz' },
  { key: 'DIAGNOSTIC', label: 'Diagnostic' },
  { key: 'PRACTICE', label: 'Practice' },
  { key: 'FULL_LENGTH', label: 'Full-length' },
  { key: 'DAILY', label: 'Daily question' },
  { key: 'COMPETITIVE', label: 'Competitive' },
]

const STATUS_LABEL: Record<string, string> = {
  NOT_STARTED: 'Not started',
  IN_PROGRESS: 'In progress',
  COMPLETED: 'Completed',
  MASTERED: 'Mastered',
}

const RANGE_DAYS: Record<MetricsRange, number | null> = { '7d': 7, '30d': 30, '90d': 90, all: null }
const LESSON_ROWS_SHOWN = 25

const unslug = (slug: string) => slug.replace(/[-_]+/g, ' ').trim().replace(/^\w/, (c) => c.toUpperCase())

/** First day the range covers, as YYYY-MM-DD (null = all time). */
function rangeStartDay(m: StudentMetrics): string | null {
  const n = RANGE_DAYS[m.range]
  if (!n) return null
  return new Date(new Date(m.generatedAt).getTime() - (n - 1) * 86_400_000).toISOString().slice(0, 10)
}

/** Days on the active-time axis: the range, but never before tracking began. */
function chartDays(m: StudentMetrics): string[] {
  let start = rangeStartDay(m) ?? TRACKING_START
  if (start < TRACKING_START) start = TRACKING_START
  let end = m.generatedAt.slice(0, 10)
  const keys = m.activeTime.byDay.map((d) => d.day)
  if (keys.length) {
    if (keys[0] < start) start = keys[0]
    if (keys[keys.length - 1] > end) end = keys[keys.length - 1]
  }
  return dayList(start, end)
}

function Card({ title, icon: Icon, subtitle, children }: {
  title: string; icon: typeof Clock; subtitle?: React.ReactNode; children: React.ReactNode
}) {
  return (
    <section className="report-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 sm:p-6">
      <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
        <Icon className="w-5 h-5 text-accent print:hidden" aria-hidden />
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
      <div className="mt-4">{children}</div>
    </section>
  )
}

function Stat({ label, value, hint, children }: { label: string; value: string; hint?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="print-row rounded-xl bg-gray-50 dark:bg-gray-700/30 p-3">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
      <div className="text-xs font-medium text-gray-600 dark:text-gray-300">{label}</div>
      {hint && <div className="mt-0.5 text-[11px] text-gray-500 dark:text-gray-400">{hint}</div>}
      {children}
    </div>
  )
}

const TH = 'py-2 pr-4 font-medium'
const TD = 'py-2 pr-4'

function WeekSection({ m }: { m: StudentMetrics }) {
  const w = m.weekly
  const t = w.target
  const empty = w.activeSeconds === 0 && w.activeDays === 0 && w.topicsCleared === 0
  const hours = w.activeSeconds / 3600
  return (
    <Card
      title="This week vs target"
      icon={Target}
      subtitle={
        <>
          Rolling last 7 days (since {fmtDate(w.since)}), whatever range is selected above.{' '}
          {t ? `${t.label} target: ${t.hours} h of study and ${t.topics} topics cleared a week.` : 'This course has no weekly target, so these are actuals.'}
        </>
      }
    >
      {empty ? (
        <NoData>No study time, active days or cleared topics in the last 7 days.</NoData>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Stat
            label="Active study time"
            value={fmtHours(w.activeSeconds)}
            hint={t ? (hours >= t.hours ? <TargetMet /> : `of ${t.hours} h target`) : undefined}
          >
            {t && <Meter value={hours} target={t.hours} label={`Active hours: ${hours.toFixed(1)} of ${t.hours}`} />}
          </Stat>
          <Stat
            label="Topics cleared"
            value={String(w.topicsCleared)}
            hint={t ? (w.topicsCleared >= t.topics ? <TargetMet /> : `of ${t.topics} target`) : 'first exit-quiz pass at 80%'}
          >
            {t && <Meter value={w.topicsCleared} target={t.topics} label={`Topics cleared: ${w.topicsCleared} of ${t.topics}`} />}
          </Stat>
          <Stat label="Active days" value={`${w.activeDays} of 7`}>
            <Meter value={w.activeDays} target={7} label={`Active days: ${w.activeDays} of 7`} />
          </Stat>
        </div>
      )}
    </Card>
  )
}

function TargetMet() {
  return (
    <span className="inline-flex items-center gap-1 font-medium text-green-700 dark:text-green-400">
      <Check className="w-3 h-3" aria-hidden /> Target met
    </span>
  )
}

function ActiveTimeSection({ m }: { m: StudentMetrics }) {
  const a = m.activeTime
  const days = useMemo(() => chartDays(m), [m])
  return (
    <Card
      title="Active time"
      icon={Clock}
      subtitle="Time with the tab visible and input in the last 2 minutes. Idle time and hidden tabs are not counted; a running timed test always counts."
    >
      {a.totalSeconds === 0 ? (
        <NoData>No active study time in this range.</NoData>
      ) : (
        <>
          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Stat label="Total active time" value={fmtDuration(a.totalSeconds)} />
            <Stat label="Active days" value={String(a.activeDays)} hint={`of ${days.length} day${days.length === 1 ? '' : 's'} shown`} />
            <Stat label="Per active day" value={fmtDuration(a.activeDays ? a.totalSeconds / a.activeDays : 0)} hint="average" />
          </div>
          <ActiveTimeChart activeTime={a} days={days} />
        </>
      )}
    </Card>
  )
}

function FlashcardSection({ m }: { m: StudentMetrics }) {
  const f = m.flashcards
  const ratingRows = (['AGAIN', 'HARD', 'GOOD', 'EASY'] as const).map((r) => ({
    label: r[0] + r.slice(1).toLowerCase(),
    value: f.ratings[r],
    display: `${f.ratings[r]} · ${fmtPct(f.ratingShares[r])}`,
  }))
  return (
    <Card title="Flashcards" icon={Layers} subtitle="Every rating is logged with the time the card was on screen (capped at 60 s).">
      {f.rushing && (
        <div role="alert" className="mb-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
          <AlertTriangle className="mt-0.5 w-4 h-4 shrink-0" aria-hidden />
          <span>
            <strong>Rushing:</strong> Rating cards in under 2 s on average — may be tapping through.
          </span>
        </div>
      )}
      {f.reviews === 0 ? (
        <NoData>
          No flashcard reviews in this range.
          {f.overdue > 0 && ` ${f.overdue} card${f.overdue === 1 ? ' is' : 's are'} overdue right now.`}
        </NoData>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Stat label="Reviews" value={String(f.reviews)} />
            <Stat
              label="Time on cards"
              value={f.timedReviews ? fmtDuration(f.totalSeconds) : '—'}
              hint={f.timedReviews !== f.reviews ? `time measured on ${f.timedReviews} of ${f.reviews} reviews` : undefined}
            />
            <Stat label="Average per card" value={f.avgSecondsPerCard == null ? '—' : `${f.avgSecondsPerCard} s`} />
            <Stat
              label="Retention (mature cards)"
              value={f.retention == null ? '—' : fmtPct(f.retention)}
              hint={f.retention == null ? 'not enough mature cards yet' : `${f.matureReviews} reviews of cards at 21+ day intervals`}
            />
            <Stat label="Overdue now" value={String(f.overdue)} hint="studied cards past due" />
            <Stat label="New cards" value={String(f.newCards)} hint="first time seen" />
          </div>
          <h3 className="mt-6 mb-3 text-sm font-semibold text-gray-900 dark:text-white">Rating buttons pressed</h3>
          <HBarList rows={ratingRows} />
        </>
      )}
    </Card>
  )
}

function LessonsSection({ m }: { m: StudentMetrics }) {
  const [showAll, setShowAll] = useState(false)
  const q = m.questions
  const titles = useMemo(() => new Map(m.lessons.map((l) => [l.topicSlug, l.title])), [m.lessons])
  const sources = SOURCE_ROWS.filter((s) => q.bySource[s.key].answered > 0)
  const e = m.exitQuizzes

  return (
    <Card
      title="Lessons & questions"
      icon={ListChecks}
      subtitle="Answers are graded on the server except entrance-quiz and in-lesson checks, which are graded in the lesson."
    >
      <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Questions answered</h3>
      {q.total.answered === 0 ? (
        <NoData>No answered questions in this range.</NoData>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm tabular-nums">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                <th className={TH}>Where</th>
                <th className={`${TH} text-right`}>Answered</th>
                <th className={`${TH} text-right`}>Correct</th>
                <th className={`${TH} text-right`}>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((s) => {
                const t = q.bySource[s.key]
                return (
                  <tr key={s.key} className="border-b border-gray-100 dark:border-gray-700/50 text-gray-700 dark:text-gray-300">
                    <td className={TD}>{s.label}</td>
                    <td className={`${TD} text-right`}>{t.answered}</td>
                    <td className={`${TD} text-right`}>{t.correct}</td>
                    <td className={`${TD} text-right`}>{fmtPct(t.correct / t.answered)}</td>
                  </tr>
                )
              })}
              <tr className="font-semibold text-gray-900 dark:text-white">
                <td className={TD}>All sources</td>
                <td className={`${TD} text-right`}>{q.total.answered}</td>
                <td className={`${TD} text-right`}>{q.total.correct}</td>
                <td className={`${TD} text-right`}>{fmtPct(q.total.correct / q.total.answered)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <h3 className="mt-6 mb-2 text-sm font-semibold text-gray-900 dark:text-white">Exit quizzes</h3>
      {e.attempts === 0 && e.topicsCleared === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No exit quizzes taken in this range.</p>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          <Stat label="Attempts" value={String(e.attempts)} />
          <Stat label="Passed" value={String(e.passes)} hint="80% or better" />
          <Stat label="Topics cleared" value={String(e.topicsCleared)} hint="first pass in range" />
        </div>
      )}

      <h3 className="mt-6 mb-2 text-sm font-semibold text-gray-900 dark:text-white">Weakest areas</h3>
      {m.weakAreas.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          An area is ranked once it has at least 5 answers{q.total.answered === 0 ? '' : ' — none do yet in this range'}.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm tabular-nums">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                <th className={TH}>Area</th>
                <th className={TH}>Kind</th>
                <th className={`${TH} text-right`}>Accuracy</th>
                <th className={`${TH} text-right`}>Answered</th>
              </tr>
            </thead>
            <tbody>
              {m.weakAreas.map((w) => (
                <tr key={`${w.kind}:${w.key}`} className="border-b border-gray-100 dark:border-gray-700/50 text-gray-700 dark:text-gray-300">
                  <td className={`${TD} font-medium text-gray-900 dark:text-white`}>
                    {w.kind === 'topic' ? titles.get(w.key) ?? unslug(w.key) : w.key}
                  </td>
                  <td className={`${TD} text-gray-500 dark:text-gray-400`}>{w.kind === 'topic' ? 'Topic' : 'Section / domain'}</td>
                  <td className={`${TD} text-right`}>{fmtPct(w.accuracy)}</td>
                  <td className={`${TD} text-right`}>{w.answered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h3 className="mt-6 mb-1 text-sm font-semibold text-gray-900 dark:text-white">Lessons</h3>
      <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">Lesson time and topic status always cover all study, whatever the scope.</p>
      {m.lessons.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No lessons opened in this range.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-sm tabular-nums">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                  <th className={TH}>Lesson</th>
                  <th className={TH}>Status</th>
                  <th className={`${TH} text-right`}>Time</th>
                  <th className={TH}>Last opened</th>
                  <th className={`${TH} text-center`}>Cleared</th>
                </tr>
              </thead>
              <tbody>
                {m.lessons.map((l, i) => (
                  <tr
                    key={l.topicSlug}
                    className={`border-b border-gray-100 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 ${
                      !showAll && i >= LESSON_ROWS_SHOWN ? 'hidden print:table-row' : ''
                    }`}
                  >
                    <td className={`${TD} font-medium text-gray-900 dark:text-white`}>{l.title}</td>
                    <td className={`${TD} whitespace-nowrap`}>{STATUS_LABEL[l.status] ?? unslug(l.status.toLowerCase())}</td>
                    <td className={`${TD} text-right whitespace-nowrap`}>{fmtDuration(l.timeSeconds)}</td>
                    <td className={`${TD} whitespace-nowrap`}>{fmtDate(l.lastAccessed)}</td>
                    <td className={`${TD} text-center`}>
                      {l.clearedByExit ? (
                        <span className="inline-flex items-center gap-1 text-green-700 dark:text-green-400">
                          <Check className="w-4 h-4" aria-hidden />
                          <span className="sr-only">Cleared by exit quiz</span>
                        </span>
                      ) : (
                        <span className="text-gray-300 dark:text-gray-600" aria-label="Not cleared">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {m.lessons.length > LESSON_ROWS_SHOWN && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="mt-2 text-xs font-medium text-accent hover:text-accent-hover hover:underline print:hidden"
            >
              {showAll ? 'Show fewer' : `Show all ${m.lessons.length} lessons`}
            </button>
          )}
          <p className="mt-2 text-[11px] text-gray-400 dark:text-gray-500">✓ = cleared by an exit quiz at 80% or better.</p>
        </>
      )}
    </Card>
  )
}

function McatSection({ mcat }: { mcat: NonNullable<StudentMetrics['mcat']> }) {
  return (
    <Card
      title="MCAT"
      icon={Stethoscope}
      subtitle="Section scores (118–132) and total (472–528) from diagnostics, class diagnostics and full-lengths."
    >
      <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Score trend</h3>
      {mcat.trend.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No scored MCAT diagnostic or full-length yet.</p>
      ) : (
        <McatTrendChart trend={mcat.trend} />
      )}
      <h3 className="mt-6 mb-2 text-sm font-semibold text-gray-900 dark:text-white">Pacing</h3>
      {mcat.pacing.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No timed full-length or section practice in this range.</p>
      ) : (
        <PacingChart points={mcat.pacing} examPace={mcat.examPace} />
      )}
    </Card>
  )
}

function StudentStudyReport() {
  const params = useParams<{ id: string; studentId: string }>()
  const classroomId = params?.id
  const studentId = params?.studentId
  const router = useRouter()
  const searchParams = useSearchParams()
  const range = parseRange(searchParams?.get('range'))
  const scope = parseScope(searchParams?.get('scope'))

  const [data, setData] = useState<Payload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!classroomId || !studentId) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(
        `/api/teacher/classrooms/${classroomId}/students/${studentId}/metrics?range=${range}&scope=${scope}`,
        { cache: 'no-store' },
      )
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(
          res.status === 401 || res.status === 403
            ? 'You do not have access to this student’s report.'
            : res.status === 404
              ? 'This student is not an active member of the class.'
              : body.error || 'Could not load this report.',
        )
      }
      setData(await res.json())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }, [classroomId, studentId, range, scope])

  useEffect(() => {
    load()
  }, [load])

  const setFilters = (next: { range: MetricsRange; scope: StudyScope }) => {
    const qs = new URLSearchParams()
    if (next.range !== '7d') qs.set('range', next.range)
    if (next.scope !== 'all') qs.set('scope', next.scope)
    const q = qs.toString()
    router.replace(`/teacher/classroom/${classroomId}/student/${studentId}${q ? `?${q}` : ''}`, { scroll: false })
  }

  const m = data?.metrics
  const name = data?.student.name || data?.student.email || 'Student'
  const rangeLabel = RANGE_OPTIONS.find((o) => o.value === range)?.label ?? ''
  const scopeLabel = SCOPE_OPTIONS.find((o) => o.value === scope)?.label ?? ''
  const startDay = m ? rangeStartDay(m) : null
  const predatesTracking = !!m && (startDay == null || startDay < TRACKING_START)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <style media="print">{STUDY_REPORT_PRINT_CSS}</style>

      <div className="mb-4 flex items-center justify-between gap-3 print:hidden">
        <Link
          href={`/teacher/classroom/${classroomId}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden />
          Back to {data?.classroom.name ?? 'classroom'}
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          disabled={!data}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm disabled:opacity-50"
        >
          <Printer className="w-4 h-4" aria-hidden />
          Print report
        </button>
      </div>

      <div className="study-report-print-root">
        <header className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {data ? name : <span className="inline-block h-8 w-56 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />}
          </h1>
          {data && (
            <p className="mt-1 text-sm text-muted-foreground">
              Study report · {data.classroom.name}
              {data.student.email && data.student.name ? ` · ${data.student.email}` : ''}
              <span className="hidden print:inline">
                {' '}· {rangeLabel} · {scopeLabel} · Printed {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </p>
          )}
        </header>

        <StudyFilters range={range} scope={scope} onChange={setFilters} className="mb-3 print:hidden" />
        <div className="mb-6 space-y-1 text-xs text-gray-500 dark:text-gray-400">
          {scope === 'class' && (
            <p>
              This class only: work done in this class’s study mode, its assignments and class diagnostics. Lesson time, topic status,
              exit quizzes and self-taken tests carry no class stamp, so they always show all study.
            </p>
          )}
          {predatesTracking && (
            <p>
              Active time, flashcard ratings and in-lesson answers are recorded from {TRACKING_START_LABEL}; earlier study in this range isn’t
              included.
            </p>
          )}
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20 p-6 text-center">
            <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            <button onClick={load} className="mt-2 text-sm font-semibold text-red-700 dark:text-red-300 underline">
              Try again
            </button>
          </div>
        )}

        {!m && loading && (
          <div className="space-y-4" aria-busy="true">
            <div className="h-32 rounded-2xl bg-gray-200 dark:bg-gray-700 animate-pulse" />
            <div className="h-64 rounded-2xl bg-gray-200 dark:bg-gray-700 animate-pulse" />
          </div>
        )}

        {m && (
          <div className={`space-y-6 transition-opacity ${loading ? 'opacity-60' : ''}`} aria-busy={loading}>
            <WeekSection m={m} />
            <ActiveTimeSection m={m} />
            <FlashcardSection m={m} />
            <LessonsSection m={m} />
            {data?.quizResults && (
              <Card title="Entrance & exit quizzes" icon={ClipboardList} subtitle="Every topic, all time — not affected by the filters above.">
                <QuizResultsSections
                  students={[{ userId: data.student.id, name, ...data.quizResults }]}
                  showStudent={false}
                  storagePrefix="teacher.studentReport"
                />
              </Card>
            )}
            {m.mcat && <McatSection mcat={m.mcat} />}
            <p className="text-[11px] text-gray-400 dark:text-gray-500">
              Generated {new Date(m.generatedAt).toLocaleString()}. {rangeLabel}, {scopeLabel.toLowerCase()}.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function StudentStudyReportPage() {
  return (
    <Suspense fallback={null}>
      <StudentStudyReport />
    </Suspense>
  )
}

/**
 * Print stylesheet — same visibility-toggling technique as the class report
 * (`.class-report-print-root`) and StudentReportModal, scoped to this page's
 * own root. Unlike those, backgrounds are cleared on chrome only: chart marks
 * (`.viz-mark`) keep their data colors so the charts still read on paper, and
 * every chart's table view prints alongside it.
 */
const STUDY_REPORT_PRINT_CSS = `
  body:has(.study-report-print-root) * { visibility: hidden; }
  body:has(.study-report-print-root) .study-report-print-root,
  body:has(.study-report-print-root) .study-report-print-root * { visibility: visible; }
  body:has(.study-report-print-root) .study-report-print-root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0 !important;
    font-size: 11pt;
  }

  .study-report-print-root,
  .study-report-print-root * {
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  .study-report-print-root *:not(.viz-mark) { background-color: transparent !important; }
  .study-report-print-root .viz-mark { print-color-adjust: exact; -webkit-print-color-adjust: exact; }

  .study-report-print-root .report-card {
    border: 1px solid #ccc !important;
    border-radius: 8px !important;
    padding: 12px !important;
    break-inside: auto;
  }
  .study-report-print-root .print-row { border: 1px solid #ddd !important; break-inside: avoid; }
  .study-report-print-root h1,
  .study-report-print-root h2,
  .study-report-print-root h3 { break-after: avoid; }

  .study-report-print-root .overflow-x-auto { overflow: visible !important; }
  .study-report-print-root table {
    width: 100% !important;
    border-collapse: collapse !important;
    font-size: 9pt;
  }
  .study-report-print-root th,
  .study-report-print-root td {
    border: 1px solid #999 !important;
    padding: 3px 5px !important;
  }
  .study-report-print-root thead { display: table-header-group; }
  .study-report-print-root tr { break-inside: avoid; }
`
