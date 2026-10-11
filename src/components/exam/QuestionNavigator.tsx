'use client'

/**
 * Exam question navigator (AAMC "Navigation" popup): one button per question
 * showing answered / unanswered / flagged / current. Every state carries an
 * icon and a text label (visible legend + the button's accessible name), never
 * color alone. Clicking a question calls `onJump(index)`.
 */

import { Check, Circle, Flag } from 'lucide-react'

export interface NavigatorItem {
  /** Stable key (e.g. "p:q"). */
  key: string
  /** Visible question number. */
  label: string
  answered: boolean
  flagged: boolean
  current: boolean
  /** Optional context for the accessible name, e.g. "Passage 2". */
  group?: string
}

export function navigatorItemLabel(item: NavigatorItem): string {
  return [
    `Question ${item.label}`,
    item.group,
    item.answered ? 'answered' : 'unanswered',
    item.flagged ? 'flagged for review' : null,
    item.current ? 'current question' : null,
  ].filter(Boolean).join(', ')
}

export default function QuestionNavigator({
  items,
  onJump,
  showFlags = true,
}: {
  items: NavigatorItem[]
  onJump: (index: number) => void
  /** Hide the flag legend where flagging isn't available (practice mode). */
  showFlags?: boolean
}) {
  const answered = items.filter((i) => i.answered).length
  const flagged = items.filter((i) => i.flagged).length
  return (
    <div>
      <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
        {answered} of {items.length} answered
        {showFlags ? ` · ${flagged} flagged` : ''}
      </p>
      <ul className="grid grid-cols-5 gap-2 sm:grid-cols-8" aria-label="Questions">
        {items.map((item, idx) => (
          <li key={item.key}>
            <button
              type="button"
              onClick={() => onJump(idx)}
              aria-label={navigatorItemLabel(item)}
              aria-current={item.current ? 'true' : undefined}
              title={navigatorItemLabel(item)}
              data-state={item.answered ? 'answered' : 'unanswered'}
              data-flagged={item.flagged ? 'true' : undefined}
              className={`relative flex h-11 w-full items-center justify-center gap-1 rounded-lg border text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring motion-reduce:transition-none ${
                item.current
                  ? 'border-accent bg-accent-subtle text-accent ring-2 ring-accent-ring dark:bg-accent-light/20 dark:text-accent-muted'
                  : item.answered
                    ? 'border-gray-300 bg-gray-50 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700/60 dark:text-gray-100 dark:hover:bg-gray-700'
                    : 'border-dashed border-gray-300 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {item.answered
                ? <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" aria-hidden="true" />
                : <Circle className="h-3 w-3 text-gray-400" aria-hidden="true" />}
              {item.label}
              {item.flagged && (
                <Flag className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-white p-0.5 text-amber-600 dark:bg-gray-900 dark:text-amber-400" fill="currentColor" aria-hidden="true" />
              )}
            </button>
          </li>
        ))}
      </ul>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400" aria-label="Legend">
        <li className="flex items-center gap-1"><Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" aria-hidden="true" /> Answered</li>
        <li className="flex items-center gap-1"><Circle className="h-3 w-3 text-gray-400" aria-hidden="true" /> Unanswered (dashed)</li>
        {showFlags && <li className="flex items-center gap-1"><Flag className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" fill="currentColor" aria-hidden="true" /> Flagged</li>}
        <li className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded border border-accent ring-2 ring-accent-ring" aria-hidden="true" /> Current (outlined)</li>
      </ul>
    </div>
  )
}
