/**
 * MCAT Genetics & Evolution Exit Quiz
 */

import { authoredFor } from './mcat-authored-pool'
import { mcatSubtopicPool } from './mcat-subtopic-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'
import { shuffleArray } from '@/lib/shuffle-options'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'In a cross between two heterozygous (Aa) organisms, what fraction of offspring are expected to be homozygous recessive?', options: ['1/4', '1/2', '3/4', '1/3'], correctAnswer: 0, explanation: 'Aa × Aa yields: AA (1/4), Aa (2/4), aa (1/4). One-quarter of offspring are homozygous recessive (aa).', difficulty: 'easy',
  },
  {
    question: 'Hardy-Weinberg equilibrium requires all of the following EXCEPT:', options: ['No new mutations', 'Random mating', 'Natural selection', 'Large population'], correctAnswer: 2, explanation: 'Hardy-Weinberg equilibrium requires: no mutation, random mating, no selection, no gene flow, and large population. Natural selection violates equilibrium by favoring certain alleles.', difficulty: 'easy',
  },
  {
    question: 'Sickle cell anemia is an example of:', options: ['An autosomal recessive trait kept by the founder effect', 'An autosomal dominant trait kept by heterozygote advantage', 'An autosomal recessive trait kept by heterozygote advantage', 'An autosomal dominant trait kept by the founder effect'], correctAnswer: 2, explanation: 'Sickle cell anemia is autosomal recessive. Heterozygotes (HbAS) have a selective advantage in malaria-endemic regions (balanced polymorphism), maintaining the allele in the population. Its persistence reflects selection favoring carriers, not a chance founder event, and one copy of the allele does not produce the disease, so it is not dominant.', difficulty: 'medium',
  },
  {
    question: 'Which mechanism of evolution acts randomly rather than adaptively?', options: ['Natural selection', 'Genetic drift', 'Sexual selection', 'Artificial selection'], correctAnswer: 1, explanation: 'Genetic drift is the random change in allele frequencies due to chance sampling in small populations. Unlike selection, it is not directed toward adaptive outcomes.', difficulty: 'easy',
  },
  {
    question: 'A population has allele frequencies of p = 0.7 and q = 0.3. Under Hardy-Weinberg, what is the frequency of heterozygotes?', options: ['0.21', '0.42', '0.09', '0.49'], correctAnswer: 1, explanation: 'Heterozygote frequency = 2pq = 2(0.7)(0.3) = 0.42 (42% of the population).',difficulty: 'easy',
  },
  {
    question: 'Two genes are said to be linked when they:', options: ['Lie on different chromosomes and assort independently', 'Lie close together on the same chromosome', 'Lie at the same locus on homologous chromosomes', 'Are both inherited in a dominant pattern'], correctAnswer: 1, explanation: 'Linked genes are on the same chromosome and close together, so they tend to be inherited together as a unit unless separated by crossing over. The closer they are, the lower the recombination frequency. Genes on different chromosomes assort independently, sequences at the same locus on homologous chromosomes are alleles of one gene rather than two genes, and dominance is unrelated to linkage.', difficulty: 'easy',
  },
  {
    question: 'Non-disjunction during meiosis I results in:', options: ['Gametes with a normal chromosome number', 'Gametes with every chromosome duplicated', 'Gametes with extra or missing chromosomes', 'Gametes with rearranged but complete chromosomes'], correctAnswer: 2, explanation: 'Non-disjunction is the failure of homologous chromosomes (meiosis I) or sister chromatids (meiosis II) to separate properly. This produces aneuploid gametes with an extra or missing chromosome (e.g., trisomy, monosomy after fertilization), not gametes with a doubled full set or with rearranged chromosomes, which arise from different errors.', difficulty: 'medium',
  },
  {
    question: 'Which type of selection favors individuals at both extremes of a trait distribution?', options: ['Stabilizing selection', 'Directional selection', 'Disruptive selection', 'Artificial selection'], correctAnswer: 2, explanation: 'Disruptive (diversifying) selection favors both extremes of a phenotypic distribution at the expense of intermediate forms. It can lead to speciation.', difficulty: 'easy',
  },
  {
    question: 'Epigenetic modifications do NOT involve:', options: ['Methylation of cytosine bases', 'Acetylation of histone tails', 'Editing of the DNA sequence', 'Remodeling of chromatin structure'], correctAnswer: 2, explanation: 'Epigenetic changes alter gene expression without changing the DNA sequence. They include DNA (cytosine) methylation, which silences genes, histone modifications such as acetylation, and chromatin remodeling, and they can be heritable.', difficulty: 'medium',
  },
  {
    question: 'A test cross involves mating an organism of unknown genotype with:', options: ['A heterozygous (Aa) organism', 'A homozygous dominant organism', 'A homozygous recessive organism', 'Any wild-type organism'], correctAnswer: 2, explanation: 'A test cross uses a homozygous recessive individual (aa). The offspring phenotypes reveal the unknown parent\'s genotype: all dominant phenotype = AA; mix of dominant and recessive = Aa.', difficulty: 'easy',
  },
  {
    question: 'The bottleneck effect is an example of:', options: ['Natural selection', 'Gene flow', 'Genetic drift', 'Mutation pressure'], correctAnswer: 2, explanation: 'The bottleneck effect is a type of genetic drift where a population\'s size is drastically reduced (by disaster, etc.), and the surviving population has different allele frequencies than the original.', difficulty: 'easy',
  },
  {
    question: 'In X-linked recessive inheritance, which parent must carry the allele for a son to be affected?', options: ['The father', 'The mother', 'Both parents', 'Either parent'], correctAnswer: 1, explanation: 'Males get their X chromosome from their mother and their Y chromosome from their father, so a father cannot pass an X-linked allele to his son. For an inherited X-linked recessive condition, the mother must be at least a carrier (heterozygous) for her son to be affected.', difficulty: 'easy',
  },
  {
    question: 'Analogous structures are evidence of:', options: ['Common ancestry', 'Convergent evolution', 'Divergent evolution', 'Adaptive radiation'], correctAnswer: 1, explanation: 'Analogous structures (similar function, different origin) arise from convergent evolution — unrelated organisms independently evolving similar features due to similar environmental pressures. Common ancestry, divergent evolution and adaptive radiation instead explain homologous structures, which share an origin.', difficulty: 'easy',
  },
  {
    question: 'What does a high recombination frequency between two genes indicate?', options: ['The genes are close together on one chromosome', 'The genes are far apart on one chromosome', 'The genes rarely cross over during meiosis', 'The genes occupy the same locus as alleles'], correctAnswer: 1, explanation: 'High recombination frequency (approaching 50%) indicates genes are far apart on the same chromosome, allowing more crossing-over events between them. Genes that are close together rarely cross over and show a low recombination frequency, and alleles at a single locus cannot recombine with each other.', difficulty: 'medium',
  },
]

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1). Authored items carry subtopic tags the selector prefers.
const fullPool = [...questionPool, ...authoredFor(['mcat-genetics-'])]

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const source = topicSlug ? mcatSubtopicPool(fullPool, 'genetics', topicSlug) : fullPool
  const shuffled = shuffleArray(source)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `genetics-evolution-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-genetics-evolution',
  }))
}
