/**
 * Entrance Quiz — Molecular Biology (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: DNA Structure
  {
    id: 'mmb-ent-1a',
    question: 'In a double-stranded DNA molecule with 30% adenine, what is the percentage of cytosine?',
    options: [
      '30%',
      '20%',
      '40%',
      '15%'
    ],
    correctIndex: 1,
    explanation: 'By Chargaff\'s rules, A = T and G = C. If A = 30%, then T = 30%, leaving G + C = 40%. Since G = C, each is 20%. Therefore cytosine = 20%.',
    partNumber: 1,
    partTitle: 'DNA Structure'
  },
  {
    id: 'mmb-ent-1b',
    question: 'Which bond type links the two strands of a DNA double helix and allows strand separation during replication?',
    options: [
      'Covalent phosphodiester bonds',
      'Ionic bonds between phosphate groups',
      'Hydrogen bonds between complementary base pairs',
      'Disulfide bonds between deoxyribose sugars'
    ],
    correctIndex: 2,
    explanation: 'The two strands are held together by hydrogen bonds: A–T form 2 hydrogen bonds and G–C form 3. These bonds are individually weak but collectively stable, yet they can be broken by helicases during replication. Phosphodiester bonds are within each strand.',
    partNumber: 1,
    partTitle: 'DNA Structure'
  },

  // Part 2: DNA Replication
  {
    id: 'mmb-ent-2a',
    question: 'DNA polymerase III can only synthesize DNA in the 5′→3′ direction. On the lagging strand template (3′→5′), this results in:',
    options: [
      'Continuous synthesis in one long fragment.',
      'Synthesis of Okazaki fragments in the 5′→3′ direction, away from the replication fork.',
      'No synthesis on the lagging strand because polymerase cannot work there.',
      'Synthesis of Okazaki fragments in the 3′→5′ direction toward the fork.'
    ],
    correctIndex: 1,
    explanation: 'Because DNA pol III cannot synthesize 3′→5′, the lagging strand is made discontinuously as short Okazaki fragments, each initiated by a new RNA primer and synthesized 5′→3′ away from the fork. These are later joined by DNA ligase.',
    partNumber: 2,
    partTitle: 'DNA Replication'
  },
  {
    id: 'mmb-ent-2b',
    question: 'Which enzyme removes RNA primers and fills in the gaps with DNA during replication in prokaryotes?',
    options: [
      'DNA polymerase I',
      'DNA polymerase III',
      'Primase',
      'Topoisomerase II'
    ],
    correctIndex: 0,
    explanation: 'DNA polymerase I (not III) possesses 5′→3′ exonuclease activity, allowing it to remove RNA primers ahead of it while simultaneously filling the gap with new DNA. DNA ligase then seals the nick. Pol III is the primary replicative polymerase.',
    partNumber: 2,
    partTitle: 'DNA Replication'
  },

  // Part 3: Transcription
  {
    id: 'mmb-ent-3a',
    question: 'Which RNA polymerase transcribes protein-coding genes (mRNA) in eukaryotes?',
    options: [
      'RNA polymerase I',
      'RNA polymerase II',
      'RNA polymerase III',
      'DNA polymerase I'
    ],
    correctIndex: 1,
    explanation: 'RNA Pol II synthesizes pre-mRNA (hnRNA). RNA Pol I makes rRNA (28S, 18S, 5.8S). RNA Pol III makes tRNA and 5S rRNA. Knowing these distinctions is high-yield for the MCAT.',
    partNumber: 3,
    partTitle: 'Transcription'
  },
  {
    id: 'mmb-ent-3b',
    question: 'A 5′ 7-methylguanosine cap is added to eukaryotic pre-mRNA shortly after transcription begins. This cap functions primarily to:',
    options: [
      'Signal the ribosome to terminate translation.',
      'Protect the mRNA 5′ end from exonuclease degradation and facilitate ribosome binding for translation initiation.',
      'Add poly-A tails that increase mRNA stability.',
      'Enable splicing of introns from the pre-mRNA.'
    ],
    correctIndex: 1,
    explanation: 'The 5′ cap protects mRNA from 5′→3′ exonucleases and is recognized by eIF4E, a translation initiation factor, promoting ribosome recruitment. The poly-A tail is a separate modification at the 3′ end; splicing is mediated by the spliceosome.',
    partNumber: 3,
    partTitle: 'Transcription'
  },

  // Part 4: Translation
  {
    id: 'mmb-ent-4a',
    question: 'The anticodon of a tRNA is 3′-UAC-5′. This tRNA carries which amino acid?',
    options: [
      'Leucine',
      'Methionine',
      'Tyrosine',
      'Valine'
    ],
    correctIndex: 1,
    explanation: 'The anticodon 3′-UAC-5′ pairs with the mRNA codon 5′-AUG-3′ (read antiparallel). AUG is the start codon encoding methionine (Met/M). This is high-yield: AUG always codes for Met in eukaryotes.',
    partNumber: 4,
    partTitle: 'Translation'
  },
  {
    id: 'mmb-ent-4b',
    question: 'During elongation, the peptidyl transferase activity that forms peptide bonds is carried out by:',
    options: [
      'A ribosomal protein enzyme in the large subunit.',
      'The 23S (or 28S) ribosomal RNA (rRNA), acting as a ribozyme.',
      'Elongation factor EF-Tu.',
      'Aminoacyl-tRNA synthetase.'
    ],
    correctIndex: 1,
    explanation: 'Peptidyl transferase activity resides in the 23S rRNA (prokaryotes) or 28S rRNA (eukaryotes) of the large ribosomal subunit—making the ribosome a ribozyme. This is a classic MCAT concept. EF-Tu delivers aminoacyl-tRNA to the A site.',
    partNumber: 4,
    partTitle: 'Translation'
  },

  // Part 5: Gene Regulation
  {
    id: 'mmb-ent-5a',
    question: 'In the lac operon, when lactose is absent and glucose is absent, the operon is:',
    options: [
      'Fully induced because cAMP-CAP activates transcription.',
      'Transcribed at basal levels because the repressor is bound.',
      'Off: the repressor is bound to the operator AND cAMP-CAP is active, but repressor binding dominates.',
      'Off: the lac repressor is bound to the operator, blocking transcription regardless of CAP status.'
    ],
    correctIndex: 3,
    explanation: 'When lactose is absent, the lac repressor (bound to allolactose as inducer when lactose is present) remains unbound to allolactose and blocks the operator. Transcription is OFF regardless of glucose levels. When lactose is present and glucose is absent, allolactose removes the repressor AND cAMP-CAP activates—maximum transcription.',
    partNumber: 5,
    partTitle: 'Gene Regulation'
  },
  {
    id: 'mmb-ent-5b',
    question: 'DNA methylation of CpG islands in gene promoters in mammals is generally associated with:',
    options: [
      'Increased transcription of the associated gene.',
      'Transcriptional silencing (gene repression).',
      'Enhanced binding of RNA polymerase II.',
      'DNA repair and replication fidelity.'
    ],
    correctIndex: 1,
    explanation: 'Methylation of cytosine at CpG islands recruits methyl-binding proteins and histone deacetylases, leading to chromatin compaction and transcriptional silencing. This is a major epigenetic mechanism for long-term gene repression (e.g., X-inactivation, imprinting).',
    partNumber: 5,
    partTitle: 'Gene Regulation'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mmb-ent-6a',
    question: 'A researcher uses dideoxynucleotides (ddNTPs) in a sequencing reaction. ddNTPs terminate chain elongation because they:',
    options: [
      'Inhibit RNA polymerase and prevent transcription of the template.',
      'Lack the 3′-OH group necessary for the next phosphodiester bond formation.',
      'Contain an extra phosphate group that blocks the active site of DNA polymerase.',
      'Cause the template strand to fold into a hairpin structure.'
    ],
    correctIndex: 1,
    explanation: 'ddNTPs lack the 3′-OH group (they have H instead). DNA polymerase cannot form a phosphodiester bond without a free 3′-OH, so once a ddNTP is incorporated, chain extension stops. This is the basis of Sanger sequencing.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mmb-ent-6b',
    question: 'A nonsense mutation converts a codon within an mRNA from UAU (Tyr) to UAA (stop). The most likely effect on the translated protein is:',
    options: [
      'A single amino acid substitution with minor functional impact.',
      'Production of a truncated, likely nonfunctional protein.',
      'No change, because wobble base pairing can read through stop codons.',
      'Increased protein stability due to premature folding.'
    ],
    correctIndex: 1,
    explanation: 'A nonsense mutation introduces a premature stop codon. Translation terminates early, producing a truncated polypeptide. Shorter proteins often lack critical functional domains and may be targeted for degradation by nonsense-mediated mRNA decay (NMD).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mmb-ent-7a',
    question: 'CRISPR-Cas9 gene editing relies on a guide RNA (gRNA) to direct Cas9 to a target DNA sequence. The guide RNA functions by:',
    options: [
      'Encoding the Cas9 protein through translation.',
      'Base-pairing with the target DNA sequence, positioning Cas9 to create a double-strand break.',
      'Methylating the target DNA to suppress expression.',
      'Recruiting ribosomes to the cut site to insert new genetic material.'
    ],
    correctIndex: 1,
    explanation: 'The gRNA contains a ~20-nt spacer sequence complementary to the target DNA. Watson-Crick base pairing directs Cas9 to the precise genomic location (adjacent to a PAM sequence), where Cas9\'s two nuclease domains create a blunt double-strand break.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mmb-ent-7b',
    question: 'Telomerase is active in germ cells and cancer cells but typically silent in somatic cells. Why is telomerase activity important in cancer cells?',
    options: [
      'It repairs double-strand DNA breaks caused by oncogene activation.',
      'It allows cancer cells to bypass replicative senescence by maintaining telomere length, enabling unlimited division.',
      'It methylates tumor suppressor gene promoters to silence growth inhibition.',
      'It synthesizes RNA primers needed for cancer cell DNA replication.'
    ],
    correctIndex: 1,
    explanation: 'Normal somatic cells lose telomeric repeats with each division (Hayflick limit). When telomeres shorten critically, cells enter senescence or apoptosis. Cancer cells reactivate telomerase to maintain telomere length, achieving replicative immortality—a hallmark of cancer.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'DNA Structure' },
    { partNumber: 2, partTitle: 'DNA Replication' },
    { partNumber: 3, partTitle: 'Transcription' },
    { partNumber: 4, partTitle: 'Translation' },
    { partNumber: 5, partTitle: 'Gene Regulation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
