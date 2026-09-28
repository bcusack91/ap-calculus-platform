/**
 * Entrance Quiz — Exponents & Radicals (SAT)
 * 14 questions · 7 parts (2 per part)
 *
 * All math is authored in LaTeX ($...$) and rendered through the shared
 * renderRichText/KaTeX pipeline — no Unicode superscripts or caret notation.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'ser-ent-1a', question: 'Simplify: $\\dfrac{(3x^2)^3}{9x^4}$', options: ['$3x^2$', '$9x^2$', '$3x^{10}$', '$x^2$'], correctIndex: 0, explanation: '$(3x^2)^3 = 27x^6$ (cube the 3 AND multiply the exponents). Then $\\dfrac{27x^6}{9x^4} = 3x^{6-4} = 3x^2$. Adding the exponents instead of subtracting gives $3x^{10}$.', partNumber: 1, partTitle: 'Exponent Rules' },
  { id: 'ser-ent-1b', question: 'Simplify $(2x^{-3})^2$ and write the result with positive exponents.', options: ['$\\dfrac{4}{x^6}$', '$\\dfrac{2}{x^6}$', '$\\dfrac{4}{x^9}$', '$\\dfrac{4}{x}$'], correctIndex: 0, explanation: '$(2x^{-3})^2 = 2^2 \\cdot x^{-6} = 4x^{-6} = \\dfrac{4}{x^6}$. Forgetting to square the 2 gives $\\dfrac{2}{x^6}$; adding the exponents gives $x^{-1}$.', partNumber: 1, partTitle: 'Exponent Rules' },
  { id: 'ser-ent-2a', question: 'Which of the following is equivalent to $\\sqrt{72}$?', options: ['$8\\sqrt{2}$', '$6\\sqrt{2}$', '$36\\sqrt{2}$', '$6\\sqrt{3}$'], correctIndex: 1, explanation: 'Pull out the largest perfect square: $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$. ($36\\sqrt{2}$ forgets to take the square root of 36.)', partNumber: 2, partTitle: 'Radicals and Rational Exponents' },
  { id: 'ser-ent-2b', question: 'Which expression is equivalent to $x^{3/2}$ for $x > 0$?', options: ['$\\sqrt{x^3}$', '$\\sqrt[3]{x^2}$', '$\\dfrac{x^3}{2}$', '$\\sqrt{x} + x$'], correctIndex: 0, explanation: 'In $x^{m/n}$ the denominator is the root and the numerator is the power: $x^{3/2} = \\sqrt{x^3}$. $\\sqrt[3]{x^2}$ is $x^{2/3}$, and a fractional exponent never means division.', partNumber: 2, partTitle: 'Radicals and Rational Exponents' },
  { id: 'ser-ent-3a', question: 'Write $0.00047$ in scientific notation.', options: ['$4.7 \\times 10^{-3}$', '$4.7 \\times 10^{-4}$', '$47 \\times 10^{-5}$', '$0.47 \\times 10^{-3}$'], correctIndex: 1, explanation: 'Move the decimal 4 places right to get $4.7$, so $0.00047 = 4.7 \\times 10^{-4}$. $47 \\times 10^{-5}$ and $0.47 \\times 10^{-3}$ equal the same number but are not in scientific notation (the coefficient must be at least 1 and less than 10).', partNumber: 3, partTitle: 'Scientific Notation' },
  { id: 'ser-ent-3b', question: 'Multiply: $(3 \\times 10^4)(2 \\times 10^3)$', options: ['$6 \\times 10^7$', '$5 \\times 10^7$', '$6 \\times 10^{12}$', '$6 \\times 10^6$'], correctIndex: 0, explanation: 'Multiply the coefficients ($3 \\times 2 = 6$) and add the exponents ($4 + 3 = 7$): $6 \\times 10^7$. Multiplying the exponents gives $10^{12}$.', partNumber: 3, partTitle: 'Scientific Notation' },
  { id: 'ser-ent-4a', question: 'If $4^{x+1} = 8^x$, what is the value of $x$?', options: ['$1$', '$2$', '$3$', '$-2$'], correctIndex: 1, explanation: 'Rewrite with base 2: $2^{2(x+1)} = 2^{3x}$, so $2x + 2 = 3x$ and $x = 2$. Check: $4^3 = 64 = 8^2$.', partNumber: 4, partTitle: 'Solving Equations with Exponents' },
  { id: 'ser-ent-4b', question: 'If $9^x = 27$, what is the value of $x$?', options: ['$\\dfrac{2}{3}$', '$\\dfrac{3}{2}$', '$3$', '$18$'], correctIndex: 1, explanation: 'Write both sides as powers of 3: $3^{2x} = 3^3$, so $2x = 3$ and $x = \\dfrac{3}{2}$. ($\\dfrac{2}{3}$ flips the ratio; 3 is $27 \\div 9$.)', partNumber: 4, partTitle: 'Solving Equations with Exponents' },
  { id: 'ser-ent-5a', question: 'If $\\sqrt{x + 3} = 5$, what is the value of $x$?', options: ['$2$', '$8$', '$22$', '$28$'], correctIndex: 2, explanation: 'Square both sides: $x + 3 = 25$, so $x = 22$. Check: $\\sqrt{25} = 5$. (2 subtracts 3 from 5 without squaring.)', partNumber: 5, partTitle: 'Radical Equations' },
  { id: 'ser-ent-5b', question: 'What is the solution set of $\\sqrt{x + 6} = x$?', options: ['$x = 3$ only', '$x = -2$ only', '$x = 3$ or $x = -2$', 'There is no solution'], correctIndex: 0, explanation: 'Square: $x + 6 = x^2$, so $x^2 - x - 6 = 0$ and $(x - 3)(x + 2) = 0$. Check both: $\\sqrt{9} = 3$ works, but $\\sqrt{4} = 2 \\neq -2$, so $x = -2$ is extraneous. Only $x = 3$ remains.', partNumber: 5, partTitle: 'Radical Equations' },
  { id: 'ser-ent-6a', question: 'Simplify: $\\sqrt{50} + \\sqrt{8}$', options: ['$\\sqrt{58}$', '$7\\sqrt{2}$', '$10\\sqrt{2}$', '$9\\sqrt{2}$'], correctIndex: 1, explanation: 'Simplify first: $\\sqrt{50} = 5\\sqrt{2}$ and $\\sqrt{8} = 2\\sqrt{2}$. Like radicals combine: $5\\sqrt{2} + 2\\sqrt{2} = 7\\sqrt{2}$. Adding under the root ($\\sqrt{58}$) is not allowed.', partNumber: 6, partTitle: 'Simplifying Complex Expressions' },
  { id: 'ser-ent-6b', question: 'For $x > 0$ and $y > 0$, which expression is equivalent to $\\left(\\dfrac{x^9}{y^6}\\right)^{2/3}$?', options: ['$\\dfrac{x^6}{y^4}$', '$\\dfrac{x^3}{y^2}$', '$\\dfrac{x^{18}}{y^{12}}$', '$\\dfrac{x^{11}}{y^{8}}$'], correctIndex: 0, explanation: 'Multiply each exponent by $\\tfrac{2}{3}$: $9 \\cdot \\tfrac{2}{3} = 6$ and $6 \\cdot \\tfrac{2}{3} = 4$, giving $\\dfrac{x^6}{y^4}$. $\\dfrac{x^3}{y^2}$ takes only the cube root; $\\dfrac{x^{18}}{y^{12}}$ only squares.', partNumber: 6, partTitle: 'Simplifying Complex Expressions' },
  { id: 'ser-ent-7a', question: 'What is the value of $8^{2/3}$?', options: ['$2$', '$4$', '$\\dfrac{16}{3}$', '$16$'], correctIndex: 1, explanation: '$8^{2/3} = \\left(8^{1/3}\\right)^2 = 2^2 = 4$. ($\\dfrac{16}{3}$ multiplies 8 by $\\tfrac{2}{3}$, treating the exponent as a factor.)', partNumber: 7, partTitle: 'Review & SAT-Level Practice' },
  { id: 'ser-ent-7b', question: 'Which of the following is equivalent to $(\\sqrt{x})^4$ for $x \\geq 0$?', options: ['$x$', '$x^2$', '$4\\sqrt{x}$', '$x^4$'], correctIndex: 1, explanation: '$(\\sqrt{x})^4 = \\left(x^{1/2}\\right)^4 = x^{4/2} = x^2$.', partNumber: 7, partTitle: 'Review & SAT-Level Practice' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exponent Rules' },
    { partNumber: 2, partTitle: 'Radicals and Rational Exponents' },
    { partNumber: 3, partTitle: 'Scientific Notation' },
    { partNumber: 4, partTitle: 'Solving Equations with Exponents' },
    { partNumber: 5, partTitle: 'Radical Equations' },
    { partNumber: 6, partTitle: 'Simplifying Complex Expressions' },
    { partNumber: 7, partTitle: 'Review & SAT-Level Practice' },
  ]
}
