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

/**
 * Cloze-aware text for ReactMarkdown/KaTeX surfaces. Hidden deletions render
 * as constant-width blanks (length must not telegraph the answer); revealed
 * deletions render highlighted THROUGH the math pipeline, since a deletion may
 * hold LaTeX. Falls back to plain markdown for non-cloze text, so it is safe
 * to use unconditionally.
 */
export function ClozeText({ text, revealed }: { text: string; revealed: boolean }) {
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
        if (revealed) {
          return (
            <span key={index} className="font-bold text-green-700 bg-green-100 dark:text-green-200 dark:bg-green-900/50 px-2 py-1 rounded">
              <InlineMarkdown text={mathizeClozeAnswer(part.text)} />
            </span>
          )
        }
        return (
          <span
            key={index}
            className="inline-block border-b-2 border-dashed border-accent-muted mx-1 align-baseline"
            style={{ minWidth: '90px', height: '1.5rem' }}
          />
        )
      })}
    </>
  )
}
