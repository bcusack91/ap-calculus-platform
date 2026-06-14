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
        // masteryLevel is stored on a 0-1 scale (mastered = 1.0), so weak = below 0.5.
        masteryLevel: { lt: 0.5 },
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

    // Get quiz scores for these topics. QuizAttempt is a dead table (never written);
    // ExitQuizAttempt is the only real quiz activity and is keyed by topicSlug.
    const topicSlugs = weakProgress.map(p => p.topic.slug)
    const quizAttempts = await prisma.exitQuizAttempt.findMany({
      where: {
        userId: session.user.id,
        topicSlug: { in: topicSlugs },
      },
      select: { score: true, totalQuestions: true, topicSlug: true },
    })

    const quizAvgMap: Record<string, number> = {}
    for (const p of weakProgress) {
      const attempts = quizAttempts.filter(a => a.topicSlug === p.topic.slug)
      if (attempts.length > 0) {
        quizAvgMap[p.topic.slug] = Math.round(
          attempts.reduce((s, a) => s + (a.totalQuestions > 0 ? (a.score / a.totalQuestions) * 100 : 0), 0) / attempts.length
        )
      } else {
        quizAvgMap[p.topic.slug] = 0
      }
    }

    const topics = weakProgress.map(p => {
      // masteryLevel may be stored as either a 0-1 fraction or a 0-100 percent
      // depending on the data source. Normalize to a rounded 0-100 integer.
      const rawMastery = p.masteryLevel ?? 0
      const masteryPct = rawMastery <= 1 ? rawMastery * 100 : rawMastery
      return {
        slug: p.topic.slug,
        title: p.topic.title,
        courseName: p.topic.category?.course?.name ?? 'Unknown',
        masteryLevel: Math.round(masteryPct),
        quizAvgScore: quizAvgMap[p.topic.slug] ?? 0,
      }
    })

    return NextResponse.json({ topics })
  } catch (error) {
    console.error('[weak-topics] Error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
