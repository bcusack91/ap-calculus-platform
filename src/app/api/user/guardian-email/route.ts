import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { contactLimiter, getClientIp } from '@/lib/rate-limit-v2'
import { sendGuardianConfirmEmail } from '@/lib/email'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** GET /api/user/guardian-email — the signed-in user's guardian email + confirmed state. */
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { guardianEmail: true },
  })
  let confirmed = false
  if (user?.guardianEmail) {
    const sub = await prisma.emailSubscriber.findUnique({
      where: { email: user.guardianEmail },
      select: { verified: true, unsubscribed: true },
    })
    confirmed = !!sub?.verified && !sub.unsubscribed
  }
  return NextResponse.json({ guardianEmail: user?.guardianEmail ?? null, confirmed })
}

/**
 * PUT /api/user/guardian-email  { guardianEmail: string | null }
 * Sets (or clears with "") the parent/guardian address. Uses DOUBLE OPT-IN:
 * setting an address sends the guardian a confirmation email; weekly digests
 * only start once the guardian confirms (and never resume an address that
 * previously unsubscribed). Rate-limited to curb abuse.
 */
export async function PUT(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const ip = getClientIp(req)
  const { success } = await contactLimiter.check(ip)
  if (!success) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  const body = await req.json().catch(() => ({}))
  const raw = typeof body?.guardianEmail === 'string' ? body.guardianEmail.trim().toLowerCase() : ''

  if (raw && !EMAIL_RE.test(raw)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: { guardianEmail: raw || null },
  })

  let confirmed = false
  if (raw) {
    // Ensure a subscriber row exists. NEVER flip an existing unsubscribed/verified
    // flag here — that would let a student force-resubscribe someone who opted out.
    const sub = await prisma.emailSubscriber.upsert({
      where: { email: raw },
      create: { email: raw, source: 'parent-digest' },
      update: {},
      select: { verified: true, unsubscribed: true },
    })
    confirmed = sub.verified && !sub.unsubscribed
    // Send a confirmation (double opt-in) only if not already a confirmed,
    // opted-in address — so digests require the guardian's affirmative consent.
    if (!confirmed && !sub.unsubscribed) {
      try {
        await sendGuardianConfirmEmail(raw, session.user.name ?? null)
      } catch {
        /* non-fatal: the address is saved; confirmation can be retried */
      }
    }
  }

  return NextResponse.json({ success: true, guardianEmail: raw || null, confirmed })
}
