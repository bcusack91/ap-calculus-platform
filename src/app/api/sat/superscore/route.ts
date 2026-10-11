import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { loadSatSuperscore } from '@/lib/superscore-server'

export const dynamic = 'force-dynamic'

/**
 * GET /api/sat/superscore → { superscore } — the signed-in student's best R&W
 * + best Math across StudyMondo full practice tests and entered College Board
 * scores (null when there is no complete sitting yet).
 */
export async function GET() {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const superscore = await loadSatSuperscore(userId)
  return NextResponse.json({ superscore }, { headers: { 'Cache-Control': 'private, no-store' } })
}
