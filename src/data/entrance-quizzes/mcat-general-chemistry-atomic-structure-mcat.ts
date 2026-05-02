/**
 * Entrance Quiz — Atomic Structure (MCAT)
 * 10 questions · 5 parts (2 per part)
 * Part titles aligned to the interactive lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Quantum Numbers & Electron Configuration
  { id: 'mgas-ent-1a', question: 'For n = 3, the possible values of the angular momentum quantum number ℓ are:', options: ['0, 1', '0, 1, 2', '1, 2, 3', '0, 1, 2, 3'], correctIndex: 1, explanation: 'ℓ ranges from 0 to n−1. For n = 3: ℓ = 0 (s), 1 (p), 2 (d).', partNumber: 1, partTitle: 'Quantum Numbers & Electron Configuration' },
  { id: 'mgas-ent-1b', question: 'The ground-state electron configuration of chromium (Z = 24) is:', options: ['[Ar] 3d⁴ 4s²', '[Ar] 3d⁵ 4s¹', '[Ar] 3d⁶ 4s⁰', '[Ar] 4s² 4p⁴'], correctIndex: 1, explanation: 'Chromium adopts [Ar] 3d⁵ 4s¹ instead of 3d⁴ 4s² because a half-filled d subshell is especially stable.', partNumber: 1, partTitle: 'Quantum Numbers & Electron Configuration' },

  // Part 2 — Periodic Trends
  { id: 'mgas-ent-2a', question: 'Which property generally increases left-to-right across a period?', options: ['Atomic radius', 'Metallic character', 'Electronegativity', 'Number of valence shells'], correctIndex: 2, explanation: 'Effective nuclear charge increases across a period, pulling electrons in tighter and increasing electronegativity (and ionization energy).', partNumber: 2, partTitle: 'Periodic Trends' },
  { id: 'mgas-ent-2b', question: 'Which species has the largest atomic/ionic radius?', options: ['Na⁺', 'Mg²⁺', 'F⁻', 'O²⁻'], correctIndex: 3, explanation: 'All four are isoelectronic (10 electrons). The species with the fewest protons (O, Z = 8) holds those 10 electrons most loosely → largest radius.', partNumber: 2, partTitle: 'Periodic Trends' },

  // Part 3 — Spectra, PES & Bohr Model
  { id: 'mgas-ent-3a', question: 'An electron in a hydrogen atom drops from n = 4 to n = 2. The emitted photon falls in the:', options: ['Lyman series (UV)', 'Balmer series (visible)', 'Paschen series (IR)', 'Brackett series (IR)'], correctIndex: 1, explanation: 'Transitions ending at n = 2 produce the Balmer series (visible light). The 4 → 2 transition emits a ~486 nm blue-green photon.', partNumber: 3, partTitle: 'Spectra, PES & Bohr Model' },
  { id: 'mgas-ent-3b', question: 'In a photoelectron spectrum (PES), peak position corresponds to:', options: ['The number of electrons in a subshell', 'The binding (ionization) energy of those electrons', 'The atomic mass of the element', 'The orbital angular momentum'], correctIndex: 1, explanation: 'PES peaks are plotted by binding energy. Peak height (or area) reflects the relative number of electrons at that energy.', partNumber: 3, partTitle: 'Spectra, PES & Bohr Model' },

  // Part 4 — Nuclear Chemistry & Half-Life
  { id: 'mgas-ent-4a', question: 'A radioactive isotope has a half-life of 10 years. After 30 years, what fraction of the original sample remains?', options: ['1/2', '1/4', '1/8', '1/16'], correctIndex: 2, explanation: '30 years = 3 half-lives. Remaining fraction = (1/2)³ = 1/8.', partNumber: 4, partTitle: 'Nuclear Chemistry & Half-Life' },
  { id: 'mgas-ent-4b', question: 'Beta-minus (β⁻) decay results in:', options: ['Loss of 4 mass units, gain of −2 charge', 'No change in mass; atomic number increases by 1', 'No change in mass; atomic number decreases by 1', 'Loss of 1 mass unit; charge unchanged'], correctIndex: 1, explanation: 'In β⁻ decay, a neutron converts to a proton + electron + antineutrino. Mass number is unchanged; Z increases by 1.', partNumber: 4, partTitle: 'Nuclear Chemistry & Half-Life' },

  // Part 5 — Mixed MCAT Review
  { id: 'mgas-ent-5a', question: 'Which atom is paramagnetic in its ground state?', options: ['Ne', 'Mg', 'O', 'Ca'], correctIndex: 2, explanation: 'Oxygen (1s² 2s² 2p⁴) has two unpaired p electrons → paramagnetic. Ne, Mg, and Ca all have fully paired electrons → diamagnetic.', partNumber: 5, partTitle: 'Mixed MCAT Review' },
  { id: 'mgas-ent-5b', question: "Heisenberg's Uncertainty Principle implies that for an electron, we cannot simultaneously know with arbitrary precision both:", options: ['Mass and charge', 'Position and momentum', 'Spin and energy level', 'Orbital and subshell'], correctIndex: 1, explanation: 'ΔxΔp ≥ ℏ/2. This is why we describe electrons with probabilistic orbitals rather than fixed paths.', partNumber: 5, partTitle: 'Mixed MCAT Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Quantum Numbers & Electron Configuration' },
    { partNumber: 2, partTitle: 'Periodic Trends' },
    { partNumber: 3, partTitle: 'Spectra, PES & Bohr Model' },
    { partNumber: 4, partTitle: 'Nuclear Chemistry & Half-Life' },
    { partNumber: 5, partTitle: 'Mixed MCAT Review' },
  ]
}
