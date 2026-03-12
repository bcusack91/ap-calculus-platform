'use client'

import { useEffect, useRef } from 'react'

interface UseSwipeGestureOptions {
  onSwipeLeft: () => void
  onSwipeRight: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  threshold?: number
  enabled?: boolean
}

export function useSwipeGesture({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  enabled = true,
}: UseSwipeGestureOptions) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled || !ref.current) return

    const el = ref.current
    let startX = 0
    let startY = 0
    let startTime = 0

    function handleTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      startTime = Date.now()
    }

    function handleTouchEnd(e: TouchEvent) {
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const elapsed = Date.now() - startTime

      // Only register swipes that happen within 500ms
      if (elapsed > 500) return

      const diffX = endX - startX
      const diffY = endY - startY

      const absDiffX = Math.abs(diffX)
      const absDiffY = Math.abs(diffY)

      // Determine primary direction
      if (absDiffX > absDiffY && absDiffX > threshold) {
        if (diffX > 0) onSwipeRight()
        else onSwipeLeft()
      } else if (absDiffY > absDiffX && absDiffY > threshold) {
        if (diffY > 0) onSwipeDown?.()
        else onSwipeUp?.()
      }
    }

    el.addEventListener('touchstart', handleTouchStart, { passive: true })
    el.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      el.removeEventListener('touchstart', handleTouchStart)
      el.removeEventListener('touchend', handleTouchEnd)
    }
  }, [enabled, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold])

  return ref
}
