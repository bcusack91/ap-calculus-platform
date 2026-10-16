/**
 * Entrance Quiz — Population & Community Ecology (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Population Growth (dN/dt from b and d, doubling time)
 *  2 — Carrying Capacity (logistic calculation, births equal deaths at K)
 *  3 — Energy and Reproductive Strategies (stored energy and reproduction, food supply and output)
 *  4 — Community Ecology (trophic cascades, commensalism)
 *  5 — Biodiversity (Simpson's index, genetic uniformity)
 *  6 — Problem-Solving Workshop (mark-recapture estimate and its assumptions)
 *  7 — AP Review (diversity is not immunity, interaction signs)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Population Growth
  {
    id: 'bpce-ent-1a',
    question:
      'A population of 800 has a per-capita birth rate of 0.25 per year and a per-capita death rate of 0.10 per year, with no migration. What is the population growth rate, dN/dt?',
    options: [
      '120 individuals per year',
      '0.15 individuals per year',
      '200 individuals per year',
      '280 individuals per year',
    ],
    correctIndex: 0,
    explanation:
      '$r = b - d = 0.25 - 0.10 = 0.15$ per year, and $dN/dt = rN = 0.15 \\times 800 = 120$ individuals per year. 0.15 is the per-capita rate, 200 counts births only, and 280 adds the two rates.',
    partNumber: 1,
    partTitle: 'Population Growth',
  },
  {
    id: 'bpce-ent-1b',
    question:
      'Two bacterial cultures grow exponentially with the same $r_{max}$. Culture A starts with 1,000 cells and culture B with 100,000 cells. Which culture doubles in size faster?',
    options: [
      'Culture A, since a small population has more room to grow',
      'Neither, since equal $r_{max}$ means they take equal time to grow twofold',
      'Culture B, since it adds many more cells every hour',
      'Culture A, since its cells divide faster when crowding is low',
    ],
    correctIndex: 1,
    explanation:
      'Under exponential growth the doubling time depends only on $r_{max}$. Culture B adds more cells per hour, but it also needs more cells to double, so the two effects cancel.',
    partNumber: 1,
    partTitle: 'Population Growth',
  },

  // Part 2: Carrying Capacity
  {
    id: 'bpce-ent-2a',
    question:
      'A population grows logistically with $r_{max} = 0.4$ per year and K = 1,200. What is dN/dt when N = 900?',
    options: [
      '120 per year',
      '270 per year',
      '90 per year',
      '360 per year',
    ],
    correctIndex: 2,
    explanation:
      '$dN/dt = (0.4)(900)\\frac{(1{,}200 - 900)}{1{,}200} = 360 \\times 0.25 = 90$ per year. 360 ignores the braking term, and 270 uses the fraction of K already filled (0.75) instead of the fraction still available.',
    partNumber: 2,
    partTitle: 'Carrying Capacity',
  },
  {
    id: 'bpce-ent-2b',
    question:
      'A population has leveled off at its carrying capacity. Which statement describes what is happening?',
    options: [
      'Births have stopped completely',
      'Deaths have stopped, so the number stays fixed',
      'Growth rate is at its maximum value',
      'Per-capita births match deaths',
    ],
    correctIndex: 3,
    explanation:
      'At K, density-dependent factors have lowered the birth rate and raised the death rate until they are equal, so r = 0. Individuals still reproduce and die. The growth rate is greatest at K/2, not at K.',
    partNumber: 2,
    partTitle: 'Carrying Capacity',
  },

  // Part 3: Energy and Reproductive Strategies
  {
    id: 'bpce-ent-3a',
    question:
      'A biennial plant spends its first year growing leaves and storing starch in a large root, then flowers, sets seed and dies in its second year. Which explanation of this pattern is best supported?',
    options: [
      'Reproduction is delayed until the plant has stored enough energy to fund it',
      'Its flowers can open only after the plant has been through two winters',
      'Storing starch is a form of reproduction, so it reproduces both years',
      'The plant reproduces asexually in year one and sexually in year two',
    ],
    correctIndex: 0,
    explanation:
      'Energy is limited, so energy spent on reproduction must be acquired first. The biennial accumulates a net energy gain in its root during year one and spends it on flowering and seeds in year two.',
    partNumber: 3,
    partTitle: 'Energy and Reproductive Strategies',
  },
  {
    id: 'bpce-ent-3b',
    question:
      'In a songbird species, females lay more eggs in years when insects are plentiful than in years when insects are scarce. Which explanation is best supported?',
    options: [
      'Females lay more eggs then because predators are scarcer',
      'Extra energy intake in good seasons funds more reproduction',
      'Scarce food makes females lay more eggs to make up for losses',
      'Insects carry hormones that directly trigger extra egg production',
    ],
    correctIndex: 1,
    explanation:
      'When energy intake exceeds energy use, the extra energy can go into storage, growth and increased reproductive output; when intake falls short, reproduction declines.',
    partNumber: 3,
    partTitle: 'Energy and Reproductive Strategies',
  },

  // Part 4: Community Ecology
  {
    id: 'bpce-ent-4a',
    question:
      'After wolves were reintroduced to a park, elk numbers fell and elk spent less time in stream valleys. Willows along the streams then recovered. What effect did the wolves have on the willows?',
    options: [
      'A direct negative effect, since wolves trample the willows',
      'No effect, since wolves do not eat willows',
      'An indirect positive effect, through reduced elk browsing',
      'A direct positive effect, since wolves fertilize the willows',
    ],
    correctIndex: 2,
    explanation:
      'This is a trophic cascade: the predator suppresses the herbivore, which releases the plants from browsing. Wolves affect willows two links away, even though they never eat them.',
    partNumber: 4,
    partTitle: 'Community Ecology',
  },
  {
    id: 'bpce-ent-4b',
    question:
      'Orchids grow on the high branches of rainforest trees, where they get more light. They take no water or nutrients from the trees, and the trees are not harmed. How is this interaction classified?',
    options: [
      'Mutualism, since both species benefit from it',
      'Parasitism, since the orchid takes from the tree',
      'Competition, since both species need sunlight',
      'Commensalism, since only the orchid is affected',
    ],
    correctIndex: 3,
    explanation:
      'One species benefits (+) and the other is unaffected (0), which is commensalism. The tree gains nothing, so it is not mutualism, and it loses nothing, so it is not parasitism.',
    partNumber: 4,
    partTitle: 'Community Ecology',
  },

  // Part 5: Biodiversity
  {
    id: 'bpce-ent-5a',
    question:
      'A sample of 100 organisms contains 50 of species A, 30 of species B and 20 of species C. Using $D = 1 - \\sum (p_i)^2$, what is Simpson\'s diversity index?',
    options: ['0.62', '0.38', '0.67', '0.80'],
    correctIndex: 0,
    explanation:
      '$\\sum (p_i)^2 = 0.5^2 + 0.3^2 + 0.2^2 = 0.25 + 0.09 + 0.04 = 0.38$, so $D = 1 - 0.38 = 0.62$. Reporting 0.38 forgets to subtract from 1, and 0.67 would apply only if the three species were equally common.',
    partNumber: 5,
    partTitle: 'Biodiversity',
  },
  {
    id: 'bpce-ent-5b',
    question:
      'In 1970, a fungal disease destroyed a large part of the corn crop across the United States. Which explanation best accounts for such widespread losses?',
    options: [
      'The fungus spread mainly through irrigation water',
      'Most plants shared one trait that left them susceptible',
      'Fungicides were not yet available to farmers',
      'Corn plants were weakened by an unusually cold spring',
    ],
    correctIndex: 1,
    explanation:
      'Low genetic diversity left the crop without resistant individuals: most plants shared the same susceptibility, so one pathogen could spread through all of them. A genetically diverse crop is more likely to include plants that withstand a new pressure.',
    partNumber: 5,
    partTitle: 'Biodiversity',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bpce-ent-6a',
    question:
      'Biologists tag and release 120 lizards. Later they capture 90 lizards, and 15 of them are tagged. Using $N = \\frac{MC}{R}$, what is the estimated population size?',
    options: ['20', '105', '720', '1,800'],
    correctIndex: 2,
    explanation:
      '$N = \\frac{(120)(90)}{15} = \\frac{10{,}800}{15} = 720$. The recapture fraction is $15 \\div 90 = 1/6$, so the 120 tagged lizards are about one-sixth of the population. Putting R in the numerator gives 1,800.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bpce-ent-6b',
    question:
      'In a mark-recapture study, animals that were caught once learn to approach the traps, so marked animals are more likely than unmarked ones to be caught again. How does this bias the estimate $N = \\frac{MC}{R}$?',
    options: [
      'N is overestimated, since R is too small',
      'N is not affected, since C stays the same',
      'N is overestimated, since M becomes too large',
      'N is too low, since R is inflated',
    ],
    correctIndex: 3,
    explanation:
      'Trap-happy marked animals make up too large a share of the second sample, so R is too high. Because R is in the denominator, a larger R gives a smaller N, underestimating the population.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bpce-ent-7a',
    question:
      'A student claims that a species-rich forest cannot be harmed by an invasive insect because it is so diverse. Which correction is accurate?',
    options: [
      'Diversity protects against native pests but not against invaders',
      'Diversity improves resistance and recovery but does not prevent harm',
      'Diversity slows recovery, since more species compete for space',
      'The forest is protected as long as it contains a keystone species',
    ],
    correctIndex: 1,
    explanation:
      'Greater diversity tends to make a community more resistant to disturbance and better able to recover, because other species can fill lost roles. It does not make the community invulnerable to fire, drought or invasive species.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bpce-ent-7b',
    question:
      'Which interaction has the same pattern of effects on the two species (+/−) as predation?',
    options: [
      'Commensalism',
      'Mutualism',
      'Parasitism',
      'Competition',
    ],
    correctIndex: 2,
    explanation:
      'Predation, herbivory and parasitism are all +/− interactions: one organism gains at the other\'s expense. Commensalism is +/0, mutualism +/+ and competition −/−.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the population-community-ecology topic.
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
    { partNumber: 1, partTitle: 'Population Growth' },
    { partNumber: 2, partTitle: 'Carrying Capacity' },
    { partNumber: 3, partTitle: 'Energy and Reproductive Strategies' },
    { partNumber: 4, partTitle: 'Community Ecology' },
    { partNumber: 5, partTitle: 'Biodiversity' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
