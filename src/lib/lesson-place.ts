/**
 * Where a student is in a multi-part lesson, as the one number the progress
 * row stores (TopicProgress.masteryLevel). The renderer writes
 * `calculatePartMastery` on every save and reads `partFromMastery` on reload,
 * so the two must be exact inverses at every part boundary: a finished Part 1
 * of 7 saves 1/7 and reopens at Part 2 (the "we saved your place" promise of
 * the short first session, Phase 3 W5).
 */
export function calculatePartMastery(lessonPart: number, completedSectionsCount: number, totalSections: number, totalParts: number): number {
  const safeSections = Math.max(totalSections, 1)
  const progressInPart = completedSectionsCount / safeSections
  const partWeight = 1.0 / Math.max(totalParts, 1)
  const baseLevel = (lessonPart - 1) * partWeight
  return Math.min(1, baseLevel + progressInPart * partWeight)
}

/** The part a saved mastery level resolves to (1..totalParts). */
export function partFromMastery(mastery: number, totalParts: number): number {
  const safeParts = Math.max(totalParts, 1)
  const bounded = Math.min(Math.max(Number.isFinite(mastery) ? mastery : 0, 0), 0.999999)
  const partWeight = 1.0 / safeParts
  // Round away the floating-point dust so k/n divided by 1/n is exactly k.
  const steps = Math.floor(bounded / partWeight + 1e-9)
  return Math.min(safeParts, Math.max(1, steps + 1))
}
