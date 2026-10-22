'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Excalidraw, CaptureUpdateAction, exportToSvg } from '@excalidraw/excalidraw'
import '@excalidraw/excalidraw/index.css'
import { asScene, mergeScenes, sceneVersion, type BoardScene, type BoardElement } from '@/lib/board-merge'
import { fitView, sameView, viewFromAppState, type BoardViewRect } from '@/lib/board-view'
import { SlidersHorizontal } from 'lucide-react'
import { PEN_SIZES, PEN_SIZE_ORDER, loadPenSize, penSizeAppState, savePenSize, type PenSize } from '@/lib/pen-sizes'

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
 *
 * "Students follow my view": the teacher's class board reports the region it
 * shows; students' boards scroll/zoom to it whenever it moves (it rides along
 * with the class-board poll — src/lib/board-view.ts).
 */

declare global {
  interface Window { EXCALIDRAW_ASSET_PATH?: string }
}
if (typeof window !== 'undefined') {
  window.EXCALIDRAW_ASSET_PATH = '/excalidraw-assets/'
}

/* Structural slice of ExcalidrawImperativeAPI — just what the sync loop uses. */
interface ExcalAppState { scrollX: number; scrollY: number; zoom: { value: number }; width: number; height: number; selectedElementIds?: Record<string, boolean> }
interface ExcalApi {
  updateScene: (scene: { elements?: BoardElement[]; appState?: Record<string, unknown>; captureUpdate?: unknown }) => void
  getAppState: () => ExcalAppState
  addFiles: (files: unknown[]) => void
  getSceneElementsIncludingDeleted: () => readonly BoardElement[]
  getFiles: () => Record<string, unknown>
}

interface Settings { boardMode: 'OFF' | 'TEACHER' | 'SHARED'; padsEnabled: boolean; followView: boolean }
interface ViewPayload { rev: number; follow: boolean; view: BoardViewRect | null }

/** Scroll + zoom a board so the teacher's region fills it. */
function showView(api: ExcalApi, view: BoardViewRect) {
  const { width, height } = api.getAppState()
  if (!width || !height) return false
  const fit = fitView(view, width, height)
  api.updateScene({ appState: { scrollX: fit.scrollX, scrollY: fit.scrollY, zoom: { value: fit.zoom } }, captureUpdate: CaptureUpdateAction.NEVER })
  return true
}

/* ------------------------------------------------------------------ */
/*  Pen panel (outside the board)                                      */
/* ------------------------------------------------------------------ */

const BOARD_COLORS: { label: string; color: string; swatch: string }[] = [
  { label: 'Black', color: '#1e1e1e', swatch: 'bg-[#1e1e1e]' },
  { label: 'Red', color: '#e03131', swatch: 'bg-[#e03131]' },
  { label: 'Blue', color: '#1971c2', swatch: 'bg-[#1971c2]' },
  { label: 'Green', color: '#2f9e44', swatch: 'bg-[#2f9e44]' },
]

/**
 * Colour and pen size for the board, beside it instead of on it: Excalidraw's
 * own settings panel opened inside the board's left edge and covered the
 * drawing (owner, 2026-10-22). That panel is hidden unless "More options" is
 * on (fills, fonts, arrows, editing a shape's style). A choice applies to new
 * strokes and to whatever is selected.
 */
function BoardPenPanel({
  color,
  size,
  showNative,
  onColor,
  onSize,
  onToggleNative,
}: {
  color: string
  size: PenSize
  showNative: boolean
  onColor: (c: string) => void
  onSize: (s: PenSize) => void
  onToggleNative: () => void
}) {
  const btn = (active: boolean) =>
    `inline-flex h-8 w-8 items-center justify-center rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${
      active ? 'bg-accent text-white' : 'border border-gray-200 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700'
    }`
  return (
    <div
      role="toolbar"
      aria-label="Pen colour and size"
      className="flex shrink-0 flex-row flex-wrap items-center gap-1 rounded-xl border border-gray-200 bg-white p-1.5 dark:border-gray-700 dark:bg-gray-800 md:flex-col md:flex-nowrap md:self-start"
    >
      {BOARD_COLORS.map(c => (
        <button key={c.color} type="button" onClick={() => onColor(c.color)} aria-pressed={color === c.color} title={`${c.label} pen`} aria-label={`${c.label} pen`} className={btn(color === c.color)}>
          <span className={`h-4 w-4 rounded-full ${c.swatch} ring-1 ring-white/60`} aria-hidden />
        </button>
      ))}
      <span className="mx-0.5 h-6 w-px bg-gray-200 dark:bg-gray-600 md:mx-0 md:my-0.5 md:h-px md:w-6" aria-hidden />
      {PEN_SIZE_ORDER.map(s => (
        <button key={s} type="button" onClick={() => onSize(s)} aria-pressed={size === s} title={`${PEN_SIZES[s].label} pen`} aria-label={`${PEN_SIZES[s].label} pen`} className={btn(size === s)}>
          <span className={`${PEN_SIZES[s].dot} rounded-full bg-current`} aria-hidden />
        </button>
      ))}
      <span className="mx-0.5 h-6 w-px bg-gray-200 dark:bg-gray-600 md:mx-0 md:my-0.5 md:h-px md:w-6" aria-hidden />
      <button
        type="button"
        onClick={onToggleNative}
        aria-pressed={showNative}
        title={showNative ? 'Hide the full style panel' : 'More options: fill, font, arrows, edit a shape'}
        aria-label="More options"
        className={btn(showNative)}
      >
        <SlidersHorizontal className="h-4 w-4" aria-hidden />
      </button>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  One synced board                                                   */
/* ------------------------------------------------------------------ */

function SyncedBoard({
  sessionId,
  owner,
  canDraw,
  onSettings,
  viewRole,
}: {
  sessionId: string
  owner: 'class' | 'me'
  canDraw: boolean
  onSettings: (s: Settings) => void
  /** Class board only: the teacher broadcasts their view; students follow it. */
  viewRole?: 'broadcast' | 'follow'
}) {
  const apiRef = useRef<ExcalApi | null>(null)
  const knownRevRef = useRef(-1)
  const lastSentRef = useRef(0)
  const appliedViewRevRef = useRef(-1)
  const sentViewRef = useRef<BoardViewRect | null>(null)
  const [teacherView, setTeacherView] = useState<ViewPayload | null>(null)
  // Pen panel beside the board; Excalidraw's own style panel stays hidden
  // unless "More options" is on.
  const [penColor, setPenColor] = useState(BOARD_COLORS[0].color)
  const [penSize, setPenSize] = useState<PenSize>(loadPenSize)
  const [showNative, setShowNative] = useState(false)
  const applyPen = useCallback((color: string, size: PenSize) => {
    const api = apiRef.current
    if (!api) return
    const style = penSizeAppState(size)
    api.updateScene({ appState: { currentItemStrokeColor: color, ...style } })
    // Restyle the selection too, as Excalidraw's own panel would.
    const selected = api.getAppState().selectedElementIds ?? {}
    if (!Object.keys(selected).some(id => selected[id])) return
    const elements = api.getSceneElementsIncludingDeleted().map(el => {
      if (!selected[el.id] || el.isDeleted) return el
      const e = el as BoardElement & { type?: string; fontSize?: number }
      return {
        ...el,
        strokeColor: color,
        ...(e.type === 'text' ? { fontSize: style.currentItemFontSize } : { strokeWidth: style.currentItemStrokeWidth }),
        version: (el.version ?? 0) + 1,
        versionNonce: Math.floor(Math.random() * 2 ** 31),
        updated: Date.now(),
      } as BoardElement
    })
    api.updateScene({ elements, captureUpdate: CaptureUpdateAction.IMMEDIATELY })
  }, [])
  const chooseColor = (c: string) => { setPenColor(c); applyPen(c, penSize) }
  const chooseSize = (s: PenSize) => { setPenSize(s); savePenSize(s); applyPen(penColor, s) }
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
        const v: ViewPayload | undefined = d.view
        onSettings({ boardMode: d.boardMode, padsEnabled: d.padsEnabled, followView: v?.follow ?? true })
        const api = apiRef.current
        if (viewRole === 'follow' && v) {
          setTeacherView((prev) => (prev && prev.rev === v.rev && prev.follow === v.follow ? prev : v))
          // Snap only when the teacher's view moved (or following was just
          // turned on), so a student can still look around in between.
          if (v.follow && v.view && api && v.rev !== appliedViewRevRef.current && showView(api, v.view)) {
            appliedViewRevRef.current = v.rev
          }
        }
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
  }, [sessionId, owner, onSettings, localScene, viewRole])

  // Teacher: report the region of the class board on screen when it moves.
  useEffect(() => {
    if (viewRole !== 'broadcast') return
    let active = true
    const report = async () => {
      const api = apiRef.current
      if (!api || !active) return
      const view = viewFromAppState(api.getAppState())
      if (!view || sameView(view, sentViewRef.current)) return
      try {
        const r = await fetch(`/api/live-sessions/${sessionId}/board`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ owner: 'view', view }),
        })
        if (r.ok) sentViewRef.current = view
      } catch { /* retried next tick */ }
    }
    const t = setInterval(report, 1500)
    return () => { active = false; clearInterval(t) }
  }, [sessionId, viewRole])

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
    <div className="flex flex-col gap-2 md:flex-row">
    {canDraw && (
      <BoardPenPanel
        color={penColor}
        size={penSize}
        showNative={showNative}
        onColor={chooseColor}
        onSize={chooseSize}
        onToggleNative={() => setShowNative(v => !v)}
      />
    )}
    <div
      {...(owner === 'class' ? { 'data-recording-region': 'board' } : {})}
      className={`relative isolate h-[60vh] min-w-0 flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 ${canDraw && !showNative ? 'board-style-panel-hidden' : ''}`}
    >
      {!canDraw && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-gray-900/70 px-3 py-1 text-xs font-medium text-white">
          👁 View only
        </span>
      )}
      {viewRole === 'follow' && teacherView?.view && (
        teacherView.follow ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white">
            Following your teacher&apos;s view
          </span>
        ) : (
          <button
            type="button"
            onClick={() => { if (apiRef.current && teacherView.view) showView(apiRef.current, teacherView.view) }}
            className="absolute left-3 top-3 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Jump to teacher&apos;s view
          </button>
        )
      )}
      <Excalidraw
        excalidrawAPI={(api) => { apiRef.current = api as unknown as ExcalApi }}
        initialData={canDraw ? { appState: { currentItemStrokeColor: penColor, ...penSizeAppState(penSize) } } : undefined}
        viewModeEnabled={!canDraw}
        UIOptions={{ canvasActions: { toggleTheme: false } }}
      />
    </div>
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
  const [settings, setSettings] = useState<Settings>({ boardMode: initialBoardMode, padsEnabled: initialPadsEnabled, followView: true })
  const [tab, setTab] = useState<'class' | 'pads' | 'mypad'>('class')
  const onSettings = useCallback((s: Settings) => {
    setSettings(prev => (prev.boardMode === s.boardMode && prev.padsEnabled === s.padsEnabled && prev.followView === s.followView ? prev : s))
  }, [])

  const { boardMode, padsEnabled, followView } = settings

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
        .then(d => { if (active && d) onSettings({ boardMode: d.boardMode, padsEnabled: d.padsEnabled, followView: d.view?.follow ?? true }) })
        .catch(() => {})
    }
    check() // immediate — don't make students wait a full interval
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

  const setFollow = async (follow: boolean) => {
    setSettings(s => ({ ...s, followView: follow }))
    await fetch(`/api/live-sessions/${sessionId}/board`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ owner: 'view', follow }),
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
              <span className="text-xs text-gray-500 dark:text-gray-400">Students follow my view:</span>
              <button
                onClick={() => void setFollow(!followView)}
                className={chip(followView)}
                title="Students' class boards scroll and zoom to the area you're looking at"
              >
                {followView ? 'On' : 'Off'}
              </button>
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
            viewRole={youAreTeacher ? 'broadcast' : 'follow'}
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
