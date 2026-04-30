/**
 * Entrance Quiz — Chromosomal Inheritance (AP Biology)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'chi-eq-1a', question: 'What is the structure of a chromosome after DNA replication but before cell division?', options: ['A single strand of DNA', 'Two sister chromatids joined at the centromere', 'A tangled bundle of RNA molecules', 'Four separate DNA molecules'], correctIndex: 1, explanation: 'After DNA replication, a chromosome consists of two identical sister chromatids held together at the centromere (the constricted region). Sister chromatids separate during anaphase.', partNumber: 1, partTitle: 'Chromosome Structure' },
  { id: 'chi-eq-1b', question: 'What is the function of the centromere on a chromosome?', options: ['It holds genes together on the chromosome', 'It is the attachment point for spindle fibers during cell division', 'It replicates DNA before meiosis', 'It stores proteins needed for cell division'], correctIndex: 1, explanation: 'The centromere is the constricted region where sister chromatids attach. During mitosis and meiosis, spindle fibers attach to the centromere and pull sister chromatids apart to opposite poles.', partNumber: 1, partTitle: 'Chromosome Structure' },

  // Part 2
  { id: 'chi-eq-2a', question: 'What are homologous chromosomes, and how do they relate to inheritance?', options: ['They are identical copies of DNA in a cell', 'They are pairs of chromosomes with similar structure and genetic content, one inherited from each parent', 'They are chromosomes found only in gametes', 'They are chromosomes that never undergo meiosis'], correctIndex: 1, explanation: 'Homologous chromosomes are a pair: one from the mother, one from the father. They are similar in size and carry genes for the same traits but may have different alleles. Humans have 23 pairs (46 total).', partNumber: 2, partTitle: 'Homologous Chromosomes' },
  { id: 'chi-eq-2b', question: 'What is the difference between autosomes and sex chromosomes?', options: ['Autosomes are larger; sex chromosomes are smaller', 'Autosomes do not determine sex; sex chromosomes determine whether an organism is male or female', 'Autosomes are found in females; sex chromosomes only in males', 'Sex chromosomes carry more genes than autosomes'], correctIndex: 1, explanation: 'Autosomes are chromosomes not involved in sex determination (22 pairs in humans). Sex chromosomes (X and Y) determine biological sex. Males are XY; females are XX.', partNumber: 2, partTitle: 'Homologous Chromosomes' },

  // Part 3
  { id: 'chi-eq-3a', question: 'What is a karyotype, and what does it show?', options: ['The expression of a single gene in an organism', 'A photograph of an organism\'s chromosomes arranged in pairs, showing number, size, and structure', 'A chart tracking genetic traits across generations', 'The sequence of DNA bases in a gene'], correctIndex: 1, explanation: 'A karyotype is a visual display of all chromosomes in an organism, arranged by size and structure. It reveals the total number of chromosomes and can identify chromosomal abnormalities (e.g., Down syndrome).', partNumber: 3, partTitle: 'Karyotypes' },
  { id: 'chi-eq-3b', question: 'How many chromosomes are shown in a typical human karyotype?', options: ['23 chromosomes', '46 chromosomes arranged in 23 pairs', '92 chromosomes in two sets', '50 to 60 chromosomes depending on age'], correctIndex: 1, explanation: 'A human karyotype displays all 46 chromosomes: 22 pairs of autosomes plus 1 pair of sex chromosomes (either XX or XY). In females: 22 pairs + XX. In males: 22 pairs + XY.', partNumber: 3, partTitle: 'Karyotypes' },

  // Part 4
  { id: 'chi-eq-4a', question: 'What is nondisjunction, and what can it cause?', options: ['The normal separation of chromosomes during meiosis', 'The failure of chromosomes to separate properly during meiosis, resulting in gametes with abnormal chromosome numbers', 'The fusion of two sister chromatids into one', 'The breaking of the centromere during cell division'], correctIndex: 1, explanation: 'Nondisjunction occurs when homologous chromosomes or sister chromatids fail to separate during meiosis. This produces some gametes with an extra chromosome and others missing one.', partNumber: 4, partTitle: 'Chromosome Abnormalities' },
  { id: 'chi-eq-4b', question: 'Which chromosomal conditions result from nondisjunction, and what are their characteristics?', options: ['Only monosomy results; it is always lethal', 'Trisomy (e.g., Down syndrome with three copies of chromosome 21) and monosomy (e.g., Turner syndrome with only one X); these cause developmental abnormalities', 'Only mutations of a single gene result from nondisjunction', 'Nondisjunction causes no genetic effects'], correctIndex: 1, explanation: 'Nondisjunction produces aneuploidy: trisomy (three copies of a chromosome, often viable but causing disorders like Down syndrome) or monosomy (one copy, usually lethal except in rare cases like Turner syndrome).', partNumber: 4, partTitle: 'Chromosome Abnormalities' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Chromosome Structure' },
    { partNumber: 2, partTitle: 'Homologous Chromosomes' },
    { partNumber: 3, partTitle: 'Karyotypes' },
    { partNumber: 4, partTitle: 'Chromosome Abnormalities' },
  ]
}
