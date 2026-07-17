/**
 * Entrance Quiz — Exponents & Radicals (SAT)
 * 14 questions · 7 parts (2 per part)
 *
 * All math is authored in LaTeX ($...$) and rendered through the shared
 * renderRichText/KaTeX pipeline — no Unicode superscripts or caret notation.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ser-ent-1a', question: 'Simplify: $x^3 \\cdot x^5$', options: ['$x^8$', '$x^{15}$', '$2x^8$', '$x^2$'], correctIndex: 0, explanation: 'When multiplying powers with the same base, add the exponents: $x^3 \\cdot x^5 = x^{3+5} = x^8$.', partNumber: 1, partTitle: 'Exponent Rules' },
  { id: 'ser-ent-1b', question: 'Simplify: $(x^4)^3$', options: ['$x^7$', '$x^{12}$', '$x^{43}$', '$3x^4$'], correctIndex: 1, explanation: 'When raising a power to a power, multiply the exponents: $(x^4)^3 = x^{4 \\times 3} = x^{12}$.', partNumber: 1, partTitle: 'Exponent Rules' },
  { id: 'ser-ent-2a', question: 'What is the value of $5^{-2}$?', options: ['$-25$', '$-10$', '$\\dfrac{1}{25}$', '$\\dfrac{1}{10}$'], correctIndex: 2, explanation: 'A negative exponent means take the reciprocal: $5^{-2} = \\dfrac{1}{5^2} = \\dfrac{1}{25}$.', partNumber: 2, partTitle: 'Negative Exponents' },
  { id: 'ser-ent-2b', question: 'Simplify: $(2x^{-3})^2$. Write your answer using positive exponents.', options: ['$4x^6$', '$4x^{-5}$', '$2x^{-6}$', '$\\dfrac{4}{x^6}$'], correctIndex: 3, explanation: '$(2x^{-3})^2 = 4x^{-6}$, and rewriting with a positive exponent gives $\\dfrac{4}{x^6}$. (Dropping the negative sign to get $4x^6$ is the classic error.)', partNumber: 2, partTitle: 'Negative Exponents' },
  { id: 'ser-ent-3a', question: 'Write $0.00047$ in scientific notation.', options: ['$4.7 \\times 10^{-3}$', '$4.7 \\times 10^{-4}$', '$47 \\times 10^{-5}$', '$0.47 \\times 10^{-3}$'], correctIndex: 1, explanation: 'Move the decimal 4 places right: $0.00047 = 4.7 \\times 10^{-4}$.', partNumber: 3, partTitle: 'Scientific Notation' },
  { id: 'ser-ent-3b', question: 'Multiply: $(3 \\times 10^4) \\times (2 \\times 10^3)$', options: ['$6 \\times 10^7$', '$5 \\times 10^7$', '$6 \\times 10^{12}$', '$6 \\times 10^6$'], correctIndex: 0, explanation: 'Multiply the coefficients ($3 \\times 2 = 6$) and add the exponents ($4 + 3 = 7$): $6 \\times 10^7$.', partNumber: 3, partTitle: 'Scientific Notation' },
  { id: 'ser-ent-4a', question: 'Simplify: $\\sqrt{72}$', options: ['$8\\sqrt{2}$', '$6\\sqrt{2}$', '$36\\sqrt{2}$', '$6\\sqrt{3}$'], correctIndex: 1, explanation: '$\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$.', partNumber: 4, partTitle: 'Radicals & Roots' },
  { id: 'ser-ent-4b', question: 'Simplify: $\\sqrt{50} + \\sqrt{8}$', options: ['$\\sqrt{58}$', '$7\\sqrt{2}$', '$8\\sqrt{2}$', '$9\\sqrt{2}$'], correctIndex: 1, explanation: '$\\sqrt{50} = 5\\sqrt{2}$ and $\\sqrt{8} = 2\\sqrt{2}$. Sum: $5\\sqrt{2} + 2\\sqrt{2} = 7\\sqrt{2}$.', partNumber: 4, partTitle: 'Radicals & Roots' },
  { id: 'ser-ent-5a', question: 'What is $8^{2/3}$?', options: ['$2$', '$4$', '$16$', '$6$'], correctIndex: 1, explanation: '$8^{2/3} = \\left(8^{1/3}\\right)^2 = 2^2 = 4$.', partNumber: 5, partTitle: 'Rational Exponents' },
  { id: 'ser-ent-5b', question: 'Which expression is equivalent to $x^{3/2}$?', options: ['$\\sqrt{x^3}$', '$\\sqrt[3]{x^2}$', '$\\dfrac{x^3}{2}$', '$x + x^{1/2}$'], correctIndex: 0, explanation: '$x^{3/2} = \\left(x^3\\right)^{1/2} = \\sqrt{x^3}$. A fractional exponent is a root, not division — $\\dfrac{x^3}{2}$ is not equivalent.', partNumber: 5, partTitle: 'Rational Exponents' },
  { id: 'ser-ent-6a', question: 'Simplify: $\\left(\\dfrac{x^6}{x^2}\\right)^3$', options: ['$x^{12}$', '$x^4$', '$x^{18}$', '$x^8$'], correctIndex: 0, explanation: 'First: $\\dfrac{x^6}{x^2} = x^4$. Then $(x^4)^3 = x^{12}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ser-ent-6b', question: 'Solve for $x$: $2^x = 32$', options: ['$4$', '$5$', '$6$', '$16$'], correctIndex: 1, explanation: '$32 = 2^5$, so $2^x = 2^5 \\Rightarrow x = 5$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ser-ent-7a', question: 'Which of the following is equivalent to $(\\sqrt{x})^4$?', options: ['$x$', '$x^2$', '$4\\sqrt{x}$', '$x^4$'], correctIndex: 1, explanation: '$(\\sqrt{x})^4 = \\left(x^{1/2}\\right)^4 = x^{4/2} = x^2$.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'ser-ent-7b', question: 'What is the value of $27^{1/3} \\times 16^{1/4}$?', options: ['$3$', '$6$', '$9$', '$12$'], correctIndex: 1, explanation: '$27^{1/3} = 3$ (cube root of 27) and $16^{1/4} = 2$ (fourth root of 16). Product: $3 \\times 2 = 6$.', partNumber: 7, partTitle: 'Review & Applications' },
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
