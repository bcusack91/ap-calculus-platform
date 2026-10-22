import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { isCompetitiveFullUnlock } from '@/lib/admin-unlock'
import { calcCompetitiveTopics } from '@/lib/competitive-calc-topics'

/**
 * GET /api/competitive/calculus-ab-topics
 * The AB competitive page's units: the AB layout from course-includes (Units
 * 1-8 and exam prep) with the student's completion state. Unit numbers are the
 * CED numbers (null for exam prep), so the page never renders "Unit 1: Unit 1: …".
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const isAdmin = isCompetitiveFullUnlock(session.user.email)

    const user = await prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const data = await calcCompetitiveTopics({ slug: 'ap-calculus-ab', userId: user.id, isAdmin })
    if (!data) return NextResponse.json({ error: 'AP Calculus AB course not found' }, { status: 404 })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching AP Calculus AB topics:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
