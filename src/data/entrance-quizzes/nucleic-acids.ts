/**
 * Entrance Quiz — Nucleic Acids (AP Biology)
 *
 * 8 questions covering all 4 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Introduction to Nucleic Acids (DNA vs RNA, base pairing)
 *  2 — Structure: Nucleotides & Helix (Chargaff, backbone vs base pairs)
 *  3 — Function & Central Dogma (ATP, transcription)
 *  4 — AP Review (DNA vs RNA traps, structure-function)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to Nucleic Acids
  {
    id: 'bnuc-ent-1a',
    question:
      'A nucleic acid sample is single-stranded and its sugar is ribose. Which pair of bases would a researcher expect to find present and absent?',
    options: [
      'Uracil present, thymine absent',
      'Thymine present, uracil absent',
      'Thymine and uracil both present',
      'Thymine and uracil both absent',
    ],
    correctIndex: 0,
    explanation:
      'Ribose and a single strand identify RNA, which uses uracil in place of thymine. Thymine is found in DNA.',
    partNumber: 1,
    partTitle: 'Introduction to Nucleic Acids',
  },
  {
    id: 'bnuc-ent-1b',
    question:
      'A double-stranded DNA segment has 10 base pairs: 6 are G–C pairs and 4 are A–T pairs. How many hydrogen bonds hold its two strands together?',
    options: ['20', '24', '26', '30'],
    correctIndex: 2,
    explanation:
      'Each G–C pair has 3 hydrogen bonds and each A–T pair has 2: $6 \\times 3 + 4 \\times 2 = 26$. Using 2 per pair gives 20, swapping the values gives 24, and 3 per pair gives 30.',
    partNumber: 1,
    partTitle: 'Introduction to Nucleic Acids',
  },

  // Part 2: Structure: Nucleotides & Helix
  {
    id: 'bnuc-ent-2a',
    question:
      'In a sample of double-stranded DNA, adenine and thymine together make up 46% of the bases. What percentage of the bases are guanine?',
    options: ['23%', '27%', '46%', '54%'],
    correctIndex: 1,
    explanation:
      'G + C make up $100\\% - 46\\% = 54\\%$, and Chargaff\'s rule says %G = %C, so guanine is $54\\% \\div 2 = 27\\%$. 54% is G and C together, and 23% is the value for adenine.',
    partNumber: 2,
    partTitle: 'Structure: Nucleotides & Helix',
  },
  {
    id: 'bnuc-ent-2b',
    question:
      'Which description correctly places the two main kinds of bonds in a DNA double helix?',
    options: [
      'Hydrogen bonds in the backbone, phosphodiester bonds between paired bases',
      'Peptide bonds in the backbone, hydrogen bonds between paired bases',
      'Ionic bonds in the backbone, phosphodiester bonds between paired bases',
      'Phosphodiester bonds in the backbone, hydrogen bonds between paired bases',
    ],
    correctIndex: 3,
    explanation:
      'Covalent phosphodiester bonds link the 3\' carbon of one sugar to the 5\' carbon of the next through a phosphate, forming the outer backbone; weaker hydrogen bonds hold complementary bases together in the middle, which lets the strands separate.',
    partNumber: 2,
    partTitle: 'Structure: Nucleotides & Helix',
  },

  // Part 3: Function & Central Dogma
  {
    id: 'bnuc-ent-3a',
    question:
      'A muscle cell needs energy to contract. Which reaction directly releases the energy it uses?',
    options: [
      'Splitting the outer phosphate off ATP to make ADP',
      'Joining a phosphate to ADP to form ATP',
      'Linking nucleotides into a new strand of DNA',
      'Separating the two strands of a DNA double helix',
    ],
    correctIndex: 0,
    explanation:
      'ATP is a nucleotide with three phosphates; breaking off the outer phosphate ($ATP \\rightarrow ADP + P_i$) releases energy that drives cellular work. Forming ATP from ADP stores energy rather than releasing it.',
    partNumber: 3,
    partTitle: 'Function & Central Dogma',
  },
  {
    id: 'bnuc-ent-3b',
    question:
      'A drug blocks transcription in a cell but does not affect DNA replication. Which molecules will the cell soon run short of first?',
    options: [
      'New DNA strands copied from DNA templates',
      'Free amino acids for building polypeptides',
      'The cell\'s supply of nucleotides',
      'mRNA copies of genes needed by ribosomes',
    ],
    correctIndex: 3,
    explanation:
      'Transcription copies a gene into mRNA (DNA → mRNA), so blocking it stops new mRNA from reaching ribosomes; protein production falls afterward. DNA replication is unaffected, and amino acids and nucleotides are not made by transcription.',
    partNumber: 3,
    partTitle: 'Function & Central Dogma',
  },

  // Part 4: AP Review
  {
    id: 'bnuc-ent-4a',
    question:
      'A student writes that DNA can be told apart from RNA because only DNA contains phosphate groups. Which correction is accurate?',
    options: [
      'Phosphate is only in RNA; DNA has nitrogen-rich bases in its place',
      'Phosphate is in both; DNA differs in its sugar and in having T',
      'Phosphate is in neither; both backbones are built from sugars alone',
      'Phosphate is only in DNA, though RNA gains extra phosphate from ATP',
    ],
    correctIndex: 1,
    explanation:
      'Every nucleotide has a phosphate group, so DNA and RNA both contain phosphate. DNA differs by having deoxyribose instead of ribose and thymine instead of uracil.',
    partNumber: 4,
    partTitle: 'AP Review',
  },
  {
    id: 'bnuc-ent-4b',
    question:
      'Which statement correctly links a structural feature of DNA to its role?',
    options: [
      'A single strand lets DNA leave the nucleus and reach the ribosomes',
      'Its uracil bases make DNA more stable than RNA for long-term storage',
      'Complementary strands let each strand serve as a template for a new copy',
      'Peptide bonds in the backbone keep DNA from breaking down quickly',
    ],
    correctIndex: 2,
    explanation:
      'Because the strands are complementary and antiparallel, each one carries the information to rebuild the other, which makes accurate replication possible. DNA is double-stranded, contains thymine rather than uracil, and has a sugar-phosphate backbone.',
    partNumber: 4,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the nucleic-acids topic.
 * Returns all 8 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Nucleic Acids' },
    { partNumber: 2, partTitle: 'Structure: Nucleotides & Helix' },
    { partNumber: 3, partTitle: 'Function & Central Dogma' },
    { partNumber: 4, partTitle: 'AP Review' },
  ]
}
