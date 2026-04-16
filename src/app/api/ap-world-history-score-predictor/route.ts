import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { gatherSubjectData, mapToAPScore } from '@/lib/score-predictor-utils'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { avgPct, stats, trend, confidence, masteryRate } = await gatherSubjectData(
      session.user.id, 'wh', 'ap-world-history', 'ap-world-history-diagnostic',
    )

    const predictedScore = mapToAPScore(avgPct, masteryRate)
    trend.push({ date: new Date().toISOString(), score: predictedScore, source: 'prediction' })

    return NextResponse.json({
      prediction: { primaryScore: predictedScore, maxScore: 5, confidence },
      stats,
      trend,
    })
  } catch (error) {
    console.error('AP World History score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
