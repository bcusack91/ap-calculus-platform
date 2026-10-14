// @vitest-environment jsdom
/**
 * Pop-out live video (owner request 2026-10-13): only one window may hold the
 * call, so the class page hides its copy while a pop-out is alive.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook, act, waitFor, cleanup } from '@testing-library/react'
import { useLivePopoutGuest, useLivePopoutHost } from '@/lib/live-popout'

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
})
