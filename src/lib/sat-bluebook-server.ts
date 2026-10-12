import { prisma } from '@/lib/prisma'
import { MATH_DOMAIN_SLUGS, RW_DOMAIN_SLUGS } from '@/data/sat-practice/test-generator'
import { canonicalizeSlug } from '@/data/sat-practice/diagnostic-generator'
import { buildSatPlan, trackSlugFor, type SatLane } from '@/lib/sat-plan'
import { fullLengthReadiness } from '@/lib/full-length-progress-server'
import { computeSatPrediction } from '@/lib/sat-prediction-server'
import { satDomainQbankHref } from '@/lib/qbank-url'
import {
  planUsesBands,
  readBluebookSectionScores,
  selectPlanDomains,
  type BluebookEntry,
  type DomainBands,
  type PlanDomain,
  type SatPredictionSnapshot,
} from '@/lib/sat-bluebook'
import type { SatDomainKey } from '@/lib/sat-domains'

/** Lessons offered per domain in the plan. */
const MAX_LESSONS_PER_DOMAIN = 3
/** Questions in the one-click practice set. */
const PRACTICE_COUNT = 15

const DOMAIN_SLUGS: Record<SatDomainKey, string[]> = { ...RW_DOMAIN_SLUGS, ...MATH_DOMAIN_SLUGS }

/**
 * The lesson topics behind a content domain, in blueprint order: the practice
 * test's domain → pool mapping, resolved to real lesson pages the same way
 * diagnostic recommendations are (canonicalizeSlug).
 */
export function domainLessonSlugs(domain: SatDomainKey): string[] {
  return Array.from(new Set((DOMAIN_SLUGS[domain] ?? []).map(canonicalizeSlug)))
}

export interface PlanLesson {
  slug: string
  title: string
  href: string
}

export interface BluebookPlanDomain extends PlanDomain {
  practiceHref: string
  practiceCount: number
  lessons: PlanLesson[]
}

export interface BluebookPlan {
  basis: 'bands' | 'sections'
  lane: SatLane
  domains: BluebookPlanDomain[]
  /** True when this entry is the student's latest full-length, so the readiness bar restarted from it. */
  resetsReadiness: boolean
}

export interface BluebookEntryView {
  id: string
  source: string
  takenAt: string
  total: number
  rw: number | null
  math: number | null
  domains: DomainBands
  companion: boolean
}

/** StudyMondo's prediction right now, or null when there is no evidence behind it. */
export async function predictionSnapshot(userId: string): Promise<SatPredictionSnapshot | null> {
  try {
    const p = await computeSatPrediction(userId)
    const evidence = {
      practiceTests: p.stats.practiceTestsTaken,
      diagnostics: p.stats.diagnosticsTaken,
      quizzes: p.stats.totalQuizzesAttempted,
    }
    if (!evidence.practiceTests && !evidence.diagnostics && !evidence.quizzes && !p.stats.satTopics) return null
    return {
      total: p.prediction.totalScore,
      rw: p.prediction.rwScore,
      math: p.prediction.mathScore,
      confidence: p.prediction.confidence,
      evidence,
    }
  } catch (e) {
    // Never block saving a real score on the estimate.
    console.error('Bluebook companion: prediction snapshot failed', e)
    return null
  }
}

/** Route each base lesson to the student's lane (Core Skills / 700-800) where a twin exists. */
async function resolveLessons(slugsByDomain: Map<SatDomainKey, string[]>, lane: SatLane): Promise<Map<SatDomainKey, PlanLesson[]>> {
  const base = Array.from(new Set(Array.from(slugsByDomain.values()).flat()))
  const routed = lane === 'regular' ? [] : base.map((s) => trackSlugFor(s, lane))
  const rows = await prisma.topic.findMany({
    where: { slug: { in: Array.from(new Set([...base, ...routed])) } },
    select: { slug: true, title: true },
  })
  const bySlug = new Map(rows.map((r) => [r.slug, r]))
  const out = new Map<SatDomainKey, PlanLesson[]>()
  for (const [domain, slugs] of slugsByDomain) {
    const lessons = new Map<string, PlanLesson>()
    for (const s of slugs) {
      const row = (lane !== 'regular' ? bySlug.get(trackSlugFor(s, lane)) : undefined) ?? bySlug.get(s)
      if (!row || lessons.has(row.slug)) continue
      lessons.set(row.slug, { slug: row.slug, title: row.title, href: `/topics/${row.slug}` })
      if (lessons.size >= MAX_LESSONS_PER_DOMAIN) break
    }
    out.set(domain, Array.from(lessons.values()))
  }
  return out
}

/** The plan for one entry: weakest domains, each with a practice deep link and its lessons. */
export async function buildBluebookPlan(
  userId: string,
  entry: Pick<BluebookEntry, 'rw' | 'math' | 'domains'> & { takenAt: Date },
): Promise<BluebookPlan> {
  const picked = selectPlanDomains(entry)
  const [satPlan, readiness] = await Promise.all([
    buildSatPlan(userId).catch(() => null),
    fullLengthReadiness(userId, 'sat').catch(() => null),
  ])
  const lane: SatLane = satPlan?.lane ?? 'regular'
  const lessons = await resolveLessons(new Map(picked.map((d) => [d.key, domainLessonSlugs(d.key)])), lane)
  const last = readiness?.lastFullLength
  return {
    basis: planUsesBands(entry.domains) ? 'bands' : 'sections',
    lane,
    domains: picked.map((d) => ({
      ...d,
      practiceHref: satDomainQbankHref(d.key, { count: PRACTICE_COUNT, mode: 'tutor' }),
      practiceCount: PRACTICE_COUNT,
      lessons: lessons.get(d.key) ?? [],
    })),
    resetsReadiness: !!last && last.kind === 'external' && new Date(last.at).getTime() === entry.takenAt.getTime(),
  }
}

/** The student's SAT outside scores, newest first, as the companion shows them. */
export async function loadBluebookEntries(userId: string, take = 10): Promise<BluebookEntryView[]> {
  const rows = await prisma.externalExamScore.findMany({
    where: { userId, course: 'sat' },
    orderBy: [{ takenAt: 'desc' }, { createdAt: 'desc' }],
    take,
    select: { id: true, source: true, takenAt: true, totalScore: true, sectionScores: true },
  })
  return rows.map((r) => {
    const s = readBluebookSectionScores(r.sectionScores)
    return {
      id: r.id,
      source: r.source,
      takenAt: r.takenAt.toISOString(),
      total: r.totalScore,
      rw: s.rw,
      math: s.math,
      domains: s.domains,
      companion: s.companion,
    }
  })
}
