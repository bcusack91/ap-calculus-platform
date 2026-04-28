/**
 * Entrance Quiz — Estimating Limits from Graphs
 *
 * 8 questions, 2 per part. Strictly graphical reading:
 *  - Tracing a curve toward $a$
 *  - One-sided limits visually
 *  - Visual signatures of DNE
 *  - Open/closed dots vs limit vs value
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'elg-ent-1a',
    question: 'When estimating $\\lim_{x \\to a} f(x)$ from a graph, where do you focus?',
    options: [
      'On the dot at $x = a$ only',
      'On where the curve is heading from each side, not the dot AT $a$',
      'On the $x$-intercept',
      'On the slope of the tangent line',
    ],
    correctIndex: 1,
    explanation: 'A limit is about behavior NEAR $a$. Trace the curve toward $a$ from each side and ignore any dot at $a$ itself.',
    partNumber: 1,
    partTitle: 'Reading $\\lim$ Off a Graph',
  },
  {
    id: 'elg-ent-1b',
    question: 'A smooth curve approaches $y = 4$ from both sides as $x \\to 5$. There is an open circle at $(5, 4)$. What is $\\lim_{x \\to 5} f(x)$?',
    options: ['$4$', 'undefined', 'DNE', '$0$'],
    correctIndex: 0,
    explanation: 'Both arms aim at 4, so the limit is 4. The open circle just means $f(5)$ is undefined — irrelevant to the limit.',
    partNumber: 1,
    partTitle: 'Reading $\\lim$ Off a Graph',
  },

  // Part 2
  {
    id: 'elg-ent-2a',
    question: 'A graph shows the left arm aiming at $y = 1$ and the right arm aiming at $y = 6$ as $x \\to 3$. What is $\\lim_{x \\to 3^+} f(x)$?',
    options: ['$1$', '$6$', '$3.5$', 'DNE'],
    correctIndex: 1,
    explanation: '$\\lim_{x \\to 3^+}$ means trace from the right; the right arm aims at 6.',
    partNumber: 2,
    partTitle: 'One-Sided Limits Visually',
  },
  {
    id: 'elg-ent-2b',
    question: 'Same graph as above: what is $\\lim_{x \\to 3} f(x)$?',
    options: ['$1$', '$6$', '$3.5$', 'DNE'],
    correctIndex: 3,
    explanation: 'One-sided limits disagree (1 vs 6), so the two-sided limit DNE.',
    partNumber: 2,
    partTitle: 'One-Sided Limits Visually',
  },

  // Part 3
  {
    id: 'elg-ent-3a',
    question: 'A graph dives to $-\\infty$ on the left of $x = 2$ along a dashed vertical line, and shoots to $+\\infty$ on the right. The limit at 2 fails because of:',
    options: ['A jump', 'A vertical asymptote (blow-up)', 'Oscillation', 'A removable hole'],
    correctIndex: 1,
    explanation: 'The dashed vertical line + curve heading to $\\pm\\infty$ = vertical asymptote, blow-up failure mode.',
    partNumber: 3,
    partTitle: 'Visual Signatures of DNE',
  },
  {
    id: 'elg-ent-3b',
    question: 'A graph near $x = 0$ shows an infinitely wiggly fuzzy band between $y = -1$ and $y = +1$. The limit at 0:',
    options: ['Equals 0', 'DNE — oscillation', 'Equals 1', 'Equals $-1$'],
    correctIndex: 1,
    explanation: 'A fuzzy band that won\'t settle is the visual signature of oscillation, like $\\sin(1/x)$.',
    partNumber: 3,
    partTitle: 'Visual Signatures of DNE',
  },

  // Part 4
  {
    id: 'elg-ent-4a',
    question: 'A graph at $x = 1$ shows both arms aiming at $y = 8$, an open circle at $(1, 8)$, AND a closed dot at $(1, 2)$. What is $\\lim_{x \\to 1} f(x)$?',
    options: ['$8$', '$2$', '$5$ (average)', 'DNE'],
    correctIndex: 0,
    explanation: 'Limit = where the arms aim = 8. The closed dot at $(1, 2)$ tells you $f(1) = 2$, which is irrelevant to the limit.',
    partNumber: 4,
    partTitle: 'Open/Closed Dots vs Limit vs Value',
  },
  {
    id: 'elg-ent-4b',
    question: 'For the same graph: what is $f(1)$?',
    options: ['$8$', '$2$', 'undefined', '$5$'],
    correctIndex: 1,
    explanation: 'The closed dot at $(1, 2)$ defines $f(1) = 2$. The open circle at $(1, 8)$ tells you the function is NOT 8 there.',
    partNumber: 4,
    partTitle: 'Open/Closed Dots vs Limit vs Value',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Reading $\\lim$ Off a Graph' },
    { partNumber: 2, partTitle: 'One-Sided Limits Visually' },
    { partNumber: 3, partTitle: 'Visual Signatures of DNE' },
    { partNumber: 4, partTitle: 'Open/Closed Dots vs Limit vs Value' },
  ]
}
