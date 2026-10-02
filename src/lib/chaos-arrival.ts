/**
 * Chaos attacks run their full length from the moment they REACH the victim.
 *
 * The server stamps each effect with `startedAt` (server clock) when it is
 * fired, and the victim learns of it on its next poll (every 2s in lobbies).
 * Timing the overlay from the server stamp meant a 3-second Blackout had
 * usually spent 1-2.5s of its window before it arrived; the victim saw a
 * fraction of a second of darkness, or nothing, and any gap between the
 * device clock and the server clock shortened it further (bug report
 * 2026-10-01). Re-basing each attack on its local arrival time fixes all of
 * that: the polling delay only postpones the attack, it no longer eats it,
 * and both start and end are measured on the same (device) clock.
 *
 * Self items (Time Warp) keep their server timing: they reach the caller in
 * the response to their own request, and the server applies Time Warp's
 * double points on server time, so the countdown should match it.
 */
import { POWER_UPS, type ActiveEffect } from '@/lib/chaos-powerups'

export interface IngestResult {
  /** Effects to render, attacks re-based to local arrival time. */
  effects: ActiveEffect[]
  /** Effects seen for the first time on this call (for "X hit you" toasts). */
  fresh: ActiveEffect[]
}

/**
 * Merge a server snapshot of effects into the locally held list.
 *
 * - An effect id is taken once. `seen` remembers every id ever taken, so a
 *   later poll that still lists an attack never restarts it.
 * - An attack's `startedAt` becomes `localNow`; a self item keeps its own.
 * - Effects stay until their LOCAL window ends, even after the server has
 *   pruned them on its own clock (it will, mid-overlay, once arrival is late).
 *
 * `seen` is mutated: pass the same Set (a ref) on every call.
 */
export function ingestEffects(
  held: ActiveEffect[],
  incoming: ActiveEffect[] | undefined,
  localNow: number,
  seen: Set<string>,
): IngestResult {
  const kept = held.filter((e) => e.startedAt + e.durationMs > localNow)
  const fresh: ActiveEffect[] = []
  for (const e of incoming ?? []) {
    if (seen.has(e.id)) continue
    seen.add(e.id)
    const rebased = POWER_UPS[e.type]?.kind === 'attack' ? { ...e, startedAt: localNow } : e
    // A self item can arrive already over (a late poll after a reload).
    if (rebased.startedAt + rebased.durationMs <= localNow) continue
    fresh.push(rebased)
  }
  return { effects: fresh.length ? [...kept, ...fresh] : kept, fresh }
}
