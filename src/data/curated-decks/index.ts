import type { Slide } from '@/lib/slide-deck'
import { mcatKinematicsDeck } from './mcat-kinematics'

/**
 * Hand-curated slide decks (owner-reviewed) that OVERRIDE auto-generation.
 * generateSlideDeck() checks this registry first; the pre-generation script
 * therefore stores these verbatim. Add a deck here when the owner reviews a
 * topic and wants exact control over the teaching arc.
 *
 * Authoring rules (so slides render + sync correctly):
 * - First slide `title`, last slide `quiz`, content in between.
 * - Keep content slides to ≤5 short blocks — the live view must fit on one
 *   screen WITHOUT scrolling (slide annotations overlay the canvas; scrolled
 *   content would break teacher-ink alignment).
 * - Progressive reveal = consecutive slides that build on each other
 *   (question-only slide, then step slides). Teacher's Next drives the reveal.
 * - Poll questions should come from the topic's exit-quiz pool so in-class
 *   checks stay aligned with what homework grades.
 * - Block styling: `$$…$$` → centered math card, `- ` → bullet, lines with
 *   `|` + newlines → table, `Solution:`/`→ ` prefix → ✓ callout, `**bold**`.
 */
export const CURATED_DECKS: Record<string, { title: string; slides: Slide[] }> = {
  'mcat-physics-mechanics-kinematics-mcat': mcatKinematicsDeck,
}
