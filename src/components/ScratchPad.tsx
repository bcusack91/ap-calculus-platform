'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface ScratchPadProps {
  /** Key for localStorage persistence (e.g. topicSlug or testId) */
  storageKey?: string
}

type Mode = 'type' | 'draw'

export default function ScratchPad({ storageKey }: ScratchPadProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [mode, setMode] = useState<Mode>('type')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [penColor, setPenColor] = useState('#000000')
  const [penSize, setPenSize] = useState(3)
  const [isEraser, setIsEraser] = useState(false)
  const lastPosRef = useRef<{ x: number; y: number } | null>(null)

  const localKey = storageKey ? `scratchpad_${storageKey}` : null
  const canvasKey = storageKey ? `scratchpad_canvas_${storageKey}` : null

  const [content, setContent] = useState(() => {
    if (!localKey) return ''
    try {
      return localStorage.getItem(localKey) ?? ''
    } catch {
      return ''
    }
  })

  // Load saved canvas
  useEffect(() => {
    if (!canvasKey || !canvasRef.current || mode !== 'draw') return
    try {
      const saved = localStorage.getItem(canvasKey)
      if (saved) {
        const img = new Image()
        img.onload = () => {
          const ctx = canvasRef.current?.getContext('2d')
          if (ctx && canvasRef.current) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            ctx.drawImage(img, 0, 0)
          }
        }
        img.src = saved
      }
    } catch {}
  }, [canvasKey, mode])

  // Auto-save text on content change (debounced)
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const handleChange = useCallback((value: string) => {
    setContent(value)
    if (!localKey) return
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = setTimeout(() => {
      try { localStorage.setItem(localKey, value) } catch {}
    }, 300)
  }, [localKey])

  // Save canvas (debounced)
  const canvasSaveTimeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const saveCanvas = useCallback(() => {
    if (!canvasKey || !canvasRef.current) return
    if (canvasSaveTimeoutRef.current) clearTimeout(canvasSaveTimeoutRef.current)
    canvasSaveTimeoutRef.current = setTimeout(() => {
      try {
        const dataUrl = canvasRef.current?.toDataURL('image/png')
        if (dataUrl) localStorage.setItem(canvasKey, dataUrl)
      } catch {}
    }, 500)
  }, [canvasKey])

  // Focus textarea when opened
  useEffect(() => {
    if (isOpen && !isMinimized && mode === 'type') {
      textareaRef.current?.focus()
    }
  }, [isOpen, isMinimized, mode])

  // Canvas drawing handlers
  const getCanvasPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    if ('touches' in e) {
      const touch = e.touches[0]
      if (!touch) return null
      return { x: (touch.clientX - rect.left) * scaleX, y: (touch.clientY - rect.top) * scaleY }
    }
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const pos = getCanvasPos(e)
    if (!pos) return
    setIsDrawing(true)
    lastPosRef.current = pos
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (!isDrawing || !canvasRef.current) return
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return
    const pos = getCanvasPos(e)
    if (!pos || !lastPosRef.current) return

    ctx.beginPath()
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y)
    ctx.lineTo(pos.x, pos.y)
    ctx.strokeStyle = isEraser ? '#ffffff' : penColor
    ctx.lineWidth = isEraser ? penSize * 4 : penSize
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()
    lastPosRef.current = pos
  }

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false)
      lastPosRef.current = null
      saveCanvas()
    }
  }

  const handleClear = () => {
    if (mode === 'type') {
      setContent('')
      if (localKey) {
        try { localStorage.removeItem(localKey) } catch {}
      }
      textareaRef.current?.focus()
    } else {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.fillStyle = '#ffffff'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
      }
      if (canvasKey) {
        try { localStorage.removeItem(canvasKey) } catch {}
      }
    }
  }

  const COLORS = ['#000000', '#ef4444', '#3b82f6', '#22c55e', '#a855f7', '#f97316']

  // Toggle button (always visible)
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-700 dark:hover:text-amber-400"
        aria-label="Open scratch pad"
        title="Open scratch pad for calculations"
      >
        ✏️ Scratch Pad
      </button>
    )
  }

  // Floating panel
  return (
    <>
      {/* Inline button (active state) */}
      <button
        onClick={() => setIsOpen(false)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
        aria-label="Close scratch pad"
        title="Close scratch pad"
      >
        ✏️ Scratch Pad
      </button>

      {/* Floating panel - bottom right */}
      <div
        className={`fixed z-40 shadow-2xl rounded-2xl border-2 border-amber-200 dark:border-amber-700 bg-white dark:bg-gray-800 transition-all duration-200 ${
          isMinimized
            ? 'bottom-4 right-4 w-56'
            : 'bottom-4 right-4 w-[520px] max-w-[calc(100vw-2rem)]'
        }`}
        role="complementary"
        aria-label="Scratch pad"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-amber-50 dark:bg-amber-900/20 rounded-t-2xl border-b border-amber-200 dark:border-amber-700">
          <span className="text-sm font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
            ✏️ Scratch Pad
          </span>
          <div className="flex items-center gap-1">
            {!isMinimized && (
              <button
                onClick={handleClear}
                className="p-1 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                aria-label="Clear scratch pad"
                title="Clear"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            )}
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label={isMinimized ? 'Expand scratch pad' : 'Minimize scratch pad'}
              title={isMinimized ? 'Expand' : 'Minimize'}
            >
              {isMinimized ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close scratch pad"
              title="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content area */}
        {!isMinimized && (
          <div className="p-3">
            {/* Mode toggle */}
            <div className="flex gap-1 mb-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-0.5">
              <button
                onClick={() => setMode('type')}
                className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-colors ${
                  mode === 'type'
                    ? 'bg-white dark:bg-gray-600 text-amber-700 dark:text-amber-300 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                ⌨️ Type
              </button>
              <button
                onClick={() => setMode('draw')}
                className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-colors ${
                  mode === 'draw'
                    ? 'bg-white dark:bg-gray-600 text-amber-700 dark:text-amber-300 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                🖊️ Draw
              </button>
            </div>

            {mode === 'type' ? (
              <>
                <textarea
                  ref={textareaRef}
                  value={content}
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder="Show your work here..."
                  className="w-full h-80 resize-y rounded-lg border border-gray-200 dark:border-gray-600 bg-amber-50/50 dark:bg-gray-900/50 text-gray-800 dark:text-gray-200 text-sm font-mono p-3 focus:outline-none focus:ring-2 focus:ring-amber-300 dark:focus:ring-amber-600 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
                  spellCheck={false}
                />
                <div className="flex items-center justify-between mt-1.5 text-[11px] text-gray-400 dark:text-gray-500">
                  <span>{content.length > 0 ? `${content.length} characters` : ''}</span>
                  <span>{localKey ? 'Auto-saved' : ''}</span>
                </div>
              </>
            ) : (
              <>
                {/* Drawing toolbar */}
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <div className="flex gap-1">
                    {COLORS.map(color => (
                      <button
                        key={color}
                        onClick={() => { setPenColor(color); setIsEraser(false) }}
                        className={`w-6 h-6 rounded-full border-2 transition-all ${
                          penColor === color && !isEraser ? 'border-amber-500 scale-110' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <div className="h-5 w-px bg-gray-300 dark:bg-gray-600" />
                  <button
                    onClick={() => setIsEraser(!isEraser)}
                    className={`text-xs px-2 py-1 rounded transition-colors ${
                      isEraser
                        ? 'bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    title="Eraser"
                  >
                    🧹
                  </button>
                  <div className="h-5 w-px bg-gray-300 dark:bg-gray-600" />
                  <label className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400">
                    Size
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={penSize}
                      onChange={(e) => setPenSize(Number(e.target.value))}
                      className="w-16 h-3 accent-amber-500"
                    />
                  </label>
                </div>
                <canvas
                  ref={canvasRef}
                  width={480}
                  height={320}
                  className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white cursor-crosshair touch-none"
                  style={{ height: '320px' }}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
                <div className="flex items-center justify-end mt-1.5 text-[11px] text-gray-400 dark:text-gray-500">
                  <span>{canvasKey ? 'Auto-saved' : ''}</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}
