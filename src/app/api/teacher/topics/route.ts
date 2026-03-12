import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/topics — list all topics grouped by course for assignment creation
 */
export async function GET() {
  try {
    const result = await requireTeacher()
    if ('error' in result && result.error) return result.error

    const courses = await prisma.course.findMany({
      include: {
        categories: {
          include: {
            topics: {
              select: { slug: true, title: true, order: true },
              orderBy: { order: 'asc' },
            },
          },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { order: 'asc' },
    })

    // Transform to the shape the client expects: { courseTitle, topics[] }
    const grouped = courses.map((c) => ({
      courseTitle: c.name,
      topics: c.categories.flatMap((cat) =>
        cat.topics.map((t) => ({ slug: t.slug, title: t.title, category: cat.name }))
      ),
    }))

    return NextResponse.json(grouped)
  } catch (error) {
    console.error('[GET /api/teacher/topics]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
