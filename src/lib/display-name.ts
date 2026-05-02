/**
 * Public display name — show first name + last initial only, e.g. "John S."
 * Used on leaderboard, async challenge results, and any other place where a
 * user's name is visible to other students.
 */
export function publicDisplayName(name: string | null | undefined, fallback = 'Anonymous'): string {
  if (!name) return fallback
  const trimmed = name.trim()
  if (!trimmed) return fallback
  // Treat email addresses defensively — never show the local part as a "name"
  if (trimmed.includes('@')) return fallback
  const parts = trimmed.split(/\s+/).filter(Boolean)
  if (parts.length === 1) return parts[0]
  const first = parts[0]
  const last = parts[parts.length - 1]
  const initial = (last[0] || '').toUpperCase()
  return initial ? `${first} ${initial}.` : first
}
