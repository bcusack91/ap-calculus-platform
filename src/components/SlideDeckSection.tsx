'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Excalidraw, CaptureUpdateAction } from '@excalidraw/excalidraw'
import '@excalidraw/excalidraw/index.css'
import { asScene, sceneVersion, type BoardScene, type BoardElement, mergeScenes, EMPTY_SCENE } from '@/lib/board-merge'
import { PEN_SIZES, PEN_SIZE_ORDER, loadPenSize, penSizeAppState, savePenSize, type PenSize } from '@/lib/pen-sizes'
import { deckPalette, SlideMotionStyles, SlideStage, TitleSlideView, ContentSlideView, QuizSlideView, PollSlideView, type PollOptionState } from '@/components/SlideVisuals'
import { lockStageView, needsAnswerStrip, stageView, toLogicalScene } from '@/lib/slide-stage'
import type { SlideFigure } from '@/lib/slide-deck'
import { hasNoteSheets } from '@/data/note-sheets'
import { classCourseCount, orderLauncherCourses, type LauncherCourse } from '@/lib/deck-launcher-courses'
import { useRelay, useRelayMessages } from '@/components/live/LiveRelayProvider'
import { changedElements, LASER_MIN_INTERVAL_MS, LASER_STALE_MS, STROKE_FLUSH_MS, type RelayMessage } from '@/lib/live-relay-messages'

declare global {
  interface Window { EXCALIDRAW_ASSET_PATH?: string }
}
if (typeof window !== 'undefined') {
  window.EXCALIDRAW_ASSET_PATH = '/excalidraw-assets/'
}

/**
 * The in-class presentation on /live/[id] — auto-generated slide deck with
 * live polls (owner spec: Peardeck-style).
 *
 * Teacher: prev/next controls drive everyone's view; poll slides show the
 * answer distribution filling live plus a responder list; "Reveal answer"
 * shows the class the correct option + explanation. Students: view follows
 * the teacher's slide; on polls they tap an answer (changeable until reveal)
 * and then see the class distribution. Deck ends on the exit-quiz handoff
 * slide. Sync = the same 2.5s polling pattern as chat/boards, which remains
 * the record; when the live relay is configured (live-relay/), slide changes,
 * pen strokes and the laser pointer also travel over a WebSocket and land in
 * well under a second. Students never receive answer keys until reveal.
 *
 * Every viewer sees the IDENTICAL slide: slides render on a fixed 1280 × 720
 * logical stage scaled to each screen (SlideStage / src/lib/slide-stage.ts),
 * and the pen canvas is locked to that stage (zoom = scale, no pan), so the
 * teacher's strokes land on the same word for everyone — owner, 2026-10-22.
 */

type Slide =
  | { kind: 'title'; title: string; subtitle: string }
  | { kind: 'content'; title: string; blocks: string[]; figure?: SlideFigure; layout?: 'side' | 'full' | 'grid' }
  | { kind: 'poll'; question: string; options: string[]; correctIndex: number; explanation: string }
  | { kind: 'quiz'; topicSlug: string; title: string }

/** How long a locally applied slide change outranks a disagreeing poll (ms). */
const SLIDE_HOLD_MS = 3000

/** One line per slide for the teacher's jump list. */
function slideLabel(s: Slide): string {
  const text = s.kind === 'poll' ? `Quick check: ${s.question}` : s.kind === 'quiz' ? `Exit quiz: ${s.title}` : s.title
  return text.length > 56 ? `${text.slice(0, 55).trimEnd()}…` : text
}

/** counts/total are null for students until the teacher reveals the answer. */
interface PollState { counts: number[] | null; total: number | null; myAnswer: number | null; classSize?: number }

interface DeckState {
  id: string
  title: string
  topicSlug: string
  currentSlide: number
  slideCount: number
  revealed: number[]
  status: string
  poll: PollState | null
  annotation?: { rev: number; scene?: unknown }
  youAreTeacher: boolean
  currentReveal?: { correctIndex: number; explanation: string } | null
  slides?: Slide[]
}

export default function SlideDeckSection({
  sessionId,
  youAreTeacher,
  classroomId,
  onActiveChange,
}: {
  sessionId: string
  youAreTeacher: boolean
  classroomId: string
  /** Fires when a presentation starts/ends — the page uses it to minimize the video. */
  onActiveChange?: (active: boolean) => void
}) {
  const [deck, setDeck] = useState<DeckState | null>(null)
  const [slides, setSlides] = useState<Slide[] | null>(null)
  const slidesForRef = useRef<string | null>(null)
  const [busy, setBusy] = useState(false)
  const activeRef = useRef(false)
  // Teacher pen: toggles an interactive transparent canvas over the slide.
  const [annotating, setAnnotating] = useState(false)
  const annApiRef = useRef<ExcalApi | null>(null)
  const onAnnApi = useCallback((api: ExcalApi | null) => { annApiRef.current = api }, [])
  const [penTool, setPenTool] = useState<PenTool>('red')
  // Pen thickness, remembered on this device (Fine by default: Medium, the old
  // fixed width, read as too big on a slide).
  const [penSize, setPenSizeState] = useState<PenSize>(loadPenSize)
  const setPenSize = useCallback((s: PenSize) => { setPenSizeState(s); savePenSize(s) }, [])
  // The presenter's canvas as last changed, so Done can show it at once: the
  // view layer otherwise mounts from the last POLLED copy, briefly re-showing
  // a stroke undone or cleared in the final seconds (until the poll catches up).
  const localSceneRef = useRef<BoardScene | null>(null)
  const onLocalScene = useCallback((scene: BoardScene) => { localSceneRef.current = scene }, [])
  const toggleAnnotating = () => {
    if (annotating && deck && localSceneRef.current) {
      const key = `${deck.id}:${deck.currentSlide}`
      const local = localSceneRef.current
      setAnnScene(prev => ({ key, rev: prev?.key === key ? prev.rev : 0, seq: (prev?.key === key ? prev.seq : 0) + 1, scene: mergeScenes(prev?.key === key ? prev.scene : EMPTY_SCENE, local) }))
    }
    localSceneRef.current = null
    setAnnotating(v => !v)
  }
  // Latest annotation scene for the CURRENT slide: `rev` is the database's
  // revision (from the poll), `seq` counts every local change to the scene
  // (poll merges and relay deltas alike) so the view layer knows to re-apply.
  const [annScene, setAnnScene] = useState<{ key: string; rev: number; seq: number; scene: BoardScene } | null>(null)
  const annRevRef = useRef(-1)
  const annSlideRef = useRef<string>('')
  // Full screen (whole section, controls included): the teacher projects it;
  // a phone student gets the slide as big as the screen allows.
  const rootRef = useRef<HTMLDivElement>(null)
  const [canFullscreen, setCanFullscreen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  useEffect(() => {
    setCanFullscreen(!!document.fullscreenEnabled)
    const onChange = () => setIsFullscreen(document.fullscreenElement === rootRef.current && !!rootRef.current)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])
  const toggleFullscreen = () => {
    if (document.fullscreenElement) void document.exitFullscreen().catch(() => {})
    else void rootRef.current?.requestFullscreen().catch(() => {})
  }

  // ---- Live relay (live-relay/): slide changes, strokes and the laser reach
  // everyone in well under a second; the polls remain the record, so nothing
  // here is required for correctness and a session without a relay still
  // works as before. ----
  const deckRef = useRef<DeckState | null>(null)
  useEffect(() => {
    deckRef.current = deck
  }, [deck])
  const slidesRef = useRef<Slide[] | null>(null)
  useEffect(() => {
    slidesRef.current = slides
  }, [slides])
  // The teacher's laser as received: the last few positions (a short trail)
  // in logical stage units; hidden when no update arrives for a while.
  const [laser, setLaser] = useState<{ slide: number; points: { x: number; y: number }[]; at: number } | null>(null)
  useEffect(() => {
    if (!laser) return
    const t = setTimeout(() => setLaser(l => (l && l.at === laser.at ? null : l)), LASER_STALE_MS)
    return () => clearTimeout(t)
  }, [laser])
  const applyDeckMessage = useCallback((m: Extract<RelayMessage, { t: 'deck' }>) => {
    const prev = deckRef.current
    if (!prev || prev.id !== m.deckId) return
    if (m.ended) {
      setDeck(p => (p?.id === m.deckId ? null : p))
      return
    }
    const slideChanged = m.currentSlide !== undefined && m.currentSlide !== prev.currentSlide
    if (slideChanged) {
      const key = `${prev.id}:${m.currentSlide}`
      annSlideRef.current = key
      annRevRef.current = -1
      setAnnScene(s => (s?.key === key ? s : null))
      setLaser(null)
      slideOverrideRef.current = { deckId: prev.id, index: m.currentSlide as number, at: Date.now() }
    }
    setDeck(p => {
      if (!p || p.id !== m.deckId) return p
      const next = { ...p }
      if (slideChanged) {
        next.currentSlide = m.currentSlide as number
        // The new slide's poll state and reveal arrive with the next poll.
        next.poll = null
        next.currentReveal = null
      }
      if (m.reveal) {
        if (!next.revealed.includes(m.reveal.index)) next.revealed = [...next.revealed, m.reveal.index]
        if (m.reveal.index === next.currentSlide) next.currentReveal = { correctIndex: m.reveal.correctIndex, explanation: m.reveal.explanation }
      }
      return next
    })
  }, [])
  const onRelayMessage = useCallback((m: RelayMessage) => {
    if (m.t === 'deck') {
      applyDeckMessage(m)
      return
    }
    if (m.t !== 'els' && m.t !== 'laser') return // whiteboard traffic (LiveBoards)
    const d = deckRef.current
    if (!d || m.deckId !== d.id || m.slide !== d.currentSlide) return
    if (m.t === 'els') {
      const key = `${d.id}:${m.slide}`
      setAnnScene(prev => {
        const same = prev?.key === key
        return {
          key,
          rev: same ? prev.rev : 0,
          seq: (same ? prev.seq : 0) + 1,
          scene: mergeScenes(same ? prev.scene : EMPTY_SCENE, { elements: m.els, files: {}, logical: true }),
        }
      })
    } else {
      const now = Date.now()
      setLaser(prev => (m.on
        ? { slide: m.slide, at: now, points: [...(prev && prev.slide === m.slide ? prev.points.slice(-9) : []), { x: m.x, y: m.y }] }
        : null))
    }
  }, [applyDeckMessage])
  // The page's shared relay socket (LiveRelayProvider); inert without one.
  const relay = useRelay()
  useRelayMessages(onRelayMessage)
  const relaySend = relay.send
  const relayEls = useCallback((els: BoardElement[]) => {
    const d = deckRef.current
    if (d) relaySend({ t: 'els', deckId: d.id, slide: d.currentSlide, els })
  }, [relaySend])
  const laserLastRef = useRef(0)
  const laserOnRef = useRef(false)
  const relayLaser = useCallback((p: { x: number; y: number; on: boolean }) => {
    const d = deckRef.current
    if (!d) return
    const now = Date.now()
    if (p.on) {
      if (now - laserLastRef.current < LASER_MIN_INTERVAL_MS) return
      laserOnRef.current = true
    } else {
      if (!laserOnRef.current) return // "off" goes out once, not on every mouse move
      laserOnRef.current = false
    }
    laserLastRef.current = now
    relaySend({ t: 'laser', deckId: d.id, slide: d.currentSlide, x: p.x, y: p.y, on: p.on })
  }, [relaySend])

  const control = useCallback(async (payload: Record<string, unknown>) => {
    // Teacher navigation goes out over the relay first and applies here at
    // once; the POST below makes it the record and the poll confirms it.
    const d = deckRef.current
    if (d && payload.action === 'goto' && typeof payload.index === 'number') {
      const m: RelayMessage = { t: 'deck', deckId: d.id, currentSlide: payload.index }
      relaySend(m)
      applyDeckMessage(m)
    } else if (d && payload.action === 'reveal' && typeof payload.index === 'number') {
      const s = slidesRef.current?.[payload.index]
      if (s?.kind === 'poll') {
        const m: RelayMessage = { t: 'deck', deckId: d.id, reveal: { index: payload.index, correctIndex: s.correctIndex, explanation: s.explanation } }
        relaySend(m)
        applyDeckMessage(m)
      }
    } else if (d && payload.action === 'end') {
      relaySend({ t: 'deck', deckId: d.id, ended: true })
    }
    const r = await fetch(`/api/live-sessions/${sessionId}/deck`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    // The change is in the database from now on: polls started before this
    // moment may still carry the old slide, so the hold runs from here.
    const o = slideOverrideRef.current
    if (r.ok && d && o && o.deckId === d.id && payload.action === 'goto' && o.index === payload.index) o.at = Date.now()
    return r.ok
  }, [sessionId, relaySend, applyDeckMessage])

  // A slide change applied locally (the teacher's click, or a relay message)
  // before the database has it: a poll that STARTED before `at` + the hold
  // window may still carry the old slide and must not drag the view back.
  // Cleared once a poll agrees; after the hold the database wins regardless
  // (the change never landed).
  const slideOverrideRef = useRef<{ deckId: string; index: number; at: number } | null>(null)

  // State poll (2.5s) + one-time full fetch per deck id.
  useEffect(() => {
    let active = true
    const poll = async () => {
      try {
        const started = Date.now()
        const r = await fetch(`/api/live-sessions/${sessionId}/deck?annRev=${annRevRef.current}`, { cache: 'no-store' })
        if (!r.ok || !active) return
        let d = (await r.json()).deck as DeckState | null
        const o = slideOverrideRef.current
        if (d && o && o.deckId === d.id) {
          if (d.currentSlide === o.index) slideOverrideRef.current = null
          else if (started < o.at + SLIDE_HOLD_MS) {
            // Stale with respect to the local change: keep our slide; the
            // tallies and strokes in this response belong to the old one.
            d = { ...d, currentSlide: o.index, poll: null, currentReveal: null, annotation: undefined }
          }
        }
        // Reveals only ever grow within a deck: never lose one a relay message delivered.
        const prevDeck = deckRef.current
        if (d && prevDeck && prevDeck.id === d.id && prevDeck.revealed.some(i => !d!.revealed.includes(i))) {
          d = { ...d, revealed: [...new Set([...d.revealed, ...prevDeck.revealed])] }
        }
        setDeck(d)
        if (d) {
          const slideKey = `${d.id}:${d.currentSlide}`
          if (annSlideRef.current !== slideKey) {
            // New slide — forget the old slide's annotation state and refetch
            // (unless the relay already delivered strokes for this slide).
            annSlideRef.current = slideKey
            annRevRef.current = -1
            setAnnScene(prev => (prev?.key === slideKey ? prev : null))
          }
          if (d.annotation) {
            if (d.annotation.scene !== undefined) {
              const rev = d.annotation.rev
              const polled = asScene(d.annotation.scene)
              annRevRef.current = rev
              // Merge, never replace: strokes that came over the relay in the
              // last ~2 s are newer than the database's copy (version wins).
              setAnnScene(prev => ({
                key: slideKey,
                rev,
                seq: (prev?.key === slideKey ? prev.seq : 0) + 1,
                scene: prev?.key === slideKey ? mergeScenes(prev.scene, polled) : polled,
              }))
            } else if (d.annotation.rev !== annRevRef.current && d.annotation.rev < annRevRef.current) {
              // Rev went backwards (deck restarted) — resync next poll.
              annRevRef.current = -1
            }
          }
        }
        const nowActive = !!d
        if (nowActive !== activeRef.current) {
          activeRef.current = nowActive
          onActiveChange?.(nowActive)
        }
        if (d && slidesForRef.current !== d.id) {
          const full = await fetch(`/api/live-sessions/${sessionId}/deck?full=1`, { cache: 'no-store' })
          if (full.ok && active) {
            const fd = (await full.json()).deck as DeckState | null
            if (fd?.slides) {
              setSlides(fd.slides)
              slidesForRef.current = fd.id
            }
          }
        }
      } catch { /* transient — next poll retries */ }
    }
    poll()
    const t = setInterval(poll, 2500)
    return () => { active = false; clearInterval(t) }
  }, [sessionId, onActiveChange])

  if (!deck || !slides) {
    return youAreTeacher
      ? <DeckLauncher sessionId={sessionId} classroomId={classroomId} />
      : null
  }
  const slide = slides[deck.currentSlide]
  if (!slide) return null
  // The view layer mounts only once a slide has strokes (keyed below), so the
  // canvas initialises WITH them: a scene pushed before the canvas finishes
  // its async init is dropped, which left viewers blank until the next stroke.
  const annHasStrokes = !!(annScene && annScene.key === `${deck.id}:${deck.currentSlide}` && annScene.scene.elements.some(el => !el.isDeleted))
  const palette = deckPalette(deck.title)
  const isRevealed = deck.revealed.includes(deck.currentSlide)
  const reveal = deck.youAreTeacher && slide.kind === 'poll'
    ? { correctIndex: slide.correctIndex, explanation: slide.explanation }
    : deck.currentReveal ?? null

  const answer = async (i: number) => {
    if (busy || isRevealed) return
    setBusy(true)
    try { await control({ action: 'answer', slideIndex: deck.currentSlide, answerIndex: i }) }
    finally { setBusy(false) }
  }

  // One option list for everyone; only the marks differ (teacher: tallies,
  // student: own answer) and those overlay the row without moving anything.
  const showTallies = (youAreTeacher || isRevealed) && deck.poll?.counts != null
  const pollStates: PollOptionState[] = slide.kind === 'poll'
    ? slide.options.map((_, i) => {
        const count = deck.poll?.counts?.[i] ?? 0
        const total = deck.poll?.total ?? 0
        return {
          mine: deck.poll?.myAnswer === i,
          correct: !!reveal && isRevealed && reveal.correctIndex === i,
          count,
          pct: total > 0 ? Math.round((count / total) * 100) : 0,
        }
      })
    : []
  const pollChip = `📊 Quick check ${isRevealed ? '· answer revealed' : deck.poll?.total != null ? `· ${deck.poll.total}${deck.poll.classSize != null ? ` of ${deck.poll.classSize}` : ''} answered` : deck.poll?.myAnswer != null ? '· your answer is in' : ''}`
  const pollStatus = youAreTeacher
    ? (deck.poll?.total != null && deck.poll.classSize != null
        ? `${deck.poll.total} of ${deck.poll.classSize} student${deck.poll.classSize === 1 ? '' : 's'} answered`
        : null)
    : deck.poll?.myAnswer === null && !isRevealed
      ? 'Tap an answer — you can change it until your teacher reveals.'
      : null
  const canAnswer = !youAreTeacher && !isRevealed && !busy

  return (
    <div ref={rootRef} className={`mb-4 rounded-2xl border-2 border-indigo-300 bg-white shadow-lg dark:border-indigo-700 dark:bg-gray-800 ${isFullscreen ? 'flex flex-col overflow-auto' : ''}`}>
      {/* Header / controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-4 py-2.5 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            🖥️ Presenting
          </span>
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{deck.title}</span>
          {/* Guided notes that follow these slides (src/lib/note-sheets.ts); a new tab, so nobody leaves class. */}
          {hasNoteSheets(deck.topicSlug) && (
            <Link href={`/topics/${deck.topicSlug}/notes`} target="_blank" className="text-xs font-semibold text-accent hover:text-accent-hover dark:text-accent-muted">
              Printable notes
            </Link>
          )}
          {youAreTeacher ? (
            // Jump to any slide: a native select, so it works with a keyboard,
            // on a phone and inside full screen without a popover of our own.
            <select
              aria-label="Jump to slide"
              title="Jump to slide"
              value={deck.currentSlide}
              onChange={(e) => void control({ action: 'goto', index: Number(e.target.value) })}
              className="max-w-[16rem] cursor-pointer rounded-md border border-gray-300 bg-white px-1.5 py-0.5 text-xs text-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
            >
              {slides.map((s, i) => (
                <option key={i} value={i}>{i + 1}/{deck.slideCount} · {slideLabel(s)}</option>
              ))}
            </select>
          ) : (
            <span className="text-xs text-gray-400">slide {deck.currentSlide + 1}/{deck.slideCount}</span>
          )}
          {youAreTeacher && relay.connected && (
            <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400" title="Live relay connected: students see your slide changes, pen and laser within a fraction of a second">● live</span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {youAreTeacher && (
            <>
              <button
                onClick={() => void control({ action: 'goto', index: deck.currentSlide - 1 })}
                disabled={deck.currentSlide === 0}
                className="rounded-lg border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-700 disabled:opacity-40 dark:border-gray-600 dark:text-gray-300"
              >◀ Back</button>
              <button
                onClick={() => void control({ action: 'goto', index: deck.currentSlide + 1 })}
                disabled={deck.currentSlide >= deck.slideCount - 1}
                className="rounded-lg bg-indigo-600 px-4 py-1 text-sm font-semibold text-white disabled:opacity-40"
              >Next ▶</button>
              <button
                onClick={toggleAnnotating}
                className={`rounded-lg px-3 py-1 text-sm font-semibold ${annotating ? 'bg-amber-500 text-white' : 'border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300'}`}
                title={annotating ? 'Stop annotating (buttons become clickable again)' : 'Draw on this slide — students see your strokes live'}
              >
                {annotating ? '✅ Done' : '✏️ Annotate'}
              </button>
              {annotating && <PenToolbar apiRef={annApiRef} tool={penTool} setTool={setPenTool} size={penSize} setSize={setPenSize} />}
              {slide.kind === 'poll' && !isRevealed && (
                <button
                  onClick={() => void control({ action: 'reveal', index: deck.currentSlide })}
                  className="rounded-lg bg-emerald-600 px-3 py-1 text-sm font-semibold text-white"
                >Reveal answer</button>
              )}
            </>
          )}
          {canFullscreen && (
            <button
              type="button"
              onClick={toggleFullscreen}
              className="rounded-lg border border-gray-300 px-2.5 py-1 text-sm font-semibold text-gray-700 dark:border-gray-600 dark:text-gray-300"
              title={isFullscreen ? 'Exit full screen' : 'Full screen — the slide as big as this screen allows'}
              aria-label={isFullscreen ? 'Exit full screen' : 'Full screen'}
            >{isFullscreen ? '🗗' : '⛶'}</button>
          )}
          {youAreTeacher && (
            <button
              onClick={() => { if (confirm('End the presentation for everyone?')) void control({ action: 'end' }) }}
              className="rounded-lg border border-red-300 px-3 py-1 text-sm font-semibold text-red-600 dark:border-red-700 dark:text-red-400"
            >End</button>
          )}
        </div>
      </div>

      <SlideMotionStyles />
      {/* Stable wrapper: the lesson recorder crops to this area (the stage
          itself remounts on every slide). */}
      <div data-recording-region="slides" className={`isolate rounded-b-2xl bg-white dark:bg-gray-800 ${isFullscreen ? 'flex flex-1 flex-col justify-center' : ''}`}>
      {/* The stage: identical 1280 × 720 layout for everyone, scaled to this
          screen; the pen canvas sits over the stage box in viewer pixels with
          its zoom locked to the same scale (slide-stage.ts). */}
      <SlideStage
        key={deck.currentSlide}
        overlay={(k) => (
          <>
            <AnnotationLayer
              key={`${deck.id}:${deck.currentSlide}:${youAreTeacher && annotating ? 'draw' : `view-${annHasStrokes ? 1 : 0}`}`}
              sessionId={sessionId}
              slideIndex={deck.currentSlide}
              canDraw={youAreTeacher && annotating}
              remote={annScene && annScene.key === `${deck.id}:${deck.currentSlide}` ? annScene : null}
              onApi={onAnnApi}
              onLocalScene={onLocalScene}
              onElements={relayEls}
              onLaser={relayLaser}
              tool={penTool}
              size={penSize}
              scale={k}
            />
            {laser && laser.slide === deck.currentSlide && <LaserOverlay points={laser.points} k={k} />}
          </>
        )}
        below={(k) => {
          // On a phone the stage's own buttons are too small to tap, so the
          // student gets native-size ones under it (the stage itself must stay
          // identical to the teacher's — the pen layer is anchored to it).
          if (!needsAnswerStrip(k)) return null
          if (slide.kind === 'poll' && !youAreTeacher) {
            return (
              <div className="flex flex-wrap items-center gap-2 px-4 py-3" role="group" aria-label="Answer">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{isRevealed ? 'Answer revealed' : 'Your answer:'}</span>
                {slide.options.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => void answer(i)}
                    disabled={!canAnswer}
                    aria-pressed={deck.poll?.myAnswer === i}
                    className={`inline-flex h-11 min-w-11 items-center justify-center rounded-xl border-2 px-3 text-base font-bold ${
                      pollStates[i]?.correct
                        ? 'border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                        : deck.poll?.myAnswer === i
                        ? palette.ring
                        : 'border-gray-200 text-gray-700 dark:border-gray-600 dark:text-gray-200'
                    } disabled:opacity-60`}
                  >{String.fromCharCode(65 + i)}</button>
                ))}
              </div>
            )
          }
          if (slide.kind === 'quiz') {
            return (
              <div className="px-4 py-3">
                <Link
                  href={`/topics/${slide.topicSlug}/interactive?exitQuiz=1`}
                  target="_blank"
                  className="inline-flex h-11 items-center rounded-xl bg-indigo-600 px-5 text-base font-semibold text-white"
                >
                  Open the exit quiz →
                </Link>
              </div>
            )
          }
          return null
        }}
      >
        {slide.kind === 'title' && (
          <TitleSlideView title={slide.title} subtitle={slide.subtitle} palette={palette} />
        )}

        {slide.kind === 'content' && (
          <ContentSlideView title={slide.title} blocks={slide.blocks} palette={palette} figure={slide.figure} layout={slide.layout} />
        )}

        {slide.kind === 'poll' && (
          <PollSlideView
            question={slide.question}
            options={slide.options}
            palette={palette}
            chipText={pollChip}
            states={pollStates}
            showTallies={showTallies}
            statusText={pollStatus}
            explanation={reveal && isRevealed && reveal.explanation ? reveal.explanation : null}
            onPick={youAreTeacher ? undefined : (i) => void answer(i)}
            disabled={!canAnswer}
          />
        )}

        {slide.kind === 'quiz' && (
          <QuizSlideView title={slide.title} palette={palette}>
            <Link
              href={`/topics/${slide.topicSlug}/interactive?exitQuiz=1`}
              target="_blank"
              className="inline-block rounded-xl bg-white px-10 py-4 text-[1.25em] font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
            >
              Open the exit quiz →
            </Link>
          </QuizSlideView>
        )}
      </SlideStage>
      </div>
    </div>
  )
}


/**
 * Teacher-only launcher shown while nothing is being presented: pick a course
 * (the class's own courses first, then any course with slides) and one of its
 * topics — this week's class-plan topics float to the top — and start the deck.
 */
function DeckLauncher({ sessionId, classroomId }: { sessionId: string; classroomId: string }) {
  const [courses, setCourses] = useState<LauncherCourse[]>([])
  const [ownCount, setOwnCount] = useState(0)
  const [course, setCourse] = useState('')
  /** class-plan course key per course slug, for this week's recommendations. */
  const [planKeys, setPlanKeys] = useState<Map<string, string>>(new Map())
  const [recommended, setRecommended] = useState<{ slug: string; name: string }[]>([])
  const [catalog, setCatalog] = useState<{ name: string; topics: { slug: string; title: string; slideCount: number; pollCount: number }[] }[]>([])
  const [pick, setPick] = useState('')
  const [starting, setStarting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Which courses to offer: assigned to the class, then diagnosed, then the rest.
  useEffect(() => {
    let active = true
    const load = async () => {
      try {
        const [assignedRes, discRes, libRes] = await Promise.all([
          fetch(`/api/teacher/classrooms/${classroomId}/courses`, { cache: 'no-store' }),
          fetch(`/api/teacher/classrooms/${classroomId}/class-plan`, { cache: 'no-store' }),
          fetch('/api/teacher/slide-library', { cache: 'no-store' }),
        ])
        const assigned: string[] = assignedRes.ok ? ((await assignedRes.json()).courseSlugs ?? []) : []
        const disc = discRes.ok ? await discRes.json() : null
        const available: { key: string; courseSlug: string | null }[] = disc?.availableCourses ?? []
        const library: LauncherCourse[] = libRes.ok ? ((await libRes.json()).courses ?? []) : []
        if (!active) return
        const diagnosed = available.map(c => c.courseSlug)
        const ordered = orderLauncherCourses(library, assigned, diagnosed)
        setCourses(ordered)
        setOwnCount(classCourseCount(ordered, assigned, diagnosed))
        setPlanKeys(new Map(available.filter(c => c.courseSlug).map(c => [c.courseSlug as string, c.key])))
        setCourse(ordered[0]?.slug ?? '')
      } catch { /* launcher just stays hidden */ }
    }
    void load()
    return () => { active = false }
  }, [classroomId])

  // The chosen course's catalog, with this week's class-plan topics on top.
  useEffect(() => {
    if (!course) return
    let active = true
    const load = async () => {
      try {
        const planKey = planKeys.get(course)
        const [planRes, libRes] = await Promise.all([
          planKey
            ? fetch(`/api/teacher/classrooms/${classroomId}/class-plan?course=${encodeURIComponent(planKey)}`, { cache: 'no-store' })
            : Promise.resolve(null),
          fetch(`/api/teacher/slide-library?course=${encodeURIComponent(course)}`, { cache: 'no-store' }),
        ])
        const pd = planRes?.ok ? await planRes.json() : null
        const ld = libRes.ok ? await libRes.json() : null
        if (!active) return
        const list: { slug: string; name: string }[] = (pd?.classTopics ?? [])
          .filter((t: { lessonPath: string | null }) => t.lessonPath)
          .map((t: { slug: string; name: string }) => ({ slug: t.slug, name: t.name }))
        const cats = ld?.categories ?? []
        setRecommended(list)
        setCatalog(cats)
        setPick(list[0]?.slug || cats[0]?.topics?.[0]?.slug || '')
      } catch { /* keep the previous course's picker */ }
    }
    void load()
    return () => { active = false }
  }, [course, classroomId, planKeys])

  if (courses.length === 0) return null

  const start = async () => {
    setStarting(true)
    setError(null)
    try {
      const r = await fetch(`/api/live-sessions/${sessionId}/deck`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'start', topicSlug: pick }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) setError(d.error || 'Could not build the deck')
      // Success: the 2.5s state poll picks the deck up and swaps the UI in.
    } finally {
      setStarting(false)
    }
  }

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 dark:border-indigo-800 dark:bg-indigo-900/20">
      <span className="text-sm font-semibold text-indigo-800 dark:text-indigo-300">🖥️ Present slides:</span>
      {courses.length > 1 && (
        <select
          aria-label="Course"
          value={course}
          onChange={e => setCourse(e.target.value)}
          className="max-w-[14rem] rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          {ownCount > 0 && (
            <optgroup label="This class">
              {courses.slice(0, ownCount).map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </optgroup>
          )}
          <optgroup label={ownCount > 0 ? 'Other courses' : 'Courses'}>
            {courses.slice(ownCount).map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </optgroup>
        </select>
      )}
      <select
        aria-label="Topic"
        value={pick}
        onChange={e => setPick(e.target.value)}
        className="max-w-xs rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      >
        {recommended.length > 0 && (
          <optgroup label="⭐ Recommended this week">
            {recommended.map(t => <option key={`rec-${t.slug}`} value={t.slug}>{t.name}</option>)}
          </optgroup>
        )}
        {catalog.map(cat => (
          <optgroup key={cat.name} label={cat.name}>
            {cat.topics.map(t => <option key={t.slug} value={t.slug}>{t.title} ({t.slideCount} slides)</option>)}
          </optgroup>
        ))}
      </select>
      <button
        onClick={() => void start()}
        disabled={starting || !pick}
        className="rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
      >
        {starting ? 'Building deck…' : 'Start presenting'}
      </button>
      <span className="text-xs text-indigo-600/70 dark:text-indigo-400/70">
        Slides from the lesson with live polls between sections — students&apos; screens follow yours.
      </span>
      {error && <span className="text-xs text-red-600 dark:text-red-400">{error}</span>}
    </div>
  )
}

/* Structural slice of ExcalidrawImperativeAPI — just what the sync and the pen toolbar use. */
interface ExcalApi {
  updateScene: (scene: { elements?: BoardElement[]; appState?: Record<string, unknown>; captureUpdate?: unknown }) => void
  addFiles: (files: unknown[]) => void
  setActiveTool: (tool: { type: 'freedraw' | 'eraser' | 'laser' | 'selection'; locked?: boolean }) => void
  getAppState: () => { zoom?: { value?: number }; scrollX?: number; scrollY?: number }
  getSceneElementsIncludingDeleted: () => readonly BoardElement[]
  getFiles: () => Record<string, unknown>
}

type PenTool = 'red' | 'blue' | 'black' | 'highlighter' | 'eraser' | 'laser'
// Stroke width comes from the presenter's pen size (src/lib/pen-sizes.ts).
const PENS: Record<Exclude<PenTool, 'eraser' | 'laser'>, { label: string; color: string; opacity: number; swatch: string }> = {
  red: { label: 'Red pen', color: '#e03131', opacity: 100, swatch: 'bg-[#e03131]' },
  blue: { label: 'Blue pen', color: '#1971c2', opacity: 100, swatch: 'bg-[#1971c2]' },
  black: { label: 'Black pen', color: '#1e1e1e', opacity: 100, swatch: 'bg-[#1e1e1e]' },
  highlighter: { label: 'Highlighter', color: '#ffd43b', opacity: 40, swatch: 'bg-[#ffd43b]' },
}

/** Mark a stroke deleted the way Excalidraw does (a higher version), so every viewer's merge drops it too. */
function softDelete(el: BoardElement): BoardElement {
  return { ...el, isDeleted: true, version: (el.version ?? 0) + 1, versionNonce: Math.floor(Math.random() * 2 ** 31), updated: Date.now() }
}

const toolType = (tool: PenTool): 'freedraw' | 'eraser' | 'laser' => (tool === 'eraser' || tool === 'laser' ? tool : 'freedraw')

/** The stroke settings a pen tool needs in Excalidraw's appState. */
export function penAppState(tool: PenTool, size: PenSize): Record<string, unknown> {
  if (tool === 'eraser' || tool === 'laser') return {}
  const pen = PENS[tool]
  return { currentItemStrokeColor: pen.color, currentItemOpacity: pen.opacity, ...penSizeAppState(size, tool === 'highlighter') }
}

/** Set the canvas up for drawing: pen in hand, stays in hand after each stroke. */
function applyPen(api: ExcalApi, tool: PenTool, size: PenSize) {
  const appState = penAppState(tool, size)
  if (Object.keys(appState).length) api.updateScene({ appState })
  api.setActiveTool({ type: toolType(tool), locked: true })
}

/**
 * The presenter's pen tools, in the bar above the slide (the canvas's own
 * toolbar is hidden — it covered the slide). Undo and Clear soft-delete
 * strokes so students' copies drop them too.
 */
function PenToolbar({
  apiRef,
  tool,
  setTool,
  size,
  setSize,
}: {
  apiRef: React.MutableRefObject<ExcalApi | null>
  tool: PenTool
  setTool: (t: PenTool) => void
  size: PenSize
  setSize: (s: PenSize) => void
}) {
  const select = (t: PenTool) => {
    setTool(t)
    if (apiRef.current) applyPen(apiRef.current, t, size)
  }
  const pickSize = (s: PenSize) => {
    setSize(s)
    // Keep the chosen pen in hand at the new size (the eraser/laser just keep going).
    if (apiRef.current) applyPen(apiRef.current, tool, s)
  }
  const undo = () => {
    const api = apiRef.current
    if (!api) return
    const elements = [...api.getSceneElementsIncludingDeleted()]
    const last = [...elements].reverse().find(el => !el.isDeleted)
    if (!last) return
    api.updateScene({ elements: elements.map(el => (el.id === last.id ? softDelete(el) : el)), captureUpdate: CaptureUpdateAction.IMMEDIATELY })
  }
  const clear = () => {
    const api = apiRef.current
    if (!api) return
    const elements = [...api.getSceneElementsIncludingDeleted()]
    if (!elements.some(el => !el.isDeleted)) return
    if (!confirm('Clear every drawing on this slide?')) return
    api.updateScene({ elements: elements.map(el => (el.isDeleted ? el : softDelete(el))), captureUpdate: CaptureUpdateAction.IMMEDIATELY })
  }
  const btn = (active: boolean) =>
    `inline-flex h-8 min-w-8 items-center justify-center gap-1 rounded-md px-1.5 text-xs font-semibold transition ${active ? 'bg-amber-500 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'}`
  return (
    <div className="flex flex-wrap items-center gap-1" role="toolbar" aria-label="Pen tools">
      {(Object.keys(PENS) as (keyof typeof PENS)[]).map(k => (
        <button key={k} type="button" onClick={() => select(k)} aria-pressed={tool === k} title={PENS[k].label} aria-label={PENS[k].label} className={btn(tool === k)}>
          <span className={`h-3.5 w-3.5 rounded-full ${PENS[k].swatch} ${k === 'highlighter' ? 'opacity-70' : ''}`} aria-hidden />
        </button>
      ))}
      <span className="mx-0.5 h-5 w-px bg-gray-200 dark:bg-gray-600" aria-hidden />
      <div className="flex items-center gap-0.5" role="group" aria-label="Pen size">
        {PEN_SIZE_ORDER.map(s => (
          <button key={s} type="button" onClick={() => pickSize(s)} aria-pressed={size === s} title={`${PEN_SIZES[s].label} pen`} aria-label={`${PEN_SIZES[s].label} pen`} className={btn(size === s)}>
            <span className={`${PEN_SIZES[s].dot} rounded-full bg-current`} aria-hidden />
          </button>
        ))}
      </div>
      <span className="mx-0.5 h-5 w-px bg-gray-200 dark:bg-gray-600" aria-hidden />
      <button type="button" onClick={() => select('eraser')} aria-pressed={tool === 'eraser'} title="Eraser" className={btn(tool === 'eraser')}>Eraser</button>
      <button type="button" onClick={() => select('laser')} aria-pressed={tool === 'laser'} title="Laser pointer (fades, not saved)" className={btn(tool === 'laser')}>Laser</button>
      <button type="button" onClick={undo} title="Remove the last stroke" className={btn(false)}>Undo</button>
      <button type="button" onClick={clear} title="Clear every drawing on this slide" className={btn(false)}>Clear</button>
    </div>
  )
}

/**
 * The pen layer over a slide. One component, two personalities:
 *
 *  canDraw (teacher, Annotate mode) — an interactive Excalidraw with a
 *  transparent background covering the slide; strokes push every ~2s via the
 *  deck route's `annotate` action (element-merged server-side, so co-teachers
 *  converge). Remounted per slide via the parent's key, with the slide's
 *  stored strokes as initial data.
 *
 *  view (students + teacher when not annotating) — the same canvas in view
 *  mode with pointer-events disabled: purely visual, updated as the state
 *  poll delivers new revisions. Renders nothing until the slide has strokes.
 *
 *  Both sit over the stage box at VIEWER pixels with zoom = `scale` (the
 *  stage's k) and scroll 0, so one scene unit is one logical stage pixel and
 *  strokes are stored in logical units (scene.logical). The view is locked:
 *  wheel/pinch/pan can't move it (re-asserted on every change and on resize),
 *  so the teacher's zoom can never differ from a student's — slide-stage.ts.
 */
/**
 * The teacher's laser as the students see it: a red dot with a short trail,
 * positioned in viewer pixels from logical stage units (the same mapping as
 * the pen canvas). Excalidraw's own laser only exists on the presenter's
 * screen, so the positions arrive over the live relay.
 */
function LaserOverlay({ points, k }: { points: { x: number; y: number }[]; k: number }) {
  const last = points[points.length - 1]
  if (!last) return null
  return (
    <div className="pointer-events-none absolute inset-0 z-30" aria-hidden data-laser-overlay>
      {points.length > 1 && (
        <svg className="absolute inset-0 h-full w-full">
          <polyline
            points={points.map(p => `${p.x * k},${p.y * k}`).join(' ')}
            fill="none"
            stroke="rgba(255,59,48,.45)"
            strokeWidth={Math.max(2, 4 * k)}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: last.x * k,
          top: last.y * k,
          width: Math.max(12, 18 * k),
          height: Math.max(12, 18 * k),
          background: 'radial-gradient(circle, #ff3b30 0 38%, rgba(255,59,48,.55) 62%, transparent 74%)',
          boxShadow: '0 0 12px 4px rgba(255,59,48,.45)',
        }}
      />
    </div>
  )
}

function AnnotationLayer({
  sessionId,
  slideIndex,
  canDraw,
  remote,
  onApi,
  tool = 'red',
  size = 'fine',
  onLocalScene,
  onElements,
  onLaser,
  scale,
}: {
  sessionId: string
  slideIndex: number
  canDraw: boolean
  remote: { rev: number; seq: number; scene: BoardScene } | null
  /** Draw mode: the elements that changed, batched every STROKE_FLUSH_MS, for the live relay. */
  onElements?: (els: BoardElement[]) => void
  /** Draw mode with the laser in hand: the pointer's position in logical stage units. */
  onLaser?: (p: { x: number; y: number; on: boolean }) => void
  /** The stage's scale k — the one zoom this canvas may have. */
  scale: number
  /** Hands the canvas API to the presenter bar's pen tools (null on unmount). */
  onApi?: (api: ExcalApi | null) => void
  /** The presenter's current pen tool; re-asserted if a canvas shortcut switches it. */
  tool?: PenTool
  /** The presenter's pen size; re-applied with the tool. */
  size?: PenSize
  /** Every change of the presenter's scene (draw mode), for the parent's Done handoff. */
  onLocalScene?: (scene: BoardScene) => void
}) {
  const apiRef = useRef<ExcalApi | null>(null)
  useEffect(() => () => onApi?.(null), [onApi])
  const lastSentRef = useRef(0)
  // Our own copy of the scene, kept from the canvas's change events. The
  // unmount flush can't read the canvas: Excalidraw destroys its scene before
  // our cleanup runs, so the API answered with an empty scene and the last
  // ~2 s of strokes (or an Undo / Clear right before Done) never left.
  const latestSceneRef = useRef<BoardScene | null>(null)
  // Strokes already known at mount go in as initialData (both modes): the
  // canvas initialises asynchronously and replaces anything pushed through the
  // API before that, which used to leave viewers blank until the NEXT stroke.
  const appliedStampRef = useRef(remote ? `${remote.rev}:${remote.seq}` : '')
  // Captured once at mount (the parent remounts this layer per slide/mode via
  // key) — a useState initializer, not a ref, so render never reads a ref.
  // Pre-stage scenes (no `logical` flag) are converted on the way in.
  const [initial] = useState<{ elements: BoardElement[]; files: unknown[] }>(() => {
    const scene = remote ? toLogicalScene(remote.scene) : null
    return { elements: scene?.elements ?? [], files: Object.values(scene?.files ?? {}) }
  })
  // What the server already has: a draw layer re-mounted on a slide with
  // strokes must not re-post the identical scene on Done (each rev bump makes
  // every viewer re-download the whole scene).
  // Live relay (draw mode): elements changed since the last message, batched
  // for a few tens of ms so a stroke in progress goes out as it is drawn.
  const knownRef = useRef(new Map<string, number>())
  const pendingRef = useRef(new Map<string, BoardElement>())
  useEffect(() => {
    if (canDraw && initial.elements.length) {
      lastSentRef.current = sceneVersion({ elements: initial.elements, files: {} })
      // Strokes already on the slide are known to everyone: never re-sent.
      for (const el of initial.elements) knownRef.current.set(el.id, el.version ?? 0)
    }
  }, [canDraw, initial])
  const flushTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const onElementsRef = useRef(onElements)
  useEffect(() => {
    onElementsRef.current = onElements
  }, [onElements])
  const flushElements = useCallback(() => {
    flushTimerRef.current = null
    const els = [...pendingRef.current.values()]
    pendingRef.current.clear()
    if (els.length) onElementsRef.current?.(els)
  }, [])
  useEffect(() => () => {
    // Unmount (Done, slide change): the last few ms of a stroke still go out.
    if (flushTimerRef.current !== null) {
      clearTimeout(flushTimerRef.current)
      flushElements()
    }
  }, [flushElements])
  const toolRef = useRef(tool)
  useEffect(() => {
    toolRef.current = tool
  }, [tool])
  const sizeRef = useRef(size)
  useEffect(() => {
    sizeRef.current = size
  }, [size])
  const remoteRef = useRef(remote)
  useEffect(() => {
    remoteRef.current = remote
  }, [remote])
  const scaleRef = useRef(scale)
  useEffect(() => {
    scaleRef.current = scale
  }, [scale])
  const applyRemote = useCallback((api: ExcalApi) => {
    const r = remoteRef.current
    if (!r) return
    const stamp = `${r.rev}:${r.seq}`
    if (stamp === appliedStampRef.current) return
    appliedStampRef.current = stamp
    const scene = toLogicalScene(r.scene)
    api.updateScene({ elements: scene.elements, captureUpdate: CaptureUpdateAction.NEVER })
    const files = Object.values(scene.files)
    if (files.length > 0) api.addFiles(files)
  }, [])
  // The canvas is a different size on every screen; its view must always be
  // "the stage, whole": re-map when the stage rescales (window resize, full
  // screen, phone rotation).
  useEffect(() => {
    const api = apiRef.current
    if (api) lockStageView(api, api.getAppState(), scale, CaptureUpdateAction.NEVER)
  }, [scale])
  // Nothing may move the canvas under the slide: ctrl+wheel zoom and wheel
  // pan are swallowed before Excalidraw sees them (passive: false, capture).
  const wrapRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = wrapRef.current
    if (!el || !canDraw) return
    const block = (e: WheelEvent) => { e.preventDefault(); e.stopPropagation() }
    el.addEventListener('wheel', block, { capture: true, passive: false })
    return () => el.removeEventListener('wheel', block, { capture: true })
  }, [canDraw])

  // Teacher push loop.
  useEffect(() => {
    if (!canDraw) return
    let active = true
    // `final` = the flush on unmount (Done, slide change): it must run even
    // though the loop is stopping, or the last ~2 s of strokes never leave.
    const push = async (final = false) => {
      if (!active && !final) return
      const scene = latestSceneRef.current
      // Nothing drawn yet, or (defensively) a wiped scene after something real
      // was sent: a Clear soft-deletes, it never empties the element list.
      if (!scene || (scene.elements.length === 0 && lastSentRef.current !== 0)) return
      const v = sceneVersion(scene)
      if (v === lastSentRef.current) return
      // Claim the version before the request so a slow reply doesn't make the
      // next tick re-post the identical scene (every rev bump makes each
      // viewer re-download the whole scene).
      const previous = lastSentRef.current
      lastSentRef.current = v
      try {
        const r = await fetch(`/api/live-sessions/${sessionId}/deck`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'annotate', slideIndex, scene }),
          // The flush outlives the component (Done, slide change).
          keepalive: final,
        })
        if (!r.ok) lastSentRef.current = previous
      } catch {
        lastSentRef.current = previous // retried next tick
      }
    }
    const t = setInterval(() => void push(), 2000)
    return () => { clearInterval(t); void push(true); active = false }
  }, [canDraw, sessionId, slideIndex])

  // Viewer: apply newly delivered revisions.
  useEffect(() => {
    if (canDraw || !remote) return
    const api = apiRef.current
    if (api) applyRemote(api)
  }, [canDraw, remote, applyRemote])

  // Nothing drawn on this slide and not drawing — no layer at all.
  const hasStrokes = (remote?.scene.elements ?? []).some(el => !el.isDeleted)
  if (!canDraw && !hasStrokes) return null

  return (
    <div ref={wrapRef} className={`slide-annotations absolute inset-0 z-20 ${canDraw ? '' : 'pointer-events-none'}`} data-ann-count={(remote?.scene.elements ?? []).filter(el => !el.isDeleted).length}>
      <Excalidraw
        excalidrawAPI={(api) => {
          const a = api as unknown as ExcalApi
          apiRef.current = a
          onApi?.(canDraw ? a : null)
          if (initial.files.length > 0) a.addFiles(initial.files)
          // A revision that landed while the canvas was still initialising:
          // apply it once init has finished (a macrotask later) — and make
          // sure init left the stage view in place.
          setTimeout(() => {
            if (apiRef.current !== a) return
            if (!canDraw) applyRemote(a)
            lockStageView(a, a.getAppState(), scaleRef.current, CaptureUpdateAction.NEVER)
          }, 0)
        }}
        initialData={{
          elements: initial.elements as never[],
          // The canvas's own toolbar is hidden (it covered the slide): the
          // presenter starts with the pen in hand, locked so it stays there.
          appState: {
            viewBackgroundColor: 'transparent',
            // Scene units = logical stage pixels (zoom k, origin at the stage's corner).
            // (Excalidraw brands its zoom value; ours is a plain number.)
            ...(stageView(scale) as unknown as Record<string, never>),
            ...(canDraw
              ? { ...penAppState(tool, size), activeTool: { type: toolType(tool), locked: true, customType: null, lastActiveTool: null } }
              : {}),
          },
        }}
        onChange={canDraw ? (elements, appState, files) => {
          // Excalidraw hands over every element (deleted ones included) on
          // each change — this is what the push loop and the unmount flush send.
          latestSceneRef.current = { elements: [...(elements as unknown as BoardElement[])], files: (files ?? {}) as Record<string, unknown>, logical: true }
          onLocalScene?.(latestSceneRef.current)
          if (onElementsRef.current) {
            const changed = changedElements(knownRef.current, latestSceneRef.current.elements)
            if (changed.length) {
              for (const el of changed) pendingRef.current.set(el.id, el)
              if (flushTimerRef.current === null) flushTimerRef.current = setTimeout(flushElements, STROKE_FLUSH_MS)
            }
          }
          // A canvas shortcut (V, 1, Escape…) can swap the tool out from under
          // the presenter bar; put the chosen pen back.
          const active = (appState as { activeTool?: { type?: string } }).activeTool?.type
          const wanted = toolType(toolRef.current)
          if (active && active !== wanted && apiRef.current) applyPen(apiRef.current, toolRef.current, sizeRef.current)
          // A pinch, a two-finger pan or a keyboard zoom: put the stage view back.
          if (apiRef.current) lockStageView(apiRef.current, appState as Parameters<typeof lockStageView>[1], scaleRef.current, CaptureUpdateAction.NEVER)
        } : (_elements, appState) => {
          if (apiRef.current) lockStageView(apiRef.current, appState as Parameters<typeof lockStageView>[1], scaleRef.current, CaptureUpdateAction.NEVER)
        }}
        onPointerUpdate={canDraw && onLaser ? ({ pointer, button }) => {
          // Scene coordinates = logical stage units here (zoom k, scroll 0).
          if (toolRef.current === 'laser') onLaser({ x: pointer.x, y: pointer.y, on: button === 'down' })
        } : undefined}
        viewModeEnabled={!canDraw}
        zenModeEnabled={canDraw}
        UIOptions={{ canvasActions: { toggleTheme: false, changeViewBackgroundColor: false } }}
      />
    </div>
  )
}
