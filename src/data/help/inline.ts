/**
 * The help center's tiny inline markup: `[label](/path)` and `**bold**`.
 * Pure so tests can walk every link in the help content.
 */
export type InlineToken =
  | { kind: 'text'; text: string }
  | { kind: 'bold'; text: string }
  | { kind: 'link'; text: string; href: string }

const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g

export function parseInline(input: string): InlineToken[] {
  const out: InlineToken[] = []
  let last = 0
  for (const m of input.matchAll(INLINE)) {
    const at = m.index ?? 0
    if (at > last) out.push({ kind: 'text', text: input.slice(last, at) })
    if (m[1] !== undefined && m[2] !== undefined) out.push({ kind: 'link', text: m[1], href: m[2] })
    else if (m[3] !== undefined) out.push({ kind: 'bold', text: m[3] })
    last = at + m[0].length
  }
  if (last < input.length) out.push({ kind: 'text', text: input.slice(last) })
  return out
}

/** Plain text with the markup stripped (link labels kept). */
export function inlineToPlain(input: string): string {
  return parseInline(input).map((t) => t.text).join('')
}
