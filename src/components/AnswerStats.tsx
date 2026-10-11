'use client'

/**
 * "How others answered": per-option shares and the median time on a
 * question, from POST /api/questions/stats (or, for surfaces without a
 * question key, GET /api/review/<kind>/<id>/stats). Callers only ask once the
 * student has answered; a question with too few responses comes back
 * `insufficient` and nothing is shown.
 */

import { useEffect, useMemo, useState } from 'react'
import { Users } from 'lucide-react'

export type QuestionStat =
  | { questionKey: string; responses: number; shares: number[]; medianSeconds: number | null; insufficient?: undefined }
  | { questionKey: string; responses: number; insufficient: true; shares?: undefined; medianSeconds?: undefined }

export interface StatRequest {
  questionKey: string
  options: string[]
}

/** Most items one stats request may carry (the API's cap). */
export const STATS_BATCH = 120

/** Validate one item of a stats response; anything malformed → null. */
export function parseQuestionStat(raw: unknown): QuestionStat | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Record<string, unknown>
  if (typeof r.questionKey !== 'string' || typeof r.responses !== 'number') return null
  if (r.insufficient === true) return { questionKey: r.questionKey, responses: r.responses, insufficient: true }
  if (!Array.isArray(r.shares) || !r.shares.every((s) => typeof s === 'number' && Number.isFinite(s))) return null
  return {
    questionKey: r.questionKey,
    responses: r.responses,
    shares: r.shares as number[],
    medianSeconds: typeof r.medianSeconds === 'number' && r.medianSeconds > 0 ? r.medianSeconds : null,
  }
}

/** Stats for many questions, in batches of STATS_BATCH; failed batches are left out. */
export async function fetchAnswerStats(reqs: readonly StatRequest[]): Promise<Map<string, QuestionStat>> {
  const out = new Map<string, QuestionStat>()
  const unique = [...new Map(reqs.map((r) => [r.questionKey, r])).values()]
  const batches: StatRequest[][] = []
  for (let i = 0; i < unique.length; i += STATS_BATCH) batches.push(unique.slice(i, i + STATS_BATCH))
  await Promise.all(
    batches.map(async (items) => {
      try {
        const r = await fetch('/api/questions/stats', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items }),
        })
        if (!r.ok) return
        const d = await r.json().catch(() => null)
        const list: unknown[] = Array.isArray(d?.items) ? d.items : []
        for (const raw of list) {
          const s = parseQuestionStat(raw)
          if (s) out.set(s.questionKey, s)
        }
      } catch {
        // Stats are a nice-to-have: a failure just shows none.
      }
    }),
  )
  return out
}

/** Stats for a set of questions; pass null until they have been answered. */
export function useAnswerStats(reqs: readonly StatRequest[] | null): Map<string, QuestionStat> {
  const key = useMemo(() => (reqs && reqs.length ? reqs.map((r) => r.questionKey).join(',') : ''), [reqs])
  const [state, setState] = useState<{ key: string; map: Map<string, QuestionStat> }>({ key: '', map: new Map() })
  useEffect(() => {
    if (!key || !reqs) return
    let live = true
    fetchAnswerStats(reqs).then((map) => {
      if (live) setState({ key, map })
    })
    return () => {
      live = false
    }
    // `key` captures the request; `reqs` identity may change every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return state.key === key ? state.map : EMPTY
}
const EMPTY: Map<string, QuestionStat> = new Map()

export type SingleStatSource =
  | { by: 'key'; questionKey: string; options: string[] }
  | { by: 'attempt'; kind: string; attemptId: string; itemIndex: number }

/** Stats for one answered question; pass null before it is answered. */
export function useQuestionStat(source: SingleStatSource | null): QuestionStat | null {
  const id = !source
    ? ''
    : source.by === 'key'
      ? `k|${source.questionKey}|${source.options.join('␞')}`
      : `a|${source.kind}|${source.attemptId}|${source.itemIndex}`
  const [state, setState] = useState<{ id: string; stat: QuestionStat | null }>({ id: '', stat: null })
  useEffect(() => {
    if (!id || !source) return
    let live = true
    const load = async (): Promise<QuestionStat | null> => {
      try {
        if (source.by === 'key') {
          const map = await fetchAnswerStats([{ questionKey: source.questionKey, options: source.options }])
          return map.get(source.questionKey) ?? null
        }
        const r = await fetch(
          `/api/review/${encodeURIComponent(source.kind)}/${encodeURIComponent(source.attemptId)}/stats?index=${source.itemIndex}`,
          { cache: 'no-store' },
        )
        if (!r.ok) return null
        const d = await r.json().catch(() => null)
        return parseQuestionStat(d?.item)
      } catch {
        return null
      }
    }
    load().then((stat) => {
      if (live) setState({ id, stat })
    })
    return () => {
      live = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return state.id === id ? state.stat : null
}

/** The shares to draw beside the options, or null when there are none to show. */
export function sharesOf(stat: QuestionStat | null | undefined, optionCount: number): number[] | null {
  if (!stat || stat.insufficient || !stat.shares || stat.shares.length !== optionCount || optionCount === 0) return null
  return stat.shares
}

/** "45s", "1m 05s", "1h 02m". */
export function formatStatTime(seconds: number): string {
  const s = Math.max(0, Math.round(seconds))
  if (s < 60) return `${s}s`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ${String(s % 60).padStart(2, '0')}s`
  return `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, '0')}m`
}

/** A share as text: "42%", "<1%", "0%". */
export function formatShare(share: number): string {
  if (share > 0 && share < 0.005) return '<1%'
  return `${Math.round(share * 100)}%`
}

/**
 * "N students answered · median 1m 05s · you took 1m 40s". Renders nothing
 * without enough responses.
 */
export function AnswerStatsSummary({ stat, durationMs, className = '' }: { stat: QuestionStat | null | undefined; durationMs?: number | null; className?: string }) {
  if (!stat || stat.insufficient) return null
  const parts = [`${stat.responses.toLocaleString()} student${stat.responses === 1 ? '' : 's'} answered`]
  if (stat.medianSeconds) parts.push(`median ${formatStatTime(stat.medianSeconds)}`)
  if (durationMs && durationMs > 0) parts.push(`you took ${formatStatTime(durationMs / 1000)}`)
  return (
    <p className={`flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-400 ${className}`}>
      <Users className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
      <span>{parts.join(' · ')}</span>
    </p>
  )
}
