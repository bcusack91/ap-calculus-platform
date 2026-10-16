'use client'

/**
 * Free-response items in an attempt review (AP practice exams): the prompt,
 * what the student wrote for each part, and the rubric they scored
 * themselves against, point by point. Student text is shown as plain text
 * (never as HTML). Earned / not-earned rubric points carry an icon and a text
 * label, never colour alone.
 */

import { CheckCircle2, ChevronDown, ChevronUp, CircleDashed, MinusCircle } from 'lucide-react'
import { useState } from 'react'
import { RichTextBlock } from '@/components/MCATDiagnosticVisuals'
import type { ReviewFrqItem } from '@/lib/question-sources/types'
import { partHeading } from '@/lib/ap-practice-runner'
import { renderRichText } from '@/lib/render-rich-text'

export type AttemptReviewFrqItem = ReviewFrqItem

/** Points earned and possible over every FRQ item. */
export function frqTotals(items: readonly AttemptReviewFrqItem[]): { earned: number; possible: number; unscored: number } {
  return items.reduce(
    (t, f) => ({ earned: t.earned + f.earned, possible: t.possible + f.possible, unscored: t.unscored + (f.selfScored ? 0 : 1) }),
    { earned: 0, possible: 0, unscored: 0 },
  )
}

function FrqCard({ item, open, onToggle, responseLabel }: { item: AttemptReviewFrqItem; open: boolean; onToggle: () => void; responseLabel: string }) {
  const bodyId = `frq-review-${item.s}-${item.i}`
  const wrote = item.parts.some((p) => p.response.trim())
  return (
    <li className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={bodyId}
        className="flex w-full items-start gap-3 rounded-xl px-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
      >
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            <span className="font-semibold text-gray-700 dark:text-gray-200">{item.section ? `${item.section} · ` : ''}Q{item.number}</span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200">
              {item.earned} / {item.possible} points
            </span>
            {item.selfScored ? (
              <span className="inline-flex items-center gap-1 font-medium text-gray-500 dark:text-gray-400">
                <CheckCircle2 className="h-3 w-3" aria-hidden /> Self-scored
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                <CircleDashed className="h-3 w-3" aria-hidden /> Not scored
              </span>
            )}
            {!wrote && <span className="font-medium text-amber-700 dark:text-amber-400">No response</span>}
          </span>
          <span className="mt-1 block text-sm font-medium text-gray-800 dark:text-gray-200">{item.title}</span>
        </span>
        {open ? <ChevronUp className="mt-1 h-4 w-4 shrink-0 text-gray-400" aria-hidden /> : <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-gray-400" aria-hidden />}
      </button>
      {open && (
        <div id={bodyId} className="space-y-4 border-t border-gray-100 px-4 pb-4 pt-3 dark:border-gray-700">
          {item.prompt && (
            <RichTextBlock text={item.prompt} className="rounded-lg bg-gray-50 p-3 text-sm leading-relaxed text-gray-800 dark:bg-gray-900/40 dark:text-gray-200" />
          )}
          {item.parts.map((part, pi) => (
            <div key={pi} className="space-y-2">
              {part.question && (
                <RichTextBlock
                  text={part.label ? partHeading(part.label, part.question) : part.question}
                  className="text-sm font-semibold text-gray-900 dark:text-gray-100"
                />
              )}
              <div className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{responseLabel}</p>
                {part.response.trim() ? (
                  <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-gray-800 dark:text-gray-200">{part.response}</p>
                ) : (
                  <p className="text-sm italic text-gray-500 dark:text-gray-400">No response written.</p>
                )}
              </div>
              {part.rubric.length > 0 && (
                <ul className="space-y-1.5" aria-label={`Rubric${part.label ? ` for part (${part.label})` : ''}`}>
                  {part.rubric.map((r, ri) => (
                    <li
                      key={`${r.id}-${ri}`}
                      className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-sm ${r.earned ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'}`}
                    >
                      {r.earned ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700 dark:text-green-400" aria-hidden />
                      ) : (
                        <MinusCircle className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" aria-hidden />
                      )}
                      <span className="min-w-0 flex-1 text-gray-800 dark:text-gray-200">
                        <span className="font-semibold" dangerouslySetInnerHTML={{ __html: renderRichText(r.label) }} />
                        <span className={`ml-2 text-xs font-semibold ${r.earned ? 'text-green-700 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
                          {r.earned ? 'Earned' : 'Not earned'}
                        </span>
                        {r.description && <RichTextBlock text={r.description} className="mt-0.5 text-xs leading-relaxed text-gray-700 dark:text-gray-300" />}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {item.sampleResponse && (
            <details className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
              <summary className="cursor-pointer rounded text-sm font-semibold text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-gray-200">
                High-scoring sample response
              </summary>
              <RichTextBlock text={item.sampleResponse} className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300" />
            </details>
          )}
        </div>
      )}
    </li>
  )
}

export default function FrqReviewList({ items, studentName }: { items: readonly AttemptReviewFrqItem[]; studentName?: string }) {
  // Everything starts open: a free-response review is read, not scanned.
  const [closed, setClosed] = useState<Set<string>>(() => new Set())
  const responseLabel = studentName ? `${studentName}'s response` : 'Your response'
  return (
    <div>
      <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
        Points are {studentName ? `${studentName}'s` : 'your'} own rubric checks, made on the exam screen. Compare each response with the rubric.
      </p>
      <ul className="space-y-3">
        {items.map((f) => {
          const k = `${f.s}:${f.i}`
          return (
            <FrqCard
              key={k}
              item={f}
              open={!closed.has(k)}
              onToggle={() => setClosed((prev) => {
                const next = new Set(prev)
                if (next.has(k)) next.delete(k)
                else next.add(k)
                return next
              })}
              responseLabel={responseLabel}
            />
          )
        })}
      </ul>
    </div>
  )
}
