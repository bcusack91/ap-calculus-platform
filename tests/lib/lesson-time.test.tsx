// @vitest-environment jsdom
/**
 * Lesson study time is recorded, and only active time counts.
 *
 * Since 2026-03-12 the progress-save schema expected section ids as strings
 * while both lesson renderers send numbers, so every save after a student
 * completed a section was rejected with a 400 — and the renderers cleared
 * their time counter before sending, so that time was gone. Teachers saw a
 * fraction of real lesson time. Separately, the old timer counted a visible
 * but untouched tab forever. These tests pin the fix: numeric sections are
 * accepted, a failed save keeps its seconds, and the clock follows the
 * owner's rule (hidden = 0, 2 minutes without input = stop, a timed test
 * always counts).
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook, act, cleanup } from '@testing-library/react'
import { createActiveClock, IDLE_AFTER_MS } from '@/lib/active-time'
import { progressSaveSchema, MAX_PROGRESS_SAVE_SECONDS } from '@/lib/validations'
import { useLessonProgressSaver } from '@/hooks/useLessonProgressSaver'

const S = 1000

describe('createActiveClock', () => {
  it('counts continuous activity', () => {
    const c = createActiveClock(0)
    c.input(30 * S)
    c.input(60 * S)
    expect(c.take(90 * S)).toBe(90)
    expect(c.take(90 * S)).toBe(0)
  })

  it('stops counting 2 minutes after the last input', () => {
    const c = createActiveClock(0)
    // No input at all for 10 minutes: only the first 2 minutes count.
    expect(c.take(10 * 60 * S)).toBe(IDLE_AFTER_MS / S)
    // Input resumes the clock from that moment, not from where idleness began.
    c.input(10 * 60 * S)
    expect(c.take(10 * 60 * S + 30 * S)).toBe(30)
  })

  it('never counts a hidden tab, and becoming visible restarts it', () => {
    const c = createActiveClock(0)
    c.setVisible(false, 20 * S)
    expect(c.take(5 * 60 * S)).toBe(20)
    c.setVisible(true, 5 * 60 * S)
    expect(c.take(5 * 60 * S + 10 * S)).toBe(10)
  })

  it('counts idle time while a timed test runs', () => {
    const c = createActiveClock(0)
    c.setTimed(true, 0)
    expect(c.take(10 * 60 * S)).toBe(600)
    c.setTimed(false, 10 * 60 * S)
    // Ending the test counts as input; then the idle rule applies again.
    expect(c.take(20 * 60 * S)).toBe(IDLE_AFTER_MS / S)
  })

  it('pauses (e.g. under a quiz overlay) and resumes on unpause', () => {
    const c = createActiveClock(0)
    c.setPaused(true, 10 * S)
    c.input(20 * S)
    expect(c.take(60 * S)).toBe(10)
    c.setPaused(false, 60 * S)
    expect(c.take(70 * S)).toBe(10)
  })

  it('keeps fractions and returned seconds for the next take', () => {
    const c = createActiveClock(0)
    expect(c.take(1500)).toBe(1)
    expect(c.take(2000)).toBe(1) // 0.5 carried + 0.5
    c.giveBack(7)
    expect(c.take(2000)).toBe(7)
  })
})

describe('progressSaveSchema', () => {
  it('accepts the numeric section indexes the lesson renderers send', () => {
    const r = progressSaveSchema.safeParse({ topicSlug: 't', completedSections: [0, 1, 2], timeSpent: 42 })
    expect(r.success).toBe(true)
    if (r.success) expect(r.data.timeSpent).toBe(42)
  })

  it('still accepts string ids and caps an implausible time delta', () => {
    const r = progressSaveSchema.safeParse({ topicSlug: 't', completedSections: ['a'], timeSpent: 99_999 })
    expect(r.success).toBe(true)
    if (r.success) expect(r.data.timeSpent).toBe(MAX_PROGRESS_SAVE_SECONDS)
  })

  it('rejects negative indexes', () => {
    expect(progressSaveSchema.safeParse({ topicSlug: 't', completedSections: [-1] }).success).toBe(false)
  })
})

describe('useLessonProgressSaver', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  const bodies = (spy: ReturnType<typeof vi.fn>) =>
    spy.mock.calls.map((c) => JSON.parse((c[1] as RequestInit).body as string))

  it('a rejected save hands its seconds to the next save', async () => {
    vi.useFakeTimers({ now: 0 })
    const fetchSpy = vi
      .fn()
      .mockResolvedValueOnce({ ok: false, status: 400 })
      .mockResolvedValueOnce({ ok: true, status: 200 })
    vi.stubGlobal('fetch', fetchSpy)
    const { result } = renderHook(() => useLessonProgressSaver({ paused: false, unloadPayload: () => null }))

    act(() => {
      window.dispatchEvent(new Event('keydown'))
      vi.setSystemTime(40 * S)
      window.dispatchEvent(new Event('keydown'))
    })
    await act(() => result.current.sendProgress({ topicSlug: 't' }).then(() => undefined))
    act(() => {
      vi.setSystemTime(50 * S)
    })
    await act(() => result.current.sendProgress({ topicSlug: 't' }).then(() => undefined))

    const [first, second] = bodies(fetchSpy)
    expect(first.timeSpent).toBe(40)
    expect(second.timeSpent).toBe(50) // the failed 40 plus 10 more
  })

  it('flushes unsaved time when the lesson unmounts (in-app navigation)', () => {
    vi.useFakeTimers({ now: 0 })
    const beacon = vi.fn(() => true)
    vi.stubGlobal('navigator', { ...navigator, sendBeacon: beacon })
    const { unmount } = renderHook(() =>
      useLessonProgressSaver({ paused: false, unloadPayload: () => ({ topicId: 'x', completedSections: [0] }) }),
    )
    act(() => {
      vi.setSystemTime(25 * S)
      window.dispatchEvent(new Event('keydown'))
    })
    unmount()
    expect(beacon).toHaveBeenCalledTimes(1)
  })
})
