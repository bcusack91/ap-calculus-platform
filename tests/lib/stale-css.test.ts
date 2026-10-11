/**
 * Stylesheets for session replays of older deployments: only requests naming
 * another deployment are rerouted, and the fallback serves the same file when
 * it still exists, otherwise the current site stylesheets.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'
import { cssFileName, staleCssRewrite, stylesheetHrefs } from '@/lib/stale-css'

describe('staleCssRewrite', () => {
  const path = '/_next/static/css/bc2abe773e4ce883.css'
  it('reroutes a stylesheet recorded on another deployment', () => {
    expect(staleCssRewrite(path, 'dpl_old', 'dpl_new', false)).toBe('/stale-css/bc2abe773e4ce883.css')
  })
  it("never touches the live site's own requests, unlabelled requests, or bypassed ones", () => {
    expect(staleCssRewrite(path, 'dpl_new', 'dpl_new', false)).toBeNull()
    expect(staleCssRewrite(path, null, 'dpl_new', false)).toBeNull()
    expect(staleCssRewrite(path, 'dpl_old', undefined, false)).toBeNull()
    expect(staleCssRewrite(path, 'dpl_old', 'dpl_new', true)).toBeNull()
  })
  it('ignores anything that is not a built stylesheet', () => {
    expect(staleCssRewrite('/_next/static/css/../../secret', 'dpl_old', 'dpl_new', false)).toBeNull()
    expect(staleCssRewrite('/_next/static/chunks/app.js', 'dpl_old', 'dpl_new', false)).toBeNull()
    expect(cssFileName('../x.css')).toBeNull()
    expect(cssFileName('4e73199ef9f5051b.css')).toBe('4e73199ef9f5051b.css')
  })
})

describe('stylesheetHrefs', () => {
  it('lists stylesheet links in order without the deployment query', () => {
    const html =
      '<link rel="stylesheet" href="/_next/static/css/a1b2c3d4e5f60718.css?dpl=dpl_x" data-precedence="next"/>' +
      '<link rel="preload" href="/_next/static/media/font.woff2"/>' +
      '<link rel="stylesheet" href="/_next/static/css/0f1e2d3c4b5a6978.css?dpl=dpl_x"/>' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter"/>' +
      '<link rel="stylesheet" href="/_next/static/css/a1b2c3d4e5f60718.css?dpl=dpl_x"/>'
    expect(stylesheetHrefs(html)).toEqual(['/_next/static/css/a1b2c3d4e5f60718.css', '/_next/static/css/0f1e2d3c4b5a6978.css'])
  })
})

describe('GET /stale-css/<file>', () => {
  const realFetch = globalThis.fetch
  let files: Record<string, string>
  beforeEach(() => {
    files = {
      '/': '<link rel="stylesheet" href="/_next/static/css/1111aaaa2222bbbb.css?dpl=dpl_new"/><link rel="stylesheet" href="/_next/static/css/3333cccc4444dddd.css?dpl=dpl_new"/>',
      '/_next/static/css/1111aaaa2222bbbb.css': '.a{color:red}',
      '/_next/static/css/3333cccc4444dddd.css': '.b{color:blue}',
    }
    globalThis.fetch = vi.fn(async (url: string | URL | Request, init?: RequestInit) => {
      const u = new URL(String(url))
      expect(new Headers(init?.headers).get('x-stale-css-bypass')).toBe('1')
      const body = files[u.pathname]
      if (body === undefined) return new Response('nope', { status: 404, headers: { 'content-type': 'text/html' } })
      return new Response(body, { headers: { 'content-type': u.pathname.endsWith('.css') ? 'text/css' : 'text/html' } })
    }) as typeof fetch
  })
  afterEach(() => {
    globalThis.fetch = realFetch
  })
  const call = async (file: string) => {
    const { GET } = await import('@/app/stale-css/[file]/route')
    return GET(new Request(`https://www.example.com/stale-css/${file}`), { params: Promise.resolve({ file }) })
  }

  it('serves the same file when this deployment still has it', async () => {
    const res = await call('3333cccc4444dddd.css')
    expect(res.status).toBe(200)
    expect(res.headers.get('x-stale-css')).toBe('same-file')
    expect(await res.text()).toBe('.b{color:blue}')
  })

  it("serves the current site stylesheets for a file a later deploy renamed", async () => {
    const res = await call('bc2abe773e4ce883.css')
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toContain('text/css')
    expect(res.headers.get('x-stale-css')).toBe('current-site')
    expect(await res.text()).toBe('.a{color:red}\n.b{color:blue}')
  })

  it('rejects anything that is not a stylesheet name', async () => {
    expect((await call('..%2Fetc.css')).status).toBe(404)
  })
})

describe('middleware stylesheet rule', () => {
  const OLD_ENV = process.env.NEXT_DEPLOYMENT_ID
  beforeEach(() => {
    process.env.NEXT_DEPLOYMENT_ID = 'dpl_new'
  })
  afterEach(() => {
    process.env.NEXT_DEPLOYMENT_ID = OLD_ENV
  })
  it('rewrites only stylesheets from another deployment', async () => {
    const { middleware } = await import('@/middleware')
    const stale = await middleware(new NextRequest('https://www.example.com/_next/static/css/bc2abe773e4ce883.css?dpl=dpl_old'))
    expect(stale.headers.get('x-middleware-rewrite')).toContain('/stale-css/bc2abe773e4ce883.css')
    const live = await middleware(new NextRequest('https://www.example.com/_next/static/css/bc2abe773e4ce883.css?dpl=dpl_new'))
    expect(live.headers.get('x-middleware-rewrite')).toBeNull()
  })
})
