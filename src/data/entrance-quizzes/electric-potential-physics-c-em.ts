/**
 * Entrance Quiz — AP Physics C: E&M, Electric Potential
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Electric Potential Energy',
  'Electric Potential (Voltage)',
  'Potential and Field Relationship',
  'Potential of Charge Distributions',
  'Conductors and Potential',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcep-ent-1a',
    question: 'Three $+1.0$ μC point charges sit at the corners of an equilateral triangle with $0.30$ m sides. How much work was needed to assemble them from far apart? (Use $k = 9.0 \\times 10^9$ N$\\cdot$m$^2$/C$^2$.)',
    options: ['$180$ mJ', '$90$ mJ', '$300$ mJ', '$156$ mJ'],
    correctIndex: 1,
    explanation: 'The work equals the total potential energy, summed over the three distinct pairs: $U = 3kq^2/a = 3(9.0 \\times 10^9)(10^{-12})/0.30 = 0.090$ J. Counting each pair twice gives $180$ mJ.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcep-ent-1b',
    question: 'Two small $2.0$ g balls, each carrying $+1.0$ μC, are held $0.10$ m apart and released. How fast is each moving once they are far apart? (Use $k = 9.0 \\times 10^9$ N$\\cdot$m$^2$/C$^2$.)',
    options: ['$6.7$ m/s', '$9.5$ m/s', '$4.7$ m/s', '$45$ m/s'],
    correctIndex: 0,
    explanation: 'The initial energy $kq^2/r = 0.090$ J is shared equally, so each ball gets $0.045$ J: $v = \\sqrt{2(0.045)/0.0020} \\approx 6.7$ m/s. Giving all of it to one ball gives $9.5$ m/s.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcep-ent-2a',
    question: 'In a region the electric field points along $+x$ with magnitude $E = 300x^2$ (V/m, with $x$ in meters). What is $V(0) - V(2\\text{ m})$?',
    options: ['$-800$ V', '$2400$ V', '$800$ V', '$1200$ V'],
    correctIndex: 2,
    explanation: '$V(0) - V(2) = \\int_0^2 E\\,dx = [100x^3]_0^2 = 800$ V, so $x = 0$ is at higher potential, as expected since the field points from high to low potential. Using $E(2) \\times 2$ m gives $2400$ V.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcep-ent-2b',
    question: 'An electron is released from rest at point A in an electric field and moves on its own to point B. Which statement is correct?',
    options: [
      'B is at lower potential, and the electron\'s potential energy decreased',
      'B is at higher potential, and the electron\'s potential energy increased',
      'B is at lower potential, and the electron\'s potential energy increased',
      'B is at higher potential, and the electron\'s potential energy decreased',
    ],
    correctIndex: 3,
    explanation: 'Released from rest, the electron gains kinetic energy, so its potential energy $U = qV$ decreases. With $q < 0$, a drop in $U$ means a rise in $V$: electrons move toward higher potential.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcep-ent-3a',
    question: 'The potential in a region is $V(x, y) = 5x^2y - 2y^3$ (volts, meters). What is the electric field at $(1, 2)$ m?',
    options: [
      '$(-20\\hat{x} + 19\\hat{y})$ V/m',
      '$(20\\hat{x} - 19\\hat{y})$ V/m',
      '$(-20\\hat{x} - 29\\hat{y})$ V/m',
      '$(-10\\hat{x} + 19\\hat{y})$ V/m',
    ],
    correctIndex: 0,
    explanation: '$E_x = -\\partial V/\\partial x = -10xy = -20$ V/m and $E_y = -\\partial V/\\partial y = -(5x^2 - 6y^2) = +19$ V/m at $(1, 2)$. Forgetting the minus sign in $\\vec{E} = -\\nabla V$ flips both components.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcep-ent-3b',
    question: 'In a spherically symmetric region the potential is $V(r) = 40/r^2$ (volts, $r$ in meters). What is the electric field at $r = 2.0$ m?',
    options: ['$10$ V/m inward', '$10$ V/m outward', '$5$ V/m outward', '$5$ V/m inward'],
    correctIndex: 1,
    explanation: '$E_r = -dV/dr = 80/r^3 = 10$ V/m at $r = 2.0$ m. It is positive, so the field points outward, toward decreasing potential. Dividing $V$ by $r$ gives $5$ V/m.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcep-ent-4a',
    question: 'A thin ring of radius $R$ carries charge $Q$ spread uniformly. What is the potential at a point on its axis a distance $R$ from the center?',
    options: ['$\\frac{kQ}{R}$', '$\\frac{kQ}{2R}$', '$\\frac{kQ}{\\sqrt{2}\\,R}$', '$\\frac{kQ}{2R^2}$'],
    correctIndex: 2,
    explanation: 'Every bit of charge is the same distance $\\sqrt{R^2 + R^2} = \\sqrt{2}\\,R$ from the point, so $V = \\int k\\,dq/r = kQ/(\\sqrt{2}\\,R)$. No vector components are needed because potential is a scalar.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcep-ent-4b',
    question: 'A $0.20$ m rod carries a uniform $2.0$ nC/m. What is the potential at a point on the rod\'s axis $0.10$ m beyond its near end? (Use $k = 9.0 \\times 10^9$ N$\\cdot$m$^2$/C$^2$.)',
    options: ['$18.0$ V', '$36.0$ V', '$12.0$ V', '$19.8$ V'],
    correctIndex: 3,
    explanation: '$V = \\int_{0.10}^{0.30} \\frac{k\\lambda\\,dx}{x} = k\\lambda\\ln 3 = (18)(1.10) \\approx 19.8$ V. Treating the rod as a point charge at its center gives $18.0$ V.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcep-ent-5a',
    question: 'Two distant conducting spheres of radii $R$ and $3R$ are joined by a thin wire and share a total charge $Q$. How much charge ends up on the smaller sphere?',
    options: ['$Q/4$', '$3Q/4$', '$Q/10$', '$Q/28$'],
    correctIndex: 0,
    explanation: 'Connected conductors reach the same potential: $kq_1/R = kq_2/(3R)$, so $q_2 = 3q_1$ and $q_1 = Q/4$. Splitting by surface area gives $Q/10$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcep-ent-5b',
    question: 'A solid conducting sphere of radius $R$ carries charge $Q$. Which describes its potential $V(r)$ as a function of distance from the center?',
    options: [
      'Zero inside, then $kQ/r$ outside',
      'Constant at $kQ/R$ inside, then falling as $1/r$ outside',
      'Rising linearly inside, then falling as $1/r$ outside',
      'Constant inside, then falling as $1/r^2$ outside',
    ],
    correctIndex: 1,
    explanation: 'Since $E = 0$ inside, $V$ does not change there and equals its surface value $kQ/R$. Outside, $V = -\\int_\\infty^r E\\,dr = kQ/r$. The potential is continuous even though $E$ jumps at the surface.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcep-ent-6a',
    question: 'An electron starts from rest and is accelerated through a potential difference of $500$ V. What is its final speed? ($e = 1.6 \\times 10^{-19}$ C, $m_e = 9.11 \\times 10^{-31}$ kg)',
    options: [
      '$3.1 \\times 10^5$ m/s',
      '$1.8 \\times 10^{14}$ m/s',
      '$1.3 \\times 10^7$ m/s',
      '$9.4 \\times 10^6$ m/s',
    ],
    correctIndex: 2,
    explanation: 'It gains $500$ eV $= 8.0 \\times 10^{-17}$ J, so $v = \\sqrt{2K/m_e} \\approx 1.3 \\times 10^7$ m/s. A proton through the same voltage would reach only $3.1 \\times 10^5$ m/s.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcep-ent-6b',
    question: 'A proton far away moves at $2.0 \\times 10^5$ m/s straight toward a fixed $+2.0$ nC point charge. How close does it get? ($e = 1.6 \\times 10^{-19}$ C, $m_p = 1.67 \\times 10^{-27}$ kg, $k = 9.0 \\times 10^9$ N$\\cdot$m$^2$/C$^2$)',
    options: ['$0.043$ m', '$0.29$ m', '$0.17$ m', '$0.086$ m'],
    correctIndex: 3,
    explanation: 'All of its kinetic energy, $\\frac{1}{2}m_pv^2 = 3.34 \\times 10^{-17}$ J, becomes $U = kQe/r$. So $r = kQe/K \\approx 0.086$ m. Dropping the $\\frac{1}{2}$ in the kinetic energy gives $0.043$ m.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcep-ent-7a',
    question: 'A conducting sphere of radius $0.050$ m carries $+5.0$ nC. How much work must an external agent do to move a $+2.0$ nC charge slowly from $0.30$ m (from the center) to the sphere\'s surface? (Use $k = 9.0 \\times 10^9$ N$\\cdot$m$^2$/C$^2$.)',
    options: [
      '$1.5 \\times 10^{-6}$ J',
      '$1.8 \\times 10^{-6}$ J',
      '$3.0 \\times 10^{-7}$ J',
      '$-1.5 \\times 10^{-6}$ J',
    ],
    correctIndex: 0,
    explanation: 'The potential rises from $kQ/0.30 = 150$ V to $kQ/0.050 = 900$ V, so $W = q\\Delta V = (2.0 \\times 10^{-9})(750) = 1.5 \\times 10^{-6}$ J. The value $1.8 \\times 10^{-6}$ J would start from infinity.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcep-ent-7b',
    question: 'Two $+q$ charges are a distance $d$ apart. What are the electric field and the potential at the midpoint between them?',
    options: [
      '$E = 0$, $V = 0$',
      '$E = 8kq/d^2$, $V = 0$',
      '$E = 0$, $V = 4kq/d$',
      '$E = 8kq/d^2$, $V = 4kq/d$',
    ],
    correctIndex: 2,
    explanation: 'The two fields are equal and opposite, so $E = 0$. Potentials are scalars and add: $V = 2 \\cdot kq/(d/2) = 4kq/d$. A zero field only means $V$ is not changing there.',
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
