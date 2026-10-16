/**
 * Entrance Quiz — Mendelian Genetics (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Mendel's Laws (segregation in gametes, chromosomal basis of assortment)
 *  2 — Monohybrid Crosses (predicting crosses, why a test cross uses a recessive)
 *  3 — Dihybrid Crosses (specific genotype probability, per-gene splits)
 *  4 — Probability in Genetics (exactly k of n, complement rule)
 *  5 — Pedigree Analysis (X-linked recessive pattern, carrier uncertainty)
 *  6 — Problem-Solving Workshop (product rule chains across offspring)
 *  7 — AP Review (chi-square calculation, degrees of freedom)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Mendel's Laws
  {
    id: 'bmen-ent-1a',
    question:
      'A pea plant with genotype Tt produces 1,000 pollen grains. About how many carry the t allele, and which principle predicts this?',
    options: [
      'About 250, by the law of segregation',
      'About 500, by the law of segregation',
      'About 500, by the law of dominance',
      'About 750, by independent assortment',
    ],
    correctIndex: 1,
    explanation:
      'The two alleles of a heterozygote separate during gamete formation, so half the gametes carry T and half carry t: about 500. One-fourth (250) is the chance of a tt offspring from Tt × Tt, not the share of t gametes.',
    partNumber: 1,
    partTitle: 'Mendel\'s Laws',
  },
  {
    id: 'bmen-ent-1b',
    question:
      'In peas, the gene for seed shape and the gene for seed color assort independently. What is the cellular basis for this?',
    options: [
      'Their chromosome pairs line up at random at metaphase I',
      'The two genes sit side by side on the same chromosome',
      'Sister chromatids carrying the two genes separate in anaphase II',
      'Dominant alleles are always packaged together in one gamete',
    ],
    correctIndex: 0,
    explanation:
      'Genes on different chromosome pairs assort independently because each homologous pair lines up at metaphase I without regard to the others. Genes close together on one chromosome are linked and do not assort independently.',
    partNumber: 1,
    partTitle: 'Mendel\'s Laws',
  },

  // Part 2: Monohybrid Crosses
  {
    id: 'bmen-ent-2a',
    question:
      'In a plant, tall (T) is dominant to short (t). Which cross is expected to produce some short offspring?',
    options: ['TT × tt', 'TT × Tt', 'Tt × tt', 'TT × TT'],
    correctIndex: 2,
    explanation:
      'Tt × tt is expected to give half Tt (tall) and half tt (short). Every other cross includes a TT parent, which passes a T allele to every offspring, so all offspring are expected to be tall.',
    partNumber: 2,
    partTitle: 'Monohybrid Crosses',
  },
  {
    id: 'bmen-ent-2b',
    question:
      'A breeder wants to learn whether a black rabbit (black is dominant) is BB or Bb, and crosses it with a homozygous black (BB) rabbit. Why is this cross not useful?',
    options: [
      'The BB partner hides the black rabbit\'s alleles from the offspring',
      'BB rabbits cannot mate with Bb rabbits, so no offspring would form',
      'Half the offspring would be brown in either case, so they match',
      'Every offspring would look black in either case',
    ],
    correctIndex: 3,
    explanation:
      'Every offspring would receive a B from the BB partner and look black, so the result is the same either way. A test cross to a homozygous recessive (bb) rabbit reveals a hidden b allele, because any brown offspring proves the parent is Bb.',
    partNumber: 2,
    partTitle: 'Monohybrid Crosses',
  },

  // Part 3: Dihybrid Crosses
  {
    id: 'bmen-ent-3a',
    question:
      'In peas, round (R) is dominant to wrinkled (r) and yellow (Y) is dominant to green (y); the genes assort independently. From RrYy × RrYy, what is the probability that an offspring is a true-breeding round, green plant (RRyy)?',
    options: [
      '$\\frac{1}{16}$',
      '$\\frac{1}{8}$',
      '$\\frac{3}{16}$',
      '$\\frac{1}{4}$',
    ],
    correctIndex: 0,
    explanation:
      '$P(RR) = \\frac{1}{4}$ and $P(yy) = \\frac{1}{4}$, so $P(RRyy) = \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$. $\\frac{3}{16}$ is the chance of any round, green plant, which includes Rryy.',
    partNumber: 3,
    partTitle: 'Dihybrid Crosses',
  },
  {
    id: 'bmen-ent-3b',
    question:
      'Three genes assort independently, each with simple dominance. In the cross AaBbCc × AaBBcc, what fraction of offspring show the dominant trait for A, the dominant trait for B and the recessive trait for C?',
    options: [
      '$\\frac{9}{64}$',
      '$\\frac{3}{32}$',
      '$\\frac{3}{8}$',
      '$\\frac{3}{16}$',
    ],
    correctIndex: 2,
    explanation:
      'Solve each gene from its own parents: $P(A\\_) = \\frac{3}{4}$ from Aa × Aa, $P(B\\_) = 1$ because the BB parent always gives B, and $P(cc) = \\frac{1}{2}$ from Cc × cc. Multiply: $\\frac{3}{4} \\times 1 \\times \\frac{1}{2} = \\frac{3}{8}$. $\\frac{9}{64}$ wrongly treats both parents as triple heterozygotes, and $\\frac{3}{32}$ uses $\\frac{1}{4}$ for the B gene.',
    partNumber: 3,
    partTitle: 'Dihybrid Crosses',
  },

  // Part 4: Probability in Genetics
  {
    id: 'bmen-ent-4a',
    question:
      'Two carriers of an autosomal recessive disorder (Cc × Cc) have three children. What is the probability that exactly one of the three is affected?',
    options: [
      '$\\frac{27}{64}$',
      '$\\frac{9}{64}$',
      '$\\frac{1}{4}$',
      '$\\frac{37}{64}$',
    ],
    correctIndex: 0,
    explanation:
      'One order (affected, unaffected, unaffected) has probability $\\frac{1}{4} \\times \\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{64}$, and there are three orders, so $3 \\times \\frac{9}{64} = \\frac{27}{64}$. $\\frac{9}{64}$ counts only one order, and $\\frac{37}{64}$ is the chance of at least one affected child.',
    partNumber: 4,
    partTitle: 'Probability in Genetics',
  },
  {
    id: 'bmen-ent-4b',
    question:
      'Two genes assort independently with simple dominance. In the cross AaBb × aaBb, what is the probability that an offspring shows at least one dominant trait?',
    options: [
      '$\\frac{1}{8}$',
      '$\\frac{3}{8}$',
      '$\\frac{5}{8}$',
      '$\\frac{7}{8}$',
    ],
    correctIndex: 3,
    explanation:
      'Use the complement: the only way to show no dominant trait is aabb, with $P = \\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$. So $P(\\text{at least one dominant}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.',
    partNumber: 4,
    partTitle: 'Probability in Genetics',
  },

  // Part 5: Pedigree Analysis
  {
    id: 'bmen-ent-5a',
    question:
      'An affected woman and an unaffected man have four sons, all affected, and three daughters, all unaffected. The pattern repeats in other branches of the family, where mostly males are affected. Which mode of inheritance is most consistent?',
    options: [
      'Autosomal dominant',
      'X-linked recessive',
      'Y-linked',
      'X-linked dominant',
    ],
    correctIndex: 1,
    explanation:
      'An $X^aX^a$ mother gives $X^a$ to every son, so all sons are affected, while daughters also get $X^A$ from the father and are unaffected carriers. Y-linked traits pass from fathers, and an X-linked dominant trait in the mother would affect daughters too.',
    partNumber: 5,
    partTitle: 'Pedigree Analysis',
  },
  {
    id: 'bmen-ent-5b',
    question:
      'An unaffected woman whose sister has an autosomal recessive disorder (both of their parents are unaffected) marries an affected man. What is the probability that their first child has the disorder?',
    options: [
      '$\\frac{1}{3}$',
      '$\\frac{1}{6}$',
      '$\\frac{1}{2}$',
      '$\\frac{2}{3}$',
    ],
    correctIndex: 0,
    explanation:
      'The parents must both be carriers, so the unaffected woman is a carrier with probability $\\frac{2}{3}$. The affected man (aa) always passes a, and a carrier woman passes a half the time: $\\frac{2}{3} \\times \\frac{1}{2} \\times 1 = \\frac{1}{3}$.',
    partNumber: 5,
    partTitle: 'Pedigree Analysis',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bmen-ent-6a',
    question:
      'In dogs, black (B) is dominant to brown (b) and solid coat (S) is dominant to spotted (s); the genes assort independently. A BbSs dog is crossed with a bbSs dog. What fraction of the puppies are black and spotted?',
    options: [
      '$\\frac{1}{4}$',
      '$\\frac{3}{8}$',
      '$\\frac{3}{16}$',
      '$\\frac{1}{8}$',
    ],
    correctIndex: 3,
    explanation:
      'Bb × bb gives $P(B\\_) = \\frac{1}{2}$, and Ss × Ss gives $P(ss) = \\frac{1}{4}$, so $P = \\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$. $\\frac{3}{16}$ wrongly uses $\\frac{3}{4}$ for black.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bmen-ent-6b',
    question:
      'Each puppy from a certain cross has a $\\frac{1}{8}$ chance of being brown and spotted. If the pair has two puppies, what is the probability that neither is brown and spotted?',
    options: [
      '$\\frac{1}{64}$',
      '$\\frac{7}{32}$',
      '$\\frac{49}{64}$',
      '$\\frac{7}{8}$',
    ],
    correctIndex: 2,
    explanation:
      'Each puppy is not brown and spotted with probability $\\frac{7}{8}$, and the two puppies are independent, so $\\frac{7}{8} \\times \\frac{7}{8} = \\frac{49}{64}$. $\\frac{7}{32}$ is the chance that exactly one is.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bmen-ent-7a',
    question:
      'A cross is predicted to give a 3:1 ratio. Of 300 offspring, 210 show the dominant phenotype and 90 the recessive. The critical value for df = 1 at p = 0.05 is 3.84. Which result and conclusion are correct?',
    options: [
      '$\\chi^2 = 1.0$, so we fail to reject the 3:1 model',
      '$\\chi^2 = 4.0$, so we reject the 3:1 model',
      '$\\chi^2 = 4.0$, so we fail to reject the 3:1 model',
      '$\\chi^2 = 30.0$, so we reject the 3:1 model',
    ],
    correctIndex: 1,
    explanation:
      'Expected counts are 225 and 75. $\\chi^2 = \\frac{(210-225)^2}{225} + \\frac{(90-75)^2}{75} = 1 + 3 = 4.0$, which exceeds 3.84, so the deviation is larger than chance would usually produce and the 3:1 model is rejected. 1.0 uses only the first class.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bmen-ent-7b',
    question:
      'A dihybrid cross is predicted to give 9:3:3:1, and the chi-square value from the four phenotype classes is 6.2. Critical values at p = 0.05 are 3.84 (df 1), 5.99 (df 2), 7.81 (df 3) and 9.49 (df 4). Which conclusion is correct?',
    options: [
      'df = 1, so we reject the 9:3:3:1 model',
      'df = 2, so we reject the 9:3:3:1 model',
      'df = 3, so we fail to reject the 9:3:3:1 model',
      'df = 4, so the data fit the 9:3:3:1 model',
    ],
    correctIndex: 2,
    explanation:
      'Degrees of freedom = number of classes − 1 = 3. Since $6.2 < 7.81$, we fail to reject the model; the data fit 9:3:3:1. Using the wrong df (for example 2, with 5.99) would wrongly reject it.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the mendelian-genetics topic.
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
    { partNumber: 1, partTitle: 'Mendel\'s Laws' },
    { partNumber: 2, partTitle: 'Monohybrid Crosses' },
    { partNumber: 3, partTitle: 'Dihybrid Crosses' },
    { partNumber: 4, partTitle: 'Probability in Genetics' },
    { partNumber: 5, partTitle: 'Pedigree Analysis' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
