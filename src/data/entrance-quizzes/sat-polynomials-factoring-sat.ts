/**
 * Entrance Quiz — Polynomials & Factoring (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'spf-ent-1a', question: 'What is the degree of the polynomial $(x^2 + 3)(2x^3 - x)$?', options: ['2', '3', '5', '6'], correctIndex: 2, explanation: 'The degree of a product is the sum of the degrees: $2 + 3 = 5$. The leading term is $x^2 \\cdot 2x^3 = 2x^5$. (6 multiplies the degrees.)', partNumber: 1, partTitle: 'Polynomial Basics' },
  { id: 'spf-ent-1b', question: 'Which expression is equivalent to $(3x^2 + 2x - 5) + (x^2 - 4x + 3)$?', options: ['$4x^2 - 2x - 2$', '$4x^2 + 6x + 8$', '$2x^2 - 2x - 2$', '$4x^2 - 2x + 2$'], correctIndex: 0, explanation: 'Combine like terms: $(3 + 1)x^2 + (2 - 4)x + (-5 + 3) = 4x^2 - 2x - 2$.', partNumber: 1, partTitle: 'Polynomial Basics' },
  { id: 'spf-ent-2a', question: 'Which expression shows $6x^3 - 9x^2 + 3x$ with its greatest common factor factored out?', options: ['$3x(2x^2 - 3x + 1)$', '$3(2x^3 - 3x^2 + x)$', '$x(6x^2 - 9x + 3)$', '$3x^2(2x - 3 + x)$'], correctIndex: 0, explanation: 'The GCF of the coefficients 6, 9, 3 is 3, and every term has at least one $x$, so the GCF is $3x$: $3x(2x^2 - 3x + 1)$. The other forms are equivalent but leave a common factor inside, or are not equivalent at all.', partNumber: 2, partTitle: 'Factoring Techniques' },
  { id: 'spf-ent-2b', question: 'Which of the following can be factored as a difference of squares?', options: ['$x^2 + 16$', '$x^2 - 12$', '$4x^2 - 25$', '$x^2 - 2x - 8$'], correctIndex: 2, explanation: '$4x^2 - 25 = (2x)^2 - 5^2 = (2x - 5)(2x + 5)$. A sum of squares like $x^2 + 16$ does not factor over the reals, and 12 is not a perfect square.', partNumber: 2, partTitle: 'Factoring Techniques' },
  { id: 'spf-ent-3a', question: 'What is the remainder when $x^3 - 2x^2 + 4x - 5$ is divided by $x - 2$?', options: ['$-29$', '$-5$', '$0$', '$3$'], correctIndex: 3, explanation: 'By the Remainder Theorem, the remainder is $p(2) = 8 - 8 + 8 - 5 = 3$. ($-29$ is $p(-2)$, which is the remainder for dividing by $x + 2$.)', partNumber: 3, partTitle: 'Polynomial Division' },
  { id: 'spf-ent-3b', question: 'Which expression is equivalent to $\\dfrac{2x^2 + 7x + 3}{x + 3}$ for $x \\neq -3$?', options: ['$2x + 1$', '$2x - 1$', '$x + 1$', '$2x + 4$'], correctIndex: 0, explanation: 'Factor the numerator: $2x^2 + 7x + 3 = (2x + 1)(x + 3)$. Dividing by $x + 3$ leaves $2x + 1$. Check: $(2x + 1)(x + 3) = 2x^2 + 7x + 3$.', partNumber: 3, partTitle: 'Polynomial Division' },
  { id: 'spf-ent-4a', question: 'For a polynomial $p$, $p(3) = 0$. Which of the following must be a factor of $p(x)$?', options: ['$x - 3$', '$x + 3$', '$3x$', '$x - \\frac{1}{3}$'], correctIndex: 0, explanation: 'By the Factor Theorem, $p(a) = 0$ exactly when $x - a$ is a factor. With $a = 3$, the factor is $x - 3$ (the sign flips from the zero).', partNumber: 4, partTitle: 'Zeros, Roots, and the Factor Theorem' },
  { id: 'spf-ent-4b', question: 'What are all the zeros of $p(x) = x^3 - 4x$?', options: ['$x = 0$ only', '$x = 0$ and $x = \\pm 4$', '$x = 0$ and $x = \\pm 2$', '$x = \\pm 2$ only'], correctIndex: 2, explanation: 'Factor completely: $x(x^2 - 4) = x(x - 2)(x + 2)$, so the zeros are $0$, $2$, and $-2$. Dividing by $x$ at the start loses the zero at $x = 0$.', partNumber: 4, partTitle: 'Zeros, Roots, and the Factor Theorem' },
  { id: 'spf-ent-5a', question: 'For $x \\neq 2$ and $x \\neq -2$, which expression is equivalent to $\\dfrac{x^2 + 5x + 6}{x^2 - 4}$?', options: ['$\\dfrac{x + 3}{x - 2}$', '$\\dfrac{x + 3}{x + 2}$', '$\\dfrac{x - 3}{x - 2}$', '$\\dfrac{5x + 6}{-4}$'], correctIndex: 0, explanation: 'Factor: $\\dfrac{(x + 2)(x + 3)}{(x + 2)(x - 2)}$, then cancel $x + 2$ to get $\\dfrac{x + 3}{x - 2}$. Canceling the $x^2$ terms, which gives $\\dfrac{5x + 6}{-4}$, is not allowed.', partNumber: 5, partTitle: 'Rational Expressions' },
  { id: 'spf-ent-5b', question: 'For which values of $x$ is $\\dfrac{x + 1}{x^2 - 5x}$ undefined?', options: ['$x = 0$ and $x = 5$', '$x = -1$ and $x = 5$', '$x = 5$ only', '$x = -1$ and $x = 0$'], correctIndex: 0, explanation: 'The expression is undefined where the denominator is zero: $x^2 - 5x = x(x - 5) = 0$, so $x = 0$ or $x = 5$. A zero of the numerator ($x = -1$) makes the expression equal 0, not undefined.', partNumber: 5, partTitle: 'Rational Expressions' },
  { id: 'spf-ent-6a', question: 'The graph of a cubic polynomial crosses the $x$-axis at $x = -2$, $x = 1$, and $x = 4$, and passes through $(0, 8)$. Which equation could define it?', options: ['$y = (x + 2)(x - 1)(x - 4)$', '$y = (x - 2)(x + 1)(x + 4)$', '$y = -(x + 2)(x - 1)(x - 4)$', '$y = 2(x + 2)(x - 1)(x - 4)$'], correctIndex: 0, explanation: 'Zeros at $-2$, $1$, $4$ give factors $(x + 2)(x - 1)(x - 4)$. At $x = 0$: $a(2)(-1)(-4) = 8a = 8$, so $a = 1$. The version with $x - 2$, $x + 1$, $x + 4$ has the wrong zeros.', partNumber: 6, partTitle: 'Polynomial Graphs and Transformations' },
  { id: 'spf-ent-6b', question: 'How does the graph of $y = f(x - 2) + 3$ compare with the graph of $y = f(x)$?', options: ['Shifted 2 units right and 3 units up', 'Shifted 2 units left and 3 units up', 'Shifted 2 units right and 3 units down', 'Shifted 3 units right and 2 units up'], correctIndex: 0, explanation: 'Subtracting 2 inside the function shifts the graph 2 units right; adding 3 outside shifts it 3 units up.', partNumber: 6, partTitle: 'Polynomial Graphs and Transformations' },
  { id: 'spf-ent-7a', question: 'Which quadratic has zeros at $x = 1$ and $x = -4$?', options: ['$x^2 + 3x - 4$', '$x^2 - 3x - 4$', '$x^2 + 5x + 4$', '$x^2 - 5x + 4$'], correctIndex: 0, explanation: 'Zeros 1 and $-4$ give $(x - 1)(x + 4) = x^2 + 4x - x - 4 = x^2 + 3x - 4$. ($x^2 - 3x - 4$ has zeros $-1$ and 4.)', partNumber: 7, partTitle: 'Review & Advanced SAT Problems' },
  { id: 'spf-ent-7b', question: 'Which expression is equivalent to $x^4 - 5x^2 + 4$?', options: ['$(x^2 - 1)(x^2 - 4)$', '$(x^2 + 1)(x^2 + 4)$', '$(x^2 - 1)(x^2 + 4)$', '$(x^2 - 5)(x^2 + 1)$'], correctIndex: 0, explanation: 'Let $u = x^2$: $u^2 - 5u + 4 = (u - 1)(u - 4)$, so $x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4)$. Check: the middle term is $-x^2 - 4x^2 = -5x^2$ and the constant is $(-1)(-4) = 4$.', partNumber: 7, partTitle: 'Review & Advanced SAT Problems' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Polynomial Basics' },
    { partNumber: 2, partTitle: 'Factoring Techniques' },
    { partNumber: 3, partTitle: 'Polynomial Division' },
    { partNumber: 4, partTitle: 'Zeros, Roots, and the Factor Theorem' },
    { partNumber: 5, partTitle: 'Rational Expressions' },
    { partNumber: 6, partTitle: 'Polynomial Graphs and Transformations' },
    { partNumber: 7, partTitle: 'Review & Advanced SAT Problems' },
  ]
}
