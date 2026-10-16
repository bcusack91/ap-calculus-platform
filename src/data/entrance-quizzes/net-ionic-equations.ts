/**
 * Entrance Quiz — Net Ionic Equations
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Molecular vs. Ionic Equations (electrolytes; balanced molecular equations with phases)
 *  2 — Complete Ionic Equations (what splits and how)
 *  3 — Net Ionic Equations (spectators; driving forces; no reaction)
 *  4 — Precipitation Reactions (particle-level counting; formula from charges)
 *  5 — Acid-Base Net Ionic Equations (strong vs. weak)
 *  6 — Problem-Solving Workshop (gas-forming reactions; two driving forces)
 *  7 — Synthesis & AP Review (weak–weak reactions; evaluating a written equation)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Molecular vs. Ionic Equations
  {
    id: 'nie-ent-1a',
    question: 'Four 0.10 M aqueous solutions are tested with a conductivity probe. Which solution conducts electricity the least?',
    options: [
      'Hydrochloric acid',
      'Acetic acid',
      'Glucose',
      'Sodium chloride',
    ],
    correctIndex: 2,
    explanation: 'Glucose is a molecular non-electrolyte, so it releases no ions and conducts least. Acetic acid is a weak electrolyte that forms a few ions, while hydrochloric acid and sodium chloride dissociate completely.',
    partNumber: 1,
    partTitle: 'Molecular vs. Ionic Equations',
  },
  {
    id: 'nie-ent-1b',
    question: 'Aqueous calcium nitrate is mixed with aqueous potassium carbonate. Calcium carbonate is insoluble. Which balanced molecular equation is correct?',
    options: [
      '$\\text{Ca(NO}_3)_2(aq) + \\text{K}_2\\text{CO}_3(aq) \\rightarrow \\text{CaCO}_3(aq) + 2\\text{KNO}_3(s)$',
      '$\\text{Ca(NO}_3)_2(aq) + \\text{K}_2\\text{CO}_3(aq) \\rightarrow \\text{CaCO}_3(s) + 2\\text{KNO}_3(aq)$',
      '$\\text{Ca(NO}_3)_2(aq) + \\text{K}_2\\text{CO}_3(aq) \\rightarrow \\text{CaCO}_3(s) + \\text{KNO}_3(aq)$',
      '$\\text{CaNO}_3(aq) + \\text{K}_2\\text{CO}_3(aq) \\rightarrow \\text{CaCO}_3(s) + \\text{K}_2\\text{NO}_3(aq)$',
    ],
    correctIndex: 1,
    explanation: 'Calcium carbonate is the solid, and potassium nitrate stays aqueous because every potassium and nitrate salt is soluble; two $\\text{KNO}_3$ balance the two potassium and two nitrate ions. The other choices swap the phase labels, leave potassium unbalanced, or use formulas whose charges do not cancel.',
    partNumber: 1,
    partTitle: 'Molecular vs. Ionic Equations',
  },

  // Part 2: Complete Ionic Equations
  {
    id: 'nie-ent-2a',
    question: 'How is $\\text{Al}_2(\\text{SO}_4)_3(aq)$ written in a complete ionic equation?',
    options: [
      '$\\text{Al}_2(\\text{SO}_4)_3(aq)$',
      '$3\\text{Al}^{2+}(aq) + 2\\text{SO}_4^{3-}(aq)$',
      '$2\\text{Al}^{3+}(aq) + 3\\text{SO}_4^{2-}(aq)$',
      '$2\\text{Al}^{3+}(aq) + 3\\text{S}^{2-}(aq) + 12\\text{O}^{2-}(aq)$',
    ],
    correctIndex: 2,
    explanation: 'A soluble salt is split into its ions, and the subscripts become coefficients: two $\\text{Al}^{3+}$ and three sulfate ions. Polyatomic ions such as sulfate stay intact, and the ion charges come from the formula, not from swapping the subscripts.',
    partNumber: 2,
    partTitle: 'Complete Ionic Equations',
  },
  {
    id: 'nie-ent-2b',
    question: 'Which species is kept as a complete formula, not split into ions, in a complete ionic equation?',
    options: [
      '$\\text{HClO}_4(aq)$',
      '$\\text{Ba(OH)}_2(aq)$',
      '$(\\text{NH}_4)_2\\text{SO}_4(aq)$',
      '$\\text{HNO}_2(aq)$',
    ],
    correctIndex: 3,
    explanation: 'Nitrous acid is not one of the six strong acids, so it is a weak electrolyte and stays as intact molecules. Perchloric acid is a strong acid, barium hydroxide is a strong base, and ammonium sulfate is a soluble salt, so all three are written as ions.',
    partNumber: 2,
    partTitle: 'Complete Ionic Equations',
  },

  // Part 3: Net Ionic Equations
  {
    id: 'nie-ent-3a',
    question: 'Which pair of aqueous solutions, when mixed, produces no net ionic equation? (Barium sulfate is insoluble.)',
    options: [
      'KCl and $\\text{NH}_4\\text{NO}_3$',
      '$\\text{Na}_2\\text{S}$ and HCl',
      '$\\text{Ba(NO}_3)_2$ and $\\text{K}_2\\text{SO}_4$',
      'KOH and $\\text{HNO}_3$',
    ],
    correctIndex: 0,
    explanation: 'The new pairings for potassium chloride and ammonium nitrate are potassium nitrate and ammonium chloride, both always soluble, so every ion is a spectator. The other mixtures form hydrogen sulfide gas, a barium sulfate precipitate, or water.',
    partNumber: 3,
    partTitle: 'Net Ionic Equations',
  },
  {
    id: 'nie-ent-3b',
    question: 'For $\\text{Pb(NO}_3)_2(aq) + 2\\text{NaI}(aq) \\rightarrow \\text{PbI}_2(s) + 2\\text{NaNO}_3(aq)$, which ions are the spectators?',
    options: [
      '$\\text{Pb}^{2+}$ and $\\text{I}^-$',
      '$\\text{Na}^+$ and $\\text{NO}_3^-$',
      '$\\text{Na}^+$ and $\\text{I}^-$',
      '$\\text{Pb}^{2+}$ and $\\text{NO}_3^-$',
    ],
    correctIndex: 1,
    explanation: 'Sodium and nitrate ions appear unchanged on both sides of the complete ionic equation, so they cancel. Lead(II) and iodide ions combine into the solid, so they remain in the net ionic equation.',
    partNumber: 3,
    partTitle: 'Net Ionic Equations',
  },

  // Part 4: Precipitation Reactions
  {
    id: 'nie-ent-4a',
    question: 'A particle diagram shows 5 $\\text{Ba}^{2+}$ and 10 $\\text{Cl}^-$ ions mixed with 3 $\\text{SO}_4^{2-}$ and 6 $\\text{Na}^+$ ions. Barium sulfate is insoluble. Which ions remain dissolved after the reaction?',
    options: [
      '5 $\\text{Ba}^{2+}$, 10 $\\text{Cl}^-$, and 6 $\\text{Na}^+$',
      '2 $\\text{Ba}^{2+}$, 10 $\\text{Cl}^-$, and 6 $\\text{Na}^+$',
      '2 $\\text{SO}_4^{2-}$, 10 $\\text{Cl}^-$, and 6 $\\text{Na}^+$',
      '0 $\\text{Ba}^{2+}$, 10 $\\text{Cl}^-$, and 6 $\\text{Na}^+$',
    ],
    correctIndex: 1,
    explanation: 'Sulfate is the limiting ion: 3 sulfate ions take 3 barium ions into the solid, leaving 2 barium ions dissolved along with every chloride and sodium spectator. Leaving all 5 barium ions ignores the precipitate, and sulfate cannot remain because it runs out first.',
    partNumber: 4,
    partTitle: 'Precipitation Reactions',
  },
  {
    id: 'nie-ent-4b',
    question: 'Solutions of $\\text{Cu(NO}_3)_2$ and $\\text{Na}_3\\text{PO}_4$ are mixed. Copper(II) phosphate is insoluble. Which net ionic equation is correct?',
    options: [
      '$3\\text{Cu}^{2+}(aq) + 2\\text{PO}_4^{3-}(aq) \\rightarrow \\text{Cu}_3(\\text{PO}_4)_2(s)$',
      '$\\text{Cu}^{2+}(aq) + \\text{PO}_4^{3-}(aq) \\rightarrow \\text{CuPO}_4(s)$',
      '$2\\text{Cu}^{2+}(aq) + 3\\text{PO}_4^{3-}(aq) \\rightarrow \\text{Cu}_2(\\text{PO}_4)_3(s)$',
      '$\\text{Na}^+(aq) + \\text{NO}_3^-(aq) \\rightarrow \\text{NaNO}_3(s)$',
    ],
    correctIndex: 0,
    explanation: 'Three $\\text{Cu}^{2+}$ (+6) balance two phosphate ions (−6), so the solid is $\\text{Cu}_3(\\text{PO}_4)_2$. Sodium nitrate can never precipitate, and the other copper formulas leave a net charge.',
    partNumber: 4,
    partTitle: 'Precipitation Reactions',
  },

  // Part 5: Acid-Base Net Ionic Equations
  {
    id: 'nie-ent-5a',
    question: 'What is the net ionic equation for the reaction of hydrocyanic acid, HCN (a weak acid), with aqueous potassium hydroxide?',
    options: [
      '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
      '$\\text{HCN}(aq) + \\text{KOH}(aq) \\rightarrow \\text{KCN}(aq) + \\text{H}_2\\text{O}(l)$',
      '$\\text{H}^+(aq) + \\text{CN}^-(aq) + \\text{OH}^-(aq) \\rightarrow \\text{CN}^-(aq) + \\text{H}_2\\text{O}(l)$',
      '$\\text{HCN}(aq) + \\text{OH}^-(aq) \\rightarrow \\text{CN}^-(aq) + \\text{H}_2\\text{O}(l)$',
    ],
    correctIndex: 3,
    explanation: 'The weak acid stays molecular and gives its proton to hydroxide, while potassium is the only spectator. Writing $\\text{H}^+$ alone, or splitting HCN into $\\text{H}^+$ and $\\text{CN}^-$, treats it as a strong acid, and the full molecular equation keeps the spectator.',
    partNumber: 5,
    partTitle: 'Acid-Base Net Ionic Equations',
  },
  {
    id: 'nie-ent-5b',
    question: 'Which pair of aqueous reactants has $\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$ as its net ionic equation?',
    options: [
      'HF and NaOH',
      'HI and KOH',
      'HCl and $\\text{NH}_3$',
      '$\\text{HNO}_2$ and KOH',
    ],
    correctIndex: 1,
    explanation: 'Hydroiodic acid is a strong acid and potassium hydroxide is a strong base, so only $\\text{H}^+$ and $\\text{OH}^-$ react. HF and nitrous acid are weak acids that stay molecular, and ammonia is a weak base that accepts the proton directly.',
    partNumber: 5,
    partTitle: 'Acid-Base Net Ionic Equations',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'nie-ent-6a',
    question: 'What is the net ionic equation when aqueous sodium hydrogen carbonate is mixed with nitric acid?',
    options: [
      '$\\text{NaHCO}_3(aq) + \\text{H}^+(aq) \\rightarrow \\text{Na}^+(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
      '$\\text{CO}_3^{2-}(aq) + 2\\text{H}^+(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
      '$\\text{HCO}_3^-(aq) + \\text{H}^+(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
      '$\\text{Na}^+(aq) + \\text{NO}_3^-(aq) \\rightarrow \\text{NaNO}_3(s)$',
    ],
    correctIndex: 2,
    explanation: 'Hydrogen carbonate accepts one proton to form carbonic acid, which breaks into water and carbon dioxide gas; sodium and nitrate are spectators. Carbonate ion is not the species present, sodium hydrogen carbonate is a soluble salt that should be split, and sodium nitrate never precipitates.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'nie-ent-6b',
    question: 'Solutions of $\\text{CuSO}_4$ and $\\text{Ba(OH)}_2$ are mixed. Barium sulfate and copper(II) hydroxide are both insoluble. Which ions are spectators?',
    options: [
      'Only the barium and sulfate ions',
      'Only the copper(II) and hydroxide ions',
      'None, because both new pairings precipitate',
      'All four, because no reaction occurs',
    ],
    correctIndex: 2,
    explanation: 'Barium pairs with sulfate and copper(II) pairs with hydroxide, and both products are solids, so every ion takes part and none cancels. Barium and sulfate, or copper and hydroxide, are the ions that leave solution, not the spectators.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'nie-ent-7a',
    question: 'Equal volumes of 0.20 M acetic acid, $\\text{HC}_2\\text{H}_3\\text{O}_2$, and 0.20 M ammonia are mixed. What is the net ionic equation?',
    options: [
      '$\\text{HC}_2\\text{H}_3\\text{O}_2(aq) + \\text{NH}_3(aq) \\rightarrow \\text{C}_2\\text{H}_3\\text{O}_2^-(aq) + \\text{NH}_4^+(aq)$',
      '$\\text{H}^+(aq) + \\text{NH}_3(aq) \\rightarrow \\text{NH}_4^+(aq)$',
      '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
      '$\\text{HC}_2\\text{H}_3\\text{O}_2(aq) + \\text{OH}^-(aq) \\rightarrow \\text{C}_2\\text{H}_3\\text{O}_2^-(aq) + \\text{H}_2\\text{O}(l)$',
    ],
    correctIndex: 0,
    explanation: 'Both the acid and the base are weak, so both are written as intact molecules and the proton moves directly from acetic acid to ammonia. Writing $\\text{H}^+$ or $\\text{OH}^-$ treats one of them as strong.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'nie-ent-7b',
    question: 'Limestone chips, $\\text{CaCO}_3(s)$, are dropped into hydrochloric acid and fizz. A student writes the net ionic equation as $2\\text{H}^+(aq) + \\text{CO}_3^{2-}(aq) \\rightarrow \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$. What is the error?',
    options: [
      'The strong acid should appear as intact HCl',
      'The chloride ions should appear on both sides',
      'The carbon dioxide should be labeled as aqueous',
      'The undissolved reactant was split into separate ions',
    ],
    correctIndex: 3,
    explanation: 'A solid is never split into ions, so the reactant must be written $\\text{CaCO}_3(s)$, giving $\\text{CaCO}_3(s) + 2\\text{H}^+ \\rightarrow \\text{Ca}^{2+} + \\text{H}_2\\text{O} + \\text{CO}_2$. Hydrochloric acid is strong, chloride is a spectator, and the fizzing shows the gas escaping.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the net-ionic-equations topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Molecular vs. Ionic Equations' },
    { partNumber: 2, partTitle: 'Complete Ionic Equations' },
    { partNumber: 3, partTitle: 'Net Ionic Equations' },
    { partNumber: 4, partTitle: 'Precipitation Reactions' },
    { partNumber: 5, partTitle: 'Acid-Base Net Ionic Equations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
