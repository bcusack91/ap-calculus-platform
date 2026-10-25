import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getPracticeExamConfig } from '@/lib/content-store'
import { touchDailyStreak } from '@/lib/streak'
import { config as staticConfig } from '@/data/asvab-practice/config'
import { estimateAfqtFromPercentCorrect, subtestFromLabel } from '@/lib/asvab-scoring'

/** Saved under this DiagnosticTest category; the ASVAB score predictor pools every category containing 'asvab-practice'. */
const ASVAB_PRACTICE_CATEGORY = 'asvab-practice-1'

/**
 * POST /api/asvab-practice/submit — save a finished ASVAB practice test (form 1).
 *
 * Body: { clientAttemptId?, mcq: [{ s, i, chosen }] } (s = section index, i =
 * item index, chosen = the option text picked, as the client shows options
 * shuffled). The form is rebuilt server-side from the content store (static
 * fallback) and regraded, so the client never supplies a key. Stored as a
 * DiagnosticTest (category 'asvab-practice-1') with results.review
 * { questions: [{ topicSlug, section, correctAnswer }], answers: [authored
 * index | null] } (the shape the score predictor's reviewTallies reads),
 * per-subtest domains and the AFQT estimate. A repeat POST with the same
 * clientAttemptId returns the stored attempt.
 */
export async function POST(req: Request) {
  try {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) return NextResponse.json({ error: 'Sign in to save your results.' }, { status: 401 })

    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null
    if (!body || !Array.isArray(body.mcq)) return NextResponse.json({ error: 'Missing answers' }, { status: 400 })

    const clientAttemptId = typeof body.clientAttemptId === 'string' && /^[\w-]{8,100}$/.test(body.clientAttemptId) ? body.clientAttemptId : null
    if (clientAttemptId) {
      const existing = await prisma.diagnosticTest.findFirst({
        where: { userId, category: ASVAB_PRACTICE_CATEGORY, results: { path: ['clientAttemptId'], equals: clientAttemptId } },
        select: { id: true },
      })
      if (existing) return NextResponse.json({ success: true, id: existing.id, duplicate: true })
    }

    const config = await getPracticeExamConfig('asvab', staticConfig)
    const chosen = new Map<string, string>()
    for (const raw of body.mcq.slice(0, 1000)) {
      const a = raw as Record<string, unknown>
      if (Number.isInteger(a?.s) && Number.isInteger(a?.i) && typeof a.chosen === 'string') chosen.set(`${a.s}:${a.i}`, a.chosen)
    }

    const questions: { topicSlug: string; section: string; correctAnswer: number }[] = []
    const answers: (number | null)[] = []
    const domains = new Map<string, { domainId: string; domainName: string; correct: number; total: number }>()
    config.sections.forEach((sec, s) => {
      sec.items.forEach((item, i) => {
        if (item.type !== 'mcq') return
        const pick = chosen.get(`${s}:${i}`)
        const idx = pick === undefined ? -1 : item.options.indexOf(pick)
        const answer = idx >= 0 ? idx : null
        questions.push({ topicSlug: item.topic, section: sec.shortName, correctAnswer: item.correctAnswer })
        answers.push(answer)
        const id = subtestFromLabel(sec.shortName) ?? sec.shortName
        const d = domains.get(id) ?? { domainId: id, domainName: sec.name, correct: 0, total: 0 }
        d.total++
        if (answer === item.correctAnswer) d.correct++
        domains.set(id, d)
      })
    })
    if (answers.every((a) => a === null)) return NextResponse.json({ error: 'Answer at least one question before saving.' }, { status: 400 })

    const frac = (id: 'WK' | 'PC' | 'AR' | 'MK') => {
      const d = domains.get(id)
      return d && d.total ? d.correct / d.total : undefined
    }
    const count = (id: 'WK' | 'PC' | 'AR' | 'MK') => domains.get(id)?.total || undefined
    const afqt = estimateAfqtFromPercentCorrect(
      { WK: frac('WK'), PC: frac('PC'), AR: frac('AR'), MK: frac('MK') },
      { WK: count('WK'), PC: count('PC'), AR: count('AR'), MK: count('MK') },
    )
    const totalCorrect = [...domains.values()].reduce((n, d) => n + d.correct, 0)

    const record = await prisma.$transaction(async (tx) => {
      const created = await tx.diagnosticTest.create({
        data: {
          userId,
          category: ASVAB_PRACTICE_CATEGORY,
          results: {
            version: 1,
            courseSlug: 'asvab',
            form: 1,
            totalCorrect,
            totalQuestions: questions.length,
            domains: [...domains.values()],
            afqt: afqt ? { percentile: afqt.percentile, low: afqt.range.low, high: afqt.range.high, category: afqt.category } : null,
            review: { questions, answers },
            ...(clientAttemptId ? { clientAttemptId } : {}),
          } as unknown as Prisma.InputJsonValue,
        },
        select: { id: true },
      })
      await touchDailyStreak(tx, userId)
      return created
    })
    return NextResponse.json({ success: true, id: record.id })
  } catch (error) {
    console.error('ASVAB practice submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
