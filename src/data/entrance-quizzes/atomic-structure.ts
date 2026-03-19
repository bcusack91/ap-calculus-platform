import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Bohr Model
  {
    id: 'as-ent-1a',
    question: "In Bohr's model, electrons orbit the nucleus in:",
    options: ['Any radius', 'Discrete allowed orbits with quantized energy', 'Elliptical orbits', 'Random paths'],
    correctIndex: 1,
    explanation: 'Bohr postulated that electrons exist only in specific orbits with quantized angular momentum: $L = n\\hbar$.',
    partNumber: 1,
    partTitle: 'Bohr Model',
  },
  {
    id: 'as-ent-1b',
    question: 'The energy levels of the hydrogen atom are given by:',
    options: ['$E_n = -13.6n^2$ eV', '$E_n = -13.6/n^2$ eV', '$E_n = 13.6/n$ eV', '$E_n = -13.6n$ eV'],
    correctIndex: 1,
    explanation: '$E_n = -13.6/n^2$ eV ($n = 1, 2, 3, \\ldots$). The ground state ($n=1$) has $E_1 = -13.6$ eV.',
    partNumber: 1,
    partTitle: 'Bohr Model',
  },

  // Part 2: Electron Transitions
  {
    id: 'as-ent-2a',
    question: 'When an electron drops from $n=3$ to $n=1$ in hydrogen, it emits a photon with energy:',
    options: ['$13.6$ eV', '$1.51$ eV', '$12.09$ eV', '$10.2$ eV'],
    correctIndex: 2,
    explanation: '$E = E_3 - E_1 = (-13.6/9) - (-13.6/1) = -1.51 + 13.6 = 12.09$ eV.',
    partNumber: 2,
    partTitle: 'Electron Transitions',
  },
  {
    id: 'as-ent-2b',
    question: 'For a hydrogen atom to absorb a photon, the photon energy must:',
    options: ['Be any value', 'Match exactly the difference between two energy levels', 'Exceed the ionization energy', 'Be less than $13.6$ eV'],
    correctIndex: 1,
    explanation: 'Photons are absorbed only when their energy exactly matches the difference between two energy levels of the atom.',
    partNumber: 2,
    partTitle: 'Electron Transitions',
  },

  // Part 3: Emission & Absorption Spectra
  {
    id: 'as-ent-3a',
    question: 'An emission spectrum consists of:',
    options: ['A continuous rainbow', 'Bright lines on a dark background', 'Dark lines on a bright background', 'A single color'],
    correctIndex: 1,
    explanation: 'Emission spectra show discrete bright lines corresponding to photon energies from electron transitions to lower levels.',
    partNumber: 3,
    partTitle: 'Emission & Absorption Spectra',
  },
  {
    id: 'as-ent-3b',
    question: 'An absorption spectrum has:',
    options: ['Bright lines only', 'Dark lines where specific wavelengths are absorbed', 'No visible features', 'A continuous bright band'],
    correctIndex: 1,
    explanation: 'When white light passes through a gas, atoms absorb specific wavelengths, creating dark lines at those positions in the spectrum.',
    partNumber: 3,
    partTitle: 'Emission & Absorption Spectra',
  },

  // Part 4: Quantum Numbers
  {
    id: 'as-ent-4a',
    question: 'The principal quantum number $n$ determines:',
    options: ['The shape of the orbital', 'The energy level and approximate size of the orbital', 'The spin of the electron', 'The magnetic orientation'],
    correctIndex: 1,
    explanation: '$n = 1, 2, 3, \\ldots$ determines the energy level and the general size (radius) of the electron orbital.',
    partNumber: 4,
    partTitle: 'Quantum Numbers',
  },
  {
    id: 'as-ent-4b',
    question: 'The angular momentum quantum number $\\ell$ can take values:',
    options: ['$0$ to $n$', '$0$ to $n-1$', '$1$ to $n$', '$-\\ell$ to $+\\ell$'],
    correctIndex: 1,
    explanation: '$\\ell = 0, 1, 2, \\ldots, n-1$. It determines the shape of the orbital ($s, p, d, f$).',
    partNumber: 4,
    partTitle: 'Quantum Numbers',
  },

  // Part 5: Electron Configuration
  {
    id: 'as-ent-5a',
    question: 'The Pauli exclusion principle states:',
    options: ['Electrons fill lowest energy first', 'No two electrons can have the same set of four quantum numbers', 'Electrons repel each other', 'Orbitals are half-filled before pairing'],
    correctIndex: 1,
    explanation: 'Each electron must have a unique set of quantum numbers ($n, \\ell, m_\\ell, m_s$). At most 2 electrons per orbital (opposite spins).',
    partNumber: 5,
    partTitle: 'Electron Configuration',
  },
  {
    id: 'as-ent-5b',
    question: 'The electron configuration of carbon ($Z=6$) is:',
    options: ['$1s^2 2s^2 2p^2$', '$1s^2 2s^4$', '$1s^6$', '$1s^2 2p^4$'],
    correctIndex: 0,
    explanation: 'Carbon: $1s^2 2s^2 2p^2$. Electrons fill $1s$ first, then $2s$, then $2p$.',
    partNumber: 5,
    partTitle: 'Electron Configuration',
  },

  // Part 6: Ionization Energy
  {
    id: 'as-ent-6a',
    question: 'The ionization energy of hydrogen from the ground state is:',
    options: ['$1.51$ eV', '$3.4$ eV', '$13.6$ eV', '$27.2$ eV'],
    correctIndex: 2,
    explanation: 'Ionization energy = $|E_1| = 13.6$ eV. This is the energy needed to completely remove the electron from the atom.',
    partNumber: 6,
    partTitle: 'Ionization Energy',
  },
  {
    id: 'as-ent-6b',
    question: 'The ionization energy from the $n=2$ state of hydrogen is:',
    options: ['$13.6$ eV', '$3.4$ eV', '$10.2$ eV', '$1.51$ eV'],
    correctIndex: 1,
    explanation: '$E_2 = -13.6/4 = -3.4$ eV. Ionization from $n=2$ requires $3.4$ eV.',
    partNumber: 6,
    partTitle: 'Ionization Energy',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'as-ent-7a',
    question: 'The series of hydrogen spectral lines in the visible region is the:',
    options: ['Lyman series', 'Balmer series', 'Paschen series', 'Brackett series'],
    correctIndex: 1,
    explanation: 'Balmer series: transitions to $n=2$, producing visible light. Lyman ($n=1$): UV. Paschen ($n=3$): infrared.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'as-ent-7b',
    question: 'The quantum mechanical model replaces Bohr orbits with:',
    options: ['Smaller orbits', 'Probability clouds (orbitals)', 'Definite paths', 'Circular waves'],
    correctIndex: 1,
    explanation: 'In quantum mechanics, electron positions are described by probability distributions (orbitals), not fixed circular orbits.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Bohr Model' },
    { partNumber: 2, partTitle: 'Electron Transitions' },
    { partNumber: 3, partTitle: 'Emission & Absorption Spectra' },
    { partNumber: 4, partTitle: 'Quantum Numbers' },
    { partNumber: 5, partTitle: 'Electron Configuration' },
    { partNumber: 6, partTitle: 'Ionization Energy' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
