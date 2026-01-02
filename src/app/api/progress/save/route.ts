import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { topicSlug, topicId, lessonPart, completedSections, masteryLevel, timeSpent } = await request.json()
    
    console.log('📊 [DB QUERY] Progress save:', {
      method: topicId ? 'CACHED_ID' : 'SLUG_LOOKUP',
      topicId: topicId || 'N/A',
      topicSlug: topicSlug || 'N/A'
    })

    if (!topicSlug && !topicId) {
      return NextResponse.json(
        { error: 'Topic slug or ID is required' },
        { status: 400 }
      )
    }

    let topic
    // Use topicId if provided (cached), otherwise lookup by slug
    if (topicId) {
      topic = { id: topicId } // Skip DB query if we have the ID
    } else {
      // Get topic ID from slug (fallback)
      topic = await prisma.topic.findUnique({
        where: { slug: topicSlug }
        })
    }

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic not found' },
        { status: 404 }
      )
    }

    // Calculate status based on progress
    let status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'MASTERED' = 'IN_PROGRESS'
    
    if (masteryLevel >= 0.9) {
      status = 'MASTERED'
    } else if (masteryLevel >= 0.8 || lessonPart === 4) {
      status = 'COMPLETED'
    } else if (lessonPart > 1 || (completedSections && completedSections.length > 0)) {
      status = 'IN_PROGRESS'
    } else {
      status = 'NOT_STARTED'
    }

    // Upsert topic progress
    const progress = await prisma.topicProgress.upsert({
      where: {
        userId_topicId: {
          userId: session.user.id,
          topicId: topic.id,
        }
      },
      update: {
        masteryLevel: masteryLevel || 0,
        status,
        lastAccessed: new Date(),
        timeSpent: timeSpent || 0,
        completedAt: status === 'COMPLETED' || status === 'MASTERED' ? new Date() : null,
      },
      create: {
        userId: session.user.id,
        topicId: topic.id,
        masteryLevel: masteryLevel || 0,
        status,
        timeSpent: timeSpent || 0,
        completedAt: status === 'COMPLETED' || status === 'MASTERED' ? new Date() : null,
      }
    })

    // Store lesson part and completed sections in a separate storage
    // (Could add a JSON field to TopicProgress or use localStorage as cache)
    
    return NextResponse.json({ 
      success: true,
      progress: {
        status: progress.status,
        masteryLevel: progress.masteryLevel,
      }
    })
  } catch (error) {
    console.error('Progress save error:', error)
    return NextResponse.json(
      { error: 'Failed to save progress' },
      { status: 500 }
    )
  }
}
