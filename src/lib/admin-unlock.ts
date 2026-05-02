/**
 * Admin emails that get every Competitive section/topic auto-unlocked.
 * Students must still earn unlocks normally (lesson mastery, entrance/exit
 * quiz pass, diagnostic pass, teacher grant, friend challenge).
 */
export const ADMIN_FULL_UNLOCK_EMAILS = new Set<string>([
  'brendan@cusackprep.com',
])

export function isAdminFullUnlockEmail(email: string | null | undefined): boolean {
  if (!email) return false
  return ADMIN_FULL_UNLOCK_EMAILS.has(email.toLowerCase())
}
