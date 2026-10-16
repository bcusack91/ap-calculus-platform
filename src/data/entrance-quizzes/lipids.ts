/**
 * Entrance Quiz — Lipids (AP Biology)
 *
 * 8 questions covering all 4 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Introduction to Lipids (hydrophobic family, saturated vs unsaturated packing)
 *  2 — Structure: TGs, Phospholipids, Steroids (structures, energy per gram)
 *  3 — Function & Membranes (waterproofing, cholesterol as fluidity buffer)
 *  4 — AP Review (membrane building, saturation and temperature)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to Lipids
  {
    id: 'blip-ent-1a',
    question:
      'Two fatty acids have the same number of carbons. Fatty acid A melts at 70°C, and fatty acid B melts at 13°C. Which statement best describes fatty acid B?',
    options: [
      'It carries extra hydrogen atoms that let its chains slide past',
      'It has a charged head that keeps the molecules dissolved and apart',
      'It has C=C double bonds that kink its chain so it cannot pack tightly',
      'It is a polymer of short fatty acids that are loosely linked together',
    ],
    correctIndex: 2,
    explanation:
      'A low melting point means the chains pack loosely. C=C double bonds put kinks in unsaturated chains, so they cannot line up tightly like straight saturated chains. Extra hydrogens describe a saturated chain, which packs more tightly, and fatty acids are not polymers.',
    partNumber: 1,
    partTitle: 'Introduction to Lipids',
  },
  {
    id: 'blip-ent-1b',
    question:
      'A newly isolated molecule does not dissolve in water, has four fused carbon rings, and is not built from repeating subunits. In which group of biomolecules does it belong?',
    options: [
      'A lipid, a class defined by being hydrophobic',
      'A carbohydrate, since sugars often form rings',
      'A protein, since its chain folds into ring shapes',
      'A nucleic acid, since its bases contain rings',
    ],
    correctIndex: 0,
    explanation:
      'Four fused rings are the structure of a steroid, and lipids are grouped by being hydrophobic rather than by a shared monomer. Carbohydrates, proteins and nucleic acids are polymers built from repeating subunits.',
    partNumber: 1,
    partTitle: 'Introduction to Lipids',
  },

  // Part 2: Structure: TGs, Phospholipids, Steroids
  {
    id: 'blip-ent-2a',
    question:
      'A migrating bird needs about 900 kcal of stored energy for a long flight. Using 9 kcal/g for fat and 4 kcal/g for carbohydrate, about how much of each fuel would supply this energy?',
    options: [
      'About 225 g of fat, or about 100 g of carbohydrate',
      'About 100 g of fat, or about 225 g of carbohydrate',
      'About 100 g of fat, or about 100 g of carbohydrate',
      'About 8,100 g of fat, or about 3,600 g of carbohydrate',
    ],
    correctIndex: 1,
    explanation:
      '$900 \\div 9 = 100$ g of fat and $900 \\div 4 = 225$ g of carbohydrate. Fat stores more energy per gram, so less mass is needed; multiplying instead of dividing gives the impossible large values.',
    partNumber: 2,
    partTitle: 'Structure: TGs, Phospholipids, Steroids',
  },
  {
    id: 'blip-ent-2b',
    question:
      'A triglyceride and a phospholipid are both built on a glycerol backbone. How does the phospholipid differ in structure?',
    options: [
      'It has three fatty acids plus a phosphate group',
      'A phosphate group replaces one fatty acid',
      'It has a phosphate group in place of glycerol',
      'It has four fused rings in place of fatty acids',
    ],
    correctIndex: 1,
    explanation:
      'A triglyceride is glycerol plus three fatty acids; a phospholipid is glycerol plus two fatty acids and a phosphate group, which gives it a hydrophilic head. Fused rings describe steroids.',
    partNumber: 2,
    partTitle: 'Structure: TGs, Phospholipids, Steroids',
  },

  // Part 3: Function & Membranes
  {
    id: 'blip-ent-3a',
    question:
      'A duck\'s feathers are coated with a waxy, oily layer. After the coating is washed away with detergent, the duck becomes soaked and chilled in the water. What property of the coating was protecting it?',
    options: [
      'Its hydrophobic chains repel water',
      'Its phosphate heads soak up water away from the skin',
      'Its sugar units trap tiny air bubbles among feathers',
      'Its fused rings act as a hormone that raises body heat',
    ],
    correctIndex: 0,
    explanation:
      'Waxes and oils are hydrophobic, so they keep water from soaking into the feathers; this is the waterproofing role of lipids. Phosphate heads are hydrophilic, and the coating is not a sugar or a hormone.',
    partNumber: 3,
    partTitle: 'Function & Membranes',
  },
  {
    id: 'blip-ent-3b',
    question:
      'Fluidity is measured in two artificial membranes as temperature rises from 10°C to 40°C. Membrane 1 has no cholesterol, and its fluidity climbs steeply. Membrane 2 contains cholesterol, and its fluidity changes much less. Which conclusion is best supported?',
    options: [
      'Cholesterol makes membranes more fluid as temperature rises',
      'Cholesterol mainly stiffens membranes when they are cold',
      'Cholesterol limits how much fluidity shifts with temperature',
      'Cholesterol sits outside the membrane, so it has little effect',
    ],
    correctIndex: 2,
    explanation:
      'Cholesterol works as a fluidity buffer: it restrains phospholipid movement when warm and keeps tails from packing tightly when cool, so fluidity changes less across temperatures. It prevents stiffening in the cold rather than causing it, and it sits within animal cell membranes.',
    partNumber: 3,
    partTitle: 'Function & Membranes',
  },

  // Part 4: AP Review
  {
    id: 'blip-ent-4a',
    question:
      'A drug blocks a cell\'s ability to make phospholipids but has no effect on its production of triglycerides or steroids. Which process would be most directly impaired?',
    options: [
      'Storing extra energy as fat droplets in the cytoplasm',
      'Making steroid hormones that signal to other cells',
      'Coating the outer surface of the cell with wax',
      'Building new membrane as the cell grows and then divides',
    ],
    correctIndex: 3,
    explanation:
      'Phospholipids form the bilayer of every membrane, so a growing, dividing cell that cannot make them cannot build new membrane. Fat storage uses triglycerides, hormones use steroids, and waxes are a different lipid.',
    partNumber: 4,
    partTitle: 'AP Review',
  },
  {
    id: 'blip-ent-4b',
    question:
      'A microbe that lives in an 80°C hot spring has membranes rich in phospholipids with saturated tails. How does this composition help it survive?',
    options: [
      'Kinked tails spread apart, letting nutrients cross freely',
      'Saturated tails bind water and keep the membrane hydrated',
      'Saturated tails link into a polymer that is unable to melt',
      'Straight tails pack tightly, so the membrane is not too fluid',
    ],
    correctIndex: 3,
    explanation:
      'High temperature increases fluidity; straight saturated tails pack tightly and counter this, keeping the membrane intact. Kinks come from double bonds, which saturated tails lack, and the tails do not polymerize or bind water.',
    partNumber: 4,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the lipids topic.
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
    { partNumber: 1, partTitle: 'Introduction to Lipids' },
    { partNumber: 2, partTitle: 'Structure: TGs, Phospholipids, Steroids' },
    { partNumber: 3, partTitle: 'Function & Membranes' },
    { partNumber: 4, partTitle: 'AP Review' },
  ]
}
