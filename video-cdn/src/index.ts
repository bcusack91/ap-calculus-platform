/**
 * Serves the website's video-lesson clips and posters from the R2 bucket
 * `studymondo-video`. Keys mirror the old public/ paths, so the site builds a
 * clip URL as NEXT_PUBLIC_VIDEO_BASE_URL + providerId
 * (e.g. /video-lessons/mcat-fl3/c02/02-ex1-problem.mp4).
 * GET/HEAD only; byte ranges (206) for seeking; ETag revalidation (304).
 */
interface Env { BUCKET: R2Bucket }

const KEY_RE = /^video-lessons\/[A-Za-z0-9._\/-]+\.(mp4|jpg)$/

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const cors = { 'access-control-allow-origin': '*' }
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: { ...cors, 'access-control-allow-methods': 'GET, HEAD', 'access-control-allow-headers': 'range', 'access-control-max-age': '86400' } })
    if (req.method !== 'GET' && req.method !== 'HEAD') return new Response('Method not allowed', { status: 405, headers: { allow: 'GET, HEAD' } })
    const key = decodeURIComponent(new URL(req.url).pathname.slice(1))
    if (!KEY_RE.test(key) || key.includes('..')) return new Response('Not found', { status: 404, headers: cors })

    let obj: R2Object | R2ObjectBody | null
    try {
      obj = await env.BUCKET.get(key, { range: req.headers.has('range') ? req.headers : undefined, onlyIf: req.headers })
    } catch {
      const head = await env.BUCKET.head(key)
      return new Response('Range not satisfiable', { status: 416, headers: { ...cors, 'content-range': `bytes */${head?.size ?? 0}` } })
    }
    if (obj === null) return new Response('Not found', { status: 404, headers: cors })

    const headers = new Headers(cors)
    obj.writeHttpMetadata(headers)
    headers.set('etag', obj.httpEtag)
    headers.set('accept-ranges', 'bytes')
    headers.set('cache-control', 'public, max-age=3600')
    headers.set('access-control-expose-headers', 'content-range, content-length, accept-ranges, etag')
    if (!('body' in obj)) return new Response(null, { status: 304, headers })

    let status = 200
    let length = obj.size
    const r = obj.range as { offset?: number; length?: number; suffix?: number } | undefined
    if (req.headers.has('range') && r) {
      const offset = r.suffix !== undefined ? obj.size - r.suffix : (r.offset ?? 0)
      length = r.suffix !== undefined ? r.suffix : (r.length ?? obj.size - offset)
      headers.set('content-range', `bytes ${offset}-${offset + length - 1}/${obj.size}`)
      status = 206
    }
    headers.set('content-length', String(length))
    return new Response(req.method === 'HEAD' ? null : obj.body, { status, headers })
  },
}
