import { prisma } from '@/lib/prisma'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { isEntranceMastery } from '@/lib/flashcard-unlock'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { trackSlugFor, type SatLane } from '@/lib/sat-plan'
import { canonicalizeSlug } from '@/data/sat-practice/diagnostic-generator'
import { HARD_MODULE_CATEGORY } from '@/data/sat-practice/hard-modules'
import { CORE_MODULE_CATEGORY } from '@/data/sat-practice/core-skills-modules'
import {
  FULL_LENGTH_COURSES,
  cycleComplete,
  cycleFraction,
  readinessBar,
  type CycleSummary,
  type FullLengthCourse,
  type FullLengthEvent,
  type FullLengthReadiness,
} from '@/lib/full-length-progress'

/**
 * The student's live plan for the latest cycle, when the caller already built
 * it (plan-status does). The plan swaps pre-cleared topics for new work, so
 * its counts are what the student sees; the replay below only knows the
 * stored recommendations.
 */
export interface CurrentPlanCounts {
  diagnosticId: string
  topicsTotal: number
  topicsCleared: number
}

const SAT_LANES: SatLane[] = ['regular', 'advanced', 'core-skills']

/** Distinct recommended slugs stored on a diagnostic's results. */
export function recommendedSlugs(results: unknown, course: FullLengthCourse): string[] {
  const raw = (results as { recommendedTopics?: unknown } | null)?.recommendedTopics
  if (!Array.isArray(raw)) return []
  const out = new Set<string>()
  for (const t of raw) {
    const slug = (t as { slug?: unknown } | null)?.slug
    if (typeof slug === 'string' && slug) out.add(course === 'sat' ? canonicalizeSlug(slug) : slug)
  }
  return [...out]
}

/** Every slug a stored recommendation might have been studied under (SAT lanes). */
function slugVariants(slug: string, course: FullLengthCourse): string[] {
  if (course !== 'sat') return [slug]
  return [...new Set([slug, ...SAT_LANES.map((lane) => trackSlugFor(slug, lane))])]
}

async function fullLengthEvents(userId: string, course: FullLengthCourse): Promise<FullLengthEvent[]> {
  const external = await prisma.externalExamScore.findMany({
    where: { userId, course },
    select: { takenAt: true, totalScore: true, source: true },
  })
  const events: FullLengthEvent[] = external.map((e) => ({ at: e.takenAt.toISOString(), kind: 'external', score: e.totalScore, source: e.source }))
  if (course === 'mcat') {
    const rows = await prisma.diagnosticTest.findMany({
      where: { userId, category: 'mcat-full-length' },
      select: { createdAt: true, results: true },
    })
    for (const r of rows) {
      const total = (r.results as { total?: unknown } | null)?.total
      events.push({ at: r.createdAt.toISOString(), kind: 'studymondo', score: typeof total === 'number' ? total : null, source: null })
    }
  } else {
    const rows = await prisma.satTestAttempt.findMany({
      where: { userId, completed: true },
      select: { completedAt: true, totalScore: true, testNumber: true },
    })
    for (const r of rows) events.push({ at: r.completedAt.toISOString(), kind: 'studymondo', score: r.totalScore, source: `Practice Test ${r.testNumber}` })
  }
  return events.sort((a, b) => (a.at < b.at ? -1 : 1))
}

/**
 * Readiness for the next full-length: replays every diagnostic cycle since the
 * student's last full-length. A cycle's lessons count as cleared when their
 * exit quiz was first passed (or the lesson tested out / finished, for
 * quizless topics) before the next diagnostic was taken.
 */
export async function fullLengthReadiness(
  userId: string,
  course: FullLengthCourse,
  opts: { currentPlan?: CurrentPlanCounts | null; now?: Date } = {},
): Promise<FullLengthReadiness> {
  const cfg = FULL_LENGTH_COURSES[course]
  const now = opts.now ?? new Date()
  const events = await fullLengthEvents(userId, course)
  const lastFullLength = events.length ? events[events.length - 1] : null
  const lastFullLengthAt = lastFullLength ? new Date(lastFullLength.at) : null

  const diagnostics = await prisma.diagnosticTest.findMany({
    where: {
      userId,
      ...(course === 'mcat'
        ? { category: 'mcat-full-diagnostic' }
        : { OR: [{ category: 'sat-full-diagnostic' }, { category: { startsWith: HARD_MODULE_CATEGORY } }, { category: { startsWith: CORE_MODULE_CATEGORY } }] }),
    },
    orderBy: { createdAt: 'asc' },
    select: { id: true, createdAt: true, results: true },
  })

  const base = (summaries: CycleSummary[], currentCycle: CycleSummary | null) => {
    const bar = readinessBar(summaries.map((c) => c.fraction), cfg.cyclesRequired)
    return {
      ...bar,
      course,
      label: cfg.label,
      cyclesRequired: cfg.cyclesRequired,
      cyclesComplete: summaries.filter((c) => c.complete).length,
      cycles: summaries,
      currentCycle,
      fullLengthHref: cfg.fullLengthHref,
      fullLengthLabel: cfg.fullLengthLabel,
      externalLabel: cfg.externalLabel,
      lastFullLength,
      fullLengthsTaken: events.length,
    }
  }
  if (diagnostics.length === 0) return base([], null)

  const cycleSlugs = diagnostics.map((d) => recommendedSlugs(d.results, course))
  const allSlugs = [...new Set(cycleSlugs.flat().flatMap((s) => slugVariants(s, course)))]
  const [topics, passes, unitTests] = await Promise.all([
    allSlugs.length
      ? prisma.topic.findMany({ where: { slug: { in: allSlugs } }, select: { id: true, slug: true } })
      : Promise.resolve([] as { id: string; slug: string }[]),
    allSlugs.length
      ? prisma.exitQuizAttempt.findMany({
          where: { userId, topicSlug: { in: allSlugs } },
          select: { topicSlug: true, score: true, totalQuestions: true, completedAt: true },
        })
      : Promise.resolve([] as { topicSlug: string; score: number; totalQuestions: number; completedAt: Date }[]),
    prisma.mcatUnitTest.findMany({
      where: { userId, passed: true, diagnosticId: { in: diagnostics.map((d) => d.id) } },
      select: { diagnosticId: true },
    }),
  ])
  const progress = topics.length
    ? await prisma.topicProgress.findMany({
        where: { userId, topicId: { in: topics.map((t) => t.id) } },
        select: { topicId: true, masteryLevel: true, masteredParts: true, completedAt: true },
      })
    : []
  const slugById = new Map(topics.map((t) => [t.id, t.slug]))
  const progressBySlug = new Map<string, (typeof progress)[number]>()
  for (const p of progress) {
    const slug = slugById.get(p.topicId)
    if (slug) progressBySlug.set(slug, p)
  }
  // First passing exit quiz per slug — passes are immutable, so this is stable.
  const firstPassAt = new Map<string, Date>()
  for (const a of passes) {
    if (!a.totalQuestions || Math.round((a.score / a.totalQuestions) * 100) < TOPIC_CLEAR_PERCENT) continue
    const prev = firstPassAt.get(a.topicSlug)
    if (!prev || a.completedAt < prev) firstPassAt.set(a.topicSlug, a.completedAt)
  }
  const clearedBy = (slug: string, deadline: Date): boolean =>
    slugVariants(slug, course).some((v) => {
      const pass = firstPassAt.get(v)
      if (pass && pass <= deadline) return true
      const p = progressBySlug.get(v)
      if (!p?.completedAt || p.completedAt > deadline) return false
      if (isEntranceMastery({ topicSlug: v, masteryLevel: p.masteryLevel, masteredParts: p.masteredParts })) return true
      return !hasExitQuiz(v) && (p.masteryLevel ?? 0) >= 1
    })
  const passedUnitTest = new Set(unitTests.map((u) => u.diagnosticId))

  const summaries: CycleSummary[] = diagnostics.map((d, i) => {
    const deadline = diagnostics[i + 1]?.createdAt ?? now
    const slugs = cycleSlugs[i]
    let topicsTotal = slugs.length
    let topicsCleared = slugs.filter((s) => clearedBy(s, deadline)).length
    const isLatest = i === diagnostics.length - 1
    if (isLatest && opts.currentPlan && opts.currentPlan.diagnosticId === d.id) {
      topicsTotal = opts.currentPlan.topicsTotal
      topicsCleared = opts.currentPlan.topicsCleared
    }
    const input = { topicsCleared, topicsTotal, unitTestPassed: passedUnitTest.has(d.id), unitTestRequired: cfg.unitTestRequired }
    return {
      diagnosticId: d.id,
      startedAt: d.createdAt.toISOString(),
      ...input,
      complete: cycleComplete(input),
      fraction: cycleFraction(input),
    }
  })

  // Cycles count toward the NEXT full-length when they started after the last
  // one. A cycle still in progress when a full-length was taken carries over
  // (its partial credit only ever counted toward a bar that has since reset).
  const counted = summaries.filter((c, i) => {
    if (!lastFullLengthAt) return true
    if (new Date(c.startedAt) > lastFullLengthAt) return true
    return i === summaries.length - 1 && !c.complete
  })
  const latest = summaries[summaries.length - 1]
  const currentCycle = latest && !latest.complete ? latest : null
  return base(counted, currentCycle)
}
