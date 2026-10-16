/**
 * Entrance Quiz — AP Physics C: E&M, Magnetic Forces
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Lorentz Force',
  'Circular Motion in B Fields',
  'Mass Spectrometer',
  'Force on Current-Carrying Wire',
  'Moving Charges as Field Sources; Combined Fields',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcmf-ent-1a',
    question: 'An electron moves with $\\vec{v} = (3.0 \\times 10^5\\,\\hat{x})$ m/s through a field $\\vec{B} = 0.20\\,\\hat{y}$ T. What is the magnetic force on it? ($e = 1.6 \\times 10^{-19}$ C)',
    options: [
      '$9.6 \\times 10^{-15}$ N, along $-\\hat{z}$',
      '$9.6 \\times 10^{-15}$ N, along $+\\hat{z}$',
      '$9.6 \\times 10^{-15}$ N, along $-\\hat{y}$',
      '$4.8 \\times 10^{-15}$ N, along $-\\hat{z}$',
    ],
    correctIndex: 0,
    explanation: '$\\vec{v} \\times \\vec{B}$ points along $\\hat{x} \\times \\hat{y} = +\\hat{z}$, and the electron\'s negative charge reverses it: $\\vec{F} = (-e)(3.0 \\times 10^5)(0.20)\\hat{z} = -9.6 \\times 10^{-15}\\,\\hat{z}$ N. A magnetic force is never along $\\vec{B}$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcmf-ent-1b',
    question: 'A proton enters a uniform magnetic field at $2.0 \\times 10^6$ m/s, moving perpendicular to the field, and travels half a circle. What are its speed afterward and the work the field did on it?',
    options: [
      'More than $2.0 \\times 10^6$ m/s; positive work',
      '$2.0 \\times 10^6$ m/s; zero work',
      'Less than $2.0 \\times 10^6$ m/s; negative work',
      '$2.0 \\times 10^6$ m/s; negative, then positive work',
    ],
    correctIndex: 1,
    explanation: 'The magnetic force $q\\vec{v} \\times \\vec{B}$ is always perpendicular to the velocity, so $\\vec{F} \\cdot \\vec{v} = 0$ at every instant. It does no work and the speed never changes; only the direction does.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcmf-ent-2a',
    question: 'A proton moves at $4.0 \\times 10^6$ m/s perpendicular to a uniform $0.40$ T field. What is the radius of its circular path? ($m_p = 1.67 \\times 10^{-27}$ kg, $e = 1.6 \\times 10^{-19}$ C)',
    options: ['$20.9$ cm', '$5.2$ cm', '$10.4$ cm', '$1.04$ cm'],
    correctIndex: 2,
    explanation: 'The magnetic force supplies the centripetal force, $qvB = mv^2/r$, so $r = mv/(qB) = (6.68 \\times 10^{-21})/(6.4 \\times 10^{-20}) \\approx 0.104$ m. The value $20.9$ cm is the diameter.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcmf-ent-2b',
    question: 'Two protons circle in the same uniform magnetic field, one at speed $v$ and the other at $3v$. How do their periods of revolution compare?',
    options: [
      'The faster one\'s is 3 times longer',
      'The faster one\'s is 3 times shorter',
      'The faster one\'s is 9 times longer',
      'They are equal',
    ],
    correctIndex: 3,
    explanation: '$T = 2\\pi r/v$ with $r = mv/(qB)$, so $T = 2\\pi m/(qB)$, independent of speed. The faster proton moves on a circle three times larger and takes the same time to go around.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcmf-ent-3a',
    question: 'Singly charged ions of mass $20$ u and $22$ u leave a velocity selector at $2.0 \\times 10^5$ m/s and enter a $0.50$ T field, each completing a semicircle before hitting a detector. How far apart do they land? ($1$ u $= 1.66 \\times 10^{-27}$ kg, $e = 1.6 \\times 10^{-19}$ C)',
    options: ['$1.7$ cm', '$0.83$ cm', '$3.3$ cm', '$17$ cm'],
    correctIndex: 0,
    explanation: 'Each lands a diameter $2r = 2mv/(qB)$ from the entrance, so the separation is $2\\Delta m\\,v/(qB) = 2(3.32 \\times 10^{-27})(2.0 \\times 10^5)/(8.0 \\times 10^{-20}) \\approx 1.7$ cm. The difference in radii alone is $0.83$ cm.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcmf-ent-3b',
    question: 'Two ions of the same mass, one with charge $+e$ and one with $+2e$, are accelerated from rest through the same potential difference and then enter the same magnetic field. What is the ratio $r_{2e}/r_e$ of their path radii?',
    options: ['$\\frac{1}{2}$', '$\\frac{1}{\\sqrt{2}}$', '$\\sqrt{2}$', '$2$'],
    correctIndex: 1,
    explanation: 'From $qV = \\frac{1}{2}mv^2$, $v = \\sqrt{2qV/m}$, so $r = mv/(qB) = \\frac{1}{B}\\sqrt{2mV/q} \\propto 1/\\sqrt{q}$. Doubling the charge gives $r_{2e}/r_e = 1/\\sqrt{2}$. The value $\\frac{1}{2}$ ignores the extra speed the larger charge gains.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcmf-ent-4a',
    question: 'A straight wire along the $x$-axis from $x = 0$ to $x = 0.50$ m carries $4.0$ A in the $+x$ direction. The field there is $\\vec{B} = 0.60(x/0.50)^2\\,\\hat{z}$ T. What is the magnitude of the force on the wire?',
    options: ['$1.20$ N', '$0.60$ N', '$0.40$ N', '$0.20$ N'],
    correctIndex: 2,
    explanation: 'Each element feels $dF = IB(x)\\,dx$ (directed along $-\\hat{y}$), so $F = I\\int_0^L B_0(x/L)^2\\,dx = IB_0L/3 = (4.0)(0.60)(0.50)/3 = 0.40$ N. Using the largest field everywhere gives $1.20$ N.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcmf-ent-4b',
    question: 'A semicircular wire of radius $0.10$ m carries $5.0$ A in a uniform $0.40$ T field perpendicular to the plane of the semicircle. What is the magnitude of the net force on the wire?',
    options: ['$0.63$ N', '$0.20$ N', '$0$ N', '$0.40$ N'],
    correctIndex: 3,
    explanation: 'In a uniform field the force on a curved wire equals that on a straight wire between its endpoints, here the $0.20$ m diameter: $F = I(2R)B = (5.0)(0.20)(0.40) = 0.40$ N. Using the arc length $\\pi R$ gives $0.63$ N.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcmf-ent-5a',
    question: 'An electron at the origin moves in the $+x$ direction at $3.0 \\times 10^6$ m/s. What magnetic field does it produce at the point $(0,\\ 2.0 \\times 10^{-10}\\text{ m},\\ 0)$? (Use $\\mu_0/4\\pi = 10^{-7}$ T$\\cdot$m/A, $e = 1.6 \\times 10^{-19}$ C.)',
    options: [
      '$1.2$ T along $-\\hat{z}$',
      '$1.2$ T along $+\\hat{z}$',
      '$0.6$ T along $-\\hat{z}$',
      '$2.4$ T along $-\\hat{z}$',
    ],
    correctIndex: 0,
    explanation: '$B = \\frac{\\mu_0}{4\\pi}\\frac{|q|v}{r^2} = (10^{-7})(4.8 \\times 10^{-13})/(4.0 \\times 10^{-20}) = 1.2$ T. Here $\\vec{v} \\times \\hat{r}$ points along $\\hat{x} \\times \\hat{y} = +\\hat{z}$, and the negative charge reverses it to $-\\hat{z}$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcmf-ent-5b',
    question: 'A proton moves through a region with both an electric field and a magnetic field. Which of the forces on it can change its speed?',
    options: [
      'Only $q\\vec{v} \\times \\vec{B}$, since it grows with speed',
      'Only $q\\vec{E}$, since $q\\vec{v} \\times \\vec{B}$ is perpendicular to $\\vec{v}$',
      'Both, since each force acts on a moving charge',
      'Neither, since the fields are perpendicular',
    ],
    correctIndex: 1,
    explanation: 'The magnetic force is always perpendicular to the velocity and does no work. The electric force $q\\vec{E}$ can have a component along $\\vec{v}$, so any change in kinetic energy comes from the electric field.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcmf-ent-6a',
    question: 'A proton and a deuteron (same charge, twice the mass) enter the same uniform magnetic field, moving perpendicular to it with the same kinetic energy. What is the ratio $r_d/r_p$ of their path radii?',
    options: ['$2$', '$1$', '$\\sqrt{2}$', '$0.5$'],
    correctIndex: 2,
    explanation: '$r = mv/(qB) = \\sqrt{2mK}/(qB)$, so with equal $K$ and $q$, $r \\propto \\sqrt{m}$ and $r_d/r_p = \\sqrt{2}$. Equal speeds would instead give a ratio of $2$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcmf-ent-6b',
    question: 'A wire follows a winding path in the $xy$-plane from $(0, 0)$ to $(0.30, 0.40)$ m, carrying $2.0$ A through a uniform field $\\vec{B} = 0.50\\,\\hat{z}$ T. What is the magnitude of the net force on it?',
    options: ['$0.70$ N', '$0$ N', '$0.35$ N', '$0.50$ N'],
    correctIndex: 3,
    explanation: 'In a uniform field $\\vec{F} = I\\vec{L}_{\\text{net}} \\times \\vec{B}$, where $\\vec{L}_{\\text{net}}$ runs straight from start to end, $0.50$ m long and perpendicular to $\\vec{B}$. So $F = (2.0)(0.50)(0.50) = 0.50$ N.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcmf-ent-7a',
    question: 'A velocity selector is set so protons at speed $E/B$ pass straight through. An electron enters it at the same speed. What happens to the electron?',
    options: [
      'It bends toward the positive plate',
      'It goes undeflected',
      'It bends the way a proton\'s magnetic force would push',
      'It slows down and stops',
    ],
    correctIndex: 1,
    explanation: 'Reversing the charge reverses both the electric force $qE$ and the magnetic force $qvB$. They still balance when $v = E/B$, so any charge at that speed passes undeflected.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcmf-ent-7b',
    question: 'A ring of magnets keeps a proton beam on a circle of fixed radius. If the protons\' momentum is doubled, how must the magnetic field change to keep the same radius?',
    options: ['Increase by a factor of 4', 'Increase by a factor of $\\sqrt{2}$', 'Increase by a factor of 2', 'Stay the same'],
    correctIndex: 2,
    explanation: 'From $r = mv/(qB) = p/(qB)$, keeping $r$ fixed requires $B \\propto p$. Doubling the momentum means doubling the field.',
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
