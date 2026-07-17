/**
 * Entrance Quiz — Thermodynamics (MCAT)
 * 10 questions · 5 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Enthalpy & Hess's Law
  { id: 'mgth-ent-1a', question: 'A reaction with $\\Delta H < 0$ is:', options: ['Endothermic and absorbs heat', 'Exothermic and releases heat', 'Always spontaneous regardless of T', 'At equilibrium'], correctIndex: 1, explanation: 'Negative ΔH means the system releases heat to its surroundings — exothermic.', partNumber: 1, partTitle: "Enthalpy & Hess's Law" },
  { id: 'mgth-ent-1b', question: "Hess's Law lets you calculate ΔH for a reaction by:", options: ['Measuring temperature change directly', 'Adding ΔH values of intermediate steps that sum to the target reaction', 'Using activation energy alone', 'Multiplying ΔS by T'], correctIndex: 1, explanation: 'Because enthalpy is a state function, ΔH is path-independent. Sum the ΔH of any series of steps that yields the overall reaction.', partNumber: 1, partTitle: "Enthalpy & Hess's Law" },

  // Part 2 — Entropy & Laws of Thermodynamics
  { id: 'mgth-ent-2a', question: 'Which process has $\\Delta S_{system} > 0$?', options: ['Water vapor condensing to liquid', 'NaCl dissolving in water', '2 N(g) → $N_{2}(g)$', 'Freezing of liquid water'], correctIndex: 1, explanation: 'Dissolving disperses ions among water molecules — entropy increases. The other options reduce the number of microstates / disorder.', partNumber: 2, partTitle: 'Entropy & Laws of Thermodynamics' },
  { id: 'mgth-ent-2b', question: 'The Second Law of Thermodynamics states that:', options: ['Energy cannot be created or destroyed', 'Total entropy of the universe always increases for spontaneous processes', 'Entropy approaches zero as T → 0 K', 'Heat flows from cold to hot spontaneously'], correctIndex: 1, explanation: 'For any spontaneous (irreversible) process, $\\Delta S_{universe} = \\Delta S_{sys} + \\Delta S_{surr} > 0$.', partNumber: 2, partTitle: 'Entropy & Laws of Thermodynamics' },

  // Part 3 — Gibbs Free Energy, Keq & Cell Potential
  { id: 'mgth-ent-3a', question: 'A reaction is spontaneous (under standard conditions) when:', options: ['$\\Delta G° > 0$', '$\\Delta G° < 0$', '$\\Delta H° < 0$ only', '$\\Delta S° < 0$ only'], correctIndex: 1, explanation: 'ΔG = ΔH − TΔS. Negative ΔG (especially ΔG°) indicates a spontaneous process at the given T.', partNumber: 3, partTitle: 'Gibbs Free Energy, Keq & Cell Potential' },
  { id: 'mgth-ent-3b', question: 'The relation $\\Delta G° = -RT\\ln K_{eq}$ implies that for $K_{eq} > 1$:', options: ['ΔG° = 0', 'ΔG° > 0', 'ΔG° < 0', 'K depends only on T, not ΔG'], correctIndex: 2, explanation: 'If K > 1, ln K > 0, so −RT ln K < 0 → ΔG° < 0. Reaction favors products at standard state.', partNumber: 3, partTitle: 'Gibbs Free Energy, Keq & Cell Potential' },

  // Part 4 — Phase Changes & Heating Curves
  { id: 'mgth-ent-4a', question: 'On a heating curve (T vs. heat added) for water, the flat plateaus represent:', options: ['Heating of liquid water', 'Phase transitions at constant temperature', 'Endothermic decomposition', 'Heat loss to surroundings'], correctIndex: 1, explanation: 'During melting and boiling, added heat goes into breaking intermolecular forces (latent heat) — temperature stays constant.', partNumber: 4, partTitle: 'Phase Changes & Heating Curves' },
  { id: 'mgth-ent-4b', question: 'Which equation gives the heat needed to raise the temperature of a substance (no phase change)?', options: ['$q = mL$', '$q = mc\\Delta T$', '$q = nRT$', '$q = -w$'], correctIndex: 1, explanation: 'q = m·c·ΔT, where c is specific heat capacity. For phase changes (no ΔT), use q = mL with the latent heat.', partNumber: 4, partTitle: 'Phase Changes & Heating Curves' },

  // Part 5 — Mixed MCAT Review
  { id: 'mgth-ent-5a', question: 'A reaction has $\\Delta H > 0$ and $\\Delta S > 0$. It is spontaneous:', options: ['At all temperatures', 'At no temperature', 'Only at high temperatures', 'Only at low temperatures'], correctIndex: 2, explanation: 'ΔG = ΔH − TΔS. Both positive: ΔG < 0 only when T is large enough that TΔS > ΔH.', partNumber: 5, partTitle: 'Mixed MCAT Review' },
  { id: 'mgth-ent-5b', question: 'How much heat is required to warm 50 g of water from 20 °C to 30 °C? (c = 4.18 J/g·°C)', options: ['209 J', '418 J', '2090 J', '4180 J'], correctIndex: 2, explanation: 'q = mcΔT = 50 × 4.18 × 10 = 2090 J.', partNumber: 5, partTitle: 'Mixed MCAT Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Enthalpy & Hess's Law" },
    { partNumber: 2, partTitle: 'Entropy & Laws of Thermodynamics' },
    { partNumber: 3, partTitle: 'Gibbs Free Energy, Keq & Cell Potential' },
    { partNumber: 4, partTitle: 'Phase Changes & Heating Curves' },
    { partNumber: 5, partTitle: 'Mixed MCAT Review' },
  ]
}
