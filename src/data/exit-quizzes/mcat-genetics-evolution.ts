/**
 * MCAT Genetics & Evolution Exit Quiz
 */

import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'In a cross between two heterozygous (Aa) organisms, what fraction of offspring are expected to be homozygous recessive?', options: ['1/4', '1/2', '3/4', '1/3'], correctAnswer: 0, explanation: 'Aa × Aa yields: AA (1/4), Aa (2/4), aa (1/4). One-quarter of offspring are homozygous recessive (aa).', difficulty: 'easy',
  },
  {
    question: 'Hardy-Weinberg equilibrium requires all of the following EXCEPT:', options: ['No mutation', 'Random mating', 'Natural selection', 'Large population size'], correctAnswer: 2, explanation: 'Hardy-Weinberg equilibrium requires: no mutation, random mating, no selection, no gene flow, and large population. Natural selection violates equilibrium by favoring certain alleles.', difficulty: 'easy',
  },
  {
    question: 'Sickle cell anemia is an example of:', options: ['X-linked recessive inheritance', 'Autosomal dominant inheritance', 'Autosomal recessive inheritance with heterozygote advantage', 'Mitochondrial inheritance'], correctAnswer: 2, explanation: 'Sickle cell anemia is autosomal recessive. Heterozygotes (HbAS) have a selective advantage in malaria-endemic regions (balanced polymorphism), maintaining the allele in the population.', difficulty: 'medium',
  },
  {
    question: 'Which mechanism of evolution acts randomly rather than adaptively?', options: ['Natural selection', 'Genetic drift', 'Sexual selection', 'Artificial selection'], correctAnswer: 1, explanation: 'Genetic drift is the random change in allele frequencies due to chance sampling in small populations. Unlike selection, it is not directed toward adaptive outcomes.', difficulty: 'easy',
  },
  {
    question: 'A population has allele frequencies of p = 0.7 and q = 0.3. Under Hardy-Weinberg, what is the frequency of heterozygotes?', options: ['0.21', '0.42', '0.09', '0.49'], correctAnswer: 1, explanation: 'Heterozygote frequency = 2pq = 2(0.7)(0.3) = 0.42 (42% of the population).',difficulty: 'easy',
  },
  {
    question: 'Two genes are said to be linked when they:', options: ['Are on different chromosomes', 'Are on the same chromosome and tend to be inherited together', 'Have the same alleles', 'Are both autosomal dominant'], correctAnswer: 1, explanation: 'Linked genes are on the same chromosome and close together. They tend to be inherited as a unit unless separated by crossing over. The closer they are, the lower the recombination frequency.', difficulty: 'easy',
  },
  {
    question: 'Non-disjunction during meiosis I results in:', options: ['Two normal gametes', 'Gametes with all chromosomes duplicated', 'Gametes with extra or missing chromosomes (aneuploidy)', 'Polyploidy'], correctAnswer: 2, explanation: 'Non-disjunction is the failure of homologous chromosomes (meiosis I) or sister chromatids (meiosis II) to separate properly. This produces aneuploid gametes (e.g., trisomy, monosomy after fertilization).', difficulty: 'medium',
  },
  {
    question: 'Which type of selection favors individuals at both extremes of a trait distribution?', options: ['Stabilizing selection', 'Directional selection', 'Disruptive selection', 'Artificial selection'], correctAnswer: 2, explanation: 'Disruptive (diversifying) selection favors both extremes of a phenotypic distribution at the expense of intermediate forms. It can lead to speciation.', difficulty: 'easy',
  },
  {
    question: 'Epigenetic modifications do NOT involve:', options: ['DNA methylation', 'Histone acetylation', 'Changes to the DNA nucleotide sequence', 'Chromatin remodeling'], correctAnswer: 2, explanation: 'Epigenetic changes alter gene expression without changing the DNA sequence. They include DNA methylation (silences genes), histone modifications, and chromatin remodeling, and can be heritable.', difficulty: 'medium',
  },
  {
    question: 'A test cross involves mating an organism of unknown genotype with:', options: ['A heterozygous organism', 'A homozygous dominant organism', 'A homozygous recessive organism', 'Any wild-type organism'], correctAnswer: 2, explanation: 'A test cross uses a homozygous recessive individual (aa). The offspring phenotypes reveal the unknown parent\'s genotype: all dominant phenotype = AA; mix of dominant and recessive = Aa.', difficulty: 'easy',
  },
  {
    question: 'The bottleneck effect is an example of:', options: ['Natural selection', 'Gene flow', 'Genetic drift', 'Mutation'], correctAnswer: 2, explanation: 'The bottleneck effect is a type of genetic drift where a population\'s size is drastically reduced (by disaster, etc.), and the surviving population has different allele frequencies than the original.', difficulty: 'easy',
  },
  {
    question: 'In X-linked recessive inheritance, which parent must carry the allele for a son to be affected?', options: ['Father', 'Mother', 'Both parents', 'Neither (it arises spontaneously)'], correctAnswer: 1, explanation: 'Males get their X chromosome from their mother. For X-linked recessive conditions, the mother must be at least a carrier (heterozygous) for her son to be affected.', difficulty: 'easy',
  },
  {
    question: 'Analogous structures are evidence of:', options: ['Common ancestry', 'Convergent evolution', 'Genetic drift', 'Gene flow'], correctAnswer: 1, explanation: 'Analogous structures (similar function, different origin) arise from convergent evolution — unrelated organisms independently evolving similar features due to similar environmental pressures.', difficulty: 'easy',
  },
  {
    question: 'What does a high recombination frequency between two genes indicate?', options: ['They are on the same chromosome, close together', 'They are on the same chromosome, far apart', 'They are on different chromosomes', 'They are both expressed'], correctAnswer: 1, explanation: 'High recombination frequency (approaching 50%) indicates genes are far apart on the same chromosome, allowing more crossing-over events between them.', difficulty: 'medium',
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `genetics-evolution-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: 'mcat-genetics-evolution',
  }))
}
