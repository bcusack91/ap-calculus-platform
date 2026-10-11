'use client'

/**
 * Exam-style passage highlighter (AAMC / Bluebook). Renders rich passage text
 * and lets the student select text and press "Highlight"; selecting (or
 * clicking) highlighted text and pressing "Remove highlight" clears it.
 *
 * Ranges are character offsets into the passage's prose text, skipping KaTeX
 * output (see src/lib/passage-highlights.ts), so they are plain data the
 * parent can persist (e.g. in an exam's resume state). The passage DOM is
 * managed imperatively — React never reconciles its children — so painting
 * <mark>s can't fight React, and nothing re-renders the passage mid-selection
 * unless the text or highlights change.
 *
 * Give it a `key` per passage so switching passages drops a half-made
 * selection.
 */

import { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from 'react'
import { Highlighter, Eraser, X } from 'lucide-react'
import { renderRichText } from '@/lib/render-rich-text'
import { preloadKatex } from '@/lib/katex-lazy'
import {
  addHighlight,
  removeHighlight,
  overlapsHighlight,
  type HighlightRange,
} from '@/lib/passage-highlights'

// Layout effect in the browser (paint before the frame), plain effect on the server.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const MARK_CLASS = 'rounded-sm bg-yellow-200 text-inherit dark:bg-yellow-400/40 dark:text-inherit'

/** Prose text nodes under `root`, in document order, excluding KaTeX output. */
function proseTextNodes(root: HTMLElement): Text[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.parentElement?.closest('.katex') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  })
  const out: Text[] = []
  for (let n = walker.nextNode(); n; n = walker.nextNode()) out.push(n as Text)
  return out
}

/** Total prose length (the offset of the passage's end). */
function proseLength(root: HTMLElement): number {
  return proseTextNodes(root).reduce((n, t) => n + t.length, 0)
}

/**
 * Convert a DOM boundary point inside `root` to a prose offset. A point inside
 * a formula snaps to the formula's edge (start → before it, end → after it).
 */
function pointToOffset(root: HTMLElement, node: Node, offset: number, edge: 'start' | 'end'): number {
  const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : (node as Element)
  const katex = el?.closest('.katex')
  if (katex && root.contains(katex) && katex.parentNode) {
    const idx = Array.prototype.indexOf.call(katex.parentNode.childNodes, katex) as number
    node = katex.parentNode
    offset = edge === 'start' ? idx : idx + 1
  }
  const point = document.createRange()
  point.setStart(node, offset)
  point.collapse(true)
  let acc = 0
  for (const t of proseTextNodes(root)) {
    if (t === node) return acc + Math.min(offset, t.length)
    // The point is not inside t, so t lies wholly before or after it.
    if (point.comparePoint(t, 0) < 0) acc += t.length
    else return acc
  }
  return acc
}

/** Wrap highlighted spans of prose text in <mark>s. */
function paint(root: HTMLElement, ranges: readonly HighlightRange[]) {
  if (!ranges.length) return
  let acc = 0
  for (const t of proseTextNodes(root)) {
    const len = t.length
    const s0 = acc
    const e0 = acc + len
    acc = e0
    const hits = ranges.filter((r) => r.start < e0 && r.end > s0)
    if (!hits.length) continue
    const frag = document.createDocumentFragment()
    const data = t.data
    let pos = 0
    for (const r of hits) {
      const a = Math.max(0, r.start - s0)
      const b = Math.min(len, r.end - s0)
      if (a > pos) frag.append(data.slice(pos, a))
      const mark = document.createElement('mark')
      mark.className = MARK_CLASS
      mark.dataset.hlStart = String(r.start)
      mark.dataset.hlEnd = String(r.end)
      mark.textContent = data.slice(a, b)
      frag.append(mark)
      pos = b
    }
    if (pos < len) frag.append(data.slice(pos))
    t.replaceWith(frag)
  }
}

export default function PassageHighlighter({
  text,
  highlights,
  onChange,
  className,
  label = 'Passage',
}: {
  /** Raw rich text (markdown emphasis + $LaTeX$), rendered with renderRichText. */
  text: string
  highlights: HighlightRange[]
  onChange: (next: HighlightRange[]) => void
  className?: string
  /** Accessible name for the passage region and toolbar. */
  label?: string
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  // KaTeX must be loaded before offsets are meaningful: before it loads, math
  // renders as raw source text, which would shift every offset after it.
  const [ready, setReady] = useState(false)
  const [pending, setPending] = useState<HighlightRange | null>(null)
  const [markTarget, setMarkTarget] = useState<HighlightRange | null>(null)

  useEffect(() => {
    let live = true
    preloadKatex().catch(() => {}).then(() => { if (live) setReady(true) })
    return () => { live = false }
  }, [])

  const html = useMemo(() => renderRichText(text), [text, ready]) // eslint-disable-line react-hooks/exhaustive-deps

  useIsoLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    root.innerHTML = html
    if (ready) paint(root, highlights)
  }, [html, highlights, ready])

  const readSelection = useCallback(() => {
    const root = rootRef.current
    if (!root || !ready) return
    const sel = typeof window !== 'undefined' ? window.getSelection() : null
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) { setPending(null); return }
    const range = sel.getRangeAt(0)
    if (!range.intersectsNode(root)) { setPending(null); return }
    // Clamp a selection that runs past the passage (into a figure, say).
    const start = root.contains(range.startContainer)
      ? pointToOffset(root, range.startContainer, range.startOffset, 'start')
      : 0
    const end = root.contains(range.endContainer)
      ? pointToOffset(root, range.endContainer, range.endOffset, 'end')
      : proseLength(root)
    if (end > start) {
      setPending({ start, end })
      setMarkTarget(null)
    } else {
      setPending(null)
    }
  }, [ready])

  useEffect(() => {
    document.addEventListener('selectionchange', readSelection)
    return () => document.removeEventListener('selectionchange', readSelection)
  }, [readSelection])

  function onPassageClick(e: React.MouseEvent) {
    const mark = (e.target as HTMLElement).closest?.('mark[data-hl-start]') as HTMLElement | null
    if (mark) {
      setMarkTarget({ start: Number(mark.dataset.hlStart), end: Number(mark.dataset.hlEnd) })
    } else {
      setMarkTarget(null)
    }
    readSelection()
  }

  const canHighlight = !!pending
  const removeTarget = pending && overlapsHighlight(highlights, pending) ? pending : markTarget
  const canRemove = !!removeTarget

  function clearSelection() {
    try { window.getSelection()?.removeAllRanges() } catch { /* noop */ }
    setPending(null)
    setMarkTarget(null)
  }
  function applyHighlight() {
    if (!pending) return
    onChange(addHighlight(highlights, pending))
    clearSelection()
  }
  function applyRemove() {
    if (!removeTarget) return
    onChange(removeHighlight(highlights, removeTarget))
    clearSelection()
  }
  function clearAll() {
    onChange([])
    clearSelection()
  }

  // Buttons keep the text selection alive: no focus steal on mouse down.
  const keepSelection = (e: React.MouseEvent) => e.preventDefault()
  const btn =
    'inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring motion-reduce:transition-none'
  const btnOn = 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700'
  const btnOff = 'cursor-not-allowed border-gray-200 text-gray-400 dark:border-gray-700 dark:text-gray-500'

  return (
    <div>
      <div role="toolbar" aria-label={`${label} highlighter`} className="mb-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onMouseDown={keepSelection}
          onClick={applyHighlight}
          aria-disabled={!canHighlight}
          className={`${btn} ${canHighlight ? 'border-yellow-400 bg-yellow-50 text-yellow-900 hover:bg-yellow-100 dark:border-yellow-500/60 dark:bg-yellow-500/10 dark:text-yellow-200' : btnOff}`}
        >
          <Highlighter className="h-3.5 w-3.5" aria-hidden="true" />
          Highlight
        </button>
        <button
          type="button"
          onMouseDown={keepSelection}
          onClick={applyRemove}
          aria-disabled={!canRemove}
          className={`${btn} ${canRemove ? btnOn : btnOff}`}
        >
          <Eraser className="h-3.5 w-3.5" aria-hidden="true" />
          Remove highlight
        </button>
        {highlights.length > 0 && (
          <button type="button" onMouseDown={keepSelection} onClick={clearAll} className={`${btn} ${btnOn}`}>
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Clear all
          </button>
        )}
        <span className="text-[11px] text-gray-500 dark:text-gray-400" aria-live="polite">
          {canHighlight ? 'Text selected' : canRemove ? 'Highlight selected' : 'Select text to highlight'}
        </span>
      </div>
      <div
        ref={rootRef}
        role="region"
        aria-label={label}
        data-testid="passage-highlighter-text"
        className={className}
        onMouseUp={readSelection}
        onKeyUp={readSelection}
        onClick={onPassageClick}
      />
    </div>
  )
}
