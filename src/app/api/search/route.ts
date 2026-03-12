import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

// Server-side search with Next.js cache (works in serverless environments)
const cachedSearch = unstable_cache(
  async (q: string) => {
    const terms = q.split(/\s+/).filter(Boolean).slice(0, 5)

    const topicWhere = terms.length > 1
      ? {
          AND: terms.map((term) => ({
            OR: [
              { title: { contains: term, mode: 'insensitive' as const } },
              { description: { contains: term, mode: 'insensitive' as const } },
              { slug: { contains: term, mode: 'insensitive' as const } },
            ],
          })),
        }
      : {
          OR: [
            { title: { contains: q, mode: 'insensitive' as const } },
            { description: { contains: q, mode: 'insensitive' as const } },
            { slug: { contains: q, mode: 'insensitive' as const } },
          ],
        }

    const [topics, courses, categories] = await Promise.all([
      prisma.topic.findMany({
        where: topicWhere,
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

    const scoreTopic = (t: { title: string; description: string | null }) => {
      const ql = q.toLowerCase()
      if (t.title.toLowerCase() === ql) return 100
      if (t.title.toLowerCase().startsWith(ql)) return 80
      if (t.title.toLowerCase().includes(ql)) return 60
      return 30
    }

    const results = [
      ...courses.map((c) => ({
        type: 'course' as const,
        title: c.name,
        description: c.description,
        href: `/courses/${c.slug}`,
        context: '',
        _score: 90,
      })),
      ...categories.map((c) => ({
        type: 'category' as const,
        title: c.name,
        description: '',
        href: `/categories/${c.slug}`,
        context: c.course.name,
        _score: 70,
      })),
      ...topics.map((t) => ({
        type: 'topic' as const,
        title: t.title,
        description: t.description,
        href: `/topics/${t.slug}`,
        context: `${t.category.course.name} › ${t.category.name}`,
        _score: scoreTopic(t),
      })),
    ]
      .sort((a, b) => b._score - a._score)
      .map(({ _score, ...rest }) => rest)

    return { results, query: q, total: results.length }
  },
  undefined,
  { revalidate: 60, tags: ['search'] }
)

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const q = searchParams.get('q')?.trim()

    if (!q || q.length < 2) {
      return NextResponse.json({ results: [], query: q })
    }

    const response = await cachedSearch(q.toLowerCase())
    return NextResponse.json(response)
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Search failed', results: [] },
      { status: 500 }
    )
  }
}
