/**
 * Entrance Quiz — Estimating Limits from Graphs — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Reading $\lim$ Off a Graph
  {
    id: 'elg-ent-1a',
    question: 'The graph of $f$ consists of the segment from $(-2, 0)$ to $(1, 3)$ followed by the segment from $(1, 3)$ to $(4, -3)$. What is $\\lim_{x \\to 3} f(x)$?',
    options: ['$-1$', '$0$', '$1$', '$3$'],
    correctIndex: 0,
    explanation: 'Near $x = 3$ the graph is the second segment, which has slope $\\frac{-3 - 3}{4 - 1} = -2$. Tracing from $(1, 3)$ two units right drops the height by 4, so the curve heads to $y = -1$ from both sides.',
    partNumber: 1,
    partTitle: 'Reading $\\lim$ Off a Graph',
  },
  {
    id: 'elg-ent-1b',
    question: 'The graph of $h$ is the upper half of the circle with center $(3, 0)$ and radius 3, drawn with an open circle at its top point $(3, 3)$. What is $\\lim_{x \\to 3} h(x)$?',
    options: ['$0$', '$6$', '$3$', 'Does not exist'],
    correctIndex: 2,
    explanation: 'Tracing the semicircle toward $x = 3$ from either side, the height approaches the top of the circle, $y = 3$. The open circle only means $h(3)$ is undefined; it does not affect the limit.',
    partNumber: 1,
    partTitle: 'Reading $\\lim$ Off a Graph',
  },
  // Part 2 — One-Sided Limits Visually
  {
    id: 'elg-ent-2a',
    question: 'Near $x = -1$, the graph of $f$ is the line $y = 2x + 5$ for $x < -1$, ending in an open circle, and the curve $y = x^2$ for $x \\ge -1$, starting with a closed dot. Which statement is true?',
    options: ['$\\lim_{x \\to -1^+} f(x) = 1$', '$\\lim_{x \\to -1^+} f(x) = 3$', '$\\lim_{x \\to -1} f(x) = 1$', '$\\lim_{x \\to -1} f(x) = 2$'],
    correctIndex: 0,
    explanation: 'The left arm heads to $2(-1) + 5 = 3$ and the right arm heads to $(-1)^2 = 1$, so the right-hand limit is 1. The arms disagree, so the two-sided limit does not exist (and is not their average, 2).',
    partNumber: 2,
    partTitle: 'One-Sided Limits Visually',
  },
  {
    id: 'elg-ent-2b',
    question: 'On the graph of $g$, the left arm approaches the point $(3, 1)$, while the right arm rises without bound along the vertical line $x = 3$. What is $\\lim_{x \\to 3^-} g(x)$?',
    options: ['$3$', '$\\infty$', '$1$', 'Does not exist'],
    correctIndex: 2,
    explanation: 'The left-hand limit uses only the left arm, which heads to height 1. The unbounded right arm makes the two-sided limit fail, but it does not affect the left-hand limit.',
    partNumber: 2,
    partTitle: 'One-Sided Limits Visually',
  },
  // Part 3 — Visual Signatures of DNE
  {
    id: 'elg-ent-3a',
    question: 'The graph of $f$ has a jump at $x = -2$, a vertical asymptote at $x = 0$, an open circle with no filled dot at $x = 2$, and at $x = 5$ a left arm rising without bound while the right arm approaches $y = 1$. At which $x$-value does $\\lim f(x)$ exist?',
    options: ['$x = -2$', '$x = 0$', '$x = 2$', '$x = 5$'],
    correctIndex: 2,
    explanation: 'At the hole both arms aim at the same height, so the limit exists even though $f(2)$ is undefined. A jump, a vertical asymptote, and an arm that is unbounded on one side all make the two-sided limit fail.',
    partNumber: 3,
    partTitle: 'Visual Signatures of DNE',
  },
  {
    id: 'elg-ent-3b',
    question: 'Both arms of the graph of $f$ rise without bound along the vertical asymptote $x = -3$. Which statement about $\\lim_{x \\to -3} f(x)$ is correct?',
    options: ['No finite limit exists', 'It equals $-3$, the asymptote', 'It exists, since both arms agree', 'It equals $f(-3)$, if defined'],
    correctIndex: 0,
    explanation: 'The values grow without bound, so there is no finite limit; we may describe the behavior as $+\\infty$, but that is not a numerical limit. The asymptote location $-3$ is an $x$-value, not a limit value.',
    partNumber: 3,
    partTitle: 'Visual Signatures of DNE',
  },
  // Part 4 — Open/Closed Dots vs Limit vs Value
  {
    id: 'elg-ent-4a',
    question: 'At $x = 1$, the left arm of the graph of $f$ ends in an open circle at $(1, 2)$, and the right arm begins with a closed dot at $(1, 4)$. Nothing else is drawn at $x = 1$. Which statement is correct?',
    options: ['$f(1) = 2$ and the left-hand limit is $2$', '$f(1) = 4$ and the left-hand limit is $4$', '$f(1)$ is undefined and the left-hand limit is $2$', '$f(1) = 4$ and the left-hand limit is $2$'],
    correctIndex: 3,
    explanation: 'The closed dot gives the function value, $f(1) = 4$. The left arm heads to height 2, so the left-hand limit is 2 even though that point is an open circle.',
    partNumber: 4,
    partTitle: 'Open/Closed Dots vs Limit vs Value',
  },
  {
    id: 'elg-ent-4b',
    question: 'Both arms of the graph of $f$ meet at an open circle at $(-2, 6)$, and no other dot is drawn at $x = -2$. Which statement is correct?',
    options: ['The limit is 6, and $f(-2) = 6$', 'Neither the limit nor $f(-2)$ exists', 'There is no limit, and $f(-2) = 6$', 'The limit is 6, and $f(-2)$ is undefined'],
    correctIndex: 3,
    explanation: 'Both arms aim at height 6, so $\\lim_{x \\to -2} f(x) = 6$. An open circle with no filled dot anywhere above $x = -2$ means the function has no value there: a removable hole.',
    partNumber: 4,
    partTitle: 'Open/Closed Dots vs Limit vs Value',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Reading $\\lim$ Off a Graph' },
    { partNumber: 2, partTitle: 'One-Sided Limits Visually' },
    { partNumber: 3, partTitle: 'Visual Signatures of DNE' },
    { partNumber: 4, partTitle: 'Open/Closed Dots vs Limit vs Value' },
  ]
}
