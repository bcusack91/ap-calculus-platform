/**
 * Element-wise merging for live-session whiteboards.
 *
 * Boards sync by polling (Vercel serverless — no sockets), so two people
 * drawing at once will PUT overlapping full scenes a few seconds apart.
 * Whole-scene last-write-wins would silently discard whichever drawer saved
 * first. Instead we merge at the ELEMENT level, the same idea Excalidraw's own
 * collab uses: every Excalidraw element carries a monotonically increasing
 * `version` (bumped on each mutation) and a random `versionNonce` — for any
 * element id, the copy with the higher version wins (nonce breaks ties
 * deterministically). Deletions survive because Excalidraw soft-deletes
 * (isDeleted: true is itself a higher-version mutation).
 *
 * Used on BOTH sides: the server merges incoming PUTs into the stored scene
 * (concurrent PUTs converge instead of clobbering), and clients merge polled
 * remote scenes into their local canvas.
 */

export interface BoardElement {
  id: string
  version?: number
  versionNonce?: number
  isDeleted?: boolean
  [key: string]: unknown
}

/** { elements, files } — the shape stored in LiveBoard.scene. */
export interface BoardScene {
  elements: BoardElement[]
  /** Excalidraw BinaryFiles — image data keyed by file id. Merged by union. */
  files: Record<string, unknown>
}

export const EMPTY_SCENE: BoardScene = { elements: [], files: {} }

export function asScene(raw: unknown): BoardScene {
  if (!raw || typeof raw !== 'object') return EMPTY_SCENE
  const obj = raw as { elements?: unknown; files?: unknown }
  return {
    elements: Array.isArray(obj.elements)
      ? (obj.elements.filter(e => e && typeof e === 'object' && typeof (e as BoardElement).id === 'string') as BoardElement[])
      : [],
    files: obj.files && typeof obj.files === 'object' ? (obj.files as Record<string, unknown>) : {},
  }
}

function newer(a: BoardElement, b: BoardElement): BoardElement {
  const av = a.version ?? 0
  const bv = b.version ?? 0
  if (av !== bv) return av > bv ? a : b
  // Same version from two peers — pick deterministically so every merger
  // (server and every client) converges on the same winner.
  return (a.versionNonce ?? 0) <= (b.versionNonce ?? 0) ? a : b
}

/**
 * Merge two scenes. Order of arguments doesn't matter for the result
 * (commutative), which is what makes poll-based sync converge. `base`'s
 * element ordering is kept where possible so z-order stays stable.
 */
export function mergeScenes(base: BoardScene, incoming: BoardScene): BoardScene {
  const byId = new Map<string, BoardElement>()
  for (const el of base.elements) byId.set(el.id, el)
  for (const el of incoming.elements) {
    const existing = byId.get(el.id)
    byId.set(el.id, existing ? newer(existing, el) : el)
  }
  // files are content-addressed by id and immutable once created — union.
  return { elements: [...byId.values()], files: { ...incoming.files, ...base.files } }
}

/** Compact fingerprint of a scene's element state — cheap "did anything change". */
export function sceneVersion(scene: BoardScene): number {
  let sum = 0
  for (const el of scene.elements) sum += (el.version ?? 0) + 1
  return sum
}

/** Payload ceiling: pasted screenshots ride inside `files` as data URLs. */
export const MAX_SCENE_BYTES = 3_500_000
