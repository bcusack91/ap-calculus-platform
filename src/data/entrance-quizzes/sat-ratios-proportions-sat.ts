/**
 * Entrance Quiz — Ratios, Proportions & Percentages (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'srp-ent-1a', question: 'In a class of 30 students, the ratio of boys to girls is 2:3. How many girls are in the class?', options: ['12', '15', '18', '20'], correctIndex: 2, explanation: 'Total parts = 2 + 3 = 5. Girls = $(3/5) \\times 30$ = 18.', partNumber: 1, partTitle: 'Ratio Basics' },
  { id: 'srp-ent-1b', question: 'A recipe uses flour and sugar in a 5:2 ratio. If you use 10 cups of flour, how many cups of sugar do you need?', options: ['2', '3', '4', '5'], correctIndex: 2, explanation: '5:2 = 10:x → x = $(2 \\times 10)/5$ = 4 cups of sugar.', partNumber: 1, partTitle: 'Ratio Basics' },
  { id: 'srp-ent-2a', question: 'Solve the proportion: 3/4 = x/28', options: ['19', '21', '23', '25'], correctIndex: 1, explanation: 'Cross-multiply: 4x = $3 \\times 28$ = 84 → x = 21.', partNumber: 2, partTitle: 'Proportions' },
  { id: 'srp-ent-2b', question: 'A car travels 150 miles in 3 hours. At the same rate, how many miles will it travel in 5 hours?', options: ['200', '225', '250', '275'], correctIndex: 2, explanation: 'Rate = 150/3 = 50 mph. Distance in 5 hours = $50 \\times 5$ = 250 miles.', partNumber: 2, partTitle: 'Proportions' },
  { id: 'srp-ent-3a', question: 'What is 35% of 80?', options: ['24', '28', '32', '35'], correctIndex: 1, explanation: '35% of 80 = $0.35 \\times 80$ = 28.', partNumber: 3, partTitle: 'Percents' },
  { id: 'srp-ent-3b', question: '18 is what percent of 72?', options: ['18%', '20%', '25%', '30%'], correctIndex: 2, explanation: '18/72 = 0.25 = 25%.', partNumber: 3, partTitle: 'Percents' },
  { id: 'srp-ent-4a', question: 'A shirt originally costs $40. It is discounted by 25%. What is the sale price?', options: ['$10', '$25', '$30', '$35'], correctIndex: 2, explanation: 'Discount = 25% of $40 = $10. Sale price = $40 − $10 = $30.', partNumber: 4, partTitle: 'Percent Change' },
  { id: 'srp-ent-4b', question: 'A population increases from 200 to 250. What is the percent increase?', options: ['20%', '25%', '50%', '125%'], correctIndex: 1, explanation: 'Percent increase = $(50/200) \\times 100 = 25$%.', partNumber: 4, partTitle: 'Percent Change' },
  { id: 'srp-ent-5a', question: 'A worker earns $18 per hour. How much does the worker earn in 6.5 hours?', options: ['$108', '$117', '$124', '$130'], correctIndex: 1, explanation: 'Earnings = $18 \\times 6.5$ = $117.', partNumber: 5, partTitle: 'Rate & Unit Conversion' },
  { id: 'srp-ent-5b', question: 'If 1 kilogram $\\approx$ 2.2 pounds, approximately how many pounds is 15 kilograms?', options: ['28 lbs', '30 lbs', '33 lbs', '36 lbs'], correctIndex: 2, explanation: '$15 \\times 2.2$ = 33 pounds.', partNumber: 5, partTitle: 'Rate & Unit Conversion' },
  { id: 'srp-ent-6a', question: 'A store marks up items by 40% and then puts them on a 20% off sale. What is the net percent change from the original price?', options: ['12% increase', '20% increase', '12% decrease', 'No change'], correctIndex: 0, explanation: 'Starting at 1: after 40% markup → 1.4. After 20% off → $1.4 \\times 0.8$ = 1.12. That is a 12% increase.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'srp-ent-6b', question: 'A map uses a scale of 1 inch = 25 miles. Two cities are 3.6 inches apart on the map. What is the actual distance?', options: ['75 miles', '80 miles', '90 miles', '100 miles'], correctIndex: 2, explanation: '$3.6 \\times 25$ = 90 miles.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'srp-ent-7a', question: 'If a/b = 3/5 and a + b = 40, what is the value of b?', options: ['15', '20', '25', '30'], correctIndex: 2, explanation: 'a = 3k and b = 5k. Then 3k + 5k = 40 → 8k = 40 → k = 5. So b = 5(5) = 25.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'srp-ent-7b', question: 'A solution is 15% salt by weight. How many grams of salt are in 200 grams of solution?', options: ['15 g', '25 g', '30 g', '45 g'], correctIndex: 2, explanation: '15% of 200 = $0.15 \\times 200$ = 30 grams of salt.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Ratio Basics' },
    { partNumber: 2, partTitle: 'Proportions' },
    { partNumber: 3, partTitle: 'Percents' },
    { partNumber: 4, partTitle: 'Percent Change' },
    { partNumber: 5, partTitle: 'Rate & Unit Conversion' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
