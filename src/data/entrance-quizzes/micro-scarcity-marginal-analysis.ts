/**
 * Entrance Quiz — Scarcity & Marginal Analysis (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'msma-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Spending her whole budget, a consumer finds that her last slice of pizza gave 24 utils at a price of \\$4, and her last soda gave 10 utils at a price of \\$2. How can she raise her total utility without spending more?',
    options: ['More pizza and less soda', 'More soda and less pizza', 'The same amounts of each good', 'Less of both, saving the rest'],
    correctIndex: 0,
    explanation: 'Pizza gives 24 ÷ 4 = 6 utils per dollar and soda gives 10 ÷ 2 = 5, so shifting dollars from soda to pizza adds utility. As she buys more pizza its marginal utility falls until the two ratios are equal.',
  },
  {
    id: 'msma-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'You paid \\$40 for a nonrefundable ticket to tonight\'s game, which you value at \\$50. A neighbor then offers you \\$60 to babysit tonight, and you would enjoy both activities equally apart from the money. Which choice and reason are correct?',
    options: ['Attend, because the \\$40 ticket would otherwise be wasted', 'Take the job, because the \\$60 is worth more than the \\$50 game', 'Attend, because the game is worth more than the \\$40 ticket', 'Attend, because the game and ticket together are worth \\$90'],
    correctIndex: 1,
    explanation: 'The \\$40 is sunk: it is gone whatever you do, so only the \\$50 benefit of the game and the \\$60 you would earn matter. Babysitting gives the larger benefit.',
  },
  {
    id: 'msma-ent-2a', partNumber: 2, partTitle: 'Scarcity, Choice & Economic Systems',
    question: 'Ana quits a job paying \\$42,000 a year to attend a one-year program. Tuition is \\$18,000 and books are \\$2,000. She pays \\$10,000 in rent whether or not she enrolls. What is the opportunity cost of the year in the program?',
    options: ['\\$72,000', '\\$20,000', '\\$62,000', '\\$42,000'],
    correctIndex: 2,
    explanation: 'Count the explicit costs that only the program requires (\\$18,000 + \\$2,000) and the implicit cost of the forgone salary (\\$42,000), for \\$62,000. Rent is paid either way, so it is not part of the choice.',
  },
  {
    id: 'msma-ent-2b', partNumber: 2, partTitle: 'Scarcity, Choice & Economic Systems',
    question: 'In a market economy, buyers suddenly want many more electric bikes and their price rises. How does the market answer the question of what to produce?',
    options: ['Planners raise the official production quota for electric bikes', 'Buyers with the greatest need receive the bikes that exist first', 'Firms keep output the same and simply earn more on each bike', 'Higher profits pull resources into electric bikes'],
    correctIndex: 3,
    explanation: 'The higher price signals that buyers value the bikes more and rewards producers who respond, so resources move into bike production. Quotas belong to a command economy, and in a market goods go to those willing and able to pay.',
  },
  {
    id: 'msma-ent-3a', partNumber: 3, partTitle: 'The Production Possibilities Curve',
    question: 'A country\'s production possibilities are shown below.\n\n| Point | Wheat (tons) | Robots |\n|---|---|---|\n| A | 0 | 30 |\n| B | 10 | 27 |\n| C | 20 | 21 |\n| D | 30 | 12 |\n| E | 40 | 0 |\n\nWhat is the opportunity cost of one ton of wheat when the country moves from C to D?',
    options: ['0.9 robot', '9 robots', '1.1 robots', '0.6 robot'],
    correctIndex: 0,
    explanation: 'Moving from C to D gives up 21 − 12 = 9 robots for 10 more tons of wheat, so each ton costs 0.9 robot. The 9 is the total cost, and 1.1 is its reciprocal, the wheat cost of a robot.',
  },
  {
    id: 'msma-ent-3b', partNumber: 3, partTitle: 'The Production Possibilities Curve',
    question: 'A new seed doubles a country\'s wheat yields but does nothing for robot production. What happens to the opportunity cost of producing a robot, measured in wheat?',
    options: ['It falls, since the country can now make more of both', 'It rises, since each robot now means giving up more wheat', 'It is unchanged, since robot technology did not change', 'It falls, since wheat has become cheaper to produce'],
    correctIndex: 1,
    explanation: 'The PPC pivots out along the wheat axis. Resources moved into robots now give up more tons of wheat than before, so a robot costs more wheat while a ton of wheat costs fewer robots.',
  },
  {
    id: 'msma-ent-4a', partNumber: 4, partTitle: 'Comparative Advantage & Terms of Trade',
    question: 'A worker in Elm needs 3 hours to sew a shirt and 12 hours to sew a jacket. A worker in Fir needs 4 hours for a shirt and 8 hours for a jacket. Which country has the comparative advantage in jackets, and what is its opportunity cost of one jacket?',
    options: ['4 shirts per jacket, in Elm', '0.5 shirt per jacket, in Fir', '2 shirts per jacket, in Fir', '1.5 shirts per jacket, in Fir'],
    correctIndex: 2,
    explanation: 'With input data the good being priced goes on top: a jacket costs Elm 12 ÷ 3 = 4 shirts and Fir 8 ÷ 4 = 2 shirts, so Fir has the lower cost. The 0.5 figure is Fir\'s cost of a shirt, in jackets.',
  },
  {
    id: 'msma-ent-4b', partNumber: 4, partTitle: 'Comparative Advantage & Terms of Trade',
    question: 'Northia can produce 30 tablets or 10 phones a day; Southia can produce 16 tablets or 8 phones. Each has a constant opportunity cost. Which terms of trade would benefit both countries?',
    options: ['7 tablets for 2 phones', '3 tablets for 2 phones', '6 tablets for 2 phones', '5 tablets for 2 phones'],
    correctIndex: 3,
    explanation: 'A phone costs Northia 3 tablets and Southia 2 tablets, so Southia exports phones at a price strictly between 2 and 3 tablets. Five tablets for 2 phones is 2.5 tablets per phone; 6 for 2 equals Northia\'s own cost, so Northia gains nothing.',
  },
  {
    id: 'msma-ent-5a', partNumber: 5, partTitle: 'Cost-Benefit Analysis & Marginal Decision Tables',
    question: 'Leo left a \\$50,000-a-year job to run a bike shop and put \\$80,000 of his savings, which would have earned 5 percent interest, into it. This year the shop took in \\$200,000 and paid \\$130,000 in explicit costs. What are its accounting profit and economic profit?',
    options: ['\\$70,000 and \\$16,000', '\\$70,000 and \\$20,000', '\\$66,000 and \\$16,000', '\\$16,000 and \\$70,000'],
    correctIndex: 0,
    explanation: 'Accounting profit is \\$200,000 − \\$130,000 = \\$70,000. Economic profit also subtracts the implicit costs: \\$50,000 of forgone salary and \\$4,000 of forgone interest, leaving \\$16,000.',
  },
  {
    id: 'msma-ent-5b', partNumber: 5, partTitle: 'Cost-Benefit Analysis & Marginal Decision Tables',
    question: 'A town is deciding how many street sweepers to hire.\n\n| Sweeper | Marginal benefit | Marginal cost |\n|---|---|---|\n| 1st | \\$400 | \\$100 |\n| 2nd | \\$300 | \\$150 |\n| 3rd | \\$220 | \\$200 |\n| 4th | \\$150 | \\$250 |\n| 5th | \\$90 | \\$300 |\n\nHow many should it hire, and how many if the marginal cost of every sweeper rises by \\$40?',
    options: ['3, then 3', '3, then 2', '5, then 4', '1, then 1'],
    correctIndex: 1,
    explanation: 'Hire while marginal benefit is at least marginal cost: the 3rd adds \\$220 for \\$200, but the 4th adds \\$150 for \\$250. After the increase the 3rd costs \\$240, more than its \\$220 benefit, so the town hires 2.',
  },
  {
    id: 'msma-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'Kai has \\$13 to spend. Tacos cost \\$3 each and juices cost \\$1 each.\n\n| Unit | MU of tacos | MU of juice |\n|---|---|---|\n| 1st | 24 | 7 |\n| 2nd | 18 | 6 |\n| 3rd | 12 | 5 |\n| 4th | 9 | 4 |\n| 5th | 6 | 3 |\n\nWhich bundle maximizes his utility?',
    options: ['2 tacos and 7 juices', '4 tacos and 1 juice', '3 tacos and 4 juices', '3 tacos and 3 juices'],
    correctIndex: 2,
    explanation: 'The tacos\' MU per dollar is 8, 6, 4, 3 and the juices\' is 7, 6, 5, 4. Buying in order of MU per dollar gives 3 tacos and 4 juices, which costs exactly \\$13 and leaves the last unit of each at 4 utils per dollar; 3 and 3 leaves \\$1 unspent.',
  },
  {
    id: 'msma-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A bakery is deciding how many extra evening hours to stay open. The extra hours have marginal benefits of \\$150, \\$120, \\$95 and \\$70 and marginal costs of \\$70, \\$80, \\$90 and \\$100. How many hours should it add at first, after a \\$60 yearly license fee that does not depend on hours, and after a wage rise that adds \\$10 to every hour\'s cost?',
    options: ['3, 2 and 2 hours', '3, 3 and 3 hours', '4, 3 and 2 hours', '3, 3 and 2 hours'],
    correctIndex: 3,
    explanation: 'The 3rd hour adds \\$95 for \\$90 but the 4th adds \\$70 for \\$100, so 3 hours. The fixed fee changes no marginal cost, so still 3; the wage rise makes the 3rd hour cost \\$100, more than its \\$95, so 2.',
  },
  {
    id: 'msma-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which statement about scarcity and the PPC is correct?',
    options: ['A country can have a comparative advantage in both goods', 'A rise in unemployment shifts the whole PPC inward', 'Trade lets a country consume outside its own PPC', 'Money counts as capital because it can buy machines'],
    correctIndex: 2,
    explanation: 'Specializing and trading lets a country consume a bundle beyond what it could produce alone, while its PPC stays put. Comparative advantage in both goods is impossible, unemployment moves the economy inside the curve, and money is not physical capital.',
  },
  {
    id: 'msma-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A student can work up to 4 hours tonight at \\$15 an hour or spend that time studying. She values the 1st through 4th hours of studying at \\$40, \\$25, \\$12 and \\$8. How many hours should she study?',
    options: ['2 hours', '1 hour', '4 hours', '3 hours'],
    correctIndex: 0,
    explanation: 'Each hour of studying costs the \\$15 she could earn, so she studies while the benefit is at least \\$15. The first two hours are worth \\$40 and \\$25, but the third is worth only \\$12.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Scarcity, Choice & Economic Systems' },
    { partNumber: 3, partTitle: 'The Production Possibilities Curve' },
    { partNumber: 4, partTitle: 'Comparative Advantage & Terms of Trade' },
    { partNumber: 5, partTitle: 'Cost-Benefit Analysis & Marginal Decision Tables' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
