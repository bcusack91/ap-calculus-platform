'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface Point {
  x: number
  y: number
}

interface GraphingQuestionProps {
  title: string
  instruction: string
  xRange: [number, number]
  yRange: [number, number]
  gridStep?: number
  correctCheck: (points: Point[]) => { correct: boolean; feedback: string }
  showReferenceFunction?: (x: number) => number | null
  referenceLabel?: string
}

export function GraphingQuestion({
  title,
  instruction,
  xRange,
  yRange,
  gridStep = 1,
  correctCheck,
  showReferenceFunction,
  referenceLabel,
}: GraphingQuestionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [points, setPoints] = useState<Point[]>([])
  const [result, setResult] = useState<{ correct: boolean; feedback: string } | null>(null)

  const width = 400
  const height = 400
  const padding = 40

  const toCanvas = useCallback(
    (p: Point): Point => ({
      x: padding + ((p.x - xRange[0]) / (xRange[1] - xRange[0])) * (width - 2 * padding),
      y: height - padding - ((p.y - yRange[0]) / (yRange[1] - yRange[0])) * (height - 2 * padding),
    }),
    [xRange, yRange]
  )

  const toGraph = useCallback(
    (cx: number, cy: number): Point => {
      const x = xRange[0] + ((cx - padding) / (width - 2 * padding)) * (xRange[1] - xRange[0])
      const y = yRange[0] + ((height - padding - cy) / (height - 2 * padding)) * (yRange[1] - yRange[0])
      // Snap to nearest gridStep
      return {
        x: Math.round(x / gridStep) * gridStep,
        y: Math.round(y / gridStep) * gridStep,
      }
    },
    [xRange, yRange, gridStep]
  )

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isDark = document.documentElement.classList.contains('dark')
    const bgColor = isDark ? '#1a1a2e' : '#ffffff'
    const gridColor = isDark ? '#333355' : '#e5e7eb'
    const axisColor = isDark ? '#8888aa' : '#374151'
    const textColor = isDark ? '#a0a0c0' : '#6b7280'
    const pointColor = '#8b5cf6'
    const lineColor = '#8b5cf6'
    const refColor = isDark ? '#4ade80' : '#16a34a'

    // Background
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, width, height)

    // Grid
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 0.5
    for (let x = xRange[0]; x <= xRange[1]; x += gridStep) {
      const cp = toCanvas({ x, y: 0 })
      ctx.beginPath()
      ctx.moveTo(cp.x, padding)
      ctx.lineTo(cp.x, height - padding)
      ctx.stroke()
    }
    for (let y = yRange[0]; y <= yRange[1]; y += gridStep) {
      const cp = toCanvas({ x: 0, y })
      ctx.beginPath()
      ctx.moveTo(padding, cp.y)
      ctx.lineTo(width - padding, cp.y)
      ctx.stroke()
    }

    // Axes
    ctx.strokeStyle = axisColor
    ctx.lineWidth = 2
    const origin = toCanvas({ x: 0, y: 0 })
    // X axis
    if (origin.y >= padding && origin.y <= height - padding) {
      ctx.beginPath()
      ctx.moveTo(padding, origin.y)
      ctx.lineTo(width - padding, origin.y)
      ctx.stroke()
    }
    // Y axis
    if (origin.x >= padding && origin.x <= width - padding) {
      ctx.beginPath()
      ctx.moveTo(origin.x, padding)
      ctx.lineTo(origin.x, height - padding)
      ctx.stroke()
    }

    // Axis labels
    ctx.fillStyle = textColor
    ctx.font = '11px sans-serif'
    ctx.textAlign = 'center'
    for (let x = xRange[0]; x <= xRange[1]; x += gridStep * 2) {
      if (x === 0) continue
      const cp = toCanvas({ x, y: 0 })
      const labelY = Math.min(Math.max(origin.y + 15, padding + 15), height - padding + 15)
      ctx.fillText(x.toString(), cp.x, labelY)
    }
    ctx.textAlign = 'right'
    for (let y = yRange[0]; y <= yRange[1]; y += gridStep * 2) {
      if (y === 0) continue
      const cp = toCanvas({ x: 0, y })
      const labelX = Math.max(origin.x - 8, padding - 5)
      ctx.fillText(y.toString(), labelX, cp.y + 4)
    }

    // Reference function
    if (showReferenceFunction) {
      ctx.strokeStyle = refColor
      ctx.lineWidth = 2
      ctx.setLineDash([6, 4])
      ctx.beginPath()
      let started = false
      for (let px = padding; px <= width - padding; px += 2) {
        const gp = toGraph(px, 0)
        const val = showReferenceFunction(gp.x)
        if (val === null) { started = false; continue }
        const cp = toCanvas({ x: gp.x, y: val })
        if (cp.y < padding || cp.y > height - padding) { started = false; continue }
        if (!started) { ctx.moveTo(cp.x, cp.y); started = true }
        else ctx.lineTo(cp.x, cp.y)
      }
      ctx.stroke()
      ctx.setLineDash([])
      if (referenceLabel) {
        ctx.fillStyle = refColor
        ctx.textAlign = 'left'
        ctx.font = '12px sans-serif'
        ctx.fillText(referenceLabel, width - padding - 80, padding + 15)
      }
    }

    // User points and lines
    if (points.length > 0) {
      // Lines between points
      if (points.length > 1) {
        ctx.strokeStyle = lineColor
        ctx.lineWidth = 2
        ctx.beginPath()
        const first = toCanvas(points[0])
        ctx.moveTo(first.x, first.y)
        for (let i = 1; i < points.length; i++) {
          const cp = toCanvas(points[i])
          ctx.lineTo(cp.x, cp.y)
        }
        ctx.stroke()
      }

      // Points
      points.forEach((p) => {
        const cp = toCanvas(p)
        ctx.fillStyle = pointColor
        ctx.beginPath()
        ctx.arc(cp.x, cp.y, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = textColor
        ctx.textAlign = 'left'
        ctx.font = '10px sans-serif'
        ctx.fillText(`(${p.x}, ${p.y})`, cp.x + 8, cp.y - 8)
      })
    }
  }, [points, xRange, yRange, gridStep, toCanvas, toGraph, showReferenceFunction, referenceLabel])

  useEffect(() => {
    draw()
  }, [draw])

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (result) return
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const cx = ((e.clientX - rect.left) / rect.width) * width
    const cy = ((e.clientY - rect.top) / rect.height) * height
    if (cx < padding || cx > width - padding || cy < padding || cy > height - padding) return
    const gp = toGraph(cx, cy)
    setPoints((prev) => [...prev, gp])
  }

  return (
    <div className="my-6 rounded-lg border-2 border-fuchsia-300 dark:border-fuchsia-700 overflow-hidden">
      <div className="bg-gradient-to-r from-fuchsia-500 to-accent text-white px-5 py-3">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <span>📈</span> Graphing: {title}
        </h3>
      </div>

      <div className="p-5 bg-fuchsia-50 dark:bg-fuchsia-900/10">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{instruction}</p>

        <div className="flex justify-center mb-4">
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            onClick={handleClick}
            className="border border-fuchsia-200 dark:border-fuchsia-700 rounded-lg cursor-crosshair"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => { setPoints([]); setResult(null) }}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Clear
          </button>
          {points.length > 0 && (
            <button
              onClick={() => setPoints((p) => p.slice(0, -1))}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Undo
            </button>
          )}
          {!result && points.length > 0 && (
            <button
              onClick={() => setResult(correctCheck(points))}
              className="px-6 py-2 bg-fuchsia-600 text-white rounded-lg font-semibold hover:bg-fuchsia-700 transition-colors"
            >
              Check Answer
            </button>
          )}
        </div>

        {result && (
          <div className={`mt-4 p-4 rounded-lg text-sm ${
            result.correct
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-300'
              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-300'
          }`}>
            <p className="font-semibold mb-1">
              {result.correct ? '✅ Correct!' : '❌ Not quite'}
            </p>
            <p>{result.feedback}</p>
          </div>
        )}

        {points.length > 0 && (
          <div className="mt-3 text-xs text-gray-500">
            Points: {points.map((p) => `(${p.x}, ${p.y})`).join(', ')}
          </div>
        )}
      </div>
    </div>
  )
}
