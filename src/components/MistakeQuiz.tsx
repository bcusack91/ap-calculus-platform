'use client'

/**
 * "Re-quiz my mistakes": untimed tutor mode over the student's active
 * mistakes. One question at a time; each answer is graded on the server
 * (POST /api/mistakes/answer), which shows the key and explanation and says
 * how close the item is to retiring (two correct answers in a row).
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2, PartyPopper, XCircle } from 'lucide-react'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import { Explanation, OptionList, PassageDisclosure, type ReviewPassageView } from '@/components/AttemptReview'
import { AnswerStatsSummary, sharesOf, useQuestionStat } from '@/components/AnswerStats'
import AskAboutQuestion from '@/components/AskAboutQuestion'

export type MistakeCourse = 'mcat' | 'sat' | 'act'

export interface MistakeQuizFilters {
  from?: string
  to?: string
  source?: string
  topic?: string
  section?: string
}

interface SessionItem {
  position: number
  questionKey: string
  origin: { attemptKind: string; attemptId: string; itemIndex: number; source?: string }
  question: string
  options: string[]
  passage: ReviewPassageView | null
  /** A typed-answer (grid-in) question: no options; the student types a value. */
  typed?: boolean
  topicSlug?: string
  discipline?: string
  correctSince: number
}

interface AnswerResult {
  correct: boolean
  correctIndex: number
  /** For typed-answer questions: the accepted value. */
  acceptedAnswer?: number
  explanation: string
  correctSince: number
  retireAfter: number
  retired: boolean
}

type Graded = { chosenIndex: number | null; chosenText?: string; durationMs?: number; result: AnswerResult } | { unavailable: true; reason: 'gone' | 'retired' }

export default function MistakeQuiz({
  course,
  filters = {},
  onDone,
}: {
  course: MistakeCourse
  filters?: MistakeQuizFilters
  /** Back to the log; the log refreshes, since items may have retired. */
  onDone: () => void
}) {
  const [, setReady] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [sessionId, setSessionId] = useState('')
  const [items, setItems] = useState<SessionItem[]>([])
  const [unavailable, setUnavailable] = useState(0)
  const [idx, setIdx] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [graded, setGraded] = useState<Record<number, Graded>>({})
  const [busy, setBusy] = useState(false)
  const [answerError, setAnswerError] = useState<string | null>(null)
  const [finished, setFinished] = useState(false)
  const shownAt = useRef<number>(Date.now())
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    let live = true
    preloadKatex().then(() => live && setReady(true))
    return () => {
      live = false
    }
  }, [])

  const { source, topic, section, from, to } = filters
  const [typedValue, setTypedValue] = useState('')
  useEffect(() => {
    let cancelled = false
    fetch('/api/mistakes/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ course, ...(source ? { source } : {}), ...(topic ? { topic } : {}), ...(section ? { section } : {}), ...(from ? { from } : {}), ...(to ? { to } : {}) }),
    })
      .then(async (r) => {
        if (!r.ok) throw new Error('Could not build your re-quiz. Try again in a moment.')
        return r.json()
      })
      .then((d) => {
        if (cancelled) return
        setSessionId(String(d.sessionId ?? ''))
        setItems(Array.isArray(d.items) ? d.items : [])
        setUnavailable(typeof d.unavailable === 'number' ? d.unavailable : 0)
        shownAt.current = Date.now()
      })
      .catch((e) => {
        if (!cancelled) setLoadError(e instanceof Error ? e.message : 'Could not build your re-quiz.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [course, source, topic, section, from, to])

  const item = items[idx]
  const current = item ? graded[item.position] : undefined
  // How others answered — asked for only once this question has been graded.
  const gradedNow = item && current && 'result' in current ? current : null
  const stat = useQuestionStat(gradedNow && item ? { by: 'key', questionKey: item.questionKey, options: item.options } : null)

  const submit = useCallback(
    async (chosenIndex: number | null) => {
      if (!item || busy) return
      setBusy(true)
      setAnswerError(null)
      const durationMs = Math.min(Date.now() - shownAt.current, 60 * 60 * 1000)
      try {
        const r = await fetch('/api/mistakes/answer', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            course,
            sessionId,
            position: item.position,
            questionKey: item.questionKey,
            origin: { attemptKind: item.origin.attemptKind, attemptId: item.origin.attemptId, itemIndex: item.origin.itemIndex },
            chosenIndex: item.typed ? null : chosenIndex,
            ...(item.typed && typedValue.trim() ? { chosenText: typedValue.trim() } : {}),
            durationMs,
          }),
        })
        // 410: the question can't be rebuilt any more. 404: it already left the
        // log (answered correctly twice elsewhere since this re-quiz started).
        if (r.status === 410 || r.status === 404) {
          setGraded((g) => ({ ...g, [item.position]: { unavailable: true, reason: r.status === 404 ? 'retired' : 'gone' } }))
          return
        }
        if (!r.ok) throw new Error('Could not check that answer. Try again.')
        const result = (await r.json()) as AnswerResult
        setGraded((g) => ({ ...g, [item.position]: { chosenIndex, chosenText: item.typed ? typedValue.trim() : undefined, durationMs, result } }))
      } catch (e) {
        setAnswerError(e instanceof Error ? e.message : 'Could not check that answer.')
      } finally {
        setBusy(false)
      }
    },
    [item, busy, course, sessionId, typedValue],
  )

  const next = () => {
    setChoice(null)
    setTypedValue('')
    setAnswerError(null)
    if (idx + 1 >= items.length) {
      setFinished(true)
    } else {
      setIdx(idx + 1)
      shownAt.current = Date.now()
    }
    requestAnimationFrame(() => headingRef.current?.focus())
  }

  const skippedNote =
    unavailable > 0 ? (
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {unavailable} question{unavailable === 1 ? '' : 's'} couldn&apos;t be rebuilt and {unavailable === 1 ? 'was' : 'were'} skipped.
      </p>
    ) : null

  const card = 'rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800'
  const primaryBtn =
    'inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:cursor-not-allowed disabled:opacity-50'
  const secondaryBtn =
    'inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:opacity-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700'

  if (loading) {
    return (
      <div className={card} aria-busy="true">
        <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Building your re-quiz…
        </p>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className={card}>
        <p role="alert" className="text-sm text-red-700 dark:text-red-400">{loadError}</p>
        <button type="button" onClick={onDone} className={`${secondaryBtn} mt-4`}>Back to the log</button>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className={`${card} space-y-3`}>
        <p className="text-sm text-gray-700 dark:text-gray-200">There are no questions to re-quiz right now.</p>
        {skippedNote}
        <button type="button" onClick={onDone} className={secondaryBtn}>Back to the log</button>
      </div>
    )
  }

  if (finished) {
    const results = Object.values(graded).filter((g): g is Extract<Graded, { result: AnswerResult }> => 'result' in g)
    const correct = results.filter((g) => g.result.correct).length
    const retired = results.filter((g) => g.result.retired).length
    return (
      <div className={`${card} space-y-4`}>
        <h2 ref={headingRef} tabIndex={-1} className="text-xl font-bold text-gray-900 focus:outline-none dark:text-white">Re-quiz complete</h2>
        <dl className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900/40">
            <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Correct</dt>
            <dd className="text-2xl font-bold text-gray-900 dark:text-white">{correct} of {results.length}</dd>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900/40">
            <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Retired from your log</dt>
            <dd className="text-2xl font-bold text-gray-900 dark:text-white">{retired}</dd>
          </div>
        </dl>
        {skippedNote}
        <button type="button" onClick={onDone} className={primaryBtn}>Back to the log</button>
      </div>
    )
  }

  // A typed question this server can't grade (no key came back) can only be skipped.
  const typedOnly = item.options.length === 0 && !item.typed
  const answered = current && 'result' in current ? current : null

  return (
    <div className={`${card} space-y-4`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 ref={headingRef} tabIndex={-1} className="text-sm font-semibold text-gray-700 focus:outline-none dark:text-gray-200">
          Question {idx + 1} of {items.length}
        </h2>
        {item.discipline && (
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">{item.discipline}</span>
        )}
      </div>
      {idx === 0 && skippedNote}

      {item.passage && (item.passage.body || item.passage.figure != null) && <PassageDisclosure key={item.position} passage={item.passage} defaultOpen />}

      <div className="text-base text-gray-900 dark:text-gray-100" dangerouslySetInnerHTML={{ __html: renderRichText(item.question) }} />

      {current && 'unavailable' in current ? (
        <p className="rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-600 dark:bg-gray-900/40 dark:text-gray-300">
          {current.reason === 'retired'
            ? 'This question already left your log — you answered it correctly twice since this re-quiz began.'
            : 'This question is no longer available, so it was skipped.'}
        </p>
      ) : typedOnly ? (
        <p className="rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-600 dark:bg-gray-900/40 dark:text-gray-300">
          This is a typed-answer question. Re-quizzing typed answers isn&apos;t available yet; open the attempt from your log to review it.
        </p>
      ) : answered ? (
        <>
          <div
            role="status"
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${answered.result.correct ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}
          >
            {answered.result.correct ? <CheckCircle2 className="h-5 w-5" aria-hidden /> : <XCircle className="h-5 w-5" aria-hidden />}
            {answered.result.correct ? 'Correct' : answered.chosenIndex === null && !answered.chosenText ? 'Not answered' : 'Incorrect'}
          </div>
          {item.typed ? (
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Your answer: <span className="font-semibold">{answered.chosenText || '—'}</span>
              {answered.result.acceptedAnswer !== undefined && (
                <> · Accepted answer: <span className="font-semibold">{answered.result.acceptedAnswer}</span></>
              )}
            </p>
          ) : (
            <OptionList
              item={{ options: item.options, correctIndex: answered.result.correctIndex }}
              chosenIndex={answered.chosenIndex}
              shares={sharesOf(stat, item.options.length)}
            />
          )}
          <AnswerStatsSummary stat={stat} durationMs={answered.durationMs} />
          <Explanation text={answered.result.explanation} />
          <AskAboutQuestion
            key={item.position}
            target={{ questionKey: item.questionKey, origin: { attemptKind: item.origin.attemptKind, attemptId: item.origin.attemptId, itemIndex: item.origin.itemIndex } }}
          />
          <p className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-200">
            {answered.result.retired ? (
              <>
                <PartyPopper className="h-4 w-4 text-accent" aria-hidden /> Retired from your log 🎉
              </>
            ) : (
              <>
                {answered.result.correctSince} of {answered.result.retireAfter} correct — retires after {answered.result.retireAfter}
              </>
            )}
          </p>
        </>
      ) : item.typed ? (
        <div>
          <label htmlFor={`typed-${item.position}`} className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Your answer <span className="font-normal text-gray-500 dark:text-gray-400">(a number, fraction or decimal)</span>
          </label>
          <input
            id={`typed-${item.position}`}
            type="text"
            inputMode="decimal"
            autoComplete="off"
            maxLength={20}
            value={typedValue}
            onChange={(e) => setTypedValue(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && typedValue.trim()) void submit(null) }}
            className="mt-1 w-40 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-ring dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </div>
      ) : (
        <div role="radiogroup" aria-label="Answer choices" className="space-y-2">
          {item.options.map((opt, oi) => (
            <button
              key={oi}
              type="button"
              role="radio"
              aria-checked={choice === oi}
              onClick={() => setChoice(oi)}
              className={`flex w-full items-start gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${
                choice === oi
                  ? 'border-accent bg-accent-subtle text-gray-900 dark:bg-accent-light/15 dark:text-white'
                  : 'border-gray-200 bg-white text-gray-800 hover:border-accent-muted dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200'
              }`}
            >
              <span className="font-bold">{String.fromCharCode(65 + oi)}.</span>
              <span className="min-w-0 flex-1 break-words" dangerouslySetInnerHTML={{ __html: renderRichText(opt) }} />
            </button>
          ))}
        </div>
      )}

      {answerError && <p role="alert" className="text-sm text-red-700 dark:text-red-400">{answerError}</p>}

      <div className="flex flex-wrap gap-3">
        {current || typedOnly ? (
          <button type="button" onClick={next} className={primaryBtn}>
            {idx + 1 >= items.length ? 'See results' : 'Next'} <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        ) : (
          <>
            <button type="button" onClick={() => submit(choice)} disabled={(item.typed ? !typedValue.trim() : choice === null) || busy} className={primaryBtn}>
              {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null} Check answer
            </button>
            <button type="button" onClick={() => submit(null)} disabled={busy} className={secondaryBtn}>
              I don&apos;t know
            </button>
          </>
        )}
        <button type="button" onClick={onDone} className="ml-auto rounded text-sm font-medium text-gray-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-400">
          End re-quiz
        </button>
      </div>
    </div>
  )
}
