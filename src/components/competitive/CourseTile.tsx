import Link from 'next/link'
import { ChevronRight, Lock } from 'lucide-react'
import type { CompetitiveCourse } from '@/lib/competitive-catalog'

/**
 * One course in the hub catalog. The course-identity gradient (from the
 * catalog) is the icon chip; a locked course keeps its identity, desaturated,
 * and says how to unlock it instead of looking broken.
 */
export default function CourseTile({ course, unlocked }: { course: CompetitiveCourse; unlocked: boolean }) {
  const body = (
    <>
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${course.gradient} text-2xl font-bold text-white shadow-sm ${unlocked ? '' : 'opacity-50 grayscale'}`}
        aria-hidden
      >
        {course.emoji}
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block truncate font-semibold ${unlocked ? 'text-foreground' : 'text-gray-600 dark:text-gray-400'}`}>
          {course.name}
        </span>
        {unlocked ? (
          <span data-qa="course-desc" className="mt-0.5 block truncate text-sm text-muted-foreground">{course.desc}</span>
        ) : (
          <span data-qa="course-locked-hint" className="mt-0.5 flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden /> Finish a lesson to unlock
          </span>
        )}
      </span>
      {unlocked && (
        <ChevronRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-accent dark:text-gray-500" aria-hidden />
      )}
    </>
  )

  if (!unlocked) {
    return (
      <div className="flex h-full items-center gap-3.5 rounded-2xl border border-dashed border-gray-300 bg-gray-50/80 p-4 dark:border-gray-700 dark:bg-gray-900/40">
        {body}
      </div>
    )
  }
  return (
    <Link
      href={`/competitive/${course.slug}`}
      className="group flex h-full items-center gap-3.5 rounded-2xl border border-card-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent-muted hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
    >
      {body}
    </Link>
  )
}
