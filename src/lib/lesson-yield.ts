/**
 * Exam-yield tiers for interactive lessons (owner request 2026-10-02).
 *
 * Mirrors the flashcard tiers (src/lib/flashcard-yield.ts): ultra-high, high
 * and medium content is shown by default; low-yield content is hidden unless
 * the student turns on "Include low-yield details" (User.lessonIncludeLowYield).
 * Only LOW changes what is shown. The other three tiers are recorded in the
 * lesson data so a later mode can use them without re-tagging.
 *
 * Tagging is optional and backward compatible: an untagged lesson, section,
 * block or question is always shown, exactly like an unlabeled (NULL) card.
 *
 * Three places carry a tier:
 *  - a passage of a text section's `content`, between marker lines
 *      <!-- yield:low -->
 *      ...markdown...
 *      <!-- /yield -->
 *    The markers are HTML comments, so a surface that does not know about
 *    tiers (or an older build) still renders the text as ordinary markdown.
 *  - a quiz question: `yield: 'LOW'` on an `exercise.questions[]` item;
 *  - a whole section: `yield: 'LOW'` on the section.
 */
import type { ExamYield } from '@prisma/client'

export type LessonYield = ExamYield

export const LESSON_YIELDS: readonly LessonYield[] = ['ULTRA_HIGH', 'HIGH', 'MEDIUM', 'LOW']

const OPEN = /^[ \t]*<!--\s*yield:low\s*-->[ \t]*$/i
const CLOSE = /^[ \t]*<!--\s*\/yield\s*-->[ \t]*$/i

export interface YieldBlock {
  text: string
  low: boolean
}

/**
 * Split a text section's markdown into ordinary and low-yield blocks, in
 * order. Marker lines are consumed and never appear in any block. An
 * unclosed marker runs to the end of the content (fail visible: the text is
 * still shown when low-yield is on). Empty blocks are dropped.
 */
export function splitYieldBlocks(content: string): YieldBlock[] {
  const blocks: YieldBlock[] = []
  let low = false
  let buf: string[] = []
  const flush = () => {
    const text = buf.join('\n').replace(/^\n+|\n+$/g, '')
    if (text.trim()) blocks.push({ text, low })
    buf = []
  }
  for (const line of content.split('\n')) {
    if (!low && OPEN.test(line)) { flush(); low = true; continue }
    if (low && CLOSE.test(line)) { flush(); low = false; continue }
    buf.push(line)
  }
  flush()
  return blocks
}

/** True when a text section's content contains any low-yield block. */
export function hasLowYieldBlock(content: string | undefined): boolean {
  return !!content && content.split('\n').some((line) => OPEN.test(line))
}

/** The content as shown when low-yield is OFF: low blocks removed. */
export function stripLowYield(content: string): string {
  return splitYieldBlocks(content).filter((b) => !b.low).map((b) => b.text).join('\n\n')
}

type Taggable = { yield?: unknown }
type QuestionLike = Taggable & Record<string, unknown>
type SectionLike = Taggable & {
  content?: unknown
  exercise?: unknown
  [key: string]: unknown
}

const isLow = (x: Taggable | undefined | null) => x?.yield === 'LOW'

function questionsOf(section: SectionLike): QuestionLike[] | null {
  const ex = section.exercise as { questions?: unknown } | undefined
  return Array.isArray(ex?.questions) ? (ex!.questions as QuestionLike[]) : null
}

/** Does this lesson part contain anything tagged LOW (so the toggle matters)? */
export function lessonHasLowYield(sections: readonly SectionLike[]): boolean {
  return sections.some(
    (s) =>
      isLow(s) ||
      (typeof s.content === 'string' && hasLowYieldBlock(s.content)) ||
      (questionsOf(s)?.some(isLow) ?? false),
  )
}

/**
 * The sections a student sees. With `includeLow` the lesson is returned
 * unchanged (low blocks are then rendered with a label by the renderer).
 * Without it: LOW sections and LOW questions are dropped, a quiz section whose
 * every question is LOW is dropped with them, and so is a text section made
 * only of low-yield blocks. Other text blocks are left in
 * place here and filtered at render time (splitYieldBlocks), so the section
 * list, and with it saved progress, does not depend on markdown parsing.
 *
 * Never mutates the input; untagged sections are returned by reference.
 */
export function filterSectionsForYield<S extends SectionLike>(sections: readonly S[], includeLow: boolean): S[] {
  if (includeLow) return [...sections]
  const out: S[] = []
  for (const s of sections) {
    if (isLow(s)) continue
    const qs = questionsOf(s)
    // A text section that is ALL low-yield would render as an empty step.
    if (!qs && typeof s.content === 'string' && hasLowYieldBlock(s.content) && !stripLowYield(s.content).trim()) continue
    if (qs && qs.some(isLow)) {
      const kept = qs.filter((q) => !isLow(q))
      if (kept.length === 0) continue
      out.push({ ...s, exercise: { ...(s.exercise as object), questions: kept } })
      continue
    }
    out.push(s)
  }
  return out
}
