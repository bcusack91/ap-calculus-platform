'use client'

// ASVAB score predictor: AFQT + line-score ESTIMATES from the student's
// diagnostics, practice tests and exit quizzes (/api/asvab-score-predictor).

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ToolPageSeoBody } from '@/components/ToolPageSeoBody'
import { ToolBreadcrumb } from '@/components/ToolBreadcrumb'
import { InArticleAd } from '@/components/ad-banner'
import { toolLearningResourceJsonLd } from '@/lib/jsonld'
import { BRANCH_MINIMUMS, BRANCH_MINIMUMS_AS_OF, type LineScoreEstimate } from '@/lib/asvab-scoring'

interface SubtestRow {
  id: string
  name: string
  afqt: boolean
  items: number
  percentCorrect: number | null
  score: number | null
  low: number | null
  high: number | null
  sources: { diagnostic: number; practice: number; quiz: number }
}

interface Prediction {
  afqt: { percentile: number; low: number; high: number; category: string; categoryLow: string; categoryHigh: string; ve: number; raw: number } | null
  confidence: 'high' | 'medium' | 'low'
  subtests: SubtestRow[]
  lineScores: LineScoreEstimate[]
  evidence: { diagnostics: number; practiceTests: number; quizzes: number; afqtItems: number }
}

interface Stats { totalTopics: number; masteredTopics: number; masteryRate: number; quizzesAttempted: number; quizPassRate: number; recentAvg: number }

const PAGE_BG = 'min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900'
const CARD = 'rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800'
const CONF: Record<string, string> = {
  high: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  medium: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  low: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
}
const span = (low: number, high: number, point: number) => (low === high ? String(point) : `${low}–${high}`)

function Predictor() {
  const { status } = useSession()
  const router = useRouter()
  const [data, setData] = useState<{ prediction: Prediction; stats: Stats; trend: { date: string; score: number }[] } | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') router.push(`/auth/signin?callbackUrl=${encodeURIComponent('/asvab-score-predictor')}`)
  }, [status, router])

  useEffect(() => {
    if (status !== 'authenticated') return
    fetch('/api/asvab-score-predictor')
      .then((r) => { if (!r.ok) throw new Error('failed'); return r.json() })
      .then(setData)
      .catch(() => setError(true))
  }, [status])

  if (status !== 'authenticated' || (!data && !error)) {
    return (
      <div className={PAGE_BG}><div className="container py-12"><div className="mx-auto max-w-3xl space-y-6">
        <div className="h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
        <div className="h-48 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
      </div></div></div>
    )
  }

  const p = data?.prediction
  if (error || !p || !data) {
    return (
      <div className={PAGE_BG}><div className="container py-12"><div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">ASVAB Score Predictor</h1>
        <p className="text-gray-600 dark:text-gray-400">We couldn&apos;t load your prediction. Please try again in a moment.</p>
      </div></div></div>
    )
  }

  const a = p.afqt
  return (
    <div className={PAGE_BG}>
      <div className="container py-8 sm:py-12"><div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">ASVAB Score Predictor</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">Your estimated AFQT and line scores, built from your diagnostics, practice tests and quizzes.</p>

        <div className={`${CARD} mb-8 text-center`}>
          {a ? (
            <>
              <p className="text-sm text-gray-500 dark:text-gray-400">Estimated AFQT percentile</p>
              <p className="text-6xl font-black text-green-700 dark:text-green-400">{span(a.low, a.high, a.percentile)}</p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Most likely {a.percentile} · Category {a.categoryLow === a.categoryHigh ? a.category : `${a.categoryLow} to ${a.categoryHigh}`} · VE {a.ve} · raw {a.raw}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${CONF[p.confidence]}`}>{p.confidence} confidence</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">based on about {p.evidence.afqtItems} AFQT questions</span>
              </div>
              <p className="mt-3 text-[11px] text-gray-500 dark:text-gray-400">An estimate, not an official score: the real CAT-ASVAB is adaptive. Expect a result within this range. Quiz results count half because they come right after the lesson.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                {BRANCH_MINIMUMS.filter((b) => b.diploma != null).map((b) => {
                  const ok = a.low >= (b.diploma as number) ? 'yes' : a.high < (b.diploma as number) ? 'no' : 'maybe'
                  return (
                    <span key={b.branch} className={`rounded-full px-2.5 py-1 font-medium ${ok === 'yes' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : ok === 'no' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'}`}>
                      {b.branch} {b.diploma}: {ok === 'yes' ? 'clears' : ok === 'no' ? 'below' : 'borderline'}
                    </span>
                  )
                })}
              </div>
              <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400">Published diploma minimums as of {BRANCH_MINIMUMS_AS_OF}. Confirm with a recruiter.</p>
            </>
          ) : (
            <>
              <p className="mb-3 text-gray-700 dark:text-gray-300">We need results on all four AFQT subtests (Word Knowledge, Paragraph Comprehension, Arithmetic Reasoning, Mathematics Knowledge) to estimate your AFQT.</p>
              <Link href="/asvab-diagnostic" className="inline-block rounded-xl bg-gradient-to-r from-green-600 to-lime-600 px-6 py-3 font-semibold text-white shadow">Take the diagnostic</Link>
            </>
          )}
        </div>

        <div className={`${CARD} mb-8`}>
          <h2 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">Subtest estimates</h2>
          <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Standard scores average 50 (SD 10). Fewer questions mean a wider range.</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <thead className="text-xs uppercase text-gray-500 dark:text-gray-400">
                <tr><th className="py-2 pr-2">Subtest</th><th className="py-2 pr-2 text-right">Questions</th><th className="py-2 pr-2 text-right">% right</th><th className="py-2 text-right">Est. score</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {p.subtests.map((s) => (
                  <tr key={s.id}>
                    <td className="py-2 pr-2 text-gray-800 dark:text-gray-200">{s.name} <span className="text-xs text-gray-500">({s.id}{s.afqt ? ', AFQT' : ''})</span></td>
                    <td className="py-2 pr-2 text-right tabular-nums text-gray-600 dark:text-gray-300">{s.items || '—'}</td>
                    <td className="py-2 pr-2 text-right tabular-nums text-gray-600 dark:text-gray-300">{s.percentCorrect ?? '—'}{s.percentCorrect != null ? '%' : ''}</td>
                    <td className="py-2 text-right font-semibold tabular-nums text-gray-900 dark:text-white">{s.score != null && s.low != null && s.high != null ? span(s.low, s.high, s.score) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <InArticleAd />

        {p.lineScores.length > 0 && (
          <div className={`${CARD} mb-8`}>
            <h2 className="mb-1 text-lg font-semibold text-gray-800 dark:text-gray-200">Line-score estimates</h2>
            <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Composites each service uses for job eligibility, shown only when every subtest they need has data. Army areas other than GT are official weighted blends. Job cutoffs change; confirm with a recruiter.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {(['Army', 'Marine Corps', 'Air Force', 'Navy'] as const).map((svc) => {
                const rows = p.lineScores.filter((l) => l.service === svc)
                if (rows.length === 0) return null
                return (
                  <div key={svc} className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{svc}</h3>
                    <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">{rows[0].scaleLabel}</p>
                    {rows.map((r) => (
                      <div key={r.code} className="flex items-center justify-between border-t border-gray-100 py-1 text-sm dark:border-gray-700/60">
                        <span><strong className="text-gray-800 dark:text-gray-200">{r.code}</strong> <span className="text-xs text-gray-500 dark:text-gray-400">{r.name}</span></span>
                        <span className="tabular-nums text-gray-900 dark:text-white">{span(r.low, r.high, r.score)}</span>
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className={CARD}><p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">Topics mastered</p><p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{data.stats.masteredTopics}<span className="text-sm font-normal text-gray-400">/{data.stats.totalTopics}</span></p></div>
          <div className={CARD}><p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">Quiz pass rate</p><p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{data.stats.quizPassRate}%</p><p className="text-xs text-gray-400">{data.stats.quizzesAttempted} quizzes</p></div>
          <div className={CARD}><p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">Diagnostics taken</p><p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{p.evidence.diagnostics}</p>{data.trend.length > 1 && <p className="text-xs text-gray-400">AFQT trend: {data.trend.map((t) => t.score).join(' → ')}</p>}</div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/asvab-diagnostic" className="flex-1 rounded-xl bg-gradient-to-r from-green-600 to-lime-600 px-6 py-3 text-center font-semibold text-white shadow-lg">Take a Diagnostic</Link>
          <Link href="/asvab-practice" className="flex-1 rounded-xl border border-green-400 px-6 py-3 text-center font-semibold text-green-800 hover:bg-green-50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/20">Take a Practice Test</Link>
          <Link href="/asvab-afqt-calculator" className="flex-1 rounded-xl border border-green-400 px-6 py-3 text-center font-semibold text-green-800 hover:bg-green-50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/20">AFQT Calculator</Link>
        </div>
      </div></div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolLearningResourceJsonLd({ subjectName: 'ASVAB', tool: 'score-predictor' })) }} />
      <ToolBreadcrumb subjectName="ASVAB" tool="Score Predictor" />
      <Predictor />
      <ToolPageSeoBody subjectName="ASVAB" tool="score-predictor" />
    </>
  )
}
