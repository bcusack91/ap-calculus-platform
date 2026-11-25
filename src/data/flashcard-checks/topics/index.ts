import type { CardCheck } from '@/lib/flashcard-check-core'
import { checks as t0 } from './mcat-anatomy-physiology-embryology-mcat'
import { checks as t1 } from './mcat-anatomy-physiology-mcat'
import { checks as t2 } from './mcat-anatomy-physiology-musculoskeletal-mcat'
import { checks as t3 } from './mcat-anatomy-physiology-organogenesis-mcat'
import { checks as t4 } from './mcat-anatomy-physiology-reproductive-mcat'
import { checks as t5 } from './mcat-anatomy-physiology-sensory-mcat'
import { checks as t6 } from './mcat-biochemistry-amino-acids-proteins-mcat'
import { checks as t7 } from './mcat-biochemistry-bioenergetics-mcat'
import { checks as t8 } from './mcat-biochemistry-carbohydrate-metabolism-mcat'
import { checks as t9 } from './mcat-biochemistry-enzymes-kinetics-mcat'
import { checks as t10 } from './mcat-biochemistry-foundations-mcat'
import { checks as t11 } from './mcat-biochemistry-lipid-metabolism-mcat'
import { checks as t12 } from './mcat-biological-basis-behavior-mcat'
import { checks as t13 } from './mcat-biostatistics-mcat'
import { checks as t14 } from './mcat-cars-passages-comparative-mcat'
import { checks as t15 } from './mcat-cars-passages-ethics-mcat'
import { checks as t16 } from './mcat-cars-passages-humanities-mcat'
import { checks as t17 } from './mcat-cars-passages-mcat'
import { checks as t18 } from './mcat-cars-passages-social-science-mcat'
import { checks as t19 } from './mcat-cars-reasoning-argument-structure-mcat'
import { checks as t20 } from './mcat-cars-reasoning-assumptions-mcat'
import { checks as t21 } from './mcat-cars-reasoning-fallacies-mcat'
import { checks as t22 } from './mcat-cars-reasoning-mcat'
import { checks as t23 } from './mcat-cars-reasoning-strengthen-weaken-mcat'
import { checks as t24 } from './mcat-cars-strategy-active-reading-mcat'
import { checks as t25 } from './mcat-cars-strategy-elimination-mcat'
import { checks as t26 } from './mcat-cars-strategy-main-idea-inference-mcat'
import { checks as t27 } from './mcat-cars-strategy-mcat'
import { checks as t28 } from './mcat-cars-strategy-timing-mcat'
import { checks as t29 } from './mcat-cell-biology-cell-cycle-mcat'
import { checks as t30 } from './mcat-cell-biology-mcat'
import { checks as t31 } from './mcat-cell-biology-membrane-transport-mcat'
import { checks as t32 } from './mcat-cell-biology-organelles-mcat'
import { checks as t33 } from './mcat-cell-biology-signaling-mcat'
import { checks as t34 } from './mcat-general-chemistry-acid-base-equilibrium-mcat'
import { checks as t35 } from './mcat-general-chemistry-atomic-structure-mcat'
import { checks as t36 } from './mcat-general-chemistry-energy-mechanisms-mcat'
import { checks as t37 } from './mcat-general-chemistry-kinetics-mcat'
import { checks as t38 } from './mcat-general-chemistry-mcat'
import { checks as t39 } from './mcat-general-chemistry-solutions-gases-mcat'
import { checks as t40 } from './mcat-general-chemistry-spectra-nuclear-mcat'
import { checks as t41 } from './mcat-general-chemistry-stoichiometry-mcat'
import { checks as t42 } from './mcat-general-chemistry-thermodynamics-mcat'
import { checks as t43 } from './mcat-general-chemistry-titrations-equilibrium-mcat'
import { checks as t44 } from './mcat-genetics-evolution-immunology-mcat'
import { checks as t45 } from './mcat-genetics-evolution-mcat'
import { checks as t46 } from './mcat-genetics-evolution-mendelian-mcat'
import { checks as t47 } from './mcat-genetics-evolution-natural-selection-mcat'
import { checks as t48 } from './mcat-genetics-evolution-population-genetics-mcat'
import { checks as t49 } from './mcat-lab-methods-mcat'
import { checks as t50 } from './mcat-lab-methods-spectroscopy-assays-mcat'
import { checks as t51 } from './mcat-microbiology-antimicrobials-mcat'
import { checks as t52 } from './mcat-microbiology-bacteria-mcat'
import { checks as t53 } from './mcat-microbiology-genetics-mcat'
import { checks as t54 } from './mcat-microbiology-genetics-regulation-mcat'
import { checks as t55 } from './mcat-microbiology-mcat'
import { checks as t56 } from './mcat-microbiology-viruses-mcat'
import { checks as t57 } from './mcat-molecular-biology-biotechnology-mcat'
import { checks as t58 } from './mcat-molecular-biology-dna-replication-mcat'
import { checks as t59 } from './mcat-molecular-biology-mcat'
import { checks as t60 } from './mcat-molecular-biology-transcription-mcat'
import { checks as t61 } from './mcat-molecular-biology-translation-mcat'
import { checks as t62 } from './mcat-organ-systems-cardiovascular-mcat'
import { checks as t63 } from './mcat-organ-systems-endocrine-nervous-mcat'
import { checks as t64 } from './mcat-organ-systems-mcat'
import { checks as t65 } from './mcat-organ-systems-renal-mcat'
import { checks as t66 } from './mcat-organ-systems-respiratory-mcat'
import { checks as t67 } from './mcat-organic-chemistry-carbonyls-mcat'
import { checks as t68 } from './mcat-organic-chemistry-functional-groups-mcat'
import { checks as t69 } from './mcat-organic-chemistry-mcat'
import { checks as t70 } from './mcat-organic-chemistry-sn1-sn2-e1-e2-mcat'
import { checks as t71 } from './mcat-organic-chemistry-spectroscopy-mcat'
import { checks as t72 } from './mcat-organic-chemistry-stereochemistry-mcat'
import { checks as t73 } from './mcat-physics-electricity-dc-circuits-mcat'
import { checks as t74 } from './mcat-physics-electricity-electric-fields-mcat'
import { checks as t75 } from './mcat-physics-electricity-electric-potential-mcat'
import { checks as t76 } from './mcat-physics-electricity-electrochemistry-mcat'
import { checks as t77 } from './mcat-physics-electricity-electrostatics-mcat'
import { checks as t78 } from './mcat-physics-electricity-emf-capacitors-mcat'
import { checks as t79 } from './mcat-physics-electricity-induction-mcat'
import { checks as t80 } from './mcat-physics-electricity-kirchhoff-power-mcat'
import { checks as t81 } from './mcat-physics-electricity-magnetism-mcat'
import { checks as t82 } from './mcat-physics-electricity-mcat'
import { checks as t83 } from './mcat-physics-electricity-optics-mcat'
import { checks as t84 } from './mcat-physics-electricity-rc-circuits-mcat'
import { checks as t85 } from './mcat-physics-mechanics-buoyancy-mcat'
import { checks as t86 } from './mcat-physics-mechanics-fluid-dynamics-mcat'
import { checks as t87 } from './mcat-physics-mechanics-fluids-mcat'
import { checks as t88 } from './mcat-physics-mechanics-forces-newton-laws-mcat'
import { checks as t89 } from './mcat-physics-mechanics-kinematics-mcat'
import { checks as t90 } from './mcat-physics-mechanics-mcat'
import { checks as t91 } from './mcat-physics-mechanics-momentum-collisions-mcat'
import { checks as t92 } from './mcat-physics-mechanics-viscosity-mcat'
import { checks as t93 } from './mcat-physics-mechanics-work-energy-power-mcat'
import { checks as t94 } from './mcat-physics-waves-interference-mcat'
import { checks as t95 } from './mcat-physics-waves-sound-mcat'
import { checks as t96 } from './mcat-psychology-behavior-cognition-language-mcat'
import { checks as t97 } from './mcat-psychology-behavior-development-mcat'
import { checks as t98 } from './mcat-psychology-behavior-disorders-mcat'
import { checks as t99 } from './mcat-psychology-behavior-learning-memory-mcat'
import { checks as t100 } from './mcat-psychology-behavior-mcat'
import { checks as t101 } from './mcat-psychology-behavior-sensation-perception-mcat'
import { checks as t102 } from './mcat-quantitative-skills-mcat'
import { checks as t103 } from './mcat-research-methods-mcat'
import { checks as t104 } from './mcat-science-passage-strategy-discrete-questions-mcat'
import { checks as t105 } from './mcat-science-passage-strategy-experimental-design-mcat'
import { checks as t106 } from './mcat-science-passage-strategy-figures-mcat'
import { checks as t107 } from './mcat-science-passage-strategy-mcat'
import { checks as t108 } from './mcat-science-passage-strategy-reading-mcat'
import { checks as t109 } from './mcat-social-psychology-mcat'
import { checks as t110 } from './mcat-sociology-culture-socialization-mcat'
import { checks as t111 } from './mcat-sociology-groups-interaction-mcat'
import { checks as t112 } from './mcat-sociology-health-disparities-mcat'
import { checks as t113 } from './mcat-sociology-interaction-organizations-mcat'
import { checks as t114 } from './mcat-sociology-mcat'
import { checks as t115 } from './mcat-sociology-structure-stratification-mcat'
import { checks as t116 } from './mcat-test-day-strategy-format-scoring-mcat'
import { checks as t117 } from './mcat-test-day-strategy-mcat'
import { checks as t118 } from './mcat-test-day-strategy-section-specific-mcat'
import { checks as t119 } from './mcat-test-day-strategy-study-planning-mcat'
import { checks as t120 } from './mcat-test-day-strategy-test-day-logistics-mcat'

/**
 * Card-check questions for each topic's own cards, by topic slug.
 * GENERATED by scripts/flashcard-checks/register.ts: do not edit by hand.
 */
export const TOPIC_CHECKS: Record<string, Record<string, CardCheck>> = {
  'mcat-anatomy-physiology-embryology-mcat': t0,
  'mcat-anatomy-physiology-mcat': t1,
  'mcat-anatomy-physiology-musculoskeletal-mcat': t2,
  'mcat-anatomy-physiology-organogenesis-mcat': t3,
  'mcat-anatomy-physiology-reproductive-mcat': t4,
  'mcat-anatomy-physiology-sensory-mcat': t5,
  'mcat-biochemistry-amino-acids-proteins-mcat': t6,
  'mcat-biochemistry-bioenergetics-mcat': t7,
  'mcat-biochemistry-carbohydrate-metabolism-mcat': t8,
  'mcat-biochemistry-enzymes-kinetics-mcat': t9,
  'mcat-biochemistry-foundations-mcat': t10,
  'mcat-biochemistry-lipid-metabolism-mcat': t11,
  'mcat-biological-basis-behavior-mcat': t12,
  'mcat-biostatistics-mcat': t13,
  'mcat-cars-passages-comparative-mcat': t14,
  'mcat-cars-passages-ethics-mcat': t15,
  'mcat-cars-passages-humanities-mcat': t16,
  'mcat-cars-passages-mcat': t17,
  'mcat-cars-passages-social-science-mcat': t18,
  'mcat-cars-reasoning-argument-structure-mcat': t19,
  'mcat-cars-reasoning-assumptions-mcat': t20,
  'mcat-cars-reasoning-fallacies-mcat': t21,
  'mcat-cars-reasoning-mcat': t22,
  'mcat-cars-reasoning-strengthen-weaken-mcat': t23,
  'mcat-cars-strategy-active-reading-mcat': t24,
  'mcat-cars-strategy-elimination-mcat': t25,
  'mcat-cars-strategy-main-idea-inference-mcat': t26,
  'mcat-cars-strategy-mcat': t27,
  'mcat-cars-strategy-timing-mcat': t28,
  'mcat-cell-biology-cell-cycle-mcat': t29,
  'mcat-cell-biology-mcat': t30,
  'mcat-cell-biology-membrane-transport-mcat': t31,
  'mcat-cell-biology-organelles-mcat': t32,
  'mcat-cell-biology-signaling-mcat': t33,
  'mcat-general-chemistry-acid-base-equilibrium-mcat': t34,
  'mcat-general-chemistry-atomic-structure-mcat': t35,
  'mcat-general-chemistry-energy-mechanisms-mcat': t36,
  'mcat-general-chemistry-kinetics-mcat': t37,
  'mcat-general-chemistry-mcat': t38,
  'mcat-general-chemistry-solutions-gases-mcat': t39,
  'mcat-general-chemistry-spectra-nuclear-mcat': t40,
  'mcat-general-chemistry-stoichiometry-mcat': t41,
  'mcat-general-chemistry-thermodynamics-mcat': t42,
  'mcat-general-chemistry-titrations-equilibrium-mcat': t43,
  'mcat-genetics-evolution-immunology-mcat': t44,
  'mcat-genetics-evolution-mcat': t45,
  'mcat-genetics-evolution-mendelian-mcat': t46,
  'mcat-genetics-evolution-natural-selection-mcat': t47,
  'mcat-genetics-evolution-population-genetics-mcat': t48,
  'mcat-lab-methods-mcat': t49,
  'mcat-lab-methods-spectroscopy-assays-mcat': t50,
  'mcat-microbiology-antimicrobials-mcat': t51,
  'mcat-microbiology-bacteria-mcat': t52,
  'mcat-microbiology-genetics-mcat': t53,
  'mcat-microbiology-genetics-regulation-mcat': t54,
  'mcat-microbiology-mcat': t55,
  'mcat-microbiology-viruses-mcat': t56,
  'mcat-molecular-biology-biotechnology-mcat': t57,
  'mcat-molecular-biology-dna-replication-mcat': t58,
  'mcat-molecular-biology-mcat': t59,
  'mcat-molecular-biology-transcription-mcat': t60,
  'mcat-molecular-biology-translation-mcat': t61,
  'mcat-organ-systems-cardiovascular-mcat': t62,
  'mcat-organ-systems-endocrine-nervous-mcat': t63,
  'mcat-organ-systems-mcat': t64,
  'mcat-organ-systems-renal-mcat': t65,
  'mcat-organ-systems-respiratory-mcat': t66,
  'mcat-organic-chemistry-carbonyls-mcat': t67,
  'mcat-organic-chemistry-functional-groups-mcat': t68,
  'mcat-organic-chemistry-mcat': t69,
  'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat': t70,
  'mcat-organic-chemistry-spectroscopy-mcat': t71,
  'mcat-organic-chemistry-stereochemistry-mcat': t72,
  'mcat-physics-electricity-dc-circuits-mcat': t73,
  'mcat-physics-electricity-electric-fields-mcat': t74,
  'mcat-physics-electricity-electric-potential-mcat': t75,
  'mcat-physics-electricity-electrochemistry-mcat': t76,
  'mcat-physics-electricity-electrostatics-mcat': t77,
  'mcat-physics-electricity-emf-capacitors-mcat': t78,
  'mcat-physics-electricity-induction-mcat': t79,
  'mcat-physics-electricity-kirchhoff-power-mcat': t80,
  'mcat-physics-electricity-magnetism-mcat': t81,
  'mcat-physics-electricity-mcat': t82,
  'mcat-physics-electricity-optics-mcat': t83,
  'mcat-physics-electricity-rc-circuits-mcat': t84,
  'mcat-physics-mechanics-buoyancy-mcat': t85,
  'mcat-physics-mechanics-fluid-dynamics-mcat': t86,
  'mcat-physics-mechanics-fluids-mcat': t87,
  'mcat-physics-mechanics-forces-newton-laws-mcat': t88,
  'mcat-physics-mechanics-kinematics-mcat': t89,
  'mcat-physics-mechanics-mcat': t90,
  'mcat-physics-mechanics-momentum-collisions-mcat': t91,
  'mcat-physics-mechanics-viscosity-mcat': t92,
  'mcat-physics-mechanics-work-energy-power-mcat': t93,
  'mcat-physics-waves-interference-mcat': t94,
  'mcat-physics-waves-sound-mcat': t95,
  'mcat-psychology-behavior-cognition-language-mcat': t96,
  'mcat-psychology-behavior-development-mcat': t97,
  'mcat-psychology-behavior-disorders-mcat': t98,
  'mcat-psychology-behavior-learning-memory-mcat': t99,
  'mcat-psychology-behavior-mcat': t100,
  'mcat-psychology-behavior-sensation-perception-mcat': t101,
  'mcat-quantitative-skills-mcat': t102,
  'mcat-research-methods-mcat': t103,
  'mcat-science-passage-strategy-discrete-questions-mcat': t104,
  'mcat-science-passage-strategy-experimental-design-mcat': t105,
  'mcat-science-passage-strategy-figures-mcat': t106,
  'mcat-science-passage-strategy-mcat': t107,
  'mcat-science-passage-strategy-reading-mcat': t108,
  'mcat-social-psychology-mcat': t109,
  'mcat-sociology-culture-socialization-mcat': t110,
  'mcat-sociology-groups-interaction-mcat': t111,
  'mcat-sociology-health-disparities-mcat': t112,
  'mcat-sociology-interaction-organizations-mcat': t113,
  'mcat-sociology-mcat': t114,
  'mcat-sociology-structure-stratification-mcat': t115,
  'mcat-test-day-strategy-format-scoring-mcat': t116,
  'mcat-test-day-strategy-mcat': t117,
  'mcat-test-day-strategy-section-specific-mcat': t118,
  'mcat-test-day-strategy-study-planning-mcat': t119,
  'mcat-test-day-strategy-test-day-logistics-mcat': t120,
}
