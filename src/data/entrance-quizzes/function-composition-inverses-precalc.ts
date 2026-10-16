/**
 * Entrance Quiz — Function Composition & Inverses — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Function Composition
  {
    id: 'fci-ent-1a',
    question: 'Let $f(x) = x^2 - 3$ and $g(x) = 3x + 1$. What is $(g \\circ f)(-2)$?',
    options: ['$22$', '$-5$', '$4$', '$-4$'],
    correctIndex: 2,
    explanation: 'Apply $f$ first: $f(-2) = 4 - 3 = 1$, then $g(1) = 3(1) + 1 = 4$. The value $22$ comes from applying $g$ first, which is $(f \\circ g)(-2)$, and $-5$ is the product $f(-2) \\cdot g(-2)$.',
    partNumber: 1,
    partTitle: 'Function Composition',
  },
  {
    id: 'fci-ent-1b',
    question: 'Let $f(x) = \\sqrt{x}$ and $g(x) = 6 - 2x$. What is the domain of $f(g(x))$?',
    options: ['$x \\ge 3$', '$x \\ge 0$', '$x \\ge -3$', '$x \\le 3$'],
    correctIndex: 3,
    explanation: 'The output of $g$ must be a legal input for the square root: $6 - 2x \\ge 0$ gives $x \\le 3$. Using only the domain of $f$ gives $x \\ge 0$.',
    partNumber: 1,
    partTitle: 'Function Composition',
  },
  // Part 2 — Inverse Functions
  {
    id: 'fci-ent-2a',
    question: 'What is the inverse of $f(x) = \\dfrac{2x - 5}{3}$?',
    options: ['$f^{-1}(x) = \\dfrac{3x + 5}{2}$', '$f^{-1}(x) = \\dfrac{3x - 5}{2}$', '$f^{-1}(x) = \\dfrac{3}{2x - 5}$', '$f^{-1}(x) = \\dfrac{2x + 5}{3}$'],
    correctIndex: 0,
    explanation: 'Swap and solve: $x = \\tfrac{2y - 5}{3}$ gives $3x = 2y - 5$, so $y = \\tfrac{3x + 5}{2}$. The reciprocal $\\tfrac{3}{2x - 5}$ confuses $f^{-1}$ with $\\tfrac{1}{f}$.',
    partNumber: 2,
    partTitle: 'Inverse Functions',
  },
  {
    id: 'fci-ent-2b',
    question: 'Which function has an inverse function on its entire domain?',
    options: ['$f(x) = x^2 + 1$', '$f(x) = x^3 - 4$', '$f(x) = (x - 1)^2$', '$f(x) = \\lvert x - 2 \\rvert$'],
    correctIndex: 1,
    explanation: 'The cubic $x^3 - 4$ is always increasing, so it passes the horizontal line test. Shifting a parabola or a V does not make it one-to-one; each still repeats outputs.',
    partNumber: 2,
    partTitle: 'Inverse Functions',
  },
  // Part 3 — Inverses of Common Functions
  {
    id: 'fci-ent-3a',
    question: 'What is the inverse of $f(x) = 2^x + 3$?',
    options: ['$f^{-1}(x) = 2^{x - 3}$', '$f^{-1}(x) = \\log_2 x - 3$', '$f^{-1}(x) = \\log_2(x + 3)$', '$f^{-1}(x) = \\log_2(x - 3)$'],
    correctIndex: 3,
    explanation: 'Swap and solve: $x = 2^y + 3$ gives $2^y = x - 3$, so $y = \\log_2(x - 3)$. Subtracting 3 after the logarithm undoes the steps in the wrong order.',
    partNumber: 3,
    partTitle: 'Inverses of Common Functions',
  },
  {
    id: 'fci-ent-3b',
    question: 'What is the inverse of $f(x) = \\dfrac{3x}{x + 2}$?',
    options: ['$f^{-1}(x) = \\dfrac{2x}{3 - x}$', '$f^{-1}(x) = \\dfrac{x + 2}{3x}$', '$f^{-1}(x) = \\dfrac{3x}{x - 2}$', '$f^{-1}(x) = \\dfrac{2x}{x - 3}$'],
    correctIndex: 0,
    explanation: 'From $x = \\tfrac{3y}{y + 2}$: $xy + 2x = 3y$, so $y(3 - x) = 2x$ and $y = \\tfrac{2x}{3 - x}$. The form $\\tfrac{2x}{x - 3}$ has the sign of the denominator flipped.',
    partNumber: 3,
    partTitle: 'Inverses of Common Functions',
  },
  // Part 4 — Composition with Tables & Graphs
  {
    id: 'fci-ent-4a',
    question: 'The table gives values of one-to-one functions $f$ and $g$.\n\n| $x$ | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| $f(x)$ | 3 | 1 | 4 | 2 |\n| $g(x)$ | 2 | 4 | 1 | 3 |\n\nWhat is $f^{-1}(g(1))$?',
    options: ['$1$', '$4$', '$3$', '$2$'],
    correctIndex: 1,
    explanation: 'First $g(1) = 2$. Then $f^{-1}(2)$ is the input with $f(x) = 2$, which is $x = 4$. Reading $f(2) = 1$ instead treats $f^{-1}$ as $f$.',
    partNumber: 4,
    partTitle: 'Composition with Tables & Graphs',
  },
  {
    id: 'fci-ent-4b',
    question: 'A one-to-one function $f$ satisfies $f(2) = 7$, $f(7) = -1$, and $f(-1) = 2$. What is $f^{-1}\\big(f^{-1}(2)\\big)$?',
    options: ['$-1$', '$2$', '$7$', '$4$'],
    correctIndex: 2,
    explanation: 'Since $f(-1) = 2$, $f^{-1}(2) = -1$; since $f(7) = -1$, $f^{-1}(-1) = 7$. The value $-1$ stops after one step.',
    partNumber: 4,
    partTitle: 'Composition with Tables & Graphs',
  },
  // Part 5 — Piecewise & Absolute Value Compositions
  {
    id: 'fci-ent-5a',
    question: 'Let $f(x) = \\begin{cases} x^2 - 1 & x < 1 \\\\ 3 - x & x \\ge 1 \\end{cases}$ and $g(x) = x - 2$. What is $f(g(3))$?',
    options: ['$2$', '$0$', '$-2$', '$1$'],
    correctIndex: 0,
    explanation: '$g(3) = 1$, and $1 \\ge 1$ selects the second rule, so $f(1) = 3 - 1 = 2$. The value $0$ uses the first rule at the boundary.',
    partNumber: 5,
    partTitle: 'Piecewise & Absolute Value Compositions',
  },
  {
    id: 'fci-ent-5b',
    question: 'Let $f(x) = x^2$ and $g(x) = 3x$. How does the graph of $y = g(f(x))$ compare with the graph of $y = f(x)$?',
    options: ['A horizontal dilation by a factor of $\\tfrac{1}{3}$', 'A vertical dilation by a factor of $3$', 'A horizontal dilation by a factor of $3$', 'A vertical translation of $3$ units upward'],
    correctIndex: 1,
    explanation: 'Here $g$ is the outer function, so $g(f(x)) = 3x^2$ multiplies every output by 3: a vertical dilation. The horizontal dilation by $\\tfrac{1}{3}$ describes $f(g(x)) = (3x)^2$.',
    partNumber: 5,
    partTitle: 'Piecewise & Absolute Value Compositions',
  },
  // Part 6 — Verifying Inverses & Algebraic Techniques
  {
    id: 'fci-ent-6a',
    question: 'Let $f(x) = x^2 + 6x + 5$ with domain $x \\ge -3$. What is $f^{-1}(x)$?',
    options: ['$-3 - \\sqrt{x + 4}$', '$3 + \\sqrt{x + 4}$', '$-3 + \\sqrt{x + 4}$', '$-3 + \\sqrt{x - 4}$'],
    correctIndex: 2,
    explanation: 'Completing the square gives $f(x) = (x + 3)^2 - 4$. Swapping gives $(y + 3)^2 = x + 4$, and the restriction $y \\ge -3$ selects the positive root: $y = -3 + \\sqrt{x + 4}$.',
    partNumber: 6,
    partTitle: 'Verifying Inverses & Algebraic Techniques',
  },
  {
    id: 'fci-ent-6b',
    question: 'Let $f(x) = 2x - 1$, $g(x) = x^3$, and $h(x) = f(g(x))$. What is $h^{-1}(x)$?',
    options: ['$\\sqrt[3]{\\dfrac{x - 1}{2}}$', '$\\dfrac{\\sqrt[3]{x} + 1}{2}$', '$\\dfrac{\\sqrt[3]{x + 1}}{2}$', '$\\sqrt[3]{\\dfrac{x + 1}{2}}$'],
    correctIndex: 3,
    explanation: '$h(x) = 2x^3 - 1$, and $h^{-1} = g^{-1} \\circ f^{-1}$: undo the outer step first ($\\tfrac{x + 1}{2}$), then take the cube root. The form $\\tfrac{\\sqrt[3]{x} + 1}{2}$ undoes the layers in the wrong order.',
    partNumber: 6,
    partTitle: 'Verifying Inverses & Algebraic Techniques',
  },
  // Part 7 — Composition & Inverses — Full Synthesis
  {
    id: 'fci-ent-7a',
    question: 'Let $f(x) = e^{x - 2} + 1$. What is $f^{-1}(4)$?',
    options: ['$\\ln 3 - 2$', '$2 + \\ln 3$', '$2 + \\ln 5$', '$e^{2} + 3$'],
    correctIndex: 1,
    explanation: '$f^{-1}(4)$ is the input with $f(x) = 4$: $e^{x - 2} = 3$, so $x - 2 = \\ln 3$ and $x = 2 + \\ln 3$. The value $2 + \\ln 5$ adds 1 instead of subtracting it.',
    partNumber: 7,
    partTitle: 'Composition & Inverses — Full Synthesis',
  },
  {
    id: 'fci-ent-7b',
    question: 'Let $h(x) = \\sqrt{\\ln x}$. What is the domain of $h$?',
    options: ['$x \\ge 0$', '$x > 0$', '$x \\ge 1$', '$x \\ge e$'],
    correctIndex: 2,
    explanation: 'The inner output must be a legal input for the outer square root: $\\ln x \\ge 0$ requires $x \\ge 1$. The domain $x > 0$ satisfies only the logarithm.',
    partNumber: 7,
    partTitle: 'Composition & Inverses — Full Synthesis',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Function Composition' },
    { partNumber: 2, partTitle: 'Inverse Functions' },
    { partNumber: 3, partTitle: 'Inverses of Common Functions' },
    { partNumber: 4, partTitle: 'Composition with Tables & Graphs' },
    { partNumber: 5, partTitle: 'Piecewise & Absolute Value Compositions' },
    { partNumber: 6, partTitle: 'Verifying Inverses & Algebraic Techniques' },
    { partNumber: 7, partTitle: 'Composition & Inverses — Full Synthesis' },
  ]
}
