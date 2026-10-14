'use client'

import { useCallback, useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ChatPanel, JitsiEmbed, type SessionInfo } from '@/components/LiveSessionMedia'
import { useLivePopoutGuest } from '@/lib/live-popout'

/**
 * /live/[id]/popout — the live video (and, for webcasts, the class chat) in
 * its own window, opened from the session page's "Pop out" button so a
 * teacher can put it on another monitor. While this window is open the
 * session page hides its own copy (src/lib/live-popout.ts). Covers the site
 * navigation so the window is just the class.
 */
export default function LivePopoutPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { status: authStatus } = useSession()
  const [session, setSession] = useState<SessionInfo | null>(null)
  const [error, setError] = useState<string | null>(null)
  useLivePopoutGuest(id)

  useEffect(() => {
    if (authStatus === 'unauthenticated') router.push(`/auth/signin?callbackUrl=/live/${id}/popout`)
  }, [authStatus, id, router])

  const load = useCallback(() => {
    fetch(`/api/live-sessions/${id}`, { cache: 'no-store' })
      .then(async (r) => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load this session')
        // Keep the first conference config: each GET mints a fresh jwt, and a
        // changed prop would rebuild the call (see the session page).
        setSession((prev) => (prev?.conference ? { ...d.session, conference: prev.conference } : d.session))
        setError(null)
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Could not load this session'))
  }, [id])

  useEffect(() => {
    if (authStatus === 'authenticated') load()
  }, [authStatus, load])

  useEffect(() => {
    if (session?.mode !== 'CONFERENCE' || session.status !== 'LIVE') return
    const t = setInterval(load, 20_000)
    return () => clearInterval(t)
  }, [session?.mode, session?.status, load])

  useEffect(() => {
    if (session?.classroomName) document.title = `${session.classroomName} · Live video`
  }, [session?.classroomName])

  const message = error
    ? error
    : session && session.status !== 'LIVE'
      ? 'This session has ended. You can close this window.'
      : session?.mode === 'CONFERENCE' && !session.conference?.embed
        ? 'This class opens its room on Jitsi Meet instead. Use the Join button on the class page.'
        : null

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-gray-950 text-white">
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-red-600/90 px-2.5 py-0.5 text-[11px] font-bold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> LIVE
          </span>
          <span className="truncate text-sm font-semibold">{session?.classroomName ?? 'Live class'}</span>
        </div>
        <button
          onClick={() => window.close()}
          className="shrink-0 rounded-lg border border-white/20 px-3 py-1 text-xs font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          title="Close this window and show the video on the class page again"
        >
          Return to class page
        </button>
      </div>

      {message ? (
        <div className="flex flex-1 items-center justify-center p-6 text-center text-sm text-white/80">{message}</div>
      ) : !session ? (
        <div className="m-4 flex-1 animate-pulse rounded-xl bg-white/10" aria-busy="true" />
      ) : session.mode === 'CONFERENCE' && session.conference?.embed ? (
        <div className="min-h-0 flex-1">
          <JitsiEmbed conference={session.conference} displayName={session.displayName} fill />
        </div>
      ) : (
        <div className="grid min-h-0 flex-1 gap-3 p-3 lg:grid-cols-[2fr_1fr]">
          <div className="flex min-h-0 items-center justify-center overflow-hidden rounded-xl bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${session.streamVideoId}?autoplay=1&rel=0`}
              title={`${session.classroomName} — live class`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="aspect-video max-h-full w-full"
            />
          </div>
          <ChatPanel
            sessionId={session.id}
            youAreTeacher={session.youAreTeacher}
            initiallyMuted={session.youAreMuted}
            onSessionEnded={load}
            className="h-[45vh] min-h-0 text-gray-900 lg:h-full"
          />
        </div>
      )}
    </div>
  )
}
