import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

type RecommendedTopic = {
  slug: string
  name: string
  priority: 'high' | 'medium' | 'low'
}

function parseRecommendedTopics(results: unknown): RecommendedTopic[] {
  if (!results || typeof results !== 'object') return []
  const recommendedRaw = (results as { recommendedTopics?: unknown }).recommendedTopics
  if (!Array.isArray(recommendedRaw)) return []
  return recommendedRaw
    .map((topic): RecommendedTopic | null => {
      if (!topic || typeof topic !== 'object') return null
      const t = topic as { slug?: unknown; name?: unknown; priority?: unknown }
      const slug = typeof t.slug === 'string' ? t.slug : ''
      const name = typeof t.name === 'string' ? t.name : slug
      const priority: 'high' | 'medium' | 'low' = t.priority === 'high' || t.priority === 'low' ? t.priority : 'medium'
      if (!slug) return null
      return { slug, name, priority }
    })
    .filter((t): t is RecommendedTopic => t !== null)
}

function priorityValue(p: RecommendedTopic['priority']): number {
  return p === 'high' ? 0 : p === 'medium' ? 1 : 2
}

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const latestDiagnostic = await prisma.diagnosticTest.findFirst({
      // The study plan follows the student's LATEST diagnostic attempt of
      // either kind: the regular screen, or a hard-track module (whose
      // recommendations come from the 700-800-tier items they missed).
      where: {
        userId: session.user.id,
        OR: [
          { category: 'sat-full-diagnostic' },
          { category: { startsWith: 'sat-hard-module' } },
        ],
      },
      orderBy: { createdAt: 'desc' },
      select: { id: true, category: true, createdAt: true, results: true },
    })

    if (!latestDiagnostic) {
      return NextResponse.json({
        hasDiagnostic: false,
        canRetakeDiagnostic: true,
        requiredScorePercent: 80,
        recommendedTopics: [],
        pendingTopics: [],
      })
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
      return NextResponse.json({
        hasDiagnostic: true,
        diagnosticId: latestDiagnostic.id,
        diagnosticCreatedAt: latestDiagnostic.createdAt,
        canRetakeDiagnostic: true,
        requiredScorePercent: 80,
        recommendedTopics: [],
        pendingTopics: [],
      })
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
        where: { userId: session.user.id, topicId: { in: topics.map((t) => t.id) } },
        select: { topicId: true, masteryLevel: true },
      }),
      prisma.exitQuizAttempt.findMany({
        where: { userId: session.user.id, topicSlug: { in: topicSlugs } },
        orderBy: { completedAt: 'desc' },
        select: { topicSlug: true, score: true, totalQuestions: true, completedAt: true },
      }),
    ])

    const progressBySlug = new Map<string, number>()
    progressRows.forEach((row) => {
      const slug = topicIdToSlug.get(row.topicId)
      if (slug) progressBySlug.set(slug, row.masteryLevel)
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

    const requiredScorePercent = 80

    const recommendedWithStatus = recommendedTopics.map((topic) => {
      const masteryLevel = progressBySlug.get(topic.slug) ?? 0
      const bestExit = bestExitBySlug.get(topic.slug)
      const entranceSatisfied = masteryLevel >= 1
      const exitSatisfied = (bestExit?.scorePercent ?? 0) >= requiredScorePercent
      const isSatisfied = entranceSatisfied || exitSatisfied
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

    return NextResponse.json({
      hasDiagnostic: true,
      diagnosticId: latestDiagnostic.id,
      diagnosticCreatedAt: latestDiagnostic.createdAt,
      /** 'hard' when the plan comes from a hard-track module attempt. */
      planSource: latestDiagnostic.category.startsWith('sat-hard-module') ? 'hard' : 'regular',
      canRetakeDiagnostic: pendingTopics.length === 0,
      requiredScorePercent,
      recommendedTopics: recommendedWithStatus,
      pendingTopics,
      summary: {
        totalRecommended: recommendedWithStatus.length,
        completed: recommendedWithStatus.length - pendingTopics.length,
        pending: pendingTopics.length,
      },
    })
  } catch (error) {
    console.error('SAT plan status error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
