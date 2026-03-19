import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What is a Capacitor?
  {
    id: 'cap-ent-1a',
    question: 'A capacitor stores energy in the form of:',
    options: ['Magnetic field', 'Electric field between its plates', 'Chemical energy', 'Kinetic energy'],
    correctIndex: 1,
    explanation: 'A capacitor stores energy in the electric field between its plates.',
    partNumber: 1,
    partTitle: 'What is a Capacitor?',
  },
  {
    id: 'cap-ent-1b',
    question: 'Capacitance is defined as:',
    options: ['$C = V/Q$', '$C = Q/V$', '$C = QV$', '$C = Q^2/V$'],
    correctIndex: 1,
    explanation: '$C = Q/V$, where $Q$ is charge and $V$ is voltage. Units: farads (F = C/V).',
    partNumber: 1,
    partTitle: 'What is a Capacitor?',
  },

  // Part 2: Parallel Plate Capacitor
  {
    id: 'cap-ent-2a',
    question: 'The capacitance of a parallel plate capacitor is:',
    options: ['$C = \\epsilon_0 A/d$', '$C = \\epsilon_0 d/A$', '$C = \\epsilon_0 Ad$', '$C = A/(\\epsilon_0 d)$'],
    correctIndex: 0,
    explanation: '$C = \\epsilon_0 A/d$. Capacitance increases with plate area $A$ and decreases with separation $d$.',
    partNumber: 2,
    partTitle: 'Parallel Plate Capacitor',
  },
  {
    id: 'cap-ent-2b',
    question: 'If the plate separation of a capacitor is doubled while keeping charge constant, the voltage:',
    options: ['Halves', 'Doubles', 'Stays the same', 'Quadruples'],
    correctIndex: 1,
    explanation: '$C = \\epsilon_0 A/d$. Doubling $d$ halves $C$. Since $V = Q/C$ and $Q$ is constant, $V$ doubles.',
    partNumber: 2,
    partTitle: 'Parallel Plate Capacitor',
  },

  // Part 3: Energy Stored
  {
    id: 'cap-ent-3a',
    question: 'The energy stored in a capacitor is:',
    options: ['$U = QV$', '$U = \\frac{1}{2}CV^2$', '$U = CV$', '$U = C/V$'],
    correctIndex: 1,
    explanation: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}QV = \\frac{Q^2}{2C}$. All three forms are equivalent.',
    partNumber: 3,
    partTitle: 'Energy Stored in a Capacitor',
  },
  {
    id: 'cap-ent-3b',
    question: 'A $10$ μF capacitor charged to $100$ V stores:',
    options: ['$0.05$ J', '$0.5$ J', '$5$ J', '$50$ J'],
    correctIndex: 0,
    explanation: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(100^2) = 0.05$ J.',
    partNumber: 3,
    partTitle: 'Energy Stored in a Capacitor',
  },

  // Part 4: Capacitors in Series
  {
    id: 'cap-ent-4a',
    question: 'For capacitors in series, the equivalent capacitance is found by:',
    options: ['$C_{eq} = C_1 + C_2$', '$1/C_{eq} = 1/C_1 + 1/C_2$', '$C_{eq} = C_1 C_2$', '$C_{eq} = (C_1 + C_2)/2$'],
    correctIndex: 1,
    explanation: 'In series: $1/C_{eq} = 1/C_1 + 1/C_2 + \\ldots$ The equivalent capacitance is less than any individual.',
    partNumber: 4,
    partTitle: 'Capacitors in Series',
  },
  {
    id: 'cap-ent-4b',
    question: 'Two $10$ μF capacitors in series have an equivalent capacitance of:',
    options: ['$20$ μF', '$10$ μF', '$5$ μF', '$100$ μF'],
    correctIndex: 2,
    explanation: '$1/C_{eq} = 1/10 + 1/10 = 2/10$, so $C_{eq} = 5$ μF.',
    partNumber: 4,
    partTitle: 'Capacitors in Series',
  },

  // Part 5: Capacitors in Parallel
  {
    id: 'cap-ent-5a',
    question: 'For capacitors in parallel:',
    options: ['$1/C_{eq} = 1/C_1 + 1/C_2$', '$C_{eq} = C_1 + C_2$', '$C_{eq} = C_1 C_2/(C_1+C_2)$', '$C_{eq} = \\sqrt{C_1 C_2}$'],
    correctIndex: 1,
    explanation: 'In parallel: $C_{eq} = C_1 + C_2 + \\ldots$ Equivalent capacitance is larger than any individual.',
    partNumber: 5,
    partTitle: 'Capacitors in Parallel',
  },
  {
    id: 'cap-ent-5b',
    question: 'A $4$ μF and a $6$ μF capacitor in parallel have equivalent capacitance:',
    options: ['$2.4$ μF', '$10$ μF', '$5$ μF', '$24$ μF'],
    correctIndex: 1,
    explanation: '$C_{eq} = 4 + 6 = 10$ μF.',
    partNumber: 5,
    partTitle: 'Capacitors in Parallel',
  },

  // Part 6: Dielectrics
  {
    id: 'cap-ent-6a',
    question: 'Inserting a dielectric between the plates of a capacitor:',
    options: ['Decreases capacitance', 'Increases capacitance', 'Has no effect', 'Removes all charge'],
    correctIndex: 1,
    explanation: 'A dielectric increases capacitance by a factor $\\kappa$: $C = \\kappa \\epsilon_0 A/d$.',
    partNumber: 6,
    partTitle: 'Dielectrics',
  },
  {
    id: 'cap-ent-6b',
    question: 'A dielectric with $\\kappa = 3$ is inserted into a $5$ μF capacitor. The new capacitance is:',
    options: ['$1.67$ μF', '$5$ μF', '$15$ μF', '$8$ μF'],
    correctIndex: 2,
    explanation: '$C\' = \\kappa C = 3 \\times 5 = 15$ μF.',
    partNumber: 6,
    partTitle: 'Dielectrics',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'cap-ent-7a',
    question: 'A capacitor is charged and then disconnected from the battery. A dielectric is inserted. The voltage:',
    options: ['Increases', 'Decreases', 'Stays the same', 'Drops to zero'],
    correctIndex: 1,
    explanation: 'Charge $Q$ is fixed (disconnected). $C$ increases with dielectric. $V = Q/C$ decreases.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'cap-ent-7b',
    question: 'A capacitor remains connected to a battery while a dielectric is inserted. The charge on the capacitor:',
    options: ['Decreases', 'Stays the same', 'Increases', 'Drops to zero'],
    correctIndex: 2,
    explanation: 'Voltage $V$ is fixed (battery connected). $C$ increases. $Q = CV$ increases.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What is a Capacitor?' },
    { partNumber: 2, partTitle: 'Parallel Plate Capacitor' },
    { partNumber: 3, partTitle: 'Energy Stored in a Capacitor' },
    { partNumber: 4, partTitle: 'Capacitors in Series' },
    { partNumber: 5, partTitle: 'Capacitors in Parallel' },
    { partNumber: 6, partTitle: 'Dielectrics' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
