/**
 * Entrance Quiz — SAT Passport to Advanced Math (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'spam-ent-1a', question: 'Which expression is equivalent to $(2x + 3)(x - 4)$?', options: ['$2x^2 - 5x - 12$', '$2x^2 + 5x - 12$', '$2x^2 - 8x - 12$', '$2x^2 - 5x + 12$'], correctIndex: 0, explanation: 'Distribute: $2x \\cdot x + 2x(-4) + 3x + 3(-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$. ($2x^2 - 8x - 12$ drops the $3x$ term.)', partNumber: 1, partTitle: 'Polynomial Operations' },
  { id: 'spam-ent-1b', question: 'Which expression is equivalent to $(3x^2 - 2x + 5) - (x^2 + 4x - 1)$?', options: ['$2x^2 - 6x + 6$', '$2x^2 + 2x + 4$', '$2x^2 - 6x + 4$', '$2x^2 + 2x + 6$'], correctIndex: 0, explanation: 'Distribute the minus sign to every term: $3x^2 - 2x + 5 - x^2 - 4x + 1 = 2x^2 - 6x + 6$. ($2x^2 - 6x + 4$ forgets that subtracting $-1$ adds 1.)', partNumber: 1, partTitle: 'Polynomial Operations' },
  { id: 'spam-ent-2a', question: 'Which of the following is a factor of $x^3 + 2x^2 - 9x - 18$?', options: ['$x - 2$', '$x + 3$', '$x + 9$', '$x - 9$'], correctIndex: 1, explanation: 'Group: $x^2(x + 2) - 9(x + 2) = (x + 2)(x^2 - 9) = (x + 2)(x - 3)(x + 3)$. Of the choices, only $x + 3$ is a factor.', partNumber: 2, partTitle: 'Factoring Techniques' },
  { id: 'spam-ent-2b', question: 'Which expression is equivalent to $4x^2 - 25$?', options: ['$(2x - 5)(2x + 5)$', '$(2x - 5)^2$', '$(4x - 5)(x + 5)$', '$(2x + 5)^2$'], correctIndex: 0, explanation: 'This is a difference of squares: $(2x)^2 - 5^2 = (2x - 5)(2x + 5)$. $(2x - 5)^2$ expands to $4x^2 - 20x + 25$.', partNumber: 2, partTitle: 'Factoring Techniques' },
  { id: 'spam-ent-3a', question: 'For $x \\neq 3$ and $x \\neq -2$, which expression is equivalent to $\\dfrac{x^2 - 9}{x^2 - x - 6}$?', options: ['$\\dfrac{x + 3}{x + 2}$', '$\\dfrac{x - 3}{x + 2}$', '$\\dfrac{x + 3}{x - 2}$', '$\\dfrac{9}{x + 6}$'], correctIndex: 0, explanation: 'Factor: $\\dfrac{(x + 3)(x - 3)}{(x - 3)(x + 2)}$. Cancel the common factor $x - 3$ to get $\\dfrac{x + 3}{x + 2}$. Canceling the $x^2$ terms directly, which gives $\\dfrac{9}{x + 6}$, is not allowed.', partNumber: 3, partTitle: 'Rational Expressions' },
  { id: 'spam-ent-3b', question: 'For $x \\neq 0$ and $x \\neq -1$, which expression is equivalent to $\\dfrac{1}{x} + \\dfrac{2}{x + 1}$?', options: ['$\\dfrac{3x + 1}{x(x + 1)}$', '$\\dfrac{3}{2x + 1}$', '$\\dfrac{3}{x(x + 1)}$', '$\\dfrac{2x + 1}{x(x + 1)}$'], correctIndex: 0, explanation: 'Use the common denominator $x(x + 1)$: $\\dfrac{x + 1}{x(x + 1)} + \\dfrac{2x}{x(x + 1)} = \\dfrac{3x + 1}{x(x + 1)}$. Adding numerators and denominators straight across gives $\\dfrac{3}{2x + 1}$, which is not valid.', partNumber: 3, partTitle: 'Rational Expressions' },
  { id: 'spam-ent-4a', question: 'For $x > 0$, which expression is equivalent to $\\sqrt{48x^3}$?', options: ['$4x\\sqrt{3x}$', '$16x\\sqrt{3x}$', '$4x^2\\sqrt{3}$', '$3x\\sqrt{4x}$'], correctIndex: 0, explanation: '$\\sqrt{48x^3} = \\sqrt{16 \\cdot 3 \\cdot x^2 \\cdot x} = 4x\\sqrt{3x}$. ($16x\\sqrt{3x}$ forgets to take the square root of 16.)', partNumber: 4, partTitle: 'Radicals and Radical Equations' },
  { id: 'spam-ent-4b', question: 'What is the solution set of $\\sqrt{x + 7} = x + 1$?', options: ['$x = 2$ only', '$x = -3$ only', '$x = 2$ or $x = -3$', '$x = -2$ or $x = 3$'], correctIndex: 0, explanation: 'Square: $x + 7 = x^2 + 2x + 1$, so $x^2 + x - 6 = 0$ and $(x + 3)(x - 2) = 0$. Check: $x = 2$ gives $3 = 3$; $x = -3$ gives $\\sqrt{4} = 2 \\neq -2$, so it is extraneous.', partNumber: 4, partTitle: 'Radicals and Radical Equations' },
  { id: 'spam-ent-5a', question: 'Which ordered pair is a solution to the system $y = x^2 - 4$ and $y = 2x - 1$?', options: ['$(3, 5)$', '$(1, 1)$', '$(-3, 5)$', '$(2, 0)$'], correctIndex: 0, explanation: 'Substitute: $x^2 - 4 = 2x - 1$, so $x^2 - 2x - 3 = 0$ and $x = 3$ or $x = -1$. At $x = 3$, $y = 5$. ($(-3, 5)$ and $(2, 0)$ lie on the parabola but not on the line.)', partNumber: 5, partTitle: 'Nonlinear Systems' },
  { id: 'spam-ent-5b', question: 'The system $y = x^2 - 4$ and $y = k$, where $k$ is a constant, has exactly one solution. What is the value of $k$?', options: ['$-4$', '$0$', '$4$', '$-2$'], correctIndex: 0, explanation: 'A horizontal line meets an upward parabola exactly once only at the vertex. The vertex of $y = x^2 - 4$ is $(0, -4)$, so $k = -4$. ($k = 0$ crosses at $x = \\pm 2$, two solutions.)', partNumber: 5, partTitle: 'Nonlinear Systems' },
  { id: 'spam-ent-6a', question: 'If $f(x) = 3x + 2$ and $g(x) = x^2$, which expression is $f(g(x))$?', options: ['$3x^2 + 2$', '$(3x + 2)^2$', '$3x^3 + 2x^2$', '$3x + 2x^2$'], correctIndex: 0, explanation: 'Replace every $x$ in $f$ with $g(x)$: $f(x^2) = 3x^2 + 2$. $(3x + 2)^2$ is $g(f(x))$, the other order.', partNumber: 6, partTitle: 'Composition and Domain Restrictions' },
  { id: 'spam-ent-6b', question: 'If $f(x) = \\dfrac{1}{x}$ and $g(x) = x - 5$, for which value of $x$ is $f(g(x))$ undefined?', options: ['$5$', '$-5$', '$0$', '$\\frac{1}{5}$'], correctIndex: 0, explanation: '$f(g(x)) = \\dfrac{1}{x - 5}$, and the denominator is $0$ when $x = 5$. $x = 0$ is where $f$ alone is undefined, but $f(g(0)) = f(-5) = -\\dfrac{1}{5}$ is defined.', partNumber: 6, partTitle: 'Composition and Domain Restrictions' },
  { id: 'spam-ent-7a', question: 'If $x + \\dfrac{1}{x} = 5$, what is the value of $x^2 + \\dfrac{1}{x^2}$?', options: ['21', '23', '25', '27'], correctIndex: 1, explanation: 'Square both sides: $x^2 + 2 + \\dfrac{1}{x^2} = 25$, because the cross term is $2 \\cdot x \\cdot \\dfrac{1}{x} = 2$. So $x^2 + \\dfrac{1}{x^2} = 23$. (25 forgets the cross term.)', partNumber: 7, partTitle: 'Mixed SAT-Style Review' },
  { id: 'spam-ent-7b', question: 'The function $f(x) = ax^2 + bx + c$, where $a \\neq 0$, has exactly one real zero. Which of the following must be true?', options: ['$b^2 - 4ac > 0$', '$b^2 - 4ac < 0$', '$b^2 - 4ac = 0$', '$b^2 - 4ac = 1$'], correctIndex: 2, explanation: 'The discriminant counts real zeros: positive gives two, zero gives exactly one (a repeated root), and negative gives none.', partNumber: 7, partTitle: 'Mixed SAT-Style Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Polynomial Operations' },
    { partNumber: 2, partTitle: 'Factoring Techniques' },
    { partNumber: 3, partTitle: 'Rational Expressions' },
    { partNumber: 4, partTitle: 'Radicals and Radical Equations' },
    { partNumber: 5, partTitle: 'Nonlinear Systems' },
    { partNumber: 6, partTitle: 'Composition and Domain Restrictions' },
    { partNumber: 7, partTitle: 'Mixed SAT-Style Review' },
  ]
}
