'use client'

import { useCallback, useEffect, useState } from 'react'
import { Archive, ArchiveRestore, Pencil, Play, Plus } from 'lucide-react'
import { btn, card, ClipStatusBadge, field, fmtDuration, jsonFetch, label, parseDurationInput, YouTubeEmbed } from './ui'
import { NewClipForm, type AuthoringClip } from './NewClipForm'

type Filter = 'APPROVED' | 'DRAFT' | 'ARCHIVED'

/**
 * Clip library tab: every clip the instructor has added. Approved clips are
 * the reusable library (any topic, any course — the MCAT reuse path); new
 * clips stay "not yet approved" until a lesson using them is approved.
 */
export function ClipLibrary({ query }: { query: string }) {
  const [clips, setClips] = useState<AuthoringClip[] | null>(null)
  const [filter, setFilter] = useState<Filter>('APPROVED')
  const [adding, setAdding] = useState(false)
  const [playing, setPlaying] = useState<string | null>(null)
  const [editing, setEditing] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    const sep = query ? '&' : '?'
    const r = await jsonFetch<{ clips: AuthoringClip[] }>(`/api/teacher/video-lessons/clips${query}${sep}all=1`)
    if (r.ok) setClips(r.data.clips)
    else setError(r.data.error ?? 'Could not load clips')
  }, [query])
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- state is set after the fetch resolves
    void load()
  }, [load])

  const archive = async (c: AuthoringClip, restore: boolean) => {
    setError(null)
    const r = restore
      ? await jsonFetch(`/api/teacher/video-lessons/clips/${c.id}`, { method: 'PATCH', body: JSON.stringify({ restore: true }) })
      : await jsonFetch(`/api/teacher/video-lessons/clips/${c.id}`, { method: 'DELETE' })
    if (!r.ok) setError(r.data.error ?? 'Could not update the clip')
    void load()
  }

  const counts = { APPROVED: 0, DRAFT: 0, ARCHIVED: 0 } as Record<Filter, number>
  clips?.forEach((c) => { counts[c.status as Filter] = (counts[c.status as Filter] ?? 0) + 1 })
  const shown = (clips ?? []).filter((c) => c.status === filter)
  const names: Record<Filter, string> = { APPROVED: 'Approved', DRAFT: 'Not yet approved', ARCHIVED: 'Archived' }

  return (
    <div className="space-y-4">
      <div className={card}>
        {adding ? (
          <>
            <h2 className="mb-3 font-semibold text-gray-900 dark:text-white">Add a clip</h2>
            <NewClipForm query={query} onCancel={() => setAdding(false)} onCreated={() => { setAdding(false); setFilter('DRAFT'); void load() }} />
          </>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Approved clips can be reused in any of your lessons, in any course. Add them from a lesson&apos;s &ldquo;Add a clip&rdquo; panel.
            </p>
            <button type="button" className={btn.primary} onClick={() => setAdding(true)}>
              <Plus className="h-4 w-4" aria-hidden /> Add a clip
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter clips">
        {(Object.keys(names) as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition ${filter === f ? 'bg-accent text-white' : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700'}`}
          >
            {names[f]} ({counts[f]})
          </button>
        ))}
      </div>

      {error && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      {clips === null ? (
        <p className="text-sm text-gray-500">Loading…</p>
      ) : shown.length === 0 ? (
        <p className="rounded-xl border border-dashed border-gray-300 p-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">No {names[filter].toLowerCase()} clips.</p>
      ) : (
        <ul className="space-y-2">
          {shown.map((c) => (
            <li key={c.id} className={card}>
              {editing === c.id ? (
                <ClipEditRow clip={c} onDone={() => { setEditing(null); void load() }} />
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-gray-900 dark:text-white">{c.title}</p>
                      <ClipStatusBadge status={c.status} />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {fmtDuration(c.durationSec)} · in {c._count.steps} published lesson{c._count.steps === 1 ? '' : 's'}
                      {c.tags.length > 0 && ` · ${c.tags.join(', ')}`}
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <button type="button" className={btn.icon} aria-label={`Preview ${c.title}`} onClick={() => setPlaying(playing === c.id ? null : c.id)}>
                      <Play className="h-4 w-4" aria-hidden />
                    </button>
                    <button type="button" className={btn.icon} aria-label={`Edit ${c.title}`} onClick={() => setEditing(c.id)}>
                      <Pencil className="h-4 w-4" aria-hidden />
                    </button>
                    {c.status === 'ARCHIVED' ? (
                      <button type="button" className={btn.icon} aria-label={`Restore ${c.title}`} onClick={() => archive(c, true)}>
                        <ArchiveRestore className="h-4 w-4" aria-hidden />
                      </button>
                    ) : (
                      <button type="button" className={btn.icon} aria-label={`Archive ${c.title}`} onClick={() => archive(c, false)}>
                        <Archive className="h-4 w-4" aria-hidden />
                      </button>
                    )}
                  </div>
                  {playing === c.id && <div className="w-full max-w-xl"><YouTubeEmbed videoId={c.providerId} title={c.title} /></div>}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ClipEditRow({ clip, onDone }: { clip: AuthoringClip; onDone: () => void }) {
  const [title, setTitle] = useState(clip.title)
  const [duration, setDuration] = useState(fmtDuration(clip.durationSec))
  const [tags, setTags] = useState(clip.tags.join(', '))
  const [error, setError] = useState<string | null>(null)
  const save = async () => {
    const durationSec = parseDurationInput(duration)
    if (!durationSec) return setError('Enter the length as m:ss.')
    const r = await jsonFetch(`/api/teacher/video-lessons/clips/${clip.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ title, durationSec, tags: tags.split(',') }),
    })
    if (!r.ok) setError(r.data.error ?? 'Could not save')
    else onDone()
  }
  return (
    <div className="grid gap-3 sm:grid-cols-[minmax(0,2fr)_7rem_minmax(0,2fr)_auto] sm:items-end">
      <div>
        <label className={label} htmlFor={`t-${clip.id}`}>Title</label>
        <input id={`t-${clip.id}`} className={field} value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label className={label} htmlFor={`d-${clip.id}`}>Length</label>
        <input id={`d-${clip.id}`} className={field} value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <div>
        <label className={label} htmlFor={`g-${clip.id}`}>Tags</label>
        <input id={`g-${clip.id}`} className={field} value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>
      <div className="flex gap-2">
        <button type="button" className={btn.primary} onClick={save}>Save</button>
        <button type="button" className={btn.secondary} onClick={onDone}>Cancel</button>
      </div>
      {error && <p className="text-sm text-red-600 dark:text-red-400 sm:col-span-4">{error}</p>}
    </div>
  )
}
