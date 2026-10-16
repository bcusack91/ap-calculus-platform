/**
 * Entrance Quiz — Perfect Competition (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mpco-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A perfectly competitive firm faces a market price of \\$12. At the output where price equals marginal cost, its ATC is \\$10 and its AVC is \\$7. What is its short-run situation?',
    options: ['It earns an economic profit', 'It takes a loss but keeps producing', 'It takes a loss and shuts down at once', 'It breaks even with only normal profit'],
    correctIndex: 0,
    explanation: 'Price (\\$12) is above ATC (\\$10) at the profit-maximizing output, so the firm earns \\$2 of economic profit on each unit. A loss would require price below ATC, and shutting down would require price below AVC.',
  },
  {
    id: 'mpco-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'In long-run equilibrium, where does a perfectly competitive firm produce?',
    options: ['Price equals MC but exceeds minimum ATC', 'Price equals both MC and minimum ATC', 'Price exceeds MC and equals minimum ATC', 'Price equals minimum AVC but exceeds MC'],
    correctIndex: 1,
    explanation: 'The firm always produces where P = MR = MC, and entry or exit pushes the price to the bottom of ATC. So P = MC = minimum ATC, which makes the firm both allocatively and productively efficient.',
  },
  {
    id: 'mpco-ent-2a', partNumber: 2, partTitle: 'Profit Maximization from Tables',
    question: 'A competitive firm\'s total cost for 0 through 7 units is \\$30, \\$42, \\$50, \\$56, \\$64, \\$76, \\$94 and \\$118. The market price is \\$20. What output maximizes profit, and what is the profit?',
    options: ['5 units, with a profit of \\$24', '7 units, with a profit of \\$22', '6 units, with a profit of \\$26', '4 units, with a profit of \\$16'],
    correctIndex: 2,
    explanation: 'Marginal costs are \\$12, \\$8, \\$6, \\$8, \\$12, \\$18 and \\$24. The 6th unit costs \\$18, less than the \\$20 price, but the 7th costs \\$24, so the firm makes 6 units: \\$120 − \\$94 = \\$26 of profit.',
  },
  {
    id: 'mpco-ent-2b', partNumber: 2, partTitle: 'Profit Maximization from Tables',
    question: 'A farm owner\'s cost figures include the salary she gives up and the interest her savings could earn. Her economic profit this year is exactly zero. What does that mean?',
    options: ['She should quit farming, as she made no profit', 'Her revenue fell short of her explicit costs', 'She earned nothing for her time and money', 'Her accounting profit just covers her implicit costs'],
    correctIndex: 3,
    explanation: 'Zero economic profit is normal profit: revenue covers every explicit and implicit cost, so she does exactly as well as in her next-best option. Her accounting profit is positive and equals those implicit costs, so she has no reason to leave.',
  },
  {
    id: 'mpco-ent-3a', partNumber: 3, partTitle: 'The Side-by-Side Graph',
    question: 'A competitive firm\'s graph shows a market price of \\$25. Marginal revenue equals marginal cost at 300 units, where ATC is \\$28 and AVC is \\$20. What is the firm\'s profit or loss, and what is its total fixed cost?',
    options: ['A \\$900 loss and \\$2,400 of fixed cost', 'A \\$900 profit and \\$2,400 of fixed cost', 'A \\$900 loss and \\$1,500 of fixed cost', 'A \\$2,400 loss and \\$900 of fixed cost'],
    correctIndex: 0,
    explanation: 'The loss is (\\$28 − \\$25) × 300 = \\$900, and fixed cost is (ATC − AVC) × q = \\$8 × 300 = \\$2,400. Because price is above AVC, the firm keeps producing and loses less than its fixed cost.',
  },
  {
    id: 'mpco-ent-3b', partNumber: 3, partTitle: 'The Side-by-Side Graph',
    question: 'Which curve is a perfectly competitive firm\'s short-run supply curve?',
    options: ['The part of its MC curve above minimum ATC', 'Its MC curve above minimum AVC', 'The rising part of its ATC curve', 'The horizontal market price line'],
    correctIndex: 1,
    explanation: 'At any price, the firm produces where P = MC, so MC tells how much it offers. Below minimum AVC it shuts down, so the supply curve is MC above that point; between minimum AVC and minimum ATC it produces at a loss.',
  },
  {
    id: 'mpco-ent-4a', partNumber: 4, partTitle: 'Short-Run Decisions with Numbers',
    question: 'A competitive firm has a fixed cost of \\$40. At a price of \\$9, its best output is 5 units, where ATC is \\$15 and AVC is \\$7. What should it do in the short run?',
    options: ['Shut down, and lose \\$40 rather than \\$30', 'Produce, and earn a \\$10 profit', 'Produce, and lose \\$30 rather than \\$40', 'Shut down, and lose nothing at all'],
    correctIndex: 2,
    explanation: 'Producing loses (\\$15 − \\$9) × 5 = \\$30, while shutting down still costs the \\$40 fixed cost. Price is above AVC, so each unit helps pay part of the fixed cost.',
  },
  {
    id: 'mpco-ent-4b', partNumber: 4, partTitle: 'Short-Run Decisions with Numbers',
    question: 'A competitive market has 200 identical firms. Each firm supplies 2 units at \\$10, 3 units at \\$14, 4 units at \\$18 and 5 units at \\$22. Market demand is $Q_d = 1{,}520 - 40P$. What are the market price and each firm\'s output?',
    options: ['\\$14, with 3 units per firm', '\\$18, with 800 units per firm', '\\$22, with 5 units per firm', '\\$18, with 4 units per firm'],
    correctIndex: 3,
    explanation: 'Market supply adds the firms\' quantities: 400, 600, 800 and 1,000 at the four prices. Demand equals supply at \\$18, where 1,520 − 720 = 800 units, so each firm makes 4.',
  },
  {
    id: 'mpco-ent-5a', partNumber: 5, partTitle: 'Long-Run Adjustment',
    question: 'A constant-cost competitive industry has 100 identical firms earning economic profit at a price of \\$16. Each firm\'s minimum ATC is \\$12, reached at 6 units. Market demand is $Q_d = 2{,}400 - 50P$. In the long run, what are the price and the number of firms?',
    options: ['\\$12 and 300 firms', '\\$16 and 100 firms', '\\$12 and 200 firms', '\\$14 and 300 firms'],
    correctIndex: 0,
    explanation: 'Profit draws in new firms until the price falls to minimum ATC, \\$12. Buyers then want 2,400 − 600 = 1,800 units, and at 6 units per firm the industry needs 300 firms.',
  },
  {
    id: 'mpco-ent-5b', partNumber: 5, partTitle: 'Long-Run Adjustment',
    question: 'An increasing-cost competitive industry starts in long-run equilibrium when market demand increases. Where does the long-run price end up?',
    options: ['Back at exactly the original price', 'Above the original price but below the short-run peak', 'Higher than the price reached in the short run', 'Below the original price'],
    correctIndex: 1,
    explanation: 'Entry bids up the price of a scarce input, which raises every firm\'s costs, so entry stops at a higher minimum ATC. The price settles above where it started but below the short-run high.',
  },
  {
    id: 'mpco-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A sawmill sells lumber at \\$30 per unit. At its best output of 2,000 units, ATC is \\$34 and AVC is \\$26. The government then charges every mill a lump-sum fee of \\$3,000. What happens to the mill\'s output and its short-run decision?',
    options: ['Lower output, and it keeps producing', 'It shuts down, since its loss is now larger', 'Same output, and it keeps producing', 'Higher output, to spread out the fee'],
    correctIndex: 2,
    explanation: 'A lump-sum fee does not change marginal cost, so output stays at 2,000. The loss grows from \\$8,000 to \\$11,000, but shutting down would lose the \\$16,000 fixed cost plus the fee, so the mill keeps producing.',
  },
  {
    id: 'mpco-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'The corn market is a constant-cost competitive industry in long-run equilibrium at \\$5 per bushel. A new biofuel rule increases the demand for corn. What happens to a typical farm in the short run, and to the price in the long run?',
    options: ['Its output is unchanged, and in the long run the price stays above \\$5', 'Its output rises and it profits, and in the long run the price stays above \\$5', 'Its output falls, and in the long run the price falls below \\$5', 'Its output rises and it profits, and in the long run the price returns to \\$5'],
    correctIndex: 3,
    explanation: 'The higher price moves each farm up its MC curve to more output at a price above ATC, so it profits. Profit draws in new farms until supply has shifted enough to bring the price back to \\$5.',
  },
  {
    id: 'mpco-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A competitive firm\'s minimum AVC is \\$8 and its minimum ATC is \\$13. All firms in the industry have the same costs, and the market price is \\$11. What happens in the short run and in the long run?',
    options: ['It produces at a loss now, and exit later lifts the price to \\$13', 'It shuts down now, and exit later lifts the price to \\$13', 'It produces at a loss now, and entry later cuts the price to \\$8', 'It earns a profit now, and entry later cuts the price to \\$11'],
    correctIndex: 0,
    explanation: 'The price is above minimum AVC, so the firm keeps producing while it loses money. Because it is below minimum ATC, firms exit in the long run until the price rises to \\$13 and the rest break even.',
  },
  {
    id: 'mpco-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A constant-cost competitive industry is in long-run equilibrium when a new technology cuts every firm\'s marginal and average costs. What happens to the market price in the long run?',
    options: ['It returns to its original level', 'It falls to the new, lower minimum ATC', 'It rises as firms leave the industry', 'It stays where the short run left it'],
    correctIndex: 1,
    explanation: 'Lower costs bring short-run profit, which draws in new firms and shifts market supply right. Entry continues until the price equals the new minimum ATC, so the cost saving passes to buyers.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Profit Maximization from Tables' },
    { partNumber: 3, partTitle: 'The Side-by-Side Graph' },
    { partNumber: 4, partTitle: 'Short-Run Decisions with Numbers' },
    { partNumber: 5, partTitle: 'Long-Run Adjustment' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
