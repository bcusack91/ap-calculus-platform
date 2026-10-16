/**
 * Entrance Quiz — AP Physics C: Mechanics, Work, Energy & Power
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Work as an Integral',
  'Kinetic Energy Theorem',
  'Potential Energy Functions',
  'Conservation of Energy',
  'Power',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcwe-ent-1a',
    question: 'A force $F(x) = 6x - x^2$ (newtons, $x$ in meters) acts along the $x$-axis. How much work does it do as an object moves from $x = 0$ to $x = 3$ m?',
    options: ['$9$ J', '$27$ J', '$18$ J', '$45$ J'],
    correctIndex: 2,
    explanation: '$W = \\int_0^3 (6x - x^2)\\,dx = [3x^2 - x^3/3]_0^3 = 27 - 9 = 18$ J. The value $9$ J multiplies the final force by $1$ m instead of integrating.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcwe-ent-1b',
    question: 'A spring of constant $k$ is stretched further, from extension $x_1$ to extension $x_2$. How much work does the spring force do on the object pulling it?',
    options: [
      '$-\\frac{1}{2}k(x_2^2 - x_1^2)$',
      '$-\\frac{1}{2}k(x_2 - x_1)^2$',
      '$\\frac{1}{2}k(x_2^2 - x_1^2)$',
      '$-k(x_2 - x_1)$',
    ],
    correctIndex: 0,
    explanation: '$W = \\int_{x_1}^{x_2} (-kx)\\,dx = -\\frac{1}{2}k(x_2^2 - x_1^2)$. It is negative because the spring force points opposite the stretch, and it is not $\\frac{1}{2}k(\\Delta x)^2$ because the force grows with $x$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcwe-ent-2a',
    question: 'A $2$ kg cart moving at $2$ m/s feels a net force of $8$ N along its motion for the first $3$ m; the force then decreases linearly to zero at $7$ m. What is the cart\'s speed at $7$ m?',
    options: ['$6.3$ m/s', '$6.6$ m/s', '$7.7$ m/s', '$4.7$ m/s'],
    correctIndex: 1,
    explanation: 'The area under the $F$-$x$ graph is $24 + 16 = 40$ J. Then $\\frac{1}{2}(2)v^2 = 4 + 40$, so $v = \\sqrt{44} \\approx 6.6$ m/s; leaving out the initial $4$ J gives $6.3$ m/s.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcwe-ent-2b',
    question: 'Two pucks, of mass $m$ and $4m$, start from rest on frictionless ice. Equal constant forces push each one through the same distance. Compared with the lighter puck, the heavier puck ends with:',
    options: [
      'Four times the kinetic energy',
      'A quarter of the speed',
      'Equal speed and equal kinetic energy',
      'The same kinetic energy but half the speed',
    ],
    correctIndex: 3,
    explanation: 'Equal forces over equal distances do equal work, so both gain the same kinetic energy. With four times the mass, $\\frac{1}{2}(4m)v^2 = \\frac{1}{2}mv_1^2$ gives half the speed.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcwe-ent-3a',
    question: 'A particle moves along $x$ with potential energy $U(x) = 2x^3 - 6x$ (joules, meters). Where are its equilibrium points, and are they stable?',
    options: [
      'Stable at $x = 1$ m, unstable at $x = -1$ m',
      'Stable at $x = -1$ m, unstable at $x = 1$ m',
      'Stable at both $x = 1$ m and $x = -1$ m',
      'Stable only at $x = 0$, where $U = 0$',
    ],
    correctIndex: 0,
    explanation: '$dU/dx = 6x^2 - 6 = 0$ at $x = \\pm 1$ m. Since $d^2U/dx^2 = 12x$, $U$ has a minimum (stable) at $x = 1$ m and a maximum (unstable) at $x = -1$ m.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcwe-ent-3b',
    question: 'A particle has potential energy $U(x) = 3x^2 - 2x^3$ (joules, meters). What force acts on it at $x = 2$ m?',
    options: ['$-12$ N', '$-36$ N', '$12$ N', '$-24$ N'],
    correctIndex: 2,
    explanation: '$F = -dU/dx = -(6x - 6x^2) = 6x^2 - 6x$, which is $24 - 12 = 12$ N at $x = 2$ m. Forgetting the minus sign in $F = -dU/dx$ gives $-12$ N.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcwe-ent-4a',
    question: 'A vertical spring ($k = 400$ N/m) is compressed $0.20$ m and launches a $0.10$ kg ball straight up. How high above its release point does the ball rise? (Use $g = 10$ m/s$^2$.)',
    options: ['$16$ m', '$8$ m', '$80$ m', '$40$ m'],
    correctIndex: 1,
    explanation: 'The spring stores $\\frac{1}{2}kx^2 = 8$ J, which all becomes $mgh$ at the top: $h = 8/(0.10 \\times 10) = 8$ m. Dropping the $\\frac{1}{2}$ gives $16$ m.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcwe-ent-4b',
    question: 'A $2$ kg block slides from rest down a curved track that drops $5$ m and reaches the bottom at $8$ m/s. How much work did friction do on the block? (Use $g = 10$ m/s$^2$.)',
    options: ['$36$ J', '$64$ J', '$100$ J', '$-36$ J'],
    correctIndex: 3,
    explanation: 'The block lost $mgh = 100$ J of potential energy but gained only $\\frac{1}{2}(2)(64) = 64$ J of kinetic energy. Friction did $W = 64 - 100 = -36$ J.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcwe-ent-5a',
    question: 'A constant net force of $6$ N acts on a $2$ kg object that starts from rest. What power does the force deliver at $t = 4$ s?',
    options: ['$72$ W', '$24$ W', '$36$ W', '$144$ W'],
    correctIndex: 0,
    explanation: 'At $4$ s, $v = at = 3 \\times 4 = 12$ m/s, so $P = Fv = 72$ W. The value $36$ W is the average power over the $4$ s, since the speed grows steadily.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcwe-ent-5b',
    question: 'A motor raises an elevator at constant speed. If the same load is raised at twice the constant speed, the motor\'s power output:',
    options: ['Quadruples', 'Stays the same', 'Doubles', 'Is cut in half'],
    correctIndex: 2,
    explanation: 'At constant speed the motor\'s force equals the weight in both cases, and $P = Fv$. Doubling $v$ with the same $F$ doubles the power.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcwe-ent-6a',
    question: 'A $2$ kg block is pressed against a spring ($k = 800$ N/m), compressing it $0.25$ m, on a floor with $\\mu_k = 0.40$. Released, it is pushed off and slides to a stop. How far from its release point does it stop? (Use $g = 10$ m/s$^2$.)',
    options: ['$6.25$ m', '$3.13$ m', '$2.88$ m', '$31.3$ m'],
    correctIndex: 1,
    explanation: 'Friction ($8$ N) acts over the whole path and must remove the $\\frac{1}{2}kx^2 = 25$ J stored in the spring: $d = 25/8 \\approx 3.13$ m. Subtracting the $0.25$ m of spring travel gives $2.88$ m, which measures from where the block leaves the spring.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcwe-ent-6b',
    question: 'A $2$ kg block slides from rest down a ramp $5$ m long that drops $3$ m, with $\\mu_k = 0.25$. What is its speed at the bottom? (Use $g = 10$ m/s$^2$.)',
    options: ['$7.7$ m/s', '$5.9$ m/s', '$4.5$ m/s', '$6.3$ m/s'],
    correctIndex: 3,
    explanation: 'The ramp has $\\cos\\theta = 0.8$, so friction is $0.25(20)(0.8) = 4$ N and removes $20$ J. Then $\\frac{1}{2}(2)v^2 = 60 - 20$, giving $v = \\sqrt{40} \\approx 6.3$ m/s.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcwe-ent-7a',
    question: 'On a graph of potential energy $U(x)$ for a conservative force, what gives the force at a point, and where along a bounded path is the particle moving fastest?',
    options: [
      'Minus the slope; fastest where $U$ is lowest',
      'The slope; fastest where $U$ is highest',
      'The area; fastest where $U$ is lowest',
      'Minus the slope; fastest where $U$ is zero',
    ],
    correctIndex: 0,
    explanation: 'Since $F = -dU/dx$, the force is the negative of the slope. With fixed total energy, $K = E - U$ is largest where $U$ is smallest.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcwe-ent-7b',
    question: 'A $3$ kg particle moves under the force $F(x) = -12x$ (newtons, meters) and passes $x = 0$ at $4$ m/s. How far from the origin does it get?',
    options: ['$1.4$ m', '$4.0$ m', '$2.0$ m', '$1.0$ m'],
    correctIndex: 2,
    explanation: 'The force does work $-\\int_0^x 12x\\,dx = -6x^2$, which must cancel the $24$ J of kinetic energy: $6x^2 = 24$, so $x = 2.0$ m.',
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
