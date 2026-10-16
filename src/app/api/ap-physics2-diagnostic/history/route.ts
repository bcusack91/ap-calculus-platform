import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { canonicalizeDiagnosticResults } from '@/lib/ap-topic-canonical'

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ attempts: [] }, { status: 401 })
  }

  const attempts = await prisma.diagnosticTest.findMany({
    where: {
      userId: session.user.id,
      category: { startsWith: 'ap-physics2-diagnostic' },
    },
    orderBy: { createdAt: 'desc' },
    take: 20,
  })

  // Attempts stored before the Oct 2026 fix can carry legacy AP topic slugs
  // (no Topic row); serve them mapped to the production topic.
  return NextResponse.json({
    attempts: attempts.map((a) => ({ ...a, results: canonicalizeDiagnosticResults(a.category, a.results) })),
  })
}
