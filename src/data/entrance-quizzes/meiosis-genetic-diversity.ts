/**
 * Entrance Quiz — Meiosis & Genetic Diversity (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Meiosis Overview (why gametes must be haploid, homologs vs sisters)
 *  2 — Meiosis I (counts at metaphase I, anaphase I vs mitotic anaphase)
 *  3 — Meiosis II (identifying anaphase II, non-identical sister chromatids)
 *  4 — Crossing Over & Recombination (recombinant chromatids, no genes gained or lost)
 *  5 — Sources of Genetic Variation (2^n comparison, where each source acts)
 *  6 — Meiosis: Problem-Solving Workshop (linked gametes, nondisjunction outcome)
 *  7 — Meiosis: Synthesis & AP Review (events unique to meiosis, stage-event-outcome)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Meiosis Overview
  {
    id: 'bmei-ent-1a',
    question:
      'A species has 2n = 14. Suppose its gametes were made by mitosis instead of meiosis. How many chromosomes would the zygotes have two generations later (the grandchildren of the original parents)?',
    options: ['7', '14', '28', '56'],
    correctIndex: 3,
    explanation:
      'Mitotic gametes would carry 14 chromosomes, so the first zygotes would have $14 + 14 = 28$; their gametes would carry 28, giving $28 + 28 = 56$ in the next generation. Meiosis prevents this doubling by giving each gamete one set (n = 7).',
    partNumber: 1,
    partTitle: 'Meiosis Overview',
  },
  {
    id: 'bmei-ent-1b',
    question:
      'Before any crossing over has happened, which pair of structures could carry different alleles of the same gene?',
    options: [
      'The two sister chromatids of the maternal chromosome 5',
      'The maternal and paternal copies of chromosome 5',
      'Chromosome 5 and chromosome 9 inherited from the mother',
      'The two DNA strands within one chromatid of chromosome 5',
    ],
    correctIndex: 1,
    explanation:
      'Homologous chromosomes, one from each parent, carry the same genes in the same order but may carry different alleles. Sister chromatids are replication copies with identical alleles, and different chromosomes carry different genes.',
    partNumber: 1,
    partTitle: 'Meiosis Overview',
  },

  // Part 2: Meiosis I
  {
    id: 'bmei-ent-2a',
    question:
      'A garden pea has 2n = 14, and its cells contain 2c DNA in G₁. Which description fits one of its cells at metaphase I?',
    options: [
      '14 bivalents, 28 chromatids, 4c DNA',
      '7 bivalents, 28 chromatids, 4c DNA',
      '7 bivalents, 14 chromatids, 2c DNA',
      '7 bivalents, 28 chromatids, 2c DNA',
    ],
    correctIndex: 1,
    explanation:
      'At metaphase I no division has happened: 14 duplicated chromosomes are paired as 7 bivalents, with $14 \\times 2 = 28$ chromatids and DNA doubled to 4c by S phase.',
    partNumber: 2,
    partTitle: 'Meiosis I',
  },
  {
    id: 'bmei-ent-2b',
    question:
      'Which statement correctly contrasts anaphase I of meiosis with anaphase of mitosis?',
    options: [
      'In anaphase I, homologs separate; in mitosis, sister chromatids do',
      'In anaphase I, sister chromatids separate; in mitosis, the homologs separate',
      'In both, sister chromatids separate, but anaphase I produces four cells',
      'In both, homologs separate, but only anaphase I keeps the sisters joined',
    ],
    correctIndex: 0,
    explanation:
      'Anaphase I pulls the two homologs of each pair to opposite poles while each homolog\'s sister chromatids stay attached, which halves the chromosome number. Mitotic anaphase separates sister chromatids, so each daughter keeps both homologs.',
    partNumber: 2,
    partTitle: 'Meiosis I',
  },

  // Part 3: Meiosis II
  {
    id: 'bmei-ent-3a',
    question:
      'In an organism with 2n = 12, a cell shows six single-chromatid chromosomes moving toward each pole. Which stage is this?',
    options: [
      'Anaphase I, since six chromosomes move to each pole',
      'Anaphase II, as n lone chromatids reach each pole',
      'Anaphase of mitosis, since sister chromatids separate',
      'Telophase I, since the cell is about to become haploid',
    ],
    correctIndex: 1,
    explanation:
      'Single chromatids moving apart means sister chromatids are separating, and only six (n) going to each pole means the cell is already haploid, so it is anaphase II. In anaphase I each moving chromosome still has two chromatids, and mitotic anaphase would send 12 to each pole.',
    partNumber: 3,
    partTitle: 'Meiosis II',
  },
  {
    id: 'bmei-ent-3b',
    question:
      'A crossover occurred in prophase I between a maternal and a paternal chromatid. In anaphase II, the two sister chromatids of the maternal chromosome are separated. How do these two chromatids compare?',
    options: [
      'They are identical, since sister chromatids are always exact copies',
      'Their alleles differ all along, since crossing over swaps every gene',
      'They are identical, since crossing over is undone before meiosis II',
      'They differ in the swapped region, since only one of them crossed over',
    ],
    correctIndex: 3,
    explanation:
      'Only one maternal chromatid took part in the exchange, so it now carries paternal alleles in the swapped segment while its sister does not. That is why meiosis II can separate sisters that are not identical.',
    partNumber: 3,
    partTitle: 'Meiosis II',
  },

  // Part 4: Crossing Over & Recombination
  {
    id: 'bmei-ent-4a',
    question:
      'Three genes lie on one chromosome in the order A–B–C. An individual has A, B and C on its maternal homolog and a, b and c on its paternal homolog. A single crossover occurs between genes B and C. Which recombinant chromatids result?',
    options: [
      'Abc and aBC',
      'ABC and abc',
      'ABc and abC',
      'aBc and AbC',
    ],
    correctIndex: 2,
    explanation:
      'A crossover between B and C swaps only the segments carrying gene C, so A and B stay together and C changes partners: ABc and abC. Abc and aBC would need a crossover between A and B, and ABC and abc are the parental types.',
    partNumber: 4,
    partTitle: 'Crossing Over & Recombination',
  },
  {
    id: 'bmei-ent-4b',
    question:
      'Crossing over moves segments of DNA between chromatids. Why does it not leave one chromatid with extra genes and the other missing genes?',
    options: [
      'Crossing over moves mostly noncoding DNA that lacks genes',
      'Chromatids with extra genes are destroyed later in meiosis II',
      'Crossing over occurs between sister chromatids, which are identical',
      'Pieces swap at matching positions on homologs with the same genes',
    ],
    correctIndex: 3,
    explanation:
      'Homologs carry the same genes in the same order, and nonsister chromatids break and rejoin at corresponding points, so each recombinant chromatid still has one copy of every gene; only the alleles are reshuffled.',
    partNumber: 4,
    partTitle: 'Crossing Over & Recombination',
  },

  // Part 5: Sources of Genetic Variation
  {
    id: 'bmei-ent-5a',
    question:
      'Species X has 2n = 8 and species Y has 2n = 12. Ignoring crossing over, how many times more chromosome combinations can independent assortment produce in the gametes of Y than in those of X?',
    options: ['1.5 times', '2 times', '4 times', '16 times'],
    correctIndex: 2,
    explanation:
      'Combinations equal $2^n$: X has $2^4 = 16$ and Y has $2^6 = 64$, so Y has $64 \\div 16 = 4$ times as many. 1.5 compares chromosome numbers, and 16 comes from using 2n as the exponent.',
    partNumber: 5,
    partTitle: 'Sources of Genetic Variation',
  },
  {
    id: 'bmei-ent-5b',
    question:
      'Which pairing of a source of genetic variation with the time it acts is correct?',
    options: [
      'Crossing over, during anaphase II',
      'Random fertilization, during prophase I',
      'Independent assortment, at metaphase I',
      'Mutation, only during anaphase I',
    ],
    correctIndex: 2,
    explanation:
      'Each homologous pair orients independently at metaphase I. Crossing over happens in prophase I, random fertilization happens after meiosis, and mutation can occur whenever DNA is copied or damaged.',
    partNumber: 5,
    partTitle: 'Sources of Genetic Variation',
  },

  // Part 6: Meiosis: Problem-Solving Workshop
  {
    id: 'bmei-ent-6a',
    question:
      'An AaBb individual has genes A and B close together on the same chromosome, with A and B on one homolog and a and b on the other. If no crossover occurs between them, which gametes can it make?',
    options: [
      'AB and ab only',
      'Ab and aB only',
      'AB, Ab, aB and ab in equal numbers',
      'A, a, B and b as separate gametes',
    ],
    correctIndex: 0,
    explanation:
      'Linked alleles travel together on their chromosome, so without a crossover the gametes carry the parental combinations AB and ab. Equal numbers of all four types would be expected only for genes on different chromosomes.',
    partNumber: 6,
    partTitle: 'Meiosis: Problem-Solving Workshop',
  },
  {
    id: 'bmei-ent-6b',
    question:
      'In one meiosis, the two homologs of chromosome 3 fail to separate in meiosis I, and meiosis II is normal. A gamete that received the extra chromosome is fertilized by a normal gamete. How many copies of chromosome 3 will the zygote have?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation:
      'Nondisjunction in meiosis I gives some gametes both homologs (two copies of chromosome 3). Adding one copy from the normal gamete gives three copies in the zygote.',
    partNumber: 6,
    partTitle: 'Meiosis: Problem-Solving Workshop',
  },

  // Part 7: Meiosis: Synthesis & AP Review
  {
    id: 'bmei-ent-7a',
    question:
      'Which event happens in meiosis but not in mitosis, and makes crossing over between maternal and paternal chromosomes possible?',
    options: [
      'Sister chromatids separating at anaphase',
      'DNA replicating once before division',
      'Spindle fibers attaching to kinetochores',
      'Homologs pairing gene for gene in prophase I',
    ],
    correctIndex: 3,
    explanation:
      'Synapsis, the tight pairing of each homolog with its partner in prophase I, happens only in meiosis and lets nonsister chromatids exchange matching segments. The other events occur in both kinds of division.',
    partNumber: 7,
    partTitle: 'Meiosis: Synthesis & AP Review',
  },
  {
    id: 'bmei-ent-7b',
    question:
      'A student writes: "In anaphase II, homologous chromosomes separate, so each gamete receives one allele of each gene." Which correction is accurate?',
    options: [
      'Homologs separate in anaphase I; anaphase II separates the sisters',
      'Homologs separate in prophase I, when crossing over takes place',
      'Homologs never separate; gametes get alleles by crossing over',
      'Homologs separate in anaphase II, but each gamete gets two alleles',
    ],
    correctIndex: 0,
    explanation:
      'The separation of homologs in anaphase I is what sends the two alleles of a heterozygote into different cells (the basis of segregation). Anaphase II separates sister chromatids.',
    partNumber: 7,
    partTitle: 'Meiosis: Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the meiosis topic.
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
    { partNumber: 1, partTitle: 'Meiosis Overview' },
    { partNumber: 2, partTitle: 'Meiosis I' },
    { partNumber: 3, partTitle: 'Meiosis II' },
    { partNumber: 4, partTitle: 'Crossing Over & Recombination' },
    { partNumber: 5, partTitle: 'Sources of Genetic Variation' },
    { partNumber: 6, partTitle: 'Meiosis: Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Meiosis: Synthesis & AP Review' },
  ]
}
