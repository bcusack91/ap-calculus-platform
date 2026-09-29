import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

// Course list rarely changes — cache for 30 minutes on the server
const getCachedCourses = unstable_cache(
  () =>
    prisma.course.findMany({
      select: { slug: true, name: true, icon: true },
      orderBy: { order: 'asc' },
    }),
  ['navbar-courses'],
  { revalidate: 1800, tags: ['courses'] }
)

/**
 * Returns navbar bootstrap data in a single request:
 * - courses (for the courses dropdown)
 * - avatarData (if the user is logged in)
 * - inClass (signed-in students only): true when they are an active member of
 *   an active classroom, so the nav can show "My Class" → /assignments.
 *   Deliberately NOT server-cached — joining a class must show up on the next
 *   fetch. One indexed findFirst on ClassroomMember(userId).
 */
export async function GET() {
  try {
    const [session, courses] = await Promise.all([
      auth(),
      getCachedCourses(),
    ])

    let avatarData = null
    let inClass: boolean | null = null
    if (session?.user?.id) {
      const getCachedAvatar = unstable_cache(
        async (userId: string) => {
          const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { avatarData: true },
          })
          return user?.avatarData ?? null
        },
        [`navbar-avatar-${session.user.id}`],
        // Tagged so the avatar-save route can bust this 30-minute server cache
        // immediately (otherwise a fresh tab / reload showed the old avatar).
        { revalidate: 1800, tags: [`avatar-${session.user.id}`] }
      )
      const role = session.user.role
      const isTeacherRole = role === 'TEACHER' || role === 'ADMIN'
      const [avatar, membership] = await Promise.all([
        getCachedAvatar(session.user.id),
        isTeacherRole
          ? Promise.resolve(null)
          : prisma.classroomMember.findFirst({
              where: { userId: session.user.id, isActive: true, classroom: { isActive: true } },
              select: { id: true },
            }),
      ])
      avatarData = avatar
      inClass = !isTeacherRole && membership !== null
    }

    const res = NextResponse.json({ courses, avatarData, inClass })

    // Allow CDN / browser to cache anonymous responses; private for auth users
    if (session?.user) {
      res.headers.set('Cache-Control', 'private, max-age=60, stale-while-revalidate=300')
    } else {
      res.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=600')
    }

    return res
  } catch (error) {
    console.error('[GET /api/navbar]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
