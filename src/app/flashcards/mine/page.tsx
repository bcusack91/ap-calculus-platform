'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Layers, Pencil, Plus, Search, Trash2, PlayCircle, AlertCircle } from 'lucide-react'
import UserFlashcardEditor, { FIELD_CLASS, type CourseOption, type UserFlashcardDraft } from '@/components/UserFlashcardEditor'
import { formatTimeUntil } from '@/lib/format-due-time'
import { signInUrl, signUpUrl } from '@/lib/auth-redirect'
import { USER_CARD_CAP } from '@/lib/user-flashcard-ids'

interface MyCard {
  id: string
  front: string
  back: string
  hint: string | null
  courseSlug: string
  topicSlug: string
  origin: string
  nextReview: string
  reviewCount: number
  createdAt: string
}

interface ListResponse {
  cards: MyCard[]
  total: number
  due: number
  cap: number
}

const FOCUS = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring'

function prettifySlug(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
}

async function errorFrom(res: Response, fallback: string): Promise<string> {
  const data = await res.json().catch(() => null)
  return (data && typeof data.error === 'string' && data.error) || fallback
}

export default function MyFlashcardsPage() {
  const { status } = useSession()
  const [data, setData] = useState<ListResponse | null>(null)
  const [courses, setCourses] = useState<CourseOption[]>([])
  const [loadError, setLoadError] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [courseFilter, setCourseFilter] = useState('all')
  const [creating, setCreating] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const [deleteError, setDeleteError] = useState<string | null>(null)

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/user-flashcards')
      if (!res.ok) throw new Error(await errorFrom(res, 'Could not load your flashcards.'))
      setData(await res.json())
      setLoadError(null)
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : 'Could not load your flashcards.')
    }
  }, [])

  useEffect(() => {
    if (status !== 'authenticated') return
    load()
    fetch('/api/courses')
      .then((r) => (r.ok ? r.json() : []))
      .then((rows: unknown) => {
        if (Array.isArray(rows)) setCourses(rows.filter((c) => c && typeof c.slug === 'string').map((c) => ({ slug: c.slug, name: c.name ?? prettifySlug(c.slug) })))
      })
      .catch(() => {})
  }, [status, load])

  const courseName = useCallback(
    (slug: string) => courses.find((c) => c.slug === slug)?.name ?? prettifySlug(slug),
    [courses],
  )

  // Courses that actually have cards, for the filter.
  const usedCourses = useMemo(() => {
    const slugs = new Set((data?.cards ?? []).map((c) => c.courseSlug))
    return [...slugs].sort((a, b) => (a === '' ? 1 : b === '' ? -1 : courseName(a).localeCompare(courseName(b))))
  }, [data, courseName])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return (data?.cards ?? []).filter((c) => {
      if (courseFilter !== 'all' && c.courseSlug !== courseFilter) return false
      if (!q) return true
      return c.front.toLowerCase().includes(q) || c.back.toLowerCase().includes(q) || (c.hint ?? '').toLowerCase().includes(q)
    })
  }, [data, query, courseFilter])

  async function create(draft: UserFlashcardDraft): Promise<string | null> {
    const res = await fetch('/api/user-flashcards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        front: draft.front,
        back: draft.back,
        hint: draft.hint || undefined,
        courseSlug: draft.courseSlug || undefined,
        origin: 'manual',
      }),
    }).catch(() => null)
    if (!res) return 'You appear to be offline. Try again once you’re connected.'
    if (!res.ok) return errorFrom(res, 'Could not save the card.')
    setCreating(false)
    await load()
    return null
  }

  async function update(id: string, draft: UserFlashcardDraft): Promise<string | null> {
    const res = await fetch(`/api/user-flashcards/${encodeURIComponent(id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ front: draft.front, back: draft.back, hint: draft.hint || null, courseSlug: draft.courseSlug }),
    }).catch(() => null)
    if (!res) return 'You appear to be offline. Try again once you’re connected.'
    if (!res.ok) return errorFrom(res, 'Could not save your changes.')
    setEditingId(null)
    await load()
    return null
  }

  async function remove(id: string) {
    setDeleteError(null)
    const res = await fetch(`/api/user-flashcards/${encodeURIComponent(id)}`, { method: 'DELETE' }).catch(() => null)
    if (!res || !res.ok) {
      setDeleteError(res ? await errorFrom(res, 'Could not delete the card.') : 'You appear to be offline.')
      return
    }
    setConfirmDeleteId(null)
    await load()
  }

  if (status === 'loading' || (status === 'authenticated' && !data && !loadError)) {
    return (
      <div className="container max-w-3xl py-10 px-4">
        <div className="h-8 w-48 rounded bg-gray-200 dark:bg-gray-700 animate-pulse mb-6" />
        <div className="space-y-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-24 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="container max-w-2xl py-10 px-4 text-center">
        <Layers className="mx-auto mb-4 h-10 w-10 text-accent" aria-hidden />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">Make your own flashcards</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Create a free account to write your own cards and review them with smart spaced repetition, right alongside the site&apos;s decks.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={signUpUrl({ callbackUrl: '/flashcards/mine', reason: 'generic' })} className={`px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent-hover ${FOCUS}`}>
            Create a free account
          </Link>
          <Link href={signInUrl({ callbackUrl: '/flashcards/mine' })} className={`px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 ${FOCUS}`}>
            Sign in
          </Link>
        </div>
      </div>
    )
  }

  const total = data?.total ?? 0
  const due = data?.due ?? 0
  const cap = data?.cap ?? USER_CARD_CAP
  const atCap = total >= cap
  const now = new Date()

  return (
    <div className="container max-w-3xl py-8 sm:py-10 px-4">
      <Link href="/flashcards/review" className={`text-sm text-accent-dark dark:text-accent-muted hover:underline rounded ${FOCUS}`}>
        ← Review dashboard
      </Link>
      <div className="mt-3 mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            <Layers className="inline w-6 h-6 mr-2 -mt-1 text-accent" aria-hidden />
            My flashcards
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {total.toLocaleString()} / {cap.toLocaleString()} cards · reviewed with spaced repetition in your normal session
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {due > 0 ? (
            <Link
              href="/flashcards/review/start?mine=1"
              className={`inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover ${FOCUS} focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900`}
            >
              <PlayCircle className="h-4 w-4" aria-hidden />
              Review my cards ({due.toLocaleString()} due)
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
              <PlayCircle className="h-4 w-4" aria-hidden />
              No cards due right now
            </span>
          )}
          {!creating && (
            <button
              type="button"
              onClick={() => { setCreating(true); setEditingId(null) }}
              disabled={atCap}
              className={`inline-flex items-center gap-1.5 rounded-lg border border-accent-light dark:border-accent/40 bg-accent-subtle dark:bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-dark dark:text-accent-muted hover:bg-accent-light/60 dark:hover:bg-accent/20 disabled:opacity-50 disabled:cursor-not-allowed ${FOCUS}`}
            >
              <Plus className="h-4 w-4" aria-hidden />
              New card
            </button>
          )}
        </div>
      </div>

      {atCap && (
        <p className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-600/60 dark:bg-amber-900/20 dark:text-amber-300">
          You&apos;ve reached the {cap.toLocaleString()}-card limit. Delete cards you no longer need to make room.
        </p>
      )}

      {loadError && (
        <p role="alert" className="mb-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>
            {loadError}{' '}
            <button type="button" onClick={load} className={`underline font-semibold rounded ${FOCUS}`}>Retry</button>
          </span>
        </p>
      )}

      {creating && (
        <section aria-label="New flashcard" className="mb-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 sm:p-5">
          <h2 className="mb-3 text-base font-semibold text-gray-900 dark:text-gray-100">New card</h2>
          <UserFlashcardEditor courses={courses} onSave={create} onCancel={() => setCreating(false)} autoFocus />
        </section>
      )}

      {total > 0 && (
        <div className="mb-4 flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden />
            <label htmlFor="mine-search" className="sr-only">Search your cards</label>
            <input
              id="mine-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your cards"
              className={`${FIELD_CLASS} pl-9`}
            />
          </div>
          <label htmlFor="mine-course" className="sr-only">Filter by course</label>
          <select
            id="mine-course"
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className={`${FIELD_CLASS} sm:w-56`}
          >
            <option value="all">All courses</option>
            {usedCourses.map((slug) => (
              <option key={slug || 'none'} value={slug}>
                {slug ? courseName(slug) : 'No course'}
              </option>
            ))}
          </select>
        </div>
      )}

      {deleteError && (
        <p role="alert" className="mb-3 text-sm text-red-700 dark:text-red-300">{deleteError}</p>
      )}

      {total === 0 && !creating && !loadError ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
          <Layers className="mx-auto mb-3 h-8 w-8 text-gray-400" aria-hidden />
          <p className="font-semibold text-gray-900 dark:text-gray-100">No cards yet</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Write a card above, or tap &ldquo;Make a flashcard&rdquo; on a question you missed. Your cards show up in your normal review session.
          </p>
        </div>
      ) : (
        <>
          {total > 0 && visible.length === 0 && (
            <p className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">No cards match your search.</p>
          )}
          <ul className="space-y-3">
            {visible.map((card) => {
              const isDue = new Date(card.nextReview).getTime() <= now.getTime()
              return (
                <li key={card.id} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
                  {editingId === card.id ? (
                    <UserFlashcardEditor
                      initial={{ front: card.front, back: card.back, hint: card.hint ?? '', courseSlug: card.courseSlug }}
                      courses={courses}
                      submitLabel="Save changes"
                      onSave={(d) => update(card.id, d)}
                      onCancel={() => setEditingId(null)}
                      autoFocus
                    />
                  ) : (
                    <>
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        {card.courseSlug && (
                          <span className="rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300">
                            {courseName(card.courseSlug)}
                          </span>
                        )}
                        {card.origin === 'mistake' && (
                          <span className="rounded-full bg-accent-subtle dark:bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent-dark dark:text-accent-muted">
                            From a missed question
                          </span>
                        )}
                        <span className={`text-xs ${isDue ? 'font-semibold text-green-700 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
                          {card.reviewCount === 0 ? 'New' : isDue ? 'Due now' : `Due ${formatTimeUntil(card.nextReview, now)}`}
                        </span>
                      </div>
                      <p className="whitespace-pre-wrap break-words text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-4">{card.front}</p>
                      <p className="mt-1.5 whitespace-pre-wrap break-words text-sm text-gray-600 dark:text-gray-400 line-clamp-4">{card.back}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {confirmDeleteId === card.id ? (
                          <>
                            <span className="text-sm text-gray-700 dark:text-gray-300">Delete this card?</span>
                            <button type="button" onClick={() => remove(card.id)} className={`rounded-lg bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700 ${FOCUS}`}>
                              Delete
                            </button>
                            <button type="button" onClick={() => setConfirmDeleteId(null)} className={`rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 ${FOCUS}`}>
                              Keep
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => { setEditingId(card.id); setCreating(false); setConfirmDeleteId(null) }}
                              className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${FOCUS}`}
                            >
                              <Pencil className="h-3.5 w-3.5" aria-hidden /> Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => { setConfirmDeleteId(card.id); setEditingId(null) }}
                              className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 ${FOCUS}`}
                            >
                              <Trash2 className="h-3.5 w-3.5" aria-hidden /> Delete
                            </button>
                          </>
                        )}
                      </div>
                    </>
                  )}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}
