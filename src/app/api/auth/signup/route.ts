import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { validateAvatarData } from '@/lib/avatar-validation'

// Rate limit: 5 signup attempts per IP per 15 minutes
// (Redis-backed distributed limiter — falls back to in-memory when Redis is unconfigured)
const signupLimiter = rateLimit({ maxRequests: 5, windowMs: 15 * 60 * 1000, prefix: 'signup' })

export async function POST(request: Request) {
  try {
    // Rate limit by IP address
    const ip = getClientIp(request)
    const rateLimitResult = await signupLimiter.check(ip)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many signup attempts. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
          },
        }
      )
    }

    const { email, password, name, avatarData, birthYear } = await request.json()

    // Validate display name: trim, length-bound, and reject markup/control chars
    // (the name is interpolated into HTML emails and shown to other students).
    let safeName: string | undefined
    if (name !== undefined && name !== null && String(name).trim() !== '') {
      const trimmed = String(name).trim()
      if (trimmed.length > 60 || /[<>]/.test(trimmed)) {
        return NextResponse.json(
          { error: 'Name must be under 60 characters and contain no markup.' },
          { status: 400 }
        )
      }
      safeName = trimmed
    }

    // Neutral age screen: a birth year lets us apply COPPA child-directed
    // treatment (non-personalized ads, no session replay) to under-13 accounts.
    // Persisted only as a cookie here (durable DOB storage + verifiable parental
    // consent require a schema migration — tracked as owner follow-up).
    const currentYear = new Date().getFullYear()
    const yr = Number(birthYear)
    const isUnder13 = Number.isFinite(yr) && yr > 1900 && yr <= currentYear && currentYear - yr < 13

    // avatarData is republished on the public leaderboard — enforce the same
    // strict schema + size cap as /api/user/avatar (optional at signup).
    let validatedAvatarData = null
    if (avatarData !== undefined && avatarData !== null) {
      const validated = validateAvatarData(avatarData)
      if (!validated.ok) {
        return NextResponse.json({ error: validated.error }, { status: 400 })
      }
      validatedAvatarData = validated.data
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'A valid email address is required' },
        { status: 400 }
      )
    }

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        // Neutral default — never seed a public-facing name from the email local
        // part (it leaks a real-name-ish identifier onto leaderboards/challenges).
        name: safeName || 'Student',
        role: 'FREE',
        // Durable age signal for COPPA child-directed treatment (the cookie set
        // below covers the immediate session; this persists across devices).
        birthYear: Number.isFinite(yr) && yr > 1900 && yr <= currentYear ? yr : undefined,
        // Omitting the field leaves the column NULL (same effect as the old
        // `avatarData || null`) while satisfying Prisma's Json input types.
        avatarData: validatedAvatarData ?? undefined,
      }
    })

    // Create learning path
    await prisma.learningPath.create({
      data: {
        userId: user.id,
      }
    })

    const res = NextResponse.json(
      {
        message: 'User created successfully',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
      { status: 201 }
    )
    // Apply child-directed treatment (non-personalized ads, no session replay)
    // for self-reported under-13 accounts via a long-lived, client-readable cookie.
    if (isUnder13) {
      res.cookies.set('mondo_u13', '1', { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', path: '/' })
    }
    return res
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'An error occurred during signup' },
      { status: 500 }
    )
  }
}
