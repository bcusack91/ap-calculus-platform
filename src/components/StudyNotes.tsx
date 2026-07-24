'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { NotebookPen, Check, Loader2 } from 'lucide-react'

/**
 * Per-topic personal study notes, persisted server-side via /api/notes so they
 * follow the student across devices. Loads any existing note on mount, then
 * auto-saves ~1s after typing stops (and on blur). Signed-out visitors get a
 * gentle sign-in prompt instead of a dead textarea.
 */

type Status = 'loading' | 'ready' | 'saving' | 'saved' | 'error' | 'signedout'

const MAX_CHARS = 50_000
const SAVE_DEBOUNCE_MS = 1000

export default function StudyNotes({ topicSlug }: { topicSlug: string }) {
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<Status>('loading')
  const [open, setOpen] = useState(false)
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastSaved = useRef('')
  const contentRef = useRef('')
  contentRef.current = content

  // Load the existing note.
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`/api/notes?topicSlug=${encodeURIComponent(topicSlug)}`)
        if (res.status === 401) { if (!cancelled) setStatus('signedout'); return }
        if (!res.ok) throw new Error('load failed')
        const data = await res.json()
        if (cancelled) return
        const text = data?.note?.content ?? ''
        setContent(text)
        lastSaved.current = text
        setStatus('ready')
        // Auto-open the panel if the student already has notes here.
        if (text.trim()) setOpen(true)
      } catch {
        if (!cancelled) setStatus('error')
      }
    })()
    return () => { cancelled = true }
  }, [topicSlug])

  const save = useCallback(async (text: string) => {
    if (text === lastSaved.current) return
    setStatus('saving')
    try {
      const res = await fetch('/api/notes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug, content: text }),
      })
      if (!res.ok) throw new Error('save failed')
      lastSaved.current = text
      setStatus('saved')
    } catch {
      setStatus('error')
    }
  }, [topicSlug])

  const onChange = (text: string) => {
    setContent(text.slice(0, MAX_CHARS))
    if (status === 'signedout') return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => save(text.slice(0, MAX_CHARS)), SAVE_DEBOUNCE_MS)
  }

  const onBlur = () => {
    if (saveTimer.current) clearTimeout(saveTimer.current)
    if (status !== 'signedout') void save(content)
  }

  // On unmount (e.g. switching lesson parts or navigating away), cancel the
  // debounce and flush any unsaved edit. `keepalive` lets the request finish
  // even as the component/page tears down. If signed out, content stays '' so
  // there's nothing to flush.
  useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current)
      if (contentRef.current !== lastSaved.current) {
        fetch('/api/notes', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topicSlug, content: contentRef.current }),
          keepalive: true,
        }).catch(() => {})
      }
    }
  }, [topicSlug])

  const statusLabel = {
    loading: '',
    ready: '',
    saving: 'Saving…',
    saved: 'Saved',
    error: 'Save failed — retrying on next edit',
    signedout: '',
  }[status]

  return (
    <section className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
          <NotebookPen className="w-4 h-4 text-accent" aria-hidden />
          My Notes
          {content.trim() && !open && (
            <span className="text-xs font-normal text-gray-400">· {content.trim().length} chars saved</span>
          )}
        </span>
        <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          {status === 'saving' && <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden />}
          {status === 'saved' && <Check className="w-3.5 h-3.5 text-green-500" aria-hidden />}
          {statusLabel}
          <span className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden>▾</span>
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4">
          {status === 'signedout' ? (
            <p className="text-sm text-gray-600 dark:text-gray-400 py-3">
              <a href={`/auth/signin?callbackUrl=${encodeURIComponent(typeof window !== 'undefined' ? window.location.pathname : '/')}`} className="text-accent font-medium hover:underline">Sign in</a>{' '}
              to jot down private notes on this topic — they’ll sync across your devices.
            </p>
          ) : (
            <>
              <textarea
                value={content}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                disabled={status === 'loading'}
                rows={6}
                placeholder="Write your own notes on this topic — key formulas, tricky points, reminders. Saved automatically."
                className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 p-3 text-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-accent resize-y disabled:opacity-60"
              />
              <div className="mt-1 flex items-center justify-between text-xs text-gray-400">
                <a href="/notes" className="text-accent hover:underline">View all my notes →</a>
                <span>{content.length.toLocaleString()} / {MAX_CHARS.toLocaleString()}</span>
              </div>
              {status === 'error' && <p className="mt-1 text-xs text-red-500">{statusLabel}</p>}
            </>
          )}
        </div>
      )}
    </section>
  )
}
