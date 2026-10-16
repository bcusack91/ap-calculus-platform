/**
 * Entrance Quiz — Market Equilibrium, Surplus & Double Shifts (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mdse-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A buyer who would pay up to \\$90 for a used guitar buys one for \\$60 from a seller who would have accepted as little as \\$35. What are the consumer surplus and producer surplus from this sale?',
    options: ['\\$30 and \\$25', '\\$25 and \\$30', '\\$30 and \\$60', '\\$55 and \\$25'],
    correctIndex: 0,
    explanation: 'Consumer surplus is \\$90 − \\$60 = \\$30, and producer surplus is \\$60 − \\$35 = \\$25. Together they make \\$55 of total surplus; the price only decides how it is split.',
  },
  {
    id: 'mdse-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A cool summer reduces demand for lemonade while a bumper lemon harvest increases the supply of lemonade. What happens to the equilibrium?',
    options: ['Quantity falls, while price is indeterminate', 'Price falls, and quantity is indeterminate', 'Price and quantity are both left indeterminate', 'Price rises, while quantity is indeterminate'],
    correctIndex: 1,
    explanation: 'Both shifts push price down, so price falls for certain. The demand decrease lowers quantity while the supply increase raises it, so quantity is indeterminate without the sizes of the shifts.',
  },
  {
    id: 'mdse-ent-2a', partNumber: 2, partTitle: 'Solving for Equilibrium and Measuring Disequilibrium',
    question: 'A market has demand $Q_d = 300 - 15P$ and supply $Q_s = 25P - 100$. What are the equilibrium price and quantity?',
    options: ['\\$5 and 225 units', '\\$8 and 180 units', '\\$10 and 150 units', '\\$4 and 240 units'],
    correctIndex: 2,
    explanation: 'Setting 300 − 15P = 25P − 100 gives 400 = 40P, so P = \\$10. Then Q = 300 − 150 = 150, and supply gives 250 − 100 = 150 as a check.',
  },
  {
    id: 'mdse-ent-2b', partNumber: 2, partTitle: 'Solving for Equilibrium and Measuring Disequilibrium',
    question: 'In the same market ($Q_d = 300 - 15P$, $Q_s = 25P - 100$), the price is stuck at \\$8. What is the market condition, and how many units are actually sold?',
    options: ['A shortage of 80, with 180 units sold', 'A surplus of 80, with 100 units sold', 'A shortage of 30, with 150 units sold', 'A shortage of 80, with 100 units sold'],
    correctIndex: 3,
    explanation: 'At \\$8 buyers want 300 − 120 = 180 units but sellers offer 200 − 100 = 100, a shortage of 80. A sale needs a seller, so only the 100 units on the short side are traded.',
  },
  {
    id: 'mdse-ent-3a', partNumber: 3, partTitle: 'Calculating Consumer and Producer Surplus',
    question: 'A market\'s straight-line demand curve meets the price axis at \\$30, and its straight-line supply curve meets the price axis at \\$6. The market clears at \\$14 and 80 units. What are consumer surplus and producer surplus?',
    options: ['\\$640 and \\$320', '\\$1,280 and \\$640', '\\$320 and \\$640', '\\$640 and \\$560'],
    correctIndex: 0,
    explanation: 'Consumer surplus is ½ × 80 × (\\$30 − \\$14) = \\$640 and producer surplus is ½ × 80 × (\\$14 − \\$6) = \\$320. Leaving out the ½ doubles both answers.',
  },
  {
    id: 'mdse-ent-3b', partNumber: 3, partTitle: 'Calculating Consumer and Producer Surplus',
    question: 'Four buyers value a concert ticket at \\$12, \\$9, \\$6 and \\$4. Four sellers would each sell one ticket for no less than \\$2, \\$4, \\$6 and \\$9. At a market price of \\$6, three tickets trade. What is the total surplus?',
    options: ['\\$9', '\\$15', '\\$10', '\\$27'],
    correctIndex: 1,
    explanation: 'Buyers gain \\$6 + \\$3 + \\$0 = \\$9 and sellers gain \\$4 + \\$2 + \\$0 = \\$6, for \\$15. Equivalently, the three trades create (12 − 2) + (9 − 4) + (6 − 6) = \\$15 of value.',
  },
  {
    id: 'mdse-ent-4a', partNumber: 4, partTitle: 'Reading Surplus and Deadweight Loss on a Lettered Graph',
    question: 'A market\'s demand curve falls in a straight line from \\$20 at zero units, dropping \\$1 for every 10 units. Its supply curve starts at \\$4 and rises \\$1 for every 10 units. If trade is limited to 60 units, what is the deadweight loss?',
    options: ['\\$80', '\\$20', '\\$40', '\\$60'],
    correctIndex: 2,
    explanation: 'The curves cross at 80 units and \\$12. At 60 units demand is at \\$14 and supply at \\$10, so the lost triangle is ½ × 20 × \\$4 = \\$40.',
  },
  {
    id: 'mdse-ent-4b', partNumber: 4, partTitle: 'Reading Surplus and Deadweight Loss on a Lettered Graph',
    question: 'On a supply-and-demand graph, trade is limited to fewer units than the equilibrium quantity, and those units sell at the price on the demand curve at that quantity. Region A is under demand above that price; B is the rectangle between that price and the old equilibrium price; C is the triangle under demand above the equilibrium price beyond the limit; D is the rectangle between the equilibrium price and the supply curve\'s height at the limit; E is the triangle above supply below the equilibrium price beyond the limit; F is above supply below the supply height at the limit. Which areas are producer surplus?',
    options: ['D + E + F', 'A + B', 'D + F', 'B + D + F'],
    correctIndex: 3,
    explanation: 'Sellers receive the high price on every unit traded, so everything between that price and the supply curve up to the limit, B + D + F, is theirs. Consumers keep only A, and C + E is the deadweight loss.',
  },
  {
    id: 'mdse-ent-5a', partNumber: 5, partTitle: 'Double Shifts with Magnitudes, and Misconceptions',
    question: 'A market starts with demand $Q_d = 200 - 10P$ and supply $Q_s = 30P - 120$. Demand then rises by 40 units at every price, and supply rises by 80 units at every price. What are the new equilibrium price and quantity?',
    options: ['\\$7 and 170 units', '\\$8 and 160 units', '\\$9 and 150 units', '\\$7 and 130 units'],
    correctIndex: 0,
    explanation: 'The new curves are $Q_d = 240 - 10P$ and $Q_s = 30P - 40$, so 280 = 40P and P = \\$7, with Q = 170. Price falls from \\$8 because the supply increase is larger, and quantity rises as both shifts predict.',
  },
  {
    id: 'mdse-ent-5b', partNumber: 5, partTitle: 'Double Shifts with Magnitudes, and Misconceptions',
    question: 'In a market, supply decreases by more than demand increases. What happens to equilibrium price and quantity?',
    options: ['Price rises and quantity also rises', 'Price rises and quantity falls', 'Price falls and quantity falls too', 'Price rises and quantity is indeterminate'],
    correctIndex: 1,
    explanation: 'Both shifts raise price, so price rises. They push quantity in opposite directions, and the stated sizes settle it: the larger supply decrease wins, so quantity falls.',
  },
  {
    id: 'mdse-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice: A Full Equilibrium FRQ',
    question: 'A competitive market has demand $Q_d = 800 - 4P$ and supply $Q_s = 2P - 100$. What are consumer surplus and producer surplus at equilibrium?',
    options: ['\\$10,000 and \\$5,000', '\\$15,000 and \\$10,000', '\\$5,000 and \\$10,000', '\\$10,000 and \\$20,000'],
    correctIndex: 2,
    explanation: 'Equilibrium is P = \\$150 and Q = 200; the price intercepts are \\$200 for demand and \\$50 for supply. Consumer surplus is ½ × 200 × 50 = \\$5,000 and producer surplus is ½ × 200 × 100 = \\$10,000.',
  },
  {
    id: 'mdse-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice: A Full Equilibrium FRQ',
    question: 'In the same market ($Q_d = 800 - 4P$, $Q_s = 2P - 100$), only 140 units per month can be sold. What is the deadweight loss?',
    options: ['\\$2,700', '\\$900', '\\$450', '\\$1,350'],
    correctIndex: 3,
    explanation: 'At 140 units, demand is at (800 − 140) ÷ 4 = \\$165 and supply is at (140 + 100) ÷ 2 = \\$120. The deadweight loss is ½ × (200 − 140) × (\\$165 − \\$120) = \\$1,350.',
  },
  {
    id: 'mdse-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A market has demand $Q_d = 160 - 2P$ and supply $Q_s = 2P - 40$. If 80 units are produced and sold, what is the deadweight loss?',
    options: ['\\$200', '\\$400', '\\$0', '\\$100'],
    correctIndex: 0,
    explanation: 'Equilibrium is 60 units at \\$50. At 80 units the supply curve is at \\$60 and demand is at \\$40, so the 20 extra units each cost more than they are worth: ½ × 20 × \\$20 = \\$200.',
  },
  {
    id: 'mdse-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A price is held below the equilibrium price in a competitive market. Which statement is correct?',
    options: ['Quantity sold equals quantity demanded at that price', 'Some units with marginal benefit above marginal cost go untraded', 'Total surplus rises because buyers pay a lower price', 'Producer surplus rises because more units are sold'],
    correctIndex: 1,
    explanation: 'At a low price sellers offer fewer units than equilibrium, so units that buyers value above their cost are never traded and deadweight loss appears. Only the smaller, supplied quantity is sold.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Solving for Equilibrium and Measuring Disequilibrium' },
    { partNumber: 3, partTitle: 'Calculating Consumer and Producer Surplus' },
    { partNumber: 4, partTitle: 'Reading Surplus and Deadweight Loss on a Lettered Graph' },
    { partNumber: 5, partTitle: 'Double Shifts with Magnitudes, and Misconceptions' },
    { partNumber: 6, partTitle: 'AP Exam Practice: A Full Equilibrium FRQ' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
