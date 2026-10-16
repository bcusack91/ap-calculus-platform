/**
 * Entrance Quiz — Monopolistic Competition & Oligopoly (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mmol-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Hundreds of hair salons in a city each offer slightly different styles and service, and new salons can open easily. In the long run, a typical salon earns',
    options: ['positive economic profit with price above marginal cost', 'no economic profit and a price equal to marginal cost', 'zero economic profit with price above marginal cost', 'positive economic profit with price equal to marginal cost'],
    correctIndex: 2,
    explanation: 'This is monopolistic competition: free entry pushes long-run economic profit to zero, but each salon\'s downward-sloping demand keeps price above marginal cost.',
  },
  {
    id: 'mmol-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Why do agreements among oligopolists to restrict output tend to fall apart?',
    options: ['Each member can raise its own profit by exceeding its quota', 'A member\'s profit falls when the group\'s price goes up', 'Members earn less together than they would by competing', 'Antitrust law requires members to publish their costs'],
    correctIndex: 0,
    explanation: 'Restricting output raises the price, so any one firm gains by secretly producing more at that high price. Because every member faces that same pull, the prisoner\'s dilemma makes the agreement unstable.',
  },
  {
    id: 'mmol-ent-2a', partNumber: 2, partTitle: 'The Monopolistic Competition Graph in Depth',
    question: 'A monopolistically competitive firm has the schedule below. What is its maximum economic profit?\n\n| Q | Price | MR | MC | ATC |\n|---|---|---|---|---|\n| 2 | \\$17 | \\$15 | \\$5 | \\$13.00 |\n| 3 | \\$15 | \\$11 | \\$7 | \\$11.00 |\n| 4 | \\$13 | \\$7 | \\$9 | \\$10.50 |\n| 5 | \\$11 | \\$3 | \\$10 | \\$10.40 |',
    options: ['\\$10', '\\$12', '\\$24', '\\$45'],
    correctIndex: 1,
    explanation: 'The third unit adds \\$11 of revenue for \\$7 of cost, but the fourth adds \\$7 for \\$9, so Q = 3 at the demand price of \\$15. Profit is (\\$15 − \\$11) × 3 = \\$12.',
  },
  {
    id: 'mmol-ent-2b', partNumber: 2, partTitle: 'The Monopolistic Competition Graph in Depth',
    question: 'A monopolistically competitive firm is earning an economic profit. As its market moves to long-run equilibrium, what happens to the firm\'s demand curve?',
    options: ['It shifts right and becomes less elastic', 'It shifts left and becomes perfectly elastic', 'It stays put while the firm\'s ATC shifts up', 'It shifts left and becomes more elastic'],
    correctIndex: 3,
    explanation: 'Profit draws in new rivals, who take customers and add close substitutes, so the firm\'s demand shifts left and flattens until it is tangent to ATC. It never becomes horizontal, because the products stay differentiated.',
  },
  {
    id: 'mmol-ent-3a', partNumber: 3, partTitle: 'Product Differentiation and Nonprice Competition',
    question: 'A monopolistically competitive restaurant runs a fixed-cost ad campaign that makes diners believe its food has fewer close substitutes. Which set of curve changes follows?',
    options: ['Demand shifts right and gets more elastic; ATC shifts up; MC is unchanged', 'Demand shifts right and gets less elastic; ATC and MC both shift up', 'Demand shifts right and gets less elastic; ATC shifts up; MC stays unchanged', 'Demand shifts left and gets less elastic; ATC is unchanged; MC shifts up'],
    correctIndex: 2,
    explanation: 'Winning customers shifts demand right, and fewer perceived substitutes make it less elastic. The campaign is a fixed cost, so ATC rises while MC stays put.',
  },
  {
    id: 'mmol-ent-3b', partNumber: 3, partTitle: 'Product Differentiation and Nonprice Competition',
    question: 'A shop has a constant marginal cost of \\$2 per unit and a fixed cost of \\$500 per week. Without advertising it sells 250 units at \\$5. A \\$300-per-week ad campaign would let it sell 320 units at \\$5.50. How does the campaign change weekly profit?',
    options: ['It rises by \\$370', 'It rises by \\$210', 'It falls by \\$230', 'It rises by \\$70'],
    correctIndex: 3,
    explanation: 'Profit without ads is \\$1,250 − (\\$500 + \\$500) = \\$250. With ads it is \\$1,760 − (\\$800 + \\$640) = \\$320, so profit rises by \\$70.',
  },
  {
    id: 'mmol-ent-4a', partNumber: 4, partTitle: 'Reading Payoff Matrices',
    question: 'Pine (rows) and Oak (columns) each choose High or Low. Payoffs are listed (Pine, Oak). What is the Nash equilibrium?\n\n| | Oak: High | Oak: Low |\n|---|---|---|\n| Pine: High | 10, 6 | 3, 8 |\n| Pine: Low | 7, 2 | 5, 4 |',
    options: ['(High, High), with payoffs 10 and 6', '(Low, Low), with payoffs 5 and 4', '(High, Low), with payoffs 3 and 8', '(Low, High), with payoffs 7 and 2'],
    correctIndex: 1,
    explanation: 'Low is dominant for Oak (8 > 6 and 4 > 2). Pine\'s best response to Low is Low (5 > 3), so neither player wants to move from (Low, Low).',
  },
  {
    id: 'mmol-ent-4b', partNumber: 4, partTitle: 'Reading Payoff Matrices',
    question: 'Two firms, North (rows) and South (columns), each pick standard A or B. Payoffs are listed (North, South). Which statement describes this game?\n\n| | South: A | South: B |\n|---|---|---|\n| North: A | 5, 4 | 1, 1 |\n| North: B | 0, 2 | 4, 5 |',
    options: ['Each firm has a dominant strategy, and there is one Nash equilibrium', 'Neither firm has a dominant strategy, and there are two Nash equilibria', 'Each firm has a dominant strategy, and there are two Nash equilibria', 'Only North has a dominant strategy, and there is one Nash equilibrium'],
    correctIndex: 1,
    explanation: 'Each firm\'s best response is to match the other (A against A, B against B), so neither has a dominant strategy. Both (A, A) and (B, B) are cells where neither firm gains by switching alone.',
  },
  {
    id: 'mmol-ent-5a', partNumber: 5, partTitle: 'Collusion, Cartels and Changing the Game',
    question: 'Two identical firms are the only sellers in a market with demand $P = 90 - Q$. Each has a constant marginal cost of \\$30 and no fixed cost. If they form a cartel and split output equally, what price do they charge and what does each firm earn?',
    options: ['\\$60 and \\$900 per firm', '\\$30 and \\$0 per firm', '\\$60 and \\$450 per firm', '\\$45 and \\$225 per firm'],
    correctIndex: 2,
    explanation: 'The cartel acts as one monopolist: $90 - 2Q = 30$ gives Q = 30 and P = \\$60. Joint profit is (\\$60 − \\$30) × 30 = \\$900, or \\$450 for each firm.',
  },
  {
    id: 'mmol-ent-5b', partNumber: 5, partTitle: 'Collusion, Cartels and Changing the Game',
    question: 'Two cereal makers each choose to Advertise or Not. Profits in millions are listed (X, Y): both Advertise 30, 30; X Advertises and Y does not 55, 20; X does not and Y Advertises 20, 55; neither Advertises 48, 48. The government taxes each firm that advertises by T million dollars. What is the smallest whole-million tax that makes Not a dominant strategy?',
    options: ['\\$8 million', '\\$7 million', '\\$25 million', '\\$11 million'],
    correctIndex: 3,
    explanation: 'Not must beat Advertise against both rival choices: 20 > 30 − T needs T > 10, and 48 > 55 − T needs T > 7. Only T > 10 satisfies both, so the smallest whole value is \\$11 million.',
  },
  {
    id: 'mmol-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'Monopolistically competitive pizza shops are in long-run equilibrium. The city then adds a tax of \\$1 on every pizza sold. What happens to a typical shop\'s output in the short run and to the number of shops in the long run?',
    options: ['Each shop produces the same, and some shops exit', 'Each shop produces less, and no shops exit', 'Each shop produces less, and some shops exit', 'Each shop produces more, and new shops enter'],
    correctIndex: 2,
    explanation: 'A per-unit tax raises marginal cost, so MR = MC occurs at a smaller output. Shops that were at zero profit now take losses, so some exit in the long run.',
  },
  {
    id: 'mmol-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'Ridge (rows) and Vale (columns) each choose Expand or Wait. Payoffs in millions are listed (Ridge, Vale). The government will pay Vale S million dollars whenever Vale chooses Wait. What is the smallest whole-million S that makes Wait a dominant strategy for Vale?\n\n| | Vale: Expand | Vale: Wait |\n|---|---|---|\n| Ridge: Expand | 20, 15 | 35, 10 |\n| Ridge: Wait | 15, 30 | 25, 22 |',
    options: ['\\$9 million', '\\$6 million', '\\$11 million', '\\$5 million'],
    correctIndex: 0,
    explanation: 'Vale\'s Wait payoffs become 10 + S and 22 + S. Wait must beat Expand in both rows: 10 + S > 15 needs S > 5, and 22 + S > 30 needs S > 8, so the smallest whole value is \\$9 million.',
  },
  {
    id: 'mmol-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which long-run result separates oligopoly from monopolistic competition?',
    options: ['Price exceeds marginal cost because demand slopes down', 'Economic profit can persist because entry is blocked', 'Each firm faces a downward-sloping demand curve', 'Firms compete through advertising and branding'],
    correctIndex: 1,
    explanation: 'High barriers to entry let oligopoly profits last, while free entry drives monopolistic competitors to zero profit. Price above marginal cost, sloped demand and advertising appear in both structures.',
  },
  {
    id: 'mmol-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which description fits the long-run graph of a monopolistically competitive firm?',
    options: ['Demand is tangent to ATC at its minimum point', 'Demand is above ATC at the MR = MC quantity', 'Demand is below ATC at every quantity', 'Demand is tangent to ATC to the left of its minimum'],
    correctIndex: 3,
    explanation: 'A downward-sloping demand curve can only just touch a U-shaped ATC curve where ATC is also falling, to the left of its minimum. That tangency gives zero profit and excess capacity.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'The Monopolistic Competition Graph in Depth' },
    { partNumber: 3, partTitle: 'Product Differentiation and Nonprice Competition' },
    { partNumber: 4, partTitle: 'Reading Payoff Matrices' },
    { partNumber: 5, partTitle: 'Collusion, Cartels and Changing the Game' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
