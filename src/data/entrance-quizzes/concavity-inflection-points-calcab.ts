/**
 * Entrance Quiz — Concavity & Inflection Points (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Understanding Concavity
  {
    id: 'cip-ent-1a',
    question: 'On what interval is $f(x) = x^4 - 4x^3 + 2$ concave down?',
    options: ['$(-\\infty, 3)$', '$(-\\infty, 0) \\cup (2, \\infty)$', '$(0, 2)$', '$(2, \\infty)$'],
    correctIndex: 2,
    explanation: '$f\'\'(x) = 12x^2 - 24x = 12x(x - 2)$, which is negative between 0 and 2. The interval $(-\\infty, 3)$ is where $f$ is decreasing, which is a first-derivative fact.',
    partNumber: 1,
    partTitle: 'Understanding Concavity',
  },
  {
    id: 'cip-ent-1b',
    question: 'Let $f(x) = x^4 - 8x^3 + 24x^2$. Which statement is true at $x = 2$?',
    options: ['$f$ has an inflection point at $x = 2$', '$f\'\'(2) = 0$ but there is no inflection point', '$f(2)$ is a local maximum value of $f$', '$f$ is concave down near $x = 2$'],
    correctIndex: 1,
    explanation: '$f\'\'(x) = 12x^2 - 48x + 48 = 12(x - 2)^2$, which is 0 at $x = 2$ but positive on both sides. Without a sign change there is no inflection point; the graph is concave up on both sides.',
    partNumber: 1,
    partTitle: 'Understanding Concavity',
  },
  // Part 2 — The Second Derivative Test for Extrema
  {
    id: 'cip-ent-2a',
    question: 'Use the Second Derivative Test to classify the critical points of $f(x) = 2x^3 - 9x^2 + 12x$.',
    options: ['Local min at $x = 1$, local max at $x = 2$', 'Local max at both $x = 1$ and $x = 2$', 'Local max at $x = 1$, local min at $x = 2$', 'Inflection points at $x = 1$ and $x = 2$'],
    correctIndex: 2,
    explanation: '$f\'(x) = 6(x - 1)(x - 2)$ and $f\'\'(x) = 12x - 18$. Since $f\'\'(1) = -6 < 0$, $x = 1$ is a local max; since $f\'\'(2) = 6 > 0$, $x = 2$ is a local min.',
    partNumber: 2,
    partTitle: 'The Second Derivative Test for Extrema',
  },
  {
    id: 'cip-ent-2b',
    question: 'For $f(x) = x^4 - 4x^3$, both $f\'(0) = 0$ and $f\'\'(0) = 0$. What does $f$ have at $x = 0$?',
    options: ['A local minimum, since $f\'\'(0) = 0$', 'A local maximum, since $f(0) = 0$', 'It cannot be classified by any test', 'Neither a max nor a min'],
    correctIndex: 3,
    explanation: 'The Second Derivative Test is inconclusive, so use the first derivative: $f\'(x) = 4x^2(x - 3)$ is negative on both sides of 0. With no sign change, $x = 0$ is neither a maximum nor a minimum.',
    partNumber: 2,
    partTitle: 'The Second Derivative Test for Extrema',
  },
  // Part 3 — Complete Curve Sketching Framework
  {
    id: 'cip-ent-3a',
    question: 'Let $f(x) = x^3 + 3x^2 - 9x$. Which describes $f$ on the interval $(-1, 1)$?',
    options: ['It is decreasing and concave up', 'It is decreasing and concave down', 'It is increasing and concave up', 'It is increasing and concave down'],
    correctIndex: 0,
    explanation: '$f\'(x) = 3(x + 3)(x - 1)$ is negative on $(-3, 1)$, so $f$ is decreasing, and $f\'\'(x) = 6x + 6$ is positive for $x > -1$, so $f$ is concave up.',
    partNumber: 3,
    partTitle: 'Complete Curve Sketching Framework',
  },
  {
    id: 'cip-ent-3b',
    question: 'Where does $f(x) = 3x^5 - 5x^4$ have inflection points?',
    options: ['$x = 0$ and $x = 1$', '$x = 1$', '$x = \\frac{4}{3}$', '$x = 0$ and $x = \\frac{4}{3}$'],
    correctIndex: 1,
    explanation: '$f\'\'(x) = 60x^3 - 60x^2 = 60x^2(x - 1)$. It changes sign only at $x = 1$; at $x = 0$ the factor $x^2$ keeps $f\'\'$ negative on both sides. The value $\\frac{4}{3}$ is a critical point.',
    partNumber: 3,
    partTitle: 'Complete Curve Sketching Framework',
  },
  // Part 4 — Reading Derivative Graphs
  {
    id: 'cip-ent-4a',
    question: 'The graph of $f\'$ increases on $(-\\infty, 2)$, decreases on $(2, 5)$, and increases on $(5, \\infty)$; $f\'$ is negative only on $(3, 7)$. Where does $f$ have inflection points?',
    options: ['$x = 3$ and $x = 7$', '$x = 2$', '$x = 2$ and $x = 5$', '$x = 5$'],
    correctIndex: 2,
    explanation: 'Concavity of $f$ follows whether $f\'$ is increasing or decreasing, so $f$ changes concavity where $f\'$ has its local extrema, at $x = 2$ and $x = 5$. The zeros of $f\'$ at 3 and 7 are extrema of $f$.',
    partNumber: 4,
    partTitle: 'Reading Derivative Graphs',
  },
  {
    id: 'cip-ent-4b',
    question: 'The graph of $f\'$ has a local minimum at $x = -1$, where $f\'(-1) = 2$. What does $f$ have at $x = -1$?',
    options: ['A local minimum', 'A critical point', 'A local maximum and an inflection point', 'An inflection point but no extremum'],
    correctIndex: 3,
    explanation: '$f\'$ changes from decreasing to increasing at $-1$, so $f$ changes concavity there. But $f\'(-1) = 2 > 0$, so $f$ is increasing through $x = -1$ and has no critical point or extremum there.',
    partNumber: 4,
    partTitle: 'Reading Derivative Graphs',
  },
  // Part 5 — Position, Velocity, Acceleration & Concavity
  {
    id: 'cip-ent-5a',
    question: 'A particle has position $s(t) = t^3 - 9t^2 + 24t$. It moves left on $2 < t < 4$. At what time in that interval is its speed greatest, and what is that speed?',
    options: ['$t = 3$, speed $3$', '$t = 3$, speed $18$', '$t = 3$, speed $-3$', '$t = 2$, speed $20$'],
    correctIndex: 0,
    explanation: 'Velocity $v(t) = 3t^2 - 18t + 24$ is negative on $(2, 4)$, and it is most negative where $a(t) = 6t - 18 = 0$, at $t = 3$. That is the inflection point of $s$, and the speed there is $|v(3)| = |-3| = 3$. The value $18$ is the position $s(3)$, $-3$ is the velocity rather than the speed, and at $t = 2$ the particle is at rest.',
    partNumber: 5,
    partTitle: 'Position, Velocity, Acceleration & Concavity',
  },
  {
    id: 'cip-ent-5b',
    question: 'At $t = 5$, the graph of a particle\'s position $s(t)$ is increasing and concave down. Which describes the particle at $t = 5$?',
    options: ['It is moving right and speeding up', 'It is moving right and slowing down', 'It is moving left and slowing down', 'It is moving left and speeding up'],
    correctIndex: 1,
    explanation: 'Increasing position means $v > 0$, so it moves right; concave down means $a < 0$. Velocity and acceleration have opposite signs, so the particle is slowing down.',
    partNumber: 5,
    partTitle: 'Position, Velocity, Acceleration & Concavity',
  },
  // Part 6 — Connecting Concavity to Optimization
  {
    id: 'cip-ent-6a',
    question: 'What is the absolute minimum value of $f(x) = x + \\dfrac{9}{x}$ on $x > 0$?',
    options: ['$3$', '$10$', '$6$', '$-6$'],
    correctIndex: 2,
    explanation: '$f\'(x) = 1 - \\frac{9}{x^2} = 0$ at $x = 3$, and $f\'\'(x) = \\frac{18}{x^3} > 0$ for all $x > 0$, so this single critical point is the absolute minimum. Its value is $f(3) = 6$; 3 is its location.',
    partNumber: 6,
    partTitle: 'Connecting Concavity to Optimization',
  },
  {
    id: 'cip-ent-6b',
    question: 'Revenue is $R(x) = -x^3 + 12x^2 + 60x$ for $x \\ge 0$. At what $x$ is the point of diminishing returns, where $R$ changes from concave up to concave down?',
    options: ['$x = 10$', '$x = 24$', '$x = 12$', '$x = 4$'],
    correctIndex: 3,
    explanation: '$R\'\'(x) = -6x + 24$ is positive for $x < 4$ and negative for $x > 4$, so the inflection point is at $x = 4$. The value $x = 10$ solves $R\'(x) = 0$, where revenue is largest.',
    partNumber: 6,
    partTitle: 'Connecting Concavity to Optimization',
  },
  // Part 7 — AP Free Response Justifications
  {
    id: 'cip-ent-7a',
    question: 'A student must justify that $f$ has an inflection point at $x = 3$. Which statement is a sufficient justification?',
    options: ['$f\'\'$ changes from negative to positive at $x = 3$', '$f\'\'(3) = 0$, so the concavity changes there', '$f\'(3) = 0$ and $f\'\'(3)$ exists', '$f$ changes from decreasing to increasing at $x = 3$'],
    correctIndex: 0,
    explanation: 'An inflection point requires a change in concavity, which is shown by a sign change in $f\'\'$. Knowing only $f\'\'(3) = 0$ is not enough, and a change from decreasing to increasing describes a minimum.',
    partNumber: 7,
    partTitle: 'AP Free Response Justifications',
  },
  {
    id: 'cip-ent-7b',
    question: 'A twice-differentiable function has $f\'(2) = 0$ and $f\'\'(2) = -3$. Which conclusion is justified?',
    options: ['$f$ has a local minimum at $x = 2$', '$f$ has a local maximum at $x = 2$', '$f$ has an inflection point at $x = 2$', '$f$ is increasing at $x = 2$'],
    correctIndex: 1,
    explanation: 'By the Second Derivative Test, a horizontal tangent where the graph is concave down ($f\'\'(2) < 0$) is a local maximum. A single negative value of $f\'\'$ says nothing about an inflection point.',
    partNumber: 7,
    partTitle: 'AP Free Response Justifications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Understanding Concavity' },
    { partNumber: 2, partTitle: 'The Second Derivative Test for Extrema' },
    { partNumber: 3, partTitle: 'Complete Curve Sketching Framework' },
    { partNumber: 4, partTitle: 'Reading Derivative Graphs' },
    { partNumber: 5, partTitle: 'Position, Velocity, Acceleration & Concavity' },
    { partNumber: 6, partTitle: 'Connecting Concavity to Optimization' },
    { partNumber: 7, partTitle: 'AP Free Response Justifications' },
  ]
}
