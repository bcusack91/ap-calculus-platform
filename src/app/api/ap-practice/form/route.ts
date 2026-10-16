import { NextResponse } from 'next/server'
import { getPracticeExamConfig } from '@/lib/content-store'
import { apPracticeForm, isApPracticeKey } from '@/lib/ap-practice-exams'

/**
 * GET /api/ap-practice/form?examKey=ap-chem&form=2 — one form of an AP
 * practice exam, through the content store (the same read the submit route
 * grades against). The exam page renders form 1 itself; the form picker
 * loads the others from here when a student picks one.
 */
export async function GET(req: Request) {
  const params = new URL(req.url).searchParams
  const examKey = params.get('examKey')
  const form = isApPracticeKey(examKey) ? apPracticeForm(examKey, Number(params.get('form'))) : undefined
  if (!examKey || !form) return NextResponse.json({ error: 'Unknown exam form' }, { status: 400 })
  try {
    const config = await getPracticeExamConfig(examKey, await form.load(), form.contentKey)
    return NextResponse.json({ form: form.form, config }, { headers: { 'Cache-Control': 'public, max-age=60, s-maxage=300' } })
  } catch (error) {
    console.error('[ap-practice form] failed:', error)
    return NextResponse.json({ error: 'Could not load this form.' }, { status: 500 })
  }
}
