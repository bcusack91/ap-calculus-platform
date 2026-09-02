/**
 * Roster CSV/line parsing shared by the import-roster API route and the
 * client-side import preview, so what the teacher previews is exactly what the
 * server will do. Accepted shapes per line:
 *   email
 *   name,email   |   email,name   |   First,Last,email
 * The email is detected as the token containing "@"; the rest becomes the name.
 */

export const MAX_ROSTER_ROWS = 300
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function sanitizeName(raw: string): string {
  // Drop control characters (codepoint < 32) via a filter so no control bytes
  // appear in source; strip angle brackets/quotes, collapse whitespace, and cap
  // length. Roster labels are teacher-entered and surface in the gradebook.
  const noControl = Array.from(raw)
    .filter((ch) => ch.charCodeAt(0) >= 32)
    .join('')
  return noControl
    .replace(/[<>"']/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60)
}

export type ParsedRosterRow = { email: string; name: string }

export function parseRoster(text: string): { rows: ParsedRosterRow[]; invalid: string[] } {
  const seen = new Set<string>()
  const rows: ParsedRosterRow[] = []
  const invalid: string[] = []

  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  for (const line of lines) {
    const tokens = line.split(/[,\t;]/).map((t) => t.trim()).filter(Boolean)
    if (tokens.length === 0) continue

    // Skip an obvious header row ("name,email" with no "@").
    const looksLikeHeader =
      !line.includes('@') && /(^|[,\t;\s])e-?mail($|[,\t;\s])/i.test(line)
    if (looksLikeHeader) continue

    const emailToken = tokens.find((t) => t.includes('@'))
    if (!emailToken) {
      invalid.push(line)
      continue
    }
    const email = emailToken.toLowerCase()
    if (!EMAIL_RE.test(email)) {
      invalid.push(line)
      continue
    }
    if (seen.has(email)) continue
    seen.add(email)

    const nameRaw = tokens.filter((t) => t !== emailToken).join(' ')
    rows.push({ email, name: sanitizeName(nameRaw) })
  }

  return { rows, invalid }
}
