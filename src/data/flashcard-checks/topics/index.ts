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
import { checks as t12 } from './mcat-cell-biology-cell-cycle-mcat'
import { checks as t13 } from './mcat-cell-biology-mcat'
import { checks as t14 } from './mcat-cell-biology-membrane-transport-mcat'
import { checks as t15 } from './mcat-cell-biology-organelles-mcat'
import { checks as t16 } from './mcat-cell-biology-signaling-mcat'
import { checks as t17 } from './mcat-general-chemistry-acid-base-equilibrium-mcat'
import { checks as t18 } from './mcat-general-chemistry-atomic-structure-mcat'
import { checks as t19 } from './mcat-general-chemistry-energy-mechanisms-mcat'
import { checks as t20 } from './mcat-general-chemistry-kinetics-mcat'
import { checks as t21 } from './mcat-general-chemistry-mcat'
import { checks as t22 } from './mcat-general-chemistry-solutions-gases-mcat'
import { checks as t23 } from './mcat-general-chemistry-spectra-nuclear-mcat'
import { checks as t24 } from './mcat-general-chemistry-stoichiometry-mcat'
import { checks as t25 } from './mcat-general-chemistry-thermodynamics-mcat'
import { checks as t26 } from './mcat-general-chemistry-titrations-equilibrium-mcat'
import { checks as t27 } from './mcat-genetics-evolution-immunology-mcat'
import { checks as t28 } from './mcat-genetics-evolution-mcat'
import { checks as t29 } from './mcat-genetics-evolution-mendelian-mcat'
import { checks as t30 } from './mcat-genetics-evolution-natural-selection-mcat'
import { checks as t31 } from './mcat-genetics-evolution-population-genetics-mcat'
import { checks as t32 } from './mcat-lab-methods-mcat'
import { checks as t33 } from './mcat-lab-methods-spectroscopy-assays-mcat'
import { checks as t34 } from './mcat-microbiology-antimicrobials-mcat'
import { checks as t35 } from './mcat-microbiology-bacteria-mcat'
import { checks as t36 } from './mcat-microbiology-genetics-mcat'
import { checks as t37 } from './mcat-microbiology-genetics-regulation-mcat'
import { checks as t38 } from './mcat-microbiology-mcat'
import { checks as t39 } from './mcat-molecular-biology-biotechnology-mcat'
import { checks as t40 } from './mcat-molecular-biology-dna-replication-mcat'
import { checks as t41 } from './mcat-molecular-biology-mcat'
import { checks as t42 } from './mcat-molecular-biology-transcription-mcat'
import { checks as t43 } from './mcat-molecular-biology-translation-mcat'
import { checks as t44 } from './mcat-organ-systems-cardiovascular-mcat'
import { checks as t45 } from './mcat-organ-systems-endocrine-nervous-mcat'
import { checks as t46 } from './mcat-organ-systems-mcat'
import { checks as t47 } from './mcat-organ-systems-renal-mcat'
import { checks as t48 } from './mcat-organ-systems-respiratory-mcat'
import { checks as t49 } from './mcat-organic-chemistry-carbonyls-mcat'
import { checks as t50 } from './mcat-organic-chemistry-functional-groups-mcat'
import { checks as t51 } from './mcat-organic-chemistry-mcat'
import { checks as t52 } from './mcat-organic-chemistry-sn1-sn2-e1-e2-mcat'
import { checks as t53 } from './mcat-organic-chemistry-spectroscopy-mcat'
import { checks as t54 } from './mcat-organic-chemistry-stereochemistry-mcat'
import { checks as t55 } from './mcat-physics-electricity-dc-circuits-mcat'
import { checks as t56 } from './mcat-physics-electricity-electrochemistry-mcat'
import { checks as t57 } from './mcat-physics-electricity-electrostatics-mcat'
import { checks as t58 } from './mcat-physics-electricity-emf-capacitors-mcat'
import { checks as t59 } from './mcat-physics-electricity-induction-mcat'
import { checks as t60 } from './mcat-physics-electricity-kirchhoff-power-mcat'
import { checks as t61 } from './mcat-physics-electricity-magnetism-mcat'
import { checks as t62 } from './mcat-physics-electricity-mcat'
import { checks as t63 } from './mcat-physics-electricity-optics-mcat'
import { checks as t64 } from './mcat-physics-electricity-rc-circuits-mcat'
import { checks as t65 } from './mcat-physics-mechanics-fluid-dynamics-mcat'
import { checks as t66 } from './mcat-physics-mechanics-fluids-mcat'
import { checks as t67 } from './mcat-physics-mechanics-forces-newton-laws-mcat'
import { checks as t68 } from './mcat-physics-mechanics-kinematics-mcat'
import { checks as t69 } from './mcat-physics-mechanics-mcat'
import { checks as t70 } from './mcat-physics-mechanics-momentum-collisions-mcat'
import { checks as t71 } from './mcat-physics-mechanics-work-energy-power-mcat'
import { checks as t72 } from './mcat-physics-waves-interference-mcat'
import { checks as t73 } from './mcat-physics-waves-sound-mcat'

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
  'mcat-cell-biology-cell-cycle-mcat': t12,
  'mcat-cell-biology-mcat': t13,
  'mcat-cell-biology-membrane-transport-mcat': t14,
  'mcat-cell-biology-organelles-mcat': t15,
  'mcat-cell-biology-signaling-mcat': t16,
  'mcat-general-chemistry-acid-base-equilibrium-mcat': t17,
  'mcat-general-chemistry-atomic-structure-mcat': t18,
  'mcat-general-chemistry-energy-mechanisms-mcat': t19,
  'mcat-general-chemistry-kinetics-mcat': t20,
  'mcat-general-chemistry-mcat': t21,
  'mcat-general-chemistry-solutions-gases-mcat': t22,
  'mcat-general-chemistry-spectra-nuclear-mcat': t23,
  'mcat-general-chemistry-stoichiometry-mcat': t24,
  'mcat-general-chemistry-thermodynamics-mcat': t25,
  'mcat-general-chemistry-titrations-equilibrium-mcat': t26,
  'mcat-genetics-evolution-immunology-mcat': t27,
  'mcat-genetics-evolution-mcat': t28,
  'mcat-genetics-evolution-mendelian-mcat': t29,
  'mcat-genetics-evolution-natural-selection-mcat': t30,
  'mcat-genetics-evolution-population-genetics-mcat': t31,
  'mcat-lab-methods-mcat': t32,
  'mcat-lab-methods-spectroscopy-assays-mcat': t33,
  'mcat-microbiology-antimicrobials-mcat': t34,
  'mcat-microbiology-bacteria-mcat': t35,
  'mcat-microbiology-genetics-mcat': t36,
  'mcat-microbiology-genetics-regulation-mcat': t37,
  'mcat-microbiology-mcat': t38,
  'mcat-molecular-biology-biotechnology-mcat': t39,
  'mcat-molecular-biology-dna-replication-mcat': t40,
  'mcat-molecular-biology-mcat': t41,
  'mcat-molecular-biology-transcription-mcat': t42,
  'mcat-molecular-biology-translation-mcat': t43,
  'mcat-organ-systems-cardiovascular-mcat': t44,
  'mcat-organ-systems-endocrine-nervous-mcat': t45,
  'mcat-organ-systems-mcat': t46,
  'mcat-organ-systems-renal-mcat': t47,
  'mcat-organ-systems-respiratory-mcat': t48,
  'mcat-organic-chemistry-carbonyls-mcat': t49,
  'mcat-organic-chemistry-functional-groups-mcat': t50,
  'mcat-organic-chemistry-mcat': t51,
  'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat': t52,
  'mcat-organic-chemistry-spectroscopy-mcat': t53,
  'mcat-organic-chemistry-stereochemistry-mcat': t54,
  'mcat-physics-electricity-dc-circuits-mcat': t55,
  'mcat-physics-electricity-electrochemistry-mcat': t56,
  'mcat-physics-electricity-electrostatics-mcat': t57,
  'mcat-physics-electricity-emf-capacitors-mcat': t58,
  'mcat-physics-electricity-induction-mcat': t59,
  'mcat-physics-electricity-kirchhoff-power-mcat': t60,
  'mcat-physics-electricity-magnetism-mcat': t61,
  'mcat-physics-electricity-mcat': t62,
  'mcat-physics-electricity-optics-mcat': t63,
  'mcat-physics-electricity-rc-circuits-mcat': t64,
  'mcat-physics-mechanics-fluid-dynamics-mcat': t65,
  'mcat-physics-mechanics-fluids-mcat': t66,
  'mcat-physics-mechanics-forces-newton-laws-mcat': t67,
  'mcat-physics-mechanics-kinematics-mcat': t68,
  'mcat-physics-mechanics-mcat': t69,
  'mcat-physics-mechanics-momentum-collisions-mcat': t70,
  'mcat-physics-mechanics-work-energy-power-mcat': t71,
  'mcat-physics-waves-interference-mcat': t72,
  'mcat-physics-waves-sound-mcat': t73,
}
