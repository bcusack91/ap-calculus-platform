/**
 * Entrance Quiz — Mendelian Genetics (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'mg-ent-1a', question: 'What does Mendel\'s Law of Segregation state?', options: ['Genes on different chromosomes sort together', 'Alleles for a gene separate during gamete formation, so each gamete carries one allele', 'Dominant alleles are always more common in a population', 'All traits blend in the offspring'], correctIndex: 1, explanation: 'The Law of Segregation states that the two alleles for each gene separate during gamete formation, so each gamete carries only one allele for each trait.', partNumber: 1, partTitle: 'Mendel\'s Laws' },
  { id: 'mg-ent-1b', question: 'What is the difference between genotype and phenotype?', options: ['Genotype is the physical appearance; phenotype is the genetic makeup', 'Genotype is the allele combination; phenotype is the observable trait', 'They are the same thing', 'Genotype refers only to dominant alleles; phenotype refers to recessive alleles'], correctIndex: 1, explanation: 'Genotype refers to the genetic makeup (allele combination, e.g., Tt), while phenotype is the observable characteristic (e.g., tall).', partNumber: 1, partTitle: 'Mendel\'s Laws' },
  // Part 2
  { id: 'mg-ent-2a', question: 'In a cross between two heterozygous individuals (Tt × Tt), what is the expected phenotypic ratio?', options: ['1:1', '1:2:1', '3:1', '9:3:3:1'], correctIndex: 2, explanation: 'A monohybrid cross Tt × Tt yields a 3:1 phenotypic ratio (3 dominant : 1 recessive) in the offspring.', partNumber: 2, partTitle: 'Monohybrid Crosses' },
  { id: 'mg-ent-2b', question: 'An organism with the genotype Tt is described as:', options: ['Homozygous dominant', 'Homozygous recessive', 'Heterozygous', 'Codominant'], correctIndex: 2, explanation: 'Heterozygous means having two different alleles for a gene (e.g., Tt), one dominant and one recessive.', partNumber: 2, partTitle: 'Monohybrid Crosses' },
  // Part 3
  { id: 'mg-ent-3a', question: 'What is the expected phenotypic ratio from a dihybrid cross AaBb × AaBb?', options: ['3:1', '1:2:1', '9:3:3:1', '1:1:1:1'], correctIndex: 2, explanation: 'A dihybrid cross between two double heterozygotes (AaBb × AaBb) produces a 9:3:3:1 phenotypic ratio when both genes show complete dominance.', partNumber: 3, partTitle: 'Dihybrid Crosses' },
  { id: 'mg-ent-3b', question: 'Mendel\'s Law of Independent Assortment states that:', options: ['Alleles on the same chromosome always travel together', 'Genes located on different chromosomes sort independently during gamete formation', 'Dominant traits are inherited independently of recessive traits', 'All genes are linked on the same chromosome'], correctIndex: 1, explanation: 'The Law of Independent Assortment states that genes on different (non-homologous) chromosomes are distributed independently into gametes during meiosis.', partNumber: 3, partTitle: 'Dihybrid Crosses' },
  // Part 4
  { id: 'mg-ent-4a', question: 'To find the probability of two independent events both occurring, you should:', options: ['Add the individual probabilities', 'Multiply the individual probabilities', 'Subtract one probability from the other', 'Divide one probability by the other'], correctIndex: 1, explanation: 'The probability of two independent events both occurring is calculated by multiplying their individual probabilities (the multiplication rule).', partNumber: 4, partTitle: 'Probability in Genetics' },
  { id: 'mg-ent-4b', question: 'From a cross Aa × Aa, what is the probability of an offspring being homozygous recessive (aa)?', options: ['1/2', '3/4', '1/4', '1/3'], correctIndex: 2, explanation: 'In a cross Aa × Aa, the possible offspring genotypes are AA (1/4), Aa (1/2), and aa (1/4). The probability of aa is 1/4.', partNumber: 4, partTitle: 'Probability in Genetics' },
  // Part 5
  { id: 'mg-ent-5a', question: 'In a pedigree chart, a filled (shaded) circle represents:', options: ['An unaffected male', 'An affected female', 'A carrier male', 'An unaffected female'], correctIndex: 1, explanation: 'In standard pedigree notation, circles represent females and squares represent males. A filled (shaded) symbol indicates an affected individual.', partNumber: 5, partTitle: 'Pedigree Analysis' },
  { id: 'mg-ent-5b', question: 'Two unaffected parents have a child with a genetic disorder. This pattern is most consistent with:', options: ['Autosomal dominant inheritance', 'Autosomal recessive inheritance', 'X-linked dominant inheritance', 'Mitochondrial inheritance'], correctIndex: 1, explanation: 'When two unaffected parents produce an affected child, both parents are likely carriers (heterozygous) of an autosomal recessive allele.', partNumber: 5, partTitle: 'Pedigree Analysis' },
  // Part 6
  { id: 'mg-ent-6a', question: 'In a cross Aa × Aa, what fraction of offspring are expected to be heterozygous?', options: ['1/4', '1/2', '3/4', '1/3'], correctIndex: 1, explanation: 'From Aa × Aa, the genotypic ratio is 1 AA : 2 Aa : 1 aa. The fraction of heterozygous (Aa) offspring is 2/4 = 1/2.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mg-ent-6b', question: 'What is the purpose of a test cross?', options: ['To determine the phenotype of an organism', 'To cross two heterozygous organisms', 'To cross an organism with a dominant phenotype with a homozygous recessive individual to determine its genotype', 'To create a new species through hybridization'], correctIndex: 2, explanation: 'A test cross involves mating an individual with the dominant phenotype (unknown genotype) with a homozygous recessive individual. The offspring ratios reveal whether the unknown parent is homozygous or heterozygous.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'mg-ent-7a', question: 'A chi-square test in genetics is used to:', options: ['Determine the exact genotype of an organism', 'Measure the rate of mutation in a population', 'Determine whether observed ratios differ significantly from expected ratios', 'Calculate the allele frequency in a population'], correctIndex: 2, explanation: 'The chi-square (χ²) test is a statistical test used to compare observed offspring ratios to expected Mendelian ratios and determine if deviations are due to chance.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'mg-ent-7b', question: 'Why did Mendel choose pea plants for his experiments?', options: ['They have very long generation times', 'They can only self-pollinate', 'They have distinct, heritable traits and a short generation time', 'They are the only plants that show dominant and recessive traits'], correctIndex: 2, explanation: 'Mendel chose pea plants because they have clearly distinct, heritable traits (e.g., flower color, seed shape), short generation times, and can be easily cross-pollinated or self-pollinated.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Mendel\'s Laws' },
    { partNumber: 2, partTitle: 'Monohybrid Crosses' },
    { partNumber: 3, partTitle: 'Dihybrid Crosses' },
    { partNumber: 4, partTitle: 'Probability in Genetics' },
    { partNumber: 5, partTitle: 'Pedigree Analysis' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
