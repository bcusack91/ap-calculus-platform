import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Ideal Gas Model
  {
    id: 'kt-ent-1a',
    question: 'The ideal gas law is:',
    options: ['$PV = mRT$', '$PV = nRT$', '$PV = NkT$', 'Both $PV = nRT$ and $PV = Nk_BT$ are correct'],
    correctIndex: 3,
    explanation: 'The ideal gas law can be written as $PV = nRT$ (using moles) or $PV = Nk_BT$ (using number of molecules), where $k_B = R/N_A$.',
    partNumber: 1,
    partTitle: 'Ideal Gas Model',
  },
  {
    id: 'kt-ent-1b',
    question: 'In the kinetic theory model, gas molecules are assumed to:',
    options: [
      'Attract each other strongly',
      'Move randomly with elastic collisions and no intermolecular forces',
      'Move in fixed paths',
      'All have the same speed',
    ],
    correctIndex: 1,
    explanation: 'The ideal gas model assumes random motion, elastic collisions, negligible intermolecular forces, and negligible molecular volume.',
    partNumber: 1,
    partTitle: 'Ideal Gas Model',
  },

  // Part 2: Temperature & Kinetic Energy
  {
    id: 'kt-ent-2a',
    question: 'The average translational kinetic energy of an ideal gas molecule is:',
    options: ['$KE = nRT$', '$KE = \\frac{1}{2}mv^2$', '$KE = \\frac{3}{2}k_BT$', '$KE = PV$'],
    correctIndex: 2,
    explanation: 'Average translational KE per molecule = $\\frac{3}{2}k_BT$. Temperature is a measure of average molecular kinetic energy.',
    partNumber: 2,
    partTitle: 'Temperature & Kinetic Energy',
  },
  {
    id: 'kt-ent-2b',
    question: 'If the absolute temperature of an ideal gas is doubled, the average KE of its molecules:',
    options: ['Halves', 'Doubles', 'Quadruples', 'Stays the same'],
    correctIndex: 1,
    explanation: '$KE = \\frac{3}{2}k_BT$. Since KE is directly proportional to $T$, doubling $T$ doubles KE.',
    partNumber: 2,
    partTitle: 'Temperature & Kinetic Energy',
  },

  // Part 3: RMS Speed
  {
    id: 'kt-ent-3a',
    question: 'The root-mean-square (rms) speed of gas molecules is given by:',
    options: ['$v_{rms} = \\sqrt{3k_BT/m}$', '$v_{rms} = 3k_BT/m$', '$v_{rms} = \\sqrt{k_BT/m}$', '$v_{rms} = k_BT/m$'],
    correctIndex: 0,
    explanation: '$v_{rms} = \\sqrt{3k_BT/m}$, where $m$ is the mass of one molecule and $T$ is the absolute temperature.',
    partNumber: 3,
    partTitle: 'RMS Speed',
  },
  {
    id: 'kt-ent-3b',
    question: 'At the same temperature, lighter gas molecules have:',
    options: ['Lower rms speed', 'Higher rms speed', 'Same rms speed', 'Zero speed'],
    correctIndex: 1,
    explanation: '$v_{rms} = \\sqrt{3k_BT/m}$. Smaller $m$ gives larger $v_{rms}$. Lighter molecules move faster at the same temperature.',
    partNumber: 3,
    partTitle: 'RMS Speed',
  },

  // Part 4: Pressure from Molecular Collisions
  {
    id: 'kt-ent-4a',
    question: 'In kinetic theory, the pressure of a gas results from:',
    options: ['Molecules attracting each other', 'Molecules colliding with container walls', 'Gravity acting on molecules', 'Chemical reactions'],
    correctIndex: 1,
    explanation: 'Gas pressure arises from the collective force of many molecular collisions with the container walls.',
    partNumber: 4,
    partTitle: 'Pressure from Molecular Collisions',
  },
  {
    id: 'kt-ent-4b',
    question: 'Kinetic theory shows that pressure is related to molecular speed by:',
    options: ['$P = \\frac{1}{3}\\rho v_{rms}^2$', '$P = \\rho v_{rms}$', '$P = mv$', '$P = Nmv$'],
    correctIndex: 0,
    explanation: '$P = \\frac{1}{3}\\frac{N}{V}m v_{rms}^2 = \\frac{1}{3}\\rho v_{rms}^2$.',
    partNumber: 4,
    partTitle: 'Pressure from Molecular Collisions',
  },

  // Part 5: Maxwell-Boltzmann Distribution
  {
    id: 'kt-ent-5a',
    question: 'The Maxwell-Boltzmann speed distribution describes:',
    options: [
      'The uniform speed of all molecules',
      'The probability distribution of molecular speeds in a gas',
      'The pressure distribution in a container',
      'The energy levels of atoms',
    ],
    correctIndex: 1,
    explanation: 'The Maxwell-Boltzmann distribution gives the probability of finding a molecule with a particular speed. Most molecules are near the most probable speed.',
    partNumber: 5,
    partTitle: 'Maxwell-Boltzmann Distribution',
  },
  {
    id: 'kt-ent-5b',
    question: 'As temperature increases, the Maxwell-Boltzmann distribution curve:',
    options: [
      'Gets taller and narrower',
      'Gets shorter and broader, shifting to higher speeds',
      'Does not change',
      'Becomes a flat line',
    ],
    correctIndex: 1,
    explanation: 'Higher temperature means a wider range of speeds centered at a higher value. The peak lowers and broadens while shifting right.',
    partNumber: 5,
    partTitle: 'Maxwell-Boltzmann Distribution',
  },

  // Part 6: Internal Energy of an Ideal Gas
  {
    id: 'kt-ent-6a',
    question: 'The total internal energy of a monatomic ideal gas with $n$ moles is:',
    options: ['$U = nRT$', '$U = \\frac{3}{2}nRT$', '$U = \\frac{5}{2}nRT$', '$U = PV$'],
    correctIndex: 1,
    explanation: 'For a monatomic ideal gas (3 translational degrees of freedom): $U = \\frac{3}{2}nRT$.',
    partNumber: 6,
    partTitle: 'Internal Energy of an Ideal Gas',
  },
  {
    id: 'kt-ent-6b',
    question: 'The internal energy of an ideal gas depends on:',
    options: ['Pressure only', 'Volume only', 'Temperature only', 'Both pressure and volume'],
    correctIndex: 2,
    explanation: 'For an ideal gas, $U = \\frac{f}{2}nRT$ depends only on temperature (and the number of molecules and degrees of freedom).',
    partNumber: 6,
    partTitle: 'Internal Energy of an Ideal Gas',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'kt-ent-7a',
    question: 'Two containers hold the same gas at the same temperature. Container A has twice the volume and half the number of moles of container B. The pressure in A compared to B is:',
    options: ['$4$ times greater', 'Equal', '$\\frac{1}{4}$ as much', '$2$ times greater'],
    correctIndex: 2,
    explanation: '$P = nRT/V$. $P_A = (n/2)RT/(2V) = nRT/(4V) = P_B/4$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'kt-ent-7b',
    question: 'Helium ($M = 4$ g/mol) and oxygen ($M = 32$ g/mol) are at the same temperature. The ratio $v_{rms,He}/v_{rms,O_2}$ is:',
    options: ['$1$', '$2$', '$2\\sqrt{2}$', '$8$'],
    correctIndex: 2,
    explanation: '$v_{rms} \\propto 1/\\sqrt{M}$. Ratio = $\\sqrt{32/4} = \\sqrt{8} = 2\\sqrt{2} \\approx 2.83$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Ideal Gas Model' },
    { partNumber: 2, partTitle: 'Temperature & Kinetic Energy' },
    { partNumber: 3, partTitle: 'RMS Speed' },
    { partNumber: 4, partTitle: 'Pressure from Molecular Collisions' },
    { partNumber: 5, partTitle: 'Maxwell-Boltzmann Distribution' },
    { partNumber: 6, partTitle: 'Internal Energy of an Ideal Gas' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
