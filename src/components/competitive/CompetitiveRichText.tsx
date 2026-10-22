'use client'

import { useEffect, useMemo, useState } from 'react'
import { preloadKatex, renderKatexSync } from '@/lib/katex-lazy'
import { renderRichText } from '@/lib/render-rich-text'
import 'katex/dist/katex.min.css'

/**
 * The one HTML renderer for competitive-mode question text (stems, options,
 * explanations) on the live 1v1 match page.
 *
 * Everything goes through the shared `renderRichText` pipeline, so markdown
 * pipe tables, `$…$` KaTeX and `**bold**` behave exactly as they do on the
 * async-challenge, team-match and teacher-lobby surfaces. Before this the
 * match page split text on `$` itself and never saw a table: a stem holding
 * `| x | 1 | 2 |` rows printed the pipes literally and a whitespace-aligned
 * data block collapsed into one jumbled line.
 *
 * One legacy shape is kept: a prompt written as bare LaTeX with no `$`
 * delimiters at all (`\frac{1}{2}`, old unit-circle items). renderRichText
 * would print that as text, so it is typeset whole, as the page always did.
 * Multi-line text and anything with a `|` never take this path — those are
 * prose or tables, not a formula.
 */
export function renderCompetitiveText(text: string): string {
  if (
    !text.includes('$') &&
    /\\[A-Za-z]/.test(text) &&
    !text.includes('\n') &&
    !text.includes('|')
  ) {
    try {
      return renderKatexSync(text, { throwOnError: false, displayMode: false })
    } catch {
      // fall through to the shared pipeline
    }
  }
  return renderRichText(text)
}

interface Props {
  text: string
  className?: string
  /** Render as an inline <span> (inside an option button) instead of a block <div>. */
  inline?: boolean
}

export function CompetitiveRichText({ text, className, inline }: Props) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let mounted = true
    preloadKatex().then(() => {
      if (mounted) setReady(true)
    })
    return () => {
      mounted = false
    }
  }, [])
  // `ready` is an intentional re-render trigger: tables and bold render at
  // once, but renderKatexSync returns raw TeX until the lazily loaded KaTeX
  // module resolves, so the memo must recompute then.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const html = useMemo(() => renderCompetitiveText(text), [text, ready])
  const Tag = inline ? 'span' : 'div'
  return (
    <Tag
      className={className ? `competitive-rich ${className}` : 'competitive-rich'}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
