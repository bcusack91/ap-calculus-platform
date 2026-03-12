import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const dynamic = 'force-dynamic'

// Course list rarely changes — cache for 5 minutes on the server
const getCachedCourses = unstable_cache(
  () =>
    prisma.course.findMany({
      select: { slug: true, name: true, icon: true },
      orderBy: { order: 'asc' },
    }),
  ['navbar-courses'],
  { revalidate: 300, tags: ['courses'] }
)

/**
 * Returns navbar bootstrap data in a single request:
 * - courses (for the courses dropdown)
 * - avatarData (if the user is logged in)
 */
export async function GET() {
  try {
    const [session, courses] = await Promise.all([
      auth(),
      getCachedCourses(),
    ])

    let avatarData = null
    if (session?.user?.id) {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { avatarData: true },
      })
      avatarData = user?.avatarData ?? null
    }

    const res = NextResponse.json({ courses, avatarData })

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
