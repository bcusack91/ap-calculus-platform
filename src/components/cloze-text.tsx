'use client'

import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import { formatFlashcardContent } from '@/lib/format-flashcard-content'
import { detectCloze, mathizeClozeAnswer } from '@/lib/cloze-utils'

// `prose` sets its own text color (slate-700), which beats the parent's
// text-foreground. In dark mode that left cloze sentences dark gray on dark
// cards (1.85:1), so dark mode inverts the typography colors and uses the
// near-white foreground token, matching the other flashcard text. Light mode
// is unchanged.
function InlineMarkdown({ text }: { text: string }) {
  return (
    <span className="prose prose-purple dark:prose-invert dark:text-foreground max-w-none inline [&_p]:inline [&_p]:m-0">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {escapeCurrencyMath(formatFlashcardContent(text))}
      </ReactMarkdown>
    </span>
  )
}

interface ClozeTextProps {
  text: string
  /** Show every deletion (answer side). */
  revealed: boolean
  /**
   * Progressive reveal: deletions whose `clozeIndex` is in this set render as
   * answers while the rest stay blank. Redundant when `revealed` is true.
   */
  revealedIndexes?: ReadonlySet<number>
  /**
   * The deletion group the student is recalling right now — its blanks get a
   * solid accent underline so a multi-blank card shows which one is up.
   */
  activeIndex?: number
}

/**
 * Cloze-aware text for ReactMarkdown/KaTeX surfaces. Hidden deletions render
 * as constant-width blanks (length must not telegraph the answer); revealed
 * deletions render highlighted THROUGH the math pipeline, since a deletion may
 * hold LaTeX. Falls back to plain markdown for non-cloze text, so it is safe
 * to use unconditionally.
 */
export function ClozeText({ text, revealed, revealedIndexes, activeIndex }: ClozeTextProps) {
  const clozeData = detectCloze(text)
  if (!clozeData.isCloze || !clozeData.parts) {
    return <InlineMarkdown text={text} />
  }
  return (
    <>
      {clozeData.parts.map((part, index) => {
        if (!part.isCloze) {
          return <InlineMarkdown key={index} text={part.text} />
        }
        const isShown =
          revealed || (part.clozeIndex !== undefined && revealedIndexes?.has(part.clozeIndex) === true)
        if (isShown) {
          return (
            <span
              key={index}
              data-cloze="revealed"
              data-cloze-index={part.clozeIndex}
              className="font-bold text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900/50 px-2 py-1 rounded"
            >
              <InlineMarkdown text={mathizeClozeAnswer(part.text)} />
            </span>
          )
        }
        const isActive = part.clozeIndex !== undefined && part.clozeIndex === activeIndex
        return (
          <span
            key={index}
            data-cloze="hidden"
            data-cloze-index={part.clozeIndex}
            data-cloze-active={isActive || undefined}
            className={`inline-block border-b-2 mx-1 align-baseline ${
              isActive ? 'border-solid border-accent bg-accent/10 rounded-t' : 'border-dashed border-accent-muted'
            }`}
            style={{ minWidth: '90px', height: '1.5rem' }}
          />
        )
      })}
    </>
  )
}
