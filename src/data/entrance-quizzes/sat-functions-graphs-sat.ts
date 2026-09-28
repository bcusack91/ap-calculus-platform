/**
 * Entrance Quiz — Functions & Graphs (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'sfg-ent-1a', question: 'If $f(x) = 3x^2 - 2x + 1$, what is $f(2)$?', options: ['7', '9', '11', '13'], correctIndex: 1, explanation: '$f(2) = 3(2)^2 - 2(2) + 1 = 12 - 4 + 1 = 9$. (13 adds the $2x$ term instead of subtracting it.)', partNumber: 1, partTitle: 'Function Notation & Evaluation' },
  { id: 'sfg-ent-1b', question: 'What is the domain of $f(x) = \\sqrt{x - 4}$?', options: ['$x > 4$', '$x \\geq 4$', '$x \\leq 4$', '$x \\geq -4$'], correctIndex: 1, explanation: 'The expression under a square root must be nonnegative: $x - 4 \\geq 0$, so $x \\geq 4$. The endpoint is included because $\\sqrt{0} = 0$ is defined.', partNumber: 1, partTitle: 'Function Notation & Evaluation' },
  { id: 'sfg-ent-2a', question: 'If $f(x) = 2x + 1$ and $g(x) = x^2$, what is $f(g(3))$?', options: ['13', '19', '49', '7'], correctIndex: 1, explanation: 'Work from the inside out: $g(3) = 9$, then $f(9) = 2(9) + 1 = 19$. (49 is $g(f(3))$, the composition in the wrong order.)', partNumber: 2, partTitle: 'Composite and Inverse Functions' },
  { id: 'sfg-ent-2b', question: 'If $f(x) = 3x - 6$, which expression is $f^{-1}(x)$?', options: ['$\\dfrac{x + 6}{3}$', '$\\dfrac{x - 6}{3}$', '$3x + 6$', '$\\dfrac{1}{3x - 6}$'], correctIndex: 0, explanation: 'Write $y = 3x - 6$, swap $x$ and $y$: $x = 3y - 6$, then solve: $y = \\dfrac{x + 6}{3}$. The inverse undoes the steps in reverse order; $\\dfrac{1}{3x - 6}$ is the reciprocal, not the inverse.', partNumber: 2, partTitle: 'Composite and Inverse Functions' },
  { id: 'sfg-ent-3a', question: 'The graph of $y = f(x)$ is shifted 3 units to the right. Which equation describes the new graph?', options: ['$y = f(x + 3)$', '$y = f(x - 3)$', '$y = f(x) + 3$', '$y = f(x) - 3$'], correctIndex: 1, explanation: 'A horizontal shift of $h$ units to the right replaces $x$ with $x - h$, so the new graph is $y = f(x - 3)$. $f(x + 3)$ shifts left, and adding outside the function shifts up or down.', partNumber: 3, partTitle: 'Transformations of Functions' },
  { id: 'sfg-ent-3b', question: 'Compared with the graph of $y = x^2$, the graph of $y = -x^2$ is:', options: ['Shifted down by 1 unit', 'Reflected over the x-axis', 'Reflected over the y-axis', 'Reflected over the line y = x'], correctIndex: 1, explanation: 'Multiplying the output by $-1$ flips every point $(x, y)$ to $(x, -y)$, a reflection over the $x$-axis. (A reflection over the $y$-axis would replace $x$ with $-x$, which leaves $x^2$ unchanged.)', partNumber: 3, partTitle: 'Transformations of Functions' },
  { id: 'sfg-ent-4a', question: 'The function $f$ is defined by $f(x) = \\begin{cases} x^2 & \\text{if } x < 2 \\\\ 3x - 1 & \\text{if } x \\geq 2 \\end{cases}$. What is $f(2) + f(-3)$?', options: ['$-5$', '$9$', '$13$', '$14$'], correctIndex: 3, explanation: 'For $x = 2$, use the second piece: $f(2) = 3(2) - 1 = 5$. For $x = -3$, use the first piece: $f(-3) = 9$. The sum is 14. (13 uses the first piece for $x = 2$.)', partNumber: 4, partTitle: 'Piecewise & Absolute Value Functions' },
  { id: 'sfg-ent-4b', question: 'What is the vertex of the graph of $y = 2|x - 3| + 1$?', options: ['$(3, 1)$', '$(-3, 1)$', '$(1, 3)$', '$(3, 2)$'], correctIndex: 0, explanation: 'For $y = a|x - h| + k$ the vertex is $(h, k)$. Here $h = 3$ and $k = 1$, so the vertex is $(3, 1)$. The sign inside flips: $x - 3$ means $h = +3$.', partNumber: 4, partTitle: 'Piecewise & Absolute Value Functions' },
  { id: 'sfg-ent-5a', question: 'The table defines the function $f$. What is the average rate of change of $f$ from $x = 1$ to $x = 3$?\n\n| $x$ | 1 | 2 | 3 | 4 |\n| --- | --- | --- | --- | --- |\n| $f(x)$ | 5 | 3 | 1 | $-1$ |', options: ['$-4$', '$-2$', '$2$', '$-\\frac{1}{2}$'], correctIndex: 1, explanation: 'Average rate of change $= \\dfrac{f(3) - f(1)}{3 - 1} = \\dfrac{1 - 5}{2} = -2$. ($-4$ is the change in $f$ without dividing by the change in $x$.)', partNumber: 5, partTitle: 'Graph Analysis & Interpretation' },
  { id: 'sfg-ent-5b', question: 'What are the $x$-intercepts of the graph of $f(x) = (x - 2)(x + 5)$?', options: ['$x = 2$ and $x = -5$', '$x = -2$ and $x = 5$', '$x = 2$ and $x = 5$', '$x = -2$ and $x = -5$'], correctIndex: 0, explanation: 'Set $f(x) = 0$: $x - 2 = 0$ or $x + 5 = 0$, so $x = 2$ or $x = -5$. Each factor $x - a$ gives the zero $x = a$.', partNumber: 5, partTitle: 'Graph Analysis & Interpretation' },
  { id: 'sfg-ent-6a', question: 'Which of the following functions is odd?', options: ['$f(x) = x^3 - x$', '$f(x) = x^2 - 1$', '$f(x) = x^3 + 1$', '$f(x) = |x|$'], correctIndex: 0, explanation: 'Odd means $f(-x) = -f(x)$. For $x^3 - x$: $f(-x) = -x^3 + x = -(x^3 - x)$. $x^2 - 1$ and $|x|$ are even, and the constant in $x^3 + 1$ breaks the odd pattern: $f(-x) = -x^3 + 1$.', partNumber: 6, partTitle: 'Even/Odd Functions and Symmetry' },
  { id: 'sfg-ent-6b', question: 'The graph of $f(x) = x^4 - 3x^2$ is symmetric about which of the following?', options: ['The $y$-axis', 'The $x$-axis', 'The origin', 'The line $y = x$'], correctIndex: 0, explanation: 'Every exponent is even, so $f(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = f(x)$. The function is even, and even functions are symmetric about the $y$-axis.', partNumber: 6, partTitle: 'Even/Odd Functions and Symmetry' },
  { id: 'sfg-ent-7a', question: 'Which set of ordered pairs does NOT represent a function?', options: ['$\\{(1, 2), (2, 4), (3, 6)\\}$', '$\\{(1, 3), (2, 3), (3, 3)\\}$', '$\\{(1, 2), (1, 4), (2, 3)\\}$', '$\\{(0, 0), (1, 1), (2, 4)\\}$'], correctIndex: 2, explanation: 'A function assigns exactly one output to each input. The pairs $(1, 2)$ and $(1, 4)$ give the input 1 two outputs. Repeated outputs, as in $\\{(1, 3), (2, 3), (3, 3)\\}$, are allowed.', partNumber: 7, partTitle: 'Review & SAT-Level Mixed Practice' },
  { id: 'sfg-ent-7b', question: 'What is the range of $f(x) = x^2 + 3$?', options: ['$y \\geq 0$', '$y \\geq 3$', 'All real numbers', '$y \\leq 3$'], correctIndex: 1, explanation: 'Since $x^2 \\geq 0$ for every real $x$, $x^2 + 3 \\geq 3$, and $f(0) = 3$. The range is $y \\geq 3$.', partNumber: 7, partTitle: 'Review & SAT-Level Mixed Practice' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Function Notation & Evaluation' },
    { partNumber: 2, partTitle: 'Composite and Inverse Functions' },
    { partNumber: 3, partTitle: 'Transformations of Functions' },
    { partNumber: 4, partTitle: 'Piecewise & Absolute Value Functions' },
    { partNumber: 5, partTitle: 'Graph Analysis & Interpretation' },
    { partNumber: 6, partTitle: 'Even/Odd Functions and Symmetry' },
    { partNumber: 7, partTitle: 'Review & SAT-Level Mixed Practice' },
  ]
}
