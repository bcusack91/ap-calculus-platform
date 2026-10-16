import { NextResponse } from 'next/server'
import { unitTestSubmitResponse } from '@/lib/unit-test-api'
import { isApUnitTestCourse } from '@/lib/unit-test-courses'

interface Ctx { params: Promise<{ course: string }> }

/** Grade an AP cycle test sitting server-side. */
export async function POST(req: Request, { params }: Ctx) {
  const { course } = await params
  if (!isApUnitTestCourse(course)) return NextResponse.json({ error: 'Not available' }, { status: 404 })
  return unitTestSubmitResponse(course, req)
}
