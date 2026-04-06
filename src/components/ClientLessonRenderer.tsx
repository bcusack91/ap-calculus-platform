'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

function LessonSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-2" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 mb-6" />
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded" />
    </div>
  )
}

const InteractiveLessonRenderer = dynamic(
  () => import('@/components/InteractiveLessonRenderer'),
  { ssr: false, loading: () => <LessonSkeleton /> }
)

const DynamicInteractiveLessonRenderer = dynamic(
  () => import('@/components/DynamicInteractiveLessonRenderer'),
  { ssr: false, loading: () => <LessonSkeleton /> }
)

interface ClientLessonRendererProps {
  mode: 'handcrafted' | 'dynamic'
  topicSlug: string
  courseSlug?: string
  // For handcrafted
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preloadedParts?: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variantParts?: Record<number, any[]>
  totalVariants?: number
  completionDestination?: string
  practiceModeParts?: number[]
  // For dynamic
  textContent?: string
}

export default function ClientLessonRenderer({
  mode,
  topicSlug,
  courseSlug,
  preloadedParts,
  variantParts,
  totalVariants,
  completionDestination,
  practiceModeParts,
  textContent,
}: ClientLessonRendererProps) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400">Loading lesson...</p>
          </div>
        </div>
      }
    >
      {mode === 'handcrafted' && preloadedParts && preloadedParts.length > 0 ? (
        <InteractiveLessonRenderer
          topicSlug={topicSlug}
          courseSlug={courseSlug}
          preloadedParts={preloadedParts}
          variantParts={variantParts}
          totalVariants={totalVariants}
          completionDestination={completionDestination as 'competitive' | 'complete' | undefined}
          practiceModeParts={practiceModeParts}
        />
      ) : (
        <DynamicInteractiveLessonRenderer topicSlug={topicSlug} textContent={textContent!} />
      )}
    </Suspense>
  )
}
