import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { courseTopicWhere } from '@/lib/course-includes'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const course = searchParams.get('course')

    const where = course ? courseTopicWhere(course) : {}

    const count = await prisma.topic.count({ where })
    if (count === 0) {
      return NextResponse.json({ error: 'No topics found' }, { status: 404 })
    }

    const skip = Math.floor(Math.random() * count)
    const topic = await prisma.topic.findFirst({
      where,
      skip,
      select: { slug: true, title: true },
    })

    if (!topic) {
      return NextResponse.json({ error: 'No topic found' }, { status: 404 })
    }

    return NextResponse.json({ slug: topic.slug, title: topic.title })
  } catch (error) {
    console.error('[random-topic] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
