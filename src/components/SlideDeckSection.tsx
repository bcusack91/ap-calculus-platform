'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Excalidraw, CaptureUpdateAction } from '@excalidraw/excalidraw'
import '@excalidraw/excalidraw/index.css'
import { MathText } from '@/components/MathText'
import { asScene, sceneVersion, type BoardScene, type BoardElement, mergeScenes, EMPTY_SCENE } from '@/lib/board-merge'
import { deckPalette, SlideMotionStyles, SLIDE_IN, TitleSlideView, ContentSlideView, QuizSlideView, OptionBadge } from '@/components/SlideVisuals'

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
 * slide. Sync = the same 2.5s polling pattern as chat/boards; students never
 * receive answer keys until reveal.
 */

type Slide =
  | { kind: 'title'; title: string; subtitle: string }
  | { kind: 'content'; title: string; blocks: string[] }
  | { kind: 'poll'; question: string; options: string[]; correctIndex: number; explanation: string }
  | { kind: 'quiz'; topicSlug: string; title: string }

interface PollState { counts: number[]; total: number; myAnswer: number | null; responders?: string[] }

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
  // The presenter's canvas as last changed, so Done can show it at once: the
  // view layer otherwise mounts from the last POLLED copy, briefly re-showing
  // a stroke undone or cleared in the final seconds (until the poll catches up).
  const localSceneRef = useRef<BoardScene | null>(null)
  const onLocalScene = useCallback((scene: BoardScene) => { localSceneRef.current = scene }, [])
  const toggleAnnotating = () => {
    if (annotating && deck && localSceneRef.current) {
      const key = `${deck.id}:${deck.currentSlide}`
      const local = localSceneRef.current
      setAnnScene(prev => ({ key, rev: prev?.key === key ? prev.rev : 0, scene: mergeScenes(prev?.key === key ? prev.scene : EMPTY_SCENE, local) }))
    }
    localSceneRef.current = null
    setAnnotating(v => !v)
  }
  // Latest annotation scene for the CURRENT slide (rev-gated via the poll).
  const [annScene, setAnnScene] = useState<{ key: string; rev: number; scene: BoardScene } | null>(null)
  const annRevRef = useRef(-1)
  const annSlideRef = useRef<string>('')

  const control = useCallback(async (payload: Record<string, unknown>) => {
    const r = await fetch(`/api/live-sessions/${sessionId}/deck`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return r.ok
  }, [sessionId])

  // State poll (2.5s) + one-time full fetch per deck id.
  useEffect(() => {
    let active = true
    const poll = async () => {
      try {
        const r = await fetch(`/api/live-sessions/${sessionId}/deck?annRev=${annRevRef.current}`, { cache: 'no-store' })
        if (!r.ok || !active) return
        const d = (await r.json()).deck as DeckState | null
        setDeck(d)
        if (d) {
          const slideKey = `${d.id}:${d.currentSlide}`
          if (annSlideRef.current !== slideKey) {
            // New slide — forget the old slide's annotation state and refetch.
            annSlideRef.current = slideKey
            annRevRef.current = -1
            setAnnScene(null)
          }
          if (d.annotation) {
            if (d.annotation.scene !== undefined) {
              annRevRef.current = d.annotation.rev
              setAnnScene({ key: slideKey, rev: d.annotation.rev, scene: asScene(d.annotation.scene) })
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

  return (
    <div className="mb-4 rounded-2xl border-2 border-indigo-300 bg-white shadow-lg dark:border-indigo-700 dark:bg-gray-800">
      {/* Header / controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-4 py-2.5 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            🖥️ Presenting
          </span>
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{deck.title}</span>
          <span className="text-xs text-gray-400">slide {deck.currentSlide + 1}/{deck.slideCount}</span>
        </div>
        {youAreTeacher && (
          <div className="flex flex-wrap items-center gap-1.5">
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
            {annotating && <PenToolbar apiRef={annApiRef} tool={penTool} setTool={setPenTool} />}
            {slide.kind === 'poll' && !isRevealed && (
              <button
                onClick={() => void control({ action: 'reveal', index: deck.currentSlide })}
                className="rounded-lg bg-emerald-600 px-3 py-1 text-sm font-semibold text-white"
              >Reveal answer</button>
            )}
            <button
              onClick={() => { if (confirm('End the presentation for everyone?')) void control({ action: 'end' }) }}
              className="rounded-lg border border-red-300 px-3 py-1 text-sm font-semibold text-red-600 dark:border-red-700 dark:text-red-400"
            >End</button>
          </div>
        )}
      </div>

      {/* Slide body — relative so annotation layers can sit exactly on top */}
      <SlideMotionStyles />
      <div key={deck.currentSlide} className="relative min-h-[45vh] px-6 py-8 sm:px-10">
        <AnnotationLayer
          key={`${deck.id}:${deck.currentSlide}:${youAreTeacher && annotating ? 'draw' : `view-${annHasStrokes ? 1 : 0}`}`}
          sessionId={sessionId}
          slideIndex={deck.currentSlide}
          canDraw={youAreTeacher && annotating}
          remote={annScene && annScene.key === `${deck.id}:${deck.currentSlide}` ? annScene : null}
          onApi={onAnnApi}
          onLocalScene={onLocalScene}
          tool={penTool}
        />
        {slide.kind === 'title' && (
          <TitleSlideView title={slide.title} subtitle={slide.subtitle} palette={palette} />
        )}

        {slide.kind === 'content' && (
          <ContentSlideView title={slide.title} blocks={slide.blocks} palette={palette} />
        )}

        {slide.kind === 'poll' && (
          <div style={SLIDE_IN}>
            <p className={`mb-1 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${palette.chip}`}>
              📊 Quick check {isRevealed ? '· answer revealed' : deck.poll ? `· ${deck.poll.total} answered` : ''}
            </p>
            <MathText text={slide.question} className="mb-6 text-xl font-semibold leading-relaxed text-gray-900 sm:text-2xl dark:text-white" />
            <div className="space-y-2.5">
              {slide.options.map((opt, i) => {
                const count = deck.poll?.counts[i] ?? 0
                const total = deck.poll?.total ?? 0
                const pct = total > 0 ? Math.round((count / total) * 100) : 0
                const mine = deck.poll?.myAnswer === i
                const isCorrect = reveal && reveal.correctIndex === i
                const showBars = youAreTeacher || deck.poll?.myAnswer !== null || isRevealed
                return (
                  <button
                    key={i}
                    onClick={() => { if (!youAreTeacher) void answer(i) }}
                    disabled={youAreTeacher || isRevealed || busy}
                    className={`relative w-full overflow-hidden rounded-xl border-2 px-4 py-3 text-left transition ${
                      isCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : mine
                        ? palette.ring
                        : 'border-gray-200 hover:border-gray-300 dark:border-gray-600'
                    } ${youAreTeacher ? 'cursor-default' : ''}`}
                  >
                    {showBars && (
                      <div
                        className={`absolute inset-y-0 left-0 transition-all duration-500 ${isCorrect ? 'bg-green-200/60 dark:bg-green-800/30' : palette.barFill}`}
                        style={{ width: `${pct}%` }}
                      />
                    )}
                    <span className="relative flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2.5 text-sm sm:text-base">
                        <OptionBadge index={i} active={mine || !!isCorrect} palette={palette} />
                        <MathText inline text={opt} />
                        {mine && <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">(your answer)</span>}
                        {isCorrect && <span className="text-xs font-semibold text-green-600 dark:text-green-400">✓ correct</span>}
                      </span>
                      {showBars && <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{count} · {pct}%</span>}
                    </span>
                  </button>
                )
              })}
            </div>
            {!youAreTeacher && deck.poll?.myAnswer === null && !isRevealed && (
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Tap an answer — you can change it until your teacher reveals.</p>
            )}
            {reveal && isRevealed && reveal.explanation && (
              <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                <MathText text={reveal.explanation} className="text-sm leading-relaxed text-gray-800 dark:text-gray-200" />
              </div>
            )}
            {youAreTeacher && deck.poll?.responders && (
              <p className="mt-3 truncate text-xs text-gray-400" title={deck.poll.responders.join(', ')}>
                Answered: {deck.poll.responders.join(', ') || '—'}
              </p>
            )}
          </div>
        )}

        {slide.kind === 'quiz' && (
          <QuizSlideView title={slide.title} palette={palette}>
            <Link
              href={`/topics/${slide.topicSlug}/interactive?exitQuiz=1`}
              target="_blank"
              className="inline-block rounded-xl bg-white px-8 py-3 font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
            >
              Open the exit quiz →
            </Link>
          </QuizSlideView>
        )}
      </div>
    </div>
  )
}


/**
 * Teacher-only launcher shown while nothing is being presented: pick one of
 * this week's class-plan topics and start the auto-generated deck.
 */
function DeckLauncher({ sessionId, classroomId }: { sessionId: string; classroomId: string }) {
  const [recommended, setRecommended] = useState<{ slug: string; name: string }[]>([])
  const [catalog, setCatalog] = useState<{ name: string; topics: { slug: string; title: string; slideCount: number; pollCount: number }[] }[]>([])
  const [pick, setPick] = useState('')
  const [starting, setStarting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    const load = async () => {
      try {
        const disc = await fetch(`/api/teacher/classrooms/${classroomId}/class-plan`, { cache: 'no-store' })
        const d = disc.ok ? await disc.json() : null
        const courseKey: string | undefined = d?.availableCourses?.[0]?.key

        // ⭐ This week's class-plan topics float to the top of the picker.
        if (courseKey) {
          const plan = await fetch(`/api/teacher/classrooms/${classroomId}/class-plan?course=${encodeURIComponent(courseKey)}`, { cache: 'no-store' })
          if (plan.ok && active) {
            const pd = await plan.json()
            const list = (pd.classTopics ?? [])
              .filter((t: { lessonPath: string | null }) => t.lessonPath)
              .map((t: { slug: string; name: string }) => ({ slug: t.slug, name: t.name }))
            setRecommended(list)
            if (list.length > 0) setPick(list[0].slug)
          }
        }

        // Full pre-generated catalog for the course, grouped by category —
        // any topic is presentable, not just this week's plan. The course slug
        // rides on the class-plan discovery response (class-plan-config).
        const courseSlug: string | undefined = d?.availableCourses?.[0]?.courseSlug ?? undefined
        if (courseSlug) {
          const lib = await fetch(`/api/teacher/slide-library?course=${encodeURIComponent(courseSlug)}`, { cache: 'no-store' })
          if (lib.ok && active) {
            const ld = await lib.json()
            setCatalog(ld.categories ?? [])
            setPick(prev => prev || ld.categories?.[0]?.topics?.[0]?.slug || '')
          }
        }
      } catch { /* launcher just stays hidden */ }
    }
    void load()
    return () => { active = false }
  }, [classroomId])

  if (recommended.length === 0 && catalog.length === 0) return null

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
      <select
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
        ~20 slides from the lesson with live polls every few slides — students&apos; screens follow yours.
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
  getSceneElementsIncludingDeleted: () => readonly BoardElement[]
  getFiles: () => Record<string, unknown>
}

type PenTool = 'red' | 'blue' | 'black' | 'highlighter' | 'eraser' | 'laser'
const PENS: Record<Exclude<PenTool, 'eraser' | 'laser'>, { label: string; color: string; width: number; opacity: number; swatch: string }> = {
  red: { label: 'Red pen', color: '#e03131', width: 2, opacity: 100, swatch: 'bg-[#e03131]' },
  blue: { label: 'Blue pen', color: '#1971c2', width: 2, opacity: 100, swatch: 'bg-[#1971c2]' },
  black: { label: 'Black pen', color: '#1e1e1e', width: 2, opacity: 100, swatch: 'bg-[#1e1e1e]' },
  highlighter: { label: 'Highlighter', color: '#ffd43b', width: 5, opacity: 40, swatch: 'bg-[#ffd43b]' },
}

/** Mark a stroke deleted the way Excalidraw does (a higher version), so every viewer's merge drops it too. */
function softDelete(el: BoardElement): BoardElement {
  return { ...el, isDeleted: true, version: (el.version ?? 0) + 1, versionNonce: Math.floor(Math.random() * 2 ** 31), updated: Date.now() }
}

const toolType = (tool: PenTool): 'freedraw' | 'eraser' | 'laser' => (tool === 'eraser' || tool === 'laser' ? tool : 'freedraw')

/** The stroke settings a pen tool needs in Excalidraw's appState. */
function penAppState(tool: PenTool): Record<string, unknown> {
  if (tool === 'eraser' || tool === 'laser') return {}
  const pen = PENS[tool]
  return { currentItemStrokeColor: pen.color, currentItemStrokeWidth: pen.width, currentItemOpacity: pen.opacity }
}

/** Set the canvas up for drawing: pen in hand, stays in hand after each stroke. */
function applyPen(api: ExcalApi, tool: PenTool) {
  const appState = penAppState(tool)
  if (Object.keys(appState).length) api.updateScene({ appState })
  api.setActiveTool({ type: toolType(tool), locked: true })
}

/**
 * The presenter's pen tools, in the bar above the slide (the canvas's own
 * toolbar is hidden — it covered the slide). Undo and Clear soft-delete
 * strokes so students' copies drop them too.
 */
function PenToolbar({ apiRef, tool, setTool }: { apiRef: React.MutableRefObject<ExcalApi | null>; tool: PenTool; setTool: (t: PenTool) => void }) {
  const select = (t: PenTool) => {
    setTool(t)
    if (apiRef.current) applyPen(apiRef.current, t)
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
 *  mode with pointer-events disabled: purely visual, coordinates identical to
 *  the teacher's canvas (same size, same origin), updated as the state poll
 *  delivers new revisions. Renders nothing until the slide has strokes.
 */
function AnnotationLayer({
  sessionId,
  slideIndex,
  canDraw,
  remote,
  onApi,
  tool = 'red',
  onLocalScene,
}: {
  sessionId: string
  slideIndex: number
  canDraw: boolean
  remote: { rev: number; scene: BoardScene } | null
  /** Hands the canvas API to the presenter bar's pen tools (null on unmount). */
  onApi?: (api: ExcalApi | null) => void
  /** The presenter's current pen tool; re-asserted if a canvas shortcut switches it. */
  tool?: PenTool
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
  const appliedRevRef = useRef(remote?.rev ?? -1)
  // Captured once at mount (the parent remounts this layer per slide/mode via
  // key) — a useState initializer, not a ref, so render never reads a ref.
  const [initial] = useState<{ elements: BoardElement[]; files: unknown[] }>(() => ({
    elements: remote?.scene.elements ?? [],
    files: Object.values(remote?.scene.files ?? {}),
  }))
  // What the server already has: a draw layer re-mounted on a slide with
  // strokes must not re-post the identical scene on Done (each rev bump makes
  // every viewer re-download the whole scene).
  useEffect(() => {
    if (canDraw && initial.elements.length) lastSentRef.current = sceneVersion({ elements: initial.elements, files: {} })
  }, [canDraw, initial])
  const toolRef = useRef(tool)
  useEffect(() => {
    toolRef.current = tool
  }, [tool])
  const remoteRef = useRef(remote)
  useEffect(() => {
    remoteRef.current = remote
  }, [remote])
  const applyRemote = useCallback((api: ExcalApi) => {
    const r = remoteRef.current
    if (!r || r.rev === appliedRevRef.current) return
    appliedRevRef.current = r.rev
    api.updateScene({ elements: r.scene.elements, captureUpdate: CaptureUpdateAction.NEVER })
    const files = Object.values(r.scene.files)
    if (files.length > 0) api.addFiles(files)
  }, [])

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
    <div className={`slide-annotations absolute inset-0 z-20 ${canDraw ? '' : 'pointer-events-none'}`}>
      <Excalidraw
        excalidrawAPI={(api) => {
          const a = api as unknown as ExcalApi
          apiRef.current = a
          onApi?.(canDraw ? a : null)
          if (initial.files.length > 0) a.addFiles(initial.files)
          // A revision that landed while the canvas was still initialising:
          // apply it once init has finished (a macrotask later).
          if (!canDraw) setTimeout(() => { if (apiRef.current === a) applyRemote(a) }, 0)
        }}
        initialData={{
          elements: initial.elements as never[],
          // The canvas's own toolbar is hidden (it covered the slide): the
          // presenter starts with the pen in hand, locked so it stays there.
          appState: {
            viewBackgroundColor: 'transparent',
            ...(canDraw
              ? { ...penAppState(tool), activeTool: { type: toolType(tool), locked: true, customType: null, lastActiveTool: null } }
              : {}),
          },
        }}
        onChange={canDraw ? (elements, appState, files) => {
          // Excalidraw hands over every element (deleted ones included) on
          // each change — this is what the push loop and the unmount flush send.
          latestSceneRef.current = { elements: [...(elements as unknown as BoardElement[])], files: (files ?? {}) as Record<string, unknown> }
          onLocalScene?.(latestSceneRef.current)
          // A canvas shortcut (V, 1, Escape…) can swap the tool out from under
          // the presenter bar; put the chosen pen back.
          const active = (appState as { activeTool?: { type?: string } }).activeTool?.type
          const wanted = toolType(toolRef.current)
          if (active && active !== wanted && apiRef.current) applyPen(apiRef.current, toolRef.current)
        } : undefined}
        viewModeEnabled={!canDraw}
        zenModeEnabled={canDraw}
        UIOptions={{ canvasActions: { toggleTheme: false, changeViewBackgroundColor: false } }}
      />
    </div>
  )
}
