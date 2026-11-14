/**
 * Topics that have printable note sheets (src/lib/note-sheets.ts), with the
 * video-lesson key whose review flashcards fill the equation sheet.
 *
 * Rollout is by this list (owner, 2026-11-13: MCAT Circuits first). A topic
 * needs a slide deck for the live-class notes and a section-based video lesson
 * for the video notes; add it here once both read well on paper.
 */
export const NOTE_SHEET_TOPICS: Record<string, { lessonKey: string }> = {
  'mcat-physics-electricity-dc-circuits-mcat': { lessonKey: 'mcat-circ1' },
  'mcat-physics-electricity-kirchhoff-power-mcat': { lessonKey: 'mcat-circ2' },
}

export const hasNoteSheets = (topicSlug: string): boolean => Object.prototype.hasOwnProperty.call(NOTE_SHEET_TOPICS, topicSlug)
