/**
 * Entrance Quiz — Meiosis & Genetic Diversity (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'mgd-ent-1a', question: 'What are the products of meiosis?', options: ['2 diploid cells', '4 diploid cells', '2 haploid cells', '4 haploid gametes'], correctIndex: 3, explanation: 'Meiosis produces 4 haploid (n) gametes from one diploid (2n) cell through two successive divisions.', partNumber: 1, partTitle: 'Meiosis Overview' },
  { id: 'mgd-ent-1b', question: 'Why is meiosis essential for sexual reproduction?', options: ['It doubles the chromosome number each generation', 'It produces identical cells for tissue repair', 'It halves the chromosome number so fertilization restores the diploid number', 'It eliminates all genetic mutations'], correctIndex: 2, explanation: 'Meiosis halves the chromosome number (2n → n), so when two gametes fuse during fertilization, the diploid chromosome number is restored.', partNumber: 1, partTitle: 'Meiosis Overview' },
  // Part 2
  { id: 'mgd-ent-2a', question: 'Why is meiosis I called the "reductional division"?', options: ['Because it reduces the size of the cell', 'Because homologous chromosomes separate, reducing the chromosome number from 2n to n', 'Because it reduces the number of organelles', 'Because sister chromatids separate'], correctIndex: 1, explanation: 'In meiosis I, homologous chromosomes separate, reducing the chromosome number from diploid (2n) to haploid (n). This is the reductional division.', partNumber: 2, partTitle: 'Meiosis I' },
  { id: 'mgd-ent-2b', question: 'During synapsis in prophase I, homologous chromosomes pair up to form structures called:', options: ['Centrosomes', 'Tetrads (bivalents)', 'Centrioles', 'Nucleosomes'], correctIndex: 1, explanation: 'During synapsis, each pair of homologous chromosomes (each consisting of 2 sister chromatids) aligns closely, forming a tetrad (bivalent) of 4 chromatids.', partNumber: 2, partTitle: 'Meiosis I' },
  // Part 3
  { id: 'mgd-ent-3a', question: 'How does meiosis II compare to mitosis?', options: ['Meiosis II separates homologs; mitosis separates sister chromatids', 'Meiosis II is equational — sister chromatids separate, similar to mitosis', 'Meiosis II involves crossing over; mitosis does not', 'They are completely unrelated processes'], correctIndex: 1, explanation: 'Meiosis II is called the equational division because sister chromatids separate, much like in mitosis. However, it starts with haploid cells.', partNumber: 3, partTitle: 'Meiosis II' },
  { id: 'mgd-ent-3b', question: 'At the end of meiosis II, each resulting cell is:', options: ['Diploid (2n) with duplicated chromosomes', 'Haploid (n) with single chromatids', 'Tetraploid (4n)', 'Diploid (2n) with single chromatids'], correctIndex: 1, explanation: 'At the end of meiosis II, each of the four resulting cells is haploid (n), containing one copy of each chromosome as a single chromatid.', partNumber: 3, partTitle: 'Meiosis II' },
  // Part 4
  { id: 'mgd-ent-4a', question: 'When does crossing over occur, and between which structures?', options: ['Metaphase II, between sister chromatids', 'Prophase I, between non-sister chromatids of homologous chromosomes', 'Anaphase I, between centromeres', 'Telophase II, between daughter cells'], correctIndex: 1, explanation: 'Crossing over occurs during prophase I when non-sister chromatids of homologous chromosomes exchange segments of DNA at points called chiasmata.', partNumber: 4, partTitle: 'Crossing Over' },
  { id: 'mgd-ent-4b', question: 'What is the genetic consequence of crossing over?', options: ['It produces identical sister chromatids', 'It results in recombinant chromosomes with new allele combinations', 'It doubles the DNA content of the cell', 'It eliminates harmful mutations'], correctIndex: 1, explanation: 'Crossing over produces recombinant chromosomes that carry new combinations of alleles, increasing genetic diversity among offspring.', partNumber: 4, partTitle: 'Crossing Over' },
  // Part 5
  { id: 'mgd-ent-5a', question: 'What is independent assortment?', options: ['Homologous chromosomes always line up the same way at metaphase I', 'Homologous chromosomes orient randomly at the metaphase plate during meiosis I', 'Sister chromatids exchange genetic material', 'All maternal chromosomes go to one pole'], correctIndex: 1, explanation: 'Independent assortment means that homologous pairs orient randomly at the metaphase plate during meiosis I, so each gamete receives a random mix of maternal and paternal chromosomes.', partNumber: 5, partTitle: 'Independent Assortment' },
  { id: 'mgd-ent-5b', question: 'For an organism with a haploid number n, how many unique chromosome combinations are possible from independent assortment alone?', options: ['n', '2n', '$n^{2}$', '$2^{n}$'], correctIndex: 3, explanation: 'Independent assortment produces $2^{n}$ possible combinations of chromosomes in the gametes, where n is the haploid number.', partNumber: 5, partTitle: 'Independent Assortment' },
  // Part 6
  { id: 'mgd-ent-6a', question: 'Humans have 23 pairs of chromosomes. How many different chromosome combinations can result from independent assortment alone?', options: ['23', '46', 'About 8.4 million $(2^{23})$', 'About 70 trillion'], correctIndex: 2, explanation: 'With 23 pairs of chromosomes, independent assortment alone yields $2^{23}$ ≈ 8.4 million possible chromosome combinations in human gametes.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgd-ent-6b', question: 'How does crossing over increase genetic variation beyond what independent assortment provides?', options: ['It does not — independent assortment accounts for all variation', 'It creates new allele combinations within individual chromosomes, not just new chromosome assortments', 'It increases the chromosome number', 'It causes mutations in every gene'], correctIndex: 1, explanation: 'Independent assortment shuffles whole chromosomes, while crossing over recombines alleles within chromosomes, creating additional unique combinations beyond chromosome-level shuffling.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'mgd-ent-7a', question: 'Nondisjunction during meiosis results in:', options: ['Cells with the correct number of chromosomes', 'Aneuploidy — cells with abnormal chromosome numbers (e.g., trisomy 21)', 'Polyploidy in all somatic cells', 'Increased crossing over'], correctIndex: 1, explanation: 'Nondisjunction is the failure of chromosomes to separate properly, leading to aneuploidy. Trisomy 21 (Down syndrome) results from an extra copy of chromosome 21.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'mgd-ent-7b', question: 'What are the three main sources of genetic variation in sexually reproducing organisms?', options: ['Mutation, natural selection, genetic drift', 'Crossing over, independent assortment, random fertilization', 'Mitosis, binary fission, budding', 'Gene flow, bottleneck effect, founder effect'], correctIndex: 1, explanation: 'The three main sources of genetic variation are crossing over (recombination), independent assortment of homologs, and random fertilization of gametes.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Meiosis Overview' },
    { partNumber: 2, partTitle: 'Meiosis I' },
    { partNumber: 3, partTitle: 'Meiosis II' },
    { partNumber: 4, partTitle: 'Crossing Over' },
    { partNumber: 5, partTitle: 'Independent Assortment' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
