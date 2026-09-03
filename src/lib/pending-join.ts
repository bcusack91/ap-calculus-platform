'use client'

/**
 * Pending class-join intent, persisted client-side in a cookie.
 *
 * A student who follows a teacher's join link/QR (/join-class?code=ABC123)
 * but isn't signed in gets bounced through sign-in or sign-up — and sometimes
 * through the email-verification detour, which can land in a fresh tab where
 * the ?callbackUrl chain is gone. This cookie survives all of that, so the
 * auth pages and the verify-email page can route the student back into the
 * join flow instead of stranding them on the dashboard.
 *
 * Cleared as soon as a join succeeds (see /join-class).
 */

const COOKIE_NAME = 'mondo_pending_join'
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7 // 7 days — outlives the 24h verification-token window

/** Join codes are short alphanumerics (teacher classroom codes are ~6 chars). */
const CODE_RE = /^[A-Z0-9-]{4,10}$/

export function setPendingJoinCode(code: string): void {
  if (typeof document === 'undefined') return
  const normalized = code.trim().toUpperCase()
  if (!CODE_RE.test(normalized)) return
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(normalized)}; max-age=${MAX_AGE_SECONDS}; path=/; samesite=lax`
}

export function getPendingJoinCode(): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
  if (!match) return null
  try {
    const value = decodeURIComponent(match.slice(COOKIE_NAME.length + 1)).toUpperCase()
    return CODE_RE.test(value) ? value : null
  } catch {
    return null
  }
}

export function clearPendingJoinCode(): void {
  if (typeof document === 'undefined') return
  document.cookie = `${COOKIE_NAME}=; max-age=0; path=/; samesite=lax`
}

/** The join-flow URL for a pending code, or null when none is pending. */
export function pendingJoinUrl(): string | null {
  const code = getPendingJoinCode()
  return code ? `/join-class?code=${encodeURIComponent(code)}` : null
}
