import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import type { Prisma } from '@prisma/client'
import {
  COSMETICS,
  getCosmetic,
  sanitizeCosmeticsState,
  type CosmeticSlot,
  type CosmeticsState,
} from '@/lib/cosmetics-catalog'

/**
 * /api/competitive/cosmetics — server-persisted cosmetics state, so purchases
 * roam with the account instead of living in one browser's localStorage.
 *
 * State lives in `CompetitiveProfile.cosmetics` (Json?):
 *   { owned: string[], equipped: { [slot]: itemId }, xpSpent: number, initialized: true }
 *
 * GET  → current state + computed XP balance:
 *   { persistence: 'ok', owned, equipped, xpSpent, totalXpEarned, availableXP, canImport }
 *   `canImport` is true only while the column is still NULL for this user —
 *   the window for the one-time localStorage import (see POST action 'import').
 *
 * POST → mutations, all operating ONLY on the caller's own profile:
 *   { action: 'purchase', itemId }        — price validated server-side against
 *     the shared catalog; rejected (400) if unaffordable, (409) if already owned.
 *     Runs in a transaction so balance check + write are atomic. Auto-equips
 *     into the item's slot when that slot is empty (mirrors the old client UX).
 *   { action: 'equip', itemId, slot }     — must own the item; slot must match.
 *   { action: 'unequip', slot }           — clears the slot.
 *   { action: 'import', state }           — one-time migration of a device's
 *     legacy localStorage state. Accepted ONLY while the column is NULL;
 *     item ids are validated against the catalog and xpSpent is capped at the
 *     sum of the imported items' prices, then the state is marked initialized
 *     (closing the window forever). Repeat attempts get 409 + current state.
 *
 * GRACEFUL DEGRADATION: prod migrations are applied manually and may lag a
 * deploy. If the `cosmetics` column doesn't exist yet (Prisma P2022/P2021),
 * GET returns 200 { persistence: 'unavailable' } and POST returns 503, and the
 * client falls back to its read-only localStorage path instead of crashing.
 */

export const dynamic = 'force-dynamic'

/** Prisma error codes for "table/column does not exist" (migration not applied). */
function isMissingSchemaError(e: unknown): boolean {
  const code = (e as { code?: string } | null)?.code
  return code === 'P2021' || code === 'P2022'
}

class ApiError extends Error {
  constructor(public status: number, message: string, public extra?: Record<string, unknown>) {
    super(message)
  }
}

async function totalXpEarned(userId: string): Promise<number> {
  const agg = await prisma.challengeParticipant.aggregate({
    where: { userId },
    _sum: { xpEarned: true },
  })
  return agg._sum.xpEarned ?? 0
}

function stateResponse(state: CosmeticsState, earned: number, extra?: Record<string, unknown>) {
  return NextResponse.json({
    persistence: 'ok',
    owned: state.owned,
    equipped: state.equipped,
    xpSpent: state.xpSpent,
    totalXpEarned: earned,
    availableXP: Math.max(0, earned - state.xpSpent),
    ...extra,
  })
}

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const userId = session.user.id

  try {
    const [profile, earned] = await Promise.all([
      prisma.competitiveProfile.findUnique({
        where: { userId },
        select: { cosmetics: true },
      }),
      totalXpEarned(userId),
    ])

    const state = sanitizeCosmeticsState(profile?.cosmetics ?? null)
    // Import window is open only while the column has never been written.
    const canImport = !!profile && profile.cosmetics === null
    return stateResponse(state, earned, { canImport })
  } catch (e) {
    if (isMissingSchemaError(e)) {
      // Migration not applied in this environment — tell the client to fall
      // back to its device-local read-only path.
      return NextResponse.json({ persistence: 'unavailable' })
    }
    console.error('cosmetics GET failed:', e)
    return NextResponse.json({ error: 'Failed to load cosmetics' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const userId = session.user.id

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
  const action = body.action

  try {
    // All mutations run in an interactive transaction: read the caller's
    // current state, validate, write — so a concurrent purchase can't double
    // spend the same XP.
    const result = await prisma.$transaction(async (tx) => {
      const profile = await tx.competitiveProfile.findUnique({
        where: { userId },
        select: { id: true, cosmetics: true },
      })
      if (!profile) {
        throw new ApiError(409, 'No competitive profile yet — enter the competitive hub first.')
      }
      const state = sanitizeCosmeticsState(profile.cosmetics)
      const earned = await totalXpEarned(userId)

      let next: CosmeticsState
      const extra: Record<string, unknown> = {}

      if (action === 'purchase') {
        const item = typeof body.itemId === 'string' ? getCosmetic(body.itemId) : undefined
        if (!item) throw new ApiError(400, 'Unknown item')
        if (state.owned.includes(item.id)) throw new ApiError(409, 'Already owned')
        const available = Math.max(0, earned - state.xpSpent)
        if (available < item.cost) {
          throw new ApiError(400, `Not enough XP — ${item.name} costs ${item.cost} XP and you have ${available}.`)
        }
        next = {
          owned: [...state.owned, item.id],
          equipped: state.equipped[item.slot]
            ? state.equipped
            : { ...state.equipped, [item.slot]: item.id },
          xpSpent: state.xpSpent + item.cost,
          initialized: true,
        }
      } else if (action === 'equip') {
        const item = typeof body.itemId === 'string' ? getCosmetic(body.itemId) : undefined
        if (!item) throw new ApiError(400, 'Unknown item')
        if (!state.owned.includes(item.id)) throw new ApiError(403, 'You do not own that item')
        if (typeof body.slot === 'string' && body.slot !== item.slot) {
          throw new ApiError(400, 'Item does not fit that slot')
        }
        next = { ...state, equipped: { ...state.equipped, [item.slot]: item.id }, initialized: true }
      } else if (action === 'unequip') {
        const slot = body.slot
        if (typeof slot !== 'string' || !COSMETICS.some((c) => c.slot === slot)) {
          throw new ApiError(400, 'Unknown slot')
        }
        const equipped = { ...state.equipped }
        delete equipped[slot as CosmeticSlot]
        next = { ...state, equipped, initialized: true }
      } else if (action === 'import') {
        // One-time migration of legacy device-local state. Only while the
        // column has never been written — after that, forging states is closed.
        if (profile.cosmetics !== null) {
          throw new ApiError(409, 'Cosmetics already initialized for this account', {
            alreadyInitialized: true,
          })
        }
        // sanitizeCosmeticsState drops unknown ids, requires equipped items to
        // be owned, and caps xpSpent at the sum of the imported items' prices.
        const imported = sanitizeCosmeticsState(body.state)
        next = { ...imported, initialized: true }
        extra.imported = true
      } else {
        throw new ApiError(400, 'Unknown action')
      }

      await tx.competitiveProfile.update({
        where: { id: profile.id },
        data: { cosmetics: next as unknown as Prisma.InputJsonValue },
      })
      return { next, earned, extra }
    })

    return stateResponse(result.next, result.earned, result.extra)
  } catch (e) {
    if (e instanceof ApiError) {
      return NextResponse.json({ error: e.message, ...e.extra }, { status: e.status })
    }
    if (isMissingSchemaError(e)) {
      return NextResponse.json(
        { error: 'Cosmetics persistence not available yet', persistence: 'unavailable' },
        { status: 503 }
      )
    }
    console.error('cosmetics POST failed:', e)
    return NextResponse.json({ error: 'Failed to update cosmetics' }, { status: 500 })
  }
}
