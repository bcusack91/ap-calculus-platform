'use client'

import { useCallback, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, Calculator, Clock, FileText, Layers } from 'lucide-react'
import { buildPsatForm, PSAT_PRACTICE_TESTS, type SATFullTest } from '@/data/sat-practice/test-generator'
import { psatSelectionIndexOf } from '@/lib/psat-scoring'

const SATTestWrapper = dynamic(() => import('@/components/SATFullTest').then((mod) => mod.SATTestWrapper), {
  ssr: false,
  loading: () => (
    <div className="min-h-[400px] animate-pulse rounded-xl bg-gray-100 p-8 dark:bg-gray-800">
      <div className="mb-6 h-8 w-64 rounded bg-gray-200 dark:bg-gray-700" />
      <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  ),
})

interface PsatAttempt {
  id: string
  testNumber: number
  rwScore: number
  mathScore: number
  totalScore: number
  rwTier: string | null
  mathTier: string | null
  completedAt: string
}

const SIGN_UP_HREF = `/auth/signup?callbackUrl=${encodeURIComponent('/psat-practice')}`

export default function PsatPracticeClient() {
  const { status } = useSession()
  const [activeTest, setActiveTest] = useState<SATFullTest | null>(null)
  const [starting, setStarting] = useState<number | null>(null)
  const [history, setHistory] = useState<PsatAttempt[]>([])
  const [historyLoaded, setHistoryLoaded] = useState(false)

  const fetchHistory = useCallback(async () => {
    try {
      const res = await fetch('/api/sat-practice/history?exam=psat')
      if (res.ok) {
        const data = await res.json()
        setHistory(Array.isArray(data?.attempts) ? data.attempts : [])
      }
    } catch {
      // History is a convenience; the forms still work without it.
    } finally {
      setHistoryLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (status === 'authenticated') void fetchHistory()
  }, [status, fetchHistory])

  const startTest = useCallback(async (testNumber: number) => {
    setStarting(testNumber)
    try {
      // The unrouted form at the current form version (carried on the test
      // object through routing and submit); each Module 2 is routed in the
      // runner with the same shared builder the server grades with.
      setActiveTest(await buildPsatForm(testNumber))
    } finally {
      setStarting(null)
    }
  }, [])

  if (activeTest) {
    return (
      <div className="min-h-screen bg-gray-50 py-6 dark:bg-gray-950">
        <div className="container px-4">
          <SATTestWrapper test={activeTest} onComplete={() => { void fetchHistory() }} onCancel={() => setActiveTest(null)} />
        </div>
      </div>
    )
  }

  const signedIn = status === 'authenticated'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-5xl">
          <nav className="mb-4 text-sm">
            <Link href="/psat" className="rounded text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted">
              ← PSAT hub
            </Link>
          </nav>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">PSAT/NMSQT Practice Tests</h1>
            <p className="mt-2 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Three full-length, adaptive Digital PSAT/NMSQT simulations: two Reading &amp; Writing modules and two Math
              modules, with your second module in each section routed harder or easier by how Module 1 went, just like the
              real test. Scored on the 320–1520 scale with your estimated National Merit Selection Index.
            </p>
          </header>

          <section aria-labelledby="psat-forms" className="mb-10">
            <h2 id="psat-forms" className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">Choose a practice test</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PSAT_PRACTICE_TESTS.map((pt) => {
                const attempts = history.filter((a) => a.testNumber === pt.id)
                const best = attempts.length ? Math.max(...attempts.map((a) => a.totalScore)) : null
                return (
                  <div key={pt.id} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{pt.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{pt.description}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" /> 98 questions · 2 h 14 min
                    </p>
                    {best !== null && (
                      <p className="mt-3 rounded-lg bg-gray-50 p-2 text-center text-sm text-gray-700 dark:bg-gray-700/50 dark:text-gray-200">
                        Best: <span className="font-bold text-gray-900 dark:text-white">{best}</span>/1520 · {attempts.length} attempt{attempts.length === 1 ? '' : 's'}
                      </p>
                    )}
                    <div className="mt-auto pt-4">
                      {signedIn ? (
                        <button
                          type="button"
                          onClick={() => { void startTest(pt.id) }}
                          disabled={starting !== null}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 dark:focus-visible:ring-offset-gray-800"
                        >
                          {starting === pt.id ? 'Preparing…' : 'Start full test'}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      ) : (
                        <Link
                          href={SIGN_UP_HREF}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
                        >
                          {status === 'loading' ? 'Checking sign-in…' : 'Sign up free to start'}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {signedIn && historyLoaded && history.length > 0 && (
            <section aria-labelledby="psat-history" className="mb-10">
              <h2 id="psat-history" className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">Your results</h2>
              <ul className="divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
                {history.slice(0, 10).map((a) => {
                  const date = new Date(a.completedAt).toLocaleDateString()
                  return (
                    <li key={a.id} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-3 text-sm">
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white">PSAT Practice Test {a.testNumber}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {date} · R&amp;W {a.rwScore} · Math {a.mathScore} · Selection Index {psatSelectionIndexOf(a.rwScore, a.mathScore)}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>
                          <span className="font-bold text-gray-900 dark:text-white">{a.totalScore}</span>
                          <span className="text-gray-500 dark:text-gray-400">/1520</span>
                        </span>
                        <Link
                          href={`/review/sat-practice/${a.id}`}
                          className="rounded font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
                          aria-label={`Review PSAT Practice Test ${a.testNumber} from ${date}`}
                        >
                          Review
                        </Link>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>
          )}

          <section aria-labelledby="psat-about" className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 id="psat-about" className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">About the Digital PSAT/NMSQT</h2>
            <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-300">
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-medium text-gray-800 dark:text-gray-100">
                  <Layers className="h-4 w-4" aria-hidden="true" /> Test structure
                </h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Reading &amp; Writing: 2 modules × 27 questions, 32 minutes each</li>
                  <li>Math: 2 modules × 22 questions, 35 minutes each (calculator allowed)</li>
                  <li>Module 2 is harder or easier depending on Module 1</li>
                  <li>Same skills as the SAT, with fewer of the very hardest questions</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-medium text-gray-800 dark:text-gray-100">
                  <Calculator className="h-4 w-4" aria-hidden="true" /> Scoring
                </h3>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Each section 160–760; total 320–1520</li>
                  <li>Selection Index = 2 × R&amp;W ÷ 10 + Math ÷ 10 (48–228)</li>
                  <li>Practice scores are estimates, shown with a likely range</li>
                  <li>
                    <Link href="/psat-selection-index" className="rounded font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted">
                      Selection Index calculator with state cutoffs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              Every question can be reviewed afterwards, and missed ones go to your mistake log.
              Preparing for the SAT too? <Link href="/sat-practice" className="rounded font-medium text-accent hover:underline dark:text-accent-muted">SAT practice tests</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
