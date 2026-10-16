import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import MistakeLogPage from '@/components/MistakeLogPage'
import { AP_TOOL_COURSES, isApToolCourse, toolCourseLabel } from '@/lib/question-tool-courses'

/**
 * /<ap-course-slug>/mistakes (e.g. /ap-chemistry/mistakes): the AP mistake
 * log, one route for every AP course. The test-prep logs keep their own static
 * routes (/mcat/mistakes, /sat/mistakes, /act/mistakes), which take precedence.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return AP_TOOL_COURSES.map((apCourse) => ({ apCourse }))
}

export async function generateMetadata({ params }: { params: Promise<{ apCourse: string }> }): Promise<Metadata> {
  const { apCourse } = await params
  if (!isApToolCourse(apCourse)) return {}
  const label = toolCourseLabel(apCourse)
  return {
    title: `Your ${label} mistake log | Study Mondo`,
    description: `Every ${label} question you missed or flagged, until you answer it correctly twice. Re-quiz them in one click.`,
    robots: { index: false, follow: false },
  }
}

export default async function ApMistakesRoute({ params }: { params: Promise<{ apCourse: string }> }) {
  const { apCourse } = await params
  if (!isApToolCourse(apCourse)) notFound()
  return <MistakeLogPage course={apCourse} />
}
