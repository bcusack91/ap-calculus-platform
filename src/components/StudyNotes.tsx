'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { NotebookPen, Check, Loader2, PenLine, Brush } from 'lucide-react'
import { parseDrawing, serializeDrawing, isEmptyDrawing, type DrawingData } from '@/lib/drawing'

// The canvas editor is only needed on the Draw tab — load it on demand so it
// never weighs down topic/lesson pages for students who only type.
const DrawingPad = dynamic(() => import('@/components/DrawingPad'), { ssr: false })

/**
 * Per-topic personal study notes, persisted server-side via /api/notes so they
 * follow the student across devices. Two tabs — typed text and a freeform
 * sketch — both saved on the same note row. Auto-saves ~1s after a change (and
 * on blur / unmount). Signed-out visitors get a sign-in prompt.
 */

type Status = 'loading' | 'ready' | 'saving' | 'saved' | 'error' | 'signedout'
type Tab = 'write' | 'draw'

const MAX_CHARS = 50_000
const SAVE_DEBOUNCE_MS = 1000

export default function StudyNotes({ topicSlug }: { topicSlug: string }) {
  const [content, setContent] = useState('')
  const [drawing, setDrawing] = useState<DrawingData | null>(null)
  const [status, setStatus] = useState<Status>('loading')
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<Tab>('write')

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const contentRef = useRef('')
  const drawingSerRef = useRef<string | null>(null)
  const lastSaved = useRef<string | null>(null) // JSON snapshot of {content, drawing}
  const taRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => { contentRef.current = content }, [content])

  const snapshot = (c: string, d: string | null) => JSON.stringify({ c, d })

  const autosize = useCallback(() => {
    const el = taRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(Math.max(el.scrollHeight, 160), 520)}px`
  }, [])

  // Load the existing note (text + drawing).
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
        const draw = parseDrawing(data?.note?.drawing)
        setContent(text)
        setDrawing(draw)
        drawingSerRef.current = draw && !isEmptyDrawing(draw) ? serializeDrawing(draw) : null
        lastSaved.current = snapshot(text, drawingSerRef.current)
        setStatus('ready')
        if (text.trim() || (draw && !isEmptyDrawing(draw))) setOpen(true)
      } catch {
        if (!cancelled) setStatus('error')
      }
    })()
    return () => { cancelled = true }
  }, [topicSlug])

  const save = useCallback(async () => {
    if (status === 'signedout') return
    const key = snapshot(contentRef.current, drawingSerRef.current)
    if (key === lastSaved.current) return
    setStatus('saving')
    try {
      const res = await fetch('/api/notes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicSlug, content: contentRef.current, drawing: drawingSerRef.current }),
      })
      if (!res.ok) throw new Error('save failed')
      lastSaved.current = key
      setStatus('saved')
    } catch {
      setStatus('error')
    }
  }, [topicSlug, status])

  const scheduleSave = useCallback(() => {
    if (status === 'signedout') return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => void save(), SAVE_DEBOUNCE_MS)
  }, [save, status])

  const onChangeText = (text: string) => {
    const clipped = text.slice(0, MAX_CHARS)
    contentRef.current = clipped // immediate, so a fast type-then-navigate flush is correct
    setContent(clipped)
    scheduleSave()
  }

  const onChangeDrawing = useCallback((d: DrawingData) => {
    setDrawing(d)
    drawingSerRef.current = isEmptyDrawing(d) ? null : serializeDrawing(d)
    scheduleSave()
  }, [scheduleSave])

  useEffect(() => { if (open && tab === 'write') autosize() }, [content, open, tab, autosize])

  // On unmount (switching lesson parts / navigating), flush any unsaved edit.
  useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current)
      if (snapshot(contentRef.current, drawingSerRef.current) !== lastSaved.current) {
        fetch('/api/notes', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topicSlug, content: contentRef.current, drawing: drawingSerRef.current }),
          keepalive: true,
        }).catch(() => {})
      }
    }
  }, [topicSlug])

  const hasDrawing = drawing && !isEmptyDrawing(drawing)
  const hasAny = content.trim() || hasDrawing
  const statusLabel = { loading: '', ready: '', saving: 'Saving…', saved: 'Saved', error: 'Save failed — retrying on next edit', signedout: '' }[status]

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
          {hasAny && !open && (
            <span className="text-xs font-normal text-gray-400">
              · {content.trim() ? `${content.trim().length} chars` : ''}{content.trim() && hasDrawing ? ' + ' : ''}{hasDrawing ? 'sketch' : ''} saved
            </span>
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
              to write or sketch private notes on this topic — they’ll sync across your devices.
            </p>
          ) : (
            <>
              {/* Write / Draw tabs */}
              <div className="flex items-center gap-1 mb-3 border-b border-gray-100 dark:border-gray-700">
                <button
                  onClick={() => setTab('write')}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold -mb-px border-b-2 transition-colors ${tab === 'write' ? 'border-accent text-accent-hover dark:text-accent-muted' : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
                >
                  <PenLine className="w-4 h-4" aria-hidden /> Write
                </button>
                <button
                  onClick={() => setTab('draw')}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold -mb-px border-b-2 transition-colors ${tab === 'draw' ? 'border-accent text-accent-hover dark:text-accent-muted' : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}
                >
                  <Brush className="w-4 h-4" aria-hidden /> Draw
                  {hasDrawing && <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />}
                </button>
              </div>

              {tab === 'write' ? (
                <>
                  <textarea
                    ref={taRef}
                    value={content}
                    onChange={(e) => onChangeText(e.target.value)}
                    onBlur={() => { if (saveTimer.current) clearTimeout(saveTimer.current); void save() }}
                    disabled={status === 'loading'}
                    rows={7}
                    autoCapitalize="sentences"
                    autoCorrect="on"
                    spellCheck
                    placeholder="Write your own notes on this topic — key formulas, tricky points, reminders. Saved automatically."
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 p-3 sm:p-4 text-base leading-relaxed text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-accent focus:border-accent resize-y disabled:opacity-60"
                  />
                  <div className="mt-1 flex items-center justify-between text-xs text-gray-400">
                    <a href="/notes" className="text-accent hover:underline">View all my notes →</a>
                    <span>{content.length.toLocaleString()} / {MAX_CHARS.toLocaleString()}</span>
                  </div>
                </>
              ) : (
                <>
                  <DrawingPad initial={drawing} onChange={onChangeDrawing} />
                  <div className="mt-1 text-xs">
                    <a href="/notes" className="text-accent hover:underline">View all my notes →</a>
                  </div>
                </>
              )}
              {status === 'error' && <p className="mt-1 text-xs text-red-500">{statusLabel}</p>}
            </>
          )}
        </div>
      )}
    </section>
  )
}
