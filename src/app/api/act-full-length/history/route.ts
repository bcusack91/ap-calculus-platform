import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ACT_FL_CATEGORY, summarizeActFl } from '@/lib/act-full-length-server'

export const dynamic = 'force-dynamic'

/**
 * GET /api/act-full-length/history → { attempts } — the student's own ACT
 * full-lengths, newest first, with composite, section scores and whether the
 * per-question review is available.
 */
export async function GET() {
  const session = await auth()
  const userId = session?.user?.id
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const rows = await prisma.diagnosticTest.findMany({
      where: { userId, category: ACT_FL_CATEGORY },
      orderBy: { createdAt: 'desc' },
      take: 20,
      select: { id: true, createdAt: true, results: true },
    })
    const attempts = rows
      .map(summarizeActFl)
      .filter((a): a is NonNullable<typeof a> => !!a)
      .map(({ id, createdAt, form, includeScience, composite, compositeRange, stem, sections, reviewable }) => ({
        id, createdAt, form, includeScience, composite, compositeRange, stem,
        sections: sections.map((s) => ({ section: s.section, label: s.label, scaled: s.scaled })),
        reviewable,
      }))
    return NextResponse.json({ attempts }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (err) {
    console.error('[GET /api/act-full-length/history]', err)
    return NextResponse.json({ error: 'Could not load your full-lengths' }, { status: 500 })
  }
}
