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
  // Auth endpoints: stricter — 10 requests per 60 seconds per IP
  authRatelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '60 s'),
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

  // ── API Rate Limiting ──
  if (nextUrl.pathname.startsWith('/api/')) {
    // Skip rate limiting for health check
    if (nextUrl.pathname === '/api/health') {
      return NextResponse.next()
    }

    const ip = getClientIp(request)

    // Use stricter limiter for auth endpoints
    const isAuthEndpoint = nextUrl.pathname.startsWith('/api/auth/')
    const limiter = isAuthEndpoint ? authRatelimit : apiRatelimit

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
