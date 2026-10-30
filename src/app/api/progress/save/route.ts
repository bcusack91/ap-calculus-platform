import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { progressSaveSchema, parseBody } from '@/lib/validations'
import { applyLessonProgress, flashcardUnlockPayload, statusForMastery } from '@/lib/lesson-progress'

export async function POST(request: Request) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const parsed = parseBody(progressSaveSchema, body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error },
        { status: 400 }
      )
    }
    const { topicSlug, topicId, lessonPart, completedSections, masteryLevel, timeSpent, isPartCompletion, variant, failedExitParts, masteredParts } = parsed.data

    if (!topicSlug && !topicId) {
      return NextResponse.json(
        { error: 'Topic slug or ID is required' },
        { status: 400 }
      )
    }

    let topic
    // Always verify the topic exists in the database, even if topicId is provided.
    // Trusting a client-supplied ID without verification could allow saving
    // progress against non-existent or unauthorized topics.
    if (topicId) {
      topic = await prisma.topic.findUnique({
        where: { id: topicId },
        select: { id: true, slug: true },
      })
    } else {
      // Get topic ID from slug (fallback)
      topic = await prisma.topic.findUnique({
        where: { slug: topicSlug },
        select: { id: true, slug: true },
      })
    }

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic not found' },
        { status: 404 }
      )
    }

    const started = (lessonPart !== undefined && lessonPart > 1) || Boolean(completedSections && completedSections.length > 0)
    const { progress, unlock } = await applyLessonProgress({
      userId: session.user.id,
      topic,
      masteryLevel: masteryLevel || 0,
      status: statusForMastery(masteryLevel || 0, started),
      timeSpent,
      isPartCompletion,
      variant,
      failedExitParts,
      masteredParts,
    })

    return NextResponse.json({
      success: true,
      progress: {
        status: progress.status,
        masteryLevel: progress.masteryLevel,
      },
      flashcards: flashcardUnlockPayload(unlock),
    })
  } catch (error) {
    console.error('Progress save error:', error)
    return NextResponse.json(
      { error: 'Failed to save progress' },
      { status: 500 }
    )
  }
}
