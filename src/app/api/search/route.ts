import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const q = searchParams.get('q')?.trim()

    if (!q || q.length < 2) {
      return NextResponse.json({ results: [], query: q })
    }

    // Search topics, courses, and categories in parallel
    const [topics, courses, categories] = await Promise.all([
      prisma.topic.findMany({
        where: {
          OR: [
            { title: { contains: q, mode: 'insensitive' } },
            { description: { contains: q, mode: 'insensitive' } },
          ],
        },
        select: {
          slug: true,
          title: true,
          description: true,
          category: {
            select: {
              name: true,
              course: { select: { name: true, slug: true } },
            },
          },
        },
        take: 20,
      }),
      prisma.course.findMany({
        where: {
          OR: [
            { name: { contains: q, mode: 'insensitive' } },
            { description: { contains: q, mode: 'insensitive' } },
          ],
        },
        select: {
          slug: true,
          name: true,
          description: true,
        },
        take: 5,
      }),
      prisma.category.findMany({
        where: {
          OR: [
            { name: { contains: q, mode: 'insensitive' } },
          ],
        },
        select: {
          slug: true,
          name: true,
          course: { select: { name: true } },
        },
        take: 5,
      }),
    ])

    const results = [
      ...courses.map((c) => ({
        type: 'course' as const,
        title: c.name,
        description: c.description,
        href: `/courses/${c.slug}`,
        context: '',
      })),
      ...categories.map((c) => ({
        type: 'category' as const,
        title: c.name,
        description: '',
        href: `/categories/${c.slug}`,
        context: c.course.name,
      })),
      ...topics.map((t) => ({
        type: 'topic' as const,
        title: t.title,
        description: t.description,
        href: `/topics/${t.slug}`,
        context: `${t.category.course.name} › ${t.category.name}`,
      })),
    ]

    return NextResponse.json({ results, query: q })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Search failed', results: [] },
      { status: 500 }
    )
  }
}
