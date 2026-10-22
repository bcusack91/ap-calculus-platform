import { afterEach, describe, expect, it, vi } from 'vitest'
import { DEFAULT_PEN_SIZE, PEN_SIZE_ORDER, PEN_SIZES, isPenSize, loadPenSize, penSizeAppState, savePenSize } from '@/lib/pen-sizes'
import { penAppState } from '@/components/SlideDeckSection'

vi.mock('@excalidraw/excalidraw', () => ({ Excalidraw: () => null, CaptureUpdateAction: { NEVER: 'never', IMMEDIATELY: 'immediately' } }))
vi.mock('@excalidraw/excalidraw/index.css', () => ({}))

function stubStorage(initial: Record<string, string> = {}) {
  const store = { ...initial }
  vi.stubGlobal('window', {
    localStorage: {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = v },
    },
  })
  return store
}

afterEach(() => vi.unstubAllGlobals())

describe('pen sizes', () => {
  it('defaults to Fine, and Fine is thinner than the old fixed width (2)', () => {
    expect(DEFAULT_PEN_SIZE).toBe('fine')
    expect(PEN_SIZES.fine.stroke).toBeLessThan(2)
    expect(PEN_SIZE_ORDER.map(s => PEN_SIZES[s].stroke)).toEqual([1, 2, 4])
  })

  it('sizes strokes, highlighter and text together', () => {
    expect(penSizeAppState('fine')).toEqual({ currentItemStrokeWidth: 1, currentItemFontSize: 16 })
    expect(penSizeAppState('thick', true)).toEqual({ currentItemStrokeWidth: 8, currentItemFontSize: 28 })
    for (const s of PEN_SIZE_ORDER) expect(PEN_SIZES[s].highlighter).toBeGreaterThan(PEN_SIZES[s].stroke)
  })

  it('remembers the choice on this device and ignores junk', () => {
    const store = stubStorage()
    expect(loadPenSize()).toBe('fine')
    savePenSize('thick')
    expect(loadPenSize()).toBe('thick')
    store['studymondo.pen-size'] = 'huge'
    expect(loadPenSize()).toBe('fine')
    expect(isPenSize('medium')).toBe(true)
    expect(isPenSize('huge')).toBe(false)
  })

  it('never throws when storage is blocked', () => {
    vi.stubGlobal('window', { localStorage: { getItem: () => { throw new Error('blocked') }, setItem: () => { throw new Error('blocked') } } })
    expect(loadPenSize()).toBe('fine')
    expect(() => savePenSize('medium')).not.toThrow()
  })
})

describe('slide pens use the chosen size', () => {
  it('a pen takes its colour from the tool and its width from the size', () => {
    expect(penAppState('red', 'fine')).toMatchObject({ currentItemStrokeColor: '#e03131', currentItemStrokeWidth: 1, currentItemOpacity: 100 })
    expect(penAppState('blue', 'thick')).toMatchObject({ currentItemStrokeWidth: 4 })
    expect(penAppState('highlighter', 'medium')).toMatchObject({ currentItemStrokeWidth: 5, currentItemOpacity: 40 })
    expect(penAppState('eraser', 'thick')).toEqual({})
    expect(penAppState('laser', 'fine')).toEqual({})
  })
})
