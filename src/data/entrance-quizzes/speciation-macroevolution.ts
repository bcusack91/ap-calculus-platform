/**
 * Entrance Quiz — Speciation & Macroevolution (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Species Concepts (gene exchange vs appearance, sterile hybrids)
 *  2 — Allopatric Speciation (dispersal vs vicariance, what speeds divergence)
 *  3 — Sympatric Speciation (allopolyploid counts, temporal shift without a barrier)
 *  4 — Reproductive Isolation (mechanical vs behavioral, postzygotic barriers)
 *  5 — Macroevolution Patterns (extinction percentages, small-population risk)
 *  6 — Problem-Solving Workshop (chi-square on mate choice, null hypothesis)
 *  7 — AP Review (isolation as a by-product, balanced speciation and extinction)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Species Concepts
  {
    id: 'bspec-ent-1a',
    question:
      'Two bird populations look nearly identical. Where their ranges overlap, the males sing different songs, and the birds very rarely interbreed. How should they be classified under the biological species concept?',
    options: [
      'As separate species, since few genes pass between them',
      'As one species, since they look nearly identical',
      'As one species, since they could likely mate in captivity',
      'As two subspecies, since their ranges only partly overlap',
    ],
    correctIndex: 0,
    explanation:
      'The test is whether genes flow between populations through fertile offspring in nature. These birds rarely interbreed where they meet, so they are separate species despite looking alike, as with eastern and western meadowlarks.',
    partNumber: 1,
    partTitle: 'Species Concepts',
  },
  {
    id: 'bspec-ent-1b',
    question:
      'Species X has 2n = 40 and species Y has 2n = 38. Their hybrid has 39 chromosomes, grows into a healthy adult, but makes almost no functional gametes. What does this show?',
    options: [
      'X and Y are one species, since the hybrid is healthy',
      'X and Y are separate species, since hybrids cannot pass on genes',
      'The hybrid is a new species, since it has its own chromosome number',
      'X and Y are one species, since they produce viable offspring',
    ],
    correctIndex: 1,
    explanation:
      'The hybrid is viable but not fertile: its unmatched chromosomes cannot pair in meiosis. Because alleles cannot flow between X and Y through such hybrids, X and Y are separate species, as horses and donkeys are.',
    partNumber: 1,
    partTitle: 'Species Concepts',
  },

  // Part 2: Allopatric Speciation
  {
    id: 'bspec-ent-2a',
    question:
      'Which scenario starts allopatric speciation by dispersal rather than by vicariance?',
    options: [
      'A river changes course and splits a population of beetles',
      'Rising seas turn the hilltops of a peninsula into islands',
      'A few seeds raft over a strait to found a new population',
      'A mountain range slowly rises through the range of a toad',
    ],
    correctIndex: 2,
    explanation:
      'In dispersal, a few individuals cross an existing barrier and found a new population, often with a founder effect. In vicariance, a change in the landscape divides a population that was already there, as rivers, rising seas and mountains do.',
    partNumber: 2,
    partTitle: 'Allopatric Speciation',
  },
  {
    id: 'bspec-ent-2b',
    question:
      'Four populations have each been cut off from their parent population. Which one is most likely to become a new species fastest?',
    options: [
      'A large population living in an environment like the parent\'s',
      'A large population that still receives a few migrants each year',
      'A small population that rejoins the parent after a few generations',
      'A small population living in an environment very different from the parent\'s',
    ],
    correctIndex: 3,
    explanation:
      'Small populations change quickly through drift and founder effects, and a very different environment imposes different selection. Migrants and early reunion bring gene flow that erases differences, and similar environments give little divergent selection.',
    partNumber: 2,
    partTitle: 'Allopatric Speciation',
  },

  // Part 3: Sympatric Speciation
  {
    id: 'bspec-ent-3a',
    question:
      'Species A (2n = 18) and species B (2n = 8) form a sterile hybrid, which later doubles its chromosome number and becomes fertile. How many chromosomes are in the body cells of the new fertile plant?',
    options: ['13', '26', '39', '52'],
    correctIndex: 1,
    explanation:
      'The hybrid receives one gamete from each species: 9 + 4 = 13 chromosomes, which cannot pair. Doubling gives 26, so every chromosome has a homolog and meiosis works. 13 is the sterile hybrid, and 52 doubles twice.',
    partNumber: 3,
    partTitle: 'Sympatric Speciation',
  },
  {
    id: 'bspec-ent-3b',
    question:
      'In one meadow, part of a wildflower population begins flowering a month later than the rest because of a heritable change, so the two groups rarely exchange pollen. Over time they diverge into two species. How is this best classified?',
    options: [
      'Sympatric speciation through a shift in timing',
      'Allopatric speciation, since the groups are separated in time',
      'Allopatric speciation, since a barrier must have split the meadow',
      'No speciation, since both groups still live in the same meadow',
    ],
    correctIndex: 0,
    explanation:
      'The groups share one area with no geographic barrier, so this is sympatric speciation. Gene flow was cut by temporal isolation, a reproductive barrier, not by geography. Living in one place does not prevent speciation if gene flow stops.',
    partNumber: 3,
    partTitle: 'Sympatric Speciation',
  },

  // Part 4: Reproductive Isolation
  {
    id: 'bspec-ent-4a',
    question:
      'Males of two damselfly species readily attempt to mate with females of the other species, but the male clasping organs do not fit the female\'s body, so no transfer of sperm occurs. Which barrier is acting?',
    options: [
      'Behavioral isolation',
      'Gametic isolation',
      'Mechanical isolation',
      'Temporal isolation',
    ],
    correctIndex: 2,
    explanation:
      'They try to mate, but their reproductive structures are incompatible, which is mechanical isolation. Behavioral isolation would mean they do not try to mate, and gametic isolation would mean sperm and egg meet but cannot fuse.',
    partNumber: 4,
    partTitle: 'Reproductive Isolation',
  },
  {
    id: 'bspec-ent-4b',
    question:
      'Eggs of one frog species are fertilized by sperm of a related species, and the embryos begin developing, but nearly all hybrid tadpoles die before metamorphosis. How is this barrier classified?',
    options: [
      'Prezygotic, by gametic isolation',
      'Postzygotic, by hybrid breakdown',
      'Prezygotic, by behavioral isolation',
      'Postzygotic, by reduced hybrid viability',
    ],
    correctIndex: 3,
    explanation:
      'A zygote formed, so the barrier is postzygotic, and the hybrids die during development, which is reduced hybrid viability. Hybrid breakdown affects the offspring of fertile first-generation hybrids.',
    partNumber: 4,
    partTitle: 'Reproductive Isolation',
  },

  // Part 5: Macroevolution Patterns
  {
    id: 'bspec-ent-5a',
    question:
      'During a mass extinction, a group of 250 marine genera loses 200 genera while 10 new genera arise. What percentage of the original genera went extinct?',
    options: ['80%', '24%', '76%', '95%'],
    correctIndex: 0,
    explanation:
      'Percent lost = genera lost ÷ original number = $200 \\div 250 = 80\\%$. Subtracting the new genera first (190 ÷ 250) gives 76%, and 24% is the share of the original that remains with new genera added ($60 \\div 250$).',
    partNumber: 5,
    partTitle: 'Macroevolution Patterns',
  },
  {
    id: 'bspec-ent-5b',
    question:
      'Habitat fragmentation turns one large population of a forest frog into many small, isolated populations. Why does this raise the risk that the species will go extinct?',
    options: [
      'Small populations evolve new traits too fast to survive',
      'They lose variation to drift and inbreeding',
      'Small populations tend to speciate, so the original species disappears',
      'Small populations stop reproducing until they are reconnected',
    ],
    correctIndex: 1,
    explanation:
      'A small population carries less genetic variation, loses alleles to drift, becomes inbred, and can be wiped out by a single disease or disaster. Fragmentation multiplies these risks across many small groups.',
    partNumber: 5,
    partTitle: 'Macroevolution Patterns',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bspec-ent-6a',
    question:
      'In a mate-choice test, 100 matings are recorded between two groups raised on different foods: 62 are same-group and 38 are mixed-group. Random mating predicts 50 of each, and the critical value for df = 1 at p = 0.05 is 3.84. Which result is correct?',
    options: [
      '$\\chi^2 = 2.88$, so random mating is not rejected',
      '$\\chi^2 = 5.76$, so random mating is not rejected',
      '$\\chi^2 = 5.76$, so random mating is rejected',
      '$\\chi^2 = 24$, so random mating is rejected',
    ],
    correctIndex: 2,
    explanation:
      '$\\chi^2 = \\frac{(62-50)^2}{50} + \\frac{(38-50)^2}{50} = 2.88 + 2.88 = 5.76$, which exceeds 3.84, so the groups prefer their own kind more than chance would explain. 2.88 counts only one category.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bspec-ent-6b',
    question:
      'A researcher raises two groups of beetles on different beans for 50 generations and then records same-group and mixed-group matings. What is the null hypothesis for the chi-square test?',
    options: [
      'Beetles prefer mates raised on their own type of bean',
      'Beetles raised on different beans cannot mate at all',
      'Bean type changes the body size of the beetles over time',
      'Pairs form at random with respect to rearing bean',
    ],
    correctIndex: 3,
    explanation:
      'The null hypothesis states no preference, so same-group and mixed-group matings are equally likely; the expected counts come from it. A preference for own-group mates is the alternative the experiment tests.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bspec-ent-7a',
    question:
      'A student writes: "Isolated populations evolve mating barriers so that they can become new species." Which correction is accurate?',
    options: [
      'They accumulate as side effects of divergence once gene flow stops',
      'Barriers appear only after a population decides to stop mating',
      'Barriers form first, and then gene flow between the groups stops',
      'Barriers arise only in plants, through changes in chromosome number',
    ],
    correctIndex: 0,
    explanation:
      'Evolution has no goal. Once gene flow stops, selection, drift and mutation change each population independently, and differences in mating signals, timing or chromosomes accumulate as by-products, as in the fruit flies raised on different foods.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bspec-ent-7b',
    question:
      'For several million years, a clade has had a speciation rate of 0.3 new species per species per million years and an extinction rate of 0.3. Which prediction is best supported?',
    options: [
      'Species will keep accumulating steadily',
      'The clade will soon go extinct',
      'Species numbers will hold about steady',
      'No new species will form in the clade',
    ],
    correctIndex: 2,
    explanation:
      'Diversity changes by speciation minus extinction. With equal rates, species are gained about as fast as they are lost, so the number stays roughly constant even though new species keep forming.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the speciation topic.
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
    { partNumber: 1, partTitle: 'Species Concepts' },
    { partNumber: 2, partTitle: 'Allopatric Speciation' },
    { partNumber: 3, partTitle: 'Sympatric Speciation' },
    { partNumber: 4, partTitle: 'Reproductive Isolation' },
    { partNumber: 5, partTitle: 'Macroevolution Patterns' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
