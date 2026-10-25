/**
 * Entrance Quiz — Ratios, Proportions and Rates (ASVAB Arithmetic Reasoning) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Ratios and Rates on the AR Subtest
  {
    id: 'ar-ratios-rates-ent-1a',
    question: 'A car travels 120 miles on 4 gallons of gas. How many miles per gallon does it get?',
    options: ['480', '30', '116', '124'],
    correctIndex: 1,
    explanation: '"Miles per gallon" means miles ÷ gallons: $120 \\div 4 = 30$. The answer 480 multiplies instead of dividing, 116 subtracts the numbers, and 124 adds them.',
    partNumber: 1,
    partTitle: 'Ratios and Rates on the AR Subtest',
  },
  {
    id: 'ar-ratios-rates-ent-1b',
    question: 'Gas costs \\$3.40 per gallon. Which expression gives the cost, in dollars, of 12 gallons?',
    options: ['$12 \\div 3.40$', '$3.40 \\div 12$', '$12 + 3.40$', '$12 \\times 3.40$'],
    correctIndex: 3,
    explanation: 'Each gallon costs the same amount, so 12 gallons cost 12 times the price per gallon: $12 \\times 3.40 = 40.80$, or \\$40.80. Dividing either way gives a price per something, not a total, and adding the two numbers mixes gallons with dollars.',
    partNumber: 1,
    partTitle: 'Ratios and Rates on the AR Subtest',
  },
  // Part 2 — Ratios and Part-to-Whole Problems
  {
    id: 'ar-ratios-rates-ent-2a',
    question: 'A motor pool has 18 trucks and 24 jeeps. What is the ratio of jeeps to trucks in simplest form?',
    options: ['4:3', '3:4', '4:7', '3:7'],
    correctIndex: 0,
    explanation: 'Jeeps to trucks puts jeeps first: $24 : 18$, and dividing both by 6 gives $4 : 3$. The ratio $3 : 4$ is trucks to jeeps (order flipped), and $4 : 7$ and $3 : 7$ compare one part to all 42 vehicles.',
    partNumber: 2,
    partTitle: 'Ratios and Part-to-Whole Problems',
  },
  {
    id: 'ar-ratios-rates-ent-2b',
    question: 'A \\$480 donation is split between two programs in the ratio 3 to 5. How much does the program with the larger share receive?',
    options: ['\\$180', '\\$288', '\\$300', '\\$60'],
    correctIndex: 2,
    explanation: 'Shares: $3 + 5 = 8$. One share: $480 \\div 8 = 60$. Larger share: $5 \\times 60 = 300$, so \\$300. \\$180 is the smaller share, \\$60 is a single share, and \\$288 takes $\\frac{3}{5}$ of 480, treating the part-to-part ratio as a fraction of the whole.',
    partNumber: 2,
    partTitle: 'Ratios and Part-to-Whole Problems',
  },
  // Part 3 — Proportions and Scale
  {
    id: 'ar-ratios-rates-ent-3a',
    question: 'A bottling machine caps 72 bottles in 4 minutes. At the same rate, how many bottles does it cap in 15 minutes?',
    options: ['1,080', '83', '288', '270'],
    correctIndex: 3,
    explanation: 'Rate: $72 \\div 4 = 18$ bottles per minute. In 15 minutes: $18 \\times 15 = 180 + 90 = 270$ bottles. The answer 1,080 multiplies 72 by 15 as if 72 were the rate per minute, 83 adds the 11 extra minutes to 72, and 288 multiplies 72 by 4.',
    partNumber: 3,
    partTitle: 'Proportions and Scale',
  },
  {
    id: 'ar-ratios-rates-ent-3b',
    question: 'On a map, 1 inch represents 12 miles. Two towns are $3\\frac{1}{2}$ inches apart on the map. How many miles apart are the towns?',
    options: ['36', '42', '48', '15.5'],
    correctIndex: 1,
    explanation: 'Map to real is multiply: $3\\frac{1}{2} \\times 12 = 36 + 6 = 42$ miles. The answer 36 drops the half inch, 48 rounds up to 4 inches, and 15.5 adds 12 and 3.5 instead of multiplying.',
    partNumber: 3,
    partTitle: 'Proportions and Scale',
  },
  // Part 4 — Distance, Rate and Time
  {
    id: 'ar-ratios-rates-ent-4a',
    question: 'A bus travels at 48 miles per hour for 45 minutes. How many miles does it travel?',
    options: ['36', '2,160', '64', '93'],
    correctIndex: 0,
    explanation: '45 minutes is $\\frac{3}{4}$ hour, so $48 \\times \\frac{3}{4} = 12 \\times 3 = 36$ miles. The answer 2,160 multiplies by 45 without converting minutes to hours, 64 divides by $\\frac{3}{4}$ instead of multiplying, and 93 adds 48 and 45.',
    partNumber: 4,
    partTitle: 'Distance, Rate and Time',
  },
  {
    id: 'ar-ratios-rates-ent-4b',
    question: 'Two cyclists start at the same point and ride in opposite directions, one at 12 mph and the other at 15 mph. How many miles apart are they after 2 hours?',
    options: ['6', '27', '54', '30'],
    correctIndex: 2,
    explanation: 'Moving apart, the gap grows by $12 + 15 = 27$ miles each hour, so after 2 hours they are $27 \\times 2 = 54$ miles apart. The answer 6 subtracts the speeds, 27 is the gap after only 1 hour, and 30 counts only the faster cyclist.',
    partNumber: 4,
    partTitle: 'Distance, Rate and Time',
  },
  // Part 5 — Work Rates and Unit Prices
  {
    id: 'ar-ratios-rates-ent-5a',
    question: 'One mower can cut a field in 2 hours. A second mower can cut the same field in 6 hours. How long does the job take with both mowers working together?',
    options: ['4 hours', '8 hours', '2 hours', '1.5 hours'],
    correctIndex: 3,
    explanation: 'Rates add: $\\frac{1}{2} + \\frac{1}{6} = \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$ of the field per hour, so the job takes $1 \\div \\frac{2}{3} = 1.5$ hours (shortcut: $\\frac{12}{8} = 1.5$). 4 hours averages the times and 8 hours adds them. 2 hours is the faster mower alone, but with help the job must finish sooner.',
    partNumber: 5,
    partTitle: 'Work Rates and Unit Prices',
  },
  {
    id: 'ar-ratios-rates-ent-5b',
    question: 'Paper towels come in 8 rolls for \\$6.00 or 12 rolls for \\$8.40. What is the price per roll of the better buy?',
    options: ['\\$0.75', '\\$0.70', '\\$0.05', '\\$1.43'],
    correctIndex: 1,
    explanation: 'Price per roll: $6.00 \\div 8 = 0.75$ and $8.40 \\div 12 = 0.70$. The 12-roll pack is the better buy at \\$0.70 a roll. \\$0.75 is the other pack, \\$0.05 is the difference between the two unit prices, and \\$1.43 divides rolls by dollars ($12 \\div 8.40$).',
    partNumber: 5,
    partTitle: 'Work Rates and Unit Prices',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'ar-ratios-rates-ent-6a',
    question: 'A delivery driver goes 30 miles at 15 mph and returns the same 30 miles at 30 mph. What is the average speed for the round trip?',
    options: ['22.5 mph', '45 mph', '20 mph', '10 mph'],
    correctIndex: 2,
    explanation: 'Going takes $30 \\div 15 = 2$ hours and returning takes $30 \\div 30 = 1$ hour. Total: 60 miles in 3 hours, so $60 \\div 3 = 20$ mph. 22.5 mph is the trap of averaging the two speeds, 45 mph adds them, and 10 mph divides only the one-way 30 miles by the total time.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'ar-ratios-rates-ent-6b',
    question: 'In a class, the ratio of seniors to juniors is 2 to 3. What fraction of the class are seniors?',
    options: ['$\\frac{2}{3}$', '$\\frac{3}{5}$', '$\\frac{3}{2}$', '$\\frac{2}{5}$'],
    correctIndex: 3,
    explanation: 'The class is $2 + 3 = 5$ shares, and seniors are 2 of them: $\\frac{2}{5}$. $\\frac{2}{3}$ is the part-to-part ratio of seniors to juniors, $\\frac{3}{5}$ is the fraction that are juniors, and $\\frac{3}{2}$ is juniors to seniors.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'ar-ratios-rates-ent-7a',
    question: 'A generator burns 3 gallons of fuel every 4 hours. How many gallons does it burn in 24 hours?',
    options: ['32', '18', '72', '6'],
    correctIndex: 1,
    explanation: '24 hours is $24 \\div 4 = 6$ blocks of 4 hours, and each block burns 3 gallons: $6 \\times 3 = 18$ gallons. The answer 32 sets up the proportion upside down ($24 \\times 4 \\div 3$), 72 multiplies 24 by 3 as if 3 gallons burned every hour, and 6 is the number of 4-hour blocks.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'ar-ratios-rates-ent-7b',
    question: 'A printer prints 30 pages per minute. How many hours does it take to print 5,400 pages?',
    options: ['180', '90', '3', '6'],
    correctIndex: 2,
    explanation: 'Minutes: $5{,}400 \\div 30 = 180$. Hours: $180 \\div 60 = 3$. The answer 180 is the time in minutes, not hours; 90 divides 5,400 by 60 and never uses the printing rate; 6 divides 180 by 30 a second time instead of by 60.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Ratios and Rates on the AR Subtest' },
    { partNumber: 2, partTitle: 'Ratios and Part-to-Whole Problems' },
    { partNumber: 3, partTitle: 'Proportions and Scale' },
    { partNumber: 4, partTitle: 'Distance, Rate and Time' },
    { partNumber: 5, partTitle: 'Work Rates and Unit Prices' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
