import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

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

    // Guard JSON.parse so malformed client input returns a clean 400 instead of an unhandled 500 that loses the student's results
    let parsedResults: Prisma.InputJsonValue
    let parsedWeakAreas: Prisma.InputJsonValue | typeof Prisma.JsonNull
    try {
      parsedResults = typeof results === 'string' ? JSON.parse(results) : results
      parsedWeakAreas = weakAreas ? (typeof weakAreas === 'string' ? JSON.parse(weakAreas) : weakAreas) : Prisma.JsonNull
    } catch {
      return NextResponse.json({ error: 'Invalid results format' }, { status: 400 })
    }

    const diagnostic = await prisma.diagnosticTest.create({
      data: {
        userId: session.user.id,
        category,
        results: parsedResults,
        weakAreas: parsedWeakAreas,
        strengths: strengths ? (typeof strengths === 'string' ? strengths : JSON.stringify(strengths)) : null,
      },
    })

    return NextResponse.json({ success: true, id: diagnostic.id })
  } catch (error) {
    console.error('AP CS Principles Diagnostic submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
