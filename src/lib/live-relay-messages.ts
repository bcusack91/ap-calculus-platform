import type { BoardElement } from '@/lib/board-merge'
import type { BoardViewRect } from '@/lib/board-view'

/**
 * What travels over the live relay (live-relay/) during a live session.
 * The database stays the record: slide changes, strokes and board scenes are
 * also posted to the session's API routes as before, so a late joiner (or a
 * session with no relay configured) still catches up through the polls.
 * Relay messages only make the same thing visible sooner.
 *
 * Who may publish what is decided in src/lib/live-relay-routing.ts (run by
 * the worker): teachers everything; students only `board` for their own pad,
 * or for the class board while it is shared.
 */
export type BoardMode = 'OFF' | 'TEACHER' | 'SHARED'

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
      /** Slide pen strokes: only the elements that changed since the last message, in logical stage units. */
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
  | {
      /**
       * Whiteboard strokes: the elements that changed. `owner` is 'class' for
       * the class board; a drawer sends 'me' for their own pad and the worker
       * rewrites it to their user id (and fills `ownerName`) before fan-out.
       * Pad messages reach teachers only.
       */
      t: 'board'
      owner: string
      ownerName?: string
      els: BoardElement[]
    }
  | {
      /** The teacher's class-board view (students follow it) and/or the follow switch. */
      t: 'view'
      view?: BoardViewRect | null
      follow?: boolean
    }
  | {
      /** The teacher's board settings; the worker keeps them to gate student publishing. */
      t: 'board-mode'
      mode: BoardMode
      pads: boolean
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

/** Mark elements as already known (applied from elsewhere), so they are never echoed back. */
export function markKnown(known: Map<string, number>, elements: readonly BoardElement[]): void {
  for (const el of elements) known.set(el.id, el.version ?? 0)
}

const MODES: readonly string[] = ['OFF', 'TEACHER', 'SHARED']

function isViewRect(v: unknown): boolean {
  if (!v || typeof v !== 'object') return false
  const r = v as Record<string, unknown>
  return ['x', 'y', 'width', 'height'].every((k) => typeof r[k] === 'number' && Number.isFinite(r[k] as number))
}

export function isRelayMessage(x: unknown): x is RelayMessage {
  if (!x || typeof x !== 'object') return false
  const m = x as Record<string, unknown>
  switch (m.t) {
    case 'deck':
      return typeof m.deckId === 'string' && (m.currentSlide === undefined || typeof m.currentSlide === 'number') && (m.ended === undefined || typeof m.ended === 'boolean')
    case 'els':
      return typeof m.deckId === 'string' && typeof m.slide === 'number' && Array.isArray(m.els)
    case 'laser':
      return typeof m.deckId === 'string' && typeof m.slide === 'number' && typeof m.x === 'number' && typeof m.y === 'number' && typeof m.on === 'boolean'
    case 'board':
      return typeof m.owner === 'string' && m.owner.length > 0 && Array.isArray(m.els) && (m.ownerName === undefined || typeof m.ownerName === 'string')
    case 'view':
      return (m.view === undefined || m.view === null || isViewRect(m.view)) && (m.follow === undefined || typeof m.follow === 'boolean')
    case 'board-mode':
      return typeof m.mode === 'string' && MODES.includes(m.mode) && typeof m.pads === 'boolean'
    default:
      return false
  }
}
