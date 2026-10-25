import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import {
  autoCloseIfSessionEnded,
  buildPoolState,
  classroomRole,
  closePool,
  joinPool,
  leavePool,
  tickPool,
} from '@/lib/class-pool-server'

interface Ctx { params: Promise<{ poolId: string }> }

/**
 * GET  /api/competitive/class-pool/[poolId] — full pool state (roster: who is
 *   waiting, who is playing whom with the live score, recent results; the
 *   caller's own state incl. the practice-bot offer). Each read also runs a
 *   pairing pass, so the 2 s polls are what pair settled players.
 * POST /api/competitive/class-pool/[poolId] { action: 'join' | 'leave' | 'close' }
 *   join/leave: any teacher or active member; close: teachers only.
 */

async function load(poolId: string) {
  const session = await auth()
  if (!session?.user?.id) return { ok: false as const, error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  const found = await prisma.classMatchPool.findUnique({ where: { id: poolId } })
  if (!found) return { ok: false as const, error: NextResponse.json({ error: 'Class match not found' }, { status: 404 }) }
  const role = await classroomRole(found.classroomId, session.user.id, session.user.role)
  if (!role) return { ok: false as const, error: NextResponse.json({ error: 'You are not in this class.' }, { status: 403 }) }
  const pool = await autoCloseIfSessionEnded(found)
  return { ok: true as const, pool, role, userId: session.user.id }
}

export async function GET(_req: NextRequest, { params }: Ctx): Promise<NextResponse> {
  const { poolId } = await params
  const ctx = await load(poolId)
  if (!ctx.ok) return ctx.error
  if (ctx.pool.status === 'OPEN') await tickPool(ctx.pool.id)
  const state = await buildPoolState(ctx.pool, { id: ctx.userId, role: ctx.role })
  return NextResponse.json(state, { headers: { 'Cache-Control': 'private, no-store' } })
}

export async function POST(req: NextRequest, { params }: Ctx): Promise<NextResponse> {
  const { poolId } = await params
  const ctx = await load(poolId)
  if (!ctx.ok) return ctx.error
  // sendBeacon (tab closed while waiting) posts text/plain — parse either way.
  const raw = await req.text().catch(() => '')
  let action: unknown = null
  try { action = (JSON.parse(raw || '{}') as { action?: unknown }).action } catch { /* bad body */ }

  if (action === 'join') {
    const result = await joinPool(ctx.pool, ctx.userId)
    if (result.status === 'closed') return NextResponse.json({ error: 'This class match has ended.', ...result }, { status: 410 })
    if (result.status === 'in_other_match') {
      return NextResponse.json({ error: 'Finish your current match first.', ...result }, { status: 409 })
    }
    return NextResponse.json(result)
  }
  if (action === 'leave') {
    await leavePool(ctx.pool.id, ctx.userId)
    return NextResponse.json({ status: 'left' })
  }
  if (action === 'close') {
    if (ctx.role !== 'teacher') return NextResponse.json({ error: 'Only the teacher can close the class match.' }, { status: 403 })
    await closePool(ctx.pool.id)
    return NextResponse.json({ status: 'closed' })
  }
  return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
}
