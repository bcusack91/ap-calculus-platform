import { NextResponse } from 'next/server'
import { actFormAvailability } from '@/data/act-practice/full-length'

export const dynamic = 'force-dynamic'

/**
 * GET /api/act-full-length/forms → { forms: [{ form, available }] } — which
 * full-length ACT forms can be taken. A form is available once all four of
 * its section files exist and pass the blueprint checks.
 */
export async function GET() {
  try {
    return NextResponse.json({ forms: await actFormAvailability() }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (err) {
    console.error('[GET /api/act-full-length/forms]', err)
    return NextResponse.json({ error: 'Could not load the forms' }, { status: 500 })
  }
}
