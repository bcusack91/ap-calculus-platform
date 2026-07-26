/**
 * Admin emails that get every Competitive section/topic auto-unlocked.
 *
 * Sourced from the ADMIN_UNLOCK_EMAILS env var (comma-separated) so no personal
 * address is hardcoded in the repo. Falls back to the studymondo.com owner
 * address if unset, because an empty allowlist would silently remove the
 * owner's admin unlock — set the env var in Vercel and this fallback is inert.
 */
export const ADMIN_FULL_UNLOCK_EMAILS = new Set<string>(
  (process.env.ADMIN_UNLOCK_EMAILS ?? 'brendan@studymondo.com')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
)

/**
 * When true, EVERY signed-in user has Competitive Mode fully unlocked
 * (every course, every topic) regardless of lesson/quiz progress.
 * Set to false to revert to the earned-unlock flow for students.
 */
export const COMPETITIVE_UNLOCKED_FOR_ALL = true

export function isAdminFullUnlockEmail(email: string | null | undefined): boolean {
  if (!email) return false
  return ADMIN_FULL_UNLOCK_EMAILS.has(email.toLowerCase())
}

/**
 * Returns true if Competitive Mode should be fully unlocked for the given
 * user (admin allowlist OR the global "unlocked for all" flag).
 */
export function isCompetitiveFullUnlock(email: string | null | undefined): boolean {
  if (COMPETITIVE_UNLOCKED_FOR_ALL) return true
  return isAdminFullUnlockEmail(email)
}
