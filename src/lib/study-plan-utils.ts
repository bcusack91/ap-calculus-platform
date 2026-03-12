/**
 * Shared study-plan types and helpers used by all subject-specific data files
 * and API routes.
 */

export interface StudyPlanTask {
  title: string
  type: 'LESSON' | 'FLASHCARD' | 'QUIZ' | 'PRACTICE' | 'CUSTOM'
  topicSlug?: string
  weekOffset: number
  dayOfWeek: number // 0=Mon … 6=Sun
}

export interface StudyPlanTemplate {
  id: string
  title: string
  description: string
  durationWeeks: number
  targetImprovement: string
  weeklyHours: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  tasks: StudyPlanTask[]
}

/** Stamp `weekOffset` onto every task in a batch for a given week. */
export function weekTasks(
  weekOffset: number,
  items: Omit<StudyPlanTask, 'weekOffset'>[],
): StudyPlanTask[] {
  return items.map(t => ({ ...t, weekOffset }))
}

/**
 * Convert template tasks into Prisma-compatible dated objects relative to
 * `startDate`.
 */
export function resolveStudyPlanTasks(
  template: StudyPlanTemplate,
  startDate: Date,
): { title: string; type: string; topicSlug?: string; dueDate: Date; sortOrder: number }[] {
  return template.tasks.map((t, i) => {
    const dueDate = new Date(startDate)
    dueDate.setDate(dueDate.getDate() + t.weekOffset * 7 + t.dayOfWeek)
    return {
      title: t.title,
      type: t.type,
      topicSlug: t.topicSlug,
      dueDate,
      sortOrder: i,
    }
  })
}
