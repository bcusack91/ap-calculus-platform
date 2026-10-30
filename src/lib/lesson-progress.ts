import type { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { maybeUnlockFlashcards } from '@/lib/flashcard-unlock'
import { invalidateCache, dashboardCacheKey } from '@/lib/redis'
import { touchDailyStreak } from '@/lib/streak'
import { recordAssignmentStarted } from '@/lib/assignment-autocomplete'

/**
 * Lesson progress shared by every way of learning a topic: the interactive
 * text lesson (/api/progress/save) and the video lesson
 * (/api/video-lessons/[id]/progress). Status follows mastery (>= 0.9
 * MASTERED, >= 0.6 COMPLETED) and never downgrades; the exit quiz alone
 * awards credit (src/app/api/exit-quiz/submit).
 */

export type LessonStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'MASTERED'

const STATUS_RANK: Record<LessonStatus, number> = { NOT_STARTED: 0, IN_PROGRESS: 1, COMPLETED: 2, MASTERED: 3 }

/** The status a save asks for, before the never-downgrade rule. */
export function statusForMastery(masteryLevel: number, started: boolean): LessonStatus {
  if (masteryLevel >= 0.9) return 'MASTERED'
  if (masteryLevel >= 0.6) return 'COMPLETED'
  return started ? 'IN_PROGRESS' : 'NOT_STARTED'
}

/** Never downgrade: the higher of the stored and requested status. */
export function resolveStatus(existing: LessonStatus | null | undefined, requested: LessonStatus): LessonStatus {
  return existing && STATUS_RANK[existing] > STATUS_RANK[requested] ? existing : requested
}

export type ApplyLessonProgressInput = {
  userId: string
  topic: { id: string; slug: string }
  masteryLevel: number
  status: LessonStatus
  /** Active seconds since the last save; added to the cumulative total. */
  timeSpent?: number
  /** A part (or the whole video lesson) just finished: run the flashcard unlock. */
  isPartCompletion?: boolean
  variant?: number
  failedExitParts?: Prisma.InputJsonValue
  masteredParts?: Prisma.InputJsonValue
}

export async function applyLessonProgress(input: ApplyLessonProgressInput) {
  const { userId, topic, masteryLevel, status, timeSpent, isPartCompletion, variant, failedExitParts, masteredParts } = input
  const topicDbId = topic.id

  // All progress writes commit or roll back together. The never-downgrade
  // resolution happens INSIDE the transaction behind a row lock, so two
  // concurrent saves can't both read stale state and clobber each other.
  const progress = await prisma.$transaction(async (tx) => {
    // Lock the existing row (if any); with no row, the unique (userId,
    // topicId) constraint makes racing upserts safe at the DB level.
    await tx.$queryRaw`SELECT id FROM "TopicProgress" WHERE "userId" = ${userId} AND "topicId" = ${topicDbId} FOR UPDATE`
    const existing = await tx.topicProgress.findUnique({
      where: { userId_topicId: { userId, topicId: topicDbId } },
      select: { masteryLevel: true, status: true },
    })
    const effectiveMastery = existing ? Math.max(masteryLevel || 0, existing.masteryLevel || 0) : masteryLevel || 0
    const effectiveStatus = resolveStatus(existing?.status as LessonStatus | undefined, status)
    const done = effectiveStatus === 'COMPLETED' || effectiveStatus === 'MASTERED'

    // timeSpent is a CUMULATIVE total (the dashboard sums it across topics):
    // increment it rather than overwriting it with this session's delta.
    const row = await tx.topicProgress.upsert({
      where: { userId_topicId: { userId, topicId: topicDbId } },
      update: {
        masteryLevel: effectiveMastery,
        status: effectiveStatus,
        lastAccessed: new Date(),
        timeSpent: { increment: timeSpent || 0 },
        completedAt: done ? new Date() : null,
        ...(variant !== undefined && { variant }),
        ...(failedExitParts !== undefined && { failedExitParts }),
        ...(masteredParts !== undefined && { masteredParts }),
      },
      create: {
        userId,
        topicId: topicDbId,
        masteryLevel: effectiveMastery,
        status: effectiveStatus,
        timeSpent: timeSpent || 0,
        completedAt: done ? new Date() : null,
        ...(variant !== undefined && { variant }),
        ...(failedExitParts !== undefined && { failedExitParts }),
        ...(masteredParts !== undefined && { masteredParts }),
      },
    })
    // Saving progress is study activity — advance the daily streak.
    await touchDailyStreak(tx, userId)
    return row
  })

  // Flashcard unlock rule: lesson done + exit quiz submitted (see
  // flashcard-unlock.ts). Finishing the lesson may complete the pair, so
  // check on completions that finish the topic, and on entrance-mastery
  // saves (>= 0.9: an aced entrance quiz waives the exit-quiz requirement).
  // Best-effort.
  let unlock: Awaited<ReturnType<typeof maybeUnlockFlashcards>> | null = null
  const masterySave = (masteryLevel ?? 0) >= 0.9
  if ((isPartCompletion || masterySave) && (progress.status === 'COMPLETED' || progress.status === 'MASTERED')) {
    try {
      unlock = await maybeUnlockFlashcards(userId, topic.slug)
    } catch (unlockError) {
      console.error('lesson progress flashcard unlock failed (non-fatal):', unlockError)
    }
  }

  // Progress changed — drop the cached dashboard so the next load reflects it.
  await invalidateCache(dashboardCacheKey(userId))

  // Mark matching classroom assignments IN_PROGRESS (never COMPLETED: the
  // client-reported mastery is untrusted; completion + score come from the
  // exit-quiz submit). Best-effort.
  await recordAssignmentStarted({ userId, topicSlug: topic.slug, types: ['INTERACTIVE_LESSON', 'QUIZ'] })

  return { progress, unlock }
}

/** The response fragment both routes return when new flashcards unlock. */
export function flashcardUnlockPayload(unlock: Awaited<ReturnType<typeof maybeUnlockFlashcards>> | null) {
  return unlock?.unlocked && unlock.newCards > 0
    ? {
        created: true,
        newCards: unlock.newCards,
        totalActive: unlock.totalActive,
        totalPossible: unlock.totalCards,
        topicTitle: unlock.topicTitle,
      }
    : undefined
}
