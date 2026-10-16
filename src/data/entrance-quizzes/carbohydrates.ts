/**
 * Entrance Quiz — Carbohydrates (AP Biology)
 *
 * 8 questions covering all 4 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Introduction to Carbohydrates (monosaccharides, dehydration synthesis)
 *  2 — Structure: Mono → Poly (polysaccharide shape from monomer arrangement)
 *  3 — Function & Biological Significance (enzyme specificity, cell-surface sugars)
 *  4 — AP Review (structure-function synthesis, lactase, branching data)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to Carbohydrates
  {
    id: 'bcho-ent-1a',
    question:
      'A molecule isolated from a cell has the formula $C_5H_{10}O_5$ and cannot be broken into smaller sugars by hydrolysis. How is it best classified?',
    options: [
      'A pentose that serves as a sugar monomer',
      'A hexose that serves as a sugar monomer',
      'A disaccharide made of two linked sugar units',
      'A fatty acid, as it contains only C, H and O',
    ],
    correctIndex: 0,
    explanation:
      'The formula fits $(CH_2O)_n$ with five carbons, and a sugar that cannot be hydrolyzed further is a monosaccharide, so this is a pentose. A hexose has six carbons, and a disaccharide could be split into two sugars.',
    partNumber: 1,
    partTitle: 'Introduction to Carbohydrates',
  },
  {
    id: 'bcho-ent-1b',
    question:
      'Two hexose molecules, each with the formula $C_6H_{12}O_6$, are joined by dehydration synthesis. What is the formula of the disaccharide formed?',
    options: [
      '$C_{12}H_{24}O_{12}$',
      '$C_{12}H_{20}O_{10}$',
      '$C_{12}H_{22}O_{12}$',
      '$C_{12}H_{22}O_{11}$',
    ],
    correctIndex: 3,
    explanation:
      'Dehydration synthesis removes one $H_2O$ as the glycosidic bond forms: $C_{12}H_{24}O_{12} - H_2O = C_{12}H_{22}O_{11}$. Keeping all atoms forgets the water, and removing two waters or only two hydrogens does not match one bond.',
    partNumber: 1,
    partTitle: 'Introduction to Carbohydrates',
  },

  // Part 2: Structure: Mono → Poly
  {
    id: 'bcho-ent-2a',
    question:
      'A student argues that because starch and cellulose both break down into nothing but glucose, they must have the same shape and properties. Which correction is accurate?',
    options: [
      'Cellulose is built from a nitrogen-containing glucose, which makes it stiff',
      'Starch contains fructose as well as glucose, which makes its chains coil',
      'The glucose units are connected in a different arrangement, changing the shape',
      'Cellulose chains are far longer, and length alone sets the polymer shape',
    ],
    correctIndex: 2,
    explanation:
      'Starch and cellulose share the same monomer, but the glucose units are linked differently, so starch coils and branches while cellulose forms straight chains that bundle into fibers. The nitrogen-containing sugar describes chitin, and starch yields only glucose.',
    partNumber: 2,
    partTitle: 'Structure: Mono → Poly',
  },
  {
    id: 'bcho-ent-2b',
    question:
      'A glucose polymer from a newly discovered organism forms long, straight, unbranched chains that lie side by side in tight bundles. Which property is it most likely to have?',
    options: [
      'It frees glucose quickly from its many branch ends',
      'It dissolves easily and is used for rapid energy',
      'It stores hereditary information in its sequence',
      'It makes strong fibers that are hard to digest',
    ],
    correctIndex: 3,
    explanation:
      'Straight, unbranched chains that pack side by side form rigid fibers, the pattern of structural polysaccharides such as cellulose, and they are hard to break down. Rapid glucose release comes from coiled, branched storage polymers.',
    partNumber: 2,
    partTitle: 'Structure: Mono → Poly',
  },

  // Part 3: Function & Biological Significance
  {
    id: 'bcho-ent-3a',
    question:
      'In a developing embryo, cells of the same tissue normally cluster together. After an enzyme strips the short sugar chains from the outer surface of the cells, the cells no longer sort into groups. What role do the sugar chains most likely play?',
    options: [
      'They supply the glucose that fuels the cells as they move',
      'They serve as identity tags that let cells recognize one another',
      'They form a rigid wall that holds the tissue cells in place',
      'They carry ions across the membrane to signal nearby cells',
    ],
    correctIndex: 1,
    explanation:
      'Glycoproteins and glycolipids on the outer surface work like identity tags in cell-cell recognition, so removing them stops cells from recognizing their own kind. These short chains are not a fuel supply or a wall, and they do not transport ions.',
    partNumber: 3,
    partTitle: 'Function & Biological Significance',
  },
  {
    id: 'bcho-ent-3b',
    question:
      'Cows get much of their energy from cellulose in grass, while humans eating the same grass get almost none. Microbes living in the cow\'s gut are required for this. Which explanation is best supported?',
    options: [
      'Gut bacteria make enzymes whose active sites fit cellulose bonds',
      'The cow\'s stomach acid is strong enough to break any sugar bond',
      'Chewing grass for a long time converts its cellulose into starch',
      'Cellulose is changed into protein before it reaches the cow\'s gut',
    ],
    correctIndex: 0,
    explanation:
      'Enzymes are specific to the shape of their substrate. The gut microbes make enzymes that fit the linkages in cellulose and release glucose; human enzymes fit only the linkages in starch. Chewing does not change how glucose units are connected.',
    partNumber: 3,
    partTitle: 'Function & Biological Significance',
  },

  // Part 4: AP Review
  {
    id: 'bcho-ent-4a',
    question:
      'A person who lacks a working lactase enzyme drinks milk and develops digestive discomfort. Which explanation is best supported?',
    options: [
      'Sugar from milk is absorbed so fast that blood glucose spikes',
      'Their cells cannot make glucose at all and run short of fuel',
      'Milk sugar is not hydrolyzed, so it cannot be absorbed',
      'Lactase is a hormone, so the sugar is stored with no signal',
    ],
    correctIndex: 2,
    explanation:
      'Lactase is the enzyme that hydrolyzes the disaccharide in milk into monosaccharides that can be absorbed. Without it, the sugar stays in the gut, where bacteria ferment it, producing gas and drawing in water, which causes the discomfort. The problem is a missing enzyme, not a shortage of sugar or a hormone.',
    partNumber: 4,
    partTitle: 'AP Review',
  },
  {
    id: 'bcho-ent-4b',
    question:
      'Equal masses of a highly branched glucose polymer and an unbranched glucose polymer are mixed with the same amount of a digestive enzyme that removes glucose from chain ends. Glucose appears much faster from the branched polymer. Which explanation is best supported?',
    options: [
      'The branched polymer holds more glucose units per gram',
      'The branched polymer offers the enzyme more ends to work on',
      'The unbranched polymer has bonds no enzyme can break',
      'The branched polymer is built from a different sugar',
    ],
    correctIndex: 1,
    explanation:
      'Every branch adds a chain end, and an enzyme that works from ends can attack many of them at once, so branching speeds glucose release. Both polymers are made of glucose, and equal masses contain about the same number of units.',
    partNumber: 4,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the carbohydrates topic.
 * Returns all 8 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Carbohydrates' },
    { partNumber: 2, partTitle: 'Structure: Mono → Poly' },
    { partNumber: 3, partTitle: 'Function & Biological Significance' },
    { partNumber: 4, partTitle: 'AP Review' },
  ]
}
