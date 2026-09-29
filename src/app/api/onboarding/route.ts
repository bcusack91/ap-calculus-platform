import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { courseHubPaths } from '@/data/course-metadata'
import { ONBOARDING_DB_COURSE_ALIASES, onboardingDestination } from '@/lib/onboarding-destination'

/**
 * Marker for "this user has been through the wizard". LearningPath.topicOrder
 * is NULL on the row created at signup and only this route ever writes it, so
 * a non-null value (even '[]') means the user finished OR skipped onboarding.
 * No migration needed, and it follows the user across devices.
 */
const SKIPPED_TOPIC_ORDER = '[]'

// POST: Save onboarding selections and create a learning path.
// Body: { courseSlug, goalType } — or { skipped: true } for "Skip for now".
export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id

    const body = (await req.json().catch(() => ({}))) as {
      courseSlug?: unknown
      goalType?: unknown
      skipped?: unknown
    }

    // "Skip for now": remember it so the dashboard stops sending the user back
    // here (it used to loop /dashboard → /onboarding → /dashboard forever).
    // Never overwrites a path the user already chose.
    if (body.skipped === true) {
      const existing = await prisma.learningPath.findUnique({ where: { userId } })
      if (!existing) {
        await prisma.learningPath.create({ data: { userId, topicOrder: SKIPPED_TOPIC_ORDER } })
      } else if (existing.topicOrder == null) {
        await prisma.learningPath.update({ where: { userId }, data: { topicOrder: SKIPPED_TOPIC_ORDER } })
      }
      return NextResponse.json({ success: true, skipped: true, destination: '/dashboard' })
    }

    const courseSlug = typeof body.courseSlug === 'string' ? body.courseSlug : ''
    // goalType: 'just-browsing', 'catch-up', 'get-ahead', 'exam-prep'
    const goalType = typeof body.goalType === 'string' ? body.goalType : null

    if (!courseSlug) {
      return NextResponse.json({ error: 'Course selection required' }, { status: 400 })
    }

    // Find the course and its topics in order. A few catalog tracks (PSAT,
    // Precalculus) have no DB course row of their own; PSAT studies the SAT
    // course's topics, and a track with no row simply has no topic order.
    const dbSlug = ONBOARDING_DB_COURSE_ALIASES[courseSlug] ?? courseSlug
    const course = await prisma.course.findUnique({
      where: { slug: dbSlug },
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

    const knownTrack = course !== null || courseSlug in courseHubPaths
    if (!knownTrack) {
      return NextResponse.json({ error: 'Course not found' }, { status: 400 })
    }

    // Build ordered topic list
    const topicOrder = course
      ? course.categories.flatMap((cat) => cat.topics.map((t) => t.slug))
      : []

    // Create or update learning path
    await prisma.learningPath.upsert({
      where: { userId },
      update: {
        topicOrder: JSON.stringify(topicOrder),
        currentTopic: topicOrder[0] || null,
        startDate: new Date(),
      },
      create: {
        userId,
        topicOrder: JSON.stringify(topicOrder),
        currentTopic: topicOrder[0] || null,
      },
    })

    const firstTopic = topicOrder[0] || null
    return NextResponse.json({
      success: true,
      firstTopic,
      totalTopics: topicOrder.length,
      courseSlug,
      // Where the wizard should go next: the diagnostic for most goals, the
      // course hub for "just exploring" (see onboarding-destination.ts).
      destination: onboardingDestination({ courseSlug, goal: goalType, firstTopic }),
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

    const [topicProgressCount, activeClassMemberships, diagnosticCount] = await Promise.all([
      prisma.topicProgress.count({ where: { userId: session.user.id } }),
      prisma.classroomMember.count({ where: { userId: session.user.id, isActive: true } }),
      prisma.diagnosticTest.count({ where: { userId: session.user.id } }),
    ])

    return NextResponse.json({
      // A LearningPath ROW exists for every account (created at signup) — only a
      // path with a chosen course (currentTopic set) counts as onboarded. Prior
      // study activity also counts, so existing users are never forced back in.
      // A student in a class is onboarded by their teacher: the dashboard sends
      // anyone else to /onboarding, whose "Skip for now" merely links back to
      // the dashboard — a loop that hid the class's assigned diagnostic from
      // every brand-new student until they finished consumer onboarding.
      // A non-null topicOrder means the wizard was finished or skipped (see
      // SKIPPED_TOPIC_ORDER), and a student who has taken any diagnostic has
      // already started the study loop, so neither is sent back.
      hasCompletedOnboarding:
        !!learningPath?.currentTopic ||
        learningPath?.topicOrder != null ||
        topicProgressCount > 0 ||
        activeClassMemberships > 0 ||
        diagnosticCount > 0,
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
