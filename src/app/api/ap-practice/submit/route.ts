import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getPracticeExamConfig } from '@/lib/content-store'
import { AP_PRACTICE_EXAMS, apPracticeCategory, apPracticeForm, isApPracticeKey } from '@/lib/ap-practice-exams'
import { gradeApExam } from '@/lib/ap-practice-grading'
import { recordQuestions } from '@/lib/study-tracking'
import { optionKey, questionKey } from '@/lib/question-key'

/**
 * POST /api/ap-practice/submit — save a finished AP full-length practice exam.
 *
 * Body: { examKey, form?, clientAttemptId?, mcq: [{ s, i, chosen }], frq: [{ s, i, earned, responses?, ticked?, submitted?, chosenPromptIndex? }] }
 * (s = section index, i = item index, chosen = the option text picked,
 * responses = what the student wrote, ticked = the rubric boxes checked).
 * The exam is rebuilt server-side and multiple choice regraded; the attempt is
 * stored as a DiagnosticTest (category 'ap-practice-exam:<key>' for every
 * form, with the form number in results.form; form defaults to 1) with a review
 * copy (multiple choice as shown, free response with the student's responses
 * and rubric ticks in review.frq), and each multiple-choice answer goes to the answer log (attemptKind
 * 'ap-practice') so teachers can review it and see it in the study report.
 */
export async function POST(req: Request) {
  try {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) return NextResponse.json({ error: 'Sign in to save your results.' }, { status: 401 })

    const body = (await req.json().catch(() => null)) as Record<string, unknown> | null
    if (!body || !isApPracticeKey(body.examKey)) return NextResponse.json({ error: 'Unknown exam' }, { status: 400 })
    const examKey = body.examKey
    const exam = AP_PRACTICE_EXAMS[examKey]
    const form = apPracticeForm(examKey, body.form === undefined ? 1 : Number(body.form))
    if (!form) return NextResponse.json({ error: 'Unknown exam form' }, { status: 400 })
    const config = await getPracticeExamConfig(examKey, await form.load(), form.contentKey)
    const category = apPracticeCategory(examKey)

    const clientAttemptId = typeof body.clientAttemptId === 'string' && /^[\w-]{8,100}$/.test(body.clientAttemptId) ? body.clientAttemptId : null
    if (clientAttemptId) {
      const existing = await prisma.diagnosticTest.findFirst({
        where: { userId, category, results: { path: ['clientAttemptId'], equals: clientAttemptId } },
        select: { id: true },
      })
      if (existing) return NextResponse.json({ success: true, id: existing.id, duplicate: true })
    }

    const graded = gradeApExam(config, body.mcq, body.frq)
    const answeredMcq = graded.review.answers.filter((a) => a !== null).length
    const wroteFrq = graded.review.frq.some((f) => f.parts.some((p) => p.response.trim().length > 0))
    if (answeredMcq === 0 && graded.earned === 0 && !wroteFrq) {
      return NextResponse.json({ error: 'Answer at least one question before saving.' }, { status: 400 })
    }

    const record = await prisma.diagnosticTest.create({
      data: {
        userId,
        category,
        results: {
          version: 1,
          examKey,
          form: form.form,
          courseSlug: exam.courseSlug,
          ...graded,
          ...(clientAttemptId ? { clientAttemptId } : {}),
        } as unknown as Prisma.InputJsonValue,
      },
      select: { id: true },
    })

    await recordQuestions(
      userId,
      graded.review.questions.map((q, i) => {
        const pick = graded.review.answers[i]
        return {
          source: 'FULL_LENGTH' as const,
          courseSlug: exam.courseSlug,
          discipline: q.domain,
          questionKey: questionKey({ question: q.question, options: q.options, correctIndex: q.correctIndex }),
          answered: 1,
          correct: pick === q.correctIndex ? 1 : 0,
          itemIndex: i,
          chosenIndex: pick,
          chosenKey: pick === null ? null : optionKey(q.options[pick]),
          attemptKind: 'ap-practice' as const,
          attemptId: record.id,
        }
      }),
    )

    return NextResponse.json({ success: true, id: record.id, estimatedAPScore: graded.estimatedAPScore, percentage: graded.percentage })
  } catch (error) {
    console.error('[ap-practice submit] failed:', error)
    return NextResponse.json({ error: 'Could not save your results.' }, { status: 500 })
  }
}
