import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { rateLimit } from '@/lib/rate-limit'
import { sendVerificationEmail } from '@/lib/email'
import { getPublicAppUrl } from '@/lib/public-url'

// Rate limit: 3 verification emails per user per hour
// (Redis-backed distributed limiter — falls back to in-memory when Redis is unconfigured)
const verifyLimiter = rateLimit({ maxRequests: 3, windowMs: 60 * 60 * 1000, prefix: 'verify_email' })

// POST: Send verification email
export async function POST() {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    // Rate limit by user ID to prevent spam
    const rateLimitResult = await verifyLimiter.check(session.user.id)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many verification requests. Please try again later.' },
        { status: 429 }
      )
    }

    const email = session.user.email

    // Check if already verified
    const user = await prisma.user.findUnique({ where: { email } })
    if (user?.emailVerified) {
      return NextResponse.json({ message: 'Email already verified' })
    }

    // Delete any existing tokens for this email
    await prisma.emailVerificationToken.deleteMany({ where: { email } })

    // Generate a secure token. Only the SHA-256 hash is stored at rest so a
    // database leak cannot be replayed; the raw token is emailed to the user.
    const token = crypto.randomBytes(32).toString('hex')
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex')
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    await prisma.emailVerificationToken.create({
      data: { email, token: tokenHash, expires },
    })

    const verifyUrl = `${getPublicAppUrl()}/auth/verify-email?token=${token}`

    await sendVerificationEmail(email, verifyUrl)

    return NextResponse.json({ message: 'Verification email sent' })
  } catch (error) {
    console.error('[Send Verification Error]', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

// GET: Verify the token
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 })
    }

    // Tokens are stored as SHA-256 hashes at rest — hash the incoming raw
    // token before lookup.
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex')
    const verificationToken = await prisma.emailVerificationToken.findUnique({
      where: { token: tokenHash },
    })

    if (!verificationToken) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }

    if (verificationToken.expires < new Date()) {
      await prisma.emailVerificationToken.delete({ where: { id: verificationToken.id } })
      return NextResponse.json({ error: 'Token has expired' }, { status: 400 })
    }

    // Mark email as verified
    await prisma.user.update({
      where: { email: verificationToken.email },
      data: { emailVerified: new Date() },
    })

    // Clean up
    await prisma.emailVerificationToken.delete({ where: { id: verificationToken.id } })

    return NextResponse.json({ message: 'Email verified successfully' })
  } catch (error) {
    console.error('[Verify Email Error]', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
