// @vitest-environment jsdom
/**
 * Pop-out live video (owner request 2026-10-13): only one window may hold the
 * call, so the class page hides its copy while a pop-out is alive.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook, act, waitFor, cleanup } from '@testing-library/react'
import { useLivePopoutGuest, useLivePopoutHost } from '@/lib/live-popout'
import { leaveCall, type JitsiApi } from '@/components/LiveSessionMedia'

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('live video pop-out', () => {
  it('with no pop-out, the class page shows its own video after a short probe', async () => {
    const host = renderHook(() => useLivePopoutHost('s1'))
    expect(host.result.current.ready).toBe(false)
    await waitFor(() => expect(host.result.current.ready).toBe(true))
    expect(host.result.current.poppedOut).toBe(false)
  })

  it('hides while a pop-out is open and comes back when it closes', async () => {
    const host = renderHook(() => useLivePopoutHost('s2'))
    const guest = renderHook(() => useLivePopoutGuest('s2'))
    await waitFor(() => expect(host.result.current.poppedOut).toBe(true))
    guest.unmount()
    await waitFor(() => expect(host.result.current.poppedOut).toBe(false))
  })

  it('a class page opened while a pop-out already holds the call never shows its own video', async () => {
    renderHook(() => useLivePopoutGuest('s3'))
    const host = renderHook(() => useLivePopoutHost('s3'))
    await waitFor(() => expect(host.result.current.ready).toBe(true))
    expect(host.result.current.poppedOut).toBe(true)
  })

  it('"Bring back here" closes the pop-out window', async () => {
    const close = vi.spyOn(window, 'close').mockImplementation(() => {})
    const host = renderHook(() => useLivePopoutHost('s4'))
    renderHook(() => useLivePopoutGuest('s4'))
    await waitFor(() => expect(host.result.current.poppedOut).toBe(true))
    act(() => host.result.current.bringBack())
    expect(host.result.current.poppedOut).toBe(false)
    await waitFor(() => expect(close).toHaveBeenCalled())
  })

  it('reports a blocked pop-up instead of hiding the video', async () => {
    vi.spyOn(window, 'open').mockReturnValue(null)
    const host = renderHook(() => useLivePopoutHost('s5'))
    act(() => host.result.current.open())
    expect(host.result.current.blocked).toBe(true)
    expect(host.result.current.poppedOut).toBe(false)
  })

  it('popping out hangs up the class page\'s call BEFORE hiding it, and rejoins skip the pre-join screen', async () => {
    const w = { focus: vi.fn(), close: vi.fn(), closed: false } as unknown as Window
    vi.spyOn(window, 'open').mockReturnValue(w)
    const host = renderHook(() => useLivePopoutHost('s6'))
    let hungUp!: () => void
    const leaving = new Promise<void>((r) => { hungUp = r })
    act(() => host.result.current.open(() => leaving))
    // Still showing its own (hanging-up) call until the leave finishes.
    expect(host.result.current.poppedOut).toBe(false)
    await act(async () => { hungUp(); await leaving })
    await waitFor(() => expect(host.result.current.poppedOut).toBe(true))
    expect(host.result.current.hasPoppedOut).toBe(true)
  })

  it('"Bring back here" lets the pop-out hang up before its window closes', async () => {
    const order: string[] = []
    const close = vi.spyOn(window, 'close').mockImplementation(() => { order.push('close') })
    const host = renderHook(() => useLivePopoutHost('s7'))
    renderHook(() => useLivePopoutGuest('s7', async () => { order.push('hangup') }))
    await waitFor(() => expect(host.result.current.poppedOut).toBe(true))
    act(() => host.result.current.bringBack())
    await waitFor(() => expect(close).toHaveBeenCalled())
    expect(order).toEqual(['hangup', 'close'])
  })
})

describe('leaveCall', () => {
  it('hangs up and resolves when Jitsi reports the call left', async () => {
    const listeners: Record<string, () => void> = {}
    const api = {
      dispose: vi.fn(),
      addListener: (e: string, fn: () => void) => { listeners[e] = fn },
      executeCommand: vi.fn((cmd: string) => { if (cmd === 'hangup') setTimeout(() => listeners.videoConferenceLeft?.(), 10) }),
    } as unknown as JitsiApi
    await leaveCall(api)
    expect(api.executeCommand).toHaveBeenCalledWith('hangup')
  })

  it('never hangs the page: resolves on timeout, or at once with no call', async () => {
    const api = { dispose: vi.fn(), addListener: vi.fn(), executeCommand: vi.fn() } as unknown as JitsiApi
    const t0 = Date.now()
    await leaveCall(api, 50)
    expect(Date.now() - t0).toBeGreaterThanOrEqual(40)
    await expect(leaveCall(null)).resolves.toBeUndefined()
  })
})
