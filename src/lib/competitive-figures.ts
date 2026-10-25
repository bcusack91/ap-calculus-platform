/**
 * Pictures for competitive items (ASVAB Assembling Objects, gear trains,
 * circuits…). A match stores only `figureRef` on each question; the SVG lives
 * in the bank file and is served by GET /api/competitive/figure/<ref>
 * (cacheable, the same bytes for everyone), so stored gameData and every
 * match poll stay small. Clients render it with <MatchFigure>, which checks
 * isSafeSvg again before injecting it.
 */
import { isSafeSvg } from '@/lib/safe-svg'

const ASVAB_PREFIX = 'asvab-'

/** The reference stored on a match question for ASVAB bank item `id`. */
export function asvabFigureRef(id: number): string {
  return `${ASVAB_PREFIX}${id}`
}

/** True for a well-formed reference (what the figure route accepts). */
export function isFigureRef(ref: unknown): ref is string {
  return typeof ref === 'string' && /^asvab-\d{1,6}$/.test(ref)
}

export interface MatchFigureData {
  svg: string
  alt: string
}

/** The picture a reference points at, or null (unknown ref, no figure, or an SVG that fails isSafeSvg). */
export async function resolveFigureRef(ref: string): Promise<MatchFigureData | null> {
  if (!isFigureRef(ref)) return null
  const id = Number(ref.slice(ASVAB_PREFIX.length))
  const { asvabQuestionBank } = await import('@/data/competitive-questions/asvab-bank')
  const q = asvabQuestionBank.find((x) => x.id === id)
  if (!q?.figure || !isSafeSvg(q.figure)) return null
  return { svg: q.figure, alt: q.figureAlt ?? '' }
}
