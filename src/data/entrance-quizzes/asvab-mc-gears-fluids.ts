/**
 * Entrance Quiz — Gears, Fluids and Structures (ASVAB Mechanical Comprehension) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'
import { MC_GEARS_CCW_PAIR, MC_PLANK_SAWHORSES, MC_GEARS_20_60, MC_BELT_5_10, MC_HYD_20_1_25, MC_HYD_D_2D, MC_GEARS_ROW3_CCW, MC_SPRINGS_ONE_VS_PAIR } from '@/data/asvab-figures/mc'

const P1 = 'Gears, Fluids and Structures on the ASVAB'
const P2 = 'Gears and Gear Trains'
const P3 = 'Belts, Chains, Cams, Cranks and Springs'
const P4 = "Fluids, Pascal's Principle and Hydraulics"
const P5 = 'Buoyancy and Structural Support'
const P6 = 'Gears, Fluids and Structures Test Strategy and Traps'
const P7 = 'Gears, Fluids and Structures Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'mc-gears-fluids-ent-1a',
    question: 'In the figure, drive gear A turns counterclockwise. Which way does gear B turn?',
    figure: MC_GEARS_CCW_PAIR.svg,
    figureAlt: MC_GEARS_CCW_PAIR.alt,
    options: ['Counterclockwise', 'Clockwise', 'It stays still', 'Back and forth'],
    correctIndex: 1,
    explanation: 'Meshed gears always turn in opposite directions, so the second gear turns clockwise.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'mc-gears-fluids-ent-1b',
    question: 'Which sawhorse in the figure carries more of the crate\'s weight?',
    figure: MC_PLANK_SAWHORSES.svg,
    figureAlt: MC_PLANK_SAWHORSES.alt,
    options: ['The right sawhorse', 'Both carry the same', 'The left sawhorse', 'Neither; the plank carries it'],
    correctIndex: 2,
    explanation: 'The support nearer the load carries more of it. The left sawhorse is closer, so it carries the larger share.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'mc-gears-fluids-ent-2a',
    question: 'In the figure, gear A turns at $150$ rpm. How fast does gear B turn?',
    figure: MC_GEARS_20_60.svg,
    figureAlt: MC_GEARS_20_60.alt,
    options: ['450 rpm', '50 rpm', '90 rpm', '150 rpm'],
    correctIndex: 1,
    explanation: 'Teeth × rpm is equal: $20 \\times 150 = 60 \\times \\text{rpm}$, so the larger gear turns at $50$ rpm.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'mc-gears-fluids-ent-2b',
    question: 'Which gear arrangement turns rotation into straight-line motion, as in a car\'s steering?',
    options: ['Bevel gears', 'Worm and worm gear', 'Rack and pinion', 'Spur gears'],
    correctIndex: 2,
    explanation: 'A pinion turning against a straight toothed rack moves the rack in a straight line. Bevel gears change the angle of rotation, a worm gives a big speed reduction, and spur gears connect parallel shafts.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'mc-gears-fluids-ent-3a',
    question: 'How fast does the $10$-inch pulley in the figure turn?',
    figure: MC_BELT_5_10.svg,
    figureAlt: MC_BELT_5_10.alt,
    options: ['480 rpm', '240 rpm', '50 rpm', '120 rpm'],
    correctIndex: 3,
    explanation: 'Diameter × rpm is equal: $5 \\times 240 = 10 \\times \\text{rpm}$, so $120$ rpm.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'mc-gears-fluids-ent-3b',
    question: 'What does crossing the belt (a figure-8 belt) between two pulleys do?',
    options: ['Doubles the speed of the driven pulley', 'Makes the pulleys turn opposite ways', 'Keeps the belt from slipping at high speed', 'Makes both pulleys turn at the same speed'],
    correctIndex: 1,
    explanation: 'An open belt turns both pulleys the same way; a crossed belt reverses the driven pulley. The speed ratio still depends on the diameters.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'mc-gears-fluids-ent-4a',
    question: 'What force does the large piston in the figure exert?',
    figure: MC_HYD_20_1_25.svg,
    figureAlt: MC_HYD_20_1_25.alt,
    options: ['500 lb', '45 lb', '25 lb', '20 lb'],
    correctIndex: 0,
    explanation: 'Pressure $= 20 \\div 1 = 20$ psi, which acts on $25$ square inches: $20 \\times 25 = 500$ lb.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'mc-gears-fluids-ent-4b',
    question: 'A diver swims deeper and deeper in a lake. What happens to the water pressure on her?',
    options: ['It stays the same', 'It decreases', 'It increases', 'It drops to zero at the bottom'],
    correctIndex: 2,
    explanation: 'Liquid pressure grows with depth because more water is stacked above. The deeper she goes, the greater the pressure.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'mc-gears-fluids-ent-5a',
    question: 'A log floats at rest in a river. The weight of the water it displaces is:',
    options: ['Equal to the log\'s weight', 'Greater than the log\'s weight', 'Less than the log\'s weight', 'Zero, because the log floats'],
    correctIndex: 0,
    explanation: 'A floating object sinks until the buoyant force, which equals the weight of the water displaced, matches its own weight.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'mc-gears-fluids-ent-5b',
    question: 'Bridge and roof trusses are built from which shape because it cannot be pushed out of shape without bending or breaking a member?',
    options: ['Square', 'Rectangle', 'Circle', 'Triangle'],
    correctIndex: 3,
    explanation: 'A triangle with fixed side lengths cannot change shape, so it is rigid. A square or rectangle with pinned corners can rack into a slanted parallelogram.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'mc-gears-fluids-ent-6a',
    question: 'An idler gear is placed between a driving gear and a driven gear. What does it change?',
    options: ['Only the direction of the driven gear', 'Only the speed of the driven gear', 'Both its direction and its speed', 'Neither its direction nor its speed'],
    correctIndex: 0,
    explanation: 'An idler reverses the driven gear\'s direction but drops out of the speed calculation: the ratio still depends only on the driving and driven gears\' teeth.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'mc-gears-fluids-ent-6b',
    question: 'In the hydraulic jack shown, by what factor is the force multiplied?',
    figure: MC_HYD_D_2D.svg,
    figureAlt: MC_HYD_D_2D.alt,
    options: ['2', '8', '4', '1/2'],
    correctIndex: 2,
    explanation: 'Force is multiplied by the area ratio, and area goes with diameter squared: $2^2 = 4$.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'mc-gears-fluids-ent-7a',
    question: 'In the figure, gear A turns counterclockwise. Which way does gear C turn?',
    figure: MC_GEARS_ROW3_CCW.svg,
    figureAlt: MC_GEARS_ROW3_CCW.alt,
    options: ['Clockwise', 'Counterclockwise', 'It does not turn', 'It alternates direction'],
    correctIndex: 1,
    explanation: 'Direction alternates down the row: counterclockwise, clockwise, counterclockwise. The third gear matches the first.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'mc-gears-fluids-ent-7b',
    question: 'In the figure, how does each spring\'s stretch on the right compare with the single spring\'s stretch on the left?',
    figure: MC_SPRINGS_ONE_VS_PAIR.svg,
    figureAlt: MC_SPRINGS_ONE_VS_PAIR.alt,
    options: ['Twice as much', 'The same', 'Four times as much', 'Half as much'],
    correctIndex: 3,
    explanation: 'Side by side, each spring carries half the weight, so each stretches half as much.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
