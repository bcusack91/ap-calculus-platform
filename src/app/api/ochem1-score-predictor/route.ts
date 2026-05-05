import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { gatherSubjectData, mapToAPScore } from '@/lib/score-predictor-utils'

/**
 * AP-equivalent (1–5) score predictor for Organic Chemistry 1.
 * Uses the same blended quiz-performance / topic-mastery model as the AP courses.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { avgPct, stats, trend, confidence, masteryRate } = await gatherSubjectData(
      session.user.id,
      'organic',
      'organic-chemistry-1',
      'ochem-diagnostic',
    )

    const predictedScore = mapToAPScore(avgPct, masteryRate)
    trend.push({ date: new Date().toISOString(), score: predictedScore, source: 'prediction' })

    return NextResponse.json({
      prediction: { primaryScore: predictedScore, maxScore: 5, confidence },
      stats,
      trend,
    })
  } catch (error) {
    console.error('Organic Chemistry 1 score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
