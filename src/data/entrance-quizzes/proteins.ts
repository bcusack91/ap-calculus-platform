/**
 * Entrance Quiz — Proteins (AP Biology)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'pro-eq-1a', question: 'What are the three key features of an amino acid structure?', options: ['A hydrogen atom, a carbon atom, and a phosphate group', 'An amino group $(NH_{2})$, a carboxyl group (COOH), and an R group attached to a central carbon', 'A nitrogenous base, a sugar, and a phosphate group', 'A fatty acid chain, a glycerol backbone, and a hydroxyl group'], correctIndex: 1, explanation: 'All amino acids have an amino group $(-NH_{2})$, a carboxyl group (-COOH), and a distinctive R group (side chain) bonded to the same central carbon atom.', partNumber: 1, partTitle: 'Amino Acid Structure' },
  { id: 'pro-eq-1b', question: 'What is the R group in an amino acid, and why is it important?', options: ['It is a phosphate group that provides energy', 'It is the unique side chain that determines the amino acid\'s identity and chemical properties', 'It is a sugar that links amino acids together', 'It is an atomic bond that holds the protein together'], correctIndex: 1, explanation: 'The R group (side chain) is unique to each amino acid. Its chemical properties—polar, nonpolar, acidic, or basic—determine how the amino acid behaves and how the protein folds.', partNumber: 1, partTitle: 'Amino Acid Structure' },

  // Part 2
  { id: 'pro-eq-2a', question: 'How are amino acids linked together to form a protein?', options: ['Via hydrogen bonds between the nitrogenous bases', 'Via peptide bonds formed by dehydration synthesis between the carboxyl group of one amino acid and the amino group of the next', 'Via phosphodiester bonds between the sugar backbones', 'Via hydrophobic interactions between the R groups'], correctIndex: 1, explanation: 'Peptide bonds link amino acids: the carboxyl group of one amino acid reacts with the amino group of another, releasing water (dehydration synthesis) and forming a covalent bond.', partNumber: 2, partTitle: 'Peptide Bonds' },
  { id: 'pro-eq-2b', question: 'A chain of amino acids linked by peptide bonds is called:', options: ['A polysaccharide', 'A nucleic acid', 'A polypeptide', 'A triglyceride'], correctIndex: 2, explanation: 'A polypeptide is a chain of amino acids linked by peptide bonds. When properly folded, a polypeptide (or combination of polypeptides) forms a functional protein.', partNumber: 2, partTitle: 'Peptide Bonds' },

  // Part 3
  { id: 'pro-eq-3a', question: 'What are the four levels of protein structure, in order from simplest to most complex?', options: ['Tertiary, secondary, primary, quaternary', 'Primary (amino acid sequence), secondary (α-helices and β-sheets), tertiary (3D folding), quaternary (multiple polypeptides)', 'Quaternary, tertiary, primary, secondary', 'Linear, coiled, folded, bonded'], correctIndex: 1, explanation: 'Primary structure is the amino acid sequence. Secondary structure includes α-helices and β-sheets formed by hydrogen bonding. Tertiary structure is the overall 3D shape. Quaternary structure involves multiple polypeptide chains.', partNumber: 3, partTitle: 'Protein Structure Levels' },
  { id: 'pro-eq-3b', question: 'Which level of protein structure can an R group polarity disruption directly affect?', options: ['Only primary structure', 'Only secondary and tertiary structure', 'Primary, secondary, and tertiary structure', 'All four levels equally'], correctIndex: 2, explanation: 'R group polarity influences how amino acids interact: polar R groups form hydrogen bonds (secondary and tertiary), affecting folding. The sequence is primary structure; the resulting shape is secondary and tertiary.', partNumber: 3, partTitle: 'Protein Structure Levels' },

  // Part 4
  { id: 'pro-eq-4a', question: 'What is denaturation of a protein?', options: ['The breaking of all peptide bonds and separation of amino acids', 'The loss of the protein\'s native 3D structure while peptide bonds remain intact', 'The formation of new disulfide bridges between R groups', 'The addition of new amino acids to the polypeptide chain'], correctIndex: 1, explanation: 'Denaturation is the unfolding of a protein\'s tertiary and quaternary structure caused by heat, pH, or other factors. Peptide bonds (primary structure) are not broken; the protein loses its functional shape.', partNumber: 4, partTitle: 'Denaturation' },
  { id: 'pro-eq-4b', question: 'Which factors can cause protein denaturation?', options: ['Light and carbon dioxide only', 'High temperature, extreme pH, heavy metals, and organic solvents', 'Only very high temperatures above 500°C', 'Neutral pH and moderate temperatures'], correctIndex: 1, explanation: 'Denaturation can be triggered by high temperature (breaking hydrogen bonds), extreme pH (disrupting ionic interactions), heavy metals (binding to side chains), and organic solvents (altering the hydrophobic environment).', partNumber: 4, partTitle: 'Denaturation' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Amino Acid Structure' },
    { partNumber: 2, partTitle: 'Peptide Bonds' },
    { partNumber: 3, partTitle: 'Protein Structure Levels' },
    { partNumber: 4, partTitle: 'Denaturation' },
  ]
}
