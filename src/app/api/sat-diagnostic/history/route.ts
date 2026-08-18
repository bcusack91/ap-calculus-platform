import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { hardTrackStatus, HARD_MODULE_CATEGORY, HARD_MODULE_COUNT } from '@/data/sat-practice/hard-modules'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const [attempts, hardModuleAttempts] = await Promise.all([
      prisma.diagnosticTest.findMany({
        where: {
          userId: session.user.id,
          category: 'sat-full-diagnostic',
        },
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: {
          id: true,
          category: true,
          results: true,
          weakAreas: true,
          strengths: true,
          createdAt: true,
        },
      }),
      // Hard-track attempts live under their own category so they never
      // pollute the regular diagnostic history or its recommendations.
      prisma.diagnosticTest.findMany({
        where: {
          userId: session.user.id,
          category: { startsWith: HARD_MODULE_CATEGORY },
        },
        orderBy: { createdAt: 'desc' },
        take: HARD_MODULE_COUNT * 2,
        select: { id: true, category: true, results: true, createdAt: true },
      }),
    ])

    const hardTrack = hardTrackStatus(attempts, hardModuleAttempts)

    return NextResponse.json({ attempts, hardModuleAttempts, hardTrack })
  } catch (error) {
    console.error('Diagnostic history error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
