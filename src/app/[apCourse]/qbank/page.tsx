import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import QbankPage from '@/components/QbankPage'
import { AP_TOOL_COURSES, isApToolCourse, toolCourseLabel } from '@/lib/question-tool-courses'

/**
 * /<ap-course-slug>/qbank (e.g. /ap-chemistry/qbank): the AP question bank,
 * one route for every AP course. The test-prep banks keep their own static
 * routes (/mcat/qbank, /sat/qbank, /act/qbank), which take precedence.
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
    title: `Build an ${label} practice set | Study Mondo`,
    description: `Pick ${label} units, topics and difficulty, choose unused, incorrect or flagged questions, and practice timed or in tutor mode.`,
    robots: { index: false, follow: false },
  }
}

export default async function ApQbankRoute({ params }: { params: Promise<{ apCourse: string }> }) {
  const { apCourse } = await params
  if (!isApToolCourse(apCourse)) notFound()
  return <QbankPage course={apCourse} />
}
