/**
 * Entrance Quiz — Complex Numbers (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'scn-ent-1a', question: 'What is the value of i²?', options: ['1', '−1', 'i', '0'], correctIndex: 1, explanation: 'By definition, i = √(−1), so i² = −1.', partNumber: 1, partTitle: 'Imaginary Unit' },
  { id: 'scn-ent-1b', question: 'What is i⁴?', options: ['−1', '−i', 'i', '1'], correctIndex: 3, explanation: 'i¹ = i, i² = −1, i³ = −i, i⁴ = 1. The powers of i cycle with period 4.', partNumber: 1, partTitle: 'Imaginary Unit' },
  { id: 'scn-ent-2a', question: 'Add: (3 + 4i) + (1 − 2i)', options: ['4 + 2i', '4 − 2i', '2 + 6i', '4 + 6i'], correctIndex: 0, explanation: 'Add real parts: 3 + 1 = 4. Add imaginary parts: 4i + (−2i) = 2i. Result: 4 + 2i.', partNumber: 2, partTitle: 'Complex Number Operations' },
  { id: 'scn-ent-2b', question: 'Subtract: (5 − 3i) − (2 + i)', options: ['7 − 4i', '3 − 4i', '3 + 4i', '7 + 4i'], correctIndex: 1, explanation: 'Subtract real parts: 5 − 2 = 3. Subtract imaginary parts: −3i − i = −4i. Result: 3 − 4i.', partNumber: 2, partTitle: 'Complex Number Operations' },
  { id: 'scn-ent-3a', question: 'Multiply: (2 + 3i)(1 − i)', options: ['5 + i', '2 − 3i', '5 − i', '−1 + 5i'], correctIndex: 0, explanation: 'FOIL: 2(1) + 2(−i) + 3i(1) + 3i(−i) = 2 − 2i + 3i − 3i² = 2 + i − 3(−1) = 5 + i.', partNumber: 3, partTitle: 'Multiplying Complex Numbers' },
  { id: 'scn-ent-3b', question: 'Multiply: (1 + i)²', options: ['1 + 2i', '2i', '2 + 2i', '0 + 2i'], correctIndex: 1, explanation: '(1+i)² = 1 + 2i + i² = 1 + 2i + (−1) = 0 + 2i = 2i.', partNumber: 3, partTitle: 'Multiplying Complex Numbers' },
  { id: 'scn-ent-4a', question: 'What is the complex conjugate of 4 − 7i?', options: ['−4 + 7i', '4 + 7i', '7 − 4i', '−4 − 7i'], correctIndex: 1, explanation: 'The conjugate of a + bi is a − bi. So the conjugate of 4 − 7i is 4 + 7i.', partNumber: 4, partTitle: 'Conjugates' },
  { id: 'scn-ent-4b', question: 'What is (3 + 5i)(3 − 5i)?', options: ['9 − 25', '9 + 25', '34', '−16'], correctIndex: 2, explanation: '(a + bi)(a − bi) = a² + b². Here: 3² + 5² = 9 + 25 = 34 (a real number).', partNumber: 4, partTitle: 'Conjugates' },
  { id: 'scn-ent-5a', question: 'What is the modulus (absolute value) of 3 + 4i?', options: ['3', '4', '5', '7'], correctIndex: 2, explanation: '|a + bi| = √(a² + b²) = √(9 + 16) = √25 = 5.', partNumber: 5, partTitle: 'Complex Number Modulus' },
  { id: 'scn-ent-5b', question: 'Which complex number has a modulus of √13?', options: ['2 + 3i', '1 + 4i', '3 + 3i', '3 + 4i'], correctIndex: 0, explanation: '|2 + 3i| = √(4 + 9) = √13. The others: |1+4i|=√17, |3+3i|=√18, |3+4i|=5.', partNumber: 5, partTitle: 'Complex Number Modulus' },
  { id: 'scn-ent-6a', question: 'Simplify: i²³', options: ['1', '−1', 'i', '−i'], correctIndex: 3, explanation: '23 = 4×5 + 3, so i²³ = i³ = −i. (Powers of i cycle: i, −1, −i, 1 with period 4.)', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'scn-ent-6b', question: 'Divide: (2 + i) ÷ (1 − i). Multiply numerator and denominator by the conjugate (1 + i).', options: ['1/2 + 3i/2', '(3 + 3i)/2', '3/2 + 3i/2', '1 + i'], correctIndex: 0, explanation: '(2+i)(1+i)/((1−i)(1+i)) = (2+2i+i+i²)/(1+1) = (2+3i−1)/2 = (1+3i)/2 = 1/2 + 3i/2.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'scn-ent-7a', question: 'Which of the following is a non-zero real number?', options: ['3i', 'i + 2', 'i² + 1', 'i² − 1'], correctIndex: 3, explanation: 'i² − 1 = −1 − 1 = −2, which is a non-zero real number. Note: i² + 1 = 0 (real but zero); 3i and i+2 have imaginary parts.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'scn-ent-7b', question: 'The equation x² + 9 = 0 has solutions:', options: ['x = ±3', 'x = ±3i', 'x = 9i', 'No solutions'], correctIndex: 1, explanation: 'x² = −9 → x = ±√(−9) = ±3i.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Imaginary Unit' },
    { partNumber: 2, partTitle: 'Complex Number Operations' },
    { partNumber: 3, partTitle: 'Multiplying Complex Numbers' },
    { partNumber: 4, partTitle: 'Conjugates' },
    { partNumber: 5, partTitle: 'Complex Number Modulus' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
