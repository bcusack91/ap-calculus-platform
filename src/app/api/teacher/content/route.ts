import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/content — Returns all courses, categories, and topics
 * for the teacher content library (browsing available content for assignments).
 *
 * TEACHER/ADMIN only, like the rest of /api/teacher/*. Gating reads the session
 * cookie, so the route is dynamic (no ISR caching).
 */
export async function GET() {
  try {
    const gate = await requireTeacher()
    if ('error' in gate && gate.error) return gate.error

    const courses = await prisma.course.findMany({
      select: {
        slug: true,
        name: true,
        icon: true,
        categories: {
          select: {
            name: true,
            slug: true,
            topics: {
              select: {
                slug: true,
                title: true,
                description: true,
              },
              orderBy: { order: 'asc' },
            },
          },
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json({ courses })
  } catch (error) {
    console.error('[GET /api/teacher/content]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
