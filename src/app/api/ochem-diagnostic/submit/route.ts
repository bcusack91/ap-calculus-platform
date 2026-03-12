import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { category, results, weakAreas, strengths } = body

  if (!category || !results) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const test = await prisma.diagnosticTest.create({
    data: {
      userId: session.user.id,
      category,
      results,
      weakAreas: weakAreas ?? [],
      strengths: strengths ?? '',
    },
  })

  return NextResponse.json({ test })
}
