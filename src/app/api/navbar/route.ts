import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

/**
 * Returns navbar bootstrap data in a single request:
 * - courses (for the courses dropdown)
 * - avatarData (if the user is logged in)
 */
export async function GET() {
  try {
    const [session, courses] = await Promise.all([
      auth(),
      prisma.course.findMany({
        select: { slug: true, name: true, icon: true },
        orderBy: { order: 'asc' },
      }),
    ])

    let avatarData = null
    if (session?.user?.id) {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { avatarData: true },
      })
      avatarData = user?.avatarData ?? null
    }

    return NextResponse.json({ courses, avatarData })
  } catch (error) {
    console.error('[GET /api/navbar]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
