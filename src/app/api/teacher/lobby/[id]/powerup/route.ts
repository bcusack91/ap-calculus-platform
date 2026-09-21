import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { parseBody } from '@/lib/validations'
import { publicDisplayName } from '@/lib/display-name'
import { POWER_UPS, pruneEffects, type ActiveEffect, type PowerUpId } from '@/lib/chaos-powerups'
import {
  emptyLobbyChaos,
  resolveTargets,
  type LobbyPlayerChaos,
} from '@/lib/lobby-chaos'
import type { Prisma } from '@prisma/client'

interface Ctx { params: Promise<{ id: string }> }

const powerUpUseSchema = z.object({
  powerUpId: z.enum([
    'ink-splat', 'screen-flip', 'slippery', 'fog', 'earthquake', 'blackout',
    'freeze', 'chaos-storm', 'shield', 'reflect', 'fifty-fifty',
    'double-points', 'time-warp',
  ]),
  /** Needed by 50/50, which eliminates options on the question in front of you. */
  questionIndex: z.number().int().min(0).optional(),
})

const asJson = (v: LobbyPlayerChaos) => v as unknown as Prisma.InputJsonValue

/**
 * POST /api/teacher/lobby/[id]/powerup — fire a Chaos Mode item in a class
 * competition. Server-authoritative: the item must actually be in this
 * student's inventory, and the server decides who it lands on.
 *
 * Attacks carry a scope that was fixed when the item dropped:
 *   single (~90%) — one random opponent, like a shell
 *   team   (~10%) — every member of the leading opposing team, like lightning
 * Either way the victims learn who hit them: ActiveEffect.from carries the
 * attacker's display name, which the client surfaces as a toast.
 *
 * Shield and Reflect are honored per victim, so one student's shield protects
 * only that student when lightning lands on their whole team.
 */
export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const userId = session.user.id

  const parsed = parseBody(powerUpUseSchema, await req.json().catch(() => ({})))
  if (!parsed.success) return NextResponse.json({ error: parsed.error }, { status: 400 })
  const { powerUpId, questionIndex } = parsed.data

  const lobby = await prisma.teacherLobby.findUnique({
    where: { id },
    select: { id: true, status: true, gameMode: true, endsAt: true },
  })
  if (!lobby) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (lobby.gameMode !== 'CHAOS') {
    return NextResponse.json({ error: 'Not a Chaos lobby' }, { status: 400 })
  }
  if (lobby.status !== 'IN_PROGRESS') {
    return NextResponse.json({ error: 'Match is not running' }, { status: 400 })
  }
  if (lobby.endsAt && new Date(lobby.endsAt).getTime() <= Date.now()) {
    return NextResponse.json({ error: 'Time expired', expired: true }, { status: 400 })
  }

  const me = await prisma.teacherLobbyParticipant.findUnique({
    where: { lobbyId_userId: { lobbyId: id, userId } },
    select: { id: true, team: true, score: true, powerUps: true, user: { select: { name: true } } },
  })
  if (!me) return NextResponse.json({ error: 'Not in lobby' }, { status: 403 })

  const now = Date.now()
  const mine: LobbyPlayerChaos = { ...emptyLobbyChaos(), ...((me.powerUps as LobbyPlayerChaos | null) ?? {}) }
  mine.effects = pruneEffects(mine.effects, now)

  const slot = mine.inventory.findIndex((item) => item.id === powerUpId)
  if (slot === -1) return NextResponse.json({ error: 'You do not have that item' }, { status: 400 })
  const item = mine.inventory[slot]
  mine.inventory.splice(slot, 1)

  const def = POWER_UPS[powerUpId as PowerUpId]
  const attackerName = publicDisplayName(me.user?.name, 'A classmate')

  // ---- Self items: resolve entirely on the caller's own row. ----
  if (def.kind === 'self') {
    if (powerUpId === 'shield') mine.shield = true
    if (powerUpId === 'reflect') mine.reflect = true
    if (powerUpId === 'double-points') mine.doubleNext = true
    if (powerUpId === 'time-warp') {
      mine.effects.push({
        id: `${now}-${Math.random().toString(36).slice(2, 8)}`,
        type: 'time-warp',
        from: attackerName,
        startedAt: now,
        durationMs: def.durationMs ?? 5000,
      })
    }
    if (powerUpId === 'fifty-fifty' && typeof questionIndex === 'number') {
      const pool = await prisma.teacherLobby.findUnique({
        where: { id }, select: { questionPool: true },
      })
      const questions = Array.isArray(pool?.questionPool)
        ? (pool.questionPool as Array<{ correctAnswer: number; options: string[] }>)
        : []
      const q = questions[questionIndex]
      if (q) {
        const wrong = q.options.map((_, i) => i).filter((i) => i !== q.correctAnswer)
        for (let i = wrong.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[wrong[i], wrong[j]] = [wrong[j], wrong[i]]
        }
        mine.fiftyFifty = { questionIndex, eliminated: wrong.slice(0, 2) }
      }
    }
    await prisma.teacherLobbyParticipant.update({
      where: { id: me.id }, data: { powerUps: asJson(mine) },
    })
    return NextResponse.json({ ok: true, used: powerUpId, scope: 'self', targets: 0, powerUps: mine })
  }

  // ---- Attacks: the server picks the victims. ----
  const roster = await prisma.teacherLobbyParticipant.findMany({
    where: { lobbyId: id },
    select: { id: true, team: true, score: true, powerUps: true, user: { select: { name: true } } },
  })
  const targetIds = resolveTargets({
    attackerTeam: me.team,
    scope: item.scope,
    participants: roster.map((p) => ({ id: p.id, team: p.team, score: p.score })),
  })
  if (targetIds.length === 0) {
    // Nobody to hit (single-team lobby). Give the item back rather than eat it.
    mine.inventory.splice(slot, 0, item)
    await prisma.teacherLobbyParticipant.update({
      where: { id: me.id }, data: { powerUps: asJson(mine) },
    })
    return NextResponse.json({ ok: false, error: 'No opponents to target', powerUps: mine })
  }

  const effectFor = (): ActiveEffect => ({
    id: `${now}-${Math.random().toString(36).slice(2, 8)}`,
    type: powerUpId as PowerUpId,
    from: attackerName,
    startedAt: now,
    durationMs: def.durationMs ?? 3000,
  })

  const writes: Prisma.PrismaPromise<unknown>[] = []
  let blocked = 0
  let reflected = 0

  for (const targetId of targetIds) {
    const target = roster.find((p) => p.id === targetId)
    if (!target) continue
    const theirs: LobbyPlayerChaos = {
      ...emptyLobbyChaos(),
      ...((target.powerUps as LobbyPlayerChaos | null) ?? {}),
    }
    theirs.effects = pruneEffects(theirs.effects, now)

    // Shield and Reflect are checked per victim: a team-wide hit is absorbed
    // only by the students who happen to be holding one.
    if (theirs.shield) {
      theirs.shield = false
      blocked++
    } else if (theirs.reflect) {
      theirs.reflect = false
      reflected++
      mine.effects.push(effectFor())
    } else {
      theirs.effects.push(effectFor())
    }
    writes.push(prisma.teacherLobbyParticipant.update({
      where: { id: target.id }, data: { powerUps: asJson(theirs) },
    }))
  }

  writes.push(prisma.teacherLobbyParticipant.update({
    where: { id: me.id }, data: { powerUps: asJson(mine) },
  }))
  await prisma.$transaction(writes)

  return NextResponse.json({
    ok: true,
    used: powerUpId,
    scope: item.scope,
    targets: targetIds.length,
    blocked,
    reflected,
    powerUps: mine,
  })
}
