import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const revalidate = 3600

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      select: {
        slug: true,
        name: true,
        icon: true,
      },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(courses)
  } catch (error) {
    console.error('[GET /api/courses]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
