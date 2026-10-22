import { prisma } from '@/lib/prisma'
import { coursesIn } from '@/lib/course-includes'
import { activeMistakes, computeMistakes, type AnswerLogRow, type MistakeItem } from '@/lib/mistake-log'
import { QUESTION_KEY_PREFIX } from '@/lib/question-key'
import { actSectionLabelForTopic } from '@/lib/act-topic-sections'
import { canonicalApTopicSlug } from '@/lib/ap-topic-canonical'
import { TOOL_COURSES, isApToolCourse, isToolCourse, toolCourseSlug, type ToolCourse } from '@/lib/question-tool-courses'
import { loadApUnitTestCourse } from '@/lib/unit-tests/ap-unit-test-registry'

/**
 * The mistake log's courses and the DB course slug each one's answers are
 * logged under: test prep ('mcat' -> 'mcat-prep', …) and every AP course
 * (keyed by its own slug, src/lib/question-tool-courses.ts).
 */
export type MistakeCourse = ToolCourse
export const MISTAKE_COURSES = Object.fromEntries(TOOL_COURSES.map((c) => [c, toolCourseSlug(c)])) as Record<MistakeCourse, string>

export function isMistakeCourse(c: unknown): c is MistakeCourse {
  return isToolCourse(c)
}

const SELECT = {
  questionKey: true, correct: true, chosenIndex: true, chosenText: true, flagged: true, answeredAt: true,
  attemptKind: true, attemptId: true, itemIndex: true, topicSlug: true, discipline: true, source: true,
} as const

/** Readable names for section slugs some sources store (MCAT full-length). */
const SECTION_LABELS: Record<string, string> = {
  'chem-phys': 'Chem/Phys',
  cars: 'CARS',
  'bio-biochem': 'Bio/Biochem',
  'psych-soc': 'Psych/Soc',
}
export function sectionLabel(discipline: string): string {
  return SECTION_LABELS[discipline] ?? discipline
}

/** A course slug, or every course it includes (`{ in }` only when there are several). */
function courseSlugFilter(slug: string): string | { in: string[] } {
  const courses = coursesIn(slug)
  return courses.length === 1 ? courses[0] : { in: courses }
}

/** Every keyed, per-question answer the student has logged in a course. */
export async function answerLogFor(userId: string, course: MistakeCourse, questionKeys?: string[]): Promise<AnswerLogRow[]> {
  const rows = await prisma.questionActivity.findMany({
    where: {
      userId,
      // A course's log includes the courses it contains: an AP Calculus AB
      // answer counts for a BC student too (src/lib/course-includes.ts).
      courseSlug: courseSlugFilter(MISTAKE_COURSES[course]),
      answered: 1,
      ...(questionKeys ? { questionKey: { in: questionKeys } } : { questionKey: { startsWith: QUESTION_KEY_PREFIX } }),
    },
    select: SELECT,
    orderBy: { answeredAt: 'asc' },
    take: 20_000,
  })
  if (isApToolCourse(course)) {
    // AP rows come from five surfaces that each name the "discipline"
    // differently (diagnostic domain, quiz category, unit…). File every row
    // under its topic's CED unit instead, and older rows' legacy topic slugs
    // under the production topic, so the unit and topic filters line up.
    let unitOf: Map<string, string> = new Map()
    try {
      unitOf = (await loadApUnitTestCourse(course))?.unitLabelOfTopic ?? unitOf
    } catch (err) {
      console.warn(`[mistakes] ${course} units unavailable:`, err)
    }
    return rows.map((r) => {
      const topicSlug = canonicalApTopicSlug(course, r.topicSlug)
      return { ...r, source: String(r.source), topicSlug, discipline: unitOf.get(topicSlug) ?? r.discipline }
    })
  }
  return rows.map((r) => ({
    ...r,
    source: String(r.source),
    // ACT exit-quiz / unit-test rows carry no section: file them by their topic's section.
    discipline: course === 'act' && !r.discipline ? actSectionLabelForTopic(r.topicSlug) : sectionLabel(r.discipline),
  }))
}

export interface MistakeFilters {
  source?: string
  topic?: string
  section?: string
  from?: Date
  to?: Date
}

export function filterMistakes(items: MistakeItem[], f: MistakeFilters): MistakeItem[] {
  return items.filter((m) =>
    (!f.source || m.origin.source === f.source) &&
    (!f.topic || m.topicSlug === f.topic) &&
    (!f.section || m.discipline === f.section) &&
    (!f.from || m.lastMissedAt >= f.from) &&
    (!f.to || m.lastMissedAt <= f.to),
  )
}

export async function activeMistakesFor(userId: string, course: MistakeCourse): Promise<MistakeItem[]> {
  return activeMistakes(await answerLogFor(userId, course))
}

/** The current state of one question after an answer (did it just retire?). */
export async function mistakeStateFor(userId: string, course: MistakeCourse, key: string): Promise<MistakeItem | null> {
  return computeMistakes(await answerLogFor(userId, course, [key]))[0] ?? null
}
