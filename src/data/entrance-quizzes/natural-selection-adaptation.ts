/**
 * Entrance Quiz — Natural Selection & Adaptation (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Darwin's Theory (relative fitness, vestigial structures)
 *  2 — Types of Selection (allele frequency after selection, reading a mean shift)
 *  3 — Sexual Selection (survival-mating trade-off, intra- vs intersexual selection)
 *  4 — Adaptation Mechanisms (gene flow calculation, mutation as the source of new alleles)
 *  5 — Hardy-Weinberg (back-calculating genotypes, equilibrium conditions)
 *  6 — Problem-Solving Workshop (carrier counts, chi-square for equilibrium)
 *  7 — AP Review (Lamarck vs Darwin, why recessive alleles persist)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Darwin's Theory
  {
    id: 'bnsa-ent-1a',
    question:
      'In a beetle population, AA and Aa individuals each leave an average of 12 surviving offspring, while aa individuals leave 9. What is the relative fitness of aa?',
    options: [
      '0.25',
      '1.33',
      '0.75',
      '9',
    ],
    correctIndex: 2,
    explanation:
      'Relative fitness compares each genotype with the most successful one: $w = 9 \\div 12 = 0.75$. 1.33 inverts the comparison ($12 \\div 9$), 0.25 is the shortfall rather than the fitness itself, and 9 is a raw offspring count.',
    partNumber: 1,
    partTitle: 'Darwin\'s Theory',
  },
  {
    id: 'bnsa-ent-1b',
    question:
      'Modern whales have small pelvic bones embedded in their bodies that are not attached to any legs. Which kind of evidence for evolution does this provide?',
    options: [
      'Analogous structures, which show convergent evolution with fish',
      'A vestigial structure from ancestors that had legs',
      'An acquired trait, produced as whales stopped using their legs',
      'Biogeography, since whales are found in every one of the oceans',
    ],
    correctIndex: 1,
    explanation:
      'Vestigial structures are reduced remnants of features that were functional in ancestors, here the hind limbs of land-dwelling ancestors of whales. Disuse during a lifetime does not change what offspring inherit.',
    partNumber: 1,
    partTitle: 'Darwin\'s Theory',
  },

  // Part 2: Types of Selection
  {
    id: 'bnsa-ent-2a',
    question:
      'A population of 100 has 49 AA, 42 Aa and 9 aa individuals. All aa individuals die before reproducing, while AA and Aa reproduce normally. What is the frequency of allele a among the survivors?',
    options: ['0.21', '0.30', '0.23', '0.46'],
    correctIndex: 2,
    explanation:
      'The 91 survivors carry $2 \\times 91 = 182$ alleles, and only the 42 Aa individuals carry a, so $q = 42 \\div 182 \\approx 0.23$. 0.30 is the starting value, 0.21 divides by the original 200 alleles, and 0.46 forgets that each survivor has two alleles.',
    partNumber: 2,
    partTitle: 'Types of Selection',
  },
  {
    id: 'bnsa-ent-2b',
    question:
      'Over ten generations, the mean body mass in a population of field mice rises from 20 g to 26 g, while the spread of body masses narrows slightly. Which process best fits these data?',
    options: [
      'Stabilizing selection favoring mice of intermediate mass',
      'Disruptive selection favoring both very light and very heavy mice',
      'Each mouse growing heavier and passing that gain to its young',
      'Directional selection favoring heavier mice',
    ],
    correctIndex: 3,
    explanation:
      'A shift in the mean toward one extreme is the signature of directional selection, which often trims variance slightly as the disfavored tail is removed. Stabilizing selection leaves the mean unchanged, and disruptive selection increases variance.',
    partNumber: 2,
    partTitle: 'Types of Selection',
  },

  // Part 3: Sexual Selection
  {
    id: 'bnsa-ent-3a',
    question:
      'Dull-colored males survive a breeding season with probability 0.7 and average 1.0 mates. Brightly colored males survive with probability 0.4 but average 2.0 mates if they survive. Which allele is expected to spread?',
    options: [
      'The bright allele, since 0.4 × 2.0 = 0.8 exceeds 0.7 × 1.0 = 0.7',
      'The dull allele, since its 0.7 survival beats the bright males\' 0.4',
      'Neither allele, since the survival and mating effects cancel exactly',
      'The dull allele, since 0.7 × 1.0 is larger than 0.4 × 2.0',
    ],
    correctIndex: 0,
    explanation:
      'Fitness is total reproductive output: survival × mates. Bright males average $0.4 \\times 2.0 = 0.8$ matings versus $0.7 \\times 1.0 = 0.7$ for dull males, so the mating gain outweighs the survival cost and the bright allele spreads.',
    partNumber: 3,
    partTitle: 'Sexual Selection',
  },
  {
    id: 'bnsa-ent-3b',
    question:
      'In species A, males are much larger than females and have tusks used in fights with other males. In species B, males and females are the same size, but males have bright plumage that females inspect before mating. Which forms of sexual selection are shown?',
    options: [
      'Intersexual in A and intrasexual in B',
      'Intrasexual in A and intersexual in B',
      'Intrasexual selection in both species',
      'Survival selection, not sexual selection, in both',
    ],
    correctIndex: 1,
    explanation:
      'Male-male combat favors size and weapons (intrasexual selection), while female choice favors ornaments such as bright plumage (intersexual selection). Both forms produce sexual dimorphism.',
    partNumber: 3,
    partTitle: 'Sexual Selection',
  },

  // Part 4: Adaptation Mechanisms
  {
    id: 'bnsa-ent-4a',
    question:
      'On an island, allele A has frequency p = 0.10. After a migration event, the island population is 90% long-time residents and 10% migrants from a mainland population with p = 0.60. What is the island\'s new p?',
    options: ['0.06', '0.35', '0.15', '0.55'],
    correctIndex: 2,
    explanation:
      'Take the weighted average: $p = (0.90)(0.10) + (0.10)(0.60) = 0.09 + 0.06 = 0.15$. A simple average gives 0.35, and swapping the weights gives 0.55. Gene flow moves the island toward the mainland value.',
    partNumber: 4,
    partTitle: 'Adaptation Mechanisms',
  },
  {
    id: 'bnsa-ent-4b',
    question:
      'A beetle population carries a new color allele that has never been found in any other population. Which process most likely produced this allele?',
    options: [
      'Gene flow from a neighboring beetle population',
      'Crossing over between homologous chromosomes',
      'Genetic drift in a small, isolated population',
      'A mutation in an ancestor\'s germ line',
    ],
    correctIndex: 3,
    explanation:
      'Mutation is the only source of brand-new alleles. Gene flow imports alleles that exist elsewhere, crossing over reshuffles existing alleles, and drift changes the frequencies of alleles already present.',
    partNumber: 4,
    partTitle: 'Adaptation Mechanisms',
  },

  // Part 5: Hardy-Weinberg
  {
    id: 'bnsa-ent-5a',
    question:
      'In a population in Hardy-Weinberg equilibrium, 36% of individuals show the recessive phenotype. What fraction of the population is homozygous dominant?',
    options: ['0.16', '0.40', '0.48', '0.64'],
    correctIndex: 0,
    explanation:
      '$q^2 = 0.36$, so $q = 0.6$ and $p = 0.4$, giving $p^2 = 0.16$. 0.64 is the whole dominant phenotype ($p^2 + 2pq$), 0.48 is the heterozygote share, and 0.40 is p itself.',
    partNumber: 5,
    partTitle: 'Hardy-Weinberg',
  },
  {
    id: 'bnsa-ent-5b',
    question:
      'Which population is most likely to stay in Hardy-Weinberg equilibrium at a particular locus over many generations?',
    options: [
      'A small island population founded by a few colonists',
      'A large population that regularly receives migrants',
      'A very large isolated population that mates at random and faces no selection',
      'A large population in which individuals choose mates with the same phenotype',
    ],
    correctIndex: 2,
    explanation:
      'Equilibrium requires no selection, no drift (a very large population), no gene flow, no mutation and random mating. Small founding populations drift, migrants bring gene flow, and choosing similar mates is non-random mating.',
    partNumber: 5,
    partTitle: 'Hardy-Weinberg',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bnsa-ent-6a',
    question:
      'An autosomal recessive condition affects 1 in 900 people in a population in Hardy-Weinberg equilibrium. About how many carriers are expected in a town of 9,000 people?',
    options: ['About 10', 'About 300', 'About 1,160', 'About 580'],
    correctIndex: 3,
    explanation:
      '$q^2 = 1/900$, so $q = 1/30 \\approx 0.033$ and $p \\approx 0.967$. Carriers $= 2pq \\approx 0.064$, and $0.064 \\times 9{,}000 \\approx 580$. 10 is the number affected, and 300 uses q instead of $2pq$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bnsa-ent-6b',
    question:
      'A sample of 200 plants contains 72 AA, 96 Aa and 32 aa. Using p and q calculated from this sample, what is the chi-square value for a test of Hardy-Weinberg equilibrium, and what does it suggest?',
    options: [
      '$\\chi^2 = 24$; the population is far from equilibrium',
      '$\\chi^2 = 0$; the data fit equilibrium',
      '$\\chi^2 = 0$; the population must be evolving rapidly',
      '$\\chi^2 = 5.99$; the population is exactly at the cutoff',
    ],
    correctIndex: 1,
    explanation:
      '$p = (2 \\times 72 + 96) \\div 400 = 0.6$ and $q = 0.4$. Expected counts are $0.36 \\times 200 = 72$, $0.48 \\times 200 = 96$ and $0.16 \\times 200 = 32$, exactly matching the observed counts, so $\\chi^2 = 0$ and the data are consistent with equilibrium.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bnsa-ent-7a',
    question:
      'A student writes: "Giraffes stretched their necks to reach high leaves, and their offspring were born with longer necks." Which revision is consistent with natural selection?',
    options: [
      'Neck length varied heritably, and longer-necked giraffes left more offspring',
      'Each giraffe grew a longer neck because the population needed one',
      'Stretching changed the neck genes, which were then passed to offspring',
      'All giraffes gained longer necks at the same rate across generations',
    ],
    correctIndex: 0,
    explanation:
      'Natural selection needs heritable variation already present in the population; individuals with longer necks reached more food and left more offspring, so long-neck alleles became more common. Traits acquired during life are not inherited, and evolution has no goal.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bnsa-ent-7b',
    question:
      'A recessive allele that is lethal in homozygotes stays at a frequency of about 0.01 in a large population for many generations. Carriers (Aa) survive and reproduce exactly as well as AA individuals. Why does selection remove the allele so slowly?',
    options: [
      'Lethal alleles mutate back to the normal form in each generation',
      'Selection acts on aa, and aa individuals are common when q = 0.01',
      'Genetic drift is strongest in large populations and keeps it common',
      'Nearly all copies sit in heterozygotes, hidden from selection',
    ],
    correctIndex: 3,
    explanation:
      'When q = 0.01, aa individuals are only $q^2 = 0.0001$ of the population, while about 2% are Aa carriers with the dominant phenotype, so almost every copy is hidden from selection. Carriers have no advantage here, and drift is weakest in large populations.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the natural-selection-adaptation topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Darwin\'s Theory' },
    { partNumber: 2, partTitle: 'Types of Selection' },
    { partNumber: 3, partTitle: 'Sexual Selection' },
    { partNumber: 4, partTitle: 'Adaptation Mechanisms' },
    { partNumber: 5, partTitle: 'Hardy-Weinberg' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
