import { afterEach, describe, expect, it, vi } from 'vitest'
import { DEFAULT_VIDEO_SPEED, clampVideoSpeed, readVideoSpeed, saveVideoSpeed } from '@/lib/video-speed'

function fakeStorage() {
  const m = new Map<string, string>()
  return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v) }
}

describe('video speed preference', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('defaults to 1.15× and clamps to what earns watch credit', () => {
    expect(DEFAULT_VIDEO_SPEED).toBe(1.15)
    expect(clampVideoSpeed(1.25)).toBe(1.25)
    expect(clampVideoSpeed(3)).toBe(2)
    expect(clampVideoSpeed(0.25)).toBe(0.5)
    expect(clampVideoSpeed(NaN)).toBe(1.15)
    expect(clampVideoSpeed(0)).toBe(1.15)
  })

  it('falls back to the default without storage', () => {
    vi.stubGlobal('window', { get localStorage() { throw new Error('blocked') } })
    expect(readVideoSpeed()).toBe(1.15)
    expect(() => saveVideoSpeed(1.5)).not.toThrow()
  })

  it('remembers the chosen speed, including plain 1×', () => {
    vi.stubGlobal('window', { localStorage: fakeStorage() })
    expect(readVideoSpeed()).toBe(1.15)
    saveVideoSpeed(1.5)
    expect(readVideoSpeed()).toBe(1.5)
    saveVideoSpeed(1)
    expect(readVideoSpeed()).toBe(1)
  })
})
