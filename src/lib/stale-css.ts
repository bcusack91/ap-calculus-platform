/**
 * Stylesheets for session replays of older deployments.
 *
 * Every deploy renames the main stylesheet (its file name is a content hash),
 * and Vercel stops serving an old deployment's files once its Skew Protection
 * window has passed. A Microsoft Clarity recording keeps the stylesheet URL it
 * was recorded with — `/_next/static/css/<hash>.css?dpl=<old deployment>` — so
 * replaying it a few days later gets a 404 and shows an unstyled page.
 *
 * Requests whose `dpl` names a deployment other than this one are routed to
 * /stale-css/<file>, which serves the file if this deployment still has it and
 * otherwise this deployment's stylesheets. Visitors on the live site always
 * request this deployment's own `dpl`, so their requests are never touched.
 */

export const STALE_CSS_BYPASS_HEADER = 'x-stale-css-bypass'

const CSS_PATH = /^\/_next\/static\/css\/([a-f0-9]{8,32}\.css)$/

/** A built stylesheet's file name, or null for anything else. */
export function cssFileName(name: string): string | null {
  return /^[a-f0-9]{8,32}\.css$/.test(name) ? name : null
}

/**
 * Where to send a stylesheet request recorded on an older deployment, or null
 * to leave it alone. Requests with no `dpl`, with this deployment's `dpl`, or
 * made when this deployment's id is unknown are always left alone.
 */
export function staleCssRewrite(
  pathname: string,
  dpl: string | null,
  ownDeploymentId: string | null | undefined,
  bypass: boolean,
): string | null {
  if (bypass || !dpl || !ownDeploymentId || dpl === ownDeploymentId) return null
  const m = CSS_PATH.exec(pathname)
  return m ? `/stale-css/${m[1]}` : null
}

/** Stylesheet URLs linked from a page's HTML, in document order, deduplicated. */
export function stylesheetHrefs(html: string): string[] {
  const out: string[] = []
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = m[0]
    if (!/rel=["']?stylesheet/i.test(tag)) continue
    const href = /href=["']([^"']+)["']/i.exec(tag)?.[1]
    if (!href) continue
    const path = href.split('?')[0]
    if (path.startsWith('/_next/static/css/') && !out.includes(path)) out.push(path)
  }
  return out
}
