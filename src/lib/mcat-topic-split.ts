/**
 * MCAT topics that were split into several lessons (Nov 2026: one live-class
 * session per lesson). The old slug's Topic row is retired, but its history
 * stays: exit-quiz attempts and in-class deck attendance on the old slug
 * count for EVERY successor (owner ruling: a student who mastered the old
 * topic gets credit for both halves), and stored diagnostic recommendations
 * of the old slug point at the first successor.
 *
 * The old exit-quiz loader stays registered so past attempts still resolve
 * (question ids are `${slug}#hash`); it is hidden from browsing instead.
 * Pure (no database access).
 */

export const MCAT_SPLIT_TOPICS: Record<string, readonly string[]> = {
  // Successors in course order. Split twice (Nov 2026): first into two
  // lessons each, then into one topic per 90-minute class.
  'mcat-physics-electricity-circuits-mcat': [
    'mcat-physics-electricity-dc-circuits-mcat',
    'mcat-physics-electricity-kirchhoff-power-mcat',
    'mcat-physics-electricity-emf-capacitors-mcat',
    'mcat-physics-electricity-rc-circuits-mcat',
  ],
  'mcat-physics-mechanics-fluids-waves-mcat': [
    'mcat-physics-mechanics-fluids-mcat',
    'mcat-physics-mechanics-fluid-dynamics-mcat',
    'mcat-physics-waves-periodic-motion-mcat',
    'mcat-physics-waves-interference-mcat',
    'mcat-physics-waves-sound-mcat',
  ],
}

/** Topic titles of the successors, for recommendations remapped from a retired slug. */
export const MCAT_SPLIT_TITLES: Record<string, string> = {
  'mcat-physics-electricity-dc-circuits-mcat': 'Circuits Part 1: Current & Resistance',
  'mcat-physics-electricity-kirchhoff-power-mcat': "Circuits Part 2: Kirchhoff's Rules & Power",
  'mcat-physics-electricity-emf-capacitors-mcat': 'Circuits Part 3: EMF & Capacitance',
  'mcat-physics-electricity-rc-circuits-mcat': 'Circuits Part 4: Capacitor Networks & Bioelectricity',
  'mcat-physics-mechanics-fluids-mcat': 'Fluids at Rest',
  'mcat-physics-mechanics-fluid-dynamics-mcat': 'Fluids in Motion',
  'mcat-physics-waves-periodic-motion-mcat': 'Periodic Motion & Waves',
  'mcat-physics-waves-interference-mcat': 'Interference & Standing Waves',
  'mcat-physics-waves-sound-mcat': 'Sound, Doppler & Ultrasound',
}

/** True for a retired pre-split slug. */
export function isSplitMcatTopic(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(MCAT_SPLIT_TOPICS, slug)
}

/** The lesson that replaces a retired slug for links and recommendations; the slug itself otherwise. */
export function mcatSuccessorSlug(slug: string): string {
  return MCAT_SPLIT_TOPICS[slug]?.[0] ?? slug
}

/** Retired slugs whose attempts and attendance count toward `slug`. */
export function mcatPredecessorSlugs(slug: string): string[] {
  return Object.entries(MCAT_SPLIT_TOPICS)
    .filter(([, successors]) => successors.includes(slug))
    .map(([old]) => old)
}

/** `slug` plus every retired slug that counts toward it. */
export function mcatCreditSlugs(slug: string): string[] {
  return [slug, ...mcatPredecessorSlugs(slug)]
}
