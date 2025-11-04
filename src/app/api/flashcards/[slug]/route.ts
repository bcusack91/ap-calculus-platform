import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    
    const topic = await prisma.topic.findUnique({
      where: { slug },
      select: {
        id: true,
        title: true,
        slug: true,
        category: {
          select: {
            name: true,
            slug: true,
            course: {
              select: {
                name: true,
                slug: true,
              }
            }
          }
        },
        flashcards: {
          select: {
            id: true,
            front: true,
            back: true,
            hint: true,
          },
          orderBy: {
            createdAt: 'asc'
          }
        },
      },
    })

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(topic)
  } catch (error) {
    console.error('Error fetching flashcards:', error)
    return NextResponse.json(
      { error: 'Failed to fetch flashcards' },
      { status: 500 }
    )
  }
}
