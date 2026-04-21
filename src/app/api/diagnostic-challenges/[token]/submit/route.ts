import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

const submitChallengeSchema = z.object({
  category: z.string().min(1),
  score: z.number().int().min(0).max(100),
  correct: z.number().int().min(0),
  total: z.number().int().min(1),
  apScore: z.number().int().min(1).max(5),
})

function fallbackName(name: string | null | undefined, email: string | null | undefined): string {
  if (name && name.trim().length > 0) return name.trim()
  if (!email) return 'Student'
  const local = email.split('@')[0]?.trim()
  return local && local.length > 0 ? local : 'Student'
}

export async function POST(req: Request, { params }: { params: Promise<{ token: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { token } = await params
    const body = await req.json()
    const parsed = submitChallengeSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 })
    }

    const challenge = await prisma.diagnosticChallenge.findUnique({ where: { token } })
    if (!challenge) {
      return NextResponse.json({ error: 'Challenge not found' }, { status: 404 })
    }

    if (challenge.expiresAt < new Date()) {
      return NextResponse.json({ error: 'Challenge expired' }, { status: 410 })
    }

    if (!parsed.data.category.startsWith(`${challenge.diagnosticCategory}-`)) {
      return NextResponse.json({ error: 'Diagnostic does not match this challenge' }, { status: 400 })
    }

    const entry = await prisma.diagnosticChallengeEntry.upsert({
      where: {
        challengeId_userId: {
          challengeId: challenge.id,
          userId: session.user.id,
        },
      },
      create: {
        challengeId: challenge.id,
        userId: session.user.id,
        displayName: fallbackName(session.user.name, session.user.email),
        score: parsed.data.score,
        correct: parsed.data.correct,
        total: parsed.data.total,
        apScore: parsed.data.apScore,
      },
      update: {
        displayName: fallbackName(session.user.name, session.user.email),
        score: parsed.data.score,
        correct: parsed.data.correct,
        total: parsed.data.total,
        apScore: parsed.data.apScore,
        completedAt: new Date(),
      },
    })

    return NextResponse.json({ success: true, entryId: entry.id })
  } catch (error) {
    console.error('Submit diagnostic challenge error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
