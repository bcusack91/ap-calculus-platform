/**
 * Entrance Quiz — Temperature, Kinetic Theory & the Ideal Gas Law (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Temperature Scales'
const P2 = 'Thermal Equilibrium & Zeroth Law'
const P3 = 'Gas Pressure from Collisions'
const P4 = 'The Ideal Gas Law'
const P5 = 'Gas Graphs & Absolute Zero'
const P6 = 'Kinetic Theory Connection'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Temperature Scales
  {
    id: 'tte-ent-1a',
    question: 'The air in a sealed room warms from $27°\\text{C}$ to $127°\\text{C}$. By what factor does the average translational kinetic energy of the air molecules increase?',
    options: ['4.70', '1.33', '1.15', '1.78'],
    correctIndex: 1,
    explanation: 'Average kinetic energy is proportional to the kelvin temperature, which goes from 300 K to 400 K, a factor of 1.33. The ratio 127/27 = 4.70 wrongly uses Celsius values.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'tte-ent-1b',
    question: 'Three objects have temperatures of 300 K, $30°\\text{C}$ and $80°\\text{F}$. Ranked from hottest to coldest, they are:',
    options: [
      '300 K, then 80°F, then 30°C',
      '80°F, then 30°C, then 300 K',
      '300 K, then 30°C, then 80°F',
      '30°C, then 300 K, then 80°F',
    ],
    correctIndex: 3,
    explanation: 'Converting everything to Celsius: 300 K is about 26.9°C and 80°F is $\\frac{5}{9}(80 - 32) \\approx 26.7°\\text{C}$, so 30°C is hottest, then 300 K, then 80°F.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Thermal Equilibrium & Zeroth Law
  {
    id: 'tte-ent-2a',
    question: 'Block A is placed against block B, and no net energy flows between them. Block B is then placed against block C, and energy flows from C into B. What can be concluded about A and C?',
    options: [
      'C is at a higher temperature than A',
      'A is hotter than C',
      'A and C have equal temperatures',
      'A and C cannot be compared yet',
    ],
    correctIndex: 0,
    explanation: 'A and B are in thermal equilibrium, so they share a temperature. Energy flows from C into B only if C is hotter than B, so C is also hotter than A.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'tte-ent-2b',
    question: 'A constant-volume gas thermometer reads 120 kPa in ice water at 273 K and 150 kPa in a warm liquid. What is the temperature of the liquid?',
    options: ['$68°\\text{C}$', '$-55°\\text{C}$', '$30°\\text{C}$', '$137°\\text{C}$'],
    correctIndex: 0,
    explanation: 'At constant volume $P/T$ is constant, so $T = 273 \\times \\frac{150}{120} \\approx 341$ K, which is about $68°\\text{C}$. Inverting the pressure ratio gives 218 K, or $-55°\\text{C}$.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Gas Pressure from Collisions
  {
    id: 'tte-ent-3a',
    question: 'Each second, $3.0 \\times 10^{26}$ molecules of mass $5.0 \\times 10^{-26}$ kg strike a $0.20 \\text{ m}^2$ wall head-on at 400 m/s and rebound elastically. What is the pressure on the wall?',
    options: [
      '$3.0 \\times 10^{4}$ Pa',
      '$1.2 \\times 10^{4}$ Pa',
      '$6.0 \\times 10^{4}$ Pa',
      '$2.4 \\times 10^{3}$ Pa',
    ],
    correctIndex: 2,
    explanation: 'Each rebound changes momentum by $2mv = 4.0 \\times 10^{-23}$ kg·m/s, so the force is $(3.0 \\times 10^{26})(4.0 \\times 10^{-23}) = 1.2 \\times 10^{4}$ N and the pressure is that divided by $0.20 \\text{ m}^2$: $6.0 \\times 10^{4}$ Pa. Using $mv$ instead of $2mv$ gives half that.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'tte-ent-3b',
    question: 'A fixed amount of gas is pushed into a smaller volume while its temperature stays constant. At the molecular level, why does its pressure increase?',
    options: [
      'The atoms strike the walls with greater average speed',
      'Each collision now transfers more momentum to the wall',
      'Each square meter of wall is struck more often',
      'The atoms push one another apart with larger forces',
    ],
    correctIndex: 2,
    explanation: 'At constant temperature the atoms keep the same average speed, so each collision delivers the same momentum. Packed into a smaller volume, they strike each square meter of wall more often, which raises the force per area.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: The Ideal Gas Law
  {
    id: 'tte-ent-4a',
    question: 'A 5.0 L tank holds oxygen at $27°\\text{C}$ and $2.0 \\times 10^5$ Pa. How many moles of gas are in the tank? Use $R = 8.31$ J/(mol·K).',
    options: ['4.5 mol', '400 mol', '0.40 mol', '0.00040 mol'],
    correctIndex: 2,
    explanation: '$n = \\frac{PV}{RT} = \\frac{(2.0 \\times 10^5)(5.0 \\times 10^{-3})}{(8.31)(300)} \\approx 0.40$ mol. Leaving the volume in liters gives 400 mol, and using $27$ instead of 300 K gives 4.5 mol.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'tte-ent-4b',
    question: 'A sealed sample of gas at 100 kPa and 300 K occupies 2.0 L. It is squeezed to 1.0 L and warmed to 450 K. What is its new pressure?',
    options: ['133 kPa', '75 kPa', '200 kPa', '300 kPa'],
    correctIndex: 3,
    explanation: 'With $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$, $P_2 = 100 \\times \\frac{2.0}{1.0} \\times \\frac{450}{300} = 300$ kPa. Ignoring the temperature change gives 200 kPa.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Gas Graphs & Absolute Zero
  {
    id: 'tte-ent-5a',
    question: 'A sealed $1.0 \\times 10^{-3} \\text{ m}^3$ bulb of gas reads 90.0 kPa at $0°\\text{C}$ and 123.0 kPa at $100°\\text{C}$, and its $P$ vs. $T$ graph is a straight line. How many moles of gas are in the bulb? Use $R = 8.31$ J/(mol·K).',
    options: ['0.040 mol', '0.15 mol', '40 mol', '0.000040 mol'],
    correctIndex: 0,
    explanation: 'The slope is $\\frac{33{,}000 \\text{ Pa}}{100 \\text{ K}} = 330$ Pa/K, and the slope equals $nR/V$, so $n = \\frac{(330)(1.0 \\times 10^{-3})}{8.31} \\approx 0.040$ mol. Leaving out the volume gives 40 mol.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'tte-ent-5b',
    question: 'For a sealed sample of gas, a student plots $P$ against $1/V$ at constant temperature and gets a straight line. In a second trial with the same sample, the slope of that line becomes twice as large. What changed?',
    options: [
      'A heavier gas replaced the original one',
      'The container was made twice as large',
      'Its temperature fell to half its value',
      'The absolute temperature doubled',
    ],
    correctIndex: 3,
    explanation: 'Since $P = nRT \\cdot \\frac{1}{V}$, the slope of $P$ vs. $1/V$ is $nRT$. With $n$ fixed, a doubled slope means the kelvin temperature doubled; the type of gas does not affect it.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Kinetic Theory Connection
  {
    id: 'tte-ent-6a',
    question: 'At a certain temperature, helium atoms ($M = 4$ g/mol) have an rms speed of 1,200 m/s. What is the rms speed of neon atoms ($M = 20$ g/mol) at the same temperature?',
    options: ['240 m/s', '1,200 m/s', '2,680 m/s', '537 m/s'],
    correctIndex: 3,
    explanation: 'At equal temperature, $v_{\\text{rms}} \\propto 1/\\sqrt{M}$, so $v_{\\text{Ne}} = 1200/\\sqrt{5} \\approx 537$ m/s. Dividing by 5 instead of $\\sqrt{5}$ gives 240 m/s.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'tte-ent-6b',
    question: 'Nitrogen ($M = 28$ g/mol) is at 300 K. At what temperature would hydrogen ($M = 2$ g/mol) have the same rms speed?',
    options: ['1,120 K', '21 K', '4,200 K', '300 K'],
    correctIndex: 1,
    explanation: 'Equal rms speeds require equal $T/M$, so $T_{\\text{H}_2} = 300 \\times \\frac{2}{28} \\approx 21$ K. Inverting the square root of the mass ratio gives 1,120 K, and inverting the ratio gives 4,200 K.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'tte-ent-7a',
    question: 'Gas in a cylinder with a freely sliding piston is heated from 300 K to 400 K at constant pressure. How does the molecular picture explain the unchanged pressure?',
    options: [
      'Each hit delivers more momentum, but hits per area become less frequent',
      'Each hit delivers the same momentum, and hits per area stay the same',
      'Each hit delivers less momentum, but hits per area grow more frequent',
      'Each hit delivers more momentum, and the atoms also become heavier',
    ],
    correctIndex: 0,
    explanation: 'Hotter atoms move faster, so each collision delivers more momentum. The gas also expands, so each square meter of wall is struck less often, and the two effects offset.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'tte-ent-7b',
    question: 'A rigid tank holds helium at $27°\\text{C}$ and 150 kPa. It is heated to $327°\\text{C}$. What are the new pressure and the change in the atoms\' rms speed?',
    options: [
      '300 kPa; the speed doubles',
      '300 kPa; the speed rises by $\\sqrt{2}$',
      '1,800 kPa; the speed rises by 3.5',
      '150 kPa; the speed stays the same',
    ],
    correctIndex: 1,
    explanation: 'The kelvin temperature doubles (300 K to 600 K), so at constant volume the pressure doubles to 300 kPa. Because $v_{\\text{rms}} \\propto \\sqrt{T}$, the speed rises by a factor of $\\sqrt{2}$, not 2.',
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
