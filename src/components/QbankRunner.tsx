'use client'

/**
 * Runs one question-bank set (/mcat/qbank, /sat/qbank), one question at a
 * time with its passage beside it (stacked on phones).
 *
 *  - Tutor: "Check answer" grades the question on the server
 *    (POST /api/qbank/<id>/answer) and shows the key and explanation.
 *  - Timed: a countdown (the time actually spent, so leaving pauses it),
 *    flags, a question navigator and one submit (POST /api/qbank/<id>/submit);
 *    progress is saved as the student goes so the set can be resumed.
 *
 * The results screen links to the permanent review (/review/qbank/<id>) and
 * the mistake log.
 */

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flag,
  ListChecks,
  Loader2,
  RotateCcw,
  Send,
  XCircle,
} from 'lucide-react'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import { Explanation, OptionList, PassageContent, PassageDisclosure } from '@/components/AttemptReview'
import { AnswerStatsSummary, sharesOf, useQuestionStat } from '@/components/AnswerStats'
import AskAboutQuestion from '@/components/AskAboutQuestion'
import {
  sectionLabelFor,
  type QbankAnswer,
  type QbankFeedback,
  type QbankSessionView,
} from '@/lib/qbank-types'

const letter = (i: number) => String.fromCharCode(65 + i)

function formatClock(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${m}:${String(sec).padStart(2, '0')}`
}

const hasResponse = (a: QbankAnswer | null | undefined) => !!a && (a.chosenIndex !== null || !!a.chosenText)

const card = 'rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800'
const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-offset-gray-900'
const secondaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'

export default function QbankRunner({
  initial,
  onNew,
}: {
  initial: QbankSessionView
  /** Back to the builder for another set. */
  onNew: () => void
}) {
  const [view, setView] = useState<QbankSessionView>(initial)
  const n = view.items.length
  const timed = view.mode === 'timed'
  const [ready, setReady] = useState(false)
  const [answers, setAnswers] = useState<(QbankAnswer | null)[]>(() => initial.answers.slice())
  const [flags, setFlags] = useState<boolean[]>(() => initial.flags.slice())
  const [timings, setTimings] = useState<number[]>(() => initial.timings.slice())
  const [feedback, setFeedback] = useState<(QbankFeedback | null)[]>(() => initial.feedback.slice())
  // Start at the first question not yet done with.
  const [idx, setIdx] = useState(() => {
    const first = initial.mode === 'tutor' ? initial.feedback.findIndex((f) => !f) : initial.answers.findIndex((a) => !hasResponse(a))
    return first < 0 ? 0 : first
  })
  const [typed, setTyped] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirmSubmit, setConfirmSubmit] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const done = view.completedAt !== null

  useEffect(() => {
    let live = true
    preloadKatex().then(() => live && setReady(true))
    return () => {
      live = false
    }
  }, [])

  const item = view.items[idx]
  // Rendered once per question (the clock re-renders the runner every second).
  const html = useMemo(
    () => ({ question: item ? renderRichText(item.question) : '', options: item ? item.options.map((o) => renderRichText(o)) : [] }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item, ready],
  )
  const answer = answers[idx] ?? null
  const fb = feedback[idx] ?? null
  // How others answered — only once this question has been graded (the
  // server resolves it from the set, so nothing is readable before that).
  const stat = useQuestionStat(fb && item ? { by: 'attempt', kind: 'qbank', attemptId: view.id, itemIndex: item.index } : null)

  // Typed answers are edited in a local field; reload it on navigation.
  useEffect(() => {
    setTyped(answers[idx]?.chosenText ?? '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  /* ---------------- time ---------------- */
  const spent = timings.reduce((a, b) => a + b, 0)
  const remaining = view.timeLimitSec != null ? view.timeLimitSec - spent : null
  const counting = !done && !(view.mode === 'tutor' && fb)
  useEffect(() => {
    if (!counting) return
    const t = setInterval(() => {
      if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return
      setTimings((ts) => ts.map((v, i) => (i === idx ? Math.min(v + 1, 3600) : v)))
    }, 1000)
    return () => clearInterval(t)
  }, [counting, idx])

  /* ---------------- timed progress ---------------- */
  const latest = useRef({ answers, flags, timings })
  latest.current = { answers, flags, timings }
  const saveProgress = useCallback(
    (beacon = false) => {
      // `busy` = the set is being submitted: a save landing after it would 409.
      if (!timed || done || busy) return
      const body = JSON.stringify(latest.current)
      const url = `/api/qbank/${view.id}/progress`
      try {
        if (beacon && typeof navigator !== 'undefined' && navigator.sendBeacon) {
          navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }))
          return
        }
      } catch {
        // fall through to fetch
      }
      fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
    },
    [timed, done, busy, view.id],
  )
  // Save shortly after each answer or flag change, and every 30 s of work.
  useEffect(() => {
    if (!timed || done) return
    const t = setTimeout(() => saveProgress(), 1200)
    return () => clearTimeout(t)
  }, [answers, flags, timed, done, saveProgress])
  useEffect(() => {
    if (!timed || done) return
    const t = setInterval(() => saveProgress(), 30_000)
    const onHide = () => {
      if (document.visibilityState === 'hidden') saveProgress(true)
    }
    document.addEventListener('visibilitychange', onHide)
    return () => {
      clearInterval(t)
      document.removeEventListener('visibilitychange', onHide)
    }
  }, [timed, done, saveProgress])
  // Leaving the runner (back to the builder) keeps the latest answers.
  const saveOnLeave = useRef(saveProgress)
  saveOnLeave.current = saveProgress
  useEffect(() => () => saveOnLeave.current(true), [])

  /* ---------------- actions ---------------- */
  const goTo = useCallback(
    (i: number) => {
      if (i < 0 || i >= n) return
      setIdx(i)
      setError(null)
      setConfirmSubmit(false)
      requestAnimationFrame(() => headingRef.current?.focus())
    },
    [n],
  )

  const choose = (oi: number) => {
    if (done || (view.mode === 'tutor' && fb)) return
    setAnswers((as) => as.map((a, i) => (i === idx ? { chosenIndex: oi, chosenText: null } : a)))
  }

  const setTypedAnswer = (v: string) => {
    setTyped(v)
    if (timed) setAnswers((as) => as.map((a, i) => (i === idx ? (v.trim() ? { chosenIndex: null, chosenText: v.trim() } : null) : a)))
  }

  const toggleFlag = () => {
    if (done || (view.mode === 'tutor' && fb)) return
    setFlags((fs) => fs.map((f, i) => (i === idx ? !f : f)))
  }

  const finish = useCallback(async () => {
    setBusy(true)
    setError(null)
    try {
      const r = await fetch(`/api/qbank/${view.id}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(timed ? latest.current : {}),
      })
      const d = await r.json().catch(() => null)
      if (!r.ok || !d?.session) throw new Error(d?.error || 'Could not submit this set. Try again.')
      const s = d.session as QbankSessionView
      setView(s)
      setAnswers(s.answers)
      setFlags(s.flags)
      setTimings(s.timings)
      setFeedback(s.feedback)
      setConfirmSubmit(false)
      // Ending a set (either mode) goes to the results; only answering the
      // last tutor question keeps its explanation on screen first.
      setShowResults(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not submit this set.')
    } finally {
      setBusy(false)
    }
  }, [timed, view.id])

  // Out of time: submit what's there.
  const autoSubmitted = useRef(false)
  useEffect(() => {
    if (timed && !done && remaining !== null && remaining <= 0 && !autoSubmitted.current) {
      autoSubmitted.current = true
      void finish()
    }
  }, [timed, done, remaining, finish])

  const check = async (skip = false) => {
    if (!item || busy) return
    setBusy(true)
    setError(null)
    const chosen = skip ? null : answer
    try {
      const r = await fetch(`/api/qbank/${view.id}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          index: idx,
          chosenIndex: item.typed ? null : chosen?.chosenIndex ?? null,
          ...(item.typed && !skip && typed.trim() ? { chosenText: typed.trim() } : {}),
          seconds: timings[idx] ?? 0,
          flagged: flags[idx] === true,
        }),
      })
      const d = await r.json().catch(() => null)
      if (!r.ok || !d) throw new Error(d?.error || 'Could not check that answer. Try again.')
      const verdict: QbankFeedback = { correct: !!d.correct, correctIndex: d.correctIndex, explanation: d.explanation ?? '', ...(typeof d.acceptedAnswer === 'number' ? { acceptedAnswer: d.acceptedAnswer } : {}) }
      setFeedback((fs) => fs.map((f, i) => (i === idx ? verdict : f)))
      setAnswers((as) => as.map((a, i) => (i === idx ? (skip ? { chosenIndex: null, chosenText: null } : item.typed ? { chosenIndex: null, chosenText: typed.trim() || null } : a) : a)))
      if (d.session) {
        // The last question was answered: the set closed on the server.
        const s = d.session as QbankSessionView
        setView((v) => ({ ...v, completedAt: s.completedAt, result: s.result }))
        setFeedback(s.feedback)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not check that answer.')
    } finally {
      setBusy(false)
    }
  }

  const unanswered = useMemo(
    () => (timed ? answers.filter((a) => !hasResponse(a)).length : feedback.filter((f) => !f).length),
    [timed, answers, feedback],
  )
  const [showResults, setShowResults] = useState(initial.completedAt !== null)
  useEffect(() => {
    // Timed sets go straight to results; a tutor set shows the last explanation first.
    if (done && timed) setShowResults(true)
  }, [done, timed])

  /* ---------------- results ---------------- */
  if (done && showResults) {
    return <QbankResults view={view} feedback={feedback} timings={timings} onNew={onNew} onReview={() => setShowResults(false)} />
  }

  if (!item) return null

  // Tutor: the next question still to answer (after this one, then from the top).
  const openAfter = feedback.findIndex((f, i) => i > idx && !f)
  const nextOpen = openAfter >= 0 ? openAfter : feedback.findIndex((f) => !f)
  const showPassage = !!item.passage && (!!item.passage.body || item.passage.figure != null)
  const locked = done || (view.mode === 'tutor' && !!fb)
  const lowTime = remaining !== null && remaining <= 60

  return (
    <div className="space-y-4">
      {/* Top bar */}
      <div className={`${card} flex flex-wrap items-center gap-3 !py-3`}>
        <h2 ref={headingRef} tabIndex={-1} className="text-sm font-semibold text-gray-900 focus:outline-none dark:text-white">
          Question {idx + 1} of {n}
        </h2>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          {sectionLabelFor(view.course, item.section)} · {item.discipline}
        </span>
        <div className="ml-auto flex items-center gap-2">
          {timed && remaining !== null && !done && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-sm font-semibold tabular-nums ${lowTime ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'}`}
              aria-label={`Time remaining ${formatClock(remaining)}`}
            >
              <Clock className="h-4 w-4" aria-hidden /> {formatClock(remaining)}
            </span>
          )}
          <button
            type="button"
            onClick={toggleFlag}
            disabled={locked}
            aria-pressed={flags[idx] === true}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:cursor-not-allowed disabled:opacity-60 ${
              flags[idx]
                ? 'border-amber-400 bg-amber-50 text-amber-800 dark:border-amber-500 dark:bg-amber-900/30 dark:text-amber-200'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Flag className="h-4 w-4" aria-hidden /> {flags[idx] ? 'Flagged' : 'Flag'}
          </button>
        </div>
      </div>

      <div className={showPassage ? 'grid gap-4 lg:grid-cols-2' : ''}>
        {/* Passage: its own scrolling pane on wide screens, a disclosure on phones */}
        {showPassage && item.passage && (
          <>
            <div className={`${card} hidden max-h-[75vh] overflow-y-auto lg:block`}>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Passage{item.passage.title ? <span className="normal-case tracking-normal"> · {item.passage.title}</span> : null}
              </p>
              <PassageContent passage={item.passage} />
            </div>
            <div className="lg:hidden">
              <PassageDisclosure key={item.passage.id} passage={item.passage} defaultOpen />
            </div>
          </>
        )}

        <div className={`${card} space-y-4`}>
          <div
            className="text-base leading-relaxed text-gray-900 dark:text-gray-100"
            dangerouslySetInnerHTML={{ __html: html.question }}
          />

          {item.typed ? (
            <div>
              <label htmlFor={`qb-typed-${idx}`} className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Your answer <span className="font-normal text-gray-500 dark:text-gray-400">(a number, fraction or decimal)</span>
              </label>
              <input
                id={`qb-typed-${idx}`}
                type="text"
                inputMode="decimal"
                autoComplete="off"
                maxLength={20}
                value={typed}
                disabled={locked}
                onChange={(e) => setTypedAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !timed && typed.trim() && !fb) void check()
                }}
                className="mt-1 w-44 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-ring disabled:opacity-70 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              {fb && (
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                  Your answer: <span className="font-semibold">{answer?.chosenText || '—'}</span>
                  {fb.acceptedAnswer !== undefined && (
                    <> · Accepted answer: <span className="font-semibold">{fb.acceptedAnswer}</span></>
                  )}
                </p>
              )}
            </div>
          ) : fb ? (
            <OptionList
              item={{ options: item.options, correctIndex: fb.correctIndex }}
              chosenIndex={answer?.chosenIndex ?? null}
              ready={ready}
              shares={sharesOf(stat, item.options.length)}
            />
          ) : (
            <div role="radiogroup" aria-label="Answer choices" className="space-y-2">
              {item.options.map((opt, oi) => {
                const picked = answer?.chosenIndex === oi
                return (
                  <button
                    key={oi}
                    type="button"
                    role="radio"
                    aria-checked={picked}
                    disabled={locked}
                    onClick={() => choose(oi)}
                    className={`flex w-full items-start gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${
                      picked
                        ? 'border-accent bg-accent-subtle text-gray-900 ring-1 ring-accent dark:bg-accent-light/15 dark:text-white'
                        : 'border-gray-200 bg-white text-gray-800 hover:border-accent-muted dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <span className="font-bold">{letter(oi)}.</span>
                    <span className="min-w-0 flex-1 break-words" dangerouslySetInnerHTML={{ __html: html.options[oi] ?? opt }} />
                  </button>
                )
              })}
            </div>
          )}

          {fb && (
            <>
              <div
                role="status"
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${fb.correct ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}
              >
                {fb.correct ? <CheckCircle2 className="h-5 w-5" aria-hidden /> : <XCircle className="h-5 w-5" aria-hidden />}
                {fb.correct ? 'Correct' : hasResponse(answer) ? 'Incorrect' : 'Not answered'}
              </div>
              <AnswerStatsSummary stat={stat} durationMs={(timings[idx] ?? 0) * 1000} />
              <Explanation text={fb.explanation} ready={ready} />
              <AskAboutQuestion key={`${view.id}-${item.index}`} target={{ kind: 'qbank', attemptId: view.id, itemIndex: item.index }} />
            </>
          )}

          {error && (
            <p role="alert" className="text-sm text-red-700 dark:text-red-400">
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {timed || done ? (
              <>
                <button type="button" onClick={() => goTo(idx - 1)} disabled={idx === 0} className={secondaryBtn}>
                  <ArrowLeft className="h-4 w-4" aria-hidden /> Previous
                </button>
                {idx + 1 < n ? (
                  <button type="button" onClick={() => goTo(idx + 1)} className={primaryBtn}>
                    Next <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                ) : done ? (
                  <button type="button" onClick={() => setShowResults(true)} className={primaryBtn}>
                    See results <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                ) : null}
              </>
            ) : fb ? (
              <button type="button" onClick={() => (nextOpen >= 0 ? goTo(nextOpen) : setShowResults(true))} className={primaryBtn}>
                {nextOpen >= 0 ? 'Next question' : 'See results'} <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => check()}
                  disabled={busy || (item.typed ? !typed.trim() : answer?.chosenIndex == null)}
                  className={primaryBtn}
                >
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null} Check answer
                </button>
                <button type="button" onClick={() => check(true)} disabled={busy} className={secondaryBtn}>
                  I don&apos;t know
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Navigator + finish */}
      <div className={`${card} space-y-3`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Questions</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {done ? 'Finished' : `${n - unanswered} of ${n} ${timed ? 'answered' : 'done'}`}
            {flags.some(Boolean) ? ` · ${flags.filter(Boolean).length} flagged` : ''}
          </p>
        </div>
        <ol className="grid grid-cols-6 gap-1.5 sm:grid-cols-10">
          {view.items.map((it, i) => {
            const f = feedback[i]
            const answered = timed ? hasResponse(answers[i]) : !!f
            const state = done || (!timed && f) ? (f?.correct ? 'correct' : 'wrong') : answered ? 'answered' : 'open'
            const cls =
              state === 'correct'
                ? 'border-green-300 bg-green-50 text-green-800 dark:border-green-700 dark:bg-green-900/30 dark:text-green-200'
                : state === 'wrong'
                  ? 'border-red-300 bg-red-50 text-red-800 dark:border-red-700 dark:bg-red-900/30 dark:text-red-200'
                  : state === 'answered'
                    ? 'border-accent-muted bg-accent-subtle text-gray-900 dark:bg-accent-light/15 dark:text-white'
                    : 'border-gray-200 bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
            const label = `Question ${i + 1}${state === 'correct' ? ', correct' : state === 'wrong' ? ', incorrect' : state === 'answered' ? ', answered' : ', not answered'}${flags[i] ? ', flagged' : ''}`
            return (
              <li key={it.index}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={label}
                  aria-current={i === idx ? 'step' : undefined}
                  className={`relative flex h-9 w-full items-center justify-center rounded-md border text-xs font-semibold tabular-nums transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${cls} ${i === idx ? 'ring-2 ring-accent' : ''}`}
                >
                  {i + 1}
                  {flags[i] && <Flag className="absolute -right-1 -top-1 h-3 w-3 fill-amber-400 text-amber-500" aria-hidden />}
                </button>
              </li>
            )
          })}
        </ol>

        {!done && (
          <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-3 dark:border-gray-700">
            {confirmSubmit ? (
              <>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {unanswered > 0
                    ? `${unanswered} question${unanswered === 1 ? ' is' : 's are'} unanswered${timed ? ' and will count as skipped' : ' and will be left out'}. ${timed ? 'Submit' : 'End'} anyway?`
                    : `${timed ? 'Submit' : 'End'} this set?`}
                </p>
                <button type="button" onClick={() => void finish()} disabled={busy} className={primaryBtn}>
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
                  {timed ? 'Submit' : 'End set'}
                </button>
                <button type="button" onClick={() => setConfirmSubmit(false)} className={secondaryBtn}>
                  Keep working
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => (unanswered > 0 ? setConfirmSubmit(true) : void finish())}
                disabled={busy}
                className={timed ? primaryBtn : secondaryBtn}
              >
                {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
                {timed ? 'Submit set' : 'End set'}
              </button>
            )}
            {timed && (
              <p className="text-xs text-gray-500 dark:text-gray-400">Your progress is saved — you can leave and resume this set.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function QbankResults({
  view,
  feedback,
  timings,
  onNew,
  onReview,
}: {
  view: QbankSessionView
  feedback: (QbankFeedback | null)[]
  timings: number[]
  onNew: () => void
  onReview: () => void
}) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    headingRef.current?.focus()
  }, [])
  const total = view.items.length
  const correct = view.result?.correct ?? feedback.filter((f) => f?.correct).length
  const answered = view.result?.answered ?? 0
  const pct = total ? Math.round((correct / total) * 100) : 0
  const spent = timings.reduce((a, b) => a + b, 0)
  const bySection = new Map<string, { correct: number; total: number }>()
  view.items.forEach((it, i) => {
    const s = bySection.get(it.section) ?? { correct: 0, total: 0 }
    s.total++
    if (feedback[i]?.correct) s.correct++
    bySection.set(it.section, s)
  })

  return (
    <div className={`${card} space-y-5`}>
      <div>
        <h2 ref={headingRef} tabIndex={-1} className="text-xl font-bold text-gray-900 focus:outline-none dark:text-white">
          Set complete
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {view.mode === 'timed' ? 'Timed set' : 'Tutor set'} · {total} question{total === 1 ? '' : 's'}
        </p>
      </div>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900/40">
          <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Score</dt>
          <dd className="text-2xl font-bold text-gray-900 dark:text-white">
            {correct} / {total} <span className="text-base font-semibold text-gray-500 dark:text-gray-400">({pct}%)</span>
          </dd>
        </div>
        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900/40">
          <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Answered</dt>
          <dd className="text-2xl font-bold text-gray-900 dark:text-white">{answered}</dd>
        </div>
        <div className="col-span-2 rounded-xl bg-gray-50 p-4 sm:col-span-1 dark:bg-gray-900/40">
          <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Time</dt>
          <dd className="text-2xl font-bold text-gray-900 dark:text-white">{formatClock(spent)}</dd>
        </div>
      </dl>
      {bySection.size > 1 && (
        <ul className="space-y-1.5">
          {[...bySection.entries()].map(([section, s]) => (
            <li key={section} className="flex items-center justify-between gap-3 text-sm text-gray-700 dark:text-gray-200">
              <span>{sectionLabelFor(view.course, section)}</span>
              <span className="font-semibold tabular-nums">
                {s.correct} / {s.total}
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-3">
        <Link href={`/review/qbank/${view.id}`} className={primaryBtn}>
          Review every question <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href={`/${view.course}/mistakes`} className={secondaryBtn}>
          <ListChecks className="h-4 w-4" aria-hidden /> Your mistake log
        </Link>
        <button type="button" onClick={onNew} className={secondaryBtn}>
          <RotateCcw className="h-4 w-4" aria-hidden /> Build another set
        </button>
      </div>
      <button type="button" onClick={onReview} className="rounded text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted">
        Step back through the questions
      </button>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Questions you missed or flagged go to your mistake log. Answer one correctly twice and it retires.
      </p>
    </div>
  )
}
