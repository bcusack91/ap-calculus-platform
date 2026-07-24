'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Undo2, Trash2, Eraser, Pencil } from 'lucide-react'
import type { DrawingData, DrawingStroke } from '@/lib/drawing'

/**
 * Freeform sketch pad for note-taking with a finger, stylus, Apple Pencil, or
 * mouse. Captures vector strokes (see src/lib/drawing.ts), scales responsively,
 * and reports changes up for the parent to persist.
 *
 * Input handling: Pointer Events unify mouse/touch/pen. `touch-action: none`
 * stops the page scrolling under a drawing finger. Basic palm rejection: once a
 * pen is drawing, stray touch pointers are ignored (so a resting hand on an
 * iPad doesn't scribble).
 */

const COLORS = ['#111827', '#2563eb', '#dc2626', '#16a34a', '#d97706', '#7c3aed']
const SIZES = [
  { label: 'S', s: 2 },
  { label: 'M', s: 4 },
  { label: 'L', s: 8 },
]
const LOGICAL_HEIGHT = 360
const ERASE_RADIUS = 14

export default function DrawingPad({
  initial,
  onChange,
}: {
  initial: DrawingData | null
  onChange: (d: DrawingData) => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // A fixed logical drawing space; absolute stroke coords live here and the
  // canvas scales to fit the container (via aspect-ratio + w-full), so a sketch
  // drawn on desktop still looks right on a phone and pointer coords map back
  // correctly regardless of display size. Reuse the initial sketch's space.
  const [dims] = useState<{ w: number; h: number }>(() =>
    initial ? { w: initial.w, h: initial.h } : { w: 640, h: LOGICAL_HEIGHT }
  )
  const [strokes, setStrokes] = useState<DrawingStroke[]>(initial?.strokes ?? [])
  const [color, setColor] = useState(COLORS[0])
  const [size, setSize] = useState(SIZES[1].s)
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen')

  const drawingRef = useRef<DrawingStroke | null>(null) // in-progress stroke
  const activePenId = useRef<number | null>(null)
  // Mirror of `strokes` for synchronous reads in pointer handlers. Kept in sync
  // by the effect below, and updated inline by the mutating handlers before they
  // emit (so `emit()` never reads a stale value).
  const strokesRef = useRef(strokes)
  useEffect(() => { strokesRef.current = strokes }, [strokes])

  const redraw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, dims.w, dims.h)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    for (const st of strokesRef.current) drawStroke(ctx, st)
  }, [dims])

  // Size the backing store to the logical space × DPR and (re)paint.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(dims.w * dpr)
    canvas.height = Math.round(dims.h * dpr)
    redraw()
  }, [dims, redraw])

  // Repaint whenever the committed strokes change (undo / erase / clear / load).
  useEffect(() => { redraw() }, [strokes, redraw])

  const toLogical = (e: React.PointerEvent) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const w = dims.w
    const h = dims.h
    return {
      x: Math.max(0, Math.min(w, ((e.clientX - rect.left) / rect.width) * w)),
      y: Math.max(0, Math.min(h, ((e.clientY - rect.top) / rect.height) * h)),
    }
  }

  const emit = useCallback(() => {
    onChange({ v: 1, w: dims.w, h: dims.h, strokes: strokesRef.current })
  }, [dims, onChange])

  const eraseAt = useCallback((x: number, y: number) => {
    const next = strokesRef.current.filter((st) => {
      for (let i = 0; i + 1 < st.p.length; i += 2) {
        if (Math.hypot(st.p[i] - x, st.p[i + 1] - y) <= ERASE_RADIUS + st.s) return false
      }
      return true
    })
    if (next.length !== strokesRef.current.length) {
      strokesRef.current = next
      setStrokes(next)
      emit()
    }
  }, [emit])

  const onPointerDown = (e: React.PointerEvent) => {
    // Palm rejection: ignore touch once a pen is drawing.
    if (e.pointerType === 'touch' && activePenId.current !== null) return
    if (e.pointerType === 'pen') activePenId.current = e.pointerId
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    const { x, y } = toLogical(e)

    if (tool === 'eraser') { eraseAt(x, y); return }

    const stroke: DrawingStroke = { c: color, s: size, p: [x, y] }
    drawingRef.current = stroke
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) { drawStroke(ctx, stroke) } // renders the initial dot
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch' && activePenId.current !== null && e.pointerId !== activePenId.current) return
    const { x, y } = toLogical(e)

    if (tool === 'eraser') { if (e.buttons) eraseAt(x, y); return }

    const stroke = drawingRef.current
    if (!stroke) return
    const n = stroke.p.length
    const lastX = stroke.p[n - 2]
    const lastY = stroke.p[n - 1]
    stroke.p.push(x, y)
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.strokeStyle = stroke.c
      ctx.lineWidth = stroke.s
      ctx.beginPath()
      ctx.moveTo(lastX, lastY)
      ctx.lineTo(x, y)
      ctx.stroke()
    }
  }

  const endStroke = (e: React.PointerEvent) => {
    if (e.pointerType === 'pen' && activePenId.current === e.pointerId) activePenId.current = null
    const stroke = drawingRef.current
    drawingRef.current = null
    if (stroke && stroke.p.length >= 2) {
      setStrokes((prev) => [...prev, stroke])
      // emit after state commit
      strokesRef.current = [...strokesRef.current, stroke]
      emit()
    }
  }

  const undo = () => {
    if (strokesRef.current.length === 0) return
    const next = strokesRef.current.slice(0, -1)
    setStrokes(next)
    strokesRef.current = next
    emit()
  }
  const clear = () => {
    if (strokesRef.current.length === 0) return
    setStrokes([])
    strokesRef.current = []
    emit()
  }

  const btnBase = 'grid place-items-center w-10 h-10 rounded-lg border transition-colors'

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {/* Colors */}
        <div className="flex items-center gap-1.5">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => { setColor(c); setTool('pen') }}
              aria-label={`Color ${c}`}
              className={`w-7 h-7 rounded-full border-2 transition-transform ${color === c && tool === 'pen' ? 'border-gray-900 dark:border-white scale-110' : 'border-white dark:border-gray-700'}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <span className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
        {/* Sizes */}
        <div className="flex items-center gap-1">
          {SIZES.map((sz) => (
            <button
              key={sz.s}
              type="button"
              onClick={() => { setSize(sz.s); setTool('pen') }}
              aria-label={`Size ${sz.label}`}
              className={`${btnBase} ${size === sz.s && tool === 'pen' ? 'border-accent bg-accent-subtle dark:bg-accent-light/20 text-accent-hover' : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'}`}
            >
              <span className="rounded-full bg-current" style={{ width: sz.s + 3, height: sz.s + 3 }} />
            </button>
          ))}
        </div>
        <span className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
        {/* Tools */}
        <button type="button" onClick={() => setTool('pen')} aria-label="Pen" className={`${btnBase} ${tool === 'pen' ? 'border-accent bg-accent-subtle dark:bg-accent-light/20 text-accent-hover' : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'}`}>
          <Pencil className="w-4 h-4" aria-hidden />
        </button>
        <button type="button" onClick={() => setTool('eraser')} aria-label="Eraser" className={`${btnBase} ${tool === 'eraser' ? 'border-accent bg-accent-subtle dark:bg-accent-light/20 text-accent-hover' : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300'}`}>
          <Eraser className="w-4 h-4" aria-hidden />
        </button>
        <span className="flex-1" />
        <button type="button" onClick={undo} disabled={strokes.length === 0} aria-label="Undo" className={`${btnBase} border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 disabled:opacity-40`}>
          <Undo2 className="w-4 h-4" aria-hidden />
        </button>
        <button type="button" onClick={clear} disabled={strokes.length === 0} aria-label="Clear all" className={`${btnBase} border-gray-200 dark:border-gray-600 text-gray-600 dark:text-red-400 hover:text-red-500 disabled:opacity-40`}>
          <Trash2 className="w-4 h-4" aria-hidden />
        </button>
      </div>

      {/* Canvas */}
      <div
        className="w-full rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden bg-white"
        style={{ aspectRatio: `${dims.w} / ${dims.h}` }}
      >
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endStroke}
          onPointerCancel={endStroke}
          onPointerLeave={endStroke}
          className="block w-full h-full touch-none cursor-crosshair"
        />
      </div>
      <p className="mt-1 text-xs text-gray-400">Draw with a finger, stylus, Apple Pencil, or mouse. Saved automatically.</p>
    </div>
  )
}

function drawStroke(ctx: CanvasRenderingContext2D, st: DrawingStroke) {
  if (st.p.length < 2) return
  ctx.strokeStyle = st.c
  ctx.fillStyle = st.c
  ctx.lineWidth = st.s
  if (st.p.length === 2) {
    ctx.beginPath()
    ctx.arc(st.p[0], st.p[1], st.s / 2, 0, Math.PI * 2)
    ctx.fill()
    return
  }
  ctx.beginPath()
  ctx.moveTo(st.p[0], st.p[1])
  for (let i = 2; i + 1 < st.p.length; i += 2) ctx.lineTo(st.p[i], st.p[i + 1])
  ctx.stroke()
}
