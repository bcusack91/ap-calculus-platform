/**
 * Entrance Quiz — Water Properties (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Water Properties (polarity, partial charges, hydrogen bonds)
 *  2 — Cohesion & Adhesion (surface tension, capillary action, xylem)
 *  3 — High Specific Heat (thermal buffering, evaporative cooling)
 *  4 — The Universal Solvent (hydrophilic vs hydrophobic, pH, buffers)
 *  5 — Ice Floats — And That's Critical (lattice, insulation)
 *  6 — Problem-Solving Workshop (matching properties to phenomena)
 *  7 — AP Review (pH and enzymes, hydrogen bonding as the common cause)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Water Properties
  {
    id: 'bwp-ent-1a',
    question:
      'Hydrogen sulfide ($H_2S$) has a bent shape like water, but sulfur is only slightly more electronegative than hydrogen. $H_2S$ is a gas at room temperature, while water is a liquid. Which explanation is best supported?',
    options: [
      'The $H_2S$ molecules are linear, so their hydrogen atoms carry no charge',
      'The S–H bonds are barely polar, so $H_2S$ forms few hydrogen bonds',
      'The covalent bonds in $H_2S$ are weak, so its molecules break apart',
      'The $H_2S$ molecules are heavier, and heavier molecules evaporate first',
    ],
    correctIndex: 1,
    explanation:
      'Hydrogen bonds need strongly polar bonds that leave a large partial positive charge on hydrogen. With S–H bonds barely polar, $H_2S$ molecules attract each other weakly and escape as a gas. The stem states the molecule is bent, and evaporation does not involve breaking covalent bonds.',
    partNumber: 1,
    partTitle: 'Water Properties',
  },
  {
    id: 'bwp-ent-1b',
    question:
      'The nitrogen atom of an ammonia molecule ($NH_3$) carries a partial negative charge. When an ammonia molecule comes close to a water molecule, which part of the water molecule will its nitrogen be drawn toward?',
    options: [
      'The oxygen, which carries a partial positive charge',
      'The oxygen, since both atoms are strongly electronegative',
      'A hydrogen, which carries a partial positive charge',
      'Neither atom, since the charges cancel in the bent shape',
    ],
    correctIndex: 2,
    explanation:
      'Oxygen pulls the shared electrons toward itself, leaving each hydrogen of water with a partial positive charge, so the partially negative nitrogen is attracted to a hydrogen. Oxygen is partially negative, and the bent shape keeps the charges from canceling.',
    partNumber: 1,
    partTitle: 'Water Properties',
  },

  // Part 2: Cohesion & Adhesion
  {
    id: 'bwp-ent-2a',
    question:
      'Water climbs up a narrow glass tube but does not climb an equally narrow tube made of a waxy, nonpolar plastic. Which explanation is best supported?',
    options: [
      'Cohesion among water molecules is weaker inside the plastic',
      'The plastic blocks evaporation, so nothing pulls water up',
      'Water forms hydrogen bonds with glass but not with the wax',
      'Glass soaks water into its walls, while the plastic cannot',
    ],
    correctIndex: 2,
    explanation:
      'Capillary rise needs adhesion: water is attracted to the polar glass surface, and cohesion drags more water along behind it. A nonpolar surface offers nothing for water to hydrogen-bond with, so there is no adhesion to start the climb. Cohesion is the same in both tubes.',
    partNumber: 2,
    partTitle: 'Cohesion & Adhesion',
  },
  {
    id: 'bwp-ent-2b',
    question:
      'In a tall tree, water evaporating from the leaves pulls a continuous column of water up through the xylem from the roots. What keeps the column from separating as the top is pulled?',
    options: [
      'Root cells use ATP to pump water up to the leaves',
      'Hydrogen bonds attract each molecule to the neighboring molecules',
      'Water molecules form covalent chains inside the xylem',
      'Xylem walls contract in waves and squeeze water upward',
    ],
    correctIndex: 1,
    explanation:
      'Cohesion, the hydrogen bonding of each water molecule to its neighbors, lets the pull at the leaves be passed down the whole column. The molecules are not covalently linked to one another, and xylem is not a pump.',
    partNumber: 2,
    partTitle: 'Cohesion & Adhesion',
  },

  // Part 3: High Specific Heat
  {
    id: 'bwp-ent-3a',
    question:
      'Over one day, the temperature of a pond changes by about 2°C while the air above it changes by about 15°C. Which explanation at the molecular level best accounts for the pond\'s stability?',
    options: [
      'Much of the absorbed heat breaks hydrogen bonds before it speeds up molecules',
      'Water reflects nearly all sunlight, so very little heat ever enters the pond',
      'Water molecules are heavier than air molecules, so they cannot move faster',
      'Heat in water is stored in covalent bonds, which release it during the night',
    ],
    correctIndex: 0,
    explanation:
      'Water has a high specific heat because energy added to it first goes into breaking hydrogen bonds rather than raising molecular motion (temperature). The pond therefore absorbs a lot of heat with little temperature change. Ponds absorb sunlight well, and covalent bonds are not broken by warming.',
    partNumber: 3,
    partTitle: 'High Specific Heat',
  },
  {
    id: 'bwp-ent-3b',
    question:
      'On a hot, sunny day, one plant has open stomata and loses water vapor from its leaves, while a second plant in drought has closed its stomata. Which leaf is likely to be warmer, and why?',
    options: [
      'The first plant\'s leaf, since water vapor traps heat near it',
      'The second plant\'s leaf, since less evaporation carries heat away',
      'The first plant\'s leaf, since losing water raises its specific heat',
      'Neither leaf, since both receive the same sunlight',
    ],
    correctIndex: 1,
    explanation:
      'Evaporation removes the highest-energy water molecules, cooling the surface left behind; this is how transpiration cools leaves. With stomata closed, little water evaporates and the leaf heats up. Losing water does not raise specific heat.',
    partNumber: 3,
    partTitle: 'High Specific Heat',
  },

  // Part 4: The Universal Solvent
  {
    id: 'bwp-ent-4a',
    question:
      'Glucose dissolves easily in water, but a hydrocarbon of similar size does not. Which explanation is best supported?',
    options: [
      'Glucose splits into charged ions once it is placed in water',
      'The hydrocarbon is too large to fit among water molecules',
      'Water forms covalent bonds with glucose but not hydrocarbons',
      'The polar –OH groups of glucose hydrogen-bond with water',
    ],
    correctIndex: 3,
    explanation:
      'Polar groups such as –OH can hydrogen-bond with water, so water molecules surround and separate glucose molecules (it is hydrophilic). A nonpolar hydrocarbon cannot interact this way and is excluded. Glucose does not ionize, and dissolving forms no covalent bonds.',
    partNumber: 4,
    partTitle: 'The Universal Solvent',
  },
  {
    id: 'bwp-ent-4b',
    question:
      'A student adds 1 mL of acid to 100 mL of pure water and 1 mL to 100 mL of a carbonic acid–bicarbonate solution. The pure water drops from pH 7 to pH 3; the other solution drops from pH 7.4 to pH 7.3. Which explanation is best supported?',
    options: [
      'Bicarbonate ions accepted most of the added $H^+$, so few stayed free',
      'Bicarbonate released extra $H^+$ that canceled the acid that was added',
      'The second solution held more water, so it diluted the acid much more',
      'Carbonic acid made the solution strongly basic before the acid was added',
    ],
    correctIndex: 0,
    explanation:
      'A buffer resists pH change: bicarbonate binds added $H^+$ to form carbonic acid, so the free $H^+$ concentration barely rises. Releasing $H^+$ would lower pH further, and both solutions had the same volume.',
    partNumber: 4,
    partTitle: 'The Universal Solvent',
  },

  // Part 5: Ice Floats — And That's Critical
  {
    id: 'bwp-ent-5a',
    question:
      'A sealed glass bottle filled to the top with water cracks when the water freezes. Which explanation is best supported?',
    options: [
      'Freezing breaks hydrogen bonds, so the molecules drift apart',
      'Freezing adds mass to the water and raises the pressure inside',
      'Fixed hydrogen bonds hold the molecules in a more open lattice',
      'The cold makes the glass expand faster than the water inside',
    ],
    correctIndex: 2,
    explanation:
      'As water freezes, each molecule\'s hydrogen bonds become fixed in a crystal lattice that holds molecules farther apart than in the liquid, so ice takes up more volume and is less dense. Freezing makes hydrogen bonds stable rather than breaking them, and mass does not change.',
    partNumber: 5,
    partTitle: 'Ice Floats — And That\'s Critical',
  },
  {
    id: 'bwp-ent-5b',
    question:
      'As winter begins, a layer of ice forms on the surface of a pond and slowly thickens. How does this ice layer affect the fish living below it?',
    options: [
      'It slows heat loss, so the water under it stays liquid',
      'It releases stored oxygen into the water as it forms',
      'It raises the specific heat of the water underneath it',
      'It sinks in spring and stirs nutrients up from the bottom',
    ],
    correctIndex: 0,
    explanation:
      'Because ice is less dense, it floats and forms an insulating layer that slows heat loss from the water beneath, so the pond does not freeze solid and fish survive. Ice does not sink, and it does not change the specific heat of liquid water.',
    partNumber: 5,
    partTitle: 'Ice Floats — And That\'s Critical',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bwp-ent-6a',
    question:
      'A gardener coats every leaf of a potted plant with petroleum jelly, which blocks the stomata. What will most likely happen to water movement in the plant\'s xylem?',
    options: [
      'It speeds up, since water can no longer escape from the leaves',
      'It stays the same, since root pressure alone drives the flow',
      'It reverses, since cohesion between the molecules is now lost',
      'It slows, since far less water evaporates to pull the column upward',
    ],
    correctIndex: 3,
    explanation:
      'By the cohesion-tension mechanism, evaporation at the leaves creates the pull that draws the water column up the xylem. Blocking the stomata removes most of that evaporation, so flow slows. Cohesion itself is unaffected.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bwp-ent-6b',
    question:
      'Which observation depends mainly on adhesion rather than on cohesion?',
    options: [
      'A water strider standing on the surface of a pond',
      'Water beading into round drops on a waxy leaf surface',
      'Water curving up the sides of a narrow glass cylinder',
      'A water column staying intact as it is pulled up a tree',
    ],
    correctIndex: 2,
    explanation:
      'The upward-curving meniscus forms because water is attracted to the polar glass, which is adhesion. Surface tension, round drops on wax and an unbroken xylem column all come from water molecules attracting one another (cohesion).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bwp-ent-7a',
    question:
      'An enzyme from the small intestine works best at pH 8. It is placed in a solution at pH 5. Which statement correctly describes the change in conditions and its likely effect?',
    options: [
      '$H^+$ is 3 times higher, and the shape changes so activity falls',
      '$H^+$ is 1,000 times higher, and the shape changes so activity falls',
      '$H^+$ is 1,000 times higher, and the extra ions speed the enzyme up',
      '$H^+$ is 3 times higher, which is too small a change to affect it',
    ],
    correctIndex: 1,
    explanation:
      'Each pH unit is a 10-fold change in $[H^+]$, so going from pH 8 to pH 5 raises $[H^+]$ by $10^3$ = 1,000 times. A change that large disrupts the charges and hydrogen bonds that hold the enzyme\'s shape, so its activity drops.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bwp-ent-7b',
    question:
      'A student claims that water\'s resistance to temperature change and its ability to rise through xylem have nothing in common. Which response best refutes the claim?',
    options: [
      'Both depend on the covalent bonds inside each water molecule',
      'Both depend on water being nonpolar and therefore unreactive',
      'Both depend on ice being less dense than liquid water is',
      'Both depend on hydrogen bonds between water molecules',
    ],
    correctIndex: 3,
    explanation:
      'High specific heat (energy goes into breaking hydrogen bonds) and cohesion in xylem (hydrogen bonds link neighbors) both trace back to hydrogen bonding between polar water molecules. Water is polar, and the covalent bonds inside each molecule are not broken in either process.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the water-properties topic.
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
    { partNumber: 1, partTitle: 'Water Properties' },
    { partNumber: 2, partTitle: 'Cohesion & Adhesion' },
    { partNumber: 3, partTitle: 'High Specific Heat' },
    { partNumber: 4, partTitle: 'The Universal Solvent' },
    { partNumber: 5, partTitle: 'Ice Floats — And That\'s Critical' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
