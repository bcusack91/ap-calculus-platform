import { cssFileName, STALE_CSS_BYPASS_HEADER, stylesheetHrefs } from '@/lib/stale-css'

/**
 * A stylesheet requested by a session replay of an older deployment (see
 * src/lib/stale-css.ts). Serves the file if this deployment still has it;
 * otherwise this deployment's site-wide stylesheets, which style an older
 * recording almost exactly (most classes carry over between deploys).
 */

const CSS_HEADERS = {
  'Content-Type': 'text/css; charset=utf-8',
  // The answer for a given old URL never needs to change.
  'Cache-Control': 'public, max-age=86400, s-maxage=2592000',
}

async function fetchCss(origin: string, path: string): Promise<string | null> {
  try {
    const res = await fetch(`${origin}${path}`, { headers: { [STALE_CSS_BYPASS_HEADER]: '1' }, cache: 'no-store' })
    if (!res.ok || !(res.headers.get('content-type') ?? '').includes('text/css')) return null
    return await res.text()
  } catch {
    return null
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ file: string }> }) {
  const file = cssFileName((await params).file)
  if (!file) return new Response('Not found', { status: 404 })
  const origin = new URL(request.url).origin

  const same = await fetchCss(origin, `/_next/static/css/${file}`)
  if (same !== null) return new Response(same, { headers: { ...CSS_HEADERS, 'x-stale-css': 'same-file' } })

  // The file was renamed by a later deploy: send the current site stylesheets.
  let hrefs: string[] = []
  try {
    const home = await fetch(`${origin}/`, { headers: { [STALE_CSS_BYPASS_HEADER]: '1' }, cache: 'no-store' })
    if (home.ok) hrefs = stylesheetHrefs(await home.text())
  } catch {
    // fall through to 404
  }
  const parts = (await Promise.all(hrefs.map((h) => fetchCss(origin, h)))).filter((c): c is string => c !== null)
  if (!parts.length) return new Response('Not found', { status: 404 })
  return new Response(parts.join('\n'), { headers: { ...CSS_HEADERS, 'x-stale-css': 'current-site' } })
}
