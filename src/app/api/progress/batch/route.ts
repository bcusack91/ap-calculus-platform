import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/progress/batch?slugs=slug1,slug2,slug3
 * Returns completion status for multiple topic slugs at once.
 */
export async function GET(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const slugsParam = searchParams.get('slugs')

    if (!slugsParam) {
      return NextResponse.json({ error: 'slugs parameter is required' }, { status: 400 })
    }

    const slugs = slugsParam.split(',').map(s => s.trim()).filter(Boolean).slice(0, 50)

    if (slugs.length === 0) {
      return NextResponse.json({ progress: {} })
    }

    // Find topics by slug
    const topics = await prisma.topic.findMany({
      where: { slug: { in: slugs } },
      select: { id: true, slug: true },
    })

    if (topics.length === 0) {
      return NextResponse.json({ progress: {} })
    }

    const topicIdToSlug = new Map(topics.map(t => [t.id, t.slug]))

    // Fetch progress for all matched topics
    const progressRecords = await prisma.topicProgress.findMany({
      where: {
        userId: session.user.id,
        topicId: { in: topics.map(t => t.id) },
      },
      select: {
        topicId: true,
        status: true,
        masteryLevel: true,
        completedAt: true,
      },
    })

    // Build slug → status map
    const progress: Record<string, { status: string; masteryLevel: number; completedAt: string | null }> = {}
    for (const p of progressRecords) {
      const slug = topicIdToSlug.get(p.topicId)
      if (slug) {
        progress[slug] = {
          status: p.status,
          masteryLevel: p.masteryLevel,
          completedAt: p.completedAt?.toISOString() ?? null,
        }
      }
    }

    return NextResponse.json({ progress })
  } catch (error) {
    console.error('Error fetching batch progress:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
