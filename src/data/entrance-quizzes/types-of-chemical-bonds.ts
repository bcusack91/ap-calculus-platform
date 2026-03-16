/**
 * Entrance Quiz — Types of Chemical Bonds
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Ionic Bonds
  {
    id: 'tcb-ent-1a',
    question: 'Ionic bonds typically form between:',
    options: ['Two nonmetals', 'Two metals', 'A metal and a nonmetal', 'Two noble gases'],
    correctIndex: 2,
    explanation: 'Ionic bonds form when a metal transfers electrons to a nonmetal, creating oppositely charged ions that attract each other.',
    partNumber: 1, partTitle: 'Ionic Bonds',
  },
  {
    id: 'tcb-ent-1b',
    question: 'Which property is characteristic of ionic compounds?',
    options: ['Low melting points', 'Conduct electricity as solids', 'High melting points', 'Are soft and malleable'],
    correctIndex: 2,
    explanation: 'Ionic compounds have high melting points due to strong electrostatic attractions between ions in the crystal lattice.',
    partNumber: 1, partTitle: 'Ionic Bonds',
  },

  // Part 2: Covalent Bonds
  {
    id: 'tcb-ent-2a',
    question: 'In a covalent bond, atoms:',
    options: ['Transfer electrons', 'Share electrons', 'Lose protons', 'Create a sea of electrons'],
    correctIndex: 1,
    explanation: 'Covalent bonds form when two atoms share one or more pairs of electrons to achieve a stable electron configuration.',
    partNumber: 2, partTitle: 'Covalent Bonds',
  },
  {
    id: 'tcb-ent-2b',
    question: 'A double covalent bond involves the sharing of:',
    options: ['1 pair of electrons', '2 pairs of electrons', '3 pairs of electrons', '4 pairs of electrons'],
    correctIndex: 1,
    explanation: 'A double bond involves 2 shared pairs (4 electrons total). A single bond shares 1 pair, and a triple bond shares 3 pairs.',
    partNumber: 2, partTitle: 'Covalent Bonds',
  },

  // Part 3: Metallic Bonds
  {
    id: 'tcb-ent-3a',
    question: 'Metallic bonding is best described as:',
    options: [
      'Sharing electrons between two atoms',
      'Transferring electrons from one atom to another',
      'A sea of delocalized electrons shared among metal cations',
      'Weak intermolecular attractions',
    ],
    correctIndex: 2,
    explanation: 'In metallic bonding, valence electrons are delocalized and form an "electron sea" that holds the positively charged metal ions together.',
    partNumber: 3, partTitle: 'Metallic Bonds',
  },
  {
    id: 'tcb-ent-3b',
    question: 'Which property of metals is best explained by the electron sea model?',
    options: ['Brittleness', 'Electrical conductivity', 'Low density', 'High ionization energy'],
    correctIndex: 1,
    explanation: 'The delocalized electrons in metallic bonding can move freely through the metal lattice, allowing metals to conduct electricity.',
    partNumber: 3, partTitle: 'Metallic Bonds',
  },

  // Part 4: Bond Polarity
  {
    id: 'tcb-ent-4a',
    question: 'A polar covalent bond has:',
    options: ['Equal sharing of electrons', 'Unequal sharing of electrons', 'Complete transfer of electrons', 'No electrons shared'],
    correctIndex: 1,
    explanation: 'In polar covalent bonds, electrons are shared unequally because one atom has a higher electronegativity, creating partial charges ($\\delta^+$ and $\\delta^-$).',
    partNumber: 4, partTitle: 'Bond Polarity',
  },
  {
    id: 'tcb-ent-4b',
    question: 'Which bond is most polar?',
    options: ['$C-H$', '$N-H$', '$O-H$', '$F-H$'],
    correctIndex: 3,
    explanation: 'Fluorine is the most electronegative element, so the $F-H$ bond has the greatest electronegativity difference and is the most polar.',
    partNumber: 4, partTitle: 'Bond Polarity',
  },

  // Part 5: Bond Energy & Length
  {
    id: 'tcb-ent-5a',
    question: 'As bond order increases from single to double to triple, bond length:',
    options: ['Increases', 'Decreases', 'Stays the same', 'First increases then decreases'],
    correctIndex: 1,
    explanation: 'Higher bond order means more shared electrons pulling the atoms closer together, resulting in shorter bond length.',
    partNumber: 5, partTitle: 'Bond Energy & Length',
  },
  {
    id: 'tcb-ent-5b',
    question: 'The bond energy of a triple bond compared to a single bond between the same two atoms is:',
    options: ['Lower', 'The same', 'Higher', 'Exactly triple'],
    correctIndex: 2,
    explanation: 'Triple bonds are stronger (higher bond energy) than single bonds because more electrons are shared, though the energy is not exactly triple due to the weaker π bonds.',
    partNumber: 5, partTitle: 'Bond Energy & Length',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'tcb-ent-6a',
    question: 'Rank the following bonds from least polar to most polar: $C-C$, $C-N$, $C-O$, $C-F$',
    options: ['$C-F < C-O < C-N < C-C$', '$C-C < C-N < C-O < C-F$', '$C-C < C-O < C-N < C-F$', '$C-N < C-C < C-F < C-O$'],
    correctIndex: 1,
    explanation: 'Polarity increases with electronegativity difference. C-C (nonpolar, ΔEN=0) < C-N (ΔEN≈0.5) < C-O (ΔEN≈1.0) < C-F (ΔEN≈1.5).',
    partNumber: 6, partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'tcb-ent-6b',
    question: 'Which of the following substances would you expect to have the highest melting point?',
    options: ['$NaCl$', '$H_2O$', '$CO_2$', '$CH_4$'],
    correctIndex: 0,
    explanation: 'NaCl is an ionic compound with strong electrostatic forces in its lattice, giving it a much higher melting point (801°C) than the molecular substances.',
    partNumber: 6, partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'tcb-ent-7a',
    question: 'Using bond energies, $\\Delta H_{rxn}$ can be estimated as:',
    options: [
      'Energy of bonds broken + energy of bonds formed',
      'Energy of bonds broken − energy of bonds formed',
      'Energy of bonds formed − energy of bonds broken',
      'Energy of bonds broken × energy of bonds formed',
    ],
    correctIndex: 1,
    explanation: '$\\Delta H_{rxn} \\approx \\sum(\\text{bonds broken}) - \\sum(\\text{bonds formed})$. Breaking bonds requires energy (positive) while forming bonds releases energy (negative).',
    partNumber: 7, partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'tcb-ent-7b',
    question: 'A compound conducts electricity when melted but not as a solid. It most likely has:',
    options: ['Metallic bonds', 'Covalent bonds', 'Ionic bonds', 'Hydrogen bonds'],
    correctIndex: 2,
    explanation: 'Ionic compounds do not conduct electricity as solids (ions locked in lattice) but do conduct when melted (ions free to move).',
    partNumber: 7, partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Ionic Bonds' },
    { partNumber: 2, partTitle: 'Covalent Bonds' },
    { partNumber: 3, partTitle: 'Metallic Bonds' },
    { partNumber: 4, partTitle: 'Bond Polarity' },
    { partNumber: 5, partTitle: 'Bond Energy & Length' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
