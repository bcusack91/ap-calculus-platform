/**
 * MCAT topics that were split into several lessons (Nov 2026: one live-class
 * session per lesson). The old slug's Topic row is retired, but its history
 * stays: exit-quiz attempts and in-class deck attendance on the old slug
 * count for EVERY successor (owner ruling: a student who mastered the old
 * topic gets credit for both halves), and stored diagnostic recommendations
 * of the old slug point at the first successor.
 *
 * The old exit-quiz loader stays registered so past attempts still resolve
 * (question ids are `${slug}#hash`); it is hidden from browsing instead.
 * Pure (no database access).
 */

export const MCAT_SPLIT_TOPICS: Record<string, readonly string[]> = {
  // Successors in course order. Split twice (Nov 2026): first into two
  // lessons each, then into one topic per 90-minute class.
  'mcat-physics-electricity-circuits-mcat': [
    'mcat-physics-electricity-dc-circuits-mcat',
    'mcat-physics-electricity-kirchhoff-power-mcat',
    'mcat-physics-electricity-emf-capacitors-mcat',
    'mcat-physics-electricity-rc-circuits-mcat',
  ],
  'mcat-physics-mechanics-fluids-waves-mcat': [
    'mcat-physics-mechanics-fluids-mcat',
    'mcat-physics-mechanics-fluid-dynamics-mcat',
    'mcat-physics-waves-interference-mcat',
    'mcat-physics-waves-sound-mcat',
  ],
}

/**
 * Live topics split in two by lesson part (Nov 2026, one topic per 90-minute
 * class). Unlike MCAT_SPLIT_TOPICS no slug is retired: `keep` keeps the first
 * lesson parts (its rows, cards, progress and URLs stay) and `add` is a new
 * topic for the later parts, placed right after it. prisma/split-mcat-topics.ts
 * creates `add`, moves its cards and copies MASTERED / COMPLETED progress
 * earned on the whole topic before the split. One entry per split; append to
 * add another.
 */
export const MCAT_PART_SPLITS: readonly { keep: string; add: string }[] = [
  { keep: 'mcat-general-chemistry-atomic-structure-mcat', add: 'mcat-general-chemistry-spectra-nuclear-mcat' },
  { keep: 'mcat-general-chemistry-stoichiometry-mcat', add: 'mcat-general-chemistry-solutions-gases-mcat' },
  { keep: 'mcat-general-chemistry-kinetics-mcat', add: 'mcat-general-chemistry-energy-mechanisms-mcat' },
  { keep: 'mcat-general-chemistry-acid-base-equilibrium-mcat', add: 'mcat-general-chemistry-titrations-equilibrium-mcat' },
  { keep: 'mcat-lab-methods-mcat', add: 'mcat-lab-methods-spectroscopy-assays-mcat' },
  { keep: 'mcat-microbiology-genetics-mcat', add: 'mcat-microbiology-genetics-regulation-mcat' },
  { keep: 'mcat-anatomy-physiology-embryology-mcat', add: 'mcat-anatomy-physiology-organogenesis-mcat' },
  { keep: 'mcat-sociology-groups-interaction-mcat', add: 'mcat-sociology-interaction-organizations-mcat' },
]

/** Topic titles of the successors (and of both halves of each part split). */
export const MCAT_SPLIT_TITLES: Record<string, string> = {
  'mcat-physics-electricity-dc-circuits-mcat': 'Circuits Part 1: Current & Resistance',
  'mcat-physics-electricity-kirchhoff-power-mcat': "Circuits Part 2: Kirchhoff's Rules & Power",
  'mcat-physics-electricity-emf-capacitors-mcat': 'Circuits Part 3: EMF & Capacitance',
  'mcat-physics-electricity-rc-circuits-mcat': 'Circuits Part 4: Capacitor Networks & Bioelectricity',
  'mcat-physics-mechanics-fluids-mcat': 'Fluids at Rest',
  'mcat-physics-mechanics-fluid-dynamics-mcat': 'Fluids in Motion',
  'mcat-physics-waves-interference-mcat': 'Waves & Interference',
  'mcat-physics-waves-sound-mcat': 'Sound, Doppler & Ultrasound',
  'mcat-general-chemistry-atomic-structure-mcat': 'Atomic Structure & Periodic Trends',
  'mcat-general-chemistry-spectra-nuclear-mcat': 'Atomic Spectra & Nuclear Chemistry',
  'mcat-general-chemistry-stoichiometry-mcat': 'Stoichiometry: Moles & Reactions',
  'mcat-general-chemistry-solutions-gases-mcat': 'Solutions, Gases & Electrolysis',
  'mcat-general-chemistry-kinetics-mcat': 'Kinetics: Rate Laws & Half-Lives',
  'mcat-general-chemistry-energy-mechanisms-mcat': 'Kinetics: Energy, Catalysis & Mechanisms',
  'mcat-general-chemistry-acid-base-equilibrium-mcat': 'Acids, Bases & Buffers',
  'mcat-general-chemistry-titrations-equilibrium-mcat': 'Titrations, Equilibrium & Solubility',
  'mcat-lab-methods-mcat': 'Lab Methods: Separations & Electrophoresis',
  'mcat-lab-methods-spectroscopy-assays-mcat': 'Lab Methods: Centrifugation, Spectroscopy & Assays',
  'mcat-microbiology-genetics-mcat': 'Bacterial Genetics & Gene Transfer',
  'mcat-microbiology-genetics-regulation-mcat': 'Mobile Elements, Gene Regulation & Viral Genetics',
  'mcat-anatomy-physiology-embryology-mcat': 'Early Embryology: Fertilization to Germ Layers',
  'mcat-anatomy-physiology-organogenesis-mcat': 'Organogenesis, Fetal Circulation & Developmental Mechanisms',
  'mcat-sociology-groups-interaction-mcat': 'Groups, Roles & Social Influence',
  'mcat-sociology-interaction-organizations-mcat': 'Social Interaction, Organizations & Discrimination',
}

/** True for a retired pre-split slug. */
export function isSplitMcatTopic(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(MCAT_SPLIT_TOPICS, slug)
}

/** The lesson that replaces a retired slug for links and recommendations; the slug itself otherwise. */
export function mcatSuccessorSlug(slug: string): string {
  return MCAT_SPLIT_TOPICS[slug]?.[0] ?? slug
}

/** Retired slugs whose attempts and attendance count toward `slug`. */
export function mcatPredecessorSlugs(slug: string): string[] {
  return Object.entries(MCAT_SPLIT_TOPICS)
    .filter(([, successors]) => successors.includes(slug))
    .map(([old]) => old)
}

/** `slug` plus every retired slug that counts toward it. */
export function mcatCreditSlugs(slug: string): string[] {
  return [slug, ...mcatPredecessorSlugs(slug)]
}
