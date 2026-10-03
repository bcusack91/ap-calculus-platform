import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { buildActPlanStatus } from '@/lib/act-plan'

/** The student's ACT study cycle (see buildActPlanStatus). */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.json(await buildActPlanStatus(session.user.id))
  } catch (error) {
    console.error('ACT plan status error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
