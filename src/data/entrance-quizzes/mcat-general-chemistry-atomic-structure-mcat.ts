/**
 * Entrance Quiz — Atomic Structure (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mgas-ent-1a', question: "In Rutherford's gold foil experiment, the observation that some alpha particles were deflected at large angles led to the conclusion that:", options: ['Electrons occupy fixed orbits', 'The atom is mostly empty space with a dense positive nucleus', 'The nucleus contains neutrons', 'Atoms have a "plum pudding" structure'], correctIndex: 1, explanation: "Most alpha particles passed straight through (empty space), but a few deflected at large angles revealed a small, dense, positively charged nucleus — disproving Thomson's model.", partNumber: 1, partTitle: 'Atomic Models' },
  { id: 'mgas-ent-1b', question: "Bohr's model of the hydrogen atom successfully explained:", options: ['The spectra of multi-electron atoms', 'The line emission spectrum of hydrogen', 'The wave nature of electrons', 'The uncertainty principle'], correctIndex: 1, explanation: "Bohr's model quantized electron orbits and correctly predicted the emission lines of hydrogen (Lyman, Balmer, Paschen series).", partNumber: 1, partTitle: 'Atomic Models' },
  { id: 'mgas-ent-2a', question: 'Which quantum number defines the energy level (shell) of an electron?', options: ['Principal quantum number (n)', 'Angular momentum quantum number (ℓ)', 'Magnetic quantum number ($m_ℓ$)', 'Spin quantum number ($m_s$)'], correctIndex: 0, explanation: 'The principal quantum number n (1, 2, 3, …) primarily determines the electron\'s energy and average distance from the nucleus.', partNumber: 2, partTitle: 'Quantum Numbers' },
  { id: 'mgas-ent-2b', question: 'For n = 3, the possible values of the angular momentum quantum number ℓ are:', options: ['0, 1', '0, 1, 2', '1, 2, 3', '0, 1, 2, 3'], correctIndex: 1, explanation: 'ℓ ranges from 0 to n−1. For n = 3: ℓ = 0 (s), 1 (p), 2 (d). So there are three subshells.', partNumber: 2, partTitle: 'Quantum Numbers' },
  { id: 'mgas-ent-3a', question: 'The ground-state electron configuration of sulfur (Z = 16) is:', options: ['[Ne] 3s² 3p²', '[Ne] 3s² 3p⁴', '[Ne] 3s² 3p⁶', '[Ar] 3d⁴'], correctIndex: 1, explanation: 'After [Ne] (10 electrons), sulfur has 6 more: 3s² 3p⁴. Configuration: 1s² 2s² 2p⁶ 3s² 3p⁴.', partNumber: 3, partTitle: 'Electron Configuration' },
  { id: 'mgas-ent-3b', question: "Hund's Rule states that electrons in the same subshell:", options: ['Always pair up before filling other orbitals', 'Fill orbitals singly with parallel spins before pairing', 'Occupy the orbital with the lowest energy first', 'Cannot have the same spin'], correctIndex: 1, explanation: "Hund's Rule: electrons occupy degenerate orbitals singly with the same spin before pairing up, minimizing electron-electron repulsion.", partNumber: 3, partTitle: 'Electron Configuration' },
  { id: 'mgas-ent-4a', question: 'A p orbital has what shape?', options: ['Spherical', 'Figure-eight (dumbbell)', 'Cloverleaf (four-lobed)', 'Toroidal (donut)'], correctIndex: 1, explanation: 'p orbitals are dumbbell-shaped (two lobes), oriented along the x, y, or z axis. There are three p orbitals per subshell.', partNumber: 4, partTitle: 'Orbital Shapes' },
  { id: 'mgas-ent-4b', question: 'How many orbitals are in the d subshell (ℓ = 2)?', options: ['1', '3', '5', '7'], correctIndex: 2, explanation: 'The number of orbitals = 2ℓ + 1. For ℓ = 2: 2(2)+1 = 5 d orbitals, each holding up to 2 electrons (10 total).', partNumber: 4, partTitle: 'Orbital Shapes' },
  { id: 'mgas-ent-5a', question: 'Which property increases down a group in the periodic table?', options: ['Ionization energy', 'Electronegativity', 'Atomic radius', 'Electron affinity'], correctIndex: 2, explanation: 'Atomic radius increases down a group because each successive period adds a new electron shell farther from the nucleus.', partNumber: 5, partTitle: 'Periodic Trends' },
  { id: 'mgas-ent-5b', question: 'First ionization energy is the energy required to remove one electron from:', options: ['An anion in solution', 'A gaseous atom in its ground state', 'A metallic solid', 'A cation already formed'], correctIndex: 1, explanation: 'First IE: the energy to remove one electron from a neutral gaseous atom: M(g) → M⁺(g) + e⁻. It increases across a period.', partNumber: 5, partTitle: 'Periodic Trends' },
  { id: 'mgas-ent-6a', question: 'An electron transitions from n = 4 to n = 2 in a hydrogen atom. The photon emitted is in the:', options: ['Lyman series (UV)', 'Balmer series (visible)', 'Paschen series (infrared)', 'Brackett series (infrared)'], correctIndex: 1, explanation: 'The Balmer series involves transitions to n = 2. The n = 4 → n = 2 transition emits a visible photon (486 nm, blue-green).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgas-ent-6b', question: 'Which element has the electron configuration [Ar] 3d⁵ 4s¹?', options: ['Iron (Fe)', 'Chromium (Cr)', 'Manganese (Mn)', 'Vanadium (V)'], correctIndex: 1, explanation: 'Chromium (Z = 24) adopts [Ar] 3d⁵ 4s¹ instead of [Ar] 3d⁴ 4s² because a half-filled d subshell is especially stable.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgas-ent-7a', question: "Heisenberg's Uncertainty Principle states that it is impossible to simultaneously determine with precision both an electron's:", options: ['Mass and charge', 'Position and momentum', 'Spin and orbital', 'Energy and charge'], correctIndex: 1, explanation: 'ΔxΔp ≥ ℏ/2. The more precisely position is known, the less precisely momentum (and thus energy) can be known, and vice versa.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'mgas-ent-7b', question: 'Paramagnetism in an atom or ion is due to:', options: ['Paired electrons only', 'The presence of one or more unpaired electrons', 'A fully filled electron configuration', 'A noble gas configuration'], correctIndex: 1, explanation: 'Unpaired electrons have net magnetic moments that are attracted to an external magnetic field (paramagnetism). Paired electrons cancel out.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Atomic Models' },
    { partNumber: 2, partTitle: 'Quantum Numbers' },
    { partNumber: 3, partTitle: 'Electron Configuration' },
    { partNumber: 4, partTitle: 'Orbital Shapes' },
    { partNumber: 5, partTitle: 'Periodic Trends' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
