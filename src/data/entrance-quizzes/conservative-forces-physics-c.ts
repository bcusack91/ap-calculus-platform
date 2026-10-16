/**
 * Entrance Quiz — AP Physics C: Mechanics, Conservative Forces & Energy
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Conservative vs Non-Conservative',
  'Potential Energy Functions',
  'F = −dU/dx',
  'Energy Diagrams & Equilibrium',
  'Path Independence & Work',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pccf-ent-1a',
    question: 'A person lifts a $10$ kg box from the floor onto a shelf $1.5$ m high, starting and ending at rest. How much work do the person and gravity each do on the box? (Use $g = 10$ m/s$^2$.)',
    options: [
      'Person $+150$ J, gravity $+150$ J',
      'Person $+150$ J, gravity $-150$ J',
      'Person $0$ J, gravity $0$ J',
      'Person $+300$ J, gravity $-150$ J',
    ],
    correctIndex: 1,
    explanation: 'Gravity is conservative and does $-mg\\Delta h = -150$ J. Since $\\Delta K = 0$, the person\'s (non-conservative) work must be $W_{nc} = \\Delta K + \\Delta U = +150$ J.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccf-ent-1b',
    question: 'A force does $12$ J of work on an object moving from point A to point B along one route, and $7$ J along a different route between the same points. What can you conclude?',
    options: [
      'The force is non-conservative',
      'The force is conservative, with $\\Delta U = -12$ J',
      'The force is conservative, with $\\Delta U = -7$ J',
      'The potential energy at B is $5$ J above A',
    ],
    correctIndex: 0,
    explanation: 'A conservative force does the same work along every path between two points. Different work on different routes means no potential energy function exists for this force.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccf-ent-2a',
    question: 'A conservative force along the $x$-axis is $F(x) = 6x^2 - 4$ (newtons, meters). Taking $U(0) = 0$, what is its potential energy function?',
    options: ['$U(x) = 2x^3 - 4x$', '$U(x) = -12x$', '$U(x) = -2x^3 + 4x$', '$U(x) = -2x^3 + 4$'],
    correctIndex: 2,
    explanation: '$U(x) = -\\int_0^x (6x\'^2 - 4)\\,dx\' = -(2x^3 - 4x) = -2x^3 + 4x$. Check: $-dU/dx = 6x^2 - 4$. Leaving off the minus sign gives $2x^3 - 4x$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccf-ent-2b',
    question: 'A repulsive central force has magnitude $F(r) = k/r^3$, directed outward. Taking $U = 0$ at $r = \\infty$, what is $U(r)$?',
    options: ['$-\\frac{k}{2r^2}$', '$\\frac{3k}{r^{4}}$', '$\\frac{k}{2}\\ln r$', '$\\frac{k}{2r^2}$'],
    correctIndex: 3,
    explanation: '$U(r) = -\\int_\\infty^r \\frac{k}{r\'^3}\\,dr\' = \\frac{k}{2r^2}$. It is positive and falls off with distance, so the force pushes outward toward lower $U$, as a repulsive force should.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccf-ent-3a',
    question: 'A particle has $U(x) = 8/x + 2x$ (joules, meters) for $x > 0$. What force acts on it at $x = 1$ m?',
    options: ['$-6$ N', '$6$ N', '$10$ N', '$-10$ N'],
    correctIndex: 1,
    explanation: '$F = -dU/dx = -(-8/x^2 + 2) = 8/x^2 - 2$, which is $6$ N at $x = 1$ m. The value $10$ is $U(1)$, an energy, not a force.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccf-ent-3b',
    question: 'A particle moves in the potential $U(x) = U_0 e^{-x^2/a^2}$, a smooth hill centered on $x = 0$. Where is the force on it largest in magnitude?',
    options: ['$x = \\pm a/\\sqrt{2}$', '$x = 0$', '$x = \\pm a$', '$x = \\pm 2a$'],
    correctIndex: 0,
    explanation: '$|F| = |dU/dx|$ is greatest where the slope is steepest, which is where $d^2U/dx^2 = 0$. Here $U\'\' \\propto (4x^2/a^2 - 2)$, which vanishes at $x = \\pm a/\\sqrt{2}$. At $x = 0$ the slope, and so the force, is zero.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccf-ent-4a',
    question: 'A $0.50$ kg particle moves in $U(x) = 3x^2$ (joules, meters) with total mechanical energy $12$ J. What is its speed at $x = 1$ m?',
    options: ['$4.2$ m/s', '$6.9$ m/s', '$6.0$ m/s', '$3.0$ m/s'],
    correctIndex: 2,
    explanation: 'The kinetic energy is the gap $E - U = 12 - 3 = 9$ J, so $v = \\sqrt{2(9)/0.50} = 6.0$ m/s. Using all $12$ J as kinetic energy gives $6.9$ m/s.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccf-ent-4b',
    question: 'A particle in the potential $U(x) = 4x^2 - x^4$ (joules, meters) passes $x = 0$ moving toward $+x$ with $5$ J of kinetic energy. What happens next?',
    options: [
      'It oscillates between the two barrier tops',
      'It stops at the top of the barrier and stays',
      'It oscillates between points where $U = 5$ J',
      'It escapes past the barrier',
    ],
    correctIndex: 3,
    explanation: 'The barrier tops are where $dU/dx = 8x - 4x^3 = 0$, at $x = \\pm\\sqrt{2}$ m, with $U = 8 - 4 = 4$ J. With $5$ J available, the particle clears the barrier and keeps going.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccf-ent-5a',
    question: 'A constant force $\\vec{F} = (2\\hat{x} - 5\\hat{y})$ N acts on a particle that travels along a curved path from $(1, 2)$ m to $(4, -1)$ m. How much work does the force do?',
    options: ['$21$ J', '$-9$ J', '$23$ J', '$6$ J'],
    correctIndex: 0,
    explanation: 'For a constant force the path does not matter: $W = \\vec{F}\\cdot\\Delta\\vec{r} = (2)(3) + (-5)(-3) = 21$ J. Dropping the sign of $\\Delta y$ gives $-9$ J.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccf-ent-5b',
    question: 'A $0.50$ kg block hangs from a vertical spring ($k = 50$ N/m) and is released from rest with the spring at its natural length. How far does the block drop before momentarily stopping? (Use $g = 10$ m/s$^2$.)',
    options: ['$0.10$ m', '$0.20$ m', '$0.40$ m', '$0.14$ m'],
    correctIndex: 1,
    explanation: 'At the lowest point $K = 0$, so the gravitational energy lost equals the spring energy gained: $mgy = \\frac{1}{2}ky^2$, giving $y = 2mg/k = 0.20$ m. The value $0.10$ m is the equilibrium stretch.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccf-ent-6a',
    question: 'A $0.20$ kg ball is thrown straight up at $20$ m/s and rises only $15$ m. How much work did air resistance do on it during the climb? (Use $g = 10$ m/s$^2$.)',
    options: ['$10$ J', '$30$ J', '$-10$ J', '$70$ J'],
    correctIndex: 2,
    explanation: '$W_{nc} = \\Delta K + \\Delta U = (0 - 40) + (0.20)(10)(15) = -40 + 30 = -10$ J. Air resistance removed $10$ J of mechanical energy.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccf-ent-6b',
    question: 'A spring ($k = 500$ N/m) compressed $0.20$ m launches a $1.0$ kg block up a frictionless $37°$ incline. How far along the incline does the block travel? (Use $g = 10$ m/s$^2$, $\\sin 37° = 0.6$.)',
    options: ['$1.00$ m', '$3.33$ m', '$1.25$ m', '$1.67$ m'],
    correctIndex: 3,
    explanation: 'The $10$ J of spring energy becomes $mgd\\sin\\theta = 6d$ J, so $d \\approx 1.67$ m. The value $1.00$ m is the height gained, not the distance along the slope.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccf-ent-7a',
    question: 'A planet has the same average density as Earth but twice Earth\'s radius. How does its escape speed compare with Earth\'s, $v_E$?',
    options: ['$2v_E$', '$\\sqrt{2}\\,v_E$', '$2\\sqrt{2}\\,v_E$', '$v_E/\\sqrt{2}$'],
    correctIndex: 0,
    explanation: 'Setting $\\frac{1}{2}mv^2 = GMm/R$ gives $v = \\sqrt{2GM/R}$. With equal density, $M \\propto R^3$, so $v \\propto \\sqrt{R^2} = R$ and the escape speed doubles.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pccf-ent-7b',
    question: 'A $50$ kg jumper steps off a bridge on a bungee cord with natural length $15$ m that acts as a spring with $k = 200$ N/m once taut. How far does the jumper fall before stopping? (Use $g = 10$ m/s$^2$.)',
    options: ['$11.5$ m', '$26.5$ m', '$23.7$ m', '$17.5$ m'],
    correctIndex: 1,
    explanation: 'With stretch $x$, $mg(15 + x) = \\frac{1}{2}kx^2$, so $x^2 - 5x - 75 = 0$ and $x \\approx 11.5$ m. The total fall is $15 + 11.5 = 26.5$ m.',
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
