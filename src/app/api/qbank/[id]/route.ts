import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { findSession, sessionView } from '@/lib/qbank-server'

export const dynamic = 'force-dynamic'

/** GET /api/qbank/<id> — one of the student's own practice sets (to resume or show results). */
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const row = await findSession(userId, id)
  if (!row) return NextResponse.json({ error: 'Practice set not found' }, { status: 404 })
  return NextResponse.json({ session: sessionView(row) }, { headers: { 'Cache-Control': 'private, no-store' } })
}
