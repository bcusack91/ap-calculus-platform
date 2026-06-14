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

    // Scores are computed client-side; bound them to valid SAT ranges so a tampered
    // or buggy client can't persist impossible scaled scores (200–800 per section,
    // 400–1600 total) or correct-counts that exceed the question total.
    const clampScale = (n: number) => Math.max(200, Math.min(800, Math.round(n)))
    const safeRw = clampScale(rwScore)
    const safeMath = clampScale(mathScore)
    const safeTotal = Math.max(400, Math.min(1600, Math.round(totalScore)))
    const clampCount = (c: unknown, t: unknown) => {
      const total = Math.max(0, Number(t) || 0)
      return { correct: Math.max(0, Math.min(total, Number(c) || 0)), total }
    }
    const rw = clampCount(rwCorrect, rwTotal)
    const math = clampCount(mathCorrect, mathTotal)

    const attempt = await prisma.satTestAttempt.create({
      data: {
        userId: session.user.id,
        testNumber,
        rwScore: safeRw,
        mathScore: safeMath,
        totalScore: safeTotal,
        rwCorrect: rw.correct,
        rwTotal: rw.total,
        mathCorrect: math.correct,
        mathTotal: math.total,
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
