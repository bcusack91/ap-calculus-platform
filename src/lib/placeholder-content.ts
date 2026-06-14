/**
 * Detects unfinished "placeholder" topic content. A number of topics were seeded
 * with a stub like `"<Title> content"` or `"Placeholder - will be populated…"`
 * instead of a real lesson. Rendering that stub as a lesson looks broken, so
 * callers should treat a placeholder topic as having no body (show a "coming
 * soon" state rather than the stub).
 */
export function isPlaceholderContent(text: string | null | undefined): boolean {
  if (!text) return true
  const c = text.trim()
  if (!c) return true
  // "Placeholder - will be populated by expansion script", etc.
  if (/^placeholder\b/i.test(c)) return true
  // Short single-line stubs of the form "<Some Title> content" with no real body
  // (no markdown headings, math, lists, or tables — i.e. no actual lesson).
  if (c.length < 80 && /\bcontent$/i.test(c) && !/[#$|\n]/.test(c)) return true
  return false
}
