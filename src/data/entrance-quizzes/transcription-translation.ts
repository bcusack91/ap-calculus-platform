/**
 * Entrance Quiz — Transcription & Translation (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'tt-ent-1a', question: 'What is the central dogma of molecular biology?', options: ['Protein → RNA → DNA', 'RNA → DNA → Protein', 'DNA → RNA → Protein', 'DNA → Protein → RNA'], correctIndex: 2, explanation: 'The central dogma states that genetic information flows from DNA to RNA to Protein.', partNumber: 1, partTitle: 'Gene Expression Overview' },
  { id: 'tt-ent-1b', question: 'Gene expression consists of which two main processes?', options: ['Replication and repair', 'Transcription and translation', 'Mitosis and meiosis', 'Splicing and capping'], correctIndex: 1, explanation: 'Gene expression involves transcription (DNA → mRNA) and translation (mRNA → protein).', partNumber: 1, partTitle: 'Gene Expression Overview' },
  // Part 2
  { id: 'tt-ent-2a', question: 'In which direction does RNA polymerase read the template strand during transcription?', options: ['5\'→3\'', '3\'→5\', building mRNA 3\'→5\'', 'It reads both directions simultaneously', '3\'→5\', building mRNA 5\'→3\''], correctIndex: 3, explanation: 'RNA polymerase reads the template strand 3\'→5\' and synthesizes the mRNA strand in the 5\'→3\' direction.', partNumber: 2, partTitle: 'Transcription' },
  { id: 'tt-ent-2b', question: 'What is a promoter in the context of transcription?', options: ['A protein that activates translation at the ribosome', 'A DNA sequence where RNA polymerase binds to begin transcription', 'An RNA sequence that caps the 5\' end of mRNA', 'A stop signal that terminates transcription'], correctIndex: 1, explanation: 'A promoter is a specific DNA sequence upstream of a gene where RNA polymerase binds to initiate transcription.', partNumber: 2, partTitle: 'Transcription' },
  // Part 3
  { id: 'tt-ent-3a', question: 'Which of the following is NOT part of eukaryotic mRNA processing?', options: ['Addition of Okazaki fragments', 'Addition of a 3\' poly-A tail', 'Splicing out introns', 'Addition of a 5\' cap'], correctIndex: 0, explanation: 'Eukaryotic mRNA processing includes a 5\' cap, 3\' poly-A tail, and splicing out introns. Okazaki fragments are part of DNA replication, not RNA processing.', partNumber: 3, partTitle: 'RNA Processing' },
  { id: 'tt-ent-3b', question: 'What is the difference between introns and exons?', options: ['Introns code for protein; exons are removed', 'Introns are non-coding sequences spliced out; exons are expressed and code for protein', 'Both introns and exons are translated into protein', 'Exons are only found in prokaryotic mRNA'], correctIndex: 1, explanation: 'Introns are non-coding intervening sequences that are spliced out during mRNA processing. Exons are the expressed sequences that code for protein.', partNumber: 3, partTitle: 'RNA Processing' },
  // Part 4
  { id: 'tt-ent-4a', question: 'During translation, how are mRNA codons interpreted?', options: ['DNA polymerase reads codons directly from the DNA', 'Codons are read by RNA polymerase at the nucleus', 'Ribosomes facilitate the reading of mRNA codons by matching tRNA anticodons', 'Each codon is matched by a specific restriction enzyme'], correctIndex: 2, explanation: 'Translation occurs at ribosomes where mRNA codons are read and matched by complementary tRNA anticodons carrying amino acids.', partNumber: 4, partTitle: 'Translation' },
  { id: 'tt-ent-4b', question: 'Which codon signals the start of translation, and what amino acid does it code for?', options: ['UAA — no amino acid (stop)', 'AUG — methionine', 'GCA — alanine', 'UGA — tryptophan'], correctIndex: 1, explanation: 'AUG is the universal start codon and codes for methionine. The three stop codons are UAA, UAG, and UGA.', partNumber: 4, partTitle: 'Translation' },
  // Part 5
  { id: 'tt-ent-5a', question: 'What can happen to a polypeptide after translation?', options: ['It is immediately degraded by proteasomes', 'It is transported directly to the nucleus for replication', 'Nothing — the polypeptide is fully functional as translated', 'It may be folded by chaperones, cleaved, or have chemical groups added'], correctIndex: 3, explanation: 'Post-translational modifications include folding by chaperone proteins, proteolytic cleavage, and addition of chemical groups (phosphorylation, glycosylation, etc.).', partNumber: 5, partTitle: 'Post-Translational Modification' },
  { id: 'tt-ent-5b', question: 'What is the function of a signal peptide?', options: ['It marks the mRNA for degradation', 'It directs the protein to the ER for secretion or membrane insertion', 'It activates the promoter for transcription', 'It binds to the stop codon to terminate translation'], correctIndex: 1, explanation: 'A signal peptide is a short amino acid sequence at the beginning of a protein that directs it to the endoplasmic reticulum for secretion or insertion into membranes.', partNumber: 5, partTitle: 'Post-Translational Modification' },
  // Part 6
  { id: 'tt-ent-6a', question: 'If an mRNA codon is 5\'-AUG-3\', what is the corresponding tRNA anticodon?', options: ['5\'-AUG-3\'', '5\'-TAC-3\'', '3\'-AUG-5\'', '3\'-UAC-5\''], correctIndex: 3, explanation: 'The tRNA anticodon is complementary and antiparallel to the mRNA codon. For 5\'-AUG-3\', the anticodon is 3\'-UAC-5\'.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'tt-ent-6b', question: 'A point mutation changes one amino acid in the resulting protein. What type of mutation is this?', options: ['Missense mutation', 'Silent mutation', 'Nonsense mutation', 'Frameshift mutation'], correctIndex: 0, explanation: 'A missense mutation is a point mutation that changes one codon to code for a different amino acid, altering the protein sequence.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'tt-ent-7a', question: 'How would a mutation in a promoter region most likely affect a gene?', options: ['It would change the amino acid sequence of the protein', 'It would affect the level of gene expression without changing the protein sequence', 'It would cause a frameshift in the coding region', 'It would have no effect on the organism'], correctIndex: 1, explanation: 'Mutations in promoter regions affect how much or whether a gene is transcribed, altering expression levels without changing the protein-coding sequence itself.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'tt-ent-7b', question: 'How can one gene produce multiple different proteins?', options: ['By mutating during each cell division', 'By using different DNA polymerases', 'Through alternative splicing of exons during mRNA processing', 'One gene can only produce one protein'], correctIndex: 2, explanation: 'Alternative splicing allows different combinations of exons to be included in the mature mRNA, enabling one gene to produce multiple protein variants.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Gene Expression Overview' },
    { partNumber: 2, partTitle: 'Transcription' },
    { partNumber: 3, partTitle: 'RNA Processing' },
    { partNumber: 4, partTitle: 'Translation' },
    { partNumber: 5, partTitle: 'Post-Translational Modification' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
