import { createSign, randomBytes } from 'crypto'

/**
 * Live class sessions — shared server-side helpers.
 *
 * Two modes, chosen by the teacher at start (see the design decision in
 * LiveSession's schema comment):
 *
 *  CONFERENCE — an embedded Jitsi room. When the three JAAS_* env vars are set
 *  (8x8 "Jitsi as a Service", free developer tier: unlimited minutes up to 25
 *  distinct users/month) the room is embedded in-site at 8x8.vc with a
 *  server-minted JWT — teacher joins as moderator, students as participants,
 *  names prefilled from their accounts. Without keys the mode still works: we
 *  fall back to an unguessable room on the public meet.jit.si, opened in a new
 *  tab (embedding the public server is capped at ~5 minutes, so link-out is
 *  the only honest free fallback).
 *
 *  WEBCAST — the teacher goes live on an unlisted YouTube stream (free,
 *  unlimited viewers) and we embed the player next to our own DB-backed chat.
 *  Nothing here talks to a video provider at all.
 *
 * JAAS env vars (Vercel prod / .env.local dev):
 *   JAAS_APP_ID      — the tenant id, looks like 'vpaas-magic-cookie-…'
 *   JAAS_API_KEY     — the key id (kid) of the RSA keypair uploaded to 8x8
 *   JAAS_PRIVATE_KEY — the RSA private key PEM (raw, or base64-encoded to
 *                      survive env-var newline mangling)
 */

export function jaasConfigured(): boolean {
  return !!(process.env.JAAS_APP_ID && process.env.JAAS_API_KEY && process.env.JAAS_PRIVATE_KEY)
}

function jaasPrivateKeyPem(): string {
  const raw = process.env.JAAS_PRIVATE_KEY ?? ''
  if (raw.includes('BEGIN')) return raw.replace(/\\n/g, '\n')
  return Buffer.from(raw, 'base64').toString('utf8')
}

const b64u = (input: Buffer | string): string => Buffer.from(input).toString('base64url')

/**
 * Mint a JaaS join token (RS256 JWT, the shape 8x8's docs specify). Only ever
 * called server-side after the enrollment check — the JWT IS the room's access
 * control, so it must never be mintable by an unenrolled user.
 */
export function buildJaasJwt(opts: {
  roomName: string
  userId: string
  displayName: string
  email?: string | null
  moderator: boolean
}): string {
  const appId = process.env.JAAS_APP_ID!
  const now = Math.floor(Date.now() / 1000)
  const header = { alg: 'RS256', kid: process.env.JAAS_API_KEY!, typ: 'JWT' }
  const payload = {
    aud: 'jitsi',
    iss: 'chat',
    sub: appId,
    room: opts.roomName,
    nbf: now - 10,
    exp: now + 60 * 60 * 3, // long enough for any class; room dies with the session row anyway
    context: {
      user: {
        id: opts.userId,
        name: opts.displayName,
        email: opts.email ?? undefined,
        moderator: opts.moderator ? 'true' : 'false',
      },
      features: {
        livestreaming: opts.moderator ? 'true' : 'false',
        recording: 'false',
        'outbound-call': 'false',
        transcription: 'false',
      },
    },
  }
  const signingInput = `${b64u(JSON.stringify(header))}.${b64u(JSON.stringify(payload))}`
  const signature = createSign('RSA-SHA256').update(signingInput).sign(jaasPrivateKeyPem())
  return `${signingInput}.${b64u(signature)}`
}

/** Unguessable room slug — the room name is the only secret in fallback mode. */
export function makeRoomName(classroomName: string): string {
  const base = classroomName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 24) || 'class'
  return `studymondo-${base}-${randomBytes(8).toString('hex')}`
}

/**
 * Extract a YouTube video id from whatever the teacher pastes: watch URLs,
 * youtu.be short links, /live/ URLs, embed URLs, or a bare 11-char id.
 */
export function parseYouTubeVideoId(input: string): string | null {
  const s = input.trim()
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s
  let url: URL
  try {
    url = new URL(s)
  } catch {
    return null
  }
  const host = url.hostname.replace(/^www\./, '')
  if (host === 'youtu.be') {
    const id = url.pathname.slice(1).split('/')[0]
    return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null
  }
  if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
    const v = url.searchParams.get('v')
    if (v && /^[A-Za-z0-9_-]{11}$/.test(v)) return v
    const m = url.pathname.match(/^\/(?:live|embed|shorts)\/([A-Za-z0-9_-]{11})/)
    if (m) return m[1]
  }
  return null
}

/** Read the muted-user list off a LiveSession row's Json column. */
export function mutedList(mutedUserIds: unknown): string[] {
  return Array.isArray(mutedUserIds) ? mutedUserIds.filter((x): x is string => typeof x === 'string') : []
}

/**
 * Attendance capture. A row appears when someone loads the session page and
 * lastSeenAt advances while their polls keep arriving (chat/board/status), so
 * minutes-in-session ≈ lastSeenAt − joinedAt. Writes are throttled to ~1/min
 * per attendee and always fire-and-forget — attendance must never break a
 * session surface. Import prisma lazily to keep this file importable anywhere.
 */
export async function touchAttendance(sessionId: string, userId: string): Promise<void> {
  try {
    const { prisma } = await import('@/lib/prisma')
    const staleBefore = new Date(Date.now() - 60_000)
    const updated = await prisma.liveSessionAttendance.updateMany({
      where: { sessionId, userId, lastSeenAt: { lt: staleBefore } },
      data: { lastSeenAt: new Date() },
    })
    if (updated.count === 0) {
      // Either fresh (< 60s) — nothing to do — or no row yet. Cheap indexed
      // existence check before creating, so fresh-window polls don't hammer
      // the unique constraint with doomed inserts.
      const exists = await prisma.liveSessionAttendance.findUnique({
        where: { sessionId_userId: { sessionId, userId } },
        select: { id: true },
      })
      if (!exists) {
        await prisma.liveSessionAttendance
          .create({ data: { sessionId, userId } })
          .catch(() => {}) // concurrent-create race — the other poll won
      }
    }
  } catch {
    /* never let attendance bookkeeping break the session */
  }
}
