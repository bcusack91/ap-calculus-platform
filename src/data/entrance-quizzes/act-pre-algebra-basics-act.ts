/**
 * Entrance Quiz — Pre-Algebra Basics (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'pab-ent-1a', question: 'Which statement about multiplication of even and odd numbers is correct?', options: ['Even × odd = odd', 'Even × odd = even', 'Odd × odd = even', 'Even × even = odd'], correctIndex: 1, explanation: 'Even × odd always equals even. Any product involving an even number is even.', partNumber: 1, partTitle: 'Number Properties' },
  { id: 'pab-ent-1b', question: 'Which of the following is true about the number 1?', options: ['1 is a prime number', '1 is neither prime nor composite', '1 is a composite number', '1 has two factors'], correctIndex: 1, explanation: 'Prime numbers have exactly two factors: 1 and themselves. Since 1 has only one factor (itself), it is NOT prime. It is classified as neither prime nor composite.', partNumber: 1, partTitle: 'Number Properties' },
  { id: 'pab-ent-2a', question: 'What is the first step when adding the fractions 2/5 + 1/3?', options: ['Add the numerators and denominators separately', 'Find the least common denominator (LCD)', 'Multiply both fractions together', 'Invert the second fraction'], correctIndex: 1, explanation: 'To add fractions, first find the LCD, convert each fraction to an equivalent fraction with that denominator, then add the numerators.', partNumber: 2, partTitle: 'Fractions & Decimals' },
  { id: 'pab-ent-2b', question: 'What is 0.125 expressed as a fraction in simplest form?', options: ['1/4', '1/6', '1/8', '1/10'], correctIndex: 2, explanation: '0.125 = 125/1000. Dividing numerator and denominator by 125 gives 1/8.', partNumber: 2, partTitle: 'Fractions & Decimals' },
  { id: 'pab-ent-3a', question: 'If 3/5 = x/20, what is the value of x?', options: ['9', '10', '12', '15'], correctIndex: 2, explanation: 'Cross multiply: 3 · 20 = 5 · x → 60 = 5x → x = 12.', partNumber: 3, partTitle: 'Ratios & Proportions' },
  { id: 'pab-ent-3b', question: 'A recipe calls for 2 cups of flour per 3 dozen cookies. How many cups of flour are needed for 9 dozen cookies?', options: ['4', '5', '6', '8'], correctIndex: 2, explanation: '9 dozen is 3 times 3 dozen, so you need 3 × 2 = 6 cups of flour.', partNumber: 3, partTitle: 'Ratios & Proportions' },
  { id: 'pab-ent-4a', question: 'What is 15% of 80?', options: ['8', '10', '12', '15'], correctIndex: 2, explanation: '15% of 80 = 0.15 × 80 = 12.', partNumber: 4, partTitle: 'Percentages' },
  { id: 'pab-ent-4b', question: 'If a price increases from $40 to $50, what is the percent increase?', options: ['10%', '20%', '25%', '30%'], correctIndex: 2, explanation: 'Percent increase = (change / original) × 100 = (10/40) × 100 = 25%.', partNumber: 4, partTitle: 'Percentages' },
  { id: 'pab-ent-5a', question: 'In PEMDAS, what operations are performed from left to right at the same level?', options: ['Parentheses and Exponents', 'Multiplication/Division and Addition/Subtraction', 'Only Multiplication and Addition', 'All operations'], correctIndex: 1, explanation: 'PEMDAS: Parentheses, Exponents, then Multiplication/Division (left to right), then Addition/Subtraction (left to right). Operations at the same level are done left to right.', partNumber: 5, partTitle: 'Order of Operations' },
  { id: 'pab-ent-5b', question: 'What is the value of 3 + 4 × 2?', options: ['14', '10', '11', '9'], correctIndex: 2, explanation: 'Multiplication comes before addition: 4 × 2 = 8, then 3 + 8 = 11. The answer is 11, not 14.', partNumber: 5, partTitle: 'Order of Operations' },
  { id: 'pab-ent-6a', question: 'A store marks up a $60 item by 20%, then offers a 20% discount on the new price. What is the final price?', options: ['$60.00', '$57.60', '$55.20', '$54.00'], correctIndex: 1, explanation: '20% markup on $60 = $72. Then 20% discount on $72 = $72 − $14.40 = $57.60. Successive percent changes do not cancel out.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'pab-ent-6b', question: 'What is the greatest common factor (GCF) of 24 and 36?', options: ['6', '8', '12', '18'], correctIndex: 2, explanation: 'Factors of 24: {1,2,3,4,6,8,12,24}. Factors of 36: {1,2,3,4,6,9,12,18,36}. The greatest common factor is 12.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'pab-ent-7a', question: 'What is the least common multiple (LCM) of 6 and 8?', options: ['12', '16', '24', '48'], correctIndex: 2, explanation: 'Multiples of 6: {6,12,18,24,...}. Multiples of 8: {8,16,24,...}. The smallest common multiple is 24.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'pab-ent-7b', question: 'On the ACT, which strategy is most helpful when you are unsure of an answer?', options: ['Skip the question entirely', 'Choose the longest answer', 'Eliminate obviously wrong answers to improve your odds', 'Always pick C'], correctIndex: 2, explanation: 'Eliminating obviously wrong answers narrows your choices and increases your probability of selecting the correct one, even when unsure.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Number Properties' },
    { partNumber: 2, partTitle: 'Fractions & Decimals' },
    { partNumber: 3, partTitle: 'Ratios & Proportions' },
    { partNumber: 4, partTitle: 'Percentages' },
    { partNumber: 5, partTitle: 'Order of Operations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
