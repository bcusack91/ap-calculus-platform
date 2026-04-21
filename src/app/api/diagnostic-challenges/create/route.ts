import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { parseCategoryAndForm } from '@/lib/diagnostic-challenge-utils'

const VALID_VISIBILITIES = ['public', 'participants_only'] as const

const createChallengeSchema = z.object({
  category: z.string().min(1),
  score: z.number().int().min(0).max(100),
  correct: z.number().int().min(0),
  total: z.number().int().min(1),
  apScore: z.number().int().min(1).max(5),
  visibility: z.enum(VALID_VISIBILITIES).optional().default('public'),
})

function fallbackName(name: string | null | undefined, email: string | null | undefined): string {
  if (name && name.trim().length > 0) return name.trim()
  if (!email) return 'Student'
  const local = email.split('@')[0]?.trim()
  return local && local.length > 0 ? local : 'Student'
}

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const parsed = createChallengeSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 })
    }

    const categoryInfo = parseCategoryAndForm(parsed.data.category)
    if (!categoryInfo) {
      return NextResponse.json({ error: 'Invalid diagnostic category' }, { status: 400 })
    }

    const created = await prisma.diagnosticChallenge.create({
      data: {
        creatorId: session.user.id,
        diagnosticCategory: categoryInfo.baseCategory,
        diagnosticForm: categoryInfo.form,
        creatorScore: parsed.data.score,
        creatorCorrect: parsed.data.correct,
        creatorTotal: parsed.data.total,
        creatorAPScore: parsed.data.apScore,
        creatorName: fallbackName(session.user.name, session.user.email),
        visibility: parsed.data.visibility,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      },
      select: {
        token: true,
      },
    })

    return NextResponse.json({
      success: true,
      token: created.token,
      challengePath: `/challenge/${created.token}`,
    })
  } catch (error) {
    console.error('Create diagnostic challenge error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
