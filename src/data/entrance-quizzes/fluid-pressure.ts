import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Pressure Basics
  {
    id: 'fp-ent-1a',
    question: 'Pressure is defined as:',
    options: ['Force times area', 'Force divided by area', 'Mass divided by volume', 'Energy per unit volume'],
    correctIndex: 1,
    explanation: 'Pressure $P = F/A$, measured in pascals (Pa = $N/m^{2}$).',
    partNumber: 1,
    partTitle: 'Pressure Basics',
  },
  {
    id: 'fp-ent-1b',
    question: 'Atmospheric pressure at sea level is approximately:',
    options: ['$1 \\times 10^3$ Pa', '$1 \\times 10^5$ Pa', '$1 \\times 10^7$ Pa', '$1 \\times 10^9$ Pa'],
    correctIndex: 1,
    explanation: 'Standard atmospheric pressure is about $1.01 \\times 10^5$ Pa (101 kPa).',
    partNumber: 1,
    partTitle: 'Pressure Basics',
  },

  // Part 2: Pressure with Depth
  {
    id: 'fp-ent-2a',
    question: 'The pressure at depth $h$ in a fluid of density $\\rho$ is given by:',
    options: ['$P = \\rho g/h$', '$P = P_0 + \\rho gh$', '$P = \\rho h/g$', '$P = P_0 - \\rho gh$'],
    correctIndex: 1,
    explanation: '$P = P_0 + \\rho gh$, where $P_0$ is the pressure at the surface and $h$ is the depth.',
    partNumber: 2,
    partTitle: 'Pressure with Depth',
  },
  {
    id: 'fp-ent-2b',
    question: 'A diver descends $10$ m in fresh water ($\\rho = 1000$ $kg/m^{3}$). The gauge pressure increase is:',
    options: ['$9800$ Pa', '$98000$ Pa', '$980$ Pa', '$9.8 \\times 10^6$ Pa'],
    correctIndex: 1,
    explanation: 'Gauge pressure increase = $\\rho gh = 1000 \\times 9.8 \\times 10 = 98{,}000$ Pa ≈ 1 atm.',
    partNumber: 2,
    partTitle: 'Pressure with Depth',
  },

  // Part 3: Pascal's Principle
  {
    id: 'fp-ent-3a',
    question: "Pascal's principle states that pressure applied to an enclosed fluid is:",
    options: ['Absorbed by the container', 'Transmitted equally in all directions', 'Reduced at greater depth', 'Doubled at the bottom'],
    correctIndex: 1,
    explanation: "Pascal's principle: a pressure change applied to an enclosed, incompressible fluid is transmitted undiminished throughout the fluid.",
    partNumber: 3,
    partTitle: "Pascal's Principle",
  },
  {
    id: 'fp-ent-3b',
    question: 'A hydraulic lift has pistons of area $0.01$ $m^{2}$ and $1$ $m^{2}$. If $100$ N is applied to the small piston, the force on the large piston is:',
    options: ['$100$ N', '$1000$ N', '$10{,}000$ N', '$1$ N'],
    correctIndex: 2,
    explanation: '$F_2 = F_1 (A_2/A_1) = 100(1/0.01) = 10{,}000$ N. The hydraulic system multiplies force by the area ratio.',
    partNumber: 3,
    partTitle: "Pascal's Principle",
  },

  // Part 4: Gauge vs. Absolute Pressure
  {
    id: 'fp-ent-4a',
    question: 'Gauge pressure is defined as:',
    options: ['Total pressure', 'Absolute pressure minus atmospheric pressure', 'Atmospheric pressure', 'Pressure at the surface'],
    correctIndex: 1,
    explanation: 'Gauge pressure = $P_{abs} - P_{atm}$. It measures the pressure above atmospheric.',
    partNumber: 4,
    partTitle: 'Gauge vs. Absolute Pressure',
  },
  {
    id: 'fp-ent-4b',
    question: 'A tire gauge reads $200$ kPa. The absolute pressure inside the tire is approximately:',
    options: ['$200$ kPa', '$400$ kPa', '$301$ kPa', '$99$ kPa'],
    correctIndex: 2,
    explanation: '$P_{abs} = P_{gauge} + P_{atm} = 200 + 101 = 301$ kPa.',
    partNumber: 4,
    partTitle: 'Gauge vs. Absolute Pressure',
  },

  // Part 5: Pressure in Connected Vessels
  {
    id: 'fp-ent-5a',
    question: 'In a U-tube open to the atmosphere with the same liquid in both arms, the liquid levels are:',
    options: ['Higher on the left', 'Higher on the right', 'Equal', 'Depends on tube diameter'],
    correctIndex: 2,
    explanation: 'For the same fluid in connected open containers, levels equalize because pressure at the same depth must be equal.',
    partNumber: 5,
    partTitle: 'Pressure in Connected Vessels',
  },
  {
    id: 'fp-ent-5b',
    question: 'A U-tube has water on one side and oil ($\\rho_{oil} < \\rho_{water}$) on the other. The oil column is:',
    options: ['Lower than the water', 'Higher than the water', 'Equal to the water', 'Cannot be determined'],
    correctIndex: 1,
    explanation: 'To balance the same pressure at the interface, the less dense fluid (oil) must have a taller column: $\\rho_{oil}h_{oil} = \\rho_{water}h_{water}$.',
    partNumber: 5,
    partTitle: 'Pressure in Connected Vessels',
  },

  // Part 6: Manometers & Barometers
  {
    id: 'fp-ent-6a',
    question: 'A mercury barometer measures atmospheric pressure by:',
    options: [
      'Weighing the mercury',
      'Balancing atmospheric pressure against a column of mercury',
      'Measuring mercury temperature',
      'Compressing air in a closed tube',
    ],
    correctIndex: 1,
    explanation: 'A barometer balances $P_{atm} = \\rho_{Hg} g h$, where $h$ is the height of the mercury column (≈ 760 mm at sea level).',
    partNumber: 6,
    partTitle: 'Manometers & Barometers',
  },
  {
    id: 'fp-ent-6b',
    question: 'If water were used instead of mercury in a barometer, the column height for 1 atm would be approximately:',
    options: ['$0.76$ m', '$7.6$ m', '$10.3$ m', '$76$ m'],
    correctIndex: 2,
    explanation: '$h = P/(\\rho g) = 101325/(1000 \\times 9.8) \\approx 10.3$ m. Water is much less dense than mercury, so a much taller column is needed.',
    partNumber: 6,
    partTitle: 'Manometers & Barometers',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'fp-ent-7a',
    question: 'Two identical glasses are filled with water to the same depth. One is wider. The pressure at the bottom is:',
    options: ['Greater in the wider glass', 'Greater in the narrower glass', 'Equal in both', 'Cannot be determined without volume'],
    correctIndex: 2,
    explanation: 'Pressure depends only on depth: $P = P_0 + \\rho gh$. The shape and width of the container do not affect pressure at a given depth.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'fp-ent-7b',
    question: 'A dam holds back a reservoir. The force on the dam depends on:',
    options: ['Only the total volume of water', 'Only the depth of the water', 'The depth of water and the area of the dam face', 'Only the surface area of the reservoir'],
    correctIndex: 2,
    explanation: 'Force on the dam = integral of $P \\, dA$. Pressure increases with depth ($\\rho gh$), and the total force depends on both the depth and the dam area.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Pressure Basics' },
    { partNumber: 2, partTitle: 'Pressure with Depth' },
    { partNumber: 3, partTitle: "Pascal's Principle" },
    { partNumber: 4, partTitle: 'Gauge vs. Absolute Pressure' },
    { partNumber: 5, partTitle: 'Pressure in Connected Vessels' },
    { partNumber: 6, partTitle: 'Manometers & Barometers' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
