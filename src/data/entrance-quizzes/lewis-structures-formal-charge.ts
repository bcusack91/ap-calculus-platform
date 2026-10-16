/**
 * Entrance Quiz — Lewis Structures & Formal Charge
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Valence Electrons & the Octet Rule
 *  2 — Drawing Lewis Structures
 *  3 — Multiple Bonds
 *  4 — Formal Charge
 *  5 — Resonance Structures
 *  6 — Exceptions to the Octet Rule
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Valence Electrons & the Octet Rule
  {
    id: 'ls-ent-1a',
    question: 'How many total valence electrons are in the phosphate ion, $PO_4^{3-}$?',
    options: ['29', '26', '32', '24'],
    correctIndex: 2,
    explanation: 'P contributes 5 and the four O atoms contribute $4 \\times 6 = 24$, and the 3− charge adds 3 more electrons: $5 + 24 + 3 = 32$. Ignoring the charge gives 29, and subtracting it gives 26.',
    partNumber: 1,
    partTitle: 'Valence Electrons & the Octet Rule',
  },
  {
    id: 'ls-ent-1b',
    question: 'Selenium is in Group 16. How many valence electrons does a Se atom have, and how many covalent bonds does it typically form to complete its octet?',
    options: [
      '6 valence electrons; 2 bonds',
      '6 valence electrons; 6 bonds',
      '16 valence electrons; 2 bonds',
      '2 valence electrons; 6 bonds',
    ],
    correctIndex: 0,
    explanation: 'A Group 16 atom has 6 valence electrons and needs 2 more for an octet, so it typically forms $8 - 6 = 2$ bonds, as O does in water. Six bonds would mean sharing every valence electron, and 16 confuses the group number with the electron count.',
    partNumber: 1,
    partTitle: 'Valence Electrons & the Octet Rule',
  },

  // Part 2: Drawing Lewis Structures
  {
    id: 'ls-ent-2a',
    question: 'In the Lewis structure of oxygen difluoride, $OF_2$ (O central), how many lone pairs are there in the whole molecule?',
    options: ['6', '8', '4', '10'],
    correctIndex: 1,
    explanation: 'There are $6 + 2(7) = 20$ valence electrons; the two O–F bonds use 4, leaving 16 electrons, or 8 lone pairs (3 on each F and 2 on O). Ten would count every electron as a lone pair, including the bonding ones.',
    partNumber: 2,
    partTitle: 'Drawing Lewis Structures',
  },
  {
    id: 'ls-ent-2b',
    question: 'How many lone pairs are on the oxygen atom in the Lewis structure of the hydronium ion, $H_3O^+$?',
    options: ['2', '0', '3', '1'],
    correctIndex: 3,
    explanation: 'The ion has $6 + 3(1) - 1 = 8$ valence electrons; three O–H bonds use 6, leaving 2 electrons, which form one lone pair on O. Two lone pairs is the count for neutral water, which has one fewer bond.',
    partNumber: 2,
    partTitle: 'Drawing Lewis Structures',
  },

  // Part 3: Multiple Bonds
  {
    id: 'ls-ent-3a',
    question: 'Which describes the carbon–carbon bond in the best Lewis structure of acetylene, $C_2H_2$ (H–C–C–H skeleton)?',
    options: [
      'A triple bond, with no lone pairs on carbon',
      'A double bond, with one lone pair on each carbon',
      'A single bond, with two lone pairs on each carbon',
      'A double bond, with no lone pairs on either carbon',
    ],
    correctIndex: 0,
    explanation: 'With 10 valence electrons, the H–C≡C–H structure uses all 10 in bonds and gives each C an octet (2 from C–H plus 6 from the triple bond). A double bond with no lone pairs leaves each C with only 6 electrons, and the lone-pair versions need more than 10 electrons.',
    partNumber: 3,
    partTitle: 'Multiple Bonds',
  },
  {
    id: 'ls-ent-3b',
    question: 'Which molecule has the strongest carbon–nitrogen bond?',
    options: ['$CH_3NH_2$', '$CH_2NH$', '$HCN$', 'All three are equal'],
    correctIndex: 2,
    explanation: 'Satisfying every octet gives a C–N single bond in $CH_3NH_2$, a C=N double bond in $CH_2NH$ and a C≡N triple bond in HCN. More shared pairs make a stronger, shorter bond, so HCN\'s is strongest.',
    partNumber: 3,
    partTitle: 'Multiple Bonds',
  },

  // Part 4: Formal Charge
  {
    id: 'ls-ent-4a',
    question: 'In the Lewis structure of the cyanide ion, $[:C{\\equiv}N:]^-$, what are the formal charges on C and N?',
    options: ['C = 0, N = −1', 'C = −1, N = 0', 'C = +1, N = −2', 'C = 0, N = 0'],
    correctIndex: 1,
    explanation: 'C: $4 - 2 - 3 = -1$ (4 valence electrons, one lone pair, three bonds); N: $5 - 2 - 3 = 0$. The charges sum to −1, matching the ion; all zeros could not add up to the ion\'s charge.',
    partNumber: 4,
    partTitle: 'Formal Charge',
  },
  {
    id: 'ls-ent-4b',
    question: 'Three Lewis structures are drawn for the thiocyanate ion, $SCN^-$ (C central; Pauling values S 2.5, N 3.0): S=C=N with formal charges S 0, C 0, N −1; S–C≡N with S −1, C 0, N 0; and S≡C–N with S +1, C 0, N −2. Which structure is best?',
    options: [
      'S–C≡N, since its triple bond is the strongest bond',
      'S≡C–N, since it puts the most charge on nitrogen',
      'All three equally, since each one sums to −1',
      'S=C=N, since its −1 sits on the more electronegative N',
    ],
    correctIndex: 3,
    explanation: 'S=C=N and S–C≡N both keep formal charges small, and the tie goes to the structure that puts the negative charge on the more electronegative atom, N. S≡C–N has larger charges (+1 and −2), and summing to the ion\'s charge is required of every structure, so it cannot decide between them.',
    partNumber: 4,
    partTitle: 'Formal Charge',
  },

  // Part 5: Resonance Structures
  {
    id: 'ls-ent-5a',
    question: 'The formate ion, $HCO_2^-$, has a central C bonded to one H and two O atoms. What is the bond order of each C–O bond in its resonance hybrid?',
    options: ['1.5', '1.33', '2', '1'],
    correctIndex: 0,
    explanation: 'Each resonance structure has one C=O and one C–O, and the double bond can sit on either oxygen, so the three shared pairs are spread over two positions: $3/2 = 1.5$. A value of 1.33 would need three equivalent positions, as in carbonate.',
    partNumber: 5,
    partTitle: 'Resonance Structures',
  },
  {
    id: 'ls-ent-5b',
    question: 'Both N–O bonds in the nitrite ion, $NO_2^-$, are 124 pm long, between a typical N–O single bond (136 pm) and N=O double bond (115 pm). Which explanation is best?',
    options: [
      'The ion flips back and forth between a single and a double bond',
      'Both bonds are single bonds pulled shorter by the extra electron',
      'It is a hybrid of two resonance forms with bond order 1.5',
      'Both bonds are double bonds stretched by the ion\'s negative charge',
    ],
    correctIndex: 2,
    explanation: 'The two resonance structures place the double bond on either O, and the real ion is their blend, with two identical bonds of order 1.5 and an intermediate length. Resonance does not mean the ion switches between structures.',
    partNumber: 5,
    partTitle: 'Resonance Structures',
  },

  // Part 6: Exceptions to the Octet Rule
  {
    id: 'ls-ent-6a',
    question: 'In the Lewis structure of chlorine trifluoride, $ClF_3$ (Cl central), how many lone pairs are on the chlorine atom?',
    options: ['0', '2', '1', '3'],
    correctIndex: 1,
    explanation: 'There are $7 + 3(7) = 28$ valence electrons; three Cl–F bonds use 6 and the F lone pairs use 18, leaving 4 electrons, or 2 lone pairs, on Cl. Chlorine is in Period 3, so it can hold these 10 electrons in an expanded octet.',
    partNumber: 6,
    partTitle: 'Exceptions to the Octet Rule',
  },
  {
    id: 'ls-ent-6b',
    question: 'Which pairing of a formula with its type of octet exception is correct?',
    options: [
      '$NF_3$: expanded octet',
      '$PF_5$: incomplete octet',
      '$BeF_2$: expanded octet',
      '$ClO_3$: odd-electron species',
    ],
    correctIndex: 3,
    explanation: '$ClO_3$ has $7 + 3(6) = 25$ valence electrons, an odd number, so at least one atom must carry an unpaired electron. $PF_5$ is expanded (10 electrons on P), $BeF_2$ is incomplete (4 on Be), and N in $NF_3$ has an ordinary octet and, as a Period 2 atom, cannot expand.',
    partNumber: 6,
    partTitle: 'Exceptions to the Octet Rule',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ls-ent-7a',
    question: 'In sulfuryl chloride, $SO_2Cl_2$, S is bonded to two O atoms and two Cl atoms. In the Lewis structure that minimizes formal charges, how many S=O double bonds are there, and how many electrons surround S?',
    options: [
      '2 double bonds; 12 electrons around S',
      '0 double bonds; 8 electrons around S',
      '1 double bond; 10 electrons around S',
      '2 double bonds; 10 electrons around S',
    ],
    correctIndex: 0,
    explanation: 'With all single bonds S has a formal charge of +2 and each O has −1; converting one lone pair on each O into an S=O bond brings every formal charge to zero. S then has 6 bonds, or 12 electrons, which a Period 3 atom can hold.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ls-ent-7b',
    question: 'In the perchlorate ion, $ClO_4^-$, the structure that minimizes formal charges has three Cl=O bonds and one Cl–O bond, and the double bonds can sit on any three of the four O atoms. What is the average Cl–O bond order?',
    options: ['1.5', '1', '1.75', '2'],
    correctIndex: 2,
    explanation: 'The structure has $3 \\times 2 + 1 = 7$ bonding pairs spread over 4 equivalent Cl–O positions, so each bond has order $7/4 = 1.75$. A bond order of 1 would describe the all-single-bond structure, which puts +3 on Cl.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Valence Electrons & the Octet Rule' },
    { partNumber: 2, partTitle: 'Drawing Lewis Structures' },
    { partNumber: 3, partTitle: 'Multiple Bonds' },
    { partNumber: 4, partTitle: 'Formal Charge' },
    { partNumber: 5, partTitle: 'Resonance Structures' },
    { partNumber: 6, partTitle: 'Exceptions to the Octet Rule' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
