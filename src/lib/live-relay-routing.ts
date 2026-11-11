/**
 * Who may publish what over the live relay, and who receives it. Run by the
 * Cloudflare worker (live-relay/src/index.ts) for every message; kept here,
 * dependency-free, so the site's tests cover it. The database routes enforce
 * the same rules for the record; this keeps a crafted message from showing up
 * on other screens in the meantime.
 */

export type RelayRole = 'teacher' | 'student'

export interface RelayPeer {
  role: RelayRole
  /** User id. */
  user: string
  /** Display name, for a pad's label in the teacher's gallery. */
  name: string
}

/** The teacher's board settings, as last broadcast in a `board-mode` message. */
export interface RoomState {
  boardMode: 'OFF' | 'TEACHER' | 'SHARED'
  pads: boolean
}

/** Until a teacher says otherwise, students may not draw anywhere. */
export const DEFAULT_ROOM_STATE: RoomState = { boardMode: 'OFF', pads: false }

export interface Routing {
  /** Who receives it (never the sender). */
  to: 'all' | 'teachers' | 'none'
  /** The message to deliver, re-serialised when it was rewritten. */
  message?: string
  /** A new room state to keep (teacher `board-mode`). */
  state?: RoomState
}

const TEACHER_ONLY = new Set(['deck', 'els', 'laser', 'view'])
const MODES = new Set(['OFF', 'TEACHER', 'SHARED'])

export function routeMessage(raw: string, peer: RelayPeer, state: RoomState): Routing {
  let m: Record<string, unknown>
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return { to: 'none' }
    m = parsed as Record<string, unknown>
  } catch {
    return { to: 'none' }
  }
  const teacher = peer.role === 'teacher'
  const t = m.t
  if (typeof t !== 'string') return { to: 'none' }

  if (TEACHER_ONLY.has(t)) return teacher ? { to: 'all', message: raw } : { to: 'none' }

  if (t === 'board-mode') {
    if (!teacher || typeof m.mode !== 'string' || !MODES.has(m.mode)) return { to: 'none' }
    const next: RoomState = { boardMode: m.mode as RoomState['boardMode'], pads: m.pads === true }
    return { to: 'all', message: JSON.stringify({ t: 'board-mode', mode: next.boardMode, pads: next.pads }), state: next }
  }

  if (t === 'board') {
    if (!Array.isArray(m.els) || typeof m.owner !== 'string') return { to: 'none' }
    if (m.owner === 'class') {
      if (!teacher && state.boardMode !== 'SHARED') return { to: 'none' }
      return { to: 'all', message: raw }
    }
    // A personal pad: only its owner draws on it ('me' or their own id), and
    // only teachers watch pads.
    const owner = m.owner === 'me' ? peer.user : m.owner
    if (owner !== peer.user) return { to: 'none' }
    if (!teacher && !state.pads) return { to: 'none' }
    return { to: 'teachers', message: JSON.stringify({ t: 'board', owner, ownerName: peer.name, els: m.els }) }
  }

  return { to: 'none' }
}
