import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { UNIT_TEST_COURSES, isApUnitTestCourse } from '@/lib/unit-test-courses'

interface Props { params: Promise<{ course: string }>; children: React.ReactNode }

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course } = await params
  const cfg = isApUnitTestCourse(course) ? UNIT_TEST_COURSES[course] : null
  return {
    title: cfg ? `${cfg.label} Cycle Test | Study Mondo` : 'Cycle Test | Study Mondo',
    description: cfg
      ? `A 25-question test on the topics your last ${cfg.label} diagnostic recommended. The last step of your study cycle before your next diagnostic.`
      : undefined,
    robots: { index: false, follow: false },
  }
}

/** /cycle-test/<key>: the AP cycle test for one CLASS_PLAN_COURSES key (e.g. ap-chem). */
export default async function CycleTestLayout({ params, children }: Props) {
  const { course } = await params
  if (!isApUnitTestCourse(course) || !UNIT_TEST_COURSES[course].enabled) notFound()
  return children
}
