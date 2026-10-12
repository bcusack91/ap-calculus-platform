'use client'

/**
 * Results of one ACT full-length sitting (/act-practice/full-length/results/<id>):
 * composite and section scores as ranges, STEM when Science was taken, time
 * per section, accuracy by ACT reporting category, topics to study next, and
 * links to the question-by-question review and the mistake log.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ArrowLeft, BookOpen, ListChecks, Search } from 'lucide-react'
import ActScoreLogCard from '@/components/act/ActScoreLogCard'
import { signInUrl } from '@/lib/auth-redirect'
import { ACT_FL_SECTION_LABELS, actFlSectionSeconds, isActFlSection } from '@/lib/act-fl-scoring'
import type { ActFlSummary } from '@/lib/act-full-length-server'

function fmtClock(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

const pct = (c: number, t: number) => (t > 0 ? Math.round((c / t) * 100) : 0)

export default function ActFullLengthResults({ id }: { id: string }) {
  const router = useRouter()
  const { status } = useSession()
  const [data, setData] = useState<ActFlSummary | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') router.push(signInUrl({ callbackUrl: `/act-practice/full-length/results/${id}` }))
  }, [status, router, id])

  useEffect(() => {
    if (status !== 'authenticated') return
    let live = true
    fetch(`/api/act-full-length/attempts/${encodeURIComponent(id)}`, { cache: 'no-store' })
      .then(async (r) => {
        if (!r.ok) throw new Error(r.status === 404 ? 'This test was not found, or it belongs to another account.' : 'Could not load your results. Refresh to try again.')
        return r.json()
      })
      .then((d) => { if (live) setData(d.attempt as ActFlSummary) })
      .catch((e) => { if (live) setError(e instanceof Error ? e.message : 'Could not load your results.') })
    return () => { live = false }
  }, [status, id])

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-950">
        <div className="container max-w-xl px-4 text-center">
          <p role="alert" className="text-sm text-gray-700 dark:text-gray-300">{error}</p>
          <Link href="/act-practice/full-length" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">Back to full-length tests</Link>
        </div>
      </div>
    )
  }
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-950" aria-busy="true">
        <div className="container max-w-3xl space-y-4 px-4">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
          <div className="h-40 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800" />
          <div className="h-64 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    )
  }

  const card = 'rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800'
  const sectionOrder = data.sections.map((s) => s.section)

  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-950">
      <div className="container max-w-3xl space-y-5 px-4">
        <Link href="/act-practice/full-length" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden /> Full-length tests
        </Link>

        <section className={card} aria-labelledby="act-fl-score">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            ACT full-length{data.form ? ` · Form ${data.form}` : ''} ·{' '}
            {new Date(data.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            {data.includeScience ? '' : ' · without Science'}
          </p>
          <div className="mt-3 flex flex-wrap items-end gap-x-8 gap-y-3">
            <div>
              <h1 id="act-fl-score" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Composite</h1>
              <p className="text-6xl font-black tabular-nums leading-none text-gray-900 dark:text-white">{data.composite}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Likely range <span className="font-semibold tabular-nums text-gray-900 dark:text-white">{data.compositeRange.low}–{data.compositeRange.high}</span>
              </p>
            </div>
            {data.stem && (
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">STEM</p>
                <p className="text-4xl font-black tabular-nums leading-none text-gray-900 dark:text-white">{data.stem.score}</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Range <span className="tabular-nums">{data.stem.range.low}–{data.stem.range.high}</span>
                </p>
              </div>
            )}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold tabular-nums text-gray-900 dark:text-white">{data.correct}</span> of {data.total} correct
            </p>
          </div>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            Composite = average of English, Math and Reading{data.includeScience ? '; STEM = average of Math and Science' : ''}. Scores are estimates from our calibrated 1–36 curve, so we show the range they most likely fall in.
          </p>
        </section>

        <section aria-labelledby="act-fl-sections">
          <h2 id="act-fl-sections" className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Sections</h2>
          <ul className={`grid gap-3 ${data.sections.length > 3 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'}`}>
            {data.sections.map((s) => (
              <li key={s.section} className={card}>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{s.label}</p>
                <p className="mt-1 text-3xl font-black tabular-nums text-gray-900 dark:text-white">{s.scaled}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Range {s.range?.low ?? s.scaled}–{s.range?.high ?? s.scaled}</p>
                <p className="mt-2 text-sm tabular-nums text-gray-700 dark:text-gray-300">{s.correct}/{s.total} correct</p>
                {typeof s.elapsedSeconds === 'number' && isActFlSection(s.section) && (
                  <p className="text-xs tabular-nums text-gray-500 dark:text-gray-400">
                    Time {fmtClock(s.elapsedSeconds)} of {fmtClock(actFlSectionSeconds(s.section))}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {data.skills.length > 0 && (
          <section className={card} aria-labelledby="act-fl-skills">
            <h2 id="act-fl-skills" className="text-lg font-bold text-gray-900 dark:text-white">By reporting category</h2>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">Accuracy on the questions in each ACT reporting category.</p>
            <div className="mt-4 space-y-5">
              {sectionOrder.map((sec) => {
                const rows = data.skills.filter((k) => k.section === sec)
                if (!rows.length) return null
                return (
                  <div key={sec}>
                    <h3 className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-100">{isActFlSection(sec) ? ACT_FL_SECTION_LABELS[sec] : sec}</h3>
                    <ul className="space-y-2">
                      {rows.map((k) => {
                        const p = pct(k.correct, k.total)
                        return (
                          <li key={k.skill} className="grid grid-cols-[minmax(0,1fr)_5.5rem] items-center gap-x-3 gap-y-1 text-sm sm:grid-cols-[minmax(0,14rem)_1fr_5.5rem]">
                            <span className="truncate text-gray-800 dark:text-gray-100" title={k.label}>{k.label}</span>
                            <span className="order-last col-span-2 h-2 overflow-hidden rounded-full bg-gray-200 sm:order-none sm:col-span-1 dark:bg-gray-700" aria-hidden>
                              <span className="block h-full rounded-full bg-accent dark:bg-accent-muted" style={{ width: `${p}%` }} />
                            </span>
                            <span className="text-right tabular-nums text-gray-700 dark:text-gray-200">
                              <span className="font-semibold">{p}%</span> <span className="text-xs text-gray-500 dark:text-gray-400">{k.correct}/{k.total}</span>
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {data.recommendedTopics.length > 0 && (
          <section className={card} aria-labelledby="act-fl-study">
            <h2 id="act-fl-study" className="text-lg font-bold text-gray-900 dark:text-white">Study next</h2>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">The lessons behind your weakest reporting categories, weakest first.</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {data.recommendedTopics.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/topics/${t.slug}/interactive`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-800 hover:border-accent-muted hover:text-accent dark:border-gray-600 dark:text-gray-100"
                  >
                    <BookOpen className="h-4 w-4" aria-hidden /> {t.name}
                    {t.priority === 'high' && <span className="rounded bg-amber-100 px-1.5 text-[10px] font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">Priority</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="flex flex-wrap gap-2">
          {data.reviewable && (
            <Link href={`/review/act-fl/${data.id}`} className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring">
              <Search className="h-4 w-4" aria-hidden /> Review every question
            </Link>
          )}
          <Link href="/act/mistakes" className="inline-flex items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:border-accent-muted hover:text-accent dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200">
            <ListChecks className="h-4 w-4" aria-hidden /> ACT mistake log
          </Link>
          <Link href="/act/qbank" className="inline-flex items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:border-accent-muted hover:text-accent dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200">
            Practice in the question bank
          </Link>
        </div>

        <ActScoreLogCard callbackUrl={`/act-practice/full-length/results/${data.id}`} />
      </div>
    </div>
  )
}
