/**
 * "Students follow my view" for the live class whiteboard.
 *
 * The teacher's board reports the region of the canvas they are looking at
 * (scene coordinates); students' boards scroll and zoom to show that same
 * region, fitted to their own screen. Stored as one small LiveBoard row
 * (ownerKey CLASS_VIEW_KEY) and shipped with the class board poll. Client-safe.
 */

export const CLASS_VIEW_KEY = 'class-view'

/** The visible canvas region, in scene coordinates. */
export interface BoardViewRect { x: number; y: number; width: number; height: number }

export interface BoardViewState {
  /** Students' boards snap to the teacher's view whenever it moves. */
  follow: boolean
  view: BoardViewRect | null
}

const finite = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v)
const LIMIT = 1e7

export function asViewRect(v: unknown): BoardViewRect | null {
  if (!v || typeof v !== 'object') return null
  const r = v as Record<string, unknown>
  if (![r.x, r.y, r.width, r.height].every(finite)) return null
  const rect = { x: r.x as number, y: r.y as number, width: r.width as number, height: r.height as number }
  if (rect.width <= 0 || rect.height <= 0 || rect.width > LIMIT || rect.height > LIMIT) return null
  if (Math.abs(rect.x) > LIMIT || Math.abs(rect.y) > LIMIT) return null
  return rect
}

export function asViewState(v: unknown): BoardViewState {
  const r = v && typeof v === 'object' ? (v as Record<string, unknown>) : {}
  return { follow: r.follow !== false, view: asViewRect(r.view) }
}

/** What the teacher can see: Excalidraw's scroll is the negated top-left corner. */
export function viewFromAppState(s: { scrollX: number; scrollY: number; zoom: { value: number }; width: number; height: number }): BoardViewRect | null {
  const z = s.zoom?.value
  if (!finite(z) || z <= 0) return null
  return asViewRect({ x: -s.scrollX, y: -s.scrollY, width: s.width / z, height: s.height / z })
}

/** Scroll + zoom that show `view` whole and centred on a `width` × `height` canvas. */
export function fitView(view: BoardViewRect, width: number, height: number): { scrollX: number; scrollY: number; zoom: number } {
  const zoom = Math.min(30, Math.max(0.1, Math.min(width / view.width, height / view.height)))
  return {
    zoom,
    scrollX: -(view.x + view.width / 2) + width / zoom / 2,
    scrollY: -(view.y + view.height / 2) + height / zoom / 2,
  }
}

/** Small moves (a pixel of drift) aren't worth a write. */
export function sameView(a: BoardViewRect | null, b: BoardViewRect | null): boolean {
  if (!a || !b) return a === b
  const tol = Math.max(a.width, a.height) * 0.01
  return Math.abs(a.x - b.x) < tol && Math.abs(a.y - b.y) < tol && Math.abs(a.width - b.width) < tol && Math.abs(a.height - b.height) < tol
}
