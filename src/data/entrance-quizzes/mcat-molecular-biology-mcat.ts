/**
 * Entrance Quiz — Molecular Biology (MCAT)
 * 15 questions · 7 parts (3 / 2 / 2 / 2 / 2 / 2 / 2)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026 so each part tests the lesson part of the same number).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'DNA Replication'
const P2 = 'Transcription'
const P3 = 'Translation (Protein Synthesis)'
const P4 = 'Gene Regulation'
const P5 = 'Mutations & DNA Repair'
const P6 = 'Biotechnology Techniques'
const P7 = 'Viruses & Recombinant DNA'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — DNA Replication
  { id: 'mmb-ent-1a', question: 'Which enzyme breaks the hydrogen bonds between base pairs to open the double helix at the replication fork?', options: ['Topoisomerase', 'Primase', 'Helicase', 'DNA ligase'], correctIndex: 2, explanation: 'Helicase unwinds the helix by breaking the hydrogen bonds between complementary bases. Topoisomerase relieves the supercoiling that builds up ahead of the fork, primase lays down RNA primers, and DNA ligase seals nicks between fragments.', partNumber: 1, partTitle: P1 },
  { id: 'mmb-ent-1b', question: 'In bacteria, which enzyme removes the RNA primers and fills the gaps with DNA?', options: ['DNA polymerase I', 'DNA polymerase III', 'Primase', 'DNA ligase'], correctIndex: 0, explanation: 'DNA polymerase I removes RNA primers and replaces them with DNA. DNA polymerase III does the main synthesis, primase makes the primers in the first place, and ligase only seals the final nick once the gap is filled.', partNumber: 1, partTitle: P1 },
  { id: 'mmb-ent-1c', question: 'Telomerase is active in germ cells and most cancer cells but usually silent in somatic cells. What does it give cancer cells?', options: ['Repair of double-strand breaks in oncogenes', 'Methylation that silences tumor suppressors', 'RNA primers for each lagging-strand fragment', 'Telomere upkeep that allows endless division'], correctIndex: 3, explanation: 'Telomeres shorten with each division until cells reach the Hayflick limit. Telomerase, a reverse transcriptase carrying its own RNA template, extends telomeres and lets cancer cells keep dividing. It does not repair breaks, methylate promoters or make primers (primase does that).', partNumber: 1, partTitle: P1 },

  // Part 2 — Transcription
  { id: 'mmb-ent-2a', question: 'Which enzyme transcribes protein-coding genes into mRNA in eukaryotes?', options: ['RNA polymerase I', 'RNA polymerase II', 'RNA polymerase III', 'Reverse transcriptase'], correctIndex: 1, explanation: 'RNA polymerase II makes pre-mRNA in eukaryotes. RNA polymerase I makes most rRNA and RNA polymerase III makes tRNA and some small RNAs. Reverse transcriptase copies RNA into DNA, the opposite direction.', partNumber: 2, partTitle: P2 },
  { id: 'mmb-ent-2b', question: "The poly-A tail added to the 3' end of a eukaryotic mRNA mainly:", options: ['Protects the mRNA from rapid degradation', 'Marks the start codon for the ribosome', 'Removes introns as a lariat structure', 'Signals where transcription should begin'], correctIndex: 0, explanation: "The poly-A tail stabilizes the mRNA and helps its export from the nucleus. The ribosome finds the start codon by scanning from the 5' cap, introns are removed as lariats by the spliceosome, and transcription start is set by the promoter.", partNumber: 2, partTitle: P2 },

  // Part 3 — Translation (Protein Synthesis)
  { id: 'mmb-ent-3a', question: 'How does a eukaryotic ribosome usually find the start codon on an mRNA?', options: ["It scans from the 5' cap to the first AUG", 'It binds a Shine-Dalgarno sequence by the AUG', "It reads back from the 3' poly-A tail", 'It starts at the first UAG it encounters'], correctIndex: 0, explanation: "The small subunit binds the 5' cap with the initiator Met-tRNA and scans along the mRNA until it reaches the first AUG, where the large subunit joins. Shine-Dalgarno pairing is how bacterial ribosomes find their start site, translation runs 5' to 3' rather than from the tail, and UAG is a stop codon.", partNumber: 3, partTitle: P3 },
  { id: 'mmb-ent-3b', question: 'Which codon ends translation rather than adding an amino acid?', options: ['AUG', 'UGG', 'UAG', 'GUA'], correctIndex: 2, explanation: 'UAG is one of the three stop codons (with UAA and UGA); it is recognized by a release factor, not a tRNA. AUG is the start codon and encodes methionine, UGG encodes tryptophan, and GUA encodes valine.', partNumber: 3, partTitle: P3 },

  // Part 4 — Gene Regulation
  { id: 'mmb-ent-4a', question: 'E. coli are grown with lactose present and glucose absent. The lac operon is:', options: ['Off, because the repressor stays on the operator', 'Low, because cAMP-CAP cannot bind the promoter', 'High: repressor released and cAMP-CAP bound', 'Off, because lactose acts as a corepressor'], correctIndex: 2, explanation: 'Lactose (as allolactose) pulls the repressor off the operator, and low glucose means high cAMP, so cAMP-CAP binds and boosts transcription: maximal expression. The repressor stays bound only without lactose, CAP fails to bind only when glucose is high, and a corepressor belongs to the repressible trp operon.', partNumber: 4, partTitle: P4 },
  { id: 'mmb-ent-4b', question: "Methylation of CpG islands in a gene's promoter is generally associated with:", options: ['Increased transcription of that gene', 'Transcriptional silencing of that gene', 'Stronger RNA polymerase II binding', 'Faster replication of that promoter'], correctIndex: 1, explanation: 'Promoter DNA methylation is an epigenetic silencing mark: methyl groups block transcription factor binding and recruit repressive chromatin. It therefore lowers rather than raises transcription and polymerase binding, and it is not a replication signal.', partNumber: 4, partTitle: P4 },

  // Part 5 — Mutations & DNA Repair
  { id: 'mmb-ent-5a', question: 'A point mutation replaces one nonpolar amino acid with another of similar size and chemistry. This is a:', options: ['Nonsense point mutation', 'Silent point mutation', 'Frameshift insertion', 'Conservative missense'], correctIndex: 3, explanation: 'A missense mutation changes one amino acid; swapping in a chemically similar one is conservative and usually mild. A nonsense mutation creates a stop codon, a silent mutation leaves the amino acid unchanged, and a frameshift alters every codon downstream rather than a single residue.', partNumber: 5, partTitle: P5 },
  { id: 'mmb-ent-5b', question: 'The mismatch repair system mainly corrects:', options: ['Bulky lesions such as UV thymine dimers', 'Mispaired bases left after proofreading', 'Double-strand breaks in non-dividing cells', 'Single bases damaged by deamination'], correctIndex: 1, explanation: 'Mismatch repair scans newly replicated DNA for base mispairs that escaped polymerase proofreading and fixes the new strand; defects cause Lynch syndrome. Bulky lesions such as thymine dimers go to nucleotide excision repair, double-strand breaks to NHEJ or homologous recombination, and single damaged bases to base excision repair.', partNumber: 5, partTitle: P5 },

  // Part 6 — Biotechnology Techniques
  { id: 'mmb-ent-6a', question: 'During gel electrophoresis, DNA fragments move toward the positive electrode because:', options: ['Their phosphate backbone is negatively charged', 'Their nitrogenous bases carry positive charge', 'Larger fragments are drawn forward fastest', 'Their sugars bind the positive electrode'], correctIndex: 0, explanation: 'Each phosphate in the backbone carries a negative charge, so DNA migrates toward the anode. The bases are not positively charged overall, and in the gel smaller fragments travel farther, not larger ones.', partNumber: 6, partTitle: P6 },
  { id: 'mmb-ent-6b', question: 'Before an mRNA can be amplified by PCR (as in RT-PCR), it must first be:', options: ['Spliced again to remove any leftover introns', "Capped at its 5' end so the primers can bind", 'Copied into cDNA by reverse transcriptase', 'Cut at palindromes by restriction enzymes'], correctIndex: 2, explanation: 'PCR polymerases copy DNA, so the mRNA is first converted to complementary DNA (cDNA) by reverse transcriptase, and that cDNA is then amplified. Mature mRNA is already spliced and capped, and primers bind by base pairing, not to a cap. Restriction enzymes are not part of PCR.', partNumber: 6, partTitle: P6 },

  // Part 7 — Viruses & Recombinant DNA
  { id: 'mmb-ent-7a', question: "In building a recombinant plasmid, which enzyme covalently seals the insert into the vector's backbone?", options: ['A restriction enzyme', 'Reverse transcriptase', 'DNA helicase', 'DNA ligase'], correctIndex: 3, explanation: 'DNA ligase forms the phosphodiester bonds that join the insert to the opened vector. A restriction enzyme cuts the DNA to create the matching ends, reverse transcriptase makes cDNA from mRNA, and helicase unwinds DNA during replication.', partNumber: 7, partTitle: P7 },
  { id: 'mmb-ent-7b', question: 'In the retroviral (HIV) life cycle, the provirus is:', options: ['The protein capsid that encloses the RNA genome', 'The viral DNA copy integrated into host DNA', 'The RNA genome packaged into each new virion', 'The host enzyme that copies RNA into DNA'], correctIndex: 1, explanation: 'Reverse transcriptase copies the RNA genome into double-stranded DNA, and integrase inserts that DNA into a host chromosome, where it is called a provirus. The capsid is the protein shell, the packaged RNA is the genome itself, and reverse transcriptase is a viral (not host) enzyme.', partNumber: 7, partTitle: P7 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
