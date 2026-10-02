// @vitest-environment jsdom
/**
 * useChaosNow must not report a stale clock when a new effect arrives
 * (bug report 2026-10-01). Its ticker stops while nothing is live, so the
 * stored time could be minutes old; an attack that arrived already over then
 * looked live and was drawn for one 250ms tick.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useChaosNow } from '@/components/ChaosMode'
import { activeEffects, type ActiveEffect } from '@/lib/chaos-powerups'

afterEach(() => vi.useRealTimers())

describe('useChaosNow', () => {
  it('re-reads the clock when an effect arrives after a long idle stretch', () => {
    vi.useFakeTimers()
    vi.setSystemTime(1_000_000)
    const { result, rerender } = renderHook(({ effects }) => useChaosNow(effects), {
      initialProps: { effects: [] as ActiveEffect[] },
    })
    // A minute passes with no effects, so the ticker never runs.
    vi.setSystemTime(1_060_000)
    const expired: ActiveEffect = { id: 'old', type: 'blackout', from: 'X', startedAt: 1_055_000, durationMs: 3000 }
    rerender({ effects: [expired] })
    expect(result.current).toBe(1_060_000)
    expect(activeEffects([expired], result.current)).toEqual([])
  })
})
