/**
 * Entrance Quiz — Thermodynamics (MCAT)
 * 14 questions · 5 parts (3 / 3 / 3 / 3 / 2)
 * Part titles match the interactive lesson's "Part N of 5" lines
 * (re-aligned after the Nov 2026 lesson rewrite).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = "Enthalpy ($\\Delta H$) & Hess's Law"
const P2 = 'Entropy ($\\Delta S$), Spontaneity & the Laws of Thermodynamics'
const P3 = 'Gibbs Free Energy, $K_{eq}$ & Cell Potential'
const P4 = 'Phase Changes, Heating Curves & Colligative Properties'
const P5 = 'Mixed MCAT Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Enthalpy & Hess's Law
  { id: 'mgth-ent-1a', question: 'A reaction with $\\Delta H < 0$ is:', options: ['Endothermic, so it absorbs heat', 'Exothermic, so it releases heat', 'Spontaneous at any temperature', 'Already at chemical equilibrium'], correctIndex: 1, explanation: 'A negative $\\Delta H$ means the products hold less enthalpy than the reactants, so heat flows out to the surroundings: exothermic. Spontaneity also depends on $\\Delta S$ and $T$, and $\\Delta H$ says nothing about whether a mixture is at equilibrium.', partNumber: 1, partTitle: P1 },
  { id: 'mgth-ent-1b', question: "Hess's Law lets you find $\\Delta H$ for a reaction by:", options: ['Measuring the temperature change of the reaction directly', 'Dividing the activation energy by the number of steps', "Multiplying the reaction's $\\Delta S$ by the temperature", 'Adding the $\\Delta H$ values of steps that sum to the target'], correctIndex: 3, explanation: 'Enthalpy is a state function, so $\\Delta H$ depends only on the start and end states. Any set of steps that adds up to the target reaction gives the same total, with the sign flipped for a reversed step and the value scaled for a scaled one. Activation energy and $T\\Delta S$ do not give $\\Delta H$.', partNumber: 1, partTitle: P1 },
  { id: 'mgth-ent-1c', question: 'The reaction $\\text{X} \\to \\text{Y}$ has $\\Delta H = +60$ kJ. What is $\\Delta H$ for $2\\text{Y} \\to 2\\text{X}$?', options: ['$+120$ kJ', '$+60$ kJ', '$-60$ kJ', '$-120$ kJ'], correctIndex: 3, explanation: 'Reversing a reaction flips the sign of $\\Delta H$ (to $-60$ kJ), and doubling it doubles the value: $-120$ kJ. The $+120$ kJ answer scales without flipping, and $-60$ kJ flips without scaling.', partNumber: 1, partTitle: P1 },

  // Part 2 — Entropy, Spontaneity & the Laws of Thermodynamics
  { id: 'mgth-ent-2a', question: 'According to the Third Law, the entropy of a perfect crystal at 0 K is:', options: ['Exactly zero, its lowest value', 'A small negative value', 'Equal to its enthalpy at 0 K', 'The largest value it can reach'], correctIndex: 0, explanation: 'The Third Law sets the entropy of a perfect crystal at absolute zero to exactly zero, the reference for every standard molar entropy. Entropy is never negative, and a perfectly ordered crystal at 0 K has the LEAST entropy, not the most.', partNumber: 2, partTitle: P2 },
  { id: 'mgth-ent-2b', question: 'A gas absorbs 200 J of heat while doing 50 J of work on its surroundings. What is its change in internal energy?', options: ['$-250$ J', '$-150$ J', '$+150$ J', '$+250$ J'], correctIndex: 2, explanation: 'In the chemistry form $\\Delta U = q + w$, the heat absorbed is $q = +200$ J and work done BY the gas is $w = -50$ J, so $\\Delta U = +150$ J. The physics form $\\Delta U = Q - W = 200 - 50$ gives the same answer. Adding the 50 J treats the work as energy gained.', partNumber: 2, partTitle: P2 },
  { id: 'mgth-ent-2c', question: 'Which change increases the entropy of a sample of oxygen gas?', options: ['Cooling the gas from 300 K to 200 K', 'Compressing the gas to half its volume', 'Expanding the gas into a larger flask', 'Condensing the gas into a liquid'], correctIndex: 2, explanation: 'Spreading the same molecules through more volume gives them more possible arrangements, so entropy rises. Cooling, compressing and condensing all restrict the molecules and lower the entropy.', partNumber: 2, partTitle: P2 },

  // Part 3 — Gibbs Free Energy, Keq & Cell Potential
  { id: 'mgth-ent-3a', question: 'A reaction is spontaneous under standard conditions when:', options: ['$\\Delta G° > 0$', '$\\Delta G° < 0$', '$\\Delta H° < 0$, whatever $\\Delta S°$ is', '$\\Delta S° < 0$, whatever $\\Delta H°$ is'], correctIndex: 1, explanation: '$\\Delta G = \\Delta H - T\\Delta S$ combines both factors, and a negative $\\Delta G°$ marks a spontaneous process. A negative $\\Delta H$ alone is not enough when $\\Delta S$ is negative and $T$ is high, and a falling entropy works against spontaneity.', partNumber: 3, partTitle: P3 },
  { id: 'mgth-ent-3b', question: 'The relation $\\Delta G° = -RT\\ln K$ implies that for $K > 1$:', options: ['$\\Delta G° > 0$', '$\\Delta G° < 0$', '$\\Delta G° = 0$', '$\\Delta G°$ cannot be found from $K$'], correctIndex: 1, explanation: 'If $K > 1$, then $\\ln K > 0$, so $-RT\\ln K < 0$ and $\\Delta G° < 0$: products are favored at equilibrium. $\\Delta G° = 0$ corresponds to $K = 1$ exactly.', partNumber: 3, partTitle: P3 },
  { id: 'mgth-ent-3c', question: 'A redox reaction has $E°_{\\text{cell}} = -0.40$ V. Under standard conditions, the reaction as written is:', options: ['Spontaneous, with $\\Delta G° < 0$ and $K > 1$', 'Nonspontaneous, with $\\Delta G° < 0$ and $K < 1$', 'At equilibrium, with $\\Delta G° = 0$ and $K = 1$', 'Nonspontaneous, with $\\Delta G° > 0$ and $K < 1$'], correctIndex: 3, explanation: '$\\Delta G° = -nFE°_{\\text{cell}}$, so a negative $E°$ gives a positive $\\Delta G°$, and $\\Delta G° = -RT\\ln K$ then requires $K < 1$. The reaction is not spontaneous as written (its reverse is). $\\Delta G° = 0$ and $K = 1$ would need $E° = 0$.', partNumber: 3, partTitle: P3 },

  // Part 4 — Phase Changes, Heating Curves & Colligative Properties
  { id: 'mgth-ent-4a', question: 'Dry ice (solid $\\text{CO}_2$) sublimes at room temperature. What are the signs of $\\Delta H$ and $\\Delta S$ for the sublimation?', options: ['$\\Delta H > 0$ and $\\Delta S > 0$', '$\\Delta H < 0$ and $\\Delta S > 0$', '$\\Delta H > 0$ and $\\Delta S < 0$', '$\\Delta H < 0$ and $\\Delta S < 0$'], correctIndex: 0, explanation: 'Sublimation goes from solid to gas: intermolecular forces must be overcome (endothermic, $\\Delta H > 0$) and the molecules become far more disordered ($\\Delta S > 0$). It runs on its own at room temperature because $T\\Delta S$ outweighs $\\Delta H$. Two negative signs describe the reverse change, deposition.', partNumber: 4, partTitle: P4 },
  { id: 'mgth-ent-4b', question: 'Which equation gives the heat needed to warm a substance when no phase change occurs?', options: ['$q = mc\\Delta T$', '$q = n\\Delta H_{\\text{fus}}$', '$q = nRT$', '$q = -w$'], correctIndex: 0, explanation: 'On the sloped parts of a heating curve the temperature changes, and $q = mc\\Delta T$ uses the specific heat $c$. $q = n\\Delta H$ applies on a plateau, where the phase changes at constant temperature.', partNumber: 4, partTitle: P4 },
  { id: 'mgth-ent-4c', question: "A nonvolatile solute is dissolved in water so that the solute's mole fraction is 0.10. If pure water's vapor pressure is 24 torr at this temperature, what is the solution's vapor pressure?", options: ['26.4 torr', '24 torr', '21.6 torr', '2.4 torr'], correctIndex: 2, explanation: "By Raoult's law the vapor pressure drops by $\\Delta P = \\chi_{\\text{solute}} P° = 0.10 \\times 24 = 2.4$ torr, so the solution's is $24 - 2.4 = 21.6$ torr (or $0.90 \\times 24$). The 2.4 torr figure is the lowering itself, and a nonvolatile solute can only lower the vapor pressure, never raise it.", partNumber: 4, partTitle: P4 },

  // Part 5 — Mixed MCAT Review
  { id: 'mgth-ent-5a', question: 'A reaction has $\\Delta H > 0$ and $\\Delta S > 0$. It is spontaneous:', options: ['At every temperature', 'At no temperature at all', 'At low temperature only', 'At high temperature only'], correctIndex: 3, explanation: '$\\Delta G = \\Delta H - T\\Delta S$. With both positive, $\\Delta G$ turns negative only once $T\\Delta S$ exceeds $\\Delta H$, that is above $T = \\Delta H/\\Delta S$. Low temperature favors a reaction whose $\\Delta H$ and $\\Delta S$ are both negative.', partNumber: 5, partTitle: P5 },
  { id: 'mgth-ent-5b', question: 'A reaction has $\\Delta H° = -40$ kJ and $\\Delta S° = +50$ J/K. Which statement about its equilibrium constant is correct?', options: ['$K > 1$ at every temperature', '$K < 1$ at every temperature', '$K = 1$, since the terms cancel', '$K > 1$ only above 800 K'], correctIndex: 0, explanation: 'With $\\Delta H° < 0$ and $\\Delta S° > 0$, $\\Delta G° = \\Delta H° - T\\Delta S°$ is negative at every temperature, and $\\Delta G° = -RT\\ln K$ then gives $K > 1$. The 800 K figure divides $\\Delta H$ by $\\Delta S$, a crossover that exists only when the two have the same sign.', partNumber: 5, partTitle: P5 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
  ]
}
