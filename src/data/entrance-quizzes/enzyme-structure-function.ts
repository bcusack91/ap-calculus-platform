/**
 * Entrance Quiz — Enzyme Structure & Function (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Enzyme Basics (activation energy, ΔG unchanged, specificity)
 *  2 — Reaction Rates & Saturation (initial rate from data, plateau)
 *  3 — Factors Affecting Enzymes (temperature, pH mechanism)
 *  4 — Inhibition (allosteric regulation, feedback inhibition)
 *  5 — Cofactors & Coenzymes (cofactor data, experimental variables)
 *  6 — Problem-Solving Workshop (classifying inhibition, denaturation vs inhibition)
 *  7 — AP Review (raising the plateau, reversible end-product control)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Enzyme Basics
  {
    id: 'benz-ent-1a',
    question:
      'Without a catalyst, a reaction has an activation energy of 80 kJ/mol and a ΔG of −30 kJ/mol. When its enzyme is added, which pair of values is most likely?',
    options: [
      'Activation energy 50 kJ/mol; ΔG −30 kJ/mol',
      'Activation energy 50 kJ/mol; ΔG −60 kJ/mol',
      'Activation energy 110 kJ/mol; ΔG −30 kJ/mol',
      'Activation energy 80 kJ/mol; ΔG −10 kJ/mol',
    ],
    correctIndex: 0,
    explanation:
      'An enzyme lowers the activation energy but does not change ΔG, the overall energy difference between reactants and products. Only the option with a lower barrier and the same ΔG fits.',
    partNumber: 1,
    partTitle: 'Enzyme Basics',
  },
  {
    id: 'benz-ent-1b',
    question:
      'An enzyme rapidly breaks down sugar P. Sugar Q contains exactly the same atoms as sugar P but has a different three-dimensional shape, and the enzyme does not act on it at all. Which explanation is best supported?',
    options: [
      'The enzyme was used up while breaking down sugar P',
      'Its binding pocket matches only the geometry of sugar P',
      'Sugar Q requires more energy than an enzyme can supply',
      'Sugar Q has a ΔG that no enzyme is able to change',
    ],
    correctIndex: 1,
    explanation:
      'Enzymes are specific because the active site is a pocket complementary to the substrate\'s shape, so a molecule with the same atoms in a different arrangement may not bind. Enzymes are not used up, do not supply energy, and never change ΔG for any reaction.',
    partNumber: 1,
    partTitle: 'Enzyme Basics',
  },

  // Part 2: Reaction Rates & Saturation
  {
    id: 'benz-ent-2a',
    question:
      'The absorbance of a colored product is recorded during an enzyme assay: 0.00 at 0 s, 0.24 at 30 s, 0.45 at 60 s and 0.60 at 90 s. What is the initial rate of the reaction?',
    options: [
      '0.0067 absorbance units per second',
      '0.0075 absorbance units per second',
      '0.008 absorbance units per second',
      '0.24 absorbance units per second',
    ],
    correctIndex: 2,
    explanation:
      'The initial rate is the slope at the start: $0.24 \\div 30 \\text{ s} = 0.008$ per second. Averaging over 60 s or 90 s includes the later, slower part of the curve, and 0.24 is the change without dividing by time.',
    partNumber: 2,
    partTitle: 'Reaction Rates & Saturation',
  },
  {
    id: 'benz-ent-2b',
    question:
      'With a fixed amount of enzyme, the rate rises by 8 units when substrate goes from 1 mM to 2 mM, but by only 1 unit (from 33 to 34) when substrate goes from 8 mM to 16 mM. What rate is predicted at 32 mM substrate?',
    options: [
      'About 68, since doubling substrate doubles the rate',
      'About 50, since the rate keeps rising at a steady pace',
      'Near 0, since excess substrate denatures the enzyme',
      'About 35, since nearly every active site is full',
    ],
    correctIndex: 3,
    explanation:
      'The tiny increase from 8 to 16 mM shows the enzyme is close to saturation: almost every active site is already occupied, so more substrate barely raises the rate. Only adding more enzyme would raise it substantially.',
    partNumber: 2,
    partTitle: 'Reaction Rates & Saturation',
  },

  // Part 3: Factors Affecting Enzymes
  {
    id: 'benz-ent-3a',
    question:
      'Samples of a human enzyme are held for 5 minutes at 0°C or at 70°C and then returned to 37°C. The chilled sample regains full activity, but the heated sample remains inactive. Which explanation is best supported?',
    options: [
      'Cold slowed molecular motion, but heat unfolded the enzyme',
      'Cold unfolded the enzyme, but it refolded faster than at 70°C',
      'Heat used up all the substrate, while cold kept it unchanged',
      'Both unfolded it, but only unfolding in the cold is permanent',
    ],
    correctIndex: 0,
    explanation:
      'Low temperature slows collisions without damaging the enzyme, so activity returns on warming. High temperature breaks the bonds holding the 3D shape (denaturation), and this enzyme did not recover.',
    partNumber: 3,
    partTitle: 'Factors Affecting Enzymes',
  },
  {
    id: 'benz-ent-3b',
    question:
      'An enzyme\'s active site contains a negatively charged R group that attracts a positively charged substrate. When the pH is lowered from 7 to 4, the enzyme loses most of its activity. Which explanation is best supported?',
    options: [
      'Added $H^+$ ions break the peptide bonds that form the active site',
      'Added $H^+$ ions neutralize the side chain, so substrate no longer binds',
      'The lower pH raises the temperature of the solution above the optimum',
      'Added $H^+$ ions bind the substrate and turn it into product too early',
    ],
    correctIndex: 1,
    explanation:
      'Changing pH changes how many $H^+$ ions are bound to charged R groups, which disrupts the ionic and hydrogen bonds an enzyme relies on. If the negative R group picks up $H^+$, it loses its charge and stops attracting the substrate. Peptide bonds are not broken by this change.',
    partNumber: 3,
    partTitle: 'Factors Affecting Enzymes',
  },

  // Part 4: Inhibition
  {
    id: 'benz-ent-4a',
    question:
      'A small molecule binds to an enzyme at a site away from the active site, and the enzyme\'s reaction rate increases. Which explanation is best supported?',
    options: [
      'It holds the enzyme in its working shape',
      'It competes with the substrate for the enzyme',
      'It supplies the energy that drives the reaction',
      'It is converted into product along with the substrate',
    ],
    correctIndex: 0,
    explanation:
      'A molecule that binds an allosteric site and raises activity is an allosteric activator: it stabilizes the conformation in which the active site works. It does not compete at the active site, provide energy or become product.',
    partNumber: 4,
    partTitle: 'Inhibition',
  },
  {
    id: 'benz-ent-4b',
    question:
      'In the pathway P → Q → R → S, enzymes 1, 2 and 3 catalyze the three steps in order, and S inhibits enzyme 1. A mutant cell makes an inactive enzyme 3. Which change is expected?',
    options: [
      'R falls to zero, since S keeps enzyme 1 switched off',
      'R stays normal, since enzyme 1 does not respond to S',
      'Q falls to zero, since R now inhibits enzyme 2',
      'R builds up, since no S forms to shut off enzyme 1',
    ],
    correctIndex: 3,
    explanation:
      'Without enzyme 3, R is not converted to S, and with no S there is no feedback inhibition of enzyme 1, so the pathway keeps running and R accumulates.',
    partNumber: 4,
    partTitle: 'Inhibition',
  },

  // Part 5: Cofactors & Coenzymes
  {
    id: 'benz-ent-5a',
    question:
      'Reaction rates in three tubes: enzyme + substrate, 0.5 μmol/min; enzyme + substrate + $Mn^{2+}$, 6.0 μmol/min; substrate + $Mn^{2+}$ with no enzyme, 0.0 μmol/min. Which conclusion is best supported?',
    options: [
      '$Mn^{2+}$ raises the rate 12-fold and acts as a cofactor for the enzyme',
      '$Mn^{2+}$ raises the rate 12-fold and catalyzes the reaction on its own',
      '$Mn^{2+}$ raises the rate 5.5-fold and acts as a cofactor for the enzyme',
      '$Mn^{2+}$ raises the rate 6-fold and is the substrate the enzyme acts on',
    ],
    correctIndex: 0,
    explanation:
      '$6.0 \\div 0.5 = 12$, so the ion raises the rate 12-fold, and the no-enzyme tube makes no product, so the ion does not catalyze the reaction by itself. It is a cofactor the enzyme needs for full activity. 5.5 is the difference, not the factor.',
    partNumber: 5,
    partTitle: 'Cofactors & Coenzymes',
  },
  {
    id: 'benz-ent-5b',
    question:
      'A student runs an enzyme reaction with 0, 1, 2 or 4 mM $Ca^{2+}$ to test whether calcium affects the reaction rate. Which statement correctly identifies the variables?',
    options: [
      '$Ca^{2+}$ is the dependent variable, and the rate is held constant',
      'Product formed per minute is the dependent variable, and pH is held constant',
      'Temperature is the dependent variable, and $Ca^{2+}$ is held constant',
      'pH is the dependent variable, and $Ca^{2+}$ is held constant',
    ],
    correctIndex: 1,
    explanation:
      'The student changes the $Ca^{2+}$ concentration (independent variable) and measures product formed per minute (dependent variable), while holding everything else, such as pH, temperature and enzyme amount, constant.',
    partNumber: 5,
    partTitle: 'Cofactors & Coenzymes',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'benz-ent-6a',
    question:
      'A drug cuts an enzyme\'s rate by the same fraction at low and at very high substrate. Even after the drug is washed away, the enzyme stays inactive. How is the drug best described?',
    options: [
      'A competitive inhibitor that resembles the substrate',
      'An allosteric activator that stabilizes the active form',
      'A cofactor that the enzyme needs for its full activity',
      'An irreversible inhibitor that permanently alters the enzyme',
    ],
    correctIndex: 3,
    explanation:
      'Extra substrate does not relieve the inhibition, so it is not competitive, and activity does not return after the drug is removed, so the enzyme was permanently altered. An activator or cofactor would raise activity, not lower it.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'benz-ent-6b',
    question:
      'A student claims that overheating an enzyme is just another kind of competitive inhibition, since both lower the rate. Which observation would best show the student is wrong?',
    options: [
      'Both lower the rate more at low substrate than they do at high substrate',
      'Excess substrate undoes the inhibitor\'s effect but not the heat damage',
      'Overheating lowers the rate, while the inhibitor raises the plateau rate',
      'The inhibitor and overheating both change the enzyme\'s amino acid order',
    ],
    correctIndex: 1,
    explanation:
      'A competitive inhibitor can be outcompeted by adding substrate, but a heat-denatured enzyme has lost its shape and no amount of substrate restores it. Neither process changes the amino acid sequence, and an inhibitor does not raise the plateau.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'benz-ent-7a',
    question:
      'A rate-versus-substrate curve for an enzyme levels off at a maximum rate. Which change would raise the level of this plateau?',
    options: [
      'Adding substrate beyond the enzyme\'s saturation point',
      'Adding a competitive inhibitor to the mix',
      'Increasing the amount of enzyme present',
      'Cooling the reaction from 37°C to 20°C',
    ],
    correctIndex: 2,
    explanation:
      'At the plateau every active site is occupied, so only more active sites (more enzyme) can raise the maximum rate. More substrate cannot help a saturated enzyme, a competitive inhibitor does not raise the plateau, and cooling slows the reaction.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'benz-ent-7b',
    question:
      'A bacterium must stop making amino acid X quickly when X is plentiful and resume as soon as X is used up. Which mechanism best fits this need?',
    options: [
      'X binds permanently to the active site of the pathway\'s last enzyme',
      'X denatures every enzyme in the pathway at high levels',
      'X binds reversibly to an allosteric site on the first enzyme',
      'X acts as a cofactor that speeds up the first enzyme of the pathway',
    ],
    correctIndex: 2,
    explanation:
      'Feedback inhibition through reversible binding of the end product to an allosteric site on the first enzyme shuts the pathway when X is high and releases it when X falls. Permanent binding or denaturation could not be reversed, and a cofactor would increase production.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the enzyme-structure-function topic.
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
    { partNumber: 1, partTitle: 'Enzyme Basics' },
    { partNumber: 2, partTitle: 'Reaction Rates & Saturation' },
    { partNumber: 3, partTitle: 'Factors Affecting Enzymes' },
    { partNumber: 4, partTitle: 'Inhibition' },
    { partNumber: 5, partTitle: 'Cofactors & Coenzymes' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
