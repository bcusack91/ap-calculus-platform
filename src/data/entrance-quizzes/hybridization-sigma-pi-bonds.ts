/**
 * Entrance Quiz — Hybridization & Sigma/Pi Bonds
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Hybridization and Sigma/Pi Bonds
 *  2 — sp² and sp Hybridization
 *  3 — Sigma and Pi Bonds
 *  4 — Hybridization from Molecular Structure
 *  5 — Multiple Bonds and Hybridization
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Hybridization and Sigma/Pi Bonds
  {
    id: 'hyb-ent-1a',
    question: 'The phosphorus atom in $PCl_3$ has three bonds and one lone pair. What are its hybridization and its ideal electron-domain angle?',
    options: ['$sp^2$, 120°', '$sp^3$, 120°', '$sp^3$, 109.5°', 'sp, 180°'],
    correctIndex: 2,
    explanation: 'Three bonds plus one lone pair make four electron domains, which is $sp^3$ with a tetrahedral arrangement and an ideal angle of 109.5°. Leaving out the lone pair gives $sp^2$ and 120°.',
    partNumber: 1,
    partTitle: 'Hybridization and Sigma/Pi Bonds',
  },
  {
    id: 'hyb-ent-1b',
    question: 'In which species is the indicated atom not $sp^3$ hybridized?',
    options: ['The B in $BH_3$', 'The N in $NH_4^+$', 'The O in $H_3O^+$', 'The C in $CH_3^-$'],
    correctIndex: 0,
    explanation: 'B in $BH_3$ has three bonds and no lone pair, only three domains, so it is $sp^2$. N in $NH_4^+$ has four bonds, while O in $H_3O^+$ and C in $CH_3^-$ each have three bonds plus a lone pair: four domains, $sp^3$.',
    partNumber: 1,
    partTitle: 'Hybridization and Sigma/Pi Bonds',
  },

  // Part 2: sp² and sp Hybridization
  {
    id: 'hyb-ent-2a',
    question: 'In which species is the central nitrogen atom sp hybridized?',
    options: ['$NO_2^-$', '$N_3^-$', '$NH_2^-$', '$NO_3^-$'],
    correctIndex: 1,
    explanation: 'In azide, $[N{=}N{=}N]^-$, the central N has two double bonds and no lone pair, so two domains make it sp. N in $NO_2^-$ (two bonds + one lone pair) and in $NO_3^-$ (three bonds) has three domains ($sp^2$), and N in $NH_2^-$ (two bonds + two lone pairs) has four ($sp^3$).',
    partNumber: 2,
    partTitle: 'sp² and sp Hybridization',
  },
  {
    id: 'hyb-ent-2b',
    question: 'In methanimine, $H_2C{=}NH$, the N atom is double-bonded to C, single-bonded to H and has one lone pair. Which description of the N atom is correct?',
    options: [
      'sp, with a pair of pi bonds',
      '$sp^3$, with zero pi bonds',
      '$sp^2$, with two pi bonds',
      '$sp^2$, with one pi bond',
    ],
    correctIndex: 3,
    explanation: 'Two bonds plus one lone pair give N three domains, so it is $sp^2$, and an $sp^2$ atom has one unhybridized p orbital for a single pi bond, the one in C=N. Counting the double bond as two domains or ignoring the lone pair leads to the wrong labels.',
    partNumber: 2,
    partTitle: 'sp² and sp Hybridization',
  },

  // Part 3: Sigma and Pi Bonds
  {
    id: 'hyb-ent-3a',
    question: 'How many sigma and pi bonds are in propyne, $HC{\\equiv}C{-}CH_3$?',
    options: ['6σ, 2π', '4σ, 2π', '6σ, 3π', '8σ, 0π'],
    correctIndex: 0,
    explanation: 'There are four C–H bonds, one C–C single bond and one C≡C triple bond; each bond has exactly one sigma bond (6σ), and the triple bond adds two pi bonds (2π). Counting all three lines of the triple bond as sigma gives 8σ, 0π.',
    partNumber: 3,
    partTitle: 'Sigma and Pi Bonds',
  },
  {
    id: 'hyb-ent-3b',
    question: 'Which statement correctly compares sigma and pi bonds?',
    options: [
      'Pi bonds form first between two atoms, and sigma bonds are added later',
      'Pi bonds are stronger, because side-by-side overlap is more extensive',
      'Sigma density is on the axis, but pi density is above and below it',
      'A double bond contains two sigma bonds of equal strength',
    ],
    correctIndex: 2,
    explanation: 'Head-on overlap puts sigma electron density along the line between the nuclei, while side-by-side p-orbital overlap puts pi density above and below that line. The first bond between two atoms is always sigma, pi bonds are weaker, and a double bond is one sigma plus one pi.',
    partNumber: 3,
    partTitle: 'Sigma and Pi Bonds',
  },

  // Part 4: Hybridization from Molecular Structure
  {
    id: 'hyb-ent-4a',
    question: 'What are the hybridization and the molecular shape of the sulfur atom in the sulfite ion, $SO_3^{2-}$ (three S–O bonds and one lone pair on S)?',
    options: [
      '$sp^2$, trigonal planar',
      '$sp^3$, trigonal pyramidal',
      '$sp^3$, tetrahedral',
      '$sp^2$, trigonal pyramidal',
    ],
    correctIndex: 1,
    explanation: 'Three bonds plus one lone pair make four domains, so S is $sp^3$; the molecular shape shows only the atoms, so it is trigonal pyramidal. $sp^2$ and trigonal planar would require no lone pair, and tetrahedral describes the electron domains, not the shape.',
    partNumber: 4,
    partTitle: 'Hybridization from Molecular Structure',
  },
  {
    id: 'hyb-ent-4b',
    question: 'In acetic acid, $CH_3{-}C({=}O){-}OH$, what are the hybridizations of the $CH_3$ carbon, the C=O carbon and the double-bonded (carbonyl) oxygen, in that order?',
    options: [
      '$sp^3$, $sp^2$, $sp^3$',
      '$sp^3$, $sp^3$, $sp^3$',
      '$sp^2$, $sp^2$, $sp^3$',
      '$sp^3$, $sp^2$, $sp^2$',
    ],
    correctIndex: 3,
    explanation: 'The $CH_3$ carbon has four single bonds ($sp^3$), the carbonyl carbon has three domains including the C=O ($sp^2$), and the carbonyl oxygen has one double bond plus two lone pairs, three domains ($sp^2$). Calling that oxygen $sp^3$ counts the double bond as two domains.',
    partNumber: 4,
    partTitle: 'Hybridization from Molecular Structure',
  },

  // Part 5: Multiple Bonds and Hybridization
  {
    id: 'hyb-ent-5a',
    question: 'Average bond energies are 347 kJ/mol for C–C and 839 kJ/mol for C≡C. About how much energy does each pi bond in C≡C contribute?',
    options: ['246 kJ/mol', '492 kJ/mol', '280 kJ/mol', '839 kJ/mol'],
    correctIndex: 0,
    explanation: 'The triple bond is one sigma bond (about the C–C value) plus two pi bonds, so the pi bonds together supply $839 - 347 = 492$ kJ/mol, or about 246 kJ/mol each. 492 is both pi bonds together, and 280 splits the triple bond into three equal parts.',
    partNumber: 5,
    partTitle: 'Multiple Bonds and Hybridization',
  },
  {
    id: 'hyb-ent-5b',
    question: 'Why does 2-butene, $CH_3{-}CH{=}CH{-}CH_3$, exist as two different geometric isomers while butane does not?',
    options: [
      'The $sp^3$ carbons in 2-butene hold the methyl groups in fixed spots',
      'Butane\'s C–C sigma bonds are too weak to hold the molecule rigid',
      'The C=C pi bond prevents rotation, locking each group on one side',
      'The two isomers have different numbers of sigma and pi bonds',
    ],
    correctIndex: 2,
    explanation: 'Rotating about C=C would break the side-by-side overlap of the pi bond, so the methyl groups stay locked on the same side or opposite sides. Butane has only sigma bonds, around which rotation is free; the double-bond carbons are $sp^2$, and both isomers have the same bonds.',
    partNumber: 5,
    partTitle: 'Multiple Bonds and Hybridization',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'hyb-ent-6a',
    question: 'Urea, $(NH_2)_2CO$, has a carbon double-bonded to O and single-bonded to two N atoms, each of which carries two H atoms. What is the carbon\'s hybridization, and how many sigma and pi bonds does the molecule have?',
    options: [
      '$sp^3$; 7σ and 1π',
      '$sp^2$; 7σ and 1π',
      '$sp^2$; 8σ and 1π',
      '$sp^2$; 6σ and 2π',
    ],
    correctIndex: 1,
    explanation: 'The carbon has three domains (C=O and two C–N), so it is $sp^2$. The bonds are one C=O, two C–N and four N–H: seven bonds, each with one sigma (7σ), and the C=O adds one pi (1π).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'hyb-ent-6b',
    question: 'What are the hybridizations of the four carbons in $CH_3{-}CH{=}CH{-}C{\\equiv}N$, from left to right?',
    options: [
      '$sp^3$, $sp^2$, $sp^2$, $sp^2$',
      '$sp^3$, $sp^3$, $sp^2$, sp',
      'sp, $sp^2$, $sp^2$, $sp^3$',
      '$sp^3$, $sp^2$, $sp^2$, sp',
    ],
    correctIndex: 3,
    explanation: 'The $CH_3$ carbon has four single bonds ($sp^3$), the two C=C carbons each have three domains ($sp^2$), and the nitrile carbon has two domains, a single bond and the C≡N triple bond (sp). Reading the list backward gives sp first.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'hyb-ent-7a',
    question: 'Which molecule has an $sp^3$-hybridized central atom and is nonpolar?',
    options: ['$SiF_4$', '$NF_3$', '$BF_3$', '$H_2S$'],
    correctIndex: 0,
    explanation: 'Si in $SiF_4$ has four bonds and no lone pairs ($sp^3$), and the four identical Si–F dipoles cancel in the tetrahedral shape. $NF_3$ and $H_2S$ are also $sp^3$ but their lone pairs make them polar, while $BF_3$ is nonpolar but $sp^2$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'hyb-ent-7b',
    question: 'A student says the oxygen in $H_2O$ is sp hybridized because it forms only two bonds. Which statement best corrects the claim?',
    options: [
      'O cannot be hybridized, since it bonds only to hydrogen',
      'Water is linear, so the sp label is correct as stated',
      'Its two lone pairs also count, giving four domains and $sp^3$',
      'O forms two pi bonds in water, which makes it $sp^2$ instead',
    ],
    correctIndex: 2,
    explanation: 'Hybridization follows the total number of electron domains, and lone pairs count: two bonds plus two lone pairs make four domains, $sp^3$, which is why water is bent at about 104.5°. Water has no pi bonds and is not linear.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Hybridization and Sigma/Pi Bonds' },
    { partNumber: 2, partTitle: 'sp² and sp Hybridization' },
    { partNumber: 3, partTitle: 'Sigma and Pi Bonds' },
    { partNumber: 4, partTitle: 'Hybridization from Molecular Structure' },
    { partNumber: 5, partTitle: 'Multiple Bonds and Hybridization' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
