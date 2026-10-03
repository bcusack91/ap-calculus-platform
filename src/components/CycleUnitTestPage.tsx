'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import 'katex/dist/katex.min.css'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import { signUpUrl } from '@/lib/auth-redirect'
import { useActivitySurface } from '@/hooks/useActivitySurface'
import type { McatUnitTestStatus } from '@/lib/mcat-unit-test-server'
import { UNIT_TEST_COURSES, type UnitTestCourse, type UnitTestCourseConfig } from '@/lib/unit-test-courses'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'

/**
 * The cycle unit test page, shared by every course in unit-test-courses.ts:
 * 25 questions on the topics the student's latest diagnostic recommended.
 * On the MCAT passing it unlocks the next diagnostic; on SAT/ACT it is the
 * recommended last step of the cycle. Failing offers a retake with fresh
 * questions (see src/lib/mcat-unit-test.ts).
 */

interface PlanTopic { slug: string; name: string; isSatisfied: boolean }
interface PublicQuestion { id: string; topicSlug: string; question: string; options: string[] }
interface Sitting { id: string; total: number; questions: PublicQuestion[] }
interface StatusResponse {
  hasPlan: boolean
  canRetakeDiagnostic?: boolean
  topics?: PlanTopic[]
  unitTest?: McatUnitTestStatus
  inProgress?: Sitting | null
  history?: { percentage: number; passed: boolean; completedAt: string }[]
}
interface ReviewItem { topicSlug: string; question: string; options: string[]; correctIndex: number; selected: number | null; explanation: string }
interface Result {
  correct: number
  total: number
  percentage: number
  passed: boolean
  passPercent: number
  byTopic: Record<string, { correct: number; total: number }>
  review: ReviewItem[]
}

const storageKey = (course: UnitTestCourse) => `${course}-unit-test-answers-v1`

function loadSavedAnswers(course: UnitTestCourse, id: string, n: number): (number | null)[] {
  try {
    const raw = localStorage.getItem(storageKey(course))
    const saved = raw ? (JSON.parse(raw) as { id?: string; answers?: unknown }) : null
    if (saved?.id === id && Array.isArray(saved.answers) && saved.answers.length === n) {
      return saved.answers.map((a) => (typeof a === 'number' ? a : null))
    }
  } catch {}
  return Array(n).fill(null)
}

function Rich({ text, className }: { text: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: renderRichText(text) }} />
}

export default function CycleUnitTestPage({ course }: { course: UnitTestCourse }) {
  const cfg = UNIT_TEST_COURSES[course]
  const api = `/api/${course}-unit-test`
  const { status } = useSession()
  const router = useRouter()
  const [data, setData] = useState<StatusResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [sitting, setSitting] = useState<Sitting | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [index, setIndex] = useState(0)
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [, setKatexReady] = useState(false)
  const startedAt = useRef<number>(Date.now())

  useActivitySurface(sitting && !result ? { surface: 'PRACTICE_TEST', courseSlug: cfg.courseSlug, timed: false } : null)

  useEffect(() => { preloadKatex().then(() => setKatexReady(true)) }, [])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(signUpUrl({ callbackUrl: cfg.path, reason: 'generic', label: cfg.label }))
    }
  }, [status, router, cfg])

  const load = useCallback(async () => {
    setError(null)
    try {
      const r = await fetch(api, { cache: 'no-store' })
      if (!r.ok) throw new Error('Could not load your unit test. Refresh to try again.')
      setData(await r.json())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load your unit test.')
    }
  }, [api])

  useEffect(() => { if (status === 'authenticated') load() }, [status, load])

  // Persist choices so a refresh mid-test keeps them (the questions themselves
  // are frozen server-side and come back on resume).
  useEffect(() => {
    if (!sitting || result) return
    try { localStorage.setItem(storageKey(course), JSON.stringify({ id: sitting.id, answers })) } catch {}
  }, [course, sitting, answers, result])

  const openSitting = useCallback((s: Sitting) => {
    setSitting(s)
    setAnswers(loadSavedAnswers(course, s.id, s.questions.length))
    setIndex(0)
    setResult(null)
    startedAt.current = Date.now()
    window.scrollTo({ top: 0 })
  }, [course])

  const start = useCallback(async () => {
    setBusy(true)
    setError(null)
    try {
      const r = await fetch(`${api}/start`, { method: 'POST' })
      const body = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(body.error || 'Could not start the unit test.')
      openSitting(body as Sitting)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not start the unit test.')
    } finally {
      setBusy(false)
    }
  }, [api, openSitting])

  const submit = useCallback(async () => {
    if (!sitting) return
    setBusy(true)
    setError(null)
    try {
      const r = await fetch(`${api}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: sitting.id, answers, timeSpent: Math.round((Date.now() - startedAt.current) / 1000) }),
      })
      const body = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(body.error || 'Could not submit. Your answers are saved — try again.')
      try { localStorage.removeItem(storageKey(course)) } catch {}
      setResult(body as Result)
      window.scrollTo({ top: 0 })
      load()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not submit.')
    } finally {
      setBusy(false)
    }
  }, [api, course, sitting, answers, load])

  const topicName = useMemo(() => {
    const m = new Map((data?.topics ?? []).map((t) => [t.slug, t.name]))
    return (slug: string) => m.get(slug) ?? slug
  }, [data])

  if (status === 'loading' || (status === 'authenticated' && !data && !error)) {
    return <Shell cfg={cfg}><p className="text-sm text-gray-500 dark:text-gray-400">Loading your unit test…</p></Shell>
  }

  // ---- Results ----
  if (result) {
    const missed = result.review.filter((q) => q.selected !== q.correctIndex)
    return (
      <Shell cfg={cfg}>
        <div className={`rounded-2xl border p-6 ${result.passed ? 'border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-900/20' : 'border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20'}`}>
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">Unit test result</p>
          <p className="mt-1 text-3xl font-bold tabular-nums text-gray-900 dark:text-white">
            {result.correct}/{result.total} · {result.percentage}%
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
            {result.passed
              ? cfg.locksDiagnostic
                ? `Passed. Your next ${cfg.label} diagnostic is unlocked.`
                : `Passed — this study cycle is complete. Retake the ${cfg.label} diagnostic to see your growth and get a new plan.`
              : `You need ${result.passPercent}% to pass. Review what you missed, then retake it — you'll get different questions.`}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {result.passed ? (
              <Link href={cfg.diagnosticPath} className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:opacity-90">
                Take your next diagnostic
              </Link>
            ) : (
              <button onClick={start} disabled={busy} className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:opacity-90 disabled:opacity-50">
                {busy ? 'Building a new test…' : 'Retake with new questions'}
              </button>
            )}
            <button onClick={() => { setResult(null); setSitting(null) }} className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
              Back to overview
            </button>
          </div>
          {error && <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>}
        </div>

        <h2 className="mt-8 text-lg font-semibold text-gray-900 dark:text-white">By topic</h2>
        <ul className="mt-3 divide-y divide-gray-200 rounded-xl border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
          {Object.entries(result.byTopic).map(([slug, t]) => (
            <li key={slug} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm">
              <Link href={`/topics/${slug}/interactive`} className="text-gray-800 hover:text-accent dark:text-gray-200">{topicName(slug)}</Link>
              <span className={`tabular-nums font-medium ${t.correct * 100 >= result.passPercent * t.total ? 'text-green-700 dark:text-green-400' : 'text-amber-700 dark:text-amber-400'}`}>
                {t.correct}/{t.total}
              </span>
            </li>
          ))}
        </ul>

        {missed.length > 0 && (
          <>
            <h2 className="mt-8 text-lg font-semibold text-gray-900 dark:text-white">What you missed ({missed.length})</h2>
            <ol className="mt-3 space-y-4">
              {missed.map((q, i) => (
                <li key={i} className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{topicName(q.topicSlug)}</p>
                  <Rich text={q.question} className="mt-1 block text-sm text-gray-900 dark:text-gray-100" />
                  <p className="mt-2 text-sm text-red-700 dark:text-red-400">
                    Your answer: {q.selected === null ? 'no answer' : <Rich text={q.options[q.selected]} />}
                  </p>
                  <p className="mt-1 text-sm text-green-700 dark:text-green-400">
                    Correct: <Rich text={q.options[q.correctIndex]} />
                  </p>
                  {q.explanation && <Rich text={q.explanation} className="mt-2 block text-sm text-gray-600 dark:text-gray-300" />}
                </li>
              ))}
            </ol>
          </>
        )}
      </Shell>
    )
  }

  // ---- Taking the test ----
  if (sitting) {
    const q = sitting.questions[index]
    const answered = answers.filter((a) => a !== null).length
    const last = index === sitting.questions.length - 1
    return (
      <Shell cfg={cfg}>
        <div className="flex items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-300">
          <span>Question {index + 1} of {sitting.questions.length}</span>
          <span className="tabular-nums">{answered} answered</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <div className="h-full bg-accent transition-all" style={{ width: `${((index + 1) / sitting.questions.length) * 100}%` }} />
        </div>

        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">{topicName(q.topicSlug)}</p>
          <Rich text={q.question} className="mt-2 block text-base text-gray-900 dark:text-gray-100" />
          <div className="mt-4 space-y-2" role="radiogroup" aria-label={`Question ${index + 1} options`}>
            {q.options.map((opt, i) => {
              const chosen = answers[index] === i
              return (
                <button
                  key={i}
                  role="radio"
                  aria-checked={chosen}
                  onClick={() => setAnswers((prev) => prev.map((a, j) => (j === index ? i : a)))}
                  className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${chosen ? 'border-accent bg-accent-subtle dark:bg-accent-light/20' : 'border-gray-200 hover:border-accent-muted dark:border-gray-600'}`}
                >
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold ${chosen ? 'border-accent bg-accent text-white' : 'border-gray-300 text-gray-500 dark:border-gray-500'}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <Rich text={opt} className="text-gray-800 dark:text-gray-100" />
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Previous
          </button>
          {last ? (
            <button
              onClick={() => {
                const blank = sitting.questions.length - answered
                if (blank > 0 && !window.confirm(`${blank} question${blank === 1 ? ' is' : 's are'} unanswered. Submit anyway?`)) return
                submit()
              }}
              disabled={busy}
              className="rounded-xl bg-accent px-5 py-2 text-sm font-semibold text-white shadow transition hover:opacity-90 disabled:opacity-50"
            >
              {busy ? 'Grading…' : 'Submit test'}
            </button>
          ) : (
            <button
              onClick={() => setIndex((i) => Math.min(sitting.questions.length - 1, i + 1))}
              className="rounded-xl bg-accent px-5 py-2 text-sm font-semibold text-white shadow transition hover:opacity-90"
            >
              Next
            </button>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5" aria-label="Jump to question">
          {sitting.questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Question ${i + 1}${answers[i] !== null ? ', answered' : ''}`}
              className={`h-8 w-8 rounded-lg text-xs font-medium tabular-nums transition ${i === index ? 'bg-accent text-white' : answers[i] !== null ? 'bg-accent-light text-accent-hover dark:bg-accent-hover dark:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {error && <p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p>}
      </Shell>
    )
  }

  // ---- Overview ----
  if (error && !data) return <Shell cfg={cfg}><p className="text-sm text-red-600 dark:text-red-400">{error}</p></Shell>
  if (!data?.hasPlan || !data.unitTest) {
    return (
      <Shell cfg={cfg}>
        <p className="text-gray-700 dark:text-gray-200">
          The unit test covers the topics your {cfg.label} diagnostic recommends. Take the diagnostic first to get your plan.
        </p>
        <Link href={cfg.diagnosticPath} className="mt-4 inline-block rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:opacity-90">
          Go to the {cfg.label} diagnostic
        </Link>
      </Shell>
    )
  }

  const ut = data.unitTest
  const topics = data.topics ?? []
  return (
    <Shell cfg={cfg}>
      <p className="text-gray-700 dark:text-gray-200">
        {ut.questionCount} questions on the {topics.length} topic{topics.length === 1 ? '' : 's'} your last diagnostic recommended,
        about {Math.round(ut.questionCount / Math.max(1, topics.length))} from each.{' '}
        {cfg.locksDiagnostic
          ? `Score ${ut.passPercent}% or better to unlock your next diagnostic.`
          : `Score ${ut.passPercent}% or better to finish this study cycle before your next diagnostic.`}
        If you don&apos;t pass, review and retake it — each retake uses questions you haven&apos;t seen whenever possible.
      </p>

      <ul className="mt-5 divide-y divide-gray-200 rounded-xl border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
        {topics.map((t) => (
          <li key={t.slug} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm">
            <span className="text-gray-800 dark:text-gray-200">{t.name}</span>
            {t.isSatisfied ? (
              <span className="text-xs font-medium text-green-700 dark:text-green-400">✓ cleared</span>
            ) : (
              <Link href={`/topics/${t.slug}/interactive`} className="text-xs font-medium text-amber-700 hover:underline dark:text-amber-400">not cleared yet →</Link>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {ut.passed ? (
          <div className="rounded-xl border border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <p className="text-sm font-semibold text-green-800 dark:text-green-300">
              Passed{ut.bestPercent !== null ? ` (${ut.bestPercent}%)` : ''} — {cfg.locksDiagnostic ? 'your next diagnostic is unlocked.' : 'this study cycle is complete.'}
            </p>
            <Link href={cfg.diagnosticPath} className="mt-3 inline-block rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:opacity-90">
              Take your next diagnostic
            </Link>
          </div>
        ) : !ut.available ? (
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
            <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">Clear every topic above first.</p>
            <p className="mt-1 text-xs text-amber-800 dark:text-amber-300">
              A topic clears when you score at least {TOPIC_CLEAR_PERCENT}% on its exit quiz (or test out on its entrance quiz). The unit test opens once all of them are cleared.
            </p>
          </div>
        ) : data.inProgress ? (
          <button onClick={() => openSitting(data.inProgress!)} className="rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow transition hover:opacity-90">
            Resume your unit test
          </button>
        ) : (
          <button onClick={start} disabled={busy} className="rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow transition hover:opacity-90 disabled:opacity-50">
            {busy ? 'Building your test…' : ut.attempts > 0 ? 'Retake with new questions' : 'Start the unit test'}
          </button>
        )}
        {error && <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>}
      </div>

      {(data.history?.length ?? 0) > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Past attempts</h2>
          <ul className="mt-2 space-y-1.5">
            {data.history!.map((h, i) => (
              <li key={i} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm dark:bg-gray-800">
                <span className="text-gray-600 dark:text-gray-300">Attempt {i + 1} · {new Date(h.completedAt).toLocaleDateString()}</span>
                <span className={`tabular-nums font-medium ${h.passed ? 'text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-200'}`}>
                  {h.percentage}%{h.passed ? ' ✓' : ''}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Shell>
  )
}

function Shell({ cfg, children }: { cfg: UnitTestCourseConfig; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href={cfg.diagnosticPath} className="text-sm text-accent hover:underline">← {cfg.label} diagnostic</Link>
      <h1 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{cfg.label} unit test</h1>
      <div className="mt-4">{children}</div>
    </main>
  )
}
