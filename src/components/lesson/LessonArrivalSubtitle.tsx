'use client'

/**
 * The interactive-lesson header's subtitle. The page is ISR-cached and must
 * stay personalization-free, so this client component reads the arrival
 * context (`?from=diagnostic`, or "this is my current plan topic") on the
 * client and swaps the generic line for "Your first step in <course>: <topic>".
 * Mount it inside <Suspense> (useSearchParams on a static route).
 */
import { useFirstSession } from '@/hooks/useFirstSession'
import { firstStepHeadline } from '@/lib/first-session'

export const DEFAULT_LESSON_SUBTITLE = 'Learn step-by-step with interactive practice!'

interface Props {
  topicSlug: string
  topicTitle: string
  courseName?: string | null
  className?: string
}

export default function LessonArrivalSubtitle({ topicSlug, topicTitle, courseName, className }: Props) {
  const first = useFirstSession(topicSlug)
  return (
    <p className={className} data-testid="lesson-subtitle" data-first-step={first.active ? first.source : undefined}>
      {first.active ? firstStepHeadline(courseName, topicTitle) : DEFAULT_LESSON_SUBTITLE}
    </p>
  )
}
