/**
 * Entrance Quiz — One-Sided Limits — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Notation and Idea
  {
    id: 'osl-ent-1a',
    question: 'Which pair of inputs would you use to estimate $\\lim_{x \\to -3^-} f(x)$?',
    options: ['$x = -2.99$ and $x = -2.999$', '$x = 3.01$ and $x = 3.001$', '$x = 2.99$ and $x = 2.999$', '$x = -3.01$ and $x = -3.001$'],
    correctIndex: 3,
    explanation: 'The superscript minus means approaching from values less than $-3$, such as $-3.01$ and $-3.001$. It does not mean negative inputs in general; $-2.99$ is greater than $-3$, so it is on the right.',
    partNumber: 1,
    partTitle: 'Notation and Idea',
  },
  {
    id: 'osl-ent-1b',
    question: 'What does $\\lim_{x \\to 2^+} k(x) = -5$ mean?',
    options: ['As $x$ nears 2 through values above 2, $k(x)$ nears $-5$', 'As $x$ nears 2 through values below 2, $k(x)$ nears $-5$', 'As $x$ nears $-5$ from the right, $k(x)$ nears 2', 'As $x$ nears 2, $k(x)$ nears $-5$ through positive values'],
    correctIndex: 0,
    explanation: 'The plus superscript describes the inputs: $x$ approaches 2 from the right, through values greater than 2. The output $k(x)$ approaches $-5$; the superscript says nothing about the sign of the outputs.',
    partNumber: 1,
    partTitle: 'Notation and Idea',
  },
  // Part 2 — Computing One-Sided Limits
  {
    id: 'osl-ent-2a',
    question: 'Let $f(x) = \\begin{cases} 3 - x & x < -2 \\\\ x^3 + 4 & x \\ge -2 \\end{cases}$. What is $\\lim_{x \\to -2^+} f(x)$?',
    options: ['$5$', '$12$', '$-4$', '$4$'],
    correctIndex: 2,
    explanation: 'For $x > -2$ use the second piece: $(-2)^3 + 4 = -8 + 4 = -4$. The value 5 comes from the left piece, and 12 from treating $(-2)^3$ as $+8$.',
    partNumber: 2,
    partTitle: 'Computing One-Sided Limits',
  },
  {
    id: 'osl-ent-2b',
    question: 'Evaluate $\\lim_{x \\to 3^-} \\dfrac{x^2 - 3x}{|x - 3|}$.',
    options: ['$3$', '$-3$', '$0$', '$1$'],
    correctIndex: 1,
    explanation: 'For $x < 3$, $|x - 3| = -(x - 3)$, so the expression is $\\frac{x(x - 3)}{-(x - 3)} = -x$, which approaches $-3$. Using $|x - 3| = x - 3$ is the right-hand case and gives 3.',
    partNumber: 2,
    partTitle: 'Computing One-Sided Limits',
  },
  // Part 3 — The Existence Theorem
  {
    id: 'osl-ent-3a',
    question: 'Let $g(x) = \\begin{cases} ax + 3 & x < 2 \\\\ ax^2 - 1 & x > 2 \\end{cases}$ with $g(2) = 0$. For what value of $a$ does $\\lim_{x \\to 2} g(x)$ exist?',
    options: ['$2$', '$\\frac{1}{2}$', '$-\\frac{3}{2}$', '$\\frac{1}{4}$'],
    correctIndex: 0,
    explanation: 'The limit exists when the one-sided limits agree: $2a + 3 = 4a - 1$, so $a = 2$. The value $g(2) = 0$ plays no role in whether the limit exists.',
    partNumber: 3,
    partTitle: 'The Existence Theorem',
  },
  {
    id: 'osl-ent-3b',
    question: 'For a function $f$: $\\lim_{x \\to 1^-} f(x) = 4$, $f(1) = 4$, and $\\lim_{x \\to 1^+} f(x) = 4.2$. Which statement is true?',
    options: ['The two-sided limit at 1 equals 4', 'The two-sided limit at 1 equals 4.1', 'The two-sided limit at 1 equals 4.2', 'The two-sided limit at 1 does not exist'],
    correctIndex: 3,
    explanation: 'The two-sided limit exists only if both one-sided limits exist and agree. Here they are 4 and 4.2, so it does not exist; the matching value $f(1) = 4$ does not help, and averaging is never valid.',
    partNumber: 3,
    partTitle: 'The Existence Theorem',
  },
  // Part 4 — When Only One Side Exists
  {
    id: 'osl-ent-4a',
    question: 'Evaluate $\\lim_{x \\to 2^+} \\left(x^2 + \\sqrt{x - 2}\\right)$.',
    options: ['$6$', '$2$', '$4$', 'Does not exist'],
    correctIndex: 2,
    explanation: 'As $x$ approaches 2 from the right, $x^2 \\to 4$ and $\\sqrt{x - 2} \\to 0$, so the sum approaches 4. The right-hand limit exists even though the function is undefined to the left of 2.',
    partNumber: 4,
    partTitle: 'When Only One Side Exists',
  },
  {
    id: 'osl-ent-4b',
    question: 'Let $f(x) = \\ln(4 - x)$. Which one-sided limit at $x = 4$ can be evaluated, and what is it?',
    options: ['$\\lim_{x \\to 4^+} f(x) = -\\infty$', '$\\lim_{x \\to 4^-} f(x) = -\\infty$', '$\\lim_{x \\to 4^-} f(x) = 0$', '$\\lim_{x \\to 4^+} f(x) = 0$'],
    correctIndex: 1,
    explanation: 'The domain is $x < 4$, so only the left-hand limit makes sense. As $x \\to 4^-$, $4 - x \\to 0^+$ and $\\ln(4 - x) \\to -\\infty$.',
    partNumber: 4,
    partTitle: 'When Only One Side Exists',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Notation and Idea' },
    { partNumber: 2, partTitle: 'Computing One-Sided Limits' },
    { partNumber: 3, partTitle: 'The Existence Theorem' },
    { partNumber: 4, partTitle: 'When Only One Side Exists' },
  ]
}
