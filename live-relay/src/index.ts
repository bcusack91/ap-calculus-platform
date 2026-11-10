/**
 * StudyMondo live relay: one WebSocket room per live session, so a teacher's
 * slide changes, pen strokes and laser pointer reach students in well under a
 * second instead of on the next poll.
 *
 * Cloudflare Worker + Durable Object (hibernating WebSockets, so an idle room
 * costs nothing). The worker admits a connection only with a token the site
 * signed (src/lib/live-relay-token.ts) for that session; the token's role
 * decides who may publish: teachers broadcast, students only receive. The
 * relay stores nothing: the site's database stays the record for late joiners.
 */
import { verifyRelayToken } from '../../src/lib/live-relay-token'

export interface Env {
  ROOMS: DurableObjectNamespace
  /** Same value as LIVE_RELAY_SECRET on the site (`wrangler secret put RELAY_SECRET`). */
  RELAY_SECRET: string
}

/** Largest message relayed (a stroke batch; whole scenes never travel here). */
const MAX_MESSAGE_BYTES = 256_000

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
    this.state.acceptWebSocket(server, [role])
    return new Response(null, { status: 101, webSocket: client })
  }

  webSocketMessage(ws: WebSocket, message: string | ArrayBuffer): void {
    if (typeof message !== 'string' || message.length > MAX_MESSAGE_BYTES) return
    if (!this.state.getTags(ws).includes('teacher')) return
    for (const peer of this.state.getWebSockets()) {
      if (peer === ws) continue
      try {
        peer.send(message)
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
