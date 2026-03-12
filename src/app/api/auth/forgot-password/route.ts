import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'
import { sendPasswordResetEmail } from '@/lib/email'

// Rate limit: 3 password reset requests per IP per 15 minutes
const RESET_RATE_LIMIT = { maxRequests: 3, windowMs: 15 * 60 * 1000 }

export async function POST(req: Request) {
  try {
    // Rate limit by IP to prevent abuse
    const ip = getClientIp(req)
    const rateLimitResult = checkRateLimit(`forgot-password:${ip}`, RESET_RATE_LIMIT)
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

    // Generate a secure token
    const token = crypto.randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    await prisma.passwordResetToken.create({
      data: { email, token, expires },
    })

    const resetUrl = `${process.env.NEXTAUTH_URL || 'https://www.studymondo.com'}/auth/reset-password?token=${token}`

    await sendPasswordResetEmail(email, resetUrl)

    return successResponse
  } catch (error) {
    console.error('[Forgot Password Error]', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
