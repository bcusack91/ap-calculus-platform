import { NextResponse, NextRequest } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateMatchQuestions } from '@/lib/competitive-utils'

/**
 * POST — Create a new async challenge (challenger starts playing immediately)
 * GET  — List the user's async challenges (sent & received)
 */

export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { topicSlug, questionCount = 10, timeLimit = 300, recipientId } = body

    if (!topicSlug || typeof topicSlug !== 'string') {
      return NextResponse.json({ error: 'topicSlug is required' }, { status: 400 })
    }

    // Optional pre-targeted recipient (used by Rematch). Must be a different user.
    let targetRecipientId: string | null = null
    if (recipientId && typeof recipientId === 'string' && recipientId !== session.user.id) {
      const exists = await prisma.user.findUnique({ where: { id: recipientId }, select: { id: true } })
      if (exists) targetRecipientId = exists.id
    }

    const safeQuestionCount = Math.min(Math.max(Number(questionCount) || 10, 5), 20)
    const safeTimeLimit = Math.min(Math.max(Number(timeLimit) || 300, 60), 900)

    // Generate questions (same function used for live matches)
    const questions = await generateMatchQuestions(safeQuestionCount, topicSlug, [])

    // Challenge expires in 7 days
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 7)

    const challenge = await prisma.asyncChallenge.create({
      data: {
        challengerId: session.user.id,
        recipientId: targetRecipientId,
        topicSlug,
        questionCount: safeQuestionCount,
        timeLimit: safeTimeLimit,
        questions: JSON.parse(JSON.stringify(questions)),
        expiresAt,
        status: 'CHALLENGER_PLAYING',
      },
    })

    return NextResponse.json({ challengeId: challenge.id, questions })
  } catch (error) {
    console.error('Error creating async challenge:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const [sent, received] = await Promise.all([
      prisma.asyncChallenge.findMany({
        where: { challengerId: session.user.id },
        include: {
          recipient: { select: { id: true, name: true, image: true, avatarData: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 20,
      }),
      prisma.asyncChallenge.findMany({
        where: { recipientId: session.user.id },
        include: {
          challenger: { select: { id: true, name: true, image: true, avatarData: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 20,
      }),
    ])

    // Don't leak questions/answers in the list view
    const sanitize = (c: Record<string, unknown>) => ({
      ...c,
      questions: undefined,
      challengerAnswers: undefined,
      recipientAnswers: undefined,
    })

    return NextResponse.json({
      sent: sent.map(c => sanitize(c as unknown as Record<string, unknown>)),
      received: received.map(c => sanitize(c as unknown as Record<string, unknown>)),
    })
  } catch (error) {
    console.error('Error fetching async challenges:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
