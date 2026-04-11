import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// POST: Save onboarding selections and create a learning path
export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { courseSlug } = await req.json()
    // goalType: 'just-browsing', 'catch-up', 'get-ahead', 'exam-prep'

    if (!courseSlug) {
      return NextResponse.json({ error: 'Course selection required' }, { status: 400 })
    }

    // Find the course and its topics in order
    const course = await prisma.course.findUnique({
      where: { slug: courseSlug },
      include: {
        categories: {
          orderBy: { order: 'asc' },
          include: {
            topics: {
              orderBy: { order: 'asc' },
              select: { slug: true, title: true },
            },
          },
        },
      },
    })

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 400 })
    }

    // Build ordered topic list
    const topicOrder = course.categories.flatMap((cat) =>
      cat.topics.map((t) => t.slug)
    )

    // Create or update learning path
    await prisma.learningPath.upsert({
      where: { userId: session.user.id },
      update: {
        topicOrder: JSON.stringify(topicOrder),
        currentTopic: topicOrder[0] || null,
        startDate: new Date(),
      },
      create: {
        userId: session.user.id,
        topicOrder: JSON.stringify(topicOrder),
        currentTopic: topicOrder[0] || null,
      },
    })

    return NextResponse.json({
      success: true,
      firstTopic: topicOrder[0] || null,
      totalTopics: topicOrder.length,
      courseSlug,
    })
  } catch (error) {
    console.error('Onboarding error:', error)
    return NextResponse.json({ error: 'Failed to save onboarding' }, { status: 500 })
  }
}

// GET: Check if user has completed onboarding
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const learningPath = await prisma.learningPath.findUnique({
      where: { userId: session.user.id },
    })

    const topicProgressCount = await prisma.topicProgress.count({
      where: { userId: session.user.id },
    })

    return NextResponse.json({
      hasCompletedOnboarding: !!learningPath || topicProgressCount > 0,
      learningPath: learningPath
        ? {
            currentTopic: learningPath.currentTopic,
            topicCount: learningPath.topicOrder
              ? JSON.parse(learningPath.topicOrder).length
              : 0,
          }
        : null,
    })
  } catch (error) {
    console.error('Onboarding check error:', error)
    return NextResponse.json({ error: 'Failed to check onboarding' }, { status: 500 })
  }
}
