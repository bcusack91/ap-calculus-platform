/**
 * Human-friendly "when is the next card due" phrasing for the spaced-repetition
 * UI. Students finishing a first pass see cards return in minutes (Anki-style
 * learning steps), so the wording stays precise at short horizons and loose at
 * long ones.
 */
export function formatTimeUntil(target: Date | string, now: Date = new Date()): string {
  const t = typeof target === 'string' ? new Date(target) : target
  const diffMs = t.getTime() - now.getTime()
  if (diffMs <= 0) return 'now'
  const mins = Math.round(diffMs / 60000)
  if (mins < 1) return 'in under a minute'
  if (mins === 1) return 'in 1 minute'
  if (mins < 60) return `in ${mins} minutes`
  const hours = Math.round(mins / 60)
  if (hours === 1) return 'in about 1 hour'
  if (hours < 24) return `in about ${hours} hours`
  // Same/next calendar day handling is approximate on purpose
  const days = Math.round(hours / 24)
  if (days <= 1) return 'tomorrow'
  return `in ${days} days`
}
