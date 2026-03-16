/**
 * Entrance Quiz — Photoelectron Spectroscopy
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

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to PES
  {
    id: 'pes-ent-1a',
    question: 'Photoelectron spectroscopy (PES) uses high-energy photons to:',
    options: ['Break chemical bonds', 'Eject core and valence electrons from atoms', 'Excite electrons to higher energy levels', 'Ionize molecules into fragments'],
    correctIndex: 1,
    explanation: 'PES works by bombarding atoms with high-energy photons (UV or X-ray) that eject electrons from various subshells. The kinetic energy of ejected electrons reveals binding energies.',
    partNumber: 1,
    partTitle: 'Introduction to PES',
  },
  {
    id: 'pes-ent-1b',
    question: 'In a PES experiment, the binding energy of an electron equals:',
    options: [
      'The kinetic energy of the ejected electron',
      'The energy of the incident photon minus the kinetic energy of the ejected electron',
      'The energy of the incident photon plus the kinetic energy',
      'The total energy of the atom',
    ],
    correctIndex: 1,
    explanation: 'Binding energy = photon energy − kinetic energy of ejected electron. This relationship (from Einstein\'s photoelectric equation) allows PES to determine how tightly electrons are held.',
    partNumber: 1,
    partTitle: 'Introduction to PES',
  },

  // Part 2: Interpreting PES Spectra
  {
    id: 'pes-ent-2a',
    question: 'On a PES spectrum, peaks further to the left (higher binding energy) correspond to:',
    options: ['Valence electrons', 'Core electrons closer to the nucleus', 'Excited-state electrons', 'Antibonding electrons'],
    correctIndex: 1,
    explanation: 'Higher binding energy means the electron is held more tightly, which corresponds to core electrons in inner shells closer to the nucleus.',
    partNumber: 2,
    partTitle: 'Interpreting PES Spectra',
  },
  {
    id: 'pes-ent-2b',
    question: 'A PES spectrum shows 3 distinct peaks. This indicates the element has:',
    options: ['3 electrons', '3 subshells with electrons', '3 periods', '3 isotopes'],
    correctIndex: 1,
    explanation: 'Each peak in PES represents a group of electrons with the same binding energy, which corresponds to electrons in the same subshell. Three peaks means three occupied subshells.',
    partNumber: 2,
    partTitle: 'Interpreting PES Spectra',
  },

  // Part 3: Binding Energy & Subshells
  {
    id: 'pes-ent-3a',
    question: 'Which subshell electrons have the highest binding energy in a sulfur atom?',
    options: ['3p', '3s', '2p', '1s'],
    correctIndex: 3,
    explanation: '1s electrons are closest to the nucleus and experience the greatest effective nuclear charge, giving them the highest binding energy.',
    partNumber: 3,
    partTitle: 'Binding Energy & Subshells',
  },
  {
    id: 'pes-ent-3b',
    question: 'For a given element, how does the binding energy of 2s electrons compare to 2p electrons?',
    options: ['2s > 2p', '2s < 2p', '2s = 2p', 'Cannot be determined'],
    correctIndex: 0,
    explanation: '2s electrons have higher binding energy than 2p because s orbitals penetrate closer to the nucleus than p orbitals in the same shell, experiencing greater effective nuclear charge.',
    partNumber: 3,
    partTitle: 'Binding Energy & Subshells',
  },

  // Part 4: Relative Peak Heights
  {
    id: 'pes-ent-4a',
    question: 'On a PES spectrum, the height of a peak is proportional to:',
    options: ['The binding energy of the electrons', 'The number of electrons in that subshell', 'The atomic number of the element', 'The ionization energy'],
    correctIndex: 1,
    explanation: 'Peak height (relative intensity) in PES is proportional to the number of electrons in that subshell. A peak twice as tall represents twice as many electrons.',
    partNumber: 4,
    partTitle: 'Relative Peak Heights',
  },
  {
    id: 'pes-ent-4b',
    question: 'In the PES spectrum of nitrogen ($1s^2 2s^2 2p^3$), the peak ratio from highest to lowest binding energy should be:',
    options: ['2 : 2 : 3', '3 : 2 : 2', '1 : 1 : 1.5', '2 : 3 : 2'],
    correctIndex: 0,
    explanation: 'From highest to lowest binding energy: 1s (2 electrons) : 2s (2 electrons) : 2p (3 electrons) = 2 : 2 : 3.',
    partNumber: 4,
    partTitle: 'Relative Peak Heights',
  },

  // Part 5: Identifying Elements from PES
  {
    id: 'pes-ent-5a',
    question: 'A PES spectrum shows peaks at relative heights of 2, 2, 6, 2, 1 (from highest to lowest binding energy). This element is:',
    options: ['Fluorine ($Z=9$)', 'Neon ($Z=10$)', 'Sodium ($Z=11$)', 'Aluminum ($Z=13$)'],
    correctIndex: 3,
    explanation: 'Total electrons: 2+2+6+2+1 = 13. The configuration is $1s^2 2s^2 2p^6 3s^2 3p^1$, which is aluminum ($Z=13$).',
    partNumber: 5,
    partTitle: 'Identifying Elements from PES',
  },
  {
    id: 'pes-ent-5b',
    question: 'A PES spectrum has 4 peaks. The element must have electrons in at least how many subshells?',
    options: ['2', '3', '4', '8'],
    correctIndex: 2,
    explanation: 'Each peak corresponds to one occupied subshell. Four peaks means exactly 4 occupied subshells (e.g., 1s, 2s, 2p, 3s for sodium).',
    partNumber: 5,
    partTitle: 'Identifying Elements from PES',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'pes-ent-6a',
    question: 'Two elements have PES spectra with the same number of peaks, but element X has all its peaks shifted to higher binding energies compared to element Y. What can you conclude?',
    options: [
      'X has more electrons than Y',
      'X has a higher nuclear charge than Y',
      'X is in a higher period than Y',
      'They are isotopes of the same element',
    ],
    correctIndex: 1,
    explanation: 'Same number of peaks (same subshell pattern) but higher binding energies means greater nuclear charge pulling all electrons tighter. This suggests X has more protons.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'pes-ent-6b',
    question: 'The first (leftmost) PES peak for potassium appears at a much higher binding energy than for argon. Why?',
    options: [
      'Potassium has one more electron shell',
      'Potassium has a higher nuclear charge ($Z=19$ vs $Z=18$)',
      'Potassium\'s 1s electrons are in a different orbital',
      'Potassium is a metal while argon is not',
    ],
    correctIndex: 1,
    explanation: 'Potassium has $Z=19$ vs argon\'s $Z=18$. The extra proton increases the effective nuclear charge on all core electrons, shifting their binding energies higher.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'pes-ent-7a',
    question: 'A PES spectrum shows peaks with relative heights 2, 2, 3 (from highest to lowest binding energy). The element is:',
    options: ['Nitrogen ($Z=7$)', 'Oxygen ($Z=8$)', 'Carbon ($Z=6$)', 'Boron ($Z=5$)'],
    correctIndex: 0,
    explanation: 'Total electrons: 2+2+3 = 7. Configuration: $1s^2 2s^2 2p^3$ = nitrogen. The three peaks correspond to the three occupied subshells.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'pes-ent-7b',
    question: 'Why can\'t PES distinguish between isotopes of the same element?',
    options: [
      'Isotopes have different numbers of protons',
      'PES only measures neutrons',
      'Isotopes have the same electron configuration and nearly identical binding energies',
      'PES cannot detect atoms with mass numbers above 20',
    ],
    correctIndex: 2,
    explanation: 'Isotopes have the same number of protons and electrons, so their electron configurations and binding energies are essentially identical. PES measures electron binding energies, not nuclear mass.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
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
