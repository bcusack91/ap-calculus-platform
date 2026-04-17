import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const user = await prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const course = await prisma.course.findUnique({
      where: { slug: 'ap-african-american-studies' },
      include: {
        categories: {
          orderBy: { order: 'asc' },
          include: { topics: { where: { parentTopicId: null }, orderBy: { order: 'asc' }, select: { id: true, slug: true, title: true, order: true } } },
        },
      },
    })
    if (!course) return NextResponse.json({ error: 'AP African American Studies course not found' }, { status: 404 })

    const topicIds = course.categories.flatMap(c => c.topics.map(t => t.id))
    const progress = await prisma.topicProgress.findMany({ where: { userId: user.id, topicId: { in: topicIds } }, select: { topicId: true, status: true, masteryLevel: true } })
    const topicSlugs = course.categories.flatMap(c => c.topics.map(t => t.slug))
    const passedQuizzes = await prisma.exitQuizAttempt.findMany({ where: { userId: user.id, passed: true, topicSlug: { in: topicSlugs } }, select: { topicSlug: true }, distinct: ['topicSlug'] })
    const passedQuizSlugs = new Set(passedQuizzes.map(q => q.topicSlug))
    const progressMap = new Map(progress.map(p => [p.topicId, p]))

    const units = course.categories.map((cat, idx) => ({
      unitNumber: idx + 1,
      name: cat.name,
      slug: cat.slug,
      topics: cat.topics.map(t => {
        const tp = progressMap.get(t.id)
        const completedViaProgress = (tp?.status === 'COMPLETED' || tp?.status === 'MASTERED') && (tp?.masteryLevel ?? 0) >= 0.8
        const completedViaQuiz = passedQuizSlugs.has(t.slug)
        return { id: t.id, slug: t.slug, title: t.title, completed: completedViaProgress || completedViaQuiz, masteryLevel: tp?.masteryLevel ?? 0, status: tp?.status ?? 'NOT_STARTED' }
      }),
    }))

    const totalTopics = units.reduce((s, u) => s + u.topics.length, 0)
    const completedCount = units.reduce((s, u) => s + u.topics.filter(t => t.completed).length, 0)

    return NextResponse.json({ units, totalTopics, completedCount, hasAnyCompleted: completedCount > 0 })
  } catch (error) {
    console.error('Error fetching AP African American Studies topics:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
