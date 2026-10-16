import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { canonicalizeDiagnosticResults } from '@/lib/ap-topic-canonical'

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    }

    const attempt = await prisma.diagnosticTest.findFirst({
      where: { id, userId: session.user.id },
      select: {
        id: true,
        category: true,
        results: true,
        weakAreas: true,
        strengths: true,
        createdAt: true,
      },
    })

    if (!attempt) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    // Older AP attempts can carry legacy topic slugs with no Topic row.
    return NextResponse.json({ attempt: { ...attempt, results: canonicalizeDiagnosticResults(attempt.category, attempt.results) } })
  } catch (error) {
    console.error('Diagnostic attempt fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
