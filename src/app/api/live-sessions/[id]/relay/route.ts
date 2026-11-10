import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { sessionAccess } from '@/lib/live-session-access'
import { signRelayToken, RELAY_TOKEN_TTL_MS } from '@/lib/live-relay-token'

interface Ctx { params: Promise<{ id: string }> }

/**
 * GET — where to open the live relay's WebSocket for this session and a
 * short-lived token that admits this member (teachers may publish, students
 * listen). `{ url: null }` when no relay is configured, and the page stays
 * on its polls. See live-relay/README.md for the one-time setup.
 */
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const access = await sessionAccess(id, session.user.id)
  if (!access) return NextResponse.json({ error: 'Not enrolled' }, { status: 403 })

  const url = process.env.NEXT_PUBLIC_LIVE_RELAY_URL
  const secret = process.env.LIVE_RELAY_SECRET
  const headers = { 'Cache-Control': 'private, no-store' }
  if (!url || !secret) return NextResponse.json({ url: null }, { headers })
  const token = await signRelayToken({ s: id, u: session.user.id, r: access.isTeacher ? 'teacher' : 'student' }, secret)
  return NextResponse.json({ url, token, ttlMs: RELAY_TOKEN_TTL_MS }, { headers })
}
