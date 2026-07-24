'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { NotebookPen, Trash2, ChevronDown, BookOpen, Brush } from 'lucide-react'
import DrawingPreview from '@/components/DrawingPreview'
import { parseDrawing } from '@/lib/drawing'

interface NoteEntry {
  topicSlug: string
  topicTitle: string
  content: string
  drawing?: string | null
  updatedAt: string
}

// Group notes into review-friendly recency buckets, most recent first.
const BUCKETS: { key: string; label: string; test: (daysAgo: number, d: Date, now: Date) => boolean }[] = [
  { key: 'today', label: 'Today', test: (_d, dt, now) => dt.toDateString() === now.toDateString() },
  { key: 'yesterday', label: 'Yesterday', test: (_d, dt, now) => { const y = new Date(now); y.setDate(now.getDate() - 1); return dt.toDateString() === y.toDateString() } },
  { key: 'week', label: 'Previous 7 days', test: (daysAgo) => daysAgo < 7 },
  { key: 'month', label: 'Previous 30 days', test: (daysAgo) => daysAgo < 30 },
  { key: 'older', label: 'Older', test: () => true },
]

function bucketFor(updatedAt: string, now: Date): string {
  const dt = new Date(updatedAt)
  const daysAgo = (now.getTime() - dt.getTime()) / (1000 * 60 * 60 * 24)
  return (BUCKETS.find((b) => b.test(daysAgo, dt, now)) ?? BUCKETS[BUCKETS.length - 1]).key
}

function formatWhen(updatedAt: string): string {
  const dt = new Date(updatedAt)
  return dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + ' · ' +
    dt.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
}

export default function NotesPage() {
  const { status: authStatus } = useSession()
  const [notes, setNotes] = useState<NoteEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    if (authStatus !== 'authenticated') { if (authStatus !== 'loading') setLoading(false); return }
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/notes')
        if (!res.ok) throw new Error('load failed')
        const data = await res.json()
        if (!cancelled) setNotes(data.notes || [])
      } catch {
        /* leave empty */
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [authStatus])

  const remove = useCallback(async (topicSlug: string) => {
    setNotes((prev) => prev.filter((n) => n.topicSlug !== topicSlug))
    try {
      await fetch(`/api/notes?topicSlug=${encodeURIComponent(topicSlug)}`, { method: 'DELETE' })
    } catch { /* optimistic; best-effort */ }
  }, [])

  const now = new Date()
  const grouped = BUCKETS.map((b) => ({
    ...b,
    items: notes.filter((n) => bucketFor(n.updatedAt, now) === b.key),
  })).filter((g) => g.items.length > 0)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            <NotebookPen className="w-6 h-6 text-accent" aria-hidden /> My Notes
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Everything you&apos;ve jotted down, newest first. Notes save automatically as you study each topic.
          </p>
        </div>

        {authStatus === 'unauthenticated' ? (
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Sign in to see the notes you&apos;ve taken across your topics.</p>
            <Link href="/auth/signin?callbackUrl=/notes" className="inline-block px-6 py-2.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover transition-colors">Sign in</Link>
          </div>
        ) : loading ? (
          <div className="flex justify-center py-16"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" /></div>
        ) : notes.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center">
            <NotebookPen className="w-10 h-10 mx-auto mb-3 text-gray-300 dark:text-gray-600" aria-hidden />
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">No notes yet</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Open any lesson and use the “My Notes” panel to start writing — they’ll show up here.</p>
            <Link href="/topics" className="inline-flex items-center gap-1.5 text-accent font-medium hover:underline"><BookOpen className="w-4 h-4" aria-hidden /> Browse topics</Link>
          </div>
        ) : (
          <div className="space-y-8">
            {grouped.map((group) => (
              <section key={group.key}>
                <h2 className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">{group.label}</h2>
                <div className="space-y-3">
                  {group.items.map((note) => {
                    const isOpen = expanded === note.topicSlug
                    const sketch = parseDrawing(note.drawing)
                    const hasText = note.content.trim().length > 0
                    return (
                      <div key={note.topicSlug} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
                        <div className="flex items-start justify-between gap-3 p-4">
                          <button onClick={() => setExpanded(isOpen ? null : note.topicSlug)} className="flex-1 min-w-0 text-left" aria-expanded={isOpen}>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-900 dark:text-white truncate">{note.topicTitle}</span>
                              <ChevronDown className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden />
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-2">
                              Updated {formatWhen(note.updatedAt)}
                              {sketch && <span className="inline-flex items-center gap-1 text-accent"><Brush className="w-3 h-3" aria-hidden /> sketch</span>}
                            </div>
                            {!isOpen && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                                {hasText ? note.content.replace(/\s+/g, ' ').trim() : sketch ? 'Hand-drawn sketch' : 'Empty note'}
                              </p>
                            )}
                          </button>
                          <button onClick={() => remove(note.topicSlug)} title="Delete note" aria-label={`Delete note for ${note.topicTitle}`} className="flex-shrink-0 grid place-items-center w-10 h-10 -mr-1 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                            <Trash2 className="w-4 h-4" aria-hidden />
                          </button>
                        </div>
                        {isOpen && (
                          <div className="px-4 pb-4">
                            {hasText && (
                              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-3 sm:p-4 text-[15px] leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words max-h-80 overflow-y-auto">
                                {note.content.trim()}
                              </div>
                            )}
                            {sketch && (
                              <div className={`rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden ${hasText ? 'mt-3' : ''}`}>
                                <DrawingPreview data={sketch} className="w-full h-auto block" />
                              </div>
                            )}
                            {!hasText && !sketch && (
                              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-3 text-[15px] text-gray-500">This note is empty.</div>
                            )}
                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                              <Link href={`/topics/${note.topicSlug}/interactive`} className="text-accent font-medium hover:underline">Open lesson</Link>
                              <Link href={`/topics/${note.topicSlug}`} className="text-accent font-medium hover:underline">Edit on topic page</Link>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
