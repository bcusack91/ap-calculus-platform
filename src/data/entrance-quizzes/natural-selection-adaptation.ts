/**
 * Entrance Quiz — Natural Selection & Adaptation (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'nsa-ent-1a', question: 'Which of the following is NOT one of Darwin\'s four postulates for natural selection?', options: ['Variation exists within populations', 'Some variation is heritable', 'Organisms acquire traits during their lifetime that they pass to offspring', 'Individuals with favorable traits have higher reproductive success'], correctIndex: 2, explanation: 'Darwin\'s four postulates are: variation exists, some variation is heritable, there is differential survival, and individuals with favorable traits reproduce more. Lamarck—not Darwin—proposed that acquired traits are inherited.', partNumber: 1, partTitle: "Darwin's Theory" },
  { id: 'nsa-ent-1b', question: 'Natural selection acts directly on _____, while evolution is measured as a change in _____.', options: ['Genotypes; phenotypes', 'Phenotypes; allele frequencies', 'Allele frequencies; genotypes', 'Mutations; population size'], correctIndex: 1, explanation: 'Natural selection acts on phenotypes (the observable traits), but evolution is defined as a change in allele frequencies in a population over time.', partNumber: 1, partTitle: "Darwin's Theory" },

  // Part 2
  { id: 'nsa-ent-2a', question: 'A population of mice living on dark soil increasingly has darker fur over many generations. This is an example of:', options: ['Stabilizing selection', 'Disruptive selection', 'Directional selection', 'Sexual selection'], correctIndex: 2, explanation: 'Directional selection favors one extreme phenotype (dark fur), shifting the distribution in one direction over time.', partNumber: 2, partTitle: 'Types of Selection' },
  { id: 'nsa-ent-2b', question: 'Human birth weight is subject to selection where very small and very large babies have lower survival. This is an example of:', options: ['Directional selection', 'Stabilizing selection', 'Disruptive selection', 'Artificial selection'], correctIndex: 1, explanation: 'Stabilizing selection favors the average phenotype (intermediate birth weight) and selects against both extremes. Disruptive selection favors both extremes.', partNumber: 2, partTitle: 'Types of Selection' },

  // Part 3
  { id: 'nsa-ent-3a', question: 'A male peacock\'s elaborate tail increases mating success but makes him more visible to predators. This is best explained by:', options: ['Stabilizing selection', 'Artificial selection', 'Sexual selection', 'Genetic drift'], correctIndex: 2, explanation: 'Sexual selection explains traits that increase mating success even if they decrease survival, such as the peacock\'s tail attracting mates despite being costly.', partNumber: 3, partTitle: 'Sexual Selection' },
  { id: 'nsa-ent-3b', question: 'Male elephant seals fight each other for access to females. This is an example of:', options: ['Intersexual selection', 'Intrasexual selection', 'Stabilizing selection', 'Disruptive selection'], correctIndex: 1, explanation: 'Intrasexual selection involves competition within one sex (male-male combat). Intersexual selection involves mate choice by the other sex.', partNumber: 3, partTitle: 'Sexual Selection' },

  // Part 4
  { id: 'nsa-ent-4a', question: 'Which best describes an adaptation?', options: ['Any trait an organism possesses', 'A learned behavior that improves survival', 'An inherited trait that increases fitness in a specific environment', 'A mutation that occurs in response to environmental pressure'], correctIndex: 2, explanation: 'Adaptations are inherited traits shaped by natural selection that improve an organism\'s fitness (survival and reproduction) in its specific environment.', partNumber: 4, partTitle: 'Adaptation Mechanisms' },
  { id: 'nsa-ent-4b', question: 'Besides natural selection, which of the following can also change allele frequencies in a population?', options: ['Gene flow, genetic drift, and mutation', 'Mitosis, meiosis, and binary fission', 'Predation, competition, and symbiosis', 'Photosynthesis, respiration, and fermentation'], correctIndex: 0, explanation: 'Gene flow (migration), genetic drift (random changes), and mutation all change allele frequencies and are mechanisms of evolution alongside natural selection.', partNumber: 4, partTitle: 'Adaptation Mechanisms' },

  // Part 5
  { id: 'nsa-ent-5a', question: 'Which is NOT a condition required for Hardy-Weinberg equilibrium?', options: ['Large population size', 'Random mating', 'Natural selection acting on traits', 'No migration into or out of the population'], correctIndex: 2, explanation: 'Hardy-Weinberg requires: large population, random mating, no selection, no mutation, and no migration. If natural selection is acting, the population is evolving.', partNumber: 5, partTitle: 'Hardy-Weinberg' },
  { id: 'nsa-ent-5b', question: 'In Hardy-Weinberg equations, what does 2pq represent?', options: ['Frequency of homozygous dominant individuals', 'Frequency of homozygous recessive individuals', 'Frequency of heterozygous individuals', 'Total number of alleles in the population'], correctIndex: 2, explanation: 'In the Hardy-Weinberg equation $p^{2}$ + 2pq + $q^{2}$ = 1, $p^{2}$ = homozygous dominant, 2pq = heterozygous, and $q^{2}$ = homozygous recessive.', partNumber: 5, partTitle: 'Hardy-Weinberg' },

  // Part 6
  { id: 'nsa-ent-6a', question: 'In a population in Hardy-Weinberg equilibrium, $q^{2}$ = 0.09. What is the frequency of the dominant allele (p)?', options: ['0.09', '0.3', '0.7', '0.91'], correctIndex: 2, explanation: 'If $q^{2}$ = 0.09, then q = $\\sqrt{0.09}$ = 0.3. Since p + q = 1, p = 1 − 0.3 = 0.7.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'nsa-ent-6b', question: 'Using the same population (p = 0.7, q = 0.3), what is the frequency of heterozygous carriers (2pq)?', options: ['0.21', '0.42', '0.49', '0.09'], correctIndex: 1, explanation: '2pq = 2 × 0.7 × 0.3 = 0.42. So 42% of the population are heterozygous carriers.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'nsa-ent-7a', question: 'Genetic drift has the greatest effect on:', options: ['Large populations with high genetic diversity', 'Small populations where random events change allele frequencies', 'Populations undergoing strong natural selection', 'Populations with high migration rates'], correctIndex: 1, explanation: 'Genetic drift has the largest effect on small populations. Bottleneck and founder effects are examples of genetic drift reducing genetic variation.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'nsa-ent-7b', question: 'A population of beetles has allele frequencies of A = 0.6 and a = 0.4 in one generation, and A = 0.62 and a = 0.38 in the next. Is this population evolving?', options: ['No, because the change is too small to matter', 'No, because both alleles are still present', 'Yes, because allele frequencies changed between generations', 'Yes, but only if natural selection caused the change'], correctIndex: 2, explanation: 'Evolution is defined as any change in allele frequencies over time. The cause (drift, selection, etc.) does not determine whether evolution occurred—only whether frequencies changed.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Darwin's Theory" },
    { partNumber: 2, partTitle: 'Types of Selection' },
    { partNumber: 3, partTitle: 'Sexual Selection' },
    { partNumber: 4, partTitle: 'Adaptation Mechanisms' },
    { partNumber: 5, partTitle: 'Hardy-Weinberg' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
