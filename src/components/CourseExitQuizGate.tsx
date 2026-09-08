'use client'

import { Suspense, type ComponentProps, type ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import CourseEntranceQuiz from '@/components/CourseEntranceQuiz'

type EntranceQuizCategories = ComponentProps<typeof CourseEntranceQuiz>['categories']

interface CourseExitQuizGateProps {
  courseSlug: string
  courseName: string
  categories: EntranceQuizCategories
  /**
   * The normal-mode content the server chose (categories grid, or the
   * "Content Coming Soon" block when the course has no categories). Rendered
   * statically as the Suspense fallback so crawlers and no-param visitors see
   * the full page in the prerendered HTML.
   */
  normalContent: ReactNode
  /**
   * The "Content Coming Soon" block. In exitQuiz mode the old server render's
   * ternary fell through to this block below the quiz, so it is preserved
   * verbatim to keep the rendered output identical to the pre-static page.
   */
  emptyStateContent: ReactNode
}

/**
 * Client-side replacement for the server page's `?exitQuiz=true` searchParams
 * read. Reading searchParams on the server forced the whole /courses/[slug]
 * route dynamic (killing ISR); reading them here via useSearchParams inside a
 * Suspense boundary keeps the route fully static while preserving the exit
 * quiz deep link used by the AP Chemistry / AP Precalculus hub pages and the
 * teacher-assignment auto-completion flow.
 *
 * On a hard load of `?exitQuiz=true` the static HTML briefly shows the normal
 * categories view (the Suspense fallback) before hydration swaps in the quiz.
 */
function GateInner({ courseSlug, courseName, categories, normalContent, emptyStateContent }: CourseExitQuizGateProps) {
  const searchParams = useSearchParams()
  const isExitQuizMode = searchParams.get('exitQuiz') === 'true'

  if (!isExitQuizMode) {
    return <>{normalContent}</>
  }

  return (
    <>
      {/* Exit Quiz Mode — show entrance quiz + filtered topics */}
      <CourseEntranceQuiz
        courseSlug={courseSlug}
        courseName={courseName}
        categories={categories}
      />
      {emptyStateContent}
    </>
  )
}

export default function CourseExitQuizGate(props: CourseExitQuizGateProps) {
  return (
    <Suspense fallback={props.normalContent}>
      <GateInner {...props} />
    </Suspense>
  )
}
