import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// ── API Rate Limiter (optional — skipped if Upstash not configured) ──
let apiRatelimit: Ratelimit | null = null
let authRatelimit: Ratelimit | null = null

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })
  // General API: 60 requests per 60 seconds per IP
  apiRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(60, '60 s'),
    prefix: 'rl:api',
    analytics: true,
  })
  // Auth endpoints: stricter — 30 requests per 60 seconds per IP
  // (OAuth flows like Google involve multiple internal round-trips)
  authRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(30, '60 s'),
    prefix: 'rl:auth',
    analytics: true,
  })
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  )
}

export async function middleware(request: NextRequest) {
  const { nextUrl } = request

  // ── CSRF Origin Check for mutating API requests ──
  if (nextUrl.pathname.startsWith('/api/') && ['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method)) {
    const origin = request.headers.get('origin')
    const host = request.headers.get('host')
    if (origin && host) {
      const originHost = new URL(origin).host
      if (originHost !== host) {
        return NextResponse.json(
          { error: 'Invalid origin' },
          { status: 403 }
        )
      }
    }
  }

  // ── API Rate Limiting ──
  if (nextUrl.pathname.startsWith('/api/')) {
    // Skip rate limiting for health check
    if (nextUrl.pathname === '/api/health') {
      return NextResponse.next()
    }

    const ip = getClientIp(request)

    // Use stricter limiter for auth endpoints, but exclude NextAuth
    // internal routes (callback, session, csrf, providers) since OAuth
    // flows involve multiple rapid internal round-trips
    const isAuthEndpoint = nextUrl.pathname.startsWith('/api/auth/')
    const isNextAuthInternal = /^\/api\/auth\/(callback|session|csrf|providers)/.test(nextUrl.pathname)
    const limiter = (isAuthEndpoint && !isNextAuthInternal) ? authRatelimit : apiRatelimit

    if (limiter) {
      try {
        const { success, limit, remaining, reset } = await limiter.limit(ip)

        if (!success) {
          return NextResponse.json(
            { error: 'Too many requests. Please try again later.' },
            {
              status: 429,
              headers: {
                'X-RateLimit-Limit': limit.toString(),
                'X-RateLimit-Remaining': '0',
                'X-RateLimit-Reset': reset.toString(),
                'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
              },
            }
          )
        }

        // Attach rate limit headers to the response
        const response = NextResponse.next()
        response.headers.set('X-RateLimit-Limit', limit.toString())
        response.headers.set('X-RateLimit-Remaining', remaining.toString())
        response.headers.set('X-RateLimit-Reset', reset.toString())
        return response
      } catch {
        // If rate limiting fails, allow the request through
        return NextResponse.next()
      }
    }

    return NextResponse.next()
  }

  // ── Page Route Auth Protection ──

  // Async challenge pages are publicly reachable so that link unfurlers
  // (iMessage, Twitter, Facebook, Slack, Discord, etc.) can fetch the
  // generated `opengraph-image` / `twitter-image` routes to show a rich
  // preview. The page itself client-side redirects unauthenticated visitors
  // to /auth/signin with a `callbackUrl` so humans still have to sign in.
  if (nextUrl.pathname.startsWith('/competitive/async/')) {
    return NextResponse.next()
  }

  // NextAuth v5 uses 'authjs.session-token' (HTTP) or '__Secure-authjs.session-token' (HTTPS)
  const secureCookie = nextUrl.protocol === 'https:'
  const cookieName = secureCookie
    ? '__Secure-authjs.session-token'
    : 'authjs.session-token'

  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
    secureCookie,
    cookieName,
    salt: cookieName,
  })

  if (!token) {
    const signInUrl = new URL('/auth/signin', nextUrl.origin)
    signInUrl.searchParams.set('callbackUrl', nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  const role = token.role as string

  // Role-based protection for teacher routes
  if (nextUrl.pathname.startsWith('/teacher')) {
    // Exception: /teacher/lobby/<id> is also viewable by student participants.
    // The page + API already enforce per-user access (teacher owner OR lobby participant).
    const isTeacherLobbyDetail = /^\/teacher\/lobby\/[^/]+\/?$/.test(nextUrl.pathname)
    if (!isTeacherLobbyDetail && role !== 'TEACHER' && role !== 'ADMIN') {
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
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/teacher/:path*',
    '/admin/:path*',
    '/competitive/:path*',
    '/api/:path*',
  ],
}
