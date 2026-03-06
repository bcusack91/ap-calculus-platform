'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import {
  generateFullTest,
  generateMiniTest,
  PRACTICE_TESTS,
  type SATFullTest,
} from '@/data/sat-practice/test-generator'

const SATTestWrapper = dynamic(
  () => import('@/components/SATFullTest').then(mod => mod.SATTestWrapper),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800 p-8 min-h-[400px]">
        <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 w-4/6 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    ),
  }
)

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface TestAttempt {
  id: string
  testNumber: number
  rwScore: number
  mathScore: number
  totalScore: number
  rwCorrect: number
  rwTotal: number
  mathCorrect: number
  mathTotal: number
  timeSpent: number
  weakAreas: string | null
  strengths: string | null
  completedAt: string
}

interface TestStats {
  totalAttempts: number
  bestTotal: number | null
  bestRW: number | null
  bestMath: number | null
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SATPracticePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [activeTest, setActiveTest] = useState<SATFullTest | null>(null)
  const [history, setHistory] = useState<TestAttempt[]>([])
  const [stats, setStats] = useState<TestStats | null>(null)
  const [loading, setLoading] = useState(true)

  // Auth redirect
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/sat-practice')
    }
  }, [status, router])

  // Fetch history
  const fetchHistory = useCallback(async () => {
    try {
      const res = await fetch('/api/sat-practice/history')
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
    }
  }, [status, fetchHistory])

  // Start test
  const startTest = useCallback(async (testNumber: number, format: 'full' | 'mini') => {
    const test = format === 'full' ? await generateFullTest(testNumber) : await generateMiniTest(testNumber)
    setActiveTest(test)
  }, [])

  // Complete / cancel
  const handleComplete = useCallback(() => {
    setActiveTest(null)
    fetchHistory()
  }, [fetchHistory])

  const handleCancel = useCallback(() => {
    setActiveTest(null)
  }, [])

  // Loading
  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-6 w-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="h-48 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Active test
  if (activeTest) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container">
          <SATTestWrapper test={activeTest} onComplete={handleComplete} onCancel={handleCancel} />
        </div>
      </div>
    )
  }

  // Main page
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              SAT Practice Tests
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Simulate the Digital SAT experience with timed, full-length practice tests.
            </p>
          </div>

          {/* Stats Cards */}
          {stats && stats.totalAttempts > 0 && (
            <div className="mb-8 grid gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Tests Taken
                </p>
                <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalAttempts}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Best Score
                </p>
                <p className="mt-1 text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {stats.bestTotal ?? '—'}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Best R&W
                </p>
                <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stats.bestRW ?? '—'}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                  Best Math
                </p>
                <p className="mt-1 text-2xl font-bold text-green-600 dark:text-green-400">
                  {stats.bestMath ?? '—'}
                </p>
              </div>
            </div>
          )}

          {/* Test Selection */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Choose a Practice Test
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRACTICE_TESTS.map(pt => {
                const prevAttempts = history.filter(a => a.testNumber === pt.id)
                const bestScore = prevAttempts.length > 0
                  ? Math.max(...prevAttempts.map(a => a.totalScore))
                  : null

                return (
                  <div
                    key={pt.id}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {pt.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {pt.description}
                        </p>
                      </div>
                      {pt.difficulty === 'Hard' && (
                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-900/40 dark:text-red-400">
                          Hard
                        </span>
                      )}
                    </div>

                    {bestScore !== null && (
                      <div className="mb-3 rounded-lg bg-gray-50 p-2 text-center dark:bg-gray-700/50">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Best Score</p>
                        <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                          {bestScore}/1600
                        </p>
                        <p className="text-xs text-gray-400">
                          {prevAttempts.length} attempt{prevAttempts.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button
                        onClick={() => startTest(pt.id, 'mini')}
                        className="flex-1 rounded-xl border border-purple-300 px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20"
                      >
                        Mini (49 Q)
                      </button>
                      <button
                        onClick={() => startTest(pt.id, 'full')}
                        className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:shadow-lg"
                      >
                        Full (98 Q)
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
                      <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                        Test
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                        Score
                      </th>
                      <th className="hidden px-4 py-3 font-medium text-gray-700 sm:table-cell dark:text-gray-300">
                        R&W
                      </th>
                      <th className="hidden px-4 py-3 font-medium text-gray-700 sm:table-cell dark:text-gray-300">
                        Math
                      </th>
                      <th className="hidden px-4 py-3 font-medium text-gray-700 md:table-cell dark:text-gray-300">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {history.slice(0, 10).map(attempt => (
                      <tr key={attempt.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                          Practice Test {attempt.testNumber}
                        </td>
                        <td className="px-4 py-3">
                          <span className="font-bold text-purple-600 dark:text-purple-400">
                            {attempt.totalScore}
                          </span>
                          <span className="text-gray-400">/1600</span>
                        </td>
                        <td className="hidden px-4 py-3 text-gray-600 sm:table-cell dark:text-gray-400">
                          {attempt.rwScore}
                        </td>
                        <td className="hidden px-4 py-3 text-gray-600 sm:table-cell dark:text-gray-400">
                          {attempt.mathScore}
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
              About the Digital SAT
            </h3>
            <div className="grid gap-4 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-400">
              <div>
                <h4 className="mb-1 font-medium text-gray-800 dark:text-gray-200">
                  Test Structure
                </h4>
                <ul className="space-y-1">
                  <li>• Reading & Writing: 2 modules, 27 questions each, 32 min per module</li>
                  <li>• Math: 2 modules, 22 questions each, 35 min per module</li>
                  <li>• Total: 98 questions, 2 hours 14 minutes</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-1 font-medium text-gray-800 dark:text-gray-200">Scoring</h4>
                <ul className="space-y-1">
                  <li>• Reading & Writing: 200–800</li>
                  <li>• Math: 200–800</li>
                  <li>• Composite: 400–1600</li>
                  <li>• No penalty for wrong answers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
