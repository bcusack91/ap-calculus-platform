'use client'

import Link from 'next/link'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from 'lucide-react'
import { MathText } from '@/components/MathText'

type Served = { attemptId: string; questions: { question: string; options: string[] }[] }
type Graded = {
  attemptId: string
  correct: number
  total: number
  overconfident: number
  confidentTotal: number
  confidentCorrect: number
  questions: {
    question: string
    options: string[]
    chosen: number | null
    correctIndex: number
    correct: boolean
    explanation: string
    cardFront: string
    cardBack: string
    rating: 'AGAIN' | 'HARD' | 'GOOD' | 'EASY'
    pulledBack: boolean
  }[]
}
type State = { required: boolean; eligible: boolean; questions: number; reviews: number; afterReviews: number; dueNow: number; doneRecently: boolean; last: { attemptId: string } | null }

const RATING_LABEL = { AGAIN: 'Again', HARD: 'Hard', GOOD: 'Good', EASY: 'Easy' } as const
/** Cloze cards store their answers as {{c1::answer}}; show the answer text. */
const plain = (s: string) => s.replace(/\{\{c\d+::(.*?)(::.*?)?\}\}/g, '$1')

const primaryBtn = 'inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-white shadow hover:bg-accent-hover disabled:opacity-50'
const secondaryBtn = 'inline-flex items-center justify-center gap-2 rounded-lg border border-accent bg-card px-5 py-3 font-semibold text-accent-dark hover:bg-accent-subtle disabled:opacity-50'

function CardCheck() {
  const resultId = useSearchParams().get('result')
  const [check, setCheck] = useState<Served | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [pos, setPos] = useState(0)
  const [result, setResult] = useState<Graded | null>(null)
  const [blocked, setBlocked] = useState<State | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const open = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      if (resultId) {
        const res = await fetch(`/api/flashcards/check?result=${encodeURIComponent(resultId)}`, { cache: 'no-store' })
        if (!res.ok) throw new Error()
        setResult((await res.json()).result)
        return
      }
      const res = await fetch('/api/flashcards/check', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'start' }) })
      const data = await res.json().catch(() => ({}))
      if (res.status === 409) {
        setBlocked(data.state ?? null)
        return
      }
      if (!res.ok || !data.check) throw new Error()
      setCheck(data.check)
      setAnswers(new Array(data.check.questions.length).fill(null))
      setPos(0)
    } catch {
      setError('We couldn’t load the card check. Check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }, [resultId])

  useEffect(() => {
    void open()
  }, [open])

  const submit = async () => {
    if (!check) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/flashcards/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'submit', attemptId: check.attemptId, answers, tzOffset: new Date().getTimezoneOffset() }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.result) throw new Error()
      setResult(data.result)
      window.scrollTo({ top: 0 })
    } catch {
      setError('We couldn’t submit your answers. Check your connection and try again; your answers are still here.')
    } finally {
      setSubmitting(false)
    }
  }

  const shell = (children: React.ReactNode) => (
    <div className="container py-8 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <Link href="/flashcards/review" className="mb-3 inline-flex items-center gap-1 text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back to flashcard review
        </Link>
        <h1 className="mb-1 text-3xl font-bold">Today&apos;s card check</h1>
        {children}
      </div>
    </div>
  )

  if (loading) return shell(<p className="mt-6 text-muted-foreground">Loading…</p>)
  if (error && !check && !result) {
    return shell(
      <div className="mt-6 rounded-xl border-2 border-red-300 bg-red-50 p-5 dark:border-red-700 dark:bg-red-950/30">
        <p className="text-red-800 dark:text-red-300" role="alert">{error}</p>
        <button type="button" onClick={() => void open()} className={`${primaryBtn} mt-4`}>Try again</button>
      </div>,
    )
  }

  if (result) {
    const missed = result.questions.filter((q) => !q.correct)
    return shell(
      <>
        <p className="mb-6 text-muted-foreground">Your flashcards count as done for today.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-accent-muted bg-accent-subtle p-5 text-center dark:bg-accent-light/10">
            <div className="text-4xl font-bold tabular-nums text-accent-dark dark:text-accent-muted">{result.correct} / {result.total}</div>
            <div className="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300">questions correct</div>
          </div>
          <div className={`rounded-xl border-2 p-5 text-center ${result.overconfident > 0 ? 'border-amber-300 bg-amber-50 dark:border-amber-600/60 dark:bg-amber-900/20' : 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/30'}`}>
            <div className="text-4xl font-bold tabular-nums text-gray-900 dark:text-gray-100">{result.confidentCorrect} / {result.confidentTotal}</div>
            <div className="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300">correct on cards you rated Good or Easy</div>
          </div>
        </div>
        <p className="mt-4 text-gray-800 dark:text-gray-200">
          {result.overconfident > 0
            ? `You rated ${result.overconfident} card${result.overconfident === 1 ? '' : 's'} Good or Easy and then missed ${result.overconfident === 1 ? 'its' : 'their'} question. ${result.overconfident === 1 ? 'That card comes' : 'Those cards come'} back tomorrow. Next time, say the whole answer before you flip a card, and press Again if you could only recognise it.`
            : result.confidentTotal > 0
              ? 'Every card you rated Good or Easy held up. Your ratings match what you know.'
              : 'None of today’s checked cards were rated Good or Easy.'}
        </p>

        <h2 className="mt-8 text-xl font-bold">{missed.length > 0 ? 'Review each question' : 'All correct. Here are the explanations.'}</h2>
        <ol className="mt-4 space-y-5">
          {result.questions.map((q, n) => (
            <li key={n} className="rounded-xl border border-card-border bg-card p-4 sm:p-5">
              <div className="flex items-start gap-2">
                {q.correct ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" aria-label="Correct" /> : <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600 dark:text-red-400" aria-label="Missed" />}
                <MathText text={`${n + 1}. ${q.question}`} className="min-w-0 flex-1 font-medium text-gray-900 dark:text-gray-100" />
              </div>
              <ul className="mt-3 space-y-1.5">
                {q.options.map((opt, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-sm ${
                      i === q.correctIndex
                        ? 'border-green-400 bg-green-50 dark:border-green-600 dark:bg-green-950/30'
                        : i === q.chosen
                          ? 'border-red-400 bg-red-50 dark:border-red-600 dark:bg-red-950/30'
                          : 'border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <MathText text={opt} inline className="min-w-0 flex-1 text-gray-800 dark:text-gray-200" />
                    {i === q.correctIndex && <span className="shrink-0 text-xs font-semibold text-green-700 dark:text-green-400">Correct answer</span>}
                    {i === q.chosen && i !== q.correctIndex && <span className="shrink-0 text-xs font-semibold text-red-700 dark:text-red-400">Your answer</span>}
                  </li>
                ))}
              </ul>
              {q.chosen == null && <p className="mt-2 text-sm font-semibold text-red-700 dark:text-red-400">You left this one blank.</p>}
              <MathText text={q.explanation} className="mt-3 text-sm text-gray-700 dark:text-gray-300" />
              <div className="mt-3 rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-800/60">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  The card · you rated it {RATING_LABEL[q.rating]}
                  {q.pulledBack && <span className="ml-2 rounded bg-amber-200 px-1.5 py-0.5 normal-case tracking-normal text-amber-900 dark:bg-amber-700/50 dark:text-amber-100">Back tomorrow</span>}
                </p>
                <MathText text={plain(q.cardFront)} className="mt-1 font-medium text-gray-900 dark:text-gray-100" />
                <MathText text={plain(q.cardBack)} className="mt-1 text-gray-700 dark:text-gray-300" />
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/flashcards/review" className={primaryBtn}>Back to flashcard review</Link>
          <Link href="/dashboard" className={secondaryBtn}>Go to my dashboard</Link>
        </div>
      </>,
    )
  }

  if (!check) {
    const s = blocked
    return shell(
      <div className="mt-6 rounded-xl border-2 border-gray-200 bg-card p-6 dark:border-gray-700">
        {s?.doneRecently ? (
          <>
            <p className="font-semibold text-gray-900 dark:text-gray-100">You&apos;ve already taken today&apos;s card check.</p>
            {s.last && <Link href={`/flashcards/check?result=${s.last.attemptId}`} className={`${secondaryBtn} mt-4`}>See the results</Link>}
          </>
        ) : s?.required ? (
          <>
            <p className="font-semibold text-gray-900 dark:text-gray-100">The card check opens when today&apos;s cards are done.</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              You have {s.dueNow} card{s.dueNow === 1 ? '' : 's'} still due. Finish them, or reach {s.afterReviews} reviews today (you&apos;re at {s.reviews}), and the check opens.
            </p>
            <Link href="/flashcards/review/start" className={`${primaryBtn} mt-4`}>Keep reviewing</Link>
          </>
        ) : (
          <>
            <p className="font-semibold text-gray-900 dark:text-gray-100">There&apos;s no card check waiting.</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">A check appears after you review cards that have check questions. Review today&apos;s cards first.</p>
            <Link href="/flashcards/review" className={`${primaryBtn} mt-4`}>Go to flashcard review</Link>
          </>
        )}
      </div>,
    )
  }

  const q = check.questions[pos]
  const answered = answers.filter((a) => a != null).length
  const last = pos === check.questions.length - 1
  return shell(
    <>
      <p className="mb-5 text-muted-foreground">
        {check.questions.length} question{check.questions.length === 1 ? '' : 's'} on the cards you reviewed. Each one asks you to use a card, not just recognise it. You&apos;ll see the answers at the end.
      </p>
      <div className="mb-4 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700" aria-hidden>
        <div className="h-2 rounded-full bg-accent transition-all" style={{ width: `${(answered / check.questions.length) * 100}%` }} />
      </div>
      <div className="rounded-xl border border-card-border bg-card p-4 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted">
          Question {pos + 1} of {check.questions.length}
        </p>
        <MathText text={q.question} className="mt-2 text-base font-medium text-gray-900 dark:text-gray-100 sm:text-lg" />
        <fieldset className="mt-4 space-y-2" disabled={submitting}>
          <legend className="sr-only">Choose an answer</legend>
          {q.options.map((opt, i) => (
            <label
              key={`${pos}-${i}`}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 px-3 py-2.5 transition-colors ${
                answers[pos] === i
                  ? 'border-accent bg-accent-subtle dark:border-accent-muted dark:bg-accent-light/20'
                  : 'border-gray-200 hover:border-accent-muted dark:border-gray-700 dark:hover:border-accent-hover'
              }`}
            >
              <input
                type="radio"
                id={`check-q${pos}-o${i}`}
                name={`check-q${pos}`}
                className="mt-1 h-4 w-4 shrink-0 accent-accent"
                checked={answers[pos] === i}
                onChange={() => setAnswers((a) => a.map((v, k) => (k === pos ? i : v)))}
              />
              <MathText text={opt} inline className="min-w-0 flex-1 text-sm text-gray-800 dark:text-gray-200 sm:text-base" />
            </label>
          ))}
        </fieldset>
      </div>
      {error && <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}
      <div className="mt-5 flex items-center justify-between gap-3">
        <button type="button" onClick={() => setPos((p) => Math.max(0, p - 1))} disabled={pos === 0 || submitting} className={secondaryBtn}>
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back
        </button>
        {last ? (
          <button type="button" onClick={() => void submit()} disabled={submitting || answered < check.questions.length} className={primaryBtn}>
            {submitting ? 'Submitting…' : 'Submit my answers'}
          </button>
        ) : (
          <button type="button" onClick={() => setPos((p) => p + 1)} disabled={answers[pos] == null} className={primaryBtn}>
            Next <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        )}
      </div>
      {last && answered < check.questions.length && (
        <p className="mt-2 text-right text-sm text-muted-foreground">Answer every question to submit ({check.questions.length - answered} left).</p>
      )}
    </>,
  )
}

export default function CardCheckPage() {
  return (
    <Suspense fallback={<div className="container py-10 text-muted-foreground">Loading…</div>}>
      <CardCheck />
    </Suspense>
  )
}
