'use client'

// ASVAB diagnostic (asvab-pipeline PLAN.md, B1). Three fixed 50-question forms
// rotated with pickNextForm; data and scoring in src/data/asvab-diagnostic.ts,
// estimates in src/lib/asvab-scoring.ts. Stores category 'asvab-diagnostic-<form>'.

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDiagnosticPlanAccess, DiagnosticPlanPaywall } from '@/components/DiagnosticPlanLock'
import DiagnosticReview from '@/components/DiagnosticReview'
import StartStudyPlanButton from '@/components/StartStudyPlanButton'
import { MathText } from '@/components/MathText'
import { SafeSvgFigure } from '@/components/MCATDiagnosticVisuals'
import { shuffleOptions } from '@/lib/shuffle-options'
import { signUpUrl } from '@/lib/auth-redirect'
import { pastAttemptReviewHref } from '@/lib/diagnostic-attempt-scores'
import {
  generateAsvabDiagnostic,
  scoreAsvabDiagnostic,
  pickNextForm,
  TOTAL_FORMS,
  ASVAB_DIAGNOSTIC_DOMAIN_NAMES,
  ASVAB_DIAGNOSTIC_TIME_LIMIT_MINUTES,
  DIAGNOSTIC_BLUEPRINT,
  type AsvabDiagnosticTestData,
  type AsvabDiagnosticResults,
} from '@/data/asvab-diagnostic'
import type { LineScoreEstimate } from '@/lib/asvab-scoring'

const PAGE_BG = 'min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900'
const CARD = 'rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'
const TOTAL_ITEMS = DIAGNOSTIC_BLUEPRINT.reduce((n, b) => n + b.count, 0)

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

interface HistoryEntry {
  id: string
  category: string
  results: Record<string, unknown> | null
  createdAt: string
}

function rangeText(low: number, high: number, point: number): string {
  return low === high ? String(point) : `${low}–${high}`
}

function LineScoreTable({ scores }: { scores: LineScoreEstimate[] }) {
  const services = ['Army', 'Marine Corps', 'Air Force', 'Navy'] as const
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => {
        const rows = scores.filter((s) => s.service === service)
        if (rows.length === 0) return null
        return (
          <div key={service} className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
            <h4 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">{service}</h4>
            <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">{rows[0].scaleLabel}</p>
            <table className="w-full text-sm">
              <tbody>
                {rows.map((r) => (
                  <tr key={r.code} className="border-t border-gray-100 dark:border-gray-700/60">
                    <td className="py-1 pr-2 font-semibold text-gray-800 dark:text-gray-200">{r.code}</td>
                    <td className="py-1 pr-2 text-xs text-gray-500 dark:text-gray-400">{r.name}</td>
                    <td className="py-1 text-right tabular-nums text-gray-900 dark:text-white">{rangeText(r.low, r.high, r.score)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {service === 'Army' && (
              <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400">GT = AR + VE. The other Army areas are official weighted blends, not simple sums.</p>
            )}
            {service === 'Navy' && (
              <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400">Navy scores are raw sums of standard scores; each rating sets its own cutoff.</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function ASVABDiagnosticPage() {
  const planAccess = useDiagnosticPlanAccess()
  const { status } = useSession()
  const router = useRouter()

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')
  const [testData, setTestData] = useState<AsvabDiagnosticTestData | null>(null)
  const [results, setResults] = useState<AsvabDiagnosticResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [eliminated, setEliminated] = useState<Set<number>[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [saveError, setSaveError] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') router.push(signUpUrl({ callbackUrl: '/asvab-diagnostic', reason: 'diagnostic', label: 'ASVAB' }))
  }, [status, router])

  const loadHistory = useCallback(() => {
    fetch('/api/asvab-diagnostic/history')
      .then((r) => (r.ok ? r.json() : { attempts: [] }))
      .then((data) => setHistory(data.attempts ?? []))
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (status === 'authenticated') loadHistory()
  }, [status, loadHistory])

  const finish = useCallback(async () => {
    if (!testData) return
    if (timerRef.current) clearInterval(timerRef.current)
    const scored = scoreAsvabDiagnostic(testData.form, testData.questions, answers)
    setResults(scored)
    setPhase('results')
    setSaveError(false)
    try {
      const res = await fetch('/api/asvab-diagnostic/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: `asvab-diagnostic-${testData.form}`,
          results: { review: { questions: testData.questions, answers, domainNames: ASVAB_DIAGNOSTIC_DOMAIN_NAMES }, ...scored },
          weakAreas: scored.weakAreas,
          strengths: scored.strengths.join(', '),
        }),
      })
      if (!res.ok) setSaveError(true)
      loadHistory()
    } catch {
      setSaveError(true)
    }
  }, [testData, answers, loadHistory])

  // Keep the latest finish() for the timer without restarting it each answer.
  const finishRef = useRef(finish)
  useEffect(() => { finishRef.current = finish }, [finish])

  useEffect(() => {
    if (phase !== 'testing') return
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          void finishRef.current()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  const startTest = useCallback(() => {
    const previousForms = [...history]
      .reverse()
      .map((h) => Number(h.results?.form))
      .filter((f): f is number => Number.isFinite(f))
    const data = generateAsvabDiagnostic(pickNextForm(previousForms))
    data.questions = data.questions.map((q) => {
      if (q.noShuffle) return q
      const s = shuffleOptions(q.options, q.correctAnswer, q.id)
      return { ...q, options: s.options, correctAnswer: s.correctIndex }
    })
    setTestData(data)
    setResults(null)
    setCurrentIndex(0)
    setAnswers(new Array(data.questions.length).fill(null))
    setEliminated(Array.from({ length: data.questions.length }, () => new Set<number>()))
    setTimeRemaining(data.timeLimitMinutes * 60)
    setPhase('testing')
  }, [history])

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <div className={PAGE_BG}>
        <div className="container py-12"><div className="mx-auto max-w-2xl space-y-6"><div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" /><div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" /></div></div>
      </div>
    )
  }

  /* ------------------------------ TESTING ------------------------------ */
  if (phase === 'testing' && testData) {
    const q = testData.questions[currentIndex]
    const answeredCount = answers.filter((a) => a !== null).length
    const toggleEliminate = (i: number) => {
      setEliminated((prev) => {
        const next = prev.map((s) => new Set(s))
        const set = next[currentIndex]
        if (set.has(i)) set.delete(i)
        else {
          set.add(i)
          if (answers[currentIndex] === i) setAnswers((a) => a.map((v, k) => (k === currentIndex ? null : v)))
        }
        return next
      })
    }
    return (
      <div className={`${PAGE_BG} py-6`}>
        <div className="container"><div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentIndex + 1}/{testData.questions.length}</span>
              <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200 sm:w-32 dark:bg-gray-700"><div className="h-full rounded-full bg-green-600 transition-all" style={{ width: `${((currentIndex + 1) / testData.questions.length) * 100}%` }} /></div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`font-mono text-sm font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>⏱ {formatTime(timeRemaining)}</span>
              <button onClick={() => { if (timerRef.current) clearInterval(timerRef.current); setPhase('menu'); setTestData(null) }} className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400">Exit</button>
            </div>
          </div>
          <div className="mb-4"><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-300">{ASVAB_DIAGNOSTIC_DOMAIN_NAMES[q.subtest]}</span></div>
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            {q.passage && (
              <div className="mb-5 rounded-xl bg-gray-50 p-4 dark:bg-gray-900/40">
                {!q.passage.svg && <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{q.passage.title}</p>}
                <MathText text={q.passage.body} className="text-sm leading-relaxed text-gray-800 dark:text-gray-200" />
                {q.passage.svg && <SafeSvgFigure svg={q.passage.svg} />}
              </div>
            )}
            <MathText text={q.question} className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200" />
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const selected = answers[currentIndex] === i
                const isOut = eliminated[currentIndex]?.has(i) ?? false
                return (
                  <div key={i} className="flex items-center gap-2">
                    <button
                      onClick={() => { if (!isOut) setAnswers((a) => a.map((v, k) => (k === currentIndex ? i : v))) }}
                      className={`flex-1 rounded-xl border px-4 py-3 text-left text-sm transition ${selected ? 'border-green-600 bg-green-50 text-green-900 dark:border-green-500 dark:bg-green-900/30 dark:text-green-200' : 'border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-green-500'}`}
                    >
                      <span className={isOut ? 'line-through opacity-50' : ''}>
                        <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>
                        <MathText inline text={opt} />
                      </span>
                    </button>
                    <button
                      onClick={() => toggleEliminate(i)}
                      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${isOut ? 'bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-200' : 'text-gray-400 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/30'}`}
                      title={isOut ? 'Restore this answer' : 'Eliminate this answer'}
                      aria-label={isOut ? 'Restore this answer' : 'Eliminate this answer'}
                    >
                      ✕
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <button onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))} disabled={currentIndex === 0} className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-400">← Previous</button>
            <span className="text-xs text-gray-500 dark:text-gray-400">{answeredCount}/{testData.questions.length} answered</span>
            {currentIndex < testData.questions.length - 1 ? (
              <button onClick={() => setCurrentIndex((p) => p + 1)} className="rounded-xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-green-800">Next →</button>
            ) : (
              <button onClick={() => void finish()} className="rounded-xl bg-gradient-to-r from-green-600 to-lime-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg">Submit Diagnostic</button>
            )}
          </div>
          <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">Unlike the real CAT-ASVAB, you can go back here. On test day you cannot return to a question once you answer it.</p>
        </div></div>
      </div>
    )
  }

  /* ------------------------------ RESULTS ------------------------------ */
  if (phase === 'results' && results) {
    const a = results.afqt
    const afqtDomains = results.domains.filter((d) => d.afqt)
    const techDomains = results.domains.filter((d) => !d.afqt)
    return (
      <div className={`${PAGE_BG} py-8`}>
        <div className="container"><div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">ASVAB Diagnostic Results</h2>
          {saveError && <p className="mb-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">We could not save this attempt. Your results are shown below, but they will not appear in your history.</p>}

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className={`${CARD} text-center sm:col-span-2`}>
              <p className="text-sm text-gray-500 dark:text-gray-400">Estimated AFQT percentile</p>
              <p className="text-5xl font-black text-green-700 dark:text-green-400">{rangeText(a.low, a.high, a.percentile)}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Most likely {a.percentile} · Category {a.categoryLow === a.categoryHigh ? a.category : `${a.categoryLow} to ${a.categoryHigh}`}
              </p>
              <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400">
                An estimate from {afqtDomains.reduce((n, d) => n + d.total, 0)} AFQT questions, not an official score. The real CAT-ASVAB is adaptive, so expect a score within this range, not an exact number.
              </p>
            </div>
            <div className={`${CARD} text-center`}>
              <p className="text-sm text-gray-500 dark:text-gray-400">Correct</p>
              <p className="text-4xl font-black text-gray-800 dark:text-gray-100">{results.totalCorrect}/{results.totalQuestions}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{results.percentage}% · Form {results.form}</p>
            </div>
          </div>

          <div className={`${CARD} mb-8`}>
            <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">Subtest breakdown</h3>
            <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Standard scores average 50 (SD 10). The AFQT uses AR + MK + 2 × VE, where VE is a weighted blend of WK and PC. Technical subtests had only 2–3 questions each, so their estimates are rough.</p>
            {[{ label: 'AFQT subtests', rows: afqtDomains }, { label: 'Technical sampler', rows: techDomains }].map((g) => (
              <div key={g.label} className="mb-4 last:mb-0">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{g.label}</p>
                <div className="space-y-3">
                  {g.rows.map((d) => (
                    <div key={d.domainId}>
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{d.domainName}</span>
                        <span className="text-xs tabular-nums text-gray-600 dark:text-gray-300">
                          {d.correct}/{d.total} · est. standard score <strong>{rangeText(d.standardScore.low, d.standardScore.high, d.standardScore.score)}</strong>
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"><div className={`h-full rounded-full ${d.level === 'strong' ? 'bg-green-500' : d.level === 'moderate' ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${d.percentage}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {results.recommendedTopics.length > 0 && !planAccess.loading && !planAccess.canAccess && <DiagnosticPlanPaywall />}
          {results.recommendedTopics.length > 0 && planAccess.canAccess && (
            <div className="mb-8 rounded-2xl border-2 border-green-300 bg-green-50 p-6 dark:border-green-700 dark:bg-green-900/20">
              <h3 className="mb-1 text-lg font-bold text-green-900 dark:text-green-300">🎯 Study these next</h3>
              <p className="mb-4 text-sm text-green-800 dark:text-green-400">Ranked by how much each topic can move your AFQT and line scores.</p>
              <div className="space-y-2">
                {results.recommendedTopics.map((t, i) => (
                  <Link key={t.slug} href={`/topics/${t.slug}/interactive`} className="group flex items-center justify-between rounded-xl border border-green-200 bg-white px-4 py-3 transition hover:border-green-400 hover:shadow-sm dark:border-green-800 dark:bg-gray-800">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800 dark:bg-green-900/50 dark:text-green-300">{i + 1}</span>
                      <div>
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-green-800 dark:text-gray-200 dark:group-hover:text-green-300">{t.name}</span>
                        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{t.domainId} · missed {t.missed}</span>
                        <span className={`ml-2 rounded-full px-2 py-0.5 text-xs ${t.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>{t.priority === 'high' ? 'High priority' : 'Medium priority'}</span>
                      </div>
                    </div>
                    <span className="text-green-600 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <StartStudyPlanButton diagnosticPath="/asvab-diagnostic" className="mb-8" />

          <div className={`${CARD} mb-8`}>
            <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">Line-score estimates</h3>
            <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Services use these composites to decide which jobs you qualify for. Rough estimates with ranges; job cutoffs change, so confirm with a recruiter.</p>
            <LineScoreTable scores={results.lineScores} />
          </div>

          {testData && <DiagnosticReview questions={testData.questions} answers={answers} domainNames={ASVAB_DIAGNOSTIC_DOMAIN_NAMES} accentColor="green" />}

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button onClick={startTest} className="rounded-xl border-2 border-green-600 py-3 font-semibold text-green-700 transition hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20">Take Next Diagnostic</button>
            <Link href="/asvab" className="rounded-xl bg-gradient-to-r from-green-600 to-lime-600 py-3 text-center font-semibold text-white shadow transition hover:shadow-lg">ASVAB Course</Link>
            <Link href="/asvab-score-predictor" className="rounded-xl border border-green-300 py-3 text-center font-semibold text-green-800 transition hover:bg-green-50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/20">Score Predictor</Link>
            <Link href="/asvab-afqt-calculator" className="rounded-xl border border-green-300 py-3 text-center font-semibold text-green-800 transition hover:bg-green-50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/20">AFQT Calculator</Link>
          </div>
        </div></div>
      </div>
    )
  }

  /* ------------------------------ MENU ------------------------------ */
  const last = history[0]?.results ?? null
  const lastAfqt = last?.afqt as { percentile?: number; low?: number; high?: number; category?: string } | undefined
  const lastRecs = last?.recommendedTopics as { slug: string; name: string; priority: string }[] | undefined
  const nextForm = pickNextForm([...history].reverse().map((h) => Number(h.results?.form)).filter((f) => Number.isFinite(f)))

  return (
    <div className={PAGE_BG}>
      <div className="container py-8 sm:py-12"><div className="mx-auto max-w-2xl">
        <Link href="/asvab" className="mb-4 inline-block text-sm text-green-700 hover:underline dark:text-green-400">← ASVAB</Link>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">ASVAB Diagnostic Test</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Find out where your AFQT stands today and which lessons will raise it fastest.</p>

        {lastRecs && lastRecs.length > 0 && (
          <div className="mb-6 rounded-2xl border-2 border-green-300 bg-green-50 p-6 dark:border-green-700 dark:bg-green-900/20">
            <h3 className="mb-1 text-base font-bold text-green-900 dark:text-green-300">🎯 Your current study list</h3>
            <p className="mb-3 text-sm text-green-800 dark:text-green-400">From your last diagnostic. Work through these, then take the next form.</p>
            <div className="space-y-2">
              {lastRecs.map((t, i) => (
                <Link key={t.slug} href={`/topics/${t.slug}/interactive`} className="group flex items-center justify-between rounded-xl border border-green-200 bg-white px-4 py-3 transition hover:border-green-400 dark:border-green-800 dark:bg-gray-800">
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200"><span className="mr-2 text-xs font-bold text-green-700 dark:text-green-400">{i + 1}</span>{t.name}</span>
                  <span className="text-green-600 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {last && history[0] && (
          <div className={`${CARD} mb-6`}>
            <h3 className="mb-3 text-sm font-medium uppercase text-gray-500 dark:text-gray-400">Most recent result</h3>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  {lastAfqt?.low != null && lastAfqt?.high != null && lastAfqt?.percentile != null ? `AFQT ${rangeText(lastAfqt.low, lastAfqt.high, lastAfqt.percentile)}` : '—'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated AFQT{lastAfqt?.category ? ` · Category ${lastAfqt.category}` : ''}</p>
              </div>
              <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                <p>{String(last.totalCorrect ?? '—')}/{String(last.totalQuestions ?? '—')} correct</p>
                <p className="text-xs text-gray-400">Form {String(last.form ?? '—')} · {new Date(history[0].createdAt).toLocaleDateString()}</p>
                <Link href={pastAttemptReviewHref(history[0])} className="text-xs font-semibold text-green-700 hover:underline dark:text-green-400">Review this attempt →</Link>
              </div>
            </div>
          </div>
        )}

        <div className={CARD}>
          <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">What to expect</h3>
          <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {[
              `${TOTAL_ITEMS} questions in ${ASVAB_DIAGNOSTIC_TIME_LIMIT_MINUTES} minutes, in the same subtest order as the CAT-ASVAB`,
              '36 questions on the four AFQT subtests (Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning, Mathematics Knowledge)',
              'A short technical sampler: science, electronics, auto, shop, mechanical and Assembling Objects',
              'An estimated AFQT percentile and category with an honest range, plus line-score estimates for each service',
              `A ranked list of lessons to study next. ${TOTAL_FORMS} different forms, so each retake has new questions`,
              'No calculator, just like the real test. Keep scratch paper handy.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="mt-0.5 text-green-600">✓</span>{item}</li>
            ))}
          </ul>
          <button onClick={startTest} className="w-full rounded-xl bg-gradient-to-r from-green-600 to-lime-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl">
            {last ? `Take Form ${nextForm}` : 'Start Diagnostic Test'}
          </button>
          <Link href="/asvab-afqt-calculator" className="mt-3 block text-center text-sm font-medium text-green-700 hover:underline dark:text-green-300">Already have scores? Use the AFQT calculator</Link>
        </div>

        {history.length > 1 && (
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium uppercase text-gray-500 dark:text-gray-400">Previous attempts</h3>
            <div className="space-y-2">
              {history.slice(1, 8).map((h) => {
                const af = h.results?.afqt as { percentile?: number; low?: number; high?: number } | undefined
                return (
                  <Link key={h.id} href={pastAttemptReviewHref(h)} className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-600/60">
                    <span className="text-sm font-semibold tabular-nums text-gray-700 dark:text-gray-300">
                      AFQT {af?.low != null && af?.high != null && af?.percentile != null ? rangeText(af.low, af.high, af.percentile) : '—'}
                      <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">Form {String(h.results?.form ?? '?')}</span>
                    </span>
                    <span className="text-xs text-gray-400">{new Date(h.createdAt).toLocaleDateString()}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div></div>
    </div>
  )
}
