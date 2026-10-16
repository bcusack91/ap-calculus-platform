/**
 * Entrance Quiz — Function Transformations — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Parent Functions & the Big Idea
  {
    id: 'ftr-ent-1a',
    question: 'A graph starts at the origin, exists only for $x \\ge 0$, and rises more and more slowly as $x$ increases. Which parent function has this shape?',
    options: ['$f(x) = \\dfrac{1}{x}$', '$f(x) = \\sqrt{x}$', '$f(x) = x^3$', '$f(x) = \\lvert x \\rvert$'],
    correctIndex: 1,
    explanation: 'The square root starts at $(0,0)$, is defined only for $x \\ge 0$, and flattens as it rises. The absolute value rises at a constant rate, and the cubic and reciprocal are defined for negative inputs too.',
    partNumber: 1,
    partTitle: 'Parent Functions & the Big Idea',
  },
  {
    id: 'ftr-ent-1b',
    question: 'Starting from $y = f(x)$, which change affects only the $x$-coordinates of the points on the graph?',
    options: ['Replacing $f(x)$ with $f(x) + 4$', 'Replacing $f(x)$ with $4f(x)$', 'Replacing $f(x)$ with $f(4x)$', 'Replacing $f(x)$ with $-f(x)$'],
    correctIndex: 2,
    explanation: 'A change inside $f$, such as $f(4x)$, acts on the input, so it moves points horizontally. Adding $4$, multiplying by $4$, or negating outside $f$ all change outputs.',
    partNumber: 1,
    partTitle: 'Parent Functions & the Big Idea',
  },
  // Part 2 — Vertical Transformations (the intuitive family)
  {
    id: 'ftr-ent-2a',
    question: 'The point $(-3, 4)$ lies on the graph of $f$. Which point must lie on the graph of $y = -3f(x)$?',
    options: ['$(-3, 12)$', '$(-3, 1)$', '$(9, 4)$', '$(-3, -12)$'],
    correctIndex: 3,
    explanation: 'Multiplying the output by $-3$ triples the $y$-value and flips its sign: $-3 \\cdot 4 = -12$, with $x$ unchanged. The point $(-3, 12)$ forgets the reflection.',
    partNumber: 2,
    partTitle: 'Vertical Transformations (the intuitive family)',
  },
  {
    id: 'ftr-ent-2b',
    question: 'The range of $f$ is $[-2, 6]$. What is the range of $g(x) = -2f(x)$?',
    options: ['$[-12, 4]$', '$[-6, 2]$', '$[-4, 8]$', '$[-4, 12]$'],
    correctIndex: 0,
    explanation: 'Each output is multiplied by $-2$: $6 \\to -12$ and $-2 \\to 4$, so the range is $[-12, 4]$. The interval $[-4, 12]$ ignores the reflection, and $[-6, 2]$ ignores the stretch.',
    partNumber: 2,
    partTitle: 'Vertical Transformations (the intuitive family)',
  },
  // Part 3 — Horizontal Transformations (the backwards family)
  {
    id: 'ftr-ent-3a',
    question: 'The point $(6, -2)$ lies on the graph of $f$. Which point lies on the graph of $g(x) = f\\left(\\tfrac{1}{3}x\\right)$?',
    options: ['$(2, -2)$', '$(6, -6)$', '$(18, -2)$', '$(9, -2)$'],
    correctIndex: 2,
    explanation: 'The input must still be $6$: $\\tfrac{1}{3}x = 6$ gives $x = 18$, and the output stays $-2$. A factor of $\\tfrac{1}{3}$ inside stretches horizontally by $3$; dividing $6$ by $3$ goes the wrong way.',
    partNumber: 3,
    partTitle: 'Horizontal Transformations (the backwards family)',
  },
  {
    id: 'ftr-ent-3b',
    question: 'The domain of $f$ is $[-4, 8]$. What is the domain of $g(x) = f(-2x)$?',
    options: ['$[-16, 8]$', '$[-2, 4]$', '$[-8, 16]$', '$[-4, 2]$'],
    correctIndex: 3,
    explanation: 'We need $-4 \\le -2x \\le 8$, which gives $-4 \\le x \\le 2$. The interval $[-2, 4]$ forgets the reflection, and $[-16, 8]$ multiplies the endpoints instead of dividing.',
    partNumber: 3,
    partTitle: 'Horizontal Transformations (the backwards family)',
  },
  // Part 4 — Combining Transformations & Order
  {
    id: 'ftr-ent-4a',
    question: 'Which sequence of transformations takes $y = \\sqrt{x}$ to $y = -2\\sqrt{x + 3} + 5$?',
    options: ['Reflect over the $x$-axis, stretch vertically by 2, shift left 3, shift up 5', 'Reflect over the $x$-axis, stretch vertically by 2, shift right 3, shift up 5', 'Reflect over the $y$-axis, stretch vertically by 2, shift left 3, shift up 5', 'Reflect over the $x$-axis, stretch vertically by 2, shift left 3, shift down 5'],
    correctIndex: 0,
    explanation: 'The $-2$ outside reflects over the $x$-axis and stretches by 2, the $+3$ inside shifts left 3, and the $+5$ outside shifts up 5. A negative outside $f$ reflects over the $x$-axis, not the $y$-axis.',
    partNumber: 4,
    partTitle: 'Combining Transformations & Order',
  },
  {
    id: 'ftr-ent-4b',
    question: 'The graph of $y = f(x)$ is first shifted down 6 units and then stretched vertically by a factor of 2. Which equation describes the result?',
    options: ['$y = 2f(x) - 6$', '$y = 2f(x) - 12$', '$y = 2f(x - 6)$', '$y = 2f(x) - 8$'],
    correctIndex: 1,
    explanation: 'Shifting first gives $f(x) - 6$; stretching that whole output by 2 gives $2(f(x) - 6) = 2f(x) - 12$. The equation $2f(x) - 6$ describes stretching first and shifting second.',
    partNumber: 4,
    partTitle: 'Combining Transformations & Order',
  },
  // Part 5 — Mapping Points & Reading Graphs
  {
    id: 'ftr-ent-5a',
    question: 'The point $(-4, 6)$ lies on the graph of $f$. Which point lies on the graph of $g(x) = \\tfrac{1}{2}f(2x + 6) - 1$?',
    options: ['$(-8, 2)$', '$(-11, 2)$', '$(-5, 2.5)$', '$(-5, 2)$'],
    correctIndex: 3,
    explanation: 'Factor the inside as $2(x + 3)$: the new $x$ is $\\tfrac{-4}{2} - 3 = -5$ and the new $y$ is $\\tfrac{1}{2}(6) - 1 = 2$. The point $(-8, 2)$ reads the shift as 6 without factoring out the 2.',
    partNumber: 5,
    partTitle: 'Mapping Points & Reading Graphs',
  },
  {
    id: 'ftr-ent-5b',
    question: 'The graph of $g(x) = 3f(x + 1) + 2$ passes through $(5, -7)$. Which point must lie on the graph of $f$?',
    options: ['$(6, -3)$', '$(4, -3)$', '$(6, -19)$', '$(4, -19)$'],
    correctIndex: 0,
    explanation: 'Undo each step: $y_0 = \\tfrac{-7 - 2}{3} = -3$ and $x_0 = 5 + 1 = 6$, so $(6, -3)$ is on $f$. Check: $g(5) = 3f(6) + 2 = -9 + 2 = -7$.',
    partNumber: 5,
    partTitle: 'Mapping Points & Reading Graphs',
  },
  // Part 6 — Symmetry & Modeling
  {
    id: 'ftr-ent-6a',
    question: 'The function $f$ is odd and $f(4) = -7$. If $g(x) = f(x) + 2$, what is $g(-4)$?',
    options: ['$-5$', '$9$', '$5$', '$-9$'],
    correctIndex: 1,
    explanation: 'Odd means $f(-4) = -f(4) = 7$, so $g(-4) = 7 + 2 = 9$. The value $-5$ treats $f$ as even.',
    partNumber: 6,
    partTitle: 'Symmetry & Modeling',
  },
  {
    id: 'ftr-ent-6b',
    question: 'A company\\\'s profit $P(x)$ is modeled by a transformed $y = x^2$. The profit reaches a maximum of $500$ at $x = 10$, and $P(0) = -300$. Which model fits?',
    options: ['$P(x) = 8(x - 10)^2 + 500$', '$P(x) = -8(x + 10)^2 + 500$', '$P(x) = -8(x - 10)^2 + 500$', '$P(x) = -3(x - 10)^2 + 500$'],
    correctIndex: 2,
    explanation: 'The vertex is $(10, 500)$ and a maximum needs $a < 0$; then $-300 = a(0 - 10)^2 + 500$ gives $100a = -800$, so $a = -8$. Using $(x + 10)$ puts the vertex at $x = -10$.',
    partNumber: 6,
    partTitle: 'Symmetry & Modeling',
  },
  // Part 7 — Mixed Mastery & Exit Quiz
  {
    id: 'ftr-ent-7a',
    question: 'Which description takes the graph of $y = \\lvert x \\rvert$ to the graph of $y = \\lvert 2x - 8 \\rvert$?',
    options: ['Compress horizontally by a factor of $\\tfrac{1}{2}$, then shift right 4', 'Compress horizontally by a factor of $\\tfrac{1}{2}$, then shift right 8', 'Stretch horizontally by a factor of 2, then shift right 4', 'Compress horizontally by a factor of $\\tfrac{1}{2}$, then shift left 4'],
    correctIndex: 0,
    explanation: 'Factor the inside: $2x - 8 = 2(x - 4)$, so $b = 2$ compresses by $\\tfrac{1}{2}$ and $h = 4$ shifts right 4. Reading the shift as 8 skips factoring out the 2.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
  {
    id: 'ftr-ent-7b',
    question: 'The point $(2, -1)$ lies on the graph of $f$. Which point lies on the graph of $g(x) = -4f(x - 3) + 2$?',
    options: ['$(5, -2)$', '$(5, 6)$', '$(-1, 6)$', '$(5, -4)$'],
    correctIndex: 1,
    explanation: 'The new $x$ is $2 + 3 = 5$ and the new $y$ is $-4(-1) + 2 = 6$. The point $(5, -4)$ adds 2 before multiplying, and $(-1, 6)$ shifts the wrong way.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Parent Functions & the Big Idea' },
    { partNumber: 2, partTitle: 'Vertical Transformations (the intuitive family)' },
    { partNumber: 3, partTitle: 'Horizontal Transformations (the backwards family)' },
    { partNumber: 4, partTitle: 'Combining Transformations & Order' },
    { partNumber: 5, partTitle: 'Mapping Points & Reading Graphs' },
    { partNumber: 6, partTitle: 'Symmetry & Modeling' },
    { partNumber: 7, partTitle: 'Mixed Mastery & Exit Quiz' },
  ]
}
