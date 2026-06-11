/**
 * Mastery model — single source of truth for the platform's pass/skip/review
 * thresholds.
 *
 * Why this file exists: these numbers had drifted into five places with five
 * conventions (entrance quiz 100%, exit quiz 70%/50%, diagnostics 75%/50%,
 * MCAT 70%/40%, dashboard "mastered"), with no record of which differences
 * were deliberate. Centralizing them doesn't unify the model — that's a
 * product decision — but it makes the current model legible and stops
 * further drift. If you change a value here, you change it everywhere it's
 * imported.
 *
 * The current model, in one view:
 *
 *   entrance quiz  — answer EVERY question in a part correctly → skip that part
 *   exit quiz      — ≥70% pass (topic → MASTERED) · <50% forced unit review
 *   diagnostics    — ≥75% strong · <50% weak (recommendations key off "weak")
 *   MCAT diagnostic— ≥70% strong · <40% weak (deliberately easier banding:
 *                    MCAT domains have fewer questions each, so wider bands
 *                    reduce flip-flopping; see mcat-practice/diagnostic-generator)
 *
 * Diagnostic generators (~30 course files) currently keep their 75/50 inline;
 * they are consistent with DIAGNOSTIC_* below. Migrate them here opportunistically
 * when touching those files.
 */

/** Exit quiz: fraction correct required to pass (topic marked MASTERED). */
export const EXIT_QUIZ_PASS_FRACTION = 0.7

/** Exit quiz: below this fraction the student must redo the unit's lesson parts. */
export const EXIT_QUIZ_REDO_FRACTION = 0.5

/**
 * Entrance quiz: fraction of a part's questions that must be correct to skip
 * that part. 1.0 = perfect score (the current, deliberately strict rule).
 */
export const ENTRANCE_QUIZ_SKIP_FRACTION = 1.0

/** masteryLevel written to TopicProgress when an exit quiz is passed. */
export const MASTERY_LEVEL_ON_EXIT_PASS = 1.0

/** Diagnostics (most courses): domain percentage ≥ this → "strong". */
export const DIAGNOSTIC_STRONG_PCT = 75

/** Diagnostics (most courses): domain percentage < this → "weak". */
export const DIAGNOSTIC_WEAK_PCT = 50

/** MCAT diagnostic uses wider bands (see file header for rationale). */
export const MCAT_DIAGNOSTIC_STRONG_PCT = 70
export const MCAT_DIAGNOSTIC_WEAK_PCT = 40
