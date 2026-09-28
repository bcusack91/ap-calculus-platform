/**
 * Entrance Quiz — Functions & Graphs (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'sfg-ent-1a', question: 'If $f(x) = 3x^2 - 2x + 1$, what is $f(2)$?', options: ['7', '9', '11', '13'], correctIndex: 1, explanation: '$f(2) = 3(2)^2 - 2(2) + 1 = 12 - 4 + 1 = 9$. (13 adds the $2x$ term instead of subtracting it.)', partNumber: 1, partTitle: 'Function Notation & Evaluation' },
  { id: 'sfg-ent-1b', question: 'What is the domain of $f(x) = \\sqrt{x - 4}$?', options: ['$x > 4$', '$x \\geq 4$', '$x \\leq 4$', '$x \\geq -4$'], correctIndex: 1, explanation: 'The expression under a square root must be nonnegative: $x - 4 \\geq 0$, so $x \\geq 4$. The endpoint is included because $\\sqrt{0} = 0$ is defined.', partNumber: 1, partTitle: 'Function Notation & Evaluation' },
  { id: 'sfg-ent-2a', question: 'If $f(x) = 2x + 1$ and $g(x) = x^2$, what is $f(g(3))$?', options: ['13', '19', '49', '7'], correctIndex: 1, explanation: 'Work from the inside out: $g(3) = 9$, then $f(9) = 2(9) + 1 = 19$. (49 is $g(f(3))$, the composition in the wrong order.)', partNumber: 2, partTitle: 'Composition and Combining Functions' },
  { id: 'sfg-ent-2b', question: 'If $f(x) = x^2 + 3x$, which expression is equivalent to $f(x - 1)$?', options: ['$x^2 + x - 2$', '$x^2 + 3x - 1$', '$x^2 + 3x - 2$', '$x^2 + x - 4$'], correctIndex: 0, explanation: 'Replace every $x$ with $(x - 1)$: $(x - 1)^2 + 3(x - 1) = x^2 - 2x + 1 + 3x - 3 = x^2 + x - 2$. $x^2 + 3x - 1$ is $f(x) - 1$, which changes the output instead of the input, and $x^2 + 3x - 2$ comes from squaring $(x - 1)$ as $x^2 + 1$.', partNumber: 2, partTitle: 'Composition and Combining Functions' },
  { id: 'sfg-ent-3a', question: 'The graph of $y = f(x)$ is shifted 3 units to the right. Which equation describes the new graph?', options: ['$y = f(x + 3)$', '$y = f(x - 3)$', '$y = f(x) + 3$', '$y = f(x) - 3$'], correctIndex: 1, explanation: 'A horizontal shift of $h$ units to the right replaces $x$ with $x - h$, so the new graph is $y = f(x - 3)$. $f(x + 3)$ shifts left, and adding outside the function shifts up or down.', partNumber: 3, partTitle: 'Transformations of Functions' },
  { id: 'sfg-ent-3b', question: 'Compared with the graph of $y = x^2$, the graph of $y = -x^2$ is:', options: ['Shifted down by 1 unit', 'Reflected over the x-axis', 'Reflected over the y-axis', 'Reflected and shifted down 1'], correctIndex: 1, explanation: 'Multiplying the output by $-1$ flips every point $(x, y)$ to $(x, -y)$, a reflection over the $x$-axis. (A reflection over the $y$-axis would replace $x$ with $-x$, which leaves $x^2$ unchanged.)', partNumber: 3, partTitle: 'Transformations of Functions' },
  { id: 'sfg-ent-4a', question: 'The function $f$ is defined by $f(x) = \\begin{cases} x^2 & \\text{if } x < 2 \\\\ 3x - 1 & \\text{if } x \\geq 2 \\end{cases}$. What is $f(2) + f(-3)$?', options: ['$-5$', '$9$', '$13$', '$14$'], correctIndex: 3, explanation: 'For $x = 2$, use the second piece: $f(2) = 3(2) - 1 = 5$. For $x = -3$, use the first piece: $f(-3) = 9$. The sum is 14. (13 uses the first piece for $x = 2$.)', partNumber: 4, partTitle: 'Piecewise & Absolute Value Functions' },
  { id: 'sfg-ent-4b', question: 'What is the vertex of the graph of $y = 2|x - 3| + 1$?', options: ['$(3, 1)$', '$(-3, 1)$', '$(1, 3)$', '$(3, 2)$'], correctIndex: 0, explanation: 'For $y = a|x - h| + k$ the vertex is $(h, k)$. Here $h = 3$ and $k = 1$, so the vertex is $(3, 1)$. The sign inside flips: $x - 3$ means $h = +3$.', partNumber: 4, partTitle: 'Piecewise & Absolute Value Functions' },
  { id: 'sfg-ent-5a', question: 'The table defines the function $f$. What is the average rate of change of $f$ from $x = 1$ to $x = 3$?\n\n| $x$ | 1 | 2 | 3 | 4 |\n| --- | --- | --- | --- | --- |\n| $f(x)$ | 5 | 3 | 1 | $-1$ |', options: ['$-4$', '$-2$', '$2$', '$-\\frac{1}{2}$'], correctIndex: 1, explanation: 'Average rate of change $= \\dfrac{f(3) - f(1)}{3 - 1} = \\dfrac{1 - 5}{2} = -2$. ($-4$ is the change in $f$ without dividing by the change in $x$.)', partNumber: 5, partTitle: 'Graph Analysis & Interpretation' },
  { id: 'sfg-ent-5b', question: 'What are the $x$-intercepts of the graph of $f(x) = (x - 2)(x + 5)$?', options: ['$x = 2$ and $x = -5$', '$x = -2$ and $x = 5$', '$x = 2$ and $x = 5$', '$x = -2$ and $x = -5$'], correctIndex: 0, explanation: 'Set $f(x) = 0$: $x - 2 = 0$ or $x + 5 = 0$, so $x = 2$ or $x = -5$. Each factor $x - a$ gives the zero $x = a$.', partNumber: 5, partTitle: 'Graph Analysis & Interpretation' },
  { id: 'sfg-ent-6a', question: 'For which function does the value of $f(x)$ decrease by $30\\%$ each time $x$ increases by 1?', options: ['$f(x) = 40(0.7)^x$', '$f(x) = 40(0.3)^x$', '$f(x) = 40(1.3)^x$', '$f(x) = 40 - 0.3x$'], correctIndex: 0, explanation: 'Losing $30\\%$ leaves $70\\%$ of the value, so the factor is $1 - 0.30 = 0.7$. A factor of $0.3$ keeps only $30\\%$ (a $70\\%$ drop), $1.3$ is $30\\%$ growth, and $40 - 0.3x$ subtracts a fixed amount, which is linear.', partNumber: 6, partTitle: 'Exponential Functions and Their Graphs' },
  { id: 'sfg-ent-6b', question: 'What is the $y$-intercept of the graph of $y = 5(2)^x + 3$ in the $xy$-plane?', options: ['$(0, 8)$', '$(0, 5)$', '$(0, 3)$', '$(0, 13)$'], correctIndex: 0, explanation: 'At $x = 0$, $(2)^0 = 1$, so $y = 5(1) + 3 = 8$. $(0, 5)$ ignores the $+3$, $(0, 3)$ is the level the graph approaches, and $(0, 13)$ is the value at $x = 1$.', partNumber: 6, partTitle: 'Exponential Functions and Their Graphs' },
  { id: 'sfg-ent-7a', question: 'Which set of ordered pairs does NOT represent a function?', options: ['$\\{(1, 2), (2, 4), (3, 6)\\}$', '$\\{(1, 3), (2, 3), (3, 3)\\}$', '$\\{(1, 2), (1, 4), (2, 3)\\}$', '$\\{(0, 0), (1, 1), (2, 4)\\}$'], correctIndex: 2, explanation: 'A function assigns exactly one output to each input. The pairs $(1, 2)$ and $(1, 4)$ give the input 1 two outputs. Repeated outputs, as in $\\{(1, 3), (2, 3), (3, 3)\\}$, are allowed.', partNumber: 7, partTitle: 'Review & SAT-Level Mixed Practice' },
  { id: 'sfg-ent-7b', question: 'What is the range of $f(x) = x^2 + 3$?', options: ['$y \\geq 0$', '$y \\geq 3$', 'All real numbers', '$y \\leq 3$'], correctIndex: 1, explanation: 'Since $x^2 \\geq 0$ for every real $x$, $x^2 + 3 \\geq 3$, and $f(0) = 3$. The range is $y \\geq 3$.', partNumber: 7, partTitle: 'Review & SAT-Level Mixed Practice' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Function Notation & Evaluation' },
    { partNumber: 2, partTitle: 'Composition and Combining Functions' },
    { partNumber: 3, partTitle: 'Transformations of Functions' },
    { partNumber: 4, partTitle: 'Piecewise & Absolute Value Functions' },
    { partNumber: 5, partTitle: 'Graph Analysis & Interpretation' },
    { partNumber: 6, partTitle: 'Exponential Functions and Their Graphs' },
    { partNumber: 7, partTitle: 'Review & SAT-Level Mixed Practice' },
  ]
}
