import { NextResponse } from 'next/server'
import { unitTestStatusResponse } from '@/lib/unit-test-api'
import { isApUnitTestCourse } from '@/lib/unit-test-courses'

/**
 * Every AP course's cycle test (the 25-question test after a diagnostic
 * cycle; AP's per-unit tests are a different thing at /<key>-unit-tests).
 * `course` is the CLASS_PLAN_COURSES key, e.g. /api/cycle-test/ap-chem.
 * Handlers are shared with MCAT/SAT/ACT (src/lib/unit-test-api.ts).
 */
interface Ctx { params: Promise<{ course: string }> }

export async function GET(_req: Request, { params }: Ctx) {
  const { course } = await params
  if (!isApUnitTestCourse(course)) return NextResponse.json({ error: 'Not available' }, { status: 404 })
  return unitTestStatusResponse(course)
}
