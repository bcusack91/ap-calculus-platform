/**
 * Where a FILE-provider clip (or its poster) is fetched from. Clips are stored
 * with a site path (providerId '/video-lessons/<key>/c0N/<section>.mp4'); when
 * NEXT_PUBLIC_VIDEO_BASE_URL is set they are served by the R2 Worker in
 * video-cdn/ at the same path. Unset → the site's own public/ path.
 */
export function videoFileUrl(path: string, base: string | undefined = process.env.NEXT_PUBLIC_VIDEO_BASE_URL): string {
  if (!base || !path.startsWith('/video-lessons/')) return path
  return base.replace(/\/+$/, '') + path
}
