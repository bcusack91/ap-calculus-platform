/**
 * Entrance Quiz — Externalities & Public Goods (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mext-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A coastal town is considering a tsunami warning siren that would alert every resident at once. Why is a private firm unlikely to supply it?',
    options: ['Each alert leaves less warning for other residents', 'Residents could benefit from it without paying', 'Residents would overuse it if it were offered free', 'The siren\'s cost would rise with each new resident'],
    correctIndex: 1,
    explanation: 'The siren is a public good: no one can be kept from hearing it, so each resident can free ride on others\' payments. A firm could not collect enough to cover its cost even if the siren is worth it to the town.',
  },
  {
    id: 'mext-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A chemical plant\'s production harms a river that downstream farms rely on. Compared with the socially efficient outcome, the unregulated market',
    options: ['produces too little at a price that is too high', 'produces too much at a price that is too high', 'produces the efficient amount at too low a price', 'produces too much at a price that is too low'],
    correctIndex: 3,
    explanation: 'Firms ignore the harm to the farms, so marginal social cost is above marginal private cost. The market therefore makes more than the efficient quantity, and buyers pay a price that leaves out the river damage.',
  },
  {
    id: 'mext-ent-2a', partNumber: 2, partTitle: 'The Four Externality Graphs',
    question: 'Homeowners who plant flowering gardens make their street more pleasant for everyone who walks by. On a correctly drawn graph of the market for garden plants, which is true?',
    options: ['MSB lies above MPB, and the market quantity is too low', 'MSB lies below MPB, and the market quantity is too small', 'MSB lies above MPB, and the market quantity is too large', 'MSC lies below MPC, and the market quantity is too small'],
    correctIndex: 0,
    explanation: 'The spillover comes from using the plants, so it is a positive consumption externality: MSB is above MPB by the external benefit. The market ignores that benefit and buys too little.',
  },
  {
    id: 'mext-ent-2b', partNumber: 2, partTitle: 'The Four Externality Graphs',
    question: 'On a graph of a negative production externality with a constant marginal external cost, where is the deadweight loss of the market outcome?',
    options: ['Between MPC and MSC, from zero to the market quantity', 'Between demand and MPC, from zero to the market quantity', 'Between MSC and demand, from the optimal to the market quantity', 'Under demand and above MSC, from zero to the optimal quantity'],
    correctIndex: 2,
    explanation: 'The lost value comes from units between the optimal and market quantities, whose marginal social cost exceeds their benefit. The whole band between MPC and MSC is the total external cost, not the deadweight loss.',
  },
  {
    id: 'mext-ent-3a', partNumber: 3, partTitle: 'Calculating Externalities',
    question: 'In a competitive market, demand is $P = 110 - Q$ and marginal private cost is $P = 20 + Q$. Each unit produced causes \\$30 of external cost. What are the socially optimal quantity and the deadweight loss of the market outcome?',
    options: ['30 units and \\$450', '45 units and \\$225', '30 units and \\$225', '35 units and \\$150'],
    correctIndex: 2,
    explanation: 'The market makes 45 units where $110 - Q = 20 + Q$. With $MSC = 50 + Q$, the optimum is 30, and DWL = ½ × 15 × \\$30 = \\$225.',
  },
  {
    id: 'mext-ent-3b', partNumber: 3, partTitle: 'Calculating Externalities',
    question: 'Marginal private benefit is $P = 90 - Q$ and marginal cost is $P = 30 + Q$. Each unit consumed gives others \\$12 of benefit. The government pays buyers a per-unit subsidy that moves the market to the socially optimal quantity. What does the subsidy cost?',
    options: ['\\$360', '\\$36', '\\$216', '\\$432'],
    correctIndex: 3,
    explanation: 'With $MSB = 102 - Q$, the optimum is 36 units. The subsidy equals the \\$12 external benefit, so it costs \\$12 × 36 = \\$432.',
  },
  {
    id: 'mext-ent-4a', partNumber: 4, partTitle: 'Correcting Externalities: Policy Tools',
    question: 'A competitive market has demand $P = 100 - Q$ and marginal private cost $P = 10 + Q$. The marginal external cost grows with output: $MEC = 0.5Q$. What per-unit tax moves the market to the socially optimal quantity?',
    options: ['\\$22.50', '\\$45', '\\$18', '\\$36'],
    correctIndex: 2,
    explanation: 'Setting $100 - Q = 10 + 1.5Q$ gives an optimum of 36 units, where MEC = \\$18. A tax of \\$22.50, the MEC at the market quantity of 45, would overcorrect.',
  },
  {
    id: 'mext-ent-4b', partNumber: 4, partTitle: 'Correcting Externalities: Policy Tools',
    question: 'A government can cut pollution to the socially optimal quantity with either a per-unit tax equal to the marginal external cost there or a cap on output at that quantity. How do the two policies differ?',
    options: ['The cap reaches the optimal quantity, while the tax falls short', 'The tax raises revenue, while the cap lets sellers keep the price gap', 'The tax creates a deadweight loss, while the cap creates none', 'The tax lowers the price buyers pay, while the cap raises it'],
    correctIndex: 1,
    explanation: 'Both policies reach the same quantity and price. Under the tax the gap between buyers\' price and sellers\' cost becomes government revenue; under the cap the permitted sellers keep it as profit.',
  },
  {
    id: 'mext-ent-5a', partNumber: 5, partTitle: 'Public Goods, Common Resources and Club Goods in Depth',
    question: 'Lighting for a shared park path costs \\$100. The four households nearby value it at \\$35, \\$30, \\$25 and \\$20. Which statement is correct?',
    options: ['Building it is inefficient, since no one values it at \\$100', 'Building it is efficient, and the highest bidder would buy it', 'Building it is inefficient, since its average value is \\$27.50', 'Building it is efficient, but no one would buy it alone'],
    correctIndex: 3,
    explanation: 'The lighting is nonrival, so its social benefit is the sum of the values, \\$110, which exceeds the \\$100 cost. But no household values it at \\$100 by itself, and free riding blocks a voluntary split.',
  },
  {
    id: 'mext-ent-5b', partNumber: 5, partTitle: 'Public Goods, Common Resources and Club Goods in Depth',
    question: 'Any boat may fish a lake. A boat costs \\$450 a day to run, and fish sell for \\$50 a ton. With 1 through 5 boats, the total daily catch is 12, 22, 30, 36 and 40 tons. What number of boats maximizes the lake\'s net value?',
    options: ['2 boats', '3 boats', '4 boats', '5 boats'],
    correctIndex: 0,
    explanation: 'The extra catch from each boat is worth \\$600, \\$500, \\$400, \\$300 and \\$200. Only the first two add more than the \\$450 cost, even though open access would draw in more boats because each new boat compares its average catch with its cost.',
  },
  {
    id: 'mext-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'In a competitive market, demand is $P = 120 - Q$ and marginal private cost is $P = 20 + Q$, with a constant marginal external cost of \\$20. A per-unit tax moves the market to the socially optimal quantity. What price do buyers pay, and what do sellers keep?',
    options: ['Buyers pay \\$70 and sellers keep \\$50', 'Buyers pay \\$80 and sellers keep \\$80', 'Buyers pay \\$60 and sellers keep \\$40', 'Buyers pay \\$80 and sellers keep \\$60'],
    correctIndex: 3,
    explanation: 'The tax is \\$20, the MEC at the optimum, so firms face $P = 40 + Q$ and the market settles at 40 units. Buyers pay 120 − 40 = \\$80 and sellers keep \\$80 − \\$20 = \\$60.',
  },
  {
    id: 'mext-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'Honey is sold in a competitive market with demand $P = 90 - Q$, and beekeepers\' marginal private cost is $P = 6 + 2Q$. Each unit of honey production pollinates nearby farms, worth \\$12 per unit to them. What is the socially optimal quantity?',
    options: ['28 units', '32 units', '24 units', '30 units'],
    correctIndex: 1,
    explanation: 'The pollination is a positive production externality, so $MSC = MPC - 12 = 2Q - 6$. Setting $90 - Q = 2Q - 6$ gives 32 units, more than the market\'s 28.',
  },
  {
    id: 'mext-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Demand for a noisy product is $P = 80 - Q$ and its marginal private cost is $P = 3Q$. Each unit used causes \\$16 of harm to neighbors. What is the deadweight loss of the market outcome?',
    options: ['\\$64', '\\$32', '\\$16', '\\$128'],
    correctIndex: 1,
    explanation: 'The market uses 20 units where $80 - Q = 3Q$. With $MSB = 64 - Q$, the optimum is 16, so DWL = ½ × 4 × \\$16 = \\$32.',
  },
  {
    id: 'mext-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'An online map service charges a monthly fee to members only, and one more member using the maps takes nothing away from any other member. What type of good is the service?',
    options: ['A club good, as it is excludable but nonrival', 'A common resource, since it is rival but nonexcludable', 'A private good, since it is rival and excludable', 'A public good, since it is nonexcludable and nonrival'],
    correctIndex: 0,
    explanation: 'The service can shut out anyone who does not pay, so it is excludable. One more member\'s use leaves the same maps for everyone else, so it is nonrival.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'The Four Externality Graphs' },
    { partNumber: 3, partTitle: 'Calculating Externalities' },
    { partNumber: 4, partTitle: 'Correcting Externalities: Policy Tools' },
    { partNumber: 5, partTitle: 'Public Goods, Common Resources and Club Goods in Depth' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
