/**
 * Entrance Quiz — AP Physics C: Mechanics, Oscillations
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Simple Harmonic Motion',
  'Kinematics of SHM',
  'Pendulums',
  'Restoring Forces, Spring Combinations, and Vertical Springs',
  'Natural Frequency, Resonance, and SHM Graphs',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcosc-ent-1a',
    question: 'A block on a spring oscillates with amplitude $A$ and maximum speed $v_{\\max}$. What is its speed when it is at $x = A/3$?',
    options: [
      '$\\frac{2}{3}v_{\\max}$',
      '$\\frac{2\\sqrt{2}}{3}v_{\\max}$',
      '$\\frac{1}{3}v_{\\max}$',
      '$\\frac{8}{9}v_{\\max}$',
    ],
    correctIndex: 1,
    explanation: 'Energy gives $v = \\omega\\sqrt{A^2 - x^2} = \\omega A\\sqrt{1 - 1/9} = \\frac{2\\sqrt{2}}{3}v_{\\max}$. The value $\\frac{8}{9}v_{\\max}$ forgets the square root.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcosc-ent-1b',
    question: 'An object\'s position obeys $4\\dfrac{d^2x}{dt^2} + 36x = 0$ (SI units). What is the period of its motion?',
    options: ['$2.09$ s', '$0.70$ s', '$1.05$ s', '$0.33$ s'],
    correctIndex: 0,
    explanation: 'Rewriting as $\\ddot{x} = -9x$ gives $\\omega^2 = 9$, so $\\omega = 3$ rad/s and $T = 2\\pi/3 \\approx 2.09$ s. Treating $9$ as $\\omega$ gives $0.70$ s.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcosc-ent-2a',
    question: 'An oscillator\'s position is $x(t) = 0.05\\cos(10t + \\pi/3)$ (meters, seconds). What is its velocity at $t = 0$?',
    options: ['$0.43$ m/s', '$0.25$ m/s', '$-0.43$ m/s', '$0.50$ m/s'],
    correctIndex: 2,
    explanation: '$v = dx/dt = -0.5\\sin(10t + \\pi/3)$, so $v(0) = -0.5\\sin(60°) \\approx -0.43$ m/s. The value $0.50$ m/s is the maximum speed $A\\omega$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcosc-ent-2b',
    question: 'A tuning-fork prong vibrates in SHM with amplitude $0.040$ m at $5.0$ Hz. What is the magnitude of its maximum acceleration?',
    options: ['$1.26$ m/s$^2$', '$1.00$ m/s$^2$', '$6.28$ m/s$^2$', '$39.5$ m/s$^2$'],
    correctIndex: 3,
    explanation: '$\\omega = 2\\pi f = 10\\pi$ rad/s, so $a_{\\max} = A\\omega^2 = 0.040(10\\pi)^2 \\approx 39.5$ m/s$^2$. The value $1.26$ m/s$^2$ is $A\\omega$, the maximum speed in m/s.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcosc-ent-3a',
    question: 'A uniform rod $1.2$ m long swings as a pendulum from a pivot at one end. What is its period for small swings? (Use $g = 10$ m/s$^2$.)',
    options: ['$1.78$ s', '$2.18$ s', '$1.54$ s', '$0.89$ s'],
    correctIndex: 0,
    explanation: 'For a physical pendulum, $T = 2\\pi\\sqrt{I/(mgd)}$ with $I = \\frac{1}{3}mL^2$ and $d = L/2$, so $T = 2\\pi\\sqrt{2L/(3g)} = 2\\pi\\sqrt{0.08} \\approx 1.78$ s. Treating it as a simple pendulum of length $1.2$ m gives $2.18$ s.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcosc-ent-3b',
    question: 'A pendulum clock runs slow: its pendulum takes slightly too long per swing. How can it be corrected?',
    options: [
      'Lengthen it, which shortens its period',
      'Shorten it, which shortens its period',
      'Add mass to the bob, which shortens its period',
      'Swing it wider, which shortens its period',
    ],
    correctIndex: 1,
    explanation: 'For small swings $T = 2\\pi\\sqrt{L/g}$, which depends on length but not on mass or amplitude. Shortening the pendulum reduces the period.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcosc-ent-4a',
    question: 'A $1.5$ kg particle feels a net force $F(x) = 18 - 6x$ (newtons, meters). It is released from rest at $x = 5$ m. What is its maximum speed?',
    options: ['$10.0$ m/s', '$6.0$ m/s', '$4.0$ m/s', '$2.0$ m/s'],
    correctIndex: 2,
    explanation: 'Since $F = -6(x - 3)$, the motion is SHM about $x = 3$ m with $k = 6$ N/m and $\\omega = \\sqrt{6/1.5} = 2$ rad/s. Released $2$ m from equilibrium, $v_{\\max} = A\\omega = 4.0$ m/s.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcosc-ent-4b',
    question: 'A block hanging from a spring stretches it $0.10$ m at equilibrium. If the block is pulled down and released, what is its period? (Use $g = 10$ m/s$^2$.)',
    options: ['$0.10$ s', '$62.8$ s', '$0.89$ s', '$0.63$ s'],
    correctIndex: 3,
    explanation: 'At equilibrium $k\\Delta y = mg$, so $m/k = \\Delta y/g$ and $T = 2\\pi\\sqrt{\\Delta y/g} = 2\\pi\\sqrt{0.01} \\approx 0.63$ s. Gravity sets the center of the oscillation but not the period.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcosc-ent-5a',
    question: 'An $x$-$t$ graph of an oscillator shows $x = 0$ at $t = 0$ with negative slope, reaching its first minimum of $-4$ cm at $t = 0.5$ s. Which equation matches the graph?',
    options: [
      '$x = -4\\sin(\\pi t)$ cm',
      '$x = 4\\sin(\\pi t)$ cm',
      '$x = -4\\cos(\\pi t)$ cm',
      '$x = -4\\sin(2\\pi t)$ cm',
    ],
    correctIndex: 0,
    explanation: 'Equilibrium to the first extreme is a quarter cycle, so $T = 2.0$ s and $\\omega = \\pi$ rad/s. Starting at zero and heading negative is $-\\sin$, giving $x = -4\\sin(\\pi t)$ cm.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcosc-ent-5b',
    question: 'A singer can shatter a wine glass with a loud, sustained note, but only at one particular pitch. Why that pitch?',
    options: [
      'Higher pitches carry more energy per second than lower ones',
      'It matches the glass\'s natural frequency',
      'That pitch is loud enough to exceed the glass\'s strength',
      'Only that pitch can travel through the glass walls',
    ],
    correctIndex: 1,
    explanation: 'This is resonance: a periodic push at the system\'s natural frequency stays in step with the motion and adds energy every cycle, so the amplitude grows until the glass breaks.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcosc-ent-6a',
    question: 'A $2.0$ kg block on a spring ($k = 50$ N/m) is released from rest at $x = A$. How long does it take to first reach $x = A/2$?',
    options: ['$0.31$ s', '$0.10$ s', '$0.21$ s', '$0.42$ s'],
    correctIndex: 2,
    explanation: 'With $\\omega = \\sqrt{50/2.0} = 5$ rad/s, $x = A\\cos(5t)$. Setting $\\cos(5t) = 1/2$ gives $5t = \\pi/3$, so $t \\approx 0.21$ s. The value $0.31$ s is a quarter period, when the block reaches $x = 0$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcosc-ent-6b',
    question: 'A block oscillates on a horizontal spring with amplitude $A$. At what positions is its kinetic energy equal to the spring\'s potential energy?',
    options: ['$x = \\pm A/2$', '$x = \\pm A/4$', '$x = 0$', '$x = \\pm A/\\sqrt{2}$'],
    correctIndex: 3,
    explanation: 'If $K = U$, each is half of $E = \\frac{1}{2}kA^2$, so $\\frac{1}{2}kx^2 = \\frac{1}{4}kA^2$ and $x = \\pm A/\\sqrt{2}$. At $x = \\pm A/2$ the potential energy is only one quarter of the total.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcosc-ent-7a',
    question: 'A $0.50$ kg block on a spring ($k = 32$ N/m) is at $x = 0$ moving at $-0.80$ m/s when $t = 0$. Which equation gives its position?',
    options: [
      '$x = -0.1\\sin(8t)$',
      '$x = 0.1\\sin(8t)$',
      '$x = 0.1\\cos(8t)$',
      '$x = 0.8\\sin(8t)$',
    ],
    correctIndex: 0,
    explanation: '$\\omega = \\sqrt{32/0.50} = 8$ rad/s and $A = v_{\\max}/\\omega = 0.1$ m. Starting at equilibrium moving in $-x$ means $x = -0.1\\sin(8t)$; check: $v(0) = -0.8$ m/s.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcosc-ent-7b',
    question: 'A mass-spring oscillator is taken to the Moon, where $g$ is $1/6$ of Earth\'s. How does its period on the Moon compare with its period on Earth?',
    options: [
      'It is $\\sqrt{6}$ times longer than on Earth',
      'It is the same as on Earth',
      'It is $6$ times longer than on Earth',
      'It is $\\sqrt{6}$ times shorter than on Earth',
    ],
    correctIndex: 1,
    explanation: 'The period $T = 2\\pi\\sqrt{m/k}$ involves no $g$; gravity only shifts the equilibrium of a vertical spring. A pendulum, by contrast, would slow by $\\sqrt{6}$.',
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
