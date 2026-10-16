/**
 * Entrance Quiz — AP Physics C: E&M, DC Circuits
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Current and Resistance',
  'Series and Parallel Circuits',
  'Kirchhoff\'s Rules',
  'RC Circuits',
  'EMF and Internal Resistance',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcdc-ent-1a',
    question: 'The current in a wire is $I(t) = 6t - 1.5t^2$ (amperes, seconds). How much charge passes a point between $t = 0$ and $t = 2.0$ s?',
    options: ['$12$ C', '$8$ C', '$16$ C', '$20$ C'],
    correctIndex: 1,
    explanation: '$Q = \\int_0^2 (6t - 1.5t^2)\\,dt = [3t^2 - 0.5t^3]_0^2 = 12 - 4 = 8$ C. Dropping the second term gives $12$ C, and flipping its sign gives $16$ C.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcdc-ent-1b',
    question: 'A metal wire of resistance $R$ is drawn out to three times its original length. Its volume and resistivity stay the same. What is its new resistance?',
    options: ['$9R$', '$3R$', '$R/3$', '$27R$'],
    correctIndex: 0,
    explanation: 'Fixed volume means the cross-section shrinks to $A/3$ as the length triples, so $R = \\rho L/A$ grows by $3 \\times 3 = 9$. Tripling only the length gives $3R$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcdc-ent-2a',
    question: 'An $18$ V ideal battery drives a $6.0$ Ω resistor in series with a parallel pair of $12$ Ω and $4.0$ Ω resistors. What is the current in the $12$ Ω resistor?',
    options: ['$1.5$ A', '$2.0$ A', '$0.5$ A', '$1.0$ A'],
    correctIndex: 2,
    explanation: 'The pair is $3.0$ Ω, so $R_{eq} = 9.0$ Ω and $I = 2.0$ A. The pair has $(2.0)(3.0) = 6.0$ V across it, so the $12$ Ω resistor carries $6.0/12 = 0.5$ A.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcdc-ent-2b',
    question: 'A resistor of length $L$ and uniform cross-section $A$ has resistivity that grows along it: $\\rho(x) = \\rho_0(1 + 3x/L)$. What is its total resistance?',
    options: [
      '$\\frac{4\\rho_0 L}{A}$',
      '$\\frac{\\rho_0 L}{A}$',
      '$\\frac{2\\rho_0 L}{A}$',
      '$\\frac{5\\rho_0 L}{2A}$',
    ],
    correctIndex: 3,
    explanation: 'Thin slices are in series, so $R = \\int_0^L \\frac{\\rho(x)\\,dx}{A} = \\frac{\\rho_0}{A}\\left(L + \\frac{3L}{2}\\right) = \\frac{5\\rho_0 L}{2A}$. Using the largest resistivity everywhere gives $4\\rho_0L/A$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcdc-ent-3a',
    question: 'A single loop contains a $12$ V battery and a $4.0$ V battery facing opposite ways (their positive terminals point in opposite directions around the loop), plus $2.0$ Ω and $6.0$ Ω resistors. What is the current?',
    options: ['$1.0$ A', '$2.0$ A', '$1.5$ A', '$0.5$ A'],
    correctIndex: 0,
    explanation: 'Going around the loop, the loop rule gives $12 - 4.0 - I(2.0 + 6.0) = 0$, so $I = 8.0/8.0 = 1.0$ A. Adding the two emfs gives $2.0$ A.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcdc-ent-3b',
    question: 'A battery $\\mathcal{E}$ charges a capacitor $C$ through a resistor $R$ in a single loop, with $q$ the capacitor\'s charge. Applying the loop rule with $I = dq/dt$, what is $dq/dt$?',
    options: [
      '$\\mathcal{E} - \\frac{q}{C}$',
      '$\\frac{\\mathcal{E}}{R} - \\frac{q}{RC}$',
      '$-\\frac{q}{RC}$',
      '$\\frac{\\mathcal{E} - q}{RC}$',
    ],
    correctIndex: 1,
    explanation: 'The loop rule gives $\\mathcal{E} - IR - q/C = 0$. Substituting $I = dq/dt$ and dividing by $R$: $dq/dt = \\mathcal{E}/R - q/(RC)$. The expression $-q/(RC)$ describes discharge with no battery.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcdc-ent-4a',
    question: 'An uncharged $50$ μF capacitor is charged through a $20$ kΩ resistor by a $9.0$ V battery. What is the capacitor voltage $2.0$ s after the switch closes?',
    options: ['$1.2$ V', '$5.7$ V', '$7.8$ V', '$9.0$ V'],
    correctIndex: 2,
    explanation: '$\\tau = RC = 1.0$ s, so $V_C = 9.0(1 - e^{-2}) \\approx 7.8$ V. The value $1.2$ V is $9.0e^{-2}$, the voltage across the resistor at that moment.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcdc-ent-4b',
    question: 'A charged capacitor discharges through a resistor with time constant $\\tau$. How long does it take for its charge to fall to $25\\%$ of its initial value?',
    options: ['$4\\tau$', '$\\tau/4$', '$0.75\\tau$', '$\\tau\\ln 4$'],
    correctIndex: 3,
    explanation: 'From $q = Q_0e^{-t/\\tau}$, setting $e^{-t/\\tau} = 1/4$ gives $t = \\tau\\ln 4 \\approx 1.39\\tau$. The value $0.75\\tau$ assumes the charge keeps falling at its initial rate.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcdc-ent-5a',
    question: 'A battery\'s terminal voltage is $11.0$ V when it supplies $1.0$ A and $10.0$ V when it supplies $3.0$ A. What is its emf?',
    options: ['$11.5$ V', '$11.0$ V', '$12.0$ V', '$10.5$ V'],
    correctIndex: 0,
    explanation: 'Using $V = \\mathcal{E} - Ir$ twice: $11.0 = \\mathcal{E} - r$ and $10.0 = \\mathcal{E} - 3r$, so $r = 0.50$ Ω and $\\mathcal{E} = 11.5$ V. The emf is the voltage at zero current, higher than either reading.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcdc-ent-5b',
    question: 'A car\'s headlights dim noticeably while the starter motor is cranking the engine. Both are connected in parallel across the same battery. Why do the lights dim?',
    options: [
      'The starter motor uses up part of the battery\'s emf',
      'The large current drops more voltage inside the battery',
      'The starter adds resistance in series with the lights',
      'Current is split, so less is left for the lights',
    ],
    correctIndex: 1,
    explanation: 'The starter draws a very large current, and the drop $Ir$ across the battery\'s internal resistance lowers the terminal voltage $\\mathcal{E} - Ir$. The lights, in parallel, see that lower voltage.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcdc-ent-6a',
    question: 'A $12$ V ideal battery is in series with a $3.0$ Ω and a $6.0$ Ω resistor, and a $4.0$ μF capacitor is connected across the $6.0$ Ω resistor. Long after the switch closes, how much charge is on the capacitor?',
    options: ['$48$ μC', '$16$ μC', '$32$ μC', '$0$ μC'],
    correctIndex: 2,
    explanation: 'In steady state the capacitor draws no current, so $I = 12/9.0$ A and the $6.0$ Ω resistor has $8.0$ V across it. Then $Q = CV = (4.0)(8.0) = 32$ μC.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcdc-ent-6b',
    question: 'For the same circuit ($3.0$ Ω in series with $6.0$ Ω, and a $4.0$ μF capacitor across the $6.0$ Ω), what is the time constant for charging the capacitor?',
    options: ['$36$ μs', '$12$ μs', '$24$ μs', '$8$ μs'],
    correctIndex: 3,
    explanation: 'With the ideal battery replaced by a wire, the capacitor sees $3.0$ Ω and $6.0$ Ω in parallel, $2.0$ Ω. So $\\tau = (2.0)(4.0 \\times 10^{-6}) = 8$ μs. Using the series total of $9.0$ Ω gives $36$ μs.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcdc-ent-7a',
    question: 'A $20$ μF capacitor charged to $50$ V is discharged through a resistor. How much thermal energy does the resistor produce in total?',
    options: ['$25$ mJ', '$50$ mJ', '$12.5$ mJ', '$0$ mJ'],
    correctIndex: 0,
    explanation: 'All the stored energy ends up as heat: $\\int_0^\\infty I^2R\\,dt = \\frac{1}{2}CV^2 = \\frac{1}{2}(20 \\times 10^{-6})(50)^2 = 25$ mJ, whatever the resistance.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcdc-ent-7b',
    question: 'A $60$ W bulb and a $100$ W bulb, both rated for $120$ V, are connected in series across $120$ V. Treating their resistances as constant, which glows brighter?',
    options: [
      'The $100$ W bulb, since it has the higher rating',
      'Both equally, since they carry the same current',
      'The $60$ W bulb, since it has more resistance',
      'The $100$ W bulb, since it has more resistance',
    ],
    correctIndex: 2,
    explanation: 'From $R = V^2/P$, the $60$ W bulb has $240$ Ω and the $100$ W bulb $144$ Ω. In series they share one current, so $P = I^2R$ is larger for the $60$ W bulb.',
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
