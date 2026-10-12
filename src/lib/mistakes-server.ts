import { prisma } from '@/lib/prisma'
import { activeMistakes, computeMistakes, type AnswerLogRow, type MistakeItem } from '@/lib/mistake-log'
import { QUESTION_KEY_PREFIX } from '@/lib/question-key'
import { actSectionLabelForTopic } from '@/lib/act-topic-sections'

/** The mistake log's courses and the DB course slug each one's answers are logged under. */
export const MISTAKE_COURSES = { mcat: 'mcat-prep', sat: 'sat-prep', act: 'act-prep' } as const
export type MistakeCourse = keyof typeof MISTAKE_COURSES

export function isMistakeCourse(c: unknown): c is MistakeCourse {
  return c === 'mcat' || c === 'sat' || c === 'act'
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

/** Every keyed, per-question answer the student has logged in a course. */
export async function answerLogFor(userId: string, course: MistakeCourse, questionKeys?: string[]): Promise<AnswerLogRow[]> {
  const rows = await prisma.questionActivity.findMany({
    where: {
      userId,
      courseSlug: MISTAKE_COURSES[course],
      answered: 1,
      ...(questionKeys ? { questionKey: { in: questionKeys } } : { questionKey: { startsWith: QUESTION_KEY_PREFIX } }),
    },
    select: SELECT,
    orderBy: { answeredAt: 'asc' },
    take: 20_000,
  })
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
