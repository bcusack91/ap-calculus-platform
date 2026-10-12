/**
 * Stored ACT full-length sittings (DiagnosticTest, category 'act-full-length'):
 * reading the results JSON back for the results page, the history list, the
 * ACT score goal and the outside-score calibration ("what did we predict?").
 */
import { prisma } from '@/lib/prisma'
import type { ScoreRange } from '@/lib/act-scoring'
import type { ActFlSectionScore, ActFlSkillScore } from '@/lib/act-fl-scoring'

/** DISTINCT from every ACT diagnostic category ('act-diagnostic…'). */
export const ACT_FL_CATEGORY = 'act-full-length'

type Rec = Record<string, unknown>
const asRecord = (v: unknown): Rec | null => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null)
const isScore = (v: unknown): v is number => typeof v === 'number' && Number.isInteger(v) && v >= 1 && v <= 36

function range(v: unknown, score: number): ScoreRange {
  const r = asRecord(v)
  return r && isScore(r.low) && isScore(r.high) ? { low: r.low, high: r.high } : { low: score, high: score }
}

export interface ActFlSummary {
  id: string
  createdAt: string
  form: number | null
  includeScience: boolean
  composite: number
  compositeRange: ScoreRange
  stem: { score: number; range: ScoreRange } | null
  sections: ActFlSectionScore[]
  skills: ActFlSkillScore[]
  correct: number
  total: number
  recommendedTopics: { slug: string; name: string; priority: 'high' | 'medium' }[]
  /** Per-question answers were stored, so /review/act-fl/<id> works. */
  reviewable: boolean
}

/** The stored results of one sitting, or null when they don't parse. Never throws. */
export function summarizeActFl(row: { id: string; createdAt: Date; results: unknown }): ActFlSummary | null {
  const r = asRecord(typeof row.results === 'string' ? safeParse(row.results) : row.results)
  if (!r || !isScore(r.composite)) return null
  const stem = asRecord(r.stem)
  const list = <T,>(v: unknown) => (Array.isArray(v) ? (v.filter((x) => asRecord(x)) as T[]) : [])
  return {
    id: row.id,
    createdAt: row.createdAt.toISOString(),
    form: typeof r.form === 'number' ? r.form : null,
    includeScience: r.includeScience === true,
    composite: r.composite,
    compositeRange: range(r.compositeRange, r.composite),
    stem: stem && isScore(stem.score) ? { score: stem.score, range: range(stem.range, stem.score) } : null,
    sections: list<ActFlSectionScore>(r.sections),
    skills: list<ActFlSkillScore>(r.skills),
    correct: typeof r.correct === 'number' ? r.correct : 0,
    total: typeof r.total === 'number' ? r.total : 0,
    recommendedTopics: list<{ slug: string; name: string; priority: 'high' | 'medium' }>(r.recommendedTopics),
    reviewable: !!asRecord(r.answers),
  }
}

function safeParse(s: string): unknown {
  try {
    return JSON.parse(s)
  } catch {
    return null
  }
}

/** The student's newest ACT full-length composite (optionally before a date), or null. */
export async function latestActFullLength(userId: string, before?: Date): Promise<{ composite: number; at: Date } | null> {
  const rows = await prisma.diagnosticTest.findMany({
    where: { userId, category: ACT_FL_CATEGORY, ...(before ? { createdAt: { lte: before } } : {}) },
    orderBy: { createdAt: 'desc' },
    take: 5,
    select: { createdAt: true, results: true },
  })
  for (const row of rows) {
    const c = asRecord(row.results)?.composite
    if (isScore(c)) return { composite: c, at: row.createdAt }
  }
  return null
}

/**
 * What StudyMondo predicted for the student's ACT composite at a moment: the
 * newest ACT full-length composite, else the newest ACT diagnostic's estimate.
 * Stored with an outside score so the curve can be calibrated later.
 */
export async function actPredictionAt(userId: string, at: Date): Promise<{ predicted: number; fromFullLength: boolean } | null> {
  const fl = await latestActFullLength(userId, at)
  if (fl) return { predicted: fl.composite, fromFullLength: true }
  const diags = await prisma.diagnosticTest.findMany({
    where: { userId, category: { startsWith: 'act-diagnostic' }, createdAt: { lte: at } },
    orderBy: { createdAt: 'desc' },
    take: 5,
    select: { results: true },
  })
  for (const d of diags) {
    const r = asRecord(d.results)
    const est = r?.estimatedComposite
    if (typeof est === 'number' && Number.isFinite(est)) return { predicted: Math.max(1, Math.min(36, Math.round(est))), fromFullLength: false }
  }
  return null
}
