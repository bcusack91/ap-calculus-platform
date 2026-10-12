import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { recordQuestions } from '@/lib/study-tracking'
import { actFullLengthQuestionRows } from '@/lib/question-activity-rows'
import { getActForm } from '@/data/act-practice/full-length'
import { buildActFlItems, sanitizeActFlAnswers, scoreActFlItems } from '@/lib/question-sources/act'
import { actFlSectionSeconds, actFlSections, actFlStudyTopics } from '@/lib/act-fl-scoring'
import { ACT_FL_CATEGORY } from '@/lib/act-full-length-server'
import type { ActFLSection } from '@/data/act-practice/full-length/types'

export const dynamic = 'force-dynamic'

/**
 * POST /api/act-full-length/submit — grade and store one full-length ACT
 * sitting.
 *
 * Body: { form, includeScience, answers: {questionId: optionIndex},
 *         flags: [questionId], questionSeconds: {questionId: seconds},
 *         sectionSeconds: {english|math|reading|science: seconds},
 *         clientAttemptId? }
 *
 * The server rebuilds the form from the registry and grades every question by
 * id; nothing the client says about scores is read. The sitting is stored as
 * a DiagnosticTest with category 'act-full-length' (no ACT diagnostic query
 * matches it: they all start with 'act-diagnostic'), with the per-question
 * answers for the review page, and one FULL_LENGTH answer-log row per
 * question (attemptKind 'act-fl') for the mistake log and teacher report.
 *
 * clientAttemptId makes a retried submit (network blip) return the sitting it
 * already stored instead of storing it twice.
 */

type Rec = Record<string, unknown>
const asRecord = (v: unknown): Rec | null => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Rec) : null)

/** Section seconds the runner measured, clamped to the section clock (plus slack for a slow auto-submit). */
function cleanSectionSeconds(raw: unknown, sections: ActFLSection[]): Partial<Record<ActFLSection, number>> {
  const r = asRecord(raw) ?? {}
  const out: Partial<Record<ActFLSection, number>> = {}
  for (const s of sections) {
    const v = r[s]
    if (typeof v === 'number' && Number.isFinite(v) && v >= 0) out[s] = Math.min(Math.round(v), actFlSectionSeconds(s) + 60)
  }
  return out
}

export async function POST(req: Request) {
  try {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = asRecord(await req.json().catch(() => null))
    if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })

    const form = await getActForm(body.form)
    if (!form) return NextResponse.json({ error: 'That form is not available.' }, { status: 400 })
    const includeScience = body.includeScience === true
    const clientAttemptId = typeof body.clientAttemptId === 'string' && /^[\w-]{8,100}$/.test(body.clientAttemptId) ? body.clientAttemptId : null

    if (clientAttemptId) {
      const existing = await prisma.diagnosticTest.findFirst({
        where: { userId, category: ACT_FL_CATEGORY, results: { path: ['clientAttemptId'], equals: clientAttemptId } },
        select: { id: true },
      })
      if (existing) return NextResponse.json({ success: true, id: existing.id, duplicate: true })
    }

    const stored = sanitizeActFlAnswers(form, includeScience, { answers: body.answers, flags: body.flags, questionSeconds: body.questionSeconds })
    if (Object.keys(stored.answers).length === 0) {
      return NextResponse.json({ error: 'Answer at least one question before submitting.' }, { status: 400 })
    }
    const sections = actFlSections(includeScience)
    const items = buildActFlItems(form, includeScience, stored)
    const score = scoreActFlItems(items, includeScience, cleanSectionSeconds(body.sectionSeconds, sections))

    const study = actFlStudyTopics(score.skills)
    const titles = study.length
      ? new Map((await prisma.topic.findMany({ where: { slug: { in: study.map((t) => t.slug) } }, select: { slug: true, title: true } })).map((t) => [t.slug, t.title]))
      : new Map<string, string>()
    const humanize = (slug: string) => slug.replace(/^act-|-act$/g, '').replace(/-/g, ' ').replace(/\b\w/, (c) => c.toUpperCase())
    const recommendedTopics = study.map((t) => ({ slug: t.slug, name: titles.get(t.slug) ?? humanize(t.slug), priority: t.priority }))
    const weakAreas = score.sections.filter((s) => s.total > 0 && s.correct / s.total < 0.5).map((s) => s.label)

    const results = {
      version: 1,
      form: form.form,
      includeScience,
      composite: score.composite,
      compositeRange: score.compositeRange,
      stem: score.stem,
      sections: score.sections,
      skills: score.skills,
      correct: score.correct,
      total: score.total,
      recommendedTopics,
      answers: stored.answers,
      flags: stored.flags,
      questionSeconds: stored.questionSeconds,
      ...(clientAttemptId ? { clientAttemptId } : {}),
    } as unknown as Prisma.InputJsonValue

    const record = await prisma.diagnosticTest.create({
      data: {
        userId,
        category: ACT_FL_CATEGORY,
        results,
        weakAreas: weakAreas.length ? weakAreas : Prisma.JsonNull,
        strengths: null,
      },
    })

    await recordQuestions(userId, actFullLengthQuestionRows(items, { attemptId: record.id }))

    return NextResponse.json({
      success: true,
      id: record.id,
      composite: score.composite,
      compositeRange: score.compositeRange,
      stem: score.stem,
      sections: score.sections,
    })
  } catch (error) {
    console.error('ACT full-length submit error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
