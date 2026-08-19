'use client'

import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { escapeCurrencyMath } from '@/lib/escape-currency-math'
import { formatFlashcardContent } from '@/lib/format-flashcard-content'
import { detectCloze, mathizeClozeAnswer } from '@/lib/cloze-utils'

function InlineMarkdown({ text }: { text: string }) {
  return (
    <span className="prose prose-purple max-w-none inline [&_p]:inline [&_p]:m-0">
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
            <span key={index} className="font-bold text-green-700 bg-green-100 px-2 py-1 rounded">
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
