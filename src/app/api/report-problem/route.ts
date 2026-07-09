import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { sendEmail } from '@/lib/email-provider'
import { contactLimiter, getClientIp } from '@/lib/rate-limit-v2'

const CATEGORIES = new Set(['wrong-answer', 'typo', 'unclear', 'broken', 'other'])
const FROM_ADDRESS = process.env.SMTP_FROM || 'Study Mondo <noreply@studymondo.com>'

/**
 * POST /api/report-problem — a student flags a bad question/content.
 * Delivers straight to the content owner's inbox (ADMIN_ALERT_EMAIL_TO,
 * fallback privacy@) — content QA is the top launch risk, so reports must
 * reach a human, not a table nobody reads. Rate-limited; works signed-out
 * (reporter recorded when signed in).
 */
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    const { success } = await contactLimiter.check(ip)
    if (!success) {
      return NextResponse.json({ error: 'Too many reports — please try again later.' }, { status: 429 })
    }

    const session = await auth()
    const body = await request.json().catch(() => ({}))
    const { questionId, topicSlug, context, category, description } = body as Record<string, unknown>

    if (typeof category !== 'string' || !CATEGORIES.has(category)) {
      return NextResponse.json({ error: 'Please pick a category.' }, { status: 400 })
    }
    if (typeof description !== 'string' || !description.trim()) {
      return NextResponse.json({ error: 'Please describe the problem.' }, { status: 400 })
    }

    const clean = (v: unknown, max: number) =>
      typeof v === 'string' ? v.slice(0, max) : null
    const desc = description.trim().slice(0, 1000)
    const topic = clean(topicSlug, 200)
    const qid = clean(questionId, 200)
    const ctx = clean(context, 500)
    const reporter = session?.user?.email || 'anonymous'

    const to = (process.env.ADMIN_ALERT_EMAIL_TO || 'privacy@studymondo.com')
      .split(',').map((s) => s.trim()).filter(Boolean)

    const lines = [
      `Category: ${category}`,
      `Topic: ${topic ?? '—'}`,
      `Question: ${qid ?? '—'}`,
      ctx ? `Context: ${ctx}` : null,
      `Reporter: ${reporter}`,
      '',
      desc,
    ].filter((l): l is string => l !== null)

    await sendEmail({
      from: FROM_ADDRESS,
      to,
      subject: `⚑ Content report: ${category}${topic ? ` — ${topic}` : ''}`,
      text: lines.join('\n'),
      html: `<pre style="font-family:ui-monospace,monospace;font-size:13px;white-space:pre-wrap">${lines
        .join('\n')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')}</pre>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[report-problem] Error:', error)
    return NextResponse.json({ error: 'Could not submit the report.' }, { status: 500 })
  }
}
