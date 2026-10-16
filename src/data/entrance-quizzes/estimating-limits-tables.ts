/**
 * Entrance Quiz — Estimating Limits from Tables — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Why Use a Numerical Table?
  {
    id: 'elt-ent-1a',
    question: 'For which of these limits is a numerical table the least necessary?',
    options: ['$\\lim_{x \\to 3} (x^2 + 2x)$', '$\\lim_{x \\to 0} \\dfrac{e^x - 1}{x}$', '$\\lim_{x \\to 1} \\dfrac{\\ln x}{x - 1}$', '$\\lim_{x \\to 0} \\dfrac{\\sin(2x)}{x}$'],
    correctIndex: 0,
    explanation: 'The polynomial can be evaluated by direct substitution ($9 + 6 = 15$), so no table is needed. Each of the other three gives $\\frac{0}{0}$ on substitution, which is exactly when a table helps.',
    partNumber: 1,
    partTitle: 'Why Use a Numerical Table?',
  },
  {
    id: 'elt-ent-1b',
    question: 'A student estimates $\\lim_{x \\to 4} f(x)$ using only $f(4.1)$, $f(4.01)$ and $f(4.001)$, which approach 6, and concludes the limit is 6. What is the flaw?',
    options: ['The values are too close to 4 to be useful', 'The table should also include $x = 4$ itself', 'The left-hand behavior was never checked', 'Three values cannot suggest any trend'],
    correctIndex: 2,
    explanation: 'All three inputs are greater than 4, so the table shows only the right-hand behavior; the function could approach a different value from the left. The value at $x = 4$ itself never belongs in a limit table.',
    partNumber: 1,
    partTitle: 'Why Use a Numerical Table?',
  },
  // Part 2 — Building a Two-Sided Table
  {
    id: 'elt-ent-2a',
    question: 'A table gives $g(0.9) = 0.369$, $g(0.99) = 0.3367$, $g(0.999) = 0.33367$, $g(1.001) = 0.33300$, $g(1.01) = 0.3300$ and $g(1.1) = 0.302$. What is the best estimate of $\\lim_{x \\to 1} g(x)$?',
    options: ['$\\frac{1}{3}$', '$0.302$', '$0.369$', 'Does not exist'],
    correctIndex: 0,
    explanation: 'Both the left-hand values (0.369, 0.3367, 0.33367) and the right-hand values (0.33300, 0.3300, 0.302) close in on $0.333\\ldots = \\frac{1}{3}$. The outer values 0.369 and 0.302 are just the least accurate rows.',
    partNumber: 2,
    partTitle: 'Building a Two-Sided Table',
  },
  {
    id: 'elt-ent-2b',
    question: 'Near $x = 0$, the left-hand outputs of $h$ are $1.7298, 1.73184, 1.732030$ and the right-hand outputs are $1.732071, 1.73226, 1.7342$. Which value is the limit most likely to be?',
    options: ['$\\frac{7}{4}$', '$\\sqrt{2}$', '$\\frac{\\pi}{2}$', '$\\sqrt{3}$'],
    correctIndex: 3,
    explanation: 'Both sides converge on $1.73205\\ldots$, the decimal expansion of $\\sqrt{3}$. By comparison $\\frac{7}{4} = 1.75$, $\\sqrt{2} \\approx 1.414$ and $\\frac{\\pi}{2} \\approx 1.571$.',
    partNumber: 2,
    partTitle: 'Building a Two-Sided Table',
  },
  // Part 3 — Recognizing DNE from a Table
  {
    id: 'elt-ent-3a',
    question: 'A table gives $f(2.9) = 40$, $f(2.99) = 4000$, $f(2.999) = 400000$, $f(3.001) = 400000$, $f(3.01) = 4000$ and $f(3.1) = 40$. What behavior near $x = 3$ does it show?',
    options: ['The outputs increase without bound', 'The outputs jump between two values', 'The outputs oscillate and never settle', 'The outputs settle near 400000'],
    correctIndex: 0,
    explanation: 'Each step toward 3 multiplies the output by 100 on both sides, so the values grow without bound (the limit is described as $+\\infty$). There is no settling value, jump, or sign-switching oscillation.',
    partNumber: 3,
    partTitle: 'Recognizing DNE from a Table',
  },
  {
    id: 'elt-ent-3b',
    question: 'A table gives $g(-1.1) = 2.9$, $g(-1.01) = 2.99$, $g(-1.001) = 2.999$, $g(-0.999) = -0.998$, $g(-0.99) = -0.98$ and $g(-0.9) = -0.8$. What does it suggest about $\\lim_{x \\to -1} g(x)$?',
    options: ['It equals 3, the left value', 'It equals $-1$, the right value', 'It equals 1, the average', 'It does not exist'],
    correctIndex: 3,
    explanation: 'The left-hand outputs approach 3 while the right-hand outputs approach $-1$. The one-sided limits disagree, a jump, so the two-sided limit does not exist; averaging the sides is never valid.',
    partNumber: 3,
    partTitle: 'Recognizing DNE from a Table',
  },
  // Part 4 — Common Pitfalls
  {
    id: 'elt-ent-4a',
    question: 'For $f(x) = \\dfrac{e^x - 1 - x}{x^2}$, a calculator gives $f(0.1) = 0.517$, $f(0.01) = 0.50167$, $f(0.001) = 0.50017$, but $f(10^{-9}) = 0$. What is the best estimate of $\\lim_{x \\to 0^+} f(x)$?',
    options: ['$0$', '$1$', '$\\frac{1}{2}$', 'Does not exist'],
    correctIndex: 2,
    explanation: 'The mid-range values settle steadily toward 0.5. The 0 at $x = 10^{-9}$ is a precision failure: the numerator rounds to exactly 0 on the calculator, so that row should not be trusted.',
    partNumber: 4,
    partTitle: 'Common Pitfalls',
  },
  {
    id: 'elt-ent-4b',
    question: 'Evaluating $f(x) = \\cos\\left(\\dfrac{\\pi}{x}\\right)$ at $x = \\frac{1}{2}, \\frac{1}{4}, \\frac{1}{6}, \\ldots$ gives $f(x) = 1$ every time. What is true about $\\lim_{x \\to 0^+} f(x)$?',
    options: ['It does not exist', 'It equals 1', 'It equals 0', 'It equals $\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: 'Those inputs make $\\frac{\\pi}{x}$ an even multiple of $\\pi$, but inputs like $x = 1, \\frac{1}{3}, \\frac{1}{5}, \\ldots$ give $-1$. The function oscillates between $-1$ and $1$ forever, so the limit does not exist.',
    partNumber: 4,
    partTitle: 'Common Pitfalls',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Why Use a Numerical Table?' },
    { partNumber: 2, partTitle: 'Building a Two-Sided Table' },
    { partNumber: 3, partTitle: 'Recognizing DNE from a Table' },
    { partNumber: 4, partTitle: 'Common Pitfalls' },
  ]
}
