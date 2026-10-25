/**
 * Entrance Quiz — Fractions and Decimals in Context (ASVAB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Fractions and Decimals on the AR Subtest
  {
    id: 'ar-fractions-decimals-ent-1a',
    question: 'A class has 30 students, and $\\frac{1}{5}$ of them are absent today. How many students are absent today?',
    options: ['24', '6', '25', '150'],
    correctIndex: 1,
    explanation: '$30 \\div 5 = 6$ students. The 24 students are the ones who are present, 25 subtracts the denominator from 30, and 150 multiplies by 5 instead of dividing.',
    partNumber: 1,
    partTitle: 'Fractions and Decimals on the AR Subtest',
  },
  {
    id: 'ar-fractions-decimals-ent-1b',
    question: 'Without a calculator, which is the quickest correct way to find $\\frac{3}{4}$ of 48?',
    options: ['Multiply 48 by 4, then divide by 3', 'Subtract 3 from 48, then divide by 4', 'Divide 48 by 4, then multiply by 3', 'Divide 48 by 3, then multiply by 4'],
    correctIndex: 2,
    explanation: 'Divide by the denominator to find one fourth ($48 \\div 4 = 12$), then multiply by the numerator ($12 \\times 3 = 36$). Multiplying by 4 and dividing by 3, or dividing by 3 and multiplying by 4, flips the fraction and gives 64, more than the whole.',
    partNumber: 1,
    partTitle: 'Fractions and Decimals on the AR Subtest',
  },
  // Part 2 — Finding a Fraction of a Quantity
  {
    id: 'ar-fractions-decimals-ent-2a',
    question: 'Of the 350 people at a job fair, $\\frac{2}{7}$ signed up for more information. How many people signed up?',
    options: ['250', '50', '1,225', '100'],
    correctIndex: 3,
    explanation: '$350 \\div 7 = 50$, and $50 \\times 2 = 100$ people. The 250 people are the ones who did not sign up, 50 is one seventh only, and 1,225 divides by 2 and multiplies by 7 (more people than were at the fair).',
    partNumber: 2,
    partTitle: 'Finding a Fraction of a Quantity',
  },
  {
    id: 'ar-fractions-decimals-ent-2b',
    question: 'Kim has \\$240. She spends $\\frac{1}{2}$ of it on a jacket and then $\\frac{1}{3}$ of the remaining money on shoes. How much money does she have left?',
    options: ['\\$40', '\\$120', '\\$80', '\\$200'],
    correctIndex: 2,
    explanation: 'Jacket: \\$120, leaving \\$120. Shoes: one third of \\$120 is \\$40, leaving \\$80. Taking one third of the full \\$240 (\\$80) for the shoes leaves only \\$40, the classic trap. \\$120 stops after the jacket, and \\$200 subtracts only the shoes.',
    partNumber: 2,
    partTitle: 'Finding a Fraction of a Quantity',
  },
  // Part 3 — Adding and Subtracting Fractions and Mixed Numbers
  {
    id: 'ar-fractions-decimals-ent-3a',
    question: 'A mechanic spends $\\frac{3}{4}$ hour on an oil change and $\\frac{2}{3}$ hour on a tire rotation. How many hours does he spend on the two jobs?',
    options: ['$\\frac{5}{7}$', '$1\\frac{5}{12}$', '$1\\frac{1}{4}$', '$\\frac{1}{12}$'],
    correctIndex: 1,
    explanation: 'Use twelfths: $\\frac{9}{12} + \\frac{8}{12} = \\frac{17}{12} = 1\\frac{5}{12}$ hours. $\\frac{5}{7}$ adds tops and bottoms (and is less than the oil change alone), $1\\frac{1}{4}$ rewrites $\\frac{2}{3}$ as $\\frac{6}{12}$ (the top must be multiplied by 4, like the bottom), and $\\frac{1}{12}$ subtracts the times.',
    partNumber: 3,
    partTitle: 'Adding and Subtracting Fractions and Mixed Numbers',
  },
  {
    id: 'ar-fractions-decimals-ent-3b',
    question: 'A bolt holds $7\\frac{1}{3}$ yards of canvas, and $4\\frac{2}{3}$ yards are used to cover a trailer. How many yards of canvas are left?',
    options: ['$3\\frac{1}{3}$', '$2\\frac{1}{3}$', '$12$', '$2\\frac{2}{3}$'],
    correctIndex: 3,
    explanation: 'Borrow 1 as $\\frac{3}{3}$: $7\\frac{1}{3} = 6\\frac{4}{3}$, and $6\\frac{4}{3} - 4\\frac{2}{3} = 2\\frac{2}{3}$ yards. $3\\frac{1}{3}$ subtracts the smaller fraction from the larger, $2\\frac{1}{3}$ borrows but drops the original $\\frac{1}{3}$, and 12 adds the lengths.',
    partNumber: 3,
    partTitle: 'Adding and Subtracting Fractions and Mixed Numbers',
  },
  // Part 4 — Multiplying and Dividing Fractions in Context
  {
    id: 'ar-fractions-decimals-ent-4a',
    question: 'A 6-mile patrol route is divided into checkpoints every $\\frac{2}{5}$ mile. How many $\\frac{2}{5}$-mile segments make up the route?',
    options: ['15', '12', '30', '3'],
    correctIndex: 0,
    explanation: '$6 \\div \\frac{2}{5} = 6 \\times \\frac{5}{2} = 15$ segments; each segment is under a mile, so there are more than 6. 12 multiplies by 2 only, 30 multiplies by 5 without dividing by 2, and 3 just divides 6 by 2.',
    partNumber: 4,
    partTitle: 'Multiplying and Dividing Fractions in Context',
  },
  {
    id: 'ar-fractions-decimals-ent-4b',
    question: 'Each banquet table needs $2\\frac{1}{3}$ yards of trim. How many yards of trim are needed for 6 tables?',
    options: ['$14$', '$12\\frac{1}{3}$', '$2\\frac{4}{7}$', '$8\\frac{1}{3}$'],
    correctIndex: 0,
    explanation: '$\\frac{7}{3} \\times 6 = 14$ yards. $12\\frac{1}{3}$ multiplies only the whole number by 6, $2\\frac{4}{7}$ divides 6 by $2\\frac{1}{3}$, and $8\\frac{1}{3}$ adds 6 instead of multiplying.',
    partNumber: 4,
    partTitle: 'Multiplying and Dividing Fractions in Context',
  },
  // Part 5 — Decimals and Money by Hand
  {
    id: 'ar-fractions-decimals-ent-5a',
    question: 'Groceries cost \\$27.36. The customer pays with two \\$20 bills. How much change does the customer get?',
    options: ['\\$13.64', '\\$12.64', '\\$67.36', '\\$13.36'],
    correctIndex: 1,
    explanation: '$40.00 - 27.36 = 12.64$, so \\$12.64. Count-up check: 4 cents to \\$27.40, 60 cents to \\$28, \\$12 to \\$40. \\$13.64 forgets to borrow from the dollars, \\$13.36 subtracts the dollars and copies the cents, and \\$67.36 adds.',
    partNumber: 5,
    partTitle: 'Decimals and Money by Hand',
  },
  {
    id: 'ar-fractions-decimals-ent-5b',
    question: 'Electrical wire costs \\$0.85 per foot. How much do 24 feet of wire cost?',
    options: ['\\$204.00', '\\$2.04', '\\$24.85', '\\$20.40'],
    correctIndex: 3,
    explanation: '$85 \\times 24 = 2{,}040$, and two decimal places give \\$20.40. Estimate: under \\$1 a foot for 24 feet is under \\$24, which rules out \\$204.00; \\$2.04 moves the point too far left, and \\$24.85 adds instead of multiplying.',
    partNumber: 5,
    partTitle: 'Decimals and Money by Hand',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'ar-fractions-decimals-ent-6a',
    question: 'Of the 54 runners in a race, $\\frac{7}{9}$ finished in under 20 minutes. How many runners did not finish in under 20 minutes?',
    options: ['12', '42', '6', '47'],
    correctIndex: 0,
    explanation: 'One ninth of 54 is 6, so 42 finished under 20 minutes and $54 - 42 = 12$ did not. 42 answers with the fraction used instead of the fraction left, 6 is one ninth only, and 47 subtracts the numerator from 54.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'ar-fractions-decimals-ent-6b',
    question: 'A problem says: "She saved $\\frac{1}{4}$ of her pay and spent $\\frac{1}{2}$ of the rest on bills." The $\\frac{1}{2}$ is a fraction of what amount?',
    options: ['Her whole pay, before anything was saved', 'The part of her pay left after saving', 'The one fourth of her pay that she saved', 'The amount she spent plus what she saved'],
    correctIndex: 1,
    explanation: '"Of the rest" means the second fraction applies to what remains after saving, which is $\\frac{3}{4}$ of her pay. Applying it to the whole pay is the classic trap, and the saved fourth is the part that is not "the rest."',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'ar-fractions-decimals-ent-7a',
    question: 'A 5-gallon water can is $\\frac{3}{5}$ full. A hiker pours out $1\\frac{1}{2}$ gallons. How many gallons are left in the can?',
    options: ['$1\\frac{1}{2}$', '$3$', '$4\\frac{1}{2}$', '$3\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: 'The can holds $\\frac{3}{5} \\times 5 = 3$ gallons, and $3 - 1\\frac{1}{2} = 1\\frac{1}{2}$ gallons. 3 stops before pouring, $4\\frac{1}{2}$ adds the amount poured, and $3\\frac{1}{2}$ subtracts from the full 5 gallons instead of from the 3 gallons in the can.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'ar-fractions-decimals-ent-7b',
    question: 'A mechanic buys 8 spark plugs at \\$2.75 each and pays with \\$30. How much change does he get?',
    options: ['\\$22.00', '\\$27.25', '\\$8.00', '\\$52.00'],
    correctIndex: 2,
    explanation: '$8 \\times 2.75 = 22.00$ (8 times \\$2 is \\$16, plus 8 times 75 cents is \\$6), and $30 - 22 = 8$, so \\$8.00. \\$22.00 is the cost (stopped early), \\$27.25 subtracts the price of only one plug, and \\$52.00 adds the cost to \\$30.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Fractions and Decimals on the AR Subtest' },
    { partNumber: 2, partTitle: 'Finding a Fraction of a Quantity' },
    { partNumber: 3, partTitle: 'Adding and Subtracting Fractions and Mixed Numbers' },
    { partNumber: 4, partTitle: 'Multiplying and Dividing Fractions in Context' },
    { partNumber: 5, partTitle: 'Decimals and Money by Hand' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
