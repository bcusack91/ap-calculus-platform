import crypto from 'crypto'

/**
 * Signed unsubscribe tokens.
 *
 * Format: base64url(email) + '.' + HMAC-SHA256(email, secret) (base64url)
 *
 * Replaces the legacy unsigned base64(email) token, which let anyone
 * unsubscribe any address. Legacy tokens are detected and rejected by
 * verifyUnsubscribeToken with reason 'legacy' so the route can show a
 * friendly message.
 */

function getSecret(): string | null {
  // The codebase uses AUTH_SECRET (NextAuth v5); NEXTAUTH_SECRET kept as a fallback.
  return process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || null
}

function hmac(email: string, secret: string): Buffer {
  return crypto.createHmac('sha256', secret).update(email, 'utf8').digest()
}

/**
 * Build a signed unsubscribe token for an email address.
 * Returns null (and logs loudly) if no signing secret is configured —
 * callers should omit the unsubscribe link rather than emit a forgeable one.
 */
export function makeUnsubscribeToken(email: string): string | null {
  const secret = getSecret()
  if (!secret) {
    console.error(
      '[unsubscribe-token] AUTH_SECRET/NEXTAUTH_SECRET is not set — cannot sign unsubscribe links.'
    )
    return null
  }
  const payload = Buffer.from(email, 'utf8').toString('base64url')
  const signature = hmac(email, secret).toString('base64url')
  return `${payload}.${signature}`
}

export type UnsubscribeVerifyResult =
  | { ok: true; email: string }
  | { ok: false; reason: 'invalid' | 'legacy' }

/**
 * Verify a signed unsubscribe token.
 * - Valid signed token  → { ok: true, email }
 * - Legacy unsigned base64(email) token → { ok: false, reason: 'legacy' }
 * - Anything else / bad signature / missing secret → { ok: false, reason: 'invalid' }
 */
export function verifyUnsubscribeToken(token: string): UnsubscribeVerifyResult {
  const dotIndex = token.lastIndexOf('.')

  if (dotIndex === -1) {
    // Possibly a legacy unsigned base64(email) token — detect for a friendly message.
    try {
      const decoded = Buffer.from(token, 'base64').toString('utf8')
      if (decoded.includes('@')) {
        return { ok: false, reason: 'legacy' }
      }
    } catch {
      // fall through
    }
    return { ok: false, reason: 'invalid' }
  }

  const secret = getSecret()
  if (!secret) {
    console.error(
      '[unsubscribe-token] AUTH_SECRET/NEXTAUTH_SECRET is not set — cannot verify unsubscribe links.'
    )
    return { ok: false, reason: 'invalid' }
  }

  try {
    const payload = token.slice(0, dotIndex)
    const signature = token.slice(dotIndex + 1)
    const email = Buffer.from(payload, 'base64url').toString('utf8')
    if (!email.includes('@')) return { ok: false, reason: 'invalid' }

    const expected = hmac(email, secret)
    const provided = Buffer.from(signature, 'base64url')
    if (provided.length !== expected.length || !crypto.timingSafeEqual(provided, expected)) {
      return { ok: false, reason: 'invalid' }
    }
    return { ok: true, email }
  } catch {
    return { ok: false, reason: 'invalid' }
  }
}
