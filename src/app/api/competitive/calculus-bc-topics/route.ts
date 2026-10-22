import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isCompetitiveFullUnlock } from '@/lib/admin-unlock'
import { calcCompetitiveTopics } from '@/lib/competitive-calc-topics'

/**
 * GET /api/competitive/calculus-bc-topics
 * The BC competitive page's units: the full 10-unit BC layout from
 * course-includes (AB Units 1-8 with the BC-only topics merged into 6-8, Units
 * 9-10, exam prep), with the student's completion state. AB-unit topics are the
 * shared AB Topic rows and draw from the AB bank; legacy/retired slugs never show.
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const isAdmin = isCompetitiveFullUnlock(session.user.email)

    const user = await prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const data = await calcCompetitiveTopics({ slug: 'ap-calculus-bc', userId: user.id, isAdmin })
    if (!data) return NextResponse.json({ error: 'AP Calculus BC course not found' }, { status: 404 })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching AP Calculus BC topics:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
