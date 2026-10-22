/**
 * The slide stage (owner, 2026-10-22: "my zoom on the slides doesn't equate
 * to the students' zoom"): one fixed 1280 × 720 logical frame scaled to each
 * viewer, with the pen canvas locked to it. Pure math here; the component
 * side is in slide-stage-layer.test.tsx.
 */
import { describe, it, expect, vi } from 'vitest'
import {
  STAGE_W, STAGE_H, MIN_STAGE_SCALE, MAX_STAGE_SCALE,
  stageScale, stageSize, logicalToViewer, viewerToLogical,
  stageView, stageViewDrift, lockStageView,
  toLogicalScene, isLogicalScene, LEGACY_ASSUMED_WIDTH,
  fitStepDown, MIN_FIT, needsAnswerStrip, MIN_TAP_PX, POLL_OPTION_LOGICAL_H,
} from '@/lib/slide-stage'
import { asScene, mergeScenes } from '@/lib/board-merge'

describe('stage scale', () => {
  it('is 16:9 at 1280 × 720 and fits the container width', () => {
    expect(STAGE_W / STAGE_H).toBeCloseTo(16 / 9)
    expect(stageScale(1280)).toBe(1)
    expect(stageScale(640)).toBe(0.5)
    expect(stageScale(390)).toBeCloseTo(0.3047, 3) // a phone, portrait
    expect(stageScale(960)).toBe(0.75) // a laptop's content column
  })

  it('is height-limited on short, wide windows so the whole slide stays on screen', () => {
    expect(stageScale(1920, 1080)).toBe(1.5) // projector: width-limited, text grows
    expect(stageScale(1920, 720)).toBe(1) // short window: height-limited
    expect(stageScale(844, 300)).toBeCloseTo(300 / 720) // phone, landscape
  })

  it('stays inside Excalidraw zoom bounds and ignores junk sizes', () => {
    expect(stageScale(50)).toBe(MIN_STAGE_SCALE)
    expect(stageScale(100_000, 100_000)).toBe(MAX_STAGE_SCALE)
    expect(stageScale(0)).toBe(1)
    expect(stageScale(NaN, NaN)).toBe(1)
    expect(stageScale(1000, 0)).toBeCloseTo(1000 / 1280)
  })

  it('maps logical ↔ viewer pixels and sizes the stage box', () => {
    const k = stageScale(960)
    expect(stageSize(k)).toEqual({ width: 960, height: 540 })
    const pt = { x: 640, y: 360 } // stage centre, logical
    expect(logicalToViewer(pt, k)).toEqual({ x: 480, y: 270 })
    expect(viewerToLogical(logicalToViewer(pt, k), k)).toEqual(pt)
    // The same logical point on a phone lands on the same slide word, scaled.
    expect(logicalToViewer(pt, stageScale(390)).x).toBeCloseTo(195, 5)
  })
})

describe('view lock', () => {
  it('the stage view is zoom = k at the origin', () => {
    expect(stageView(0.75)).toEqual({ zoom: { value: 0.75 }, scrollX: 0, scrollY: 0 })
  })

  it('detects a zoom or a pan and prescribes the stage view; a locked canvas needs nothing', () => {
    expect(stageViewDrift({ zoom: { value: 0.75 }, scrollX: 0, scrollY: 0 }, 0.75)).toBeNull()
    expect(stageViewDrift({ zoom: { value: 0.75 + 1e-6 }, scrollX: 0.2, scrollY: -0.2 }, 0.75)).toBeNull()
    expect(stageViewDrift({ zoom: { value: 1.4 }, scrollX: 0, scrollY: 0 }, 0.75)).toEqual(stageView(0.75))
    expect(stageViewDrift({ zoom: { value: 0.75 }, scrollX: 40, scrollY: 0 }, 0.75)).toEqual(stageView(0.75))
    expect(stageViewDrift({ zoom: { value: 0.75 }, scrollX: 0, scrollY: -12 }, 0.75)).toEqual(stageView(0.75))
    expect(stageViewDrift(undefined, 0.75)).toBeNull()
    expect(stageViewDrift({}, 0.75)).toEqual(stageView(0.75))
  })

  it('re-asserts the view through the canvas API outside the undo history, and only when needed', () => {
    const api = { updateScene: vi.fn() }
    expect(lockStageView(api, { zoom: { value: 2 }, scrollX: 100, scrollY: 50 }, 0.5, 'never')).toBe(true)
    expect(api.updateScene).toHaveBeenCalledWith({ appState: { zoom: { value: 0.5 }, scrollX: 0, scrollY: 0 }, captureUpdate: 'never' })
    api.updateScene.mockClear()
    expect(lockStageView(api, { zoom: { value: 0.5 }, scrollX: 0, scrollY: 0 }, 0.5, 'never')).toBe(false)
    expect(api.updateScene).not.toHaveBeenCalled()
  })
})

describe('legacy scenes', () => {
  const legacy = {
    elements: [{ id: 'a', x: 100, y: 50, width: 200, height: 20, points: [[0, 0], [200, 20]], version: 1 }],
    files: {},
  }

  it('a scene without the marker is treated as pixels on a stage-wide canvas and flagged logical', () => {
    expect(LEGACY_ASSUMED_WIDTH).toBe(STAGE_W)
    expect(isLogicalScene(legacy)).toBe(false)
    const out = toLogicalScene(legacy)
    expect(isLogicalScene(out)).toBe(true)
    expect(out.elements[0]).toEqual(legacy.elements[0]) // identity at the assumed width
  })

  it('scales geometry when the drawing canvas is known to have been another width', () => {
    const out = toLogicalScene(legacy, 640) // teacher drew on a 640px-wide slide → ×2
    expect(out.elements[0]).toMatchObject({ x: 200, y: 100, width: 400, height: 40, points: [[0, 0], [400, 40]], version: 1 })
  })

  it('leaves a logical scene alone (same object)', () => {
    const logical = { ...legacy, logical: true }
    expect(toLogicalScene(logical)).toBe(logical)
  })

  it('the marker survives parsing and merging, so one logical push converts the stored scene', () => {
    expect(asScene({ elements: [], files: {}, logical: true }).logical).toBe(true)
    expect(asScene({ elements: [], files: {} })).not.toHaveProperty('logical')
    expect(asScene({ elements: [], files: {}, logical: 'yes' })).not.toHaveProperty('logical')
    const merged = mergeScenes(asScene(legacy), { elements: [{ id: 'b', version: 1 }], files: {}, logical: true })
    expect(merged.logical).toBe(true)
    expect(merged.elements.map(e => e.id)).toEqual(['a', 'b'])
    expect(mergeScenes(asScene(legacy), asScene(legacy))).not.toHaveProperty('logical')
  })
})

describe('fit and phones', () => {
  it('steps the type down 5% at a time to the floor and never below', () => {
    expect(fitStepDown(1)).toBe(0.95)
    expect(fitStepDown(0.95)).toBe(0.9)
    let f = 1
    for (let i = 0; i < 20; i++) f = fitStepDown(f)
    expect(f).toBe(MIN_FIT)
    expect(fitStepDown(MIN_FIT)).toBe(MIN_FIT)
  })

  it('adds native-size answer buttons when a poll option in the stage is too small to tap', () => {
    expect(needsAnswerStrip(stageScale(390))).toBe(true) // phone: ~18px rows
    expect(needsAnswerStrip(stageScale(700))).toBe(true) // tablet portrait: ~33px
    expect(needsAnswerStrip(stageScale(960))).toBe(false) // laptop: 45px
    expect(needsAnswerStrip(1)).toBe(false)
    expect(needsAnswerStrip(MIN_TAP_PX / POLL_OPTION_LOGICAL_H - 0.001)).toBe(true)
  })
})
