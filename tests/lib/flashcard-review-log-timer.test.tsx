// @vitest-environment jsdom
/**
 * The review UIs' time-on-card reader: restarts when a new card is shown and
 * pauses while the tab is hidden.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useCardShownTimer } from '@/hooks/useCardShownTimer'

function setHidden(hidden: boolean) {
  Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => (hidden ? 'hidden' : 'visible') })
  document.dispatchEvent(new Event('visibilitychange'))
}

afterEach(() => {
  vi.useRealTimers()
  setHidden(false)
})

describe('useCardShownTimer', () => {
  it('measures visible time per card', () => {
    vi.useFakeTimers()
    vi.setSystemTime(0)
    const cardA = { id: 'a' }
    const { result, rerender } = renderHook(({ card }) => useCardShownTimer(card), { initialProps: { card: cardA } })

    vi.setSystemTime(3000)
    setHidden(true)
    vi.setSystemTime(40_000)
    setHidden(false)
    vi.setSystemTime(42_000)
    expect(result.current()).toBe(5000)

    rerender({ card: { id: 'b' } })
    vi.setSystemTime(43_500)
    expect(result.current()).toBe(1500)
  })
})
