import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getInteractiveTopicConfig } from '@/data/interactive-lessons/registry'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const recentProgress = await prisma.topicProgress.findFirst({
      where: {
        userId: session.user.id,
        status: 'IN_PROGRESS',
      },
      orderBy: { lastAccessed: 'desc' },
      include: {
        topic: {
          select: {
            title: true,
            slug: true,
            category: {
              select: {
                name: true,
                course: { select: { name: true } },
              },
            },
          },
        },
      },
    })

    if (!recentProgress) {
      return NextResponse.json({ topic: null })
    }

    // Get actual totalParts from the lesson registry
    const config = getInteractiveTopicConfig(recentProgress.topic.slug)
    const totalParts = config?.parts?.length ?? 7

    // Derive lastPart from mastery since we don't store it in the database
    const mastery = recentProgress.masteryLevel ?? 0
    const partWeight = 1.0 / Math.max(totalParts, 1)
    const lastPart = Math.min(totalParts, Math.max(1, Math.floor(mastery / partWeight) + 1))

    return NextResponse.json({
      topic: {
        topicSlug: recentProgress.topic.slug,
        topicTitle: recentProgress.topic.title,
        courseName: recentProgress.topic.category?.course?.name ?? 'Course',
        lastPart: Math.min(lastPart, totalParts),
        totalParts,
        masteryLevel: mastery,
        lastAccessed: recentProgress.lastAccessed?.toISOString() ?? new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('[continue] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
