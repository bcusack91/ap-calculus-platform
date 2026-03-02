import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/exit-quiz/status?topicSlug=xxx
 * Check the user's exit quiz status for a topic:
 * - Number of previous attempts
 * - Last score
 * - Whether they must redo the unit
 * - Whether they already passed
 */
export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const topicSlug = request.nextUrl.searchParams.get('topicSlug')
    if (!topicSlug) {
      return NextResponse.json({ error: 'topicSlug required' }, { status: 400 })
    }

    const attempts = await prisma.exitQuizAttempt.findMany({
      where: {
        userId: session.user.id,
        topicSlug
      },
      orderBy: { completedAt: 'desc' }
    })

    const hasPassed = attempts.some(a => a.passed)
    const lastAttempt = attempts[0] || null
    const mustRedoUnit = lastAttempt?.mustRedoUnit ?? false

    return NextResponse.json({
      totalAttempts: attempts.length,
      hasPassed,
      lastScore: lastAttempt?.score ?? null,
      lastTotalQuestions: lastAttempt?.totalQuestions ?? null,
      mustRedoUnit: !hasPassed && mustRedoUnit,
      attempts: attempts.map(a => ({
        id: a.id,
        score: a.score,
        totalQuestions: a.totalQuestions,
        passed: a.passed,
        mustRedoUnit: a.mustRedoUnit,
        completedAt: a.completedAt,
        timeSpent: a.timeSpent
      }))
    })

  } catch (error) {
    console.error('Error checking exit quiz status:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
