'use client'

import { useCallback, useEffect, useState } from 'react'

/**
 * Study-mode switcher — chooses which flashcard DECK the student is in.
 *
 * Modes: Personal (the default deck, all pre-existing progress), any class
 * they're enrolled in, or a self-created course study mode ("MCAT mode").
 * Every flashcard surface (review queue, topic sessions, lesson unlocks, due
 * counts) is scoped server-side to the active mode, so switching here
 * instantly swaps the whole deck — progress in one mode never bleeds into
 * another. Drop onto any flashcard page; `onChanged` lets the page refetch.
 */

interface ContextOption { key: string; label: string; kind: 'personal' | 'class' | 'course'; cardCount?: number }
interface CatalogCourse { slug: string; name: string }

export default function StudyModeSwitcher({ onChanged }: { onChanged?: () => void }) {
  const [active, setActive] = useState<string | null>(null)
  const [contexts, setContexts] = useState<ContextOption[]>([])
  const [catalog, setCatalog] = useState<CatalogCourse[]>([])
  const [creating, setCreating] = useState(false)
  const [busy, setBusy] = useState(false)

  const load = useCallback(() => {
    fetch('/api/study-context', { cache: 'no-store' })
      .then(r => (r.ok ? r.json() : null))
      .then(d => {
        if (!d) return
        setActive(d.active)
        setContexts(d.contexts ?? [])
        setCatalog(d.courseCatalog ?? [])
      })
      .catch(() => {})
  }, [])

  useEffect(() => { load() }, [load])

  const switchTo = async (context: string) => {
    if (!context || context === active) return
    setBusy(true)
    try {
      const r = await fetch('/api/study-context', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context }),
      })
      if (r.ok) {
        setActive(context)
        setCreating(false)
        load()
        onChanged?.()
      }
    } finally {
      setBusy(false)
    }
  }

  if (active === null) return null

  const activeOption = contexts.find(c => c.key === active)

  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <span className="text-sm text-gray-500 dark:text-gray-400">📚 Study mode:</span>
      <select
        value={creating ? '__new__' : active}
        disabled={busy}
        onChange={(e) => {
          if (e.target.value === '__new__') setCreating(true)
          else void switchTo(e.target.value)
        }}
        className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      >
        {contexts.map(c => (
          <option key={c.key} value={c.key}>
            {c.kind === 'class' ? '🏫 ' : c.kind === 'course' ? '🎯 ' : '👤 '}
            {c.label}
            {typeof c.cardCount === 'number' ? ` — ${c.cardCount} cards` : ''}
          </option>
        ))}
        <option value="__new__">＋ New course study mode…</option>
      </select>

      {creating && (
        <select
          defaultValue=""
          disabled={busy}
          onChange={(e) => { if (e.target.value) void switchTo(`course:${e.target.value}`) }}
          className="rounded-lg border border-blue-300 bg-blue-50 px-3 py-1.5 text-sm dark:border-blue-700 dark:bg-blue-900/30 dark:text-white"
        >
          <option value="" disabled>Pick a course…</option>
          {catalog.map(c => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
      )}

      {activeOption && activeOption.kind !== 'personal' && (
        <span className="text-xs text-gray-400 dark:text-gray-500">
          Cards and progress here are separate from your other modes.
        </span>
      )}
    </div>
  )
}
