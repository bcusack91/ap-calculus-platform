/**
 * Entrance Quiz — AP Physics C: E&M, Electromagnetic Induction
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Faraday\'s Law',
  'Motional EMF',
  'Self-Inductance',
  'RL Circuits',
  'LC Circuits & EM Oscillations',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcind-ent-1a',
    question: 'A $50$-turn coil of area $0.010$ m$^2$ sits with its axis along a field that grows as $B(t) = 0.20t^2$ (tesla, seconds). What is the magnitude of the induced emf at $t = 3.0$ s?',
    options: ['$0.60$ V', '$0.012$ V', '$0.90$ V', '$0.30$ V'],
    correctIndex: 0,
    explanation: '$|\\mathcal{E}| = NA\\,dB/dt = (50)(0.010)(0.40t) = 0.60$ V at $3.0$ s. Leaving out the $50$ turns gives $0.012$ V, and $0.90$ is the flux linkage $NAB$ in webers.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcind-ent-1b',
    question: 'A wire loop lies in the plane of the page, in a uniform field pointing into the page. The field strength is decreasing. Viewed from the front, which way does the induced current flow?',
    options: [
      'Counterclockwise',
      'Clockwise',
      'Zero, since the field is uniform',
      'Clockwise, then counterclockwise',
    ],
    correctIndex: 1,
    explanation: 'The into-page flux is decreasing, so by Lenz\'s law the induced current makes its own into-page field inside the loop to oppose the decrease. By the right-hand rule that current is clockwise.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcind-ent-2a',
    question: 'A $0.25$ m rod slides at a constant $4.0$ m/s along rails joined by a $0.10$ Ω resistor, in a $0.50$ T field perpendicular to the rails\' plane. What force must be applied to keep it moving at that speed?',
    options: ['$2.50$ N', '$5.00$ N', '$0.63$ N', '$0.13$ N'],
    correctIndex: 2,
    explanation: '$\\mathcal{E} = BLv = 0.50$ V, so $I = 5.0$ A and the magnetic drag is $BIL = (0.50)(5.0)(0.25) \\approx 0.63$ N, which the applied force must balance. The value $2.50$ is the power in watts.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcind-ent-2b',
    question: 'A horizontal $0.050$ kg rod, $0.40$ m long, falls between frictionless vertical rails joined by a $0.80$ Ω resistor, in a $0.50$ T horizontal field perpendicular to the rails\' plane. What is its terminal speed? (Use $g = 9.8$ m/s$^2$.)',
    options: ['$2.0$ m/s', '$4.9$ m/s', '$19.6$ m/s', '$9.8$ m/s'],
    correctIndex: 3,
    explanation: 'At terminal speed the magnetic force $B^2L^2v/R$ balances $mg$: $v_t = mgR/(B^2L^2) = (0.392)/(0.040) = 9.8$ m/s. Forgetting to square $B$ and $L$ gives $2.0$ m/s.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcind-ent-3a',
    question: 'An air-core solenoid has $400$ turns, a length of $0.20$ m, and a cross-sectional area of $5.0 \\times 10^{-4}$ m$^2$. What is its self-inductance? ($\\mu_0 = 4\\pi \\times 10^{-7}$ T$\\cdot$m/A)',
    options: ['$0.50$ mH', '$1.3$ μH', '$20$ μH', '$2.5$ mH'],
    correctIndex: 0,
    explanation: 'Each turn links $\\mu_0nIA$ and there are $N$ turns, so $L = \\mu_0N^2A/l = (4\\pi \\times 10^{-7})(1.6 \\times 10^5)(5.0 \\times 10^{-4})/0.20 \\approx 5.0 \\times 10^{-4}$ H. Using $N$ instead of $N^2$ gives $1.3$ μH.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcind-ent-3b',
    question: 'The current in a $0.50$ H inductor is $I(t) = 2t^2$ (amperes, seconds). What is the magnitude of the self-induced emf at $t = 3.0$ s?',
    options: ['$9.0$ V', '$6.0$ V', '$18.0$ V', '$12.0$ V'],
    correctIndex: 1,
    explanation: '$|\\mathcal{E}| = L\\,dI/dt = (0.50)(4t) = 6.0$ V at $3.0$ s. The emf depends on how fast the current changes, not on the current itself; $L \\times I$ would give $9.0$.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcind-ent-4a',
    question: 'A $9.0$ V battery is switched into series with a $3.0$ Ω resistor and a $0.60$ H inductor. What is the current $0.40$ s after the switch closes?',
    options: ['$0.41$ A', '$1.9$ A', '$2.6$ A', '$3.0$ A'],
    correctIndex: 2,
    explanation: '$\\tau = L/R = 0.20$ s, so $I = (9.0/3.0)(1 - e^{-2}) \\approx 2.6$ A. The value $0.41$ A is $3.0e^{-2}$, how far the current still is from its final value.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcind-ent-4b',
    question: 'A battery of emf $\\mathcal{E}$ has been connected for a long time to a resistor in series with an ideal inductor. What is the voltage across the inductor now?',
    options: ['$\\mathcal{E}$', '$\\mathcal{E}/2$', '$\\mathcal{E}e^{-1}$', '$0$'],
    correctIndex: 3,
    explanation: 'In steady state the current is constant, so $L\\,dI/dt = 0$ and the ideal inductor acts as a wire. The full emf is across the resistor. (Right after the switch closes, it is the other way around.)',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcind-ent-5a',
    question: 'An ideal LC circuit has $L = 5.0$ mH and $C = 20$ μF. What is the period of its oscillation?',
    options: ['$2.0$ ms', '$0.32$ ms', '$1.0$ ms', '$6.3$ ms'],
    correctIndex: 0,
    explanation: 'The loop equation $L\\ddot{q} + q/C = 0$ gives $\\omega = 1/\\sqrt{LC}$, so $T = 2\\pi\\sqrt{LC} = 2\\pi\\sqrt{1.0 \\times 10^{-7}} \\approx 2.0$ ms. The value $0.32$ ms is $\\sqrt{LC} = 1/\\omega$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcind-ent-5b',
    question: 'In an ideal LC circuit the maximum current is $I_{\\max}$. What is the current at an instant when the capacitor holds half its maximum charge?',
    options: [
      '$\\frac{1}{2}I_{\\max}$',
      '$\\frac{\\sqrt{3}}{2}I_{\\max}$',
      '$\\frac{3}{4}I_{\\max}$',
      '$I_{\\max}$',
    ],
    correctIndex: 1,
    explanation: 'Energy is conserved: $\\frac{1}{2}LI^2 + \\frac{q^2}{2C} = \\frac{1}{2}LI_{\\max}^2$. At $q = Q_0/2$ the capacitor holds $\\frac{1}{4}$ of the energy, so $I^2 = \\frac{3}{4}I_{\\max}^2$ and $I = \\frac{\\sqrt{3}}{2}I_{\\max}$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcind-ent-6a',
    question: 'A square loop $0.10$ m on a side, with resistance $0.20$ Ω, is pushed at a constant $3.0$ m/s into a region of uniform $0.40$ T field perpendicular to its plane. How much energy is dissipated while it enters?',
    options: ['$7.2$ mJ', '$72$ mJ', '$2.4$ mJ', '$1.2$ mJ'],
    correctIndex: 2,
    explanation: 'While entering, $\\mathcal{E} = BLv = 0.12$ V and $I = 0.60$ A, so the power is $I^2R = 0.072$ W. Entering takes $0.10/3.0 = 0.033$ s, so the energy is $2.4 \\times 10^{-3}$ J.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcind-ent-6b',
    question: 'A $20$-turn coil of area $5.0 \\times 10^{-3}$ m$^2$ and resistance $2.0$ Ω starts with its face perpendicular to a $0.30$ T field and is flipped over by $180°$. How much charge flows through it?',
    options: [
      '$0.015$ C',
      '$1.5 \\times 10^{-3}$ C',
      '$0$ C',
      '$0.030$ C',
    ],
    correctIndex: 3,
    explanation: 'The flux through each turn goes from $+BA$ to $-BA$, a change of $2BA = 3.0 \\times 10^{-3}$ Wb. Then $q = N\\Delta\\Phi/R = (20)(3.0 \\times 10^{-3})/2.0 = 0.030$ C. Using a change of only $BA$ gives $0.015$ C.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcind-ent-7a',
    question: 'A single loop of area $0.060$ m$^2$ and resistance $0.30$ Ω lies perpendicular to a field that decays as $B(t) = 0.50e^{-t/4.0}$ (tesla, seconds). How much charge flows through the loop from $t = 0$ until the field is gone?',
    options: ['$0.10$ C', '$0.025$ C', '$0.40$ C', '$0.030$ C'],
    correctIndex: 0,
    explanation: 'Integrating $I = \\mathcal{E}/R$ over time gives $q = \\Delta\\Phi/R = (0.060)(0.50)/0.30 = 0.10$ C. The value $0.030$ is the flux change in webers, before dividing by $R$.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcind-ent-7b',
    question: 'The same coil is flipped through $180°$ in a steady field twice: once slowly and once ten times faster. How does the total charge that flows compare?',
    options: [
      'Larger for the fast flip, since its emf is larger',
      'The same, since $q = N\\Delta\\Phi_B/R$ does not depend on time',
      'Smaller for the fast flip, since there is less time',
      'Larger for the fast flip, by a factor of ten',
    ],
    correctIndex: 1,
    explanation: 'A faster flip gives a larger emf for a shorter time. Since $q = \\int I\\,dt = \\frac{N}{R}\\int \\frac{d\\Phi_B}{dt}\\,dt = N\\Delta\\Phi_B/R$, the two effects cancel exactly.',
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
