/**
 * Short-lived tokens that let a live-session member open the live relay's
 * WebSocket (live-relay/, a Cloudflare worker). The site signs one per
 * connection after checking enrolment; the worker verifies it and learns the
 * member's role. Web Crypto only, no Node imports: this file is bundled into
 * the worker as well.
 *
 * Format: `v1.<base64url JSON claims>.<base64url HMAC-SHA256>`.
 */

export interface RelayClaims {
  /** Live session id. */
  s: string
  /** User id. */
  u: string
  /** Teachers may publish anything; students only their own pad (and the shared class board). */
  r: 'teacher' | 'student'
  /** Expiry, ms since the epoch. */
  e: number
  /** Display name: labels the member's pad in the teacher's gallery. */
  n?: string
}

export const RELAY_TOKEN_TTL_MS = 10 * 60_000

const enc = new TextEncoder()

function b64url(bytes: Uint8Array): string {
  let s = ''
  for (const b of bytes) s += String.fromCharCode(b)
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromB64url(s: string): Uint8Array | null {
  try {
    const pad = s.length % 4 ? '='.repeat(4 - (s.length % 4)) : ''
    const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + pad)
    return Uint8Array.from(bin, (c) => c.charCodeAt(0))
  } catch {
    return null
  }
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify'])
}

export async function signRelayToken(claims: Omit<RelayClaims, 'e'>, secret: string, now = Date.now()): Promise<string> {
  const payload = b64url(enc.encode(JSON.stringify({ ...claims, e: now + RELAY_TOKEN_TTL_MS })))
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', await hmacKey(secret), enc.encode(payload)))
  return `v1.${payload}.${b64url(sig)}`
}

/** The claims, or null when the token is malformed, forged or expired. */
export async function verifyRelayToken(token: string, secret: string, now = Date.now()): Promise<RelayClaims | null> {
  const parts = token.split('.')
  if (parts.length !== 3 || parts[0] !== 'v1') return null
  const sig = fromB64url(parts[2])
  const payloadBytes = fromB64url(parts[1])
  if (!sig || !payloadBytes) return null
  const ok = await crypto.subtle.verify('HMAC', await hmacKey(secret), sig as BufferSource, enc.encode(parts[1]))
  if (!ok) return null
  let claims: RelayClaims
  try {
    claims = JSON.parse(new TextDecoder().decode(payloadBytes)) as RelayClaims
  } catch {
    return null
  }
  if (!claims || typeof claims !== 'object') return null
  if (typeof claims.s !== 'string' || typeof claims.u !== 'string') return null
  if (claims.r !== 'teacher' && claims.r !== 'student') return null
  if (typeof claims.e !== 'number' || claims.e < now) return null
  if (claims.n !== undefined && typeof claims.n !== 'string') return null
  return claims
}
