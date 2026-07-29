'use client'

import { useEffect, useState } from 'react'
import { COMPETITIVE_COURSE_CATEGORIES } from '@/lib/competitive-catalog'
import {
  buildMultiSlug,
  parseMultiSlug,
  isMultiSlug,
  MULTI_SLUG_MAX_TOPICS,
} from '@/lib/competitive-utils'

/**
 * Multi-topic picker for competitive duels, shared by the open-lobby create
 * dialog and the duel room.
 *
 * Selection is a list of bank slugs. One selection plays that topic directly;
 * several compose into a `multi:` slug, which generateMatchQuestions already
 * resolves by drawing from every constituent round-robin — including across
 * courses, so "SAT systems of equations + Algebra 1 quadratics" is a legal
 * match. Selections survive switching courses for exactly that reason.
 */

interface TopicOption { slug: string; title: string }
interface TopicUnit { name: string; slug: string; topics: TopicOption[] }

/** slug list -> the topicSlug value the match engine expects */
export function composeTopicSlug(selected: string[]): string {
  if (selected.length === 0) return ''
  if (selected.length === 1) return selected[0]
  return buildMultiSlug(selected)
}

/** topicSlug (plain or multi:) -> slug list, for prefilling */
export function decomposeTopicSlug(slug: string | null | undefined): string[] {
  if (!slug) return []
  return isMultiSlug(slug) ? parseMultiSlug(slug) : [slug]
}

/** Human label for a bank slug (client-side; no bank imports). */
export function topicSlugLabel(slug: string): string {
  return slug
    .replace(/^sat-skill-/, '')
    .replace(/^sat-/, 'SAT ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

/** Short display for a (possibly multi:) topicSlug, e.g. lobby listings. */
export function describeTopicSlug(slug: string | null | undefined, max = 3): string {
  const parts = decomposeTopicSlug(slug)
  if (parts.length === 0) return 'Any topic'
  const labels = parts.slice(0, max).map(topicSlugLabel)
  return parts.length > max ? `${labels.join(' · ')} +${parts.length - max}` : labels.join(' · ')
}

export default function CompetitiveTopicPicker({
  selected,
  onChange,
  accent = 'orange',
}: {
  selected: string[]
  onChange: (slugs: string[]) => void
  /** Tailwind accent family used for active chips ('orange' dialog, 'blue' room). */
  accent?: 'orange' | 'blue'
}) {
  const [course, setCourse] = useState('')
  const [units, setUnits] = useState<TopicUnit[] | null>(null)
  const [loading, setLoading] = useState(false)

  // Units reset happens in the change handler (an event); the effect only does
  // the async fetch — this repo's lint forbids synchronous setState in effects.
  useEffect(() => {
    if (!course) return
    let active = true
    fetch(`/api/competitive/course-topics?course=${encodeURIComponent(course)}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (active) { setUnits(d?.units ?? []); setLoading(false) } })
      .catch(() => { if (active) { setUnits([]); setLoading(false) } })
    return () => { active = false }
  }, [course])

  const pickCourse = (slug: string) => {
    setCourse(slug)
    setUnits(null)
    setLoading(!!slug)
  }

  const atCap = selected.length >= MULTI_SLUG_MAX_TOPICS
  const toggle = (slug: string) => {
    if (selected.includes(slug)) onChange(selected.filter((s) => s !== slug))
    else if (!atCap) onChange([...selected, slug])
  }

  const on = accent === 'orange'
    ? 'border-orange-500 bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200'
    : 'border-blue-500 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200'
  const off = 'border-gray-300 text-gray-600 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300'

  return (
    <div className="space-y-3">
      {/* Selections live above the course picker so they visibly persist while
          browsing other courses. */}
      {selected.length > 0 && (
        <div>
          <p className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
            Selected ({selected.length}/{MULTI_SLUG_MAX_TOPICS})
            {selected.length > 1 && ' — questions are mixed from all of them'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {selected.map((slug) => (
              <button
                key={slug}
                type="button"
                onClick={() => toggle(slug)}
                title="Remove"
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${on}`}
              >
                {topicSlugLabel(slug)} ✕
              </button>
            ))}
          </div>
        </div>
      )}

      <select
        value={course}
        onChange={(e) => pickCourse(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      >
        <option value="">Browse a course to add topics…</option>
        {COMPETITIVE_COURSE_CATEGORIES.map((cat) => (
          <optgroup key={cat.id} label={`${cat.icon} ${cat.label}`}>
            {cat.courses.map((c) => (
              <option key={c.slug} value={c.slug}>{c.emoji} {c.name}</option>
            ))}
          </optgroup>
        ))}
      </select>

      {course && (
        loading || units === null ? (
          <p className="text-sm text-gray-500">Loading topics…</p>
        ) : units.length === 0 ? (
          <p className="text-sm text-gray-500">No topics available for this course yet.</p>
        ) : (
          <div className="max-h-56 space-y-3 overflow-y-auto pr-1">
            {units.map((u) => (
              <div key={u.slug}>
                <p className="mb-1 text-xs font-semibold text-gray-500 dark:text-gray-400">{u.name}</p>
                <div className="flex flex-wrap gap-1.5">
                  {u.topics.map((t) => {
                    const active = selected.includes(t.slug)
                    return (
                      <button
                        key={t.slug}
                        type="button"
                        onClick={() => toggle(t.slug)}
                        disabled={!active && atCap}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition disabled:opacity-40 ${active ? on : off}`}
                      >
                        {t.title}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )
      )}
      {atCap && (
        <p className="text-xs text-amber-600 dark:text-amber-400">
          Topic limit reached ({MULTI_SLUG_MAX_TOPICS}) — remove one to add another.
        </p>
      )}
    </div>
  )
}
