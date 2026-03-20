/**
 * Entrance Quiz — General Chemistry Overview (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mgc-ent-1a', question: 'Which subatomic particle determines the identity (atomic number) of an element?', options: ['Neutron', 'Electron', 'Proton', 'Nucleon'], correctIndex: 2, explanation: 'The atomic number equals the number of protons. Changing the proton count changes the element entirely.', partNumber: 1, partTitle: 'Atomic Structure Basics' },
  { id: 'mgc-ent-1b', question: 'An atom of carbon-14 has 6 protons, 8 neutrons, and 6 electrons. Its mass number is:', options: ['6', '8', '14', '20'], correctIndex: 2, explanation: 'Mass number = protons + neutrons = 6 + 8 = 14. Electrons have negligible mass and are not included.', partNumber: 1, partTitle: 'Atomic Structure Basics' },
  { id: 'mgc-ent-2a', question: 'Atomic radius generally __________ across a period (left to right) in the periodic table.', options: ['Increases', 'Decreases', 'Stays constant', 'First increases then decreases'], correctIndex: 1, explanation: 'Increasing nuclear charge (more protons) pulls electrons closer, reducing atomic radius across a period.', partNumber: 2, partTitle: 'Periodic Trends' },
  { id: 'mgc-ent-2b', question: 'Which element has the highest electronegativity?', options: ['Oxygen', 'Chlorine', 'Fluorine', 'Nitrogen'], correctIndex: 2, explanation: 'Fluorine (F) is the most electronegative element (Pauling scale: 3.98), placed at the top right of the periodic table.', partNumber: 2, partTitle: 'Periodic Trends' },
  { id: 'mgc-ent-3a', question: 'A covalent bond forms when atoms:', options: ['Transfer electrons completely', 'Share electron pairs', 'Exchange protons', 'Attract oppositely charged ions'], correctIndex: 1, explanation: 'Covalent bonds involve the sharing of electron pairs between atoms, unlike ionic bonds which involve electron transfer.', partNumber: 3, partTitle: 'Chemical Bonding' },
  { id: 'mgc-ent-3b', question: 'The VSEPR geometry of water ($H_2O$) with 2 bonding pairs and 2 lone pairs is:', options: ['Linear', 'Trigonal planar', 'Bent (V-shaped)', 'Tetrahedral'], correctIndex: 2, explanation: 'Two lone pairs on oxygen repel the bonding pairs, resulting in a bent geometry (~104.5° bond angle).', partNumber: 3, partTitle: 'Chemical Bonding' },
  { id: 'mgc-ent-4a', question: 'In the reaction $2H_2 + O_2 \\to 2H_2O$, how many moles of $O_2$ are required to react with 4 moles of $H_2$?', options: ['1 mol', '2 mol', '4 mol', '8 mol'], correctIndex: 1, explanation: 'The molar ratio of $H_2$ to $O_2$ is 2:1. So 4 mol $H_2$ requires 4/2 = 2 mol $O_2$.', partNumber: 4, partTitle: 'Stoichiometry' },
  { id: 'mgc-ent-4b', question: 'The limiting reagent in a reaction is the reactant that:', options: ['Has the largest molar mass', 'Is present in the greatest mass', 'Is completely consumed first and determines the yield', 'Has the highest boiling point'], correctIndex: 2, explanation: 'The limiting reagent is fully consumed first and stops the reaction, setting the maximum product yield.', partNumber: 4, partTitle: 'Stoichiometry' },
  { id: 'mgc-ent-5a', question: 'An exothermic reaction has a ΔH that is:', options: ['Positive', 'Negative', 'Zero', 'Undefined'], correctIndex: 1, explanation: 'Exothermic reactions release heat to the surroundings, so the system loses enthalpy: ΔH < 0 (negative).', partNumber: 5, partTitle: 'Thermochemistry' },
  { id: 'mgc-ent-5b', question: "Hess's Law states that the total enthalpy change of a reaction:", options: ['Depends on the pathway taken', 'Is the same regardless of the reaction pathway', 'Equals the activation energy', 'Is always positive'], correctIndex: 1, explanation: "Hess's Law is a consequence of enthalpy being a state function — ΔH is path-independent and depends only on initial and final states.", partNumber: 5, partTitle: 'Thermochemistry' },
  { id: 'mgc-ent-6a', question: 'A student reacts 3.0 g of carbon (MW = 12 g/mol) with excess $O_2$. How many moles of $CO_2$ are produced?', options: ['0.125 mol', '0.25 mol', '0.50 mol', '1.0 mol'], correctIndex: 1, explanation: 'Moles of C = 3.0/12 = 0.25 mol. The reaction $C + O_2 \\to CO_2$ is 1:1, so 0.25 mol $CO_2$ is produced.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgc-ent-6b', question: 'Which of the following solutions is most acidic?', options: ['pH = 7.0', 'pH = 4.2', 'pH = 9.8', 'pH = 6.5'], correctIndex: 1, explanation: 'Lower pH = higher $[H^+]$ = more acidic. pH 4.2 is the lowest (most acidic) option listed.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgc-ent-7a', question: 'At equilibrium, the rate of the forward reaction equals the rate of the reverse reaction. This means the concentrations of reactants and products:', options: ['Are always equal to each other', 'Are zero', 'Remain constant over time', 'Continue to change slowly'], correctIndex: 2, explanation: 'At dynamic equilibrium, concentrations are constant (not necessarily equal). Both forward and reverse reactions continue at equal rates.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'mgc-ent-7b', question: "According to Le Chatelier's Principle, adding more reactant to an equilibrium system will:", options: ['Shift the equilibrium toward the reactants', 'Have no effect', 'Shift the equilibrium toward the products', 'Stop the reaction'], correctIndex: 2, explanation: "Le Chatelier's Principle: the system shifts to counteract the disturbance. Adding reactant shifts equilibrium right (toward products).", partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Atomic Structure Basics' },
    { partNumber: 2, partTitle: 'Periodic Trends' },
    { partNumber: 3, partTitle: 'Chemical Bonding' },
    { partNumber: 4, partTitle: 'Stoichiometry' },
    { partNumber: 5, partTitle: 'Thermochemistry' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
