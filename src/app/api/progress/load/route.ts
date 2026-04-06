import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const topicSlug = searchParams.get('topicSlug')

    if (!topicSlug) {
      return NextResponse.json(
        { error: 'Topic slug is required' },
        { status: 400 }
      )
    }
    
    // Get topic ID from slug
    const topic = await prisma.topic.findUnique({
      where: { slug: topicSlug },
      select: { id: true } // Only select ID for efficiency
    })

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic not found' },
        { status: 404 }
      )
    }

    // Get user's progress for this topic
    const progress = await prisma.topicProgress.findUnique({
      where: {
        userId_topicId: {
          userId: session.user.id,
          topicId: topic.id,
        }
      }
    })

    if (!progress) {
      return NextResponse.json({
        exists: false,
        topicId: topic.id, // Return topicId for caching
        progress: null
      })
    }

    return NextResponse.json({
      exists: true,
      topicId: topic.id, // Return topicId for caching
      progress: {
        status: progress.status,
        masteryLevel: progress.masteryLevel,
        timeSpent: progress.timeSpent,
        lastAccessed: progress.lastAccessed,
        completedAt: progress.completedAt,
        variant: progress.variant ?? 1,
        failedExitParts: progress.failedExitParts ?? null,
      }
    })
  } catch (error) {
    console.error('Progress load error:', error)
    return NextResponse.json(
      { error: 'Failed to load progress' },
      { status: 500 }
    )
  }
}
