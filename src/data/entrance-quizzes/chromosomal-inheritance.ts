/**
 * Entrance Quiz — Chromosomal Inheritance Patterns (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Chromosome Theory (linked vs unlinked test crosses, reciprocal X-linked cross)
 *  2 — Sex-Linked Traits (male bias in X-linked recessives, X-linked dominant mother)
 *  3 — Linked Genes & Recombination (ordering genes, the 50% limit)
 *  4 — Chromosomal Mutations (mitotic nondisjunction, triploid sterility)
 *  5 — Structural Changes (deletion dosage, break points inside genes)
 *  6 — Non-Nuclear Inheritance (seed parent carries chloroplasts, random sorting)
 *  7 — AP Review (X-linked probability, chi-square test for linkage)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Chromosome Theory
  {
    id: 'bchi-ent-1a',
    question:
      'Genes A and B are on different chromosomes. Genes C and D lie right next to each other on one chromosome, with C and D on one homolog and c and d on the other. What do test crosses of an AaBb individual and a CcDd individual (each crossed with a homozygous recessive) most likely show?',
    options: [
      'Equal numbers of all four classes from both crosses',
      'Mostly parental classes for AaBb, four equal classes for CcDd',
      'Only the parental classes from both crosses',
      'Four equal classes for AaBb, mostly parental classes for CcDd',
    ],
    correctIndex: 3,
    explanation:
      'Genes on different chromosomes assort independently, giving 1:1:1:1. Genes very close together on one chromosome are linked and are rarely separated by crossing over, so the parental combinations (CD and cd) dominate.',
    partNumber: 1,
    partTitle: 'Chromosome Theory',
  },
  {
    id: 'bchi-ent-1b',
    question:
      'In fruit flies, red eyes ($X^W$) are dominant to white eyes ($X^w$). If true-breeding white-eyed females are crossed with red-eyed males, what F1 result is expected?',
    options: [
      'All daughters have red eyes, and all sons have white eyes',
      'All F1 flies have red eyes, both sexes',
      'Every daughter has white eyes, and every son has red eyes',
      'Half of each sex has red eyes and half has white eyes',
    ],
    correctIndex: 0,
    explanation:
      'Daughters receive $X^W$ from their father and $X^w$ from their mother, so they are red-eyed. Sons receive their only X from their white-eyed mother ($X^wY$), so they are white-eyed. The criss-cross result points to a gene on the X chromosome.',
    partNumber: 1,
    partTitle: 'Chromosome Theory',
  },

  // Part 2: Sex-Linked Traits
  {
    id: 'bchi-ent-2a',
    question:
      'In a population, 1 in 20 X chromosomes carries the recessive allele for an X-linked trait. Which pattern is expected?',
    options: [
      'About 1 in 20 females, and far fewer of the males',
      'About 1 in 20 males, and far fewer females',
      'About 1 in 40 of each sex, since alleles are shared',
      'About 1 in 10 males and about 1 in 20 females',
    ],
    correctIndex: 1,
    explanation:
      'A male shows the trait whenever his single X carries the allele, so about 1 in 20 males is affected. A female needs the allele on both X chromosomes, which is much less likely, so far fewer females are affected.',
    partNumber: 2,
    partTitle: 'Sex-Linked Traits',
  },
  {
    id: 'bchi-ent-2b',
    question:
      'A woman heterozygous for an X-linked dominant disorder has children with an unaffected man. Which children are expected to be affected?',
    options: [
      '100% of daughters and 0% of sons',
      '0% of daughters and 100% of sons',
      'About 50% of the sons and 50% of the daughters',
      '0% of the children, since the father is unaffected',
    ],
    correctIndex: 2,
    explanation:
      'The mother passes her affected X to about half of her children, regardless of sex, and one copy is enough to cause a dominant trait. The all-daughters, no-sons pattern applies when the father is the affected parent.',
    partNumber: 2,
    partTitle: 'Sex-Linked Traits',
  },

  // Part 3: Linked Genes & Recombination
  {
    id: 'bchi-ent-3a',
    question:
      'Two-point test crosses give these map distances: J–K = 15 cM, K–L = 6 cM and J–L = 9 cM. What is the order of the genes?',
    options: ['J–K–L', 'J–L–K', 'K–J–L', 'L–J–K'],
    correctIndex: 1,
    explanation:
      'The largest distance (J–K, 15 cM) spans the two outer genes, so L lies between them; check: J–L + L–K = 9 + 6 = 15 cM.',
    partNumber: 3,
    partTitle: 'Linked Genes & Recombination',
  },
  {
    id: 'bchi-ent-3b',
    question:
      'Two genes sit very far apart on the same chromosome, and a test cross gives about 50% recombinant offspring. What can be concluded from this test cross alone?',
    options: [
      'The genes are on different chromosomes',
      'The genes are completely linked',
      'The genes are about 100 cM apart',
      'The genes behave as if they were unlinked',
    ],
    correctIndex: 3,
    explanation:
      'Recombination frequency cannot exceed 50%, so genes far apart on one chromosome give about 50% recombinants, just like unlinked genes; this cross cannot tell the two cases apart or measure the distance. Such distances are measured by adding shorter intervals between genes in the middle.',
    partNumber: 3,
    partTitle: 'Linked Genes & Recombination',
  },

  // Part 4: Chromosomal Mutations
  {
    id: 'bchi-ent-4a',
    question:
      'During an early cell division of an embryo, sister chromatids of one chromosome fail to separate in mitosis in a single cell. What is the most likely outcome?',
    options: [
      'Only cells descended from that cell have abnormal numbers',
      'Every cell of the individual is trisomic',
      'The individual\'s gametes are affected, but no body cells',
      'The extra chromosome is lost before the next division',
    ],
    correctIndex: 0,
    explanation:
      'A mitotic error affects only the descendants of the cell in which it happened, so the individual is a mosaic of normal and abnormal cells. A meiotic error, by contrast, makes an abnormal zygote, so every cell is affected.',
    partNumber: 4,
    partTitle: 'Chromosomal Mutations',
  },
  {
    id: 'bchi-ent-4b',
    question:
      'Seedless watermelons are triploid (3n). Why are triploid plants usually sterile?',
    options: [
      'Triploid cells cannot carry out mitosis to grow',
      'Triploid plants lack the genes needed to build flowers',
      'The extra set of chromosomes is lost in every gamete',
      'Three homologs cannot split into two even sets in meiosis',
    ],
    correctIndex: 3,
    explanation:
      'With three homologs of each chromosome, meiosis cannot divide them into two balanced sets, so nearly all gametes end up with unbalanced chromosome numbers. Triploid cells divide normally by mitosis, which is how the plants grow.',
    partNumber: 4,
    partTitle: 'Chromosomal Mutations',
  },

  // Part 5: Structural Changes
  {
    id: 'bchi-ent-5a',
    question:
      'One chromosome in a diploid cell has a deletion that removes genes F and G; its homolog is normal. How much of the products of genes F and G will the cell most likely make?',
    options: [
      'None at all, since the genes were deleted',
      'The normal amount, since the homolog makes up for it',
      'About half the normal amount, from one copy',
      'Twice the normal amount, since the cell compensates',
    ],
    correctIndex: 2,
    explanation:
      'Each gene in the deleted segment is left with only the copy on the normal homolog, so its product is made at about half the normal amount. That change in dosage across many genes is why deletions are usually harmful.',
    partNumber: 5,
    partTitle: 'Structural Changes',
  },
  {
    id: 'bchi-ent-5b',
    question:
      'A man carries a translocation between two non-homologous chromosomes, and no genetic material was lost. Even so, one copy of gene X no longer makes a working product. Which explanation is best supported?',
    options: [
      'A break point fell within gene X and cut it in two',
      'The translocation added a third copy of gene X to the cell',
      'Translocations always delete the genes at the chromosome ends',
      'Gene X was converted into a different gene by the exchange',
    ],
    correctIndex: 0,
    explanation:
      'A rearrangement can disrupt a gene when a break point lands inside it, leaving a nonfunctional piece on each chromosome. A translocation that loses no material does not add gene copies or remove the ends.',
    partNumber: 5,
    partTitle: 'Structural Changes',
  },

  // Part 6: Non-Nuclear Inheritance
  {
    id: 'bchi-ent-6a',
    question:
      'A plant breeder wants to move a herbicide-resistance trait encoded in chloroplast DNA into a new crop variety. How should the breeder set up the cross?',
    options: [
      'Use pollen from the resistant plant on the new variety',
      'Have the resistant plant bear the seeds',
      'Either parent works, since both supply chloroplasts',
      'Neither works, since chloroplast genes are never inherited',
    ],
    correctIndex: 1,
    explanation:
      'In plants, chloroplasts pass to offspring through the ovule, not the pollen, so offspring resemble the seed parent for chloroplast-encoded traits.',
    partNumber: 6,
    partTitle: 'Non-Nuclear Inheritance',
  },
  {
    id: 'bchi-ent-6b',
    question:
      'A cell contains about half normal and half mutant mitochondria. It and its descendants divide many times. What happens to the proportion of mutant mitochondria in the descendant cell lines?',
    options: [
      'Every descendant keeps exactly half normal and half mutant',
      'All lines lose the mutant mitochondria within a few divisions',
      'The lines diverge, with some nearly all normal and some nearly all mutant',
      'The mutant mitochondria convert the normal ones to mutant',
    ],
    correctIndex: 2,
    explanation:
      'Mitochondria are split between daughter cells at random, with no spindle sorting them evenly, so over many divisions the proportions drift: some cell lines end up nearly all normal and others nearly all mutant.',
    partNumber: 6,
    partTitle: 'Non-Nuclear Inheritance',
  },

  // Part 7: AP Review
  {
    id: 'bchi-ent-7a',
    question:
      'A woman who is a carrier for hemophilia ($X^HX^h$) has children with a man with normal clotting ($X^HY$). What is the probability that their first child is a daughter who is a carrier?',
    options: [
      '0',
      '$\\frac{1}{8}$',
      '$\\frac{1}{4}$',
      '$\\frac{1}{2}$',
    ],
    correctIndex: 2,
    explanation:
      'P(daughter) = $\\frac{1}{2}$, and a daughter is a carrier when she receives $X^h$ from her mother, also $\\frac{1}{2}$, so $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. $\\frac{1}{2}$ is the chance that a daughter is a carrier, once you know the child is a daughter.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bchi-ent-7b',
    question:
      'A dihybrid test cross gives 100 offspring: 40 AB, 40 ab, 10 Ab and 10 aB. The data are compared with a 1:1:1:1 ratio (df = 3; critical value 7.81). Which conclusion is correct?',
    options: [
      '$\\chi^2 = 36$; the genes assort independently',
      '$\\chi^2 = 36$; the genes are linked about 20 cM apart',
      '$\\chi^2 = 9$; the genes are linked about 20 cM apart',
      '$\\chi^2 = 36$; the genes are linked about 80 cM apart',
    ],
    correctIndex: 1,
    explanation:
      'Each expected count is 25. $\\chi^2 = \\frac{15^2}{25} \\times 4 = 36$, far above 7.81, so independent assortment is rejected and the genes are linked. Recombinants are $\\frac{10 + 10}{100} = 20\\%$, or 20 cM; 80% is the share of parental types.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the chromosomal-inheritance topic.
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
    { partNumber: 1, partTitle: 'Chromosome Theory' },
    { partNumber: 2, partTitle: 'Sex-Linked Traits' },
    { partNumber: 3, partTitle: 'Linked Genes & Recombination' },
    { partNumber: 4, partTitle: 'Chromosomal Mutations' },
    { partNumber: 5, partTitle: 'Structural Changes' },
    { partNumber: 6, partTitle: 'Non-Nuclear Inheritance' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
