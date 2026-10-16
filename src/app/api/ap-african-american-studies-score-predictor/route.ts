import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { apPredictorResponse } from '@/lib/score-predictor-utils'

// Course, diagnostic prefix and practice exam: AP_SCORE_PREDICTORS['ap-african-american-studies'].
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    return NextResponse.json(await apPredictorResponse(session.user.id, 'ap-african-american-studies'))
  } catch (error) {
    console.error('AP African American Studies score predictor error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
