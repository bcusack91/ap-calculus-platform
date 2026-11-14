'use client'

import Link from 'next/link'
import { ArrowLeft, KeyRound, Lock, Printer } from 'lucide-react'

export type NoteToolbarLink = { label: string; href: string; active?: boolean }

/**
 * The screen-only bar above a note sheet: print, switch between the blank
 * sheet and its key, and jump to the other sheets of the topic. Hidden on
 * paper (`ns-screen`).
 */
export default function NoteToolbar({
  backHref,
  backLabel,
  heading,
  summary,
  links,
  keyHref,
  blankHref,
  showKey,
  keyLockedNote,
}: {
  backHref: string
  backLabel: string
  heading: string
  summary: string
  /** Other sheets (modules, live vs. video). */
  links: NoteToolbarLink[]
  /** Link to the answer key, or null when this viewer may not see it. */
  keyHref: string | null
  blankHref: string
  showKey: boolean
  keyLockedNote: string
}) {
  const chip = 'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium'
  return (
    <div className="ns-screen mx-auto mb-5 max-w-[8.5in] rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-5">
      <Link href={backHref} className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover dark:text-accent-muted">
        <ArrowLeft className="h-4 w-4" aria-hidden /> {backLabel}
      </Link>
      <div className="mt-2 flex flex-wrap items-start gap-x-4 gap-y-3">
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">{heading}</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
        <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-semibold text-white hover:bg-accent-hover">
          <Printer className="h-4 w-4" aria-hidden /> Print or save as PDF
        </button>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={l.active ? 'page' : undefined}
            className={`${chip} ${l.active ? 'border-accent bg-accent/10 text-accent dark:text-accent-muted' : 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800'}`}
          >
            {l.label}
          </Link>
        ))}
        <span className="flex-1" />
        {showKey ? (
          <Link href={blankHref} className={`${chip} border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800`}>
            Show the blank sheet
          </Link>
        ) : keyHref ? (
          <Link href={keyHref} className={`${chip} border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800`}>
            <KeyRound className="h-4 w-4" aria-hidden /> Show the answer key
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
            <Lock className="h-4 w-4" aria-hidden /> {keyLockedNote}
          </span>
        )}
      </div>
    </div>
  )
}
