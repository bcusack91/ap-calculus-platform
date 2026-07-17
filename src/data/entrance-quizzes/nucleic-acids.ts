/**
 * Entrance Quiz — Nucleic Acids (AP Biology)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'nucl-eq-1a', question: 'What are the three main components of a nucleotide?', options: ['Phosphate group, nitrogenous base, and pentose sugar', 'Nitrogen, hydrogen, and oxygen atoms', 'Amino acid, phosphate, and carbohydrate', 'Ribose, deoxyribose, and glucose'], correctIndex: 0, explanation: 'A nucleotide consists of three components: a phosphate group $(PO_{4}^{3-})$, a nitrogenous base (purine or pyrimidine), and a pentose sugar (ribose in RNA, deoxyribose in DNA).', partNumber: 1, partTitle: 'Nucleotide Structure' },
  { id: 'nucl-eq-1b', question: 'Which sugar is found in DNA, and which in RNA?', options: ['Glucose in both; no difference', 'Deoxyribose in DNA; ribose in RNA', 'Ribose in DNA; deoxyribose in RNA', 'Maltose in DNA; sucrose in RNA'], correctIndex: 1, explanation: 'DNA contains deoxyribose (lacks one oxygen atom at the 2\' carbon), while RNA contains ribose. This difference contributes to RNA\'s greater chemical reactivity.', partNumber: 1, partTitle: 'Nucleotide Structure' },

  // Part 2
  { id: 'nucl-eq-2a', question: 'What are the two types of nitrogenous bases, and which are examples of each?', options: ['Hydrophobic and hydrophilic; no examples needed', 'Purines (adenine, guanine) and pyrimidines (cytosine, thymine, uracil)', 'Single-ring and double-ring; adenine and cytosine', 'Dominant and recessive; A and T'], correctIndex: 1, explanation: 'Purines are large bases with two rings (adenine and guanine). Pyrimidines are smaller bases with one ring (cytosine, thymine in DNA, and uracil in RNA).', partNumber: 2, partTitle: 'Bases and Base Pairing' },
  { id: 'nucl-eq-2b', question: 'Which base pairs form in DNA through hydrogen bonding?', options: ['Adenine with guanine; cytosine with thymine', 'Adenine with thymine; guanine with cytosine', 'Adenine with cytosine; guanine with uracil', 'All bases pair equally with each other'], correctIndex: 1, explanation: 'In DNA, adenine (A) pairs with thymine (T) via two hydrogen bonds, and guanine (G) pairs with cytosine (C) via three hydrogen bonds. This is Chargaff\'s rule.', partNumber: 2, partTitle: 'Bases and Base Pairing' },

  // Part 3
  { id: 'nucl-eq-3a', question: 'What does the 5\' to 3\' directionality of DNA refer to?', options: ['The age of the DNA molecule from oldest to newest', 'The numbering of carbons on the sugar, indicating the direction of the backbone orientation', 'The size of the nitrogenous bases from largest to smallest', 'The order of genes from the start to end of a chromosome'], correctIndex: 1, explanation: 'The 5\' and 3\' refer to the carbon atoms on the deoxyribose sugar. DNA strands have a direction: the 5\' end has a free phosphate group, the 3\' end has a free hydroxyl group. Complementary strands run antiparallel.', partNumber: 3, partTitle: 'DNA Directionality' },
  { id: 'nucl-eq-3b', question: 'In the DNA double helix, how are the two strands oriented relative to each other?', options: ['Both strands run in the same 5\' to 3\' direction', 'Strands run antiparallel: one is 5\' to 3\', the other is 3\' to 5\'', 'One strand is linear, the other is circular', 'Strands are parallel but separated by multiple layers'], correctIndex: 1, explanation: 'The two DNA strands are antiparallel: if one strand reads 5\' to 3\' left to right, its complement reads 3\' to 5\' left to right. This orientation allows base pairing and DNA replication.', partNumber: 3, partTitle: 'DNA Directionality' },

  // Part 4
  { id: 'nucl-eq-4a', question: 'How are adjacent nucleotides connected in a DNA strand?', options: ['By peptide bonds between amino acids', 'By hydrogen bonds between any available atoms', 'By phosphodiester bonds linking the phosphate of one nucleotide to the sugar of the next', 'By hydrophobic interactions between bases'], correctIndex: 2, explanation: 'Nucleotides form a sugar-phosphate backbone through phosphodiester bonds: the phosphate group of one nucleotide bonds covalently to the 3\'-hydroxyl carbon of the previous sugar.', partNumber: 4, partTitle: 'Backbone and Polymers' },
  { id: 'nucl-eq-4b', question: 'Nucleic acids are polymers formed by dehydration synthesis. What is removed during this process?', options: ['Nitrogen atoms from the bases', 'Water molecules $(H_{2}O)$ between nucleotides', 'Phosphate groups from the sugar backbone', 'Hydrogen atoms only'], correctIndex: 1, explanation: 'During dehydration synthesis, a water molecule $(H_{2}O)$ is released when nucleotides link via phosphodiester bonds. This condensation reaction polymerizes nucleotides into DNA or RNA.', partNumber: 4, partTitle: 'Backbone and Polymers' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Nucleotide Structure' },
    { partNumber: 2, partTitle: 'Bases and Base Pairing' },
    { partNumber: 3, partTitle: 'DNA Directionality' },
    { partNumber: 4, partTitle: 'Backbone and Polymers' },
  ]
}
