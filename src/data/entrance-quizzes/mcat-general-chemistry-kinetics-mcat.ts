/**
 * Entrance Quiz — Kinetics: Rate Laws & Half-Lives (MCAT)
 * 8 questions · 3 parts (3 / 3 / 2)
 * Part titles match the interactive lesson's "Part N of 3" lines.
 * Activation energy, Arrhenius, mechanisms and catalysis moved to
 * mcat-general-chemistry-energy-mechanisms-mcat when the topic was split (Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Rate Laws & Reaction Order'
const P2 = 'Integrated Rate Laws & Half-Life'
const P3 = 'Mixed MCAT Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Rate Laws & Reaction Order
  { id: 'mgkn-ent-1a', question: 'For the rate law rate $= k[\\text{A}]^2[\\text{B}]$, what is the overall reaction order?', options: ['1', '2', '3', '4'], correctIndex: 2, explanation: 'The overall order is the sum of the exponents: $2 + 1 = 3$. Two is the order in A alone.', partNumber: 1, partTitle: P1 },
  { id: 'mgkn-ent-1b', question: 'Tripling [B] while [A] is held constant leaves the initial rate unchanged. What is the order of the reaction in B?', options: ['0', '1', '2', '3'], correctIndex: 0, explanation: 'With [A] fixed, $\\text{rate}_2/\\text{rate}_1 = 3^n$, and a ratio of 1 means $n = 0$: B does not appear in the rate law. First order would triple the rate and second order would raise it ninefold.', partNumber: 1, partTitle: P1 },
  { id: 'mgkn-ent-1c', question: 'A reaction obeys rate $= k[\\text{A}][\\text{B}]^2$. If both [A] and [B] are doubled at the same temperature, the rate rises by a factor of:', options: ['2', '4', '6', '8'], correctIndex: 3, explanation: 'Each change multiplies the rate by (factor)$^{\\text{order}}$: $2^1 \\times 2^2 = 8$. A factor of 4 counts only B, 6 adds the factors instead of multiplying them, and $k$ stays fixed because the temperature does not change.', partNumber: 1, partTitle: P1 },

  // Part 2 — Integrated Rate Laws & Half-Life
  { id: 'mgkn-ent-2a', question: 'For a first-order reaction with $k = 0.10\\;\\text{s}^{-1}$, the half-life is approximately:', options: ['0.069 s', '6.9 s', '10 s', '69 s'], correctIndex: 1, explanation: '$t_{1/2} = 0.693/k = 0.693/0.10 \\approx 6.9$ s. Ten seconds is $1/k$, which leaves out the $\\ln 2$, and the other two misplace the decimal.', partNumber: 2, partTitle: P2 },
  { id: 'mgkn-ent-2b', question: 'Which is the integrated rate law for a first-order reaction A → products?', options: ['$[\\text{A}] = [\\text{A}]_0 - kt$', '$\\ln[\\text{A}] = \\ln[\\text{A}]_0 - kt$', '$1/[\\text{A}] = 1/[\\text{A}]_0 + kt$', '$[\\text{A}]^2 = [\\text{A}]_0^2 - kt$'], correctIndex: 1, explanation: 'For a first-order reaction $\\ln[\\text{A}]$ falls linearly with time, with slope $-k$. The straight subtraction $[\\text{A}] = [\\text{A}]_0 - kt$ is zero order, the reciprocal form is second order, and no standard order uses $[\\text{A}]^2$.', partNumber: 2, partTitle: P2 },
  { id: 'mgkn-ent-2c', question: 'For which reaction order does a plot of [A] against time give a straight line?', options: ['Zero order, with slope $-k$', 'First order, with slope $-k$', 'Second order, with slope $+k$', 'First order, with slope $+k$'], correctIndex: 0, explanation: 'Zero order follows $[\\text{A}] = [\\text{A}]_0 - kt$, so [A] itself falls linearly with slope $-k$. First-order data are linear only as $\\ln[\\text{A}]$ against $t$, and second-order data as $1/[\\text{A}]$ against $t$, the one plot with slope $+k$.', partNumber: 2, partTitle: P2 },

  // Part 3 — Mixed MCAT Review
  { id: 'mgkn-ent-3a', question: 'A reaction has a rate constant of $0.035\\;\\text{s}^{-1}$. What are its order and half-life?', options: ['Second order; about 20 s', 'First order; about 29 s', 'Zero order; about 14 s', 'First order; about 20 s'], correctIndex: 3, explanation: 'Units of $\\text{s}^{-1}$ mark a first-order reaction, whose half-life is $0.693/k = 0.693/0.035 \\approx 20$ s at any concentration. About 29 s is $1/k$ without the $\\ln 2$; a second-order $k$ would carry units of $\\text{M}^{-1}\\text{s}^{-1}$ and a zero-order $k$ units of M/s.', partNumber: 3, partTitle: P3 },
  { id: 'mgkn-ent-3b', question: 'An enzyme is saturated with substrate, so the reaction is zero order. If the starting substrate concentration is doubled, the time needed to consume half of it:', options: ['Becomes half as long', 'Stays exactly the same', 'Becomes twice as long', 'Becomes four times as long'], correctIndex: 2, explanation: 'A zero-order reaction uses substrate at a constant rate $k$, so its half-life is $[\\text{A}]_0/(2k)$: twice as much to consume at the same rate takes twice as long. A fixed half-life is the first-order signature, and a half-life that shrinks as $[\\text{A}]_0$ grows is second order.', partNumber: 3, partTitle: P3 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
  ]
}
