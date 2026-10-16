'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import MistakeLog from '@/components/MistakeLog'
import type { MistakeCourse } from '@/components/MistakeQuiz'
import { signInUrl } from '@/lib/auth-redirect'
import { mistakesHref, toolCourseHubHref, toolCourseHubLabel, toolCourseLabel } from '@/lib/question-tool-courses'

/** /mcat/mistakes, /sat/mistakes, /act/mistakes and /<ap-course>/mistakes. Signed-in only: the hubs aren't behind the middleware, so this redirects itself. */
export default function MistakeLogPage({ course }: { course: MistakeCourse }) {
  const { status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status === 'unauthenticated') router.push(signInUrl({ callbackUrl: mistakesHref(course) }))
  }, [status, router, course])

  return (
    <div className="min-h-screen bg-gray-50 py-8 dark:bg-gray-950">
      <div className="container max-w-3xl px-4">
        <Link
          href={toolCourseHubHref(course)}
          className="inline-flex items-center gap-1 rounded text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring dark:text-accent-muted"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> {toolCourseHubLabel(course)}
        </Link>
        <h1 className="mb-4 mt-3 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">Your {toolCourseLabel(course)} mistake log</h1>
        {status === 'authenticated' ? (
          <MistakeLog course={course} />
        ) : (
          <div className="h-40 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800" aria-busy="true" />
        )}
      </div>
    </div>
  )
}
