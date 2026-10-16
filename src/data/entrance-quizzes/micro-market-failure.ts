/**
 * Entrance Quiz — Market Failure & the Role of Government (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mmf-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A town\'s lake is open to every angler, and each fish caught leaves fewer for everyone else. Compared with the efficient level, the amount of fishing is',
    options: ['too low, because no angler can be kept off the lake', 'efficient, because each angler pays for the gear used', 'too high, because each angler ignores the cost to the other anglers', 'too low, because anglers free ride on each other\'s catches'],
    correctIndex: 2,
    explanation: 'The fish are a common resource: non-excludable but rival. Each angler weighs only his or her own cost, not the smaller catch left for others, so the lake is overused.',
  },
  {
    id: 'mmf-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'In which situation does an unregulated market produce less than the socially efficient quantity?',
    options: ['A factory whose smoke harms the people living nearby', 'A competitive market for wheat with no spillovers', 'A grazing field that every rancher may use freely', 'A vaccine that also protects the people around the buyer'],
    correctIndex: 3,
    explanation: 'A vaccine has a positive externality: buyers ignore the benefit to others, so marginal social benefit exceeds private benefit and too little is bought. Smoke and open grazing lead to too much, and the wheat market is already efficient.',
  },
  {
    id: 'mmf-ent-2a', partNumber: 2, partTitle: 'Efficiency and Deadweight Loss Everywhere',
    question: 'In a market with no externality, marginal social benefit is $P = 90 - Q$ and marginal social cost is $P = Q$. A per-unit tax of \\$20 is imposed. What is the deadweight loss?',
    options: ['\\$200', '\\$100', '\\$50', '\\$700'],
    correctIndex: 1,
    explanation: 'The efficient quantity is 45, and with the tax $90 - Q = Q + 20$ gives 35. At 35 units the gap between MSB (\\$55) and MSC (\\$35) is \\$20, so DWL = ½ × 10 × \\$20 = \\$100.',
  },
  {
    id: 'mmf-ent-2b', partNumber: 2, partTitle: 'Efficiency and Deadweight Loss Everywhere',
    question: 'A perfectly competitive industry produces at the minimum of its firms\' ATC in the long run, but each unit it makes releases pollution that harms nearby residents. Which statement is correct?',
    options: ['It is productively efficient but is not allocatively efficient', 'It is allocatively efficient but not productively efficient', 'It is both allocatively and productively efficient', 'It is neither allocatively nor productively efficient'],
    correctIndex: 0,
    explanation: 'Producing at minimum ATC passes the productive test. But price equals marginal private cost, which is below marginal social cost, so the industry makes too much and fails the allocative test.',
  },
  {
    id: 'mmf-ent-3a', partNumber: 3, partTitle: 'Government Intervention Across Market Structures',
    question: 'A monopolist faces demand $P = 120 - Q$ and has constant marginal and average total cost of \\$30. The government gives it a per-unit subsidy of \\$10. What happens to deadweight loss, measured at the true cost of \\$30?',
    options: ['It rises from \\$1,012.50 to \\$1,250', 'It falls from \\$1,012.50 to \\$800', 'It falls from \\$1,012.50 to \\$0', 'It stays at \\$1,012.50 as only profit changes'],
    correctIndex: 1,
    explanation: 'Unsubsidized, MR = MC gives 45 units at \\$75 against an efficient 90, so DWL = ½ × 45 × \\$45 = \\$1,012.50. With MC at \\$20 the firm makes 50 units at \\$70, and DWL = ½ × 40 × \\$40 = \\$800.',
  },
  {
    id: 'mmf-ent-3b', partNumber: 3, partTitle: 'Government Intervention Across Market Structures',
    question: 'A perfectly competitive industry is in long-run equilibrium when the government charges every firm a fixed yearly license fee. What happens in the long run?',
    options: ['Each firm cuts its output, and price stays the same', 'Nothing changes, since marginal cost is unchanged', 'Some firms exit, and market price rises', 'More firms enter, and the market price falls'],
    correctIndex: 2,
    explanation: 'The fee raises ATC, so firms that were at zero profit now lose money. Some exit, market supply falls and price rises until the remaining firms break even.',
  },
  {
    id: 'mmf-ent-4a', partNumber: 4, partTitle: 'Measuring Inequality: The Lorenz Curve and the Gini Coefficient',
    question: 'A country\'s income shares by quintile, poorest to richest, are 6%, 11%, 16%, 22% and 45%. Which point lies on its Lorenz curve?',
    options: ['(60, 16)', '(60, 67)', '(60, 38)', '(60, 33)'],
    correctIndex: 3,
    explanation: 'The Lorenz curve plots cumulative shares: the poorest 60% receive 6 + 11 + 16 = 33% of income. The height 16 is the middle quintile alone, and 67 is the share of the richest 40%.',
  },
  {
    id: 'mmf-ent-4b', partNumber: 4, partTitle: 'Measuring Inequality: The Lorenz Curve and the Gini Coefficient',
    question: 'Country A\'s Lorenz curve lies everywhere between Country B\'s Lorenz curve and the 45-degree line of equality. Which conclusion follows?',
    options: ['A has a lower Gini coefficient than B', 'A has a higher Gini coefficient than B', 'A has higher average income than B', 'A has a lower poverty rate than B'],
    correctIndex: 0,
    explanation: 'A curve closer to the line of equality means a more equal distribution and a lower Gini coefficient. Lorenz curves compare shares, so they say nothing about average income or poverty levels.',
  },
  {
    id: 'mmf-ent-5a', partNumber: 5, partTitle: 'Sources of Inequality and Redistribution',
    question: 'An income tax charges 10% on the first \\$30,000, 25% on income from \\$30,000 to \\$80,000, and 35% on income above \\$80,000. For a household earning \\$100,000, what are the average and marginal tax rates?',
    options: ['Average 35%, marginal 35%', 'Average 22.5%, marginal 25%', 'Average 22.5%, marginal 35%', 'Average 23.3%, marginal 35%'],
    correctIndex: 2,
    explanation: 'Tax owed is \\$3,000 + \\$12,500 + \\$7,000 = \\$22,500, or 22.5% of income. The next dollar earned is taxed at 35%, the marginal rate.',
  },
  {
    id: 'mmf-ent-5b', partNumber: 5, partTitle: 'Sources of Inequality and Redistribution',
    question: 'A new tax takes \\$1,200 from a household earning \\$20,000 and \\$3,000 from a household earning \\$100,000. What does it do to the distribution of after-tax income?',
    options: ['It is progressive, so the Gini coefficient falls', 'It is regressive, so the Gini coefficient rises', 'It is proportional, so the Gini coefficient is unchanged', 'It is progressive, so the Gini coefficient rises'],
    correctIndex: 1,
    explanation: 'The average rate is 6% for the lower income and 3% for the higher one, so the tax is regressive even though the richer household pays more dollars. It moves the Lorenz curve away from equality and raises the Gini.',
  },
  {
    id: 'mmf-ent-6a', partNumber: 6, partTitle: 'Policy Evaluation and AP Exam Practice',
    question: 'Regulators set a per-unit pollution tax larger than the marginal external cost at the socially efficient quantity. What is the result?',
    options: ['Output drops to exactly the efficient quantity, ending the loss', 'Output falls below the efficient quantity, adding deadweight loss', 'Output stays above the efficient quantity, so pollution persists', 'Output rises, since buyers end up paying the entire tax'],
    correctIndex: 1,
    explanation: 'A tax that overshoots the external cost cuts output past the efficient level. Units that are worth more to society than they cost are no longer made, which is a form of government failure.',
  },
  {
    id: 'mmf-ent-6b', partNumber: 6, partTitle: 'Policy Evaluation and AP Exam Practice',
    question: 'A perfectly competitive industry with no externalities faces demand $P = 100 - 2Q$ and has constant marginal cost of \\$20. The government pays a \\$20 per-unit subsidy. What deadweight loss results?',
    options: ['\\$0', '\\$200', '\\$100', '\\$1,000'],
    correctIndex: 2,
    explanation: 'The market was efficient at 40 units. The subsidy lowers the effective cost to \\$0, so output rises to 50, where buyers value the last unit at \\$0 but it costs \\$20; DWL = ½ × 10 × \\$20 = \\$100.',
  },
  {
    id: 'mmf-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'In a competitive market, demand (marginal social benefit) is $P = 80 - Q$ and marginal private cost is $P = 20 + Q$. Each unit causes \\$10 of external cost. What is the deadweight loss of the market outcome?',
    options: ['\\$50', '\\$12.50', '\\$300', '\\$25'],
    correctIndex: 3,
    explanation: 'The market makes 30 units, but the efficient quantity, where $80 - Q = 30 + Q$, is 25. The gap between MSC and MSB at 30 units is \\$10, so DWL = ½ × 5 × \\$10 = \\$25.',
  },
  {
    id: 'mmf-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which statement is normative rather than positive?',
    options: ['A tax on sugary drinks should be raised to protect health', 'A regressive tax raises the Gini coefficient of after-tax income', 'Raising the tax on sugary drinks would cut the quantity sold', 'A binding price floor on milk creates a surplus'],
    correctIndex: 0,
    explanation: 'Saying a tax should be raised is a value judgment that evidence alone cannot settle. The other statements are predictions that can be tested.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Efficiency and Deadweight Loss Everywhere' },
    { partNumber: 3, partTitle: 'Government Intervention Across Market Structures' },
    { partNumber: 4, partTitle: 'Measuring Inequality: The Lorenz Curve and the Gini Coefficient' },
    { partNumber: 5, partTitle: 'Sources of Inequality and Redistribution' },
    { partNumber: 6, partTitle: 'Policy Evaluation and AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
