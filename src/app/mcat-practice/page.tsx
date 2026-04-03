'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  MCAT_SECTIONS,
  generateSectionTest,
  scoreSectionTest,
  type MCATSectionTest,
} from '@/data/mcat-practice/test-generator'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface TestAttempt {
  id: string
  sectionId: string
  sectionName: string
  score: number
  maxScore: number
  percentage: number
  correct: number
  total: number
  timeSpent: number
  completedAt: string
}

interface TestStats {
  totalAttempts: number
  bestPercentage: number | null
  sectionBreakdown: Record<string, { attempts: number; best: number }>
}

interface ModuleRecommendation {
  slug: string
  title: string
  percentage: number
  correct: number
  total: number
}

function formatTopicTitleFromSlug(slug: string): string {
  return slug
    .replace(/^mcat-/, '')
    .replace(/-mcat$/, '')
    .split('-')
    .map((part) => {
      const upper = part.toUpperCase()
      if (upper === 'DNA' || upper === 'RNA' || upper === 'PH') return upper
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join(' ')
}

function getModuleRecommendations(byTopic: { slug: string; correct: number; total: number }[]): ModuleRecommendation[] {
  return byTopic
    .map((entry) => {
      const percentage = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0
      return {
        slug: entry.slug,
        title: formatTopicTitleFromSlug(entry.slug),
        percentage,
        correct: entry.correct,
        total: entry.total,
      }
    })
    .filter((entry) => entry.total > 0 && entry.percentage < 70)
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 4)
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function MCATractricePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [activeTest, setActiveTest] = useState<MCATSectionTest | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [showResults, setShowResults] = useState(false)
  const [testResult, setTestResult] = useState<ReturnType<typeof scoreSectionTest> | null>(null)
  const [history, setHistory] = useState<TestAttempt[]>([])
  const [stats, setStats] = useState<TestStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeStarted, setTimeStarted] = useState<number>(0)
  const [timeRemaining, setTimeRemaining] = useState<number>(0)

  // Auth redirect
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/mcat-practice')
    }
  }, [status, router])

  // Fetch history
  const fetchHistory = useCallback(async () => {
    try {
      const res = await fetch('/api/mcat-practice/history')
      if (res.ok) {
        const data = await res.json()
        setHistory(data.attempts ?? [])
        setStats(data.stats ?? null)
      }
    } catch {
      // Silent fail
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (status === 'authenticated') {
      fetchHistory()
    } else if (status === 'unauthenticated') {
      setLoading(false)
    }
  }, [status, fetchHistory])

  // Timer
  useEffect(() => {
    if (!activeTest || showResults) return
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(interval)
          handleFinish()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTest, showResults])

  // Start test
  const startTest = useCallback(async (sectionId: string) => {
    const test = await generateSectionTest(sectionId)
    setActiveTest(test)
    setCurrentIndex(0)
    setAnswers(new Array(test.questions.length).fill(null))
    setShowResults(false)
    setTestResult(null)
    setTimeStarted(Date.now())
    setTimeRemaining(test.timeLimitMinutes * 60)
  }, [])

  // Finish test
  const handleFinish = useCallback(async () => {
    if (!activeTest) return
    // Convert answers array to Record<number, number> for scoring
    const answersRecord: Record<number, number> = {}
    answers.forEach((a, i) => { if (a !== null) answersRecord[i] = a })
    const result = scoreSectionTest(activeTest, answersRecord)
    setTestResult(result)
    setShowResults(true)

    const timeSpent = Math.round((Date.now() - timeStarted) / 1000)

    // Submit to API
    try {
      await fetch('/api/mcat-practice/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sectionId: activeTest.section.id,
          sectionName: activeTest.section.name,
          score: result.scaledScore,
          maxScore: 132,
          percentage: result.percentage,
          correct: result.correct,
          total: result.total,
          timeSpent,
          answers: answers.map((a, i) => ({
            questionIndex: i,
            selected: a,
            correct: activeTest.questions[i].correctAnswer,
          })),
        }),
      })
    } catch {
      // Silent fail
    }
  }, [activeTest, answers, timeStarted])

  const handleCancel = useCallback(() => {
    setActiveTest(null)
    setShowResults(false)
    setTestResult(null)
  }, [])

  const handleDone = useCallback(() => {
    setActiveTest(null)
    setShowResults(false)
    setTestResult(null)
    fetchHistory()
  }, [fetchHistory])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  // Loading
  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-6 w-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="grid gap-6 sm:grid-cols-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-48 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Results view
  if (activeTest && showResults && testResult) {
    const moduleRecommendations = getModuleRecommendations(testResult.byTopic)

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              {activeTest.section.name} — Results
            </h2>

            {/* Score Summary */}
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Scaled Score</p>
                <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                  {testResult.scaledScore}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">out of 132</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Correct</p>
                <p className="text-4xl font-black text-teal-600 dark:text-teal-400">
                  {testResult.correct}/{testResult.total}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{testResult.percentage}%</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
                <p className="text-4xl font-black text-blue-600 dark:text-blue-400">
                  {testResult.percentage >= 80 ? '🎉' : testResult.percentage >= 60 ? '👍' : '📚'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {testResult.percentage >= 80 ? 'Excellent' : testResult.percentage >= 60 ? 'Good' : 'Needs Review'}
                </p>
              </div>
            </div>

            {/* Question Review */}
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Question Review
              </h3>
              <div className="space-y-4">
                {activeTest.questions.map((q, i) => {
                  const userAnswer = answers[i]
                  const isCorrect = userAnswer === q.correctAnswer
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border p-4 ${
                        isCorrect
                          ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                          : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          Q{i + 1}: {q.question.slice(0, 120)}{q.question.length > 120 ? '…' : ''}
                        </p>
                        <span className={`shrink-0 ml-2 text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                      </div>
                      {!isCorrect && (
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Your answer: {userAnswer !== null ? q.options[userAnswer] : 'Skipped'} · 
                          Correct: {q.options[q.correctAnswer]}
                        </p>
                      )}
                      {q.explanation && (
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          {q.explanation}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {moduleRecommendations.length > 0 && (
              <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 dark:border-amber-700 dark:bg-amber-900/20">
                <h3 className="mb-2 text-lg font-semibold text-amber-900 dark:text-amber-200">
                  Recommended Learning Modules
                </h3>
                <p className="mb-4 text-sm text-amber-800 dark:text-amber-300">
                  Based on this test, these are your lowest-performing topics. Review these modules first, then retake to measure improvement.
                </p>
                <div className="space-y-3">
                  {moduleRecommendations.map((rec) => (
                    <div
                      key={rec.slug}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-white px-4 py-3 dark:border-amber-800 dark:bg-gray-900"
                    >
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{rec.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {rec.correct}/{rec.total} correct ({rec.percentage}%)
                        </p>
                      </div>
                      <Link
                        href={`/topics/${rec.slug}/interactive`}
                        className="rounded-lg bg-amber-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-amber-700"
                      >
                        Study Module
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleDone}
                className="flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 font-semibold text-white shadow transition hover:shadow-lg"
              >
                Back to Tests
              </button>
              <button
                onClick={() => startTest(activeTest.section.id)}
                className="flex-1 rounded-xl border-2 border-emerald-500 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                Retake Section
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Active test (in-progress)
  if (activeTest && !showResults) {
    const q = activeTest.questions[currentIndex]
    const answeredCount = answers.filter(a => a !== null).length

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Progress Bar */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {currentIndex + 1}/{activeTest.questions.length}
                </span>
                <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${((currentIndex + 1) / activeTest.questions.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-sm font-mono font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'}`}>
                  ⏱ {formatTime(timeRemaining)}
                </span>
                <button
                  onClick={handleCancel}
                  className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400"
                >
                  Exit
                </button>
              </div>
            </div>

            {/* Section label */}
            <div className="mb-4">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                {activeTest.section.name}
              </span>
            </div>

            {/* Question */}
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <p className="mb-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                {q.question}
              </p>

              {/* Options */}
              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const isSelected = answers[currentIndex] === i
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        const updated = [...answers]
                        updated[currentIndex] = i
                        setAnswers(updated)
                      }}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-500'
                          : 'border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-emerald-500'
                      }`}
                    >
                      <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-40 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                ← Previous
              </button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {answeredCount}/{activeTest.questions.length} answered
              </span>
              {currentIndex < activeTest.questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(prev => Math.min(activeTest.questions.length - 1, prev + 1))}
                  className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-emerald-700"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg"
                >
                  Submit Test
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Main page — section selection
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/mcat"
              className="mb-4 inline-flex items-center gap-1 text-sm text-emerald-600 hover:underline dark:text-emerald-400"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              MCAT Prep
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              MCAT Section Practice
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Practice each MCAT section with timed, passage-style questions and detailed scoring.
            </p>
          </div>

          {/* Stats Cards */}
          {stats && stats.totalAttempts > 0 && (
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Sections Completed
                </p>
                <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalAttempts}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Best Section %
                </p>
                <p className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {stats.bestPercentage ?? '—'}%
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Sections Practiced
                </p>
                <p className="mt-1 text-2xl font-bold text-teal-600 dark:text-teal-400">
                  {Object.keys(stats.sectionBreakdown ?? {}).length}/{MCAT_SECTIONS.length}
                </p>
              </div>
            </div>
          )}

          {/* Section Selection */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Choose a Section
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {MCAT_SECTIONS.map(sec => {
                const sectionStats = stats?.sectionBreakdown?.[sec.id]
                const gradients: Record<string, string> = {
                  'gen-chem-comprehensive': 'from-sky-500 to-indigo-500',
                  'organic-comprehensive': 'from-rose-500 to-orange-500',
                  'physics-comprehensive': 'from-cyan-500 to-blue-600',
                  'biochem-comprehensive': 'from-lime-500 to-emerald-600',
                  'chem-phys': 'from-blue-500 to-cyan-500',
                  'cars': 'from-amber-500 to-orange-500',
                  'bio-biochem': 'from-green-500 to-emerald-500',
                  'psych-soc': 'from-purple-500 to-pink-500',
                }

                return (
                  <div
                    key={sec.id}
                    className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className={`rounded-t-2xl bg-gradient-to-r p-4 text-white ${gradients[sec.id] ?? 'from-gray-500 to-gray-600'}`}>
                      <h3 className="text-lg font-bold">{sec.name}</h3>
                      <p className="text-sm opacity-80">
                        {sec.questionCount} questions · {sec.timeLimitMinutes} min
                      </p>
                    </div>
                    <div className="p-5">
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        {sec.description}
                      </p>

                      {sectionStats && (
                        <div className="mb-4 rounded-lg bg-gray-50 p-2 text-center dark:bg-gray-700/50">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Best Score</p>
                          <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                            {sectionStats.best}%
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {sectionStats.attempts} attempt{sectionStats.attempts !== 1 ? 's' : ''}
                          </p>
                        </div>
                      )}

                      <button
                        onClick={() => startTest(sec.id)}
                        className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg"
                      >
                        Start Section
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* History */}
          {history.length > 0 && (
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Recent Results
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/80">
                    <tr>
                      <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">Section</th>
                      <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">Score</th>
                      <th className="hidden px-4 py-3 font-medium text-gray-700 sm:table-cell dark:text-gray-300">Correct</th>
                      <th className="hidden px-4 py-3 font-medium text-gray-700 md:table-cell dark:text-gray-300">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {history.slice(0, 10).map(attempt => (
                      <tr key={attempt.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                          {attempt.sectionName}
                        </td>
                        <td className="px-4 py-3">
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">
                            {attempt.percentage}%
                          </span>
                        </td>
                        <td className="hidden px-4 py-3 text-gray-600 sm:table-cell dark:text-gray-400">
                          {attempt.correct}/{attempt.total}
                        </td>
                        <td className="hidden px-4 py-3 text-gray-500 md:table-cell dark:text-gray-400">
                          {new Date(attempt.completedAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
              About the MCAT
            </h3>
            <div className="grid gap-4 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
              <div>
                <h4 className="mb-1 font-medium text-gray-800 dark:text-gray-200">Test Structure</h4>
                <ul className="space-y-1">
                  <li>• Chem/Phys: 59 questions, 95 minutes</li>
                  <li>• CARS: 53 questions, 90 minutes</li>
                  <li>• Bio/Biochem: 59 questions, 95 minutes</li>
                  <li>• Psych/Soc: 59 questions, 95 minutes</li>
                  <li>• Total: 230 questions, ~7.5 hours</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-1 font-medium text-gray-800 dark:text-gray-200">Scoring</h4>
                <ul className="space-y-1">
                  <li>• Each section: 118–132</li>
                  <li>• Total: 472–528</li>
                  <li>• Average score: ~500</li>
                  <li>• Competitive score: 510+</li>
                  <li>• Top percentile: 520+</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
