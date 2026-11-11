/**
 * StudyMondo live relay: one WebSocket room per live session, so a teacher's
 * slide changes, pen strokes, laser pointer and whiteboard strokes (and the
 * students' own pads, back to the teacher) reach the other screens in well
 * under a second instead of on the next poll.
 *
 * Cloudflare Worker + Durable Object (hibernating WebSockets, so an idle room
 * costs nothing). The worker admits a connection only with a token the site
 * signed (src/lib/live-relay-token.ts) for that session; the token's role and
 * user decide what the member may publish (src/lib/live-relay-routing.ts).
 * The relay keeps only the teacher's board settings; the site's database
 * stays the record for late joiners.
 */
import { verifyRelayToken } from '../../src/lib/live-relay-token'
import { routeMessage, DEFAULT_ROOM_STATE, type RelayPeer, type RoomState } from '../../src/lib/live-relay-routing'

export interface Env {
  ROOMS: DurableObjectNamespace
  /** Same value as LIVE_RELAY_SECRET on the site (`wrangler secret put RELAY_SECRET`). */
  RELAY_SECRET: string
}

/** Largest message relayed (a stroke batch; whole scenes never travel here). */
const MAX_MESSAGE_BYTES = 256_000
const ROOM_STATE_KEY = 'room-state'

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url)
    const m = url.pathname.match(/^\/session\/([A-Za-z0-9_-]{1,64})$/)
    if (!m) return new Response('StudyMondo live relay', { status: 200 })
    if (req.headers.get('Upgrade')?.toLowerCase() !== 'websocket') return new Response('Expected a WebSocket', { status: 426 })
    if (!env.RELAY_SECRET) return new Response('Relay secret not set', { status: 500 })
    const claims = await verifyRelayToken(url.searchParams.get('token') ?? '', env.RELAY_SECRET)
    if (!claims || claims.s !== m[1]) return new Response('Unauthorized', { status: 401 })
    const headers = new Headers(req.headers)
    headers.set('x-relay-role', claims.r)
    headers.set('x-relay-user', claims.u)
    headers.set('x-relay-name', encodeURIComponent(claims.n ?? ''))
    const room = env.ROOMS.get(env.ROOMS.idFromName(claims.s))
    return room.fetch(new Request(req.url, { method: 'GET', headers }))
  },
}

export class SessionRoom {
  constructor(private readonly state: DurableObjectState) {
    // Keep-alive handled without waking the object.
    this.state.setWebSocketAutoResponse(new WebSocketRequestResponsePair('ping', 'pong'))
  }

  async fetch(req: Request): Promise<Response> {
    const pair = new WebSocketPair()
    const client = pair[0]
    const server = pair[1]
    const role = req.headers.get('x-relay-role') === 'teacher' ? 'teacher' : 'student'
    const user = (req.headers.get('x-relay-user') ?? '').slice(0, 64)
    const name = decodeURIComponent(req.headers.get('x-relay-name') ?? '').slice(0, 80)
    // Tags survive hibernation: role for fan-out, user + name for pad messages.
    this.state.acceptWebSocket(server, [role, `u:${user}`, `n:${name}`])
    return new Response(null, { status: 101, webSocket: client })
  }

  private peerOf(ws: WebSocket): RelayPeer {
    const tags = this.state.getTags(ws)
    return {
      role: tags.includes('teacher') ? 'teacher' : 'student',
      user: (tags.find((t) => t.startsWith('u:')) ?? 'u:').slice(2),
      name: (tags.find((t) => t.startsWith('n:')) ?? 'n:').slice(2),
    }
  }

  async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer): Promise<void> {
    if (typeof message !== 'string' || message.length > MAX_MESSAGE_BYTES) return
    const peer = this.peerOf(ws)
    const state = (await this.state.storage.get<RoomState>(ROOM_STATE_KEY)) ?? DEFAULT_ROOM_STATE
    const r = routeMessage(message, peer, state)
    if (r.state) await this.state.storage.put(ROOM_STATE_KEY, r.state)
    if (r.to === 'none' || !r.message) return
    const peers = r.to === 'teachers' ? this.state.getWebSockets('teacher') : this.state.getWebSockets()
    for (const p of peers) {
      if (p === ws) continue
      try {
        p.send(r.message)
      } catch {
        /* a peer mid-close */
      }
    }
  }

  webSocketClose(ws: WebSocket): void {
    try {
      ws.close()
    } catch {
      /* already closed */
    }
  }

  webSocketError(ws: WebSocket): void {
    try {
      ws.close()
    } catch {
      /* already closed */
    }
  }
}
