/**
 * Entrance Quiz — Gene Regulation (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'gr-ent-1a', question: 'Why are not all genes expressed in every cell of an organism?', options: ['Different cells contain different DNA', 'Gene regulation determines which genes are active in each cell type', 'Genes are randomly turned on and off with no control', 'Only stem cells have all genes; differentiated cells lose genes'], correctIndex: 1, explanation: 'All cells share the same DNA, but gene regulation mechanisms determine which genes are expressed in specific cell types at specific times.', partNumber: 1, partTitle: 'Gene Regulation Overview' },
  { id: 'gr-ent-1b', question: 'At which levels can gene regulation occur?', options: ['Transcriptional, post-transcriptional, translational, and post-translational levels', 'Only at the translational level', 'Only at the transcriptional level', 'Only during DNA replication'], correctIndex: 0, explanation: 'Gene regulation can occur at multiple levels: transcriptional, post-transcriptional, translational, and post-translational, providing fine-tuned control of gene expression.', partNumber: 1, partTitle: 'Gene Regulation Overview' },
  // Part 2
  { id: 'gr-ent-2a', question: 'How does the lac operon function when lactose is absent?', options: ['The repressor is inactive and genes are transcribed', 'RNA polymerase is degraded so no transcription occurs', 'The genes are permanently silenced by methylation', 'The repressor binds the operator, blocking transcription'], correctIndex: 3, explanation: 'When lactose is absent, the lac repressor protein binds to the operator, physically blocking RNA polymerase from transcribing the structural genes.', partNumber: 2, partTitle: 'Prokaryotic Regulation' },
  { id: 'gr-ent-2b', question: 'What is an operon?', options: ['A eukaryotic gene regulatory element', 'A cluster of genes under the control of a single promoter in prokaryotes', 'An enzyme that regulates DNA methylation', 'A type of histone modification'], correctIndex: 1, explanation: 'An operon is a prokaryotic gene regulation unit consisting of a promoter, operator, and structural genes that are transcribed as a single mRNA.', partNumber: 2, partTitle: 'Prokaryotic Regulation' },
  // Part 3
  { id: 'gr-ent-3a', question: 'How is transcription regulated in eukaryotes?', options: ['By operons, the same as in prokaryotes', 'Eukaryotic transcription cannot be regulated', 'By transcription factors binding to enhancers and promoters', 'Only by RNA polymerase concentration in the cytoplasm'], correctIndex: 2, explanation: 'Eukaryotic gene regulation involves transcription factors that bind to enhancers and promoter regions to activate or repress transcription of specific genes.', partNumber: 3, partTitle: 'Eukaryotic Regulation' },
  { id: 'gr-ent-3b', question: 'How does histone acetylation affect gene expression?', options: ['It tightens chromatin, silencing gene expression', 'It loosens chromatin, promoting gene expression', 'It has no effect on chromatin structure', 'It removes histones from the DNA entirely'], correctIndex: 1, explanation: 'Histone acetylation adds acetyl groups to histone tails, reducing their positive charge, loosening chromatin structure, and making DNA more accessible for transcription.', partNumber: 3, partTitle: 'Eukaryotic Regulation' },
  // Part 4
  { id: 'gr-ent-4a', question: 'What is epigenetics?', options: ['Changes to the DNA sequence through mutation', 'The study of genetic drift in populations', 'The process of DNA replication in eukaryotes', 'Heritable changes in gene expression without altering the DNA sequence'], correctIndex: 3, explanation: 'Epigenetics refers to heritable changes in gene expression that occur without changes to the underlying DNA sequence, such as DNA methylation and histone modification.', partNumber: 4, partTitle: 'Epigenetics' },
  { id: 'gr-ent-4b', question: 'Which are key mechanisms of epigenetic regulation?', options: ['Point mutations and deletions', 'DNA methylation and histone modification', 'Base excision repair and mismatch repair', 'Alternative splicing and RNA capping'], correctIndex: 1, explanation: 'DNA methylation (adding methyl groups to cytosine) and histone modification (acetylation, methylation of histone tails) are the two primary epigenetic mechanisms.', partNumber: 4, partTitle: 'Epigenetics' },
  // Part 5
  { id: 'gr-ent-5a', question: 'How do siRNA and miRNA regulate gene expression?', options: ['They silence gene expression by degrading mRNA or blocking translation', 'They activate transcription by binding to promoters', 'They modify histones to open chromatin', 'They serve as primers for DNA replication'], correctIndex: 0, explanation: 'Small interfering RNA (siRNA) and microRNA (miRNA) are involved in RNA interference, silencing genes by targeting mRNA for degradation or blocking its translation.', partNumber: 5, partTitle: 'RNA Interference' },
  { id: 'gr-ent-5b', question: 'At what level of gene regulation does RNA interference operate?', options: ['Transcriptional regulation', 'Post-transcriptional regulation', 'DNA replication level', 'Post-translational regulation'], correctIndex: 1, explanation: 'RNA interference is a post-transcriptional regulation mechanism — it acts on mRNA after it has been transcribed, either degrading it or blocking its translation.', partNumber: 5, partTitle: 'RNA Interference' },
  // Part 6
  { id: 'gr-ent-6a', question: 'If a mutation destroys the lac repressor protein, what would happen to lac operon gene expression?', options: ['Genes would never be expressed', 'Gene expression would depend on glucose levels only', 'Genes would be constitutively expressed (always ON)', 'The operon would be deleted from the chromosome'], correctIndex: 2, explanation: 'Without a functional repressor, nothing blocks the operator, so RNA polymerase can always transcribe the structural genes — resulting in constitutive (always-on) expression.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'gr-ent-6b', question: 'What effect would histone deacetylation have on transcription?', options: ['Increased transcription due to open chromatin', 'Decreased transcription due to tighter chromatin packing', 'No effect — deacetylation does not influence chromatin', 'It would activate enhancer elements'], correctIndex: 1, explanation: 'Histone deacetylation removes acetyl groups from histones, increasing their positive charge, tightening chromatin, and reducing access for transcription machinery.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'gr-ent-7a', question: 'What causes cell differentiation in multicellular organisms?', options: ['Different cells receive different genes during mitosis', 'Random mutations that occur during development', 'External chemical signals that alter the DNA sequence', 'Differential gene expression — the same DNA is regulated differently in each cell type'], correctIndex: 3, explanation: 'Cell differentiation results from differential gene expression: all cells contain the same genome, but different genes are turned on or off depending on cell type.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'gr-ent-7b', question: 'How does AP Biology typically test gene regulation concepts?', options: ['Only through vocabulary matching questions', 'Through operon diagrams and predicting the effects of mutations on gene expression', 'Exclusively through laboratory practical exams', 'By asking students to sequence entire genomes'], correctIndex: 1, explanation: 'AP Biology frequently tests gene regulation through operon diagram analysis and asking students to predict how specific mutations affect gene expression levels.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

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
