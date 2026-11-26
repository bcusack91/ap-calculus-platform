/**
 * Fluids Part 1: the extra conceptual questions for each CONCEPT video
 * (videos 1, 3, 5, 7). Together with the shot list's three checkpoints they
 * give every concept video at least three questions spread over its sections
 * and three on its "Remember" section; fluids1-lesson.ts says which goes
 * where. Each one uses a new situation, so none repeats a shot-list
 * checkpoint, a worked example or an exit-quiz item. See
 * circuits1-recap-questions.ts for the rules.
 *
 * Reuse: every question here is on a SHARED idea. Specific gravity and blood
 * pressure (the MCAT-only sections) are asked only by the shot list's own
 * questions, which sit on those sections.
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'
import { FIG } from './fluids1-figures'

export const RECAP: Record<number, CheckpointQuestion[]> = {
  // 1 · Density and Specific Gravity
  1: [
    {
      // on 04-water
      question: 'One table lists the density of aluminum as 2.7 g/cm³. Another lists the density of iron as 7900 kg/m³. Which comparison of the two metals is correct?',
      options: [
        'Aluminum is denser: 2.7 g/cm³ is 27,000 kg/m³',
        'Aluminum is denser: 7900 kg/m³ is 0.79 g/cm³',
        'Iron is denser: 2.7 g/cm³ is only 2700 kg/m³',
        'Iron is denser: 2.7 g/cm³ is only 0.0027 kg/m³',
      ],
      correctAnswer: 2,
      explanation: 'Put both in the same unit. Grams per cubic centimeter times 1000 gives kilograms per cubic meter, so aluminum is 2700 kg/m³, well below iron’s 7900 kg/m³ (which is 7.9 g/cm³). 27,000 kg/m³ multiplies by ten thousand, 0.79 g/cm³ divides iron’s value by ten thousand, and 0.0027 kg/m³ divides by 1000 when it should multiply.',
    },
    {
      // Remember
      question: 'Two solid cubes have the same volume. Cube X is made of a material with twice the density of cube Y’s material. How do the weights of the cubes compare?',
      options: ['X weighs half as much as Y', 'X weighs the same as Y does', 'X weighs four times as much', 'X weighs twice as much as Y'],
      correctAnswer: 3,
      explanation: 'Weight is W = ρVg. The volume and g are the same for both cubes, so the weight follows the density: twice the density is twice the mass and twice the weight. Equal volumes do not mean equal weights, and nothing here is squared, so the factor is not four.',
    },
    {
      // Remember
      question: 'Which of these samples of water has a mass of one kilogram?',
      options: ['1.0 cm³ of water', '1.0 L of water', '1.0 mL of water', '1.0 m³ of water'],
      correctAnswer: 1,
      explanation: 'Water is 1 kg per liter. A cubic centimeter and a milliliter are the same volume, and each holds 1 g of water; a cubic meter holds 1000 L, so 1000 kg.',
    },
    {
      // Remember
      question: 'Why can a liquid’s density be treated as constant in a pressure problem, while a gas’s density cannot?',
      options: [
        'A liquid barely changes volume when squeezed',
        'A liquid has far more mass than any gas has',
        'A liquid cannot flow in the way a gas can',
        'A liquid always fills the whole container',
      ],
      correctAnswer: 0,
      explanation: 'Density is mass over volume. Squeezing a liquid hardly changes its volume, so its density stays put: it is treated as incompressible. A gas squeezes into a smaller volume, so its density rises with pressure. Liquids and gases both flow, and it is the gas, not the liquid, that spreads out to fill its whole container.',
    },
  ],
  // 3 · Pressure and Depth
  3: [
    {
      // on 04-why-depth
      question: 'Two open tanks stand side by side, filled to the same depth. One holds fresh water and the other holds seawater, which is slightly denser. How do the pressures at the bottoms of the tanks compare?',
      options: [
        'Greater under the seawater, which has the larger ρ',
        'Greater under the fresh water, which is less dense',
        'Equal, because the two depths are exactly the same',
        'Equal, because both tanks are open to the same air',
      ],
      correctAnswer: 0,
      explanation: 'P = P₀ + ρgh. Both tanks have the same P₀ and the same depth h, so the denser liquid adds more: each column of seawater weighs more than the same column of fresh water. Equal depths give equal pressures only in the same liquid, and the open tops fix P₀, not the ρgh part.',
    },
    {
      // Remember
      question: 'Water presses on the flat, vertical glass wall of an aquarium. In which direction does the water’s force on that wall act?',
      options: [
        'Straight down, parallel to the glass wall',
        'Diagonally down, at 45 degrees to the wall',
        'Straight up, parallel to the glass wall',
        'Horizontally, at right angles to the wall',
      ],
      correctAnswer: 3,
      explanation: 'Pressure has no direction of its own, but the force it puts on a surface always acts perpendicular to that surface. The wall is vertical, so the push on it is horizontal. A fluid at rest cannot push along a surface, which rules out any force parallel to the glass.',
    },
    {
      // Remember
      question: 'A sensor on a research submersible in a freshwater lake reads a TOTAL pressure of about 7 atm. About how deep is the submersible?',
      options: ['About 7 m', 'About 60 m', 'About 70 m', 'About 600 m'],
      correctAnswer: 1,
      explanation: 'One of the 7 atm is the air pressing on the lake’s surface, so the water adds 6 atm. Water adds about 1 atm for every 10 m, which makes the depth about 60 m. 70 m forgets the atmosphere at the surface, and 7 m and 600 m use 1 m or 100 m of water per atmosphere.',
    },
  ],
  // 5 · Gauge vs. Absolute Pressure
  5: [
    {
      // on 05-manometer
      figure: FIG.v5_manometer,
      question: 'A flask of gas is joined to one arm of an open-tube manometer. The liquid stands HIGHER in the arm joined to the flask than in the arm open to the air. What does this show about the gas?',
      options: [
        'It is above atmospheric: a positive gauge pressure',
        'It is below atmospheric: a negative gauge pressure',
        'It is at atmospheric: a gauge pressure of zero',
        'It is below zero: a negative absolute pressure',
      ],
      correctAnswer: 1,
      explanation: 'The liquid is pushed down on the higher-pressure side. Here the open arm is the lower one, so the atmosphere is winning: the gas is below atmospheric pressure, and its gauge pressure is negative. Reading it the other way round is the common trap. Level arms would mean atmospheric pressure, and an absolute pressure is never below zero.',
    },
    {
      // Remember
      question: 'Which list puts one pascal, one millimeter of mercury and one atmosphere in order from the smallest pressure to the largest?',
      options: ['1 mmHg, then 1 Pa, then 1 atm', '1 Pa, then 1 atm, then 1 mmHg', '1 Pa, then 1 mmHg, then 1 atm', '1 atm, then 1 mmHg, then 1 Pa'],
      correctAnswer: 2,
      explanation: 'One millimeter of mercury is about 133 Pa, and one atmosphere is 760 mmHg, about 1.0 × 10⁵ Pa. So the pascal is the smallest of the three and the atmosphere by far the largest.',
    },
    {
      // Remember
      question: 'At sea level, a pump removes ALL of the air from a sealed chamber. What are the absolute pressure and the gauge pressure inside the chamber?',
      options: [
        'Absolute 0 atm and gauge −1 atm',
        'Absolute 0 atm and gauge 0 atm',
        'Absolute −1 atm and gauge 0 atm',
        'Absolute 1 atm and gauge −1 atm',
      ],
      correctAnswer: 0,
      explanation: 'With no gas left, the absolute (total) pressure is zero, the lowest it can ever be. Gauge pressure is absolute minus atmospheric: 0 − 1 = −1 atm. A gauge reading of zero would mean the chamber is still at atmospheric pressure, and an absolute pressure cannot be negative.',
    },
    {
      // Remember
      question: 'A mercury barometer is carried from sea level to the top of a mountain. What happens to the height of its mercury column, and why?',
      options: [
        'It gets taller: less air presses on the column',
        'It gets shorter: mercury weighs less up high',
        'It stays put: the tube is sealed at its top',
        'It gets shorter: less air presses on the dish',
      ],
      correctAnswer: 3,
      explanation: 'The column stands at the height where ρgh at its base matches the atmosphere pressing on the dish. Higher up there is less air above, so a shorter column balances it. No air presses on the top of the column, since the space above the mercury is nearly a vacuum, and the mercury itself is unchanged.',
    },
  ],
  // 7 · Pascal's Principle
  7: [
    {
      // Remember
      question: 'With a hydraulic jack, a mechanic raises a 10,000 N car using a push of only 200 N. Compared with lifting the car the same height directly, the work the mechanic does with an ideal jack is:',
      options: [
        'Fifty times less, as the push is so much smaller',
        'The same, as the push covers a longer distance',
        'Fifty times more, as the stroke is so much longer',
        'The same, as the push covers a shorter distance',
      ],
      correctAnswer: 1,
      explanation: 'A hydraulic lift trades distance for force: F₁d₁ = F₂d₂. The push is 50 times smaller than the car’s weight, so the input piston must travel 50 times as far as the car rises, and the work comes out the same. A jack never reduces or multiplies the work, and the small-force side is the one that moves the long way.',
    },
    {
      // Remember
      question: 'Three gauges at different heights in a sealed, water-filled tank read 100 kPa, 110 kPa and 125 kPa. A piston then pushes on the water and raises the pressure just beneath it by 30 kPa. What do the three gauges read now?',
      options: ['130, 130 and 130 kPa', '100, 110 and 125 kPa', '130, 143 and 163 kPa', '130, 140 and 155 kPa'],
      correctAnswer: 3,
      explanation: 'Pascal’s principle: the pressure CHANGE is the same everywhere in an enclosed liquid, so each gauge steps up by 30 kPa. The deeper gauges keep their extra ρgh, so the gaps between the readings stay at 10 and 15 kPa. Equal readings would erase the effect of depth, unchanged readings ignore the push, and 130, 143 and 163 multiply each reading by 1.3 instead of adding to it.',
    },
    {
      // Remember
      question: 'Two syringes full of water are joined by a tube. The wide syringe’s plunger has 4 times the area of the narrow one’s. A student pushes the narrow plunger with 10 N. What force on the wide plunger holds it still?',
      options: [
        '40 N, as the two pressures must match',
        '10 N, as the two forces must match',
        '2.5 N, as a wider plunger moves easier',
        '160 N, as an area ratio is squared',
      ],
      correctAnswer: 0,
      explanation: 'The water carries the same pressure to both plungers, so F₁/A₁ = F₂/A₂. Four times the area at the same pressure means four times the force: 40 N. 10 N assumes the force, not the pressure, is passed along; 2.5 N divides by the area ratio; and squaring is for a DIAMETER ratio, not an area ratio.',
    },
  ],
}
