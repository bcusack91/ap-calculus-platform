/**
 * Entrance Quiz — Genetics & Evolution (MCAT)
 * 14 questions · 7 parts (2 per part)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026 so each part tests the lesson part of the same number).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Mendelian Genetics'
const P2 = 'Non-Mendelian Inheritance'
const P3 = 'Sex-Linked Inheritance & Pedigrees'
const P4 = 'Population Genetics'
const P5 = 'Evolution & Natural Selection'
const P6 = 'Speciation & Phylogenetics'
const P7 = 'Genetic Diseases & Chromosomal Abnormalities'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Mendelian Genetics
  { id: 'mge-ent-1a', question: 'Two plants heterozygous for two unlinked genes ($AaBb \\times AaBb$, complete dominance) are crossed. The expected phenotypic ratio is:', options: ['3:1', '1:2:1', '9:3:3:1', '1:1:1:1'], correctIndex: 2, explanation: 'Each gene alone gives 3:1, and independent assortment multiplies them: $(3:1)(3:1) = 9:3:3:1$. A 3:1 ratio is a monohybrid cross, 1:2:1 is a monohybrid genotype ratio, and 1:1:1:1 comes from a dihybrid test cross ($AaBb \\times aabb$).', partNumber: 1, partTitle: P1 },
  { id: 'mge-ent-1b', question: 'In peas, tall ($T$) is dominant to short ($t$). A cross of $Tt \\times tt$ is expected to give what fraction of tall offspring?', options: ['1/4', '1/2', '3/4', 'All of them'], correctIndex: 1, explanation: 'The $Tt$ parent passes $T$ or $t$ with equal chance, and the $tt$ parent always passes $t$, so offspring are half $Tt$ (tall) and half $tt$ (short). Three-quarters tall would need two heterozygous parents, and all tall would need a $TT$ parent.', partNumber: 1, partTitle: P1 },

  // Part 2 — Non-Mendelian Inheritance
  { id: 'mge-ent-2a', question: "A child has type O blood. Which pair of blood types could NOT belong to the child's parents?", options: ['Type A and type B', 'Type A and type O', 'Type AB and type A', 'Type O and type O'], correctIndex: 2, explanation: 'A type O child is $ii$ and needs an $i$ allele from each parent. A type AB parent is $I^AI^B$ and has no $i$ to give, so that pair is impossible. Type A and type B parents can both be heterozygous ($I^Ai$ and $I^Bi$), and type O parents always pass $i$.', partNumber: 2, partTitle: P2 },
  { id: 'mge-ent-2b', question: 'A man with a disorder caused by a mitochondrial DNA mutation has children with an unaffected woman. What is expected?', options: ['None of the children will be affected', 'All of the children will be affected', 'Only his sons will be affected', 'Half of the children will be affected'], correctIndex: 0, explanation: 'Mitochondria are inherited through the egg, so a father does not pass his mitochondrial DNA to any child. An affected mother, by contrast, passes it to all of her children. Sex-limited or 50% patterns belong to nuclear genes.', partNumber: 2, partTitle: P2 },

  // Part 3 — Sex-Linked Inheritance & Pedigrees
  { id: 'mge-ent-3a', question: 'Hemophilia A is X-linked recessive. A carrier mother ($X^{H}X^{h}$) and an unaffected father ($X^{H}Y$) have children. What fraction of their daughters are expected to be carriers?', options: ['0%', '25%', '50%', '100%'], correctIndex: 2, explanation: 'Every daughter gets $X^{H}$ from the father and either $X^{H}$ or $X^{h}$ from the mother, so half are carriers ($X^{H}X^{h}$) and none are affected. The 25% figure is the share of ALL children who are carrier daughters, not the share of daughters.', partNumber: 3, partTitle: P3 },
  { id: 'mge-ent-3b', question: "An unaffected woman's father had an X-linked recessive disease. She has a son with an unaffected man. What is the probability that the son is affected?", options: ['0', '1/8', '1/4', '1/2'], correctIndex: 3, explanation: 'An affected father gives his X to every daughter, so she is an obligate carrier ($X^{A}X^{a}$). A son gets his only X from her, so he has a 1/2 chance of receiving $X^{a}$. The 1/4 figure is the chance for a child of unknown sex.', partNumber: 3, partTitle: P3 },

  // Part 4 — Population Genetics
  { id: 'mge-ent-4a', question: 'For a gene with two alleles, the Hardy–Weinberg equation $p + q = 1$ describes:', options: ['The two allele frequencies at that locus', 'The three genotype frequencies at that locus', 'The fraction of carriers in the population', 'The rate at which new mutations appear'], correctIndex: 0, explanation: 'Here $p$ and $q$ are the frequencies of the two alleles, which must add to 1. The genotype frequencies are given by the second equation, $p^2 + 2pq + q^2 = 1$, where $2pq$ is the carrier (heterozygote) frequency. Neither equation measures the mutation rate.', partNumber: 4, partTitle: P4 },
  { id: 'mge-ent-4b', question: 'Which condition is required for a population to stay in Hardy–Weinberg equilibrium?', options: ['Strong selection for the fittest genotype', 'Steady migration between populations', 'A small, isolated breeding population', 'Random mating among all individuals'], correctIndex: 3, explanation: 'Hardy–Weinberg equilibrium requires random mating, a large population, no mutation, no migration and no selection. Selection, gene flow and the genetic drift that dominates small populations all change allele frequencies, which means evolution is occurring.', partNumber: 4, partTitle: P4 },

  // Part 5 — Evolution & Natural Selection
  { id: 'mge-ent-5a', question: "Over many generations, a population's single-peaked distribution of a trait splits into two peaks at the extremes. This pattern reflects:", options: ['Disruptive selection', 'Stabilizing selection', 'Directional selection', 'Genetic drift'], correctIndex: 0, explanation: 'Disruptive selection favors both extremes over the average, producing a bimodal distribution. Stabilizing selection favors the average and narrows the curve, directional selection shifts the single peak one way, and drift changes frequencies at random rather than favoring extremes.', partNumber: 5, partTitle: P5 },
  { id: 'mge-ent-5b', question: 'Which statement about natural selection is correct?', options: ['It creates new alleles to suit the environment', 'It acts on phenotypes and shifts allele frequencies', 'It changes individuals during their own lifetimes', 'It always leaves one best genotype in a population'], correctIndex: 1, explanation: 'Selection acts on the phenotypes of individuals, and because fitter phenotypes leave more offspring, the frequencies of the underlying alleles change across generations. New alleles come from mutation, populations (not individuals) evolve, and balancing or disruptive selection can keep several genotypes.', partNumber: 5, partTitle: P5 },

  // Part 6 — Speciation & Phylogenetics
  { id: 'mge-ent-6a', question: 'Which situation describes allopatric speciation?', options: ['A geographic barrier blocks gene flow between groups', 'Populations in one area diverge through behavior', 'Polyploidy isolates a plant from its parent species', 'Selection removes all but one phenotype in an area'], correctIndex: 0, explanation: 'In allopatric speciation, physical separation (a mountain range, a river, an ocean) stops gene flow, and the isolated groups diverge. Divergence within the same area, including by polyploidy, is sympatric speciation, and selection for a single phenotype does not by itself create a new species.', partNumber: 6, partTitle: P6 },
  { id: 'mge-ent-6b', question: 'Under the biological species concept, two populations belong to one species if they:', options: ['Look alike and share the same habitat', 'Share at least one homologous structure', 'Can mate, even if every hybrid is sterile', 'Can interbreed and produce fertile offspring'], correctIndex: 3, explanation: 'The biological species concept requires interbreeding that yields fertile offspring. Sterile hybrids (such as mules) mark a postzygotic barrier between separate species, and similar appearance or shared homologous structures can occur in different species.', partNumber: 6, partTitle: P6 },

  // Part 7 — Genetic Diseases & Chromosomal Abnormalities
  { id: 'mge-ent-7a', question: 'Phenylketonuria, detected by newborn screening, results from an inability to:', options: ['Transport chloride ions across epithelia', 'Break down the amino acid phenylalanine', 'Degrade gangliosides in neuron lysosomes', 'Clear LDL cholesterol from the blood'], correctIndex: 1, explanation: 'In PKU, an autosomal recessive disorder, phenylalanine cannot be metabolized and builds up to toxic levels. Faulty chloride transport is cystic fibrosis, ganglioside buildup is Tay-Sachs disease, and failure to clear LDL is familial hypercholesterolemia.', partNumber: 7, partTitle: P7 },
  { id: 'mge-ent-7b', question: 'Huntington disease and Marfan syndrome share which inheritance pattern?', options: ['Autosomal recessive', 'X-linked recessive', 'Mitochondrial (maternal)', 'Autosomal dominant'], correctIndex: 3, explanation: 'Both are autosomal dominant: one mutant allele is enough, and an affected parent passes it to about half of the children of either sex. Cystic fibrosis and sickle cell disease are classic autosomal recessive examples, and hemophilia is X-linked recessive.', partNumber: 7, partTitle: P7 },
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
