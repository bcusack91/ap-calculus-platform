/**
 * Entrance Quiz — AP Physics C: Mechanics, Momentum & Impulse
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Linear Momentum',
  'Impulse',
  'Collisions in 1D',
  'Collisions in 2D',
  'Center of Mass',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcmi-ent-1a',
    question: 'A $4$ kg particle moves along the $x$-axis with $x(t) = 2t^3 - t^2$ (meters, seconds). Using $F = dp/dt$, what net force acts on it at $t = 1$ s?',
    options: ['$40$ N', '$16$ N', '$10$ N', '$48$ N'],
    correctIndex: 0,
    explanation: '$p = m\\,dx/dt = 4(6t^2 - 2t)$, so $F = dp/dt = 4(12t - 2) = 40$ N at $t = 1$ s. The value $16$ is the momentum at that instant, in kg$\\cdot$m/s.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcmi-ent-1b',
    question: 'Object A has mass $m$ and momentum $p$. Object B has mass $4m$ and the same kinetic energy as A. What is B\'s momentum?',
    options: ['$p/2$', '$2p$', '$\\sqrt{2}\\,p$', '$p/4$'],
    correctIndex: 1,
    explanation: 'Since $K = p^2/(2m)$, equal kinetic energies give $p \\propto \\sqrt{m}$. Four times the mass means twice the momentum, even though B moves at half A\'s speed.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcmi-ent-2a',
    question: 'A $0.30$ kg ball moving at $-2$ m/s is struck by a force $F(t) = 900t - 9000t^2$ N acting from $t = 0$ to $t = 0.10$ s. What is its velocity afterward?',
    options: ['$5$ m/s', '$7$ m/s', '$3$ m/s', '$-7$ m/s'],
    correctIndex: 2,
    explanation: 'The impulse is $\\int_0^{0.10} (900t - 9000t^2)\\,dt = 4.5 - 3.0 = 1.5$ N$\\cdot$s, so $\\Delta v = 1.5/0.30 = 5$ m/s and $v_f = -2 + 5 = 3$ m/s. Answering $5$ m/s ignores the initial velocity.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcmi-ent-2b',
    question: 'Two identical eggs are dropped from the same height. One lands on concrete and breaks; the other lands on a foam pad and survives. Which statement explains the difference?',
    options: [
      'The foam gives a smaller impulse',
      'The concrete gives a smaller momentum change',
      'The average force is equal, but the foam contact lasts longer',
      'The impulse is equal, but the foam spreads it over a longer time',
    ],
    correctIndex: 3,
    explanation: 'Both eggs go from the same speed to rest, so they receive the same impulse $\\Delta p$. Since $J = \\bar{F}\\Delta t$, the longer stopping time on foam means a smaller average force.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcmi-ent-3a',
    question: 'A $1$ kg cart moving at $6$ m/s collides elastically and head-on with a $2$ kg cart at rest. What is the $1$ kg cart\'s velocity afterward?',
    options: ['$-2$ m/s', '$2$ m/s', '$0$ m/s', '$4$ m/s'],
    correctIndex: 0,
    explanation: '$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}v_{1i} = \\frac{1 - 2}{3}(6) = -2$ m/s: the lighter cart rebounds. The $2$ kg cart leaves at $4$ m/s, and momentum checks: $-2 + 8 = 6$.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcmi-ent-3b',
    question: 'A cart of mass $m$ hits a cart of mass $3m$ at rest, and they stick together. What fraction of the original kinetic energy is lost?',
    options: ['$25\\%$', '$75\\%$', '$50\\%$', '$67\\%$'],
    correctIndex: 1,
    explanation: 'Momentum gives $v_f = v/4$. The final kinetic energy is $\\frac{1}{2}(4m)(v/4)^2 = \\frac{1}{4}\\cdot\\frac{1}{2}mv^2$, so $75\\%$ is lost.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcmi-ent-4a',
    question: 'A $1000$ kg car moving east at $20$ m/s collides with a $2000$ kg truck moving north at $10$ m/s, and they lock together. What is their velocity just after the crash?',
    options: [
      '$13.3$ m/s at $45°$ north of east',
      '$9.4$ m/s at $27°$ north of east',
      '$9.4$ m/s at $45°$ north of east',
      '$6.7$ m/s at $45°$ north of east',
    ],
    correctIndex: 2,
    explanation: 'Each component is conserved: $p_x = p_y = 20{,}000$ kg$\\cdot$m/s. The wreck moves at $45°$ north of east with speed $\\sqrt{2}(20{,}000)/3000 \\approx 9.4$ m/s.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcmi-ent-4b',
    question: 'A $6$ kg object at rest explodes into three $2$ kg pieces. One moves east at $3$ m/s and another moves north at $4$ m/s. How fast does the third piece move?',
    options: ['$10$ m/s', '$14$ m/s', '$25$ m/s', '$5$ m/s'],
    correctIndex: 3,
    explanation: 'The third piece must cancel momenta of $6$ kg$\\cdot$m/s east and $8$ kg$\\cdot$m/s north, so its momentum is $10$ kg$\\cdot$m/s and its speed is $10/2 = 5$ m/s. The value $10$ m/s forgets to divide by its mass.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcmi-ent-5a',
    question: 'A rod along the $x$-axis from $0$ to $L$ has linear density $\\lambda(x) = \\lambda_0 x^2/L^2$. Where is its center of mass?',
    options: ['$x = 3L/4$', '$x = 2L/3$', '$x = L/2$', '$x = L/3$'],
    correctIndex: 0,
    explanation: '$x_{cm} = \\int x\\,dm / \\int dm = \\int_0^L x^3\\,dx / \\int_0^L x^2\\,dx = (L^4/4)/(L^3/3) = 3L/4$. The value $2L/3$ applies to a density that grows linearly.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcmi-ent-5b',
    question: 'A $60$ kg person walks $4.0$ m from one end of a $40$ kg boat to the other on frictionless water. How far does the boat move relative to the water?',
    options: ['$1.6$ m', '$2.4$ m', '$4.0$ m', '$6.0$ m'],
    correctIndex: 1,
    explanation: 'The system\'s center of mass stays put, so $60\\,\\Delta x_p + 40\\,\\Delta x_b = 0$ with $\\Delta x_p - \\Delta x_b = 4.0$ m. Solving gives $\\Delta x_b = -2.4$ m, while the person moves $1.6$ m.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcmi-ent-6a',
    question: 'A $0.020$ kg bullet embeds in a $1.98$ kg block hanging on strings, and the block swings up $0.20$ m. What was the bullet\'s speed? (Use $g = 10$ m/s$^2$.)',
    options: ['$20$ m/s', '$2$ m/s', '$200$ m/s', '$4$ m/s'],
    correctIndex: 2,
    explanation: 'The swing gives $V = \\sqrt{2gh} = 2$ m/s just after impact. Momentum is conserved in the collision, so $v_0 = (2.00)(2)/0.020 = 200$ m/s. Using energy conservation through the collision gives $20$ m/s.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcmi-ent-6b',
    question: 'Gravel falls straight down onto a horizontal conveyor belt at $8.0$ kg/s while the belt moves at a constant $1.5$ m/s. What extra horizontal force must the motor supply?',
    options: ['$6$ N', '$0$ N', '$9$ N', '$12$ N'],
    correctIndex: 3,
    explanation: 'With constant belt speed, $F = dp/dt = v\\,dm/dt = (1.5)(8.0) = 12$ N. Using $F = ma$ gives zero, and basing the force on the gravel\'s kinetic-energy gain alone gives $6$ N.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcmi-ent-7a',
    question: 'A $0.25$ kg puck moving at $+4$ m/s feels a force $F(t) = -(300t - 1500t^2)$ N from $t = 0$ to $t = 0.20$ s. What is its velocity afterward?',
    options: ['$-4$ m/s', '$4$ m/s', '$-8$ m/s', '$0$ m/s'],
    correctIndex: 0,
    explanation: 'The impulse is $-[150t^2 - 500t^3]_0^{0.20} = -(6 - 4) = -2$ N$\\cdot$s, so $\\Delta v = -8$ m/s and $v_f = 4 - 8 = -4$ m/s.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcmi-ent-7b',
    question: 'A rubber ball and a clay ball of equal mass hit a wall at the same speed. The rubber ball bounces straight back at nearly the same speed; the clay ball sticks. Which one gives the wall the larger impulse?',
    options: [
      'The clay ball, since it stops completely',
      'Equal for both, since both stop at the wall',
      'The rebounding one, twice as much',
      'The clay ball, since its collision is inelastic',
    ],
    correctIndex: 2,
    explanation: 'The clay ball\'s momentum changes by $mv$, but the rubber ball\'s changes by about $2mv$ because its velocity reverses. By the third law, the wall receives the same impulse in each case as the ball, so the rubber ball delivers about twice as much.',
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
