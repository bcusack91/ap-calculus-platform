import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Find topics with low mastery that user has started
    const weakProgress = await prisma.topicProgress.findMany({
      where: {
        userId: session.user.id,
        status: { in: ['IN_PROGRESS', 'COMPLETED'] },
        masteryLevel: { lt: 50 },
      },
      orderBy: { masteryLevel: 'asc' },
      take: 10,
      select: {
        topicId: true,
        masteryLevel: true,
        topic: {
          select: {
            title: true,
            slug: true,
            category: {
              select: {
                course: { select: { name: true } },
              },
            },
          },
        },
      },
    })

    // Get quiz scores for these topics via Quiz -> QuizAttempt
    const topicIds = weakProgress.map(p => p.topicId)
    const quizAttempts = await prisma.quizAttempt.findMany({
      where: {
        userId: session.user.id,
        quiz: { topicId: { in: topicIds } },
      },
      select: { score: true, maxScore: true, quiz: { select: { topicId: true } } },
    })

    const quizAvgMap: Record<string, number> = {}
    for (const p of weakProgress) {
      const attempts = quizAttempts.filter(a => a.quiz.topicId === p.topicId)
      if (attempts.length > 0) {
        quizAvgMap[p.topic.slug] = Math.round(
          attempts.reduce((s, a) => s + (a.maxScore > 0 ? (a.score / a.maxScore) * 100 : 0), 0) / attempts.length
        )
      } else {
        quizAvgMap[p.topic.slug] = 0
      }
    }

    const topics = weakProgress.map(p => ({
      slug: p.topic.slug,
      title: p.topic.title,
      courseName: p.topic.category?.course?.name ?? 'Unknown',
      masteryLevel: p.masteryLevel ?? 0,
      quizAvgScore: quizAvgMap[p.topic.slug] ?? 0,
    }))

    return NextResponse.json({ topics })
  } catch (error) {
    console.error('[weak-topics] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
