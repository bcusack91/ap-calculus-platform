/**
 * Which competitive question set a class match pool draws from.
 *
 * Teachers open a pool on the lesson topic they just presented (the slide
 * deck's Topic slug). Most AP and calculus lesson slugs ARE competitive slugs,
 * but SAT and MCAT lessons are named differently from their competitive banks
 * (verified 2026-10-25 against every local Topic row: 32 of 33 sat-prep and 77
 * of 102 mcat-prep lesson slugs fell through generateMatchQuestions to the
 * cross-course cumulative mix). So resolution is:
 *   1. the lesson slug itself, if it has competitive routing;
 *   2. its competitive alias (SAT 'sat-<key>' → challenge 'sat-topic-<key>';
 *      MCAT lesson → the matching bank subtopic or area, MCAT_LESSON_ALIASES);
 *   3. the course-level competitive pool ("questions from the whole course");
 *   4. nothing — the course has no competitive questions (ACT, grade-level
 *      math, pre-algebra, organic chemistry): the pool can't open.
 */
import { generateMatchQuestions, type MatchQuestionsMeta } from '@/lib/competitive-utils'

export type PoolTopicScope = 'topic' | 'course' | 'none'

export interface PoolTopicResolution {
  scope: PoolTopicScope
  /** The slug matches are generated from (null when scope is 'none'). */
  matchTopicSlug: string | null
}

/**
 * MCAT lesson slug → competitive bank slug (subtopic where one matches the
 * lesson, else the area). Strategy lessons (CARS strategy is still CARS; test
 * day / science-passage strategy are not) map to the course level instead.
 */
export const MCAT_LESSON_ALIASES: Record<string, string> = {
  // Chem/Phys
  'mcat-general-chemistry-mcat': 'mcat-area-general-chemistry',
  'mcat-organic-chemistry-mcat': 'mcat-area-organic-chemistry',
  'mcat-physics-mechanics-mcat': 'mcat-area-physics-mechanics',
  'mcat-physics-mechanics-fluids-waves-mcat': 'mcat-area-physics-mechanics',
  'mcat-physics-electricity-mcat': 'mcat-area-physics-electricity',
  'mcat-biochemistry-foundations-mcat': 'mcat-area-biochemistry',
  'mcat-lab-methods-mcat': 'mcat-area-lab-data',
  'mcat-biostatistics-mcat': 'mcat-research-methods-biostats-mcat',
  'mcat-research-methods-mcat': 'mcat-research-methods-biostats-mcat',
  'mcat-quantitative-skills-mcat': 'mcat-research-methods-biostats-mcat',
  // Bio/Biochem
  'mcat-cell-biology-mcat': 'mcat-area-biology',
  'mcat-cell-biology-cell-cycle-mcat': 'mcat-biology-cell-cycle-mcat',
  'mcat-cell-biology-membrane-transport-mcat': 'mcat-biology-cell-structure-mcat',
  'mcat-cell-biology-organelles-mcat': 'mcat-biology-cell-structure-mcat',
  'mcat-cell-biology-signaling-mcat': 'mcat-area-biology',
  'mcat-molecular-biology-mcat': 'mcat-biology-molecular-biology-mcat',
  'mcat-molecular-biology-biotechnology-mcat': 'mcat-biology-molecular-biology-mcat',
  'mcat-molecular-biology-dna-replication-mcat': 'mcat-biology-molecular-biology-mcat',
  'mcat-molecular-biology-transcription-mcat': 'mcat-biology-molecular-biology-mcat',
  'mcat-molecular-biology-translation-mcat': 'mcat-biology-molecular-biology-mcat',
  'mcat-microbiology-mcat': 'mcat-biology-microbiology-mcat',
  'mcat-microbiology-antimicrobials-mcat': 'mcat-biology-microbiology-mcat',
  'mcat-microbiology-bacteria-mcat': 'mcat-biology-microbiology-mcat',
  'mcat-microbiology-genetics-mcat': 'mcat-biology-microbiology-mcat',
  'mcat-microbiology-viruses-mcat': 'mcat-biology-microbiology-mcat',
  'mcat-genetics-evolution-immunology-mcat': 'mcat-organ-systems-immune-musculoskeletal-mcat',
  'mcat-genetics-evolution-mendelian-mcat': 'mcat-genetics-mendelian-mcat',
  'mcat-genetics-evolution-natural-selection-mcat': 'mcat-genetics-evolution-mcat',
  'mcat-genetics-evolution-population-genetics-mcat': 'mcat-genetics-evolution-mcat',
  'mcat-anatomy-physiology-mcat': 'mcat-area-organ-systems',
  'mcat-anatomy-physiology-embryology-mcat': 'mcat-organ-systems-embryology-mcat',
  'mcat-anatomy-physiology-musculoskeletal-mcat': 'mcat-organ-systems-immune-musculoskeletal-mcat',
  'mcat-anatomy-physiology-reproductive-mcat': 'mcat-organ-systems-reproductive-mcat',
  'mcat-anatomy-physiology-sensory-mcat': 'mcat-organ-systems-nervous-mcat',
  'mcat-organ-systems-mcat': 'mcat-area-organ-systems',
  'mcat-organ-systems-cardiovascular-mcat': 'mcat-organ-systems-cardio-resp-mcat',
  'mcat-organ-systems-respiratory-mcat': 'mcat-organ-systems-cardio-resp-mcat',
  'mcat-organ-systems-endocrine-nervous-mcat': 'mcat-area-organ-systems',
  'mcat-organ-systems-renal-mcat': 'mcat-organ-systems-digestive-renal-mcat',
  // Psych/Soc
  'mcat-biological-basis-behavior-mcat': 'mcat-area-psychology-sociology',
  'mcat-psychology-behavior-mcat': 'mcat-area-psychology-sociology',
  'mcat-psychology-behavior-cognition-language-mcat': 'mcat-psych-cognition-language-mcat',
  'mcat-psychology-behavior-development-mcat': 'mcat-area-psychology-sociology',
  'mcat-psychology-behavior-disorders-mcat': 'mcat-psych-disorders-mcat',
  'mcat-psychology-behavior-learning-memory-mcat': 'mcat-psych-learning-memory-mcat',
  'mcat-psychology-behavior-sensation-perception-mcat': 'mcat-psych-sensation-perception-mcat',
  'mcat-social-psychology-mcat': 'mcat-psych-social-psychology-mcat',
  'mcat-sociology-mcat': 'mcat-area-psychology-sociology',
  'mcat-sociology-culture-socialization-mcat': 'mcat-area-psychology-sociology',
  'mcat-sociology-groups-interaction-mcat': 'mcat-area-psychology-sociology',
  'mcat-sociology-health-disparities-mcat': 'mcat-psych-social-inequality-mcat',
  'mcat-sociology-structure-stratification-mcat': 'mcat-psych-sociology-social-structure-mcat',
  // CARS — every passage / reasoning / strategy lesson is CARS practice.
  'mcat-cars-passages-mcat': 'mcat-area-cars',
  'mcat-cars-passages-comparative-mcat': 'mcat-area-cars',
  'mcat-cars-passages-ethics-mcat': 'mcat-area-cars',
  'mcat-cars-passages-humanities-mcat': 'mcat-area-cars',
  'mcat-cars-passages-social-science-mcat': 'mcat-area-cars',
  'mcat-cars-reasoning-mcat': 'mcat-area-cars',
  'mcat-cars-reasoning-argument-structure-mcat': 'mcat-area-cars',
  'mcat-cars-reasoning-assumptions-mcat': 'mcat-area-cars',
  'mcat-cars-reasoning-fallacies-mcat': 'mcat-area-cars',
  'mcat-cars-reasoning-strengthen-weaken-mcat': 'mcat-area-cars',
  'mcat-cars-strategy-mcat': 'mcat-area-cars',
  'mcat-cars-strategy-active-reading-mcat': 'mcat-area-cars',
  'mcat-cars-strategy-elimination-mcat': 'mcat-area-cars',
  'mcat-cars-strategy-main-idea-inference-mcat': 'mcat-area-cars',
  'mcat-cars-strategy-timing-mcat': 'mcat-area-cars',
}

/** The competitive alias for a lesson slug whose name differs from its bank's. */
export function lessonCompetitiveAlias(topicSlug: string): string | null {
  if (MCAT_LESSON_ALIASES[topicSlug]) return MCAT_LESSON_ALIASES[topicSlug]
  if (topicSlug.startsWith('sat-') && !topicSlug.startsWith('sat-topic-') && !topicSlug.startsWith('sat-skill-')) {
    return `sat-topic-${topicSlug.slice(4)}`
  }
  return null
}

/**
 * Course-level competitive slugs to try for a curriculum course, best first.
 * The competitive section predates the curriculum's naming, so both spellings
 * are probed (the probe, not this list, decides what routes).
 */
const COURSE_LEVEL_SLUGS: Record<string, string[]> = {
  'sat-prep': ['sat'],
  'mcat-prep': ['mcat'],
  asvab: ['asvab'],
  'algebra-2': ['algebra2'],
  'ap-physics-1': ['ap-physics1'],
  'ap-physics-2': ['ap-physics2'],
  'ap-computer-science-a': ['ap-csa'],
  'ap-computer-science-principles': ['ap-csp'],
  'ap-english-language': ['ap-english-lang'],
  'ap-english-literature': ['ap-english-lit'],
  'ap-environmental-science': ['ap-enviro'],
  'ap-human-geography': ['ap-human-geo'],
  'ap-macroeconomics': ['ap-macro'],
  'ap-microeconomics': ['ap-micro'],
  'ap-us-government': ['ap-us-gov'],
  'ap-physics-c-mechanics': ['ap-physics-c-mech'],
}

export function courseLevelCandidates(courseSlug: string | null | undefined): string[] {
  if (!courseSlug) return []
  return [...new Set([...(COURSE_LEVEL_SLUGS[courseSlug] ?? []), courseSlug])]
}

/** Does this slug draw its own competitive questions (not the cumulative fallback)? */
export async function hasCompetitiveRouting(slug: string): Promise<boolean> {
  const meta: MatchQuestionsMeta = {}
  try {
    const qs = await generateMatchQuestions(4, slug, [], undefined, meta)
    return !meta.fellBack && qs.length > 0
  } catch {
    return false
  }
}

export async function resolvePoolTopic(
  topicSlug: string,
  courseSlug: string | null | undefined,
): Promise<PoolTopicResolution> {
  if (await hasCompetitiveRouting(topicSlug)) return { scope: 'topic', matchTopicSlug: topicSlug }
  const alias = lessonCompetitiveAlias(topicSlug)
  if (alias && (await hasCompetitiveRouting(alias))) return { scope: 'topic', matchTopicSlug: alias }
  for (const slug of courseLevelCandidates(courseSlug)) {
    if (await hasCompetitiveRouting(slug)) return { scope: 'course', matchTopicSlug: slug }
  }
  return { scope: 'none', matchTopicSlug: null }
}
