/**
 * Entrance Quiz — AP Physics C: E&M, Coulomb's Law & Electric Fields
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Electric Charge',
  'Coulomb\'s Law',
  'Superposition Principle',
  'Electric Field',
  'Field Lines',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pccl-ent-1a',
    question: 'Three identical metal spheres carry $+8$ μC (A), $-2$ μC (B), and $0$ (C). A touches B and is separated, then A touches C and is separated. What is A\'s final charge?',
    options: ['$+1.5$ μC', '$+3$ μC', '$+2$ μC', '$+4$ μC'],
    correctIndex: 0,
    explanation: 'After touching B, A and B share $+6$ μC, so A has $+3$ μC. Sharing that with neutral C leaves A with $+1.5$ μC. Splitting the total $+6$ μC three ways gives $+2$ μC, but A never touches both at once.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccl-ent-1b',
    question: 'A rod carrying excess electrons touches a neutral, isolated metal sphere and is then taken away. What is the state of the sphere afterward?',
    options: [
      'Positively charged, by induction',
      'Negatively charged',
      'Neutral, since charge is conserved',
      'Charged only on its inside surface',
    ],
    correctIndex: 1,
    explanation: 'On contact, some excess electrons flow from the rod onto the conductor and stay there, so the sphere is left negatively charged, spread over its outer surface. Charge is conserved: the rod lost what the sphere gained.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccl-ent-2a',
    question: 'Charges of $+4.0$ μC and $-5.0$ μC are $0.10$ m apart. What is the magnitude of the force between them? (Use $k = 9.0 \\times 10^9$ N$\\cdot$m$^2$/C$^2$.)',
    options: ['$1.8$ N', '$180$ N', '$18$ N', '$0.18$ N'],
    correctIndex: 2,
    explanation: '$F = k|q_1q_2|/r^2 = (9.0 \\times 10^9)(20 \\times 10^{-12})/(0.010) = 18$ N, attractive. Dividing by $r$ instead of $r^2$ gives $1.8$ N.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccl-ent-2b',
    question: 'Two point charges exert a force $F$ on each other. One charge is tripled and the distance between them is doubled. What is the new force?',
    options: ['$1.5F$', '$12F$', '$6F$', '$0.75F$'],
    correctIndex: 3,
    explanation: '$F \\propto q_1q_2/r^2$: tripling one charge gives $3\\times$ and doubling $r$ gives $\\frac{1}{4}$, so the force is $\\frac{3}{4}F = 0.75F$. The value $1.5F$ treats the force as falling off like $1/r$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccl-ent-3a',
    question: 'A charge $+q$ is at $x = 0$ and a charge $-4q$ is at $x = d$. Where on the $x$-axis is the net electric field zero?',
    options: ['$x = d/3$', '$x = -d$', '$x = -d/3$', '$x = 2d$'],
    correctIndex: 1,
    explanation: 'Between opposite charges the fields point the same way, so the zero must lie outside, nearer the smaller charge: $\\frac{kq}{x^2} = \\frac{4kq}{(x + d)^2}$ gives $x + d = 2x$, so the point is $d$ to the left of $+q$, at $x = -d$. The value $d/3$ is where it would be for two like charges.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccl-ent-3b',
    question: 'Equal charges $+q$ sit at $(0, d)$ and $(d, 0)$. What is the magnitude of the net electric field at the origin?',
    options: ['$\\sqrt{2}\\,kq/d^2$', '$2kq/d^2$', '$kq/d^2$', '$kq/(2d^2)$'],
    correctIndex: 0,
    explanation: 'Each charge gives a field of $kq/d^2$ at the origin, one along $-y$ and one along $-x$. These are perpendicular, so the net field is $\\sqrt{2}\\,kq/d^2$. Adding them as scalars gives $2kq/d^2$.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccl-ent-4a',
    question: 'A $-2.0$ μC charge placed at a point feels a force of $0.060$ N directed east. What is the electric field at that point?',
    options: [
      '$3.0 \\times 10^4$ N/C east',
      '$1.2 \\times 10^{-7}$ N/C west',
      '$3.3 \\times 10^{-5}$ N/C west',
      '$3.0 \\times 10^4$ N/C west',
    ],
    correctIndex: 3,
    explanation: '$\\vec{E} = \\vec{F}/q$. The magnitude is $0.060/(2.0 \\times 10^{-6}) = 3.0 \\times 10^4$ N/C, and dividing by a negative charge reverses the direction, so the field points west.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccl-ent-4b',
    question: 'An electron is released from rest in a uniform $500$ N/C field. How fast is it moving after traveling $2.0$ cm? ($e = 1.6 \\times 10^{-19}$ C, $m_e = 9.1 \\times 10^{-31}$ kg)',
    options: [
      '$4.4 \\times 10^4$ m/s',
      '$3.5 \\times 10^{12}$ m/s',
      '$1.9 \\times 10^6$ m/s',
      '$1.3 \\times 10^6$ m/s',
    ],
    correctIndex: 2,
    explanation: '$a = eE/m_e \\approx 8.8 \\times 10^{13}$ m/s$^2$, so $v = \\sqrt{2ad} = \\sqrt{3.5 \\times 10^{12}} \\approx 1.9 \\times 10^6$ m/s. Equivalently, $\\frac{1}{2}m_ev^2 = eEd$. Using a proton\'s mass gives $4.4 \\times 10^4$ m/s.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccl-ent-5a',
    question: 'A charge $+q$ sits near a charge $-3q$. Which statement about the electric field lines is correct?',
    options: [
      'Every line from $+q$ ends on $-3q$, with none from far away',
      'Every line from $+q$ ends on $-3q$, and more arrive from far away',
      'Lines from $+q$ cross those entering $-3q$',
      'Lines leave $-3q$ and end on $+q$',
    ],
    correctIndex: 1,
    explanation: 'The number of lines is proportional to charge, so three times as many lines end on $-3q$ as leave $+q$. The extra two-thirds must come in from infinity. Lines never cross, and they run from positive to negative.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccl-ent-5b',
    question: 'A solid metal sphere carries a net charge and is in electrostatic equilibrium. What can you say about the electric field?',
    options: [
      'Inside, zero; just outside, perpendicular to the surface',
      'Inside, zero; just outside, parallel to the surface',
      'Inside, zero except near the surface; outside, radial',
      'Inside, largest at the center; outside, radial',
    ],
    correctIndex: 0,
    explanation: 'Any field inside a conductor would push charges around, so at equilibrium $E = 0$ inside. A component along the surface would also move charges, so just outside the field must be perpendicular to the surface.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccl-ent-6a',
    question: 'A charge $+q$ is at $x = 0$ and a charge $+9q$ is at $x = 4d$. Where between them would a small test charge feel no net force?',
    options: ['$x = 3d$', '$x = 2d$', '$x = 0.4d$', '$x = d$'],
    correctIndex: 3,
    explanation: 'Setting $\\frac{q}{x^2} = \\frac{9q}{(4d - x)^2}$ and taking square roots gives $4d - x = 3x$, so $x = d$, nearer the smaller charge. Forgetting the square root gives $0.4d$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccl-ent-6b',
    question: 'A charge $+q$ is at $(-a, 0)$ and a charge $-q$ is at $(a, 0)$. What is the magnitude of the electric field at the point $(0, a)$?',
    options: [
      '$\\frac{kq}{a^2}$',
      '$0$',
      '$\\frac{kq}{\\sqrt{2}\\,a^2}$',
      '$\\frac{\\sqrt{2}\\,kq}{a^2}$',
    ],
    correctIndex: 2,
    explanation: 'Each charge is $\\sqrt{2}\\,a$ away, so each field has magnitude $\\frac{kq}{2a^2}$ at $45°$. The $y$-components cancel and the $x$-components add: $2 \\cdot \\frac{kq}{2a^2}\\cos 45° = \\frac{kq}{\\sqrt{2}\\,a^2}$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccl-ent-7a',
    question: 'An electron enters the uniform $2000$ N/C field between two parallel plates, moving at $2.0 \\times 10^7$ m/s parallel to the plates. How far is it deflected while crossing the $5.0$ cm long plates? ($e = 1.6 \\times 10^{-19}$ C, $m_e = 9.1 \\times 10^{-31}$ kg)',
    options: ['$1.1$ mm', '$2.2$ mm', '$0.55$ mm', '$4.4$ mm'],
    correctIndex: 0,
    explanation: 'The crossing time is $0.050/(2.0 \\times 10^7) = 2.5 \\times 10^{-9}$ s and $a = eE/m_e \\approx 3.5 \\times 10^{14}$ m/s$^2$. So $y = \\frac{1}{2}at^2 \\approx 1.1 \\times 10^{-3}$ m; dropping the $\\frac{1}{2}$ gives $2.2$ mm.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pccl-ent-7b',
    question: 'A charged balloon is brought near a neutral wooden rod and the rod is attracted toward it. Why?',
    options: [
      'It gains charge of the opposite sign',
      'Gravity between them is strengthened by charge',
      'Neutral objects attract only positive charges',
      'The rod becomes polarized',
    ],
    correctIndex: 3,
    explanation: 'The balloon\'s field slightly separates charge in the rod, pulling opposite charge closer and pushing like charge away. Because force falls off with distance, the attraction to the nearer charge wins.',
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
