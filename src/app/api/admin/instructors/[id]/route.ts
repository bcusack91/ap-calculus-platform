import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { instructorPatchSchema } from '@/lib/video-lesson-admin'
import { noStore } from '@/lib/video-lesson-authoring'
import { instructorSelect, resolveLinkEmail, unknownCourses } from '../shared'

type Ctx = { params: Promise<{ id: string }> }

/**
 * PATCH /api/admin/instructors/[id] — update any of { name, headline, bio,
 * photoUrl, courses[], isActive, linkEmail }. linkEmail '' or null unlinks;
 * omitted leaves the link alone. isActive false hides the instructor's
 * lessons from students. The slug never changes (student links use it).
 */
export async function PATCH(req: NextRequest, { params }: Ctx) {
  const gate = await requireAdmin()
  if ('error' in gate) return gate.error
  const { id } = await params
  const existing = await prisma.instructor.findUnique({ where: { id }, select: { id: true } })
  if (!existing) return NextResponse.json({ error: 'Instructor not found' }, { status: 404 })

  const parsed = instructorPatchSchema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' }, { status: 400 })
  }
  const input = parsed.data
  if (input.courses) {
    const bad = await unknownCourses(input.courses)
    if (bad.length) return NextResponse.json({ error: `Unknown course: ${bad.join(', ')}` }, { status: 400 })
  }

  let userId: string | null | undefined
  if (input.linkEmail === null || input.linkEmail === '') userId = null
  else if (input.linkEmail) {
    const link = await resolveLinkEmail(input.linkEmail, id)
    if ('error' in link) return NextResponse.json({ error: link.error }, { status: 400 })
    userId = link.userId
  }

  const instructor = await prisma.instructor.update({
    where: { id },
    data: {
      ...(input.name !== undefined ? { name: input.name } : {}),
      ...(input.headline !== undefined ? { headline: input.headline } : {}),
      ...(input.bio !== undefined ? { bio: input.bio } : {}),
      ...(input.photoUrl !== undefined ? { photoUrl: input.photoUrl || null } : {}),
      ...(input.courses !== undefined ? { courses: [...new Set(input.courses)] } : {}),
      ...(input.isActive !== undefined ? { isActive: input.isActive } : {}),
      ...(userId !== undefined ? { userId } : {}),
    },
    select: instructorSelect,
  })
  return NextResponse.json({ instructor }, { headers: noStore })
}
