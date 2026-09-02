import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

// Viewer-specific rank card for /leaderboard. The main table stays ISR; this
// route is always dynamic (it depends on the session) and is fetched
// client-side by the YourRank component.
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      // Signed out → the client renders nothing. 200 keeps the client trivial.
      return NextResponse.json({ ranked: false })
    }

    const profile = await prisma.competitiveProfile.findUnique({
      where: { userId: session.user.id },
      select: { overallMMR: true, rank: true, totalMatches: true },
    })

    // Mirror the leaderboard page's query: only profiles with >= 1 match are
    // ranked, ordered by overallMMR desc.
    if (!profile || profile.totalMatches < 1) {
      return NextResponse.json({ ranked: false })
    }

    // Position = players strictly above this MMR + 1 (ties share a position,
    // which is the friendliest reading for the viewer).
    const higher = await prisma.competitiveProfile.count({
      where: { totalMatches: { gte: 1 }, overallMMR: { gt: profile.overallMMR } },
    })

    return NextResponse.json({
      ranked: true,
      position: higher + 1,
      mmr: profile.overallMMR,
      rank: profile.rank,
    })
  } catch (error) {
    console.error('[GET /api/leaderboard/me]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
