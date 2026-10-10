import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

const MAX_ROWS = 20

/**
 * GET /api/mcat-full-length/history — the signed-in student's own StudyMondo
 * full-lengths (DiagnosticTest category 'mcat-full-length'), newest first:
 * id, date, form and total score, plus whether a per-question review exists
 * (attempts saved before the answer log have no stored answers).
 */
export async function GET() {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const rows = await prisma.diagnosticTest.findMany({
      where: { userId, category: 'mcat-full-length' },
      orderBy: { createdAt: 'desc' },
      take: MAX_ROWS,
      select: { id: true, createdAt: true, results: true },
    })
    const attempts = rows.map((r) => {
      const res = (r.results && typeof r.results === 'object' && !Array.isArray(r.results) ? r.results : {}) as Record<string, unknown>
      const answers = res.answers
      return {
        id: r.id,
        createdAt: r.createdAt.toISOString(),
        form: typeof res.form === 'number' ? res.form : null,
        total: typeof res.total === 'number' ? res.total : null,
        reviewable: !!answers && typeof answers === 'object' && Object.keys(answers as object).length > 0,
      }
    })
    return NextResponse.json({ attempts }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[GET /api/mcat-full-length/history]', err)
    return NextResponse.json({ error: 'Could not load your full-lengths' }, { status: 500 })
  }
}
