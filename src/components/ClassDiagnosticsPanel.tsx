'use client'

import { useCallback, useEffect, useState } from 'react'
import { Minus, Trash2, TrendingDown, TrendingUp, Unlock } from 'lucide-react'
import ConfirmDialog, { ConfirmRequest } from '@/components/teacher/ConfirmDialog'
import { formatDueDate } from '@/components/ClassDiagnosticBanner'

/**
 * Assigned class diagnostics — sits at the top of the Class Plan tab.
 * "Assign Diagnostic" freezes ONE generated test for the whole roster
 * (identical questions — owner decision), students get a dashboard banner
 * until they take it, and results aggregate here: completion, class average,
 * weakest domains, per-student scores.
 */

interface DiagStudent {
  userId: string
  name: string
  takenAt: string | null
  scoreLabel: string | null
  percentage: number | null
  estimatedScore: number | null
  mathScore: number | null
  rwScore: number | null
  /** MCAT only: the four 118-132 section scaled scores of the first sitting. */
  sections: { short: string; scaled: number }[] | null
  attemptCount: number
  latestEstimatedScore: number | null
  /** Latest attempt minus the one before it (needs ≥2 attempts). */
  scoreDelta: number | null
  /** MCAT only: retake-gate waiver set and not yet consumed by a new attempt. */
  retakeWaiverActive: boolean
  /** MCAT only: has a diagnostic on file, so the retake gate can apply to them. */
  hasPriorDiagnostic: boolean
  /** Growth: this sitting vs the student's own most recent earlier diagnostic. */
  growthFromTitle: string | null
  growthFromScore: number | null
  growthDelta: number | null
}
interface Diag {
  id: string
  courseKey: string
  courseLabel: string
  title: string
  dueDate: string | null
  createdAt: string
  attemptCount: number
  /**
   * Class change vs the previous diagnostic. `noiseBand` / `avgNoiseBand` are
   * the smallest moves that mean anything on this test — inside them, a change
   * is measurement noise and must NOT be shown as progress.
   */
  growth: {
    fromTitle: string
    pairedCount: number
    avgDelta: number
    noiseBand: number
    avgNoiseBand: number
  } | null
  takenCount: number
  totalStudents: number
  avgPercentage: number | null
  scoreAverages: {
    overall: number | null
    math: number | null
    rw: number | null
    /** MCAT only: per-section 118-132 class averages. */
    sections?: { short: string; avg: number }[] | null
  }
  domainAverages: { name: string; avg: number }[]
  students: DiagStudent[]
}

/**
 * A score change between two diagnostics, honest about measurement error.
 *
 * `band` is the smallest move this test can actually resolve. Inside it the
 * chip is gray and says "noise" — on the MCAT diagnostic a student whose
 * ability has not changed swings ~25 points between sittings, so a +5 is not
 * progress and must never be painted green.
 */
function ChangeChip({ delta, band, label }: { delta: number; band: number; label: string }) {
  const signed = delta > 0 ? `+${delta}` : `${delta}`
  const meaningful = Math.abs(delta) >= band
  const tone = !meaningful
    ? 'text-gray-500 dark:text-gray-400'
    : delta > 0
    ? 'text-green-600 dark:text-green-400'
    : 'text-red-600 dark:text-red-400'
  const Icon = !meaningful ? Minus : delta > 0 ? TrendingUp : TrendingDown
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium ${tone}`}
      title={meaningful
        ? `${signed} ${label} — bigger than the ±${band} swing this test shows for unchanged ability, so a real change.`
        : `${signed} ${label} — inside the ±${band} swing a same-ability student shows on this test. Treat it as noise, not progress.`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {signed} {label}{meaningful ? '' : ' (noise)'}
    </span>
  )
}

export default function ClassDiagnosticsPanel({ classroomId }: { classroomId: string }) {
  const [diagnostics, setDiagnostics] = useState<Diag[] | null>(null)
  const [assignable, setAssignable] = useState<{ key: string; label: string }[]>([])
  const [expanded, setExpanded] = useState<string | null>(null)
  const [assigning, setAssigning] = useState(false)
  const [courseKey, setCourseKey] = useState('mcat')
  const [dueDate, setDueDate] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirmReq, setConfirmReq] = useState<ConfirmRequest | null>(null)

  const load = useCallback(() => {
    fetch(`/api/teacher/classrooms/${classroomId}/class-diagnostics`, { cache: 'no-store' })
      .then(async r => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load diagnostics')
        setDiagnostics(d.diagnostics)
        setAssignable(d.assignableCourses ?? [])
        setError(null)
      })
      .catch(e => setError(e instanceof Error ? e.message : 'Could not load diagnostics'))
  }, [classroomId])

  useEffect(() => { load() }, [load])

  const assign = async () => {
    setBusy(true)
    setError(null)
    try {
      const r = await fetch(`/api/teacher/classrooms/${classroomId}/class-diagnostics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // The date input gives a bare day; send this browser's offset so the
        // server can make it due at the END of that day in the teacher's own
        // timezone instead of at UTC midnight (which read as the day before).
        body: JSON.stringify({
          courseKey,
          dueDate: dueDate || undefined,
          tzOffsetMinutes: new Date().getTimezoneOffset(),
        }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) { setError(d.error || 'Could not assign'); return }
      setAssigning(false)
      setDueDate('')
      load()
    } finally {
      setBusy(false)
    }
  }

  // Teacher retake-gate override: sets User.diagnosticGateWaivedAt so the
  // student's MCAT retake gate opens immediately. One-shot — taking the retake
  // consumes the waiver (the new attempt is newer than the timestamp).
  const waiveGate = (student: DiagStudent) => {
    setConfirmReq({
      title: 'Allow retake now',
      message: `Open the diagnostic retake for ${student.name} right away, even if their study plan still has pending topics? This applies to their next attempt only.`,
      confirmLabel: 'Allow retake',
      onConfirm: async () => {
        const r = await fetch(`/api/teacher/classrooms/${classroomId}/class-diagnostics/waive-gate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentUserId: student.userId }),
        })
        const d = await r.json().catch(() => ({}))
        if (!r.ok) {
          setError(d.error || 'Could not unlock the retake')
          return
        }
        setError(null)
        load()
      },
    })
  }

  /**
   * Waive the retake gate for one student, or for everyone on this row who is
   * still blocked. The endpoint takes one student at a time, so the bulk
   * action fans out; it is idempotent (it just refreshes a timestamp).
   */
  const waiveMany = async (students: DiagStudent[]) => {
    const results = await Promise.all(students.map(s =>
      fetch(`/api/teacher/classrooms/${classroomId}/class-diagnostics/waive-gate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentUserId: s.userId }),
      }).then(r => r.ok).catch(() => false),
    ))
    const failed = results.filter(ok => !ok).length
    setError(failed > 0 ? `Could not unlock ${failed} of ${students.length} students. Try again.` : null)
    load()
  }

  const waiveAllBlocked = (d: Diag, blocked: DiagStudent[]) => {
    setConfirmReq({
      title: 'Allow retake for everyone still blocked',
      message: `Open the diagnostic retake for ${blocked.length} student${blocked.length === 1 ? '' : 's'} in ${d.courseLabel} ${d.title} who still have pending study-plan topics. This applies to their next attempt only.`,
      confirmLabel: `Unlock ${blocked.length}`,
      onConfirm: () => waiveMany(blocked),
    })
  }

  // Delete an assignment. An untouched one is a clean removal; one with
  // attempts gets an explicit warning and only then the ?force=1 the API
  // demands, because those sittings survive on each student's record while the
  // class results do not. If someone submits in between, the API still refuses
  // and we reload so the warning shows the true count on the next try.
  const deleteDiagnostic = (d: Diag) => {
    const hasAttempts = d.attemptCount > 0
    const url = `/api/teacher/classrooms/${classroomId}/class-diagnostics?diagnosticId=${encodeURIComponent(d.id)}${hasAttempts ? '&force=1' : ''}`
    setConfirmReq({
      title: `Delete ${d.courseLabel} ${d.title}?`,
      message: hasAttempts
        ? `${d.attemptCount} student ${d.attemptCount === 1 ? 'attempt' : 'attempts'} already exist. Deleting removes the class results and comparisons here; each student keeps that sitting on their own record as a normal diagnostic.`
        : 'Nobody has taken it yet, so this clears it from the class and removes it from the students’ dashboard banner.',
      confirmLabel: hasAttempts ? 'Delete and keep attempts' : 'Delete',
      danger: true,
      onConfirm: async () => {
        const r = await fetch(url, { method: 'DELETE' })
        const body = await r.json().catch(() => ({}))
        if (!r.ok) {
          setError(body.error || 'Could not delete that diagnostic')
          load()
          return
        }
        setError(null)
        setExpanded(null)
        load()
      },
    })
  }

  if (diagnostics === null && !error) return null

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">📝 Assigned diagnostics</h2>
        <button
          onClick={() => setAssigning(v => !v)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {assigning ? 'Cancel' : '➕ Assign diagnostic'}
        </button>
      </div>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        One frozen test, identical questions for everyone — results are directly comparable. Students see a
        banner on their dashboard until they&apos;ve taken it.
      </p>
      {error && <p className="mb-3 text-sm text-red-600 dark:text-red-400">{error}</p>}

      {assigning && (
        <div className="mb-4 flex flex-wrap items-end gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <label className="text-sm">
            <span className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Course</span>
            <select value={courseKey} onChange={e => setCourseKey(e.target.value)} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              {assignable.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Due date (optional)</span>
            <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </label>
          <button
            onClick={() => void assign()}
            disabled={busy}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {busy ? 'Generating test…' : 'Assign to class'}
          </button>
        </div>
      )}

      {(diagnostics ?? []).length === 0 ? (
        <p className="text-sm text-gray-400">
          Nothing assigned yet. Assign Diagnostic 1 after your introductory class — every student gets the same
          questions, and this panel fills with results as they take it.
        </p>
      ) : (
        <div className="space-y-3">
          {(diagnostics ?? []).map(d => (
            <div key={d.id} className="rounded-xl border border-gray-200 dark:border-gray-700">
              {/* The delete control is a sibling of the expand button, not a
                  child — a button inside a button is invalid and swallows the
                  click. */}
              <div className="flex items-center gap-1 pr-2">
                <button
                  onClick={() => setExpanded(expanded === d.id ? null : d.id)}
                  className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2 px-4 py-3 text-left"
                  aria-expanded={expanded === d.id}
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {expanded === d.id ? '▾' : '▸'} {d.courseLabel} {d.title}
                    {d.dueDate && <span className="ml-2 text-xs font-normal text-gray-500">due end of {formatDueDate(d.dueDate)}</span>}
                  </span>
                  <span className="flex flex-wrap items-center gap-3 text-sm">
                    <span className={`font-medium ${d.takenCount === d.totalStudents ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                      {d.takenCount}/{d.totalStudents} taken
                    </span>
                    {d.scoreAverages?.overall !== null && d.scoreAverages?.overall !== undefined ? (
                      <span className="text-gray-500 dark:text-gray-400">
                        class avg <span className="font-semibold text-gray-700 dark:text-gray-200">{d.scoreAverages.overall}</span>
                        {d.scoreAverages.sections && d.scoreAverages.sections.length > 0
                          ? ` (${d.scoreAverages.sections.map(sec => `${sec.short} ${sec.avg}`).join(' · ')})`
                          : d.scoreAverages.math !== null && d.scoreAverages.rw !== null &&
                            ` (Math ${d.scoreAverages.math} · R&W ${d.scoreAverages.rw})`}
                      </span>
                    ) : d.avgPercentage !== null ? (
                      <span className="text-gray-500 dark:text-gray-400">class avg {d.avgPercentage}%</span>
                    ) : null}
                    {d.growth && <ChangeChip delta={d.growth.avgDelta} band={d.growth.avgNoiseBand} label={`class avg vs ${d.growth.fromTitle}`} />}
                  </span>
                </button>
                <button
                  onClick={() => deleteDiagnostic(d)}
                  title={`Delete ${d.title}`}
                  aria-label={`Delete ${d.courseLabel} ${d.title}`}
                  className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400"
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              {expanded === d.id && (
                <div className="border-t border-gray-100 px-4 py-3 dark:border-gray-700">
                  {d.domainAverages.length > 0 && (
                    <div className="mb-3">
                      <p className="mb-1.5 text-xs font-medium uppercase text-gray-400">Class domain averages (weakest first)</p>
                      <div className="flex flex-wrap gap-1.5">
                        {d.domainAverages.map(dom => (
                          <span key={dom.name} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${dom.avg < 50 ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : dom.avg < 75 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' : 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'}`}>
                            {dom.name} {dom.avg}%
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {d.growth && (
                    <div className="mb-3 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600 dark:bg-gray-700/50 dark:text-gray-300">
                      <p className="mb-0.5 font-medium uppercase tracking-wide text-gray-400">Change since {d.growth.fromTitle}</p>
                      <p>
                        Class average {d.growth.avgDelta >= 0 ? `+${d.growth.avgDelta}` : d.growth.avgDelta} across{' '}
                        {d.growth.pairedCount} student{d.growth.pairedCount === 1 ? '' : 's'} with both sittings.
                      </p>
                      <p className="mt-0.5 text-gray-500 dark:text-gray-400">
                        This test can&apos;t resolve smaller moves than about ±{d.growth.noiseBand} for one student
                        (±{d.growth.avgNoiseBand} for this class average) — a same-ability student swings that much
                        between sittings, so anything inside it is noise, not progress.
                      </p>
                    </div>
                  )}
                  {(() => {
                    // Anyone the retake gate can still be holding back on THIS
                    // diagnostic: MCAT, has a diagnostic on file, no active
                    // waiver, and hasn't sat this one yet.
                    const blocked = d.courseKey === 'mcat'
                      ? d.students.filter(s => !s.takenAt && s.hasPriorDiagnostic && !s.retakeWaiverActive)
                      : []
                    return blocked.length > 1 ? (
                      <button
                        onClick={() => waiveAllBlocked(d, blocked)}
                        className="mb-3 inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-accent hover:text-accent dark:border-gray-600 dark:text-gray-200 dark:hover:border-accent-muted dark:hover:text-accent-muted"
                      >
                        <Unlock className="h-3.5 w-3.5" aria-hidden="true" />
                        Allow retake for all {blocked.length} still blocked
                      </button>
                    ) : null
                  })()}
                  <div className="grid gap-1.5 sm:grid-cols-2">
                    {d.students.map(s => (
                      <div key={s.userId} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-lg bg-gray-50 px-3 py-1.5 text-sm dark:bg-gray-700/50">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{s.name}</span>
                        <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-gray-600 dark:text-gray-400">
                          {s.takenAt ? (
                            <>
                              <span>
                                {s.scoreLabel ?? '—'}
                                {s.sections && s.sections.length > 0
                                  ? ` (${s.sections.map(sec => `${sec.short} ${sec.scaled}`).join(' · ')})`
                                  : s.mathScore !== null && s.rwScore !== null
                                  ? ` (M ${s.mathScore} · RW ${s.rwScore})`
                                  : s.percentage !== null ? ` (${s.percentage}%)` : ''}
                              </span>
                              {s.growthDelta !== null && s.growthFromTitle && d.growth && (
                                <ChangeChip delta={s.growthDelta} band={d.growth.noiseBand} label={`vs ${s.growthFromTitle}`} />
                              )}
                              {s.attemptCount >= 2 && s.scoreDelta !== null && (
                                <span
                                  className={`inline-flex items-center gap-1 text-xs font-medium ${
                                    s.scoreDelta > 0
                                      ? 'text-green-600 dark:text-green-400'
                                      : s.scoreDelta < 0
                                      ? 'text-red-600 dark:text-red-400'
                                      : 'text-gray-500 dark:text-gray-400'
                                  }`}
                                  title={s.latestEstimatedScore !== null ? `Latest attempt: ${s.latestEstimatedScore} (first sitting shown)` : undefined}
                                >
                                  {s.scoreDelta >= 0
                                    ? <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                                    : <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />}
                                  {s.latestEstimatedScore !== null && <span>{s.latestEstimatedScore}</span>}
                                  {s.scoreDelta >= 0 ? `+${s.scoreDelta}` : s.scoreDelta} since last attempt
                                </span>
                              )}
                            </>
                          ) : (
                            <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/40 dark:text-red-300">not taken</span>
                          )}
                          {/* The retake gate is what keeps a student off the
                              NEXT diagnostic, so this control has to be on the
                              row where they haven't taken it — it used to hide
                              inside the `takenAt` branch, i.e. everywhere
                              except where the teacher needed it. */}
                          {d.courseKey === 'mcat' && s.hasPriorDiagnostic && (
                            s.retakeWaiverActive ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">
                                <Unlock className="h-3 w-3" aria-hidden="true" /> retake unlocked
                              </span>
                            ) : (
                              <button
                                onClick={() => waiveGate(s)}
                                className="rounded-full border border-gray-300 px-2 py-0.5 text-xs font-medium text-gray-600 transition hover:border-accent hover:text-accent dark:border-gray-600 dark:text-gray-300 dark:hover:border-accent-muted dark:hover:text-accent-muted"
                              >
                                Allow retake now
                              </button>
                            )
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <ConfirmDialog request={confirmReq} onClose={() => setConfirmReq(null)} />
    </div>
  )
}
