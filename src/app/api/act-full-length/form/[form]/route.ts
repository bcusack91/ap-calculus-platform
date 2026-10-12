import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { getActForm } from '@/data/act-practice/full-length'
import { publicActForm } from '@/lib/question-sources/act'

export const dynamic = 'force-dynamic'

/**
 * GET /api/act-full-length/form/<n> — one form for the runner, WITHOUT answer
 * keys, explanations or skill tags (the submit route grades on the server).
 * Signed-in only.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ form: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { form: raw } = await params
  const form = await getActForm(Number(raw))
  if (!form) return NextResponse.json({ error: 'That form is not available yet.' }, { status: 404 })
  return NextResponse.json({ form: publicActForm(form) }, { headers: { 'Cache-Control': 'private, no-store' } })
}
