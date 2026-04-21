import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getDiagnosticLabel } from '@/lib/diagnostic-challenge-utils'

export async function GET(_req: Request, { params }: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await params
    const session = await auth()

    const challenge = await prisma.diagnosticChallenge.findUnique({
      where: { token },
      include: {
        entries: {
          orderBy: [
            { score: 'desc' },
            { correct: 'desc' },
            { completedAt: 'asc' },
          ],
        },
      },
    })

    if (!challenge) {
      return NextResponse.json({ error: 'Challenge not found' }, { status: 404 })
    }

    if (challenge.expiresAt < new Date()) {
      return NextResponse.json({ error: 'Challenge expired' }, { status: 410 })
    }

    const leaderboard = [
      {
        name: challenge.creatorName,
        score: challenge.creatorScore,
        correct: challenge.creatorCorrect,
        total: challenge.creatorTotal,
        apScore: challenge.creatorAPScore,
        isCreator: true,
      },
      ...challenge.entries.map((entry) => ({
        name: entry.displayName,
        score: entry.score,
        correct: entry.correct,
        total: entry.total,
        apScore: entry.apScore,
        isCreator: false,
      })),
    ].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      if (b.correct !== a.correct) return b.correct - a.correct
      return b.apScore - a.apScore
    })

    const userEntry = session?.user?.id
      ? challenge.entries.find((entry) => entry.userId === session.user.id)
      : null

    return NextResponse.json({
      challenge: {
        token: challenge.token,
        creatorName: challenge.creatorName,
        diagnosticCategory: challenge.diagnosticCategory,
        diagnosticLabel: getDiagnosticLabel(challenge.diagnosticCategory),
        diagnosticForm: challenge.diagnosticForm,
        expiresAt: challenge.expiresAt,
        createdAt: challenge.createdAt,
        visibility: challenge.visibility,
      },
      leaderboard,
      alreadyJoined: Boolean(userEntry),
    })
  } catch (error) {
    console.error('Get diagnostic challenge error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
