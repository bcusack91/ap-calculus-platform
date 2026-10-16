'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ListChecks } from 'lucide-react'
import type { MistakeCourse } from '@/components/MistakeQuiz'
import { mistakesHref, toolCourseLabel } from '@/lib/question-tool-courses'

/**
 * A compact "Also today" chip for the dashboard: how many questions sit in
 * the course's mistake log. Renders nothing until there is at least one, so
 * it never competes with the one next step.
 */
export default function MistakeLogChip({ course, className = '' }: { course: MistakeCourse; className?: string }) {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let cancelled = false
    fetch(`/api/mistakes?course=${course}`, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!cancelled && typeof d?.total === 'number') setTotal(d.total)
      })
      .catch(() => { /* chip is optional */ })
    return () => {
      cancelled = true
    }
  }, [course])
  if (total <= 0) return null
  return (
    <Link
      href={mistakesHref(course)}
      className={`inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-accent-muted hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 ${className}`}
    >
      <ListChecks className="h-4 w-4 text-accent" aria-hidden />
      {total} {toolCourseLabel(course)} mistake{total === 1 ? '' : 's'} to retire
    </Link>
  )
}
