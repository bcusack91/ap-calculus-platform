/**
 * Short addresses spoken and shown in StudyMondo's YouTube videos:
 * studymondo.com/v/<code> → that topic's video lesson, opened on the clip's
 * checkpoint questions, tagged so Google Analytics credits the video.
 *
 * Add a row per recorded clip. Codes are lowercase letters + digits, short
 * enough to say aloud ("slash V slash bonds one"). Never reuse or repoint a
 * code once a video naming it is public.
 */
export type VideoShortLink = {
  topicSlug: string
  /** 1-based position of the clip in the published lesson (the recording plan's order). */
  clip: number
  /** Google Analytics campaign: course + topic. */
  campaign: string
}

export const VIDEO_SHORT_LINKS: Record<string, VideoShortLink> = {
  // AP Chemistry · Types of Chemical Bonds (pilot, recording plan clips 1–7)
  bonds1: { topicSlug: 'types-of-chemical-bonds', clip: 1, campaign: 'apchem-bonds' },
  bonds2: { topicSlug: 'types-of-chemical-bonds', clip: 2, campaign: 'apchem-bonds' },
  bonds3: { topicSlug: 'types-of-chemical-bonds', clip: 3, campaign: 'apchem-bonds' },
  bonds4: { topicSlug: 'types-of-chemical-bonds', clip: 4, campaign: 'apchem-bonds' },
  bonds5: { topicSlug: 'types-of-chemical-bonds', clip: 5, campaign: 'apchem-bonds' },
  bonds6: { topicSlug: 'types-of-chemical-bonds', clip: 6, campaign: 'apchem-bonds' },
  bonds7: { topicSlug: 'types-of-chemical-bonds', clip: 7, campaign: 'apchem-bonds' },
}

export function lookupShortLink(code: string): (VideoShortLink & { code: string }) | null {
  const key = code.trim().toLowerCase()
  const row = Object.prototype.hasOwnProperty.call(VIDEO_SHORT_LINKS, key) ? VIDEO_SHORT_LINKS[key] : undefined
  return row ? { ...row, code: key } : null
}

/**
 * Where a short link sends a visitor, given the instructors who have a
 * published lesson for the topic:
 * - one instructor → straight to that lesson, on the clip's checkpoint;
 * - several → the instructor picker, which carries the clip through;
 * - none yet (not approved) → the clip's questions from its recording plan
 *   (/v/<code>/questions), so the link opens real questions from day one.
 */
export function shortLinkDestination(link: VideoShortLink & { code: string }, instructorSlugs: readonly string[]): string {
  const utm = new URLSearchParams({ utm_source: 'youtube', utm_medium: 'video', utm_campaign: link.campaign, utm_content: link.code })
  const base = `/topics/${encodeURIComponent(link.topicSlug)}`
  if (instructorSlugs.length === 0) return `/v/${encodeURIComponent(link.code)}/questions?${utm}`
  const withClip = new URLSearchParams({ clip: String(link.clip) })
  utm.forEach((v, k) => withClip.set(k, v))
  if (instructorSlugs.length === 1) return `${base}/video/${encodeURIComponent(instructorSlugs[0])}?${withClip}`
  return `${base}/video?${withClip}`
}
