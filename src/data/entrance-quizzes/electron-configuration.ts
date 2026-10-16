/**
 * Entrance Quiz — Electron Configuration
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Protons, Neutrons, Electrons & Ions
 *  2 — Orbital Filling Order
 *  3 — Writing Electron Configurations
 *  4 — Noble Gas & Condensed Notation
 *  5 — Ion Configurations & Isoelectronic Species
 *  6 — Orbital Diagrams & Unpaired Electrons
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Protons, Neutrons, Electrons & Ions
  {
    id: 'ec-ent-1a',
    question: 'How many protons (p), neutrons (n) and electrons (e) are in one $^{32}_{16}\\text{S}^{2-}$ ion?',
    options: ['16 p, 16 n, 18 e', '16 p, 16 n, 14 e', '18 p, 14 n, 18 e', '16 p, 32 n, 18 e'],
    correctIndex: 0,
    explanation: 'Z = 16 gives 16 protons, $32 - 16 = 16$ neutrons, and a 2− charge means two extra electrons, so 18 electrons. Subtracting the charge gives 14 electrons, changing the proton count would change the element, and 32 is the mass number, not the neutron count.',
    partNumber: 1,
    partTitle: 'Protons, Neutrons, Electrons & Ions',
  },
  {
    id: 'ec-ent-1b',
    question: 'Compare the ion $^{40}_{20}\\text{Ca}^{2+}$ with the atom $^{40}_{18}\\text{Ar}$. Which statement is correct?',
    options: [
      'They have the same number of neutrons',
      'They are isotopes of the same element',
      'They have the same number of electrons',
      'They have the same number of protons',
    ],
    correctIndex: 2,
    explanation: '$Ca^{2+}$ has $20 - 2 = 18$ electrons and Ar has 18 electrons, so they are isoelectronic. Ca has 20 protons and 20 neutrons while Ar has 18 protons and 22 neutrons; sharing a mass number does not make them isotopes, which require the same proton count.',
    partNumber: 1,
    partTitle: 'Protons, Neutrons, Electrons & Ions',
  },

  // Part 2: Orbital Filling Order
  {
    id: 'ec-ent-2a',
    question: 'In a ground-state potassium atom (Z = 19), the 19th electron occupies 4s rather than 3d. Why?',
    options: [
      'The n = 3 shell can hold only 8 electrons in total',
      'The 4s subshell is lower in energy than 3d',
      'The 3d subshell does not exist until Z = 21',
      'Hund\'s rule requires the 4s orbital to fill first',
    ],
    correctIndex: 1,
    explanation: 'Electrons fill subshells in order of increasing energy, and 4s lies below 3d, so it fills first. The third shell can hold 18 electrons ($2n^2$), the 3d subshell exists for every atom with n = 3, and Hund\'s rule concerns pairing within a subshell, not which subshell fills first.',
    partNumber: 2,
    partTitle: 'Orbital Filling Order',
  },
  {
    id: 'ec-ent-2b',
    question: 'How many electrons in a ground-state tin atom (Sn, Z = 50) are in subshells with n = 4?',
    options: ['32', '8', '10', '18'],
    correctIndex: 3,
    explanation: 'Tin is [Kr] $5s^2\\,4d^{10}\\,5p^2$, so its n = 4 electrons are $4s^2\\,4p^6\\,4d^{10}$, a total of 18. The value 32 is the capacity of n = 4 ($2n^2$), but 4f is empty; 8 forgets the 4d electrons and 10 counts only them.',
    partNumber: 2,
    partTitle: 'Orbital Filling Order',
  },

  // Part 3: Writing Electron Configurations
  {
    id: 'ec-ent-3a',
    question: 'Which is the ground-state electron configuration of vanadium (V, Z = 23)?',
    options: [
      '$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,3d^3$',
      '$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,3d^5$',
      '$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,4p^3$',
      '$1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,3d^5$',
    ],
    correctIndex: 0,
    explanation: 'After argon (18 electrons), 4s fills before 3d, so the last five electrons are $4s^2\\,3d^3$. Skipping 4s puts all five in 3d, $4p^3$ fills 4p before 3d, and $4s^2\\,3d^5$ adds up to 25 electrons.',
    partNumber: 3,
    partTitle: 'Writing Electron Configurations',
  },
  {
    id: 'ec-ent-3b',
    question: 'Which configuration describes a neutral atom in an excited state (allowed, but not the ground state)?',
    options: [
      '$1s^2\\,2s^2\\,2p^2$',
      '$1s^2\\,2s^3\\,2p^1$',
      '$1s^2\\,2s^1\\,2p^3$',
      '$1s^2\\,2s^2\\,2p^6\\,3s^2$',
    ],
    correctIndex: 2,
    explanation: 'In $1s^2\\,2s^1\\,2p^3$ an electron has moved from 2s up to 2p before 2s is full, which is possible but higher in energy than the ground state. $1s^2\\,2s^2\\,2p^2$ and $1s^2\\,2s^2\\,2p^6\\,3s^2$ are ground states (C and Mg), and $2s^3$ is impossible because one orbital holds at most two electrons.',
    partNumber: 3,
    partTitle: 'Writing Electron Configurations',
  },

  // Part 4: Noble Gas & Condensed Notation
  {
    id: 'ec-ent-4a',
    question: 'Which is the condensed (noble gas) configuration of antimony (Sb, Z = 51)?',
    options: [
      '[Kr] $5s^2\\,5p^3$',
      '[Kr] $5s^2\\,4d^{10}\\,5p^3$',
      '[Kr] $5s^2\\,4d^{9}\\,5p^4$',
      '[Kr] $4d^{10}\\,5p^5$',
    ],
    correctIndex: 1,
    explanation: 'Krypton accounts for 36 electrons, and the remaining 15 fill 5s, then 4d, then 5p: $5s^2\\,4d^{10}\\,5p^3$. Leaving out 4d drops ten electrons, and the other two options have the right total but break the filling order.',
    partNumber: 4,
    partTitle: 'Noble Gas & Condensed Notation',
  },
  {
    id: 'ec-ent-4b',
    question: 'An element has the ground-state configuration [Ar] $4s^2\\,3d^{10}\\,4p^2$. Which element is it?',
    options: ['Si (Z = 14)', 'Ti (Z = 22)', 'Sn (Z = 50)', 'Ge (Z = 32)'],
    correctIndex: 3,
    explanation: 'Argon contributes 18 electrons and the rest add $2 + 10 + 2 = 14$, so Z = 32, germanium. Si comes from ignoring the [Ar] core, Ti from dropping the $3d^{10}$, and Sn has the same valence pattern one period lower.',
    partNumber: 4,
    partTitle: 'Noble Gas & Condensed Notation',
  },

  // Part 5: Ion Configurations & Isoelectronic Species
  {
    id: 'ec-ent-5a',
    question: 'What is the ground-state electron configuration of the $Mn^{3+}$ ion? (Mn: Z = 25)',
    options: ['[Ar] $3d^4$', '[Ar] $4s^2\\,3d^2$', '[Ar] $4s^1\\,3d^3$', '[Ar] $4s^2\\,3d^5$'],
    correctIndex: 0,
    explanation: 'Neutral Mn is [Ar] $4s^2\\,3d^5$; a cation loses its highest-n electrons first, so both 4s electrons go and then one 3d electron, leaving [Ar] $3d^4$. Removing 3d electrons first gives $4s^2\\,3d^2$, and $4s^2\\,3d^5$ is the neutral atom.',
    partNumber: 5,
    partTitle: 'Ion Configurations & Isoelectronic Species',
  },
  {
    id: 'ec-ent-5b',
    question: 'The species $N^{3-}$, $F^-$, $Na^+$ and $Al^{3+}$ each have 10 electrons. Which has the largest radius? (Z: N 7, F 9, Na 11, Al 13)',
    options: ['$F^-$', '$Al^{3+}$', '$N^{3-}$', '$Na^+$'],
    correctIndex: 2,
    explanation: 'In an isoelectronic series the electron arrangement is the same, so the species with the fewest protons pulls those electrons in least and is largest: $N^{3-}$ with 7 protons. $Al^{3+}$, with the most protons, is the smallest, not the largest.',
    partNumber: 5,
    partTitle: 'Ion Configurations & Isoelectronic Species',
  },

  // Part 6: Orbital Diagrams & Unpaired Electrons
  {
    id: 'ec-ent-6a',
    question: 'Which ion has the greatest number of unpaired electrons in its ground state? (Z: V 23, Mn 25, Co 27, Ni 28)',
    options: ['$V^{3+}$', '$Mn^{2+}$', '$Co^{3+}$', '$Ni^{2+}$'],
    correctIndex: 1,
    explanation: 'Removing 4s electrons first gives $Mn^{2+}$ = [Ar] $3d^5$, one electron in each of the five d orbitals, so 5 unpaired. $Co^{3+}$ ($3d^6$) has 4, while $V^{3+}$ ($3d^2$) and $Ni^{2+}$ ($3d^8$) have 2 each.',
    partNumber: 6,
    partTitle: 'Orbital Diagrams & Unpaired Electrons',
  },
  {
    id: 'ec-ent-6b',
    question: 'Removing which electron requires the most energy?',
    options: ['The 3s electron of Na', 'A 2p electron of Ne', 'A 3p electron of Ar', 'A 2p electron of Na'],
    correctIndex: 3,
    explanation: 'A 2p electron of Na is a core electron: it is in the n = 2 shell with 11 protons pulling on it, more than the 10 protons acting on a 2p electron of Ne. The 3p electron of Ar and the 3s electron of Na are farther out (n = 3) and much more shielded.',
    partNumber: 6,
    partTitle: 'Orbital Diagrams & Unpaired Electrons',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ec-ent-7a',
    question: 'The first ionization energy of selenium (Z = 34) is slightly lower than that of arsenic (Z = 33). Which explanation is best?',
    options: [
      'One of Se\'s 4p orbitals holds a pair, and that repulsion eases removal',
      'Se has a smaller nuclear charge, so its valence electrons are held less tightly',
      'Se loses its electron from a higher-energy subshell than the one As loses from',
      'Se has more core electrons shielding its 4p electrons than arsenic does',
    ],
    correctIndex: 0,
    explanation: 'As is $4p^3$ with one electron in each 4p orbital, while Se is $4p^4$, so one Se 4p orbital holds a pair whose mutual repulsion makes that electron easier to remove. Se has one more proton than As, the same [Ar] $3d^{10}$ core, and both atoms lose a 4p electron, so the other explanations fail.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ec-ent-7b',
    question: 'Which atom has exactly two unpaired electrons in its ground state and typically forms a 2− ion?',
    options: ['Carbon', 'Nickel', 'Selenium', 'Calcium'],
    correctIndex: 2,
    explanation: 'Se is [Ar] $4s^2\\,3d^{10}\\,4p^4$: the $4p^4$ subshell has two unpaired electrons, and gaining two electrons completes it as $Se^{2-}$. Carbon and nickel also have two unpaired electrons but do not form 2− ions (Ni forms $Ni^{2+}$), and calcium forms $Ca^{2+}$ with no unpaired electrons in the atom.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Protons, Neutrons, Electrons & Ions' },
    { partNumber: 2, partTitle: 'Orbital Filling Order' },
    { partNumber: 3, partTitle: 'Writing Electron Configurations' },
    { partNumber: 4, partTitle: 'Noble Gas & Condensed Notation' },
    { partNumber: 5, partTitle: 'Ion Configurations & Isoelectronic Species' },
    { partNumber: 6, partTitle: 'Orbital Diagrams & Unpaired Electrons' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
