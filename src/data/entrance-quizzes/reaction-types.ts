/**
 * Entrance Quiz — Reaction Types
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — The Three AP Reaction Types (classify by what is transferred)
 *  2 — Precipitation & Acid–Base Reactions (predicting the solid; what actually reacts)
 *  3 — Combustion Reactions (balancing; combustion as redox)
 *  4 — Balancing Equations (coefficients; polyatomic-ion shortcut)
 *  5 — Predicting Products (ion charges; metal + metal ion)
 *  6 — Problem-Solving Workshop (classify, predict, write the net reaction)
 *  7 — Synthesis & AP Review (electron counting; justifying a classification)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: The Three AP Reaction Types
  {
    id: 'rt-ent-1a',
    question: 'Which reaction is a redox reaction?',
    options: [
      '$\\text{H}_2\\text{SO}_4 + 2\\text{KOH} \\rightarrow \\text{K}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$',
      '$\\text{Ca}^{2+} + \\text{CO}_3^{2-} \\rightarrow \\text{CaCO}_3(s)$',
      '$2\\text{Fe}^{3+} + \\text{Sn}^{2+} \\rightarrow 2\\text{Fe}^{2+} + \\text{Sn}^{4+}$',
      '$\\text{HCO}_3^- + \\text{H}^+ \\rightarrow \\text{H}_2\\text{O} + \\text{CO}_2$',
    ],
    correctIndex: 2,
    explanation: 'Iron drops from +3 to +2 while tin rises from +2 to +4, so electrons move from tin to iron even though no free element appears. The neutralization and the hydrogen carbonate reaction only move protons, and calcium carbonate forming is precipitation.',
    partNumber: 1,
    partTitle: 'The Three AP Reaction Types',
  },
  {
    id: 'rt-ent-1b',
    question: 'How is the reaction $\\text{H}_2\\text{S}(aq) + 2\\text{OH}^-(aq) \\rightarrow \\text{S}^{2-}(aq) + 2\\text{H}_2\\text{O}(l)$ classified?',
    options: [
      'Redox, because sulfur ends up as a negatively charged ion',
      'Acid–base, because protons transfer to hydroxide ions',
      'Precipitation, because sulfide ions are pulled out of solution',
      'Redox, because hydroxide ions are converted into water',
    ],
    correctIndex: 1,
    explanation: 'Hydrogen sulfide gives two protons to hydroxide ions, and sulfur stays at −2 throughout, so no electrons move. Ending as an anion or forming water does not make a reaction redox, and no solid forms.',
    partNumber: 1,
    partTitle: 'The Three AP Reaction Types',
  },

  // Part 2: Precipitation & Acid–Base Reactions
  {
    id: 'rt-ent-2a',
    question: 'Solutions of $\\text{Na}_3\\text{PO}_4$ and $\\text{Ca(NO}_3)_2$ are mixed. Calcium phosphate is insoluble. What is the formula of the precipitate?',
    options: [
      '$\\text{CaPO}_4$',
      '$\\text{Ca}_2(\\text{PO}_4)_3$',
      '$\\text{NaNO}_3$',
      '$\\text{Ca}_3(\\text{PO}_4)_2$',
    ],
    correctIndex: 3,
    explanation: 'Three $\\text{Ca}^{2+}$ ions (+6) balance two $\\text{PO}_4^{3-}$ ions (−6), giving $\\text{Ca}_3(\\text{PO}_4)_2$. Sodium nitrate cannot precipitate because every sodium and nitrate salt is soluble, and the other two formulas do not balance the charges.',
    partNumber: 2,
    partTitle: 'Precipitation & Acid–Base Reactions',
  },
  {
    id: 'rt-ent-2b',
    question: 'Nitric acid is added to aqueous methylamine, $\\text{CH}_3\\text{NH}_2$, a weak base. Which equation shows the species that actually react?',
    options: [
      '$\\text{H}_3\\text{O}^+ + \\text{CH}_3\\text{NH}_2 \\rightarrow \\text{CH}_3\\text{NH}_3^+ + \\text{H}_2\\text{O}$',
      '$\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$',
      '$\\text{NO}_3^- + \\text{CH}_3\\text{NH}_2 \\rightarrow \\text{CH}_3\\text{NH}^- + \\text{HNO}_3$',
      '$\\text{CH}_3\\text{NH}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{CH}_3\\text{NH}_3^+ + \\text{OH}^-$',
    ],
    correctIndex: 0,
    explanation: 'The strong acid is fully ionized, so hydronium does the reacting, while the weak base reacts as an intact molecule and accepts the proton. There is no hydroxide to neutralize, nitrate does not take a proton from the base, and the base reacting with water ignores the acid that was added.',
    partNumber: 2,
    partTitle: 'Precipitation & Acid–Base Reactions',
  },

  // Part 3: Combustion Reactions
  {
    id: 'rt-ent-3a',
    question: 'Propanol, $\\text{C}_3\\text{H}_7\\text{OH}$, burns completely in oxygen. In the equation balanced with the smallest whole numbers, what is the coefficient of $\\text{O}_2$?',
    options: ['10', '9', '18', '4.5'],
    correctIndex: 1,
    explanation: '$2\\text{C}_3\\text{H}_7\\text{OH} + 9\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 8\\text{H}_2\\text{O}$: the products hold 20 oxygen atoms, the fuel supplies 2, and the remaining 18 atoms come from nine $\\text{O}_2$. A 10 forgets the oxygen already in the alcohol, 18 counts atoms instead of molecules, and 4.5 leaves a fraction uncleared.',
    partNumber: 3,
    partTitle: 'Combustion Reactions',
  },
  {
    id: 'rt-ent-3b',
    question: 'In the combustion $2\\text{CH}_3\\text{OH} + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 4\\text{H}_2\\text{O}$, what happens to the oxidation number of carbon?',
    options: [
      'It rises from −2 to +4',
      'It falls from +4 to −2',
      'It rises from −4 to +4',
      'It stays at +4 throughout',
    ],
    correctIndex: 0,
    explanation: 'In methanol, four hydrogens (+4) and one oxygen (−2) leave carbon at −2, and in carbon dioxide carbon is +4, so carbon loses electrons and is oxidized. The value −4 belongs to carbon in methane, not methanol.',
    partNumber: 3,
    partTitle: 'Combustion Reactions',
  },

  // Part 4: Balancing Equations
  {
    id: 'rt-ent-4a',
    question: 'When $\\text{Fe}_3\\text{O}_4 + \\text{H}_2 \\rightarrow \\text{Fe} + \\text{H}_2\\text{O}$ is balanced with the smallest whole numbers, what is the coefficient of $\\text{H}_2$?',
    options: ['2', '3', '4', '8'],
    correctIndex: 2,
    explanation: '$\\text{Fe}_3\\text{O}_4 + 4\\text{H}_2 \\rightarrow 3\\text{Fe} + 4\\text{H}_2\\text{O}$: four oxygen atoms need four water molecules, which need four $\\text{H}_2$. The 3 is the iron coefficient, and 8 counts hydrogen atoms rather than molecules.',
    partNumber: 4,
    partTitle: 'Balancing Equations',
  },
  {
    id: 'rt-ent-4b',
    question: 'Balance $\\_\\,\\text{Al}_2(\\text{SO}_4)_3 + \\_\\,\\text{Ca(OH)}_2 \\rightarrow \\_\\,\\text{Al(OH)}_3 + \\_\\,\\text{CaSO}_4$. Which coefficients, in order, are correct?',
    options: ['1, 3, 2, 3', '1, 3, 1, 3', '2, 3, 2, 3', '1, 6, 2, 3'],
    correctIndex: 0,
    explanation: 'Treat sulfate and hydroxide as units: three sulfates need three $\\text{CaSO}_4$ and so three $\\text{Ca(OH)}_2$, whose six hydroxides make two $\\text{Al(OH)}_3$, matching the two aluminum atoms. Keeping one $\\text{Al(OH)}_3$ leaves aluminum unbalanced, and six calcium hydroxides would add extra calcium.',
    partNumber: 4,
    partTitle: 'Balancing Equations',
  },

  // Part 5: Predicting Products
  {
    id: 'rt-ent-5a',
    question: 'Strontium metal reacts with nitrogen gas. Which balanced equation shows the product correctly?',
    options: [
      '$\\text{Sr} + \\text{N}_2 \\rightarrow \\text{SrN}_2$',
      '$2\\text{Sr} + \\text{N}_2 \\rightarrow 2\\text{SrN}$',
      '$3\\text{Sr} + \\text{N}_2 \\rightarrow \\text{Sr}_3\\text{N}_2$',
      '$2\\text{Sr} + 3\\text{N}_2 \\rightarrow 2\\text{SrN}_3$',
    ],
    correctIndex: 2,
    explanation: 'Strontium forms $\\text{Sr}^{2+}$ and nitrogen forms $\\text{N}^{3-}$, so three strontium ions (+6) balance two nitride ions (−6) in $\\text{Sr}_3\\text{N}_2$. The other equations are balanced in atoms but use formulas whose charges do not cancel.',
    partNumber: 5,
    partTitle: 'Predicting Products',
  },
  {
    id: 'rt-ent-5b',
    question: 'A chromium strip is placed in $\\text{Pb(NO}_3)_2$ solution. Lead metal deposits on the strip and chromium dissolves as $\\text{Cr}^{3+}$. Which balanced net ionic equation is correct?',
    options: [
      '$\\text{Cr} + \\text{Pb}^{2+} \\rightarrow \\text{Cr}^{3+} + \\text{Pb}$',
      '$3\\text{Cr} + 2\\text{Pb}^{2+} \\rightarrow 3\\text{Cr}^{3+} + 2\\text{Pb}$',
      '$2\\text{Cr}^{3+} + 3\\text{Pb} \\rightarrow 2\\text{Cr} + 3\\text{Pb}^{2+}$',
      '$2\\text{Cr} + 3\\text{Pb}^{2+} \\rightarrow 2\\text{Cr}^{3+} + 3\\text{Pb}$',
    ],
    correctIndex: 3,
    explanation: 'Each chromium atom loses 3 electrons and each lead(II) ion gains 2, so two chromium atoms and three lead ions exchange six electrons, and the charge is +6 on both sides. The one-to-one equation leaves charge unbalanced, and the reversed equation has lead dissolving instead of depositing.',
    partNumber: 5,
    partTitle: 'Predicting Products',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'rt-ent-6a',
    question: 'A piece of calcium metal is dropped into water. Bubbles form and the solution becomes basic. Which description of the reaction is correct?',
    options: [
      'Calcium is oxidized, and hydrogen gas forms',
      'Calcium is reduced, and hydrogen gas forms',
      'Calcium is oxidized, and oxygen gas forms',
      'Calcium is a proton acceptor, so no electrons move',
    ],
    correctIndex: 0,
    explanation: '$\\text{Ca} + 2\\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2 + \\text{H}_2$: calcium goes from 0 to +2 and hydrogen from +1 to 0, so calcium is oxidized and the gas is hydrogen. Producing hydroxide does not make it acid–base, and oxygen stays at −2, so no oxygen gas forms.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'rt-ent-6b',
    question: 'Solutions of $\\text{K}_2\\text{CrO}_4$ and $\\text{AgNO}_3$ are mixed. Silver chromate is insoluble. Which net ionic equation is correct?',
    options: [
      '$\\text{Ag}^+ + \\text{CrO}_4^{2-} \\rightarrow \\text{AgCrO}_4(s)$',
      '$\\text{K}^+ + \\text{NO}_3^- \\rightarrow \\text{KNO}_3(s)$',
      '$2\\text{Ag}^+ + \\text{CrO}_4^{2-} \\rightarrow \\text{Ag}_2\\text{CrO}_4(s)$',
      '$\\text{Ag}^{2+} + \\text{CrO}_4^{2-} \\rightarrow \\text{AgCrO}_4(s)$',
    ],
    correctIndex: 2,
    explanation: 'Two $\\text{Ag}^+$ ions balance one chromate ion, so the solid is $\\text{Ag}_2\\text{CrO}_4$ and potassium and nitrate are spectators. Potassium nitrate never precipitates, and silver forms a +1 ion, not +2.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'rt-ent-7a',
    question: 'For the balanced reaction $2\\text{Fe}^{3+}(aq) + \\text{Zn}(s) \\rightarrow 2\\text{Fe}^{2+}(aq) + \\text{Zn}^{2+}(aq)$, which statement is correct?',
    options: [
      'Zinc is reduced, and two electrons are transferred in total',
      'Zinc is oxidized, and four electrons are transferred in total',
      'Iron is oxidized, and one electron is transferred in total',
      'Zinc is oxidized, and two electrons are transferred in total',
    ],
    correctIndex: 3,
    explanation: 'Zinc goes from 0 to +2, losing two electrons, and each of the two iron(III) ions gains one, so two electrons move in total. Counting the iron change and the zinc change separately gives four, and iron gains electrons, so it is reduced.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'rt-ent-7b',
    question: 'Solid magnesium hydroxide dissolves in hydrochloric acid: $\\text{Mg(OH)}_2(s) + 2\\text{H}^+(aq) \\rightarrow \\text{Mg}^{2+}(aq) + 2\\text{H}_2\\text{O}(l)$. Which statement best classifies this reaction?',
    options: [
      'Redox, because magnesium changes from a solid to an ion',
      'Acid–base, because hydroxide ions accept the protons',
      'Precipitation, because an ionic solid takes part in it',
      'Redox, because hydrogen ions are converted into water',
    ],
    correctIndex: 1,
    explanation: 'Hydroxide ions in the solid accept protons from the acid to form water, and magnesium stays +2, so it is acid–base. A change of state is not electron transfer, and a solid dissolving is the reverse of precipitation.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

/**
 * Generate an entrance quiz for the reaction-types topic.
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
    { partNumber: 1, partTitle: 'The Three AP Reaction Types' },
    { partNumber: 2, partTitle: 'Precipitation & Acid–Base Reactions' },
    { partNumber: 3, partTitle: 'Combustion Reactions' },
    { partNumber: 4, partTitle: 'Balancing Equations' },
    { partNumber: 5, partTitle: 'Predicting Products' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
