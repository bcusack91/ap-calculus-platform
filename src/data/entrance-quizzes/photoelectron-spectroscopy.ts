/**
 * Entrance Quiz — Photoelectron Spectroscopy (PES)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Introduction to PES
 *  2 — Interpreting PES Spectra
 *  3 — Binding Energy & Subshells
 *  4 — Relative Peak Heights
 *  5 — Identifying Elements from PES
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to PES
  {
    id: 'pes-ent-1a',
    question: 'X-ray photons carrying 200 MJ/mol strike gaseous magnesium atoms, whose 1s binding energy is 126 MJ/mol. What kinetic energy do the ejected 1s electrons have?',
    options: ['326 MJ/mol', '126 MJ/mol', '200 MJ/mol', '74 MJ/mol'],
    correctIndex: 3,
    explanation: 'The photon\'s energy pays the binding energy and the rest becomes kinetic energy: $KE = E_{photon} - BE = 200 - 126 = 74$ MJ/mol. Adding the two values gives 326, and 126 or 200 would mean no energy went to binding or to motion.',
    partNumber: 1,
    partTitle: 'Introduction to PES',
  },
  {
    id: 'pes-ent-1b',
    question: 'Gaseous sodium atoms have binding energies of 104 (1s), 6.84 (2s), 3.67 (2p) and 0.50 (3s) MJ/mol. If the photons used carry 100 MJ/mol each, which electrons can be ejected?',
    options: [
      'Only the 3s electron',
      'The 2s, 2p and 3s electrons',
      'Electrons from all four subshells',
      'Only the 1s electrons',
    ],
    correctIndex: 1,
    explanation: 'A single photon must supply at least the binding energy, so 100 MJ/mol photons can eject any electron bound by less than 100 MJ/mol: the 2s, 2p and 3s electrons. The 1s electrons (104 MJ/mol) stay put, and the photons are not limited to the outermost electron.',
    partNumber: 1,
    partTitle: 'Introduction to PES',
  },

  // Part 2: Interpreting PES Spectra
  {
    id: 'pes-ent-2a',
    question: 'In the PES spectrum of sulfur ($1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$), which peak is the tallest, and where does it sit?',
    options: [
      'The 2p peak, at higher binding energy than 3p',
      'The 3p peak, at the lowest binding energy',
      'The 1s peak, at the highest binding energy',
      'The 2p peak, at lower binding energy than 3p',
    ],
    correctIndex: 0,
    explanation: 'Peak height is proportional to the number of electrons, so the 2p peak (6 electrons) is tallest, and 2p electrons are closer to the nucleus than 3p, so it appears at higher binding energy. The 3p peak has only 4 electrons, and the 1s peak is farthest left but holds only 2.',
    partNumber: 2,
    partTitle: 'Interpreting PES Spectra',
  },
  {
    id: 'pes-ent-2b',
    question: 'A neutral atom\'s PES spectrum has five peaks whose heights are in the ratio 1 : 1 : 3 : 1 : 2 (highest to lowest binding energy). Which element is it?',
    options: ['O (Z = 8)', 'Si (Z = 14)', 'S (Z = 16)', 'Ar (Z = 18)'],
    correctIndex: 2,
    explanation: 'Heights are relative, and the first peak must be the 1s subshell with 2 electrons, so double every value: 2, 2, 6, 2, 4, a total of 16 electrons, sulfur. Summing the raw ratio gives 8 (oxygen), but oxygen has only three occupied subshells.',
    partNumber: 2,
    partTitle: 'Interpreting PES Spectra',
  },

  // Part 3: Binding Energy & Subshells
  {
    id: 'pes-ent-3a',
    question: 'In the PES spectrum of phosphorus, the 3s and 3p peaks lie at 1.95 and 1.01 MJ/mol, while the 2p peak lies at 13.5 MJ/mol. What does this spacing show?',
    options: [
      'The 3s and 3p electrons are equally far from the nucleus',
      'Subshells in one shell differ less in energy than shells do',
      'The 3p electrons are core electrons, like the 2p electrons',
      'The 2p subshell holds more electrons than the 3s subshell',
    ],
    correctIndex: 1,
    explanation: 'Peaks within the same principal level (3s and 3p) sit close together, while moving to a different shell (2p) produces a large jump in binding energy. The 3s peak is at higher energy than 3p, so they are not equivalent, and the 3p electrons are valence electrons; peak spacing says nothing about electron counts.',
    partNumber: 3,
    partTitle: 'Binding Energy & Subshells',
  },
  {
    id: 'pes-ent-3b',
    question: 'The PES spectrum of calcium has peaks at 390, 42.7, 34.0, 4.65, 2.90 and 0.59 MJ/mol. Which subshell produces the peak at 2.90 MJ/mol, and what is its relative height?',
    options: ['3p with height 6', '3s with height 2', '4s with height 2', '2p with height 6'],
    correctIndex: 0,
    explanation: 'Calcium is $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2$, and binding energy falls in that order, so the fifth peak (2.90 MJ/mol) is 3p with 6 electrons. The 4s peak is the last one at 0.59 MJ/mol, the 3s peak is at 4.65 and the 2p peak is at 34.0.',
    partNumber: 3,
    partTitle: 'Binding Energy & Subshells',
  },

  // Part 4: Relative Peak Heights
  {
    id: 'pes-ent-4a',
    question: 'A neutral atom\'s PES spectrum has relative peak heights 2, 2, 6, 2, 6, 10, 2, 5 (highest to lowest binding energy). How many valence electrons does it have?',
    options: ['17', '5', '7', '35'],
    correctIndex: 2,
    explanation: 'The total is 35 (bromine), whose valence shell is n = 4: the 4s peak (2) plus the 4p peak (5) gives 7 valence electrons. The filled 3d subshell belongs to the core, so counting it gives 17, and 5 counts only the last peak.',
    partNumber: 4,
    partTitle: 'Relative Peak Heights',
  },
  {
    id: 'pes-ent-4b',
    question: 'In the PES spectrum of a Period 3 element, the 2p peak is three times as tall as the 2s peak, and the 3p peak is one and a half times as tall as the 3s peak. Which element is it?',
    options: ['Si', 'Ar', 'Cl', 'P'],
    correctIndex: 3,
    explanation: 'The 2s and 3s subshells are full (2 electrons each), so the 2p peak is 6 and the 3p peak is $1.5 \\times 2 = 3$. The configuration is $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^3$, 15 electrons, phosphorus.',
    partNumber: 4,
    partTitle: 'Relative Peak Heights',
  },

  // Part 5: Identifying Elements from PES
  {
    id: 'pes-ent-5a',
    question: 'How does the PES spectrum of aluminum compare with that of magnesium?',
    options: [
      'Al has an extra peak at the lowest binding energy',
      'Al\'s 1s peak is at lower binding energy than Mg\'s',
      'Both spectra have the same number of peaks',
      'Al\'s 3s peak is taller than Mg\'s 3s peak',
    ],
    correctIndex: 0,
    explanation: 'Al\'s 13th electron starts the 3p subshell, which adds a new small peak at the lowest binding energy. Al also has one more proton, so its 1s peak is at higher binding energy than Mg\'s, and both atoms have a full 3s subshell of height 2.',
    partNumber: 5,
    partTitle: 'Identifying Elements from PES',
  },
  {
    id: 'pes-ent-5b',
    question: 'Which of these elements has the 1s peak at the highest binding energy in its PES spectrum?',
    options: ['Na', 'Mg', 'Cl', 'K'],
    correctIndex: 3,
    explanation: 'The 1s electrons sit inside every other shell, so their binding energy depends on nuclear charge, and potassium (Z = 19) has the most protons of the four. Chlorine has a high first ionization energy, but that describes its valence electrons, not its 1s electrons.',
    partNumber: 5,
    partTitle: 'Identifying Elements from PES',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'pes-ent-6a',
    question: 'Which set of relative peak heights (highest to lowest binding energy) is impossible for a neutral atom in its ground state?',
    options: ['2, 2, 6, 2, 6, 2', '2, 2, 6, 2, 7', '2, 2, 6, 2, 6, 10, 2', '2, 2, 6, 1'],
    correctIndex: 1,
    explanation: 'The fifth peak would be the 3p subshell, which holds at most 6 electrons, so a height of 7 cannot occur. The other sets are calcium, zinc (with its 3d peak between 3p and 4s) and sodium.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'pes-ent-6b',
    question: 'An element\'s PES peaks are at 151 (height 2), 12.1 (2), 7.19 (6), 1.09 (2) and 0.58 (1) MJ/mol. What is the element, and what is its first ionization energy?',
    options: ['Al, 151 MJ/mol', 'B, 0.58 MJ/mol', 'Al, 0.58 MJ/mol', 'Mg, 1.09 MJ/mol'],
    correctIndex: 2,
    explanation: 'The heights sum to 13, aluminum, and the first ionization energy is the binding energy of the most loosely held electron, the rightmost peak at 0.58 MJ/mol. Boron comes from counting peaks instead of electrons, 151 MJ/mol is the 1s electron, and magnesium ignores the 3p peak.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'pes-ent-7a',
    question: 'An element\'s PES spectrum has peaks of relative height 2, 2, 6, 2, 1, with a large gap between the 2p peak (7.19 MJ/mol) and the 3s peak (1.09 MJ/mol). Where should the large jump appear in its successive ionization energies?',
    options: ['A large jump after $IE_1$', 'A large jump after $IE_2$', 'A large jump after $IE_3$', 'A large jump after $IE_5$'],
    correctIndex: 2,
    explanation: 'The three electrons to the right of the gap (3s and 3p) are valence electrons, so $IE_1$ through $IE_3$ remove them and $IE_4$ must remove a much more tightly held 2p core electron. A jump after $IE_1$ counts only the last peak, and after $IE_2$ counts only the 3s electrons.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'pes-ent-7b',
    question: 'Which statement correctly compares the PES spectrum of potassium with that of sodium?',
    options: [
      'K has two more peaks, and its valence peak has lower binding energy',
      'K has one more peak, and its valence peak has higher binding energy',
      'K has two more peaks, and its 1s peak is at lower binding energy',
      'K has the same number of peaks, each shifted to higher energy',
    ],
    correctIndex: 0,
    explanation: 'Na shows 4 peaks (1s, 2s, 2p, 3s) and K shows 6 (adding 3p and 4s), and K\'s 4s electron is farther out and easier to remove, so its valence (4s) peak is at lower binding energy than the 3s peak of sodium. With 19 protons, K\'s 1s peak is at higher, not lower, binding energy.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to PES' },
    { partNumber: 2, partTitle: 'Interpreting PES Spectra' },
    { partNumber: 3, partTitle: 'Binding Energy & Subshells' },
    { partNumber: 4, partTitle: 'Relative Peak Heights' },
    { partNumber: 5, partTitle: 'Identifying Elements from PES' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
