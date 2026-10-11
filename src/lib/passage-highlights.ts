/**
 * Passage highlight ranges — character offsets into a passage's rendered text.
 *
 * Offsets count the passage's visible prose text nodes in document order and
 * SKIP everything inside KaTeX output (`.katex`), so a highlight survives
 * KaTeX markup details and never splits a formula. Ranges are half-open
 * [start, end), kept sorted and non-overlapping.
 */

export interface HighlightRange {
  start: number
  end: number
}

/** Sort + merge overlapping/adjacent ranges; drops empty or invalid ones. */
export function normalizeHighlights(ranges: readonly HighlightRange[]): HighlightRange[] {
  const valid = ranges
    .filter((r) => Number.isFinite(r.start) && Number.isFinite(r.end) && r.end > r.start && r.start >= 0)
    .map((r) => ({ start: Math.floor(r.start), end: Math.floor(r.end) }))
    .sort((a, b) => a.start - b.start)
  const out: HighlightRange[] = []
  for (const r of valid) {
    const last = out[out.length - 1]
    if (last && r.start <= last.end) last.end = Math.max(last.end, r.end)
    else out.push({ ...r })
  }
  return out
}

/** Union a new range into the set. */
export function addHighlight(ranges: readonly HighlightRange[], add: HighlightRange): HighlightRange[] {
  return normalizeHighlights([...ranges, add])
}

/** Subtract a range from the set (splitting ranges it falls inside). */
export function removeHighlight(ranges: readonly HighlightRange[], cut: HighlightRange): HighlightRange[] {
  const out: HighlightRange[] = []
  for (const r of normalizeHighlights(ranges)) {
    if (cut.end <= r.start || cut.start >= r.end) { out.push(r); continue }
    if (cut.start > r.start) out.push({ start: r.start, end: cut.start })
    if (cut.end < r.end) out.push({ start: cut.end, end: r.end })
  }
  return out
}

/** True when `probe` overlaps any highlighted range. */
export function overlapsHighlight(ranges: readonly HighlightRange[], probe: HighlightRange): boolean {
  return ranges.some((r) => probe.start < r.end && probe.end > r.start)
}

/** Compact [start, end] tuples for persistence. */
export function serializeHighlights(map: Record<string | number, HighlightRange[]>): Record<string, [number, number][]> {
  const out: Record<string, [number, number][]> = {}
  for (const [k, ranges] of Object.entries(map)) {
    if (ranges.length) out[k] = ranges.map((r) => [r.start, r.end])
  }
  return out
}

/** Inverse of serializeHighlights; tolerates corrupt input. */
export function deserializeHighlights(raw: unknown): Record<string, HighlightRange[]> {
  const out: Record<string, HighlightRange[]> = {}
  if (!raw || typeof raw !== 'object') return out
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (!Array.isArray(v)) continue
    const ranges = normalizeHighlights(
      v.filter((t): t is [number, number] => Array.isArray(t) && typeof t[0] === 'number' && typeof t[1] === 'number')
        .map(([start, end]) => ({ start, end })),
    )
    if (ranges.length) out[k] = ranges
  }
  return out
}
