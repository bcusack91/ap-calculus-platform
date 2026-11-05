/**
 * Looping slide animations (Nov 2026). A slide figure can carry a short silent
 * MP4 served from /public/slide-media, with a poster frame. It plays muted and
 * loops on every screen, so live classes need no playback sync. Kept apart
 * from slide-deck.ts so the client renderer can import the check without the
 * deck generator.
 */
export type SlideVideo = { src: string; poster: string }

/** Only same-site files under /slide-media/<folder>/ are played. */
const SLIDE_MEDIA_PATH = /^\/slide-media\/[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9-]*\.(mp4|jpg)$/

export function slideVideoProblems(v: unknown): string[] {
  if (!v || typeof v !== 'object') return ['video must be { src, poster }']
  const { src, poster } = v as Partial<SlideVideo>
  const problems: string[] = []
  if (typeof src !== 'string' || !SLIDE_MEDIA_PATH.test(src) || !src.endsWith('.mp4')) problems.push('video.src must be /slide-media/<folder>/<name>.mp4')
  if (typeof poster !== 'string' || !SLIDE_MEDIA_PATH.test(poster) || !poster.endsWith('.jpg')) problems.push('video.poster must be /slide-media/<folder>/<name>.jpg')
  return problems
}

export function isSafeSlideVideo(v: unknown): v is SlideVideo {
  return slideVideoProblems(v).length === 0
}
