// @vitest-environment jsdom
/**
 * SlideDeckSection on the fixed stage: the pen canvas mounts WITH the slide's
 * strokes (memory rule — a scene pushed before Excalidraw's async init is
 * dropped), at zoom = the stage scale, and snaps back whenever the canvas
 * reports any other zoom or scroll; the presenter's pushes carry the
 * `logical` marker so every viewer renders the strokes in stage units.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor, act, fireEvent, cleanup } from '@testing-library/react'
import type { ReactNode } from 'react'
import { stageScale } from '@/lib/slide-stage'

interface ExcalProps {
  excalidrawAPI?: (api: unknown) => void
  initialData?: { elements?: unknown[]; appState?: Record<string, unknown> }
  onChange?: (elements: unknown[], appState: Record<string, unknown>, files: Record<string, unknown>) => void
  viewModeEnabled?: boolean
}
const excal: { props: ExcalProps | null; mounts: number } = { props: null, mounts: 0 }
const api = {
  updateScene: vi.fn(),
  addFiles: vi.fn(),
  setActiveTool: vi.fn(),
  getAppState: vi.fn(() => ({ zoom: { value: 1 }, scrollX: 0, scrollY: 0 })),
  getSceneElementsIncludingDeleted: vi.fn(() => []),
  getFiles: vi.fn(() => ({})),
}

vi.mock('@excalidraw/excalidraw', async () => {
  const React = await import('react')
  const Excalidraw = (props: ExcalProps) => {
    // Latest props after every render (what the tests drive onChange through).
    React.useEffect(() => { excal.props = props })
    React.useEffect(() => {
      excal.mounts += 1
      props.excalidrawAPI?.(api)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return React.createElement('div', { 'data-testid': 'excalidraw' })
  }
  return { Excalidraw, CaptureUpdateAction: { NEVER: 'never', IMMEDIATELY: 'immediately' } }
})
vi.mock('@excalidraw/excalidraw/index.css', () => ({}))
vi.mock('@/components/MathText', async () => {
  const React = await import('react')
  return { MathText: ({ text, inline }: { text: string; inline?: boolean }) => React.createElement(inline ? 'span' : 'div', null, text) }
})
vi.mock('next/link', async () => {
  const React = await import('react')
  return { default: ({ href, children }: { href: string; children: ReactNode }) => React.createElement('a', { href }, children) }
})

import SlideDeckSection from '@/components/SlideDeckSection'

const CONTAINER_W = 1000
const stroke = { id: 'stroke1', type: 'freedraw', x: 300, y: 200, width: 80, height: 20, points: [[0, 0], [80, 20]], version: 3, versionNonce: 1, isDeleted: false }
const slides = [
  { kind: 'title', title: 'Limits', subtitle: 'AP Calculus AB' },
  { kind: 'content', title: 'What a limit is', blocks: ['- first bullet', '- second bullet'] },
  { kind: 'poll', question: 'Which?', options: ['A1', 'B1', 'C1', 'D1'], correctIndex: 1, explanation: 'Because.' },
]

function deckResponse(opts: { teacher: boolean; scene?: unknown; rev?: number; full?: boolean }) {
  return {
    deck: {
      id: 'deck1', title: 'Limits', topicSlug: 'limits', currentSlide: 1, slideCount: slides.length, revealed: [], status: 'ACTIVE',
      poll: null, youAreTeacher: opts.teacher,
      annotation: opts.scene !== undefined ? { rev: opts.rev ?? 1, scene: opts.scene } : { rev: 0 },
      ...(opts.full ? { slides } : { currentReveal: null }),
    },
  }
}

const posts: { url: string; body: Record<string, unknown> }[] = []
function stubFetch(teacher: boolean, scene?: unknown) {
  posts.length = 0
  vi.stubGlobal('fetch', vi.fn(async (url: string, init?: RequestInit) => {
    if (init?.method === 'POST') {
      posts.push({ url, body: JSON.parse(String(init.body)) })
      return { ok: true, json: async () => ({ rev: 2 }) }
    }
    const full = url.includes('full=1')
    return { ok: true, json: async () => deckResponse({ teacher, scene, full }) }
  }))
}

beforeEach(() => {
  excal.props = null
  excal.mounts = 0
  api.updateScene.mockClear()
  api.addFiles.mockClear()
  api.getAppState.mockReturnValue({ zoom: { value: 1 }, scrollX: 0, scrollY: 0 })
  // jsdom has no layout: the stage measures a 1000px-wide container.
  vi.stubGlobal('ResizeObserver', class { observe() {} unobserve() {} disconnect() {} })
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ width: CONTAINER_W, height: 0, x: 0, y: 0, top: 0, left: 0, right: CONTAINER_W, bottom: 0, toJSON: () => ({}) } as DOMRect)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

const expectedK = () => stageScale(CONTAINER_W, Math.max(240, window.innerHeight - 96))

describe('SlideDeckSection on the stage', () => {
  it('lays the slide out on a 1280 × 720 stage scaled to the container', async () => {
    stubFetch(false)
    render(<SlideDeckSection sessionId="s1" youAreTeacher={false} classroomId="c1" />)
    await screen.findByText('What a limit is')
    const box = document.querySelector<HTMLElement>('[data-slide-stage]')!
    const k = expectedK()
    expect(parseFloat(box.style.width)).toBeCloseTo(1280 * k, 3)
    expect(parseFloat(box.style.height)).toBeCloseTo(720 * k, 3)
    const inner = box.querySelector<HTMLElement>('.slide-stage')!
    expect(inner.style.width).toBe('1280px')
    expect(inner.style.height).toBe('720px')
    expect(inner.style.transform).toBe(`scale(${k})`)
    // No strokes on this slide and not drawing → no canvas at all.
    expect(screen.queryByTestId('excalidraw')).toBeNull()
  })

  it("a student's viewer layer mounts WITH the slide's strokes, at zoom = k, origin 0", async () => {
    stubFetch(false, { elements: [stroke], files: {}, logical: true })
    render(<SlideDeckSection sessionId="s1" youAreTeacher={false} classroomId="c1" />)
    await screen.findByTestId('excalidraw')
    const k = expectedK()
    expect(excal.props?.viewModeEnabled).toBe(true)
    expect(excal.props?.initialData?.elements).toEqual([stroke])
    expect(excal.props?.initialData?.appState).toMatchObject({ zoom: { value: k }, scrollX: 0, scrollY: 0, viewBackgroundColor: 'transparent' })
    // Init reported zoom 1 → the post-init check puts the stage view back.
    await waitFor(() => expect(api.updateScene).toHaveBeenCalledWith({ appState: { zoom: { value: k }, scrollX: 0, scrollY: 0 }, captureUpdate: 'never' }))
  })

  it('snaps back when the canvas reports a different zoom or a scroll, and stays quiet when locked', async () => {
    stubFetch(false, { elements: [stroke], files: {}, logical: true })
    render(<SlideDeckSection sessionId="s1" youAreTeacher={false} classroomId="c1" />)
    await screen.findByTestId('excalidraw')
    await waitFor(() => expect(api.updateScene).toHaveBeenCalled())
    const k = expectedK()
    api.updateScene.mockClear()
    act(() => excal.props!.onChange!([stroke], { zoom: { value: 1.4 }, scrollX: 0, scrollY: 0 }, {}))
    expect(api.updateScene).toHaveBeenCalledWith({ appState: { zoom: { value: k }, scrollX: 0, scrollY: 0 }, captureUpdate: 'never' })
    api.updateScene.mockClear()
    act(() => excal.props!.onChange!([stroke], { zoom: { value: k }, scrollX: -35, scrollY: 0 }, {}))
    expect(api.updateScene).toHaveBeenCalledWith({ appState: { zoom: { value: k }, scrollX: 0, scrollY: 0 }, captureUpdate: 'never' })
    api.updateScene.mockClear()
    act(() => excal.props!.onChange!([stroke], { zoom: { value: k }, scrollX: 0, scrollY: 0 }, {}))
    expect(api.updateScene).not.toHaveBeenCalled()
  })

  it('a legacy (pixel-space) scene still renders — as stage units at the assumed 1280 width', async () => {
    stubFetch(false, { elements: [stroke], files: {} }) // no `logical` marker
    render(<SlideDeckSection sessionId="s1" youAreTeacher={false} classroomId="c1" />)
    await screen.findByTestId('excalidraw')
    expect(excal.props?.initialData?.elements).toEqual([stroke])
  })

  it("the presenter's pushes carry the logical marker and keep the pen view locked", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    try {
      stubFetch(true)
      render(<SlideDeckSection sessionId="s1" youAreTeacher classroomId="c1" />)
      await screen.findByText('What a limit is')
      fireEvent.click(screen.getByText('✏️ Annotate'))
      await screen.findByTestId('excalidraw')
      const k = expectedK()
      expect(excal.props?.viewModeEnabled).toBe(false)
      expect(excal.props?.initialData?.appState).toMatchObject({ zoom: { value: k }, scrollX: 0, scrollY: 0, activeTool: { type: 'freedraw', locked: true } })
      act(() => excal.props!.onChange!([stroke], { zoom: { value: k }, scrollX: 0, scrollY: 0, activeTool: { type: 'freedraw' } }, {}))
      await act(async () => { await vi.advanceTimersByTimeAsync(2100) })
      const push = posts.find(p => p.body.action === 'annotate')
      expect(push).toBeTruthy()
      expect(push!.body.scene).toMatchObject({ logical: true, elements: [stroke] })
      // A pinch mid-stroke: the view comes straight back.
      api.updateScene.mockClear()
      act(() => excal.props!.onChange!([stroke], { zoom: { value: 2 }, scrollX: 10, scrollY: 10, activeTool: { type: 'freedraw' } }, {}))
      expect(api.updateScene).toHaveBeenCalledWith({ appState: { zoom: { value: k }, scrollX: 0, scrollY: 0 }, captureUpdate: 'never' })
    } finally {
      vi.useRealTimers()
    }
  })
})
