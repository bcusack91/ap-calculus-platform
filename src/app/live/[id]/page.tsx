'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import nextDynamic from 'next/dynamic'
import { ChatPanel, JitsiEmbed, type SessionInfo } from '@/components/LiveSessionMedia'
import { useLivePopoutHost } from '@/lib/live-popout'
import LessonRecorderControls from '@/components/LessonRecorderControls'

// Whiteboards pull in Excalidraw (~a MB) — load only when a session page opens.
const BoardSection = nextDynamic(() => import('@/components/LiveBoards'), {
  ssr: false,
  loading: () => null,
})
const SlideDeckSection = nextDynamic(() => import('@/components/SlideDeckSection'), {
  ssr: false,
  loading: () => null,
})

/**
 * Live class session page — /live/[id].
 *
 * CONFERENCE: embedded JaaS room (or a link-out card when JaaS keys aren't
 * configured — the public Jitsi server caps EMBEDDED sessions at ~5 minutes,
 * so the fallback opens meet.jit.si in a new tab instead).
 * WEBCAST: unlisted YouTube live embed + the site's own chat, so any number of
 * students can watch for free and questions flow through StudyMondo.
 *
 * "Pop out" moves the video (and chat) to its own window for a second
 * monitor; this page hides its copy while the pop-out holds the call
 * (src/lib/live-popout.ts).
 */

export default function LiveSessionPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { status: authStatus } = useSession()
  const [session, setSession] = useState<SessionInfo | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [ending, setEnding] = useState(false)
  // Picture-in-picture: when a whiteboard or slide deck is the main event,
  // the video shrinks to a corner window so students see both at once.
  // Class swaps only — the video iframe node itself is never remounted.
  const [videoMini, setVideoMini] = useState(false)
  const boardWasActive = useRef(false)
  const handleBoardActive = useCallback((active: boolean) => {
    if (active && !boardWasActive.current) setVideoMini(true)
    boardWasActive.current = active
  }, [])
  const handleDeckActive = useCallback((active: boolean) => {
    setVideoMini(active || boardWasActive.current)
  }, [])
  const popout = useLivePopoutHost(id)

  useEffect(() => {
    if (authStatus === 'unauthenticated') router.push(`/auth/signin?callbackUrl=/live/${id}`)
  }, [authStatus, id, router])

  const load = useCallback(() => {
    fetch(`/api/live-sessions/${id}`, { cache: 'no-store' })
      .then(async (r) => {
        const d = await r.json().catch(() => ({}))
        if (!r.ok) throw new Error(d.error || 'Could not load this session')
        // Keep the conference config we already have. Every GET mints a FRESH
        // jwt, so replacing it wholesale on each status poll changed the props
        // feeding the embedded room and tore the whole conference down and
        // rebuilt it — killing any in-flight camera/mic permission prompt. The
        // room never changes for a given session id, so the first copy stands.
        setSession((prev) => (prev?.conference ? { ...d.session, conference: prev.conference } : d.session))
        setError(null)
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Could not load this session'))
  }, [id])

  useEffect(() => {
    if (authStatus !== 'authenticated') return
    load()
  }, [authStatus, load])

  // Conference pages have no chat poll to piggyback on, so watch for the
  // session ending with a slow status poll.
  useEffect(() => {
    if (session?.mode !== 'CONFERENCE' || session.status !== 'LIVE') return
    const t = setInterval(load, 20_000)
    return () => clearInterval(t)
  }, [session?.mode, session?.status, load])

  const endSession = async () => {
    if (!session || !confirm('End this live session for everyone?')) return
    setEnding(true)
    try {
      await fetch(`/api/teacher/classrooms/${session.classroomId}/live-session`, { method: 'DELETE' })
      load()
    } finally {
      setEnding(false)
    }
  }

  if (error) {
    return (
      <Shell>
        <div className="mx-auto max-w-lg rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm dark:border-red-800 dark:bg-gray-800">
          <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{error}</p>
          <Link href="/dashboard" className="font-medium text-accent hover:underline">← Back to dashboard</Link>
        </div>
      </Shell>
    )
  }
  if (!session) {
    return (
      <Shell>
        <div className="mx-auto max-w-lg space-y-4">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="h-96 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700" />
        </div>
      </Shell>
    )
  }
  if (session.status !== 'LIVE') {
    return (
      <Shell>
        <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <p className="mb-1 text-2xl">📴</p>
          <p className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">This session has ended</p>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{session.classroomName}</p>
          <Link href="/dashboard" className="font-medium text-accent hover:underline">← Back to dashboard</Link>
        </div>
      </Shell>
    )
  }

  return (
    <Shell wide={session.mode === 'WEBCAST'}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 dark:bg-red-900/40 dark:text-red-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> LIVE
          </span>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">{session.classroomName}</h1>
        </div>
        {session.youAreTeacher && (
          <div className="flex flex-wrap items-center gap-2">
          <LessonRecorderControls classroomId={session.classroomId} classroomName={session.classroomName} />
          <button
            onClick={endSession}
            disabled={ending}
            className="rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 disabled:opacity-50 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300"
          >
            {ending ? 'Ending…' : 'End session'}
          </button>
          </div>
        )}
      </div>

      {popout.blocked && !popout.poppedOut && (
        <p className="mb-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
          Your browser blocked the new window. Allow pop-ups for studymondo.com, then try Pop out again.
        </p>
      )}
      {(session.mode === 'WEBCAST' || session.conference?.embed) && (!popout.ready || popout.poppedOut) ? (
        <PoppedOutCard
          waiting={!popout.ready}
          label={session.mode === 'WEBCAST' ? 'The video and chat are' : 'The video call is'}
          onBringBack={popout.bringBack}
        />
      ) : session.mode === 'CONFERENCE' ? (
        session.conference?.embed ? (
          <div className={videoMini
            ? 'fixed bottom-4 right-4 z-40 h-44 w-72 overflow-hidden rounded-xl border-2 border-gray-300 bg-black shadow-2xl sm:h-56 sm:w-96 dark:border-gray-600'
            : 'relative'}
          >
            <div className="absolute right-2 top-2 z-50 flex gap-1.5">
              <button
                onClick={popout.open}
                className="rounded-lg bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur transition hover:bg-black/80"
                title="Open in its own window, e.g. on another monitor"
              >
                ↗ Pop out
              </button>
              <button
                onClick={() => setVideoMini(v => !v)}
                className="rounded-lg bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur transition hover:bg-black/80"
                title={videoMini ? 'Expand video' : 'Minimize video to corner'}
              >
                {videoMini ? '⤢ Expand' : '◱ Minimize'}
              </button>
            </div>
            <JitsiEmbed conference={session.conference} displayName={session.displayName} mini={videoMini} />
          </div>
        ) : (
          <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-2 text-3xl">🎥</p>
            <p className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Your class conference room is ready</p>
            <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              The room opens on Jitsi Meet in a new tab. Use your name so your teacher recognizes you.
              {session.youAreTeacher && ' As the host, sign in when Jitsi asks — that makes you the moderator.'}
            </p>
            {session.conference && (
              <a
                href={session.conference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-accent px-8 py-3 font-semibold text-white shadow transition hover:opacity-90"
              >
                Join the room →
              </a>
            )}
          </div>
        )
      ) : (
        <div className={videoMini ? 'grid gap-4' : 'grid gap-4 lg:grid-cols-[2fr_1fr]'}>
          <div className={videoMini
            ? 'fixed bottom-4 right-4 z-40 w-72 overflow-hidden rounded-xl border-2 border-gray-300 bg-black shadow-2xl sm:w-96 dark:border-gray-600'
            : 'relative overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm dark:border-gray-700'}
          >
            <div className="absolute right-2 top-2 z-50 flex gap-1.5">
              <button
                onClick={popout.open}
                className="rounded-lg bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur transition hover:bg-black/80"
                title="Open in its own window, e.g. on another monitor"
              >
                ↗ Pop out
              </button>
              <button
                onClick={() => setVideoMini(v => !v)}
                className="rounded-lg bg-black/60 px-2 py-1 text-xs font-semibold text-white backdrop-blur transition hover:bg-black/80"
                title={videoMini ? 'Expand video' : 'Minimize video to corner'}
              >
                {videoMini ? '⤢ Expand' : '◱ Minimize'}
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${session.streamVideoId}?autoplay=1&rel=0`}
                title={`${session.classroomName} — live class`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
          <ChatPanel sessionId={session.id} youAreTeacher={session.youAreTeacher} initiallyMuted={session.youAreMuted} onSessionEnded={load} />
        </div>
      )}

      {/* In-class presentation — teacher-driven synced slides with live polls.
          Renders nothing until a deck is active (teacher gets the launcher). */}
      <SlideDeckSection
        sessionId={session.id}
        youAreTeacher={session.youAreTeacher}
        classroomId={session.classroomId}
        onActiveChange={handleDeckActive}
      />

      {/* Whiteboards — class board + student pads, teacher-controlled. Renders
          nothing for students until the teacher turns a board on. */}
      <BoardSection
        sessionId={session.id}
        youAreTeacher={session.youAreTeacher}
        initialBoardMode={session.boardMode ?? 'OFF'}
        initialPadsEnabled={session.padsEnabled ?? false}
        onBoardActive={handleBoardActive}
      />
    </Shell>
  )
}

/** Stands in for the video (and chat) while they live in the pop-out window. */
function PoppedOutCard({ waiting, label, onBringBack }: { waiting: boolean; label: string; onBringBack: () => void }) {
  if (waiting) return <div className="h-40 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700" aria-busy="true" />
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        <span className="font-semibold text-gray-900 dark:text-white">↗ {label} open in another window.</span>{' '}
        Close that window or bring it back to see it here.
      </p>
      <button
        onClick={onBringBack}
        className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-accent hover:text-accent dark:border-gray-600 dark:text-gray-200"
      >
        Bring back here
      </button>
    </div>
  )
}

function Shell({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-accent-subtle py-6 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className={`mx-auto px-4 ${wide ? 'max-w-7xl' : 'max-w-5xl'}`}>{children}</div>
    </div>
  )
}
