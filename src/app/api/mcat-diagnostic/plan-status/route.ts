import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { buildMcatPlanStatus } from '@/lib/mcat-plan'

/** The student's MCAT cycle: plan topics, unit test, and the retake gate (see buildMcatPlanStatus). */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.json(await buildMcatPlanStatus(session.user.id))
  } catch (error) {
    console.error('MCAT plan status error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
