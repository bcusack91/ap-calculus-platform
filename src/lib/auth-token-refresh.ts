/**
 * When the JWT callback should re-read the user row.
 *
 * The session token carries a copy of role / emailVerified / birthYear so
 * ordinary requests never touch the database. That copy goes stale when the
 * row changes, and the only writers of the cookie are /api/auth/session (the
 * client's useSession fetches and update()) and the sign-in callback — a
 * plain auth() call in a route handler or server component refreshes the
 * token in memory but cannot set cookies. So a refresh that is skipped here
 * is a refresh the browser may never see.
 *
 * Refresh when:
 *  - the client asked for it (update() after a profile change), or
 *  - the copy is older than REFRESH_AFTER_MS, or
 *  - the token has no birth year. That field gates the whole app (the
 *    BirthYearGate blocks every page until it is known), so a stale null is
 *    the one value worth a cheaper re-check: a user whose row still has null
 *    costs one indexed read per NULL_RECHECK_MS, and once the row is filled
 *    the token stops qualifying.
 */
export const REFRESH_AFTER_MS = 5 * 60 * 1000
export const NULL_RECHECK_MS = 30 * 1000

export function shouldRefreshFromDb(
  token: { lastRefreshed?: unknown; birthYear?: unknown },
  trigger: string | undefined,
  now = Date.now(),
): boolean {
  if (trigger === 'update') return true
  const lastRefreshed = typeof token.lastRefreshed === 'number' ? token.lastRefreshed : 0
  const age = now - lastRefreshed
  if (age > REFRESH_AFTER_MS) return true
  return token.birthYear == null && age > NULL_RECHECK_MS
}
