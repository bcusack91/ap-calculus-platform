/**
 * Entrance Quiz — Scarcity & Opportunity Cost (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mso-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A farmer can use a field to grow corn worth \\$5,000, grow soybeans worth \\$4,200, or rent the field to a neighbor for \\$3,000. If she grows corn, what is the opportunity cost of that choice?',
    options: ['\\$7,200', '\\$3,000', '\\$4,200', '\\$5,000'],
    correctIndex: 2,
    explanation: 'Opportunity cost is the value of the single next-best alternative, which is the \\$4,200 soybean crop. Adding the soybeans and the rent to get \\$7,200 counts alternatives she could not have chosen at the same time.',
  },
  {
    id: 'mso-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A florist is listing the resources her shop uses. Which one is capital as economists define the factor of production?',
    options: ['The \\$20,000 held in the shop\'s bank account', 'The van the shop uses to deliver orders', 'The lot of land on which the shop stands', 'The shares of stock the shop has sold to investors'],
    correctIndex: 1,
    explanation: 'Capital is a physical tool used to produce other goods and services, such as a delivery van. Money and stock shares are financial assets, not productive resources, and the lot is land.',
  },
  {
    id: 'mso-ent-2a', partNumber: 2, partTitle: 'Scarcity, Choice & Economic Systems',
    question: 'Marco leaves a job paying \\$30,000 a year to run his own repair shop; his other offer was a \\$26,000 job. Running the shop costs \\$12,000 in rent and \\$5,000 in parts for the year, and he already paid a nonrefundable \\$2,000 for a training course. What is the yearly opportunity cost of running the shop?',
    options: ['\\$73,000', '\\$49,000', '\\$17,000', '\\$47,000'],
    correctIndex: 3,
    explanation: 'Count the \\$30,000 salary he gives up (his next-best option) plus the \\$17,000 of rent and parts that only the shop requires, for \\$47,000. The \\$2,000 course is sunk, and the \\$26,000 offer is not his next-best alternative.',
  },
  {
    id: 'mso-ent-2b', partNumber: 2, partTitle: 'Scarcity, Choice & Economic Systems',
    question: 'Which of the following statements is normative?',
    options: ['The city spends too little money on public buses', 'Raising the gas tax would reduce how far people drive', 'Rent control in the city has led to fewer new apartments', 'A higher minimum wage would make half of teens jobless'],
    correctIndex: 0,
    explanation: 'Saying the city spends too little is a value judgment that evidence alone cannot settle. The other three are positive claims that can be checked against data, even the one that is almost certainly false.',
  },
  {
    id: 'mso-ent-3a', partNumber: 3, partTitle: 'Building the PPC & Increasing Opportunity Cost',
    question: 'An economy\'s production possibilities are shown below.\n\n| Point | Robots | Grain (tons) |\n|---|---|---|\n| A | 0 | 500 |\n| B | 5 | 470 |\n| C | 10 | 410 |\n| D | 15 | 320 |\n| E | 20 | 200 |\n| F | 25 | 0 |\n\nWhat is the average opportunity cost of one robot when the economy moves from C to E?',
    options: ['21 tons of grain', '210 tons of grain', '24 tons of grain', '18 tons of grain'],
    correctIndex: 0,
    explanation: 'Grain falls from 410 to 200 tons, a total of 210 tons, while robots rise by 10, so each robot costs 21 tons on average. The 18 and 24 figures are the costs of the separate C to D and D to E steps.',
  },
  {
    id: 'mso-ent-3b', partNumber: 3, partTitle: 'Building the PPC & Increasing Opportunity Cost',
    question: 'A country uses all of its resources to make only military goods, even though its citizens place a high value on consumer goods. This output point is',
    options: ['allocatively efficient but not productively efficient', 'productively efficient but not allocatively efficient', 'neither productively nor allocatively efficient', 'both productively and allocatively efficient'],
    correctIndex: 1,
    explanation: 'Using every resource puts the country on its PPC, so it is productively efficient. Because the mix ignores what citizens value, marginal benefit does not equal marginal cost and the point is not allocatively efficient.',
  },
  {
    id: 'mso-ent-4a', partNumber: 4, partTitle: 'Reading PPC Graphs: Shifts, Pivots & Movements',
    question: 'An island has a straight-line PPC: it can catch at most 200 tons of fish or build at most 50 boats. A new net doubles the maximum fish catch to 400 tons and does nothing for boatbuilding. What happens to the opportunity cost of one boat?',
    options: ['4 tons of fish before and 2 tons after', '4 tons of fish before and 4 tons after', '4 tons of fish before and 8 tons after', '0.25 tons of fish before and 0.5 tons after'],
    correctIndex: 2,
    explanation: 'The cost of a boat is the maximum fish divided by the maximum boats: 200 ÷ 50 = 4 tons before and 400 ÷ 50 = 8 tons after. Fish became cheaper to produce, so each boat now gives up more fish.',
  },
  {
    id: 'mso-ent-4b', partNumber: 4, partTitle: 'Reading PPC Graphs: Shifts, Pivots & Movements',
    question: 'Which event moves an economy from a point inside its PPC to a point on the curve without shifting the curve?',
    options: ['A newly found oil field is drilled and pumps', 'Immigration enlarges the labor force by five percent', 'Higher prices raise the dollar value of all output', 'Laid-off factory workers are rehired as sales recover'],
    correctIndex: 3,
    explanation: 'Rehiring idle workers puts existing resources back to use, which is a movement toward the curve. New oil and more workers add resources and shift the curve out, and higher prices change no resource at all.',
  },
  {
    id: 'mso-ent-5a', partNumber: 5, partTitle: 'The PPC as a Macro Model & Common Misconceptions',
    question: 'A country\'s unemployment rate is 5 percent, and all of that unemployment is frictional or structural. On its PPC, the country is producing',
    options: ['at a point inside the curve', 'at a point on the curve', 'at a point outside the curve', 'on a curve that shifted inward'],
    correctIndex: 1,
    explanation: 'With no cyclical unemployment the economy is at its natural rate, which is full employment, so it produces on the PPC. Full employment does not require zero unemployment.',
  },
  {
    id: 'mso-ent-5b', partNumber: 5, partTitle: 'The PPC as a Macro Model & Common Misconceptions',
    question: 'Which change would shift a country\'s PPC for consumer goods and capital goods outward?',
    options: ['A recession ends and idle factories reopen', 'Consumers decide they want more consumer goods', 'Workers finish training that raises their skills', 'Prices of consumer goods rise by ten percent'],
    correctIndex: 2,
    explanation: 'Training adds human capital, a better resource, so the economy can produce more of both goods. Reopening idle factories moves the economy toward the existing curve, tastes cause a movement along it, and prices are not resources.',
  },
  {
    id: 'mso-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A country\'s production possibilities are shown below.\n\n| Point | Tablets | Rice (tons) |\n|---|---|---|\n| P | 0 | 90 |\n| Q | 10 | 84 |\n| R | 20 | 72 |\n| S | 30 | 54 |\n| T | 40 | 0 |\n\nWhich statement about a combination of goods is correct?',
    options: ['10 tablets and 86 tons of rice is efficient', '30 tablets and 50 tons of rice is unattainable', '40 tablets and 10 tons of rice lies on the curve', '20 tablets and 70 tons of rice lies inside the curve'],
    correctIndex: 3,
    explanation: 'With 20 tablets the country can grow up to 72 tons, so 70 tons leaves some resources idle and lies inside the curve. The 86-ton and 10-ton combinations exceed what the table allows, and 50 tons with 30 tablets is attainable because the maximum is 54.',
  },
  {
    id: 'mso-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'Using the same table (P: 0 tablets, 90 tons; Q: 10, 84; R: 20, 72; S: 30, 54; T: 40, 0), what is the opportunity cost of one tablet for each move from P to Q, Q to R, R to S and S to T?',
    options: ['6, 12, 18 and 54 tons of rice', '0.6, 1.2, 1.8 and 5.4 tons of rice', '2.25 tons of rice for every move', '1.7, 0.8, 0.6 and 0.2 tons of rice'],
    correctIndex: 1,
    explanation: 'Each move gains 10 tablets, so divide the rice given up (6, 12, 18 and 54 tons) by 10. The rising costs show increasing opportunity cost; 6, 12, 18 and 54 are the totals for each move, not per-tablet costs.',
  },
  {
    id: 'mso-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Countries A and B start with identical PPCs for capital goods and consumer goods. This decade, A chooses a point with far more capital goods than B chooses. Compared with B, A will have',
    options: ['higher consumption now and a curve farther out later', 'reduced consumption now and the same curve later', 'equal consumption now and a curve farther in later', 'lower consumption now and a curve farther out later'],
    correctIndex: 3,
    explanation: 'Making more capital goods means fewer consumer goods today, but the added machines and factories raise future capacity. A\'s PPC therefore shifts out by more than B\'s.',
  },
  {
    id: 'mso-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A country with a straight-line PPC can make at most 90 shirts or at most 30 jackets. It currently makes 10 jackets and 40 shirts. Which statement is correct?',
    options: ['Shirt output could rise by 20 with jackets unchanged', 'Jacket output could rise by 20 with shirts unchanged', 'Each jacket costs one-third of a shirt to produce', 'The country is producing a point on its PPC now'],
    correctIndex: 0,
    explanation: 'Each jacket costs 90 ÷ 30 = 3 shirts, so with 10 jackets the maximum is 90 − 30 = 60 shirts, which is 20 more than the 40 it makes. The point is inside the PPC, and one-third of a jacket is the cost of a shirt, not the reverse.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Scarcity, Choice & Economic Systems' },
    { partNumber: 3, partTitle: 'Building the PPC & Increasing Opportunity Cost' },
    { partNumber: 4, partTitle: 'Reading PPC Graphs: Shifts, Pivots & Movements' },
    { partNumber: 5, partTitle: 'The PPC as a Macro Model & Common Misconceptions' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
