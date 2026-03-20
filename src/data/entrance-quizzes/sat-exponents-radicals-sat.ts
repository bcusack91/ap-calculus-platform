/**
 * Entrance Quiz — Exponents & Radicals (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ser-ent-1a', question: 'Simplify: x³ · x⁵', options: ['x⁸', 'x¹⁵', '2x⁸', 'x²'], correctIndex: 0, explanation: 'When multiplying powers with the same base, add the exponents: x³ · x⁵ = x^(3+5) = x⁸.', partNumber: 1, partTitle: 'Exponent Rules' },
  { id: 'ser-ent-1b', question: 'Simplify: (x⁴)³', options: ['x⁷', 'x¹²', 'x⁴³', '3x⁴'], correctIndex: 1, explanation: 'When raising a power to a power, multiply the exponents: (x⁴)³ = x^(4×3) = x¹².', partNumber: 1, partTitle: 'Exponent Rules' },
  { id: 'ser-ent-2a', question: 'What is the value of 5⁻²?', options: ['−25', '−10', '1/25', '1/10'], correctIndex: 2, explanation: 'A negative exponent means take the reciprocal: 5⁻² = 1/5² = 1/25.', partNumber: 2, partTitle: 'Negative Exponents' },
  { id: 'ser-ent-2b', question: 'Simplify: (2x⁻³)²', options: ['4x⁻⁶', '4x⁻⁵', '2x⁻⁶', '4/x⁶'], correctIndex: 3, explanation: '(2x⁻³)² = 4x⁻⁶ = 4/x⁶.', partNumber: 2, partTitle: 'Negative Exponents' },
  { id: 'ser-ent-3a', question: 'Write 0.00047 in scientific notation.', options: ['4.7 × 10⁻³', '4.7 × 10⁻⁴', '47 × 10⁻⁵', '0.47 × 10⁻³'], correctIndex: 1, explanation: 'Move decimal 4 places right: 0.00047 = 4.7 × 10⁻⁴.', partNumber: 3, partTitle: 'Scientific Notation' },
  { id: 'ser-ent-3b', question: 'Multiply: (3 × 10⁴) × (2 × 10³)', options: ['6 × 10⁷', '5 × 10⁷', '6 × 10¹²', '6 × 10⁶'], correctIndex: 0, explanation: 'Multiply coefficients (3×2=6) and add exponents (4+3=7): 6 × 10⁷.', partNumber: 3, partTitle: 'Scientific Notation' },
  { id: 'ser-ent-4a', question: 'Simplify: √72', options: ['8√2', '6√2', '36√2', '6√3'], correctIndex: 1, explanation: '√72 = √(36 × 2) = 6√2.', partNumber: 4, partTitle: 'Radicals & Roots' },
  { id: 'ser-ent-4b', question: 'Simplify: √50 + √8', options: ['√58', '7√2', '8√2', '5√2 + 2√2'], correctIndex: 1, explanation: '√50 = 5√2 and √8 = 2√2. Sum = 5√2 + 2√2 = 7√2.', partNumber: 4, partTitle: 'Radicals & Roots' },
  { id: 'ser-ent-5a', question: 'What is 8^(2/3)?', options: ['2', '4', '16', '6'], correctIndex: 1, explanation: '8^(2/3) = (8^(1/3))² = 2² = 4.', partNumber: 5, partTitle: 'Rational Exponents' },
  { id: 'ser-ent-5b', question: 'Which expression is equivalent to x^(3/2)?', options: ['√(x³)', '³√(x²)', 'x√x', 'x + x^(1/2)'], correctIndex: 0, explanation: 'x^(3/2) = x^(3·(1/2)) = (x³)^(1/2) = √(x³). This is also equal to x√x.', partNumber: 5, partTitle: 'Rational Exponents' },
  { id: 'ser-ent-6a', question: 'Simplify: (x⁶ / x²)³', options: ['x¹²', 'x⁴', 'x¹⁸', 'x⁸'], correctIndex: 0, explanation: 'First: x⁶/x² = x⁴. Then (x⁴)³ = x¹².', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ser-ent-6b', question: 'Solve for x: 2^x = 32', options: ['4', '5', '6', '16'], correctIndex: 1, explanation: '32 = 2⁵. So 2^x = 2⁵ → x = 5.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ser-ent-7a', question: 'Which of the following is equivalent to (√x)⁴?', options: ['x', 'x²', '4√x', 'x⁴'], correctIndex: 1, explanation: '(√x)⁴ = (x^(1/2))⁴ = x^(4/2) = x².', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'ser-ent-7b', question: 'What is the value of (27)^(1/3) × (16)^(1/4)?', options: ['3', '6', '9', '12'], correctIndex: 1, explanation: '27^(1/3) = 3 (cube root of 27) and 16^(1/4) = 2 (fourth root of 16). Product = 3 × 2 = 6.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exponent Rules' },
    { partNumber: 2, partTitle: 'Negative Exponents' },
    { partNumber: 3, partTitle: 'Scientific Notation' },
    { partNumber: 4, partTitle: 'Radicals & Roots' },
    { partNumber: 5, partTitle: 'Rational Exponents' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
