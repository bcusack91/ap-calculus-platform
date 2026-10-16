/**
 * Entrance Quiz — Periodic Trends
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Introduction to Periodic Trends
 *  2 — Atomic Radius
 *  3 — Ionization Energy
 *  4 — Electron Affinity
 *  5 — Electronegativity
 *  6 — Ionic Radius
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to Periodic Trends
  {
    id: 'pt-ent-1a',
    question: 'Using $Z_{eff} \\approx Z - S$, where $S$ is the number of core electrons, what is the approximate effective nuclear charge on a valence electron of bromine (Z = 35, [Ar] $4s^2\\,3d^{10}\\,4p^5$)?',
    options: ['+17', '+5', '+7', '+35'],
    correctIndex: 2,
    explanation: 'The core is everything below the n = 4 valence shell: the 18 [Ar] electrons plus the filled $3d^{10}$, so $S = 28$ and $Z_{eff} \\approx 35 - 28 = +7$. Subtracting only the [Ar] core gives +17, +5 counts only the 4p electrons, and +35 ignores shielding.',
    partNumber: 1,
    partTitle: 'Introduction to Periodic Trends',
  },
  {
    id: 'pt-ent-1b',
    question: 'Using $Z_{eff} \\approx Z - S$, how does the effective nuclear charge on a valence electron change from carbon (Z = 6) to silicon (Z = 14), one period lower?',
    options: [
      'It stays about the same, near +4',
      'It rises from +4 to +14',
      'It falls from +4 to +2',
      'It rises from +6 to +14',
    ],
    correctIndex: 0,
    explanation: 'Carbon has 2 core electrons ($6 - 2 = +4$) and silicon has 10 ($14 - 10 = +4$), so the added protons are offset by a whole new shell of core electrons. Going +4 to +14 ignores silicon\'s extra shielding, and +6 to +14 ignores shielding entirely.',
    partNumber: 1,
    partTitle: 'Introduction to Periodic Trends',
  },

  // Part 2: Atomic Radius
  {
    id: 'pt-ent-2a',
    question: 'Which list ranks Cl, Se and Ca from smallest to largest atomic radius?',
    options: ['Ca < Se < Cl', 'Cl < Se < Ca', 'Se < Cl < Ca', 'Cl < Ca < Se'],
    correctIndex: 1,
    explanation: 'Cl is a period above Se, so it is smaller; Se and Ca share Period 4, and Ca, far to the left with a much lower $Z_{eff}$, is the largest. Putting Se below Cl ignores the extra shell, and putting Ca below Se reverses the across-a-period trend.',
    partNumber: 2,
    partTitle: 'Atomic Radius',
  },
  {
    id: 'pt-ent-2b',
    question: 'Which statement best explains why a sulfur atom is smaller than a phosphorus atom?',
    options: [
      'S has one fewer occupied electron shell than P has',
      'S has more electrons, and their repulsion draws the cloud inward',
      'S has extra neutrons that pull its valence electrons inward',
      'S has a higher $Z_{eff}$ on the same n = 3 shell',
    ],
    correctIndex: 3,
    explanation: 'S has one more proton than P, but its added electron goes into the same n = 3 shell, where same-shell electrons shield poorly, so $Z_{eff}$ rises and pulls the valence shell in. Both atoms have three occupied shells, electron repulsion would expand rather than shrink the cloud, and neutrons carry no charge.',
    partNumber: 2,
    partTitle: 'Atomic Radius',
  },

  // Part 3: Ionization Energy
  {
    id: 'pt-ent-3a',
    question: 'A Period 3 element has these successive ionization energies (kJ/mol): 1,012; 1,907; 2,914; 4,964; 6,274; 21,267. Which element is it?',
    options: ['Si', 'P', 'Cl', 'Ar'],
    correctIndex: 1,
    explanation: 'The huge jump comes after the fifth ionization energy, so the atom has five valence electrons before core electrons must be removed: Group 15, phosphorus. Si would jump after the fourth, Cl after the seventh and Ar after the eighth.',
    partNumber: 3,
    partTitle: 'Ionization Energy',
  },
  {
    id: 'pt-ent-3b',
    question: 'Which ranks N, O and F in order of increasing first ionization energy?',
    options: ['O < N < F', 'N < O < F', 'F < O < N', 'N < F < O'],
    correctIndex: 0,
    explanation: 'IE generally rises across Period 2, but O dips below N because O\'s fourth 2p electron is paired and the extra repulsion makes it easier to remove. F, with the highest $Z_{eff}$ of the three, is highest; N < O < F ignores the exception and F < O < N reverses the trend.',
    partNumber: 3,
    partTitle: 'Ionization Energy',
  },

  // Part 4: Electron Affinity
  {
    id: 'pt-ent-4a',
    question: 'Which lists F, Cl and Br from most negative to least negative electron affinity?',
    options: ['F > Cl > Br', 'Br > Cl > F', 'Cl > F > Br', 'F > Br > Cl'],
    correctIndex: 2,
    explanation: 'Chlorine has the most negative electron affinity (−349 kJ/mol) because fluorine is so small that an added electron suffers strong repulsion in its compact 2p subshell (−328). Bromine, farther from the nucleus, comes last (−325); F > Cl > Br applies the simple trend and misses the fluorine anomaly.',
    partNumber: 4,
    partTitle: 'Electron Affinity',
  },
  {
    id: 'pt-ent-4b',
    question: 'Sodium has a slightly negative electron affinity, but magnesium\'s is near zero. Which explanation is best?',
    options: [
      'Mg has a smaller effective nuclear charge than Na does',
      'Mg\'s 3s subshell is half-filled and resists any change',
      'Mg is a metal, and metals cannot gain extra electrons',
      'An added electron must enter Mg\'s higher-energy 3p',
    ],
    correctIndex: 3,
    explanation: 'Mg is $3s^2$, a full subshell, so an incoming electron has to go into the higher-energy 3p subshell, which gives little or no energy release. Mg actually has the higher $Z_{eff}$, its 3s subshell is full rather than half-filled, and sodium is a metal too.',
    partNumber: 4,
    partTitle: 'Electron Affinity',
  },

  // Part 5: Electronegativity
  {
    id: 'pt-ent-5a',
    question: 'Using these electronegativities (C 2.5, F 4.0, P 2.1, Cl 3.0, N 3.0, O 3.5, S 2.5, H 2.1), which bond is the most polar?',
    options: ['C–F', 'P–Cl', 'N–O', 'S–H'],
    correctIndex: 0,
    explanation: 'Bond polarity follows $\\Delta EN$: C–F is $4.0 - 2.5 = 1.5$, compared with 0.9 for P–Cl, 0.5 for N–O and 0.4 for S–H. The most polar bond is the one with the largest difference, not the one containing the heaviest atom.',
    partNumber: 5,
    partTitle: 'Electronegativity',
  },
  {
    id: 'pt-ent-5b',
    question: 'Which ranks Se, S and Cl from lowest to highest electronegativity?',
    options: ['Cl < S < Se', 'S < Se < Cl', 'Se < S < Cl', 'S < Cl < Se'],
    correctIndex: 2,
    explanation: 'Electronegativity decreases down a group, so Se is below S, and increases across a period, so Cl is above S. Cl < S < Se reverses both trends, and S < Se < Cl gets the group trend backwards.',
    partNumber: 5,
    partTitle: 'Electronegativity',
  },

  // Part 6: Ionic Radius
  {
    id: 'pt-ent-6a',
    question: 'Which of these species has the largest radius?',
    options: ['Cl', '$S^{2-}$', 'S', '$Cl^-$'],
    correctIndex: 1,
    explanation: 'Anions are larger than their parent atoms, so the two anions beat the two atoms. $S^{2-}$ and $Cl^-$ both have 18 electrons, and $S^{2-}$ has one fewer proton pulling on them, so it is the largest.',
    partNumber: 6,
    partTitle: 'Ionic Radius',
  },
  {
    id: 'pt-ent-6b',
    question: 'Which statement best explains why the $Cl^-$ ion is larger than the $K^+$ ion?',
    options: [
      'The $Cl^-$ ion has one more occupied electron shell than the $K^+$ ion',
      'The $Cl^-$ ion has more electrons than the $K^+$ ion does',
      'The $K^+$ ion has extra neutrons that pull its electrons inward',
      'The $Cl^-$ ion has fewer protons pulling on the same 18 electrons',
    ],
    correctIndex: 3,
    explanation: 'The two ions are isoelectronic, each with 18 electrons in the same shells, so size depends on nuclear charge: 17 protons in $Cl^-$ hold the electrons less tightly than 19 protons in $K^+$. They have the same number of shells and electrons, and neutrons do not attract electrons.',
    partNumber: 6,
    partTitle: 'Ionic Radius',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'pt-ent-7a',
    question: 'Which comparison of sodium and chlorine atoms is correct?',
    options: [
      'Na: larger radius, lower first IE',
      'Na: higher electronegativity, larger radius',
      'Cl: larger radius, smaller first IE',
      'Cl: smaller radius, less negative EA',
    ],
    correctIndex: 0,
    explanation: 'Across Period 3, $Z_{eff}$ rises from Na to Cl, so Na is larger and holds its valence electron less tightly (lower IE). Cl is smaller, more electronegative and has the most negative electron affinity of all elements, which rules out the other comparisons.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'pt-ent-7b',
    question: 'Why is the first ionization energy of rubidium lower than that of potassium?',
    options: [
      'Rb has a lower nuclear charge, so its 5s electron is held less tightly',
      'Rb\'s valence electron is paired, and repulsion eases its removal',
      'Rb\'s 5s electron is farther out, and its $Z_{eff}$ stays about the same',
      'Rb has fewer core electrons shielding its single valence electron',
    ],
    correctIndex: 2,
    explanation: 'Rb\'s valence electron is in n = 5 rather than n = 4; the added protons are offset by added core electrons, so $Z_{eff}$ is about the same while the distance is larger, and the electron is easier to remove. Rb actually has more protons and more core electrons than K, and its single 5s electron is unpaired.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Periodic Trends' },
    { partNumber: 2, partTitle: 'Atomic Radius' },
    { partNumber: 3, partTitle: 'Ionization Energy' },
    { partNumber: 4, partTitle: 'Electron Affinity' },
    { partNumber: 5, partTitle: 'Electronegativity' },
    { partNumber: 6, partTitle: 'Ionic Radius' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
