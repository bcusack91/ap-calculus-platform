import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { sendPasswordResetEmail } from '@/lib/email'
import { getPublicAppUrl } from '@/lib/public-url'

// Rate limit: 3 password reset requests per IP per 15 minutes
// (Redis-backed distributed limiter — falls back to in-memory when Redis is unconfigured)
const resetLimiter = rateLimit({ maxRequests: 3, windowMs: 15 * 60 * 1000, prefix: 'forgot_password' })

export async function POST(req: Request) {
  try {
    // Rate limit by IP to prevent abuse
    const ip = getClientIp(req)
    const rateLimitResult = await resetLimiter.check(ip)
    if (!rateLimitResult.success) {
      // Still return the generic success message to prevent enumeration
      return NextResponse.json({
        message: 'If an account with that email exists, a password reset link has been sent.',
      })
    }

    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Always return success to prevent email enumeration
    const successResponse = NextResponse.json({
      message: 'If an account with that email exists, a password reset link has been sent.',
    })

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || !user.password) {
      // User doesn't exist or signed up via OAuth — still return success
      return successResponse
    }

    // Delete any existing reset tokens for this email
    await prisma.passwordResetToken.deleteMany({ where: { email } })

    // Generate a secure token. Only the SHA-256 hash is stored at rest so a
    // database leak cannot be replayed; the raw token is emailed to the user.
    const token = crypto.randomBytes(32).toString('hex')
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex')
    const expires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    await prisma.passwordResetToken.create({
      data: { email, token: tokenHash, expires },
    })

    const resetUrl = `${getPublicAppUrl()}/auth/reset-password?token=${token}`

    await sendPasswordResetEmail(email, resetUrl)

    return successResponse
  } catch (error) {
    console.error('[Forgot Password Error]', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
