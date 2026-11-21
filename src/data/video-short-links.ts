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
  // MCAT · Circuits Part 1: Current & Resistance — concept clip <topic>1, worked-examples clip <topic>2
  current1: { topicSlug: 'mcat-physics-electricity-dc-circuits-mcat', clip: 1, campaign: 'mcat-circuits1' },
  current2: { topicSlug: 'mcat-physics-electricity-dc-circuits-mcat', clip: 2, campaign: 'mcat-circuits1' },
  voltage1: { topicSlug: 'mcat-physics-electricity-dc-circuits-mcat', clip: 3, campaign: 'mcat-circuits1' },
  voltage2: { topicSlug: 'mcat-physics-electricity-dc-circuits-mcat', clip: 4, campaign: 'mcat-circuits1' },
  ohm1: { topicSlug: 'mcat-physics-electricity-dc-circuits-mcat', clip: 5, campaign: 'mcat-circuits1' },
  ohm2: { topicSlug: 'mcat-physics-electricity-dc-circuits-mcat', clip: 6, campaign: 'mcat-circuits1' },
  series1: { topicSlug: 'mcat-physics-electricity-dc-circuits-mcat', clip: 7, campaign: 'mcat-circuits1' },
  series2: { topicSlug: 'mcat-physics-electricity-dc-circuits-mcat', clip: 8, campaign: 'mcat-circuits1' },
  // MCAT · Circuits Part 2: Kirchhoff's Rules & Power — concept clip <topic>1, worked-examples clip <topic>2
  loop1: { topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat', clip: 1, campaign: 'mcat-circuits2' },
  loop2: { topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat', clip: 2, campaign: 'mcat-circuits2' },
  divider1: { topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat', clip: 3, campaign: 'mcat-circuits2' },
  divider2: { topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat', clip: 4, campaign: 'mcat-circuits2' },
  power1: { topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat', clip: 5, campaign: 'mcat-circuits2' },
  power2: { topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat', clip: 6, campaign: 'mcat-circuits2' },
  bulb1: { topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat', clip: 7, campaign: 'mcat-circuits2' },
  bulb2: { topicSlug: 'mcat-physics-electricity-kirchhoff-power-mcat', clip: 8, campaign: 'mcat-circuits2' },
  // MCAT · Circuits Part 3: EMF & Capacitance — concept clip <topic>1, worked-examples clip <topic>2
  emf1: { topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat', clip: 1, campaign: 'mcat-circuits3' },
  emf2: { topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat', clip: 2, campaign: 'mcat-circuits3' },
  meter1: { topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat', clip: 3, campaign: 'mcat-circuits3' },
  meter2: { topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat', clip: 4, campaign: 'mcat-circuits3' },
  cap1: { topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat', clip: 5, campaign: 'mcat-circuits3' },
  cap2: { topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat', clip: 6, campaign: 'mcat-circuits3' },
  energy1: { topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat', clip: 7, campaign: 'mcat-circuits3' },
  energy2: { topicSlug: 'mcat-physics-electricity-emf-capacitors-mcat', clip: 8, campaign: 'mcat-circuits3' },
  // MCAT · Circuits Part 4: Capacitor Networks & Bioelectricity — concept clip <topic>1, worked-examples clip <topic>2
  capnet1: { topicSlug: 'mcat-physics-electricity-rc-circuits-mcat', clip: 1, campaign: 'mcat-circuits4' },
  capnet2: { topicSlug: 'mcat-physics-electricity-rc-circuits-mcat', clip: 2, campaign: 'mcat-circuits4' },
  tau1: { topicSlug: 'mcat-physics-electricity-rc-circuits-mcat', clip: 3, campaign: 'mcat-circuits4' },
  tau2: { topicSlug: 'mcat-physics-electricity-rc-circuits-mcat', clip: 4, campaign: 'mcat-circuits4' },
  membrane1: { topicSlug: 'mcat-physics-electricity-rc-circuits-mcat', clip: 5, campaign: 'mcat-circuits4' },
  membrane2: { topicSlug: 'mcat-physics-electricity-rc-circuits-mcat', clip: 6, campaign: 'mcat-circuits4' },
  defib1: { topicSlug: 'mcat-physics-electricity-rc-circuits-mcat', clip: 7, campaign: 'mcat-circuits4' },
  defib2: { topicSlug: 'mcat-physics-electricity-rc-circuits-mcat', clip: 8, campaign: 'mcat-circuits4' },
  // MCAT · Fluids Part 1: Density & Pressure (Fluids at Rest clips 1–8)
  density1: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 1, campaign: 'mcat-fluids1' },
  density2: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 2, campaign: 'mcat-fluids1' },
  depth1: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 3, campaign: 'mcat-fluids1' },
  depth2: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 4, campaign: 'mcat-fluids1' },
  gauge1: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 5, campaign: 'mcat-fluids1' },
  gauge2: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 6, campaign: 'mcat-fluids1' },
  pascal1: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 7, campaign: 'mcat-fluids1' },
  pascal2: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 8, campaign: 'mcat-fluids1' },
  // MCAT · Fluids Part 2: Buoyancy & Surface Tension (Fluids at Rest clips 9–16)
  buoy1: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 9, campaign: 'mcat-fluids2' },
  buoy2: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 10, campaign: 'mcat-fluids2' },
  float1: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 11, campaign: 'mcat-fluids2' },
  float2: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 12, campaign: 'mcat-fluids2' },
  sink1: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 13, campaign: 'mcat-fluids2' },
  sink2: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 14, campaign: 'mcat-fluids2' },
  surface1: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 15, campaign: 'mcat-fluids2' },
  surface2: { topicSlug: 'mcat-physics-mechanics-fluids-mcat', clip: 16, campaign: 'mcat-fluids2' },
  // MCAT · Fluids Part 3: Continuity & Bernoulli (Fluids in Motion clips 1–8)
  flow1: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 1, campaign: 'mcat-fluids3' },
  flow2: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 2, campaign: 'mcat-fluids3' },
  bernoulli1: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 3, campaign: 'mcat-fluids3' },
  bernoulli2: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 4, campaign: 'mcat-fluids3' },
  tank1: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 5, campaign: 'mcat-fluids3' },
  tank2: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 6, campaign: 'mcat-fluids3' },
  venturi1: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 7, campaign: 'mcat-fluids3' },
  venturi2: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 8, campaign: 'mcat-fluids3' },
  // MCAT · Fluids Part 4: Viscosity & Blood Flow (Fluids in Motion clips 9–16)
  viscous1: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 9, campaign: 'mcat-fluids4' },
  viscous2: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 10, campaign: 'mcat-fluids4' },
  pipe1: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 11, campaign: 'mcat-fluids4' },
  pipe2: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 12, campaign: 'mcat-fluids4' },
  blood1: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 13, campaign: 'mcat-fluids4' },
  blood2: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 14, campaign: 'mcat-fluids4' },
  stenosis1: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 15, campaign: 'mcat-fluids4' },
  stenosis2: { topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat', clip: 16, campaign: 'mcat-fluids4' },
}

export function lookupShortLink(code: string): (VideoShortLink & { code: string }) | null {
  const key = code.trim().toLowerCase()
  const row = Object.prototype.hasOwnProperty.call(VIDEO_SHORT_LINKS, key) ? VIDEO_SHORT_LINKS[key] : undefined
  return row ? { ...row, code: key } : null
}

/**
 * Where a short link sends a visitor: the clip's three questions from its
 * recording plan (/v/<code>/questions), whether or not the topic's video
 * lesson is published. A YouTube viewer has just watched the WHOLE video, and
 * the website lesson is cut into sections with a question after each, so
 * there is no single "clip N" step to land on; the questions page offers the
 * section-by-section lesson once one exists. `_instructorSlugs` is kept for
 * callers that already resolved them.
 */
export function shortLinkDestination(link: VideoShortLink & { code: string }, _instructorSlugs: readonly string[] = []): string {
  const utm = new URLSearchParams({ utm_source: 'youtube', utm_medium: 'video', utm_campaign: link.campaign, utm_content: link.code })
  return `/v/${encodeURIComponent(link.code)}/questions?${utm}`
}
