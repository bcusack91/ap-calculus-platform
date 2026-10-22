/**
 * Diagnostic topic slugs that are not production topics, mapped to the
 * production topic whose lesson teaches the same content.
 *
 * Phase 2 (Oct 2026) audit: AP diagnostics draw items from exit-quiz pools,
 * and some pools still tag items with legacy slugs that have no Topic row
 * (AP Biology `ap-bio-*` unit slugs, AP Physics 2 pre-2024 unit slugs, AP
 * Physics C sub-slugs) or with lesson keys that only exist as registry suites
 * (`implicit-differentiation-calcab`). A missed item recommended
 * `/topics/<slug>`, which 404s, and plan-status could never clear it.
 *
 * Two layers:
 *  - `AP_LEGACY_TOPIC_SLUGS` (per course, legacy slug -> production slug) is
 *    applied when diagnostics are generated AND whenever stored results are
 *    read, so attempts saved before the fix point at real topics too.
 *  - Per-item exceptions live next to each diagnostic generator (keyed by
 *    `diagnosticItemKey`), for items whose legacy slug spans several lessons.
 *
 * Maps are scoped by course: the same legacy slug can be a real topic in
 * another course (Physics 2's old `atomic-structure` vs. chemistry). Every
 * target must be a production lesson topic; tests/lib/ap-diagnostic-
 * recommendations.test.ts checks them against tests/fixtures/ap-lesson-topic-slugs.json.
 * Pure (no database access) so the client-side generators can import it.
 */

import { courseForCategory } from '@/lib/class-plan-config'
import { coursesIn } from '@/lib/course-includes'

export const AP_LEGACY_TOPIC_SLUGS: Record<string, Record<string, string>> = {
  'ap-biology': {
    'ap-bio-animal-behavior': 'natural-selection',
    'ap-bio-biodiversity': 'community-ecology',
    'ap-bio-biogeochemical-cycles': 'ecosystems-energy',
    'ap-bio-biotechnology': 'gene-regulation',
    'ap-bio-cell-communication': 'cell-signaling',
    'ap-bio-cell-cycle-mitosis': 'cell-cycle-mitosis',
    'ap-bio-cell-structure-function': 'cell-organelles',
    'ap-bio-cellular-energetics': 'cellular-respiration',
    'ap-bio-chemistry-of-life': 'water-properties',
    'ap-bio-chromosomal-inheritance': 'chromosomal-inheritance',
    'ap-bio-dna-technology': 'dna-replication',
    'ap-bio-ecology-energy-flow': 'ecosystems-energy',
    'ap-bio-ecology-interactions': 'community-ecology',
    'ap-bio-endocrine-system': 'cell-signaling',
    'ap-bio-evolution-evidence': 'phylogeny-classification',
    'ap-bio-experimental-design': 'mendelian-genetics',
    'ap-bio-gene-regulation': 'gene-regulation',
    'ap-bio-hardy-weinberg': 'natural-selection',
    'ap-bio-immune-system': 'cell-signaling',
    'ap-bio-meiosis': 'meiosis',
    'ap-bio-membrane-transport': 'cell-membrane-transport',
    'ap-bio-mendelian-genetics': 'mendelian-genetics',
    'ap-bio-molecular-genetics': 'transcription-rna-processing',
    'ap-bio-natural-selection': 'natural-selection',
    'ap-bio-nervous-system': 'cell-signaling',
    'ap-bio-origins-of-life': 'phylogeny-classification',
    'ap-bio-photosynthesis': 'photosynthesis',
    'ap-bio-phylogenetics': 'phylogeny-classification',
    'ap-bio-plant-structure': 'water-properties',
    'ap-bio-population-ecology': 'population-ecology',
    'ap-bio-viral-biology': 'transcription-rna-processing',
  },
  'ap-calculus-ab': {
    'concavity-inflection-points-calcab': 'second-derivative-test',
    'continuity-ivt-calcab': 'continuity-introduction',
    'derivatives-exp-log-calcab': 'derivatives-of-exponential-functions',
    'implicit-differentiation-calcab': 'implicit-differentiation',
    'limits-at-infinity-calcab': 'limits-at-infinity',
    'related-rates-calcab': 'related-rates',
  },
  // ap-calculus-bc has no map of its own: it includes AP Calculus AB
  // (src/lib/course-includes.ts), so AB's map applies (legacySlugMap).
  'ap-physics-2': {
    'atomic-structure': 'photons-atomic-nuclear',
    'capacitance': 'electric-fields-potential',
    'dc-circuits': 'current-resistance-ohms-law',
    'electric-charge-and-force': 'electric-charge-coulombs-law',
    'electric-fields': 'electric-fields-potential',
    'electric-potential': 'electric-fields-potential',
    'geometric-optics': 'reflection-refraction',
    'kinetic-theory': 'temperature-thermal-expansion',
    'magnetic-fields': 'magnetic-fields-forces',
    'nuclear-physics': 'photons-atomic-nuclear',
    'physical-optics': 'interference-diffraction',
    'quantum-mechanics': 'photons-atomic-nuclear',
    'rc-circuits': 'kirchhoffs-laws',
    'sound-waves': 'interference-diffraction',
    'standing-waves': 'interference-diffraction',
    'temperature-and-heat': 'heat-specific-heat',
    'thermodynamic-laws': 'laws-of-thermodynamics',
    'wave-optics': 'interference-diffraction',
    'wave-properties': 'interference-diffraction',
  },
  'ap-physics-c-em': {
    'physics-c-capacitors': 'physics-c-capacitors-dielectrics',
    'physics-c-conductors-equilibrium': 'physics-c-gauss-law',
    'physics-c-coulomb-law': 'physics-c-electric-field-coulomb',
    'physics-c-dielectrics': 'physics-c-capacitors-dielectrics',
    'physics-c-electric-fields': 'physics-c-electric-field-coulomb',
    'physics-c-energy-density': 'physics-c-capacitors-dielectrics',
    'physics-c-faraday-induction': 'physics-c-faraday-lenz',
    'physics-c-inductance-rl': 'physics-c-inductance-rl-circuits',
    'physics-c-potential-energy': 'physics-c-electric-potential',
    'physics-c-power-circuits': 'physics-c-dc-circuits',
  },
  'ap-physics-c-mechanics': {
    'physics-c-1d-kinematics': 'physics-c-position-velocity-acceleration',
    'physics-c-2d-kinematics': 'physics-c-position-velocity-acceleration',
    'physics-c-potential-energy-curves': 'physics-c-conservative-forces',
    'physics-c-variable-mass': 'physics-c-momentum-collisions',
  },
}

/** Display names (production Topic titles) for every mapping target. */
export const AP_CANONICAL_TOPIC_NAMES: Record<string, string> = {
  'carbohydrates': 'Carbohydrates',
  'cell-cycle-mitosis': 'Cell Cycle and Mitosis',
  'cell-membrane-transport': 'Cell Membrane and Transport',
  'cell-organelles': 'Cell Organelles',
  'cell-signaling': 'Cell Signaling and Signal Transduction',
  'cellular-respiration': 'Cellular Respiration',
  'chromosomal-inheritance': 'Chromosomal Basis of Inheritance',
  'community-ecology': 'Community Ecology and Interactions',
  'continuity-introduction': 'What is Continuity?',
  'current-resistance-ohms-law': "Current, Resistance, and Ohm's Law",
  'derivatives-of-exponential-functions': 'Derivatives of Exponential Functions',
  'dna-replication': 'DNA Structure and Replication',
  'ecosystems-energy': 'Ecosystems and Energy Flow',
  'electric-charge-coulombs-law': "Electric Charge and Coulomb's Law",
  'electric-fields-potential': 'Electric Fields and Electric Potential',
  'enzyme-kinetics': 'Enzyme Kinetics',
  'gene-regulation': 'Gene Regulation',
  'heat-specific-heat': 'Heat and Specific Heat',
  'implicit-differentiation': 'Implicit Differentiation',
  'interference-diffraction': 'Interference and Diffraction',
  'kirchhoffs-laws': "Kirchhoff's Laws",
  'laws-of-thermodynamics': 'Laws of Thermodynamics',
  'lenses': 'Lenses',
  'limits-at-infinity': 'Limits at Infinity',
  'lipids': 'Lipids',
  'magnetic-fields-forces': 'Magnetic Fields and Forces',
  'meiosis': 'Meiosis and Sexual Reproduction',
  'mendelian-genetics': 'Mendelian Genetics',
  'natural-selection': 'Natural Selection and Evolution',
  'non-mendelian-genetics': 'Non-Mendelian Inheritance',
  'nucleic-acids': 'Nucleic Acids',
  'photons-atomic-nuclear': 'Photons and Atomic Physics',
  'photosynthesis': 'Photosynthesis',
  'phylogeny-classification': 'Phylogeny and Classification',
  'physics-c-capacitors-dielectrics': 'Capacitors and Dielectrics',
  'physics-c-circular-motion': 'Circular Motion and Polar Coordinates',
  'physics-c-conservative-forces': 'Conservative Forces and Potential Energy',
  'physics-c-dc-circuits': 'Current, Resistance, and DC Circuits',
  'physics-c-electric-field-coulomb': "Electric Field and Coulomb's Law",
  'physics-c-electric-potential': 'Electric Potential',
  'physics-c-faraday-lenz': "Faraday's Law and Lenz's Law",
  'physics-c-gauss-law': "Gauss's Law",
  'physics-c-inductance-rl-circuits': 'Inductance and RL Circuits',
  'physics-c-maxwell-equations': "Maxwell's Equations",
  'physics-c-momentum-collisions': 'Momentum and Collisions',
  'physics-c-position-velocity-acceleration': 'Position, Velocity, and Acceleration',
  'physics-c-variable-acceleration': 'Motion with Variable Acceleration',
  'population-ecology': 'Population Ecology',
  'prokaryotic-eukaryotic-cells': 'Prokaryotic vs. Eukaryotic Cells',
  'proteins': 'Proteins',
  'reflection-refraction': 'Reflection and Refraction',
  'related-rates': 'Related Rates',
  'second-derivative-test': 'The Second Derivative Test',
  'series-parallel-circuits': 'Series and Parallel Circuits',
  'speciation': 'Speciation',
  'temperature-thermal-expansion': 'Temperature and Thermal Expansion',
  'transcription-rna-processing': 'Transcription and RNA Processing',
  'translation': 'Translation and Protein Synthesis',
  'water-properties': 'Water and Its Properties',
}

/**
 * A course's legacy slug map, merged with the maps of the courses it includes
 * (AP Calculus BC uses AP Calculus AB's). Undefined when none applies.
 */
export function legacySlugMap(courseSlug: string | null | undefined): Record<string, string> | undefined {
  if (!courseSlug) return undefined
  const maps = coursesIn(courseSlug)
    .map((c) => AP_LEGACY_TOPIC_SLUGS[c])
    .filter((m): m is Record<string, string> => Boolean(m))
  if (maps.length === 0) return undefined
  return maps.length === 1 ? maps[0] : Object.assign({}, ...maps.slice().reverse())
}

/** Production slug for a diagnostic topic slug in an AP course (unchanged when it already is one). */
export function canonicalApTopicSlug(courseSlug: string | null | undefined, slug: string): string {
  return legacySlugMap(courseSlug)?.[slug] ?? slug
}

/**
 * A stable key for a diagnostic item, from its stem alone (FNV-1a over the
 * whitespace-normalized, lower-cased question). Used for per-item topic
 * exceptions; content-addressed, so an edited stem falls back to the slug map.
 */
export function diagnosticItemKey(question: string): string {
  const text = question.replace(/\s+/g, ' ').trim().toLowerCase()
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h.toString(16).padStart(8, '0')
}

/**
 * The topic a diagnostic item recommends: its per-item exception when it has
 * one (null = the item is not served), else its slug through the course map.
 */
export function diagnosticItemTopic(
  courseSlug: string,
  item: { question: string; topicSlug: string },
  exceptions: Record<string, string | null>,
): string | null {
  const key = diagnosticItemKey(item.question)
  if (Object.prototype.hasOwnProperty.call(exceptions, key)) return exceptions[key]
  return canonicalApTopicSlug(courseSlug, item.topicSlug)
}

/**
 * Items tagged by diagnosticItemTopic that the diagnostic serves. Generators
 * keep dropped (null) items in the seeded shuffle and skip them at selection,
 * so dropping an item only changes the slot it held on each form.
 */
export function isServedItem<T extends { topicSlug: string | null }>(q: T): q is T & { topicSlug: string } {
  return q.topicSlug !== null
}

type Recommended = { slug: string; name?: string }

/**
 * Stored or freshly scored recommendations with every slug canonicalized:
 * a remapped topic takes its production name, and two legacy slugs that land
 * on the same topic collapse into the first (higher-priority) entry.
 */
export function canonicalizeRecommendedTopics<T extends Recommended>(courseSlug: string | null | undefined, topics: T[]): T[] {
  const map = legacySlugMap(courseSlug)
  if (!map) return topics
  const seen = new Set<string>()
  const out: T[] = []
  for (const t of topics) {
    const slug = map[t.slug] ?? t.slug
    if (seen.has(slug)) continue
    seen.add(slug)
    out.push(slug === t.slug ? t : { ...t, slug, name: AP_CANONICAL_TOPIC_NAMES[slug] ?? t.name })
  }
  return out
}

/** The AP course slug a DiagnosticTest.category belongs to, or null. */
export function diagnosticCourseSlug(category: string | null | undefined): string | null {
  if (!category) return null
  return courseForCategory(category)?.courseSlug ?? null
}

/**
 * A stored DiagnosticTest.results object with its recommendations (and the
 * per-question topic tags of its stored review) canonicalized for the
 * attempt's course. Returns the input unchanged when nothing maps, so it is
 * safe on every course and every results shape.
 */
export function canonicalizeDiagnosticResults<R>(category: string | null | undefined, results: R): R {
  const course = diagnosticCourseSlug(category)
  const map = legacySlugMap(course)
  if (!map || !results || typeof results !== 'object' || Array.isArray(results)) return results
  const r = results as Record<string, unknown>
  let changed = false
  const next: Record<string, unknown> = { ...r }
  if (Array.isArray(r.recommendedTopics)) {
    const valid = r.recommendedTopics.filter(
      (t): t is Recommended => !!t && typeof t === 'object' && typeof (t as Recommended).slug === 'string',
    )
    if (valid.some((t) => map[t.slug])) {
      next.recommendedTopics = canonicalizeRecommendedTopics(course, valid)
      changed = true
    }
  }
  const review = r.review && typeof r.review === 'object' && !Array.isArray(r.review) ? (r.review as Record<string, unknown>) : null
  if (review && Array.isArray(review.questions) && review.questions.some((q) => !!q && typeof q === 'object' && map[(q as { topicSlug?: string }).topicSlug ?? ''])) {
    next.review = {
      ...review,
      questions: review.questions.map((q) => {
        const slug = q && typeof q === 'object' ? (q as { topicSlug?: unknown }).topicSlug : undefined
        return typeof slug === 'string' && map[slug] ? { ...(q as object), topicSlug: map[slug] } : q
      }),
    }
    changed = true
  }
  return (changed ? next : results) as R
}
