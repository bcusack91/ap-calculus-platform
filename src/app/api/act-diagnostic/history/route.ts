import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ attempts: [] }, { status: 401 })
  }

  const attempts = await prisma.diagnosticTest.findMany({
    where: {
      userId: session.user.id,
      category: { startsWith: 'act-diagnostic' },
    },
    orderBy: { createdAt: 'desc' },
    take: 20,
  })

  return NextResponse.json({ attempts })
}
