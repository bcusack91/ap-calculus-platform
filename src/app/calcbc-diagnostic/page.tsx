'use client'

import { useDiagnosticPlanAccess } from '@/components/DiagnosticPlanLock'
import ApDiagnosticResults from '@/components/ap-diagnostic/ApDiagnosticResults'
import { useApDiagnosticStartEvent } from '@/components/ap-diagnostic/useApDiagnosticStartEvent'
import { apDiagnosticCourse } from '@/lib/ap-diagnostic-courses'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { pastAttemptReviewHref } from '@/lib/diagnostic-attempt-scores'
import { renderKatexSync, preloadKatex } from '@/lib/katex-lazy'
import 'katex/dist/katex.min.css'
import {
  generateCalcBCDiagnosticTest,
  scoreCalcBCDiagnostic,
  pickNextForm,
  TOTAL_FORMS,
  type CalcBCDiagnosticTestData,
  type CalcBCDiagnosticResults,
} from '@/data/ap-calculus-bc-diagnostic'
import DiagnosticChallengeCard from '@/components/DiagnosticChallengeCard'
import { shuffleOptions } from '@/lib/shuffle-options'
import { signUpUrl } from '@/lib/auth-redirect'
import { useDiagnosticResume, sameQuestionSet } from '@/hooks/useDiagnosticResume'
import { DiagnosticResumePrompt, DiagnosticExitButtons } from '@/components/DiagnosticResumePrompt'

function renderLatex(text: string): string {
  try {
    let result = text.replace(/\$\$((?:[^$\\]|\\.)+)\$\$/g, (_match, latex) => {
      try { return renderKatexSync(latex.trim(), { displayMode: true }) }
      catch { return latex }
    })
    result = result.replace(/\$((?:[^$\\]|\\.)+)\$/g, (_match, latex) => {
      try { return renderKatexSync(latex.trim(), { displayMode: false }) }
      catch { return latex }
    })
    return result
  } catch {
    return text
  }
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

interface HistoryEntry {
  id: string
  category: string
  results: Record<string, unknown>
  weakAreas: unknown
  strengths: string | null
  createdAt: string
}

export default function CalcBCDiagnosticPage() {
  const planAccess = useDiagnosticPlanAccess()
  const { status, data: session } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const challengeToken = searchParams.get('challenge')
  const challengeFormRaw = Number(searchParams.get('challengeForm'))
  const challengeForm = Number.isFinite(challengeFormRaw) && challengeFormRaw >= 1
    ? challengeFormRaw
    : null

  const [phase, setPhase] = useState<'menu' | 'testing' | 'results'>('menu')

  useApDiagnosticStartEvent('ap-calculus-bc', phase)
  const [testData, setTestData] = useState<CalcBCDiagnosticTestData | null>(null)
  const [results, setResults] = useState<CalcBCDiagnosticResults | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [eliminatedOptions, setEliminatedOptions] = useState<Set<number>[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [challengeSubmitted, setChallengeSubmitted] = useState(false)
  const [katexReady, setKatexReady] = useState(false)

  useEffect(() => { preloadKatex().then(() => setKatexReady(true)) }, [])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(signUpUrl({ callbackUrl: '/calcbc-diagnostic', reason: 'diagnostic', label: 'AP Calculus BC' }))
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/calcbc-diagnostic/history')
        .then(r => (r.ok ? r.json() : { attempts: [] }))
        .then(data => setHistory(data.attempts ?? []))
        .catch(() => {})
    }
  }, [status])

  // The sitting is mirrored to localStorage on every answer, move and tick
  // (src/hooks/useDiagnosticResume.ts); the menu offers Resume / Start over.
  const resume = useDiagnosticResume<CalcBCDiagnosticTestData>({
    userId: session?.user?.id,
    course: 'calcbc',
    version: 1,
    phase,
    testData,
    answers,
    eliminated: eliminatedOptions,
    currentIndex,
    timeRemaining,
    validate: (data) => sameQuestionSet(data.questions, generateCalcBCDiagnosticTest(data.form as Parameters<typeof generateCalcBCDiagnosticTest>[0]).questions),
  })
  // The clock-expiry auto-submit calls the latest handleFinish (the interval
  // closure would otherwise score the answers as they were when the clock started).
  const finishRef = useRef<() => void>(() => {})

  useEffect(() => {
    if (phase !== 'testing') return
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          finishRef.current()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [phase])

  const startTest = useCallback(() => {
    const previousForms = history
      .map(h => Number((h.results as Record<string, unknown>)?.form))
      .filter((f): f is number => Number.isFinite(f) && f >= 1 && f <= TOTAL_FORMS)

    const form = (challengeForm ?? pickNextForm(previousForms)) as (1|2|3|4|5|6|7|8|9|10)
    const data = generateCalcBCDiagnosticTest(form)
    // Shuffle options so correct answer position is randomized
    data.questions.forEach((q) => {
      const s = shuffleOptions(q.options, q.correctAnswer, q.question)
      q.options = s.options
      q.correctAnswer = s.correctIndex
    })
        setTestData(data)
    setCurrentIndex(0)
    setAnswers(new Array(data.questions.length).fill(null))
    setEliminatedOptions(Array.from({ length: data.questions.length }, () => new Set<number>()))
    setTimeRemaining(data.timeLimitMinutes * 60)
    setChallengeSubmitted(false)
    setPhase('testing')
  }, [history, challengeForm])

  const resumeTest = useCallback(() => {
    const saved = resume.restore()
    if (!saved) return
    setTestData(saved.testData)
    setCurrentIndex(saved.currentIndex)
    setAnswers(saved.answers)
    setEliminatedOptions(saved.eliminated)
    setTimeRemaining(saved.timeRemaining)
    setPhase('testing')
  }, [resume])

  const handleFinish = useCallback(async () => {
    if (!testData) return
    if (timerRef.current) clearInterval(timerRef.current)

    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => { if (a !== null) answersRecord[i] = a })
    const diagnosticResults = scoreCalcBCDiagnostic(testData.form, testData.questions, answersRecord)
    setResults(diagnosticResults)
    setPhase('results')

    try {
      await fetch('/api/calcbc-diagnostic/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: `calcbc-diagnostic-${testData.form}`,
          results: {
            review: { questions: testData.questions, answers, domainNames: Object.fromEntries(testData.domains.map(d => [d.id, d.name])) }, form: diagnosticResults.form,
            totalCorrect: diagnosticResults.totalCorrect,
            totalQuestions: diagnosticResults.totalQuestions,
            percentage: diagnosticResults.percentage,
            estimatedAPScore: diagnosticResults.estimatedAPScore,
            abSubscore: diagnosticResults.abSubscore,
            domains: diagnosticResults.domains,
            recommendedTopics: diagnosticResults.recommendedTopics,
          },
          weakAreas: diagnosticResults.weakAreas,
          strengths: diagnosticResults.strengths.join(', '),
        }),
      })
      const histRes = await fetch('/api/calcbc-diagnostic/history')
      if (histRes.ok) {
        const histData = await histRes.json()
        setHistory(histData.attempts ?? [])
      }

      // Add flashcards for recommended (weak) topics

      if (challengeToken) {
        const challengeRes = await fetch(`/api/diagnostic-challenges/${challengeToken}/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            category: `calcbc-diagnostic-${diagnosticResults.form}`,
            score: diagnosticResults.percentage,
            correct: diagnosticResults.totalCorrect,
            total: diagnosticResults.totalQuestions,
            apScore: diagnosticResults.estimatedAPScore,
          }),
        })
        if (challengeRes.ok) {
          setChallengeSubmitted(true)
        }
      }

    } catch { /* silent */ }
  }, [testData, answers, challengeToken])

  useEffect(() => { finishRef.current = () => { void handleFinish() } }, [handleFinish])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    )
  }

  /* ── TESTING ── */
  if (phase === 'testing' && testData) {
    const q = testData.questions[currentIndex]
    const answeredCount = answers.filter(a => a !== null).length

    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentIndex + 1}/{testData.questions.length}</span>
                <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-full rounded-full bg-violet-500 transition-all" style={{ width: `${((currentIndex + 1) / testData.questions.length) * 100}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-sm font-mono font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>⏱ {formatTime(timeRemaining)}</span>
                <DiagnosticExitButtons
                  onSaveExit={() => { if (timerRef.current) clearInterval(timerRef.current); setPhase('menu'); setTestData(null) }}
                  onDiscard={() => { if (timerRef.current) clearInterval(timerRef.current); resume.discard(); setPhase('menu'); setTestData(null) }}
                />
              </div>
            </div>

            <div className="mb-4">
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                {testData.domains.find(d => d.id === q.domain)?.name ?? q.domain}
              </span>
            </div>

            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: katexReady ? renderLatex(q.question) : q.question }} />
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const isSelected = answers[currentIndex] === i
                  const isEliminated = eliminatedOptions[currentIndex]?.has(i) ?? false
                  return (
                    <button key={i} onClick={() => { if (isEliminated) return; const u = [...answers]; u[currentIndex] = i; setAnswers(u) }}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${isSelected ? 'border-violet-500 bg-violet-50 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-500' : 'border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-violet-500'}`}>
                      <div className="flex items-center justify-between gap-3">
                      <span className={`flex-1 ${isEliminated ? 'line-through opacity-50 decoration-2 decoration-gray-400 dark:decoration-gray-500' : ''}`}>
                        <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span><span dangerouslySetInnerHTML={{ __html: katexReady ? renderLatex(opt) : opt }} />
                      </span>
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation()
                          setEliminatedOptions(prev => {
                            const next = prev.map(set => new Set(set))
                            const qSet = new Set(next[currentIndex] ?? [])
                            if (qSet.has(i)) {
                              qSet.delete(i)
                            } else {
                              qSet.add(i)
                              if (answers[currentIndex] === i) {
                                const updated = [...answers]
                                updated[currentIndex] = null
                                setAnswers(updated)
                              }
                            }
                            next[currentIndex] = qSet
                            return next
                          })
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            e.stopPropagation()
                            setEliminatedOptions(prev => {
                              const next = prev.map(set => new Set(set))
                              const qSet = new Set(next[currentIndex] ?? [])
                              if (qSet.has(i)) qSet.delete(i)
                              else qSet.add(i)
                              next[currentIndex] = qSet
                              return next
                            })
                          }
                        }}
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition ${isEliminated ? 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900/30 dark:hover:text-red-400'}`}
                        title={isEliminated ? 'Restore this answer' : 'Eliminate this answer'}
                        aria-label={isEliminated ? 'Restore this answer' : 'Eliminate this answer'}
                      >
                        ✕
                      </span>
                    </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button onClick={() => setCurrentIndex(p => Math.max(0, p - 1))} disabled={currentIndex === 0} className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-400">← Previous</button>
              <span className="text-xs text-gray-500 dark:text-gray-400">{answeredCount}/{testData.questions.length} answered</span>
              <button
                onClick={() => { const updated = [...answers]
                  updated[currentIndex] = null
                  setAnswers(updated)
                  if (currentIndex < testData.questions.length - 1) {
                    setCurrentIndex(prev => prev + 1)
                  } else {
                    handleFinish()
                  }
                }}
                className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                I Would Be Guessing
              </button>
              {currentIndex < testData.questions.length - 1 ? (
                <button onClick={() => setCurrentIndex(p => p + 1)} className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-violet-700">Next →</button>
              ) : (
                <button onClick={handleFinish} className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg">Submit Diagnostic</button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* ── RESULTS ── */
  if (phase === 'results' && results) {
    return (
      <ApDiagnosticResults
        course={apDiagnosticCourse('ap-calculus-bc')}
        results={results}
        planAccess={planAccess}
        history={history}
        review={testData ? { questions: testData.questions, answers, domainNames: Object.fromEntries(testData.domains.map(d => [d.id, d.name])) } : null}
        onRetake={() => { setResults(null); setTestData(null); startTest() }}
        secondary={(
          <DiagnosticChallengeCard
            category={`calcbc-diagnostic-${results.form ?? 1}`}
            score={results.percentage}
            correct={results.totalCorrect}
            total={results.totalQuestions}
            apScore={Math.max(1, Math.min(5, results.estimatedAPScore))}
            currentChallengeToken={challengeToken}
            challengeSubmitted={challengeSubmitted}
          />
        )}
      />
    )
  }

  /* ── MENU ── */
  const lastResult = history.length > 0 ? (history[0].results as Record<string, unknown> ?? {}) : null
  const lastRecommendedTopics = lastResult?.recommendedTopics as { slug: string; name: string; priority: string }[] | undefined

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12">
        <div className="mx-auto max-w-2xl">
          <Link href="/courses/ap-calculus-bc" className="mb-4 inline-flex items-center gap-1 text-sm text-violet-600 hover:underline dark:text-violet-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            AP Calculus BC
          </Link>
          <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">∬ AP Calculus BC Diagnostic Test</h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Comprehensive diagnostic covering all BC-exclusive and AB foundational topics. Includes an AB subscore, just like the real AP exam.</p>

          {lastRecommendedTopics && lastRecommendedTopics.length > 0 && (
            <div className="mb-6 rounded-2xl border-2 border-violet-300 bg-violet-50 p-6 dark:border-violet-700 dark:bg-violet-900/20">
              <h3 className="mb-1 text-base font-bold text-violet-800 dark:text-violet-300">🎯 Your Current Study Plan</h3>
              <p className="mb-3 text-sm text-violet-600 dark:text-violet-400">From your last diagnostic — review these modules, then retake the test:</p>
              <div className="space-y-2">
                {lastRecommendedTopics.map((topic, i) => (
                  <Link key={topic.slug} href={`/topics/${topic.slug}/interactive`} className="flex items-center justify-between rounded-xl border border-violet-200 bg-white px-4 py-3 transition hover:border-violet-400 hover:shadow-sm dark:border-violet-700 dark:bg-gray-800 group">
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">{i + 1}</span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-violet-700 dark:group-hover:text-violet-400">{topic.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${topic.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                        {topic.priority === 'high' ? 'High' : 'Medium'}
                      </span>
                    </div>
                    <span className="text-violet-500 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {lastResult && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Most Recent Result</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">{String(lastResult.estimatedAPScore ?? '—')}/5</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">BC Score</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{String(lastResult.abSubscore ?? '—')}/5</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">AB Subscore</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{String(lastResult.totalCorrect ?? '—')}/{String(lastResult.totalQuestions ?? '—')} correct</p>
                  <p className="text-xs text-gray-400 dark:text-gray-400">Form {String(lastResult.form ?? '—')} · {new Date(history[0].createdAt).toLocaleDateString()}<br /><Link href={pastAttemptReviewHref(history[0])} className="mt-1 inline-block text-xs font-semibold text-purple-600 hover:underline dark:text-purple-400" onClick={(e) => e.stopPropagation()}>Review past attempt →</Link></p>
                </div>
              </div>
            </div>
          )}

          <DiagnosticResumePrompt
            label="AP Calculus BC"
            resumable={resume.resumable}
            onResume={resumeTest}
            onStartOver={() => { resume.discard(); startTest() }}
          />

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">What to Expect</h3>
            <ul className="mb-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {['~35 questions covering both AB foundations and BC-exclusive content', '50 minute time limit', 'Estimated AP Score (1–5) with AB Subscore — just like the real exam', 'Per-unit breakdown across all 11 tested domains', '3-5 personalized module recommendations', '10 unique forms with different questions each time'].map(text => (
                <li key={text} className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {text}
                </li>
              ))}
            </ul>
            <button onClick={startTest} className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl">
              {lastResult ? 'Take Next Diagnostic' : 'Start Diagnostic Test'}
            </button>
            <Link href="/ap-calcbc-score-predictor" className="mt-3 block text-center text-sm font-medium text-violet-700 transition hover:underline dark:text-violet-300">Prefer a quick estimate? Open the AP Calculus BC Score Predictor</Link>
            <Link href="/ap-calcbc-daily-question" className="mt-1 block text-center text-sm font-medium text-violet-700 transition hover:underline dark:text-violet-300">Need a warm-up first? Try today&apos;s AP Calculus BC question</Link>
          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200">🔄 How the Diagnostic Cycle Works</h3>
            <div className="space-y-3">
              {[
                { step: '1', text: 'Take the diagnostic test — questions cover AB foundations + BC-exclusive concepts' },
                { step: '2', text: 'Get your BC score, AB subscore, and 3-5 module recommendations' },
                { step: '3', text: 'Study those specific modules (lessons, problems, flashcards)' },
                { step: '4', text: 'Retake the diagnostic — a different form with fresh questions' },
                { step: '5', text: 'Repeat until you\'re scoring 4+ on both BC and AB subscore!' },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">{item.step}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {history.length > 1 && (
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Previous Attempts</h3>
              <div className="space-y-2">
                {history.slice(1, 8).map(h => {
                  const parsed = h.results as Record<string, unknown>
                  return (
                    <Link key={h.id} href={pastAttemptReviewHref(h)} className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50 cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-600/60 hover:shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">BC: {String(parsed?.estimatedAPScore ?? '—')}/5</span>
                        <span className="text-xs text-purple-600 dark:text-purple-400">AB: {String(parsed?.abSubscore ?? '—')}/5</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Form {String(parsed?.form ?? '?')}</span>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-400">{new Date(h.createdAt).toLocaleDateString()}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
