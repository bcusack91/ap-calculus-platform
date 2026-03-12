'use client'

import { useEffect } from 'react'

interface UseLessonKeyboardOptions {
  onNext: () => void
  onPrevious: () => void
  onSubmit?: () => void
  onHint?: () => void
  canGoNext: boolean
  canGoPrevious: boolean
  enabled?: boolean
}

export function useLessonKeyboard({
  onNext,
  onPrevious,
  onSubmit,
  onHint,
  canGoNext,
  canGoPrevious,
  enabled = true,
}: UseLessonKeyboardOptions) {
  useEffect(() => {
    if (!enabled) return

    function handleKeyDown(e: KeyboardEvent) {
      // Don't capture when typing in inputs/textareas/selects
      const target = e.target as HTMLElement
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target.contentEditable === 'true'
      ) {
        return
      }

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault()
          if (canGoNext) onNext()
          break
        case 'ArrowLeft':
          e.preventDefault()
          if (canGoPrevious) onPrevious()
          break
        case 'Enter':
          if (!e.metaKey && !e.ctrlKey && !e.shiftKey) {
            onSubmit?.()
          }
          break
        case 'h':
        case 'H':
          if (!e.metaKey && !e.ctrlKey && !e.altKey) {
            onHint?.()
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onNext, onPrevious, onSubmit, onHint, canGoNext, canGoPrevious, enabled])
}
