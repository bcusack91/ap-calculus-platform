/**
 * Entrance Quiz — Chemical Kinetics (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mgki-ent-1a', question: 'The rate of a chemical reaction is generally expressed as:', options: ['The change in temperature per unit time', 'The change in concentration of a reactant or product per unit time', 'The change in pressure times volume', 'The activation energy divided by temperature'], correctIndex: 1, explanation: 'Reaction rate = Δ[concentration]/Δtime. It can be expressed as the decrease in reactant concentration or increase in product concentration per unit time.', partNumber: 1, partTitle: 'Reaction Rates' },
  { id: 'mgki-ent-1b', question: 'Increasing the temperature of a reaction generally:', options: ['Decreases the reaction rate', 'Has no effect on reaction rate', 'Increases the reaction rate', 'Only affects equilibrium, not rate'], correctIndex: 2, explanation: 'Higher temperature gives molecules more kinetic energy, increasing the frequency and energy of collisions, thus increasing the reaction rate.', partNumber: 1, partTitle: 'Reaction Rates' },
  { id: 'mgki-ent-2a', question: 'For the rate law $rate = k[A]^2[B]$, what happens to the rate when [A] is doubled (all else constant)?', options: ['Rate doubles', 'Rate triples', 'Rate quadruples', 'Rate increases 8-fold'], correctIndex: 2, explanation: 'The reaction is second-order in A. Doubling [A] increases rate by $2^2 = 4$-fold.', partNumber: 2, partTitle: 'Rate Laws' },
  { id: 'mgki-ent-2b', question: 'The rate constant k in a rate law depends on:', options: ['Reactant concentrations', 'Product concentrations', 'Temperature and activation energy', 'The equilibrium constant K'], correctIndex: 2, explanation: 'k is independent of concentration but depends on temperature (via the Arrhenius equation: $k = Ae^{-E_a/RT}$) and activation energy.', partNumber: 2, partTitle: 'Rate Laws' },
  { id: 'mgki-ent-3a', question: 'A first-order reaction has a half-life of 20 minutes. After 60 minutes, what fraction of the original reactant remains?', options: ['1/2', '1/4', '1/8', '1/16'], correctIndex: 2, explanation: '60 min / 20 min = 3 half-lives. Remaining = $(1/2)^3 = 1/8$ of the original.', partNumber: 3, partTitle: 'Order of Reactions' },
  { id: 'mgki-ent-3b', question: 'For a zero-order reaction, the rate:', options: ['Depends on the square of the concentration', 'Depends linearly on concentration', 'Is independent of concentration', 'Depends on the product of two concentrations'], correctIndex: 2, explanation: 'Zero-order: rate = k. The rate is constant and does not change with reactant concentration, common in enzyme-saturated reactions.', partNumber: 3, partTitle: 'Order of Reactions' },
  { id: 'mgki-ent-4a', question: 'Activation energy ($E_a$) is best defined as:', options: ['The energy released during a reaction', 'The minimum energy required for reactants to convert to products', 'The difference between reactant and product energies', 'The energy of the most stable intermediate'], correctIndex: 1, explanation: '$E_a$ is the minimum kinetic energy that colliding molecules must have to overcome the energy barrier and form products.', partNumber: 4, partTitle: 'Activation Energy' },
  { id: 'mgki-ent-4b', question: 'The Arrhenius equation $k = Ae^{-E_a/RT}$ predicts that as $E_a$ increases:', options: ['k increases exponentially', 'k decreases (reaction becomes slower)', 'k is unaffected', 'k becomes negative'], correctIndex: 1, explanation: 'A larger $E_a$ means fewer molecules have enough energy to react. The negative exponent $-E_a/RT$ becomes more negative, decreasing k.', partNumber: 4, partTitle: 'Activation Energy' },
  { id: 'mgki-ent-5a', question: 'A catalyst increases reaction rate by:', options: ['Increasing the temperature', 'Providing an alternative pathway with lower activation energy', 'Shifting the equilibrium to the right', 'Increasing the concentration of reactants'], correctIndex: 1, explanation: 'Catalysts lower $E_a$ by providing an alternative mechanism. They are not consumed and do not change ΔG or equilibrium position.', partNumber: 5, partTitle: 'Catalysis' },
  { id: 'mgki-ent-5b', question: 'Enzymes are biological catalysts that are highly specific due to their:', options: ['High temperature tolerance', 'Active site complementary to substrate shape and chemistry', 'Ability to increase substrate concentration', 'Large molecular weight'], correctIndex: 1, explanation: 'Enzyme active sites have a specific 3D shape and chemical environment that selectively binds substrates (lock-and-key or induced fit model).', partNumber: 5, partTitle: 'Catalysis' },
  { id: 'mgki-ent-6a', question: 'The rate-determining step in a multi-step reaction mechanism is the:', options: ['First step always', 'Last step always', 'Slowest step, which limits the overall rate', 'Step with the lowest activation energy'], correctIndex: 2, explanation: 'The slowest step has the highest activation energy and determines the overall rate. The rate law reflects the species in this step.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgki-ent-6b', question: 'A reaction is experimentally found to be first-order in [A] and first-order in [B]. The overall order is:', options: ['First order', 'Second order', 'Third order', 'Zero order'], correctIndex: 1, explanation: 'Overall order = sum of individual orders = 1 + 1 = 2 (second order). Rate = k[A][B].', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgki-ent-7a', question: 'An energy diagram for a reaction shows the transition state at the peak. The activation energy for the reverse reaction equals:', options: ['The same as the forward $E_a$', 'Forward $E_a$ minus ΔH', 'Forward $E_a$ plus ΔH (for exothermic) or minus ΔH (for endothermic)', 'Zero if the reaction is spontaneous'], correctIndex: 2, explanation: 'For an exothermic reaction: $E_{a,reverse} = E_{a,forward} + |\\Delta H|$. The reverse reaction must also pass through the transition state.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'mgki-ent-7b', question: 'Collision theory states that reactions occur when molecules collide with sufficient energy AND:', options: ['At any angle', 'In the proper orientation', 'At high pressure only', 'Without any activation energy'], correctIndex: 1, explanation: 'Collision theory requires both sufficient energy (≥ $E_a$) AND proper orientation. Most collisions fail due to incorrect geometry.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Reaction Rates' },
    { partNumber: 2, partTitle: 'Rate Laws' },
    { partNumber: 3, partTitle: 'Order of Reactions' },
    { partNumber: 4, partTitle: 'Activation Energy' },
    { partNumber: 5, partTitle: 'Catalysis' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
