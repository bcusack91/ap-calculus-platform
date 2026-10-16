/**
 * Entrance Quiz — VSEPR & Molecular Geometry
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — VSEPR Theory and Molecular Geometry
 *  2 — Linear, Trigonal Planar, and Tetrahedral Geometries
 *  3 — Trigonal Bipyramidal and Octahedral Geometries
 *  4 — Lone Pair Effects on Molecular Geometry
 *  5 — Predicting Molecular Geometry
 *  6 — Polarity of Molecules
 *  7 — Synthesis & AP Exam Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: VSEPR Theory and Molecular Geometry
  {
    id: 'vs-ent-1a',
    question: 'Each carbon in ethylene, $C_2H_4$, has two C–H single bonds and one C=C double bond. The oxygen in methanol, $CH_3OH$, has two single bonds and two lone pairs. What are the steric numbers of these atoms?',
    options: ['4 for C, 4 for O', '3 for C, 2 for O', '3 for C, 4 for O', '4 for C, 2 for O'],
    correctIndex: 2,
    explanation: 'Every bond counts as one electron domain whatever its order, and every lone pair counts as one: C has $2 + 1 = 3$ and O has $2 + 2 = 4$. Counting the double bond twice gives 4 for C, and skipping lone pairs gives 2 for O.',
    partNumber: 1,
    partTitle: 'VSEPR Theory and Molecular Geometry',
  },
  {
    id: 'vs-ent-1b',
    question: 'The selenium atom in $SeCl_2$ has two bonds and two lone pairs. What are its electron-domain geometry and its molecular geometry?',
    options: [
      'Tetrahedral electron domains; bent molecule',
      'Bent electron domains; tetrahedral molecule',
      'Linear electron domains; linear molecule',
      'Trigonal planar electron domains; bent molecule',
    ],
    correctIndex: 0,
    explanation: 'Four electron domains (2 bonds + 2 lone pairs) give a tetrahedral electron-domain geometry, but the molecular shape describes only the atoms, so with two lone pairs the molecule is bent. Ignoring the lone pairs gives a linear shape, and a trigonal planar arrangement would need only three domains.',
    partNumber: 1,
    partTitle: 'VSEPR Theory and Molecular Geometry',
  },

  // Part 2: Linear, Trigonal Planar, and Tetrahedral Geometries
  {
    id: 'vs-ent-2a',
    question: 'None of the central atoms in $BeCl_2$, $BCl_3$ and $CCl_4$ has a lone pair. What are their ideal Cl–X–Cl bond angles, in that order?',
    options: ['180°, 109.5°, 120°', '180°, 120°, 109.5°', '90°, 120°, 109.5°', '180°, 120°, 90°'],
    correctIndex: 1,
    explanation: 'Two domains spread to 180° (linear), three to 120° (trigonal planar) and four to 109.5° (tetrahedral). A 90° angle would require five or six domains, and the 120° and 109.5° values belong to three and four domains, not the reverse.',
    partNumber: 2,
    partTitle: 'Linear, Trigonal Planar, and Tetrahedral Geometries',
  },
  {
    id: 'vs-ent-2b',
    question: 'Which of these species has a trigonal planar molecular geometry?',
    options: ['$SO_3^{2-}$', '$NH_3$', '$ClF_3$', '$CO_3^{2-}$'],
    correctIndex: 3,
    explanation: 'The C in $CO_3^{2-}$ has three electron domains (its resonance bonds to O) and no lone pair, so it is trigonal planar. $SO_3^{2-}$ and $NH_3$ each have a lone pair on the central atom (trigonal pyramidal), and $ClF_3$ has two (T-shaped).',
    partNumber: 2,
    partTitle: 'Linear, Trigonal Planar, and Tetrahedral Geometries',
  },

  // Part 3: Trigonal Bipyramidal and Octahedral Geometries
  {
    id: 'vs-ent-3a',
    question: 'In the octahedral $SF_6$ molecule, how many of the other F atoms lie at 90° to any one chosen F atom?',
    options: ['4', '5', '2', '6'],
    correctIndex: 0,
    explanation: 'All six positions in an octahedron are equivalent: each has four neighbors at 90° and one directly opposite at 180°. Five counts every other F atom, including the one at 180°.',
    partNumber: 3,
    partTitle: 'Trigonal Bipyramidal and Octahedral Geometries',
  },
  {
    id: 'vs-ent-3b',
    question: 'Sulfur in $SF_4$ has five electron domains: four bonds and one lone pair. Where does the lone pair sit, and why?',
    options: [
      'Axial, where it is farthest from the other domains',
      'Axial, where it can sit closer to the sulfur nucleus',
      'Equatorial, where it has only two 90° neighbors',
      'Either site, since all five positions are equivalent',
    ],
    correctIndex: 2,
    explanation: 'An equatorial site has two neighbors at 90°, while an axial site has three, so placing the lone pair equatorially minimizes the strongest repulsions and gives the seesaw shape. Unlike an octahedron, the five sites of a trigonal bipyramid are not equivalent.',
    partNumber: 3,
    partTitle: 'Trigonal Bipyramidal and Octahedral Geometries',
  },

  // Part 4: Lone Pair Effects on Molecular Geometry
  {
    id: 'vs-ent-4a',
    question: 'Which pair of species has the same molecular geometry?',
    options: [
      '$XeF_4$ and $SF_4$',
      '$ICl_2^-$ and $CO_2$',
      '$BrF_5$ and $PCl_5$',
      '$NH_3$ and $BF_3$',
    ],
    correctIndex: 1,
    explanation: 'I in $ICl_2^-$ has two bonds and three lone pairs, which fill the equatorial positions and leave a linear molecule, the same shape as $CO_2$. $XeF_4$ is square planar while $SF_4$ is seesaw, $BrF_5$ is square pyramidal while $PCl_5$ is trigonal bipyramidal, and $NH_3$ is pyramidal while $BF_3$ is planar.',
    partNumber: 4,
    partTitle: 'Lone Pair Effects on Molecular Geometry',
  },
  {
    id: 'vs-ent-4b',
    question: 'Sulfur difluoride, $SF_2$, is bent, with two bonds and two lone pairs on S. What is the best prediction for its F–S–F bond angle?',
    options: ['Exactly 120°', 'Exactly 180°', 'Slightly more than 109.5°', 'Slightly less than 109.5°'],
    correctIndex: 3,
    explanation: 'Four electron domains set a tetrahedral starting angle of 109.5°, and the two lone pairs repel the bonding pairs more strongly, squeezing the angle below that value. 120° belongs to three domains and 180° to a linear molecule.',
    partNumber: 4,
    partTitle: 'Lone Pair Effects on Molecular Geometry',
  },

  // Part 5: Predicting Molecular Geometry
  {
    id: 'vs-ent-5a',
    question: 'Xenon trioxide, $XeO_3$, has 26 valence electrons, and its Xe atom is bonded to three O atoms. What is its molecular geometry?',
    options: ['Trigonal pyramidal', 'Trigonal planar', 'T-shaped', 'Tetrahedral'],
    correctIndex: 0,
    explanation: 'After the Xe–O bonds and the O lone pairs are placed, one lone pair remains on Xe, giving four electron domains (3 bonds + 1 lone pair) and a trigonal pyramidal shape. Trigonal planar ignores that lone pair, and T-shaped would need two lone pairs.',
    partNumber: 5,
    partTitle: 'Predicting Molecular Geometry',
  },
  {
    id: 'vs-ent-5b',
    question: 'What is the molecular geometry of the chlorite ion, $ClO_2^-$ (Cl central)?',
    options: ['Linear', 'Trigonal planar', 'Bent', 'T-shaped'],
    correctIndex: 2,
    explanation: 'The ion has $7 + 2(6) + 1 = 20$ valence electrons, which leaves two lone pairs on Cl after the bonds and O lone pairs are placed. Two bonds plus two lone pairs give a tetrahedral electron arrangement and a bent shape; linear would mean no lone pairs (or three).',
    partNumber: 5,
    partTitle: 'Predicting Molecular Geometry',
  },

  // Part 6: Polarity of Molecules
  {
    id: 'vs-ent-6a',
    question: 'Which pair consists of two nonpolar molecules?',
    options: [
      '$SO_2$ and $CO_2$',
      '$CS_2$ and $BCl_3$',
      '$CH_2F_2$ and $CF_4$',
      '$PCl_3$ and $PCl_5$',
    ],
    correctIndex: 1,
    explanation: 'Linear $CS_2$ and trigonal planar $BCl_3$ have identical outer atoms arranged symmetrically, so their bond dipoles cancel. $SO_2$ is bent, $CH_2F_2$ has two kinds of outer atoms, and $PCl_3$ has a lone pair that makes it pyramidal, so each pair contains one polar molecule.',
    partNumber: 6,
    partTitle: 'Polarity of Molecules',
  },
  {
    id: 'vs-ent-6b',
    question: 'Chloromethane, $CH_3Cl$, and carbon tetrachloride, $CCl_4$, are both tetrahedral. Which statement about their polarity is correct?',
    options: [
      'Only $CCl_4$ is polar, because it has more polar C–Cl bonds',
      'Both are polar, because each contains polar C–Cl bonds',
      'Neither is polar, because tetrahedral shapes always cancel dipoles',
      'Only $CH_3Cl$ is polar, because its unlike outer atoms leave a net dipole',
    ],
    correctIndex: 3,
    explanation: 'In $CCl_4$ four identical C–Cl dipoles cancel by symmetry, but in $CH_3Cl$ one C–Cl dipole is not balanced by the weaker C–H dipoles, leaving a net dipole. A symmetric shape cancels dipoles only when all the outer atoms are the same.',
    partNumber: 6,
    partTitle: 'Polarity of Molecules',
  },

  // Part 7: Synthesis & AP Exam Review
  {
    id: 'vs-ent-7a',
    question: 'Which species has the largest bond angle around its central atom?',
    options: ['$SO_3$', '$NO_2^-$', '$NH_4^+$', '$H_2S$'],
    correctIndex: 0,
    explanation: '$SO_3$ has three electron domains and no lone pair, so its angles are 120°. $NO_2^-$ also has three domains but one is a lone pair, squeezing its angle below 120°, while $NH_4^+$ is tetrahedral (109.5°) and bent $H_2S$ is smaller still.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Exam Review',
  },
  {
    id: 'vs-ent-7b',
    question: 'Bromine trifluoride, $BrF_3$, has three Br–F bonds and two lone pairs on Br. What are its molecular geometry and polarity?',
    options: ['Nonpolar, trigonal planar', 'Polar, trigonal pyramidal', 'Polar, T-shaped', 'Nonpolar, T-shaped'],
    correctIndex: 2,
    explanation: 'Five electron domains with both lone pairs in equatorial positions leave the three F atoms in a T shape, which is not symmetric, so the Br–F dipoles do not cancel and the molecule is polar. Trigonal planar and trigonal pyramidal shapes ignore one or both lone pairs.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Exam Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'VSEPR Theory and Molecular Geometry' },
    { partNumber: 2, partTitle: 'Linear, Trigonal Planar, and Tetrahedral Geometries' },
    { partNumber: 3, partTitle: 'Trigonal Bipyramidal and Octahedral Geometries' },
    { partNumber: 4, partTitle: 'Lone Pair Effects on Molecular Geometry' },
    { partNumber: 5, partTitle: 'Predicting Molecular Geometry' },
    { partNumber: 6, partTitle: 'Polarity of Molecules' },
    { partNumber: 7, partTitle: 'Synthesis & AP Exam Review' },
  ]
}
