/**
 * Entrance Quiz — GDP & Economic Growth (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mgdp-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A country\'s nominal GDP this year is \\$660 billion, and its GDP deflator is 120. What is its real GDP?',
    options: ['\\$550 billion', '\\$792 billion', '\\$540 billion', '\\$660 billion'],
    correctIndex: 0,
    explanation: 'Real GDP = (nominal GDP ÷ deflator) × 100 = (\\$660 ÷ 120) × 100 = \\$550 billion. A deflator above 100 means prices have risen since the base year, so real GDP is below nominal GDP.',
  },
  {
    id: 'mgdp-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Which of the following adds to U.S. GDP this year?',
    options: ['A retiree receives a Social Security check', 'A family buys a used minivan built in 2015', 'An investor buys newly issued corporate stock', 'A Japanese-owned plant in Ohio builds a new truck'],
    correctIndex: 3,
    explanation: 'GDP counts new final goods produced inside U.S. borders, whoever owns the plant. A Social Security check is a transfer payment, the used minivan was counted when it was built, and stock is a financial asset.',
  },
  {
    id: 'mgdp-ent-2a', partNumber: 2, partTitle: 'The Circular Flow & Three Ways to Measure GDP',
    question: 'A cotton farmer sells cotton to a mill for \\$2. The mill sells cloth to a shirt maker for \\$7, the shirt maker sells the shirt to a store for \\$15, and the store sells it to a household for \\$25. What is the store\'s value added, and how much does the shirt add to GDP?',
    options: ['\\$15 and \\$25', '\\$10 and \\$25', '\\$10 and \\$49', '\\$25 and \\$49'],
    correctIndex: 1,
    explanation: 'The store\'s value added is its sale price minus what it paid, \\$25 − \\$15 = \\$10. The values added at every stage sum to \\$25, the final price; adding all the sales to get \\$49 double counts the intermediate goods.',
  },
  {
    id: 'mgdp-ent-2b', partNumber: 2, partTitle: 'The Circular Flow & Three Ways to Measure GDP',
    question: 'A bakery pays its employees their weekly wages. In the circular flow model, this payment is',
    options: ['a money flow from firms to households in the product market', 'a real flow from households to firms in the factor market', 'a money flow from firms to households in the factor market', 'a money flow from households to firms in the factor market'],
    correctIndex: 2,
    explanation: 'Wages pay for labor, which households sell in the factor market, so the money moves from firms to households there. The labor itself is the real flow going the other way, and the product market is where households buy goods.',
  },
  {
    id: 'mgdp-ent-3a', partNumber: 3, partTitle: 'Classifying Transactions: What Counts and Where',
    question: 'A country reports the following, in billions of dollars.\n\n| Item | Amount |\n|---|---|\n| Household purchases of new goods and services | 800 |\n| Business purchases of new equipment | 150 |\n| Construction of new homes | 70 |\n| Business inventories fell by | 20 |\n| Government purchases of goods and services | 300 |\n| Government transfer payments | 120 |\n| Purchases of corporate stock | 90 |\n| Sales of used cars between individuals | 30 |\n| Exports | 100 |\n| Imports | 140 |\n\nWhat is GDP?',
    options: ['\\$1,300 billion', '\\$1,380 billion', '\\$1,500 billion', '\\$1,260 billion'],
    correctIndex: 3,
    explanation: 'C = 800, I = 150 + 70 − 20 = 200, G = 300 and net exports = 100 − 140 = −40, so GDP = \\$1,260 billion. Transfers, stock purchases and used cars are excluded, and the fall in inventories is subtracted within I.',
  },
  {
    id: 'mgdp-ent-3b', partNumber: 3, partTitle: 'Classifying Transactions: What Counts and Where',
    question: 'In 2025 a carmaker builds 500 cars worth \\$20,000 each and sells 300 of them. In 2026 it builds no cars and sells the other 200 to households. How do these 200 cars change 2026 GDP?',
    options: ['\\$0', '\\$4 million', '\\$10 million', '−\\$4 million'],
    correctIndex: 0,
    explanation: 'The 200 cars were counted in 2025 as inventory investment. In 2026 their sale adds \\$4 million to consumption, but inventories fall by the same \\$4 million, so 2026 GDP is unchanged.',
  },
  {
    id: 'mgdp-ent-4a', partNumber: 4, partTitle: 'Real vs. Nominal GDP Calculations',
    question: 'An economy produces only burgers and movie tickets; 2020 is the base year.\n\n| Year | Burger price | Burgers | Ticket price | Tickets |\n|---|---|---|---|---|\n| 2020 | \\$4 | 200 | \\$10 | 50 |\n| 2024 | \\$5 | 220 | \\$12 | 60 |\n\nWhat is the GDP deflator in 2024?',
    options: ['81.3', '140.0', '123.0', '113.8'],
    correctIndex: 2,
    explanation: 'Nominal 2024 GDP is \\$1,100 + \\$720 = \\$1,820, and real 2024 GDP at 2020 prices is \\$880 + \\$600 = \\$1,480. The deflator is (\\$1,820 ÷ \\$1,480) × 100 ≈ 123.0.',
  },
  {
    id: 'mgdp-ent-4b', partNumber: 4, partTitle: 'Real vs. Nominal GDP Calculations',
    question: 'From one year to the next, a country\'s GDP deflator rises from 125 to 135 and its nominal GDP grows by 11 percent. About how fast did real GDP grow?',
    options: ['1 percent', '3 percent', '8 percent', '19 percent'],
    correctIndex: 1,
    explanation: 'Inflation is (135 − 125) ÷ 125 = 8 percent, not the 10-point rise in the index. Real growth is about nominal growth minus inflation, 11 − 8 = 3 percent.',
  },
  {
    id: 'mgdp-ent-5a', partNumber: 5, partTitle: 'Limitations of GDP & the Business Cycle',
    question: 'An economy\'s natural rate of unemployment is 4.5 percent. Last quarter real GDP was \\$990 billion; this quarter it is \\$1,005 billion, while potential output is \\$1,025 billion and unemployment is 6.0 percent. Where is the economy?',
    options: ['In an expansion, with a recessionary gap', 'In an expansion, with an inflationary gap', 'In a contraction, with a recessionary gap', 'In a contraction, with an inflationary gap'],
    correctIndex: 0,
    explanation: 'Real GDP is rising, so the economy is expanding, but it is still \\$20 billion below potential with unemployment above the natural rate. A recovery can be under way while a recessionary gap remains.',
  },
  {
    id: 'mgdp-ent-5b', partNumber: 5, partTitle: 'Limitations of GDP & the Business Cycle',
    question: 'Families in a town stop cooking at home and buy the same meals from restaurants instead, so the amount of food prepared does not change. What happens to measured GDP?',
    options: ['It is unchanged because no extra food is made', 'It falls because home production is lost', 'It is unchanged because meals are intermediate', 'It rises even though no extra food is made'],
    correctIndex: 3,
    explanation: 'Home cooking is nonmarket production and is left out of GDP, while restaurant meals are market sales that count. Moving the same work into the market raises measured GDP without raising actual production.',
  },
  {
    id: 'mgdp-ent-6a', partNumber: 6, partTitle: 'Economic Growth & Public Policy',
    question: 'In Year 1 an economy has 400 workers who produce 20,000 units of real output. In Year 2 it has 420 workers who produce 23,100 units. By what percent did labor productivity grow?',
    options: ['15.5 percent', '5.0 percent', '10.0 percent', '20.0 percent'],
    correctIndex: 2,
    explanation: 'Output per worker rises from 20,000 ÷ 400 = 50 to 23,100 ÷ 420 = 55 units, a 10.0 percent increase. The 15.5 percent figure is growth in total output, part of which came from 5 percent more workers.',
  },
  {
    id: 'mgdp-ent-6b', partNumber: 6, partTitle: 'Economic Growth & Public Policy',
    question: 'A government funds a new job-training program by borrowing instead of cutting other spending. Compared with the version that keeps the budget balanced, the boost to long-run growth is',
    options: ['larger, as borrowed funds add to the supply of capital', 'smaller, as higher real interest rates cut private investment', 'the same, as only the training affects potential output', 'lower, since falling real interest rates discourage saving'],
    correctIndex: 1,
    explanation: 'Government borrowing raises the demand for loanable funds, which raises the real interest rate. Higher rates crowd out private investment in physical capital, offsetting part of the human-capital gain.',
  },
  {
    id: 'mgdp-ent-7a', partNumber: 7, partTitle: 'Synthesis Review & Exam Practice',
    question: 'A country\'s base year is 2024, when its nominal GDP was \\$2,900 billion. In 2025 nominal GDP is \\$3,180 billion, the GDP deflator is 106, and potential real GDP is \\$3,050 billion. What was real GDP growth, and what kind of gap exists in 2025?',
    options: ['About 9.7 percent, with an inflationary gap', 'About 3.4 percent, with an inflationary gap', 'About 9.7 percent, with a recessionary gap', 'About 3.4 percent, with a recessionary gap'],
    correctIndex: 3,
    explanation: 'Real 2025 GDP is (\\$3,180 ÷ 106) × 100 = \\$3,000 billion, up \\$100 billion from \\$2,900 billion, about 3.4 percent. That is below the \\$3,050 billion potential, so a recessionary gap remains; 9.7 percent is nominal growth.',
  },
  {
    id: 'mgdp-ent-7b', partNumber: 7, partTitle: 'Synthesis Review & Exam Practice',
    question: 'Which change represents long-run growth rather than a recovery?',
    options: ['A new port raises the country\'s potential output', 'Unemployment falls back to the natural rate', 'Idle factories restart as spending picks up', 'AD shifts right, pushing output past potential'],
    correctIndex: 0,
    explanation: 'Long-run growth is an increase in potential output, shown as an outward PPC shift or a rightward LRAS shift. Rehiring idle resources is a move back toward potential, and an AD shift alone does not raise potential.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'The Circular Flow & Three Ways to Measure GDP' },
    { partNumber: 3, partTitle: 'Classifying Transactions: What Counts and Where' },
    { partNumber: 4, partTitle: 'Real vs. Nominal GDP Calculations' },
    { partNumber: 5, partTitle: 'Limitations of GDP & the Business Cycle' },
    { partNumber: 6, partTitle: 'Economic Growth & Public Policy' },
    { partNumber: 7, partTitle: 'Synthesis Review & Exam Practice' },
  ]
}
