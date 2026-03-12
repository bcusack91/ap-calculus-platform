'use client'

import { useEffect, useRef, useCallback } from 'react'

/**
 * Focus trap hook — traps tab focus within a container element.
 * Useful for modals, dialogs, and drawer menus.
 */
export function useFocusTrap(active: boolean = true) {
  const containerRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!active) return

    // Store the element that had focus before the trap was activated
    previousFocusRef.current = document.activeElement as HTMLElement

    const container = containerRef.current
    if (!container) return

    // Focus the first focusable element
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const focusables = container.querySelectorAll<HTMLElement>(focusableSelector)
    if (focusables.length > 0) {
      focusables[0].focus()
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return

      const focusables = container!.querySelectorAll<HTMLElement>(focusableSelector)
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey) {
        // Shift+Tab: if on first element, wrap to last
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        // Tab: if on last element, wrap to first
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      // Restore focus when trap is deactivated
      previousFocusRef.current?.focus()
    }
  }, [active])

  return containerRef
}

/**
 * Aria-live announcer — announces messages to screen readers.
 * Returns an `announce` function that can be called imperatively.
 */
export function useAriaLive(politeness: 'polite' | 'assertive' = 'polite') {
  const regionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Create the aria-live region if it doesn't exist
    let region = document.getElementById(`aria-live-${politeness}`) as HTMLDivElement | null
    if (!region) {
      region = document.createElement('div')
      region.id = `aria-live-${politeness}`
      region.setAttribute('aria-live', politeness)
      region.setAttribute('aria-atomic', 'true')
      region.setAttribute('role', 'status')
      Object.assign(region.style, {
        position: 'absolute',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0',
      })
      document.body.appendChild(region)
    }
    regionRef.current = region
  }, [politeness])

  const announce = useCallback((message: string) => {
    if (regionRef.current) {
      // Clear and set to trigger announcement
      regionRef.current.textContent = ''
      requestAnimationFrame(() => {
        if (regionRef.current) {
          regionRef.current.textContent = message
        }
      })
    }
  }, [])

  return announce
}

/**
 * Prefers-reduced-motion hook — returns true if the user prefers reduced motion.
 */
export function usePrefersReducedMotion() {
  const ref = useRef(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    ref.current = mql.matches

    function listener(e: MediaQueryListEvent) {
      ref.current = e.matches
    }
    mql.addEventListener('change', listener)
    return () => mql.removeEventListener('change', listener)
  }, [])

  return ref
}

/**
 * Escape key handler — calls a callback when Escape is pressed.
 */
export function useEscapeKey(callback: () => void, active: boolean = true) {
  useEffect(() => {
    if (!active) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        callback()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [callback, active])
}
