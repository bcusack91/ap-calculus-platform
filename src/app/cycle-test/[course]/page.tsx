import { notFound } from 'next/navigation'
import CycleUnitTestPage from '@/components/CycleUnitTestPage'
import { isApUnitTestCourse } from '@/lib/unit-test-courses'

export default async function ApCycleTestPage({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params
  if (!isApUnitTestCourse(course)) notFound()
  return <CycleUnitTestPage course={course} />
}
