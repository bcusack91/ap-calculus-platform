/**
 * Entrance Quiz — Labor Markets (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mlab-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A firm sells its product for \\$5 in a competitive market and hires at a market wage of \\$30 an hour. Workers 1 through 5 add 14, 11, 8, 5 and 2 units an hour. How many workers does it hire?',
    options: ['2 workers', '4 workers', '5 workers', '3 workers'],
    correctIndex: 3,
    explanation: 'MRP is \\$70, \\$55, \\$40, \\$25 and \\$10. The first three workers bring in more than the \\$30 wage, but the fourth brings in only \\$25.',
  },
  {
    id: 'mlab-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A competitive labor market clears at a wage of \\$15 an hour. The government then sets a minimum wage of \\$13. What happens?',
    options: ['The wage falls to \\$13 and employment rises', 'The wage stays at \\$15 and employment is not changed', 'The wage stays at \\$15 and a labor surplus appears', 'The wage falls to \\$13 and a labor shortage appears'],
    correctIndex: 1,
    explanation: 'A floor below the equilibrium wage does not bind, so the market keeps paying \\$15 and employment does not change. Only a floor above \\$15 would create a surplus of labor.',
  },
  {
    id: 'mlab-ent-2a', partNumber: 2, partTitle: 'Labor Supply in Depth',
    question: 'Which event shifts the supply curve of retail clerks to the left?',
    options: ['Warehouse jobs that clerks could fill start paying more', 'The wage paid to retail clerks falls', 'Stores install machines that replace retail clerks', 'Consumers spend less money at retail stores'],
    correctIndex: 0,
    explanation: 'Higher pay in an alternative job raises the opportunity cost of staying in retail, so fewer people offer to work as clerks at each wage. A change in the clerks\' own wage is a movement along supply, and the other two events shift labor demand.',
  },
  {
    id: 'mlab-ent-2b', partNumber: 2, partTitle: 'Labor Supply in Depth',
    question: 'Becoming an airline pilot takes years of training, while a food-delivery driver can start within days. Labor demand rises by the same amount in both markets. Compared with the drivers\' market, the pilots\' market shows',
    options: ['a smaller wage increase and a larger employment increase', 'the same wage increase and the same employment increase', 'a larger wage increase and a smaller increase in employment', 'no wage increase and a larger employment increase'],
    correctIndex: 2,
    explanation: 'Pilots need years of training, so their labor supply is inelastic and a demand increase mostly raises the wage. Delivery drivers can start quickly, so their elastic supply turns the same shift mostly into more employment.',
  },
  {
    id: 'mlab-ent-3a', partNumber: 3, partTitle: 'Labor-Market Shocks: Worked Cases',
    question: 'Demand for home solar installation rises, and at the same time a free apprenticeship program adds many trained installers. What happens in the labor market for installers?',
    options: ['The wage rises; the employment change is indeterminate', 'Employment rises; the wage change is indeterminate', 'Both the wage and employment rise', 'Both the wage and employment fall'],
    correctIndex: 1,
    explanation: 'Labor demand shifts right and labor supply shifts right. Both shifts raise employment, but they push the wage in opposite directions, so the wage change depends on which shift is larger.',
  },
  {
    id: 'mlab-ent-3b', partNumber: 3, partTitle: 'Labor-Market Shocks: Worked Cases',
    question: 'The price of diagnostic software that helps auto mechanics find problems faster falls by half. What happens in the competitive labor market for mechanics?',
    options: ['Wage and employment both fall as labor demand shifts left', 'Wage falls and employment rises as labor supply shifts right', 'Wage and employment stay unchanged as only capital is affected', 'Wage and employment both rise as demand shifts right'],
    correctIndex: 3,
    explanation: 'The software is a complement to mechanics: cheaper software means more of it in use, raising each mechanic\'s marginal product and MRP. Labor demand shifts right, raising the wage and employment.',
  },
  {
    id: 'mlab-ent-4a', partNumber: 4, partTitle: 'Labor-Market Numbers',
    question: 'In a competitive labor market, labor demand is $L_d = 1{,}200 - 30W$ and labor supply is $L_s = 60W - 600$, with W in dollars per hour. What are the equilibrium wage and employment?',
    options: ['\\$20 and 600 workers', '\\$15 and 750 workers', '\\$30 and 300 workers', '\\$10 and 900 workers'],
    correctIndex: 0,
    explanation: 'Setting 1,200 − 30W = 60W − 600 gives 1,800 = 90W, so W = \\$20. Then L = 1,200 − 30(20) = 600 workers, matching supply.',
  },
  {
    id: 'mlab-ent-4b', partNumber: 4, partTitle: 'Labor-Market Numbers',
    question: 'In the market with labor demand $L_d = 1{,}200 - 30W$ and labor supply $L_s = 60W - 600$, the government sets a minimum wage of \\$24. What are employment and the surplus of labor?',
    options: ['Employment of 840 and a surplus of 360', 'Employment of 480 and a surplus of 120', 'Employment of 480 and a surplus of 360', 'Employment of 600 and a surplus of 240'],
    correctIndex: 2,
    explanation: 'Firms hire the quantity demanded at the floor, 1,200 − 30(24) = 480. Workers supply 60(24) − 600 = 840, so the surplus is 840 − 480 = 360.',
  },
  {
    id: 'mlab-ent-5a', partNumber: 5, partTitle: 'Why Wages Differ',
    question: 'Two utility jobs need the same skills and have the same MRP, but one requires repairing high-voltage lines during storms, and it pays more. Which explanation fits?',
    options: ['Employers value its output more, so labor demand is greater', 'A union has negotiated a wage floor above equilibrium', 'Fewer people will do it at any wage, so supply is small', 'Licensing rules have cut the number of qualified workers'],
    correctIndex: 2,
    explanation: 'This is a compensating differential: danger makes fewer workers willing at any wage, shifting supply left and raising the equilibrium wage. The equal MRP rules out a demand-side reason.',
  },
  {
    id: 'mlab-ent-5b', partNumber: 5, partTitle: 'Why Wages Differ',
    question: 'Priya earns \\$16 an hour. A certificate costs \\$3,000 in tuition and \\$9,000 in wages she gives up while training, and afterward she would earn \\$20 an hour for 1,500 hours a year. Ignoring interest, how long does it take to recover the cost?',
    options: ['0.5 years', '1.5 years', '3 years', '2 years'],
    correctIndex: 3,
    explanation: 'The full cost is \\$3,000 + \\$9,000 = \\$12,000, including forgone earnings. The certificate adds \\$4 × 1,500 = \\$6,000 a year, so it pays back in 2 years.',
  },
  {
    id: 'mlab-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'In a competitive labor market, labor demand is $L_d = 800 - 20W$ and labor supply is $L_s = 20W - 80$. The government sets a minimum wage of \\$26. What deadweight loss does the floor create?',
    options: ['\\$640', '\\$320', '\\$160', '\\$480'],
    correctIndex: 1,
    explanation: 'Equilibrium is W = \\$22 and L = 360; at \\$26 firms hire 800 − 520 = 280. At 280 workers the supply wage is \\$18, so DWL = ½ × (360 − 280) × (\\$26 − \\$18) = \\$320.',
  },
  {
    id: 'mlab-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'In the market with labor demand $L_d = 800 - 20W$ and labor supply $L_s = 20W - 80$, how does total wage income change when a \\$26 minimum wage replaces the equilibrium wage?',
    options: ['It rises by \\$1,440', 'It falls by \\$640', 'It rises by \\$640', 'It falls by \\$1,760'],
    correctIndex: 1,
    explanation: 'Before the floor, wage income is \\$22 × 360 = \\$7,920. With it, firms employ 280 workers at \\$26, or \\$7,280, so wage income falls by \\$640.',
  },
  {
    id: 'mlab-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A minimum wage is set above the wage a monopsonist pays but below the wage a competitive market would reach. What happens to the monopsonist\'s employment and wage?',
    options: ['Employment and the wage both stay the same', 'Employment falls and the wage rises', 'Employment and the wage both fall', 'Employment and wages both rise'],
    correctIndex: 3,
    explanation: 'The floor makes MFC flat at the minimum wage, so hiring one more worker no longer forces raises for everyone. The monopsonist hires more workers at the higher wage, moving toward the competitive outcome.',
  },
  {
    id: 'mlab-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which explanation for a wage gap works through labor demand rather than labor supply?',
    options: ['Workers with more training produce more output per hour', 'Fewer people are willing to work overnight shifts', 'A license limits who may legally do the work', 'Training takes years, so few people can qualify'],
    correctIndex: 0,
    explanation: 'Higher productivity raises a worker\'s MRP, which is labor demand. Unpleasant hours, licensing and long training all reduce the number of willing and able workers, which is labor supply.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Labor Supply in Depth' },
    { partNumber: 3, partTitle: 'Labor-Market Shocks: Worked Cases' },
    { partNumber: 4, partTitle: 'Labor-Market Numbers' },
    { partNumber: 5, partTitle: 'Why Wages Differ' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
