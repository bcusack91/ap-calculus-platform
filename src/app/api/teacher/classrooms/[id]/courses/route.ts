import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireClassroomAccess } from '@/lib/teacher-auth'

interface Ctx { params: Promise<{ id: string }> }

/**
 * The courses a classroom teaches (Khan Academy's class-course model).
 *
 * Assignment creation filters its topic picker to these instead of listing
 * every topic on the platform. An empty set means "not configured", and the
 * picker falls back to the full catalog so existing classrooms lose nothing.
 *
 * GET  -> { courseSlugs: string[] }
 * PUT  { courseSlugs: string[] } -> replaces the set (owner or co-teacher)
 */
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const rows = await prisma.classroomCourse.findMany({
    where: { classroomId: id },
    select: { courseSlug: true },
    orderBy: { createdAt: 'asc' },
  })
  return NextResponse.json({ courseSlugs: rows.map((r) => r.courseSlug) })
}

export async function PUT(req: NextRequest, { params }: Ctx) {
  const { id } = await params
  const access = await requireClassroomAccess(id)
  if ('error' in access) return access.error

  const body = await req.json().catch(() => ({}))
  const courseSlugs = Array.isArray(body?.courseSlugs)
    ? [...new Set(
        (body.courseSlugs as unknown[]).filter(
          (x): x is string => typeof x === 'string' && x.length > 0 && x.length <= 100
        )
      )].slice(0, 50)
    : null
  if (courseSlugs === null) {
    return NextResponse.json({ error: 'courseSlugs must be an array of slugs' }, { status: 400 })
  }

  // Replace-the-set semantics: what you see checked in Settings is exactly
  // what is stored — no drift between partial add/remove endpoints.
  await prisma.$transaction([
    prisma.classroomCourse.deleteMany({ where: { classroomId: id } }),
    prisma.classroomCourse.createMany({
      data: courseSlugs.map((courseSlug) => ({ classroomId: id, courseSlug })),
    }),
  ])
  return NextResponse.json({ courseSlugs })
}
