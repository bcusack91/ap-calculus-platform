import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: RC Circuit Basics
  {
    id: 'rc-ent-1a',
    question: 'An RC circuit consists of:',
    options: ['A resistor and an inductor', 'A resistor and a capacitor', 'Two capacitors', 'A battery only'],
    correctIndex: 1,
    explanation: 'An RC circuit contains a resistor ($R$) and a capacitor ($C$) connected together.',
    partNumber: 1,
    partTitle: 'RC Circuit Basics',
  },
  {
    id: 'rc-ent-1b',
    question: 'The time constant of an RC circuit is:',
    options: ['$\\tau = R/C$', '$\\tau = RC$', '$\\tau = C/R$', '$\\tau = 1/(RC)$'],
    correctIndex: 1,
    explanation: '$\\tau = RC$. It has units of seconds and characterizes how quickly the circuit charges or discharges.',
    partNumber: 1,
    partTitle: 'RC Circuit Basics',
  },

  // Part 2: Charging a Capacitor
  {
    id: 'rc-ent-2a',
    question: 'When charging a capacitor through a resistor, the charge on the capacitor:',
    options: ['Increases linearly', 'Increases exponentially toward $Q_{max}$', 'Decreases exponentially', 'Stays constant'],
    correctIndex: 1,
    explanation: '$Q(t) = Q_{max}(1 - e^{-t/RC})$. The charge approaches $Q_{max} = C\\varepsilon$ exponentially.',
    partNumber: 2,
    partTitle: 'Charging a Capacitor',
  },
  {
    id: 'rc-ent-2b',
    question: 'After one time constant ($t = \\tau$), a charging capacitor has reached approximately what percentage of its maximum charge?',
    options: ['$50\\%$', '$63\\%$', '$86\\%$', '$100\\%$'],
    correctIndex: 1,
    explanation: '$Q(\\tau) = Q_{max}(1-e^{-1}) = Q_{max}(1-0.368) \\approx 0.632 Q_{max} = 63\\%$.',
    partNumber: 2,
    partTitle: 'Charging a Capacitor',
  },

  // Part 3: Discharging a Capacitor
  {
    id: 'rc-ent-3a',
    question: 'When discharging a capacitor through a resistor, the voltage across the capacitor:',
    options: ['Increases linearly', 'Stays constant', 'Decreases exponentially', 'Drops to zero instantly'],
    correctIndex: 2,
    explanation: '$V(t) = V_0 e^{-t/RC}$. The voltage decreases exponentially toward zero.',
    partNumber: 3,
    partTitle: 'Discharging a Capacitor',
  },
  {
    id: 'rc-ent-3b',
    question: 'After $5$ time constants of discharging, the remaining charge is approximately:',
    options: ['$37\\%$', '$5\\%$', '$0.7\\%$', '$50\\%$'],
    correctIndex: 2,
    explanation: '$Q(5\\tau) = Q_0 e^{-5} \\approx 0.0067 Q_0 \\approx 0.7\\%$. The capacitor is essentially fully discharged.',
    partNumber: 3,
    partTitle: 'Discharging a Capacitor',
  },

  // Part 4: Current During Charging/Discharging
  {
    id: 'rc-ent-4a',
    question: 'During charging of an RC circuit, the current:',
    options: ['Is constant', 'Starts at maximum and decreases exponentially', 'Starts at zero and increases', 'Oscillates'],
    correctIndex: 1,
    explanation: '$I(t) = (\\varepsilon/R)e^{-t/RC}$. Current is maximum at $t=0$ and decays to zero.',
    partNumber: 4,
    partTitle: 'Current in RC Circuits',
  },
  {
    id: 'rc-ent-4b',
    question: 'The initial current when a $12$ V battery charges a capacitor through a $1000$ Ω resistor is:',
    options: ['$12$ A', '$0.012$ A', '$1.2$ A', '$0.12$ A'],
    correctIndex: 1,
    explanation: 'At $t=0$, the uncharged capacitor acts like a wire: $I_0 = \\varepsilon/R = 12/1000 = 0.012$ A.',
    partNumber: 4,
    partTitle: 'Current in RC Circuits',
  },

  // Part 5: Energy in RC Circuits
  {
    id: 'rc-ent-5a',
    question: 'When fully charged by a battery with EMF $\\varepsilon$, the energy stored in the capacitor is:',
    options: ['$\\varepsilon Q$', '$\\frac{1}{2}C\\varepsilon^2$', '$C\\varepsilon^2$', '$\\varepsilon^2/C$'],
    correctIndex: 1,
    explanation: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}C\\varepsilon^2$. Exactly half the energy delivered by the battery is stored; the other half is dissipated as heat in the resistor.',
    partNumber: 5,
    partTitle: 'Energy in RC Circuits',
  },
  {
    id: 'rc-ent-5b',
    question: 'During the charging of a capacitor from a battery, the energy dissipated in the resistor equals:',
    options: ['Zero', 'The energy stored in the capacitor', 'Twice the stored energy', 'Half the stored energy'],
    correctIndex: 1,
    explanation: 'Total energy from battery = $Q\\varepsilon = C\\varepsilon^2$. Capacitor stores $\\frac{1}{2}C\\varepsilon^2$. The other $\\frac{1}{2}C\\varepsilon^2$ is dissipated in $R$.',
    partNumber: 5,
    partTitle: 'Energy in RC Circuits',
  },

  // Part 6: Effect of R and C
  {
    id: 'rc-ent-6a',
    question: 'Increasing the resistance in an RC circuit:',
    options: ['Speeds up charging', 'Slows down charging', 'Has no effect', 'Increases the maximum charge'],
    correctIndex: 1,
    explanation: '$\\tau = RC$. Increasing $R$ increases $\\tau$, so the circuit takes longer to charge (or discharge).',
    partNumber: 6,
    partTitle: 'Effect of R and C',
  },
  {
    id: 'rc-ent-6b',
    question: 'An RC circuit has $R = 2$ kΩ and $C = 5$ μF. The time constant is:',
    options: ['$10$ s', '$10$ ms', '$0.01$ s', '$0.1$ s'],
    correctIndex: 2,
    explanation: '$\\tau = RC = 2000 \\times 5 \\times 10^{-6} = 0.01$ s = $10$ ms.',
    partNumber: 6,
    partTitle: 'Effect of R and C',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'rc-ent-7a',
    question: 'A fully charged capacitor in an RC circuit is equivalent to:',
    options: ['A short circuit (wire)', 'An open circuit (break)', 'A battery', 'A resistor'],
    correctIndex: 1,
    explanation: 'When fully charged, no current flows through the capacitor. It behaves like an open circuit (infinite resistance to DC).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'rc-ent-7b',
    question: 'An uncharged capacitor is connected to a battery through a resistor. Immediately after the switch is closed, the capacitor behaves like:',
    options: ['An open circuit', 'A short circuit (wire)', 'A battery', 'A large resistor'],
    correctIndex: 1,
    explanation: 'At $t = 0$, the uncharged capacitor has $V = 0$ across it, so all the voltage drops across $R$. It acts like a short circuit initially.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'RC Circuit Basics' },
    { partNumber: 2, partTitle: 'Charging a Capacitor' },
    { partNumber: 3, partTitle: 'Discharging a Capacitor' },
    { partNumber: 4, partTitle: 'Current in RC Circuits' },
    { partNumber: 5, partTitle: 'Energy in RC Circuits' },
    { partNumber: 6, partTitle: 'Effect of R and C' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
