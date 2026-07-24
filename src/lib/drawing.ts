/**
 * Compact, scalable representation of a freeform note sketch.
 *
 * Stored as a JSON string in StudentNote.drawing. Strokes are vector polylines
 * (flat integer point arrays) rather than a rasterized image, so they stay
 * small, render crisply at any size, and can be re-edited (undo/erase).
 *
 * Shared between the editor (DrawingPad), the read-only preview
 * (DrawingPreview), and the API validation. Keep it dependency-free.
 */

export interface DrawingStroke {
  /** CSS color. */
  c: string
  /** Stroke width in logical px. */
  s: number
  /** Flattened points: [x0, y0, x1, y1, …] in the w×h logical space. */
  p: number[]
}

export interface DrawingData {
  /** Format version. */
  v: 1
  /** Logical width the strokes were captured at (for proportional scaling). */
  w: number
  /** Logical height. */
  h: number
  strokes: DrawingStroke[]
}

/** Serialized-length cap enforced on the API (generous for a hand sketch). */
export const MAX_DRAWING_CHARS = 300_000

export function emptyDrawing(width: number, height: number): DrawingData {
  return { v: 1, w: Math.round(width), h: Math.round(height), strokes: [] }
}

export function isEmptyDrawing(d: DrawingData | null | undefined): boolean {
  return !d || !Array.isArray(d.strokes) || d.strokes.length === 0
}

/** Parse the stored JSON string into a validated DrawingData, or null. */
export function parseDrawing(raw: string | null | undefined): DrawingData | null {
  if (!raw) return null
  try {
    const d = JSON.parse(raw) as DrawingData
    if (d?.v !== 1 || !Array.isArray(d.strokes) || typeof d.w !== 'number' || typeof d.h !== 'number') return null
    // Light structural sanity — drop anything malformed rather than throw.
    d.strokes = d.strokes.filter(
      (s) => s && typeof s.c === 'string' && typeof s.s === 'number' && Array.isArray(s.p) && s.p.length >= 2
    )
    return d
  } catch {
    return null
  }
}

/** Serialize with rounded points so the payload stays small. */
export function serializeDrawing(d: DrawingData): string {
  return JSON.stringify({
    v: 1,
    w: Math.round(d.w),
    h: Math.round(d.h),
    strokes: d.strokes.map((s) => ({ c: s.c, s: s.s, p: s.p.map((n) => Math.round(n)) })),
  })
}
