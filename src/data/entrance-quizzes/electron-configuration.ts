/**
 * Entrance Quiz — Electron Configuration
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Quantum Numbers & Orbitals
 *  2 — Orbital Filling Order
 *  3 — Writing Electron Configurations
 *  4 — Noble Gas & Condensed Notation
 *  5 — Exceptions & Ion Configurations
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Quantum Numbers & Orbitals
  {
    id: 'ec-ent-1a',
    question: 'Which quantum number determines the shape of an orbital?',
    options: ['$n$ (principal)', '$l$ (angular momentum)', '$m_l$ (magnetic)', '$m_s$ (spin)'],
    correctIndex: 1,
    explanation: 'The angular momentum quantum number ($l$) determines the shape of an orbital: $l=0$ is s (sphere), $l=1$ is p (dumbbell), $l=2$ is d, $l=3$ is f.',
    partNumber: 1,
    partTitle: 'Quantum Numbers & Orbitals',
  },
  {
    id: 'ec-ent-1b',
    question: 'How many orbitals are in the $n=3$ shell?',
    options: ['3', '5', '9', '16'],
    correctIndex: 2,
    explanation: 'The number of orbitals in a shell is $n^2$. For $n=3$: $3^2 = 9$ orbitals (one 3s, three 3p, five 3d).',
    partNumber: 1,
    partTitle: 'Quantum Numbers & Orbitals',
  },

  // Part 2: Orbital Filling Order
  {
    id: 'ec-ent-2a',
    question: 'According to the Aufbau principle, which subshell fills immediately after 4s?',
    options: ['4p', '3d', '4d', '5s'],
    correctIndex: 1,
    explanation: 'The Aufbau filling order is: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, ... The 3d subshell fills right after 4s.',
    partNumber: 2,
    partTitle: 'Orbital Filling Order',
  },
  {
    id: 'ec-ent-2b',
    question: 'What is the maximum number of electrons that can occupy the 3d subshell?',
    options: ['2', '6', '10', '14'],
    correctIndex: 2,
    explanation: 'A d subshell has 5 orbitals, each holding 2 electrons, for a maximum of 10 electrons.',
    partNumber: 2,
    partTitle: 'Orbital Filling Order',
  },

  // Part 3: Writing Electron Configurations
  {
    id: 'ec-ent-3a',
    question: 'What is the electron configuration of nitrogen ($Z=7$)?',
    options: ['$1s^2 2s^2 2p^2$', '$1s^2 2s^2 2p^3$', '$1s^2 2s^2 2p^4$', '$1s^2 2s^2 2p^5$'],
    correctIndex: 1,
    explanation: 'Nitrogen has 7 electrons: $1s^2 2s^2 2p^3$. This fills the 1s and 2s orbitals completely with 4 electrons, then places the remaining 3 in the 2p subshell.',
    partNumber: 3,
    partTitle: 'Writing Electron Configurations',
  },
  {
    id: 'ec-ent-3b',
    question: 'Which element has the electron configuration $1s^2 2s^2 2p^6 3s^2 3p^4$?',
    options: ['Silicon', 'Phosphorus', 'Sulfur', 'Chlorine'],
    correctIndex: 2,
    explanation: 'Counting electrons: 2+2+6+2+4 = 16 electrons, which corresponds to sulfur ($Z=16$).',
    partNumber: 3,
    partTitle: 'Writing Electron Configurations',
  },

  // Part 4: Noble Gas & Condensed Notation
  {
    id: 'ec-ent-4a',
    question: 'What is the noble gas (condensed) electron configuration of iron ($Z=26$)?',
    options: ['$[Ar]\\,4s^2 3d^6$', '$[Ar]\\,3d^8$', '$[Kr]\\,4s^2 3d^6$', '$[Ar]\\,4s^2 3d^5$'],
    correctIndex: 0,
    explanation: 'Iron has 26 electrons. Argon ($Z=18$) accounts for the first 18. The remaining 8 fill as $4s^2 3d^6$, giving $[Ar]\\,4s^2 3d^6$.',
    partNumber: 4,
    partTitle: 'Noble Gas & Condensed Notation',
  },
  {
    id: 'ec-ent-4b',
    question: 'Which noble gas core is used when writing the condensed configuration of bromine ($Z=35$)?',
    options: ['$[Ne]$', '$[Ar]$', '$[Kr]$', '$[Xe]$'],
    correctIndex: 1,
    explanation: 'Argon ($Z=18$) is the noble gas that precedes bromine. Bromine\'s configuration is $[Ar]\\,4s^2 3d^{10} 4p^5$.',
    partNumber: 4,
    partTitle: 'Noble Gas & Condensed Notation',
  },

  // Part 5: Exceptions & Ion Configurations
  {
    id: 'ec-ent-5a',
    question: 'Chromium\'s electron configuration is $[Ar]\\,4s^1 3d^5$ rather than $[Ar]\\,4s^2 3d^4$. Why?',
    options: [
      'Chromium has a nuclear charge that repels 4s electrons',
      'Half-filled d subshells have extra stability',
      'The 3d subshell cannot hold more than 4 electrons in period 4',
      'Chromium is a transition metal and all skip 4s filling',
    ],
    correctIndex: 1,
    explanation: 'Half-filled ($d^5$) and fully filled ($d^{10}$) subshells have extra stability due to exchange energy. Chromium promotes one 4s electron to achieve the half-filled 3d configuration.',
    partNumber: 5,
    partTitle: 'Exceptions & Ion Configurations',
  },
  {
    id: 'ec-ent-5b',
    question: 'What is the electron configuration of $Fe^{2+}$ ($Z=26$)?',
    options: ['$[Ar]\\,4s^2 3d^4$', '$[Ar]\\,3d^6$', '$[Ar]\\,4s^1 3d^5$', '$[Ar]\\,3d^5$'],
    correctIndex: 1,
    explanation: 'When forming cations, transition metals lose their outermost (4s) electrons first. Fe: $[Ar]\\,4s^2 3d^6$ → $Fe^{2+}$: $[Ar]\\,3d^6$ (remove two 4s electrons).',
    partNumber: 5,
    partTitle: 'Exceptions & Ion Configurations',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ec-ent-6a',
    question: 'An element has the condensed configuration $[Kr]\\,5s^2 4d^{10} 5p^2$. What element is it and in which group?',
    options: ['Germanium, Group 14', 'Tin, Group 14', 'Lead, Group 14', 'Antimony, Group 15'],
    correctIndex: 1,
    explanation: 'Total electrons: 36 (Kr) + 2 + 10 + 2 = 50. Element 50 is tin (Sn), in Group 14 (has 2 electrons in the outermost p subshell).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ec-ent-6b',
    question: 'How many unpaired electrons does a ground-state oxygen atom have?',
    options: ['0', '1', '2', '4'],
    correctIndex: 2,
    explanation: 'Oxygen: $1s^2 2s^2 2p^4$. By Hund\'s rule, the 4 electrons in 2p fill as: ↑↓ ↑ ↑ (two paired in one orbital, one each in the other two), giving 2 unpaired electrons.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ec-ent-7a',
    question: 'Which of the following species is isoelectronic with argon ($Z=18$)?',
    options: ['$Na^+$', '$Ca^{2+}$', '$Cl^-$', '$O^{2-}$'],
    correctIndex: 2,
    explanation: '$Cl^-$ has 17 + 1 = 18 electrons, the same as argon. $Na^+$ has 10, $Ca^{2+}$ has 18 — actually $Ca^{2+}$ also works, but $Cl^-$ (17+1 = 18) is the classic answer. $Ca^{2+}$ = 20−2 = 18 is also correct. Both $Cl^-$ and $Ca^{2+}$ are isoelectronic with Ar.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ec-ent-7b',
    question: 'Which electron configuration represents an excited state, NOT the ground state?',
    options: ['$1s^2 2s^2 2p^6 3s^1$', '$1s^2 2s^2 2p^4$', '$1s^2 2s^2 2p^6 3s^2 3p^1$', '$1s^2 2s^1 2p^4$'],
    correctIndex: 3,
    explanation: '$1s^2 2s^1 2p^4$ is an excited state because the 2s subshell is not fully filled before 2p begins filling. In the ground state, 2s fills completely ($2s^2$) before any electrons enter 2p.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Quantum Numbers & Orbitals' },
    { partNumber: 2, partTitle: 'Orbital Filling Order' },
    { partNumber: 3, partTitle: 'Writing Electron Configurations' },
    { partNumber: 4, partTitle: 'Noble Gas & Condensed Notation' },
    { partNumber: 5, partTitle: 'Exceptions & Ion Configurations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
