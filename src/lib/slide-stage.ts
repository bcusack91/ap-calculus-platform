/**
 * The slide stage: one fixed logical frame that every viewer scales to fit.
 *
 * Owner (2026-10-22): "my zoom on the slides doesn't equate to the students'
 * zoom — I want to make sure they can see everything I see." The slide body
 * used to be a fluid container (viewport-dependent text breakpoints and
 * column widths), so a teacher's stroke next to the second bullet landed
 * somewhere else on a narrower screen. Now every slide is laid out at
 * STAGE_W × STAGE_H logical pixels and scaled uniformly by k, so the layout
 * is identical letter for letter on a projector, a laptop and a phone.
 *
 * The pen canvas is NOT inside the scaled element (Excalidraw's pointer math
 * reads clientX against the container's bounding rect but its width from a
 * ResizeObserver, which a CSS transform breaks). It stays at viewer pixels
 * with zoom = k and scroll = 0, so one scene unit is one logical pixel:
 * strokes are stored in logical units and each viewer renders them at its
 * own k. Pure helpers only; the component side lives in SlideVisuals /
 * SlideDeckSection.
 */

import type { BoardElement, BoardScene } from '@/lib/board-merge'

export const STAGE_W = 1280
export const STAGE_H = 720

/** Excalidraw's own zoom bounds — k must stay inside them. */
export const MIN_STAGE_SCALE = 0.1
export const MAX_STAGE_SCALE = 4

/**
 * Scale that fits the stage inside `containerWidth` × `maxHeight` (uniform,
 * so the layout never reflows). Width-limited on phones and most laptops;
 * height-limited on short, wide windows and in landscape on a phone, so the
 * whole slide is always on screen — nobody scrolls to find the bottom of a
 * slide the teacher can see at once.
 */
export function stageScale(containerWidth: number, maxHeight = Infinity): number {
  const w = Number.isFinite(containerWidth) && containerWidth > 0 ? containerWidth : STAGE_W
  const h = Number.isFinite(maxHeight) && maxHeight > 0 ? maxHeight : Infinity
  const k = Math.min(w / STAGE_W, h / STAGE_H)
  return Math.min(MAX_STAGE_SCALE, Math.max(MIN_STAGE_SCALE, k))
}

/** Stage box size in viewer pixels at scale k. */
export function stageSize(k: number): { width: number; height: number } {
  return { width: STAGE_W * k, height: STAGE_H * k }
}

export function logicalToViewer(pt: { x: number; y: number }, k: number): { x: number; y: number } {
  return { x: pt.x * k, y: pt.y * k }
}

export function viewerToLogical(pt: { x: number; y: number }, k: number): { x: number; y: number } {
  return { x: pt.x / k, y: pt.y / k }
}

/** The one Excalidraw view the pen canvas is allowed to have at scale k. */
export function stageView(k: number): { zoom: { value: number }; scrollX: number; scrollY: number } {
  return { zoom: { value: k }, scrollX: 0, scrollY: 0 }
}

const ZOOM_TOL = 1e-4
const SCROLL_TOL = 0.5

/**
 * Has the canvas drifted from the stage view (ctrl+wheel, pinch, a pan, a
 * keyboard zoom)? Returns the appState that puts it back, or null when it is
 * already locked (so the re-assert never loops).
 */
export function stageViewDrift(
  appState: { zoom?: { value?: number }; scrollX?: number; scrollY?: number } | null | undefined,
  k: number,
): { zoom: { value: number }; scrollX: number; scrollY: number } | null {
  if (!appState) return null
  const zoom = appState.zoom?.value
  const zoomOk = typeof zoom === 'number' && Math.abs(zoom - k) <= ZOOM_TOL
  const scrollOk = Math.abs(appState.scrollX ?? 0) <= SCROLL_TOL && Math.abs(appState.scrollY ?? 0) <= SCROLL_TOL
  return zoomOk && scrollOk ? null : stageView(k)
}

interface ViewLockApi {
  updateScene: (scene: { appState?: Record<string, unknown>; captureUpdate?: unknown }) => void
}

/**
 * Re-assert the stage view on a canvas whose appState reports something else.
 * Same pattern as the pen re-assert in onChange. Returns true when it had to.
 * `never` is Excalidraw's CaptureUpdateAction.NEVER — the view fix must not
 * land in the presenter's undo history.
 */
export function lockStageView(
  api: ViewLockApi,
  appState: Parameters<typeof stageViewDrift>[0],
  k: number,
  never: unknown,
): boolean {
  const fix = stageViewDrift(appState, k)
  if (!fix) return false
  api.updateScene({ appState: fix, captureUpdate: never })
  return true
}

/* ------------------------------------------------------------------ */
/*  Legacy scenes                                                      */
/* ------------------------------------------------------------------ */

/**
 * Scenes saved before the stage existed hold strokes in the TEACHER'S viewport
 * pixels over a fluid layout — there is no exact way back. They are treated
 * as if the teacher's canvas had been STAGE_W wide (the common laptop case),
 * i.e. scaled by STAGE_W / assumedWidth into logical units, and flagged
 * logical so the merge converges. Decks are per live session, so in practice
 * this only matters for a class running across the deploy.
 */
export const LEGACY_ASSUMED_WIDTH = STAGE_W

export function isLogicalScene(scene: BoardScene | null | undefined): boolean {
  return scene?.logical === true
}

const GEOMETRY_KEYS = ['x', 'y', 'width', 'height'] as const

function scaleElement(el: BoardElement, f: number): BoardElement {
  if (f === 1) return el
  const out: BoardElement = { ...el }
  for (const key of GEOMETRY_KEYS) {
    const v = el[key]
    if (typeof v === 'number') out[key] = v * f
  }
  const points = el.points
  if (Array.isArray(points)) {
    out.points = points.map(p => (Array.isArray(p) ? p.map(n => (typeof n === 'number' ? n * f : n)) : p))
  }
  if (typeof el.fontSize === 'number') out.fontSize = el.fontSize * f
  return out
}

/** A scene in logical units: unchanged when already logical, else converted from legacy pixels. */
export function toLogicalScene(scene: BoardScene, assumedWidth = LEGACY_ASSUMED_WIDTH): BoardScene {
  if (isLogicalScene(scene)) return scene
  const f = assumedWidth > 0 ? STAGE_W / assumedWidth : 1
  return { elements: scene.elements.map(el => scaleElement(el, f)), files: scene.files, logical: true }
}

/* ------------------------------------------------------------------ */
/*  Fit-to-stage text scale                                            */
/* ------------------------------------------------------------------ */

/**
 * Slide text is sized in em off a base that this factor multiplies, so a
 * slide whose content overflows the 720 logical px steps its type down (never
 * reflowing the frame) until it fits; past the floor it scrolls inside the
 * stage. Deterministic: every viewer lays the same content out at the same
 * logical size with the same self-hosted font, so each takes the same steps.
 */
export const FIT_STEP = 0.05
export const MIN_FIT = 0.6

export function fitStepDown(fit: number): number {
  const next = Math.round((fit - FIT_STEP) * 100) / 100
  return Math.max(MIN_FIT, next)
}

/* ------------------------------------------------------------------ */
/*  Phones                                                             */
/* ------------------------------------------------------------------ */

/** A poll option row's height in logical px (padding + one line of 1.25em text). */
export const POLL_OPTION_LOGICAL_H = 60
/** Smallest comfortable touch target in viewer px (Apple HIG 44, Material 48; 40 keeps iPad portrait on the stage). */
export const MIN_TAP_PX = 40

/**
 * Below this scale a poll option in the stage is too small to tap, so the
 * student also gets native-size answer buttons under the stage (the stage
 * itself stays identical to the teacher's — the pen layer depends on it).
 */
export function needsAnswerStrip(k: number): boolean {
  return k * POLL_OPTION_LOGICAL_H < MIN_TAP_PX
}
