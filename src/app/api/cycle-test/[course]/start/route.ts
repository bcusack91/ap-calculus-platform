import { NextResponse } from 'next/server'
import { unitTestStartResponse } from '@/lib/unit-test-api'
import { isApUnitTestCourse } from '@/lib/unit-test-courses'

interface Ctx { params: Promise<{ course: string }> }

/** Start or resume a sitting of an AP course's cycle test. */
export async function POST(_req: Request, { params }: Ctx) {
  const { course } = await params
  if (!isApUnitTestCourse(course)) return NextResponse.json({ error: 'Not available' }, { status: 404 })
  return unitTestStartResponse(course)
}
