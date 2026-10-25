/**
 * Entrance Quiz — Averages, Counting and Probability (ASVAB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Averages and Chance on the AR Subtest
  {
    id: 'ar-averages-probability-ent-1a',
    question: 'Four packages weigh 8, 12, 15 and 17 pounds. What is their average weight, in pounds?',
    options: ['52', '13', '9', '26'],
    correctIndex: 1,
    explanation: 'Sum: $8 + 12 + 15 + 17 = 52$ pounds, and $52 \\div 4 = 13$ pounds, which sits between 8 and 17. 52 is the total, not the average, 9 is the range ($17 - 8$), and 26 divides by 2 instead of by the 4 packages.',
    partNumber: 1,
    partTitle: 'Averages and Chance on the AR Subtest',
  },
  {
    id: 'ar-averages-probability-ent-1b',
    question: 'Which statement about the probability of an event is always true?',
    options: ['It can be any positive number', 'It is always a whole number', 'It is never below 0 or above 1', 'It must be less than one half'],
    correctIndex: 2,
    explanation: 'A probability runs from 0 (impossible) to 1 (certain). It cannot be just any positive number (nothing is more than certain), it is usually a fraction rather than a whole number, and likely events have probabilities above one half.',
    partNumber: 1,
    partTitle: 'Averages and Chance on the AR Subtest',
  },
  // Part 2 — Finding the Average (Mean)
  {
    id: 'ar-averages-probability-ent-2a',
    question: 'A server earned tips of \\$12, \\$15, \\$9, \\$18 and \\$16 on five shifts. What was her average tip amount per shift?',
    options: ['\\$70', '\\$15', '\\$9', '\\$14'],
    correctIndex: 3,
    explanation: 'Sum: $12 + 15 + 9 + 18 + 16 = 70$, and $70 \\div 5 = 14$, so \\$14. \\$70 is the total, \\$15 is the median (the middle of the ordered list 9, 12, 15, 16, 18), and \\$9 is the range ($18 - 9$).',
    partNumber: 2,
    partTitle: 'Finding the Average (Mean)',
  },
  {
    id: 'ar-averages-probability-ent-2b',
    question: 'What is the median of 2, 19, 8 and 11?',
    options: ['9.5', '13.5', '10.0', '11.0'],
    correctIndex: 0,
    explanation: 'Order first: 2, 8, 11, 19. The two middle values are 8 and 11, so the median is $\\frac{8 + 11}{2} = 9.5$. 13.5 averages the middle pair of the unordered list (19 and 8), 10.0 is the mean ($40 \\div 4$), and 11.0 takes one middle value without averaging the pair.',
    partNumber: 2,
    partTitle: 'Finding the Average (Mean)',
  },
  // Part 3 — Missing Values and Weighted Averages
  {
    id: 'ar-averages-probability-ent-3a',
    question: 'A student\'s first three test scores average 75. What score does she need on the fourth test to raise her average to 80?',
    options: ['85', '95', '80', '320'],
    correctIndex: 1,
    explanation: 'Target total: $80 \\times 4 = 320$. So far: $75 \\times 3 = 225$. Needed: $320 - 225 = 95$. 85 makes up only one test\'s 5-point shortfall instead of all three, 80 assumes she only has to match the target, and 320 is the target total.',
    partNumber: 3,
    partTitle: 'Missing Values and Weighted Averages',
  },
  {
    id: 'ar-averages-probability-ent-3b',
    question: 'At a factory, 30 workers on one line average 60 units a day, and 10 workers on another line average 80 units a day. What is the average for all 40 workers?',
    options: ['70', '75', '65', '140'],
    correctIndex: 2,
    explanation: 'Totals: $30 \\times 60 = 1{,}800$ and $10 \\times 80 = 800$, so $2{,}600 \\div 40 = 65$ units. 70 averages the two averages even though the first group is three times as big, 75 attaches each average to the wrong group, and 140 adds the averages.',
    partNumber: 3,
    partTitle: 'Missing Values and Weighted Averages',
  },
  // Part 4 — Counting Outcomes
  {
    id: 'ar-averages-probability-ent-4a',
    question: 'A car model comes in 5 colors and 3 trim levels. How many different color-and-trim combinations are possible?',
    options: ['15', '8', '125', '30'],
    correctIndex: 0,
    explanation: 'Each color goes with each trim level: $5 \\times 3 = 15$. 8 adds the choices instead of multiplying, 125 is $5 \\times 5 \\times 5$, and 30 counts every combination twice.',
    partNumber: 4,
    partTitle: 'Counting Outcomes',
  },
  {
    id: 'ar-averages-probability-ent-4b',
    question: 'In how many different orders can 3 different books be placed side by side on a shelf?',
    options: ['9', '27', '6', '3'],
    correctIndex: 2,
    explanation: '3 choices for the first spot, 2 for the second, 1 for the last: $3 \\times 2 \\times 1 = 6$. 9 gives the first two spots all 3 books ($3 \\times 3$), 27 lets a book be used more than once ($3 \\times 3 \\times 3$), and 3 counts the books, not the orders.',
    partNumber: 4,
    partTitle: 'Counting Outcomes',
  },
  // Part 5 — Basic Probability
  {
    id: 'ar-averages-probability-ent-5a',
    question: 'A standard six-sided die is rolled. What is the probability of rolling a 2 or a 5?',
    options: ['$\\frac{1}{6}$', '$\\frac{2}{3}$', '$\\frac{1}{36}$', '$\\frac{1}{3}$'],
    correctIndex: 3,
    explanation: 'Two favorable faces out of 6: $\\frac{2}{6} = \\frac{1}{3}$. $\\frac{1}{6}$ counts only one of the two faces, $\\frac{2}{3}$ is the chance of rolling neither, and $\\frac{1}{36}$ multiplies $\\frac{1}{6} \\times \\frac{1}{6}$, which is the chance of two separate events both happening, not one roll showing either face.',
    partNumber: 5,
    partTitle: 'Basic Probability',
  },
  {
    id: 'ar-averages-probability-ent-5b',
    question: 'Two spinners each have 5 equal sections numbered 1 to 5. Both are spun. What is the probability that both land on 5?',
    options: ['$\\frac{2}{5}$', '$\\frac{1}{25}$', '$\\frac{4}{5}$', '$\\frac{1}{5}$'],
    correctIndex: 1,
    explanation: 'The spinners are independent, so multiply: $\\frac{1}{5} \\times \\frac{1}{5} = \\frac{1}{25}$. $\\frac{2}{5}$ adds the probabilities, $\\frac{4}{5}$ is the chance that one spinner does not land on 5, and $\\frac{1}{5}$ is the chance for one spinner only.',
    partNumber: 5,
    partTitle: 'Basic Probability',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'ar-averages-probability-ent-6a',
    question: 'On Monday, 4 trucks averaged 300 miles each. On Tuesday, 6 trucks averaged 250 miles each. What was the average distance per truck for all 10 trips?',
    options: ['270', '275', '550', '280'],
    correctIndex: 0,
    explanation: 'Totals: $4 \\times 300 = 1{,}200$ and $6 \\times 250 = 1{,}500$, so $2{,}700 \\div 10 = 270$ miles. 275 averages the two averages (the trap: there were more Tuesday trips), 280 attaches each average to the wrong day, and 550 adds the averages.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'ar-averages-probability-ent-6b',
    question: 'An ice cream shop has 5 flavors. A customer orders a cup with 2 different flavors. How many different flavor pairs are possible?',
    options: ['20', '25', '9', '10'],
    correctIndex: 3,
    explanation: 'Vanilla-and-chocolate is the same cup as chocolate-and-vanilla, so $\\frac{5 \\times 4}{2} = 10$. 20 counts every pair twice (the double-counting trap), 25 allows the same flavor twice, and 9 adds $5 + 4$ instead of multiplying.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'ar-averages-probability-ent-7a',
    question: 'A basketball player averaged 18 points over her first 4 games. She scored 28 points in the fifth game. What is her average for all 5 games?',
    options: ['23', '25', '20', '46'],
    correctIndex: 2,
    explanation: 'Total: $18 \\times 4 + 28 = 72 + 28 = 100$ points, and $100 \\div 5 = 20$. 23 averages 18 and 28 as if there were two games, 25 divides 100 by the old count of 4, and 46 adds 18 and 28.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'ar-averages-probability-ent-7b',
    question: 'A cup holds 3 blue markers and 2 black markers. Two markers are taken without looking and without replacement. What is the probability that both are blue?',
    options: ['$\\frac{9}{25}$', '$\\frac{3}{5}$', '$\\frac{6}{25}$', '$\\frac{3}{10}$'],
    correctIndex: 3,
    explanation: 'First: $\\frac{3}{5}$. Then 2 blue are left out of 4: $\\frac{2}{4}$. Multiply: $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$. $\\frac{9}{25}$ uses $\\frac{3}{5}$ twice, $\\frac{3}{5}$ is only the first draw, and $\\frac{6}{25}$ lowers the blue count but forgets to shrink the total ($\\frac{3}{5} \\times \\frac{2}{5}$).',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Averages and Chance on the AR Subtest' },
    { partNumber: 2, partTitle: 'Finding the Average (Mean)' },
    { partNumber: 3, partTitle: 'Missing Values and Weighted Averages' },
    { partNumber: 4, partTitle: 'Counting Outcomes' },
    { partNumber: 5, partTitle: 'Basic Probability' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
