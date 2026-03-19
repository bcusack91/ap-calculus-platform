import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: First Law of Thermodynamics
  {
    id: 'tdl-ent-1a',
    question: 'The first law of thermodynamics states:',
    options: ['$\\Delta U = Q + W$', '$\\Delta U = Q - W$', '$Q = W$', '$\\Delta U = 0$'],
    correctIndex: 1,
    explanation: '$\\Delta U = Q - W$ (physics convention), where $Q$ is heat added to the system and $W$ is work done BY the system.',
    partNumber: 1,
    partTitle: 'First Law of Thermodynamics',
  },
  {
    id: 'tdl-ent-1b',
    question: 'A gas absorbs $500$ J of heat and does $200$ J of work. Its change in internal energy is:',
    options: ['$700$ J', '$300$ J', '$-300$ J', '$200$ J'],
    correctIndex: 1,
    explanation: '$\\Delta U = Q - W = 500 - 200 = 300$ J. Internal energy increases.',
    partNumber: 1,
    partTitle: 'First Law of Thermodynamics',
  },

  // Part 2: Isothermal Processes
  {
    id: 'tdl-ent-2a',
    question: 'In an isothermal process for an ideal gas:',
    options: ['Temperature changes', '$\\Delta U = 0$ and $Q = W$', 'No work is done', 'Pressure is constant'],
    correctIndex: 1,
    explanation: 'Isothermal = constant temperature. For an ideal gas, $U$ depends only on $T$, so $\\Delta U = 0$ and $Q = W$.',
    partNumber: 2,
    partTitle: 'Isothermal Processes',
  },
  {
    id: 'tdl-ent-2b',
    question: 'On a PV diagram, an isothermal process for an ideal gas appears as:',
    options: ['A horizontal line', 'A vertical line', 'A hyperbola ($PV = \\text{const}$)', 'A straight diagonal line'],
    correctIndex: 2,
    explanation: 'At constant $T$: $PV = nRT = \\text{const}$, which is a hyperbola on a $PV$ diagram.',
    partNumber: 2,
    partTitle: 'Isothermal Processes',
  },

  // Part 3: Adiabatic Processes
  {
    id: 'tdl-ent-3a',
    question: 'In an adiabatic process:',
    options: ['$Q = 0$', '$W = 0$', '$\\Delta U = 0$', '$P = \\text{const}$'],
    correctIndex: 0,
    explanation: 'Adiabatic means no heat exchange ($Q = 0$). So $\\Delta U = -W$: work done by the gas reduces its internal energy.',
    partNumber: 3,
    partTitle: 'Adiabatic Processes',
  },
  {
    id: 'tdl-ent-3b',
    question: 'A gas expands adiabatically. Its temperature:',
    options: ['Increases', 'Decreases', 'Stays the same', 'Cannot be determined'],
    correctIndex: 1,
    explanation: 'With $Q = 0$ and $W > 0$ (expansion): $\\Delta U = -W < 0$. Since $U \\propto T$ for ideal gas, temperature decreases.',
    partNumber: 3,
    partTitle: 'Adiabatic Processes',
  },

  // Part 4: Isobaric & Isovolumetric Processes
  {
    id: 'tdl-ent-4a',
    question: 'In an isobaric (constant pressure) process, the work done by the gas is:',
    options: ['$W = 0$', '$W = P\\Delta V$', '$W = nRT$', '$W = Q$'],
    correctIndex: 1,
    explanation: 'At constant pressure: $W = P\\Delta V$. This is the area under the horizontal line on a PV diagram.',
    partNumber: 4,
    partTitle: 'Isobaric & Isovolumetric Processes',
  },
  {
    id: 'tdl-ent-4b',
    question: 'In an isovolumetric (constant volume) process:',
    options: ['$W = P\\Delta V$', '$Q = \\Delta U$ (no work done)', 'Temperature is constant', 'Pressure is constant'],
    correctIndex: 1,
    explanation: 'At constant volume: $\\Delta V = 0$, so $W = P\\Delta V = 0$. Then $\\Delta U = Q - 0 = Q$.',
    partNumber: 4,
    partTitle: 'Isobaric & Isovolumetric Processes',
  },

  // Part 5: PV Diagrams & Work
  {
    id: 'tdl-ent-5a',
    question: 'On a PV diagram, the work done by a gas equals:',
    options: ['The slope of the curve', 'The area under the curve', 'The y-intercept', 'The length of the curve'],
    correctIndex: 1,
    explanation: '$W = \\int P \\, dV$ = area under the curve on a PV diagram. Positive for expansion, negative for compression.',
    partNumber: 5,
    partTitle: 'PV Diagrams & Work',
  },
  {
    id: 'tdl-ent-5b',
    question: 'For a cyclic process on a PV diagram, the net work done equals:',
    options: ['Zero', 'The total area under the top curve', 'The area enclosed by the cycle', 'The sum of all pressures'],
    correctIndex: 2,
    explanation: 'In a cycle, net work = area enclosed by the loop. Clockwise = positive net work (engine).',
    partNumber: 5,
    partTitle: 'PV Diagrams & Work',
  },

  // Part 6: Second Law & Entropy
  {
    id: 'tdl-ent-6a',
    question: 'The second law of thermodynamics states that:',
    options: [
      'Energy is always conserved',
      'The entropy of an isolated system never decreases',
      'Heat always flows from cold to hot',
      'Entropy is always zero',
    ],
    correctIndex: 1,
    explanation: 'The total entropy of an isolated system can only increase (or remain constant in a reversible process). Natural processes are irreversible.',
    partNumber: 6,
    partTitle: 'Second Law & Entropy',
  },
  {
    id: 'tdl-ent-6b',
    question: 'Heat cannot spontaneously flow from a cold body to a hot body. This is a statement of the:',
    options: ['Zeroth law', 'First law', 'Second law (Clausius statement)', 'Third law'],
    correctIndex: 2,
    explanation: "The Clausius statement of the second law: heat does not spontaneously transfer from cold to hot without external work.",
    partNumber: 6,
    partTitle: 'Second Law & Entropy',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'tdl-ent-7a',
    question: 'A heat engine absorbs $1000$ J from a hot reservoir and exhausts $600$ J to a cold reservoir. Its efficiency is:',
    options: ['$60\\%$', '$40\\%$', '$16.7\\%$', '$100\\%$'],
    correctIndex: 1,
    explanation: '$\\eta = W/Q_H = (Q_H - Q_C)/Q_H = (1000-600)/1000 = 40\\%$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'tdl-ent-7b',
    question: 'The maximum possible efficiency of a heat engine operating between $600$ K and $300$ K is:',
    options: ['$100\\%$', '$50\\%$', '$25\\%$', '$75\\%$'],
    correctIndex: 1,
    explanation: 'Carnot efficiency = $1 - T_C/T_H = 1 - 300/600 = 50\\%$. No engine can exceed this.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'First Law of Thermodynamics' },
    { partNumber: 2, partTitle: 'Isothermal Processes' },
    { partNumber: 3, partTitle: 'Adiabatic Processes' },
    { partNumber: 4, partTitle: 'Isobaric & Isovolumetric Processes' },
    { partNumber: 5, partTitle: 'PV Diagrams & Work' },
    { partNumber: 6, partTitle: 'Second Law & Entropy' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
