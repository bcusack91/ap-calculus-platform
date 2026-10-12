/**
 * ACT English passage markers. Authored passages mark each question's spot
 * inline (src/data/act-practice/full-length/types.ts):
 *
 *   `{{7:the underlined words}}`  — underlined portion for question 7
 *   `{{7}}`                       — a bare position (e.g. "where should sentence 3 go")
 *
 * Pure and client-safe. Two renderings:
 *  - renderActEnglishHtml: the exam runner's passage (data-act-marker spans, the
 *    current question's portion highlighted), via renderRichText;
 *  - actEnglishToRichText: plain `<sup>`/`<u>` markup that renderRichText passes
 *    through untouched, for the review page and mistake re-quiz.
 */
import { renderRichText } from '@/lib/render-rich-text'

/** `{{n:text}}` or `{{n}}`. The text may hold markdown/LaTeX but never `}}`. */
const MARKER_RE = /\{\{(\d{1,3})(?::([\s\S]*?))?\}\}/g

export type EnglishSegment =
  | { kind: 'text'; text: string }
  | { kind: 'underline'; marker: number; text: string }
  | { kind: 'position'; marker: number }

/** Split a passage into plain text, underlined portions and bare positions, in order. */
export function parseEnglishMarkers(text: string): EnglishSegment[] {
  const out: EnglishSegment[] = []
  let last = 0
  for (const m of text.matchAll(MARKER_RE)) {
    const at = m.index ?? 0
    if (at > last) out.push({ kind: 'text', text: text.slice(last, at) })
    const marker = Number(m[1])
    if (m[2] !== undefined) out.push({ kind: 'underline', marker, text: m[2] })
    else out.push({ kind: 'position', marker })
    last = at + m[0].length
  }
  if (last < text.length) out.push({ kind: 'text', text: text.slice(last) })
  return out
}

/** Every marker number in the passage (underlined or bare), in order of appearance. */
export function englishMarkerNumbers(text: string): number[] {
  return parseEnglishMarkers(text).flatMap((s) => (s.kind === 'text' ? [] : [s.marker]))
}

/** The passage with markers removed (underlined text kept): what a reader sees, unmarked. */
export function stripEnglishMarkers(text: string): string {
  return text.replace(MARKER_RE, (_m, _n, inner: string | undefined) => inner ?? '')
}

// Placeholders survive renderRichText (no markdown, math or table syntax in
// them), so markers can be swapped for HTML after it runs. The brackets are
// non-word characters, so `{{3:*Hamlet*}}` still italicizes (emphasis needs a
// non-word character before its opening `*`).
const open = (n: number) => `\u27E6ACTO${n}\u27E7`
const close = (n: number) => `\u27E6ACTC${n}\u27E7`
const pos = (n: number) => `\u27E6ACTP${n}\u27E7`

const MARK_BASE = 'act-mk rounded-sm'
const MARK_ACTIVE = 'bg-accent-subtle ring-2 ring-accent-ring dark:bg-accent-light/20'
const SUP = 'mr-0.5 select-none rounded bg-gray-200 px-1 text-[0.7em] font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-200'
const SUP_ACTIVE = 'mr-0.5 select-none rounded bg-accent px-1 text-[0.7em] font-bold text-accent-foreground'

/**
 * The runner's passage HTML: each underlined portion is
 * `<span data-act-marker="n"><sup>n</sup><u>…</u></span>` and each bare
 * position a boxed `<sup>`; the current question's marker is highlighted
 * (data-act-active). Highlighting changes classes only, never text, so
 * PassageHighlighter's character offsets stay valid as the student moves on.
 */
export function renderActEnglishHtml(text: string, activeMarker?: number | null): string {
  const tokenized = text.replace(MARKER_RE, (_m, n: string, inner: string | undefined) => {
    const k = Number(n)
    return inner === undefined ? pos(k) : `${open(k)}${inner}${close(k)}`
  })
  const html = renderRichText(tokenized)
  return html.replace(/\u27E6ACT([OCP])(\d{1,3})\u27E7/g, (_m, kind: string, n: string) => {
    const k = Number(n)
    const active = activeMarker != null && k === activeMarker
    const activeAttr = active ? ' data-act-active="true"' : ''
    if (kind === 'C') return '</u></span>'
    const sup = `<sup class="${active ? SUP_ACTIVE : SUP}" aria-label="Question ${k}">${k}</sup>`
    if (kind === 'P') return `<span data-act-marker="${k}"${activeAttr} class="${MARK_BASE}${active ? ` ${MARK_ACTIVE}` : ''}">${sup}</span>`
    return `<span data-act-marker="${k}"${activeAttr} class="${MARK_BASE}${active ? ` ${MARK_ACTIVE}` : ''}">${sup}<u class="underline decoration-2 underline-offset-2">`
  })
}

/**
 * The passage as rich text for the review page / mistake re-quiz: markers
 * become `<sup>[n]</sup><u>…</u>`, which renderRichText leaves as HTML.
 */
export function actEnglishToRichText(text: string): string {
  return text.replace(MARKER_RE, (_m, n: string, inner: string | undefined) =>
    inner === undefined ? `<sup>[${n}]</sup>` : `<sup>[${n}]</sup><u>${inner}</u>`,
  )
}
