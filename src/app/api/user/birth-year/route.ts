import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CHILD_COOKIE } from '@/lib/child-safety'

/**
 * GET /api/user/birth-year — the signed-in user's stored birth year (null when
 * unknown). The BirthYearGate asks this before showing its screen: the session
 * token carries a copy of the field, but that copy can lag the database (the
 * cookie is only rewritten by /api/auth/session, and that call can fail or be
 * overtaken by a stale one), and a stale null re-asked students for a year
 * they had already given. The row is the truth.
 */
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { birthYear: true },
  })
  if (!user) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ birthYear: user.birthYear }, { headers: { 'Cache-Control': 'private, no-store' } })
}

/**
 * POST /api/user/birth-year — records the signed-in user's birth year.
 *
 * This is how OAuth (Google) sign-ups and legacy accounts that never saw the
 * credential-signup age screen provide their age. Persists User.birthYear and
 * sets the under-13 child-directed-treatment cookie (non-personalized ads, no
 * session replay) when applicable. The BirthYearGate calls this before letting
 * an account without a birth year use the app.
 */
export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let birthYear: unknown
  try {
    birthYear = (await request.json())?.birthYear
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const yr = Number(birthYear)
  const currentYear = new Date().getFullYear()
  if (!Number.isFinite(yr) || yr <= 1900 || yr > currentYear) {
    return NextResponse.json({ error: 'Please enter a valid birth year' }, { status: 400 })
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: { birthYear: Math.round(yr) },
  })

  const isUnder13 = currentYear - yr < 13
  const res = NextResponse.json({ success: true, birthYear: Math.round(yr) })
  if (isUnder13) {
    res.cookies.set(CHILD_COOKIE, '1', { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', path: '/' })
  } else {
    // Adult: clear any stale child cookie.
    res.cookies.set(CHILD_COOKIE, '', { maxAge: 0, path: '/' })
  }
  return res
}
