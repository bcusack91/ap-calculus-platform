import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { buildSatPlan } from '@/lib/sat-plan'
import { unitTestStatusFor } from '@/lib/mcat-unit-test-server'

/**
 * The student's SAT study plan for their latest diagnostic cycle, routed to
 * their track (Core Skills / standard / 700-800). The logic lives in
 * src/lib/sat-plan.ts so the dashboard's generic plan shows the same topics.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const plan = await buildSatPlan(session.user.id)
    // The cycle's recommended last step (does not lock the diagnostic).
    const unitTest = plan.hasDiagnostic && plan.recommendedTopics.length > 0
      ? await unitTestStatusFor(session.user.id, plan.diagnosticId, plan.pendingTopics.length === 0, 'sat')
      : null
    return NextResponse.json({ ...plan, unitTest })
  } catch (error) {
    console.error('SAT plan status error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
