/**
 * Entrance Quiz — AP Physics C: E&M, Inductance & RL Circuits
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Self-Inductance',
  'RL Circuit ODE',
  'RL Charging & Discharging',
  'Time Constant τ = L/R',
  'Energy in Inductors',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcrl-ent-1a',
    question: 'A $250$-turn coil has $4.0 \\times 10^{-5}$ Wb of flux through each turn when it carries $2.0$ A. What is its inductance?',
    options: ['$5.0$ mH', '$0.020$ mH', '$20.0$ mH', '$1.25$ mH'],
    correctIndex: 0,
    explanation: '$L = N\\Phi_B/I = (250)(4.0 \\times 10^{-5})/2.0 = 5.0 \\times 10^{-3}$ H. Leaving out the $250$ turns gives $0.020$ mH, and multiplying by $I$ instead of dividing gives $20.0$ mH.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcrl-ent-1b',
    question: 'A solenoid is rewound with twice as many turns over twice the length, keeping the same cross-section, so the turns per meter are unchanged. What happens to its inductance?',
    options: ['It quadruples', 'It doubles', 'It is unchanged', 'It increases eightfold'],
    correctIndex: 1,
    explanation: '$L = \\mu_0N^2A/\\ell$: doubling $N$ multiplies $L$ by $4$ and doubling $\\ell$ divides it by $2$, so $L$ doubles. Equivalently $L = \\mu_0n^2A\\ell$ with $n$ fixed and $\\ell$ doubled.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcrl-ent-2a',
    question: 'A $12$ V battery drives current through a $4.0$ Ω resistor in series with a $0.50$ H inductor. At the instant the current is $1.0$ A, how fast is the current increasing?',
    options: ['$24$ A/s', '$8$ A/s', '$16$ A/s', '$32$ A/s'],
    correctIndex: 2,
    explanation: 'The loop rule gives $L\\,dI/dt = \\mathcal{E} - IR = 12 - 4.0 = 8.0$ V, so $dI/dt = 8.0/0.50 = 16$ A/s. The value $24$ A/s is the rate at $t = 0$, when $I = 0$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcrl-ent-2b',
    question: 'In an RL circuit connected to a battery at $t = 0$, how long after the switch closes are the voltages across the resistor and the inductor equal?',
    options: ['$\\tau$', '$\\tau/2$', '$2\\tau$', '$\\tau\\ln 2$'],
    correctIndex: 3,
    explanation: 'Solving the loop equation gives $V_R = \\mathcal{E}(1 - e^{-t/\\tau})$ and $V_L = \\mathcal{E}e^{-t/\\tau}$. They are equal when $e^{-t/\\tau} = \\frac{1}{2}$, at $t = \\tau\\ln 2 \\approx 0.69\\tau$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcrl-ent-3a',
    question: 'A $0.80$ H inductor carrying $4.0$ A is suddenly switched so its current flows only through a $20$ Ω resistor. What is the current $0.10$ s later?',
    options: ['$0.33$ A', '$1.47$ A', '$0.54$ A', '$3.67$ A'],
    correctIndex: 0,
    explanation: '$\\tau = L/R = 0.040$ s, so $I = 4.0e^{-0.10/0.040} = 4.0e^{-2.5} \\approx 0.33$ A. The value $3.67$ A uses the growth formula instead of the decay formula.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcrl-ent-3b',
    question: 'An inductor carrying a steady current $I_0$ is suddenly disconnected from its battery, leaving it in a loop with a resistor $R$. How does the magnitude of the voltage across the inductor behave afterward?',
    options: [
      'It is zero, since there is no battery',
      'It jumps to $I_0R$ and then decays as $e^{-t/\\tau}$',
      'It stays constant at $I_0R$',
      'It grows from zero toward $I_0R$',
    ],
    correctIndex: 1,
    explanation: 'The inductor keeps $I_0$ flowing at first, so it must supply $I_0R$ to the resistor. From then on $|V_L| = |L\\,dI/dt| = I_0Re^{-t/\\tau}$, falling along with the current.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcrl-ent-4a',
    question: 'A $2.0$ H inductor in series with a $10$ Ω resistor forms one branch; a $40$ Ω resistor forms a second branch in parallel, both across a battery. After a long time the battery is disconnected. What is the time constant of the decay?',
    options: ['$200$ ms', '$50$ ms', '$40$ ms', '$250$ ms'],
    correctIndex: 2,
    explanation: 'With the battery gone, the inductor\'s current must circulate through both resistors in series, $50$ Ω, so $\\tau = 2.0/50 = 40$ ms. The value $200$ ms ($L/R_1$) is the growth time constant while the battery is connected.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcrl-ent-4b',
    question: 'A graph of current versus time for an RL circuit connected to a battery levels off at $2.0$ A, and its initial slope is $50$ A/s. The resistance is $5.0$ Ω. What is the inductance?',
    options: ['$0.008$ H', '$0.040$ H', '$10$ H', '$0.20$ H'],
    correctIndex: 3,
    explanation: 'The emf is $I_fR = 10$ V, and at $t = 0$ all of it is across the inductor: $L = \\mathcal{E}/(dI/dt) = 10/50 = 0.20$ H. Equivalently, $\\tau = I_f/(\\text{slope}) = 0.040$ s and $L = \\tau R$.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcrl-ent-5a',
    question: 'A $0.20$ H inductor carrying $3.0$ A is connected, through ideal wires, across an uncharged $50$ μF capacitor. What is the greatest voltage the capacitor reaches?',
    options: ['$190$ V', '$63$ V', '$570$ V', '$95$ V'],
    correctIndex: 0,
    explanation: 'All the magnetic energy becomes electric energy: $\\frac{1}{2}LI^2 = \\frac{1}{2}CV^2$, so $V = I\\sqrt{L/C} = 3.0\\sqrt{4000} \\approx 190$ V. Leaving out $I$ gives $63$ V.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcrl-ent-5b',
    question: 'In an RL circuit connected to a battery $\\mathcal{E}$, energy is stored in the inductor at a rate $dU/dt = \\mathcal{E}I - I^2R$. At what current is this rate greatest?',
    options: [
      '$\\frac{\\mathcal{E}}{R}$',
      '$\\frac{\\mathcal{E}}{2R}$',
      '$0$',
      '$\\frac{R}{\\mathcal{E}}$',
    ],
    correctIndex: 1,
    explanation: 'Setting $\\frac{d}{dI}(\\mathcal{E}I - I^2R) = \\mathcal{E} - 2IR = 0$ gives $I = \\mathcal{E}/(2R)$, half the final current. At $I = 0$ and at $I = \\mathcal{E}/R$ the storage rate is zero.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcrl-ent-6a',
    question: 'An ignition coil with $L = 5.0$ mH carries $3.0$ A. A switch cuts the current to zero in $20$ μs. What is the average induced emf during the cutoff?',
    options: ['$0.015$ V', '$150$ V', '$750$ V', '$7500$ V'],
    correctIndex: 2,
    explanation: '$|\\mathcal{E}| = L\\,\\Delta I/\\Delta t = (5.0 \\times 10^{-3})(3.0)/(20 \\times 10^{-6}) = 750$ V. The value $0.015$ is $LI$, the flux linkage in webers.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcrl-ent-6b',
    question: 'A $12$ V battery, a $6.0$ Ω resistor, and a $3.0$ H inductor have been in series for a long time. At $t = 0$ a second $6.0$ Ω resistor is switched into the loop in series. What is the current at $t = 0.25$ s?',
    options: ['$1.61$ A', '$0.74$ A', '$1.00$ A', '$1.37$ A'],
    correctIndex: 3,
    explanation: 'The current starts at $2.0$ A and heads toward $12/12 = 1.0$ A with $\\tau = 3.0/12 = 0.25$ s: $I = 1.0 + (2.0 - 1.0)e^{-1} \\approx 1.37$ A. Using the old time constant of $0.50$ s gives $1.61$ A.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcrl-ent-7a',
    question: 'A solenoid with $1000$ turns, length $0.40$ m, and cross-section $2.0 \\times 10^{-4}$ m$^2$ has an air core. What is its inductance? ($\\mu_0 = 4\\pi \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$6.3 \\times 10^{-4}$ H',
      '$6.3 \\times 10^{-7}$ H',
      '$1.0 \\times 10^{-4}$ H',
      '$1.6 \\times 10^{-3}$ H',
    ],
    correctIndex: 0,
    explanation: 'For a long solenoid $L = \\mu_0 N^2 A/\\ell = (4\\pi \\times 10^{-7})(1000^2)(2.0 \\times 10^{-4})/0.40 \\approx 6.3 \\times 10^{-4}$ H. Using $N$ instead of $N^2$ gives $6.3 \\times 10^{-7}$ H, multiplying by $\\ell$ gives $1.0 \\times 10^{-4}$ H, and dividing by $\\ell^2$ gives $1.6 \\times 10^{-3}$ H.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcrl-ent-7b',
    question: 'A superconducting coil (zero resistance) carrying a large current has its ends joined by a superconducting wire. What happens to the current?',
    options: [
      'It decays with a short time constant',
      'It stays constant',
      'It drops to zero at once',
      'It grows until the coil heats up',
    ],
    correctIndex: 1,
    explanation: 'With $R = 0$ the loop equation is $L\\,dI/dt = 0$, so the current cannot change; equivalently $\\tau = L/R \\to \\infty$. The energy $\\frac{1}{2}LI^2$ stays stored in the field.',
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
