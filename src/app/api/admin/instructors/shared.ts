import { prisma } from '@/lib/prisma'
import { linkableRoleError } from '@/lib/video-lesson-admin'

/** Fields every admin instructor response carries. */
export const instructorSelect = {
  id: true,
  slug: true,
  name: true,
  headline: true,
  bio: true,
  photoUrl: true,
  courses: true,
  isActive: true,
  createdAt: true,
  user: { select: { id: true, email: true, name: true, role: true } },
  _count: { select: { clips: true, lessons: true } },
} as const

/**
 * Resolve a teacher email to link. The account must exist, be TEACHER/ADMIN
 * (roles are never changed here), and not be linked to another instructor.
 */
export async function resolveLinkEmail(email: string, instructorId: string | null): Promise<{ userId: string } | { error: string }> {
  const user = await prisma.user.findFirst({
    where: { email: { equals: email, mode: 'insensitive' } },
    select: { id: true, role: true, instructorProfile: { select: { id: true, name: true } } },
  })
  if (!user) return { error: `No account uses ${email}. The teacher must sign up first.` }
  const roleError = linkableRoleError(user.role)
  if (roleError) return { error: roleError }
  if (user.instructorProfile && user.instructorProfile.id !== instructorId) {
    return { error: `That account is already linked to ${user.instructorProfile.name}.` }
  }
  return { userId: user.id }
}

/** Course slugs that are not real courses (empty when all are valid). */
export async function unknownCourses(slugs: readonly string[]): Promise<string[]> {
  if (!slugs.length) return []
  const found = await prisma.course.findMany({ where: { slug: { in: [...slugs] } }, select: { slug: true } })
  const ok = new Set(found.map((c) => c.slug))
  return slugs.filter((s) => !ok.has(s))
}
