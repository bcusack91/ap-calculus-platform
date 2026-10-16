/**
 * Entrance Quiz — AP Physics C: E&M, Magnetic Fields
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Magnetic Force on Charges',
  'Force on Current-Carrying Wires',
  'Biot-Savart Law',
  'Ampere\'s Law',
  'Magnetic Flux',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcmb-ent-1a',
    question: 'A proton moves at $3.0 \\times 10^5$ m/s at $30°$ to a uniform $0.10$ T field, so it spirals in a helix. What is the radius of the helix? ($m_p = 1.67 \\times 10^{-27}$ kg, $e = 1.6 \\times 10^{-19}$ C)',
    options: ['$1.6$ cm', '$3.1$ cm', '$2.7$ cm', '$0.78$ cm'],
    correctIndex: 0,
    explanation: 'Only the perpendicular component $v\\sin 30° = 1.5 \\times 10^5$ m/s is turned by the field, so $r = mv_\\perp/(qB) \\approx 0.016$ m. Using the full speed gives $3.1$ cm.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcmb-ent-1b',
    question: 'A charged particle is moving exactly parallel to a uniform magnetic field. What path does it follow?',
    options: [
      'A circle in the plane perpendicular to the field',
      'A straight line',
      'A helix with steadily growing radius',
      'A parabola that bends sideways',
    ],
    correctIndex: 1,
    explanation: 'The force has magnitude $qvB\\sin\\theta$, and $\\theta = 0$ here, so there is no magnetic force. The particle keeps its velocity and moves in a straight line.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcmb-ent-2a',
    question: 'A long straight wire carries $30$ A. In the same plane, a rectangular loop carries $2.0$ A; its sides parallel to the wire are $0.20$ m long, $0.020$ m and $0.060$ m from the wire, and its near-side current is parallel to the wire\'s. What is the net force on the loop? ($\\mu_0/2\\pi = 2 \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$1.2 \\times 10^{-4}$ N, toward the wire',
      '$0$ N',
      '$8.0 \\times 10^{-5}$ N, toward the wire',
      '$1.6 \\times 10^{-4}$ N, toward the wire',
    ],
    correctIndex: 2,
    explanation: 'The near side is pulled in with $\\frac{\\mu_0 I_1I_2L}{2\\pi(0.020)} = 1.2 \\times 10^{-4}$ N and the far side pushed out with $4.0 \\times 10^{-5}$ N; the end pieces cancel. The net force is $8.0 \\times 10^{-5}$ N toward the wire. Zero applies only in a uniform field.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcmb-ent-2b',
    question: 'A long horizontal wire with $0.010$ kg/m of mass floats $1.0$ cm directly above a fixed parallel wire, both carrying the same current $I$. What current is needed, and how must the currents be directed? ($\\mu_0/2\\pi = 2 \\times 10^{-7}$ T$\\cdot$m/A, $g = 9.8$ m/s$^2$)',
    options: [
      '$70$ A, in the same direction',
      '$4900$ A, in opposite directions',
      '$35$ A, in opposite directions',
      '$70$ A, in opposite directions',
    ],
    correctIndex: 3,
    explanation: 'The upper wire needs an upward (repulsive) force, so the currents must be opposite. Per meter, $\\mu_0I^2/(2\\pi d) = \\lambda g$ gives $I^2 = (0.010)(9.8)(0.010)/(2 \\times 10^{-7}) = 4900$, so $I = 70$ A.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcmb-ent-3a',
    question: 'A wire carrying $10$ A runs in along a radius, around a semicircular arc of radius $0.050$ m, and back out along a radius. What field does it produce at the arc\'s center? ($\\mu_0 = 4\\pi \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$6.3 \\times 10^{-5}$ T',
      '$1.3 \\times 10^{-4}$ T',
      '$4.0 \\times 10^{-5}$ T',
      '$2.0 \\times 10^{-5}$ T',
    ],
    correctIndex: 0,
    explanation: 'The radial leads point straight at the center, so $d\\vec{l} \\times \\hat{r} = 0$ there. Every arc element is at distance $R$ and perpendicular to $\\hat{r}$, so the half loop gives $B = \\mu_0I/(4R) \\approx 6.3 \\times 10^{-5}$ T. A full loop would give twice that.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcmb-ent-3b',
    question: 'A straight wire segment of length $2d$ carries current $I$. What is the field at a point a distance $d$ from its midpoint, on its perpendicular bisector?',
    options: [
      '$\\frac{\\mu_0 I}{2\\pi d}$',
      '$\\frac{\\mu_0 I}{2\\sqrt{2}\\,\\pi d}$',
      '$\\frac{\\mu_0 I}{4\\pi d}$',
      '$\\frac{\\mu_0 I}{2d}$',
    ],
    correctIndex: 1,
    explanation: 'Integrating Biot–Savart along the segment gives $B = \\frac{\\mu_0 I}{2\\pi d}\\sin\\theta$, where each end is seen at $\\sin\\theta = d/\\sqrt{d^2 + d^2} = 1/\\sqrt{2}$. The infinite-wire value $\\frac{\\mu_0 I}{2\\pi d}$ is too large because the segment is short.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcmb-ent-4a',
    question: 'A long wire of radius $4.0$ mm carries $10$ A spread uniformly over its cross-section. What is the field $2.0$ mm from its axis? ($\\mu_0/2\\pi = 2 \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$1.0 \\times 10^{-3}$ T',
      '$5.0 \\times 10^{-4}$ T',
      '$2.5 \\times 10^{-4}$ T',
      '$1.3 \\times 10^{-4}$ T',
    ],
    correctIndex: 2,
    explanation: 'An Amperian circle of radius $r$ encloses $I(r/a)^2 = 2.5$ A, so $B = \\mu_0Ir/(2\\pi a^2) = 2.5 \\times 10^{-4}$ T. Using the full $10$ A at $r = 2.0$ mm gives $1.0 \\times 10^{-3}$ T.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcmb-ent-4b',
    question: 'A long, thin-walled hollow metal tube of radius $a$ carries current $I$ along its length, spread evenly around its wall. What is the magnetic field inside the tube, at distance $r < a$ from the axis?',
    options: [
      '$\\frac{\\mu_0 I}{2\\pi r}$',
      '$\\frac{\\mu_0 I r}{2\\pi a^2}$',
      '$\\mu_0 n I$',
      '$0$',
    ],
    correctIndex: 3,
    explanation: 'A circular Amperian loop inside the tube encloses no current, and by symmetry $B$ would be the same all around it. So $B(2\\pi r) = 0$ and the field is zero inside.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcmb-ent-5a',
    question: 'A long wire carries $15$ A. A rectangular loop in the same plane has sides $0.20$ m long parallel to the wire, at distances $0.020$ m and $0.080$ m from it. What is the magnetic flux through the loop? ($\\mu_0/2\\pi = 2 \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$8.3 \\times 10^{-7}$ Wb',
      '$1.8 \\times 10^{-6}$ Wb',
      '$4.5 \\times 10^{-7}$ Wb',
      '$7.2 \\times 10^{-7}$ Wb',
    ],
    correctIndex: 0,
    explanation: 'The field varies as $1/r$, so integrate strips: $\\Phi = \\frac{\\mu_0I\\ell}{2\\pi}\\int_{0.020}^{0.080}\\frac{dr}{r} = (6.0 \\times 10^{-7})\\ln 4 \\approx 8.3 \\times 10^{-7}$ Wb. Using the near-side field times the area gives $1.8 \\times 10^{-6}$ Wb.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcmb-ent-5b',
    question: 'A closed plastic bag encloses only the north end of a bar magnet. What is the net magnetic flux out of the bag?',
    options: [
      'Positive, since lines leave the north pole',
      'Zero, since field lines that leave must re-enter',
      'Negative, since lines enter the north pole',
      'Equal to $BA$ for the bag\'s largest face',
    ],
    correctIndex: 1,
    explanation: 'Gauss\'s law for magnetism, $\\oint\\vec{B}\\cdot d\\vec{A} = 0$, holds for every closed surface. Field lines inside the magnet run back to the north end, so as many lines enter the bag as leave it.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcmb-ent-6a',
    question: 'Two long parallel wires $4.0$ cm apart carry $5.0$ A and $8.0$ A in the same direction. What is the magnetic field midway between them? ($\\mu_0/2\\pi = 2 \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$1.3 \\times 10^{-4}$ T',
      '$1.5 \\times 10^{-5}$ T',
      '$3.0 \\times 10^{-5}$ T',
      '$0$ T',
    ],
    correctIndex: 2,
    explanation: 'At $2.0$ cm, the wires give $5.0 \\times 10^{-5}$ T and $8.0 \\times 10^{-5}$ T. For parallel currents these point in opposite directions between the wires, so the net field is $3.0 \\times 10^{-5}$ T. Adding them gives $1.3 \\times 10^{-4}$ T.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcmb-ent-6b',
    question: 'You need the magnetic field at the center of a square loop carrying current $I$. Which approach works?',
    options: [
      'Ampère\'s law around the square',
      'Gauss\'s law for magnetism',
      'Faraday\'s law of induction',
      'Biot–Savart for each of the four sides',
    ],
    correctIndex: 3,
    explanation: 'There is no symmetry that makes $B$ constant along an Amperian loop, so Ampère\'s law cannot be solved for $B$ here. Integrating Biot–Savart for one finite side and multiplying by four gives the field.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcmb-ent-7a',
    question: 'Ions leave a velocity selector ($E = 2.0 \\times 10^4$ V/m, $B_1 = 0.050$ T) and enter a $0.25$ T field, where a singly charged ion moves on a circle of radius $3.3$ cm. What is its mass? ($e = 1.6 \\times 10^{-19}$ C)',
    options: [
      '$3.3 \\times 10^{-27}$ kg',
      '$6.6 \\times 10^{-28}$ kg',
      '$1.3 \\times 10^{-24}$ kg',
      '$1.7 \\times 10^{-27}$ kg',
    ],
    correctIndex: 0,
    explanation: 'The selector passes $v = E/B_1 = 4.0 \\times 10^5$ m/s. Then $m = qB_2r/v = (1.6 \\times 10^{-19})(0.25)(0.033)/(4.0 \\times 10^5) \\approx 3.3 \\times 10^{-27}$ kg. Using $B_1$ in place of $B_2$ gives $6.6 \\times 10^{-28}$ kg.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcmb-ent-7b',
    question: 'A proton moves parallel to a long straight wire, in the same direction as the wire\'s current. Which way does the magnetic force on the proton point?',
    options: [
      'Away from the wire',
      'Along the wire, speeding it up',
      'Toward the wire',
      'Around the wire in a circle',
    ],
    correctIndex: 2,
    explanation: 'The wire\'s field circles it, and $q\\vec{v} \\times \\vec{B}$ for a positive charge moving with the current points toward the wire, just as parallel currents attract. A magnetic force can never speed the proton up.',
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
