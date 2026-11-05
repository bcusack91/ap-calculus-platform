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
import { mcatTranscriptionFigures } from './mcat-bb-transcription'
import { mcatTranslationFigures } from './mcat-bb-translation'
import { mcatBiotechnologyFigures } from './mcat-bb-biotechnology'
import { mcatMolecularBiologyFigures } from './mcat-bb-molecular-biology'
import { mcatMendelianFigures } from './mcat-bb-mendelian'
import { mcatPopulationGeneticsFigures } from './mcat-bb-population-genetics'
import { mcatNaturalSelectionFigures } from './mcat-bb-natural-selection'
import { mcatImmunologyFigures } from './mcat-bb-immunology'
import { mcatGeneticsEvolutionFigures } from './mcat-bb-genetics-evolution'
import { mcatBacteriaFigures } from './mcat-bb-bacteria'
import { mcatVirusesFigures } from './mcat-bb-viruses'
import { mcatAntimicrobialsFigures } from './mcat-bb-antimicrobials'
import { mcatMicrobiologyFigures } from './mcat-bb-microbiology'
import { mcatMicrobialGeneticsFigures } from './mcat-bb-microbial-genetics'
import { mcatMusculoskeletalFigures } from './mcat-bb-musculoskeletal'
import { mcatReproductiveFigures } from './mcat-bb-reproductive'
import { mcatSensoryFigures } from './mcat-bb-sensory'
import { mcatEmbryologyFigures } from './mcat-bb-embryology'
import { mcatAnatomyPhysiologyFigures } from './mcat-bb-anatomy-physiology'
import { mcatRespiratoryFigures } from './mcat-bb-respiratory'
import { mcatRenalFigures } from './mcat-bb-renal'
import { mcatEndocrineNervousFigures } from './mcat-bb-endocrine-nervous'
import { mcatOrganSystemsFigures } from './mcat-bb-organ-systems'
import { mcatCellBiologyFigures } from './mcat-bb-cell-biology'
import { mcatKinematicsFigures } from './mcat-cp-kinematics'
import { mcatForcesFigures } from './mcat-cp-forces'
import { mcatWorkEnergyFigures } from './mcat-cp-work-energy'
import { mcatMomentumFigures } from './mcat-cp-momentum'
import { mcatFluidsFigures, mcatWavesSoundFigures } from './mcat-cp-fluids-waves'
import { mcatFluidsExtraFigures } from './mcat-cp-fluids'
import { mcatWavesSoundExtraFigures } from './mcat-cp-waves-sound'
import { mcatMechanicsFigures } from './mcat-cp-mechanics'
import { mcatElectrostaticsFigures } from './mcat-cp-electrostatics'
import { mcatDcCircuitsFigures, mcatEmfCapacitorsFigures } from './mcat-cp-circuits'
import { mcatDcCircuitsExtraFigures } from './mcat-cp-dc-circuits'
import { circuits1Loops } from './mcat-cp-circuits1-loops'
import { circuits2Loops } from './mcat-cp-circuits2-loops'
import { circuits4Loops } from './mcat-cp-circuits4-loops'
import { mcatEmfCapacitorsExtraFigures } from './mcat-cp-emf-capacitors'
import { mcatMagnetismFigures } from './mcat-cp-magnetism'
import { mcatOpticsFigures } from './mcat-cp-optics'
import { mcatElectrochemistryFigures } from './mcat-cp-electrochemistry'
import { mcatElectricityFigures } from './mcat-cp-electricity'
import { mcatAtomicStructureFigures } from './mcat-cp-atomic-structure'
import { mcatStoichiometryFigures } from './mcat-cp-stoichiometry'
import { mcatThermodynamicsFigures } from './mcat-cp-thermodynamics'
import { mcatChemKineticsFigures } from './mcat-cp-chem-kinetics'
import { mcatAcidBaseFigures } from './mcat-cp-acid-base'
import { mcatGeneralChemistryFigures } from './mcat-cp-general-chemistry'
import { mcatFunctionalGroupsFigures } from './mcat-cp-functional-groups'
import { mcatStereochemistryFigures } from './mcat-cp-stereochemistry'
import { mcatSubstitutionEliminationFigures } from './mcat-cp-substitution-elimination'
import { mcatCarbonylsFigures } from './mcat-cp-carbonyls'
import { mcatSpectroscopyFigures } from './mcat-cp-spectroscopy'
import { mcatOrganicChemistryFigures } from './mcat-cp-organic-chemistry'
import { mcatLabMethodsFigures } from './mcat-cp-lab-methods'
import { mcatResearchMethodsFigures } from './mcat-st-research-methods'
import { mcatBiostatisticsFigures } from './mcat-st-biostatistics'
import { mcatQuantitativeSkillsFigures } from './mcat-st-quantitative-skills'
import { mcatSciencePassageStrategyFigures } from './mcat-st-science-passage-strategy'

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
 *  - replace: the figure and `blocks` ARE the section on the slides — its
 *    lesson text (and any "(cont.)" pages) is dropped from the deck, kept in
 *    the lesson (owner, 2026-11-04: dense text → pictures + a few lines the
 *    instructor fills in). Full width, like lead.
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
  mode?: 'lead' | 'after' | 'replace' | 'replace-table' | 'beside'
  /** Short lines shown with the figure (see each mode). Same block syntax as deck slides. */
  blocks?: string[]
}

/**
 * A looping slide animation for one section (Nov 2026; src/lib/slide-video.ts).
 * Files live in public/slide-media/<folder>/<name>.mp4 + .jpg (poster).
 * If the section already has a drawn figure, the animation plays in its place
 * (the drawing stays as the fallback, and `alt`/`caption`/`mode`/`blocks`
 * override the figure's only when given). Otherwise it becomes a new figure
 * placement (default mode 'lead': a full-width animation slide in front of
 * the section).
 */
export interface SlideLoop {
  at: string
  name: string
  alt: string
  caption?: string
  mode?: DeckFigurePlacement['mode']
  blocks?: string[]
  /** Always a NEW placement, even when the section already has a figure (e.g. a second animation 'after' it). */
  add?: boolean
}

export function withSlideLoops(placements: DeckFigurePlacement[], folder: string, loops: readonly SlideLoop[]): DeckFigurePlacement[] {
  const out = placements.map((p) => ({ ...p }))
  for (const loop of loops) {
    const video = { src: `/slide-media/${folder}/${loop.name}.mp4`, poster: `/slide-media/${folder}/${loop.name}.jpg` }
    const i = loop.add ? -1 : out.findIndex((p) => p.at.trim().toLowerCase() === loop.at.trim().toLowerCase())
    if (i >= 0) {
      const p = out[i]
      out[i] = {
        ...p,
        mode: loop.mode ?? p.mode,
        blocks: loop.blocks ?? p.blocks,
        figure: { ...p.figure, alt: loop.alt, caption: loop.caption ?? p.figure.caption, video },
      }
    } else {
      out.push({ at: loop.at, mode: loop.mode ?? 'lead', blocks: loop.blocks ?? [], figure: { svg: '', alt: loop.alt, caption: loop.caption, video } })
    }
  }
  return out
}

/**
 * The physics lessons split again in Nov 2026 (one topic per 90-minute
 * class): each topic gets the figures for the sections its lesson now holds.
 */
function figuresAt(figs: DeckFigurePlacement[], ats: readonly string[], keep: boolean): DeckFigurePlacement[] {
  return figs.filter((f) => ats.includes(f.at) === keep)
}
const DC_ALL = [...mcatDcCircuitsFigures, ...mcatDcCircuitsExtraFigures]
const KIRCHHOFF_POWER_AT = ['Kirchhoff', 'Worked Example — A Two-Step Network', 'Voltage Dividers and Current Dividers', 'Electrical Power', 'When a Bulb Burns Out or One Is Added', 'Electricity and the Body']
const EC_ALL = [...mcatEmfCapacitorsFigures, ...mcatEmfCapacitorsExtraFigures]
const RC_CIRCUITS_AT = ['Capacitor Networks', 'The Time Constant', 'Worked Example — Steady-State Voltage', 'The Cell Membrane Is an RC Circuit', 'Myelin and Conduction Speed', 'Defibrillators and Capacitor Discharge']
const FL_ALL = [...mcatFluidsFigures, ...mcatFluidsExtraFigures]
const FLUIDS_IN_MOTION_AT = ['Continuity: Mass In = Mass Out', 'Worked Example — A Venturi Meter', 'Viscosity: When Fluids Are Real', 'The Circulation as a Fluids Problem', 'Grading a Stenosis: Which Law Applies?']
const WS_ALL = [...mcatWavesSoundFigures, ...mcatWavesSoundExtraFigures]
const PERIODIC_AT = ['Describing Anything That Repeats', 'Simple Harmonic Motion', 'The Wave Equation and Who Controls What']
const INTERFERENCE_AT = ['Path Difference Decides the Phase', 'Worked Example — Tuning by Beats', 'Superposition and Standing Waves']

// Nov 2026 part splits (src/lib/mcat-topic-split.ts MCAT_PART_SPLITS): the
// kept slug holds the first lesson parts, the new slug the headings listed here.
const SPECTRA_NUCLEAR_AT = ['Spectral Series in Hydrogen', 'Interpreting a PES Spectrum', 'Worked Example — An Iodine-131 Countdown']
const SOLUTIONS_GASES_AT = ['Dilution', 'Worked Example — Precipitating Silver Chloride', 'Special Cases']
const ENERGY_MECHANISMS_AT = ['Activation Energy', 'Arrhenius Equation', 'Collision Theory', 'Worked Example — Testing a Mechanism']
const TITRATIONS_EQUILIBRIUM_AT = ['Strong Acid + Strong Base', 'Worked Example — Titrating Acetic Acid with NaOH', 'Reaction Quotient Q', "Le Chatelier's Principle"]
const SPECTROSCOPY_ASSAYS_AT = ['Sedimentation Logic', 'Two Major Techniques', 'Worked Examples — Spectroscopy', 'Absorbance vs. Transmittance', 'Biochemistry Hooks']
const GENE_REGULATION_AT = ['Transposable Elements', 'Restriction-Modification: Innate Defense', 'CRISPR-Cas: Adaptive Immunity', 'Worked Examples — Mobile DNA and Regulation', 'Hershey-Chase: DNA Is the Genetic Material of Phage', 'Worked Examples — Experiment Reading', 'Recombination and Reassortment']
const ORGANOGENESIS_AT = ['The Four Extraembryonic Membranes', 'The Placenta', 'The Three Fetal Shunts', 'The Potency Hierarchy', 'Morphogens: Concentration Encodes Fate']
// Magnetism (Nov 2026 part split): wires, the selector and induction move to the new slug.
const INDUCTION_AT = ['Force on a Current-Carrying Wire', 'Parallel Wires', 'The Velocity Selector', "Faraday's Law", "Lenz's Law"]
const INTERACTION_ORGANIZATIONS_AT =["Goffman's Dramaturgy — Life as Staged Performance", 'Social Networks — The Architecture Between Groups', "Formal Organizations & Weber's Bureaucracy", 'The Tripartite Distinction the Exam Never Stops Testing', 'Individual vs. Institutional Discrimination']

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
  'mcat-sociology-groups-interaction-mcat': figuresAt(mcatGroupsInteractionFigures, INTERACTION_ORGANIZATIONS_AT, false),
  'mcat-sociology-interaction-organizations-mcat': figuresAt(mcatGroupsInteractionFigures, INTERACTION_ORGANIZATIONS_AT, true),
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
  'mcat-molecular-biology-transcription-mcat': mcatTranscriptionFigures,
  'mcat-molecular-biology-translation-mcat': mcatTranslationFigures,
  'mcat-molecular-biology-biotechnology-mcat': mcatBiotechnologyFigures,
  'mcat-molecular-biology-mcat': mcatMolecularBiologyFigures,
  'mcat-genetics-evolution-mendelian-mcat': mcatMendelianFigures,
  'mcat-genetics-evolution-population-genetics-mcat': mcatPopulationGeneticsFigures,
  'mcat-genetics-evolution-natural-selection-mcat': mcatNaturalSelectionFigures,
  'mcat-genetics-evolution-immunology-mcat': mcatImmunologyFigures,
  'mcat-genetics-evolution-mcat': mcatGeneticsEvolutionFigures,
  'mcat-microbiology-bacteria-mcat': mcatBacteriaFigures,
  'mcat-microbiology-viruses-mcat': mcatVirusesFigures,
  'mcat-microbiology-antimicrobials-mcat': mcatAntimicrobialsFigures,
  'mcat-microbiology-genetics-mcat': figuresAt(mcatMicrobialGeneticsFigures, GENE_REGULATION_AT, false),
  'mcat-microbiology-genetics-regulation-mcat': figuresAt(mcatMicrobialGeneticsFigures, GENE_REGULATION_AT, true),
  'mcat-microbiology-mcat': mcatMicrobiologyFigures,
  'mcat-anatomy-physiology-musculoskeletal-mcat': mcatMusculoskeletalFigures,
  'mcat-anatomy-physiology-reproductive-mcat': mcatReproductiveFigures,
  'mcat-anatomy-physiology-sensory-mcat': mcatSensoryFigures,
  'mcat-anatomy-physiology-embryology-mcat': figuresAt(mcatEmbryologyFigures, ORGANOGENESIS_AT, false),
  'mcat-anatomy-physiology-organogenesis-mcat': figuresAt(mcatEmbryologyFigures, ORGANOGENESIS_AT, true),
  'mcat-anatomy-physiology-mcat': mcatAnatomyPhysiologyFigures,
  'mcat-organ-systems-respiratory-mcat': mcatRespiratoryFigures,
  'mcat-organ-systems-renal-mcat': mcatRenalFigures,
  'mcat-organ-systems-endocrine-nervous-mcat': mcatEndocrineNervousFigures,
  'mcat-organ-systems-mcat': mcatOrganSystemsFigures,
  'mcat-cell-biology-mcat': mcatCellBiologyFigures,
  // Chemistry & Physics
  'mcat-physics-mechanics-kinematics-mcat': mcatKinematicsFigures,
  'mcat-physics-mechanics-forces-newton-laws-mcat': mcatForcesFigures,
  'mcat-physics-mechanics-work-energy-power-mcat': mcatWorkEnergyFigures,
  'mcat-physics-mechanics-momentum-collisions-mcat': mcatMomentumFigures,
  'mcat-physics-mechanics-fluids-mcat': figuresAt(FL_ALL, FLUIDS_IN_MOTION_AT, false),
  'mcat-physics-mechanics-fluid-dynamics-mcat': figuresAt(FL_ALL, FLUIDS_IN_MOTION_AT, true),
  'mcat-physics-waves-interference-mcat': figuresAt(WS_ALL, [...PERIODIC_AT, ...INTERFERENCE_AT], true),
  'mcat-physics-waves-sound-mcat': figuresAt(figuresAt(WS_ALL, PERIODIC_AT, false), INTERFERENCE_AT, false),
  'mcat-physics-mechanics-mcat': mcatMechanicsFigures,
  'mcat-physics-electricity-electrostatics-mcat': mcatElectrostaticsFigures,
  'mcat-physics-electricity-dc-circuits-mcat': withSlideLoops(figuresAt(DC_ALL, KIRCHHOFF_POWER_AT, false), 'circuits-1', circuits1Loops),
  'mcat-physics-electricity-kirchhoff-power-mcat': withSlideLoops(figuresAt(DC_ALL, KIRCHHOFF_POWER_AT, true), 'circuits-2', circuits2Loops),
  'mcat-physics-electricity-emf-capacitors-mcat': figuresAt(EC_ALL, RC_CIRCUITS_AT, false),
  'mcat-physics-electricity-rc-circuits-mcat': withSlideLoops(figuresAt(EC_ALL, RC_CIRCUITS_AT, true), 'circuits-4', circuits4Loops),
  'mcat-physics-electricity-magnetism-mcat': figuresAt(mcatMagnetismFigures, INDUCTION_AT, false),
  'mcat-physics-electricity-induction-mcat': figuresAt(mcatMagnetismFigures, INDUCTION_AT, true),
  'mcat-physics-electricity-optics-mcat': mcatOpticsFigures,
  'mcat-physics-electricity-electrochemistry-mcat': mcatElectrochemistryFigures,
  'mcat-physics-electricity-mcat': mcatElectricityFigures,
  'mcat-general-chemistry-atomic-structure-mcat': figuresAt(mcatAtomicStructureFigures, SPECTRA_NUCLEAR_AT, false),
  'mcat-general-chemistry-spectra-nuclear-mcat': figuresAt(mcatAtomicStructureFigures, SPECTRA_NUCLEAR_AT, true),
  'mcat-general-chemistry-stoichiometry-mcat': figuresAt(mcatStoichiometryFigures, SOLUTIONS_GASES_AT, false),
  'mcat-general-chemistry-solutions-gases-mcat': figuresAt(mcatStoichiometryFigures, SOLUTIONS_GASES_AT, true),
  'mcat-general-chemistry-thermodynamics-mcat': mcatThermodynamicsFigures,
  'mcat-general-chemistry-kinetics-mcat': figuresAt(mcatChemKineticsFigures, ENERGY_MECHANISMS_AT, false),
  'mcat-general-chemistry-energy-mechanisms-mcat': figuresAt(mcatChemKineticsFigures, ENERGY_MECHANISMS_AT, true),
  'mcat-general-chemistry-acid-base-equilibrium-mcat': figuresAt(mcatAcidBaseFigures, TITRATIONS_EQUILIBRIUM_AT, false),
  'mcat-general-chemistry-titrations-equilibrium-mcat': figuresAt(mcatAcidBaseFigures, TITRATIONS_EQUILIBRIUM_AT, true),
  'mcat-general-chemistry-mcat': mcatGeneralChemistryFigures,
  'mcat-organic-chemistry-functional-groups-mcat': mcatFunctionalGroupsFigures,
  'mcat-organic-chemistry-stereochemistry-mcat': mcatStereochemistryFigures,
  'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat': mcatSubstitutionEliminationFigures,
  'mcat-organic-chemistry-carbonyls-mcat': mcatCarbonylsFigures,
  'mcat-organic-chemistry-spectroscopy-mcat': mcatSpectroscopyFigures,
  'mcat-organic-chemistry-mcat': mcatOrganicChemistryFigures,
  'mcat-lab-methods-mcat': figuresAt(mcatLabMethodsFigures, SPECTROSCOPY_ASSAYS_AT, false),
  'mcat-lab-methods-spectroscopy-assays-mcat': figuresAt(mcatLabMethodsFigures, SPECTROSCOPY_ASSAYS_AT, true),
  // Strategy (only the decks whose lessons are picture-shaped; CARS and test-day stay text)
  'mcat-research-methods-mcat': mcatResearchMethodsFigures,
  'mcat-biostatistics-mcat': mcatBiostatisticsFigures,
  'mcat-quantitative-skills-mcat': mcatQuantitativeSkillsFigures,
  'mcat-science-passage-strategy-mcat': mcatSciencePassageStrategyFigures,
  // These four topics teach the parent's lesson (an alias in registry.ts), so they share its figures.
  'mcat-science-passage-strategy-discrete-questions-mcat': mcatSciencePassageStrategyFigures,
  'mcat-science-passage-strategy-experimental-design-mcat': mcatSciencePassageStrategyFigures,
  'mcat-science-passage-strategy-figures-mcat': mcatSciencePassageStrategyFigures,
  'mcat-science-passage-strategy-reading-mcat': mcatSciencePassageStrategyFigures,
}
