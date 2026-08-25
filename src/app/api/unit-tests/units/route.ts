import { NextRequest, NextResponse } from 'next/server'
import { requireTeacher } from '@/lib/auth-guard'
import { unitsForCourse, coursesWithUnitTests } from '@/lib/unit-tests/course-units'

/**
 * GET /api/unit-tests/units?courseSlug=…
 * The units a teacher can target when assigning a unit test. With no
 * courseSlug, returns the courses that have unit tests at all.
 */
export async function GET(req: NextRequest) {
  const authResult = await requireTeacher()
  if ('error' in authResult) return authResult.error

  const courseSlug = req.nextUrl.searchParams.get('courseSlug')
  if (!courseSlug) return NextResponse.json({ courses: coursesWithUnitTests() })

  return NextResponse.json({
    units: unitsForCourse(courseSlug).map((u) => ({
      id: u.id,
      unitNumber: u.unitNumber,
      name: u.name,
    })),
  })
}
