import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { category, results, weakAreas, strengths } = await req.json()

    if (!category || !results) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const diagnostic = await prisma.diagnosticTest.create({
      data: {
        userId: session.user.id,
        category,
        results: typeof results === 'string' ? results : JSON.stringify(results),
        weakAreas: weakAreas ?? null,
        strengths: strengths ?? null,
      },
    })

    return NextResponse.json({ success: true, id: diagnostic.id })
  } catch (error) {
    console.error('Diagnostic submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
