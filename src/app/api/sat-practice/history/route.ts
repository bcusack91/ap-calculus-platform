import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const attempts = await prisma.satTestAttempt.findMany({
      where: { userId: session.user.id },
      orderBy: { completedAt: 'desc' },
      select: {
        id: true,
        testNumber: true,
        rwScore: true,
        mathScore: true,
        totalScore: true,
        rwCorrect: true,
        rwTotal: true,
        mathCorrect: true,
        mathTotal: true,
        timeSpent: true,
        weakAreas: true,
        strengths: true,
        completedAt: true,
      },
    })

    // Best scores
    const bestTotal = attempts.length > 0 ? Math.max(...attempts.map(a => a.totalScore)) : null
    const bestRW = attempts.length > 0 ? Math.max(...attempts.map(a => a.rwScore)) : null
    const bestMath = attempts.length > 0 ? Math.max(...attempts.map(a => a.mathScore)) : null

    return NextResponse.json({
      attempts,
      stats: {
        totalAttempts: attempts.length,
        bestTotal,
        bestRW,
        bestMath,
      },
    })
  } catch (error) {
    console.error('SAT practice history error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
