import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/topics — list all topics grouped by course for assignment creation
 */
export async function GET() {
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

  return NextResponse.json({ courses })
}
