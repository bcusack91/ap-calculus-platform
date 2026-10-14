'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * The live session's video room and class chat, shared by the session page
 * (/live/[id]) and its pop-out window (/live/[id]/popout).
 */

export interface ChatMessage {
  id: string
  userId: string
  userName: string
  body: string
  hidden: boolean
  createdAt: string
}

export interface SessionInfo {
  id: string
  mode: 'CONFERENCE' | 'WEBCAST'
  status: 'LIVE' | 'ENDED'
  startedAt: string
  classroomId: string
  classroomName: string
  boardMode: 'OFF' | 'TEACHER' | 'SHARED'
  padsEnabled: boolean
  youAreTeacher: boolean
  youAreMuted: boolean
  displayName: string
  streamVideoId?: string
  conference?:
    | { embed: true; domain: string; appId: string; room: string; jwt: string }
    | { embed: false; url: string }
}

declare global {
  interface Window {
    JitsiMeetExternalAPI?: new (domain: string, options: Record<string, unknown>) => { dispose: () => void }
  }
}

/**
 * Loads the JaaS external_api.js once per app id, shared across mounts.
 * Appending a fresh <script> per mount raced with itself on client-side
 * navigation (the tag was never cleaned up), which is why a soft navigation
 * could fail while a hard refresh worked.
 */
const jitsiScriptLoads = new Map<string, Promise<void>>()

function loadJitsiScript(appId: string): Promise<void> {
  if (window.JitsiMeetExternalAPI) return Promise.resolve()
  const existing = jitsiScriptLoads.get(appId)
  if (existing) return existing
  const load = new Promise<void>((resolve, reject) => {
    const src = `https://8x8.vc/${appId}/external_api.js`
    const already = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    const script = already ?? document.createElement('script')
    script.addEventListener('load', () => resolve())
    script.addEventListener('error', () => reject(new Error('external_api.js failed to load')))
    if (!already) {
      script.src = src
      script.async = true
      document.body.appendChild(script)
    }
  })
  // A failure must not be cached forever, or a retry could never succeed.
  jitsiScriptLoads.set(appId, load)
  load.catch(() => jitsiScriptLoads.delete(appId))
  return load
}

/** Embedded JaaS conference. The JWT already encodes moderator vs participant. */
export function JitsiEmbed({
  conference,
  displayName,
  mini = false,
  fill = false,
}: {
  conference: { domain: string; appId: string; room: string; jwt: string }
  displayName: string
  mini?: boolean
  /** Fill the parent (the pop-out window). */
  fill?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)
  // Read through refs so a re-render with a freshly minted jwt can never
  // retrigger the mount effect: rebuilding the room mid-call drops the
  // participant and cancels any camera/mic prompt they were answering. The
  // initial values come from useRef itself, so the first mount is correct even
  // before the sync effect below runs.
  const jwtRef = useRef(conference.jwt)
  const nameRef = useRef(displayName)
  useEffect(() => {
    jwtRef.current = conference.jwt
    nameRef.current = displayName
  }, [conference.jwt, displayName])

  const { domain, appId, room } = conference

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    let api: { dispose: () => void } | null = null
    let cancelled = false

    loadJitsiScript(appId)
      .then(() => {
        if (cancelled || !window.JitsiMeetExternalAPI) return
        api = new window.JitsiMeetExternalAPI(domain, {
          roomName: room,
          jwt: jwtRef.current,
          parentNode: node,
          userInfo: { displayName: nameRef.current },
          configOverwrite: { prejoinConfig: { enabled: true }, disableDeepLinking: true },
        })
      })
      .catch(() => { if (!cancelled) setFailed(true) })

    return () => {
      cancelled = true
      api?.dispose()
    }
    // Mount once per room — jwt/displayName deliberately excluded (see refs).
  }, [domain, appId, room])

  if (failed) {
    return (
      <div className="rounded-2xl border border-red-200 bg-white p-8 text-center dark:border-red-800 dark:bg-gray-800">
        <p className="mb-1 font-semibold text-gray-900 dark:text-white">The video room couldn&apos;t load</p>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Usually a stale page or a browser extension blocking scripts (ad blockers, privacy blockers, or a school network filter).
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-xl bg-accent px-6 py-2.5 font-semibold text-white shadow transition hover:opacity-90"
        >
          Reload the page
        </button>
      </div>
    )
  }
  return (
    <div
      ref={containerRef}
      className={mini || fill
        ? 'h-full w-full'
        : 'h-[75vh] overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-700'}
    />
  )
}

/** DB-backed chat with 4s polling; the teacher gets hide + mute controls. */
export function ChatPanel({
  sessionId,
  youAreTeacher,
  initiallyMuted,
  onSessionEnded,
  className = 'h-[60vh] lg:h-auto lg:max-h-[75vh]',
}: {
  sessionId: string
  youAreTeacher: boolean
  initiallyMuted: boolean
  onSessionEnded: () => void
  /** Height classes for the panel (the pop-out fills its column). */
  className?: string
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState('')
  const [sending, setSending] = useState(false)
  const [muted, setMuted] = useState(initiallyMuted)
  const [notice, setNotice] = useState<string | null>(null)
  const lastTsRef = useRef<string | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const pinnedToBottomRef = useRef(true)

  const merge = useCallback((incoming: ChatMessage[]) => {
    if (incoming.length === 0) return
    setMessages((prev) => {
      const seen = new Set(prev.map((m) => m.id))
      const fresh = incoming.filter((m) => !seen.has(m.id))
      return fresh.length ? [...prev, ...fresh] : prev
    })
    lastTsRef.current = incoming[incoming.length - 1].createdAt
  }, [])

  useEffect(() => {
    let active = true
    const poll = async () => {
      try {
        const qs = lastTsRef.current ? `?after=${encodeURIComponent(lastTsRef.current)}` : ''
        const r = await fetch(`/api/live-sessions/${sessionId}/messages${qs}`, { cache: 'no-store' })
        if (!r.ok || !active) return
        const d = await r.json()
        merge(d.messages ?? [])
        setMuted(!!d.youAreMuted)
        if (d.sessionStatus === 'ENDED') onSessionEnded()
      } catch { /* transient network errors — next poll retries */ }
    }
    poll()
    const t = setInterval(poll, 4000)
    return () => { active = false; clearInterval(t) }
  }, [sessionId, merge, onSessionEnded])

  // Keep the view pinned to the newest message unless the reader scrolled up.
  useEffect(() => {
    const list = listRef.current
    if (list && pinnedToBottomRef.current) list.scrollTop = list.scrollHeight
  }, [messages])

  const send = async () => {
    const body = draft.trim()
    if (!body || sending) return
    setSending(true)
    setNotice(null)
    try {
      const r = await fetch(`/api/live-sessions/${sessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) {
        setNotice(d.error || 'Could not send')
        return
      }
      setDraft('')
      merge([d.message])
    } finally {
      setSending(false)
    }
  }

  const moderate = async (payload: Record<string, string>) => {
    await fetch(`/api/live-sessions/${sessionId}/moderate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {})
  }
  const toggleHide = (m: ChatMessage) => {
    setMessages((prev) => prev.map((x) => (x.id === m.id ? { ...x, hidden: !m.hidden } : x)))
    void moderate({ action: m.hidden ? 'unhide' : 'hide', messageId: m.id })
  }

  return (
    <div className={`flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 ${className}`}>
      <div className="border-b border-gray-100 px-4 py-3 dark:border-gray-700">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white">💬 Class chat</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">Questions here — your teacher sees them instantly.</p>
      </div>
      <div
        ref={listRef}
        onScroll={(e) => {
          const el = e.currentTarget
          pinnedToBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 60
        }}
        className="flex-1 space-y-2 overflow-y-auto p-4"
      >
        {messages.length === 0 && (
          <p className="text-center text-sm text-gray-400 dark:text-gray-500">No messages yet — say hi! 👋</p>
        )}
        {messages.map((m) => (
          <div key={m.id} className={`group text-sm ${m.hidden ? 'opacity-40' : ''}`}>
            <span className="font-semibold text-gray-800 dark:text-gray-200">{m.userName}</span>{' '}
            <span className="whitespace-pre-wrap break-words text-gray-700 dark:text-gray-300">{m.body}</span>
            {youAreTeacher && (
              <span className="ml-2 hidden gap-1 group-hover:inline-flex">
                <button
                  onClick={() => toggleHide(m)}
                  className="rounded px-1 text-[10px] text-gray-400 hover:text-red-600"
                  title={m.hidden ? 'Unhide message' : 'Hide message'}
                >
                  {m.hidden ? '↩ unhide' : '✕ hide'}
                </button>
                <button
                  onClick={() => void moderate({ action: 'mute', userId: m.userId })}
                  className="rounded px-1 text-[10px] text-gray-400 hover:text-red-600"
                  title="Mute this student for the rest of the session"
                >
                  🔇 mute
                </button>
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 p-3 dark:border-gray-700">
        {notice && <p className="mb-1 text-xs text-red-600 dark:text-red-400">{notice}</p>}
        {muted ? (
          <p className="rounded-lg bg-gray-100 px-3 py-2 text-center text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
            You&apos;ve been muted by the teacher.
          </p>
        ) : (
          <div className="flex gap-2">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); void send() } }}
              maxLength={500}
              placeholder="Ask a question…"
              className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={() => void send()}
              disabled={sending || !draft.trim()}
              className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
