'use client'

import { useEffect, useMemo, useState } from 'react'
import { preloadKatex } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import 'katex/dist/katex.min.css'

interface MathTextProps {
  text: string
  className?: string
  /** Render as an inline <span> instead of a block <div> (e.g. inside option buttons). */
  inline?: boolean
}

/**
 * Renders a string containing inline ($...$) or display ($$...$$) LaTeX —
 * plus markdown pipe tables — as KaTeX HTML via the shared renderRichText
 * pipeline. KaTeX is lazily loaded; the raw text shows as a fallback until
 * the module is ready, then the component re-renders with real math.
 *
 * Same pattern as ExitQuiz's renderLatex and the MCAT daily question page.
 */
export function MathText({ text, className, inline }: MathTextProps) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let mounted = true
    preloadKatex().then(() => { if (mounted) setReady(true) })
    return () => { mounted = false }
  }, [])
  // `ready` is an intentional re-render trigger: renderRichText falls back to
  // raw text until the lazily loaded KaTeX module resolves, so this memo must
  // recompute once it's ready even though `ready` isn't read in the callback.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const html = useMemo(() => renderRichText(text), [text, ready])
  const Tag = inline ? 'span' : 'div'
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
