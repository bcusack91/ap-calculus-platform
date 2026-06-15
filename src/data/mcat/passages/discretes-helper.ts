import type { MCATPassage, MCATDiscreteQuestion, MCATSection } from '../types'

/**
 * Build a synthetic "Discrete Questions" passage from a section's standalone
 * discrete items. Pure and dependency-free (takes the discrete array as an
 * argument) so a page can import ONLY its own section's leaf data instead of the
 * passages barrel — the barrel references every bank, which would ship all
 * sections' passages into that page's client bundle.
 */
export function buildDiscretesPassage(
  section: Exclude<MCATSection, 'cars'>,
  all: MCATDiscreteQuestion[],
  limit?: number,
  opts?: { idSuffix?: string; title?: string },
): MCATPassage | null {
  const discretes = typeof limit === 'number' ? all.slice(0, Math.max(0, limit)) : all
  if (!discretes.length) return null
  return {
    // `idSuffix` lets the full-length assembler emit several DISTINCT discrete
    // mini-blocks (e.g. `${section}-discretes-1`, `-2`) with unique ids. Absent
    // (the 2-/3-arg callers), the id stays `${section}-discretes` exactly.
    id: `${section}-discretes${opts?.idSuffix ?? ''}`,
    section,
    discipline: 'Discrete questions',
    title: opts?.title ?? 'Discrete Questions',
    passageText:
      'The following questions are **independent of any passage** — each stands alone, as in the discrete sets on the real MCAT.',
    questions: discretes.map(({ question, options, correctAnswer, explanation, skill, needsReview }) => ({
      question, options, correctAnswer, explanation, skill, needsReview,
    })),
    needsReview: discretes.some((d) => d.needsReview),
  }
}
