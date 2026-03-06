import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const attempts = await prisma.mcatTestAttempt.findMany({
      where: { userId: session.user.id },
      orderBy: { completedAt: 'desc' },
      select: {
        id: true,
        sectionId: true,
        sectionName: true,
        score: true,
        maxScore: true,
        percentage: true,
        correct: true,
        total: true,
        timeSpent: true,
        completedAt: true,
      },
    })

    // Compute stats
    const bestPercentage =
      attempts.length > 0 ? Math.max(...attempts.map((a: { percentage: number }) => a.percentage)) : null

    // Section breakdown
    const sectionBreakdown: Record<string, { attempts: number; best: number }> = {}
    for (const a of attempts) {
      if (!sectionBreakdown[a.sectionId]) {
        sectionBreakdown[a.sectionId] = { attempts: 0, best: 0 }
      }
      sectionBreakdown[a.sectionId].attempts += 1
      sectionBreakdown[a.sectionId].best = Math.max(
        sectionBreakdown[a.sectionId].best,
        a.percentage,
      )
    }

    return NextResponse.json({
      attempts,
      stats: {
        totalAttempts: attempts.length,
        bestPercentage,
        sectionBreakdown,
      },
    })
  } catch (error) {
    console.error('MCAT practice history error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
