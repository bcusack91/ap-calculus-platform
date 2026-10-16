/**
 * Entrance Quiz — AP Physics C: Mechanics, Variable Acceleration
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Acceleration as a Function of Time',
  'v(t) from Integration',
  'x(t) from Double Integration',
  'a(v) & Separation of Variables',
  'a(x) & Energy Methods',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcva-ent-1a',
    question: 'A particle has $a(t) = 6t - 2$ m/s$^2$ and $v(0) = 4$ m/s. What is its velocity at $t = 3$ s?',
    options: ['$21$ m/s', '$25$ m/s', '$16$ m/s', '$29$ m/s'],
    correctIndex: 1,
    explanation: '$v(t) = 4 + \\int_0^t (6t\' - 2)\\,dt\' = 4 + 3t^2 - 2t$, so $v(3) = 4 + 27 - 6 = 25$ m/s. Leaving out $v(0)$ gives $21$ m/s, and $16$ m/s is the acceleration at $3$ s.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcva-ent-1b',
    question: 'A cart moving at $v_0$ is pushed by a force that fades so that $a(t) = a_0 e^{-t/\\tau}$. What speed does the cart approach after a long time?',
    options: ['$v_0 - a_0\\tau$', '$v_0 + a_0/\\tau$', '$v_0 + a_0\\tau$', '$v_0 + a_0\\tau^2$'],
    correctIndex: 2,
    explanation: 'Integrating gives $v(t) = v_0 + a_0\\tau(1 - e^{-t/\\tau})$, which approaches $v_0 + a_0\\tau$. The total velocity gained equals the area under the $a$-$t$ curve, $a_0\\tau$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcva-ent-2a',
    question: 'A particle starts from rest with $a(t) = 12 - 3t^2$ m/s$^2$ for $t \\ge 0$. What is its maximum velocity?',
    options: ['$16$ m/s', '$24$ m/s', '$12$ m/s', '$32$ m/s'],
    correctIndex: 0,
    explanation: 'Velocity peaks when $a = 0$, at $t = 2$ s. Then $v(2) = \\int_0^2 (12 - 3t^2)\\,dt = 24 - 8 = 16$ m/s.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcva-ent-2b',
    question: 'A particle has $v(0) = -4$ m/s. Its acceleration is $6$ m/s$^2$ from $t = 0$ to $t = 2$ s, then decreases linearly to zero at $t = 5$ s. What is its velocity at $t = 5$ s?',
    options: ['$21$ m/s', '$26$ m/s', '$25$ m/s', '$17$ m/s'],
    correctIndex: 3,
    explanation: 'The area under the $a$-$t$ graph is a rectangle ($6 \\times 2 = 12$) plus a triangle ($\\frac{1}{2} \\times 3 \\times 6 = 9$), so $\\Delta v = 21$ m/s and $v(5) = -4 + 21 = 17$ m/s.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcva-ent-3a',
    question: 'A particle has $a(t) = 6t$ m/s$^2$, $v(0) = -3$ m/s, and $x(0) = 0$. At what time $t > 0$ does it first return to the origin?',
    options: ['$1.00$ s', '$3.00$ s', '$1.73$ s', '$0.58$ s'],
    correctIndex: 2,
    explanation: 'Integrating twice gives $x(t) = t^3 - 3t$, which is zero at $t = \\sqrt{3} \\approx 1.73$ s. At $1.00$ s the particle is only momentarily at rest, at $x = -2$ m.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcva-ent-3b',
    question: 'A particle has $a(t) = -16\\cos(4t)$ m/s$^2$, $v(0) = 0$, and $x(0) = 1$ m. What is $x(t)$?',
    options: ['$x = 1 + \\cos(4t)$', '$x = \\cos(4t)$', '$x = 1 - \\cos(4t)$', '$x = 1 + \\sin(4t)$'],
    correctIndex: 1,
    explanation: 'First $v = -4\\sin(4t)$, which satisfies $v(0) = 0$. Then $x = \\cos(4t) + C$, and $x(0) = 1$ forces $C = 0$, so $x = \\cos(4t)$.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcva-ent-4a',
    question: 'A block sliding on a viscous film has $a = -bv$ with $b = 0.5$ s$^{-1}$. How far does it travel while slowing from $6$ m/s to $2$ m/s?',
    options: ['$12$ m', '$32$ m', '$16$ m', '$8$ m'],
    correctIndex: 3,
    explanation: 'With $a = v\\,dv/dx = -bv$, $dv/dx = -b$, so $\\Delta x = (6 - 2)/0.5 = 8$ m. The value $12$ m is the full distance to come to rest.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcva-ent-4b',
    question: 'A $2$ kg object is released from rest and falls with a drag force $-kv$, where $k = 0.5$ kg/s. What is its speed $4$ s after release? (Use $g = 10$ m/s$^2$.)',
    options: ['$25.3$ m/s', '$14.7$ m/s', '$40.0$ m/s', '$20.0$ m/s'],
    correctIndex: 0,
    explanation: 'Here $v_T = mg/k = 40$ m/s and $\\tau = m/k = 4$ s, so $v(4) = 40(1 - e^{-1}) \\approx 25.3$ m/s. The value $14.7$ m/s is $40e^{-1}$, the part still missing.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcva-ent-5a',
    question: 'A particle with $a(x) = 2x$ (SI units) is at rest at $x = 1$ m. What is its speed at $x = 3$ m?',
    options: ['$2\\sqrt{2}$ m/s', '$3\\sqrt{2}$ m/s', '$4$ m/s', '$\\sqrt{6}$ m/s'],
    correctIndex: 2,
    explanation: 'Using $v\\,dv = a\\,dx$: $v^2 = 2\\int_1^3 2x\\,dx = 2(9 - 1) = 16$, so $v = 4$ m/s. Dropping the lower limit gives $3\\sqrt{2}$ m/s.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcva-ent-5b',
    question: 'A probe is launched straight up from the surface of an airless planet (mass $M$, radius $R$) at speed $\\sqrt{GM/R}$. Using $a = -GM/r^2$, what is the probe\'s greatest distance from the planet\'s center?',
    options: ['$\\frac{3R}{2}$', '$2R$', '$\\sqrt{2}\\,R$', '$\\frac{4R}{3}$'],
    correctIndex: 1,
    explanation: '$v^2 = v_0^2 - 2GM(1/R - 1/r)$. Setting $v = 0$ with $v_0^2 = GM/R$ gives $2GM/r = GM/R$, so $r = 2R$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcva-ent-6a',
    question: 'A bead starts from rest at $x = 0$ with $a(x) = 4 - x^2$ (SI units). What is its maximum speed?',
    options: ['$2.3$ m/s', '$4.0$ m/s', '$4.6$ m/s', '$3.3$ m/s'],
    correctIndex: 3,
    explanation: 'Speed is greatest where $a = 0$, at $x = 2$ m. Then $v^2 = 2\\int_0^2 (4 - x^2)\\,dx = 2(8 - 8/3) = 32/3$, so $v \\approx 3.3$ m/s.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcva-ent-6b',
    question: 'A $400$ kg boat\'s engine pushes with $600$ N against water drag $-bv$, $b = 40$ kg/s. Once the boat is at terminal speed, the engine shuts off. About how far does the boat coast?',
    options: ['$150$ m', '$15$ m', '$75$ m', '$95$ m'],
    correctIndex: 0,
    explanation: 'Terminal speed is $F_0/b = 15$ m/s. While coasting, $dv/dx = -b/m = -0.1$ m$^{-1}$, so the boat covers $15/0.1 = 150$ m before stopping.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcva-ent-7a',
    question: 'An object of mass $m$ starts from rest under a net force $F_0 - kv$. For $t \\gg m/k$, its position is best approximated by:',
    options: [
      '$\\frac{F_0}{k}t$',
      '$\\frac{F_0}{k}\\left(t - \\frac{m}{k}\\right)$',
      '$\\frac{F_0}{2m}t^2$',
      '$\\frac{F_0}{k}(t - \\frac{k}{m})$',
    ],
    correctIndex: 1,
    explanation: 'Integrating $v = (F_0/k)(1 - e^{-kt/m})$ gives $x = (F_0/k)[t - (m/k)(1 - e^{-kt/m})]$. Once the exponential dies out, the object moves at $F_0/k$ but lags $F_0 m/k^2$ behind an object that had that speed from the start.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcva-ent-7b',
    question: 'A $0.5$ kg ball falling with linear drag reaches $63\\%$ of its terminal speed $2.0$ s after release from rest. What is the drag constant $k$?',
    options: ['$0.50$ kg/s', '$1.00$ kg/s', '$4.00$ kg/s', '$0.25$ kg/s'],
    correctIndex: 3,
    explanation: 'Reaching $1 - e^{-1} \\approx 63\\%$ of $v_T$ takes one time constant, so $m/k = 2.0$ s and $k = 0.5/2.0 = 0.25$ kg/s.',
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
