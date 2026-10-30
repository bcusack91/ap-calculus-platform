import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/**
 * POST /api/video-lessons/choice { courseSlug, instructorSlug } → { ok }
 * Remembers the instructor a student picked for a course, so the picker
 * pre-selects them next time.
 */
const bodySchema = z.object({ courseSlug: z.string().min(1).max(100), instructorSlug: z.string().min(1).max(100) })

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = bodySchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Invalid choice' }, { status: 400 })
  const instructor = await prisma.instructor.findFirst({ where: { slug: parsed.data.instructorSlug, isActive: true }, select: { id: true } })
  if (!instructor) return NextResponse.json({ error: 'Instructor not found' }, { status: 404 })
  await prisma.userInstructorChoice.upsert({
    where: { userId_courseSlug: { userId: session.user.id, courseSlug: parsed.data.courseSlug } },
    update: { instructorId: instructor.id },
    create: { userId: session.user.id, courseSlug: parsed.data.courseSlug, instructorId: instructor.id },
  })
  return NextResponse.json({ ok: true })
}
