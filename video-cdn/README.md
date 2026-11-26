# studymondo-video (Cloudflare Worker + R2)

Serves the website's video-lesson clips (`.mp4`) and posters (`.jpg`) from the R2 bucket
`studymondo-video`, so the clips are not part of the site repo or its Vercel builds.

- Object keys mirror the old `public/` paths: `video-lessons/<lesson>/c0N/<section>.mp4`.
- The site builds each clip URL as `NEXT_PUBLIC_VIDEO_BASE_URL + providerId`. Without that
  variable it falls back to the site's own `/video-lessons/...` path (the old behaviour).
- Upload new clips: `scripts/video-lessons/upload-clips.sh <lessonKey> [...]`
  (needs `npx wrangler login` on this Mac). Manifests stay in the repo; the sync scripts read them.
- Deploy the Worker: `cd video-cdn && ../live-relay/node_modules/.bin/wrangler deploy`.
