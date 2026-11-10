import type { BoardElement } from '@/lib/board-merge'

/**
 * What travels over the live relay (live-relay/) during a slide presentation.
 * The teacher's browser publishes; every other member of the session receives.
 * The database stays the record: slide changes and strokes are also posted to
 * /api/live-sessions/[id]/deck as before, so a late joiner (or a session with
 * no relay configured) still catches up through the 2.5 s poll. Relay messages
 * only make the same thing visible sooner.
 */
export type RelayMessage =
  | {
      t: 'deck'
      deckId: string
      /** The teacher moved to this slide. */
      currentSlide?: number
      /** The teacher revealed a poll's answer (students may see it now). */
      reveal?: { index: number; correctIndex: number; explanation: string }
      /** The presentation ended. */
      ended?: boolean
    }
  | {
      /** Pen strokes: only the elements that changed since the last message, in logical stage units. */
      t: 'els'
      deckId: string
      slide: number
      els: BoardElement[]
    }
  | {
      /** Laser pointer position in logical stage units; `on: false` hides it. */
      t: 'laser'
      deckId: string
      slide: number
      x: number
      y: number
      on: boolean
    }

/** Strokes are batched and flushed this often while the pen moves. */
export const STROKE_FLUSH_MS = 40
/** Laser positions are sent at most this often (20 Hz). */
export const LASER_MIN_INTERVAL_MS = 50
/** A laser dot with no update for this long is hidden. */
export const LASER_STALE_MS = 1500

/**
 * The elements whose `version` changed since the last call, updating `known`
 * (element id → version last sent). Excalidraw hands over every element on
 * each change; sending only the changed ones keeps a stroke in progress to a
 * few hundred bytes per message.
 */
export function changedElements(known: Map<string, number>, elements: readonly BoardElement[]): BoardElement[] {
  const out: BoardElement[] = []
  for (const el of elements) {
    const v = el.version ?? 0
    if (known.get(el.id) !== v) {
      known.set(el.id, v)
      out.push(el)
    }
  }
  return out
}

export function isRelayMessage(x: unknown): x is RelayMessage {
  if (!x || typeof x !== 'object') return false
  const m = x as Record<string, unknown>
  if (typeof m.deckId !== 'string') return false
  switch (m.t) {
    case 'deck':
      return (m.currentSlide === undefined || typeof m.currentSlide === 'number') && (m.ended === undefined || typeof m.ended === 'boolean')
    case 'els':
      return typeof m.slide === 'number' && Array.isArray(m.els)
    case 'laser':
      return typeof m.slide === 'number' && typeof m.x === 'number' && typeof m.y === 'number' && typeof m.on === 'boolean'
    default:
      return false
  }
}
