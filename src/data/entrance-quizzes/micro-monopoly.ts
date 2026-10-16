/**
 * Entrance Quiz — Monopoly (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mmon-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A single-price monopolist can sell 3 units at \\$12 each or 4 units at \\$11 each. What is the marginal revenue of the fourth unit?',
    options: ['\\$11', '\\$8', '\\$44', '\\$1'],
    correctIndex: 1,
    explanation: 'Total revenue rises from \\$36 to \\$44, so the fourth unit adds \\$8. It is below the \\$11 price because the first three units also lose \\$1 each.',
  },
  {
    id: 'mmon-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A regulator makes a natural monopoly charge the price where demand crosses its average total cost curve. Compared with pricing at marginal cost, this rule leaves the firm with',
    options: ['zero profit and some deadweight loss still present', 'zero deadweight loss but a loss that needs a government subsidy', 'positive economic profit and output at the efficient level', 'an economic loss and output below the unregulated level'],
    correctIndex: 0,
    explanation: 'Price equal to average total cost means zero economic profit, but because average cost is still falling it sits above marginal cost, so output stays short of the efficient level and some deadweight loss remains. Pricing at marginal cost is the rule that removes deadweight loss and requires a subsidy.',
  },
  {
    id: 'mmon-ent-2a', partNumber: 2, partTitle: 'Monopoly Revenue and Elasticity',
    question: 'A monopolist faces the demand equation $Q_d = 60 - 0.5P$. At what price is its total revenue as large as possible?',
    options: ['\\$30', '\\$120', '\\$60', '\\$0'],
    correctIndex: 2,
    explanation: 'Rewriting demand as $P = 120 - 2Q$ gives $MR = 120 - 4Q$, which is zero at Q = 30. The price on the demand curve at 30 units is \\$60, the unit-elastic midpoint.',
  },
  {
    id: 'mmon-ent-2b', partNumber: 2, partTitle: 'Monopoly Revenue and Elasticity',
    question: 'A monopolist whose output costs something to produce finds that a 10 percent price cut would increase the units it sells by only 4 percent. To increase its profit, it should',
    options: ['lower its price and produce more', 'keep its price and output the same', 'shut down until demand becomes elastic', 'raise its price and make less'],
    correctIndex: 3,
    explanation: 'A 4 percent quantity response to a 10 percent price change means demand is inelastic, so marginal revenue is negative. Raising price and producing less then raises revenue and lowers cost at the same time.',
  },
  {
    id: 'mmon-ent-3a', partNumber: 3, partTitle: 'Worked Monopoly Problems',
    question: 'A monopolist faces demand $P = 100 - 2Q$ and has constant marginal cost and average total cost of \\$20. What is its maximum economic profit?',
    options: ['\\$1,200', '\\$400', '\\$800', '\\$1,600'],
    correctIndex: 2,
    explanation: 'Setting $MR = 100 - 4Q$ equal to 20 gives Q = 20, and demand gives P = \\$60. Profit is (\\$60 − \\$20) × 20 = \\$800; \\$1,200 is total revenue and \\$400 is the deadweight loss.',
  },
  {
    id: 'mmon-ent-3b', partNumber: 3, partTitle: 'Worked Monopoly Problems',
    question: 'A monopolist faces demand $P = 120 - Q$, and its marginal cost rises with output as $MC = 2Q$. What deadweight loss does its profit-maximizing choice create?',
    options: ['\\$50', '\\$100', '\\$300', '\\$150'],
    correctIndex: 3,
    explanation: 'Setting $MR = 120 - 2Q$ equal to $2Q$ gives Q = 30, P = \\$90 and MC = \\$60; the efficient output where $120 - Q = 2Q$ is 40. The deadweight loss is ½ × 10 × (\\$90 − \\$60) = \\$150, using price minus MC at the monopoly quantity as the height.',
  },
  {
    id: 'mmon-ent-4a', partNumber: 4, partTitle: 'Reading the Monopoly Graph',
    question: 'A monopoly graph shows demand falling in a straight line from \\$120 at zero units to zero at 120 units, a marginal revenue line twice as steep, and a flat marginal cost line at \\$30. In order, what are the profit-maximizing, revenue-maximizing and allocatively efficient quantities?',
    options: ['60, 45 and 90 units', '45, 90 and 60 units', '45, 60 and 90 units', '90, 60 and 45 units'],
    correctIndex: 2,
    explanation: 'MR = 120 − 2Q equals \\$30 at 45 units, MR equals zero at 60 units, and demand meets marginal cost at 90 units. The profit-maximizing output is always the smallest of the three when MC is positive.',
  },
  {
    id: 'mmon-ent-4b', partNumber: 4, partTitle: 'Reading the Monopoly Graph',
    question: 'On a monopoly graph with a flat MC = ATC line, area X is the triangle under demand and above the monopoly price, area Y is the rectangle between the monopoly price and MC out to the monopoly quantity, and area Z is the triangle between demand and MC from the monopoly quantity to where demand meets MC. Which areas make up total surplus under the monopoly?',
    options: ['X + Y + Z', 'X + Y', 'Y + Z', 'X + Z'],
    correctIndex: 1,
    explanation: 'Consumer surplus is X and the monopolist\'s profit is Y, so total surplus is X + Y. Area Z is the deadweight loss, surplus no one receives because those units are never produced.',
  },
  {
    id: 'mmon-ent-5a', partNumber: 5, partTitle: 'Price Discrimination',
    question: 'A bakery with some market power wants to charge students less than other customers for the same bagel. Which situation would keep this plan from raising its profit?',
    options: ['Students can resell their purchases to buyers who pay full price', 'Serving students costs the same as serving other buyers', 'Students have more elastic demand than other buyers', 'The bakery faces a downward-sloping demand curve'],
    correctIndex: 0,
    explanation: 'If discounted bagels can be resold, full-price buyers will buy through students, and the higher price collapses. Equal serving costs, different elasticities and market power are all conditions that price discrimination needs.',
  },
  {
    id: 'mmon-ent-5b', partNumber: 5, partTitle: 'Price Discrimination',
    question: 'A monopolist faces demand $P = 60 - Q$ with constant marginal cost of \\$12. If it switches from one price to perfect price discrimination, what are its output and the consumer surplus?',
    options: ['24 units and \\$288', '48 units and \\$1,152', '24 units and \\$0', '48 units and \\$0'],
    correctIndex: 3,
    explanation: 'A perfectly discriminating firm\'s marginal revenue equals demand, so it produces where 60 − Q = 12, at 48 units. Each buyer pays exactly his or her willingness to pay, leaving zero consumer surplus.',
  },
  {
    id: 'mmon-ent-6a', partNumber: 6, partTitle: 'Government Policy Toward Monopoly',
    question: 'A monopolist faces demand $P = 80 - Q$ with constant marginal cost of \\$10. The government adds a per-unit tax of \\$10. What price and quantity does the monopolist now choose?',
    options: ['\\$55 and 25 units', '\\$50 and 30 units', '\\$45 and 35 units', '\\$50 and 35 units'],
    correctIndex: 1,
    explanation: 'The tax raises MC to \\$20, and $80 - 2Q = 20$ gives Q = 30 and P = \\$50. The price rises by \\$5, half the tax, because the MR line is twice as steep as demand.',
  },
  {
    id: 'mmon-ent-6b', partNumber: 6, partTitle: 'Government Policy Toward Monopoly',
    question: 'A monopolist faces demand $P = 80 - Q$ with constant marginal cost of \\$10, so it normally sells 35 units. A regulator imposes a price ceiling of \\$30. How many units does the firm now produce?',
    options: ['25 units', '35 units', '70 units', '50 units'],
    correctIndex: 3,
    explanation: 'Under the ceiling, each unit up to the 50 that buyers want at \\$30 adds \\$30 of revenue, more than the \\$10 marginal cost. So the firm produces 50 units, more than its unregulated 35.',
  },
  {
    id: 'mmon-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'With identical costs and demand, what does a perfectly price-discriminating monopolist have in common with a perfectly competitive industry?',
    options: ['The same total surplus', 'The same consumer surplus', 'The same price for every buyer', 'The same economic profit'],
    correctIndex: 0,
    explanation: 'Both produce the quantity where demand meets marginal cost, so total surplus is identical and there is no deadweight loss. Only the split differs: the discriminating monopolist keeps all of it as profit.',
  },
  {
    id: 'mmon-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which policy would raise the quantity produced by a single-price monopolist with straight-line demand and constant marginal cost?',
    options: ['A lump-sum license fee on the firm', 'A per-unit subsidy on each unit sold', 'A per-unit tax on each unit sold', 'A rise in the firm\'s fixed costs'],
    correctIndex: 1,
    explanation: 'A per-unit subsidy lowers marginal cost, so MR = MC occurs at a larger quantity. A license fee and higher fixed costs leave MR and MC unchanged, and a per-unit tax raises MC and cuts output.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Monopoly Revenue and Elasticity' },
    { partNumber: 3, partTitle: 'Worked Monopoly Problems' },
    { partNumber: 4, partTitle: 'Reading the Monopoly Graph' },
    { partNumber: 5, partTitle: 'Price Discrimination' },
    { partNumber: 6, partTitle: 'Government Policy Toward Monopoly' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
