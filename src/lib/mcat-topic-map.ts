/**
 * MCAT curriculum ↔ competitive bank slug alignment.
 *
 * Two independent slug vocabularies exist and cannot be merged:
 *   - DB `Topic.slug` — 101 curriculum topics (lessons, flashcards, exit
 *     quizzes). Organized for STUDYING: fine-grained, one lesson each.
 *   - MCAT competitive bank subtopic slugs — 55 subtopics in
 *     `src/data/competitive-questions/mcat-bank.ts`. Organized for PLAYING:
 *     each must hold >= 40 questions to fill a match, so several curriculum
 *     topics collapse into one playable subtopic.
 *
 * Renaming either side would break existing progress rows, assignments, and
 * saved match history, so instead this map translates between them. It is used
 * by assignment auto-completion: a teacher who assigns the curriculum topic
 * "Reproductive System" (`mcat-anatomy-physiology-reproductive-mcat`) must have
 * that assignment satisfied when the student plays the bank subtopic
 * `mcat-organ-systems-reproductive-mcat`.
 *
 * Mapping is many-to-many and intentionally directional (curriculum → bank).
 * A curriculum topic maps to every bank subtopic whose question pool covers it.
 *
 * NOT mapped (deliberate): `mcat-test-day-strategy-*` curriculum topics are
 * logistics/scheduling content with no factual question pool — there is no bank
 * subtopic that could satisfy them, and inventing one would let unrelated play
 * complete the assignment.
 */

/** Curriculum (DB Topic.slug) → competitive bank subtopic slug(s). */
const CURRICULUM_TO_BANK: Record<string, string[]> = {
  // ---- Anatomy & Physiology (curriculum) → Organ Systems (bank) ----
  'mcat-anatomy-physiology-mcat': ['mcat-organ-systems-cardio-resp-mcat', 'mcat-organ-systems-digestive-renal-mcat', 'mcat-organ-systems-immune-musculoskeletal-mcat'],
  'mcat-anatomy-physiology-embryology-mcat': ['mcat-organ-systems-embryology-mcat'],
  'mcat-anatomy-physiology-reproductive-mcat': ['mcat-organ-systems-reproductive-mcat'],
  'mcat-anatomy-physiology-musculoskeletal-mcat': ['mcat-organ-systems-immune-musculoskeletal-mcat'],
  'mcat-anatomy-physiology-sensory-mcat': ['mcat-psych-sensation-perception-mcat', 'mcat-organ-systems-nervous-mcat'],

  // ---- Biochemistry (slugs already align, listed for completeness) ----
  'mcat-biochemistry-amino-acids-proteins-mcat': ['mcat-biochemistry-amino-acids-proteins-mcat'],
  'mcat-biochemistry-enzymes-kinetics-mcat': ['mcat-biochemistry-enzymes-kinetics-mcat'],
  'mcat-biochemistry-carbohydrate-metabolism-mcat': ['mcat-biochemistry-carbohydrate-metabolism-mcat'],
  'mcat-biochemistry-lipid-metabolism-mcat': ['mcat-biochemistry-lipid-metabolism-mcat'],
  'mcat-biochemistry-bioenergetics-mcat': ['mcat-biochemistry-bioenergetics-mcat'],
  'mcat-biochemistry-foundations-mcat': ['mcat-biochemistry-amino-acids-proteins-mcat'],

  // ---- Cell & molecular biology ----
  'mcat-cell-biology-mcat': ['mcat-biology-cell-structure-mcat'],
  'mcat-cell-biology-organelles-mcat': ['mcat-biology-cell-structure-mcat'],
  'mcat-cell-biology-membrane-transport-mcat': ['mcat-biology-cell-structure-mcat'],
  'mcat-cell-biology-signaling-mcat': ['mcat-biology-cell-structure-mcat'],
  'mcat-cell-biology-cell-cycle-mcat': ['mcat-biology-cell-cycle-mcat'],
  'mcat-molecular-biology-mcat': ['mcat-biology-molecular-biology-mcat'],
  'mcat-molecular-biology-dna-replication-mcat': ['mcat-biology-molecular-biology-mcat'],
  'mcat-molecular-biology-transcription-mcat': ['mcat-biology-molecular-biology-mcat'],
  'mcat-molecular-biology-translation-mcat': ['mcat-biology-molecular-biology-mcat'],
  'mcat-molecular-biology-biotechnology-mcat': ['mcat-biology-molecular-biology-mcat', 'mcat-genetics-molecular-mcat'],

  // ---- Microbiology (5 curriculum topics → 1 bank subtopic) ----
  'mcat-microbiology-mcat': ['mcat-biology-microbiology-mcat'],
  'mcat-microbiology-bacteria-mcat': ['mcat-biology-microbiology-mcat'],
  'mcat-microbiology-viruses-mcat': ['mcat-biology-microbiology-mcat'],
  'mcat-microbiology-genetics-mcat': ['mcat-biology-microbiology-mcat'],
  'mcat-microbiology-antimicrobials-mcat': ['mcat-biology-microbiology-mcat'],

  // ---- Genetics & evolution ----
  'mcat-genetics-evolution-mcat': ['mcat-genetics-evolution-mcat'],
  'mcat-genetics-evolution-mendelian-mcat': ['mcat-genetics-mendelian-mcat'],
  'mcat-genetics-evolution-natural-selection-mcat': ['mcat-genetics-evolution-mcat'],
  'mcat-genetics-evolution-population-genetics-mcat': ['mcat-genetics-evolution-mcat'],
  'mcat-genetics-evolution-immunology-mcat': ['mcat-organ-systems-immune-musculoskeletal-mcat'],

  // ---- Organ systems (curriculum splits differ from bank groupings) ----
  'mcat-organ-systems-mcat': ['mcat-organ-systems-cardio-resp-mcat'],
  'mcat-organ-systems-cardiovascular-mcat': ['mcat-organ-systems-cardio-resp-mcat'],
  'mcat-organ-systems-respiratory-mcat': ['mcat-organ-systems-cardio-resp-mcat'],
  'mcat-organ-systems-renal-mcat': ['mcat-organ-systems-digestive-renal-mcat'],
  'mcat-organ-systems-endocrine-nervous-mcat': ['mcat-organ-systems-endocrine-mcat', 'mcat-organ-systems-nervous-mcat'],
  // AAMC files consciousness/sleep under the biological bases of behavior (6B),
  // which is where the curriculum covers it — there is no separate DB topic.
  'mcat-biological-basis-behavior-mcat': ['mcat-organ-systems-nervous-mcat', 'mcat-psych-consciousness-sleep-mcat'],

  // ---- General chemistry (aligned; parent topic points at its first child) ----
  'mcat-general-chemistry-mcat': ['mcat-general-chemistry-stoichiometry-mcat'],
  'mcat-general-chemistry-atomic-structure-mcat': ['mcat-general-chemistry-atomic-structure-mcat'],
  'mcat-general-chemistry-stoichiometry-mcat': ['mcat-general-chemistry-stoichiometry-mcat'],
  'mcat-general-chemistry-thermodynamics-mcat': ['mcat-general-chemistry-thermodynamics-mcat'],
  'mcat-general-chemistry-kinetics-mcat': ['mcat-general-chemistry-kinetics-mcat'],
  'mcat-general-chemistry-acid-base-equilibrium-mcat': ['mcat-general-chemistry-acid-base-equilibrium-mcat', 'mcat-general-chemistry-solubility-ions-mcat'],

  // ---- Organic chemistry ----
  'mcat-organic-chemistry-mcat': ['mcat-organic-chemistry-functional-groups-mcat'],
  'mcat-organic-chemistry-functional-groups-mcat': ['mcat-organic-chemistry-functional-groups-mcat'],
  'mcat-organic-chemistry-stereochemistry-mcat': ['mcat-organic-chemistry-stereochemistry-mcat'],
  'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat': ['mcat-organic-chemistry-sn1-sn2-e1-e2-mcat'],
  'mcat-organic-chemistry-carbonyls-mcat': ['mcat-organic-chemistry-carbonyls-mcat'],
  'mcat-organic-chemistry-spectroscopy-mcat': ['mcat-organic-chemistry-spectroscopy-mcat'],

  // ---- Physics ----
  'mcat-physics-mechanics-mcat': ['mcat-physics-mechanics-kinematics-mcat'],
  'mcat-physics-mechanics-kinematics-mcat': ['mcat-physics-mechanics-kinematics-mcat'],
  'mcat-physics-mechanics-forces-newton-laws-mcat': ['mcat-physics-mechanics-forces-newton-laws-mcat'],
  'mcat-physics-mechanics-work-energy-power-mcat': ['mcat-physics-mechanics-work-energy-power-mcat'],
  'mcat-physics-mechanics-momentum-collisions-mcat': ['mcat-physics-mechanics-momentum-collisions-mcat'],
  // The bank split the combined fluids-waves subtopic into two (AAMC 4B/4D);
  // playing either satisfies the combined curriculum topic.
  'mcat-physics-mechanics-fluids-waves-mcat': ['mcat-physics-mechanics-fluids-mcat', 'mcat-physics-waves-sound-mcat'],
  'mcat-physics-electricity-mcat': ['mcat-physics-electricity-electrostatics-mcat'],
  'mcat-physics-electricity-electrostatics-mcat': ['mcat-physics-electricity-electrostatics-mcat'],
  'mcat-physics-electricity-circuits-mcat': ['mcat-physics-electricity-circuits-mcat'],
  'mcat-physics-electricity-magnetism-mcat': ['mcat-physics-electricity-magnetism-mcat'],
  'mcat-physics-electricity-optics-mcat': ['mcat-physics-electricity-optics-mcat'],
  'mcat-physics-electricity-electrochemistry-mcat': ['mcat-physics-electricity-electrochemistry-mcat'],

  // ---- Lab technique & data analysis ----
  'mcat-lab-methods-mcat': ['mcat-lab-separations-mcat'],
  'mcat-research-methods-mcat': ['mcat-research-methods-biostats-mcat'],
  'mcat-biostatistics-mcat': ['mcat-research-methods-biostats-mcat'],
  'mcat-quantitative-skills-mcat': ['mcat-research-methods-biostats-mcat'],
  'mcat-science-passage-strategy-mcat': ['mcat-research-methods-biostats-mcat'],
  'mcat-science-passage-strategy-experimental-design-mcat': ['mcat-research-methods-biostats-mcat'],
  'mcat-science-passage-strategy-figures-mcat': ['mcat-research-methods-biostats-mcat'],
  'mcat-science-passage-strategy-reading-mcat': ['mcat-research-methods-biostats-mcat'],
  'mcat-science-passage-strategy-discrete-questions-mcat': ['mcat-research-methods-biostats-mcat'],

  // ---- Psychology ----
  'mcat-psychology-behavior-mcat': ['mcat-psych-learning-memory-mcat'],
  'mcat-psychology-behavior-sensation-perception-mcat': ['mcat-psych-sensation-perception-mcat'],
  'mcat-psychology-behavior-learning-memory-mcat': ['mcat-psych-learning-memory-mcat'],
  'mcat-psychology-behavior-cognition-language-mcat': ['mcat-psych-cognition-language-mcat'],
  'mcat-psychology-behavior-development-mcat': ['mcat-psych-motivation-emotion-personality-mcat', 'mcat-psych-identity-self-concept-mcat'],
  'mcat-social-psychology-mcat': ['mcat-psych-social-psychology-mcat'],
  'mcat-psychology-behavior-disorders-mcat': ['mcat-psych-disorders-mcat'],

  // ---- Sociology ----
  'mcat-sociology-mcat': ['mcat-psych-sociology-social-structure-mcat'],
  'mcat-sociology-structure-stratification-mcat': ['mcat-psych-sociology-social-structure-mcat', 'mcat-psych-social-inequality-mcat'],
  'mcat-sociology-groups-interaction-mcat': ['mcat-psych-social-psychology-mcat'],
  'mcat-sociology-culture-socialization-mcat': ['mcat-psych-identity-self-concept-mcat', 'mcat-psych-demographics-social-change-mcat'],
  'mcat-sociology-health-disparities-mcat': ['mcat-psych-social-inequality-mcat'],

  // ---- CARS (13 curriculum topics → the 3 AAMC CARS skills) ----
  'mcat-cars-strategy-mcat': ['mcat-cars-foundations-comprehension-mcat'],
  'mcat-cars-strategy-active-reading-mcat': ['mcat-cars-foundations-comprehension-mcat'],
  'mcat-cars-strategy-main-idea-inference-mcat': ['mcat-cars-foundations-comprehension-mcat'],
  'mcat-cars-strategy-elimination-mcat': ['mcat-cars-reasoning-within-text-mcat'],
  'mcat-cars-strategy-timing-mcat': ['mcat-cars-foundations-comprehension-mcat'],
  'mcat-cars-passages-mcat': ['mcat-cars-foundations-comprehension-mcat'],
  'mcat-cars-passages-humanities-mcat': ['mcat-cars-foundations-comprehension-mcat'],
  'mcat-cars-passages-social-science-mcat': ['mcat-cars-foundations-comprehension-mcat'],
  'mcat-cars-passages-ethics-mcat': ['mcat-cars-reasoning-beyond-text-mcat'],
  'mcat-cars-passages-comparative-mcat': ['mcat-cars-reasoning-beyond-text-mcat'],
  'mcat-cars-reasoning-mcat': ['mcat-cars-reasoning-within-text-mcat'],
  'mcat-cars-reasoning-argument-structure-mcat': ['mcat-cars-reasoning-within-text-mcat'],
  'mcat-cars-reasoning-assumptions-mcat': ['mcat-cars-reasoning-within-text-mcat'],
  'mcat-cars-reasoning-fallacies-mcat': ['mcat-cars-reasoning-within-text-mcat'],
  'mcat-cars-reasoning-strengthen-weaken-mcat': ['mcat-cars-reasoning-beyond-text-mcat'],
}

/** True for any slug in either MCAT vocabulary. */
export function isMcatTopicSlug(slug: string): boolean {
  return slug.startsWith('mcat-')
}

/**
 * Bank subtopic slugs that satisfy a curriculum topic. Returns the slug itself
 * for topics whose two vocabularies already agree, and `[]` for non-MCAT slugs
 * or curriculum topics with no playable equivalent (test-day logistics).
 */
export function bankSlugsForCurriculumTopic(slug: string): string[] {
  return CURRICULUM_TO_BANK[slug] ?? []
}

/**
 * Does playing `playedBankSlugs` cover the curriculum topic `assignedSlug`?
 * True when ANY bank subtopic that covers the assigned topic was played — the
 * assignment names one curriculum topic, so practicing the pool containing it
 * is the completion condition.
 */
export function bankPlayCoversCurriculumTopic(assignedSlug: string, playedBankSlugs: Iterable<string>): boolean {
  const covering = bankSlugsForCurriculumTopic(assignedSlug)
  if (covering.length === 0) return false
  const played = playedBankSlugs instanceof Set ? playedBankSlugs : new Set(playedBankSlugs)
  return covering.some((s) => played.has(s))
}
