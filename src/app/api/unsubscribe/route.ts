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
 * GET /api/unsubscribe?token=<base64url(email)>.<hmac-sha256-signature>
 * Marks the subscriber as unsubscribed. The token is signed (HMAC-SHA256 with
 * AUTH_SECRET) so only links we generated can unsubscribe an address.
 * Legacy unsigned base64(email) tokens are rejected with a friendly message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 })
  }

  const verified = verifyUnsubscribeToken(token)
  if (!verified.ok) {
    if (verified.reason === 'legacy') {
      return htmlPage(
        'This unsubscribe link has expired',
        `<p>This unsubscribe link has expired &mdash; reply to any email or <a href="https://www.studymondo.com/contact">contact us</a> and we&rsquo;ll take care of it.</p>`,
        400
      )
    }
    return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
  }

  const email = verified.email

  try {
    await prisma.emailSubscriber.updateMany({
      where: { email: email.toLowerCase() },
      data: { unsubscribed: true },
    })

    // Return a simple HTML page so the user sees confirmation
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Unsubscribed — Study Mondo</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f9fafb}
.card{text-align:center;max-width:400px;padding:2rem}h1{color:#7c3aed;font-size:1.5rem}p{color:#4b5563;line-height:1.6}
a{color:#7c3aed;text-decoration:none;font-weight:600}</style></head>
<body><div class="card"><h1>You've been unsubscribed</h1>
<p>You will no longer receive emails from Study Mondo.</p>
<p><a href="https://www.studymondo.com">Return to Study Mondo</a></p></div></body></html>`,
      { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    )
  } catch (error) {
    console.error('Unsubscribe error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
