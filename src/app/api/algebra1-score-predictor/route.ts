import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { gatherSubjectData } from '@/lib/score-predictor-utils'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { avgPct, stats, trend, confidence } = await gatherSubjectData(
      session.user.id,
      'algebra1',
      'algebra-1',
      'algebra1-diagnostic',
    )

    const predictedScore = Math.max(0, Math.min(100, Math.round(avgPct * 100)))
    trend.push({ date: new Date().toISOString(), score: predictedScore, source: 'prediction' })

    return NextResponse.json({
      prediction: { primaryScore: predictedScore, maxScore: 100, confidence },
      stats,
      trend,
    })
  } catch (error) {
    console.error('Algebra 1 score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
