'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, UserPlus } from 'lucide-react'
import { MathText } from '@/components/MathText'

/**
 * The checkpoint questions for one clip, reached from a short link in a
 * YouTube video (/v/<code>/questions). One question at a time, graded on the
 * server, explanation after each answer, then a summary that leads into
 * StudyMondo: the reading lesson, the exit quiz, or a free account.
 */

export type PlanQuestion = { index: number; question: string; options: string[] }

type Result = { correct: boolean; correctIndex: number; explanation: string; chosen: number }

export function PlanCheckpointQuiz({
  code,
  questions,
  signedIn,
  readHref,
  exitQuizHref,
  signupHref,
}: {
  code: string
  questions: PlanQuestion[]
  signedIn: boolean
  readHref: string
  exitQuizHref: string | null
  signupHref: string
}) {
  const [pos, setPos] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<Result | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const shownAt = useRef(0)

  const q = questions[pos]

  const submit = async () => {
    if (!q || selected === null || submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/video-lessons/plan-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, questionIndex: q.index, chosenIndex: selected, durationMs: shownAt.current ? Math.min(3_600_000, Date.now() - shownAt.current) : undefined }),
      })
      if (!res.ok) throw new Error(String(res.status))
      const body = await res.json()
      setResult({ correct: !!body.correct, correctIndex: Number(body.correctIndex), explanation: String(body.explanation ?? ''), chosen: selected })
      if (body.correct) setScore((s) => s + 1)
    } catch {
      setError('That answer didn’t go through. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const next = () => {
    if (pos + 1 < questions.length) {
      setPos(pos + 1)
      setSelected(null)
      setResult(null)
      shownAt.current = Date.now()
    } else {
      setDone(true)
    }
  }

  const optionClass = (i: number) => {
    if (result) {
      if (i === result.correctIndex) return 'border-green-500 bg-green-50 dark:border-green-500 dark:bg-green-900/20'
      if (i === result.chosen) return 'border-red-500 bg-red-50 dark:border-red-500 dark:bg-red-900/20'
      return 'border-gray-200 opacity-70 dark:border-gray-700'
    }
    return selected === i
      ? 'border-accent bg-accent-subtle dark:border-accent-muted dark:bg-accent-light/20'
      : 'border-gray-200 hover:border-accent-muted dark:border-gray-700 dark:hover:border-accent-hover'
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8" data-testid="plan-checkpoint-done">
        {score === questions.length ? (
          <CheckCircle2 className="mx-auto h-10 w-10 text-green-600 dark:text-green-400" aria-hidden />
        ) : (
          <ClipboardCheck className="mx-auto h-10 w-10 text-accent dark:text-accent-muted" aria-hidden />
        )}
        <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
          {score} of {questions.length} correct
        </p>
        <p className="mx-auto mt-2 max-w-md text-gray-600 dark:text-gray-300">
          {signedIn
            ? 'Keep going: read the full lesson, then take the topic’s exit quiz to earn credit.'
            : 'Create a free account to save your answers, follow a study plan, and take the topic’s exit quiz for credit.'}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {!signedIn && (
            <Link href={signupHref} className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover">
              <UserPlus className="h-5 w-5" aria-hidden /> Create a free account
            </Link>
          )}
          {signedIn && exitQuizHref && (
            <Link href={exitQuizHref} className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover">
              <ClipboardCheck className="h-5 w-5" aria-hidden /> Take the exit quiz
            </Link>
          )}
          <Link href={readHref} className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-6 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
            <BookOpen className="h-5 w-5" aria-hidden /> Read the full lesson
          </Link>
        </div>
      </div>
    )
  }

  if (!q) return null

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6" data-testid="plan-checkpoint">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent dark:text-accent-muted">
        Checkpoint · Question {pos + 1} of {questions.length}
      </p>
      <MathText text={q.question} className="mt-2 text-base font-medium text-gray-900 dark:text-gray-100 sm:text-lg" />
      <fieldset className="mt-4 space-y-2" disabled={!!result || submitting}>
        <legend className="sr-only">Choose an answer</legend>
        {q.options.map((opt, i) => (
          <label key={i} className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 px-3 py-2.5 transition-colors ${optionClass(i)}`}>
            <input
              type="radio"
              name={`plan-q-${pos}`}
              className="mt-1 h-4 w-4 shrink-0 accent-accent"
              checked={selected === i}
              onChange={() => {
                if (!shownAt.current) shownAt.current = Date.now()
                setSelected(i)
              }}
            />
            <MathText text={opt} inline className="text-gray-800 dark:text-gray-200" />
          </label>
        ))}
      </fieldset>
      {error && <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}
      {result ? (
        <div className="mt-4" role="status">
          <p className={`font-semibold ${result.correct ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
            {result.correct ? 'Correct!' : 'Not quite.'}
          </p>
          {result.explanation && <MathText text={result.explanation} className="mt-1 text-sm text-gray-700 dark:text-gray-300" />}
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-semibold text-white hover:bg-accent-hover">
              {pos + 1 < questions.length ? 'Next question' : 'See your score'} <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={submit}
            disabled={selected === null || submitting}
            className="w-full rounded-xl bg-accent px-6 py-2.5 font-semibold text-white hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {submitting ? 'Checking…' : 'Submit'}
          </button>
        </div>
      )}
    </div>
  )
}
