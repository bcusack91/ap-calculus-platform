/** Client-safe YouTube helpers (re-exported by src/lib/live-session.ts). */

/**
 * Extract a YouTube video id from whatever the teacher pastes: watch URLs,
 * youtu.be short links, /live/ URLs, embed URLs, or a bare 11-char id.
 */
export function parseYouTubeVideoId(input: string): string | null {
  const s = input.trim()
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s
  let url: URL
  try {
    url = new URL(s)
  } catch {
    return null
  }
  const host = url.hostname.replace(/^www\./, '')
  if (host === 'youtu.be') {
    const id = url.pathname.slice(1).split('/')[0]
    return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null
  }
  if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
    const v = url.searchParams.get('v')
    if (v && /^[A-Za-z0-9_-]{11}$/.test(v)) return v
    const m = url.pathname.match(/^\/(?:live|embed|shorts)\/([A-Za-z0-9_-]{11})/)
    if (m) return m[1]
  }
  return null
}
