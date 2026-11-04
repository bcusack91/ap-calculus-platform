/**
 * Entrance Quiz — Kinetics: Energy, Catalysis & Mechanisms (MCAT)
 * 8 questions · 3 parts (3 / 3 / 2)
 * Part titles match the interactive lesson's "Part N of 3" lines.
 * Created when this topic was split off mcat-general-chemistry-kinetics-mcat
 * (Nov 2026); the temperature and rate-determining-step items came over from
 * that topic's old Parts 3 and 4.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Activation Energy, Arrhenius Equation & Collision Theory'
const P2 = 'Reaction Mechanisms, Rate-Determining Step & Catalysis'
const P3 = 'Mixed MCAT Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Activation Energy, Arrhenius Equation & Collision Theory
  { id: 'mgem-ent-1a', question: 'Raising the temperature speeds up most reactions mainly because:', options: ['The activation energy itself falls at higher temperature', 'The reaction releases more heat at higher temperature', 'A larger share of collisions reach the activation energy', 'The equilibrium constant always rises with temperature'], correctIndex: 2, explanation: 'In $k = Ae^{-E_a/RT}$, a higher $T$ raises the fraction of collisions with energy at least $E_a$, so $k$ grows. $E_a$ belongs to the pathway and changes only with a catalyst, while $\\Delta H$ and $K$ are thermodynamic quantities that do not set the rate.', partNumber: 1, partTitle: P1 },
  { id: 'mgem-ent-1b', question: 'On an Arrhenius plot of $\\ln k$ against $1/T$, the slope of the straight line equals:', options: ['$-E_a/R$', '$\\ln A$', '$-E_a/RT$', '$+E_a/R$'], correctIndex: 0, explanation: 'Taking logs of $k = Ae^{-E_a/RT}$ gives $\\ln k = \\ln A - (E_a/R)(1/T)$, a line with slope $-E_a/R$ and intercept $\\ln A$. The slope is negative because $k$ grows as $1/T$ shrinks, and it carries no extra $T$, since $1/T$ is already the variable on the axis.', partNumber: 1, partTitle: P1 },
  { id: 'mgem-ent-1c', question: 'An energy diagram puts the reactants at 0 kJ/mol, the transition state at 90 kJ/mol and the products at 30 kJ/mol. What is the activation energy of the reverse reaction?', options: ['30 kJ/mol', '60 kJ/mol', '90 kJ/mol', '120 kJ/mol'], correctIndex: 1, explanation: 'The reverse reaction starts from the products, so its barrier is the climb from 30 kJ/mol up to the 90 kJ/mol peak: 60 kJ/mol. The 90 kJ/mol figure is the forward barrier, 30 kJ/mol is $\\Delta H$ (endothermic), and 120 kJ/mol adds the two instead of subtracting.', partNumber: 1, partTitle: P1 },

  // Part 2 — Reaction Mechanisms, Rate-Determining Step & Catalysis
  { id: 'mgem-ent-2a', question: 'In a multistep reaction mechanism, the overall rate is set by:', options: ['The fastest elementary step', 'The step with the most reactants', 'The final step that forms product', 'The slowest elementary step'], correctIndex: 3, explanation: 'The slowest step is the bottleneck, the rate-determining step, and the rate law is written from it. Fast steps wait on it, and neither the number of reactants in a step nor its place in the sequence decides the overall rate.', partNumber: 2, partTitle: P2 },
  { id: 'mgem-ent-2b', question: 'In a proposed mechanism, a species that is produced in one step and consumed in a later step, and so never appears in the overall equation, is called:', options: ['An intermediate', 'A catalyst', 'A transition state', 'The rate-determining step'], correctIndex: 0, explanation: 'Made in one step and used up in a later one is the signature of an intermediate; it cancels when the steps are added. A catalyst runs the other way, consumed first and regenerated later. A transition state is the energy peak of a single step, not a species that persists between steps, and the rate-determining step is a step, not a species.', partNumber: 2, partTitle: P2 },
  { id: 'mgem-ent-2c', question: 'An enzyme works at a substrate concentration far above its $K_m$. What happens to the rate if [S] is doubled?', options: ['It nearly doubles, since it is first order in S', 'It halves, since excess substrate inhibits it', 'It barely changes, since the sites are nearly full', 'It falls to $V_{\\text{max}}/2$, since [S] passes $K_m$'], correctIndex: 2, explanation: 'Far above $K_m$, nearly every active site is occupied, so the rate is already close to $V_{\\text{max}}$ and the reaction is zero order in substrate. First-order behavior holds only well below $K_m$, and $V_{\\text{max}}/2$ is the rate AT $[\\text{S}] = K_m$, not above it.', partNumber: 2, partTitle: P2 },

  // Part 3 — Mixed MCAT Review
  { id: 'mgem-ent-3a', question: 'A reaction obeys rate $= k[\\text{A}][\\text{B}]$. Warming it from 300 K to 310 K at the same concentrations raises the rate because:', options: ['[A] and [B] rise as the solution warms', 'The reaction order rises from 2 to 3', '$E_a$ falls, as heat shrinks the barrier', '$k$ grows, as more collisions exceed $E_a$'], correctIndex: 3, explanation: 'Temperature enters the rate law only through $k$: by the Arrhenius equation a larger fraction of collisions exceeds $E_a$, so $k$ rises while the concentrations and the orders stay fixed. The barrier itself changes only with a catalyst.', partNumber: 3, partTitle: P3 },
  { id: 'mgem-ent-3b', question: 'A catalyst is added to an exothermic reaction. What happens to the reverse activation energy and to $\\Delta H$?', options: ['The reverse barrier is unchanged; $\\Delta H$ becomes more negative', 'The reverse barrier falls by the same amount; $\\Delta H$ is unchanged', 'The reverse barrier rises by the same amount; $\\Delta H$ is unchanged', 'The reverse barrier falls by the same amount; $\\Delta H$ grows less negative'], correctIndex: 1, explanation: 'A catalyst lowers the one peak of the pathway, so the forward and reverse barriers fall by the same amount. The reactant and product energies do not move, so $\\Delta H = E_a(\\text{fwd}) - E_a(\\text{rev})$ is unchanged, and so is $K$.', partNumber: 3, partTitle: P3 },
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
