#!/bin/bash
# Upload a video lesson's section clips (.mp4) and posters (.jpg) to the R2 bucket
# `studymondo-video` (served by the video-cdn Worker), skipping files already there
# with the same size, then verify every file through the Worker.
#   scripts/video-lessons/upload-clips.sh mcat-fl1 mcat-fl2 ...
# Needs `npx wrangler login` on this Mac. Manifests stay in the repo.
set -u
cd "$(dirname "$0")/../.."
W="$PWD/live-relay/node_modules/.bin/wrangler"
BASE="${VIDEO_BASE_URL:-https://studymondo-video.studymondo-live-relay.workers.dev}"
[ $# -ge 1 ] || { echo "usage: $0 <lessonKey> [...]"; exit 1; }
LIST=$(mktemp)
for k in "$@"; do
  [ -d "public/video-lessons/$k" ] || { echo "no folder public/video-lessons/$k"; exit 1; }
  find "public/video-lessons/$k" -type f \( -name '*.mp4' -o -name '*.jpg' \) | sort >> "$LIST"
done
echo "$(wc -l < "$LIST" | tr -d ' ') files"
put() {
  f="$1"; key="${f#public/}"
  size=$(stat -f %z "$f")
  have=$(curl -sI "$BASE/$key" | awk 'tolower($1)=="content-length:"{print $2}' | tr -d '\r')
  [ "$have" = "$size" ] && { echo "skip $key"; return 0; }
  case "$f" in *.mp4) ct=video/mp4;; *.jpg) ct=image/jpeg;; esac
  for try in 1 2 3; do
    (cd live-relay && "$W" r2 object put "studymondo-video/$key" --file "../$f" --content-type "$ct" --remote >/dev/null 2>&1) && { echo "put  $key"; return 0; }
    sleep 3
  done
  echo "FAIL $key"
}
export -f put; export W BASE
xargs -P 6 -I{} bash -c 'put "$@"' _ {} < "$LIST" | grep -v "^skip" | grep -c "^put" | sed 's/^/uploaded: /'
# Verify: size and MD5 (R2 ETag of a single-part upload) through the Worker.
bad=0
while read -r f; do
  key="${f#public/}"
  h=$(curl -sI "$BASE/$key" | tr -d '\r')
  len=$(echo "$h" | awk 'tolower($1)=="content-length:"{print $2}')
  etag=$(echo "$h" | awk 'tolower($1)=="etag:"{print $2}' | tr -d '"')
  [ "$len" = "$(stat -f %z "$f")" ] && [ "$etag" = "$(md5 -q "$f")" ] || { echo "MISMATCH $key ($len / $etag)"; bad=$((bad+1)); }
done < "$LIST"
echo "verified $(wc -l < "$LIST" | tr -d ' ') files, $bad mismatched"
rm -f "$LIST"
[ $bad -eq 0 ]
