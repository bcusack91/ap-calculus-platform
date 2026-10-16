/**
 * Entrance Quiz — Production & Costs (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mprc-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A shop with fixed equipment produces 12, 30, 45, 56 and 62 units per day with 1, 2, 3, 4 and 5 workers. With which worker do diminishing marginal returns begin?',
    options: ['The 3rd, whose MP is the first to fall', 'The 2nd, whose MP is the largest', 'The 5th, whose MP is the smallest', 'The 4th, where AP first falls'],
    correctIndex: 0,
    explanation: 'The marginal products are 12, 18, 15, 11 and 6. The 3rd worker is the first whose MP (15) is smaller than the one before (18), so diminishing returns start there, even though total product keeps rising.',
  },
  {
    id: 'mprc-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Why does a firm\'s long-run average total cost fall as it expands from a small size?',
    options: ['Fixed costs are spread over more units in the long run', 'Specialization and bulk buying lower the cost of each unit', 'Diminishing marginal returns make each unit cheaper', 'Workers become more skilled as the firm hires more of them'],
    correctIndex: 1,
    explanation: 'Economies of scale come from specialized workers and managers, bulk purchasing and large, efficient machines. There are no fixed costs in the long run, and diminishing returns is a short-run idea that raises costs.',
  },
  {
    id: 'mprc-ent-2a', partNumber: 2, partTitle: 'The Production Function in Depth',
    question: 'With one machine, a workshop\'s total product with 0 through 6 workers is 0, 6, 16, 24, 29, 31 and 30 units. With which worker do diminishing marginal returns begin, and at how many workers is total product highest?',
    options: ['2nd worker, peak at 6 workers', '6th worker, peak at 5 workers', '3rd worker, peak at 5 workers', '3rd worker, peak at 6 workers'],
    correctIndex: 2,
    explanation: 'The marginal products are 6, 10, 8, 5, 2 and −1, so MP first falls with the 3rd worker. Total product peaks at 31 units with 5 workers; the 6th worker\'s negative MP lowers it.',
  },
  {
    id: 'mprc-ent-2b', partNumber: 2, partTitle: 'The Production Function in Depth',
    question: 'In the short run, a firm hires one more worker whose marginal product is positive but below the current average product. What happens?',
    options: ['AP is rising while TP is falling', 'AP and TP are both falling', 'AP is at its peak and TP is falling', 'AP is falling while TP is still rising'],
    correctIndex: 3,
    explanation: 'A marginal value below the average pulls the average down, so AP falls. Because MP is still positive, the worker adds some output and total product keeps rising.',
  },
  {
    id: 'mprc-ent-3a', partNumber: 3, partTitle: 'Building a Cost Table',
    question: 'A firm\'s total cost at 0 through 5 units of output is \\$50, \\$90, \\$120, \\$140, \\$170 and \\$210. What are the average total cost at 5 units and the marginal cost of the 5th unit?',
    options: ['\\$42 and \\$40', '\\$32 and \\$40', '\\$42 and \\$210', '\\$40 and \\$42'],
    correctIndex: 0,
    explanation: 'Average total cost is \\$210 ÷ 5 = \\$42, and the 5th unit adds \\$210 − \\$170 = \\$40. The \\$32 figure is average variable cost, (\\$210 − \\$50) ÷ 5.',
  },
  {
    id: 'mprc-ent-3b', partNumber: 3, partTitle: 'Building a Cost Table',
    question: 'Labor is a bakery\'s only variable input, and each worker costs \\$30 an hour. The next worker hired has a marginal product of 6 loaves an hour, and at the current staffing the average product is 10 loaves an hour. What are the marginal cost of a loaf and the current average variable cost?',
    options: ['\\$3.00 and \\$5.00', '\\$5.00 and \\$3.00', '\\$0.20 and \\$0.10', '\\$180.00 and \\$300.00'],
    correctIndex: 1,
    explanation: 'Marginal cost is the wage divided by marginal product, \\$30 ÷ 6 = \\$5.00, and average variable cost is the wage divided by average product, \\$30 ÷ 10 = \\$3.00. High productivity means low cost per loaf.',
  },
  {
    id: 'mprc-ent-4a', partNumber: 4, partTitle: 'Reading Cost-Curve Graphs',
    question: 'A per-unit cost graph shows that at 60 units, ATC is \\$20 and AVC is \\$14. What is the firm\'s total fixed cost, and what is its average fixed cost at 120 units?',
    options: ['\\$360 and \\$6', '\\$1,200 and \\$3', '\\$360 and \\$3', '\\$840 and \\$7'],
    correctIndex: 2,
    explanation: 'Fixed cost is (ATC − AVC) × Q = \\$6 × 60 = \\$360, the same at every output. At 120 units, AFC = \\$360 ÷ 120 = \\$3, so the ATC–AVC gap shrinks as output grows.',
  },
  {
    id: 'mprc-ent-4b', partNumber: 4, partTitle: 'Reading Cost-Curve Graphs',
    question: 'Which feature must appear on a correctly drawn per-unit cost graph with MC, AVC and ATC?',
    options: ['ATC and AVC meet at very high levels of output', 'Minimum ATC comes at a smaller output than minimum AVC', 'The vertical gap between ATC and AVC stays the same', 'MC cuts through the lowest point of ATC'],
    correctIndex: 3,
    explanation: 'While MC is below ATC it pulls ATC down, and once above it pulls ATC up, so MC crosses ATC at its minimum. The ATC–AVC gap is AFC, which shrinks but never reaches zero, and minimum ATC lies to the right of minimum AVC.',
  },
  {
    id: 'mprc-ent-5a', partNumber: 5, partTitle: 'Cost Shifters and Long-Run Cost',
    question: 'A city raises the yearly license fee every restaurant must pay, whatever its output. Which of a restaurant\'s cost curves shift?',
    options: ['AFC and ATC only', 'MC, AVC, AFC and ATC', 'MC and ATC, but not AVC', 'AVC and ATC, but not MC'],
    correctIndex: 0,
    explanation: 'The fee is a fixed cost, so it raises AFC and therefore ATC. It does not change with output, so it leaves the cost of an extra unit (MC) and the variable cost per unit (AVC) unchanged.',
  },
  {
    id: 'mprc-ent-5b', partNumber: 5, partTitle: 'Cost Shifters and Long-Run Cost',
    question: 'A furniture maker raises every input by 50 percent, and its output grows by 80 percent. Which description fits?',
    options: ['Decreasing returns, with long-run ATC rising', 'Increasing returns, with long-run ATC falling', 'Constant returns, with long-run ATC flat', 'Diminishing marginal returns, with MC rising'],
    correctIndex: 1,
    explanation: 'Output grows by a larger percentage than all inputs, which is increasing returns to scale. Total cost rises about 50 percent while output rises 80 percent, so cost per unit falls: economies of scale.',
  },
  {
    id: 'mprc-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A candle maker\'s total cost for 0 through 6 boxes is \\$40, \\$75, \\$100, \\$120, \\$145, \\$180 and \\$225. At what output is average total cost lowest, and with which box does marginal cost begin to rise?',
    options: ['4 boxes, and the 4th box', '5 boxes, and the 3rd box', '5 boxes, and the 4th box', '3 boxes, and the 5th box'],
    correctIndex: 2,
    explanation: 'Marginal costs are \\$35, \\$25, \\$20, \\$25, \\$35 and \\$45, so MC starts rising with the 4th box. ATC is \\$36.25 at 4 boxes, \\$36 at 5 and \\$37.50 at 6, so its minimum is at 5, where MC (\\$35) is still below the average.',
  },
  {
    id: 'mprc-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A government considers two taxes on a firm: a lump-sum tax of \\$2,000 a year, or a tax of \\$2 on each unit. Under which tax does the output at which ATC is lowest move to a larger quantity?',
    options: ['The per-unit tax, since MC and ATC both rise', 'Both taxes, since each one raises average cost', 'Neither tax, since output choices ignore taxes', 'The lump-sum tax, since MC stays put while ATC rises'],
    correctIndex: 3,
    explanation: 'The lump-sum tax raises ATC but not MC, so the rising MC curve meets the higher ATC at a larger output. The per-unit tax raises MC and ATC by the same \\$2, so they still cross at the same output.',
  },
  {
    id: 'mprc-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A firm has a fixed cost of \\$200. Its variable cost is \\$600 at 40 units and \\$625 at 41 units. What are average total cost at 40 units, average fixed cost at 40 units and the marginal cost of the 41st unit?',
    options: ['\\$20, \\$5 and \\$25', '\\$15, \\$5 and \\$25', '\\$20, \\$5 and \\$625', '\\$20, \\$15 and \\$25'],
    correctIndex: 0,
    explanation: 'Average total cost is (\\$200 + \\$600) ÷ 40 = \\$20, average fixed cost is \\$200 ÷ 40 = \\$5, and the 41st unit adds \\$625 − \\$600 = \\$25. The \\$15 figure is average variable cost.',
  },
  {
    id: 'mprc-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What explains the eventual rise of a firm\'s short-run marginal cost curve, and what explains the eventual rise of its long-run average total cost curve?',
    options: ['Diseconomies of scale for MC, and diminishing returns for long-run ATC', 'Diminishing returns for MC, and diseconomies of scale for long-run ATC', 'Diminishing returns for MC, and rising fixed costs for long-run ATC', 'Diminishing returns for both MC and long-run ATC'],
    correctIndex: 1,
    explanation: 'In the short run a fixed input is shared by more workers, so MP falls and MC rises. In the long run no input is fixed; long-run ATC rises because very large organizations become harder to coordinate.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'The Production Function in Depth' },
    { partNumber: 3, partTitle: 'Building a Cost Table' },
    { partNumber: 4, partTitle: 'Reading Cost-Curve Graphs' },
    { partNumber: 5, partTitle: 'Cost Shifters and Long-Run Cost' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
