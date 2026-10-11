import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { isQuestionKey, optionKey } from '@/lib/question-key'

/**
 * "How others answered": per question (by questionKey), the share of students
 * who picked each option and the median time spent.
 *
 * Counts each student's FIRST answer to a question only — the earliest
 * QuestionActivity row per (userId, questionKey) — so retakes, re-quizzes and
 * mistake reviews don't skew it. A student whose first answer was a skip, or
 * predates chosenKey (no option recorded), is left out rather than replaced by
 * a later attempt. Options are identified by optionKey() of their text, so
 * students who saw different orders count together; callers map shares back
 * to the options they show with sharesForOptions().
 *
 * Anonymous by construction: only counts leave the database, and nothing is
 * shown below MIN_RESPONSES students. Results are cached in memory for
 * CACHE_TTL_MS per key.
 */

/** Below this many students the question shows no stats. */
export const MIN_RESPONSES = 20
/** A median time needs at least this many timed answers. */
export const MIN_TIME_SAMPLES = 5
/** Most question keys one request may ask about. */
export const MAX_STAT_KEYS = 120
export const CACHE_TTL_MS = 10 * 60 * 1000
/** Bounds the in-memory cache (oldest entries evicted first). */
const MAX_CACHE_ENTRIES = 20_000

export type AnswerStat =
  | {
      key: string
      responses: number
      /** chosenKey (optionKey of the option text) → fraction of responses (0..1). */
      shares: Record<string, number>
      /** Median seconds on the question, or null with too few timed answers. */
      medianSeconds: number | null
    }
  | { key: string; responses: number; insufficient: true }

/** One row of the aggregate query (exported for tests). */
export interface AggregateRow {
  questionKey: string
  /** null on the per-question total row. */
  chosenKey: string | null
  n: number | bigint
  /** Timed answers (total row only). */
  timed: number | bigint | null
  /** Median durationMs over timed answers (total row only). */
  medianMs: number | null
}

const num = (v: number | bigint | null | undefined) => (typeof v === 'bigint' ? Number(v) : typeof v === 'number' ? v : 0)
const round4 = (x: number) => Math.round(x * 10_000) / 10_000

/** Turn aggregate rows into one stat per requested key (keys without rows → 0 responses). Pure. */
export function buildAnswerStats(keys: string[], rows: AggregateRow[]): AnswerStat[] {
  const byKey = new Map<string, { total: AggregateRow | null; picks: AggregateRow[] }>()
  for (const r of rows) {
    const e = byKey.get(r.questionKey) ?? { total: null, picks: [] }
    if (r.chosenKey === null) e.total = r
    else e.picks.push(r)
    byKey.set(r.questionKey, e)
  }
  return keys.map((key) => {
    const e = byKey.get(key)
    const responses = e?.total ? num(e.total.n) : (e?.picks ?? []).reduce((s, p) => s + num(p.n), 0)
    if (!e || responses < MIN_RESPONSES) return { key, responses, insufficient: true as const }
    const shares: Record<string, number> = {}
    for (const p of e.picks) shares[p.chosenKey as string] = round4(num(p.n) / responses)
    const timed = num(e.total?.timed)
    const medianMs = e.total?.medianMs
    const medianSeconds = timed >= MIN_TIME_SAMPLES && typeof medianMs === 'number' && Number.isFinite(medianMs)
      ? Math.round(medianMs / 100) / 10
      : null
    return { key, responses, shares, medianSeconds }
  })
}

/**
 * The aggregate query. DISTINCT ON keeps each student's earliest row per
 * question (ties broken by id); the outer query counts picks per option plus
 * one total row per question (GROUPING SETS), with the median time.
 * `"questionKey" = ANY(...)` is served by the QuestionActivity questionKey index.
 */
export async function queryAnswerAggregates(keys: string[], db: Pick<typeof prisma, '$queryRaw'> = prisma): Promise<AggregateRow[]> {
  if (!keys.length) return []
  return db.$queryRaw<AggregateRow[]>(Prisma.sql`
    WITH firsts AS (
      SELECT DISTINCT ON ("userId", "questionKey")
        "questionKey",
        "chosenKey",
        CASE WHEN "durationMs" > 0 THEN "durationMs" END AS ms
      FROM "QuestionActivity"
      WHERE "questionKey" = ANY(${keys}::text[])
        AND "answered" = 1
      ORDER BY "userId", "questionKey", "answeredAt" ASC, "id" ASC
    )
    SELECT
      "questionKey",
      "chosenKey",
      COUNT(*)::int AS n,
      COUNT(ms)::int AS timed,
      percentile_cont(0.5) WITHIN GROUP (ORDER BY ms)::float8 AS "medianMs"
    FROM firsts
    WHERE "chosenKey" IS NOT NULL
    GROUP BY GROUPING SETS (("questionKey", "chosenKey"), ("questionKey"))
  `)
}

type CacheEntry = { stat: AnswerStat; expires: number }
const cache = new Map<string, CacheEntry>()

/** Test hook. */
export function clearAnswerStatsCache(): void {
  cache.clear()
}

function remember(stat: AnswerStat, now: number) {
  cache.delete(stat.key)
  cache.set(stat.key, { stat, expires: now + CACHE_TTL_MS })
  while (cache.size > MAX_CACHE_ENTRIES) {
    const oldest = cache.keys().next().value
    if (oldest === undefined) break
    cache.delete(oldest)
  }
}

/**
 * Stats for up to MAX_STAT_KEYS question keys, in the order asked (duplicates
 * collapse to the first). Keys that aren't questionKey() hashes come back with
 * 0 responses. Cached per key for CACHE_TTL_MS.
 */
export async function getAnswerStats(rawKeys: string[], opts: { now?: number; db?: Pick<typeof prisma, '$queryRaw'> } = {}): Promise<AnswerStat[]> {
  const now = opts.now ?? Date.now()
  const keys = [...new Set(rawKeys)].slice(0, MAX_STAT_KEYS)
  const out = new Map<string, AnswerStat>()
  const missing: string[] = []
  for (const key of keys) {
    if (!isQuestionKey(key)) {
      out.set(key, { key, responses: 0, insufficient: true })
      continue
    }
    const hit = cache.get(key)
    if (hit && hit.expires > now) out.set(key, hit.stat)
    else missing.push(key)
  }
  if (missing.length) {
    const rows = await queryAnswerAggregates(missing, opts.db)
    for (const stat of buildAnswerStats(missing, rows)) {
      remember(stat, now)
      out.set(stat.key, stat)
    }
  }
  return keys.map((k) => out.get(k) as AnswerStat)
}

/**
 * A stat's shares aligned with the options as shown (same order as
 * `optionTexts`); an option nobody picked gets 0. Null when the stat is below
 * the threshold.
 */
export function sharesForOptions(stat: AnswerStat, optionTexts: readonly string[]): number[] | null {
  if ('insufficient' in stat) return null
  return optionTexts.map((text) => stat.shares[optionKey(text)] ?? 0)
}
