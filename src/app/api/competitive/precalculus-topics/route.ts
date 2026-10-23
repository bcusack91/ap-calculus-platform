import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isCompetitiveFullUnlock } from '@/lib/admin-unlock'
import { layoutCompetitiveTopics } from '@/lib/competitive-calc-topics'

/**
 * GET /api/competitive/precalculus-topics
 * The AP Precalculus competitive page's units: the three assessed CED units
 * (+ exam prep once it has lessons) from the fixed layout in course-includes,
 * with the student's completion state. The layout places every live row by
 * slug, so legacy duplicate rows never show (they 308) and the units are
 * numbered by the CED, not by however many Categories the DB still holds.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const isAdmin = isCompetitiveFullUnlock(session.user.email)

    const user = await prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const data = await layoutCompetitiveTopics({ slug: 'ap-precalculus', userId: user.id, isAdmin })
    if (!data) return NextResponse.json({ error: 'AP Precalculus course not found' }, { status: 404 })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching AP Precalculus topics:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
