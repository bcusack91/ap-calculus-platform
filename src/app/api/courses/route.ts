import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const revalidate = 3600

export async function GET() {
  const courses = await prisma.course.findMany({
    select: {
      slug: true,
      name: true,
      icon: true,
    },
    orderBy: { order: 'asc' },
  })

  return NextResponse.json(courses)
}
