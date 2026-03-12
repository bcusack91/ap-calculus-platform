import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/unsubscribe?token=<email-base64>
 * Marks the subscriber as unsubscribed. The token is a simple base64-encoded email.
 * A real production system should use a signed JWT — this is a pragmatic v1.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 })
  }

  let email: string
  try {
    email = Buffer.from(token, 'base64').toString('utf-8')
    if (!email.includes('@')) throw new Error('Invalid email')
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
  }

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
