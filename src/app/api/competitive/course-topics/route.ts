import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/competitive/course-topics?course=<slug>
 * Generic endpoint returning the current user's completed topics for a course,
 * grouped by category. Used by the Rematch picker (and any future generic flows).
 */
export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const courseSlug = request.nextUrl.searchParams.get('course')
    if (!courseSlug) {
      return NextResponse.json({ error: 'course query param is required' }, { status: 400 })
    }

    const course = await prisma.course.findUnique({
      where: { slug: courseSlug },
      select: {
        slug: true,
        name: true,
        categories: {
          orderBy: { order: 'asc' },
          select: {
            id: true,
            name: true,
            slug: true,
            order: true,
            topics: {
              orderBy: { order: 'asc' },
              select: { id: true, slug: true, title: true },
            },
          },
        },
      },
    })

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 })
    }

    const topicIds = course.categories.flatMap(c => c.topics.map(t => t.id))
    const progress = await prisma.topicProgress.findMany({
      where: { userId: session.user.id, topicId: { in: topicIds } },
      select: { topicId: true, masteryLevel: true, status: true, completedAt: true },
    })
    const progressMap = new Map(progress.map(p => [p.topicId, p]))

    const units = course.categories.map(cat => ({
      name: cat.name,
      slug: cat.slug,
      topics: cat.topics.map(t => {
        const p = progressMap.get(t.id)
        const completed = !!p && (p.status === 'COMPLETED' || p.completedAt !== null || (p.masteryLevel ?? 0) >= 0.8)
        return {
          slug: t.slug,
          title: t.title,
          completed,
          masteryLevel: p?.masteryLevel ?? 0,
        }
      }),
    }))

    return NextResponse.json({
      courseSlug: course.slug,
      courseName: course.name,
      units,
    }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (error) {
    console.error('[GET /api/competitive/course-topics]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
