/**
 * Entrance Quiz — AP Physics C: E&M, RC Circuits
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'RC Charging (ODE)',
  'RC Discharging',
  'Time Constant τ = RC',
  'Current & Voltage Graphs',
  'Power & Energy in RC',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcrc-ent-1a',
    question: 'An uncharged capacitor charges through a resistor with time constant $\\tau = 2.0$ s. How long does it take to reach $75\\%$ of its final charge?',
    options: ['$2.77$ s', '$1.50$ s', '$0.58$ s', '$1.39$ s'],
    correctIndex: 0,
    explanation: 'Solving $Q = Q_{\\max}(1 - e^{-t/\\tau})$ with $Q/Q_{\\max} = 0.75$ gives $e^{-t/\\tau} = 0.25$, so $t = \\tau\\ln 4 \\approx 2.77$ s. The value $1.50$ s assumes the charge rises linearly.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcrc-ent-1b',
    question: 'A switch connects a battery $\\mathcal{E}$ to an uncharged capacitor through a resistor $R$. Which describes the current over time?',
    options: [
      'It is constant at $\\mathcal{E}/R$',
      'It starts at $\\mathcal{E}/R$ and decays exponentially to zero',
      'It starts at zero and grows to $\\mathcal{E}/R$',
      'It decreases linearly to zero',
    ],
    correctIndex: 1,
    explanation: 'From $\\mathcal{E} - IR - q/C = 0$: at first $q = 0$, so $I = \\mathcal{E}/R$. As charge builds, the capacitor voltage opposes the battery, and the solution is $I = (\\mathcal{E}/R)e^{-t/RC}$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcrc-ent-2a',
    question: 'A $100$ μF capacitor charged to $50$ V discharges through a $10$ kΩ resistor. What is its voltage $3.0$ s later?',
    options: ['$6.8$ V', '$18.4$ V', '$2.5$ V', '$0.0$ V'],
    correctIndex: 2,
    explanation: '$\\tau = RC = 1.0$ s, so $V = 50e^{-3} \\approx 2.5$ V. The values $18.4$ V and $6.8$ V are the voltages after one and two time constants.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcrc-ent-2b',
    question: 'A $20$ μF capacitor discharging through an unknown resistor loses half its voltage in $0.10$ s. What is the resistance?',
    options: ['$5.0$ kΩ', '$3.5$ kΩ', '$10.0$ kΩ', '$7.2$ kΩ'],
    correctIndex: 3,
    explanation: 'Half-life $= \\tau\\ln 2$, so $\\tau = 0.10/0.693 \\approx 0.144$ s and $R = \\tau/C \\approx 7.2$ kΩ. Treating $0.10$ s as $\\tau$ itself gives $5.0$ kΩ.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcrc-ent-3a',
    question: 'An ideal battery has an $8.0$ kΩ resistor connected directly across it. Also across the battery is a branch of a $2.0$ kΩ resistor in series with a $4.0$ μF capacitor. What is the capacitor\'s charging time constant?',
    options: ['$8$ ms', '$40$ ms', '$6.4$ ms', '$32$ ms'],
    correctIndex: 0,
    explanation: 'Replace the ideal battery with a wire: the $8.0$ kΩ resistor is then shorted out, and the capacitor sees only the $2.0$ kΩ resistor. So $\\tau = (2.0 \\times 10^3)(4.0 \\times 10^{-6}) = 8$ ms.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcrc-ent-3b',
    question: 'Which change makes a charging capacitor reach $90\\%$ of its final voltage sooner?',
    options: [
      'A battery with larger emf',
      'A smaller resistor',
      'A capacitor with larger capacitance',
      'A capacitor with larger plate area',
    ],
    correctIndex: 1,
    explanation: 'The fraction of the final voltage reached depends only on $t/\\tau$ with $\\tau = RC$. A smaller $R$ shortens $\\tau$. A larger emf raises the final voltage but not the time to reach $90\\%$ of it.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcrc-ent-4a',
    question: 'A $12$ V battery charges a capacitor through a $2.0$ kΩ resistor with $\\tau = 0.50$ s. At what rate is the current changing just after the switch closes?',
    options: ['$12$ mA/s', '$-3$ mA/s', '$-12$ mA/s', '$24$ mA/s'],
    correctIndex: 2,
    explanation: 'With $I = (\\mathcal{E}/R)e^{-t/\\tau}$, $dI/dt = -(\\mathcal{E}/R)/\\tau = -(6.0\\text{ mA})/(0.50\\text{ s}) = -12$ mA/s. The current is decreasing, so the rate is negative.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcrc-ent-4b',
    question: 'A capacitor has been charging through one resistor, and a switch suddenly reconnects it to discharge through a different resistor. Which quantity can change abruptly at that instant?',
    options: ['The capacitor voltage', 'The capacitor charge', 'The stored energy', 'The current'],
    correctIndex: 3,
    explanation: 'The charge, and so $V_C = q/C$ and $U = q^2/(2C)$, cannot change instantly, because that would take infinite current. The current is set by the new loop, so it can jump and even reverse.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcrc-ent-5a',
    question: 'An uncharged capacitor charges through a resistor. One time constant after the switch closes, what fraction of its final stored energy does it hold?',
    options: ['$40\\%$', '$63\\%$', '$37\\%$', '$86\\%$'],
    correctIndex: 0,
    explanation: '$U = q^2/(2C)$, so $U/U_{\\text{final}} = (q/q_{\\max})^2 = (1 - e^{-1})^2 \\approx 0.40$. The value $63\\%$ is the fraction of the charge, not of the energy.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcrc-ent-5b',
    question: 'A capacitor discharges through a resistor with time constant $\\tau$. When has the power dissipated in the resistor fallen to $25\\%$ of its initial value?',
    options: ['$\\tau\\ln 4$', '$\\tau\\ln 2$', '$2\\tau$', '$\\tau/4$'],
    correctIndex: 1,
    explanation: 'Power goes as $I^2$, so $P = P_0e^{-2t/\\tau}$. Setting $e^{-2t/\\tau} = 1/4$ gives $t = \\tau\\ln 2$. The value $\\tau\\ln 4$ is when the current, not the power, falls to $25\\%$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcrc-ent-6a',
    question: 'A $12$ μF capacitor charged to $30$ V is connected through a $2.0$ kΩ resistor to an uncharged $6.0$ μF capacitor. What is the time constant of the charge transfer?',
    options: ['$36$ ms', '$24$ ms', '$8$ ms', '$12$ ms'],
    correctIndex: 2,
    explanation: 'The loop rule gives a single exponential with the two capacitors acting in series: $C_s = (12)(6.0)/18 = 4.0$ μF, so $\\tau = RC_s = 8$ ms. Adding the capacitances gives $36$ ms.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcrc-ent-6b',
    question: 'For the same two capacitors ($12$ μF at $30$ V joined through the resistor to an uncharged $6.0$ μF), how much energy is dissipated in the resistor by the time the transfer is complete?',
    options: ['$3.6$ mJ', '$5.4$ mJ', '$0$ mJ', '$1.8$ mJ'],
    correctIndex: 3,
    explanation: 'Charge is conserved: $360$ μC spreads over $18$ μF, giving $20$ V on each. The energy falls from $\\frac{1}{2}(12 \\times 10^{-6})(30)^2 = 5.4$ mJ to $\\frac{1}{2}(18 \\times 10^{-6})(20)^2 = 3.6$ mJ, so $1.8$ mJ becomes heat.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcrc-ent-7a',
    question: 'In a lab, a graph of $\\ln V$ versus $t$ for a $40$ μF capacitor discharging through a resistor is a straight line with slope $-2.5$ s$^{-1}$. What is the resistance?',
    options: ['$10$ kΩ', '$63$ kΩ', '$1.0$ kΩ', '$100$ kΩ'],
    correctIndex: 0,
    explanation: 'Since $\\ln V = \\ln V_0 - t/\\tau$, the slope is $-1/\\tau$, so $\\tau = 0.40$ s and $R = \\tau/C = 0.40/(40 \\times 10^{-6}) = 10$ kΩ. Dividing the slope by $C$ gives $63$ kΩ.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcrc-ent-7b',
    question: 'A $40$ μF capacitor charged to $2500$ V discharges through a $50$ Ω load. What fraction of its stored energy is delivered in the first $2.0$ ms?',
    options: ['$63\\%$', '$86\\%$', '$50\\%$', '$37\\%$'],
    correctIndex: 1,
    explanation: '$\\tau = RC = 2.0$ ms. The stored energy falls as $e^{-2t/\\tau}$, so after one time constant $e^{-2} \\approx 14\\%$ remains and about $86\\%$ has been delivered. The value $63\\%$ is the fraction of the charge that has flowed.',
    partNumber: 7,
    partTitle: P[6],
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return P.map((partTitle, i) => ({ partNumber: i + 1, partTitle }))
}
