import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isCompetitiveFullUnlock } from '@/lib/admin-unlock'
import { layoutCompetitiveTopics } from '@/lib/competitive-calc-topics'

/**
 * GET /api/competitive/asvab-topics
 * The ASVAB competitive page's units: the 10 subtests + AFQT/test day from the
 * fixed layout in course-includes (ASVAB_CATEGORIES), with the student's
 * completion state.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const isAdmin = isCompetitiveFullUnlock(session.user.email)

    const user = await prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const data = await layoutCompetitiveTopics({ slug: 'asvab', userId: user.id, isAdmin })
    if (!data) return NextResponse.json({ error: 'ASVAB course not found' }, { status: 404 })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching ASVAB topics:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
