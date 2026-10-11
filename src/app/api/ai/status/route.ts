import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

/**
 * GET /api/ai/status → { questionTutor: boolean }
 *
 * Whether "Ask about this question" is available: true only when an Anthropic
 * key is configured on the server (owner ruling — the tutor stays hidden
 * until then, and switches on by itself once the key exists). Says nothing
 * about the key itself.
 */
export async function GET() {
  return NextResponse.json(
    { questionTutor: Boolean(process.env.ANTHROPIC_API_KEY?.trim()) },
    { headers: { 'Cache-Control': 'private, no-store' } },
  )
}
