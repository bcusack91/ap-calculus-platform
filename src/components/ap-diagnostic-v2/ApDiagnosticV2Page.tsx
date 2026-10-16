'use client'

/**
 * The AP diagnostic v2 page, shared by every course with a v2 blueprint
 * (src/lib/ap-diagnostic-v2). Course pages render it through
 * ApDiagnosticVersionSwitch once the course is live, or with `?diagV2=1`
 * outside production for QA.
 *
 * Differences from the v1 pages: CED-weighted units with a difficulty mix,
 * stimulus sets shown beside their questions (served whole, in order), seen
 * tracking across devices, and the 1–5 estimate shown as a ± band. Attempts
 * are stored as `<prefix>-v2` with `results.version = 2` and the review
 * copy, so history, plan-status, the predictor and teacher views read them
 * the same way as v1 attempts.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Clock, FileText, Info, Layers, Target } from 'lucide-react'
import { useDiagnosticPlanAccess, DiagnosticPlanPaywall } from '@/components/DiagnosticPlanLock'
import DiagnosticReview from '@/components/DiagnosticReview'
import ReferenceSheetModal from '@/components/ReferenceSheetModal'
import StartStudyPlanButton from '@/components/StartStudyPlanButton'
import { DiagnosticPassageContent } from '@/components/MCATDiagnosticVisuals'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import { shuffleOptions } from '@/lib/shuffle-options'
import { signUpUrl } from '@/lib/auth-redirect'
import { loadSeenKeys, recordSeenKeys } from '@/lib/diagnostic-seen'
import { attemptScoreLine, pastAttemptReviewHref } from '@/lib/diagnostic-attempt-scores'
import { AP_DIAG_V2_BLUEPRINTS, unitQuotas } from '@/lib/ap-diagnostic-v2/blueprints'
import { loadApDiagV2Bank } from '@/lib/ap-diagnostic-v2/load-bank'
import { generateApDiagnosticV2, seenKeysForServed } from '@/lib/ap-diagnostic-v2/generator'
import { scoreApDiagnosticV2 } from '@/lib/ap-diagnostic-v2/scoring'
import type { ApDiagV2Bank, ApDiagV2Course, ApDiagV2Question, ApDiagV2Results, ApDiagV2TestData } from '@/lib/ap-diagnostic-v2/types'

/** Per-course identity colours (course tool pages keep theirs; chrome stays neutral). */
const THEME: Record<ApDiagV2Course, { page: string; text: string; chip: string; button: string; border: string; soft: string; bar: string }> = {
  'ap-chemistry': {
    page: 'from-orange-50 via-white to-red-50',
    text: 'text-orange-700 dark:text-orange-300',
    chip: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    button: 'bg-orange-600 hover:bg-orange-700',
    border: 'border-orange-300 dark:border-orange-700',
    soft: 'bg-orange-50 dark:bg-orange-900/20',
    bar: 'bg-orange-500',
  },
  'ap-biology': {
    page: 'from-green-50 via-white to-emerald-50',
    text: 'text-emerald-700 dark:text-emerald-300',
    chip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
    button: 'bg-emerald-600 hover:bg-emerald-700',
    border: 'border-emerald-300 dark:border-emerald-700',
    soft: 'bg-emerald-50 dark:bg-emerald-900/20',
    bar: 'bg-emerald-500',
  },
  'ap-physics-1': {
    page: 'from-blue-50 via-white to-cyan-50',
    text: 'text-blue-700 dark:text-blue-300',
    chip: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    button: 'bg-blue-600 hover:bg-blue-700',
    border: 'border-blue-300 dark:border-blue-700',
    soft: 'bg-blue-50 dark:bg-blue-900/20',
    bar: 'bg-blue-500',
  },
  'ap-calculus-ab': {
    page: 'from-purple-50 via-white to-violet-50',
    text: 'text-purple-700 dark:text-purple-300',
    chip: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    button: 'bg-purple-600 hover:bg-purple-700',
    border: 'border-purple-300 dark:border-purple-700',
    soft: 'bg-purple-50 dark:bg-purple-900/20',
    bar: 'bg-purple-500',
  },
}

interface HistoryEntry {
  id: string
  category: string
  results: Record<string, unknown>
  createdAt: string
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
const bandText = (r: { estimatedAPScore: number; scoreRange: { low: number; high: number } }) =>
  r.scoreRange.low === r.scoreRange.high ? `${r.estimatedAPScore}` : `${r.scoreRange.low}–${r.scoreRange.high}`

function Rich({ text, className, ready }: { text: string; className?: string; ready: boolean }) {
  // `ready` re-renders once KaTeX has loaded.
  const html = useMemo(() => renderRichText(text), [text, ready]) // eslint-disable-line react-hooks/exhaustive-deps
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
}

/** The stored copy drops SVG markup (the review re-attaches diagrams from the bank). */
function reviewCopy(questions: ApDiagV2Question[]) {
  return questions.map((q) => {
    if (!q.passage?.svg) return q
    const { svg: _svg, ...passage } = q.passage
    return { ...q, passage }
  })
}

export default function ApDiagnosticV2Page({ course, qaPreview = false }: { course: ApDiagV2Course; qaPreview?: boolean }) {
  const bp = AP_DIAG_V2_BLUEPRINTS[course]
  const theme = THEME[course]
  const apiBase = `/api/${bp.seenCourse}-diagnostic`
  const category = `${bp.categoryPrefix}-v2`
  const planAccess = useDiagnosticPlanAccess()
  const { status } = useSession()
  const router = useRouter()

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')
  const [testData, setTestData] = useState<ApDiagV2TestData | null>(null)
  const [results, setResults] = useState<ApDiagV2Results | null>(null)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [eliminated, setEliminated] = useState<Set<number>[]>([])
  const [timeLeft, setTimeLeft] = useState(0)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [showReference, setShowReference] = useState(false)
  const [katexReady, setKatexReady] = useState(false)
  const [starting, setStarting] = useState(false)
  const [bank, setBank] = useState<ApDiagV2Bank | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const finishedRef = useRef(false)

  useEffect(() => { preloadKatex().then(() => setKatexReady(true)) }, [])
  useEffect(() => {
    let alive = true
    loadApDiagV2Bank(course).then((b) => alive && setBank(b))
    return () => { alive = false }
  }, [course])

  useEffect(() => {
    if (status === 'unauthenticated') router.push(signUpUrl({ callbackUrl: bp.pagePath, reason: 'diagnostic', label: bp.label }))
  }, [status, router, bp])

  const refreshHistory = useCallback(async () => {
    try {
      const r = await fetch(`${apiBase}/history`)
      if (r.ok) setHistory(((await r.json()) as { attempts?: HistoryEntry[] }).attempts ?? [])
    } catch {
      // history is optional
    }
  }, [apiBase])

  useEffect(() => { if (status === 'authenticated') void refreshHistory() }, [status, refreshHistory])

  const handleFinish = useCallback(async () => {
    if (!testData || finishedRef.current) return
    finishedRef.current = true
    if (timerRef.current) clearInterval(timerRef.current)
    const scored = scoreApDiagnosticV2(course, testData.questions, answers)
    setResults(scored)
    setPhase('results')
    window.scrollTo?.({ top: 0 })
    try {
      await fetch(`${apiBase}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          results: {
            ...scored,
            review: { questions: reviewCopy(testData.questions), answers, domainNames: Object.fromEntries(testData.domains.map((d) => [d.id, d.name])) },
          },
          weakAreas: scored.weakAreas,
          strengths: scored.strengths.join(', '),
        }),
      })
      await refreshHistory()
    } catch {
      // The results screen still shows; the attempt just is not saved.
    }
  }, [testData, answers, course, apiBase, category, refreshHistory])

  useEffect(() => {
    if (phase !== 'testing') return
    timerRef.current = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  useEffect(() => {
    if (phase === 'testing' && timeLeft === 0 && testData) void handleFinish()
  }, [phase, timeLeft, testData, handleFinish])

  const startTest = useCallback(async () => {
    if (!bank) return
    setStarting(true)
    try {
      // Everything this student has been served on any device: unseen items first.
      const seen = await loadSeenKeys(bp.seenCourse)
      const data = generateApDiagnosticV2(bank, { seen })
      void recordSeenKeys(bp.seenCourse, data.questions.flatMap(seenKeysForServed))
      // Option order is shuffled per question; questions inside a set keep their order.
      data.questions = data.questions.map((q) => {
        const s = shuffleOptions(q.options, q.correctAnswer, q.question)
        return { ...q, options: s.options, correctAnswer: s.correctIndex }
      })
      finishedRef.current = false
      setTestData(data)
      setResults(null)
      setCurrent(0)
      setAnswers(new Array(data.questions.length).fill(null))
      setEliminated(data.questions.map(() => new Set<number>()))
      setTimeLeft(data.timeLimitMinutes * 60)
      setPhase('testing')
      window.scrollTo?.({ top: 0 })
    } finally {
      setStarting(false)
    }
  }, [bp, bank])

  const setAnswer = (i: number | null) => setAnswers((prev) => prev.map((a, idx) => (idx === current ? i : a)))
  const toggleEliminate = (i: number) => {
    setEliminated((prev) => prev.map((set, idx) => {
      if (idx !== current) return set
      const next = new Set(set)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    }))
    if (answers[current] === i && !eliminated[current]?.has(i)) setAnswer(null)
  }

  const quotas = unitQuotas(bp)
  const bankSize = bank?.items.length ?? 0
  const qaBanner = qaPreview && (
    <div className="mb-4 flex items-start gap-2 rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200">
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <span>QA preview of diagnostic v2 (not live for students). The bank holds {bankSize} items, so a sitting is shorter than the {bp.length}-question blueprint until authors fill it.</span>
    </div>
  )

  if (status === 'loading') {
    return <div className={`min-h-screen bg-gradient-to-br ${theme.page} dark:from-gray-900 dark:via-gray-950 dark:to-gray-900`} />
  }

  /* ------------------------------ TESTING ------------------------------ */
  if (phase === 'testing' && testData) {
    const q = testData.questions[current]
    const total = testData.questions.length
    const answered = answers.filter((a) => a !== null).length
    const unitName = testData.domains.find((d) => d.id === q.domain)?.name ?? q.domain
    // The whole set this question belongs to (sets are consecutive).
    let blockStart = current
    let blockEnd = current
    if (q.passage) {
      while (blockStart > 0 && testData.questions[blockStart - 1].passage?.id === q.passage.id) blockStart--
      while (blockEnd < total - 1 && testData.questions[blockEnd + 1].passage?.id === q.passage.id) blockEnd++
    }
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.page} py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900`}>
        <div className="container">
          <div className={`mx-auto ${q.passage ? 'max-w-6xl' : 'max-w-3xl'}`}>
            {qaBanner}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium tabular-nums text-gray-600 dark:text-gray-400">{current + 1}/{total}</span>
                <div className="h-2 w-28 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className={`h-full rounded-full ${theme.bar}`} style={{ width: `${((current + 1) / total) * 100}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-1 font-mono text-sm font-bold ${timeLeft < 300 ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                  <Clock className="h-4 w-4" aria-hidden />{fmt(timeLeft)}
                </span>
                {bp.referenceSheet && (
                  <button onClick={() => setShowReference(true)} className={`inline-flex items-center gap-1 rounded-lg border px-3 py-1 text-xs font-medium ${theme.border} ${theme.text}`}>
                    <FileText className="h-3.5 w-3.5" aria-hidden />Reference
                  </button>
                )}
                <button
                  onClick={() => {
                    if (!window.confirm('Leave this diagnostic? Your answers so far will be discarded.')) return
                    if (timerRef.current) clearInterval(timerRef.current)
                    setPhase('menu')
                    setTestData(null)
                  }}
                  className="text-sm text-gray-500 hover:text-red-600 dark:text-gray-400"
                >
                  Exit
                </button>
              </div>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.chip}`}>{unitName}</span>
            </div>

            <div className={q.passage ? 'lg:grid lg:grid-cols-2 lg:items-start lg:gap-6' : ''}>
              {q.passage && (
                <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto dark:border-gray-700 dark:bg-gray-800">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    <Layers className="h-3.5 w-3.5" aria-hidden />
                    Question set
                    {blockEnd > blockStart && (
                      <span className="normal-case tracking-normal">· Questions {blockStart + 1}–{blockEnd + 1} refer to this information</span>
                    )}
                  </p>
                  <h2 className="mt-1 text-base font-bold text-gray-900 dark:text-white">{q.passage.title}</h2>
                  <DiagnosticPassageContent passage={q.passage} />
                </div>
              )}

              <div>
                <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800">
                  <Rich text={q.question} ready={katexReady} className="mb-5 block text-sm leading-relaxed text-gray-800 dark:text-gray-200" />
                  <div className="space-y-2">
                    {q.options.map((opt, i) => {
                      const selected = answers[current] === i
                      const struck = eliminated[current]?.has(i) ?? false
                      return (
                        <div
                          key={i}
                          className={`flex items-center gap-2 rounded-xl border transition ${selected ? `${theme.border} ${theme.soft}` : 'border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500'}`}
                        >
                          <button
                            onClick={() => setAnswer(i)}
                            aria-pressed={selected}
                            className={`flex-1 px-4 py-3 text-left text-sm text-gray-800 dark:text-gray-200 ${struck ? 'line-through opacity-50' : ''}`}
                          >
                            <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>
                            <Rich text={opt} ready={katexReady} />
                          </button>
                          <button
                            onClick={() => toggleEliminate(i)}
                            className="mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-gray-400 hover:bg-red-100 hover:text-red-600 dark:text-gray-500 dark:hover:bg-red-900/30 dark:hover:text-red-400"
                            aria-label={struck ? 'Restore this answer' : 'Eliminate this answer'}
                            title={struck ? 'Restore this answer' : 'Eliminate this answer'}
                          >
                            ✕
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                    disabled={current === 0}
                    className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    Previous
                  </button>
                  <span className="order-last w-full text-center text-xs text-gray-500 sm:order-none sm:w-auto dark:text-gray-400">{answered}/{total} answered</span>
                  <button
                    onClick={() => {
                      setAnswer(null)
                      if (current < total - 1) setCurrent((c) => c + 1)
                    }}
                    className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    I would be guessing
                  </button>
                  {current < total - 1 ? (
                    <button onClick={() => setCurrent((c) => c + 1)} className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow ${theme.button}`}>
                      Next
                    </button>
                  ) : (
                    <button onClick={() => void handleFinish()} className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow ${theme.button}`}>
                      Submit diagnostic
                    </button>
                  )}
                </div>
              </div>
            </div>
            {bp.referenceSheet && <ReferenceSheetModal open={showReference} onClose={() => setShowReference(false)} courseSlug={bp.referenceSheet} />}
          </div>
        </div>
      </div>
    )
  }

  /* ------------------------------ RESULTS ------------------------------ */
  if (phase === 'results' && results && testData) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.page} py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900`}>
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {qaBanner}
            <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{bp.label} diagnostic results</h1>
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP score</p>
                <p className={`text-5xl font-black tabular-nums ${theme.text}`} data-testid="ap-v2-score-band">{bandText(results)}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {results.scoreRange.low === results.scoreRange.high ? 'out of 5' : `most likely ${results.estimatedAPScore} · out of 5`}
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Correct</p>
                <p className="text-4xl font-black tabular-nums text-gray-800 dark:text-gray-100">{results.totalCorrect}/{results.totalQuestions}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{results.percentage}% (likely {results.percentRange.low}–{results.percentRange.high}%)</p>
              </div>
            </div>
            <p className="mb-8 flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              The range reflects how much a score from {results.totalQuestions} questions can vary from sitting to sitting. The 1–5 cutoffs are an estimate based on typical AP composite cutoffs; they are not yet calibrated against real AP results.
            </p>

            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">Unit breakdown</h2>
              <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Each unit is weighted as on the AP exam, so each one has only a few questions. Treat these as starting points and confirm them with the topic quizzes.</p>
              <div className="space-y-3">
                {results.domains.map((d) => (
                  <div key={d.domainId}>
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{d.domainName}</span>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${d.level === 'strong' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : d.level === 'moderate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                        {d.correct}/{d.total}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className={`h-full rounded-full ${d.level === 'strong' ? 'bg-green-500' : d.level === 'moderate' ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${d.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <DiagnosticReview questions={testData.questions} answers={answers} domainNames={Object.fromEntries(testData.domains.map((d) => [d.id, d.name]))} />

            {results.recommendedTopics.length > 0 && !planAccess.loading && !planAccess.canAccess && <DiagnosticPlanPaywall />}
            {results.recommendedTopics.length > 0 && planAccess.canAccess && (
              <div className={`mb-8 rounded-2xl border-2 p-6 ${theme.border} ${theme.soft}`}>
                <h2 className={`mb-1 flex items-center gap-1.5 text-lg font-bold ${theme.text}`}><Target className="h-5 w-5" aria-hidden />Your study plan</h2>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">Review these {results.recommendedTopics.length} topic{results.recommendedTopics.length > 1 ? 's' : ''}, then come back for another diagnostic. It will serve questions you have not seen.</p>
                <div className="space-y-2">
                  {results.recommendedTopics.map((t, i) => (
                    <Link key={t.slug} href={`/topics/${t.slug}/interactive`} className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800">
                      <span className="flex items-center gap-3">
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${theme.chip}`}>{i + 1}</span>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{t.name}</span>
                      </span>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${t.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                        {t.priority === 'high' ? 'High priority' : 'Medium priority'}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <StartStudyPlanButton diagnosticPath={bp.pagePath} className="mb-8" />

            <div className="grid gap-3 sm:grid-cols-2">
              <button onClick={() => void startTest()} disabled={starting || !bank} className={`rounded-xl border-2 py-3 font-semibold ${theme.border} ${theme.text}`}>Take another diagnostic</button>
              <Link href={`/courses/${course}`} className={`rounded-xl py-3 text-center font-semibold text-white shadow ${theme.button}`}>Back to {bp.label}</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* -------------------------------- MENU -------------------------------- */
  const last = history[0]
  const lastRecs = (last?.results?.recommendedTopics as { slug: string; name: string; priority: string }[] | undefined) ?? []
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.page} dark:from-gray-900 dark:via-gray-950 dark:to-gray-900`}>
      <div className="container py-8 sm:py-12">
        <div className="mx-auto max-w-2xl">
          {qaBanner}
          <Link href={`/courses/${course}`} className={`mb-4 inline-flex items-center gap-1 text-sm hover:underline ${theme.text}`}>
            <ChevronLeft className="h-4 w-4" aria-hidden />{bp.label}
          </Link>
          <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">{bp.label} Diagnostic</h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Find your strengths and weaknesses across every unit, weighted the way the AP exam weights them, and get up to 5 topics to study next.</p>

          {last && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h2 className="mb-3 text-sm font-medium uppercase text-gray-500 dark:text-gray-400">Most recent result</h2>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className={`text-3xl font-bold tabular-nums ${theme.text}`}>{attemptScoreLine(last.category, last.results) || '—'}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Estimated AP score</p>
                </div>
                <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                  <p>{String(last.results.totalCorrect ?? '—')}/{String(last.results.totalQuestions ?? '—')} correct</p>
                  <p className="text-xs">{new Date(last.createdAt).toLocaleDateString()}</p>
                  <Link href={pastAttemptReviewHref(last)} className="text-xs font-semibold text-accent hover:underline">Review this attempt</Link>
                </div>
              </div>
              {lastRecs.length > 0 && (
                <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-700">
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">Your current study plan:</p>
                  <div className="flex flex-wrap gap-2">
                    {lastRecs.map((t) => (
                      <Link key={t.slug} href={`/topics/${t.slug}/interactive`} className={`rounded-full px-3 py-1 text-xs font-medium ${theme.chip}`}>{t.name}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">What to expect</h2>
            <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>{bp.length} questions in {bp.timeLimitMinutes} minutes, across all {bp.units.length} units</li>
              <li>Each unit weighted as on the AP exam, with easy, medium and hard questions</li>
              <li>Data, graph and passage sets like the real exam</li>
              <li>An estimated AP score with a range, plus a unit-by-unit breakdown</li>
              <li>Each retake serves questions you have not seen yet</li>
            </ul>
            <button onClick={() => void startTest()} disabled={starting || !bank} className={`w-full rounded-xl px-6 py-3 font-semibold text-white shadow-lg disabled:opacity-60 ${theme.button}`}>
              {starting ? 'Preparing your diagnostic…' : last ? 'Take another diagnostic' : 'Start diagnostic'}
            </button>
          </div>

          <details className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 text-sm dark:border-gray-700 dark:bg-gray-800">
            <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300">How the questions are split by unit</summary>
            <ul className="mt-3 space-y-1 text-gray-600 dark:text-gray-400">
              {bp.units.map((u) => (
                <li key={u.id} className="flex justify-between gap-3">
                  <span>Unit {u.number}: {u.name}</span>
                  <span className="shrink-0 tabular-nums">{quotas[u.id]} q · exam {u.weight[0]}–{u.weight[1]}%</span>
                </li>
              ))}
            </ul>
          </details>

          {history.length > 1 && (
            <div className="mt-6">
              <h2 className="mb-3 text-sm font-medium uppercase text-gray-500 dark:text-gray-400">Previous attempts</h2>
              <div className="space-y-2">
                {history.slice(1, 8).map((h) => (
                  <Link key={h.id} href={pastAttemptReviewHref(h)} className="flex items-center justify-between rounded-lg bg-white/70 p-3 hover:bg-white dark:bg-gray-800/60 dark:hover:bg-gray-800">
                    <span className="text-sm font-semibold tabular-nums text-gray-700 dark:text-gray-300">Score: {attemptScoreLine(h.category, h.results) || '—'}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {h.results.version === 2 ? '' : `Form ${String(h.results.form ?? '?')} · `}{new Date(h.createdAt).toLocaleDateString()}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
