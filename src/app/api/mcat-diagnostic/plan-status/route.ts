import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { hasInteractiveLesson } from '@/data/interactive-lessons/registry'
import { hasExitQuiz } from '@/data/exit-quizzes'
import { isEntranceMastery } from '@/lib/flashcard-unlock'
import {
  planCandidateUniverse,
  selectPlanTopics,
  type PlanDomainResult,
} from '@/data/mcat-practice/diagnostic-generator'

type RecommendedTopic = {
  slug: string
  name: string
  priority: 'high' | 'medium' | 'low'
}

/**
 * Domain results as persisted by the diagnostic submit. They are the seed for
 * the replacement-candidate pool when a cycle's recommendations were already
 * cleared in an earlier cycle (see selectPlanTopics).
 */
function parseDomainResults(results: unknown): PlanDomainResult[] {
  if (!results || typeof results !== 'object') return []
  const raw = (results as { domains?: unknown }).domains
  if (!Array.isArray(raw)) return []
  return raw
    .map((domain): PlanDomainResult | null => {
      if (!domain || typeof domain !== 'object') return null
      const typed = domain as { domainId?: unknown; domainName?: unknown; level?: unknown }
      if (typeof typed.domainId !== 'string' || !typed.domainId) return null
      const level = typed.level
      if (level !== 'weak' && level !== 'moderate' && level !== 'strong') return null
      return {
        domainId: typed.domainId,
        domainName: typeof typed.domainName === 'string' ? typed.domainName : typed.domainId,
        level,
      }
    })
    .filter((domain): domain is PlanDomainResult => domain !== null)
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

    const [latestDiagnostic, userRow] = await Promise.all([
      prisma.diagnosticTest.findFirst({
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
      }),
      prisma.user.findUnique({
        where: { id: session.user.id },
        select: { diagnosticGateWaivedAt: true },
      }),
    ])

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

    const storedRecommendations = Array.from(dedupedRecommendedMap.values()).sort(
      (a, b) => priorityValue(a.priority) - priorityValue(b.priority)
    )

    if (storedRecommendations.length === 0) {
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

    // Candidate universe: this cycle's stored recommendations PLUS replacement
    // topics for any of them the student already cleared in an earlier cycle.
    const domainResults = parseDomainResults(latestDiagnostic.results)
    // Must cover every slug selectPlanTopics could return, so a substituted
    // topic is looked up properly instead of tripping the missing-Topic valve.
    const candidateSlugs = planCandidateUniverse({
      recommended: storedRecommendations,
      domains: domainResults,
    })

    const topics = await prisma.topic.findMany({
      where: {
        slug: { in: candidateSlugs },
      },
      select: {
        id: true,
        slug: true,
        _count: { select: { flashcards: true } },
      },
    })

    const topicIdToSlug = new Map(topics.map((topic) => [topic.id, topic.slug]))
    const slugToTopicId = new Map(topics.map((topic) => [topic.slug, topic.id]))
    const flashcardCountBySlug = new Map(topics.map((topic) => [topic.slug, topic._count.flashcards]))

    const [progressRows, exitAttempts] = await Promise.all([
      prisma.topicProgress.findMany({
        where: {
          userId: session.user.id,
          topicId: { in: topics.map((topic) => topic.id) },
        },
        select: {
          topicId: true,
          masteryLevel: true,
          masteredParts: true,
          completedAt: true,
        },
      }),
      prisma.exitQuizAttempt.findMany({
        where: {
          userId: session.user.id,
          topicSlug: { in: candidateSlugs },
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

    const progressBySlug = new Map<string, (typeof progressRows)[number]>()
    progressRows.forEach((row) => {
      const slug = topicIdToSlug.get(row.topicId)
      if (!slug) return
      progressBySlug.set(slug, row)
    })

    const bestExitBySlug = new Map<string, { scorePercent: number; score: number; totalQuestions: number; completedAt: Date }>()
    // First time the topic was PASSED, for "was this already cleared before
    // this diagnostic?" — passing attempts are immutable, so this timestamp is
    // stable across requests (TopicProgress.completedAt is re-stamped on every
    // save and can only ever drift later, which errs toward keeping a topic in
    // the plan rather than swapping it out).
    const firstPassAtBySlug = new Map<string, Date>()
    const requiredScorePercent = 80
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
      if (scorePercent >= requiredScorePercent) {
        const firstPass = firstPassAtBySlug.get(attempt.topicSlug)
        if (!firstPass || attempt.completedAt.getTime() < firstPass.getTime()) {
          firstPassAtBySlug.set(attempt.topicSlug, attempt.completedAt)
        }
      }
    })

    // Entrance-quiz test-out (NOT plain lesson completion — see
    // isEntranceMastery): the one way to clear a topic without its exit quiz.
    const entranceMasteredSlug = (slug: string) => {
      const progress = progressBySlug.get(slug)
      if (!progress) return false
      return isEntranceMastery({
        topicSlug: slug,
        masteryLevel: progress.masteryLevel,
        masteredParts: progress.masteredParts,
      })
    }
    // Topics with no exit quiz mapped at all can never produce an attempt, so
    // finishing their lesson has to clear them or the retake gate deadlocks
    // (same exemption as the flashcard unlock rule).
    const quizlessLessonDone = (slug: string) =>
      !hasExitQuiz(slug) && (progressBySlug.get(slug)?.masteryLevel ?? 0) >= 1

    const diagnosticTakenAt = latestDiagnostic.createdAt.getTime()
    const clearedBeforeThisDiagnostic = (slug: string) => {
      const firstPass = firstPassAtBySlug.get(slug)
      if (firstPass && firstPass.getTime() <= diagnosticTakenAt) return true
      const completedAt = progressBySlug.get(slug)?.completedAt
      if (!completedAt || completedAt.getTime() > diagnosticTakenAt) return false
      return entranceMasteredSlug(slug) || quizlessLessonDone(slug)
    }

    // Swap out recommendations the student had already cleared going into this
    // diagnostic; backfill with real, uncleared work so the cycle can't be
    // satisfied on arrival.
    const recommendedTopics = selectPlanTopics({
      recommended: storedRecommendations,
      domains: domainResults,
      isStale: clearedBeforeThisDiagnostic,
      // Keep the cycle's plan the size the scorer chose (it caps at 5) — swap
      // pre-cleared slots for real work rather than padding a small plan out.
      limit: Math.min(5, storedRecommendations.length),
    }) as RecommendedTopic[]

    const recommendedWithStatus = recommendedTopics.map((topic) => {
      const masteryLevel = progressBySlug.get(topic.slug)?.masteryLevel ?? 0
      const bestExit = bestExitBySlug.get(topic.slug)
      // Historically "entranceSatisfied" meant masteryLevel >= 1, which any
      // finished lesson reaches — that was the hole that let a student clear
      // the gate with the exit quiz still unsubmitted.
      const entranceSatisfied = entranceMasteredSlug(topic.slug)
      const exitSatisfied = (bestExit?.scorePercent ?? 0) >= requiredScorePercent
      const lessonSatisfiedWithoutQuiz = quizlessLessonDone(topic.slug)
      const topicFound = slugToTopicId.has(topic.slug)

      // Safety valve: if a recommended slug no longer resolves to a Topic row
      // (subtopic-map drift, renamed slug, …), the student has NO page to study
      // and NO progress row to earn — the requirement could never be cleared
      // and the retake gate would deadlock forever. Treat it as satisfied and
      // log so the drift gets fixed.
      if (!topicFound) {
        console.warn(
          `[mcat plan-status] recommended topic slug "${topic.slug}" has no Topic row — ` +
          'treating its remediation requirement as satisfied so the retake gate cannot deadlock. ' +
          'Check src/data/mcat-practice/subtopic-map.ts against the Topic table.'
        )
      }
      const isSatisfied =
        entranceSatisfied || exitSatisfied || lessonSatisfiedWithoutQuiz || !topicFound

      // What actually exists for this topic, so the client can offer direct,
      // real actions instead of a bare topic link (most MCAT subtopic pages
      // have no written lesson — the interactive lesson / flashcards / exit
      // quiz are the study surfaces that exist).
      const hasLesson = hasInteractiveLesson(topic.slug)
      const topicHasExitQuiz = hasExitQuiz(topic.slug)

      return {
        ...topic,
        topicPath: `/topics/${topic.slug}`,
        topicFound,
        hasLesson,
        lessonPath: hasLesson ? `/topics/${topic.slug}/interactive` : null,
        flashcardCount: flashcardCountBySlug.get(topic.slug) ?? 0,
        flashcardsPath: `/flashcards/${topic.slug}`,
        hasExitQuiz: topicHasExitQuiz,
        exitQuizPath: topicHasExitQuiz ? `/topics/${topic.slug}/interactive?exitQuiz=1` : null,
        // The exit quiz is the requirement unless the student tested out of the
        // whole lesson on the entrance quiz. Finishing the lesson does NOT
        // clear it — clients should say so.
        exitQuizRequired: topicHasExitQuiz && !entranceSatisfied,
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

    // Teacher retake-gate override ("Allow retake now"), ONE-SHOT: the waiver
    // opens the gate only while User.diagnosticGateWaivedAt is NEWER than the
    // most recent diagnostic attempt. Taking the retake consumes it naturally —
    // the new attempt's createdAt is then newer than the waiver, so the gate
    // is governed by pending topics again with no cleanup needed.
    const gateWaived =
      userRow?.diagnosticGateWaivedAt != null &&
      userRow.diagnosticGateWaivedAt.getTime() > latestDiagnostic.createdAt.getTime()

    return NextResponse.json({
      hasDiagnostic: true,
      diagnosticId: latestDiagnostic.id,
      diagnosticCreatedAt: latestDiagnostic.createdAt,
      canRetakeDiagnostic: pendingTopics.length === 0 || gateWaived,
      gateWaived,
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
