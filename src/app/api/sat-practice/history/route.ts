import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { PSAT_ONLY_ATTEMPTS, SAT_ONLY_ATTEMPTS } from '@/lib/sat-attempt-format'

/**
 * GET /api/sat-practice/history — the student's SAT practice tests, or with
 * `?exam=psat` their adaptive PSAT/NMSQT practice tests. The two never mix:
 * they share SatTestAttempt but score on different scales.
 */
export async function GET(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const psat = new URL(req.url).searchParams.get('exam') === 'psat'
    const attempts = await prisma.satTestAttempt.findMany({
      where: { userId: session.user.id, ...(psat ? PSAT_ONLY_ATTEMPTS : SAT_ONLY_ATTEMPTS) },
      orderBy: { completedAt: 'desc' },
      select: {
        id: true,
        testNumber: true,
        rwScore: true,
        mathScore: true,
        totalScore: true,
        rwCorrect: true,
        rwTotal: true,
        rwTier: true,
        mathTier: true,
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
