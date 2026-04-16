import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const attempts = await prisma.diagnosticTest.findMany({
      where: {
        userId: session.user.id,
        category: { startsWith: 'ap-enviro-diagnostic' },
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
      select: {
        id: true,
        category: true,
        results: true,
        weakAreas: true,
        strengths: true,
        createdAt: true,
      },
    })

    return NextResponse.json({ attempts })
  } catch (error) {
    console.error('AP Environmental Science Diagnostic history error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
