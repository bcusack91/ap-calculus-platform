/**
 * Entrance Quiz — DNA Replication (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'dr-ent-1a', question: 'Which statement correctly describes the base pairing in DNA?', options: ['A pairs with G via 2 hydrogen bonds', 'A pairs with C via 3 hydrogen bonds and G pairs with T via 2 hydrogen bonds', 'A pairs with T via 2 hydrogen bonds and G pairs with C via 3 hydrogen bonds', 'All base pairs are held together by 2 hydrogen bonds'], correctIndex: 2, explanation: 'In DNA, adenine pairs with thymine via 2 hydrogen bonds and guanine pairs with cytosine via 3 hydrogen bonds.', partNumber: 1, partTitle: 'DNA Structure' },
  { id: 'dr-ent-1b', question: 'What does it mean that DNA strands are antiparallel?', options: ['Both strands run in the same 5\'→3\' direction', 'One strand runs 5\'→3\' while the other runs 3\'→5\'', 'The strands are parallel and identical in sequence', 'Antiparallel refers to the spacing between base pairs'], correctIndex: 1, explanation: 'Antiparallel means the two strands of DNA run in opposite directions — one 5\'→3\' and the other 3\'→5\'.', partNumber: 1, partTitle: 'DNA Structure' },
  // Part 2
  { id: 'dr-ent-2a', question: 'What does semiconservative replication mean?', options: ['Both strands of the new DNA are newly synthesized', 'Each new DNA molecule contains one original strand and one new strand', 'Only one of the two daughter molecules receives any original DNA', 'The entire original molecule is conserved intact in one daughter cell'], correctIndex: 1, explanation: 'Semiconservative replication means each new DNA molecule consists of one parental (original) strand and one newly synthesized strand.', partNumber: 2, partTitle: 'Semiconservative Replication' },
  { id: 'dr-ent-2b', question: 'Which experiment confirmed that DNA replication is semiconservative?', options: ['Hershey-Chase experiment', 'Chargaff\'s base ratio analysis', 'Griffith\'s transformation experiment', 'Meselson-Stahl experiment'], correctIndex: 3, explanation: 'The Meselson-Stahl experiment used heavy nitrogen (¹⁵N) labeling to demonstrate that replication is semiconservative.', partNumber: 2, partTitle: 'Semiconservative Replication' },
  // Part 3
  { id: 'dr-ent-3a', question: 'Which sequence of enzyme activity correctly describes the start of DNA replication?', options: ['Ligase unwinds → polymerase adds primers → helicase adds nucleotides', 'Helicase unwinds → primase makes RNA primer → DNA polymerase adds nucleotides 5\'→3\'', 'DNA polymerase unwinds → helicase adds primers → primase seals gaps', 'Primase unwinds → helicase makes primers → ligase adds nucleotides'], correctIndex: 1, explanation: 'Helicase unwinds the double helix, primase synthesizes a short RNA primer, and DNA polymerase then adds nucleotides in the 5\'→3\' direction.', partNumber: 3, partTitle: 'Enzymes of Replication' },
  { id: 'dr-ent-3b', question: 'What is the role of DNA ligase during replication?', options: ['It seals the gaps between Okazaki fragments on the lagging strand', 'It synthesizes RNA primers on the lagging strand', 'It unwinds the DNA double helix', 'It adds nucleotides to the leading strand'], correctIndex: 0, explanation: 'DNA ligase joins Okazaki fragments together by sealing the phosphodiester bonds between them on the lagging strand.', partNumber: 3, partTitle: 'Enzymes of Replication' },
  // Part 4
  { id: 'dr-ent-4a', question: 'How does synthesis of the leading strand differ from the lagging strand?', options: ['The leading strand is synthesized in fragments; the lagging strand is continuous', 'The leading strand is synthesized continuously; the lagging strand is synthesized in Okazaki fragments', 'Both strands are synthesized continuously in the same direction', 'Both strands are synthesized in fragments that are later joined'], correctIndex: 1, explanation: 'The leading strand is synthesized continuously toward the replication fork, while the lagging strand is synthesized discontinuously as Okazaki fragments away from the fork.', partNumber: 4, partTitle: 'Leading vs Lagging Strand' },
  { id: 'dr-ent-4b', question: 'Why does the lagging strand require multiple RNA primers?', options: ['Because RNA polymerase can only work on the lagging strand', 'Because the lagging strand has more nucleotides than the leading strand', 'Because DNA polymerase cannot function without continuous primer coverage', 'Because each Okazaki fragment needs its own RNA primer to initiate synthesis'], correctIndex: 3, explanation: 'Each Okazaki fragment on the lagging strand requires a separate RNA primer because DNA polymerase can only synthesize in the 5\'→3\' direction, away from the fork.', partNumber: 4, partTitle: 'Leading vs Lagging Strand' },
  // Part 5
  { id: 'dr-ent-5a', question: 'How does DNA polymerase proofread during replication?', options: ['It uses 5\'→3\' exonuclease activity to remove mismatched bases', 'It relies entirely on external repair enzymes after replication is complete', 'It uses 3\'→5\' exonuclease activity to remove incorrectly paired nucleotides', 'It pauses replication and signals for ligase to fix errors'], correctIndex: 2, explanation: 'DNA polymerase has 3\'→5\' proofreading exonuclease activity that allows it to back up and remove mismatched nucleotides during replication.', partNumber: 5, partTitle: 'Proofreading & Repair' },
  { id: 'dr-ent-5b', question: 'Which repair mechanisms fix errors that escape proofreading by DNA polymerase?', options: ['Transcription-coupled repair only', 'Mismatch repair and nucleotide excision repair', 'Homologous recombination only', 'Base excision repair is the only post-replication mechanism'], correctIndex: 1, explanation: 'Mismatch repair corrects base-pairing errors missed by proofreading, and nucleotide excision repair removes bulky lesions like thymine dimers.', partNumber: 5, partTitle: 'Proofreading & Repair' },
  // Part 6
  { id: 'dr-ent-6a', question: 'If a DNA template strand reads 3\'-TACGGA-5\', what is the complementary strand?', options: ['5\'-ATGCCT-3\'', '3\'-ATGCCT-5\'', '5\'-TACGGA-3\'', '3\'-UGCCAU-5\''], correctIndex: 0, explanation: 'The complementary strand is built antiparallel: T→A, A→T, C→G, G→C, G→C, A→T, yielding 5\'-ATGCCT-3\'.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'dr-ent-6b', question: 'How many replication forks are formed at a single origin of replication?', options: ['1 — replication proceeds in one direction only', '2 — replication is bidirectional from the origin', '4 — two on each strand', '0 — replication forks only form at telomeres'], correctIndex: 1, explanation: 'Replication is bidirectional: two replication forks move in opposite directions from each origin of replication.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'dr-ent-7a', question: 'What is the role of telomerase?', options: ['It adds Okazaki fragments to the lagging strand', 'It removes damaged nucleotides from the ends of chromosomes', 'It caps mRNA molecules to prevent degradation', 'It extends telomeres in germ cells; somatic cells shorten with each division'], correctIndex: 3, explanation: 'Telomerase is a reverse transcriptase that extends telomeres in germ and stem cells. Somatic cells lack sufficient telomerase, so their telomeres shorten with each division.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'dr-ent-7b', question: 'Why are errors in DNA replication biologically significant?', options: ['They always cause cell death', 'They are always corrected by repair enzymes so they have no effect', 'They can produce mutations that serve as a source of genetic variation', 'They only affect non-coding regions of DNA'], correctIndex: 2, explanation: 'Uncorrected replication errors introduce mutations, which are the ultimate source of genetic variation and raw material for evolution.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'DNA Structure' },
    { partNumber: 2, partTitle: 'Semiconservative Replication' },
    { partNumber: 3, partTitle: 'Enzymes of Replication' },
    { partNumber: 4, partTitle: 'Leading vs Lagging Strand' },
    { partNumber: 5, partTitle: 'Proofreading & Repair' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
