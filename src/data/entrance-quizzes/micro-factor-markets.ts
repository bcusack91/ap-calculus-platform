/**
 * Entrance Quiz — Factor Markets (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mfac-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A firm sells its output for \\$6 per unit in a perfectly competitive market and can hire workers at \\$40 a day. The first four workers add 12, 9, 6 and 3 units a day. How many workers does it hire?',
    options: ['2 workers', '3 workers', '1 worker', '4 workers'],
    correctIndex: 0,
    explanation: 'MRP = MP × P gives \\$72, \\$54, \\$36 and \\$18. The second worker\'s \\$54 covers the \\$40 wage, but the third worker\'s \\$36 does not.',
  },
  {
    id: 'mfac-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Consumer demand for electric scooters rises, pushing up their price. In the competitive market for scooter-assembly workers, what happens?',
    options: ['Wage and employment both fall as labor demand decreases', 'Wage rises and employment falls as labor supply decreases', 'Wage and employment both rise as labor demand grows', 'Wage and employment stay the same as only scooter prices change'],
    correctIndex: 2,
    explanation: 'Labor demand is derived from product demand: a higher scooter price raises each worker\'s MRP, shifting labor demand right. Wage and employment both rise.',
  },
  {
    id: 'mfac-ent-2a', partNumber: 2, partTitle: 'MRP When the Product Market Is Not Competitive',
    question: 'A bakery with pricing power sells 20 dozen at \\$9 with 2 workers and 25 dozen at \\$8 with 3 workers. What is the marginal revenue product of the third worker?',
    options: ['\\$20', '\\$45', '\\$40', '\\$200'],
    correctIndex: 0,
    explanation: 'Total revenue rises from \\$180 to \\$200, so the third worker adds \\$20. Multiplying the 5 extra dozen by \\$8 gives \\$40, which ignores the price cut on the first 20 dozen.',
  },
  {
    id: 'mfac-ent-2b', partNumber: 2, partTitle: 'MRP When the Product Market Is Not Competitive',
    question: 'Two firms have identical production and both hire at the same market wage. One sells in a perfectly competitive product market; the other faces a downward-sloping demand curve for its product. Compared with the first firm, the second firm hires',
    options: ['more workers, because it can sell extra output at a premium', 'the same number, because their marginal products are equal', 'fewer workers, because its MRP is lower and falls faster', 'more workers, because its price stays above marginal revenue'],
    correctIndex: 2,
    explanation: 'A price maker must cut its price to sell extra output, so its MRP equals MP × MR, which is below MP × P. Its MRP reaches the wage at a smaller number of workers.',
  },
  {
    id: 'mfac-ent-3a', partNumber: 3, partTitle: 'The Firm in a Competitive Factor Market',
    question: 'A licensing rule cuts the supply of qualified electricians in a perfectly competitive labor market. On the graph for one electrical contractor, what happens?',
    options: ['Its MRP curve shifts left while its MFC = W line stays put', 'Its MFC = W line moves up and it moves up along its own MRP curve', 'Its MFC = W line moves down and it hires more electricians', 'Its MFC line becomes upward sloping and it pays less than MRP'],
    correctIndex: 1,
    explanation: 'The market wage rises, so the firm\'s horizontal MFC = W line moves up. Its MRP depends only on productivity and the output price, so the firm moves up along MRP and hires fewer workers.',
  },
  {
    id: 'mfac-ent-3b', partNumber: 3, partTitle: 'The Firm in a Competitive Factor Market',
    question: 'A farm sells wheat for \\$3 a bushel and rents tractors for \\$90 a day, both in competitive markets. The first four tractors add 50, 40, 25 and 20 bushels a day. How many tractors does it rent?',
    options: ['1 tractor', '4 tractors', '3 tractors', '2 tractors'],
    correctIndex: 3,
    explanation: 'The tractors\' MRPs are \\$150, \\$120, \\$75 and \\$60. Only the first two bring in at least their \\$90 rental price, so the farm rents 2.',
  },
  {
    id: 'mfac-ent-4a', partNumber: 4, partTitle: 'Choosing Inputs: Least-Cost and Profit-Maximizing Rules',
    question: 'A firm pays workers \\$12 an hour and rents machines for \\$30 an hour. Its last worker adds 24 units and its last machine adds 45 units. To produce its current output at the lowest cost, it should',
    options: ['move spending from capital to labor', 'shift spending toward both inputs equally', 'shift spending from labor to capital', 'keep spending on each input unchanged'],
    correctIndex: 0,
    explanation: 'The last worker yields 24 ÷ \\$12 = 2 units per dollar, while the last machine yields 45 ÷ \\$30 = 1.5. Moving dollars from capital to labor raises output for the same cost until the ratios are equal.',
  },
  {
    id: 'mfac-ent-4b', partNumber: 4, partTitle: 'Choosing Inputs: Least-Cost and Profit-Maximizing Rules',
    question: 'A firm sells its output for \\$2 in a competitive market. At its current input mix, the last worker and the last machine each add 0.75 units per dollar spent on them. Which statement is correct?',
    options: ['It is least-cost and is already maximizing its profit', 'It is least-cost but should expand both inputs', 'It is not least-cost and should shift toward labor', 'It is least-cost but should hire less of both inputs'],
    correctIndex: 1,
    explanation: 'Equal ratios mean the mix is least-cost. Each dollar on either input returns 0.75 × \\$2 = \\$1.50 of revenue, so MRP/P = 1.5 > 1 and the firm should expand both inputs.',
  },
  {
    id: 'mfac-ent-5a', partNumber: 5, partTitle: 'Monopsony in Depth',
    question: 'A mill is the only employer in a town. How many workers does it hire, and what wage does it pay?\n\n| Workers | Wage needed (supply) | MRP |\n|---|---|---|\n| 1 | \\$6 | \\$30 |\n| 2 | \\$8 | \\$22 |\n| 3 | \\$10 | \\$16 |\n| 4 | \\$12 | \\$12 |\n| 5 | \\$14 | \\$8 |',
    options: ['3 workers at \\$14', '4 workers at \\$12', '3 workers at \\$10', '3 workers at \\$16'],
    correctIndex: 2,
    explanation: 'Total labor cost is \\$6, \\$16, \\$30 and \\$48, so MFC is \\$6, \\$10, \\$14 and \\$18. The third worker\'s \\$16 MRP covers its \\$14 MFC but the fourth\'s \\$12 does not, and the mill pays the supply wage for 3 workers, \\$10.',
  },
  {
    id: 'mfac-ent-5b', partNumber: 5, partTitle: 'Monopsony in Depth',
    question: 'A monopsonist faces labor supply $W = 20 + L$, so $MFC = 20 + 2L$, and its marginal revenue product is $MRP = 80 - L$. The government sets a minimum wage of \\$46. How many workers are employed?',
    options: ['20 workers', '34 workers', '30 workers', '26 workers'],
    correctIndex: 3,
    explanation: 'At \\$46 only 26 people are willing to work (46 = 20 + L), while the firm would want 34 (where MRP = 46). It hires the smaller number, 26, which is more than the 20 it hires without the minimum wage.',
  },
  {
    id: 'mfac-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'An orchard sells apples for \\$0.40 a pound and hires pickers at \\$10 an hour, both in perfectly competitive markets. Pickers 1 through 5 add 50, 40, 30, 20 and 10 pounds an hour. How many pickers does it hire, and what is the marginal factor cost of the fourth picker?',
    options: ['3 pickers; MFC of \\$8', '4 pickers; MFC of \\$10', '2 pickers; MFC of \\$12', '3 pickers; MFC of \\$10'],
    correctIndex: 3,
    explanation: 'MRP is \\$20, \\$16, \\$12, \\$8 and \\$4, so the orchard hires the 3 pickers whose MRP is at least \\$10. As a wage taker, every picker\'s MFC is the \\$10 wage.',
  },
  {
    id: 'mfac-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A monopsonist\'s MRP and MFC curves cross at 40 workers and \\$28. At 40 workers the labor supply curve is at \\$19. A competitive market would employ 48 workers at \\$23. What wage does the monopsonist pay, and how does its employment compare?',
    options: ['\\$28, with 8 fewer workers than competition', '\\$23, with the same number of workers', '\\$19, with 8 more workers than competition', '\\$19, with 8 fewer workers than competition'],
    correctIndex: 3,
    explanation: 'The monopsonist hires where MRP = MFC, at 40 workers, but pays only the wage on the supply curve for that many, \\$19. That is 8 workers fewer than the competitive 48.',
  },
  {
    id: 'mfac-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which change shifts a wage-taking firm\'s MRP curve to the left?',
    options: ['A rise in the market wage for its workers', 'A fall in the price of a robot that can do workers\' tasks', 'A rise in the price of the product it sells', 'A fall in the price of a complementary input'],
    correctIndex: 1,
    explanation: 'A cheaper substitute input lowers the value of each worker to the firm, shifting MRP left. A wage change is a movement along MRP, and a higher product price or cheaper complement shifts MRP right.',
  },
  {
    id: 'mfac-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A firm hires in a competitive labor market at \\$15 an hour but has pricing power in its product market. Adding a fourth worker raises output from 30 to 34 units, and the price falls from \\$6.00 to \\$5.50. Should it hire the fourth worker?',
    options: ['Yes, because the worker adds \\$22 of revenue', 'Yes, because the worker adds \\$24 of revenue', 'No, because the worker adds only \\$7 of revenue', 'Yes, because total revenue rises to \\$187'],
    correctIndex: 2,
    explanation: 'Total revenue rises from \\$180 to \\$187, so the worker\'s MRP is \\$7, below the \\$15 wage. Multiplying 4 units by a price overstates MRP because it ignores the price cut on the first 30 units.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'MRP When the Product Market Is Not Competitive' },
    { partNumber: 3, partTitle: 'The Firm in a Competitive Factor Market' },
    { partNumber: 4, partTitle: 'Choosing Inputs: Least-Cost and Profit-Maximizing Rules' },
    { partNumber: 5, partTitle: 'Monopsony in Depth' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
