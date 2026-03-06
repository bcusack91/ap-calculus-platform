import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const {
      sectionId,
      sectionName,
      score,
      maxScore,
      percentage,
      correct,
      total,
      timeSpent,
      answers,
    } = body

    if (!sectionId || typeof percentage !== 'number') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const attempt = await prisma.mcatTestAttempt.create({
      data: {
        userId: session.user.id,
        sectionId,
        sectionName: sectionName ?? sectionId,
        score: score ?? 0,
        maxScore: maxScore ?? 132,
        percentage,
        correct: correct ?? 0,
        total: total ?? 0,
        timeSpent: timeSpent ?? 0,
        answers: answers ?? [],
        completed: true,
        completedAt: new Date(),
      },
    })

    return NextResponse.json({ success: true, attemptId: attempt.id })
  } catch (error) {
    console.error('MCAT practice submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
