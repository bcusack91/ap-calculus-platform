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
      testNumber,
      rwScore,
      mathScore,
      totalScore,
      rwCorrect,
      rwTotal,
      mathCorrect,
      mathTotal,
      timeSpent,
      weakAreas,
      strengths,
      answers,
    } = body

    if (
      typeof testNumber !== 'number' ||
      typeof rwScore !== 'number' ||
      typeof mathScore !== 'number' ||
      typeof totalScore !== 'number'
    ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const attempt = await prisma.satTestAttempt.create({
      data: {
        userId: session.user.id,
        testNumber,
        rwScore,
        mathScore,
        totalScore,
        rwCorrect: rwCorrect ?? 0,
        rwTotal: rwTotal ?? 0,
        mathCorrect: mathCorrect ?? 0,
        mathTotal: mathTotal ?? 0,
        timeSpent: timeSpent ?? 0,
        weakAreas: weakAreas ?? null,
        strengths: strengths ?? null,
        answers: answers ?? [],
        completed: true,
        completedAt: new Date(),
      },
    })

    return NextResponse.json({ success: true, attemptId: attempt.id })
  } catch (error) {
    console.error('SAT practice test submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
