import type { SlideFigure } from '@/lib/slide-deck'
import { mcatLearningMemoryFigures } from './mcat-learning-memory'
import { mcatSensationPerceptionFigures } from './mcat-sensation-perception'
import { mcatDevelopmentFigures } from './mcat-development'
import { mcatSocialPsychologyFigures } from './mcat-social-psychology'
import { mcatCognitionLanguageFigures } from './mcat-cognition-language'
import { mcatBiologicalBasisFigures } from './mcat-biological-basis'
import { mcatDisordersFigures } from './mcat-disorders'
import { mcatPsychologyBehaviorFigures } from './mcat-psychology-behavior'
import { mcatCultureSocializationFigures } from './mcat-culture-socialization'
import { mcatGroupsInteractionFigures } from './mcat-groups-interaction'
import { mcatHealthDisparitiesFigures } from './mcat-health-disparities'
import { mcatSociologyFigures } from './mcat-sociology'
import { mcatStructureStratificationFigures } from './mcat-structure-stratification'
import { mcatEnzymesFigures } from './mcat-bb-enzymes'
import { mcatAminoAcidsFigures } from './mcat-bb-amino-acids'
import { mcatCarbMetabolismFigures } from './mcat-bb-carb-metabolism'
import { mcatBioenergeticsFigures } from './mcat-bb-bioenergetics'
import { mcatCardiovascularFigures } from './mcat-bb-cardiovascular'
import { mcatMembraneTransportFigures } from './mcat-bb-membrane-transport'
import { mcatLipidMetabolismFigures } from './mcat-bb-lipid-metabolism'
import { mcatBiochemFoundationsFigures } from './mcat-bb-biochem-foundations'
import { mcatOrganellesFigures } from './mcat-bb-organelles'
import { mcatCellCycleFigures } from './mcat-bb-cell-cycle'
import { mcatCellSignalingFigures } from './mcat-bb-cell-signaling'
import { mcatDnaReplicationFigures } from './mcat-bb-dna-replication'

/**
 * Deck figures — hand-drawn inline SVG diagrams placed into auto-generated
 * slide decks (owner, Oct 2026: the psych/soc decks were "all text, a bit
 * boring, some too cluttered"). Slides only for now; the lesson pages don't
 * show these.
 *
 * COPYRIGHT RULE: every figure here is drawn by us from the CONCEPT (the idea
 * of a 2×2 grid or a cumulative-response curve isn't copyrightable); never
 * trace or closely copy a figure from a prep company, a textbook, AAMC
 * materials or a web image. Charts of real study results use the published
 * numbers and name the study in the caption; made-up curves say "illustrative".
 *
 * SVG rules and the theme classes (currentColor, fig-accent, fig-accent-2,
 * fig-muted, fig-bg) are the lesson-figure rules in src/lib/lesson-figure.ts;
 * `isSafeSvg` gates every drawing at render time.
 *
 * PLACEMENT: `at` is matched case-insensitively against the START of a content
 * slide's section title (the first slide of that section, never a "(cont.)"
 * page). The generator FAILS the deck when an `at` matches nothing, so a
 * renamed lesson section is caught at regeneration, not in class.
 *
 *  - lead (default): a new slide titled like the section goes in FRONT of
 *    it — figure full width, `blocks` (≤2 short lines) underneath. The
 *    section's own first slide becomes "(cont.)" so the pair stays one unit
 *    (a poll can never land between the picture and its words).
 *  - after: the same, but BEHIND the matched slide (a graph the passage text
 *    describes). Title = "<section> (cont.)".
 *  - replace-table: the figure IS the table — the pipe-table block(s) on the
 *    matched slide are dropped, the figure sits beside the remaining blocks
 *    (or `blocks`, when given, replace them all). Keep those lines short: the
 *    text column is ~600 logical px wide.
 *  - beside: figure beside the slide's existing blocks, nothing dropped.
 *    Only for slides with ≤3 short blocks.
 *
 * Suggested viewBox: lead/after ≈ 1000×460 (drawn at 1040 px), replace-table
 * and beside ≈ 560×440 (drawn at 560 px). Text in the SVG: 20–26 units on a
 * 1000-wide drawing, 16–20 on a 560-wide one.
 */
export interface DeckFigurePlacement {
  /** Section title prefix to find (case-insensitive). */
  at: string
  figure: SlideFigure
  mode?: 'lead' | 'after' | 'replace-table' | 'beside'
  /** Short lines shown with the figure (see each mode). Same block syntax as deck slides. */
  blocks?: string[]
}

export const DECK_FIGURES: Record<string, DeckFigurePlacement[]> = {
  'mcat-psychology-behavior-learning-memory-mcat': mcatLearningMemoryFigures,
  'mcat-psychology-behavior-sensation-perception-mcat': mcatSensationPerceptionFigures,
  'mcat-psychology-behavior-development-mcat': mcatDevelopmentFigures,
  'mcat-social-psychology-mcat': mcatSocialPsychologyFigures,
  'mcat-psychology-behavior-cognition-language-mcat': mcatCognitionLanguageFigures,
  'mcat-biological-basis-behavior-mcat': mcatBiologicalBasisFigures,
  'mcat-psychology-behavior-disorders-mcat': mcatDisordersFigures,
  'mcat-psychology-behavior-mcat': mcatPsychologyBehaviorFigures,
  'mcat-sociology-culture-socialization-mcat': mcatCultureSocializationFigures,
  'mcat-sociology-groups-interaction-mcat': mcatGroupsInteractionFigures,
  'mcat-sociology-health-disparities-mcat': mcatHealthDisparitiesFigures,
  'mcat-sociology-mcat': mcatSociologyFigures,
  'mcat-sociology-structure-stratification-mcat': mcatStructureStratificationFigures,
  // Biology & Biochemistry
  'mcat-biochemistry-enzymes-kinetics-mcat': mcatEnzymesFigures,
  'mcat-biochemistry-amino-acids-proteins-mcat': mcatAminoAcidsFigures,
  'mcat-biochemistry-carbohydrate-metabolism-mcat': mcatCarbMetabolismFigures,
  'mcat-biochemistry-bioenergetics-mcat': mcatBioenergeticsFigures,
  'mcat-organ-systems-cardiovascular-mcat': mcatCardiovascularFigures,
  'mcat-cell-biology-membrane-transport-mcat': mcatMembraneTransportFigures,
  'mcat-biochemistry-lipid-metabolism-mcat': mcatLipidMetabolismFigures,
  'mcat-biochemistry-foundations-mcat': mcatBiochemFoundationsFigures,
  'mcat-cell-biology-organelles-mcat': mcatOrganellesFigures,
  'mcat-cell-biology-cell-cycle-mcat': mcatCellCycleFigures,
  'mcat-cell-biology-signaling-mcat': mcatCellSignalingFigures,
  'mcat-molecular-biology-dna-replication-mcat': mcatDnaReplicationFigures,
}
