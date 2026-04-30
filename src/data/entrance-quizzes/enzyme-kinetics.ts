/**
 * Entrance Quiz — Enzyme Kinetics (AP Biology)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'ek-eq-1a', question: 'What is the active site of an enzyme, and what occurs there?', options: ['The inactive region where products accumulate', 'The specific 3D pocket where substrate molecules bind and catalysis occurs', 'The location where the enzyme is denatured', 'The region that stores energy for the cell'], correctIndex: 1, explanation: 'The active site is a specific, three-dimensional cavity in the enzyme where substrate molecules bind and the enzyme facilitates the chemical reaction. The enzyme\'s shape is complementary to the substrate.', partNumber: 1, partTitle: 'Active Site and Binding' },
  { id: 'ek-eq-1b', question: 'How does an enzyme increase the rate of a reaction?', options: ['It shifts the equilibrium position toward products', 'It provides an alternative reaction pathway with lower activation energy', 'It changes the final energy difference between reactants and products', 'It consumes energy from ATP to drive the reaction'], correctIndex: 1, explanation: 'Enzymes lower the activation energy required for a reaction to occur, speeding up the rate at which reactants convert to products. They do not change the overall energy change (ΔG) of the reaction.', partNumber: 1, partTitle: 'Active Site and Binding' },

  // Part 2
  { id: 'ek-eq-2a', question: 'On a graph of reaction rate vs. substrate concentration, what happens as substrate increases?', options: ['The rate decreases linearly', 'The rate initially increases rapidly, then plateaus at Vmax', 'The rate increases indefinitely without limit', 'The rate remains constant regardless of substrate'], correctIndex: 1, explanation: 'At low substrate concentrations, rate increases linearly with substrate. As substrate increases, the enzyme becomes saturated, and the rate plateaus at its maximum velocity (Vmax). Not all enzyme molecules can be used simultaneously.', partNumber: 2, partTitle: 'Saturation Kinetics' },
  { id: 'ek-eq-2b', question: 'What is enzyme saturation, and what causes it?', options: ['The enzyme absorbs so much substrate that it expands', 'All active sites are occupied by substrate molecules; further increases in substrate concentration do not increase reaction rate', 'The enzyme is denatured by the substrate', 'The substrate fills the cell and blocks enzyme function'], correctIndex: 1, explanation: 'Saturation occurs when every available enzyme active site is occupied by a substrate molecule. At saturation, the enzyme works at maximum velocity (Vmax); additional substrate cannot increase the rate further.', partNumber: 2, partTitle: 'Saturation Kinetics' },

  // Part 3
  { id: 'ek-eq-3a', question: 'What is the difference between competitive and noncompetitive enzyme inhibition?', options: ['Competitive inhibition is temporary; noncompetitive is permanent', 'Competitive inhibitors bind the active site and can be outcompeted by substrate; noncompetitive inhibitors bind elsewhere and reduce enzyme activity regardless of substrate concentration', 'Noncompetitive inhibitors are beneficial; competitive ones are harmful', 'Both types are identical in their molecular mechanism'], correctIndex: 1, explanation: 'In competitive inhibition, the inhibitor competes with substrate for the active site; increasing substrate can overcome it. In noncompetitive inhibition, the inhibitor binds to a different site, permanently reducing activity; more substrate cannot reverse it.', partNumber: 3, partTitle: 'Inhibition Types' },
  { id: 'ek-eq-3b', question: 'How does increasing substrate concentration affect competitive vs. noncompetitive inhibition?', options: ['It reverses both types equally', 'It can overcome competitive inhibition but has little effect on noncompetitive inhibition', 'It worsens both types of inhibition', 'It has no effect on either type'], correctIndex: 1, explanation: 'Competitive inhibition\'s effect can be overcome by increasing substrate concentration because substrate and inhibitor compete for the active site. Noncompetitive inhibition is unaffected by substrate concentration because the inhibitor is bound elsewhere.', partNumber: 3, partTitle: 'Inhibition Types' },

  // Part 4
  { id: 'ek-eq-4a', question: 'How do temperature and pH affect enzyme activity?', options: ['Enzymes are unaffected by either factor', 'Increasing temperature always increases activity; pH has no effect', 'Enzyme activity has an optimal temperature and pH; deviations in either direction decrease activity', 'Enzymes work best at extreme temperatures and acidic pH'], correctIndex: 2, explanation: 'Each enzyme has an optimal temperature and pH at which it works best. Too hot, too cold, or wrong pH denatures the enzyme or disrupts its active site, reducing activity. Extreme conditions can cause permanent denaturation.', partNumber: 4, partTitle: 'Factors Affecting Rate' },
  { id: 'ek-eq-4b', question: 'Why do enzymes have optimal temperatures and pH values?', options: ['The enzyme\'s active site shape and chemical environment are stabilized at these conditions', 'Extreme temperatures and pH values always kill the cell', 'Enzymes have no real optimum; activity increases indefinitely', 'The substrate is only available at these conditions'], correctIndex: 0, explanation: 'Enzyme structure, including the active site\'s 3D shape and the ionization state of amino acids, is maintained at optimal temperature and pH. Deviations disrupt these critical features, reducing or eliminating activity.', partNumber: 4, partTitle: 'Factors Affecting Rate' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Active Site and Binding' },
    { partNumber: 2, partTitle: 'Saturation Kinetics' },
    { partNumber: 3, partTitle: 'Inhibition Types' },
    { partNumber: 4, partTitle: 'Factors Affecting Rate' },
  ]
}
