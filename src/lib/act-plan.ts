import { prisma } from '@/lib/prisma'
import { isEntranceMastery } from '@/lib/flashcard-unlock'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { TOPIC_CLEAR_PERCENT } from '@/lib/mastery'
import { UNIT_TEST_COURSES } from '@/lib/unit-test-courses'
import { unitTestStatusFor, type McatUnitTestStatus } from '@/lib/mcat-unit-test-server'

type RecommendedTopic = {
  slug: string
  name: string
  priority: 'high' | 'medium'
  domainId?: string
}

function parseRecommendedTopics(results: unknown): RecommendedTopic[] {
  if (!results || typeof results !== 'object') return []
  const recommendedRaw = (results as { recommendedTopics?: unknown }).recommendedTopics
  if (!Array.isArray(recommendedRaw)) return []
  return recommendedRaw
    .map((topic): RecommendedTopic | null => {
      if (!topic || typeof topic !== 'object') return null
      const t = topic as { slug?: unknown; name?: unknown; priority?: unknown; domainId?: unknown }
      const slug = typeof t.slug === 'string' ? t.slug : ''
      const name = typeof t.name === 'string' ? t.name : slug
      const priority: 'high' | 'medium' = t.priority === 'high' ? 'high' : 'medium'
      if (!slug) return null
      return { slug, name, priority, domainId: typeof t.domainId === 'string' ? t.domainId : undefined }
    })
    .filter((t): t is RecommendedTopic => t !== null)
}

function priorityValue(p: 'high' | 'medium'): number {
  return p === 'high' ? 0 : 1
}

export interface ActPlanStatus {
  hasDiagnostic: boolean
  diagnosticId?: string
  diagnosticCreatedAt?: Date
  canRetakeDiagnostic: boolean
  requiredScorePercent: number
  recommendedTopics: (RecommendedTopic & { isSatisfied: boolean; [key: string]: unknown })[]
  pendingTopics: (RecommendedTopic & { isSatisfied: boolean; [key: string]: unknown })[]
  unitTest: McatUnitTestStatus | null
  summary?: { totalRecommended: number; completed: number; pending: number }
}

/**
 * The student's current ACT study cycle: the latest diagnostic's recommended
 * topics with done/pending state, and the cycle's unit test once it is on.
 * Shared by /api/act-diagnostic/plan-status, the dashboard's plan-status and
 * the unit-test API, so all three show the same topics.
 */
export async function buildActPlanStatus(userId: string): Promise<ActPlanStatus> {
  const latestDiagnostic = await prisma.diagnosticTest.findFirst({
    where: { userId: userId, category: { startsWith: 'act-diagnostic' } },
    orderBy: { createdAt: 'desc' },
    select: { id: true, createdAt: true, results: true },
  })

  if (!latestDiagnostic) {
    return {
      hasDiagnostic: false,
      canRetakeDiagnostic: true,
      requiredScorePercent: TOPIC_CLEAR_PERCENT,
      recommendedTopics: [],
      pendingTopics: [],
      unitTest: null,
    }
  }

  const dedupedMap = new Map<string, RecommendedTopic>()
  parseRecommendedTopics(latestDiagnostic.results).forEach((topic) => {
    const existing = dedupedMap.get(topic.slug)
    if (!existing || priorityValue(topic.priority) < priorityValue(existing.priority)) {
      dedupedMap.set(topic.slug, topic)
    }
  })

  const recommendedTopics = Array.from(dedupedMap.values()).sort(
    (a, b) => priorityValue(a.priority) - priorityValue(b.priority),
  )

  if (recommendedTopics.length === 0) {
    return {
      hasDiagnostic: true,
      diagnosticId: latestDiagnostic.id,
      diagnosticCreatedAt: latestDiagnostic.createdAt,
      canRetakeDiagnostic: true,
      requiredScorePercent: TOPIC_CLEAR_PERCENT,
      recommendedTopics: [],
      pendingTopics: [],
      unitTest: null,
    }
  }

  const topicSlugs = recommendedTopics.map((t) => t.slug)
  const topics = await prisma.topic.findMany({
    where: { slug: { in: topicSlugs } },
    select: { id: true, slug: true },
  })

  const topicIdToSlug = new Map(topics.map((t) => [t.id, t.slug]))
  const slugToTopicId = new Map(topics.map((t) => [t.slug, t.id]))

  const [progressRows, exitAttempts] = await Promise.all([
    prisma.topicProgress.findMany({
      where: { userId: userId, topicId: { in: topics.map((t) => t.id) } },
      select: { topicId: true, masteryLevel: true, masteredParts: true },
    }),
    prisma.exitQuizAttempt.findMany({
      where: { userId: userId, topicSlug: { in: topicSlugs } },
      orderBy: { completedAt: 'desc' },
      select: { topicSlug: true, score: true, totalQuestions: true, completedAt: true },
    }),
  ])

  const progressBySlug = new Map<string, { masteryLevel: number; masteredParts: unknown }>()
  progressRows.forEach((row) => {
    const slug = topicIdToSlug.get(row.topicId)
    if (slug) progressBySlug.set(slug, { masteryLevel: row.masteryLevel, masteredParts: row.masteredParts })
  })

  const bestExitBySlug = new Map<string, { scorePercent: number; score: number; totalQuestions: number; completedAt: Date }>()
  exitAttempts.forEach((a) => {
    if (!a.totalQuestions || a.totalQuestions <= 0) return
    const pct = Math.round((a.score / a.totalQuestions) * 100)
    const existing = bestExitBySlug.get(a.topicSlug)
    if (!existing || pct > existing.scorePercent) {
      bestExitBySlug.set(a.topicSlug, { scorePercent: pct, score: a.score, totalQuestions: a.totalQuestions, completedAt: a.completedAt })
    }
  })

  const requiredScorePercent = TOPIC_CLEAR_PERCENT

  const recommendedWithStatus = recommendedTopics.map((topic) => {
    const progress = progressBySlug.get(topic.slug)
    const masteryLevel = progress?.masteryLevel ?? 0
    const bestExit = bestExitBySlug.get(topic.slug)
    // An entrance-quiz test-out clears a topic without its exit quiz;
    // finishing the lesson does NOT (it also reaches masteryLevel 1, which
    // is the hole that let students skip the quiz entirely).
    const entranceSatisfied = isEntranceMastery({
      topicSlug: topic.slug,
      masteryLevel,
      masteredParts: progress?.masteredParts,
    })
    const exitSatisfied = (bestExit?.scorePercent ?? 0) >= requiredScorePercent
    // Topics with no exit quiz mapped can never produce an attempt, so the
    // lesson alone has to clear them or the plan can never be completed.
    const lessonSatisfiedWithoutQuiz = !hasExitQuiz(topic.slug) && masteryLevel >= 1
    const isSatisfied = entranceSatisfied || exitSatisfied || lessonSatisfiedWithoutQuiz
    return {
      ...topic,
      topicPath: `/topics/${topic.slug}`,
      topicFound: slugToTopicId.has(topic.slug),
      masteryLevel,
      entranceSatisfied,
      bestExitScorePercent: bestExit?.scorePercent ?? null,
      bestExitScore: bestExit ? `${bestExit.score}/${bestExit.totalQuestions}` : null,
      bestExitCompletedAt: bestExit?.completedAt ?? null,
      exitSatisfied,
      isSatisfied,
    }
  })

  const pendingTopics = recommendedWithStatus.filter((t) => !t.isSatisfied)
  // The cycle's recommended last step (does not lock the diagnostic); off
  // until ACT's exit pools are large enough (unit-test-courses.ts).
  const unitTest = UNIT_TEST_COURSES.act.enabled
    ? await unitTestStatusFor(userId, latestDiagnostic.id, pendingTopics.length === 0, 'act')
    : null

  return {
    hasDiagnostic: true,
    diagnosticId: latestDiagnostic.id,
    diagnosticCreatedAt: latestDiagnostic.createdAt,
    canRetakeDiagnostic: pendingTopics.length === 0,
    requiredScorePercent,
    recommendedTopics: recommendedWithStatus,
    pendingTopics,
    unitTest,
    summary: {
      totalRecommended: recommendedWithStatus.length,
      completed: recommendedWithStatus.length - pendingTopics.length,
      pending: pendingTopics.length,
    },
  }
}
