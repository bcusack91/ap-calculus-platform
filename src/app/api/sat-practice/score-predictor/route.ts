import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { unstable_cache } from 'next/cache'
import { computeSatPrediction } from '@/lib/sat-prediction-server'

/**
 * Score Predictor API
 *
 * The student's projected SAT score with trend data. The computation lives in
 * src/lib/sat-prediction-server.ts (shared with the Bluebook companion, which
 * snapshots it next to real College Board scores); this route caches it for
 * five minutes per student.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.id

    const getData = unstable_cache(
      () => computeSatPrediction(userId),
      [`sat-score-predictor-${userId}`],
      { revalidate: 300 }
    )

    return NextResponse.json(await getData())
  } catch (error) {
    console.error('Score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
