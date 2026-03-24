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
      const typedTopic = topic as {
        slug?: unknown
        name?: unknown
        priority?: unknown
      }
      const slug = typeof typedTopic.slug === 'string' ? typedTopic.slug : ''
      const name = typeof typedTopic.name === 'string' ? typedTopic.name : slug
      const priority: 'high' | 'medium' | 'low' = typedTopic.priority === 'high' || typedTopic.priority === 'low'
        ? typedTopic.priority
        : 'medium'

      if (!slug) return null

      return {
        slug,
        name,
        priority,
      }
    })
    .filter((topic): topic is RecommendedTopic => topic !== null)
}

function priorityValue(priority: RecommendedTopic['priority']): number {
  if (priority === 'high') return 0
  if (priority === 'medium') return 1
  return 2
}

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const latestDiagnostic = await prisma.diagnosticTest.findFirst({
      where: {
        userId: session.user.id,
        category: 'mcat-full-diagnostic',
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        createdAt: true,
        results: true,
      },
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

    const dedupedRecommendedMap = new Map<string, RecommendedTopic>()
    parseRecommendedTopics(latestDiagnostic.results).forEach((topic) => {
      const existing = dedupedRecommendedMap.get(topic.slug)
      if (!existing || priorityValue(topic.priority) < priorityValue(existing.priority)) {
        dedupedRecommendedMap.set(topic.slug, topic)
      }
    })

    const recommendedTopics = Array.from(dedupedRecommendedMap.values()).sort(
      (a, b) => priorityValue(a.priority) - priorityValue(b.priority)
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

    const topicSlugs = recommendedTopics.map((topic) => topic.slug)
    const topics = await prisma.topic.findMany({
      where: {
        slug: { in: topicSlugs },
      },
      select: {
        id: true,
        slug: true,
      },
    })

    const topicIdToSlug = new Map(topics.map((topic) => [topic.id, topic.slug]))
    const slugToTopicId = new Map(topics.map((topic) => [topic.slug, topic.id]))

    const [progressRows, exitAttempts] = await Promise.all([
      prisma.topicProgress.findMany({
        where: {
          userId: session.user.id,
          topicId: { in: topics.map((topic) => topic.id) },
        },
        select: {
          topicId: true,
          masteryLevel: true,
        },
      }),
      prisma.exitQuizAttempt.findMany({
        where: {
          userId: session.user.id,
          topicSlug: { in: topicSlugs },
        },
        orderBy: { completedAt: 'desc' },
        select: {
          topicSlug: true,
          score: true,
          totalQuestions: true,
          completedAt: true,
        },
      }),
    ])

    const progressBySlug = new Map<string, number>()
    progressRows.forEach((row) => {
      const slug = topicIdToSlug.get(row.topicId)
      if (!slug) return
      progressBySlug.set(slug, row.masteryLevel)
    })

    const bestExitBySlug = new Map<string, { scorePercent: number; score: number; totalQuestions: number; completedAt: Date }>()
    exitAttempts.forEach((attempt) => {
      if (!attempt.totalQuestions || attempt.totalQuestions <= 0) return
      const scorePercent = Math.round((attempt.score / attempt.totalQuestions) * 100)
      const existing = bestExitBySlug.get(attempt.topicSlug)
      if (!existing || scorePercent > existing.scorePercent) {
        bestExitBySlug.set(attempt.topicSlug, {
          scorePercent,
          score: attempt.score,
          totalQuestions: attempt.totalQuestions,
          completedAt: attempt.completedAt,
        })
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

    const pendingTopics = recommendedWithStatus.filter((topic) => !topic.isSatisfied)

    return NextResponse.json({
      hasDiagnostic: true,
      diagnosticId: latestDiagnostic.id,
      diagnosticCreatedAt: latestDiagnostic.createdAt,
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
    console.error('MCAT plan status error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
