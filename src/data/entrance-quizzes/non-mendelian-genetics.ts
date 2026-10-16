/**
 * Entrance Quiz — Non-Mendelian Genetics (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Incomplete & Codominance (telling the patterns apart, crosses)
 *  2 — Multiple Alleles & Polygenic (ABO exclusion, additive classes)
 *  3 — Epistasis (recessive and dominant epistasis crosses)
 *  4 — Sex-Linked Traits (X-linked probability, mitochondrial variation)
 *  5 — Environmental Effects on Phenotype (temperature-sensitive enzyme, nutrition)
 *  6 — Non-Mendelian Genetics: Problem-Solving Workshop (chi-square, interpreting results)
 *  7 — Non-Mendelian Genetics: Synthesis & AP Review (combined probability, organelle vs X-linked)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Incomplete & Codominance
  {
    id: 'bnmg-ent-1a',
    question:
      'From a distance, the petals of a heterozygous flower look pink. Under a microscope, every petal cell is either fully red or fully white. Which pattern of inheritance does this show?',
    options: [
      'Incomplete dominance, since the flower looks pink',
      'Complete dominance, since red is the stronger allele',
      'Epistasis, since one color gene masks a second gene',
      'Codominance, since both colors are expressed',
    ],
    correctIndex: 3,
    explanation:
      'In codominance the heterozygote expresses both parental phenotypes at full strength, like the red and white hairs of a roan cow. Incomplete dominance would give uniformly intermediate cells, each with a reduced amount of pigment.',
    partNumber: 1,
    partTitle: 'Incomplete & Codominance',
  },
  {
    id: 'bnmg-ent-1b',
    question:
      'In snapdragons, red ($C^RC^R$) × white ($C^WC^W$) gives pink heterozygotes. A grower wants the highest possible proportion of pink plants from one cross. Which cross should she use?',
    options: ['Pink × pink', 'Red × white', 'Pink × white', 'Pink × red'],
    correctIndex: 1,
    explanation:
      'Red × white gives only $C^RC^W$ offspring, so 100% are pink. Pink × pink gives 1 red : 2 pink : 1 white (50% pink), and pink × white or pink × red gives 50% pink.',
    partNumber: 1,
    partTitle: 'Incomplete & Codominance',
  },

  // Part 2: Multiple Alleles & Polygenic
  {
    id: 'bnmg-ent-2a',
    question:
      'A child has type O blood and the mother has type A blood. Which man could not be the child\'s biological father?',
    options: [
      'A man with type A blood',
      'A man with type B blood',
      'A man with type O blood',
      'A man with type AB blood',
    ],
    correctIndex: 3,
    explanation:
      'A type O child is $ii$ and must receive $i$ from each parent. A type AB man ($I^AI^B$) has no $i$ allele to pass on, so he is excluded. Type A or B men could be $I^Ai$ or $I^Bi$, and a type O man is $ii$.',
    partNumber: 2,
    partTitle: 'Multiple Alleles & Polygenic',
  },
  {
    id: 'bnmg-ent-2b',
    question:
      'A trait is controlled by two unlinked genes with additive alleles (capital letters contribute, lowercase do not). In the cross AaBb × AaBb, what fraction of offspring have exactly three contributing alleles?',
    options: [
      '$\\frac{1}{16}$',
      '$\\frac{3}{16}$',
      '$\\frac{1}{4}$',
      '$\\frac{3}{8}$',
    ],
    correctIndex: 2,
    explanation:
      'The 16 combinations fall into 1 : 4 : 6 : 4 : 1 by number of contributing alleles (0 to 4). Exactly three corresponds to 4 of 16 (AABb, AaBB, each twice), which is $\\frac{1}{4}$. $\\frac{3}{8}$ is the share with exactly two.',
    partNumber: 2,
    partTitle: 'Multiple Alleles & Polygenic',
  },

  // Part 3: Epistasis
  {
    id: 'bnmg-ent-3a',
    question:
      'In Labradors, B (black) is dominant to b (chocolate), and any ee dog is yellow because it cannot deposit dark pigment in its hair. Can two yellow Labradors have a black puppy?',
    options: [
      'Yes, if both parents carry the B allele',
      'Yes, if one parent is BB and the other is bb',
      'No, since every pup gets e from both parents and is ee',
      'No, since yellow is dominant to black and chocolate',
    ],
    correctIndex: 2,
    explanation:
      'Yellow dogs are ee, so every puppy gets e from each parent and is ee, which hides the B gene and makes every puppy yellow. Their B alleles still affect nose color but cannot produce a black coat.',
    partNumber: 3,
    partTitle: 'Epistasis',
  },
  {
    id: 'bnmg-ent-3b',
    question:
      'In summer squash, any W_ plant has white fruit; in ww plants, Y_ gives yellow fruit and yy gives green. The genes assort independently. In the cross wwYy × WwYy, what fraction of the offspring have yellow fruit?',
    options: [
      '$\\frac{1}{2}$',
      '$\\frac{3}{8}$',
      '$\\frac{3}{16}$',
      '$\\frac{1}{8}$',
    ],
    correctIndex: 1,
    explanation:
      'Yellow requires ww (probability $\\frac{1}{2}$ from ww × Ww) and Y_ (probability $\\frac{3}{4}$ from Yy × Yy): $\\frac{1}{2} \\times \\frac{3}{4} = \\frac{3}{8}$. $\\frac{3}{16}$ would be the share from a WwYy × WwYy cross.',
    partNumber: 3,
    partTitle: 'Epistasis',
  },

  // Part 4: Sex-Linked Traits
  {
    id: 'bnmg-ent-4a',
    question:
      'Red-green color blindness is X-linked recessive. A color-blind man ($X^cY$) and a carrier woman ($X^CX^c$) have a daughter. What is the probability that she is color-blind?',
    options: ['0', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '1'],
    correctIndex: 2,
    explanation:
      'A daughter always receives her father\'s only X, here $X^c$. From her carrier mother she receives $X^c$ half the time, so she is $X^cX^c$ (color-blind) with probability $\\frac{1}{2}$. $\\frac{1}{4}$ is the chance for a child of unknown sex.',
    partNumber: 4,
    partTitle: 'Sex-Linked Traits',
  },
  {
    id: 'bnmg-ent-4b',
    question:
      'Several children of the same mother all inherited her mitochondrial DNA mutation, yet one is severely affected and another has only mild symptoms. Which explanation is best supported?',
    options: [
      'Mitochondria sort at random, so eggs got different shares of mutant ones',
      'The father contributed normal mitochondria to some of the children but not others',
      'The mutation is X-linked, so only the sons received two copies of the allele',
      'The mild child inherited one dominant nuclear allele that cancels the mutation',
    ],
    correctIndex: 0,
    explanation:
      'A cell can hold both normal and mutant mitochondrial DNA, and mitochondria are divided at random when eggs form, so siblings can inherit different proportions of mutant mitochondria. Sperm mitochondria are not passed on, and mitochondrial DNA is not X-linked.',
    partNumber: 4,
    partTitle: 'Sex-Linked Traits',
  },

  // Part 5: Environmental Effects on Phenotype
  {
    id: 'bnmg-ent-5a',
    question:
      'A Himalayan rabbit normally has dark ears and a white body. Fur is shaved from one ear, and the ear is kept wrapped at core body temperature while the fur regrows. What color will the new ear fur most likely be?',
    options: [
      'White, since warmth stops the coat enzyme from working',
      'Dark, since the ear allele for fur color stays the same',
      'Dark, since shaving triggers a mutation in the ear cells',
      'Patchy white and dark, since some ear cells carry new alleles',
    ],
    correctIndex: 0,
    explanation:
      'The Himalayan allele codes for a temperature-sensitive tyrosinase that makes pigment only in cool skin. Kept warm, the ear makes no melanin, so the regrown fur is white even though the genotype has not changed.',
    partNumber: 5,
    partTitle: 'Environmental Effects on Phenotype',
  },
  {
    id: 'bnmg-ent-5b',
    question:
      'In many countries, average adult height rose by several centimeters over a few generations during the 1900s. Which explanation is best supported?',
    options: [
      'New alleles for height spread quickly through each population',
      'Taller people had many more children, rapidly changing the gene pool',
      'Better nutrition let more people reach the height their genes allow',
      'Height is not a genetic trait, so it changes with each generation',
    ],
    correctIndex: 2,
    explanation:
      'Allele frequencies cannot change that much in a few generations, so the shift reflects the environment: better childhood nutrition and health. Height is still strongly genetic; the environment shifts where each person falls within their genetic range.',
    partNumber: 5,
    partTitle: 'Environmental Effects on Phenotype',
  },

  // Part 6: Non-Mendelian Genetics: Problem-Solving Workshop
  {
    id: 'bnmg-ent-6a',
    question:
      'A 9 : 7 ratio of purple to white is predicted, and 160 offspring are scored: 96 purple and 64 white. The critical value for df = 1 at p = 0.05 is 3.84. Which result is correct?',
    options: [
      '$\\chi^2 \\approx 0.91$; fail to reject the 9 : 7 hypothesis',
      '$\\chi^2 \\approx 0.91$; reject the 9 : 7 hypothesis',
      '$\\chi^2 \\approx 0.40$; fail to reject the 9 : 7 hypothesis',
      '$\\chi^2 = 12.0$; reject the 9 : 7 hypothesis',
    ],
    correctIndex: 0,
    explanation:
      'Expected counts are $160 \\times \\frac{9}{16} = 90$ and $160 \\times \\frac{7}{16} = 70$. $\\chi^2 = \\frac{36}{90} + \\frac{36}{70} \\approx 0.40 + 0.51 = 0.91$, below 3.84, so the data are consistent with 9 : 7. 0.40 counts only the purple class.',
    partNumber: 6,
    partTitle: 'Non-Mendelian Genetics: Problem-Solving Workshop',
  },
  {
    id: 'bnmg-ent-6b',
    question:
      'A student\'s chi-square value is 0.5, well below the critical value of 3.84, and she writes: "This proves my 9 : 7 hypothesis is true." Which correction is accurate?',
    options: [
      'A low value means the hypothesis is false and must be rejected',
      'The data fit 9:7, but the test cannot prove it',
      'The test can prove a hypothesis only when the value is exactly 0',
      'The hypothesis is proved only if the value exceeds 3.84 instead',
    ],
    correctIndex: 1,
    explanation:
      'A chi-square value below the critical value means we fail to reject the null hypothesis: the deviation could be chance, so the data fit the model. The test never proves a hypothesis, and a value above the critical value would lead to rejection.',
    partNumber: 6,
    partTitle: 'Non-Mendelian Genetics: Problem-Solving Workshop',
  },

  // Part 7: Non-Mendelian Genetics: Synthesis & AP Review
  {
    id: 'bnmg-ent-7a',
    question:
      'A woman with type A blood ($I^Ai$) who is a carrier for hemophilia ($X^HX^h$) has children with a type B man ($I^Bi$) with normal clotting ($X^HY$). What is the probability that their first child is a son with type O blood and hemophilia?',
    options: [
      '$\\frac{1}{16}$',
      '$\\frac{1}{32}$',
      '$\\frac{1}{8}$',
      '$\\frac{1}{4}$',
    ],
    correctIndex: 0,
    explanation:
      'P(type O, $ii$) = $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. P(son with hemophilia, $X^hY$) = $\\frac{1}{2}$ (Y from father) $\\times \\frac{1}{2}$ ($X^h$ from mother) = $\\frac{1}{4}$. The genes are independent, so $\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$.',
    partNumber: 7,
    partTitle: 'Non-Mendelian Genetics: Synthesis & AP Review',
  },
  {
    id: 'bnmg-ent-7b',
    question:
      'A rare trait is passed from affected mothers to their children. Which observation would best show that the trait is mitochondrial rather than X-linked recessive?',
    options: [
      'Affected mothers have affected sons, and the trait skips some generations',
      'More males than females are affected across every generation of the family',
      'Affected fathers pass the trait to all of their daughters but none of their sons',
      'Daughters of affected mothers are affected, and affected fathers pass it to no one',
    ],
    correctIndex: 3,
    explanation:
      'Mitochondria come from the egg, so an affected mother passes the trait to sons and daughters alike, and fathers never pass it on. In X-linked recessive inheritance, daughters of an affected mother usually receive a normal X from their father and are unaffected carriers.',
    partNumber: 7,
    partTitle: 'Non-Mendelian Genetics: Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the non-mendelian-genetics topic.
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
    { partNumber: 1, partTitle: 'Incomplete & Codominance' },
    { partNumber: 2, partTitle: 'Multiple Alleles & Polygenic' },
    { partNumber: 3, partTitle: 'Epistasis' },
    { partNumber: 4, partTitle: 'Sex-Linked Traits' },
    { partNumber: 5, partTitle: 'Environmental Effects on Phenotype' },
    { partNumber: 6, partTitle: 'Non-Mendelian Genetics: Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Non-Mendelian Genetics: Synthesis & AP Review' },
  ]
}
