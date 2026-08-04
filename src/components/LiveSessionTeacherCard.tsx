'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

/**
 * "Go Live" controls on the teacher classroom page. Self-contained: fetches
 * and manages the classroom's live-session state itself, so the (large)
 * classroom page only has to render <LiveSessionTeacherCard classroomId=…/>.
 *
 * Two modes (the cost architecture the owner chose):
 *   🎥 Conference — everyone on camera in a Jitsi room (small groups).
 *   📡 Webcast   — teacher streams via unlisted YouTube live; students watch
 *                  in-site and ask questions through the built-in chat.
 */
export default function LiveSessionTeacherCard({ classroomId }: { classroomId: string }) {
  const router = useRouter()
  const [live, setLive] = useState<{ id: string; mode: string; startedAt: string } | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [picking, setPicking] = useState(false)
  const [streamUrl, setStreamUrl] = useState('')
  const [askingUrl, setAskingUrl] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(() => {
    fetch(`/api/teacher/classrooms/${classroomId}/live-session`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { setLive(d?.session ?? null); setLoaded(true) })
      .catch(() => setLoaded(true))
  }, [classroomId])

  useEffect(() => { refresh() }, [refresh])

  const start = async (mode: 'CONFERENCE' | 'WEBCAST') => {
    setBusy(true)
    setError(null)
    try {
      const r = await fetch(`/api/teacher/classrooms/${classroomId}/live-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mode === 'WEBCAST' ? { mode, streamUrl } : { mode }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) {
        setError(d.error || 'Could not start the session')
        return
      }
      router.push(`/live/${d.session.id}`)
    } finally {
      setBusy(false)
    }
  }

  const end = async () => {
    if (!confirm('End this live session for everyone?')) return
    setBusy(true)
    try {
      await fetch(`/api/teacher/classrooms/${classroomId}/live-session`, { method: 'DELETE' })
      setLive(null)
      setPicking(false)
    } finally {
      setBusy(false)
    }
  }

  if (!loaded) return null

  if (live) {
    return (
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border-2 border-red-300 bg-red-50 p-4 dark:border-red-700 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> LIVE
          </span>
          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {live.mode === 'CONFERENCE' ? '🎥 Conference' : '📡 Webcast'} in progress — students see a Join banner on their dashboard.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/live/${live.id}`)}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Open session
          </button>
          <button
            onClick={end}
            disabled={busy}
            className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:opacity-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900/40"
          >
            End session
          </button>
        </div>
      </div>
    )
  }

  if (!picking) {
    return (
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-white">🔴 Live class sessions</span> — run video class right here on StudyMondo.
        </p>
        <button
          onClick={() => setPicking(true)}
          className="rounded-lg bg-gradient-to-r from-red-500 to-rose-500 px-5 py-2 text-sm font-semibold text-white shadow transition hover:shadow-md"
        >
          Go Live
        </button>
      </div>
    )
  }

  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-gray-900 dark:text-white">Start a live session</h3>
        <button onClick={() => { setPicking(false); setAskingUrl(false); setError(null) }} className="text-sm text-gray-400 hover:text-gray-600">✕</button>
      </div>
      {error && <p className="mb-3 text-sm text-red-600 dark:text-red-400">{error}</p>}
      {!askingUrl ? (
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            onClick={() => start('CONFERENCE')}
            disabled={busy}
            className="rounded-xl border-2 border-gray-200 p-4 text-left transition hover:border-blue-400 hover:shadow-sm disabled:opacity-50 dark:border-gray-600 dark:hover:border-blue-500"
          >
            <p className="mb-1 font-semibold text-gray-900 dark:text-white">🎥 Conference</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Everyone on camera and mic — seminars, office hours, small groups. Best under ~25 people.
            </p>
          </button>
          <button
            onClick={() => setAskingUrl(true)}
            disabled={busy}
            className="rounded-xl border-2 border-gray-200 p-4 text-left transition hover:border-blue-400 hover:shadow-sm disabled:opacity-50 dark:border-gray-600 dark:hover:border-blue-500"
          >
            <p className="mb-1 font-semibold text-gray-900 dark:text-white">📡 Webcast</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              You stream; students watch and ask questions in chat. Unlimited viewers — lectures for the whole class.
            </p>
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Go live on YouTube first (<span className="font-medium">youtube.com → Create → Go live</span>, visibility{' '}
            <span className="font-medium">Unlisted</span>, streaming from your webcam is fine), then paste the link:
          </p>
          <div className="flex flex-wrap gap-2">
            <input
              value={streamUrl}
              onChange={(e) => setStreamUrl(e.target.value)}
              placeholder="https://youtube.com/live/…"
              className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={() => start('WEBCAST')}
              disabled={busy || !streamUrl.trim()}
              className="rounded-xl bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
            >
              {busy ? 'Starting…' : 'Start webcast'}
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            First time? YouTube needs a one-time ~24h activation after you enable live streaming on your channel — do that the day before class.
          </p>
        </div>
      )}
    </div>
  )
}
