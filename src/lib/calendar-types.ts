import type { FullLengthCourse } from '@/lib/full-length-progress'

export type CalendarEventKind = 'lesson' | 'unit-test' | 'diagnostic' | 'task' | 'class-diagnostic' | 'assignment'

export interface CalendarEvent {
  id: string
  kind: CalendarEventKind
  title: string
  /** Day for date-only items (tasks), as YYYY-MM-DD. */
  date: string | null
  /** Instant for deadlines (class diagnostics, assignments); the client shows its local day. */
  at: string | null
  href: string | null
  completed: boolean
  course: string | null
  planTitle: string | null
  /** Task fields (movable items). */
  taskId: string | null
  auto: boolean
  autoDate: string | null
  overdue: boolean
}

export interface CalendarCycle {
  course: FullLengthCourse
  label: string
  dueDate: string | null
  source: 'class' | 'self' | null
  classroomName: string | null
  pending: number
  hasDiagnostic: boolean
}
