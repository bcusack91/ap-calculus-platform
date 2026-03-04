'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Prediction {
  rwScore: number
  mathScore: number
  totalScore: number
  percentile: number
  confidence: 'high' | 'medium' | 'low'
}

interface Stats {
  satTopics: number
  masteredTopics: number
  completedTopics: number
  masteryRate: number
  totalQuizzesAttempted: number
  quizPassRate: number
  avgQuizScore: number
  recentAvg: number
  practiceTestsTaken: number
  diagnosticsTaken: number
}

interface TrendPoint {
  date: string
  score: number
  source: string
}

interface Breakdown {
  rw: { avgPct: number; quizCount: number }
  math: { avgPct: number; quizCount: number }
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ScorePredictorPage() {
  const { status } = useSession()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [prediction, setPrediction] = useState<Prediction | null>(null)
  const [stats, setStats] = useState<Stats | null>(null)
  const [trend, setTrend] = useState<TrendPoint[]>([])
  const [breakdown, setBreakdown] = useState<Breakdown | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/sat-score-predictor')
    }
  }, [status, router])

  useEffect(() => {
    if (status !== 'authenticated') return
    fetch('/api/sat-practice/score-predictor')
      .then(r => {
        if (!r.ok) throw new Error('Failed')
        return r.json()
      })
      .then(data => {
        setPrediction(data.prediction)
        setStats(data.stats)
        setTrend(data.trend)
        setBreakdown(data.breakdown)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [status])

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-48 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !prediction || !stats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              SAT Score Predictor
            </h1>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We need more data to predict your score. Complete some quizzes or a practice test first!
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/sat-diagnostic"
                  className="rounded-xl bg-gradient-to-r from-green-600 to-teal-600 px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg"
                >
                  Take Diagnostic
                </Link>
                <Link
                  href="/sat-practice"
                  className="rounded-xl border border-purple-300 px-6 py-3 font-semibold text-purple-700 transition hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20"
                >
                  Practice Test
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const scoreColor = (score: number) => {
    if (score >= 1400) return 'text-green-600 dark:text-green-400'
    if (score >= 1100) return 'text-blue-600 dark:text-blue-400'
    if (score >= 900) return 'text-amber-600 dark:text-amber-400'
    return 'text-red-600 dark:text-red-400'
  }

  const confidenceBadge = (c: string) => {
    if (c === 'high')
      return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
    if (c === 'medium')
      return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
    return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
  }

  // Chart: simple SVG sparkline for trend
  const renderTrendChart = () => {
    if (trend.length < 2) return null

    const width = 600
    const height = 160
    const padding = { top: 20, right: 20, bottom: 30, left: 50 }
    const chartW = width - padding.left - padding.right
    const chartH = height - padding.top - padding.bottom

    const scores = trend.map(t => t.score)
    const minScore = Math.max(400, Math.min(...scores) - 100)
    const maxScore = Math.min(1600, Math.max(...scores) + 100)

    const xScale = (i: number) => padding.left + (i / (trend.length - 1)) * chartW
    const yScale = (s: number) =>
      padding.top + chartH - ((s - minScore) / (maxScore - minScore)) * chartH

    const linePath = trend
      .map((t, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(t.score)}`)
      .join(' ')

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        {[minScore, Math.round((minScore + maxScore) / 2), maxScore].map(s => (
          <g key={s}>
            <line
              x1={padding.left}
              y1={yScale(s)}
              x2={width - padding.right}
              y2={yScale(s)}
              stroke="currentColor"
              strokeOpacity={0.1}
            />
            <text
              x={padding.left - 5}
              y={yScale(s) + 4}
              textAnchor="end"
              fontSize={10}
              fill="currentColor"
              opacity={0.4}
            >
              {s}
            </text>
          </g>
        ))}

        {/* Line */}
        <path d={linePath} fill="none" stroke="url(#gradient)" strokeWidth={2.5} />

        {/* Gradient */}
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>

        {/* Points */}
        {trend.map((t, i) => (
          <circle
            key={i}
            cx={xScale(i)}
            cy={yScale(t.score)}
            r={4}
            fill={t.source === 'practice-test' ? '#8B5CF6' : '#10B981'}
            stroke="white"
            strokeWidth={2}
          />
        ))}

        {/* Date labels */}
        {trend.length <= 6
          ? trend.map((t, i) => (
              <text
                key={i}
                x={xScale(i)}
                y={height - 5}
                textAnchor="middle"
                fontSize={9}
                fill="currentColor"
                opacity={0.4}
              >
                {new Date(t.date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                })}
              </text>
            ))
          : [0, Math.floor(trend.length / 2), trend.length - 1].map(i => (
              <text
                key={i}
                x={xScale(i)}
                y={height - 5}
                textAnchor="middle"
                fontSize={9}
                fill="currentColor"
                opacity={0.4}
              >
                {new Date(trend[i].date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                })}
              </text>
            ))}
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-8 sm:py-12">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            SAT Score Predictor
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Your projected SAT score based on quiz performance and study progress.
          </p>

          {/* Main Score Card */}
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-6 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                Predicted Score
              </p>
              <p className={`text-7xl font-black ${scoreColor(prediction.totalScore)}`}>
                {prediction.totalScore}
              </p>
              <p className="mt-1 text-sm text-gray-400">out of 1600</p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${confidenceBadge(prediction.confidence)}`}
                >
                  {prediction.confidence} confidence
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Top {100 - prediction.percentile}% of test takers
                </span>
              </div>
            </div>

            {/* Section Scores */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-blue-50 p-5 text-center dark:bg-blue-900/20">
                <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  Reading & Writing
                </p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                  {prediction.rwScore}
                </p>
                {breakdown && (
                  <p className="mt-1 text-xs text-blue-500 dark:text-blue-400">
                    Avg quiz: {breakdown.rw.avgPct}% ({breakdown.rw.quizCount} quizzes)
                  </p>
                )}
              </div>
              <div className="rounded-xl bg-purple-50 p-5 text-center dark:bg-purple-900/20">
                <p className="text-xs font-medium text-purple-600 uppercase dark:text-purple-400">
                  Math
                </p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                  {prediction.mathScore}
                </p>
                {breakdown && (
                  <p className="mt-1 text-xs text-purple-500 dark:text-purple-400">
                    Avg quiz: {breakdown.math.avgPct}% ({breakdown.math.quizCount} quizzes)
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Trend Chart */}
          {trend.length >= 2 && (
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
                Score Trend
              </h3>
              {renderTrendChart()}
              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-purple-500" /> Practice Test
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" /> Diagnostic
                </span>
              </div>
            </div>
          )}

          {/* Study Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                Topics Mastered
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                {stats.masteredTopics}
                <span className="text-sm font-normal text-gray-400">/{stats.satTopics}</span>
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: `${stats.masteryRate}%` }}
                />
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                Quiz Pass Rate
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                {stats.quizPassRate}%
              </p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                {stats.totalQuizzesAttempted} quizzes taken
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                Recent Performance
              </p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                {stats.recentAvg}%
              </p>
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                Last 10 quizzes avg
              </p>
            </div>
          </div>

          {/* Improvement Tips */}
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 font-semibold text-gray-800 dark:text-gray-200">
              How to Improve Your Score
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {prediction.confidence === 'low' && (
                <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-blue-700 dark:text-blue-400">
                    Take more quizzes and a practice test to increase prediction accuracy.
                  </p>
                </div>
              )}
              {breakdown && breakdown.rw.avgPct < breakdown.math.avgPct && (
                <p>• Focus more on Reading & Writing topics — your R&W score is lower than Math.</p>
              )}
              {breakdown && breakdown.math.avgPct < breakdown.rw.avgPct && (
                <p>• Focus more on Math topics — your Math score is lower than Reading & Writing.</p>
              )}
              {stats.masteryRate < 50 && (
                <p>
                  • Master more topics! You&apos;ve only mastered {stats.masteryRate}% of SAT topics.
                </p>
              )}
              {stats.quizPassRate < 70 && (
                <p>
                  • Review failed quizzes. Your pass rate is {stats.quizPassRate}% — aim for 80%+.
                </p>
              )}
              <p>
                • Take a{' '}
                <Link href="/sat-practice" className="text-purple-600 underline dark:text-purple-400">
                  full practice test
                </Link>{' '}
                for the most accurate score prediction.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              href="/sat-practice"
              className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Take Practice Test
            </Link>
            <Link
              href="/sat-diagnostic"
              className="flex-1 rounded-xl border border-green-400 px-6 py-3 text-center font-semibold text-green-700 transition hover:bg-green-50 dark:border-green-600 dark:text-green-400 dark:hover:bg-green-900/20"
            >
              Diagnostic Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
