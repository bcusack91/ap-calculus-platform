/**
 * Entrance Quiz — Types of Intermolecular Forces
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — London Dispersion Forces
 *  2 — Dipole-Dipole Forces
 *  3 — Hydrogen Bonding
 *  4 — Ion-Dipole Interactions
 *  5 — Comparing IMF Strengths
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: London Dispersion Forces
  {
    id: 'imf-ent-1a',
    question: 'Bromine, $Br_2$, is a liquid at room temperature, while chlorine, $Cl_2$, is a gas. Which explanation is best?',
    options: [
      'The Br–Br covalent bond is stronger than the Cl–Cl covalent bond',
      '$Br_2$ molecules are polar, while $Cl_2$ molecules are not',
      '$Br_2$ has more electrons, so its cloud is more polarizable',
      '$Br_2$ forms hydrogen bonds, and $Cl_2$ cannot form them',
    ],
    correctIndex: 2,
    explanation: 'Both molecules are nonpolar, so only London dispersion forces hold them together, and the larger, more polarizable electron cloud of $Br_2$ gives stronger dispersion forces. Melting and boiling separate molecules without breaking covalent bonds, and neither halogen can hydrogen-bond.',
    partNumber: 1,
    partTitle: 'London Dispersion Forces',
  },
  {
    id: 'imf-ent-1b',
    question: 'Octane (a straight chain) and isooctane (a compact, branched chain) are both $C_8H_{18}$. Which boils at the higher temperature, and why?',
    options: [
      'Octane: its longer shape gives more contact area for LDF',
      'Isooctane: its branches add extra electrons for LDF',
      'Neither: the same formula means the same boiling point',
      'Octane: it is polar, while isooctane is nonpolar',
    ],
    correctIndex: 0,
    explanation: 'The two isomers have the same number of electrons, but the straight chain can touch its neighbors along its whole length, so its dispersion forces are stronger and it boils higher (126 °C vs. 99 °C). Both are nonpolar hydrocarbons.',
    partNumber: 1,
    partTitle: 'London Dispersion Forces',
  },

  // Part 2: Dipole-Dipole Forces
  {
    id: 'imf-ent-2a',
    question: 'Silane, $SiH_4$ (32 g/mol), boils at −112 °C, while phosphine, $PH_3$ (34 g/mol), boils at −88 °C. Which explanation is best?',
    options: [
      'Phosphine forms hydrogen bonds through its three P–H bonds',
      'Phosphine is polar, adding dipole forces to its LDF',
      'Silane has more H atoms to attract its neighbors with',
      'Silane is tetrahedral, so its molecules pack less tightly',
    ],
    correctIndex: 1,
    explanation: 'With nearly equal molar masses the dispersion forces are similar, but pyramidal $PH_3$ is polar and adds dipole-dipole attractions, while tetrahedral $SiH_4$ is nonpolar. P is not N, O or F, so $PH_3$ does not hydrogen-bond.',
    partNumber: 2,
    partTitle: 'Dipole-Dipole Forces',
  },
  {
    id: 'imf-ent-2b',
    question: 'Which list contains only molecules that experience dipole-dipole forces?',
    options: [
      '$CO_2$, $H_2S$, $SO_2$',
      '$CH_4$, $CH_3Cl$, HCl',
      '$BCl_3$, $NF_3$, $PCl_3$',
      '$H_2S$, $CH_3Cl$, $SO_2$',
    ],
    correctIndex: 3,
    explanation: 'Bent $H_2S$, asymmetric $CH_3Cl$ and bent $SO_2$ are all polar. Each other list contains a molecule whose bond dipoles cancel by symmetry: linear $CO_2$, tetrahedral $CH_4$ or trigonal planar $BCl_3$.',
    partNumber: 2,
    partTitle: 'Dipole-Dipole Forces',
  },

  // Part 3: Hydrogen Bonding
  {
    id: 'imf-ent-3a',
    question: 'Which substance can form hydrogen bonds between molecules of its own kind?',
    options: ['$CH_3NH_2$', '$CH_3CH_2F$', '$(CH_3)_3N$', '$CH_3OCH_3$'],
    correctIndex: 0,
    explanation: 'Methylamine has H atoms bonded directly to N, plus a lone pair on N to accept them. In $CH_3CH_2F$, $(CH_3)_3N$ and $CH_3OCH_3$ every H is bonded to carbon, so although F, N or O is present, there is no hydrogen donor.',
    partNumber: 3,
    partTitle: 'Hydrogen Bonding',
  },
  {
    id: 'imf-ent-3b',
    question: 'Pure acetone, $(CH_3)_2C{=}O$, cannot hydrogen-bond with itself, yet acetone molecules do form hydrogen bonds with water. Why?',
    options: [
      'Water breaks acetone\'s C–H bonds to free H atoms',
      'Acetone\'s C=O bond turns into an O–H bond in water',
      'Acetone has lone pairs on O but no H bonded to N, O or F',
      'H-bonds form only between two different compounds',
    ],
    correctIndex: 2,
    explanation: 'A hydrogen bond needs an H on N, O or F (the donor) and a lone pair on N, O or F (the acceptor). Acetone\'s oxygen can accept an H from water, but acetone has no donor H of its own, so it cannot hydrogen-bond to itself.',
    partNumber: 3,
    partTitle: 'Hydrogen Bonding',
  },

  // Part 4: Ion-Dipole Interactions
  {
    id: 'imf-ent-4a',
    question: 'Which list ranks the attraction of these ions to water molecules from strongest to weakest?',
    options: [
      '$K^+$ > $Na^+$ > $Mg^{2+}$',
      '$Mg^{2+}$ > $Na^+$ > $K^+$',
      '$Na^+$ > $Mg^{2+}$ > $K^+$',
      '$Mg^{2+}$ > $K^+$ > $Na^+$',
    ],
    correctIndex: 1,
    explanation: 'Ion-dipole attraction grows with charge density: $Mg^{2+}$ has the higher charge and a small radius, and between the 1+ ions the smaller $Na^+$ beats $K^+$. Ranking $K^+$ first reverses the size effect.',
    partNumber: 4,
    partTitle: 'Ion-Dipole Interactions',
  },
  {
    id: 'imf-ent-4b',
    question: 'Which of these interactions is the strongest?',
    options: [
      'An HF molecule with another HF molecule',
      'An HCl molecule with another HCl molecule',
      'A Xe atom with another Xe atom',
      '$Mg^{2+}$ with a water molecule',
    ],
    correctIndex: 3,
    explanation: 'An ion carries a full charge, so its attraction to a polar water molecule (ion-dipole) is stronger than hydrogen bonding between HF molecules, dipole-dipole forces between HCl molecules or dispersion forces between Xe atoms.',
    partNumber: 4,
    partTitle: 'Ion-Dipole Interactions',
  },

  // Part 5: Comparing IMF Strengths
  {
    id: 'imf-ent-5a',
    question: 'Which ranks ethane ($C_2H_6$, 30 g/mol), fluoromethane ($CH_3F$, 34 g/mol) and methanol ($CH_3OH$, 32 g/mol) from lowest to highest boiling point?',
    options: [
      '$C_2H_6$ < $CH_3F$ < $CH_3OH$',
      '$CH_3F$ < $C_2H_6$ < $CH_3OH$',
      '$C_2H_6$ < $CH_3OH$ < $CH_3F$',
      '$CH_3OH$ < $CH_3F$ < $C_2H_6$',
    ],
    correctIndex: 0,
    explanation: 'With similar molar masses the type of force decides: nonpolar ethane has only dispersion forces, polar $CH_3F$ adds dipole-dipole forces, and methanol, with an O–H bond, adds hydrogen bonding. Placing $CH_3F$ last treats its F as a hydrogen-bonding site, but its H atoms are on carbon.',
    partNumber: 5,
    partTitle: 'Comparing IMF Strengths',
  },
  {
    id: 'imf-ent-5b',
    question: 'Which intermolecular forces act between molecules of ethylamine, $CH_3CH_2NH_2$?',
    options: [
      'Dispersion forces only',
      'Dipole-dipole and dispersion forces',
      'Hydrogen bonding, dipole-dipole and dispersion forces',
      'Ion-dipole, dipole-dipole and dispersion forces',
    ],
    correctIndex: 2,
    explanation: 'The N–H bonds make ethylamine a hydrogen-bond donor and acceptor, the molecule is polar, and every molecule has dispersion forces, so all three act together. Pure ethylamine contains no ions, so ion-dipole forces do not apply.',
    partNumber: 5,
    partTitle: 'Comparing IMF Strengths',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'imf-ent-6a',
    question: 'Which liquid has the highest vapor pressure at 20 °C?',
    options: ['Water', 'Pentane', '1-Pentanol', 'Hexane'],
    correctIndex: 1,
    explanation: 'Vapor pressure is highest where intermolecular forces are weakest. Pentane has only dispersion forces and fewer electrons than hexane, while water and 1-pentanol are held back by hydrogen bonding.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'imf-ent-6b',
    question: 'Liquid A is ethylene glycol, $HOCH_2CH_2OH$, and liquid B is ethanol, $CH_3CH_2OH$. Which has the higher surface tension, and why?',
    options: [
      'B, since its smaller molecules pack more tightly at the surface',
      'B, since its extra C–H bonds add more dipole-dipole forces',
      'Neither, since both alcohols have the same kinds of IMFs',
      'A, since its two O–H groups allow more hydrogen bonding',
    ],
    correctIndex: 3,
    explanation: 'Each ethylene glycol molecule has two O–H groups and can form more hydrogen bonds than ethanol, so the cohesive forces at its surface are stronger. Having the same kinds of forces does not mean having the same amount of them.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'imf-ent-7a',
    question: 'When liquid water boils at 100 °C, what is overcome?',
    options: [
      'Attractions between $H_2O$ molecules',
      'The O–H covalent bonds within each molecule',
      'The ionic bonds between $H^+$ and $OH^-$ ions',
      'The bonds between hydrogen and oxygen atoms in $H_2$ and $O_2$',
    ],
    correctIndex: 0,
    explanation: 'Boiling separates whole molecules from one another, so it overcomes the hydrogen bonds and other attractions between molecules; the O–H bonds inside each molecule stay intact. Breaking those covalent bonds would decompose water into $H_2$ and $O_2$, which takes far more energy.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'imf-ent-7b',
    question: 'Chlorine, $Cl_2$ (71 g/mol), boils at −34 °C, while hydrogen chloride, HCl (36.5 g/mol), boils at −85 °C, even though only HCl is polar. Which explanation is best?',
    options: [
      'HCl hydrogen-bonds weakly, which lowers its boiling point',
      'The Cl–Cl covalent bond is harder to break than H–Cl',
      '$Cl_2$ has more electrons, so its LDF outweigh HCl\'s dipoles',
      '$Cl_2$ is actually polar because both atoms are electronegative',
    ],
    correctIndex: 2,
    explanation: 'The force hierarchy assumes similar sizes; $Cl_2$ has about twice as many electrons, and its stronger dispersion forces outweigh the modest dipole-dipole forces in HCl. HCl does not hydrogen-bond (Cl is not N, O or F), and boiling breaks no covalent bonds.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'London Dispersion Forces' },
    { partNumber: 2, partTitle: 'Dipole-Dipole Forces' },
    { partNumber: 3, partTitle: 'Hydrogen Bonding' },
    { partNumber: 4, partTitle: 'Ion-Dipole Interactions' },
    { partNumber: 5, partTitle: 'Comparing IMF Strengths' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
