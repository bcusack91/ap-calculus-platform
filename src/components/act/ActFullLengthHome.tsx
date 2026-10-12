'use client'

/**
 * /act-practice/full-length: pick a form (1-3; unfinished forms show "coming
 * soon"), choose with or without Science, resume a saved sitting, and see
 * past full-lengths with links to their results and question review.
 * Signed-in only to start (answers are graded and saved on the server).
 */

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { ArrowRight, History, Loader2, PlayCircle } from 'lucide-react'
import ActFullLengthRunner from '@/components/act/ActFullLengthRunner'
import ActScoreLogCard from '@/components/act/ActScoreLogCard'
import { signInUrl, signUpUrl } from '@/lib/auth-redirect'
import { ACT_FL_SECTION_LABELS, actFlSections } from '@/lib/act-fl-scoring'
import {
  ACT_FL_PROGRESS_EVENT,
  clearActFlProgress,
  newActFlProgress,
  readActFlProgress,
  type ActFlProgress,
} from '@/lib/act-fl-progress'
import type { ActFlPublicForm } from '@/lib/question-sources/act'
import { ACT_FL_BLUEPRINT } from '@/data/act-practice/full-length/types'

const FORMS = [1, 2, 3] as const

interface FormStatus {
  form: number
  available: boolean
}

interface PastAttempt {
  id: string
  createdAt: string
  form: number | null
  includeScience: boolean
  composite: number
  compositeRange: { low: number; high: number }
  stem: { score: number } | null
  sections: { section: string; label: string; scaled: number }[]
  reviewable: boolean
}

function newAttemptId(): string {
  try {
    return crypto.randomUUID()
  } catch {
    return `act-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
  }
}

function PastFullLengths({ attempts }: { attempts: PastAttempt[] }) {
  if (!attempts.length) return null
  return (
    <section className="mt-8" aria-labelledby="past-act-fl">
      <h2 id="past-act-fl" className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
        <History className="h-5 w-5 text-accent" aria-hidden /> Past full-lengths
      </h2>
      <ul className="divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
        {attempts.map((a) => (
          <li key={a.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white">
                {a.form ? `Form ${a.form}` : 'Full-length'}
                <span className="ml-2 font-bold text-accent">{a.composite}</span>
                <span className="ml-1 text-xs font-normal text-gray-500 dark:text-gray-400">({a.compositeRange.low}–{a.compositeRange.high})</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(a.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                {' · '}
                {a.sections.map((s) => `${s.label} ${s.scaled}`).join(' · ')}
                {a.stem ? ` · STEM ${a.stem.score}` : ''}
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/act-practice/full-length/results/${a.id}`}
                className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-accent-muted hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-200"
              >
                Results
              </Link>
              {a.reviewable && (
                <Link
                  href={`/review/act-fl/${a.id}`}
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-accent-muted hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-200"
                >
                  Review
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Missed and flagged questions also go to your <Link href="/act/mistakes" className="font-medium text-accent hover:underline">ACT mistake log</Link>.
      </p>
    </section>
  )
}

/** The student's last Science choice (per browser); Science is on until they choose otherwise. */
const SCIENCE_PREF_KEY = 'act-fl-include-science'
function readSciencePref(): boolean | null {
  try {
    const v = window.localStorage.getItem(SCIENCE_PREF_KEY)
    return v === '1' ? true : v === '0' ? false : null
  } catch {
    return null
  }
}
function writeSciencePref(on: boolean) {
  try {
    window.localStorage.setItem(SCIENCE_PREF_KEY, on ? '1' : '0')
  } catch {
    // storage unavailable — the choice just isn't remembered
  }
}

export default function ActFullLengthHome() {
  const { data: session, status } = useSession()
  const userId = session?.user?.id ?? null
  const [forms, setForms] = useState<FormStatus[] | null>(null)
  const [form, setForm] = useState<number>(1)
  const [includeScience, setIncludeScience] = useState(true)
  const [saved, setSaved] = useState<ActFlProgress[]>([])
  const [attempts, setAttempts] = useState<PastAttempt[]>([])
  const [running, setRunning] = useState<{ form: ActFlPublicForm; progress: ActFlProgress } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let live = true
    fetch('/api/act-full-length/forms', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!live || !Array.isArray(d?.forms)) return
        const pref = readSciencePref()
        if (pref !== null) setIncludeScience(pref)
        setForms(d.forms)
        const first = (d.forms as FormStatus[]).find((f) => f.available)
        if (first) setForm(first.form)
      })
      .catch(() => { if (live) setForms([]) })
    return () => { live = false }
  }, [])

  const readSaved = useCallback(() => {
    if (!userId) return setSaved([])
    setSaved(FORMS.map((f) => readActFlProgress(userId, f)).filter((x): x is ActFlProgress => !!x))
  }, [userId])

  useEffect(() => {
    readSaved()
    window.addEventListener(ACT_FL_PROGRESS_EVENT, readSaved)
    window.addEventListener('storage', readSaved)
    return () => {
      window.removeEventListener(ACT_FL_PROGRESS_EVENT, readSaved)
      window.removeEventListener('storage', readSaved)
    }
  }, [readSaved])

  useEffect(() => {
    if (status !== 'authenticated') return
    let live = true
    fetch('/api/act-full-length/history', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (live && Array.isArray(d?.attempts)) setAttempts(d.attempts) })
      .catch(() => {})
    return () => { live = false }
  }, [status])

  const start = async (formNo: number, resume: ActFlProgress | null) => {
    if (!userId) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/act-full-length/form/${formNo}`, { cache: 'no-store' })
      const d = await res.json().catch(() => ({}))
      if (!res.ok || !d.form) throw new Error(d.error || 'Could not load that form.')
      const progress = resume ?? newActFlProgress(formNo, includeScience, newAttemptId())
      setRunning({ form: d.form as ActFlPublicForm, progress })
      window.scrollTo({ top: 0 })
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load that form.')
    } finally {
      setLoading(false)
    }
  }

  if (running && userId) {
    return <ActFullLengthRunner form={running.form} userId={userId} initial={running.progress} />
  }

  const statusOf = (f: number) => forms?.find((x) => x.form === f)
  const selectedAvailable = !!statusOf(form)?.available
  const savedForSelected = saved.find((s) => s.form === form) ?? null
  const plan = actFlSections(includeScience)
  const totalMinutes = plan.reduce((n, s) => n + ACT_FL_BLUEPRINT[s].minutes, 0) + 10
  const totalQuestions = plan.reduce((n, s) => n + ACT_FL_BLUEPRINT[s].questions, 0)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container max-w-2xl px-4 py-10">
        <Link href="/act" className="text-sm font-medium text-accent hover:underline">← ACT Prep</Link>
        <h1 className="mb-3 mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">Full-length ACT practice tests</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Complete Enhanced ACT forms in the real order and timing: English, Math, Reading and optional Science, each on its own clock,
          scored 1–36 with a composite, section scores and a breakdown by ACT reporting category.
        </p>

        {status === 'authenticated' && saved.length > 0 && (
          <div className="mb-5 rounded-2xl border-2 border-accent-muted bg-accent-subtle p-4 dark:bg-accent-light/10">
            <p className="text-sm font-bold text-accent-dark dark:text-accent-muted">Test in progress</p>
            <p className="mb-3 mt-0.5 text-xs text-gray-600 dark:text-gray-300">Your answers are saved on this device. Section clocks kept running while you were away.</p>
            <div className="flex flex-wrap gap-2">
              {saved.map((s) => (
                <span key={s.form} className="inline-flex gap-2">
                  <button
                    type="button"
                    onClick={() => { void start(s.form, s) }}
                    disabled={loading || !statusOf(s.form)?.available}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-hover disabled:opacity-50"
                  >
                    <PlayCircle className="h-4 w-4" aria-hidden /> Resume Form {s.form}{s.includeScience ? '' : ' (no Science)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => { if (userId) clearActFlProgress(userId, s.form) }}
                    className="rounded-xl border border-accent-muted px-3 py-2 text-sm font-semibold text-accent-hover hover:bg-accent-light dark:text-accent-muted dark:hover:bg-accent-light/20"
                  >
                    Discard
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        <fieldset className="mb-5">
          <legend className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-100">Form</legend>
          <div className="grid grid-cols-3 gap-2">
            {FORMS.map((f) => {
              const st = statusOf(f)
              const available = !!st?.available
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => available && setForm(f)}
                  aria-pressed={form === f && available}
                  disabled={!available}
                  className={`rounded-xl border px-3 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${
                    form === f && available
                      ? 'border-accent bg-accent-subtle ring-1 ring-accent dark:bg-accent-light/15'
                      : available
                        ? 'border-gray-200 bg-white hover:border-accent-muted dark:border-gray-700 dark:bg-gray-800'
                        : 'cursor-not-allowed border-dashed border-gray-300 bg-gray-50 opacity-70 dark:border-gray-700 dark:bg-gray-900'
                  }`}
                >
                  <span className="block font-semibold text-gray-900 dark:text-white">Form {f}</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">{forms === null ? 'Checking…' : available ? 'Ready' : 'Coming soon'}</span>
                </button>
              )
            })}
          </div>
        </fieldset>

        <fieldset className="mb-5">
          <legend className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-100">Science section</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {[true, false].map((on) => (
              <label
                key={String(on)}
                className={`flex cursor-pointer items-start gap-2 rounded-xl border px-3 py-2.5 text-sm ${includeScience === on ? 'border-accent bg-accent-subtle dark:bg-accent-light/15' : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'}`}
              >
                <input type="radio" name="act-science" className="mt-1 accent-[var(--accent)]" checked={includeScience === on} onChange={() => { setIncludeScience(on); writeSciencePref(on) }} />
                <span>
                  <span className="block font-medium text-gray-900 dark:text-white">{on ? 'With Science' : 'Without Science'}</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    {on ? 'Adds the 40-minute Science section and a STEM score.' : 'English, Math and Reading only, like registering without Science.'}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <ol className="mb-5 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          {plan.map((s, i) => (
            <li key={s}>
              {i > 0 && plan[i - 1] === 'math' && (
                <div className="border-t border-gray-100 bg-gray-50 px-5 py-1 text-center text-[11px] font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-400">
                  10-minute break
                </div>
              )}
              <div className={`flex items-center justify-between px-5 py-3 ${i > 0 ? 'border-t border-gray-100 dark:border-gray-700' : ''}`}>
                <span className="font-semibold text-gray-900 dark:text-white">{ACT_FL_SECTION_LABELS[s]}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">{ACT_FL_BLUEPRINT[s].questions} Q · {ACT_FL_BLUEPRINT[s].minutes} min</span>
              </div>
            </li>
          ))}
          <li className="border-t border-gray-100 px-5 py-2 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
            {totalQuestions} questions · about {Math.round(totalMinutes / 6) / 10} hours with the break
          </li>
        </ol>

        {error && <p role="alert" className="mb-3 text-sm text-red-700 dark:text-red-400">{error}</p>}

        {status === 'authenticated' ? (
          savedForSelected ? (
            <p className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
              Form {form} is in progress: resume it above, or discard it to start over.
            </p>
          ) : (
            <button
              type="button"
              onClick={() => { void start(form, null) }}
              disabled={!selectedAvailable || loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-lg font-semibold text-accent-foreground shadow transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> : <ArrowRight className="h-5 w-5" aria-hidden />}
              {selectedAvailable ? `Start Form ${form}` : forms === null ? 'Checking forms…' : 'No form is ready yet'}
            </button>
          )
        ) : status === 'unauthenticated' ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm text-gray-700 dark:text-gray-200">Create a free account to take a full-length: we grade it, save your scores and build your mistake log.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Link href={signUpUrl({ callbackUrl: '/act-practice/full-length' })} className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover">
                Sign up free
              </Link>
              <Link href={signInUrl({ callbackUrl: '/act-practice/full-length' })} className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-accent-muted dark:border-gray-600 dark:text-gray-200">
                Sign in
              </Link>
            </div>
          </div>
        ) : (
          <div className="h-14 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" aria-busy="true" />
        )}

        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
          <p className="font-semibold">Before you start</p>
          <ul className="mt-1 list-inside list-disc space-y-0.5 text-amber-800 dark:text-amber-300">
            <li>Each section ends itself at 0:00, and once it ends you cannot go back to it.</li>
            <li>Your progress saves on this device: a reload resumes the test, but section clocks keep running while you are away.</li>
            <li>Flag questions, cross out choices and highlight passages; the review screen lists everything unanswered or flagged.</li>
            <li>Scores are estimates on our calibrated 1–36 curve, shown as ranges. Composite = average of English, Math and Reading.</li>
          </ul>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          Short on time? Try the <Link href="/act-practice" className="font-medium text-accent hover:underline">60-question practice test</Link> or build a set in the{' '}
          <Link href="/act/qbank" className="font-medium text-accent hover:underline">ACT question bank</Link>.
        </p>

        {status === 'authenticated' && <PastFullLengths attempts={attempts} />}

        <ActScoreLogCard className="mt-8" callbackUrl="/act-practice/full-length" />
      </div>
    </div>
  )
}
