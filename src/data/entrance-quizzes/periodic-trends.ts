/**
 * Entrance Quiz — Periodic Trends
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Atomic Radius
 *  2 — Ionization Energy
 *  3 — Electron Affinity
 *  4 — Electronegativity
 *  5 — Ionic Radius
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Atomic Radius
  {
    id: 'pt-ent-1a',
    question: 'As you move from left to right across a period, atomic radius generally:',
    options: ['Increases', 'Decreases', 'Stays the same', 'Increases then decreases'],
    correctIndex: 1,
    explanation: 'Across a period, increasing nuclear charge pulls electrons closer, decreasing atomic radius despite electrons being added to the same shell.',
    partNumber: 1,
    partTitle: 'Atomic Radius',
  },
  {
    id: 'pt-ent-1b',
    question: 'Which atom has the largest atomic radius?',
    options: ['$Li$', '$Na$', '$K$', '$Be$'],
    correctIndex: 2,
    explanation: 'Potassium (K) is furthest down Group 1, giving it the most electron shells and largest atomic radius. Going down a group, atomic radius increases.',
    partNumber: 1,
    partTitle: 'Atomic Radius',
  },

  // Part 2: Ionization Energy
  {
    id: 'pt-ent-2a',
    question: 'First ionization energy generally increases going:',
    options: ['Down a group and across a period', 'Up a group and across a period', 'Down a group only', 'Across a period only'],
    correctIndex: 1,
    explanation: 'Ionization energy increases going up a group (electrons closer to nucleus) and across a period (greater nuclear charge), opposite to the trend for atomic radius.',
    partNumber: 2,
    partTitle: 'Ionization Energy',
  },
  {
    id: 'pt-ent-2b',
    question: 'Which element has the highest first ionization energy?',
    options: ['$Na$', '$Mg$', '$Al$', '$Ne$'],
    correctIndex: 3,
    explanation: 'Noble gases have the highest ionization energies in their periods because of their stable, fully filled electron shells. Neon has a very high IE.',
    partNumber: 2,
    partTitle: 'Ionization Energy',
  },

  // Part 3: Electron Affinity
  {
    id: 'pt-ent-3a',
    question: 'Electron affinity is defined as the energy change when:',
    options: [
      'An electron is removed from an atom',
      'An electron is added to a gaseous atom',
      'An atom forms a bond',
      'An atom is ionized',
    ],
    correctIndex: 1,
    explanation: 'Electron affinity is the energy change when an electron is added to a neutral gaseous atom to form a negative ion.',
    partNumber: 3,
    partTitle: 'Electron Affinity',
  },
  {
    id: 'pt-ent-3b',
    question: 'Which group generally has the most negative (most favorable) electron affinity?',
    options: ['Group 1 (alkali metals)', 'Group 2 (alkaline earth metals)', 'Group 17 (halogens)', 'Group 18 (noble gases)'],
    correctIndex: 2,
    explanation: 'Halogens have the most exothermic electron affinities because they need only one more electron to achieve a noble gas configuration.',
    partNumber: 3,
    partTitle: 'Electron Affinity',
  },

  // Part 4: Electronegativity
  {
    id: 'pt-ent-4a',
    question: 'Which element has the highest electronegativity?',
    options: ['Oxygen', 'Nitrogen', 'Fluorine', 'Chlorine'],
    correctIndex: 2,
    explanation: 'Fluorine (EN = 4.0 on the Pauling scale) is the most electronegative element. It has a strong tendency to attract bonding electrons.',
    partNumber: 4,
    partTitle: 'Electronegativity',
  },
  {
    id: 'pt-ent-4b',
    question: 'A large electronegativity difference between two bonded atoms suggests:',
    options: ['A nonpolar covalent bond', 'A polar covalent or ionic bond', 'A metallic bond', 'No bond formation'],
    correctIndex: 1,
    explanation: 'Large electronegativity differences (> 0.4) lead to polar covalent bonds, and very large differences (> 1.7) often indicate ionic bonds.',
    partNumber: 4,
    partTitle: 'Electronegativity',
  },

  // Part 5: Ionic Radius
  {
    id: 'pt-ent-5a',
    question: 'When a metal atom forms a cation, its ionic radius compared to its atomic radius is:',
    options: ['Larger', 'Smaller', 'The same', 'Cannot be predicted'],
    correctIndex: 1,
    explanation: 'Cations are smaller than their parent atoms because they lose electrons, reducing electron-electron repulsion and often losing an entire shell.',
    partNumber: 5,
    partTitle: 'Ionic Radius',
  },
  {
    id: 'pt-ent-5b',
    question: 'In an isoelectronic series ($O^{2-}$, $F^-$, $Ne$, $Na^+$, $Mg^{2+}$), which ion has the largest radius?',
    options: ['$O^{2-}$', '$F^-$', '$Na^+$', '$Mg^{2+}$'],
    correctIndex: 0,
    explanation: 'In an isoelectronic series (all have 10 electrons), the species with the fewest protons has the weakest pull on electrons and thus the largest radius. $O^{2-}$ has only 8 protons.',
    partNumber: 5,
    partTitle: 'Ionic Radius',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'pt-ent-6a',
    question: 'Arrange these atoms in order of increasing atomic radius: $C$, $Si$, $Sn$',
    options: ['$Sn < Si < C$', '$C < Si < Sn$', '$Si < C < Sn$', '$C < Sn < Si$'],
    correctIndex: 1,
    explanation: 'These are all in Group 14. Going down the group, atomic radius increases: C (period 2) < Si (period 3) < Sn (period 5).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'pt-ent-6b',
    question: 'An element has a very high ionization energy and a very negative electron affinity. It is most likely a:',
    options: ['Metal', 'Metalloid', 'Nonmetal', 'Noble gas'],
    correctIndex: 2,
    explanation: 'Nonmetals (especially halogens) have high ionization energies and highly negative electron affinities. They tend to gain electrons rather than lose them.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'pt-ent-7a',
    question: 'Why does the first ionization energy of aluminum ($Z=13$) slightly decrease compared to magnesium ($Z=12$)?',
    options: [
      'Aluminum has more protons',
      'Aluminum\'s outermost electron is in a 3p orbital, which is easier to remove than Mg\'s 3s electron',
      'Aluminum has a larger atomic mass',
      'Aluminum has a half-filled p subshell',
    ],
    correctIndex: 1,
    explanation: 'Al\'s outermost electron is in a 3p orbital, which is slightly higher in energy and easier to remove than Mg\'s 3s electron, despite Al\'s higher nuclear charge.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'pt-ent-7b',
    question: 'Which property increases going down a group in the periodic table?',
    options: ['Ionization energy', 'Electronegativity', 'Atomic radius', 'Electron affinity (magnitude)'],
    correctIndex: 2,
    explanation: 'Atomic radius is the main property that increases going down a group. Additional electron shells increase the distance between the nucleus and outermost electrons.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Atomic Radius' },
    { partNumber: 2, partTitle: 'Ionization Energy' },
    { partNumber: 3, partTitle: 'Electron Affinity' },
    { partNumber: 4, partTitle: 'Electronegativity' },
    { partNumber: 5, partTitle: 'Ionic Radius' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
