/**
 * Entrance Quiz — Types of Chemical Bonds
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Ionic Bonds
 *  2 — Covalent Bonds
 *  3 — Metallic Bonding
 *  4 — Bond Polarity
 *  5 — Comparing Bond Types
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Ionic Bonds
  {
    id: 'tcb-ent-1a',
    question: 'Aluminum (Group 13) and sulfur (Group 16) form an ionic compound. How many electrons does each Al atom transfer, and what is the formula?',
    options: ['3 electrons; $AlS$', '2 electrons; $Al_2S_3$', '3 electrons; $Al_2S_3$', '3 electrons; $Al_3S_2$'],
    correctIndex: 2,
    explanation: 'Al loses 3 electrons to form $Al^{3+}$ and S gains 2 to form $S^{2-}$; balancing the charges takes 2 Al and 3 S (6 electrons transferred), giving $Al_2S_3$. $Al_3S_2$ swaps the subscripts, and $AlS$ leaves the charges unbalanced.',
    partNumber: 1,
    partTitle: 'Ionic Bonds',
  },
  {
    id: 'tcb-ent-1b',
    question: 'Which list ranks NaF, CaO and KI from lowest to highest lattice energy?',
    options: ['KI < NaF < CaO', 'CaO < NaF < KI', 'NaF < KI < CaO', 'KI < CaO < NaF'],
    correctIndex: 0,
    explanation: 'Lattice energy grows with ion charge and shrinks with ion size. CaO has 2+ and 2− ions, so it is highest; NaF and KI both have 1+ and 1− ions, and KI has the larger ions, so it is lowest.',
    partNumber: 1,
    partTitle: 'Ionic Bonds',
  },

  // Part 2: Covalent Bonds
  {
    id: 'tcb-ent-2a',
    question: 'Which ranks the carbon–oxygen bond in $CO$, $CO_2$ and $CH_3OH$ from shortest to longest?',
    options: [
      '$CH_3OH$ < $CO_2$ < $CO$',
      '$CO$ < $CO_2$ < $CH_3OH$',
      '$CO_2$ < $CO$ < $CH_3OH$',
      '$CO$ < $CH_3OH$ < $CO_2$',
    ],
    correctIndex: 1,
    explanation: 'CO has a C≡O triple bond, $CO_2$ has C=O double bonds and $CH_3OH$ has a C–O single bond. More shared pairs pull the nuclei closer, so the triple bond is shortest and the single bond is longest.',
    partNumber: 2,
    partTitle: 'Covalent Bonds',
  },
  {
    id: 'tcb-ent-2b',
    question: 'The H–H bond energy is 436 kJ/mol. What is $\\Delta H$ when 2 mol of H atoms combine to form 1 mol of $H_2$ gas?',
    options: ['+436 kJ', '−872 kJ', '+218 kJ', '−436 kJ'],
    correctIndex: 3,
    explanation: 'Forming 1 mol of H–H bonds releases the same energy it takes to break them, so $\\Delta H = -436$ kJ. A positive sign would mean bond breaking, and −872 kJ counts two bonds when 2 mol of atoms make only 1 mol of bonds.',
    partNumber: 2,
    partTitle: 'Covalent Bonds',
  },

  // Part 3: Metallic Bonding
  {
    id: 'tcb-ent-3a',
    question: 'Magnesium melts at 650 °C and sodium at 98 °C. Which statement best explains the difference?',
    options: [
      'Mg: it adds two electrons per atom to the sea, and its cation is smaller',
      'Na: its larger atoms pack together more tightly in the lattice',
      'Na: its single valence electron moves more freely through the metal',
      'Mg: its atoms share electrons in fixed covalent bonds with neighbors',
    ],
    correctIndex: 0,
    explanation: 'Metallic bond strength rises with the number of delocalized electrons and with smaller, more highly charged cations: $Mg^{2+}$ with two electrons in the sea beats $Na^{+}$ with one. Metals do not form fixed covalent bonds, and larger atoms weaken rather than strengthen the attraction.',
    partNumber: 3,
    partTitle: 'Metallic Bonding',
  },
  {
    id: 'tcb-ent-3b',
    question: 'Solid copper conducts electricity, but solid copper(II) chloride, $CuCl_2$, does not. Why?',
    options: [
      'Copper atoms are smaller, so charge hops between them more easily',
      'Solid $CuCl_2$ contains no charged particles of any kind',
      'Copper has mobile delocalized electrons, but the ions in solid $CuCl_2$ are fixed',
      'Copper\'s ions move through the metal, but $CuCl_2$ keeps its electrons fixed',
    ],
    correctIndex: 2,
    explanation: 'Conduction needs mobile charges: the delocalized electron sea moves freely through copper, while the $Cu^{2+}$ and $Cl^-$ ions in the ionic solid are locked in the lattice. $CuCl_2$ is full of charged ions, and the copper cations stay in place; it is the electrons that move.',
    partNumber: 3,
    partTitle: 'Metallic Bonding',
  },

  // Part 4: Bond Polarity
  {
    id: 'tcb-ent-4a',
    question: 'Using electronegativities H 2.1, C 2.5, S 2.5, N 3.0, O 3.5 and F 4.0, which list ranks the bonds from least polar to most polar?',
    options: ['N–H < O–F < C–S', 'C–S < O–F < N–H', 'O–F < C–S < N–H', 'C–S < N–H < O–F'],
    correctIndex: 1,
    explanation: 'Polarity follows $\\Delta\\chi$: C–S is 0, O–F is 0.5 and N–H is 0.9, so N–H is the most polar. Assuming any bond to fluorine is the most polar ignores that oxygen is also highly electronegative.',
    partNumber: 4,
    partTitle: 'Bond Polarity',
  },
  {
    id: 'tcb-ent-4b',
    question: 'Using electronegativities H 2.1, C 2.5, N 3.0 and Cl 3.0, which atoms carry the partial negative charge ($\\delta^-$) in a C–Cl bond and in an N–H bond?',
    options: ['C in C–Cl and N in N–H', 'Cl in C–Cl and H in N–H', 'C in C–Cl and H in N–H', 'Cl in C–Cl and N in N–H'],
    correctIndex: 3,
    explanation: 'The more electronegative atom pulls the shared pair toward itself and becomes $\\delta^-$: Cl (3.0) over C (2.5), and N (3.0) over H (2.1). The other choices place the partial negative charge on the less electronegative atom in at least one bond.',
    partNumber: 4,
    partTitle: 'Bond Polarity',
  },

  // Part 5: Comparing Bond Types
  {
    id: 'tcb-ent-5a',
    question: 'Which ranks $CH_4$, NaCl and $SiO_2$ from lowest to highest melting point?',
    options: [
      '$CH_4$ < NaCl < $SiO_2$',
      '$SiO_2$ < NaCl < $CH_4$',
      'NaCl < $CH_4$ < $SiO_2$',
      '$CH_4$ < $SiO_2$ < NaCl',
    ],
    correctIndex: 0,
    explanation: 'Melting molecular $CH_4$ overcomes only weak forces between molecules, melting NaCl overcomes ionic attractions (801 °C), and melting the covalent network of $SiO_2$ requires breaking covalent bonds throughout the solid (1710 °C). Treating $SiO_2$ as a small molecule puts it too low.',
    partNumber: 5,
    partTitle: 'Comparing Bond Types',
  },
  {
    id: 'tcb-ent-5b',
    question: 'Which statement correctly describes the bonding in ammonium nitrate, $NH_4NO_3$?',
    options: [
      'It is purely covalent, since it contains no metal atoms',
      'It is purely ionic, since every salt is held only by ionic bonds',
      'It has covalent bonds within each ion and ionic attraction between ions',
      'It has metallic bonding between its nitrogen atoms',
    ],
    correctIndex: 2,
    explanation: 'Inside $NH_4^+$ and $NO_3^-$ the atoms share electrons (covalent bonds), and the oppositely charged ions attract each other (ionic bonding). A compound needs no metal to be ionic when it contains polyatomic ions.',
    partNumber: 5,
    partTitle: 'Comparing Bond Types',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'tcb-ent-6a',
    question: 'Using electronegativities Sr 1.0, P 2.1, Cl 3.0 and Br 2.8, classify the bonding in $SrCl_2$, $PCl_3$ and $Br_2$, in that order.',
    options: [
      'polar covalent, polar covalent, nonpolar covalent',
      'ionic, polar covalent, nonpolar covalent',
      'ionic, nonpolar covalent, nonpolar covalent',
      'metallic, polar covalent, nonpolar covalent',
    ],
    correctIndex: 1,
    explanation: '$SrCl_2$ joins a metal and a nonmetal with $\\Delta\\chi = 2.0$ (ionic), P–Cl has $\\Delta\\chi = 0.9$ (polar covalent), and Br–Br joins identical atoms (nonpolar covalent). Sr is a metal, but in this compound it has become a cation, so the bonding is not metallic.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'tcb-ent-6b',
    question: 'Using lattice energy $\\propto q_+q_-/r$, how does the lattice energy of a compound of 2+ and 2− ions separated by $2d$ compare with that of a compound of 1+ and 1− ions separated by $d$?',
    options: ['Twice as large', 'Four times as large', 'One-half as large', 'Exactly the same'],
    correctIndex: 0,
    explanation: 'The charge product rises by a factor of 4 ($2 \\times 2$ vs. $1 \\times 1$) while doubling the separation halves the attraction, so the net effect is $4/2 = 2$ times larger. Four times ignores the larger distance, and dividing by $r^2$ would wrongly cancel the charge effect.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'tcb-ent-7a',
    question: 'Which statement about a crystal of potassium bromide, KBr, is correct?',
    options: [
      'It is built from separate KBr molecules held by weak forces',
      'Each K atom shares one electron pair with a single Br atom',
      'Its valence electrons are delocalized across all of the ions',
      'Each $K^+$ ion is surrounded by several $Br^-$ ions',
    ],
    correctIndex: 3,
    explanation: 'An ionic solid is an extended lattice in which every cation is surrounded by anions and vice versa; the formula KBr is only the simplest ion ratio, a formula unit. Shared pairs describe covalent bonds and a delocalized electron sea describes metals.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'tcb-ent-7b',
    question: 'Solid W is soft, melts at 44 °C and never conducts. Solid X is shiny, malleable and conducts as a solid. Solid Y is brittle, melts at 996 °C and conducts only when molten. Solid Z is extremely hard, melts at 1,710 °C and never conducts. Which identification is correct?',
    options: [
      'W ionic, X metallic, Y molecular, Z network',
      'W molecular, X metallic, Y network, Z ionic',
      'W molecular, X metallic, Y ionic, Z network',
      'W network, X metallic, Y ionic, Z molecular',
    ],
    correctIndex: 2,
    explanation: 'A low melting point with no conduction marks a molecular solid (W), conduction as a solid marks a metal (X), conducting only when molten marks an ionic solid (Y), and extreme hardness with a very high melting point and no conduction marks a covalent network (Z). The other choices swap ionic and network or molecular and network solids.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Ionic Bonds' },
    { partNumber: 2, partTitle: 'Covalent Bonds' },
    { partNumber: 3, partTitle: 'Metallic Bonding' },
    { partNumber: 4, partTitle: 'Bond Polarity' },
    { partNumber: 5, partTitle: 'Comparing Bond Types' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
