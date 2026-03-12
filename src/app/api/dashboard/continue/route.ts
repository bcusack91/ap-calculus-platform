import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

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

    const lastPart = (recentProgress as Record<string, unknown>).lastPartCompleted as number ?? 1
    const totalParts = 7 // standard lesson part count

    return NextResponse.json({
      topic: {
        topicSlug: recentProgress.topic.slug,
        topicTitle: recentProgress.topic.title,
        courseName: recentProgress.topic.category?.course?.name ?? 'Course',
        lastPart: Math.min(lastPart + 1, totalParts),
        totalParts,
        masteryLevel: recentProgress.masteryLevel ?? 0,
        lastAccessed: recentProgress.lastAccessed?.toISOString() ?? new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('[continue] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
