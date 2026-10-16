import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { apPracticeCategory, apPracticeForms, isApPracticeKey, summarizeApPracticeAttempts } from '@/lib/ap-practice-exams'

/**
 * GET /api/ap-practice/history?examKey=ap-chem — the signed-in student's saved
 * attempts on each form of an AP practice exam, for the form picker on the
 * exam page. Signed out: { signedIn: false } (the picker still shows
 * in-progress sittings from the device).
 */
export async function GET(req: Request) {
  const examKey = new URL(req.url).searchParams.get('examKey')
  if (!isApPracticeKey(examKey)) return NextResponse.json({ error: 'Unknown exam' }, { status: 400 })
  try {
    const session = await auth()
    const userId = session?.user?.id
    if (!userId) return NextResponse.json({ signedIn: false, forms: [] })
    const rows = await prisma.diagnosticTest.findMany({
      where: { userId, category: apPracticeCategory(examKey) },
      orderBy: { createdAt: 'desc' },
      take: 50,
      select: { id: true, results: true, createdAt: true },
    })
    return NextResponse.json({ signedIn: true, forms: summarizeApPracticeAttempts(apPracticeForms(examKey).length, rows) })
  } catch (error) {
    console.error('[ap-practice history] failed:', error)
    return NextResponse.json({ error: 'Could not load your attempts.' }, { status: 500 })
  }
}
