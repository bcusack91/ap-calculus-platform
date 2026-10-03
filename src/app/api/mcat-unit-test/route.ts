import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { buildMcatPlanStatus } from '@/lib/mcat-plan'
import { publicQuestions } from '@/lib/mcat-unit-test-server'

/**
 * The MCAT cycle unit test's state for the signed-in student: the plan topics
 * it covers, pass status, past sittings, and an unfinished sitting to resume
 * (questions only — keys never leave the server before submit).
 */
export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    const userId = session.user.id

    const plan = await buildMcatPlanStatus(userId)
    if (!plan.hasDiagnostic || !plan.diagnosticId || !plan.unitTest) {
      return NextResponse.json({ hasPlan: false })
    }

    const rows = await prisma.mcatUnitTest.findMany({
      where: { userId, diagnosticId: plan.diagnosticId },
      orderBy: { startedAt: 'asc' },
      select: { id: true, questions: true, total: true, percentage: true, passed: true, completedAt: true },
    })
    const open = plan.unitTest.inProgressId ? rows.find((r) => r.id === plan.unitTest!.inProgressId) : undefined

    return NextResponse.json({
      hasPlan: true,
      diagnosticId: plan.diagnosticId,
      canRetakeDiagnostic: plan.canRetakeDiagnostic,
      topics: plan.recommendedTopics.map((t) => ({ slug: t.slug, name: t.name, isSatisfied: t.isSatisfied })),
      unitTest: plan.unitTest,
      inProgress: open ? { id: open.id, total: open.total, questions: publicQuestions(open.questions) } : null,
      history: rows
        .filter((r) => r.completedAt)
        .map((r) => ({ percentage: r.percentage ?? 0, passed: r.passed, completedAt: r.completedAt })),
    }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (error) {
    console.error('[mcat unit test GET] failed:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
