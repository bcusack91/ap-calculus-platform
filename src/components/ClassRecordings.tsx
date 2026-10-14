'use client'

import { useCallback, useEffect, useState } from 'react'
import { PlayCircle, Trash2, Video } from 'lucide-react'

/**
 * Lesson recordings for a class (GET/POST/DELETE /api/teacher/classrooms/[id]/recordings).
 * Teachers post a title + YouTube link (record in a live session, upload the
 * file to YouTube as unlisted); students watch them embedded.
 */

interface Recording { id: string; title: string; videoId: string; createdAt: string }

const fmtDate = (iso: string) => new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })

export default function ClassRecordings({
  classroomId,
  isTeacher,
  hideWhenEmpty = false,
  classroomName,
}: {
  classroomId: string
  isTeacher: boolean
  /** Render nothing when there are none (student surfaces). */
  hideWhenEmpty?: boolean
  classroomName?: string
}) {
  const [recordings, setRecordings] = useState<Recording[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [playing, setPlaying] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const load = useCallback(() => {
    fetch(`/api/teacher/classrooms/${classroomId}/recordings`, { cache: 'no-store' })
      .then(async (r) => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load recordings')
        setRecordings(d.recordings ?? [])
        setError(null)
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Could not load recordings'))
  }, [classroomId])

  useEffect(() => { load() }, [load])

  const post = async () => {
    setSaving(true)
    setFormError(null)
    try {
      const r = await fetch(`/api/teacher/classrooms/${classroomId}/recordings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, url }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) {
        setFormError(d.error || 'Could not add the recording')
        return
      }
      setRecordings((prev) => [d.recording, ...(prev ?? [])])
      setTitle('')
      setUrl('')
    } finally {
      setSaving(false)
    }
  }

  const remove = async (rec: Recording) => {
    if (!confirm(`Remove "${rec.title}" from this class? The video stays on YouTube.`)) return
    const r = await fetch(`/api/teacher/classrooms/${classroomId}/recordings?recordingId=${encodeURIComponent(rec.id)}`, { method: 'DELETE' })
    if (r.ok) setRecordings((prev) => (prev ?? []).filter((x) => x.id !== rec.id))
  }

  if (hideWhenEmpty && (!recordings || recordings.length === 0)) return null

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
        <Video className="h-5 w-5 text-accent" aria-hidden />
        Lesson recordings{classroomName ? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">· {classroomName}</span> : null}
      </h3>

      {isTeacher && (
        <div className="mt-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-900/40">
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            Record in a live session (<span className="font-medium">Record lesson</span>, next to End session). The video saves to your
            computer: upload it to YouTube as <span className="font-medium">Unlisted</span>, then paste the link here.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              id={`rec-title-${classroomId}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={200}
              placeholder="Title, e.g. Thermodynamics, Oct 14"
              aria-label="Recording title"
              className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <input
              id={`rec-url-${classroomId}`}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="YouTube link"
              aria-label="YouTube link"
              className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={() => void post()}
              disabled={saving || !title.trim() || !url.trim()}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:bg-accent-hover disabled:opacity-50"
            >
              {saving ? 'Adding…' : 'Add recording'}
            </button>
          </div>
          {formError && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{formError}</p>}
        </div>
      )}

      {error ? (
        <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>
      ) : !recordings ? (
        <div className="mt-3 h-16 animate-pulse rounded-xl bg-gray-100 dark:bg-gray-700" />
      ) : recordings.length === 0 ? (
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">No recordings yet.</p>
      ) : (
        <ul className="mt-3 divide-y divide-gray-100 dark:divide-gray-700">
          {recordings.map((rec) => (
            <li key={rec.id} className="py-2.5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPlaying(playing === rec.id ? null : rec.id)}
                  aria-expanded={playing === rec.id}
                  className="flex min-w-0 flex-1 items-center gap-2 rounded text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
                >
                  <PlayCircle className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-gray-900 dark:text-white">{rec.title}</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">{fmtDate(rec.createdAt)}</span>
                  </span>
                </button>
                {isTeacher && (
                  <button
                    onClick={() => void remove(rec)}
                    className="rounded p-1 text-gray-400 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
                    title="Remove from this class"
                    aria-label={`Remove ${rec.title}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
              {playing === rec.id && (
                <div className="mt-2 aspect-video w-full overflow-hidden rounded-xl bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${rec.videoId}?rel=0`}
                    title={rec.title}
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
