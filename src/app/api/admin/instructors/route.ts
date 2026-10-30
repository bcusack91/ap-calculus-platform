import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin } from '@/lib/auth-guard'
import { instructorInputSchema, slugifyInstructorName, uniqueSlug } from '@/lib/video-lesson-admin'
import { noStore } from '@/lib/video-lesson-authoring'
import { instructorSelect, resolveLinkEmail, unknownCourses } from './shared'

/**
 * GET  /api/admin/instructors — every instructor profile, plus the course list
 *      for the courses multi-select.
 * POST /api/admin/instructors — create { name, headline, bio, photoUrl,
 *      courses[], isActive, linkEmail? }. The slug comes from the name.
 */
export async function GET() {
  const gate = await requireAdmin()
  if ('error' in gate) return gate.error
  const [instructors, courses] = await Promise.all([
    prisma.instructor.findMany({ orderBy: { name: 'asc' }, select: instructorSelect }),
    prisma.course.findMany({ orderBy: { order: 'asc' }, select: { slug: true, name: true } }),
  ])
  return NextResponse.json({ instructors, courses }, { headers: noStore })
}

export async function POST(req: NextRequest) {
  const gate = await requireAdmin()
  if ('error' in gate) return gate.error
  const parsed = instructorInputSchema.safeParse(await req.json().catch(() => ({})))
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' }, { status: 400 })
  }
  const input = parsed.data
  const bad = await unknownCourses(input.courses ?? [])
  if (bad.length) return NextResponse.json({ error: `Unknown course: ${bad.join(', ')}` }, { status: 400 })

  let userId: string | null = null
  if (input.linkEmail) {
    const link = await resolveLinkEmail(input.linkEmail, null)
    if ('error' in link) return NextResponse.json({ error: link.error }, { status: 400 })
    userId = link.userId
  }

  const base = slugifyInstructorName(input.name)
  const taken = await prisma.instructor.findMany({ where: { slug: { startsWith: base } }, select: { slug: true } })
  const slug = uniqueSlug(base, new Set(taken.map((t) => t.slug)))

  const instructor = await prisma.instructor.create({
    data: {
      slug,
      name: input.name,
      headline: input.headline ?? '',
      bio: input.bio ?? '',
      photoUrl: input.photoUrl || null,
      courses: [...new Set(input.courses ?? [])],
      isActive: input.isActive ?? true,
      userId,
    },
    select: instructorSelect,
  })
  return NextResponse.json({ instructor }, { status: 201, headers: noStore })
}
