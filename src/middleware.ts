import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

export default auth((request) => {
  const { nextUrl } = request
  const session = request.auth

  if (!session) {
    const signInUrl = new URL('/auth/signin', nextUrl.origin)
    signInUrl.searchParams.set('callbackUrl', nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  const role = session.user?.role

  // Role-based protection for teacher routes
  if (nextUrl.pathname.startsWith('/teacher')) {
    if (role !== 'TEACHER' && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', nextUrl.origin))
    }
  }

  // Role-based protection for admin routes
  if (nextUrl.pathname.startsWith('/admin')) {
    if (role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', nextUrl.origin))
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/teacher/:path*', '/admin/:path*'],
}
