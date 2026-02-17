import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: Request) {
  try {
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

    // Log the reset URL for development. In production, send via email.
    // TODO: Configure email provider (e.g. Resend, SendGrid, or SMTP)
    console.log(`[Password Reset] URL for ${email}: ${resetUrl}`)

    // If you have an email provider configured, uncomment and adapt:
    // await sendEmail({
    //   to: email,
    //   subject: 'Reset Your Study Mondo Password',
    //   html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. This link expires in 1 hour.</p>`,
    // })

    return successResponse
  } catch (error) {
    console.error('[Forgot Password Error]', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
