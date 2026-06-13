import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

function parseMaybeJsonArray(value: unknown): string | number | boolean | object | undefined {
  if (value == null) return undefined

  if (Array.isArray(value) || typeof value === 'object') {
    return value
  }

  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) return undefined

    if ((trimmed.startsWith('[') && trimmed.endsWith(']')) || (trimmed.startsWith('{') && trimmed.endsWith('}'))) {
      try {
        return JSON.parse(trimmed)
      } catch {
        return trimmed.split(',').map((item) => item.trim()).filter(Boolean)
      }
    }

    return trimmed.split(',').map((item) => item.trim()).filter(Boolean)
  }

  return value
}

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
    try {
      parsedResults = typeof results === 'string' ? JSON.parse(results) : results
    } catch {
      return NextResponse.json({ error: 'Invalid results format' }, { status: 400 })
    }

    const diagnostic = await prisma.diagnosticTest.create({
      data: {
        userId: session.user.id,
        category,
        results: parsedResults,
        weakAreas: parseMaybeJsonArray(weakAreas),
        strengths: (() => {
          const parsedStrengths = parseMaybeJsonArray(strengths)
          if (parsedStrengths == null) return null
          return typeof parsedStrengths === 'string' ? parsedStrengths : JSON.stringify(parsedStrengths)
        })(),
      },
    })

    return NextResponse.json({ success: true, id: diagnostic.id })
  } catch (error) {
    console.error('MCAT Diagnostic submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
