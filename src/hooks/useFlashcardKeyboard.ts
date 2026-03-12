'use client'

import { useEffect } from 'react'

interface UseFlashcardKeyboardOptions {
  onFlip: () => void
  onNext: () => void
  onPrevious: () => void
  onMarkKnown?: () => void
  onMarkReview?: () => void
  enabled?: boolean
}

export function useFlashcardKeyboard({
  onFlip,
  onNext,
  onPrevious,
  onMarkKnown,
  onMarkReview,
  enabled = true,
}: UseFlashcardKeyboardOptions) {
  useEffect(() => {
    if (!enabled) return

    function handleKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      switch (e.key) {
        case ' ':
        case 'Enter':
          e.preventDefault()
          onFlip()
          break
        case 'ArrowRight':
        case 'j':
          e.preventDefault()
          onNext()
          break
        case 'ArrowLeft':
        case 'k':
          e.preventDefault()
          onPrevious()
          break
        case '1':
          if (onMarkKnown) {
            e.preventDefault()
            onMarkKnown()
          }
          break
        case '2':
          if (onMarkReview) {
            e.preventDefault()
            onMarkReview()
          }
          break
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [enabled, onFlip, onNext, onPrevious, onMarkKnown, onMarkReview])
}
