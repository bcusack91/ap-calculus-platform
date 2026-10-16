import { prisma } from '@/lib/prisma'
import { loadSatSuperscore } from '@/lib/superscore-server'
import type { Superscore } from '@/lib/superscore'
import { isApGoalCourse, type GoalCourse } from '@/lib/exam-goals'
import { latestActFullLength } from '@/lib/act-full-length-server'
import { apPracticeCategory, apPracticeAttemptTitle } from '@/lib/ap-practice-exams'
import { apPracticeKeyFor } from '@/lib/full-length-progress'
import type { ApUnitTestCourse } from '@/lib/unit-test-courses'

/** The score a goal is measured against. */
export interface CurrentScore {
  score: number | null
  /** What the number is, e.g. 'Superscore' or 'Latest full-length'. */
  basis: string | null
  /** Where it came from, e.g. 'AAMC Full Length 2'. */
  source: string | null
  at: string | null
  superscore?: Superscore | null
}

const NONE: CurrentScore = { score: null, basis: null, source: null, at: null }

function inRange(v: unknown, lo: number, hi: number): v is number {
  return typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi
}

/** Latest MCAT full-length total: a StudyMondo full-length or an entered AAMC score, whichever is newer. */
async function latestMcat(userId: string): Promise<CurrentScore> {
  const [fl, ext] = await Promise.all([
    prisma.diagnosticTest.findMany({
      where: { userId, category: 'mcat-full-length' },
      orderBy: { createdAt: 'desc' },
      take: 10,
      select: { createdAt: true, results: true },
    }),
    prisma.externalExamScore.findFirst({
      where: { userId, course: 'mcat' },
      orderBy: { takenAt: 'desc' },
      select: { takenAt: true, totalScore: true, source: true },
    }),
  ])
  const own = fl.find((r) => inRange((r.results as { total?: unknown } | null)?.total, 472, 528))
  const ownScore = own ? ((own.results as { total: number }).total) : null
  const candidates: CurrentScore[] = []
  if (own && ownScore != null) candidates.push({ score: ownScore, basis: 'Latest full-length', source: 'StudyMondo full-length', at: own.createdAt.toISOString() })
  if (ext && inRange(ext.totalScore, 472, 528)) candidates.push({ score: ext.totalScore, basis: 'Latest full-length', source: ext.source, at: ext.takenAt.toISOString() })
  if (!candidates.length) return NONE
  return candidates.sort((a, b) => ((a.at ?? '') < (b.at ?? '') ? 1 : -1))[0]
}

/** Latest ACT composite: a StudyMondo full-length or a logged real ACT / ACT practice score, whichever is newer. */
async function latestAct(userId: string): Promise<CurrentScore> {
  const [fl, ext] = await Promise.all([
    latestActFullLength(userId),
    prisma.externalExamScore.findFirst({
      where: { userId, course: 'act' },
      orderBy: { takenAt: 'desc' },
      select: { takenAt: true, totalScore: true, source: true },
    }),
  ])
  const candidates: CurrentScore[] = []
  if (fl) candidates.push({ score: fl.composite, basis: 'Latest full-length', source: 'StudyMondo full-length', at: fl.at.toISOString() })
  if (ext && inRange(ext.totalScore, 1, 36)) candidates.push({ score: ext.totalScore, basis: 'Latest ACT score', source: ext.source, at: ext.takenAt.toISOString() })
  if (!candidates.length) return NONE
  return candidates.sort((a, b) => ((a.at ?? '') < (b.at ?? '') ? 1 : -1))[0]
}

/**
 * Latest AP score (1–5): the newest of a StudyMondo practice exam (any form,
 * its estimated AP score) and a logged outside score — a released College
 * Board exam or the real AP score, which arrives in July.
 */
async function latestAp(userId: string, course: ApUnitTestCourse): Promise<CurrentScore> {
  const [practice, ext] = await Promise.all([
    prisma.diagnosticTest.findMany({
      where: { userId, category: apPracticeCategory(apPracticeKeyFor(course)) },
      orderBy: { createdAt: 'desc' },
      take: 10,
      select: { category: true, createdAt: true, results: true },
    }),
    prisma.externalExamScore.findFirst({
      where: { userId, course },
      orderBy: { takenAt: 'desc' },
      select: { takenAt: true, totalScore: true, source: true },
    }),
  ])
  const own = practice.find((r) => inRange((r.results as { estimatedAPScore?: unknown } | null)?.estimatedAPScore, 1, 5))
  const candidates: CurrentScore[] = []
  if (own) {
    candidates.push({
      score: (own.results as { estimatedAPScore: number }).estimatedAPScore,
      basis: 'Latest practice exam',
      source: apPracticeAttemptTitle(own.category, own.results),
      at: own.createdAt.toISOString(),
    })
  }
  if (ext && inRange(ext.totalScore, 1, 5)) candidates.push({ score: ext.totalScore, basis: 'Latest AP score', source: ext.source, at: ext.takenAt.toISOString() })
  if (!candidates.length) return NONE
  return candidates.sort((a, b) => ((a.at ?? '') < (b.at ?? '') ? 1 : -1))[0]
}

/**
 * The student's current score for a goal. SAT: superscore across StudyMondo
 * full practice tests and entered College Board scores. MCAT: latest
 * full-length (StudyMondo or AAMC). ACT: latest ACT full-length composite or
 * logged real ACT score. AP: latest practice-exam estimate or logged AP
 * score (1–5). PSAT has no stored full-length scores yet, so its goal shows
 * without a current score.
 */
export async function currentScoreFor(userId: string, course: GoalCourse): Promise<CurrentScore> {
  if (course === 'sat') {
    const superscore = await loadSatSuperscore(userId)
    if (!superscore) return { ...NONE, superscore: null }
    const latest = superscore.rw.from.date > superscore.math.from.date ? superscore.rw.from.date : superscore.math.from.date
    return {
      score: superscore.total,
      basis: superscore.combined ? 'Superscore' : 'Best test',
      source: superscore.combined ? null : superscore.bestSingle.from.label,
      at: latest,
      superscore,
    }
  }
  if (course === 'mcat') return latestMcat(userId)
  if (course === 'act') return latestAct(userId)
  if (isApGoalCourse(course)) return latestAp(userId, course)
  return NONE
}
