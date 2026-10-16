/**
 * Entrance Quiz — The Ideal Gas Law
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Gas Properties & Kinetic Molecular Theory
 *  2 — Boyle's, Charles's, and Avogadro's Laws
 *  3 — The Ideal Gas Law
 *  4 — Molar Mass & Gas Density
 *  5 — Dalton's Law of Partial Pressures
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Gas Properties & Kinetic Molecular Theory
  {
    id: 'igl-ent-1a',
    question: 'A pressure gauge reads 98.0 kPa. What is this pressure in mmHg? (1 atm = 101.325 kPa = 760 mmHg)',
    options: ['0.967 mmHg', '0.129 mmHg', '735 mmHg', '74,500 mmHg'],
    correctIndex: 2,
    explanation: '$98.0 \\text{ kPa} \\times (760 \\text{ mmHg} / 101.325 \\text{ kPa}) = 735$ mmHg. 0.967 is the pressure in atm, 0.129 divides kPa by 760, and 74,500 multiplies kPa directly by 760.',
    partNumber: 1,
    partTitle: 'Gas Properties & Kinetic Molecular Theory',
  },
  {
    id: 'igl-ent-1b',
    question: 'Which change doubles the average kinetic energy of the molecules in a gas sample?',
    options: [
      'Heating the sample from 150 K to 300 K',
      'Warming the sample from 25 °C up to 50 °C',
      'Doubling the pressure at constant temperature',
      'Swapping in a gas with half the molar mass',
    ],
    correctIndex: 0,
    explanation: 'Average kinetic energy is proportional to Kelvin temperature only, so doubling the Kelvin temperature (150 K to 300 K) doubles it. 25 °C to 50 °C is only 298 K to 323 K, and neither pressure nor molar mass changes the average kinetic energy at a fixed temperature.',
    partNumber: 1,
    partTitle: 'Gas Properties & Kinetic Molecular Theory',
  },

  // Part 2: Boyle's, Charles's, and Avogadro's Laws
  {
    id: 'igl-ent-2a',
    question: 'A balloon holds 2.00 L of gas at 27 °C. At constant pressure, at what temperature will its volume be 2.50 L?',
    options: ['33.8 °C', '102 °C', '375 °C', '−33 °C'],
    correctIndex: 1,
    explanation: 'Volume is proportional to Kelvin temperature: $T_2 = 300\\text{ K} \\times (2.50/2.00) = 375$ K, which is 102 °C. Scaling 27 °C directly gives 33.8 °C, 375 °C forgets to convert back from kelvins, and −33 °C inverts the ratio.',
    partNumber: 2,
    partTitle: 'Boyle\'s, Charles\'s, and Avogadro\'s Laws',
  },
  {
    id: 'igl-ent-2b',
    question: 'A 3.00 L gas sample at 760 mmHg is compressed at constant temperature until its pressure is 1.25 atm. What is the new volume?',
    options: ['3.75 L', '1820 L', '0.00493 L', '2.40 L'],
    correctIndex: 3,
    explanation: '760 mmHg is 1.00 atm, so $V_2 = (1.00)(3.00)/1.25 = 2.40$ L; higher pressure means smaller volume. 3.75 L treats pressure and volume as directly proportional, and the other two values mix mmHg with atm.',
    partNumber: 2,
    partTitle: 'Boyle\'s, Charles\'s, and Avogadro\'s Laws',
  },

  // Part 3: The Ideal Gas Law
  {
    id: 'igl-ent-3a',
    question: 'What volume does 0.350 mol of an ideal gas occupy at 45 °C and 0.900 atm? ($R = 0.08206$ L·atm/(mol·K))',
    options: ['10.2 L', '1.44 L', '8.22 L', '0.0985 L'],
    correctIndex: 0,
    explanation: '$V = nRT/P = (0.350)(0.08206)(318)/0.900 = 10.2$ L. Using 45 instead of 318 K gives 1.44 L, multiplying by the pressure instead of dividing gives 8.22 L, and 0.0985 L is the reciprocal of the correct value.',
    partNumber: 3,
    partTitle: 'The Ideal Gas Law',
  },
  {
    id: 'igl-ent-3b',
    question: 'A rigid container holds a gas at 2.00 atm and 300 K. Half of the gas is let out, and the remaining gas is heated to 450 K. What is the new pressure?',
    options: ['6.00 atm', '0.667 atm', '1.50 atm', '3.00 atm'],
    correctIndex: 2,
    explanation: 'At constant volume $P \\propto nT$: halving $n$ halves the pressure and raising $T$ from 300 K to 450 K multiplies it by 1.5, so $2.00 \\times 0.5 \\times 1.5 = 1.50$ atm. 3.00 atm ignores the gas that escaped.',
    partNumber: 3,
    partTitle: 'The Ideal Gas Law',
  },

  // Part 4: Molar Mass & Gas Density
  {
    id: 'igl-ent-4a',
    question: 'A 1.20 g sample of a gas occupies 0.500 L at 27 °C and 1.25 atm. What is its molar mass? ($R = 0.08206$ L·atm/(mol·K))',
    options: ['4.25 g/mol', '47.3 g/mol', '59.1 g/mol', '0.0211 g/mol'],
    correctIndex: 1,
    explanation: '$M = mRT/(PV) = (1.20)(0.08206)(300)/[(1.25)(0.500)] = 47.3$ g/mol. Leaving the temperature in Celsius gives 4.25 g/mol, ignoring the pressure gives 59.1 g/mol, and 0.0211 g/mol is the reciprocal.',
    partNumber: 4,
    partTitle: 'Molar Mass & Gas Density',
  },
  {
    id: 'igl-ent-4b',
    question: 'What is the density of sulfur dioxide, $SO_2$ (64.07 g/mol), at 2.00 atm and 400 K? ($R = 0.08206$ L·atm/(mol·K))',
    options: ['1.95 g/L', '0.256 g/L', '7.81 g/L', '3.90 g/L'],
    correctIndex: 3,
    explanation: '$d = PM/(RT) = (2.00)(64.07)/[(0.08206)(400)] = 3.90$ g/L. Dropping the 2.00 atm gives 1.95 g/L, inverting the expression gives 0.256 g/L, and 7.81 g/L counts the pressure twice.',
    partNumber: 4,
    partTitle: 'Molar Mass & Gas Density',
  },

  // Part 5: Dalton's Law of Partial Pressures
  {
    id: 'igl-ent-5a',
    question: 'A rigid flask holds $O_2$ at 0.60 atm. $N_2$ is added at constant temperature until the total pressure is 1.50 atm. What is the mole fraction of $O_2$ in the mixture?',
    options: ['0.400', '0.600', '0.667', '0.900'],
    correctIndex: 0,
    explanation: 'Adding $N_2$ does not change the partial pressure of $O_2$, and partial pressure equals mole fraction times total pressure, so $\\chi_{O_2} = 0.60/1.50 = 0.400$. 0.900 is the partial pressure of $N_2$, and 0.667 is the $O_2$ : $N_2$ ratio rather than a fraction of the total.',
    partNumber: 5,
    partTitle: 'Dalton\'s Law of Partial Pressures',
  },
  {
    id: 'igl-ent-5b',
    question: 'A 2.00 L flask of He at 1.20 atm is connected to a 3.00 L flask of Ne at 0.800 atm at the same temperature. After the valve between them is opened, what is the total pressure?',
    options: ['2.00 atm', '1.00 atm', '0.960 atm', '1.20 atm'],
    correctIndex: 2,
    explanation: 'Each gas spreads into 5.00 L: $P_{He} = 1.20(2.00/5.00) = 0.480$ atm and $P_{Ne} = 0.800(3.00/5.00) = 0.480$ atm, so the total is 0.960 atm. Adding the starting pressures gives 2.00 atm, averaging them gives 1.00 atm, and 1.20 atm assumes the He keeps its starting pressure.',
    partNumber: 5,
    partTitle: 'Dalton\'s Law of Partial Pressures',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'igl-ent-6a',
    question: 'Hydrogen peroxide decomposes: $2H_2O_2 \\rightarrow 2H_2O + O_2$. What volume of $O_2$, measured at 27 °C and 0.950 atm, forms from 3.40 g of $H_2O_2$ (34.02 g/mol)? ($R = 0.08206$ L·atm/(mol·K))',
    options: ['2.59 L', '1.30 L', '1.12 L', '0.117 L'],
    correctIndex: 1,
    explanation: '3.40 g is 0.100 mol $H_2O_2$, which gives 0.0500 mol $O_2$, and $V = (0.0500)(0.08206)(300)/0.950 = 1.30$ L. Skipping the 2 : 1 ratio gives 2.59 L, using 22.4 L/mol (valid only at 0 °C and 1 atm) gives 1.12 L, and using 27 instead of 300 K gives 0.117 L.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'igl-ent-6b',
    question: 'Which 1.0 L gas sample contains the greatest number of molecules?',
    options: [
      '$H_2$ at 1.0 atm and 273 K',
      '$N_2$ at 1.0 atm and 546 K',
      'He at 0.50 atm and 137 K',
      '$CO_2$ at 2.0 atm and 273 K',
    ],
    correctIndex: 3,
    explanation: 'For equal volumes $n = PV/RT$, so the number of molecules depends only on $P/T$: 2.0/273 for $CO_2$ is the largest, $H_2$ and He tie at 1/273, and $N_2$ is 1/546. The identity and molar mass of the gas do not matter.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'igl-ent-7a',
    question: 'At 500 atm and 300 K, a sample of $N_2$ occupies a larger volume than $PV = nRT$ predicts. Which explanation is best?',
    options: [
      'The $N_2$ molecules fill much of the container',
      'Attractions between $N_2$ molecules push them farther apart',
      'The $N_2$ molecules move faster when the pressure is high',
      'Collisions with the walls become inelastic at high pressure',
    ],
    correctIndex: 0,
    explanation: 'At very high pressure the molecules are crowded together, so their own volume is no longer negligible and the gas cannot be squeezed as small as point particles could. Attractions pull molecules together and lower the pressure; they do not push molecules apart, and speed depends only on temperature.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'igl-ent-7b',
    question: 'A student finds the molar mass of a gas with $M = mRT/(PV)$, using a measured pressure. If attractions between the gas molecules make the measured pressure lower than an ideal gas would exert, how does the calculated molar mass compare with the true value?',
    options: [
      'Too low, since $P$ in the denominator is too small',
      'Unaffected, since the mass is measured directly',
      'Too high, since $P$ in the denominator is too small',
      'Too low, since attractions lower the measured mass',
    ],
    correctIndex: 2,
    explanation: 'Dividing by a pressure that is smaller than the ideal value makes $mRT/(PV)$ larger, so the calculated molar mass comes out too high. The mass itself is measured correctly; only the pressure term is off.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Gas Properties & Kinetic Molecular Theory' },
    { partNumber: 2, partTitle: 'Boyle\'s, Charles\'s, and Avogadro\'s Laws' },
    { partNumber: 3, partTitle: 'The Ideal Gas Law' },
    { partNumber: 4, partTitle: 'Molar Mass & Gas Density' },
    { partNumber: 5, partTitle: 'Dalton\'s Law of Partial Pressures' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
