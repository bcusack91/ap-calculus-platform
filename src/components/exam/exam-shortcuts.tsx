'use client'

/**
 * Real-exam keyboard shortcuts (AAMC MCAT interface): Alt+N next, Alt+P
 * previous, Alt+F flag for review, Alt+V navigator. Matched on `event.code`
 * so macOS Option+letter (which types "˜", "π", …) still works, and never
 * while the student is typing in a field.
 */

import { useState } from 'react'
import { Keyboard } from 'lucide-react'

export type ExamShortcut = 'next' | 'prev' | 'flag' | 'navigator'

export const EXAM_SHORTCUTS: { action: ExamShortcut; keys: string; label: string }[] = [
  { action: 'next', keys: 'Alt+N', label: 'Next question' },
  { action: 'prev', keys: 'Alt+P', label: 'Previous question' },
  { action: 'flag', keys: 'Alt+F', label: 'Flag / unflag the current question' },
  { action: 'navigator', keys: 'Alt+V', label: 'Open / close the navigator' },
]

const CODE_TO_ACTION: Record<string, ExamShortcut> = {
  KeyN: 'next',
  KeyP: 'prev',
  KeyF: 'flag',
  KeyV: 'navigator',
}

/** True when keystrokes belong to a text field (or other editable control). */
export function isTypingTarget(target: EventTarget | null): boolean {
  if (!target || !(target instanceof HTMLElement)) return false
  if (target.isContentEditable) return true
  const tag = target.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT'
}

/** The exam action for a keydown, or null. */
export function examShortcutFor(e: Pick<KeyboardEvent, 'altKey' | 'ctrlKey' | 'metaKey' | 'shiftKey' | 'code' | 'target' | 'repeat'>): ExamShortcut | null {
  if (!e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat) return null
  if (isTypingTarget(e.target)) return null
  return CODE_TO_ACTION[e.code] ?? null
}

/** Small disclosure listing the shortcuts. */
export function ExamShortcutsHelp({ actions }: { actions?: ExamShortcut[] }) {
  const [open, setOpen] = useState(false)
  const list = actions ? EXAM_SHORTCUTS.filter((s) => actions.includes(s.action)) : EXAM_SHORTCUTS
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="exam-shortcuts-panel"
        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        <Keyboard className="h-3.5 w-3.5" aria-hidden="true" />
        Shortcuts
      </button>
      {open && (
        <div
          id="exam-shortcuts-panel"
          className="absolute right-0 z-20 mt-2 w-64 rounded-xl border border-gray-200 bg-white p-3 text-xs shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <p className="mb-2 font-semibold text-gray-800 dark:text-gray-100">Keyboard shortcuts</p>
          <dl className="space-y-1.5">
            {list.map((s) => (
              <div key={s.action} className="flex items-center justify-between gap-2">
                <dt className="text-gray-600 dark:text-gray-300">{s.label}</dt>
                <dd>
                  <kbd className="rounded border border-gray-300 bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] text-gray-800 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200">{s.keys}</kbd>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400">On a Mac, Alt is the Option key.</p>
        </div>
      )}
    </div>
  )
}
