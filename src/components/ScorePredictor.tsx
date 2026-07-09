'use client'


import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'
import { ToolBreadcrumb } from '@/components/ToolBreadcrumb'
import { toolLearningResourceJsonLd } from '@/lib/jsonld'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { InArticleAd } from '@/components/ad-banner'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Section {
  name: string
  score: number
  maxScore: number
  avgPct: number
  quizCount: number
  color: string   // e.g. 'blue'
  bgLight: string // e.g. 'bg-blue-50 dark:bg-blue-900/20'
  textColor: string
}

interface PredictionData {
  primaryScore: number
  maxScore: number
  percentile?: number
  confidence: 'high' | 'medium' | 'low'
  sections?: Section[]
}

interface StatsData {
  totalTopics: number
  masteredTopics: number
  masteryRate: number
  quizzesAttempted: number
  quizPassRate: number
  recentAvg: number
}

interface TrendPoint {
  date: string
  score: number
  source: string
}

/* ------------------------------------------------------------------ */
/*  Accent colour map                                                  */
/* ------------------------------------------------------------------ */

type AccentColor = 'blue' | 'emerald' | 'green' | 'rose' | 'cyan' | 'amber' | 'red' | 'indigo' | 'purple' | 'gray' | 'lime' | 'teal'

const T: Record<AccentColor, {
  pageBg: string; gradBtn: string; borderBtn: string; borderBtnText: string
  borderBtnHover: string; link: string; chartGrad: [string, string]
}> = {
  blue:    { pageBg: 'from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-blue-600 to-indigo-600', borderBtn: 'border-blue-400 dark:border-blue-600', borderBtnText: 'text-blue-700 dark:text-blue-400', borderBtnHover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20', link: 'text-blue-600 dark:text-blue-400', chartGrad: ['#3B82F6', '#6366F1'] },
  emerald: { pageBg: 'from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-emerald-600 to-teal-600', borderBtn: 'border-emerald-400 dark:border-emerald-600', borderBtnText: 'text-emerald-700 dark:text-emerald-400', borderBtnHover: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20', link: 'text-emerald-600 dark:text-emerald-400', chartGrad: ['#10B981', '#14B8A6'] },
  green:   { pageBg: 'from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-green-600 to-emerald-600', borderBtn: 'border-green-400 dark:border-green-600', borderBtnText: 'text-green-700 dark:text-green-400', borderBtnHover: 'hover:bg-green-50 dark:hover:bg-green-900/20', link: 'text-green-600 dark:text-green-400', chartGrad: ['#22C55E', '#10B981'] },
  rose:    { pageBg: 'from-rose-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-rose-600 to-pink-600', borderBtn: 'border-rose-400 dark:border-rose-600', borderBtnText: 'text-rose-700 dark:text-rose-400', borderBtnHover: 'hover:bg-rose-50 dark:hover:bg-rose-900/20', link: 'text-rose-600 dark:text-rose-400', chartGrad: ['#F43F5E', '#EC4899'] },
  cyan:    { pageBg: 'from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-cyan-600 to-blue-600', borderBtn: 'border-cyan-400 dark:border-cyan-600', borderBtnText: 'text-cyan-700 dark:text-cyan-400', borderBtnHover: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20', link: 'text-cyan-600 dark:text-cyan-400', chartGrad: ['#06B6D4', '#3B82F6'] },
  amber:   { pageBg: 'from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-amber-600 to-orange-600', borderBtn: 'border-amber-400 dark:border-amber-600', borderBtnText: 'text-amber-700 dark:text-amber-400', borderBtnHover: 'hover:bg-amber-50 dark:hover:bg-amber-900/20', link: 'text-amber-600 dark:text-amber-400', chartGrad: ['#F59E0B', '#F97316'] },
  red:     { pageBg: 'from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-red-600 to-rose-600', borderBtn: 'border-red-400 dark:border-red-600', borderBtnText: 'text-red-700 dark:text-red-400', borderBtnHover: 'hover:bg-red-50 dark:hover:bg-red-900/20', link: 'text-red-600 dark:text-red-400', chartGrad: ['#EF4444', '#F43F5E'] },
  indigo:  { pageBg: 'from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-indigo-600 to-purple-600', borderBtn: 'border-indigo-400 dark:border-indigo-600', borderBtnText: 'text-indigo-700 dark:text-indigo-400', borderBtnHover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20', link: 'text-indigo-600 dark:text-indigo-400', chartGrad: ['#6366F1', '#A855F7'] },
  purple:  { pageBg: 'from-purple-50 via-white to-fuchsia-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-purple-600 to-fuchsia-600', borderBtn: 'border-purple-400 dark:border-purple-600', borderBtnText: 'text-purple-700 dark:text-purple-400', borderBtnHover: 'hover:bg-purple-50 dark:hover:bg-purple-900/20', link: 'text-purple-600 dark:text-purple-400', chartGrad: ['#A855F7', '#D946EF'] },
  gray:    { pageBg: 'from-gray-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-gray-600 to-slate-600', borderBtn: 'border-gray-400 dark:border-gray-600', borderBtnText: 'text-gray-700 dark:text-gray-400', borderBtnHover: 'hover:bg-gray-50 dark:hover:bg-gray-900/20', link: 'text-gray-600 dark:text-gray-400', chartGrad: ['#6B7280', '#64748B'] },
  lime:    { pageBg: 'from-lime-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-lime-600 to-green-600', borderBtn: 'border-lime-400 dark:border-lime-600', borderBtnText: 'text-lime-700 dark:text-lime-400', borderBtnHover: 'hover:bg-lime-50 dark:hover:bg-lime-900/20', link: 'text-lime-600 dark:text-lime-400', chartGrad: ['#84CC16', '#22C55E'] },
  teal:    { pageBg: 'from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900', gradBtn: 'from-teal-600 to-cyan-600', borderBtn: 'border-teal-400 dark:border-teal-600', borderBtnText: 'text-teal-700 dark:text-teal-400', borderBtnHover: 'hover:bg-teal-50 dark:hover:bg-teal-900/20', link: 'text-teal-600 dark:text-teal-400', chartGrad: ['#14B8A6', '#06B6D4'] },
}

/* ------------------------------------------------------------------ */
/*  Config type                                                        */
/* ------------------------------------------------------------------ */

export interface ScorePredictorConfig {
  subject: string
  description: string
  apiEndpoint: string
  maxScore: number
  scoreLabel: string
  accent: AccentColor
  practiceLink: { href: string; label: string }
  diagnosticLink: { href: string; label: string }
}

/* ------------------------------------------------------------------ */
/*  Score colour helpers                                               */
/* ------------------------------------------------------------------ */

function scoreColor(score: number, max: number) {
  const pct = score / max
  if (pct >= 0.85) return 'text-green-600 dark:text-green-400'
  if (pct >= 0.65) return 'text-blue-600 dark:text-blue-400'
  if (pct >= 0.45) return 'text-amber-600 dark:text-amber-400'
  return 'text-red-600 dark:text-red-400'
}

const CONF_BADGE: Record<string, string> = {
  high: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
  medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
  low: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

function ScorePredictorInner(config: ScorePredictorConfig) {
  const { subject, description, apiEndpoint, maxScore, scoreLabel, accent, practiceLink, diagnosticLink } = config
  const t = T[accent]
  const { status } = useSession()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [prediction, setPrediction] = useState<PredictionData | null>(null)
  const [stats, setStats] = useState<StatsData | null>(null)
  const [trend, setTrend] = useState<TrendPoint[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/auth/signin?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
    }
  }, [status, router])

  useEffect(() => {
    if (status !== 'authenticated') return
    fetch(apiEndpoint)
      .then(r => { if (!r.ok) throw new Error('Failed'); return r.json() })
      .then(data => { setPrediction(data.prediction); setStats(data.stats); setTrend(data.trend ?? []) })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [status, apiEndpoint])

  /* Loading state */
  if (status === 'loading' || loading) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${t.pageBg}`}>
        <div className="container py-12">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="h-48 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => <div key={i} className="h-24 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* Error / no-data state */
  if (error || !prediction || !stats) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${t.pageBg}`}>
        <div className="container py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{subject} Score Predictor</h1>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 dark:border-gray-700 dark:bg-gray-800">
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We need more data to predict your score. Complete some quizzes or a practice test first!
              </p>
              <div className="flex justify-center gap-4">
                <Link href={diagnosticLink.href} className={`rounded-xl bg-gradient-to-r ${t.gradBtn} px-6 py-3 font-semibold text-white shadow transition hover:shadow-lg`}>
                  {diagnosticLink.label}
                </Link>
                <Link href={practiceLink.href} className={`rounded-xl border ${t.borderBtn} px-6 py-3 font-semibold ${t.borderBtnText} transition ${t.borderBtnHover}`}>
                  {practiceLink.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* Trend chart SVG */
  const renderTrend = () => {
    if (trend.length < 2) return null
    const W = 600, H = 160, pad = { t: 20, r: 20, b: 30, l: 50 }
    const cW = W - pad.l - pad.r, cH = H - pad.t - pad.b
    const scores = trend.map(p => p.score)
    const lo = Math.max(0, Math.min(...scores) - maxScore * 0.1)
    const hi = Math.min(maxScore, Math.max(...scores) + maxScore * 0.1)
    const xS = (i: number) => pad.l + (i / (trend.length - 1)) * cW
    const yS = (s: number) => pad.t + cH - ((s - lo) / (hi - lo || 1)) * cH
    const path = trend.map((p, i) => `${i ? 'L' : 'M'} ${xS(i)} ${yS(p.score)}`).join(' ')
    const labels = trend.length <= 6
      ? trend.map((_, i) => i)
      : [0, Math.floor(trend.length / 2), trend.length - 1]

    return (
      <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">Score Trend</h3>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="xMidYMid meet">
          {[lo, (lo + hi) / 2, hi].map(s => (
            <g key={s}>
              <line x1={pad.l} y1={yS(s)} x2={W - pad.r} y2={yS(s)} stroke="currentColor" strokeOpacity={0.1} />
              <text x={pad.l - 5} y={yS(s) + 4} textAnchor="end" fontSize={10} fill="currentColor" opacity={0.4}>{Math.round(s)}</text>
            </g>
          ))}
          <defs>
            <linearGradient id="spGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={t.chartGrad[0]} />
              <stop offset="100%" stopColor={t.chartGrad[1]} />
            </linearGradient>
          </defs>
          <path d={path} fill="none" stroke="url(#spGrad)" strokeWidth={2.5} />
          {trend.map((p, i) => (
            <circle key={i} cx={xS(i)} cy={yS(p.score)} r={4}
              fill={p.source === 'practice-test' ? t.chartGrad[0] : '#10B981'} stroke="white" strokeWidth={2} />
          ))}
          {labels.map(i => (
            <text key={i} x={xS(i)} y={H - 5} textAnchor="middle" fontSize={9} fill="currentColor" opacity={0.4}>
              {new Date(trend[i].date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
            </text>
          ))}
        </svg>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: t.chartGrad[0] }} /> Practice</span>
          <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" /> Diagnostic</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${t.pageBg}`}>
      <div className="container py-8 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            {subject} Score Predictor
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">{description}</p>

          {/* Main Score Card */}
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-6 text-center">
              <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Predicted Score</p>
              <p className={`text-7xl font-black ${scoreColor(prediction.primaryScore, prediction.maxScore)}`}>
                {prediction.primaryScore}
              </p>
              <p className="mt-1 text-sm text-gray-400">{scoreLabel}</p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${CONF_BADGE[prediction.confidence]}`}>
                  {prediction.confidence} confidence
                </span>
                {prediction.percentile != null && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Top {100 - prediction.percentile}% of test takers
                  </span>
                )}
              </div>
            </div>

            {/* Section breakdown (ACT-style) */}
            {prediction.sections && prediction.sections.length > 0 && (
              <div className={`grid gap-4 ${prediction.sections.length <= 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
                {prediction.sections.map(s => (
                  <div key={s.name} className={`rounded-xl p-4 text-center ${s.bgLight}`}>
                    <p className={`text-xs font-medium uppercase ${s.textColor}`}>{s.name}</p>
                    <p className={`text-2xl font-bold ${s.textColor}`}>{s.score}</p>
                    {s.quizCount > 0 && <p className={`mt-1 text-xs opacity-70 ${s.textColor}`}>Avg: {s.avgPct}% ({s.quizCount} quizzes)</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ad — after the score summary, before the detailed breakdown */}
          <InArticleAd />

          {/* Trend chart */}
          {renderTrend()}

          {/* Study Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Topics Mastered</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                {stats.masteredTopics}<span className="text-sm font-normal text-gray-400">/{stats.totalTopics}</span>
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-full rounded-full bg-green-500" style={{ width: `${stats.masteryRate}%` }} />
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Quiz Pass Rate</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{stats.quizPassRate}%</p>
              <p className="mt-1 text-xs text-gray-400">{stats.quizzesAttempted} quizzes taken</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
              <p className="text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Recent Performance</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{stats.recentAvg}%</p>
              <p className="mt-1 text-xs text-gray-400">Last 10 quizzes avg</p>
            </div>
          </div>

          {/* Tips */}
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-3 font-semibold text-gray-800 dark:text-gray-200">How to Improve Your Score</h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {prediction.confidence === 'low' && (
                <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-blue-700 dark:text-blue-400">Take more quizzes and a practice test to increase prediction accuracy.</p>
                </div>
              )}
              {stats.masteryRate < 50 && <p>• Master more topics! You&apos;ve only mastered {stats.masteryRate}% of {subject} topics.</p>}
              {stats.quizPassRate < 70 && <p>• Review failed quizzes. Your pass rate is {stats.quizPassRate}% — aim for 80%+.</p>}
              <p>• Take a <Link href={practiceLink.href} className={`underline ${t.link}`}>{practiceLink.label.toLowerCase()}</Link> for the most accurate prediction.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link href={practiceLink.href} className={`flex-1 rounded-xl bg-gradient-to-r ${t.gradBtn} px-6 py-3 text-center font-semibold text-white shadow-lg transition hover:shadow-xl`}>
              {practiceLink.label}
            </Link>
            <Link href={diagnosticLink.href} className={`flex-1 rounded-xl border ${t.borderBtn} px-6 py-3 text-center font-semibold ${t.borderBtnText} transition ${t.borderBtnHover}`}>
              {diagnosticLink.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ScorePredictor(config: ScorePredictorConfig) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolLearningResourceJsonLd({ subjectName: config.subject, tool: 'score-predictor' })
          ),
        }}
      />
      <ToolBreadcrumb subjectName={config.subject} tool="Score Predictor" />
      <ScorePredictorInner {...config} />
      <ToolPageSeoBody subjectName={config.subject} tool="score-predictor" />
    </>
  )
}
