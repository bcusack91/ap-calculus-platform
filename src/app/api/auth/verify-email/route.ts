import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
import crypto from 'crypto'

// POST: Send verification email
export async function POST() {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const email = session.user.email

    // Check if already verified
    const user = await prisma.user.findUnique({ where: { email } })
    if (user?.emailVerified) {
      return NextResponse.json({ message: 'Email already verified' })
    }

    // Delete any existing tokens for this email
    await prisma.emailVerificationToken.deleteMany({ where: { email } })

    // Generate a secure token
    const token = crypto.randomBytes(32).toString('hex')
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    await prisma.emailVerificationToken.create({
      data: { email, token, expires },
    })

    const verifyUrl = `${process.env.NEXTAUTH_URL || 'https://www.studymondo.com'}/auth/verify-email?token=${token}`

    // Log for development. TODO: Send via email provider.
    console.log(`[Email Verification] URL for ${email}: ${verifyUrl}`)

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

    const verificationToken = await prisma.emailVerificationToken.findUnique({
      where: { token },
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
