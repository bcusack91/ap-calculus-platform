'use client'

import { useCallback, useEffect, useState } from 'react'
import HelpLink, { HELP_ARTICLES } from '@/components/HelpLink'

/**
 * Deck switcher ("Which deck are you studying?") — chooses which flashcard
 * DECK (internally: study mode / study context) the student is in.
 *
 * Decks: Personal (the default deck, every card earned anywhere), any class
 * they're enrolled in, or a self-created course deck ("MCAT course").
 * Every flashcard surface (review queue, topic sessions, lesson unlocks, due
 * counts) is scoped server-side to the active mode, so switching here
 * instantly swaps the whole deck — progress in one mode never bleeds into
 * another. Drop onto any flashcard page; `onChanged` lets the page refetch.
 */

export interface ContextOption { key: string; label: string; kind: 'personal' | 'class' | 'course'; cardCount?: number }
interface CatalogCourse { slug: string; name: string }

/**
 * Plain-language deck name: "Personal", the class's name, or "<Course> course".
 * (The API labels are "Personal (everything)" and "<Course> (study mode)".)
 */
export function deckDisplayName(option: Pick<ContextOption, 'label' | 'kind'>): string {
  if (option.kind === 'personal') return 'Personal'
  if (option.kind === 'course') return `${option.label.replace(/\s*\(study mode\)\s*$/i, '')} course`
  return option.label
}

/** One-line description of what a deck holds. */
function deckHint(option: Pick<ContextOption, 'kind'>): string {
  if (option.kind === 'personal') return 'Your personal deck keeps every card you have earned, in every course.'
  if (option.kind === 'class') return 'Your class deck is separate: it starts fresh when you join and your personal deck keeps every card.'
  return 'This course deck only holds this course\'s cards; your personal deck keeps every card too.'
}

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
      <label htmlFor="study-deck-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        📚 Which deck are you studying?
      </label>
      <select
        id="study-deck-select"
        value={creating ? '__new__' : active}
        disabled={busy}
        onChange={(e) => {
          if (e.target.value === '__new__') setCreating(true)
          else void switchTo(e.target.value)
        }}
        className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      >
        {contexts.map(c => (
          <option key={c.key} value={c.key}>
            {c.kind === 'class' ? '🏫 ' : c.kind === 'course' ? '🎯 ' : '👤 '}
            {deckDisplayName(c)}
            {typeof c.cardCount === 'number' ? ` — ${c.cardCount} cards` : ''}
          </option>
        ))}
        <option value="__new__">＋ Start a deck for one course…</option>
      </select>

      {creating && (
        <select
          defaultValue=""
          disabled={busy}
          onChange={(e) => { if (e.target.value) void switchTo(`course:${e.target.value}`) }}
          className="rounded-lg border border-blue-300 bg-blue-50 px-3 py-1.5 text-sm text-gray-900 dark:border-blue-700 dark:bg-blue-900/30 dark:text-white"
        >
          <option value="" disabled>Which course?</option>
          {catalog.map(c => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
      )}

      {activeOption && (
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {deckHint(activeOption)}
        </span>
      )}
      <HelpLink article={HELP_ARTICLES.studyModesAndDecks} label="How decks work" />
    </div>
  )
}
