/**
 * Entrance Quiz — Kinetics (MCAT)
 * 10 questions · 5 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Rate Laws & Reaction Order
  { id: 'mgkn-ent-1a', question: 'For the rate law $rate = k[A]^2[B]$, the overall reaction order is:', options: ['1', '2', '3', '4'], correctIndex: 2, explanation: 'Overall order = sum of exponents = 2 + 1 = 3.', partNumber: 1, partTitle: 'Rate Laws & Reaction Order' },
  { id: 'mgkn-ent-1b', question: 'When [A] doubles and the rate quadruples (with all other concentrations fixed), the order in A is:', options: ['0', '1', '2', '3'], correctIndex: 2, explanation: 'rate ∝ [A]^n. If [A] doubles and rate × 4 = $2^{n}$ → n = 2 (second order in A).', partNumber: 1, partTitle: 'Rate Laws & Reaction Order' },

  // Part 2 — Integrated Rate Laws & Half-Life
  { id: 'mgkn-ent-2a', question: 'For a first-order reaction with k = 0.10 $s^{-1}$, the half-life is approximately:', options: ['0.10 s', '6.93 s', '10 s', '693 s'], correctIndex: 1, explanation: '$t_{1}/_{2}$ = ln 2 / k = 0.693 / 0.10 ≈ 6.93 s.', partNumber: 2, partTitle: 'Integrated Rate Laws & Half-Life' },
  { id: 'mgkn-ent-2b', question: 'The integrated rate law for a first-order reaction A → products is:', options: ['$[A] = [A]_0 - kt$', '$\\ln[A] = \\ln[A]_0 - kt$', '$1/[A] = 1/[A]_0 + kt$', '$[A]^2 = [A]_0^2 - kt$'], correctIndex: 1, explanation: 'A plot of ln[A] vs. t is linear (slope = −k) for a first-order reaction.', partNumber: 2, partTitle: 'Integrated Rate Laws & Half-Life' },

  // Part 3 — Activation Energy & Arrhenius Equation
  { id: 'mgkn-ent-3a', question: 'Increasing temperature speeds up most reactions primarily because:', options: ['Activation energy decreases at higher T', 'A larger fraction of molecules has energy ≥ Ea', 'The reaction becomes more exothermic', 'Equilibrium constant always increases'], correctIndex: 1, explanation: 'Per the Maxwell-Boltzmann distribution, higher T means more molecules have enough energy to surmount Ea — so k (rate constant) increases.', partNumber: 3, partTitle: 'Activation Energy & Arrhenius Equation' },
  { id: 'mgkn-ent-3b', question: 'The Arrhenius equation $k = A e^{-E_a/RT}$ predicts that, for fixed A and Ea, k:', options: ['Decreases as T increases', 'Increases as T increases', 'Is independent of T', 'Depends only on the catalyst'], correctIndex: 1, explanation: 'As T increases, the exponent −Ea/RT becomes less negative, so $e^{-E_a/RT}$ grows — k increases.', partNumber: 3, partTitle: 'Activation Energy & Arrhenius Equation' },

  // Part 4 — Mechanisms, RDS & Catalysis
  { id: 'mgkn-ent-4a', question: 'In a multi-step reaction mechanism, the overall rate is determined by:', options: ['The fastest elementary step', 'The slowest elementary step (rate-determining step)', 'The step with the highest yield', 'The number of intermediates formed'], correctIndex: 1, explanation: 'The slowest step is the bottleneck — the rate-determining step (RDS) — and the rate law typically reflects it.', partNumber: 4, partTitle: 'Mechanisms, RDS & Catalysis' },
  { id: 'mgkn-ent-4b', question: 'A catalyst increases reaction rate by:', options: ['Increasing the activation energy', 'Lowering the activation energy via an alternative pathway', 'Shifting equilibrium to favor products', 'Increasing the temperature of the system'], correctIndex: 1, explanation: 'A catalyst provides a different pathway with lower Ea. It is not consumed and does not shift equilibrium — it speeds both forward and reverse equally.', partNumber: 4, partTitle: 'Mechanisms, RDS & Catalysis' },

  // Part 5 — Mixed MCAT Review
  { id: 'mgkn-ent-5a', question: 'Doubling the temperature of a reaction (in K) typically:', options: ['Has no effect on rate', 'Doubles the rate', 'Increases rate by a factor of roughly 2–4 per 10 K rise', 'Decreases the rate by half'], correctIndex: 2, explanation: 'A common rule of thumb: rate roughly doubles for every ~10 K rise (the actual factor depends on Ea via Arrhenius).', partNumber: 5, partTitle: 'Mixed MCAT Review' },
  { id: 'mgkn-ent-5b', question: 'A zero-order reaction A → products has a rate that is:', options: ['Proportional to [A]', 'Proportional to [A]$ {}^{2}$', 'Independent of [A]', 'Inversely proportional to [A]'], correctIndex: 2, explanation: 'rate = k[A]$ {}^{0}$ = k. Common for surface-catalyzed or enzyme-saturated reactions where [A] doesn\'t matter at high concentrations.', partNumber: 5, partTitle: 'Mixed MCAT Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Rate Laws & Reaction Order' },
    { partNumber: 2, partTitle: 'Integrated Rate Laws & Half-Life' },
    { partNumber: 3, partTitle: 'Activation Energy & Arrhenius Equation' },
    { partNumber: 4, partTitle: 'Mechanisms, RDS & Catalysis' },
    { partNumber: 5, partTitle: 'Mixed MCAT Review' },
  ]
}
