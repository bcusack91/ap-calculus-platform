import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Current & Ohm's Law
  {
    id: 'dc-ent-1a',
    question: "Ohm's law is:",
    options: ['$V = IR$', '$V = I/R$', '$V = R/I$', '$I = VR$'],
    correctIndex: 0,
    explanation: '$V = IR$. Voltage equals current times resistance.',
    partNumber: 1,
    partTitle: "Current & Ohm's Law",
  },
  {
    id: 'dc-ent-1b',
    question: 'Electric current is defined as:',
    options: ['Charge times time', 'Charge per unit time ($I = Q/t$)', 'Voltage per resistance', 'Energy per charge'],
    correctIndex: 1,
    explanation: '$I = Q/t$ (or $I = dQ/dt$). Current is the rate of charge flow. Units: amperes (A = C/s).',
    partNumber: 1,
    partTitle: "Current & Ohm's Law",
  },

  // Part 2: Resistors in Series
  {
    id: 'dc-ent-2a',
    question: 'The equivalent resistance of resistors in series is:',
    options: ['$1/R_{eq} = 1/R_1 + 1/R_2$', '$R_{eq} = R_1 + R_2$', '$R_{eq} = R_1 R_2/(R_1+R_2)$', '$R_{eq} = \\sqrt{R_1 R_2}$'],
    correctIndex: 1,
    explanation: 'In series: $R_{eq} = R_1 + R_2 + \\ldots$ Equivalent resistance is always larger than any individual.',
    partNumber: 2,
    partTitle: 'Resistors in Series',
  },
  {
    id: 'dc-ent-2b',
    question: 'In a series circuit, the current through each resistor is:',
    options: ['Different', 'The same', 'Zero', 'Proportional to resistance'],
    correctIndex: 1,
    explanation: 'In series, there is only one path for current. The same current flows through every component.',
    partNumber: 2,
    partTitle: 'Resistors in Series',
  },

  // Part 3: Resistors in Parallel
  {
    id: 'dc-ent-3a',
    question: 'For resistors in parallel:',
    options: ['$R_{eq} = R_1 + R_2$', '$1/R_{eq} = 1/R_1 + 1/R_2$', '$R_{eq} = R_1 R_2$', '$R_{eq} = (R_1+R_2)/2$'],
    correctIndex: 1,
    explanation: 'In parallel: $1/R_{eq} = 1/R_1 + 1/R_2 + \\ldots$ Equivalent resistance is less than the smallest individual.',
    partNumber: 3,
    partTitle: 'Resistors in Parallel',
  },
  {
    id: 'dc-ent-3b',
    question: 'Two $6$ Ω resistors in parallel have equivalent resistance:',
    options: ['$12$ Ω', '$6$ Ω', '$3$ Ω', '$36$ Ω'],
    correctIndex: 2,
    explanation: '$1/R_{eq} = 1/6 + 1/6 = 2/6 \\Rightarrow R_{eq} = 3$ Ω.',
    partNumber: 3,
    partTitle: 'Resistors in Parallel',
  },

  // Part 4: Kirchhoff's Rules
  {
    id: 'dc-ent-4a',
    question: "Kirchhoff's junction rule is based on conservation of:",
    options: ['Energy', 'Charge', 'Momentum', 'Voltage'],
    correctIndex: 1,
    explanation: 'The junction rule: $\\sum I_{in} = \\sum I_{out}$. Current is conserved at any junction (conservation of charge).',
    partNumber: 4,
    partTitle: "Kirchhoff's Rules",
  },
  {
    id: 'dc-ent-4b',
    question: "Kirchhoff's loop rule states that around any closed loop:",
    options: ['$\\sum I = 0$', '$\\sum V = 0$', '$\\sum R = 0$', '$\\sum P = 0$'],
    correctIndex: 1,
    explanation: 'The loop rule: $\\sum \\Delta V = 0$ around any closed loop. This follows from conservation of energy.',
    partNumber: 4,
    partTitle: "Kirchhoff's Rules",
  },

  // Part 5: Power in Circuits
  {
    id: 'dc-ent-5a',
    question: 'The power dissipated by a resistor is:',
    options: ['$P = IV$ (and equivalently $I^2R$ or $V^2/R$)', '$P = I/V$', '$P = V/I$', '$P = IR$'],
    correctIndex: 0,
    explanation: '$P = IV = I^2R = V^2/R$. All three forms are equivalent.',
    partNumber: 5,
    partTitle: 'Power in Circuits',
  },
  {
    id: 'dc-ent-5b',
    question: 'A $100$ Ω resistor carries $0.5$ A. The power dissipated is:',
    options: ['$50$ W', '$25$ W', '$200$ W', '$12.5$ W'],
    correctIndex: 1,
    explanation: '$P = I^2 R = (0.5)^2 \\times 100 = 25$ W.',
    partNumber: 5,
    partTitle: 'Power in Circuits',
  },

  // Part 6: EMF & Internal Resistance
  {
    id: 'dc-ent-6a',
    question: 'The terminal voltage of a battery with EMF $\\varepsilon$ and internal resistance $r$ carrying current $I$ is:',
    options: ['$V = \\varepsilon + Ir$', '$V = \\varepsilon - Ir$', '$V = \\varepsilon$', '$V = Ir$'],
    correctIndex: 1,
    explanation: '$V = \\varepsilon - Ir$. The internal resistance causes a voltage drop, so terminal voltage is less than EMF when current flows.',
    partNumber: 6,
    partTitle: 'EMF & Internal Resistance',
  },
  {
    id: 'dc-ent-6b',
    question: 'A battery with $\\varepsilon = 12$ V and $r = 1$ Ω delivers $2$ A. Its terminal voltage is:',
    options: ['$14$ V', '$12$ V', '$10$ V', '$6$ V'],
    correctIndex: 2,
    explanation: '$V = \\varepsilon - Ir = 12 - 2(1) = 10$ V.',
    partNumber: 6,
    partTitle: 'EMF & Internal Resistance',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'dc-ent-7a',
    question: 'In a circuit with a $12$ V battery and three $4$ Ω resistors in series, the current is:',
    options: ['$3$ A', '$1$ A', '$9$ A', '$0.33$ A'],
    correctIndex: 1,
    explanation: '$R_{eq} = 4+4+4 = 12$ Ω. $I = V/R = 12/12 = 1$ A.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'dc-ent-7b',
    question: 'A light bulb rated $60$ W at $120$ V has a resistance of:',
    options: ['$2$ Ω', '$120$ Ω', '$240$ Ω', '$7200$ Ω'],
    correctIndex: 2,
    explanation: '$P = V^2/R \\Rightarrow R = V^2/P = 120^2/60 = 240$ Ω.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Current & Ohm's Law" },
    { partNumber: 2, partTitle: 'Resistors in Series' },
    { partNumber: 3, partTitle: 'Resistors in Parallel' },
    { partNumber: 4, partTitle: "Kirchhoff's Rules" },
    { partNumber: 5, partTitle: 'Power in Circuits' },
    { partNumber: 6, partTitle: 'EMF & Internal Resistance' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
