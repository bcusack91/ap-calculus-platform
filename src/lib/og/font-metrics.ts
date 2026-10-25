/**
 * Minimal TrueType metrics reader for share-card text fitting.
 *
 * Satori wraps text itself but gives us no way to ask "how many lines will
 * this take?", so the card measures titles with the real advance widths from
 * the same TTF it renders with (cmap + hmtx, no kerning — kerning only
 * narrows text, so the estimate errs on the safe side).
 */

export interface FontMetrics {
  /** Width in px of `text` at `fontSize` with `letterSpacing` px per glyph. */
  measure(text: string, fontSize: number, letterSpacing?: number): number
}

export function parseFontMetrics(buf: ArrayBuffer | Uint8Array): FontMetrics {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf)
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const numTables = view.getUint16(4)
  const tables: Record<string, number> = {}
  for (let i = 0; i < numTables; i++) {
    const rec = 12 + i * 16
    const tag = String.fromCharCode(...bytes.subarray(rec, rec + 4))
    tables[tag] = view.getUint32(rec + 8)
  }
  for (const t of ['head', 'hhea', 'hmtx', 'cmap']) {
    if (tables[t] === undefined) throw new Error(`font is missing the ${t} table`)
  }

  const unitsPerEm = view.getUint16(tables.head + 18)
  const numHMetrics = view.getUint16(tables.hhea + 34)
  const advanceOf = (glyph: number) =>
    view.getUint16(tables.hmtx + 4 * Math.min(glyph, numHMetrics - 1))

  // Pick a Unicode cmap subtable: format 12 (full range) beats format 4 (BMP).
  const cmap = tables.cmap
  let fmt4 = -1
  let fmt12 = -1
  const n = view.getUint16(cmap + 2)
  for (let i = 0; i < n; i++) {
    const platform = view.getUint16(cmap + 4 + i * 8)
    const encoding = view.getUint16(cmap + 6 + i * 8)
    const off = cmap + view.getUint32(cmap + 8 + i * 8)
    const format = view.getUint16(off)
    const unicode = platform === 0 || (platform === 3 && (encoding === 1 || encoding === 10))
    if (!unicode) continue
    if (format === 12 && fmt12 < 0) fmt12 = off
    if (format === 4 && fmt4 < 0) fmt4 = off
  }

  const glyphFor = (cp: number): number => {
    if (fmt12 >= 0) {
      const groups = view.getUint32(fmt12 + 12)
      for (let g = 0; g < groups; g++) {
        const base = fmt12 + 16 + g * 12
        const start = view.getUint32(base)
        const end = view.getUint32(base + 4)
        if (cp >= start && cp <= end) return view.getUint32(base + 8) + (cp - start)
      }
      return 0
    }
    if (fmt4 < 0 || cp > 0xffff) return 0
    const segX2 = view.getUint16(fmt4 + 6)
    const ends = fmt4 + 14
    const starts = ends + segX2 + 2
    const deltas = starts + segX2
    const ranges = deltas + segX2
    for (let s = 0; s < segX2; s += 2) {
      if (cp > view.getUint16(ends + s)) continue
      const start = view.getUint16(starts + s)
      if (cp < start) return 0
      const delta = view.getInt16(deltas + s)
      const rangeOffset = view.getUint16(ranges + s)
      if (rangeOffset === 0) return (cp + delta) & 0xffff
      const glyphAddr = ranges + s + rangeOffset + 2 * (cp - start)
      const glyph = view.getUint16(glyphAddr)
      return glyph === 0 ? 0 : (glyph + delta) & 0xffff
    }
    return 0
  }

  const cache = new Map<number, number>()
  const advance = (cp: number): number => {
    let a = cache.get(cp)
    if (a === undefined) {
      const glyph = glyphFor(cp)
      // Glyphs the font lacks (emoji, rare symbols) fall back elsewhere; budget
      // them as a full em so fitting stays conservative.
      a = glyph === 0 ? unitsPerEm : advanceOf(glyph)
      cache.set(cp, a)
    }
    return a
  }

  return {
    measure(text, fontSize, letterSpacing = 0) {
      let units = 0
      let count = 0
      for (const ch of text) {
        const cp = ch.codePointAt(0)!
        if (cp === 0xfe0f || cp === 0x200d) continue // emoji selectors / joiners
        units += advance(cp)
        count++
      }
      return (units / unitsPerEm) * fontSize + letterSpacing * Math.max(0, count - 1)
    },
  }
}

/** Greedy word wrap; returns the lines Satori would roughly produce. */
export function wrapLines(
  text: string,
  maxWidth: number,
  width: (s: string) => number,
): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let line = ''
  for (const w of words) {
    const next = line ? `${line} ${w}` : w
    if (!line || width(next) <= maxWidth) {
      line = next
    } else {
      lines.push(line)
      line = w
    }
  }
  if (line) lines.push(line)
  return lines
}
