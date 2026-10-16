/**
 * Entrance Quiz — Transcription & Translation (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Central Dogma (why codons are triplets, RNA structure and function)
 *  2 — Transcription (writing mRNA from a template, many polymerases per gene)
 *  3 — RNA Processing (exon order in splicing, introns stay in DNA)
 *  4 — Translation (reading from AUG to stop, ribosome sites)
 *  5 — Post-Translational Modification (misfolding and degradation, protein turnover)
 *  6 — Problem-Solving Workshop (in-frame deletions, compensating frameshifts)
 *  7 — Synthesis & AP Review (splice-site mutation evidence, translation-only defects)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Central Dogma
  {
    id: 'btt-ent-1a',
    question:
      'With four RNA bases, suppose codons were only two bases long instead of three. How many different codons would exist, and would that be enough for the 20 amino acids?',
    options: [
      '16 codons, too few for 20 amino acids',
      '8 codons, which is too few for 20 amino acids',
      '20 codons, exactly enough for 20 amino acids',
      '64 codons, more than enough for 20 amino acids',
    ],
    correctIndex: 0,
    explanation:
      'With 4 bases at each of 2 positions there are $4^2 = 16$ codons, fewer than the 20 amino acids. Triplets give $4^3 = 64$, enough for all 20 amino acids plus stop signals, with room for redundancy.',
    partNumber: 1,
    partTitle: 'Central Dogma',
  },
  {
    id: 'btt-ent-1b',
    question:
      'tRNA and rRNA can carry out jobs, such as binding a codon or catalyzing a peptide bond, that a DNA molecule cannot. Which feature of RNA makes this possible?',
    options: [
      'It contains thymine, which pairs with more kinds of bases',
      'It is double-stranded, which makes it more chemically stable',
      'It is much longer than DNA, so it can hold more information',
      'It is single-stranded, so it folds into specific 3-D shapes',
    ],
    correctIndex: 3,
    explanation:
      'A single RNA strand can pair with itself and fold into a particular shape, such as the L shape of tRNA or the catalytic core of the ribosome, and that shape determines its function. RNA contains uracil, not thymine, and is usually shorter than DNA.',
    partNumber: 1,
    partTitle: 'Central Dogma',
  },

  // Part 2: Transcription
  {
    id: 'btt-ent-2a',
    question:
      'The template strand of a short stretch of a gene reads 5′–CATGCC–3′. What is the mRNA transcribed from it, written 5′ to 3′?',
    options: [
      '5′–GUACGG–3′',
      '5′–CAUGCC–3′',
      '5′–GGCAUG–3′',
      '5′–CCGTAC–3′',
    ],
    correctIndex: 2,
    explanation:
      'The mRNA is complementary and antiparallel to the template. Read the template 3′ → 5′ (CCGTAC) and pair each base (C→G, G→C, T→A, A→U) to get 5′–GGCAUG–3′. GUACGG pairs correctly but has its ends reversed, and RNA uses U, not T.',
    partNumber: 2,
    partTitle: 'Transcription',
  },
  {
    id: 'btt-ent-2b',
    question:
      'A cell must quickly make large amounts of a protein from a single-copy gene. Which feature of transcription helps it do this?',
    options: [
      'Many RNA polymerases can transcribe the gene one after another',
      'Each mRNA is copied back into extra copies of the gene',
      'RNA polymerase reads both DNA strands of the gene at once',
      'The gene is replicated many times before it is transcribed',
    ],
    correctIndex: 0,
    explanation:
      'Several RNA polymerases can move along the same gene in succession, so one gene produces many mRNA copies quickly, which is the first step at which expression is amplified. Only one strand of a gene serves as the template.',
    partNumber: 2,
    partTitle: 'Transcription',
  },

  // Part 3: RNA Processing
  {
    id: 'btt-ent-3a',
    question:
      'A gene has five exons, E1 through E5. Which mature mRNA could not be produced by alternative splicing of its pre-mRNA?',
    options: [
      'E1–E2–E3–E5',
      'E1–E3–E4–E5',
      'E1–E2–E4–E5',
      'E1–E4–E3–E5',
    ],
    correctIndex: 3,
    explanation:
      'Alternative splicing can skip exons, but the exons that remain stay in their original order. E1–E4–E3–E5 places E4 before E3, which splicing cannot do.',
    partNumber: 3,
    partTitle: 'RNA Processing',
  },
  {
    id: 'btt-ent-3b',
    question:
      'In a skin cell, the gene for a protein is 12,000 base pairs long, and the mature mRNA in the cytoplasm is 1,500 nucleotides long. How long is the same gene in the chromosome of a liver cell from the same person?',
    options: [
      '1,500 bp, since introns were cut from the DNA',
      '12,000 bp, since introns are removed from RNA only',
      '6,000 bp, since liver cells keep half the introns',
      '13,500 bp, since cap and tail are added to the DNA',
    ],
    correctIndex: 1,
    explanation:
      'Introns are spliced out of the pre-mRNA, not out of the gene. Every cell keeps the full 12,000-bp gene, introns included; only the RNA copy is shortened, and the cap and tail are added to the RNA.',
    partNumber: 3,
    partTitle: 'RNA Processing',
  },

  // Part 4: Translation
  {
    id: 'btt-ent-4a',
    question:
      'An mRNA reads 5′–G AUG AAA GGC UGA UU–3′ (spaces added for reading). Using AUG = Met, AAA = Lys, GGC = Gly and UGA = stop, how many amino acids are in the polypeptide?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    explanation:
      'Translation begins at the first AUG, so the leading G is skipped: AUG (Met), AAA (Lys), GGC (Gly), then UGA stops it. That is 3 amino acids; the stop codon adds none.',
    partNumber: 4,
    partTitle: 'Translation',
  },
  {
    id: 'btt-ent-4b',
    question:
      'During elongation, where is the tRNA holding the growing polypeptide, and where does the tRNA carrying the next amino acid bind?',
    options: [
      'The chain is on a tRNA in the E site; the next tRNA binds the P site',
      'The chain is on a tRNA in the A site; the next tRNA binds the E site',
      'The chain is on a tRNA in the P site; the next binds the A site',
      'The chain floats free in the cytosol; the next tRNA binds the P site',
    ],
    correctIndex: 2,
    explanation:
      'The P site holds the tRNA attached to the growing chain, and the incoming tRNA pairs with the codon in the A site. After the peptide bond forms, the ribosome moves, and the empty tRNA exits from the E site.',
    partNumber: 4,
    partTitle: 'Translation',
  },

  // Part 5: Post-Translational Modification
  {
    id: 'btt-ent-5a',
    question:
      'In the most common cystic fibrosis allele, one amino acid is deleted from CFTR, a chloride channel of the plasma membrane, and the protein misfolds. Where does most of this CFTR end up?',
    options: [
      'Destroyed inside the cell before it reaches the plasma membrane',
      'In the plasma membrane, where it carries out normal transport',
      'Secreted from the cell into the mucus outside the airway lining',
      'Inside the nucleus, where it binds DNA in place of the gene',
    ],
    correctIndex: 0,
    explanation:
      'Misfolded proteins are usually tagged and degraded. Most of the mutant CFTR is destroyed before it reaches the membrane, so chloride transport fails even though the change is a single amino acid.',
    partNumber: 5,
    partTitle: 'Post-Translational Modification',
  },
  {
    id: 'btt-ent-5b',
    question:
      'A cell makes protein X and protein Y at the same rate. Protein X is broken down within minutes, while protein Y lasts for days. Which protein will be more abundant in the cell?',
    options: [
      'Protein X, since its fast turnover keeps the supply fresh',
      'Neither, since equal synthesis means equal amounts',
      'Protein X, since short-lived proteins are folded faster',
      'Protein Y, since slow breakdown lets it build up over time',
    ],
    correctIndex: 3,
    explanation:
      'The amount of a protein depends on both how fast it is made and how fast it is destroyed. With equal synthesis, the protein that lasts longer accumulates to a higher level, which is one way cells control their phenotype.',
    partNumber: 5,
    partTitle: 'Post-Translational Modification',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'btt-ent-6a',
    question:
      'Three consecutive nucleotides are deleted from the middle of a gene\'s coding region, exactly removing codon 50. What is the most likely effect on the protein?',
    options: [
      'Every amino acid after position 49 is changed by a frameshift',
      'One amino acid is missing, and the rest of the sequence is normal',
      'Translation stops at codon 50, giving a short polypeptide',
      'No protein is made, since transcription cannot start',
    ],
    correctIndex: 1,
    explanation:
      'Deleting three bases removes one codon but keeps the reading frame, so the protein lacks one amino acid and is otherwise unchanged. Deleting one or two bases would shift the frame.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'btt-ent-6b',
    question:
      'In a gene, one base is inserted in codon 20 and one base is deleted in codon 23; there are no other changes. What is the most likely effect on the protein?',
    options: [
      'Every amino acid from codon 20 to the end is changed',
      'The protein is unchanged, since the two mutations cancel exactly',
      'Only codons 20 to 23 are altered, and later codons read normally',
      'No protein is made, since the mRNA cannot leave the nucleus',
    ],
    correctIndex: 2,
    explanation:
      'The insertion shifts the frame at codon 20, and the deletion shifts it back at codon 23, so only the few codons between them are read in the wrong frame (unless a stop codon happens to appear there). Later codons are read normally.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'btt-ent-7a',
    question:
      'Cells with a mutant allele make a normal amount of mRNA, but the mature mRNA is longer than normal and the protein is short and nonfunctional. Where is the mutation most likely located?',
    options: [
      'At an intron edge, so an intron stayed in the final mRNA',
      'In the promoter, which reduced how often the gene was transcribed',
      'In the middle of an intron, far from any splice signal',
      'In the start codon, so translation never began at all',
    ],
    correctIndex: 0,
    explanation:
      'A splice-site mutation can leave an intron in the mature mRNA, making it longer; the intron sequence often contains an early stop codon, giving a short protein. A promoter mutation would lower mRNA levels, and a mid-intron change is usually harmless.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'btt-ent-7b',
    question:
      'Which change would block translation of a gene\'s mRNA but leave its transcription unaffected?',
    options: [
      'A mutation that destroys the gene\'s promoter',
      'Loss of a transcription factor needed at the gene',
      'A mutation that alters the start codon AUG',
      'A drug that inactivates RNA polymerase in the nucleus',
    ],
    correctIndex: 2,
    explanation:
      'The start codon is read by the ribosome, so changing it disrupts translation, while RNA polymerase still transcribes the gene normally. The promoter, transcription factors and RNA polymerase all act in transcription.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the transcription-translation topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Central Dogma' },
    { partNumber: 2, partTitle: 'Transcription' },
    { partNumber: 3, partTitle: 'RNA Processing' },
    { partNumber: 4, partTitle: 'Translation' },
    { partNumber: 5, partTitle: 'Post-Translational Modification' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
