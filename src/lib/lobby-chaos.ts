/**
 * Chaos Mode for TEACHER LOBBIES (class competitions split into teams).
 *
 * The 1v1 chaos engine in chaos-powerups.ts assumes exactly two players
 * (`PowerUpsState` is literally `{ player1, player2 }`) and scores first-to-10.
 * A class lobby has N teams of M students and scores +100 / -50 per question,
 * so neither the state shape nor the deficit thresholds carry over. This module
 * is the lobby-side equivalent. It deliberately does NOT touch the 1v1 tables:
 * retuning those would change ranked-queue chaos, which nobody asked for.
 *
 * TARGETING (owner's design, Mario Kart shells vs. lightning):
 *  - ~90% of attacks hit ONE random opponent. The victim is always told who
 *    hit them — `ActiveEffect.from` carries the attacker's display name.
 *  - ~10% are TEAM-WIDE and land on every member of the leading opposing team,
 *    the way lightning hits the whole field. Rarer, and only the trailing side
 *    can draw one, so it stays a comeback tool rather than a pile-on.
 *
 * CLASSROOM SAFETY: several 1v1 attacks are full-screen visual assaults
 * (violent shake, blackout, flashing storm). In a room of 30 that is a real
 * photosensitivity and vestibular risk, so lobbies default to `gentle`, which
 * drops those from the table entirely. A teacher opts into `full` knowingly.
 */
import {
  POWER_UPS,
  type ActiveEffect,
  type PowerUpId,
} from '@/lib/chaos-powerups'

export type AttackScope = 'single' | 'team'
export type ChaosIntensity = 'full' | 'gentle'

/** An inventory entry. Scope is fixed at DROP time so the holder can see what
 *  they are carrying before they fire it — a team-wide item should feel like
 *  finding lightning, not like a coin flip at the moment of use. */
export interface LobbyInventoryItem {
  id: PowerUpId
  scope: AttackScope
}

/** Per-participant chaos state. Stored on TeacherLobbyParticipant.powerUps so
 *  30 students answering at once each write their OWN row; a single lobby-level
 *  blob would serialize every answer behind one row lock. */
export interface LobbyPlayerChaos {
  inventory: LobbyInventoryItem[]
  effects: ActiveEffect[]
  shield?: boolean
  reflect?: boolean
  doubleNext?: boolean
  fiftyFifty?: { questionIndex: number; eliminated: number[] }
}

export const emptyLobbyChaos = (): LobbyPlayerChaos => ({ inventory: [], effects: [] })

export const LOBBY_MAX_INVENTORY = 2

/**
 * Blocked under `gentle`. Each of these takes over the whole screen with
 * motion or a hard luminance swing:
 *   earthquake  — violent shake (vestibular)
 *   blackout    — screen to darkness (luminance)
 *   chaos-storm — darkness + lightning + quaking (both, worst offender)
 *   screen-flip — inverts the display (disorienting)
 *   ink-splat   — opaque splatter over the question
 * Survivors are `fog` (a static blur), `slippery` (small elements sliding) and
 * `freeze` (a static frost pane), plus every self-item, none of which flash or
 * shake.
 */
export const GENTLE_BLOCKED: ReadonlySet<PowerUpId> = new Set<PowerUpId>([
  'ink-splat',
  'screen-flip',
  'earthquake',
  'blackout',
  'chaos-storm',
])

/**
 * The item that fills the rare team-wide slot.
 *
 * Under `full` it is the storm super, exactly as in 1v1. Under `gentle` the
 * storm is banned, so Freeze is promoted: it is already a static frost overlay
 * that blocks answering, which reads as a real team-wide setback without any
 * flashing or shaking. Scope is what makes it feel like lightning, not the art.
 */
export const TEAM_WIDE_ITEM: Record<ChaosIntensity, PowerUpId> = {
  full: 'chaos-storm',
  gentle: 'freeze',
}

/** Share of ATTACK drops that come out team-wide (owner's spec: ~10%). */
export const TEAM_WIDE_CHANCE = 0.1

/**
 * Lobby scoring is +100 correct / -50 wrong, so a raw point gap runs into the
 * thousands and cannot feed thresholds written for a first-to-10 race. Convert
 * to "questions behind" before making any judgement about who is trailing.
 */
export function questionsBehind(pointDeficit: number): number {
  return Math.round(pointDeficit / 100)
}

type Table = Array<[PowerUpId, number]>

/**
 * Lobby drop tables. Same rubber-banding intent as 1v1 — the further behind you
 * are, the more often you draw and the harder the table hits — but written out
 * separately because the lobby can filter for `gentle` and because its deficit
 * is measured in questions-behind rather than points-to-10.
 */
function dropTable(behind: number): Table {
  if (behind >= 3) {
    return [
      ['ink-splat', 14], ['screen-flip', 10], ['double-points', 12],
      ['fifty-fifty', 12], ['slippery', 8], ['earthquake', 10],
      ['blackout', 8], ['freeze', 12], ['reflect', 8], ['shield', 6],
      ['time-warp', 6],
    ]
  }
  if (behind >= 1) {
    return [
      ['ink-splat', 12], ['screen-flip', 10], ['double-points', 10],
      ['fifty-fifty', 12], ['slippery', 12], ['fog', 12], ['earthquake', 10],
      ['blackout', 10], ['freeze', 12], ['reflect', 10], ['shield', 10],
    ]
  }
  // Even or ahead: mild utility only. No heavy hitters for whoever is winning.
  return [
    ['fog', 28], ['slippery', 22], ['shield', 24], ['reflect', 12], ['fifty-fifty', 14],
  ]
}

function pick(table: Table, rng: () => number): PowerUpId | null {
  const total = table.reduce((s, [, w]) => s + w, 0)
  if (total <= 0) return null
  let r = rng() * total
  for (const [id, w] of table) {
    r -= w
    if (r < 0) return id
  }
  return table[table.length - 1][0]
}

/**
 * Roll for a drop after a student answers.
 *
 * `pointDeficit` = leadingTeamScore - myTeamScore (positive while trailing).
 * Drop chance mirrors 1v1: 35% level, rising 10% per question behind to a
 * ceiling of 80%, and dropping to 25% for whoever is ahead.
 *
 * Team-wide upgrade: once an ATTACK has been chosen, a trailing student has a
 * TEAM_WIDE_CHANCE shot at it becoming the team-wide item instead. Gating it to
 * trailing students keeps it a comeback mechanic — a team already winning can
 * never wipe the room.
 */
export function rollLobbyDrop(opts: {
  pointDeficit: number
  intensity: ChaosIntensity
  rng?: () => number
}): LobbyInventoryItem | null {
  const { pointDeficit, intensity } = opts
  const rng = opts.rng ?? Math.random
  const behind = questionsBehind(pointDeficit)

  const chance = behind > 0
    ? Math.min(0.35 + 0.1 * behind, 0.8)
    : behind === 0 ? 0.35 : 0.25
  if (rng() >= chance) return null

  let table = dropTable(behind)
  if (intensity === 'gentle') table = table.filter(([id]) => !GENTLE_BLOCKED.has(id))

  const id = pick(table, rng)
  if (!id) return null

  // Only attacks have a blast radius; a self-item is always just yours.
  if (POWER_UPS[id].kind === 'attack' && behind > 0 && rng() < TEAM_WIDE_CHANCE) {
    return { id: TEAM_WIDE_ITEM[intensity], scope: 'team' }
  }
  return { id, scope: 'single' }
}

/**
 * Who an attack lands on.
 *
 * single → one random opponent, drawn from every student not on the attacker's
 *          team, so no one team gets singled out by the draw.
 * team   → every member of the LEADING opposing team. With two teams that is
 *          simply "the other team"; with three or more it points the lightning
 *          at whoever is actually running away with it.
 *
 * Returns participant ids. An empty array means there was nobody to hit (a
 * one-team lobby, or every opponent has already left).
 */
export function resolveTargets(opts: {
  attackerTeam: number | null
  scope: AttackScope
  participants: Array<{ id: string; team: number | null; score: number }>
  rng?: () => number
}): string[] {
  const { attackerTeam, scope, participants } = opts
  const rng = opts.rng ?? Math.random
  const opponents = participants.filter((p) => p.team !== attackerTeam)
  if (opponents.length === 0) return []

  if (scope === 'single') {
    return [opponents[Math.floor(rng() * opponents.length)].id]
  }

  const byTeam = new Map<number | null, { ids: string[]; score: number }>()
  for (const p of opponents) {
    const entry = byTeam.get(p.team) ?? { ids: [], score: 0 }
    entry.ids.push(p.id)
    entry.score += p.score
    byTeam.set(p.team, entry)
  }
  let best: { ids: string[]; score: number } | null = null
  for (const entry of byTeam.values()) {
    if (!best || entry.score > best.score) best = entry
  }
  return best ? best.ids : []
}
