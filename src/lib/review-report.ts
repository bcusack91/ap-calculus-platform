/**
 * The "Report" tab of a permanent attempt review: accuracy by section and by
 * topic (weakest first), CARS accuracy by reasoning skill, and pacing (total
 * time, time per question against what other students took, the slowest
 * questions). Pure and client-safe — the review page builds it from the
 * items it already has plus the answer-stat medians.
 */
import { carsSkillLabel } from '@/lib/cars-skills'

export type ReportStatus = 'correct' | 'wrong' | 'skipped' | 'typed'

export interface ReportItem {
  index: number
  questionKey: string
  topicSlug?: string
  topicTitle?: string
  discipline?: string
  skill?: string
  durationMs?: number | null
  status: ReportStatus
}

export interface AccuracyBucket {
  key: string
  label: string
  correct: number
  wrong: number
  skipped: number
  /** Graded questions (an ungraded typed answer isn't counted). */
  total: number
  /** 0..1, or 0 when nothing graded. */
  accuracy: number
}

export interface SlowQuestion {
  index: number
  label: string | null
  durationMs: number
  medianMs: number | null
  status: ReportStatus
}

export interface PacingReport {
  /** Sum of recorded times, or null when nothing was timed. */
  totalMs: number | null
  timedCount: number
  avgMs: number | null
  /** Questions with both a recorded time and a median from other students. */
  compared: number
  /** Of those, how many took longer than the median (more than 10% over). */
  slower: number
  /** …and how many took less (more than 10% under). */
  faster: number
  /** Your total vs the medians' total, over the compared questions only. */
  yourComparedMs: number
  medianComparedMs: number
  /** Up to `slowestCount` questions, longest first; empty when every time is the same (per-attempt averages). */
  slowest: SlowQuestion[]
}

export interface ReviewReport {
  overall: { correct: number; total: number; accuracy: number }
  sections: AccuracyBucket[]
  topics: AccuracyBucket[]
  /** CARS accuracy by reasoning skill (items tagged with a skill only). */
  skills: AccuracyBucket[]
  pacing: PacingReport
}

/** A slug turned into words when no topic title is known: "mcat-enzyme-kinetics" → "Enzyme kinetics". */
export function humanizeSlug(slug: string): string {
  const words = slug.replace(/^(mcat|sat|act)-/, '').replace(/-(mcat|sat|act)$/, '').replace(/-/g, ' ').trim()
  return words ? words.charAt(0).toUpperCase() + words.slice(1) : slug
}

function bucketize(items: readonly ReportItem[], keyOf: (it: ReportItem) => { key: string; label: string } | null): AccuracyBucket[] {
  const map = new Map<string, AccuracyBucket>()
  for (const it of items) {
    const k = keyOf(it)
    if (!k) continue
    const b = map.get(k.key) ?? { key: k.key, label: k.label, correct: 0, wrong: 0, skipped: 0, total: 0, accuracy: 0 }
    if (it.status === 'correct') b.correct++
    else if (it.status === 'wrong') b.wrong++
    else if (it.status === 'skipped') b.skipped++
    if (it.status !== 'typed') b.total++
    map.set(k.key, b)
  }
  return [...map.values()]
    .filter((b) => b.total > 0)
    .map((b) => ({ ...b, accuracy: b.correct / b.total }))
    // Weakest first; among equals, the bigger sample first, then by name.
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total || a.label.localeCompare(b.label))
}

const SLOWER = 1.1
const FASTER = 0.9

export function buildReviewReport(
  items: readonly ReportItem[],
  opts: { medianSecondsByKey?: ReadonlyMap<string, number | null>; slowestCount?: number } = {},
): ReviewReport {
  const graded = items.filter((i) => i.status !== 'typed')
  const correct = graded.filter((i) => i.status === 'correct').length

  const sections = bucketize(items, (it) => (it.discipline ? { key: it.discipline, label: it.discipline } : null))
  const topics = bucketize(items, (it) => (it.topicSlug ? { key: it.topicSlug, label: it.topicTitle || humanizeSlug(it.topicSlug) } : null))
  const skills = bucketize(items, (it) => (it.skill ? { key: it.skill, label: carsSkillLabel(it.skill) } : null))

  const timed = items.filter((i) => typeof i.durationMs === 'number' && i.durationMs > 0)
  const totalMs = timed.length ? timed.reduce((n, i) => n + (i.durationMs as number), 0) : null
  let compared = 0
  let slower = 0
  let faster = 0
  let yourComparedMs = 0
  let medianComparedMs = 0
  const medianMsOf = (it: ReportItem) => {
    const s = opts.medianSecondsByKey?.get(it.questionKey)
    return typeof s === 'number' && s > 0 ? s * 1000 : null
  }
  for (const it of timed) {
    const med = medianMsOf(it)
    if (med === null) continue
    const ms = it.durationMs as number
    compared++
    yourComparedMs += ms
    medianComparedMs += med
    if (ms > med * SLOWER) slower++
    else if (ms < med * FASTER) faster++
  }
  // Per-attempt averages (every question the same time) say nothing about which was slow.
  const distinct = new Set(timed.map((i) => i.durationMs)).size
  const slowest: SlowQuestion[] =
    distinct > 1
      ? [...timed]
          .sort((a, b) => (b.durationMs as number) - (a.durationMs as number) || a.index - b.index)
          .slice(0, opts.slowestCount ?? 5)
          .map((it) => ({
            index: it.index,
            label: it.topicTitle || (it.topicSlug ? humanizeSlug(it.topicSlug) : it.discipline ?? null),
            durationMs: it.durationMs as number,
            medianMs: medianMsOf(it),
            status: it.status,
          }))
      : []

  return {
    overall: { correct, total: graded.length, accuracy: graded.length ? correct / graded.length : 0 },
    sections,
    topics,
    skills,
    pacing: {
      totalMs,
      timedCount: timed.length,
      avgMs: totalMs !== null ? Math.round(totalMs / timed.length) : null,
      compared,
      slower,
      faster,
      yourComparedMs,
      medianComparedMs,
      slowest,
    },
  }
}
