/**
 * Topic slugs whose lessons teach ENRICHMENT content beyond the current
 * exam's scope (e.g. the AP Physics C 2024-25 CED). The interactive lesson
 * renderer shows a "Beyond the AP exam" banner for these so students know the
 * material is optional extension, not tested content.
 *
 * Kept in its own module (NOT registry.ts) so the client-side renderer can
 * import it without pulling the full lesson registry into the bundle.
 *
 * Keyed by the RAW topic slug the student visits (pre-alias), since a flagged
 * topic may share its lesson bundle with in-scope topics (e.g. the damped
 * oscillations topic aliases to the general oscillations bundle).
 */
export const BEYOND_EXAM_SLUGS = new Set<string>([
  // AP Physics C — 2024-25 CED scope review (2026-08-19):
  // closed-form Tsiolkovsky rocket equation is not tested (thrust via dp/dt is)
  'physics-c-variable-mass',
  // quantitative damped/driven oscillations are excluded from the CED
  'physics-c-damped-driven-oscillations',
])

export function isBeyondExam(topicSlug: string): boolean {
  return BEYOND_EXAM_SLUGS.has(topicSlug)
}
