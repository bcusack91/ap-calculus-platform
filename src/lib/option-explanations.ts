/**
 * Per-option explanations ("why A is wrong, why B is right"). Authored data
 * carries `optionExplanations?: string[]` aligned to the bank's ORIGINAL option
 * order; review items carry them aligned to the SHOWN order. Pure — no
 * Node-only imports, so tests and client code can use it.
 */

const norm = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase()

/**
 * A question object's authored `optionExplanations`, when present and usable:
 * an array of strings, one per option, at least one non-empty. Anything else
 * (absent, wrong length, non-strings) → undefined. Never throws.
 */
export function readOptionExplanations(question: unknown, optionCount: number): string[] | undefined {
  if (!question || typeof question !== 'object' || optionCount <= 0) return undefined
  const raw = (question as { optionExplanations?: unknown }).optionExplanations
  if (!Array.isArray(raw) || raw.length !== optionCount) return undefined
  if (!raw.every((e) => typeof e === 'string')) return undefined
  const list = raw as string[]
  return list.some((e) => e.trim()) ? list.map((e) => e.trim()) : undefined
}

/**
 * Re-align explanations written for `original` options to the `shown` order,
 * matching options by text (whitespace- and case-insensitive; duplicates are
 * consumed in order). Undefined when there is nothing to remap or any shown
 * option has no counterpart — a misaligned explanation is worse than none.
 */
export function remapOptionExplanations(
  original: readonly string[],
  explanations: readonly string[] | undefined,
  shown: readonly string[],
): string[] | undefined {
  if (!explanations || explanations.length !== original.length || shown.length !== original.length) return undefined
  const used = new Set<number>()
  const out: string[] = []
  for (const text of shown) {
    const key = norm(text)
    let hit = -1
    for (let i = 0; i < original.length; i++) {
      if (!used.has(i) && norm(original[i]) === key) {
        hit = i
        break
      }
    }
    if (hit < 0) return undefined
    used.add(hit)
    out.push(explanations[hit])
  }
  return out
}
