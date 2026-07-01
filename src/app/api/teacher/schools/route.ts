import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireTeacher } from '@/lib/teacher-auth'

/**
 * GET /api/teacher/schools — lightweight list of schools for the classroom
 * "school" picker (so a class can be attached to a school, feeding the
 * admin district rollup). Teacher/admin only.
 */
export async function GET() {
  const result = await requireTeacher()
  if ('error' in result && result.error) return result.error

  const schools = await prisma.school.findMany({
    orderBy: [{ district: 'asc' }, { name: 'asc' }],
    select: { id: true, name: true, district: true },
  })
  return NextResponse.json({ schools })
}
