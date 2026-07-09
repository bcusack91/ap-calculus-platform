import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyUnsubscribeToken } from '@/lib/unsubscribe-token'

function htmlPage(title: string, body: string, status: number) {
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>${title} — Study Mondo</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f9fafb}
.card{text-align:center;max-width:400px;padding:2rem}h1{color:#7c3aed;font-size:1.5rem}p{color:#4b5563;line-height:1.6}
a{color:#7c3aed;text-decoration:none;font-weight:600}</style></head>
<body><div class="card"><h1>${title}</h1>
${body}
<p><a href="https://www.studymondo.com">Return to Study Mondo</a></p></div></body></html>`,
    { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )
}

/**
 * GET /api/guardian-confirm?token=<signed-token>
 * A parent/guardian confirms (double opt-in) that they want to receive a
 * student's weekly progress emails. The signed token (HMAC, AUTH_SECRET) proves
 * the link is one we generated for that address. Only after this do digests send.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')
  if (!token) return NextResponse.json({ error: 'Missing token' }, { status: 400 })

  const verified = verifyUnsubscribeToken(token)
  if (!verified.ok) {
    return htmlPage(
      'This confirmation link has expired',
      `<p>Please ask the student to re-enter your email, or <a href="https://www.studymondo.com/contact">contact us</a>.</p>`,
      400
    )
  }

  const email = verified.email.toLowerCase()

  try {
    // The guardian themselves clicked — record affirmative consent.
    await prisma.emailSubscriber.upsert({
      where: { email },
      create: { email, source: 'parent-digest', verified: true, unsubscribed: false },
      update: { verified: true, unsubscribed: false },
    })

    return htmlPage(
      'You’re all set',
      `<p>You’ll now receive a short weekly progress summary. You can unsubscribe from any email at any time.</p>`,
      200
    )
  } catch (error) {
    console.error('Guardian confirm error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
