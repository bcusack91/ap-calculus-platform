/**
 * Entrance Quiz — Thermodynamics (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mgth-ent-1a', question: "Hess's Law allows calculation of ΔH for a reaction by:", options: ['Measuring temperature change directly', 'Adding ΔH values of steps that sum to the overall reaction', 'Dividing the bond energies by temperature', 'Multiplying equilibrium constants'], correctIndex: 1, explanation: "Hess's Law: ΔH is a state function, so the total ΔH for any pathway equals the sum of ΔH values for each step, regardless of the route.", partNumber: 1, partTitle: "Enthalpy & Hess's Law" },
  { id: 'mgth-ent-1b', question: 'The standard enthalpy of formation ($\\Delta H^\\circ_f$) of an element in its standard state is:', options: ['Positive', 'Negative', 'Zero', 'Equal to its bond energy'], correctIndex: 2, explanation: 'By definition, $\\Delta H^\\circ_f = 0$ for any element in its standard state (e.g., $O_2(g)$, $C_{graphite}$, $Na(s)$).', partNumber: 1, partTitle: "Enthalpy & Hess's Law" },
  { id: 'mgth-ent-2a', question: 'Entropy (S) is a thermodynamic measure of:', options: ['The total energy of a system', 'The degree of randomness or disorder of a system', 'The heat released at constant pressure', 'The free energy available to do work'], correctIndex: 1, explanation: 'Entropy measures the number of microstates (disorder) in a system. The Second Law states entropy of the universe always increases.', partNumber: 2, partTitle: 'Entropy' },
  { id: 'mgth-ent-2b', question: 'Which process results in an increase in entropy?', options: ['$N_2(g) + 3H_2(g) \\to 2NH_3(g)$', 'Freezing liquid water', 'Dissolving $NaCl$ in water', 'Condensing steam to liquid water'], correctIndex: 2, explanation: 'Dissolving NaCl disperses ions into solution, greatly increasing the number of microstates (ΔS > 0). The others all decrease entropy.', partNumber: 2, partTitle: 'Entropy' },
  { id: 'mgth-ent-3a', question: 'The Gibbs free energy equation is $\\Delta G = \\Delta H - T\\Delta S$. A reaction is spontaneous when:', options: ['$\\Delta G > 0$', '$\\Delta G = 0$', '$\\Delta G < 0$', '$\\Delta H > 0$ and $\\Delta S > 0$'], correctIndex: 2, explanation: 'Spontaneous processes have $\\Delta G < 0$. At equilibrium $\\Delta G = 0$. Non-spontaneous processes have $\\Delta G > 0$.', partNumber: 3, partTitle: 'Gibbs Free Energy' },
  { id: 'mgth-ent-3b', question: 'Under what conditions is a reaction always non-spontaneous regardless of temperature?', options: ['$\\Delta H < 0$ and $\\Delta S > 0$', '$\\Delta H > 0$ and $\\Delta S < 0$', '$\\Delta H < 0$ and $\\Delta S < 0$', '$\\Delta H > 0$ and $\\Delta S > 0$'], correctIndex: 1, explanation: 'If $\\Delta H > 0$ (endothermic) and $\\Delta S < 0$ (entropy decreasing), then $\\Delta G = \\Delta H - T\\Delta S > 0$ at all temperatures.', partNumber: 3, partTitle: 'Gibbs Free Energy' },
  { id: 'mgth-ent-4a', question: 'A reaction has $\\Delta H = -100$ kJ and $\\Delta S = -200$ J/K. At what temperature does it become non-spontaneous?', options: ['Above 200 K', 'Above 500 K', 'Above 1000 K', 'It is always spontaneous'], correctIndex: 1, explanation: '$\\Delta G = 0$ when $T = \\Delta H / \\Delta S = (-100{,}000 \\text{ J}) / (-200 \\text{ J/K}) = 500$ K. Above 500 K, $\\Delta G > 0$ (non-spontaneous).', partNumber: 4, partTitle: 'Spontaneity' },
  { id: 'mgth-ent-4b', question: 'The Second Law of Thermodynamics states that in any spontaneous process, the entropy of the:', options: ['System increases', 'Surroundings increases', 'Universe increases', 'System decreases'], correctIndex: 2, explanation: 'The entropy of the universe ($\\Delta S_{univ} = \\Delta S_{sys} + \\Delta S_{surr}$) increases for all spontaneous processes. The system itself may decrease in entropy.', partNumber: 4, partTitle: 'Spontaneity' },
  { id: 'mgth-ent-5a', question: 'For the equilibrium $aA + bB \\rightleftharpoons cC + dD$, the equilibrium constant $K_{eq}$ is:', options: ['$K_{eq} = \\frac{[A]^a[B]^b}{[C]^c[D]^d}$', '$K_{eq} = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$', '$K_{eq} = [C]^c[D]^d - [A]^a[B]^b$', '$K_{eq} = \\frac{a+b}{c+d}$'], correctIndex: 1, explanation: '$K_{eq}$ is the ratio of product concentrations to reactant concentrations, each raised to their stoichiometric coefficients.', partNumber: 5, partTitle: 'Equilibrium Constants' },
  { id: 'mgth-ent-5b', question: 'The relationship between Gibbs free energy and the equilibrium constant at standard conditions is:', options: ['$\\Delta G^\\circ = RT \\ln K$', '$\\Delta G^\\circ = -RT \\ln K$', '$\\Delta G^\\circ = K/RT$', '$\\Delta G^\\circ = RT/K$'], correctIndex: 1, explanation: '$\\Delta G^\\circ = -RT \\ln K$. If $K > 1$, $\\ln K > 0$, so $\\Delta G^\\circ < 0$ (spontaneous). Large K = favorable thermodynamics.', partNumber: 5, partTitle: 'Equilibrium Constants' },
  { id: 'mgth-ent-6a', question: 'Given: $C(s) + O_2(g) \\to CO_2(g)$, $\\Delta H = -393$ kJ, and $CO(g) + \\frac{1}{2}O_2(g) \\to CO_2(g)$, $\\Delta H = -283$ kJ; what is $\\Delta H$ for $C(s) + \\frac{1}{2}O_2(g) \\to CO(g)$?', options: ['$-676$ kJ', '$-110$ kJ', '$+110$ kJ', '$+676$ kJ'], correctIndex: 1, explanation: "Subtract reaction 2 from reaction 1: $\\Delta H = -393 - (-283) = -110$ kJ. This is Hess's Law applied.", partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgth-ent-6b', question: 'ATP hydrolysis ($ATP + H_2O \\to ADP + P_i$) has $\\Delta G^\\circ = -30.5$ kJ/mol. This means:', options: ['The reaction is endothermic', 'The reaction is non-spontaneous', 'The reaction is thermodynamically favorable', 'K < 1'], correctIndex: 2, explanation: '$\\Delta G^\\circ < 0$ means the reaction is thermodynamically favorable (spontaneous under standard conditions). Cells use this energy to drive unfavorable reactions.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgth-ent-7a', question: 'The First Law of Thermodynamics (conservation of energy) is expressed as:', options: ['$\\Delta U = q - w$', '$\\Delta G = \\Delta H - T\\Delta S$', '$\\Delta S_{univ} > 0$', '$\\Delta H = \\Delta U + P\\Delta V$'], correctIndex: 0, explanation: '$\\Delta U = q - w$: change in internal energy equals heat added to the system minus work done by the system. Energy is conserved.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'mgth-ent-7b', question: 'A reaction with a large positive $K_{eq}$ has a $\\Delta G^\\circ$ that is:', options: ['Large and positive', 'Large and negative', 'Zero', 'Equal to $\\Delta H$'], correctIndex: 1, explanation: '$\\Delta G^\\circ = -RT \\ln K$. If $K \\gg 1$, then $\\ln K \\gg 0$, making $\\Delta G^\\circ \\ll 0$ (large negative). Products are strongly favored.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Enthalpy & Hess's Law" },
    { partNumber: 2, partTitle: 'Entropy' },
    { partNumber: 3, partTitle: 'Gibbs Free Energy' },
    { partNumber: 4, partTitle: 'Spontaneity' },
    { partNumber: 5, partTitle: 'Equilibrium Constants' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
