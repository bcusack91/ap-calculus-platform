/**
 * Entrance Quiz — AP Physics C: E&M, Capacitors & Dielectrics
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Capacitance',
  'Parallel-Plate Capacitors',
  'Series & Parallel Combinations',
  'Energy Stored',
  'Dielectrics',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pccap-ent-1a',
    question: 'A capacitor holds $18$ μC when charged to $6.0$ V. How much charge does it hold when charged to $2.0$ V?',
    options: ['$18$ μC', '$6$ μC', '$54$ μC', '$108$ μC'],
    correctIndex: 1,
    explanation: 'Capacitance is fixed by geometry: $C = 18/6.0 = 3.0$ μF. At $2.0$ V, $Q = CV = 6$ μC. Keeping $18$ μC treats the charge, rather than $C$, as fixed.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccap-ent-1b',
    question: 'An uncharged capacitor is connected to a $9$ V battery. Charge flows onto its plates for a short time and then stops. Why does it stop?',
    options: [
      'The voltage across the plates reaches $9$ V',
      'The plates run out of free electrons',
      'The dielectric becomes saturated',
      'The current reaches its maximum value',
    ],
    correctIndex: 0,
    explanation: 'As charge builds up, the capacitor\'s voltage $V = Q/C$ rises. Once it matches the battery\'s $9$ V, there is no net potential difference around the loop to drive more charge.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccap-ent-2a',
    question: 'A parallel-plate capacitor has square plates $10$ cm on a side, $0.50$ mm apart, with air between them. How much charge does it hold at $100$ V? ($\\epsilon_0 = 8.85 \\times 10^{-12}$ C$^2$/(N$\\cdot$m$^2$))',
    options: ['$1.77$ nC', '$177$ nC', '$17.7$ nC', '$8.85$ nC'],
    correctIndex: 2,
    explanation: '$C = \\epsilon_0A/d = (8.85 \\times 10^{-12})(0.010)/(5.0 \\times 10^{-4}) = 177$ pF, so $Q = CV = 1.77 \\times 10^{-8}$ C $= 17.7$ nC. Taking the gap as $5.0$ mm gives $1.77$ nC.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccap-ent-2b',
    question: 'A charged parallel-plate capacitor is disconnected from its battery, and then its plates are pulled apart to twice the separation. What happens to the electric field between the plates?',
    options: ['It doubles in size', 'It drops to half', 'It grows fourfold', 'It remains unchanged'],
    correctIndex: 3,
    explanation: 'With the battery disconnected, $Q$ and so $\\sigma$ stay fixed, and $E = \\sigma/\\epsilon_0$ does not depend on the gap. The voltage $V = Ed$ doubles instead.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccap-ent-3a',
    question: 'A $2.0$ μF and a $4.0$ μF capacitor are in parallel, and that pair is in series with a $3.0$ μF capacitor across a $9.0$ V battery. What is the charge on the $4.0$ μF capacitor?',
    options: ['$12$ μC', '$18$ μC', '$36$ μC', '$6$ μC'],
    correctIndex: 0,
    explanation: 'The pair acts as $6.0$ μF, in series with $3.0$ μF for $C_{eq} = 2.0$ μF and $Q = 18$ μC. The pair then has $18/6.0 = 3.0$ V across it, so the $4.0$ μF capacitor holds $12$ μC.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccap-ent-3b',
    question: 'Two capacitors of different capacitance are connected in series across a battery. Which one has the larger voltage across it?',
    options: [
      'The larger capacitor, since it stores more charge',
      'The smaller capacitor, since both carry equal charge',
      'They share the voltage equally',
      'The larger one, since $V = QC$',
    ],
    correctIndex: 1,
    explanation: 'Series capacitors carry the same charge $Q$, so $V = Q/C$ is largest for the smallest $C$.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccap-ent-4a',
    question: 'An uncharged $5.0$ μF capacitor is charged through a resistor by a $200$ V battery. How much energy is dissipated in the resistor during the charging?',
    options: ['$0.20$ J', '$0$ J', '$0.10$ J', '$0.05$ J'],
    correctIndex: 2,
    explanation: 'The battery does work $QV = (1.0 \\times 10^{-3})(200) = 0.20$ J, but the capacitor stores only $\\int_0^Q (q/C)\\,dq = \\frac{1}{2}QV = 0.10$ J. The other $0.10$ J becomes heat in the resistor.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccap-ent-4b',
    question: 'A parallel-plate capacitor stays connected to a battery while its plate separation is doubled. What happens to the energy it stores?',
    options: ['Doubles', 'Quadruples', 'Stays the same', 'Halves'],
    correctIndex: 3,
    explanation: 'The battery holds $V$ fixed while $C = \\epsilon_0A/d$ halves, so $U = \\frac{1}{2}CV^2$ halves. (With the battery disconnected, $Q$ would be fixed and $U$ would double instead.)',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccap-ent-5a',
    question: 'A $3.0$ μF air capacitor stays connected to a $10$ V battery while a slab with $\\kappa = 4.0$ is slid in to fill the gap. What is the charge on it afterward?',
    options: ['$120$ μC', '$30$ μC', '$7.5$ μC', '$480$ μC'],
    correctIndex: 0,
    explanation: 'The capacitance becomes $\\kappa C_0 = 12$ μF while the battery holds $V = 10$ V, so $Q = 120$ μC; the battery supplies the extra charge. Dividing by $\\kappa$ assumes the charge, not the voltage, is fixed.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccap-ent-5b',
    question: 'A $4.0$ μF air capacitor stays connected to a $12$ V battery while a slab with $\\kappa = 2.5$ is inserted to fill the gap. By how much does its stored energy change?',
    options: ['$-173$ μJ', '$+432$ μJ', '$+720$ μJ', '$+288$ μJ'],
    correctIndex: 1,
    explanation: 'Initially $U = \\frac{1}{2}(4.0 \\times 10^{-6})(144) = 288$ μJ. With $C = 10$ μF at the same $12$ V, $U = 720$ μJ, an increase of $432$ μJ. A negative change would apply only if the charge were held fixed.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccap-ent-6a',
    question: 'A $4.0$ μF capacitor charged to $12$ V is disconnected and then connected across an uncharged $2.0$ μF capacitor. How much energy is lost in the process?',
    options: ['$192$ μJ', '$288$ μJ', '$96$ μJ', '$144$ μJ'],
    correctIndex: 2,
    explanation: 'The $48$ μC is shared at a common voltage $48/6.0 = 8.0$ V. The energy drops from $\\frac{1}{2}(4.0)(144) = 288$ μJ to $\\frac{1}{2}(6.0)(64) = 192$ μJ, so $96$ μJ is lost as heat and radiation in the connecting wires.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccap-ent-6b',
    question: 'A $2.0$ μF and a $3.0$ μF capacitor are in series, and that pair is in parallel with a $4.0$ μF capacitor, all across a $10$ V battery. What is the charge on the $3.0$ μF capacitor?',
    options: ['$30$ μC', '$52$ μC', '$20$ μC', '$12$ μC'],
    correctIndex: 3,
    explanation: 'The series pair has $C_s = (2.0)(3.0)/5.0 = 1.2$ μF and the full $10$ V across it, so each of the two carries $Q = 12$ μC. The value $30$ μC would need the whole $10$ V across the $3.0$ μF capacitor alone.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccap-ent-7a',
    question: 'A coaxial cable $1.0$ m long has inner radius $a$ and outer radius $b = ea$ (so $\\ln(b/a) = 1$), with air between. What is its capacitance? ($\\epsilon_0 = 8.85 \\times 10^{-12}$ C$^2$/(N$\\cdot$m$^2$))',
    options: ['$56$ pF', '$28$ pF', '$111$ pF', '$20$ pF'],
    correctIndex: 0,
    explanation: 'Gauss\'s law gives $E = \\lambda/(2\\pi\\epsilon_0 r)$, so $V = \\frac{\\lambda}{2\\pi\\epsilon_0}\\ln(b/a)$ and $C = 2\\pi\\epsilon_0L/\\ln(b/a) \\approx 56$ pF. Dividing by $b/a$ instead of $\\ln(b/a)$ gives $20$ pF.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pccap-ent-7b',
    question: 'A parallel-plate capacitor has capacitance $C_0$ in air. A dielectric slab with $\\kappa = 3$, as thick as the gap, is slid in to cover half of the plate area. What is the new capacitance?',
    options: ['$1.5C_0$', '$2C_0$', '$3C_0$', '$4C_0$'],
    correctIndex: 1,
    explanation: 'The two halves sit side by side at the same voltage, so they act in parallel: $C = \\frac{1}{2}C_0 + \\frac{1}{2}(3C_0) = 2C_0$. The value $1.5C_0$ would apply to a slab filling half the gap across the whole area (a series arrangement).',
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
