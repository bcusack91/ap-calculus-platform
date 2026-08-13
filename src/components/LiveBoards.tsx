'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Excalidraw, CaptureUpdateAction, exportToSvg } from '@excalidraw/excalidraw'
import '@excalidraw/excalidraw/index.css'
import { asScene, mergeScenes, sceneVersion, type BoardScene, type BoardElement } from '@/lib/board-merge'

/**
 * Whiteboards for live class sessions (see /live/[id]).
 *
 * Three teacher-selectable modes, independent of each other:
 *   boardMode TEACHER — one class board; the teacher draws, students watch.
 *   boardMode SHARED  — same board, students may draw on it too.
 *   padsEnabled       — every student gets a personal pad; the teacher watches
 *                       all of them in a live gallery.
 *
 * Sync is poll-based (Vercel — no sockets): drawers PUT their full scene every
 * ~2.5s, everyone GETs and element-merges every ~3s (see board-merge.ts), so
 * strokes land on other screens within a few seconds. Fonts/locales are served
 * from /public/excalidraw-assets — the CSP forbids CDNs.
 */

declare global {
  interface Window { EXCALIDRAW_ASSET_PATH?: string }
}
if (typeof window !== 'undefined') {
  window.EXCALIDRAW_ASSET_PATH = '/excalidraw-assets/'
}

/* Structural slice of ExcalidrawImperativeAPI — just what the sync loop uses. */
interface ExcalApi {
  updateScene: (scene: { elements: BoardElement[]; captureUpdate?: unknown }) => void
  addFiles: (files: unknown[]) => void
  getSceneElementsIncludingDeleted: () => readonly BoardElement[]
  getFiles: () => Record<string, unknown>
}

interface Settings { boardMode: 'OFF' | 'TEACHER' | 'SHARED'; padsEnabled: boolean }

/* ------------------------------------------------------------------ */
/*  One synced board                                                   */
/* ------------------------------------------------------------------ */

function SyncedBoard({
  sessionId,
  owner,
  canDraw,
  onSettings,
}: {
  sessionId: string
  owner: 'class' | 'me'
  canDraw: boolean
  onSettings: (s: Settings) => void
}) {
  const apiRef = useRef<ExcalApi | null>(null)
  const knownRevRef = useRef(-1)
  const lastSentRef = useRef(0)
  const localScene = useCallback((): BoardScene => {
    const api = apiRef.current
    if (!api) return { elements: [], files: {} }
    return { elements: [...api.getSceneElementsIncludingDeleted()], files: api.getFiles() }
  }, [])

  // Pull + merge remote changes.
  useEffect(() => {
    let active = true
    const pull = async () => {
      try {
        const r = await fetch(
          `/api/live-sessions/${sessionId}/board?owner=${owner}&rev=${knownRevRef.current}`,
          { cache: 'no-store' },
        )
        if (!r.ok || !active) return
        const d = await r.json()
        onSettings({ boardMode: d.boardMode, padsEnabled: d.padsEnabled })
        const api = apiRef.current
        if (!d.board || !api) return
        knownRevRef.current = d.board.rev
        if (d.board.scene === undefined) return
        const local = localScene()
        const merged = mergeScenes(local, asScene(d.board.scene))
        if (sceneVersion(merged) !== sceneVersion(local) || merged.elements.length !== local.elements.length) {
          // NEVER: remote strokes must not pollute the local undo stack.
          api.updateScene({ elements: merged.elements, captureUpdate: CaptureUpdateAction.NEVER })
          const files = Object.values(merged.files)
          if (files.length > 0) api.addFiles(files)
        }
      } catch { /* transient — next poll retries */ }
    }
    pull()
    const t = setInterval(pull, 3000)
    return () => { active = false; clearInterval(t) }
  }, [sessionId, owner, onSettings, localScene])

  // Push local changes while allowed to draw.
  useEffect(() => {
    if (!canDraw) return
    let active = true
    const push = async () => {
      const api = apiRef.current
      if (!api || !active) return
      const scene = localScene()
      const v = sceneVersion(scene)
      if (v === lastSentRef.current) return
      try {
        const r = await fetch(`/api/live-sessions/${sessionId}/board`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ owner, scene }),
        })
        // knownRev deliberately NOT fast-forwarded from the PUT: the server
        // may have merged someone else's strokes into what it saved, and the
        // next pull must fetch that merge back.
        if (r.ok) lastSentRef.current = v
      } catch { /* retried next tick */ }
    }
    const t = setInterval(push, 2500)
    return () => { active = false; clearInterval(t); void push() }
  }, [sessionId, owner, canDraw, localScene])

  return (
    <div className="relative h-[60vh] overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
      {!canDraw && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-gray-900/70 px-3 py-1 text-xs font-medium text-white">
          👁 View only
        </span>
      )}
      <Excalidraw
        excalidrawAPI={(api) => { apiRef.current = api as unknown as ExcalApi }}
        viewModeEnabled={!canDraw}
        UIOptions={{ canvasActions: { toggleTheme: false } }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Teacher gallery of student pads                                    */
/* ------------------------------------------------------------------ */

interface PadInfo { ownerKey: string; ownerName: string; rev: number; updatedAt: string; svg?: string; empty?: boolean }

function PadGallery({ sessionId }: { sessionId: string }) {
  const [pads, setPads] = useState<Map<string, PadInfo>>(new Map())
  const [expanded, setExpanded] = useState<string | null>(null)
  const sinceRef = useRef<string | null>(null)

  useEffect(() => {
    let active = true
    const poll = async () => {
      try {
        const qs = sinceRef.current ? `&since=${encodeURIComponent(sinceRef.current)}` : ''
        const r = await fetch(`/api/live-sessions/${sessionId}/board?owner=all${qs}`, { cache: 'no-store' })
        if (!r.ok || !active) return
        const d = await r.json()
        sinceRef.current = new Date().toISOString()
        for (const b of d.boards ?? []) {
          if (b.scene === undefined) continue
          const scene = asScene(b.scene)
          const visible = scene.elements.filter(el => !el.isDeleted)
          let svg: string | undefined
          let empty = true
          if (visible.length > 0) {
            empty = false
            try {
              const el = await exportToSvg({
                elements: visible as never[],
                files: scene.files as never,
                appState: { exportBackground: true, viewBackgroundColor: '#ffffff' },
              })
              el.removeAttribute('width')
              el.removeAttribute('height')
              svg = el.outerHTML
            } catch { /* un-renderable scene — show placeholder */ }
          }
          if (!active) return
          setPads(prev => {
            const next = new Map(prev)
            next.set(b.ownerKey, { ownerKey: b.ownerKey, ownerName: b.ownerName, rev: b.rev, updatedAt: b.updatedAt, svg, empty })
            return next
          })
        }
      } catch { /* transient */ }
    }
    poll()
    const t = setInterval(poll, 4000)
    return () => { active = false; clearInterval(t) }
  }, [sessionId])

  const list = [...pads.values()].sort((a, b) => a.ownerName.localeCompare(b.ownerName))
  const expandedPad = expanded ? pads.get(expanded) : null

  if (list.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-gray-300 text-sm text-gray-500 dark:border-gray-600 dark:text-gray-400">
        No student pads yet — a pad appears here as soon as a student starts drawing.
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {list.map(p => (
          <button
            key={p.ownerKey}
            onClick={() => setExpanded(p.ownerKey)}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white text-left transition hover:border-blue-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex h-32 items-center justify-center overflow-hidden bg-white [&_svg]:h-full [&_svg]:w-full [&_svg]:object-contain">
              {p.svg ? (
                <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: p.svg }} />
              ) : (
                <span className="text-xs text-gray-400">{p.empty ? 'Empty pad' : 'Rendering…'}</span>
              )}
            </div>
            <div className="border-t border-gray-100 px-3 py-2 dark:border-gray-700">
              <p className="truncate text-sm font-medium text-gray-800 group-hover:text-blue-700 dark:text-gray-200 dark:group-hover:text-blue-400">
                {p.ownerName}
              </p>
            </div>
          </button>
        ))}
      </div>

      {expandedPad && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setExpanded(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-white p-4 dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-bold text-gray-900 dark:text-white">{expandedPad.ownerName}&apos;s pad</h3>
              <button onClick={() => setExpanded(null)} className="text-sm text-gray-400 hover:text-gray-600">✕ close</button>
            </div>
            <div className="rounded-xl bg-white [&_svg]:h-auto [&_svg]:w-full">
              {expandedPad.svg
                ? <div dangerouslySetInnerHTML={{ __html: expandedPad.svg }} />
                : <p className="py-16 text-center text-sm text-gray-400">This pad is empty.</p>}
            </div>
            <p className="mt-2 text-xs text-gray-400">Updates live every few seconds.</p>
          </div>
        </div>
      )}
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  The whole board section for the live page                          */
/* ------------------------------------------------------------------ */

export default function BoardSection({
  sessionId,
  youAreTeacher,
  initialBoardMode,
  initialPadsEnabled,
  onBoardActive,
}: {
  sessionId: string
  youAreTeacher: boolean
  initialBoardMode: 'OFF' | 'TEACHER' | 'SHARED'
  initialPadsEnabled: boolean
  /** Fires when a board surface turns on/off — the page minimizes the video. */
  onBoardActive?: (active: boolean) => void
}) {
  const [settings, setSettings] = useState<Settings>({ boardMode: initialBoardMode, padsEnabled: initialPadsEnabled })
  const [tab, setTab] = useState<'class' | 'pads' | 'mypad'>('class')
  const onSettings = useCallback((s: Settings) => {
    setSettings(prev => (prev.boardMode === s.boardMode && prev.padsEnabled === s.padsEnabled ? prev : s))
  }, [])

  const { boardMode, padsEnabled } = settings

  // Tell the page when a board becomes the main event (video → corner).
  useEffect(() => {
    onBoardActive?.(boardMode !== 'OFF' || padsEnabled)
  }, [boardMode, padsEnabled, onBoardActive])
  const showClass = youAreTeacher || boardMode !== 'OFF'
  const showMyPad = !youAreTeacher && padsEnabled
  const anythingVisible = youAreTeacher || showClass || showMyPad

  // Students with everything off still need to notice the teacher turning a
  // board on — a light settings poll (the endpoint returns no scene).
  useEffect(() => {
    if (anythingVisible) return
    let active = true
    const check = () => {
      fetch(`/api/live-sessions/${sessionId}/board?owner=class&rev=2000000000`, { cache: 'no-store' })
        .then(r => (r.ok ? r.json() : null))
        .then(d => { if (active && d) onSettings({ boardMode: d.boardMode, padsEnabled: d.padsEnabled }) })
        .catch(() => {})
    }
    const t = setInterval(check, 5000)
    return () => { active = false; clearInterval(t) }
  }, [anythingVisible, sessionId, onSettings])

  // Derive a valid tab instead of correcting state in an effect (repo lint
  // forbids synchronous setState in effects) — modes can flip under us.
  const effectiveTab: 'class' | 'pads' | 'mypad' =
    tab === 'mypad' && !showMyPad ? 'class'
    : tab === 'pads' && !youAreTeacher ? 'class'
    : tab === 'class' && !showClass && showMyPad ? 'mypad'
    : tab

  const setMode = async (mode: Settings['boardMode']) => {
    setSettings(s => ({ ...s, boardMode: mode }))
    await fetch(`/api/live-sessions/${sessionId}/moderate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'board-mode', mode }),
    }).catch(() => {})
  }
  const setPads = async (enabled: boolean) => {
    setSettings(s => ({ ...s, padsEnabled: enabled }))
    if (enabled) setTab('pads')
    await fetch(`/api/live-sessions/${sessionId}/moderate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'pads', enabled }),
    }).catch(() => {})
  }

  if (!anythingVisible) return null

  const chip = (active: boolean) =>
    `rounded-full border px-3 py-1 text-xs font-medium transition ${
      active
        ? 'border-blue-500 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200'
        : 'border-gray-300 text-gray-600 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300'
    }`

  return (
    <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-bold text-gray-900 dark:text-white">🖊️ Whiteboard</h2>
        {youAreTeacher && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-500 dark:text-gray-400">Class board:</span>
              <button onClick={() => void setMode('OFF')} className={chip(boardMode === 'OFF')}>Off</button>
              <button onClick={() => void setMode('TEACHER')} className={chip(boardMode === 'TEACHER')} title="You draw; students watch">Only I draw</button>
              <button onClick={() => void setMode('SHARED')} className={chip(boardMode === 'SHARED')} title="Students can draw with you">Everyone draws</button>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-500 dark:text-gray-400">Student pads:</span>
              <button onClick={() => void setPads(!padsEnabled)} className={chip(padsEnabled)}>
                {padsEnabled ? 'On' : 'Off'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="mb-3 flex gap-1">
        {showClass && (
          <button
            onClick={() => setTab('class')}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${effectiveTab === 'class' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
          >
            Class board{boardMode === 'OFF' ? ' (off)' : ''}
          </button>
        )}
        {youAreTeacher && padsEnabled && (
          <button
            onClick={() => setTab('pads')}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${effectiveTab === 'pads' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
          >
            Student pads
          </button>
        )}
        {showMyPad && (
          <button
            onClick={() => setTab('mypad')}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${effectiveTab === 'mypad' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
          >
            My pad
          </button>
        )}
      </div>

      {effectiveTab === 'class' && showClass && (
        <>
          {youAreTeacher && boardMode === 'OFF' && (
            <p className="mb-2 text-xs text-amber-600 dark:text-amber-400">
              The class board is off — students can&apos;t see it yet. You can prep it now, then switch it on.
            </p>
          )}
          <SyncedBoard
            key="class"
            sessionId={sessionId}
            owner="class"
            canDraw={youAreTeacher || boardMode === 'SHARED'}
            onSettings={onSettings}
          />
          <p className="mt-1.5 text-xs text-gray-400 dark:text-gray-500">
            Strokes reach other screens within a few seconds. Tip: paste an image (⌘V) to draw over it.
          </p>
        </>
      )}
      {effectiveTab === 'pads' && youAreTeacher && <PadGallery sessionId={sessionId} />}
      {effectiveTab === 'mypad' && showMyPad && (
        <>
          <SyncedBoard key="mypad" sessionId={sessionId} owner="me" canDraw onSettings={onSettings} />
          <p className="mt-1.5 text-xs text-gray-400 dark:text-gray-500">
            Your own workspace — your teacher can see it live.
          </p>
        </>
      )}
    </div>
  )
}
