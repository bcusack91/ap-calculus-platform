/**
 * Entrance Quiz — Atomic Structure & Periodic Trends (MCAT)
 * 8 questions · 3 parts (3 / 3 / 2)
 * Part titles match the interactive lesson's "Part N of 3" lines.
 * Spectra, PES, the Bohr model and nuclear chemistry moved to
 * mcat-general-chemistry-spectra-nuclear-mcat when the topic was split (Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Quantum Numbers & Electron Configuration'
const P2 = 'Periodic Trends: Atomic Radius, Ionization Energy & Electronegativity'
const P3 = 'Mixed MCAT Review: Passage-Style Practice'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Quantum Numbers & Electron Configuration
  { id: 'mgas-ent-1a', question: 'An electron is in a subshell with $\\ell = 3$. How many orbitals does that subshell contain?', options: ['3', '5', '7', '9'], correctIndex: 2, explanation: 'A subshell has $2\\ell + 1$ orbitals, so $\\ell = 3$ (an $f$ subshell) has 7. Five is the count for a $d$ subshell ($\\ell = 2$), three is for $p$, and nine is the total for a whole $n = 3$ shell.', partNumber: 1, partTitle: P1 },
  { id: 'mgas-ent-1b', question: 'The ground-state electron configuration of chromium ($Z = 24$) is:', options: ['$[\\text{Ar}]\\, 3d^5\\, 4s^1$', '$[\\text{Ar}]\\, 3d^4\\, 4s^2$', '$[\\text{Ar}]\\, 3d^6\\, 4s^0$', '$[\\text{Ar}]\\, 4s^2\\, 4p^4$'], correctIndex: 0, explanation: 'A half-filled $3d$ subshell is especially stable, so chromium moves one $4s$ electron into $3d$: $[\\text{Ar}]\\, 3d^5\\, 4s^1$. The $3d^4\\, 4s^2$ arrangement is the Aufbau prediction that chromium breaks, an empty $4s$ is not the neutral ground state, and $4p$ fills only after $3d$.', partNumber: 1, partTitle: P1 },
  { id: 'mgas-ent-1c', question: 'Chlorine-35 and chlorine-37 atoms differ in their number of:', options: ['Protons in the nucleus', 'Neutrons in the nucleus', 'Electrons around the nucleus', 'Valence electrons'], correctIndex: 1, explanation: 'Isotopes share the atomic number $Z$ (17 protons for chlorine), and so the same electrons and the same chemistry. Only the neutron count differs: $35 - 17 = 18$ and $37 - 17 = 20$.', partNumber: 1, partTitle: P1 },

  // Part 2 — Periodic Trends
  { id: 'mgas-ent-2a', question: 'Which property generally increases from left to right across a period?', options: ['Atomic radius', 'Metallic character', 'Electronegativity', 'Number of electron shells'], correctIndex: 2, explanation: 'Effective nuclear charge rises across a period, pulling electrons in more tightly, so electronegativity (and ionization energy) increases. Atomic radius and metallic character fall across a period, and the shell count stays the same.', partNumber: 2, partTitle: P2 },
  { id: 'mgas-ent-2b', question: 'Atomic radius decreases from sodium to chlorine across Period 3 mainly because:', options: ['A new, more distant shell is added at each step', 'Inner-electron shielding grows across the period', 'Repulsion between electrons falls as more are added', 'Nuclear charge rises while the shell stays the same'], correctIndex: 3, explanation: 'Across a period, protons are added but the new electrons go into the same shell, and the core that shields them does not change, so $Z_{\\text{eff}}$ rises and pulls the shell in. New shells are added going DOWN a group, inner shielding stays roughly constant across a period, and added electrons increase repulsion rather than reduce it.', partNumber: 2, partTitle: P2 },
  { id: 'mgas-ent-2c', question: 'An element has the valence configuration $ns^2\\, np^5$. In its compounds it most often:', options: ['Gains one electron to form a $-1$ ion', 'Loses one electron to form a $+1$ ion', 'Loses two electrons to form a $+2$ ion', 'Stays unbonded, since its shell is full'], correctIndex: 0, explanation: 'A valence shell of $ns^2\\, np^5$ is one electron short of an octet, which marks a halogen. Halogens are highly electronegative and gain one electron to form a $-1$ ion, as $\\text{Cl}^-$ does. Losing electrons is the pattern of the Group IA ($+1$) and IIA ($+2$) metals, and only a filled $ns^2\\, np^6$ shell is nearly inert.', partNumber: 2, partTitle: P2 },

  // Part 3 — Mixed MCAT Review
  { id: 'mgas-ent-3a', question: 'Atom X is $[\\text{Ne}]\\, 3s^1$ and atom Y is $[\\text{Ne}]\\, 3s^2\\, 3p^5$. Which statement is correct?', options: ['X has the higher first ionization energy', 'Y has the smaller radius of the two atoms', 'X has the higher electronegativity', 'Y loses an electron more easily than X'], correctIndex: 1, explanation: 'X has 11 electrons (sodium) and Y has 17 (chlorine), both in Period 3. Across the period $Z_{\\text{eff}}$ rises, so chlorine is smaller, holds its electrons more tightly (higher ionization energy) and attracts bonding electrons more strongly (higher electronegativity). Sodium, with a single $3s$ electron, is the one that gives up an electron easily.', partNumber: 3, partTitle: P3 },
  { id: 'mgas-ent-3b', question: 'A $+2$ ion has the ground-state configuration $[\\text{Ar}]\\, 3d^{10}$. Which element formed it?', options: ['Ni ($Z = 28$)', 'Cu ($Z = 29$)', 'Zn ($Z = 30$)', 'Ga ($Z = 31$)'], correctIndex: 2, explanation: 'A $+2$ ion with $[\\text{Ar}]\\, 3d^{10}$ has 28 electrons, so the atom had 30: zinc, $[\\text{Ar}]\\, 3d^{10}\\, 4s^2$, which loses its two $4s$ electrons first. $\\text{Ni}^{2+}$ is $3d^8$, $\\text{Cu}^{2+}$ is $3d^9$, and $\\text{Ga}^{2+}$ still holds one $4s$ electron.', partNumber: 3, partTitle: P3 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
  ]
}
