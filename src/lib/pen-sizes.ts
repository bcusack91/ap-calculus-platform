/**
 * Pen sizes shared by the slide annotation bar (SlideDeckSection) and the live
 * whiteboard (LiveBoards). Excalidraw's own presets are 1 / 2 / 4; the slide
 * pens used to be fixed at 2 ("bold"), which the owner found too big on a
 * slide (2026-10-22), so Fine (1) is the default. Pure apart from the
 * localStorage helpers, which never throw.
 */

export type PenSize = 'fine' | 'medium' | 'thick'

export const PEN_SIZE_ORDER: readonly PenSize[] = ['fine', 'medium', 'thick']

export const PEN_SIZES: Record<PenSize, { label: string; stroke: number; highlighter: number; font: number; dot: string }> = {
  fine: { label: 'Fine', stroke: 1, highlighter: 3, font: 16, dot: 'h-1.5 w-1.5' },
  medium: { label: 'Medium', stroke: 2, highlighter: 5, font: 20, dot: 'h-2.5 w-2.5' },
  thick: { label: 'Thick', stroke: 4, highlighter: 8, font: 28, dot: 'h-3.5 w-3.5' },
}

export const DEFAULT_PEN_SIZE: PenSize = 'fine'

const STORAGE_KEY = 'studymondo.pen-size'

export function isPenSize(v: unknown): v is PenSize {
  return v === 'fine' || v === 'medium' || v === 'thick'
}

/** The presenter's last choice on this device, or Fine. */
export function loadPenSize(): PenSize {
  try {
    const v = typeof window === 'undefined' ? null : window.localStorage.getItem(STORAGE_KEY)
    return isPenSize(v) ? v : DEFAULT_PEN_SIZE
  } catch {
    return DEFAULT_PEN_SIZE
  }
}

export function savePenSize(size: PenSize): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, size)
  } catch {
    /* private window / blocked storage: the choice just isn't remembered */
  }
}

/** Excalidraw appState for new strokes and text at this size (colour handled by the caller). */
export function penSizeAppState(size: PenSize, highlighter = false): { currentItemStrokeWidth: number; currentItemFontSize: number } {
  const s = PEN_SIZES[size]
  return { currentItemStrokeWidth: highlighter ? s.highlighter : s.stroke, currentItemFontSize: s.font }
}
