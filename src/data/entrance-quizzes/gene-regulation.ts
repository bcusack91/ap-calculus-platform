/**
 * Entrance Quiz — Gene Regulation (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Gene Regulation Overview (constitutive genes, prokaryote vs eukaryote architecture)
 *  2 — Prokaryotic Regulation (cAMP and the glucose effect, trp repressor)
 *  3 — Eukaryotic Regulation (enhancer position, transcription factors set cell identity)
 *  4 — Epigenetics (diet and methylation, reading chromatin marks)
 *  5 — RNA Interference (antiviral RNAi, translational silencing)
 *  6 — Problem-Solving Workshop (structural gene and cAMP mutants)
 *  7 — AP Review (matching mechanisms to levels, the glucose misconception)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Gene Regulation Overview
  {
    id: 'bgr-ent-1a',
    question:
      'Which of these genes is most likely to be expressed constitutively, at a steady level in nearly every cell?',
    options: [
      'A gene for a glycolysis enzyme needed by all cells at all times',
      'A gene for a protein made only during heat stress',
      'A gene for an enzyme that digests a rarely available sugar',
      'A gene for a hormone produced only at one stage of life',
    ],
    correctIndex: 0,
    explanation:
      'Housekeeping genes, such as those for glycolysis enzymes and ribosomal proteins, are needed all the time and are expressed continuously. Heat-shock, rare-sugar and stage-specific genes are regulated, switched on only when needed.',
    partNumber: 1,
    partTitle: 'Gene Regulation Overview',
  },
  {
    id: 'bgr-ent-1b',
    question:
      'Which statement correctly contrasts how bacteria and eukaryotes coordinate the expression of genes that work in the same pathway?',
    options: [
      'Eukaryotes group the genes into operons; bacteria regulate each one separately',
      'Bacteria often share one promoter and mRNA; eukaryotes use shared transcription factors',
      'Both group the genes into operons that are transcribed as a single mRNA',
      'Neither coordinates such genes, since each gene responds to its own signal',
    ],
    correctIndex: 1,
    explanation:
      'Bacterial operons cluster related genes under one promoter and operator, so they are transcribed together on one mRNA. Eukaryotic genes have their own promoters, often on different chromosomes, and are coordinated by the same transcription factors binding each gene\'s regulatory DNA.',
    partNumber: 1,
    partTitle: 'Gene Regulation Overview',
  },

  // Part 2: Prokaryotic Regulation
  {
    id: 'bgr-ent-2a',
    question:
      'Wild-type E. coli are growing in a medium containing both glucose and lactose, so the lac operon is transcribed only at a low level. Which change would most increase lac transcription while both sugars remain?',
    options: [
      'Adding cAMP to the cells',
      'Adding more glucose to the medium',
      'Adding extra lac repressor protein',
      'Removing all the lactose from the medium',
    ],
    correctIndex: 0,
    explanation:
      'Glucose keeps cAMP low, so CAP cannot bind and boost the promoter even though lactose has removed the repressor. Supplying cAMP lets CAP-cAMP bind and recruit RNA polymerase. More glucose or repressor, or removing lactose, would lower transcription.',
    partNumber: 2,
    partTitle: 'Prokaryotic Regulation',
  },
  {
    id: 'bgr-ent-2b',
    question:
      'A mutant trp repressor binds the trp operator even when no tryptophan is present. What happens to this strain in a medium that lacks tryptophan?',
    options: [
      'The operon turns on normally, since there is no tryptophan to act as corepressor',
      'The operon is stuck on, so the cell overproduces tryptophan in every medium',
      'The operon stays off, so the cell cannot make tryptophan and fails to grow',
      'The operon turns on only when lactose is present, as the lac operon does',
    ],
    correctIndex: 2,
    explanation:
      'Normally the trp repressor is inactive until tryptophan binds it. A repressor that binds the operator on its own blocks transcription all the time, so the cell cannot build tryptophan and depends on getting it from the medium.',
    partNumber: 2,
    partTitle: 'Prokaryotic Regulation',
  },

  // Part 3: Eukaryotic Regulation
  {
    id: 'bgr-ent-3a',
    question:
      'Researchers move an enhancer from 10,000 base pairs upstream of a gene to a position inside one of the gene\'s introns. The gene is still expressed at a high level. What does this result show?',
    options: [
      'Enhancers work only when they are next to the promoter',
      'The enhancer was never involved in expressing the gene',
      'Introns contain the promoter that RNA polymerase uses',
      'Such elements can act from many locations',
    ],
    correctIndex: 3,
    explanation:
      'Enhancers can lie upstream, downstream or within introns; the DNA loops so that activators bound at the enhancer contact the proteins at the promoter. Moving the enhancer without losing its effect shows it does not need a fixed position.',
    partNumber: 3,
    partTitle: 'Eukaryotic Regulation',
  },
  {
    id: 'bgr-ent-3b',
    question:
      'When a single transcription factor normally found in muscle precursors is added to skin fibroblasts, the fibroblasts begin expressing many muscle genes. Which conclusion is best supported?',
    options: [
      'The fibroblasts gained new muscle genes from the added factor',
      'Active regulatory proteins set cell type without any change in DNA',
      'The factor mutated the fibroblast DNA into a muscle sequence',
      'Fibroblasts lack the muscle genes that muscle cells contain',
    ],
    correctIndex: 1,
    explanation:
      'All cells carry the same genome, so the muscle genes were already present in the fibroblasts. Supplying a master regulator switched on that battery of genes, showing that the set of active transcription factors, not a change in DNA, specifies cell type.',
    partNumber: 3,
    partTitle: 'Eukaryotic Regulation',
  },

  // Part 4: Epigenetics
  {
    id: 'bgr-ent-4a',
    question:
      'Honeybee queens and workers develop from genetically identical female larvae; larvae fed royal jelly become queens. Which explanation best accounts for the difference?',
    options: [
      'Royal jelly mutates the larvae\'s DNA so that new queen genes appear',
      'The diet alters DNA methylation, switching on other sets of genes',
      'Queens inherit an extra chromosome that worker larvae do not receive',
      'Workers lose the genes for reproduction after they finish hatching',
    ],
    correctIndex: 1,
    explanation:
      'The two diets produce different methylation patterns on the same genome, which change which genes are expressed and lead to very different bodies and behavior. No DNA sequence or chromosome number changes.',
    partNumber: 4,
    partTitle: 'Epigenetics',
  },
  {
    id: 'bgr-ent-4b',
    question:
      'In one cell type, gene P has highly acetylated histones and an unmethylated promoter. In another cell type, gene P has deacetylated histones and a heavily methylated promoter. Which prediction is best supported?',
    options: [
      'P is silent in the first cell type and active in the second',
      'P has a different DNA sequence in the two cell types',
      'P is expressed equally, since histone marks do not matter',
      'P is active in the first cell type and silent in the second',
    ],
    correctIndex: 3,
    explanation:
      'Histone acetylation loosens chromatin and allows transcription, while deacetylation and heavy promoter methylation compact chromatin and silence the gene. The DNA sequence is the same in both cell types; only the marks differ.',
    partNumber: 4,
    partTitle: 'Epigenetics',
  },

  // Part 5: RNA Interference
  {
    id: 'bgr-ent-5a',
    question:
      'Many viruses make double-stranded RNA while they replicate inside a cell. How can the cell\'s small-RNA system defend against such a virus?',
    options: [
      'Chop it into short pieces that pair with viral mRNAs and block them',
      'Insert the double-stranded RNA into the cell\'s genome so that it becomes inactive',
      'Use the double-stranded RNA as a template to make antibodies against the virus',
      'Convert it into DNA, which the virus can no longer use',
    ],
    correctIndex: 0,
    explanation:
      'Enzymes chop double-stranded RNA into pieces about 20 nucleotides long; loaded into a protein complex, these pair with complementary viral mRNAs, which are then broken down or not translated. This works post-transcriptionally and does not change any DNA.',
    partNumber: 5,
    partTitle: 'RNA Interference',
  },
  {
    id: 'bgr-ent-5b',
    question:
      'After a treatment, cells make much less protein W. The rate of W transcription is unchanged, and W\'s mRNA remains in the cytoplasm at its normal level. Which mechanism best explains the result?',
    options: [
      'A repressor bound to the silencer for gene W',
      'Heavy methylation of the promoter of gene W',
      'Ribosomes prevented from reading the mRNA of W',
      'A frameshift mutation in the coding region of gene W',
    ],
    correctIndex: 2,
    explanation:
      'Normal transcription and normal mRNA levels with less protein point to control after transcription, such as a small RNA pairing with the mRNA and blocking its translation. A repressor or promoter methylation would lower transcription, and the treatment did not mutate the gene.',
    partNumber: 5,
    partTitle: 'RNA Interference',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bgr-ent-6a',
    question:
      'An E. coli strain has a mutation that destroys the lacZ structural gene, while the promoter, operator, repressor and CAP site are normal. What happens when the strain is grown with lactose and no glucose?',
    options: [
      'No lac mRNA is made, since the operon cannot be induced',
      'Normal amounts of working lacZ enzyme are made by the cell',
      'The operon is transcribed, but no working lacZ enzyme is produced',
      'The repressor stays bound, since lactose cannot be broken down',
    ],
    correctIndex: 2,
    explanation:
      'The regulatory parts work, so the operon is induced and transcribed at a high level, but a broken structural gene cannot code for a functional enzyme no matter how much it is transcribed.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bgr-ent-6b',
    question:
      'A mutant E. coli strain shows only low lac operon expression with lactose and no glucose. Adding cAMP to the medium, which the cells take up, restores high expression. Which component is most likely defective?',
    options: [
      'The lac operator, which the repressor fails to bind',
      'The CAP protein, which fails to bind cAMP',
      'The lac repressor, which stays on the operator',
      'The cAMP-making enzyme, which is not working',
    ],
    correctIndex: 3,
    explanation:
      'Supplying cAMP bypasses the defect, so CAP must still work; the cell simply cannot make its own cAMP. A CAP that cannot bind cAMP would not be rescued, and operator or repressor defects would not give a low level that cAMP restores.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bgr-ent-7a',
    question:
      'Which pairing of a regulatory mechanism with its level of control is correct?',
    options: [
      'Promoter methylation: translational control',
      'microRNA binding an mRNA: transcriptional control',
      'Phosphorylating an enzyme: post-translational control',
      'Alternative splicing: post-translational control',
    ],
    correctIndex: 2,
    explanation:
      'Phosphorylation switches a finished protein on or off, which is post-translational control. Promoter methylation acts on transcription, microRNAs act on mRNA after transcription, and alternative splicing is post-transcriptional RNA processing.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bgr-ent-7b',
    question:
      'A student writes: "Like the lac operon, the trp operon is normally off and is switched on when tryptophan is present." Which correction is accurate?',
    options: [
      'The trp operon is normally on, and tryptophan switches it off',
      'The trp operon is normally off, and tryptophan switches it on',
      'Both operons are normally on and are switched off by glucose',
      'The trp operon is controlled by CAP-cAMP, as the lac operon is',
    ],
    correctIndex: 0,
    explanation:
      'The trp operon is repressible: it is on by default, and tryptophan acts as a corepressor that activates the repressor and shuts the operon off. The lac operon is inducible: off by default and switched on by an inducer derived from lactose.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the gene-regulation topic.
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
    { partNumber: 1, partTitle: 'Gene Regulation Overview' },
    { partNumber: 2, partTitle: 'Prokaryotic Regulation' },
    { partNumber: 3, partTitle: 'Eukaryotic Regulation' },
    { partNumber: 4, partTitle: 'Epigenetics' },
    { partNumber: 5, partTitle: 'RNA Interference' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
