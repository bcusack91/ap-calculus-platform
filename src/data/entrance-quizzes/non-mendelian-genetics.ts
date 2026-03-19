/**
 * Entrance Quiz — Non-Mendelian Genetics (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'nmg-ent-1a', question: 'In incomplete dominance, what phenotype does the heterozygote display?', options: ['The dominant phenotype only', 'The recessive phenotype only', 'A blended intermediate phenotype', 'Both phenotypes equally and simultaneously'], correctIndex: 2, explanation: 'In incomplete dominance, the heterozygote shows a blended, intermediate phenotype. For example, crossing red and white flowers produces pink offspring.', partNumber: 1, partTitle: 'Incomplete Dominance' },
  { id: 'nmg-ent-1b', question: 'What is the phenotypic ratio in the F2 generation of an incomplete dominance cross?', options: ['3:1', '9:3:3:1', '1:2:1', '1:1'], correctIndex: 2, explanation: 'In incomplete dominance, the F2 phenotypic ratio is 1:2:1 (e.g., 1 red : 2 pink : 1 white), because the heterozygote has a distinct intermediate phenotype.', partNumber: 1, partTitle: 'Incomplete Dominance' },
  // Part 2
  { id: 'nmg-ent-2a', question: 'How is codominance different from incomplete dominance?', options: ['In codominance, one allele is always dominant', 'In codominance, both alleles are fully expressed simultaneously rather than blended', 'Codominance produces a 3:1 ratio', 'There is no difference between them'], correctIndex: 1, explanation: 'In codominance, both alleles are fully and separately expressed in the heterozygote (e.g., roan cattle with both red and white hairs), rather than blending into an intermediate.', partNumber: 2, partTitle: 'Codominance' },
  { id: 'nmg-ent-2b', question: 'Human blood type AB is an example of which inheritance pattern?', options: ['Complete dominance', 'Incomplete dominance', 'Codominance', 'Epistasis'], correctIndex: 2, explanation: 'Blood type AB is codominant because both the A antigen and B antigen are fully expressed on the surface of red blood cells.', partNumber: 2, partTitle: 'Codominance' },
  // Part 3
  { id: 'nmg-ent-3a', question: 'The ABO blood group system involves how many alleles, and what inheritance patterns do they show?', options: ['2 alleles with complete dominance only', '3 alleles (I^A, I^B, i) with codominance and dominance', '4 alleles with incomplete dominance', '3 alleles all showing incomplete dominance'], correctIndex: 1, explanation: 'ABO blood types are determined by 3 alleles: I^A and I^B are codominant with each other, and both are dominant over i (the recessive allele).', partNumber: 3, partTitle: 'Multiple Alleles' },
  { id: 'nmg-ent-3b', question: 'A person with blood type O has which genotype?', options: ['I^A I^A', 'I^A I^B', 'I^B i', 'ii'], correctIndex: 3, explanation: 'Type O blood results from the homozygous recessive genotype ii, meaning the individual carries two copies of the recessive i allele.', partNumber: 3, partTitle: 'Multiple Alleles' },
  // Part 4
  { id: 'nmg-ent-4a', question: 'What characterizes polygenic traits?', options: ['They are controlled by a single gene with multiple alleles', 'They are controlled by multiple genes, producing continuous variation', 'They follow a strict 3:1 Mendelian ratio', 'They are always sex-linked'], correctIndex: 1, explanation: 'Polygenic traits (e.g., height, skin color) are influenced by multiple genes, each contributing a small amount, resulting in continuous variation in the population.', partNumber: 4, partTitle: 'Polygenic Traits' },
  { id: 'nmg-ent-4b', question: 'Which distribution pattern is characteristic of polygenic inheritance?', options: ['A bimodal distribution with two peaks', 'A uniform distribution with equal frequencies', 'A bell-shaped (normal) curve', 'A skewed distribution with one extreme peak'], correctIndex: 2, explanation: 'Polygenic traits typically show a bell curve (normal distribution) because the additive effects of many genes produce a range of phenotypes clustered around the mean.', partNumber: 4, partTitle: 'Polygenic Traits' },
  // Part 5
  { id: 'nmg-ent-5a', question: 'What is epistasis?', options: ['When one gene is linked to another on the same chromosome', 'When one gene masks or modifies the expression of another gene', 'When two genes always produce the same phenotype', 'When a gene has multiple alleles'], correctIndex: 1, explanation: 'Epistasis occurs when the expression of one gene is modified or masked by the action of another gene at a different locus.', partNumber: 5, partTitle: 'Epistasis' },
  { id: 'nmg-ent-5b', question: 'In Labrador retrievers, the E gene controls pigment deposition. How does this demonstrate epistasis?', options: ['The E gene and B gene are on the same chromosome', 'The E gene determines whether any pigment is deposited, masking the B gene\'s effect on color', 'The B gene prevents the E gene from being expressed', 'Both genes contribute equally without interaction'], correctIndex: 1, explanation: 'In Labs, the E gene controls whether pigment is deposited at all. Dogs with genotype ee are yellow regardless of their B gene genotype, because no pigment is deposited — this is epistasis.', partNumber: 5, partTitle: 'Epistasis' },
  // Part 6
  { id: 'nmg-ent-6a', question: 'A cross between a parent with blood type A (genotype I^A i) and a parent with blood type B (genotype I^B i) can produce which blood types?', options: ['Only A and B', 'A, B, AB, and O', 'Only AB', 'Only A, B, and AB'], correctIndex: 1, explanation: 'From I^A i × I^B i, the possible genotypes are I^A I^B (AB), I^A i (A), I^B i (B), and ii (O), so all four blood types are possible.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'nmg-ent-6b', question: 'If both parents have blood type AB, can they have a child with blood type O?', options: ['Yes, with a 25% chance', 'Yes, with a 50% chance', 'No, because neither parent carries the i allele', 'Yes, but only if one parent is a carrier'], correctIndex: 2, explanation: 'Parents with blood type AB have genotype I^A I^B. Since neither carries the i allele, they cannot produce an ii (type O) offspring.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'nmg-ent-7a', question: 'Pleiotropy is best described as:', options: ['One gene affecting multiple phenotypic traits', 'Multiple genes affecting one trait', 'One gene masking another gene', 'Two alleles blending in the heterozygote'], correctIndex: 0, explanation: 'Pleiotropy occurs when a single gene influences multiple, seemingly unrelated phenotypic traits. Sickle cell disease is a classic example: the HbS allele affects red blood cell shape, oxygen transport, and multiple organ systems.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'nmg-ent-7b', question: 'Why are X-linked recessive traits more commonly expressed in males?', options: ['Males have two X chromosomes providing double dose', 'Males have only one X chromosome, so a single recessive allele is expressed', 'The Y chromosome dominates over the X chromosome', 'Females cannot carry X-linked alleles'], correctIndex: 1, explanation: 'Males have only one X chromosome (XY), so a single recessive allele on the X is expressed since there is no second X to carry a dominant allele that could mask it.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Incomplete Dominance' },
    { partNumber: 2, partTitle: 'Codominance' },
    { partNumber: 3, partTitle: 'Multiple Alleles' },
    { partNumber: 4, partTitle: 'Polygenic Traits' },
    { partNumber: 5, partTitle: 'Epistasis' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
