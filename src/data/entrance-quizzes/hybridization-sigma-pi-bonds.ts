/**
 * Entrance Quiz — Hybridization & Sigma/Pi Bonds
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'hyb-ent-1a', question: 'Hybridization is the mixing of:', options: ['Atoms to form molecules', 'Bonds to form networks', 'Atomic orbitals to form new hybrid orbitals', 'Electrons to form pairs'], correctIndex: 2, explanation: 'Hybridization is the concept of mixing atomic orbitals (s, p, d) to form new hybrid orbitals that are equivalent in energy and shape.', partNumber: 1, partTitle: 'Introduction to Hybridization' },
  { id: 'hyb-ent-1b', question: 'An atom with 4 regions of electron density is ___ hybridized:', options: ['$sp$', '$sp^2$', '$sp^3$', '$sp^3d$'], correctIndex: 2, explanation: '4 electron groups require 4 hybrid orbitals: one s + three p = $sp^3$ hybridization, giving tetrahedral geometry.', partNumber: 1, partTitle: 'Introduction to Hybridization' },

  { id: 'hyb-ent-2a', question: 'What is the hybridization of carbon in $C_2H_4$ (ethylene)?', options: ['$sp$', '$sp^2$', '$sp^3$', '$sp^3d$'], correctIndex: 1, explanation: 'Each carbon in ethylene has 3 regions of electron density (2 C–H bonds + 1 C=C), so it is $sp^2$ hybridized with 120° bond angles.', partNumber: 2, partTitle: 'sp, sp², sp³ Hybridization' },
  { id: 'hyb-ent-2b', question: 'An $sp$ hybridized atom has what geometry?', options: ['Bent', 'Trigonal planar', 'Linear', 'Tetrahedral'], correctIndex: 2, explanation: '$sp$ hybridization produces 2 hybrid orbitals oriented 180° apart, giving linear geometry (e.g., $CO_2$, $C_2H_2$).', partNumber: 2, partTitle: 'sp, sp², sp³ Hybridization' },

  { id: 'hyb-ent-3a', question: 'A sigma ($\\sigma$) bond is formed by:', options: ['Side-by-side overlap of p orbitals', 'Head-on overlap of orbitals along the bond axis', 'Delocalization of electrons', 'Transfer of electrons'], correctIndex: 1, explanation: 'Sigma bonds form from head-on (end-to-end) overlap of orbitals along the internuclear axis. They are the strongest type of covalent bond.', partNumber: 3, partTitle: 'Sigma Bonds' },
  { id: 'hyb-ent-3b', question: 'Every single covalent bond is a:', options: ['Pi bond', 'Sigma bond', 'Mixture of sigma and pi', 'Hydrogen bond'], correctIndex: 1, explanation: 'All single bonds are sigma bonds. The first bond between any two atoms is always a sigma bond formed by head-on overlap.', partNumber: 3, partTitle: 'Sigma Bonds' },

  { id: 'hyb-ent-4a', question: 'A pi ($\\pi$) bond results from:', options: ['Head-on orbital overlap', 'Lateral (side-by-side) overlap of unhybridized p orbitals', 'Overlap of s orbitals', 'Metallic bonding'], correctIndex: 1, explanation: 'Pi bonds form from lateral overlap of parallel unhybridized p orbitals. The electron density is above and below the bond axis.', partNumber: 4, partTitle: 'Pi Bonds' },
  { id: 'hyb-ent-4b', question: 'A double bond consists of:', options: ['2 sigma bonds', '2 pi bonds', '1 sigma bond and 1 pi bond', '1 sigma bond and 2 pi bonds'], correctIndex: 2, explanation: 'A double bond = 1 sigma bond (head-on overlap) + 1 pi bond (lateral overlap). The sigma bond forms first, then the pi bond.', partNumber: 4, partTitle: 'Pi Bonds' },

  { id: 'hyb-ent-5a', question: 'How many sigma and pi bonds are in $N_2$ ($N{\\equiv}N$)?', options: ['3σ, 0π', '1σ, 2π', '2σ, 1π', '0σ, 3π'], correctIndex: 1, explanation: 'A triple bond consists of 1 sigma bond and 2 pi bonds. $N_2$ has one head-on overlap (σ) and two lateral overlaps (π).', partNumber: 5, partTitle: 'Counting σ and π Bonds' },
  { id: 'hyb-ent-5b', question: 'In $CH_3CHO$ (acetaldehyde), how many total sigma bonds are there?', options: ['4', '5', '6', '7'], correctIndex: 2, explanation: '$CH_3CHO$: The $CH_3$ group has 3 C–H σ bonds, there is 1 C–C σ bond, 1 C–H σ bond on the aldehyde carbon, and the C=O contributes 1 σ bond. Total: 3+1+1+1 = 6 σ bonds.', partNumber: 5, partTitle: 'Counting σ and π Bonds' },

  { id: 'hyb-ent-6a', question: 'What is the hybridization of the central carbon in $HCN$?', options: ['$sp$', '$sp^2$', '$sp^3$', '$sp^3d$'], correctIndex: 0, explanation: 'Carbon in HCN has 2 regions of electron density (C–H single bond + C≡N triple bond), so it is $sp$ hybridized with 180° bond angle.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'hyb-ent-6b', question: 'In $C_2H_2$ (acetylene), how many sigma and pi bonds are there in total?', options: ['3σ, 2π', '5σ, 0π', '2σ, 3π', '3σ, 1π'], correctIndex: 0, explanation: '$H-C{\\equiv}C-H$: 2 C–H sigma bonds + 1 C–C sigma bond (from the triple bond) = 3σ. The triple bond also has 2 pi bonds. Total: 3σ + 2π.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  { id: 'hyb-ent-7a', question: 'Which statement about sigma and pi bonds is correct?', options: ['Pi bonds are stronger than sigma bonds', 'Sigma bonds allow free rotation; pi bonds restrict rotation', 'Pi bonds form before sigma bonds', 'Sigma bonds involve lateral overlap'], correctIndex: 1, explanation: 'Sigma bonds allow free rotation around the bond axis because the orbital overlap is symmetric. Pi bonds restrict rotation because twisting would break the lateral p-orbital overlap.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'hyb-ent-7b', question: 'A molecule with all $sp^3$ hybridized atoms and no pi bonds would most likely be:', options: ['$C_2H_4$', '$C_2H_6$', '$C_2H_2$', '$C_6H_6$'], correctIndex: 1, explanation: '$C_2H_6$ (ethane) has all $sp^3$ carbons with single bonds only (all sigma, no pi). The other molecules all contain double or triple bonds with pi character.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Hybridization' },
    { partNumber: 2, partTitle: 'sp, sp², sp³ Hybridization' },
    { partNumber: 3, partTitle: 'Sigma Bonds' },
    { partNumber: 4, partTitle: 'Pi Bonds' },
    { partNumber: 5, partTitle: 'Counting σ and π Bonds' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
